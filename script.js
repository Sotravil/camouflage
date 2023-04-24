const camouflage = document.querySelector('.camouflage');
camouflage.addEventListener('click', () => {
  camouflage.classList.add('hidden');
});

setTimeout(() => {
  camouflage.classList.remove('hidden');

  fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      const userAgent = navigator.userAgent.toLowerCase();
      let browserName = '';
      let browserVersion = '';
      
      if (userAgent.indexOf('firefox') > -1) {
        browserName = 'Firefox';
        browserVersion = userAgent.match(/firefox\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('chrome') > -1) {
        browserName = 'Chrome';
        browserVersion = userAgent.match(/chrome\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('safari') > -1) {
        browserName = 'Safari';
        browserVersion = userAgent.match(/safari\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('opera') > -1) {
        browserName = 'Opera';
        browserVersion = userAgent.match(/opera\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('edge') > -1) {
        browserName = 'Edge';
        browserVersion = userAgent.match(/edge\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('trident') > -1) {
        browserName = 'IE';
        browserVersion = userAgent.match(/rv:([\d.]+)/)[1];
      }

      const text = `IP address: ${ip}\nBrowser: ${browserName} ${browserVersion}`;
      const filename = 'ip.txt';
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    })
    .catch(error => console.error(error));
}, 2000);
