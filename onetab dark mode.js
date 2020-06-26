// https://stackoverflow.com/questions/311052/setting-css-pseudo-class-rules-from-javascript
// Run in chrome console
// const cssTemplateString = `.foo:[psuedoSelector]{prop: value}`;

const cssTemplateString = `body {background-color: #2c2c2c;} .clickable {color:#cccccc !important;}`;

const styleTag = document.createElement("style");
styleTag.innerHTML = cssTemplateString;
document.head.insertAdjacentElement('beforeend', styleTag);


----------------
body {
    background-color: #2c2c2c;
}
.clickable {
    cursor:pointer;
    color:#cccccc;
}