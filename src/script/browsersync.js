let loaded = false;
const url = `${location.protocol}//${location.hostname}:3000/browser-sync/browser-sync-client.js`;

const script = document.createElement('script');
script.src = url;
script.async = true;
script.defer = true;
script.onload = () => loaded = true;

document.body.appendChild(script);

setTimeout(() => {
    if (!loaded) document.body.removeChild(script);
}, 250);
