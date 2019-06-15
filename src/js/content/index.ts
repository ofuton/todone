const scripts = chrome.runtime.getManifest().web_accessible_resources;

const next = () => {
  const script = scripts.shift();

  if (!script) {
    return;
  }

  const s = document.createElement("script");
  s.setAttribute("src", chrome.extension.getURL(script));
  s.addEventListener("load", next);
  document.documentElement.appendChild(s);
};

next();
