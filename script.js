// get IP address using ipify API
fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    const browser = getBrowserInfo();
    const text = `IP address: ${ip}\nBrowser: ${browser.name} ${browser.version}`;
    const downloadLink = document.querySelector('#download-link');
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    downloadLink.setAttribute('download', 'ip-info.txt');
  })
  .catch(error => console.error(error));

// get browser information
function getBrowserInfo() {
  const browser = {
    name: '',
    version: ''
  };
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('firefox') > -1) {
    browser.name = 'Firefox';
    browser.version = userAgent.match(/firefox\/([\d.]+)/)[1];
  } else if (userAgent.indexOf('chrome') > -1) {
    browser.name = 'Chrome';
    browser.version = userAgent.match(/chrome\/([\d.]+)/)[1];
  } else if (userAgent.indexOf('safari') > -1) {
    browser.name = 'Safari';
    browser.version = userAgent.match(/safari\/([\d.]+)/)[1];
  } else if (userAgent.indexOf('opera') > -1) {
    browser.name = 'Opera';
    browser.version = userAgent.match(/opera\/([\d.]+)/)[1];
  } else if (userAgent.indexOf('edge') > -1) {
    browser.name = 'Edge';
    browser.version = userAgent.match(/edge\/([\d.]+)/)[1];
  } else if (userAgent.indexOf('trident') > -1) {
    browser.name = 'IE';
    browser.version = userAgent.match(/rv:([\d.]+)/)[1];
  }
  return browser;
}

// play camouflage game
const camouflage = document.querySelector('.camouflage');

camouflage.addEventListener('click', () => {
  camouflage.classList.add('hidden');
});

setTimeout(() => {
  camouflage.classList.remove('hidden');
}, 2000);
