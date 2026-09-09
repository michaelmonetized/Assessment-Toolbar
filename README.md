# A Chrome Extension for marketing assessments.

> **Product page:** there is no live `hustlelaunch.com/assessment-toolbar` lander (404). This GitHub repository is the canonical product page. Do not advertise a hustlelaunch.com product URL for this extension.


No options, no popup, just adds a strip to the top of every page with links to open the current page url in spyfu, siteliner, google rich-test, schema validator, google mobile-friendly test, PageSpeed Insights (not a local Lighthouse run), webaim wave accessibility test, and more.

All Links:
javascript:window.open('https://www.spyfu.com/overview/domain?query=%27+location.hostname)
javascript:window.open('https://www.siteliner.com/'+location.hostname)
javascript:window.open('https://search.google.com/test/rich-results?url=%27+location.hostname)
javascript:window.open('https://validator.schema.org/#url='+location.hostname)
javascript:window.open('https://search.google.com/test/mobile-friendly?url=%27+location.hostname)
https://pagespeed.web.dev/analysis?url= (PageSpeed Insights — not Lighthouse CLI)
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
  - [x] `manifest.json` (content_scripts wired; no background worker)
  - [ ] `background.js` (does not exist; do not claim it)
  - [x] `content.js`
  - [x] `content.css`
  - [x] `images/icon-128.png`
  - [x] `images/icon-16.png`
  - [x] `images/icon-48.png`

