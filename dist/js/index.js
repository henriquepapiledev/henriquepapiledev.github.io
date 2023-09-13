(self["webpackChunk_roots_bud"] = self["webpackChunk_roots_bud"] || []).push([["index"],{

/***/ "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./css/index.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: currentColor; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.pointer-events-none {
  pointer-events: none;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.bottom-16 {
  bottom: 1rem;
}
.left-0 {
  left: 0px;
}
.right-16 {
  right: 1rem;
}
.top-0 {
  top: 0px;
}
.z-1 {
  z-index: 1;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.m-auto {
  margin: auto;
}
.mb-16 {
  margin-bottom: 1rem;
}
.mb-18 {
  margin-bottom: 1.125rem;
}
.mb-32 {
  margin-bottom: 2rem;
}
.mb-8 {
  margin-bottom: 0.5rem;
}
.ml-40 {
  margin-left: 2.5rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.grid {
  display: grid;
}
.h-11 {
  height: 2.75rem;
}
.h-16 {
  height: 1rem;
}
.h-200 {
  height: 12.5rem;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.w-11 {
  width: 2.75rem;
}
.w-16 {
  width: 1rem;
}
.w-510 {
  width: 31.875rem;
}
.w-full {
  width: 100%;
}
.max-w-\\[1020px\\] {
  max-width: 1020px;
}
.flex-initial {
  flex: 0 1 auto;
}
@keyframes bounce {

  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}
.animate-bounce {
  animation: bounce 1s infinite;
}
.cursor-pointer {
  cursor: pointer;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-16 {
  gap: 1rem;
}
.gap-24 {
  gap: 1.5rem;
}
.gap-32 {
  gap: 2rem;
}
.gap-60 {
  gap: 3.75rem;
}
.gap-8 {
  gap: 0.5rem;
}
.gap-x-80 {
  -moz-column-gap: 5rem;
       column-gap: 5rem;
}
.gap-y-16 {
  row-gap: 1rem;
}
.overflow-hidden {
  overflow: hidden;
}
.rounded-4 {
  border-radius: 0.25rem;
}
.rounded-8 {
  border-radius: 0.5rem;
}
.rounded-full {
  border-radius: 62.4375rem;
}
.rounded-r-20 {
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
}
.rounded-t-20 {
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}
.rounded-t-8 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.border-1 {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-black {
  --tw-border-opacity: 1;
  border-color: rgba(38, 35, 42, 1);
  border-color: rgba(38, 35, 42, var(--tw-border-opacity));
}
.border-purple {
  --tw-border-opacity: 1;
  border-color: rgba(111, 94, 213, 1);
  border-color: rgba(111, 94, 213, var(--tw-border-opacity));
}
.bg-light-purple {
  --tw-bg-opacity: 1;
  background-color: rgba(194, 186, 242, 1);
  background-color: rgba(194, 186, 242, var(--tw-bg-opacity));
}
.bg-purple {
  --tw-bg-opacity: 1;
  background-color: rgba(111, 94, 213, 1);
  background-color: rgba(111, 94, 213, var(--tw-bg-opacity));
}
.bg-purple-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 238, 255, 1);
  background-color: rgba(243, 238, 255, var(--tw-bg-opacity));
}
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}
.p-12 {
  padding: 0.75rem;
}
.p-16 {
  padding: 1rem;
}
.p-24 {
  padding: 1.5rem;
}
.p-8 {
  padding: 0.5rem;
}
.p-80 {
  padding: 5rem;
}
.pb-32 {
  padding-bottom: 2rem;
}
.pb-4 {
  padding-bottom: 0.25rem;
}
.pb-40 {
  padding-bottom: 2.5rem;
}
.pb-80 {
  padding-bottom: 5rem;
}
.pl-24 {
  padding-left: 1.5rem;
}
.pl-32 {
  padding-left: 2rem;
}
.pr-24 {
  padding-right: 1.5rem;
}
.pr-32 {
  padding-right: 2rem;
}
.pt-4 {
  padding-top: 0.25rem;
}
.pt-80 {
  padding-top: 5rem;
}
.text-center {
  text-align: center;
}
.text-icon {
  font-size: 1.25rem;
}
.text-s0 {
  font-size: 0.875rem;
}
.text-s1 {
  font-size: 1rem;
}
.text-s2 {
  font-size: 1.125rem;
}
.text-s4 {
  font-size: 2rem;
}
.text-s5 {
  font-size: 3rem;
}
.text-skill {
  font-size: 0.75rem;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.text-black {
  --tw-text-opacity: 1;
  color: rgba(38, 35, 42, 1);
  color: rgba(38, 35, 42, var(--tw-text-opacity));
}
.text-purple {
  --tw-text-opacity: 1;
  color: rgba(111, 94, 213, 1);
  color: rgba(111, 94, 213, var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(241, 238, 243, 1);
  color: rgba(241, 238, 243, var(--tw-text-opacity));
}
.opacity-0 {
  opacity: 0;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.shadow-none {
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    scrollbar-width: thin;
    scrollbar-color: #c7c7c7 trasparent;
}
/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 10px;
}
*::-webkit-scrollbar-track {
    background: rgba(226, 232, 240, var(--tw-bg-opacity));
}
*::-webkit-scrollbar-thumb {
    background-color: #6F5ED5;
    border-radius: 20px;
    border: 2px none transparent;
}
.pointer-events-none{
    pointer-events: none;
}
html {
    scroll-behavior: smooth;
}
.display-none {
  display: none;
}
/* Navbar */
.navbar.scrolled {
    box-shadow: 0 5px 25px -15px rgba(0, 0, 0, 0.3);
}
.navbar-mobile.translate {
    transform: translateX(0px);
}
.navbar .ativo {
    color: #6F5ED5;
}
@media(max-width: 999px){
    .navbar.scrolled {
        box-shadow: 0 5px 25px 0px rgba(0, 0, 0, 0.3);
    }
    .navbar-mobile.shadow{
        box-shadow: 0 5px 25px 0px rgba(0, 0, 0, 0.3);
    }
}
/* Arrow-down */
.arrow-down {
    animation: bounce 1600ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
@keyframes bounce {
    50% {
        transform: translateY(-4px);
    }
}
/* Botão flutuante */
.botao-flutuante.scrolled {
    opacity: 1;
    pointer-events: all;
}
/* Botão animado */
.btn-animated {
    position: relative;
    overflow: hidden;
}
.btn-animated:before,
.btn-animated:after {
    position: absolute;
    top: 50%;
    content: "";
    width: 20px;
    height: 20px;
    background-color: #4E41A8;
    border-radius: 50%;
}
.btn-animated:before {
    left: -20px;
    transform: translate(-50%, -50%);
}
.btn-animated:after {
    right: -20px;
    transform: translate(50%, -50%);
}
.btn-animated:hover {
    color: #fff;
}
.btn-animated:hover:before {
    animation: criss-cross-left 0.8s both;
    animation-direction: alternate;
}
.btn-animated:hover:after {
    animation: criss-cross-right 0.8s both;
    animation-direction: alternate;
}
.press:active{
    transform: scale(.95);
}
@keyframes criss-cross-right {
    0% {
        right: -20px;
    }

    50% {
        right: 50%;
        width: 20px;
        height: 20px;
    }

    100% {
        right: 50%;
        width: 375px;
        height: 375px;
    }
}
@keyframes criss-cross-left {
    0% {
        left: -20px;
    }

    50% {
        left: 50%;
        width: 20px;
        height: 20px;
    }

    100% {
        left: 50%;
        width: 375px;
        height: 375px;
    }
}
/* Bullet */
.experiences .item:before {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    width: 1px;
    height: 100%;
    background: #6F5ED5;
    left: 7px;
    opacity: .6;
    transition: all .5s ease;
}
/* Projects */
.projects .link:hover figure{
    transform: scale(1.1);
}
.projects .link:hover figcaption,
.projects .link:hover .overlay{
    opacity: 0.85;
}
.js-scroll{
    opacity: 0;
    transition: 1s;
    transform: translateY(-10rem);
}
.js-scroll.ativo{
    transform: translateY(0);
    opacity: 1;
}
.selection\\:bg-black *::-moz-selection {
  --tw-bg-opacity: 1;
  background-color: rgba(38, 35, 42, 1);
  background-color: rgba(38, 35, 42, var(--tw-bg-opacity));
}
.selection\\:bg-black *::selection {
  --tw-bg-opacity: 1;
  background-color: rgba(38, 35, 42, 1);
  background-color: rgba(38, 35, 42, var(--tw-bg-opacity));
}
.selection\\:text-white *::-moz-selection {
  --tw-text-opacity: 1;
  color: rgba(241, 238, 243, 1);
  color: rgba(241, 238, 243, var(--tw-text-opacity));
}
.selection\\:text-white *::selection {
  --tw-text-opacity: 1;
  color: rgba(241, 238, 243, 1);
  color: rgba(241, 238, 243, var(--tw-text-opacity));
}
.selection\\:bg-black::-moz-selection {
  --tw-bg-opacity: 1;
  background-color: rgba(38, 35, 42, 1);
  background-color: rgba(38, 35, 42, var(--tw-bg-opacity));
}
.selection\\:bg-black::selection {
  --tw-bg-opacity: 1;
  background-color: rgba(38, 35, 42, 1);
  background-color: rgba(38, 35, 42, var(--tw-bg-opacity));
}
.selection\\:text-white::-moz-selection {
  --tw-text-opacity: 1;
  color: rgba(241, 238, 243, 1);
  color: rgba(241, 238, 243, var(--tw-text-opacity));
}
.selection\\:text-white::selection {
  --tw-text-opacity: 1;
  color: rgba(241, 238, 243, 1);
  color: rgba(241, 238, 243, var(--tw-text-opacity));
}
.hover\\:text-purple:hover {
  --tw-text-opacity: 1;
  color: rgba(111, 94, 213, 1);
  color: rgba(111, 94, 213, var(--tw-text-opacity));
}
@media (prefers-color-scheme: dark) {

  .dark\\:border-white {
    --tw-border-opacity: 1;
    border-color: rgba(241, 238, 243, 1);
    border-color: rgba(241, 238, 243, var(--tw-border-opacity));
  }

  .dark\\:bg-light-black {
    --tw-bg-opacity: 1;
    background-color: rgba(145, 142, 147, 1);
    background-color: rgba(145, 142, 147, var(--tw-bg-opacity));
  }

  .dark\\:bg-purple-dark {
    --tw-bg-opacity: 1;
    background-color: rgba(18, 15, 26, 1);
    background-color: rgba(18, 15, 26, var(--tw-bg-opacity));
  }

  .dark\\:bg-purple-medium {
    --tw-bg-opacity: 1;
    background-color: rgba(25, 21, 35, 1);
    background-color: rgba(25, 21, 35, var(--tw-bg-opacity));
  }

  .dark\\:text-white {
    --tw-text-opacity: 1;
    color: rgba(241, 238, 243, 1);
    color: rgba(241, 238, 243, var(--tw-text-opacity));
  }

  .dark\\:selection\\:bg-white *::-moz-selection {
    --tw-bg-opacity: 1;
    background-color: rgba(241, 238, 243, 1);
    background-color: rgba(241, 238, 243, var(--tw-bg-opacity));
  }

  .dark\\:selection\\:bg-white *::selection {
    --tw-bg-opacity: 1;
    background-color: rgba(241, 238, 243, 1);
    background-color: rgba(241, 238, 243, var(--tw-bg-opacity));
  }

  .dark\\:selection\\:text-black *::-moz-selection {
    --tw-text-opacity: 1;
    color: rgba(38, 35, 42, 1);
    color: rgba(38, 35, 42, var(--tw-text-opacity));
  }

  .dark\\:selection\\:text-black *::selection {
    --tw-text-opacity: 1;
    color: rgba(38, 35, 42, 1);
    color: rgba(38, 35, 42, var(--tw-text-opacity));
  }

  .dark\\:selection\\:bg-white::-moz-selection {
    --tw-bg-opacity: 1;
    background-color: rgba(241, 238, 243, 1);
    background-color: rgba(241, 238, 243, var(--tw-bg-opacity));
  }

  .dark\\:selection\\:bg-white::selection {
    --tw-bg-opacity: 1;
    background-color: rgba(241, 238, 243, 1);
    background-color: rgba(241, 238, 243, var(--tw-bg-opacity));
  }

  .dark\\:selection\\:text-black::-moz-selection {
    --tw-text-opacity: 1;
    color: rgba(38, 35, 42, 1);
    color: rgba(38, 35, 42, var(--tw-text-opacity));
  }

  .dark\\:selection\\:text-black::selection {
    --tw-text-opacity: 1;
    color: rgba(38, 35, 42, 1);
    color: rgba(38, 35, 42, var(--tw-text-opacity));
  }
}
@media (min-width: 300px) {

  .sm\\:fixed {
    position: fixed;
  }

  .sm\\:bottom-0 {
    bottom: 0px;
  }

  .sm\\:bottom-60 {
    bottom: 3.75rem;
  }

  .sm\\:bottom-80 {
    bottom: 5rem;
  }

  .sm\\:left-0 {
    left: 0px;
  }

  .sm\\:order-1 {
    order: 1;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:h-200 {
    height: 12.5rem;
  }

  .sm\\:w-200 {
    width: 12.5rem;
  }

  .sm\\:translate-y-full {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), 100%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:flex-col {
    flex-direction: column;
  }

  .sm\\:flex-wrap {
    flex-wrap: wrap;
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:gap-48 {
    gap: 3rem;
  }

  .sm\\:gap-8 {
    gap: 0.5rem;
  }

  .sm\\:gap-y-32 {
    row-gap: 2rem;
  }

  .sm\\:rounded-t-20 {
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
  }

  .sm\\:p-16 {
    padding: 1rem;
  }

  .sm\\:pb-60 {
    padding-bottom: 3.75rem;
  }

  .sm\\:pt-32 {
    padding-top: 2rem;
  }

  .sm\\:text-s0 {
    font-size: 0.875rem;
  }

  .sm\\:text-s2 {
    font-size: 1.125rem;
  }

  .sm\\:text-s4 {
    font-size: 2rem;
  }
}
@media (min-width: 768px) {

  .md\\:order-none {
    order: 0;
  }

  .md\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:items-start {
    align-items: flex-start;
  }

  .md\\:text-s6 {
    font-size: 3.5rem;
  }
}
@media (min-width: 1024px) {

  .lg\\:relative {
    position: relative;
  }

  .lg\\:bottom-0 {
    bottom: 0px;
  }

  .lg\\:bottom-5 {
    bottom: 1.25rem;
  }

  .lg\\:bottom-auto {
    bottom: auto;
  }

  .lg\\:order-none {
    order: 0;
  }

  .lg\\:flex {
    display: flex;
  }

  .lg\\:hidden {
    display: none;
  }

  .lg\\:h-280 {
    height: 17.5rem;
  }

  .lg\\:w-280 {
    width: 17.5rem;
  }

  .lg\\:translate-y-0 {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), 0px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .lg\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\\:flex-nowrap {
    flex-wrap: nowrap;
  }

  .lg\\:gap-126 {
    gap: 7.875rem;
  }

  .lg\\:gap-40 {
    gap: 2.5rem;
  }

  .lg\\:gap-8 {
    gap: 0.5rem;
  }

  .lg\\:rounded-t-0 {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .lg\\:bg-inherit {
    background-color: transparent;
  }

  .lg\\:p-0 {
    padding: 0px;
  }

  .lg\\:pb-8 {
    padding-bottom: 0.5rem;
  }

  .lg\\:pl-16 {
    padding-left: 1rem;
  }

  .lg\\:pr-16 {
    padding-right: 1rem;
  }

  .lg\\:pt-8 {
    padding-top: 0.5rem;
  }

  .lg\\:text-s1 {
    font-size: 1rem;
  }

  .lg\\:text-s3 {
    font-size: 1.625rem;
  }

  .lg\\:text-s6 {
    font-size: 3.5rem;
  }

  .lg\\:shadow-none {
    --tw-shadow: 0 0 rgba(0,0,0,0);
    --tw-shadow-colored: 0 0 rgba(0,0,0,0);
    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
  }
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./css/index.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./css/index.css");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./css/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./css/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./js/index.js":
/***/ (() => {

// Menu link
const menuLinks = document.querySelectorAll('.navbar-mobile a, .navbar-logo, .botao-seta a, .botao-flutuante a');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 30;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.scrollX;
  const startY = window.scrollY || window.scrollY;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 500;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

// Menu Scroll
function scrolled() {
  const navBar = document.querySelector('.navbar');
  const botaoFlutuante = document.querySelector('.botao-flutuante');
  const scroll = window.scrollY;

  if (scroll >= 50) {
    navBar.classList.add("scrolled");
    botaoFlutuante.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
    botaoFlutuante.classList.remove("scrolled");
  }
};

window.addEventListener('scroll', scrolled);

// Menu mobile
const navbarHamburger = document.querySelector('.navbar-hamburger');

function handleNavbarHamburger() {
  const navbarMobile = document.querySelector('.navbar-mobile');
  navbarMobile.classList.toggle('translate');
  navbarMobile.classList.toggle('shadow');
};

navbarHamburger.addEventListener('click', handleNavbarHamburger);

const navbarHamburgerLink = document.querySelectorAll('.navbar-mobile a');

function handleNavbarHamburgerLink() {
  const navbarMobileLink = document.querySelector('.navbar-mobile a');
  navbarMobile.classList.remove('translate');
};

navbarHamburgerLink.forEach((link) => {
  link.addEventListener('click', handleNavbarHamburger);
});


// Sections
const sections = document.querySelectorAll('section');

// Função para atualizar o estado ativo do menu
function setActiveMenuItem(section) {
  menuLinks.forEach(item => {
    item.classList.remove('ativo');
  });

  const targetMenuItem = document.querySelector(`nav ul li a[href="#${section.id}"]`);
  targetMenuItem.classList.add('ativo');
}

// Função para verificar qual seção está visível na tela
function getCurrentSection() {
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      return section;
    }
  }
  return null;
}

// Função de controle de rolagem
function scrollHandler() {
  const currentSection = getCurrentSection();
  if (currentSection) {
    setActiveMenuItem(currentSection);
  }
}

// Adiciona um ouvinte de evento de rolagem
window.addEventListener('scroll', scrollHandler);

const initAnimationScroll = () => {
  const sections = document.querySelectorAll('.js-scroll')

  const windowHalfSize = window.innerHeight * 0.6

  const animateScroll = () => {
    sections.forEach(item => {
      const sectionTop = item.getBoundingClientRect().top
      const isSectionVisible = (sectionTop - windowHalfSize) < 0

      if (isSectionVisible) {
        item.classList.add('ativo')
      } 
    })
  }
  animateScroll()
  window.addEventListener('scroll', animateScroll);
}

initAnimationScroll();


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/client.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   client: () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/index.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/events.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/log.js");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/options.js");
/* eslint-disable no-console */
/* global __resourceQuery */
/* global __webpack_hash__ */




/**
 * Initializes bud.js HMR handling
 */
const client = async (queryString, webpackHot) => {
    /* Guard: EventSource browser support */
    if (typeof window?.EventSource === `undefined`) {
        console.error(`[bud] hot module reload requires EventSource to work. https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools`);
        return false;
    }
    /* Guard: webpackHot api availability */
    if (!webpackHot) {
        console.error(`[bud] hot module reload requires the webpack hot api to be available`);
        return false;
    }
    /* Set client options from URL params */
    const options = _options_js__WEBPACK_IMPORTED_MODULE_3__.setFromParameters(queryString);
    /* Setup logger */
    const logger = (0,_log_js__WEBPACK_IMPORTED_MODULE_2__.makeLogger)(options);
    if (typeof window.bud === `undefined`) {
        window.bud = {
            controllers: [],
            current: {},
            hmr: {},
            listeners: {},
        };
    }
    if (!window.bud.current[options.name]) {
        window.bud.current[options.name] = null;
    }
    const isStale = (hash) => {
        if (hash)
            window.bud.current[options.name] = hash;
        return __webpack_require__.h() === window.bud.current[options.name];
    };
    /**
     * Webpack HMR check handler
     */
    const check = async () => {
        if (webpackHot.status() === `idle`) {
            await webpackHot.check(false);
            requestAnimationFrame(async function whenReady() {
                if (webpackHot.status() === `ready`) {
                    await update();
                }
                else {
                    requestAnimationFrame(whenReady);
                }
            });
        }
    };
    /**
     * Webpack HMR unaccepted module handler
     */
    const onUnacceptedOrDeclined = (info) => {
        console.warn(`[${options.name}] ${info.type}`, info);
        options.reload && window.location.reload();
    };
    /**
     * Webpack HMR error handler
     */
    const onErrored = (error) => {
        window.bud.controllers.map(controller => controller?.update({
            errors: [error],
        }));
    };
    /**
     * Webpack HMR update handler
     */
    const update = async () => {
        try {
            await webpackHot.apply({
                ignoreDeclined: true,
                ignoreErrored: true,
                ignoreUnaccepted: true,
                onDeclined: onUnacceptedOrDeclined,
                onErrored,
                onUnaccepted: onUnacceptedOrDeclined,
            });
            if (!isStale())
                await check();
        }
        catch (error) {
            logger.error(error);
        }
    };
    /* Instantiate indicator, overlay */
    try {
        await _components_index_js__WEBPACK_IMPORTED_MODULE_0__.make(options);
    }
    catch (error) { }
    /* Instantiate eventSource */
    const events = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.injectEvents)(EventSource).make(options);
    if (!window.bud.listeners?.[options.name]) {
        window.bud.listeners[options.name] = async (payload) => {
            if (!payload)
                return;
            if (options.reload && payload.action === `reload`)
                return window.location.reload();
            if (payload.name !== options.name)
                return;
            window.bud.controllers.map(controller => controller?.update(payload));
            if (payload.errors?.length > 0)
                return;
            if (payload.action === `built` || payload.action === `sync`) {
                if (isStale(payload.hash))
                    return;
                if (payload.action === `built`) {
                    logger.log(`built in ${payload.time}ms`);
                }
                await check();
            }
        };
        /*
         * Instantiate HMR event source
         * and register client listeners
         */
        events.addListener(window.bud.listeners[options.name]);
    }
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   make: () => (/* binding */ make)
/* harmony export */ });
/* harmony import */ var _indicator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/indicator/index.js");
/* harmony import */ var _overlay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/overlay/index.js");


const make = async (options) => {
    if (options.indicator && !customElements.get(`bud-activity-indicator`)) {
        maybePushController(_indicator_index_js__WEBPACK_IMPORTED_MODULE_0__.make());
    }
    if (options.overlay && !customElements.get(`bud-error`)) {
        maybePushController(_overlay_index_js__WEBPACK_IMPORTED_MODULE_1__.make());
    }
    return window.bud.controllers;
};
const maybePushController = (controller) => {
    if (!controller)
        return;
    window.bud.controllers.push(controller);
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   make: () => (/* binding */ make)
/* harmony export */ });
/* harmony import */ var _indicator_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.component.js");
/* harmony import */ var _indicator_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.controller.js");


const make = () => {
    if (customElements.get(`bud-activity-indicator`))
        return;
    customElements.define(`bud-activity-indicator`, _indicator_component_js__WEBPACK_IMPORTED_MODULE_0__.Component);
    return new _indicator_controller_js__WEBPACK_IMPORTED_MODULE_1__.Controller();
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.component.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.pulse.js");

/**
 * Indicator web component
 */
class Component extends HTMLElement {
    /**
     * Class constructor
     */
    constructor() {
        super();
        /**
         * Status indicator colors
         */
        this.colors = {
            error: [220, 38, 38, 1],
            pending: [59, 130, 246, 1],
            success: [4, 120, 87, 1],
            warn: [252, 211, 77, 1],
        };
        /**
         * Component name
         */
        this.name = `bud-activity-indicator`;
        this.renderShadow();
    }
    static get observedAttributes() {
        return [`has-errors`, `has-warnings`, `action`];
    }
    attributeChangedCallback() {
        if (this.hasAttribute(`has-errors`))
            return this.onError();
        if (this.hasAttribute(`has-warnings`))
            return this.onWarning();
        if (!this.hasAttribute(`has-errors`) &&
            !this.hasAttribute(`has-warnings`) &&
            this.getAttribute(`action`) === `built`)
            return this.onSuccess();
        if (this.getAttribute(`action`) == `building` ||
            this.getAttribute(`action`) == `sync`)
            return this.onPending();
    }
    /**
     * Get accessor: has errors
     */
    get hasErrors() {
        return this.getAttribute(`has-errors`) == `true`;
    }
    /**
     * Get accessor: has warnings
     */
    get hasWarnings() {
        return this.getAttribute(`has-warnings`) == `true`;
    }
    /**
     * Hide status indicator
     */
    hide() {
        this.hideTimeout = setTimeout(() => {
            this.shadowRoot.querySelector(this.selector).classList.remove(`show`);
        }, 2000);
    }
    /**
     * Status is error
     */
    onError() {
        this.show();
        this.shadowRoot
            .querySelector(this.selector)
            .classList.remove(`warning`, `success`, `pending`);
        this.shadowRoot.querySelector(this.selector).classList.add(`error`);
    }
    /**
     * Status is pending
     */
    onPending() {
        this.show();
        this.shadowRoot
            .querySelector(this.selector)
            .classList.remove(`error`, `warning`, `success`);
        this.shadowRoot.querySelector(this.selector).classList.add(`pending`);
        this.hide();
    }
    /**
     * Status is success
     */
    onSuccess() {
        this.show();
        this.shadowRoot
            .querySelector(this.selector)
            .classList.remove(`error`, `warning`, `pending`);
        this.shadowRoot.querySelector(this.selector).classList.add(`success`);
        this.hide();
    }
    /**
     * Status is warning
     */
    onWarning() {
        this.show();
        this.shadowRoot
            .querySelector(this.selector)
            .classList.remove(`error`, `success`, `pending`);
        this.shadowRoot.querySelector(this.selector).classList.add(`warning`);
    }
    /**
     * Render status indicator
     */
    renderShadow() {
        const container = document.createElement(`div`);
        container.classList.add(this.name);
        container.innerHTML = `
    <style>
    .bud-activity-indicator {
      position: fixed;
      width: 10px;
      height: 10px;
      left: 10px;
      bottom: 10px;
      z-index: 9999;
      margin: 5px;
      padding: 5px;
      -webkit-transition:
        all .6s ease-in-out,
      transition:
        all .6s ease-in-out;
      animation-fill-mode: forwards;
      pointer-events: none;
      border-radius: 50%;
      transform: scale(0);
      opacity: 0;
    }

    .show {
      opacity: 1;
      background-color: rgba(255, 255, 255, 1);
      transform: scale(1);
      transition:
        all .6s ease-in-out;
    }

    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`success`, this.colors.success)}
    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`error`, this.colors.error)}
    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`warning`, this.colors.warn)}
    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`pending`, this.colors.pending)}

    </style>
    `;
        this.attachShadow({ mode: `open` }).appendChild(container);
    }
    /**
     * Root div querySelector selector
     */
    get selector() {
        return `.${this.name}`;
    }
    /**
     * Show status indicator
     */
    show() {
        this.hideTimeout && clearTimeout(this.hideTimeout);
        this.shadowRoot.querySelector(this.selector).classList.add(`show`);
    }
}


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.controller.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller)
/* harmony export */ });
/**
 * Activity indicator controller
 */
class Controller {
    /**
     * Initialization
     */
    constructor() {
        /**
         * Active WHM payload
         */
        this.payload = null;
        this.node = document.createElement(`bud-activity-indicator`);
        this.update = this.update.bind(this);
    }
    /**
     * Append `bud-error` element to the DOM
     */
    addNode() {
        if (document.body.querySelector(`bud-activity-indicator`)) {
            if (typeof this.timer.unref === `function`)
                this.timer.unref();
            this.removeNode();
        }
        document.body?.appendChild(this.node);
        this.timer = setTimeout(this.removeNode, 3000);
    }
    /**
     * Remove `bud-error` element from the DOM (if present)
     */
    removeNode() {
        document.body.querySelector(`bud-activity-indicator`)?.remove();
    }
    /**
     * Update activity indicator
     */
    update(payload) {
        this.node.toggleAttribute(`has-errors`, payload.errors?.length ? true : false);
        this.node.toggleAttribute(`has-warnings`, payload.warnings?.length ? true : false);
        this.node.setAttribute(`action`, payload.action);
        this.addNode();
    }
}


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.pulse.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pulse: () => (/* binding */ pulse)
/* harmony export */ });
/**
 * CSS animation for reload indicator
 */
const pulse = (name, color) => `
  .${name} {
    box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});
    animation: ${name}__pulse 2s infinite;
    transition: all 0.4s ease-in-out;
  }

  .${name}:not(.show) {
    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);
  }

  .${name}.show {
    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});
  }

  @keyframes ${name}__pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);
    }
  }
`;


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/overlay/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   make: () => (/* binding */ make)
/* harmony export */ });
/* harmony import */ var _overlay_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.component.js");
/* harmony import */ var _overlay_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.controller.js");


const make = () => {
    if (customElements.get(`bud-error`))
        return;
    customElements.define(`bud-error`, _overlay_component_js__WEBPACK_IMPORTED_MODULE_0__.Component);
    return new _overlay_controller_js__WEBPACK_IMPORTED_MODULE_1__.Controller();
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.component.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
/**
 * Component container
 */
class Component extends HTMLElement {
    constructor() {
        super();
        this.name = `bud-overlay`;
        this.renderShadow();
    }
    static get observedAttributes() {
        return [`message`];
    }
    attributeChangedCallback() {
        if (!this.documentBodyStyle)
            this.documentBodyStyle = document.body?.style;
        if (this.getAttribute(`message`)) {
            document.body.style.overflow = `hidden`;
            this.shadowRoot.querySelector(`.overlay`).classList.add(`visible`);
            this.shadowRoot.querySelector(`.messages`).innerHTML =
                this.getAttribute(`message`);
            return;
        }
        if (this.documentBodyStyle?.overflow && document?.body?.style) {
            document.body.style.overflow = this.documentBodyStyle.overflow;
        }
        this.shadowRoot.querySelector(`.overlay`).classList.remove(`visible`);
    }
    connectedCallback() {
        if (document.body?.style)
            this.documentBodyStyle = document.body.style;
    }
    get message() {
        return this.getAttribute(`message`);
    }
    renderShadow() {
        const container = document.createElement(`div`);
        container.classList.add(`overlay`);
        container.innerHTML = `
      <style>
        .overlay {
          width: 100vw;
          backdrop-filter: blur(10px);
          display: flex;
          height: 100vh;
          border-top: 2px solid transparent;
          overflow-x: hidden;
          overflow-y: scroll;
          position: absolute;
          top: -1000px;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;
          justify-content: center;
        }

        .visible {
          position: fixed;
          top: 0;
          z-index: 9998;
          opacity: 1;
          border-top: 5px solid red;
          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;
          max-width: 100vw;
        }

        .messages {
          background-color: white;
          border-radius: 5px;
          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
          display: flex;
          align-self: center;
          width: 800px;
          max-width: 90vw;
          margin-left: auto;
          margin-right: auto;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          align-content: center;
          padding: 2rem 2rem 0rem 2rem;
        }

        .visible .messages > div {
          position: relative;
          top: 0;
          opacity: 1;
          transition: all: 0.2s ease-in-out;
        }

        .messages > div {
          position: relative;
          top: 20px;
          opacity: 0;
          transition: all: 0.2s ease-in-out;
          align-items: center;
          align-content: center;
          color: rgba(0, 0, 0, 0.87);
          flex-direction: column;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          padding: 0rem 2rem 2rem 2rem;
          width: 100%;
          max-width:95vw;
        }

        .messages > div > pre {
          font-weight: 300;
          font-size: 0.8rem;
          overflow-x: scroll;
        }

        pre {
          background: #303030;
          color: #f1f1f1;
          padding: 10px 16px;
          border-radius: 2px;
          border-top: 4px solid #dd0303;
          -moz-box-shadow: inset 0 0 10px #000;
          box-shadow: inset 0 0 10px #000;
          counter-reset: line;
        }

        pre span {
          display: block;
          line-height: 1.5rem;
        }

        pre span:before {
          counter-increment: line;
          content: counter(line);
          display: inline-block;
          border-right: 1px solid #ddd;
          padding: 0 .5em;
          margin-right: .5em;
          color: #888;
          width: 30px;
        }
      </style>
      <div class="messages"></div>
    `;
        this.attachShadow({ mode: `open` }).appendChild(container);
    }
}


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.controller.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller)
/* harmony export */ });
const ansiPattern = [
    `[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)`,
    `(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))`,
].join(`|`);
const stripAnsi = (body) => body?.replace?.(new RegExp(ansiPattern, `g`), ``) ?? body;
/**
 * Overlay controller
 */
