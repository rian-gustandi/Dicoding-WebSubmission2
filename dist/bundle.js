!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=9)}([function(t,n,e){(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,n,e,r){var o=n&&n.prototype instanceof s?n:s,i=Object.create(o.prototype),c=new S(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var u=g(c,e);if(u){if(u===f)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var a=l(t,n,e);if("normal"===a.type){if(r=e.done?"completed":"suspendedYield",a.arg===f)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(r="completed",e.method="throw",e.arg=a.arg)}}}(t,e,c),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var f={};function s(){}function p(){}function h(){}var d={};d[i]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(j([])));b&&b!==e&&r.call(b,i)&&(d=b);var v=h.prototype=s.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function w(t,e){var o;this._invoke=function(i,c){function u(){return new e((function(o,u){!function o(i,c,u,a){var f=l(t[i],t,c);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===n(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(p).then((function(t){s.value=t,u(s)}),(function(t){return o("throw",t,u,a)}))}a(f.arg)}(i,c,o,u)}))}return o=o?o.then(u,u):u()}}function g(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,g(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=v.constructor=h,h.constructor=p,h[u]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},m(w.prototype),w.prototype[c]=function(){return this},t.AsyncIterator=w,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var c=new w(a(n,e,r,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},m(v),v[u]="Generator",v[i]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return c.type="throw",c.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),a=r.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}("object"===n(t)?t.exports:{});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}).call(this,e(1)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,e){var r=e(3),o=e(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),c=[];function u(t){for(var n=-1,e=0;e<c.length;e++)if(c[e].identifier===t){n=e;break}return n}function a(t,n){for(var e={},r=[],o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],l=e[a]||0,f="".concat(a," ").concat(l);e[a]=l+1;var s=u(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(p)):c.push({identifier:f,updater:b(p,n),references:1}),r.push(f)}return r}function l(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var f,s=(f=[],function(t,n){return f[t]=n,f.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),c=t.childNodes;c[n]&&t.removeChild(c[n]),c.length?t.insertBefore(i,c[n]):t.appendChild(i)}}function h(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,y=0;function b(t,n){var e,r,o;if(n.singleton){var i=y++;e=d||(d=l(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=l(n),r=h.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=a(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=u(e[r]);c[o].references--}for(var i=a(t,n),l=0;l<e.length;l++){var f=u(e[l]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}e=i}}}},function(t,n,e){(n=e(5)(!1)).push([t.i,"\r\n\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: sans-serif;\r\n}\r\n\r\nmain {\r\n    width: 90%;\r\n    max-width: 800px;\r\n    margin: 32px auto;\r\n}\r\n\r\n    club-list {\r\n       display: block;\r\n       margin-top: 32px;\r\n       width: 100%;\r\n       padding: 16px;\r\n    }",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(c=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var c,u,a;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var a=[].concat(t[u]);r&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),n.push(a))}},n}},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(p,t);var n,e,i,c,f,s=(n=p,e=u(),function(){var t,r=l(n);if(e){var i=l(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n      <style>\n      *{\n      margin:0;\n      padding:0;\n      box-sizing:border-box;\n      }\n      :host{\n      display: block;\n      width: 100%;\n      background-color: cornflowerblue;\n      color: white;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      }\n      h2{\n      padding:16px;\n      }\n\n      </style>\n      <h2>Club Finder</h2>\n    "}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("app-bar",f)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(p,t);var n,e,i,c,f,s=(n=p,e=u(),function(){var t,r=l(n);if(e){var i=l(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return i=p,(c=[{key:"render",value:function(){this.shadowDOM.innerHTML='\n\n<style>\n\n  * {\n                   margin: 0;\n                   padding: 0;\n                   box-sizing: border-box;\n               }\n               :host {\n                   display: block;\n                   margin-bottom: 18px;\n                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                   border-radius: 10px;\n                   overflow: hidden;\n               }\n\n .fan-art-club {\n    width: 100%;\n    max-height: 300px;\n    object-fit: cover;\n    object-position: center;\n}\n\n.club-info {\n    padding: 24px;\n}\n\n.club-info > h2 {\n    font-weight: lighter;\n}\n\n.club-info > p {\n    margin-top: 10px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 10; /* number of lines to show */\n}\n</style>\n\n    <img class="fan-art-club" src="'.concat(this._club.strTeamBadge,'" alt="Fan Art">\n      <div class="club-info">\n        <h2>').concat(this._club.strTeam,"</h2>\n        <p>").concat(this._club.strDescriptionEN,"</p>\n      </div>")}},{key:"club",set:function(t){this._club=t,this.render()}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("club-item",f)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(p,t);var n,e,i,c,f,s=(n=p,e=u(),function(){var t,r=l(n);if(e){var i=l(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n\n<style>\n.search-container {\n    max-width: 800px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    padding: 16px;\n    border-radius: 5px;\n    display: flex;\n    position: sticky;\n    top: 10px;\n    background-color: white;\n}\n\n.search-container > input {\n    width: 75%;\n    padding: 16px;\n    border: 0;\n    border-bottom: 1px solid cornflowerblue;\n    font-weight: bold;\n}\n\n.search-container > input:focus {\n    outline: 0;\n    border-bottom: 2px solid cornflowerblue;\n}\n\n.search-container > input:focus::placeholder {\n    font-weight: bold;\n}\n\n.search-container >  input::placeholder {\n    color: cornflowerblue;\n    font-weight: normal;\n}\n\n.search-container > button {\n    width: 23%;\n    cursor: pointer;\n    margin-left: auto;\n    padding: 16px;\n    background-color: cornflowerblue;\n    color: white;\n    border: 0;\n    text-transform: uppercase;\n}\n\n@media screen and (max-width: 550px){\n    .search-container {\n        flex-direction: column;\n        position: static;\n    }\n\n    .search-container > input {\n        width: 100%;\n        margin-bottom: 12px;\n    }\n\n    .search-container > button {\n        width: 100%;\n    }\n}\n</style>\n\n<div id="search-container" class="search-container">\n        <input placeholder="Search football club" id="searchElement" type="search">\n        <button id="searchButtonElement" type="submit">Search</button>\n    </div>\n',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("search-bar",f)},function(t,n,e){"use strict";e.r(n);e(0),e(2),e(6),e(7);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t){var n="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function u(t,n,e){return(u=a()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(p,t);var n,e,r,c,u,s=(n=p,e=a(),function(){var t,r=f(n);if(e){var o=f(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=p,(c=[{key:"renderError",value:function(t){this.shadowDOM.innerHTML="",this.shadowDOM.innerHTML+='\n    <style>\n\n\n.placeholder {\n    font-weight: lighter;\n    color: rgba(0,0,0,0.5);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n    </style>\n\n\n\n    <h2 class="placeholder">'.concat(t,"</h2>\n    \n    ")}},{key:"render",value:function(){var t=this;this.shadowDOM.innerHTML="",this._clubs.forEach((function(n){var e=document.createElement("club-item");e.club=n,t.shadowDOM.appendChild(e)}))}},{key:"clubs",set:function(t){this._clubs=t,this.render()}}])&&o(r.prototype,c),u&&o(r,u),p}(c(HTMLElement));customElements.define("club-list",s);e(8);function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,r;return n=t,r=[{key:"searchClub",value:function(t){return fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=".concat(t)).then((function(t){return t.json()})).then((function(n){return n.teams?Promise.resolve(n.teams):Promise.reject("".concat(t," is not found"))}))}}],(e=null)&&p(n.prototype,e),r&&p(n,r),t}();function d(t,n,e,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void e(t)}u.done?n(a):Promise.resolve(a).then(r,o)}var y=function(){var t=document.querySelector("search-bar"),n=document.querySelector("club-list"),e=function(){var n,e=(n=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.searchClub(t.value);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function c(t){d(i,r,o,c,u,"next",t)}function u(t){d(i,r,o,c,u,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),r=function(t){n.clubs=t},o=function(t){n.renderError(t)};t.clickEvent=e};document.addEventListener("DOMContentLoaded",y)}]);