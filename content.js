const barhtml =`<div class="marketing-assessments-bar-container">
  <div class="marketing-assessments-bar">
    <a href="https://www.spyfu.com/overview/domain?query=${location.hostname}" target="_blank">Spyfu</a>
    <a href="https://www.siteliner.com/${location.hostname}" target="_blank">Siteliner</a>
    <a href="https://search.google.com/test/rich-results?url=${location.hostname}" target="_blank">Google Rich-Test</a>
    <a href="https://validator.schema.org/#url=${location.hostname}" target="_blank">Schema Validator</a>
    <a href="https://search.google.com/test/mobile-friendly?url=${location.hostname}" target="_blank">Google Mobile-Friendly Test</a>
    <a href="https://wave.webaim.org/report#/${location.hostname}" target="_blank">WebAIM Wave Accessibility Test</a>
    <a href="https://web.archive.org/web/*/${location.href}" target="_blank">Wayback Machine</a>
    <a href="https://whois.com/whois/${location.hostname}" target="_blank">Whois</a>
    <a href="https://www.brightlocal.com/local-search-results-checker/" target="_blank">BrightLocal Local Search Results Checker</a>
    <a href="https://www.seoreviewtools.com/keyword-density-checker/" target="_blank">SEO Review Tools Keyword Density Checker</a>
    <a href="https://adwords.google.com/aw/keywordplanner/home" target="_blank">Google AdWords Keyword Planner</a>
    <a href="https://moz.com/local/search" target="_blank">Moz Local Search</a>
    <a href="https://wordcounter.net/website-word-count" target="_blank">WordCounter Website Word Count</a>
    <a href="javascript:var b=prompt('Business'), l=prompt('Location'); if(b){window.open('https://www.facebook.com/search/top?q='+ b +' '+ l)}" target="_blank">Facebook Search</a>
  </div>
</div>`;

document.body.classList.add('marketing-assessments-bar-enabled');

/* insert into the html element after the body tag */
document.body.insertAdjacentHTML('afterbegin', barhtml);