class Controller {
    /**
     * Class constructor
     */
    constructor() {
        this.update = this.update.bind(this);
        this.element = document.createElement(`bud-error`);
    }
    /**
     * Append `bud-error` element to the DOM
     */
    createError() {
        !document.body.querySelector(`bud-error`) &&
            document.body?.appendChild(this.element);
    }
    /**
     * Formatted error message
     */
    get message() {
        return this.payload.errors?.reduce((a, c) => {
            const msg = c?.message ?? c?.error ?? c;
            if (!msg)
                return a;
            return `${a}
        <div>
          <pre>${stripAnsi(msg)}</pre>
        </div>`;
        }, ``);
    }
    /**
     * Remove `bud-error` element from the DOM (if present)
     */
    removeError() {
        document.body.querySelector(`bud-error`)?.remove();
    }
    /**
     * Update DOM
     */
    update(payload) {
        this.payload = payload;
        this.element.setAttribute(`message`, this.message ?? ``);
        if (this.payload.errors?.length > 0) {
            return this.createError();
        }
        this.removeError();
    }
}


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/events.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   injectEvents: () => (/* binding */ injectEvents)
/* harmony export */ });
const injectEvents = (eventSource) => {
    /**
     * EventSource wrapper
     *
     * @remarks
     * wraps EventSource in a function to allow for
     * mocking in tests
     */
    return class Events extends eventSource {
        /**
         * Class constructor
         *
         * @remarks
         * Singleton interface, so this is private.
         *
         */
        constructor(options) {
            super(options.path);
            this.options = options;
            /**
             * Registered listeners
             */
            this.listeners = new Set();
            /**
             * EventSource `onmessage` handler
             */
            this.onmessage = async function (payload) {
                if (!payload?.data || payload.data == `\uD83D\uDC93`) {
                    return;
                }
                try {
                    const data = JSON.parse(payload.data);
                    if (!data)
                        return;
                    await Promise.all([...this.listeners].map(async (listener) => {
                        return await listener(data);
                    }));
                }
                catch (ex) { }
            };
            /**
             * EventSource `onopen` handler
             */
            this.onopen = function () { };
            this.onopen = this.onopen.bind(this);
            this.onmessage = this.onmessage.bind(this);
            this.addListener = this.addListener.bind(this);
        }
        /**
         * Singleton constructor
         *
         */
        static make(options) {
            if (typeof window.bud.hmr[options.name] === `undefined`)
                Object.assign(window.bud.hmr, {
                    [options.name]: new Events(options),
                });
            return window.bud.hmr[options.name];
        }
        /**
         * EventSource `addMessageListener` handler
         */
        addListener(listener) {
            this.listeners.add(listener);
            return this;
        }
    };
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/index.js?indicator=true&name=henrique-portfolio&overlay=true&reload=true":
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?indicator=true&name=henrique-portfolio&overlay=true&reload=true";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/client.js");
/* eslint-disable no-console */
/* global __resourceQuery */
/* global module */

