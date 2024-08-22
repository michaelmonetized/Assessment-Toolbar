document.body.classList.add('marketing-assessments-bar-enabled');
document.body.classList.add('marketing-assessments-bar-hidden');

let mabarHidden = true;

const imagesWithoutAltText = document.querySelectorAll('img:not([alt])');
const countImagesWithoutAltText = imagesWithoutAltText.length;
const mabarToggleIconImageSrc = chrome.runtime.getURL('images/icon-16.png');

function toggleMABar() {
  document.body.classList.toggle('marketing-assessments-bar-hidden');
  mabarHidden = !mabarHidden;

  // find any elements inside the body where the computed style contains a position of fixed and top or inset-block-start is less than 40px and add the style margub-block-start: 40px note:.marketing-assessments-bar-container is now outside the body element and we need to query any element inside body checking the style position is fixed and top or inset-block-start is less than 40px
  const fixedElements = document.querySelectorAll('body *');

  fixedElements.forEach((element) => {
    let isFixed = (window.getComputedStyle(element).position === 'fixed' && window.getComputedStyle(element).top < '40px' && window.getComputedStyle(element).insetBlockStart < '40px');

    if (isFixed) {
      if (mabarHidden === false) {
        element.style.marginBlockStart = '40px';
      } else {
        element.style.marginBlockStart = '0px';
      }
    }
  });
}

let mabarName, mabarLocation, mabarPhone;

const mabarPromptName = () => {
  mabarName = prompt('Name');
};

const mabarPromptLocation = () => {
  mabarLocation = prompt('Location');
};

const mabarPromptPhone = () => {
  mabarPhone = prompt('Phone');
};

const mabarGetFaceBookSearchHref = () => {
  let name = prompt('Name');
  let location = prompt('Location');

  if (name && location) {
    window.open(`https://www.facebook.com/search/top?q=${name} ${location}`);
  }
};

const mabarGetGoogleNAPSearchHref = () => {
  let name = prompt('Name');
  let location = prompt('Location');
  let phone = prompt('Phone');

  if (name && location && phone) {
    window.open(`https://www.google.com/search?q=-site:${window.location.hostname} ${name} ${location} ${phone}`);
  }
};

function mabar_load(){
  const barhtml =`<div class="marketing-assessments-bar-container">
    <div class="marketing-assessments-bar">
      <a href="https://www.spyfu.com/overview/domain?query=${location.hostname}" target="_blank" title="SpyFu"><img src="https://www.spyfu.com/next/raw_assets/favicon/favicon-16x16.png" alt="SpyFu"></a>
      <a href="https://www.siteliner.com/${location.hostname}" target="_blank" title="SiteLiner">⋯</a>
      <a href="https://search.google.com/test/rich-results?url=${location.hostname}" target="_blank" title="Rich Results">🤑</a>
      <a href="https://validator.schema.org/#url=${location.hostname}" target="_blank" title="Schema Validator">🗂️</a>
      <a href="https://search.google.com/test/mobile-friendly?url=${location.hostname}" target="_blank" title="Mobile Friendly">📱</a>
      <a href="https://wave.webaim.org/report#/${location.hostname}" target="_blank" title="Wave Accessibility">♿️</a>
      <a href="https://web.archive.org/web/*/${location.href}" target="_blank" title="Wayback Machine">⏳</a>
      <a href="https://whois.com/whois/${location.hostname}" target="_blank" title="Whois">😳</a>
      <a href="https://www.brightlocal.com/local-search-results-checker/" target="_blank" title="BrightLocal">🗺️</a>
      <a href="https://www.seoreviewtools.com/keyword-density-checker/" target="_blank" title="Keyword Density">🏋️‍♀️</a>
      <a href="https://adwords.google.com/aw/keywordplanner/home" target="_blank" title="Keyword Planner">✅</a>
      <a href="https://moz.com/local/search" target="_blank" title="Moz Local">📍</a>
      <a href="https://wordcounter.net/website-word-count" target="_blank" title="Word Count">❡</a>
      <button class="mabar-facebook-search" title="Facebook Search">🤳</button>
      <button class="mabar-google-nap-search" title="Google NAP Search">🔍</button>
      <button class="marketing-assessments-bar-title">${document.title}</button>
      <button class="marketing-assessments-bar-images">${countImagesWithoutAltText} imgs missing alt</button>
    </div>
    <button class="marketing-assessments-bar-toggle" title="Toggle Marketing Assessments Bar"><img src="${mabarToggleIconImageSrc}" alt="Toggle"></button>
  </div>`;

  /* insert into the html element after the body tag */
  document.body.insertAdjacentHTML('afterend', barhtml);

  let mabar_loaded = new Event('mabar_loaded');
  document.dispatchEvent(mabar_loaded);
}

mabar_load();
toggleMABar();

const mabarToggleButton = document.querySelector('.marketing-assessments-bar-toggle');
mabarToggleButton.addEventListener('click', toggleMABar);

// keyboard shortcut ctrl+alt+m
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey && event.key === 'm') {
    toggleMABar();
  }
});

document.querySelector('.mabar-facebook-search').addEventListener('click', mabarGetFaceBookSearchHref);
document.querySelector('.mabar-google-nap-search').addEventListener('click', mabarGetGoogleNAPSearchHref);

document.querySelector('.marketing-assessments-bar-title').addEventListener('click', () => {
  navigator.clipboard.writeText(document.title);
});

document.querySelector('.marketing-assessments-bar-images').addEventListener('click', () => {
  imagesWithoutAltText.forEach((image) => {
    image.classList.toggle('assessment-image-missing-alt');
  });
});
