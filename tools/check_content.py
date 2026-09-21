"""Dependency-free checks for this static website. Run: python tools/check_content.py."""
from pathlib import Path
from html.parser import HTMLParser
from collections import Counter
from urllib.parse import urlsplit, unquote
import json,re,sys
ROOT=Path(__file__).resolve().parents[1]
BAD=re.compile(r'[\u2190-\u21ff\u27f0-\u27ff\u2900-\u297f\u2600-\u27bf\U0001f000-\U0001faff\u2022\u25cf\u2013\u2014]')
class Page(HTMLParser):
 def __init__(self):
  super().__init__(convert_charrefs=True);self.ids=[];self.refs=[];self.h1=0;self.images=[];self.jsons=[];self.ld=False;self.buf=[];self.form=0;self.svg=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='h1':self.h1+=1
  if tag=='svg':self.svg+=1
  if tag=='form':self.form+=1
  if 'id' in a:self.ids.append(a['id'])
  if tag=='img':self.images.append(a)
  for key in ['href','src']:
   if key in a:self.refs.append(a[key])
  if tag=='script' and a.get('type')=='application/ld+json':self.ld=True;self.buf=[]
 def handle_endtag(self,tag):
  if tag=='script' and self.ld:self.jsons.append(''.join(self.buf));self.ld=False
 def handle_data(self,data):
  if self.ld:self.buf.append(data)
parsed={};errors=[]
for path in sorted(ROOT.glob('*.html')):
 text=path.read_text();p=Page();p.feed(text);parsed[path.name]=p
 if BAD.search(text):errors.append(f'{path.name}: decorative symbol or prohibited dash remains')
 if p.h1!=1:errors.append(f'{path.name}: expected one H1')
 if p.svg:errors.append(f'{path.name}: illustration SVG remains')
 if any(c>1 for c in Counter(p.ids).values()):errors.append(f'{path.name}: duplicate id')
 for data in p.jsons:
  try:json.loads(data)
  except json.JSONDecodeError:errors.append(f'{path.name}: invalid JSON-LD')
 for img in p.images:
  if img.get('src','').lstrip('/')!='assets/noah-lockup.png':errors.append(f'{path.name}: unexpected image {img.get("src")}')
  if not img.get('alt'):errors.append(f'{path.name}: missing logo alt text')
 if path.name!='404.html' and not p.jsons:errors.append(f'{path.name}: missing structured data')
for name,p in parsed.items():
 for ref in p.refs:
  url=urlsplit(ref)
  if url.scheme or url.netloc:continue
  target=url.path.lstrip('/') or name
  if not (ROOT/target).is_file():errors.append(f'{name}: missing local file {ref}')
  if url.fragment and target in parsed and unquote(url.fragment) not in parsed[target].ids:errors.append(f'{name}: missing anchor {ref}')
for path in ROOT.glob('*.css'):
 if BAD.search(path.read_text()):errors.append(f'{path.name}: decorative source character remains')
 for css in re.findall(r'@import\s+["\']([^"\']+)["\']',path.read_text()):
  if not (ROOT/css).exists():errors.append(f'{path.name}: missing CSS import {css}')
js=(ROOT/'site-shell.js').read_text()
if BAD.search(js) or '\u00d7' in js:errors.append('menu script contains a decorative glyph')
if any((ROOT/name).exists() for name in ['rest-1.js','rest-3.js','rest-3-base.js']):errors.append('legacy runtime copy scripts remain')
report={'pages':len(parsed),'h1':{n:p.h1 for n,p in parsed.items()},'forms':sum(p.form for p in parsed.values()),'errors':errors}
print(json.dumps(report,indent=2));sys.exit(1 if errors else 0)