(async function () {
    try {
        await (0,_client_js__WEBPACK_IMPORTED_MODULE_0__.client)(__resourceQuery, __webpack_module__.hot);
    }
    catch (err) {
        console.error(err);
    }
})();


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/log.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeError: () => (/* binding */ makeError),
/* harmony export */   makeInfo: () => (/* binding */ makeInfo),
/* harmony export */   makeLog: () => (/* binding */ makeLog),
/* harmony export */   makeLogger: () => (/* binding */ makeLogger),
/* harmony export */   makeWarn: () => (/* binding */ makeWarn)
/* harmony export */ });
/* eslint-disable no-console */
const makeLogger = (options) => {
    return {
        error: makeError(options),
        info: makeInfo(options),
        log: makeLog(options),
        warn: makeWarn(options),
    };
};
const makeLog = (options) => {
    return (...args) => {
        if (options.log) {
            console.log(`[${options.name}]`, ...args);
        }
    };
};
const makeInfo = (options) => {
    return (...args) => {
        if (options.log) {
            console.info(`[${options.name}]`, ...args);
        }
    };
};
const makeError = (options) => {
    return (...args) => {
        console.error(`[${options.name}]`, ...args);
    };
};
const makeWarn = (options) => {
    return (...args) => {
        console.warn(`[${options.name}]`, ...args);
    };
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/options.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   setFromParameters: () => (/* binding */ setFromParameters)
/* harmony export */ });
/**
 * Client options
 */
