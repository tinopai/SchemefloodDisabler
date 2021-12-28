console.log(`Loaded SchemefloodDisabler extension`)

const inject = `
window.originalOpen = window.open;
window.open = function() {
    const result = window.confirm(\`\${location.href} wants to open a new window\`);
    if (result) return window.originalOpen.apply(null, arguments);
    else console.log(\`\\${location.href} declined to open a new window\`);
};
`

let script = document.createElement('img');
script.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png');
script.setAttribute('style', 'display:none'); // No need to show it, preventing websites from showing unnecessary overflows
script.setAttribute('onload', `console.log('Loaded Intercept');${inject}`);
document.getElementsByTagName('html')[0].appendChild(script);
