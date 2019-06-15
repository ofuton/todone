import {extractScripts} from 'content/utils';

const resources = chrome.runtime.getManifest().web_accessible_resources;
const scripts = extractScripts(resources);

const init = () => {
    scripts.forEach((script) => {
        const s = document.createElement("script");
        s.setAttribute("src", chrome.extension.getURL(script));
        document.documentElement.appendChild(s);
    });
};

init();