let data = {
    debug: true,
    indicator: true,
    log: true,
    name: `@roots/bud-client`,
    overlay: true,
    path: `/bud/hot`,
    reload: true,
    timeout: 2000,
};
/**
 * Get client option
 */
const get = (name, key) => key ? data[name][key] : data[name];
/**
 * Set client data based on URL parameters
 */
const setFromParameters = (query) => {
    let parsedParams = {};
    new window.URLSearchParams(query).forEach((value, key) => {
        parsedParams[key] =
            value === `true` ? true : value === `false` ? false : value;
    });
    data[parsedParams.name] = { ...data, ...parsedParams };
    return data[parsedParams.name];
};



/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/intercept/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const intercept = (...args) => {
    args.every(arg => typeof arg === `string`) &&
        setInterval(() => [
            [document.getElementsByTagName(`a`), `href`],
            [document.getElementsByTagName(`link`), `href`],
        ]
            .map(([elements, attribute]) => [Array.from(elements), attribute])
            .forEach(([elements, attribute]) => elements
            .filter(el => el.hasAttribute(attribute))
            .filter(el => !el.hasAttribute(`__bud_processed`))
            .filter(el => el.getAttribute(attribute).startsWith(args[0]))
            .map(el => {
            const value = el.getAttribute(attribute).replace(...args);
            el.setAttribute(attribute, value);
            el.toggleAttribute(`__bud_processed`);
        })), 1000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intercept);


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/intercept/proxy-click-interceptor.js?replace=%2F&search=http%3A%2F%2F0.0.0.0%2F":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?replace=%2F&search=http%3A%2F%2F0.0.0.0%2F";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/intercept/index.js");
/* eslint-disable no-console */
/* global __resourceQuery */

window.requestAnimationFrame(async function ready() {
    if (false)
        {}
    const params = new URLSearchParams(__resourceQuery);
    if (!params || !params.has(`search`) || !params.has(`replace`))
        return;
    const search = decodeURI(params.get(`search`));
    const replace = decodeURI(params.get(`replace`));
    return document.body
        ? (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(search, replace)
        : window.requestAnimationFrame(ready);
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./js/index.js"), __webpack_exec__("./css/index.css"), __webpack_exec__("../node_modules/@roots/bud-client/lib/hot/index.js?indicator=true&name=henrique-portfolio&overlay=true&reload=true"), __webpack_exec__("../node_modules/@roots/bud-client/lib/intercept/proxy-click-interceptor.js?replace=%2F&search=http%3A%2F%2F0.0.0.0%2F"));
/******/ }
]);