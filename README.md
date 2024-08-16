# A Chrome Extension for marketing assessments.

No options, no popup, just adds a strip to the top of every page with links to open the current page url in spyfu, siteliner, google rich-test, schema validator, google mobile-friendly test, google lighthouse, webaim wave accessibility test, and more.

All Links:
javascript:window.open('https://www.spyfu.com/overview/domain?query=%27+location.hostname)
javascript:window.open('https://www.siteliner.com/'+location.hostname)
javascript:window.open('https://search.google.com/test/rich-results?url=%27+location.hostname)
javascript:window.open('https://validator.schema.org/#url='+location.hostname)
javascript:window.open('https://search.google.com/test/mobile-friendly?url=%27+location.hostname)
javascript:window.open('https://wave.webaim.org/report#/'+location.hostname)
javascript:window.open('https://web.archive.org/web/*/'+location.href)
javascript:window.open('https://whois.com/whois/'+location.hostname)
https://www.brightlocal.com/local-search-results-checker/
https://www.seoreviewtools.com/keyword-density-checker/
https://adwords.google.com/aw/keywordplanner/home
https://moz.com/local/search
https://wordcounter.net/website-word-count
javascript:var b=prompt("Business"), l=prompt("Location"); if(b){window.open('https://www.facebook.com/search/top?q='+ b +' '+ l)}

## To Do

- [x] Create all the necessary files:
  - [x] `manifest.json`
  - [x] `background.js`
  - [x] `content.js`
  - [x] `content.css`
  - [ ] `images/icon-128.png`
  - [ ] `images/icon-16.png`
  - [ ] `images/icon-48.png`
