(self["webpackChunkvue_firebase_dev"]=self["webpackChunkvue_firebase_dev"]||[]).push([[998],{1001:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},2348:function(t,e,n){"use strict";n.d(e,{BH:function(){return y},L:function(){return c},LL:function(){return C},P0:function(){return m},Sg:function(){return w},ZR:function(){return T},aH:function(){return v},eu:function(){return _},hl:function(){return b},m9:function(){return D},vZ:function(){return A}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/vue-firebase/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){try{return"object"===typeof indexedDB}catch(t){return!1}}function _(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class T extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?S(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new T(r,o,n);return a}}function S(t,e){return t.replace(I,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(x(n)&&x(s)){if(!A(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function x(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t){return t&&t._delegate?t._delegate:t}},4337:function(t,e,n){"use strict";n.d(e,{z:function(){return s}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var s=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)}))):(a(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)})))}))}function o(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return o(e,t)}))}function c(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(t,e,n)})).catch((function(t){return o(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return o(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},7195:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Yr}});n(7658),n(4633);var r=Object.freeze({}),i=Array.isArray;function s(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function d(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function g(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function m(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||d(t)&&t.toString===f?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function w(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}w("slot,component",!0);var b=w("key,ref,slot,slot-scope,is");function _(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var E=Object.prototype.hasOwnProperty;function T(t,e){return E.call(t,e)}function C(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var S=/-(\w)/g,I=C((function(t){return t.replace(S,(function(t,e){return e?e.toUpperCase():""}))})),A=C((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),x=/\B([A-Z])/g,D=C((function(t){return t.replace(x,"-$1").toLowerCase()}));function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function N(t,e){return t.bind(e)}var O=Function.prototype.bind?N:k;function R(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function L(t,e){for(var n in e)t[n]=e[n];return t}function M(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function P(t,e,n){}var F=function(t,e,n){return!1},V=function(t){return t};function $(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return $(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return $(t[n],e[n])}))}catch(c){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if($(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function B(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var q="data-server-rendered",z=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],K={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:P,parsePlatformTagName:V,mustUseProp:F,async:!0,_lifecycleHooks:H},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Y=new RegExp("[^".concat(G.source,".$_\\d]"));function X(t){if(!Y.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J="__proto__"in{},Z="undefined"!==typeof window,tt=Z&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var it=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var st,ot=tt&&tt.match(/firefox\/(\d+)/),at={}.watch,ct=!1;if(Z)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){ct=!0}}),window.addEventListener("test-passive",null,ut)}catch(Xo){}var lt=function(){return void 0===st&&(st=!Z&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),st},ht=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ft(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,pt="undefined"!==typeof Symbol&&ft(Symbol)&&"undefined"!==typeof Reflect&&ft(Reflect.ownKeys);dt="undefined"!==typeof Set&&ft(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var gt=null;function mt(t){void 0===t&&(t=null),t||gt&&gt._scope.off(),gt=t,t&&t._scope.on()}var vt=function(){function t(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function wt(t){return new vt(void 0,void 0,void 0,String(t))}function bt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=0,Et=[],Tt=function(){for(var t=0;t<Et.length;t++){var e=Et[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Et.length=0},Ct=function(){function t(){this._pending=!1,this.id=_t++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Et.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();Ct.target=null;var St=[];function It(t){St.push(t),Ct.target=t}function At(){St.pop(),Ct.target=St[St.length-1]}var xt=Array.prototype,Dt=Object.create(xt),kt=["push","pop","shift","unshift","splice","sort","reverse"];kt.forEach((function(t){var e=xt[t];Q(Dt,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Nt=Object.getOwnPropertyNames(Dt),Ot={},Rt=!0;function Lt(t){Rt=t}var Mt={notify:P,depend:P,addSub:P,removeSub:P},Pt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Mt:new Ct,this.vmCount=0,Q(t,"__ob__",this),i(t)){if(!n)if(J)t.__proto__=Dt;else for(var r=0,s=Nt.length;r<s;r++){var o=Nt[r];Q(t,o,Dt[o])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){o=a[r];Vt(t,o,Ot,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ft(t[e],!1,this.mock)},t}();function Ft(t,e,n){return t&&T(t,"__ob__")&&t.__ob__ instanceof Pt?t.__ob__:!Rt||!n&&lt()||!i(t)&&!d(t)||!Object.isExtensible(t)||t.__v_skip||Ht(t)||t instanceof vt?void 0:new Pt(t,e,n)}function Vt(t,e,n,r,s,o){var a=new Ct,c=Object.getOwnPropertyDescriptor(t,e);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==Ot&&2!==arguments.length||(n=t[e]);var h=!s&&Ft(n,!1,o);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return Ct.target&&(a.depend(),h&&(h.dep.depend(),i(e)&&Ut(e))),Ht(e)&&!s?e.value:e},set:function(e){var r=u?u.call(t):n;if(B(r,e)){if(l)l.call(t,e);else{if(u)return;if(!s&&Ht(r)&&!Ht(e))return void(r.value=e);n=e}h=!s&&Ft(e,!1,o),a.notify()}}}),a}}function $t(t,e,n){if(!zt(t)){var r=t.__ob__;return i(t)&&g(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&Ft(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(Vt(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function jt(t,e){if(i(t)&&g(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||zt(t)||T(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ut(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&Ut(e)}function Bt(t){return qt(t,!0),Q(t,"__v_isShallow",!0),t}function qt(t,e){if(!zt(t)){Ft(t,e,lt());0}}function zt(t){return!(!t||!t.__v_isReadonly)}function Ht(t){return!(!t||!0!==t.__v_isRef)}function Kt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Ht(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Ht(r)&&!Ht(t)?r.value=t:e[n]=t}})}var Gt="watcher";"".concat(Gt," callback"),"".concat(Gt," getter"),"".concat(Gt," cleanup");var Wt;var Qt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!t&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Wt;try{return Wt=this,t()}finally{Wt=e}}else 0},t.prototype.on=function(){Wt=this},t.prototype.off=function(){Wt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Yt(t,e){void 0===e&&(e=Wt),e&&e.active&&e.effects.push(t)}function Xt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Jt=C((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function Zt(t,e){function n(){var t=n.fns;if(!i(t))return Qe(t,null,arguments,e,"v-on handler");for(var r=t.slice(),s=0;s<r.length;s++)Qe(r[s],null,arguments,e,"v-on handler")}return n.fns=t,n}function te(t,e,n,r,i,o){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=Jt(c),s(u)||(s(l)?(s(u.fns)&&(u=t[c]=Zt(u,o)),a(h.once)&&(u=t[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)s(t[c])&&(h=Jt(c),r(h.name,e[c],h.capture))}function ee(t,e,n){var r;t instanceof vt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function c(){n.apply(this,arguments),_(r.fns,c)}s(i)?r=Zt([c]):o(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Zt([i,c]),r.merged=!0,t[e]=r}function ne(t,e,n){var r=e.options.props;if(!s(r)){var i={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var u in r){var l=D(u);re(i,c,u,l,!0)||re(i,a,u,l,!1)}return i}}function re(t,e,n,r,i){if(o(e)){if(T(e,n))return t[n]=e[n],i||delete e[n],!0;if(T(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ie(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function se(t){return u(t)?[wt(t)]:i(t)?ae(t):void 0}function oe(t){return o(t)&&o(t.text)&&c(t.isComment)}function ae(t,e){var n,r,c,l,h=[];for(n=0;n<t.length;n++)r=t[n],s(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ae(r,"".concat(e||"","_").concat(n)),oe(r[0])&&oe(l)&&(h[c]=wt(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?oe(l)?h[c]=wt(l.text+r):""!==r&&h.push(wt(r)):oe(r)&&oe(l)?h[c]=wt(l.text+r.text):(a(t._isVList)&&o(r.tag)&&s(r.key)&&o(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function ce(t,e){var n,r,s,a,c=null;if(i(t)||"string"===typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(pt&&t[Symbol.iterator]){c=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)c.push(e(l.value,c.length)),l=u.next()}else for(s=Object.keys(t),c=new Array(s.length),n=0,r=s.length;n<r;n++)a=s[n],c[n]=e(t[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function ue(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=L(L({},r),n)),i=s(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function le(t){return Tr(this.$options,"filters",t,!0)||V}function he(t,e){return i(t)?-1===t.indexOf(e):t!==e}function fe(t,e,n,r,i){var s=K.keyCodes[e]||n;return i&&r&&!K.keyCodes[e]?he(i,r):s?he(s,t):r?D(r)!==e:void 0===t}function de(t,e,n,r,s){if(n)if(h(n)){i(n)&&(n=M(n));var o=void 0,a=function(i){if("class"===i||"style"===i||b(i))o=t;else{var a=t.attrs&&t.attrs.type;o=r||K.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=I(i),u=D(i);if(!(c in o)&&!(u in o)&&(o[i]=n[i],s)){var l=t.on||(t.on={});l["update:".concat(i)]=function(t){n[i]=t}}};for(var c in n)a(c)}else;return t}function pe(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),me(r,"__static__".concat(t),!1)),r}function ge(t,e,n){return me(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function me(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&ve(t[r],"".concat(e,"_").concat(r),n);else ve(t,e,n)}function ve(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ye(t,e){if(e)if(d(e)){var n=t.on=t.on?L({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function we(t,e,n,r){e=e||{$stable:!n};for(var s=0;s<t.length;s++){var o=t[s];i(o)?we(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function be(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function _e(t,e){return"string"===typeof t?e+t:t}function Ee(t){t._o=ge,t._n=y,t._s=v,t._l=ce,t._t=ue,t._q=$,t._i=j,t._m=pe,t._f=le,t._k=fe,t._b=de,t._v=wt,t._e=yt,t._u=we,t._g=ye,t._d=be,t._p=_e}function Te(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Ce)&&delete n[u];return n}function Ce(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Se(t){return t.isComment&&t.asyncFactory}function Ie(t,e,n,i){var s,o=Object.keys(n).length>0,a=e?!!e.$stable:!o,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&c===i.$key&&!o&&!i.$hasNormal)return i;for(var u in s={},e)e[u]&&"$"!==u[0]&&(s[u]=Ae(t,n,u,e[u]))}else s={};for(var l in n)l in s||(s[l]=xe(n,l));return e&&Object.isExtensible(e)&&(e._normalized=s),Q(s,"$stable",a),Q(s,"$key",c),Q(s,"$hasNormal",o),s}function Ae(t,e,n,r){var s=function(){var e=gt;mt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:se(n);var s=n&&n[0];return mt(e),n&&(!s||1===n.length&&s.isComment&&!Se(s))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:s,enumerable:!0,configurable:!0}),s}function xe(t,e){return function(){return t[e]}}function De(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=ke(t);mt(t),It();var i=Qe(n,null,[t._props||Bt({}),r],t,"setup");if(At(),mt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var s=t._setupProxy={};for(var o in i)"__sfc"!==o&&Kt(s,i,o)}else for(var o in i)W(o)||Kt(t,i,o);else 0}}function ke(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};Q(e,"_v_attr_proxy",!0),Ne(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};Ne(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Re(t)},emit:O(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Kt(t,e,n)}))}}}function Ne(t,e,n,r,i){var s=!1;for(var o in e)o in t?e[o]!==n[o]&&(s=!0):(s=!0,Oe(t,o,r,i));for(var o in t)o in e||(s=!0,delete t[o]);return s}function Oe(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Re(t){return t._slotsProxy||Le(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Le(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Me(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Te(e._renderChildren,i),t.$scopedSlots=n?Ie(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return ze(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return ze(t,e,n,r,i,!0)};var s=n&&n.data;Vt(t,"$attrs",s&&s.attrs||r,null,!0),Vt(t,"$listeners",e._parentListeners||r,null,!0)}var Pe=null;function Fe(t){Ee(t.prototype),t.prototype.$nextTick=function(t){return cn(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,s=n._parentVnode;s&&e._isMounted&&(e.$scopedSlots=Ie(e.$parent,s.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&Le(e._slotsProxy,e.$scopedSlots)),e.$vnode=s;try{mt(e),Pe=e,t=r.call(e._renderProxy,e.$createElement)}catch(Xo){We(Xo,e,"render"),t=e._vnode}finally{Pe=null,mt()}return i(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=s,t}}function Ve(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function $e(t,e,n,r,i){var s=yt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function je(t,e){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=Pe;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var r=t.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return _(r,n)}));var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=U((function(n){t.resolved=Ve(n,e),i?r.length=0:l(!0)})),d=U((function(e){o(t.errorComp)&&(t.error=!0,l(!0))})),p=t(f,d);return h(p)&&(m(p)?s(t.resolved)&&p.then(f,d):m(p.component)&&(p.component.then(f,d),o(p.error)&&(t.errorComp=Ve(p.error,e)),o(p.loading)&&(t.loadingComp=Ve(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,s(t.resolved)&&s(t.error)&&(t.loading=!0,l(!1))}),p.delay||200)),o(p.timeout)&&(u=setTimeout((function(){u=null,s(t.resolved)&&d(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function Ue(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||Se(n)))return n}}var Be=1,qe=2;function ze(t,e,n,r,s,o){return(i(n)||u(n))&&(s=r,r=n,n=void 0),a(o)&&(s=qe),He(t,e,n,r,s)}function He(t,e,n,r,s){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===qe?r=se(r):s===Be&&(r=ie(r)),"string"===typeof e){var u=void 0;c=t.$vnode&&t.$vnode.ns||K.getTagNamespace(e),a=K.isReservedTag(e)?new vt(K.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Tr(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):or(u,n,t,r,e)}else a=or(e,n,t,r);return i(a)?a:o(a)?(o(c)&&Ke(a,c),o(n)&&Ge(n),a):yt()}function Ke(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var r=0,i=t.children.length;r<i;r++){var c=t.children[r];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&Ke(c,e,n)}}function Ge(t){h(t.style)&&dn(t.style),h(t.class)&&dn(t.class)}function We(t,e,n){It();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(Xo){Ye(Xo,r,"errorCaptured hook")}}}Ye(t,e,n)}finally{At()}}function Qe(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&m(s)&&!s._handled&&(s.catch((function(t){return We(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(Xo){We(Xo,r,i)}return s}function Ye(t,e,n){if(K.errorHandler)try{return K.errorHandler.call(null,t,e,n)}catch(Xo){Xo!==t&&Xe(Xo,null,"config.errorHandler")}Xe(t,e,n)}function Xe(t,e,n){if(!Z||"undefined"===typeof console)throw t;console.error(t)}var Je,Ze=!1,tn=[],en=!1;function nn(){en=!1;var t=tn.slice(0);tn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ft(Promise)){var rn=Promise.resolve();Je=function(){rn.then(nn),it&&setTimeout(P)},Ze=!0}else if(et||"undefined"===typeof MutationObserver||!ft(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Je="undefined"!==typeof setImmediate&&ft(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var sn=1,on=new MutationObserver(nn),an=document.createTextNode(String(sn));on.observe(an,{characterData:!0}),Je=function(){sn=(sn+1)%2,an.data=String(sn)},Ze=!0}function cn(t,e){var n;if(tn.push((function(){if(t)try{t.call(e)}catch(Xo){We(Xo,e,"nextTick")}else n&&n(e)})),en||(en=!0,Je()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function un(t){return function(e,n){if(void 0===n&&(n=gt),n)return ln(n,t,e)}}function ln(t,e,n){var r=t.$options;r[e]=gr(r[e],n)}un("beforeMount"),un("mounted"),un("beforeUpdate"),un("updated"),un("beforeDestroy"),un("destroyed"),un("activated"),un("deactivated"),un("serverPrefetch"),un("renderTracked"),un("renderTriggered"),un("errorCaptured");var hn="2.7.14";var fn=new dt;function dn(t){return pn(t,fn),fn.clear(),t}function pn(t,e){var n,r,s=i(t);if(!(!s&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(s){n=t.length;while(n--)pn(t[n],e)}else if(Ht(t))pn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)pn(t[r[n]],e)}}}var gn,mn=0,vn=function(){function t(t,e,n,r,i){Yt(this,Wt&&!Wt._vm?Wt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++mn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="",l(e)?this.getter=e:(this.getter=X(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;It(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Xo){if(!this.user)throw Xo;We(Xo,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&dn(t),At(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Qn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Qe(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&En(t,e)}function wn(t,e){gn.$on(t,e)}function bn(t,e){gn.$off(t,e)}function _n(t,e){var n=gn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function En(t,e,n){gn=t,te(e,n||{},wn,bn,_n,t),gn=void 0}function Tn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var s=0,o=t.length;s<o;s++)r.$on(t[s],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,s=t.length;r<s;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(o=a[c],o===e||o.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?R(n):n;for(var r=R(arguments,1),i='event handler for "'.concat(t,'"'),s=0,o=n.length;s<o;s++)Qe(n[s],e,r,e,i)}return e}}var Cn=null;function Sn(t){var e=Cn;return Cn=t,function(){Cn=e}}function In(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function An(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=Sn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Rn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Rn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function xn(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=yt),Rn(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Rn(t,"beforeUpdate")}};new vn(t,r,P,i,!0),n=!1;var s=t._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==t.$vnode&&(t._isMounted=!0,Rn(t,"mounted")),t}function Dn(t,e,n,i,s){var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c),l=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=s;var h=i.data.attrs||r;t._attrsProxy&&Ne(t._attrsProxy,h,l.data&&l.data.attrs||r,t,"$attrs")&&(u=!0),t.$attrs=h,n=n||r;var f=t.$options._parentListeners;if(t._listenersProxy&&Ne(t._listenersProxy,n,f||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,En(t,n,f),e&&t.$options.props){Lt(!1);for(var d=t._props,p=t.$options._propKeys||[],g=0;g<p.length;g++){var m=p[g],v=t.$options.props;d[m]=Cr(m,v,e,t)}Lt(!0),t.$options.propsData=e}u&&(t.$slots=Te(s,i.context),t.$forceUpdate())}function kn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Nn(t,e){if(e){if(t._directInactive=!1,kn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Nn(t.$children[n]);Rn(t,"activated")}}function On(t,e){if((!e||(t._directInactive=!0,!kn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)On(t.$children[n]);Rn(t,"deactivated")}}function Rn(t,e,n,r){void 0===r&&(r=!0),It();var i=gt;r&&mt(t);var s=t.$options[e],o="".concat(e," hook");if(s)for(var a=0,c=s.length;a<c;a++)Qe(s[a],t,n||null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),r&&mt(i),At()}var Ln=[],Mn=[],Pn={},Fn=!1,Vn=!1,$n=0;function jn(){$n=Ln.length=Mn.length=0,Pn={},Fn=Vn=!1}var Un=0,Bn=Date.now;if(Z&&!et){var qn=window.performance;qn&&"function"===typeof qn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return qn.now()})}var zn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Hn(){var t,e;for(Un=Bn(),Vn=!0,Ln.sort(zn),$n=0;$n<Ln.length;$n++)t=Ln[$n],t.before&&t.before(),e=t.id,Pn[e]=null,t.run();var n=Mn.slice(),r=Ln.slice();jn(),Wn(n),Kn(r),Tt(),ht&&K.devtools&&ht.emit("flush")}function Kn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Rn(r,"updated")}}function Gn(t){t._inactive=!1,Mn.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Nn(t[e],!0)}function Qn(t){var e=t.id;if(null==Pn[e]&&(t!==Ct.target||!t.noRecurse)){if(Pn[e]=!0,Vn){var n=Ln.length-1;while(n>$n&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);Fn||(Fn=!0,cn(Hn))}}function Yn(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=Xt(t),i=pt?Reflect.ownKeys(n):Object.keys(n),s=0;s<i.length;s++){var o=i[s];Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))}}}function Xn(t){var e=Jn(t.$options.inject,t);e&&(Lt(!1),Object.keys(e).forEach((function(n){Vt(t,n,e[n])})),Lt(!0))}function Jn(t,e){if(t){for(var n=Object.create(null),r=pt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from;if(o in e._provided)n[s]=e._provided[o];else if("default"in t[s]){var a=t[s].default;n[s]=l(a)?a.call(e):a}else 0}}return n}}function Zn(t,e,n,s,o){var c,u=this,l=o.options;T(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(l._compiled),f=!h;this.data=t,this.props=e,this.children=n,this.parent=s,this.listeners=t.on||r,this.injections=Jn(l.inject,s),this.slots=function(){return u.$slots||Ie(s,t.scopedSlots,u.$slots=Te(n,s)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ie(s,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ie(s,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var o=ze(c,t,e,n,r,f);return o&&!i(o)&&(o.fnScopeId=l._scopeId,o.fnContext=s),o}:this._c=function(t,e,n,r){return ze(c,t,e,n,r,f)}}function tr(t,e,n,s,a){var c=t.options,u={},l=c.props;if(o(l))for(var h in l)u[h]=Cr(h,l,e||r);else o(n.attrs)&&nr(u,n.attrs),o(n.props)&&nr(u,n.props);var f=new Zn(n,u,a,s,t),d=c.render.call(null,f._c,f);if(d instanceof vt)return er(d,n,f.parent,c,f);if(i(d)){for(var p=se(d)||[],g=new Array(p.length),m=0;m<p.length;m++)g[m]=er(p[m],n,f.parent,c,f);return g}}function er(t,e,n,r,i){var s=bt(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function nr(t,e){for(var n in e)t[I(n)]=e[n]}function rr(t){return t.name||t.__name||t._componentTag}Ee(Zn.prototype);var ir={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;ir.prepatch(n,n)}else{var r=t.componentInstance=ar(t,Cn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Dn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Gn(n):Nn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?On(e,!0):e.$destroy())}},sr=Object.keys(ir);function or(t,e,n,r,i){if(!s(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(s(t.cid)&&(u=t,t=je(u,c),void 0===t))return $e(u,e,n,r,i);e=e||{},Wr(t),o(e.model)&&lr(t.options,e);var l=ne(e,t,i);if(a(t.options.functional))return tr(t,l,e,n,r);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}cr(e);var p=rr(t.options)||i,g=new vt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:f,tag:i,children:r},u);return g}}}function ar(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cr(t){for(var e=t.hook||(t.hook={}),n=0;n<sr.length;n++){var r=sr[n],i=e[r],s=ir[r];i===s||i&&i._merged||(e[r]=i?ur(s,i):s)}}function ur(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function lr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),a=s[r],c=e.model.callback;o(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(s[r]=[c].concat(a)):s[r]=c}var hr=P,fr=K.optionMergeStrategies;function dr(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,s,o=pt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)r=o[a],"__ob__"!==r&&(i=t[r],s=e[r],n&&T(t,r)?i!==s&&d(i)&&d(s)&&dr(i,s):$t(t,r,s));return t}function pr(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?dr(r,i):i}:e?t?function(){return dr(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function gr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?mr(n):n}function mr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function vr(t,e,n,r){var i=Object.create(t||null);return e?L(i,e):i}fr.data=function(t,e,n){return n?pr(t,e,n):e&&"function"!==typeof e?t:pr(t,e)},H.forEach((function(t){fr[t]=gr})),z.forEach((function(t){fr[t+"s"]=vr})),fr.watch=function(t,e,n,r){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var s={};for(var o in L(s,t),e){var a=s[o],c=e[o];a&&!i(a)&&(a=[a]),s[o]=a?a.concat(c):i(c)?c:[c]}return s},fr.props=fr.methods=fr.inject=fr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return L(i,t),e&&L(i,e),i},fr.provide=function(t,e){return t?function(){var n=Object.create(null);return dr(n,l(t)?t.call(this):t),e&&dr(n,l(e)?e.call(this):e,!1),n}:e};var yr=function(t,e){return void 0===e?t:e};function wr(t,e){var n=t.props;if(n){var r,s,o,a={};if(i(n)){r=n.length;while(r--)s=n[r],"string"===typeof s&&(o=I(s),a[o]={type:null})}else if(d(n))for(var c in n)s=n[c],o=I(c),a[o]=d(s)?s:{type:s};else 0;t.props=a}}function br(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var s=0;s<n.length;s++)r[n[s]]={from:n[s]};else if(d(n))for(var o in n){var a=n[o];r[o]=d(a)?L({from:o},a):{from:a}}else 0}}function _r(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}function Er(t,e,n){if(l(e)&&(e=e.options),wr(e,n),br(e,n),_r(e),!e._base&&(e.extends&&(t=Er(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Er(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)T(t,s)||a(s);function a(r){var i=fr[r]||yr;o[r]=i(t[r],e[r],n,r)}return o}function Tr(t,e,n,r){if("string"===typeof n){var i=t[e];if(T(i,n))return i[n];var s=I(n);if(T(i,s))return i[s];var o=A(s);if(T(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Cr(t,e,n,r){var i=e[t],s=!T(n,t),o=n[t],a=Dr(Boolean,i.type);if(a>-1)if(s&&!T(i,"default"))o=!1;else if(""===o||o===D(t)){var c=Dr(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Sr(r,i,t);var u=Rt;Lt(!0),Ft(o),Lt(u)}return o}function Sr(t,e,n){if(T(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:l(r)&&"Function"!==Ar(e.type)?r.call(t):r}}var Ir=/^\s*function (\w+)/;function Ar(t){var e=t&&t.toString().match(Ir);return e?e[1]:""}function xr(t,e){return Ar(t)===Ar(e)}function Dr(t,e){if(!i(e))return xr(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(xr(e[n],t))return n;return-1}var kr={enumerable:!0,configurable:!0,get:P,set:P};function Nr(t,e,n){kr.get=function(){return this[e][n]},kr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,kr)}function Or(t){var e=t.$options;if(e.props&&Rr(t,e.props),De(t),e.methods&&Ur(t,e.methods),e.data)Lr(t);else{var n=Ft(t._data={});n&&n.vmCount++}e.computed&&Fr(t,e.computed),e.watch&&e.watch!==at&&Br(t,e.watch)}function Rr(t,e){var n=t.$options.propsData||{},r=t._props=Bt({}),i=t.$options._propKeys=[],s=!t.$parent;s||Lt(!1);var o=function(s){i.push(s);var o=Cr(s,e,n,t);Vt(r,s,o),s in t||Nr(t,"_props",s)};for(var a in e)o(a);Lt(!0)}function Lr(t){var e=t.$options.data;e=t._data=l(e)?Mr(e,t):e||{},d(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&T(r,s)||W(s)||Nr(t,"_data",s)}var o=Ft(e);o&&o.vmCount++}function Mr(t,e){It();try{return t.call(e,e)}catch(Xo){return We(Xo,e,"data()"),{}}finally{At()}}var Pr={lazy:!0};function Fr(t,e){var n=t._computedWatchers=Object.create(null),r=lt();for(var i in e){var s=e[i],o=l(s)?s:s.get;0,r||(n[i]=new vn(t,o||P,P,Pr)),i in t||Vr(t,i,s)}}function Vr(t,e,n){var r=!lt();l(n)?(kr.get=r?$r(e):jr(n),kr.set=P):(kr.get=n.get?r&&!1!==n.cache?$r(e):jr(n.get):P,kr.set=n.set||P),Object.defineProperty(t,e,kr)}function $r(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Ct.target&&e.depend(),e.value}}function jr(t){return function(){return t.call(this,this)}}function Ur(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:O(e[n],t)}function Br(t,e){for(var n in e){var r=e[n];if(i(r))for(var s=0;s<r.length;s++)qr(t,n,r[s]);else qr(t,n,r)}}function qr(t,e,n,r){return d(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function zr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=$t,t.prototype.$delete=jt,t.prototype.$watch=function(t,e,n){var r=this;if(d(e))return qr(r,t,e,n);n=n||{},n.user=!0;var i=new vn(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'.concat(i.expression,'"');It(),Qe(e,r,[i.value],r,s),At()}return function(){i.teardown()}}}var Hr=0;function Kr(t){t.prototype._init=function(t){var e=this;e._uid=Hr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Qt(!0),e._scope._vm=!0,t&&t._isComponent?Gr(e,t):e.$options=Er(Wr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,In(e),yn(e),Me(e),Rn(e,"beforeCreate",void 0,!1),Xn(e),Or(e),Yn(e),Rn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Gr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Wr(t){var e=t.options;if(t.super){var n=Wr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Qr(t);i&&L(t.extendOptions,i),e=t.options=Er(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Qr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Yr(t){this._init(t)}function Xr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=R(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}function Jr(t){t.mixin=function(t){return this.options=Er(this.options,t),this}}function Zr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=rr(t)||rr(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Er(n.options,t),o["super"]=n,o.options.props&&ti(o),o.options.computed&&ei(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,z.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=L({},o.options),i[r]=o,o}}function ti(t){var e=t.options.props;for(var n in e)Nr(t.prototype,"_props",n)}function ei(t){var e=t.options.computed;for(var n in e)Vr(t.prototype,n,e[n])}function ni(t){z.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&d(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ri(t){return t&&(rr(t.Ctor.options)||t.tag)}function ii(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function si(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&oi(n,s,r,i)}}}function oi(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,_(n,e)}Kr(Yr),zr(Yr),Tn(Yr),An(Yr),Fe(Yr);var ai=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:ai,exclude:ai,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:ri(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&oi(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)oi(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){si(t,(function(t){return ii(e,t)}))})),this.$watch("exclude",(function(e){si(t,(function(t){return!ii(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Ue(t),n=e&&e.componentOptions;if(n){var r=ri(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!ii(s,r))||o&&r&&ii(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,_(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},ui={KeepAlive:ci};function li(t){var e={get:function(){return K}};Object.defineProperty(t,"config",e),t.util={warn:hr,extend:L,mergeOptions:Er,defineReactive:Vt},t.set=$t,t.delete=jt,t.nextTick=cn,t.observable=function(t){return Ft(t),t},t.options=Object.create(null),z.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,L(t.options.components,ui),Xr(t),Jr(t),Zr(t),ni(t)}li(Yr),Object.defineProperty(Yr.prototype,"$isServer",{get:lt}),Object.defineProperty(Yr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Yr,"FunctionalRenderContext",{value:Zn}),Yr.version=hn;var hi=w("style,class"),fi=w("input,textarea,option,select,progress"),di=function(t,e,n){return"value"===n&&fi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},pi=w("contenteditable,draggable,spellcheck"),gi=w("events,caret,typing,plaintext-only"),mi=function(t,e){return _i(e)||"false"===e?"false":"contenteditable"===t&&gi(e)?e:"true"},vi=w("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),yi="http://www.w3.org/1999/xlink",wi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},bi=function(t){return wi(t)?t.slice(6,t.length):""},_i=function(t){return null==t||!1===t};function Ei(t){var e=t.data,n=t,r=t;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Ti(r.data,e));while(o(n=n.parent))n&&n.data&&(e=Ti(e,n.data));return Ci(e.staticClass,e.class)}function Ti(t,e){return{staticClass:Si(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Ci(t,e){return o(t)||o(e)?Si(t,Ii(e)):""}function Si(t,e){return t?e?t+" "+e:t:e||""}function Ii(t){return Array.isArray(t)?Ai(t):h(t)?xi(t):"string"===typeof t?t:""}function Ai(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Ii(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function xi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Di={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ki=w("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ni=w("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Oi=function(t){return ki(t)||Ni(t)};function Ri(t){return Ni(t)?"svg":"math"===t?"math":void 0}var Li=Object.create(null);function Mi(t){if(!Z)return!0;if(Oi(t))return!1;if(t=t.toLowerCase(),null!=Li[t])return Li[t];var e=document.createElement(t);return t.indexOf("-")>-1?Li[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Li[t]=/HTMLUnknownElement/.test(e.toString())}var Pi=w("text,number,password,search,email,tel,url");function Fi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Vi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function $i(t,e){return document.createElementNS(Di[t],e)}function ji(t){return document.createTextNode(t)}function Ui(t){return document.createComment(t)}function Bi(t,e,n){t.insertBefore(e,n)}function qi(t,e){t.removeChild(e)}function zi(t,e){t.appendChild(e)}function Hi(t){return t.parentNode}function Ki(t){return t.nextSibling}function Gi(t){return t.tagName}function Wi(t,e){t.textContent=e}function Qi(t,e){t.setAttribute(e,"")}var Yi=Object.freeze({__proto__:null,createElement:Vi,createElementNS:$i,createTextNode:ji,createComment:Ui,insertBefore:Bi,removeChild:qi,appendChild:zi,parentNode:Hi,nextSibling:Ki,tagName:Gi,setTextContent:Wi,setStyleScope:Qi}),Xi={create:function(t,e){Ji(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ji(t,!0),Ji(e))},destroy:function(t){Ji(t,!0)}};function Ji(t,e){var n=t.data.ref;if(o(n)){var r=t.context,s=t.componentInstance||t.elm,a=e?null:s,c=e?void 0:s;if(l(n))Qe(n,r,[a],r,"template ref function");else{var u=t.data.refInFor,h="string"===typeof n||"number"===typeof n,f=Ht(n),d=r.$refs;if(h||f)if(u){var p=h?d[n]:n.value;e?i(p)&&_(p,s):i(p)?p.includes(s)||p.push(s):h?(d[n]=[s],Zi(r,n,d[n])):n.value=[s]}else if(h){if(e&&d[n]!==s)return;d[n]=c,Zi(r,n,a)}else if(f){if(e&&n.value!==s)return;n.value=a}else 0}}}function Zi(t,e,n){var r=t._setupState;r&&T(r,e)&&(Ht(r[e])?r[e].value=n:r[e]=n)}var ts=new vt("",{},[]),es=["create","activate","update","remove","destroy"];function ns(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&rs(t,e)||a(t.isAsyncPlaceholder)&&s(e.asyncFactory.error))}function rs(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||Pi(r)&&Pi(i)}function is(t,e,n){var r,i,s={};for(r=e;r<=n;++r)i=t[r].key,o(i)&&(s[i]=r);return s}function ss(t){var e,n,r={},c=t.modules,l=t.nodeOps;for(e=0;e<es.length;++e)for(r[es[e]]=[],n=0;n<c.length;++n)o(c[n][es[e]])&&r[es[e]].push(c[n][es[e]]);function h(t){return new vt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);o(e)&&l.removeChild(e,t)}function p(t,e,n,r,i,s,c){if(o(t.elm)&&o(s)&&(t=s[c]=bt(t)),t.isRootInsert=!i,!g(t,e,n,r)){var u=t.data,h=t.children,f=t.tag;o(f)?(t.elm=t.ns?l.createElementNS(t.ns,f):l.createElement(f,t),T(t),b(t,h,e),o(u)&&E(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,r)):(t.elm=l.createTextNode(t.text),y(n,t.elm,r))}}function g(t,e,n,r){var i=t.data;if(o(i)){var s=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1),o(t.componentInstance))return m(t,e),y(n,t.elm,r),a(s)&&v(t,e,n,r),!0}}function m(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(E(t,e),T(t)):(Ji(t),e.push(t))}function v(t,e,n,i){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<r.activate.length;++s)r.activate[s](ts,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){o(t)&&(o(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function b(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else u(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function E(t,n){for(var i=0;i<r.create.length;++i)r.create[i](ts,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(ts,t),o(e.insert)&&n.push(t))}function T(t){var e;if(o(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}o(e=Cn)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function C(t,e,n,r,i,s){for(;r<=i;++r)p(n[r],s,t,e,!1,n,r)}function S(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)S(t.children[n])}function I(t,e,n){for(;e<=n;++e){var r=t[e];o(r)&&(o(r.tag)?(A(r),S(r)):d(r.elm))}}function A(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=f(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&A(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else d(t.elm)}function x(t,e,n,r,i){var a,c,u,h,f=0,d=0,g=e.length-1,m=e[0],v=e[g],y=n.length-1,w=n[0],b=n[y],_=!i;while(f<=g&&d<=y)s(m)?m=e[++f]:s(v)?v=e[--g]:ns(m,w)?(k(m,w,r,n,d),m=e[++f],w=n[++d]):ns(v,b)?(k(v,b,r,n,y),v=e[--g],b=n[--y]):ns(m,b)?(k(m,b,r,n,y),_&&l.insertBefore(t,m.elm,l.nextSibling(v.elm)),m=e[++f],b=n[--y]):ns(v,w)?(k(v,w,r,n,d),_&&l.insertBefore(t,v.elm,m.elm),v=e[--g],w=n[++d]):(s(a)&&(a=is(e,f,g)),c=o(w.key)?a[w.key]:D(w,e,f,g),s(c)?p(w,r,t,m.elm,!1,n,d):(u=e[c],ns(u,w)?(k(u,w,r,n,d),e[c]=void 0,_&&l.insertBefore(t,u.elm,m.elm)):p(w,r,t,m.elm,!1,n,d)),w=n[++d]);f>g?(h=s(n[y+1])?null:n[y+1].elm,C(t,h,n,d,y,r)):d>y&&I(e,f,g)}function D(t,e,n,r){for(var i=n;i<r;i++){var s=e[i];if(o(s)&&ns(t,s))return i}}function k(t,e,n,i,c,u){if(t!==e){o(e.elm)&&o(i)&&(e=i[c]=bt(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?R(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;o(d)&&o(f=d.hook)&&o(f=f.prepatch)&&f(t,e);var p=t.children,g=e.children;if(o(d)&&_(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);o(f=d.hook)&&o(f=f.update)&&f(t,e)}s(e.text)?o(p)&&o(g)?p!==g&&x(h,p,g,n,u):o(g)?(o(t.text)&&l.setTextContent(h,""),C(h,null,g,0,g.length-1,n)):o(p)?I(p,0,p.length-1):o(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),o(d)&&o(f=d.hook)&&o(f=f.postpatch)&&f(t,e)}}}function N(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var O=w("attrs,class,staticClass,staticStyle,key");function R(t,e,n,r){var i,s=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return m(e,n),!0;if(o(s)){if(o(u))if(t.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!R(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(o(c)){var d=!1;for(var p in c)if(!O(p)){d=!0,E(e,n);break}!d&&c["class"]&&dn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!s(e)){var c=!1,u=[];if(s(t))c=!0,p(e,u);else{var f=o(t.nodeType);if(!f&&ns(t,e))k(t,e,u,null,null,i);else{if(f){if(1===t.nodeType&&t.hasAttribute(q)&&(t.removeAttribute(q),n=!0),a(n)&&R(t,e,u))return N(e,u,!0),t;t=h(t)}var d=t.elm,g=l.parentNode(d);if(p(e,u,d._leaveCb?null:g,l.nextSibling(d)),o(e.parent)){var m=e.parent,v=_(e);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=e.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](ts,m);var b=m.data.hook.insert;if(b.merged)for(var E=1;E<b.fns.length;E++)b.fns[E]()}else Ji(m);m=m.parent}}o(g)?I([t],0,0):o(t.tag)&&S(t)}}return N(e,u,c),e.elm}o(t)&&S(t)}}var os={create:as,update:as,destroy:function(t){as(t,ts)}};function as(t,e){(t.data.directives||e.data.directives)&&cs(t,e)}function cs(t,e){var n,r,i,s=t===ts,o=e===ts,a=ls(t.data.directives,t.context),c=ls(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,fs(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(fs(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)fs(u[n],"inserted",e,t)};s?ee(e,"insert",h):h()}if(l.length&&ee(e,"postpatch",(function(){for(var n=0;n<l.length;n++)fs(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||fs(a[n],"unbind",t,t,o)}var us=Object.create(null);function ls(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=us),i[hs(r)]=r,e._setupState&&e._setupState.__sfc){var s=r.def||Tr(e,"_setupState","v-"+r.name);r.def="function"===typeof s?{bind:s,update:s}:s}r.def=r.def||Tr(e.$options,"directives",r.name,!0)}return i}function hs(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function fs(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(Xo){We(Xo,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var ds=[Xi,os];function ps(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(t.data.attrs)||!s(e.data.attrs))){var r,i,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(r in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=L({},h)),h)i=h[r],c=l[r],c!==i&&gs(u,r,i,e.data.pre);for(r in(et||rt)&&h.value!==l.value&&gs(u,"value",h.value),l)s(h[r])&&(wi(r)?u.removeAttributeNS(yi,bi(r)):pi(r)||u.removeAttribute(r))}}function gs(t,e,n,r){r||t.tagName.indexOf("-")>-1?ms(t,e,n):vi(e)?_i(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):pi(e)?t.setAttribute(e,mi(e,n)):wi(e)?_i(n)?t.removeAttributeNS(yi,bi(e)):t.setAttributeNS(yi,e,n):ms(t,e,n)}function ms(t,e,n){if(_i(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var vs={create:ps,update:ps};function ys(t,e){var n=e.elm,r=e.data,i=t.data;if(!(s(r.staticClass)&&s(r.class)&&(s(i)||s(i.staticClass)&&s(i.class)))){var a=Ei(e),c=n._transitionClasses;o(c)&&(a=Si(a,Ii(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var ws,bs={create:ys,update:ys},_s="__r",Es="__c";function Ts(t){if(o(t[_s])){var e=et?"change":"input";t[e]=[].concat(t[_s],t[e]||[]),delete t[_s]}o(t[Es])&&(t.change=[].concat(t[Es],t.change||[]),delete t[Es])}function Cs(t,e,n){var r=ws;return function i(){var s=e.apply(null,arguments);null!==s&&As(t,i,n,r)}}var Ss=Ze&&!(ot&&Number(ot[1])<=53);function Is(t,e,n,r){if(Ss){var i=Un,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}ws.addEventListener(t,e,ct?{capture:n,passive:r}:n)}function As(t,e,n,r){(r||ws).removeEventListener(t,e._wrapper||e,n)}function xs(t,e){if(!s(t.data.on)||!s(e.data.on)){var n=e.data.on||{},r=t.data.on||{};ws=e.elm||t.elm,Ts(n),te(n,r,Is,As,Cs,e.context),ws=void 0}}var Ds,ks={create:xs,update:xs,destroy:function(t){return xs(t,ts)}};function Ns(t,e){if(!s(t.data.domProps)||!s(e.data.domProps)){var n,r,i=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(o(u.__ob__)||a(u._v_attr_proxy))&&(u=e.data.domProps=L({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=s(r)?"":String(r);Os(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ni(i.tagName)&&s(i.innerHTML)){Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>".concat(r,"</svg>");var h=Ds.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Xo){}}}}function Os(t,e){return!t.composing&&("OPTION"===t.tagName||Rs(t,e)||Ls(t,e))}function Rs(t,e){var n=!0;try{n=document.activeElement!==t}catch(Xo){}return n&&t.value!==e}function Ls(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.number)return y(n)!==y(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Ms={create:Ns,update:Ns},Ps=C((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Fs(t){var e=Vs(t.style);return t.staticStyle?L(t.staticStyle,e):e}function Vs(t){return Array.isArray(t)?M(t):"string"===typeof t?Ps(t):t}function $s(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Fs(i.data))&&L(r,n)}(n=Fs(t.data))&&L(r,n);var s=t;while(s=s.parent)s.data&&(n=Fs(s.data))&&L(r,n);return r}var js,Us=/^--/,Bs=/\s*!important$/,qs=function(t,e,n){if(Us.test(e))t.style.setProperty(e,n);else if(Bs.test(n))t.style.setProperty(D(e),n.replace(Bs,""),"important");else{var r=Hs(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},zs=["Webkit","Moz","ms"],Hs=C((function(t){if(js=js||document.createElement("div").style,t=I(t),"filter"!==t&&t in js)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<zs.length;n++){var r=zs[n]+e;if(r in js)return r}}));function Ks(t,e){var n=e.data,r=t.data;if(!(s(n.staticStyle)&&s(n.style)&&s(r.staticStyle)&&s(r.style))){var i,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,f=Vs(e.data.style)||{};e.data.normalizedStyle=o(f.__ob__)?L({},f):f;var d=$s(e,!0);for(a in h)s(d[a])&&qs(c,a,"");for(a in d)i=d[a],i!==h[a]&&qs(c,a,null==i?"":i)}}var Gs={create:Ks,update:Ks},Ws=/\s+/;function Qs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ws).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ys(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ws).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Xs(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&L(e,Js(t.name||"v")),L(e,t),e}return"string"===typeof t?Js(t):void 0}}var Js=C((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Zs=Z&&!nt,to="transition",eo="animation",no="transition",ro="transitionend",io="animation",so="animationend";Zs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(no="WebkitTransition",ro="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(io="WebkitAnimation",so="webkitAnimationEnd"));var oo=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function ao(t){oo((function(){oo(t)}))}function co(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Qs(t,e))}function uo(t,e){t._transitionClasses&&_(t._transitionClasses,e),Ys(t,e)}function lo(t,e,n){var r=fo(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===to?ro:so,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var ho=/\b(transform|all)(,|$)/;function fo(t,e){var n,r=window.getComputedStyle(t),i=(r[no+"Delay"]||"").split(", "),s=(r[no+"Duration"]||"").split(", "),o=po(i,s),a=(r[io+"Delay"]||"").split(", "),c=(r[io+"Duration"]||"").split(", "),u=po(a,c),l=0,h=0;e===to?o>0&&(n=to,l=o,h=s.length):e===eo?u>0&&(n=eo,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?to:eo:null,h=n?n===to?s.length:c.length:0);var f=n===to&&ho.test(r[no+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function po(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return go(e)+go(t[n])})))}function go(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function mo(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Xs(t.data.transition);if(!s(r)&&!o(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,f=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,g=r.appearActiveClass,m=r.beforeEnter,v=r.enter,w=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,E=r.appear,T=r.afterAppear,C=r.appearCancelled,S=r.duration,I=Cn,A=Cn.$vnode;while(A&&A.parent)I=A.context,A=A.parent;var x=!I._isMounted||!t.isRootInsert;if(!x||E||""===E){var D=x&&d?d:c,k=x&&g?g:f,N=x&&p?p:u,O=x&&_||m,R=x&&l(E)?E:v,L=x&&T||w,M=x&&C||b,P=y(h(S)?S.enter:S);0;var F=!1!==i&&!nt,V=wo(R),$=n._enterCb=U((function(){F&&(uo(n,N),uo(n,k)),$.cancelled?(F&&uo(n,D),M&&M(n)):L&&L(n),n._enterCb=null}));t.data.show||ee(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,$)})),O&&O(n),F&&(co(n,D),co(n,k),ao((function(){uo(n,D),$.cancelled||(co(n,N),V||(yo(P)?setTimeout($,P):lo(n,a,$)))}))),t.data.show&&(e&&e(),R&&R(n,$)),F||V||$()}}}function vo(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Xs(t.data.transition);if(s(r)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,g=r.leaveCancelled,m=r.delayLeave,v=r.duration,w=!1!==i&&!nt,b=wo(d),_=y(h(v)?v.leave:v);0;var E=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(uo(n,u),uo(n,l)),E.cancelled?(w&&uo(n,c),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),w&&(co(n,c),co(n,l),ao((function(){uo(n,c),E.cancelled||(co(n,u),b||(yo(_)?setTimeout(E,_):lo(n,a,E)))}))),d&&d(n,E),w||b||E())}}function yo(t){return"number"===typeof t&&!isNaN(t)}function wo(t){if(s(t))return!1;var e=t.fns;return o(e)?wo(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function bo(t,e){!0!==e.data.show&&mo(e)}var _o=Z?{create:bo,activate:bo,remove:function(t,e){!0!==t.data.show?vo(t,e):e()}}:{},Eo=[vs,bs,ks,Ms,Gs,_o],To=Eo.concat(ds),Co=ss({nodeOps:Yi,modules:To});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Oo(t,"input")}));var So={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ee(n,"postpatch",(function(){So.componentUpdated(t,e,n)})):Io(t,e,n.context),t._vOptions=[].map.call(t.options,Do)):("textarea"===n.tag||Pi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ko),t.addEventListener("compositionend",No),t.addEventListener("change",No),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Io(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,Do);if(i.some((function(t,e){return!$(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return xo(t,i)})):e.value!==e.oldValue&&xo(e.value,i);s&&Oo(t,"change")}}}};function Io(t,e,n){Ao(t,e,n),(et||rt)&&setTimeout((function(){Ao(t,e,n)}),0)}function Ao(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=j(r,Do(o))>-1,o.selected!==s&&(o.selected=s);else if($(Do(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function xo(t,e){return e.every((function(e){return!$(e,t)}))}function Do(t){return"_value"in t?t._value:t.value}function ko(t){t.target.composing=!0}function No(t){t.target.composing&&(t.target.composing=!1,Oo(t.target,"input"))}function Oo(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Ro(t){return!t.componentInstance||t.data&&t.data.transition?t:Ro(t.componentInstance._vnode)}var Lo={bind:function(t,e,n){var r=e.value;n=Ro(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,mo(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Ro(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?mo(n,(function(){t.style.display=t.__vOriginalDisplay})):vo(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},Mo={model:So,show:Lo},Po={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Fo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Fo(Ue(e.children)):t}function Vo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[I(r)]=i[r];return e}function $o(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function jo(t){while(t=t.parent)if(t.data.transition)return!0}function Uo(t,e){return e.key===t.key&&e.tag===t.tag}var Bo=function(t){return t.tag||Se(t)},qo=function(t){return"show"===t.name},zo={name:"transition",props:Po,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Bo),n.length)){0;var r=this.mode;0;var i=n[0];if(jo(this.$vnode))return i;var s=Fo(i);if(!s)return i;if(this._leaving)return $o(t,i);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:u(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Vo(this),c=this._vnode,l=Fo(c);if(s.data.directives&&s.data.directives.some(qo)&&(s.data.show=!0),l&&l.data&&!Uo(s,l)&&!Se(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===r)return this._leaving=!0,ee(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),$o(t,i);if("in-out"===r){if(Se(s))return c;var f,d=function(){f()};ee(a,"afterEnter",d),ee(a,"enterCancelled",d),ee(h,"delayLeave",(function(t){f=t}))}}return i}}},Ho=L({tag:String,moveClass:String},Po);delete Ho.mode;var Ko={props:Ho,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Sn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=Vo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Go),t.forEach(Wo),t.forEach(Qo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;co(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ro,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ro,t),n._moveCb=null,uo(n,e))})}})))},methods:{hasMove:function(t,e){if(!Zs)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ys(n,t)})),Qs(n,e),n.style.display="none",this.$el.appendChild(n);var r=fo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Go(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Wo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Qo(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),s.transitionDuration="0s"}}var Yo={Transition:zo,TransitionGroup:Ko};Yr.config.mustUseProp=di,Yr.config.isReservedTag=Oi,Yr.config.isReservedAttr=hi,Yr.config.getTagNamespace=Ri,Yr.config.isUnknownElement=Mi,L(Yr.options.directives,Mo),L(Yr.options.components,Yo),Yr.prototype.__patch__=Z?Co:P,Yr.prototype.$mount=function(t,e){return t=t&&Z?Fi(t):void 0,xn(this,t,e)},Z&&setTimeout((function(){K.devtools&&ht&&ht.emit("init",Yr)}),0)},9662:function(t,e,n){var r=n(614),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),g=n(8052),m=n(7045),v=n(7976),y=n(9518),w=n(7674),b=n(5112),_=n(9711),E=n(9909),T=E.enforce,C=E.get,S=c.Int8Array,I=S&&S.prototype,A=c.Uint8ClampedArray,x=A&&A.prototype,D=S&&y(S),k=I&&y(I),N=Object.prototype,O=c.TypeError,R=b("toStringTag"),L=_("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",P=o&&!!w&&"Opera"!==f(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},$={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(V,e)||h($,e)},U=function(t){var e=y(t);if(l(e)){var n=C(e);return n&&h(n,M)?n[M]:U(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(V,e)||h($,e)},q=function(t){if(B(t))return t;throw O("Target is not a typed array")},z=function(t){if(u(t)&&(!w||v(D,t)))return t;throw O(d(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}k[t]&&!n||g(k,t,n?e:P&&I[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(D[t]&&!n)return;try{return g(D,t,n?e:P&&D[t]||e)}catch(s){}}for(r in V)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in V)i=c[r],s=i&&i.prototype,s?T(s)[M]=i:P=!1;for(r in $)i=c[r],s=i&&i.prototype,s&&(T(s)[M]=i);if((!P||!u(D)||D===Function.prototype)&&(D=function(){throw O("Incorrect invocation")},P))for(r in V)c[r]&&w(c[r],D);if((!P||!k||k===N)&&(k=D.prototype,P))for(r in V)c[r]&&w(c[r].prototype,k);if(P&&y(x)!==k&&w(x,k),a&&!h(k,R))for(r in F=!0,m(k,R,{configurable:!0,get:function(){return l(this)?this[L]:void 0}}),V)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:F&&L,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:U,isView:j,isTypedArray:B,TypedArray:D,TypedArrayPrototype:k}},7745:function(t,e,n){var r=n(6244);t.exports=function(t,e){var n=0,i=r(e),s=new t(i);while(i>n)s[n]=e[n++];return s}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},1843:function(t,e,n){var r=n(6244);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},1572:function(t,e,n){var r=n(6244),i=n(9303),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?o:t[h];return l}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7045:function(t,e,n){var r=n(6339),i=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},8052:function(t,e,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},9363:function(t){t.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326);t.exports="undefined"!=typeof process&&"process"==r(process)},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},9974:function(t,e,n){var r=n(1470),i=n(9662),s=n(4374),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(t,e,n){var r=n(1702),i=n(9662);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},1470:function(t,e,n){var r=n(4326),i=n(1702);t.exports=function(t){if("Function"===r(t))return i(t)}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9909:function(t,e,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},s=function(t){return l(t,b)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4067:function(t,e,n){var r=n(648);t.exports=function(t){var e=r(t);return"BigInt64Array"==e||"BigUint64Array"==e}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=v(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return s(this)&&f(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(5668),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},7152:function(t,e,n){"use strict";var r=n(7854),i=n(2104),s=n(614),o=n(9363),a=n(8113),c=n(206),u=n(8053),l=r.Function,h=/MSIE .\./.test(a)||o&&function(){var t=r.Bun.version.split(".");return t.length<3||0==t[0]&&(t[1]<3||3==t[1]&&0==t[2])}();t.exports=function(t,e){var n=e?2:1;return h?function(r,o){var a=u(arguments.length,1)>n,h=s(r)?r:l(r),f=a?c(arguments,n):[],d=a?function(){i(h,this,f)}:h;return e?t(d,o):t(d)}:t}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.31.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293),s=n(7854),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:function(t,e,n){var r,i,s,o,a=n(7854),c=n(2104),u=n(9974),l=n(614),h=n(2597),f=n(7293),d=n(490),p=n(206),g=n(317),m=n(8053),v=n(6833),y=n(5268),w=a.setImmediate,b=a.clearImmediate,_=a.process,E=a.Dispatch,T=a.Function,C=a.MessageChannel,S=a.String,I=0,A={},x="onreadystatechange";f((function(){r=a.location}));var D=function(t){if(h(A,t)){var e=A[t];delete A[t],e()}},k=function(t){return function(){D(t)}},N=function(t){D(t.data)},O=function(t){a.postMessage(S(t),r.protocol+"//"+r.host)};w&&b||(w=function(t){m(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return A[++I]=function(){c(e,void 0,n)},i(I),I},b=function(t){delete A[t]},y?i=function(t){_.nextTick(k(t))}:E&&E.now?i=function(t){E.now(k(t))}:C&&!v?(s=new C,o=s.port2,s.port1.onmessage=N,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(O)?(i=O,a.addEventListener("message",N,!1)):i=x in g("script")?function(t){d.appendChild(g("script"))[x]=function(){d.removeChild(this),D(t)}}:function(t){setTimeout(k(t),0)}),t.exports={set:w,clear:b}},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},4599:function(t,e,n){var r=n(7593),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw i("Can't convert number to bigint");return BigInt(e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},4811:function(t,e,n){var r=n(7854),i=n(614),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},1439:function(t,e,n){"use strict";var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(t,e,n){"use strict";var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return l(n,t)}))},5315:function(t,e,n){"use strict";var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=o(t),l=s(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},1091:function(t,e,n){var r=n(2109),i=n(7854),s=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==s},{clearImmediate:s})},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),f=n(3678),d=n(1060),p=n(9781),g=n(1913),m="DOMException",v=s("Error"),y=s(m),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=v(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,w),r},b=w.prototype=y.prototype,_="stack"in v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),C=!!T&&!(T.writable&&T.configurable),S=_&&!C&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:y});var I=s(m),A=I.prototype;if(A.constructor!==I)for(var x in g||a(A,"constructor",o(1,I)),f)if(c(f,x)){var D=f[x],k=D.s;c(I,k)||a(I,k,o(6,D.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var r=n(2109),i=n(7854),s=n(261).set,o=n(7152),a=i.setImmediate?o(s,!1):s;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==a},{setImmediate:a})},6067:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return mt},KN:function(){return yt}});n(7658);var r=n(1322),i=n(4508),s=n(2348);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}w((t=>({...t,get:(e,n,r)=>x(e,n)||t.get(e,n,r),has:(e,n)=>!!x(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",O="0.9.12",R=new i.Yd("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",P="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",$="@firebase/auth",j="@firebase/auth-compat",U="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.22.2",st="[DEFAULT]",ot={[N]:"fire-core",[L]:"fire-core-compat",[P]:"fire-analytics",[M]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[$]:"fire-auth",[j]:"fire-auth-compat",[U]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new s.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw dt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw dt.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw dt.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(o,u),u}function vt(t=st){const e=at.get(t);if(!e&&t===st&&(0,s.aH)())return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",bt=1,_t="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=C(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function Ct(t){try{const e=await Tt(),n=await e.transaction(_t).objectStore(_t).get(It(t));return n}catch(e){if(e instanceof s.ZR)R.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});R.warn(t.message)}}}async function St(t,e){try{const n=await Tt(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);await i.put(e,It(t)),await r.done}catch(n){if(n instanceof s.ZR)R.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(t.message)}}}function It(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,xt=2592e6;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ot(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=kt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=xt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=kt(),{heartbeatsToSend:e,unsentEntries:n}=Nt(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function kt(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=At){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Rt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ot{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Rt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r.wA("platform-logger",(t=>new D(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Dt(t)),"PRIVATE")),yt(N,O,t),yt(N,O,"esm2017"),yt("fire-js","")}Lt("")},1322:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(2348);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},4508:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},5467:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(6067),i="firebase",s="9.22.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},5368:function(t,e,n){"use strict";n.d(e,{hJ:function(){return Cl},ad:function(){return xl},cf:function(){return gh},IO:function(){return th},ar:function(){return nh}});n(1439),n(7585),n(5315),n(7658),n(2801);var r,i=n(6067),s=n(1322),o=n(4508),a=n(2348),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y,w.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",(()=>{}),e),h.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function D(t){return/^[\s\xa0]*$/.test(t)}function k(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function N(t){return-1!=k().indexOf(t)}function O(t){return O[" "](t),t}function R(t,e){var n=br;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}O[" "]=function(){};var L,M,P=N("Opera"),F=N("Trident")||N("MSIE"),V=N("Edge"),$=V||F,j=N("Gecko")&&!(-1!=k().toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),U=-1!=k().toLowerCase().indexOf("webkit")&&!N("Edge");function B(){var t=h.document;return t?t.documentMode:void 0}t:{var q="",z=function(){var t=k();return j?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):U?/WebKit\/(\S+)/.exec(t):P?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(z&&(q=z?z[1]:""),F){var H=B();if(null!=H&&H>parseFloat(q)){L=String(H);break t}}L=q}if(h.document&&F){var K=B();M=K||(parseInt(L,10)||void 0)}else M=void 0;var G=M;function W(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(j){t:{try{O(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.$.h.call(this)}}_(W,A);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=C(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new J(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=bt(n),t&&t[Y]?t.O(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=d(i)?!!i.capture:!!i,a=yt(t);if(a||(t[ct]=a=new st(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)x||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=vt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=bt(n),t&&t[Y]?t.P(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);else r=d(r)?!!r.capture:!!r,n=bt(n),t&&t[Y]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Y])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):Z(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function vt(t,e){if(t.fa)t=!0;else{e=new W(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gt(t),t=n.call(r,e)}return t}function yt(t){return t=t[ct],t instanceof st?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function _t(){E.call(this),this.i=new st(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;e=new A(r,t),it(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tt(o,r,!0,e)&&i}if(o=e.g=t,i=Tt(o,r,!0,e)&&i,i=Tt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tt(o,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ot(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(_t,E),_t.prototype[Y]=!0,_t.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function It(){var t=Lt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class At{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var xt=new St((()=>new Dt),(t=>t.reset()));class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function kt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Nt(t){h.setTimeout((()=>{throw t}),0)}let Ot,Rt=!1,Lt=new At,Mt=()=>{const t=h.Promise.resolve(void 0);Ot=()=>{t.then(Pt)}};var Pt=()=>{for(var t;t=It();){try{t.h.call(t.g)}catch(n){Nt(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rt=!1};function Ft(t,e){_t.call(this),this.h=t||1,this.g=e||h,this.j=w(this.qb,this),this.l=Date.now()}function Vt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function jt(t){t.g=$t((()=>{t.g=null,t.i&&(t.i=!1,jt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Ft,_t),r=Ft.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Vt(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ft.$.N.call(this),Vt(this),delete this.g};class Ut extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(t){E.call(this),this.h=t,this.g={}}_(Bt,E);var qt=[];function zt(t,e,n,r){Array.isArray(n)||(n&&(qt[0]=n.toString()),n=qt);for(var i=0;i<n.length;i++){var s=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ht(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function Kt(){this.g=!0}function Gt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Wt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Xt(t,n)+(r?" "+r:"")}))}function Yt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Xt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ct(n)}catch(a){return e}}Bt.prototype.N=function(){Bt.$.N.call(this),Ht(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kt.prototype.Ea=function(){this.g=!1},Kt.prototype.info=function(){};var Jt={},Zt=null;function te(){return Zt=Zt||new _t}function ee(t){A.call(this,Jt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){A.call(this,Jt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();Et(e,new re(e,t))}function se(t,e){A.call(this,Jt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Jt.Ta="serverreachability",_(ee,A),Jt.STAT_EVENT="statevent",_(re,A),Jt.Ua="timingevent",_(se,A);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ue(){}function le(t){return t.h||(t.h=t.i())}function he(){}ue.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){A.call(this,"d")}function ge(){A.call(this,"c")}function me(){}function ve(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Bt(this),this.P=we,t=$?125:void 0,this.V=new Ft(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ye}function ye(){this.i=null,this.g="",this.h=!1}_(pe,A),_(ge,A),_(me,ue),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},fe=new me;var we=45e3,be={},_e={};function Ee(t,e,n){t.L=1,t.v=ze($e(e)),t.s=n,t.S=!0,Te(t,null)}function Te(t,e){t.G=Date.now(),Ae(t),t.A=$e(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ye,t.g=ur(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ut(w(t.Pa,t,t.g),t.O)),zt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Gt(t.j,t.u,t.A,t.m,t.W,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Ie(t,n),r==_e){4==e&&(t.o=4,ie(14),i=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==be){t.o=4,ie(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Qt(t.j,t.m,r,null),Oe(t,r)}Ce(t)&&r!=_e&&r!=be&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,ie(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),Ne(t),ke(t))}function Ie(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?_e:(n=Number(e.substring(n,r)),isNaN(n)?be:(r+=1,r+n>e.length?_e:(e=e.slice(r,r+n),t.C=r+n,e)))}function Ae(t){t.Y=Date.now()+t.P,xe(t,t.P)}function xe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(w(t.lb,t),e)}function De(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function ke(t){0==t.l.H||t.J||ir(t.l,t)}function Ne(t){De(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Vt(t.V),Ht(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Oe(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),Kn(n)}tr(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(w(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&rr(n),!D(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(dn(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,qe(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(De(a),Ae(a)),r.g=o}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):Hn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ne(4)}catch(u){}}function Re(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Le(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Me(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Le(t),r=Re(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=ve.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Vn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Vn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||$||this.g&&(this.h.h||this.g.ja()||$n(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),De(this);var n=this.g.da();this.ca=n;e:if(Ce(this)){var r=$n(this.g);t="";var i=r.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ne(this),ke(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Wt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ie(12),Ne(this),ke(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oe(this,n)}this.S?(Se(this,l,o),$&&this.i&&3==l&&(zt(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),Oe(this,o)),4==l&&Ne(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,Ae(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),Ne(this),ke(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(De(this),Se(this,t,e),this.i&&4!=t&&Ae(this))}},r.cancel=function(){this.J=!0,Ne(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Yt(this.j,this.A),2!=this.L&&(ne(),ie(17)),Ne(this),this.o=2,ke(this)):xe(this,this.Y-t)};var Pe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ve(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ve){this.h=t.h,je(this,t.j),this.s=t.s,this.g=t.g,Ue(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Be(this,n),this.o=t.o}else t&&(e=String(t).match(Pe))?(this.h=!1,je(this,e[1]||"",!0),this.s=He(e[2]||""),this.g=He(e[3]||"",!0),Ue(this,e[4]),this.l=He(e[5]||"",!0),Be(this,e[6]||"",!0),this.o=He(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function $e(t){return new Ve(t)}function je(t,e,n){t.j=n?He(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ue(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Be(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=Ke(e,Xe)),t.i=new Ze(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function ze(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function He(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ge(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ke(e,We,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ke(e,We,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ke(n,"/"==n.charAt(0)?Ye:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ke(n,Je)),t.join("")};var We=/[#\/\?@]/g,Qe=/[#\?:]/g,Ye=/[#\?]/g,Xe=/[#\?@]/g,Je=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Fe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),S(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||un,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function vn(){this.g=new mn}function yn(t,e,n){const r=n||"";try{Me(t,(function(t,n){let i=t;d(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wn(t,e){const n=new Kt;if(h.Image){const r=new Image;r.onload=b(bn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(bn,n,r,"TestLoadImage: error",!1,e),r.onabort=b(bn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(bn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function bn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function _n(t){this.l=t.fc||null,this.j=t.ob||!1}function En(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_(_n,ue),_n.prototype.g=function(){return new En(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),_(En,_t);var Tn=0;function Cn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,In(t)}function In(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,In(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=Tn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):In(this),3==this.readyState&&Cn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},r.Ya=function(t){this.g&&(this.response=t,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var An=h.JSON.parse;function xn(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dn,this.L=this.M=!1}_(xn,_t);var Dn="",kn=/^https?$/i,Nn=["POST","PUT"];function On(t){return F&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Rn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ln(t),Pn(t)}function Ln(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Mn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Vn(t)||2!=t.da()))if(t.v&&4==Vn(t))$t(t.La,0,t);else if(Et(t,"readystatechange"),4==Vn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Pe)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!kn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Ln(t)}}finally{Pn(t)}}}function Pn(t,e){if(t.g){Fn(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Dn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Wr){return null}}function jn(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(D(t[r]))continue;var n=kt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}et(e,(function(t){return t.join(", ")}))}function Un(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Bn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Un(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):qe(t,e,n))}function qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zn(t){this.Ga=0,this.j=[],this.l=new Kt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,t),this.hb=qn("retryDelaySeedMs",1e4,t),this.eb=qn("forwardChannelMaxRetries",2,t),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new vn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hn(t){if(Gn(t),3==t.H){var e=t.W++,n=$e(t.I);if(qe(n,"SID",t.K),qe(n,"RID",e),qe(n,"TYPE","terminate"),Xn(t,n),e=new ve(t,t.l,e),e.L=2,e.v=ze($e(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=ur(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ae(e)}ar(t)}function Kn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Gn(t){Kn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Wn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;Ot||Mt(),Rt||(Ot(),Rt=!0),Lt.add(e,t),t.C=0}}function Qn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(w(t.Na,t,e),sr(t,t.C)),t.C++,!0))}function Yn(t,e){var n;n=e?e.m:t.W++;const r=$e(t.I);qe(r,"SID",t.K),qe(r,"RID",n),qe(r,"AID",t.V),Xn(t,r),t.o&&t.s&&Bn(r,t.o,t.s),n=new ve(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Jn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Xn(t,e){t.na&&tt(t.na,(function(t,n){qe(e,n,t)})),t.h&&Me({},(function(t,n){qe(e,n,t)}))}function Jn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?w(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),s=!1;else try{yn(a,t,"req"+n+"_")}catch(si){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ot||Mt(),Rt||(Ot(),Rt=!0),Lt.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(w(t.Ma,t),sr(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new ve(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=$e(t.wa);qe(e,"RID","rpc"),qe(e,"SID",t.K),qe(e,"AID",t.V),qe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&qe(e,"TO",t.qa),qe(e,"TYPE","xmlhttp"),Xn(t,e),t.o&&t.s&&Bn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ze($e(e)),n.s=null,n.S=!0,Te(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ir(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=te(),Et(r,new se(r,n)),Wn(t)}else Zn(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&Qn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}function sr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=w(t.pb,t);n||(n=new Ve("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||je(n,"https"),ze(n)),wn(n.toString(),r)}else ie(2);t.H=0,t.h&&t.h.za(e),ar(t),Gn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(I(t.ma,e),I(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function cr(t,e,n){var r=n instanceof Ve?$e(n):new Ve(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Ue(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ve(null);r&&je(s,r),e&&(s.g=e),i&&Ue(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&qe(r,n,e),qe(r,"VER",t.ra),Xn(t,r),r}function ur(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new xn(new _n({ob:!0})):new xn(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(F&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function fr(t,e){_t.call(this),this.g=new zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!D(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!D(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){ge.call(this),this.status=1}function gr(t){this.g=t}function mr(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function yr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function wr(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=xn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Rn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=C(Nn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=On(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=$t(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Rn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Pn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pn(this,!0)),xn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Mn(this):this.kb())},r.kb=function(){Mn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),An(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ve(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nt(s),it(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Jn(this,i,e),n=$e(this.I),qe(n,"RID",t),qe(n,"CVER",22),this.F&&qe(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Un(s)))+"&"+e:this.o&&Bn(n,this.o,s)),dn(this.i,i),this.bb&&qe(n,"TYPE","init"),this.P?(qe(n,"$req",e),qe(n,"SID","null"),i.aa=!0,Ee(i,n,null)):Ee(i,n,e),this.H=2}}else 3==this.H&&(t?Yn(this,t):0==this.j.length||ln(this.i)||Yn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(w(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),Kn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Kn(this),tr(this),ie(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},_(fr,_t),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cr(t,null,t.Y),Wn(t)},fr.prototype.close=function(){Hn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ct(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Wn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,Hn(this.g),delete this.g,fr.$.N.call(this)},_(dr,pe),_(pr,ge),_(gr,lr),gr.prototype.Ba=function(){Et(this.g,"a")},gr.prototype.Aa=function(t){Et(this.g,new dr(t))},gr.prototype.za=function(t){Et(this.g,new pr)},gr.prototype.ya=function(){Et(this.g,"b")},_(vr,mr),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)yr(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){yr(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){yr(this,r),i=0;break}}this.h=i,this.i+=e},vr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var br={};function _r(t){return-128<=t&&128>t?R(t,(function(t){return new wr([0|t],0>t?-1:0)})):new wr([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return kr(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cr;return new wr(e,0)}function Tr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return kr(Tr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Sr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Er(Math.pow(e,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Cr=4294967296,Sr=_r(0),Ir=_r(1),Ar=_r(16777216);function xr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Dr(t){return-1==t.h}function kr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new wr(n,~t.h).add(Ir)}function Nr(t,e){return t.add(kr(e))}function Or(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Rr(t,e){this.g=t,this.h=e}function Lr(t,e){if(xr(e))throw Error("division by zero");if(xr(t))return new Rr(Sr,Sr);if(Dr(t))return e=Lr(kr(t),e),new Rr(kr(e.g),kr(e.h));if(Dr(e))return e=Lr(t,kr(e)),new Rr(kr(e.g),e.h);if(30<t.g.length){if(Dr(t)||Dr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ir,r=e;0>=r.X(t);)n=Mr(n),r=Mr(r);var i=Pr(n,1),s=Pr(r,1);for(r=Pr(r,2),n=Pr(n,2);!xr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Pr(r,1),n=Pr(n,1)}return e=Nr(t,i.R(e)),new Rr(i,e)}for(i=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(e);Dr(o)||0<o.X(t);)n-=r,s=Er(n),o=s.R(e);xr(s)&&(s=Ir),i=i.add(s),t=Nr(t,o)}return new Rr(i,t)}function Mr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new wr(n,t.h)}function Pr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new wr(i,t.h)}r=wr.prototype,r.ea=function(){if(Dr(this))return-kr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cr+r)*e,e*=Cr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(xr(this))return"0";if(Dr(this))return"-"+kr(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var i=Lr(n,e).g;n=Nr(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,xr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=Nr(this,t),Dr(t)?-1:xr(t)?0:1},r.abs=function(){return Dr(this)?kr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(xr(this)||xr(t))return Sr;if(Dr(this))return Dr(t)?kr(this).R(kr(t)):kr(kr(this).R(t));if(Dr(t))return kr(this.R(kr(t)));if(0>this.X(Ar)&&0>t.X(Ar))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Or(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Or(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Or(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Or(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new wr(n,0)},r.gb=function(t){return Lr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new wr(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new wr(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new wr(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",_t.prototype.listen=_t.prototype.O,xn.prototype.listenOnce=xn.prototype.P,xn.prototype.getLastError=xn.prototype.Sa,xn.prototype.getLastErrorCode=xn.prototype.Ia,xn.prototype.getStatus=xn.prototype.da,xn.prototype.getResponseJson=xn.prototype.Wa,xn.prototype.getResponseText=xn.prototype.ja,xn.prototype.send=xn.prototype.ha,xn.prototype.setWithCredentials=xn.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=Er,wr.fromString=Tr;var Fr=u.createWebChannelTransport=function(){return new hr},Vr=u.getStatEventTarget=function(){return te()},$r=u.ErrorCode=ae,jr=u.EventType=ce,Ur=u.Event=Jt,Br=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=u.FetchXmlHttpFactory=_n,zr=u.WebChannel=he,Hr=u.XhrIo=xn,Kr=u.Md5=vr,Gr=u.Integer=wr;const Wr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qr.UNAUTHENTICATED=new Qr(null),Qr.GOOGLE_CREDENTIALS=new Qr("google-credentials-uid"),Qr.FIRST_PARTY=new Qr("first-party-uid"),Qr.MOCK_USER=new Qr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yr="9.22.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new o.Yd("@firebase/firestore");function Jr(){return Xr.logLevel}function Zr(t,...e){if(Xr.logLevel<=o["in"].DEBUG){const n=e.map(ni);Xr.debug(`Firestore (${Yr}): ${t}`,...n)}}function ti(t,...e){if(Xr.logLevel<=o["in"].ERROR){const n=e.map(ni);Xr.error(`Firestore (${Yr}): ${t}`,...n)}}function ei(t,...e){if(Xr.logLevel<=o["in"].WARN){const n=e.map(ni);Xr.warn(`Firestore (${Yr}): ${t}`,...n)}}function ni(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function ii(t,e){t||ri()}function si(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Qr.UNAUTHENTICATED)))}shutdown(){}}class hi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class fi{constructor(t){this.t=t,this.currentUser=Qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ii("string"==typeof e.accessToken),new ui(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ii(null===t||"string"==typeof t),new Qr(t)}}class di{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Qr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new di(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Qr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mi{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ii("string"==typeof t.token),this.T=t.token,new gi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=vi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function wi(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return _i.fromMillis(Date.now())}static fromDate(t){return _i.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new _i(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?wi(this.nanoseconds,t.nanoseconds):wi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ei(t)}static min(){return new Ei(new _i(0,0))}static max(){return new Ei(new _i(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e,n){void 0===e?e=0:e>t.length&&ri(),void 0===n?n=t.length-e:n>t.length-e&&ri(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ti.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ti?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ci extends Ti{construct(t,e,n){return new Ci(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ai(oi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ci(e)}static emptyPath(){return new Ci([])}}const Si=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ii extends Ti{construct(t,e,n){return new Ii(t,e,n)}static isValidIdentifier(t){return Si.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ii.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ii(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ai(oi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ai(oi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ai(oi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ii(e)}static emptyPath(){return new Ii([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t){this.path=t}static fromPath(t){return new Ai(Ci.fromString(t))}static fromName(t){return new Ai(Ci.fromString(t).popFirst(5))}static empty(){return new Ai(Ci.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ci.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ci.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ai(new Ci(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}xi.UNKNOWN_ID=-1;function Di(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ei.fromTimestamp(1e9===r?new _i(n+1,0):new _i(n,r));return new Ni(i,Ai.empty(),e)}function ki(t){return new Ni(t.readTime,t.key,-1)}class Ni{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ni(Ei.min(),Ai.empty(),-1)}static max(){return new Ni(Ei.max(),Ai.empty(),-1)}}function Oi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ai.comparator(t.documentKey,e.documentKey),0!==n?n:wi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Li{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t){if(t.code!==oi.FAILED_PRECONDITION||t.message!==Ri)throw t;Zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Pi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Pi?e:Pi.resolve(e)}catch(t){return Pi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Pi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Pi.reject(e)}static resolve(t){return new Pi(((e,n)=>{e(t)}))}static reject(t){return new Pi(((e,n)=>{n(t)}))}static waitFor(t){return new Pi(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Pi.resolve(!1);for(const n of t)e=e.next((t=>t?Pi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Pi(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Pi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function $i(t){return null==t}function ji(t){return 0===t&&1/t==-1/0}function Ui(t){return"number"==typeof t&&Number.isInteger(t)&&!ji(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi.ct=-1;const Bi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],qi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zi=qi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e){this.comparator=t,this.root=e||Yi.EMPTY}insert(t,e){return new Wi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Yi.BLACK,null,null))}remove(t){return new Wi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Yi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qi(this.root,t,this.comparator,!0)}}class Qi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Yi{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Yi.RED,this.left=null!=r?r:Yi.EMPTY,this.right=null!=i?i:Yi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Yi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Yi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Yi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Yi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Yi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const t=this.left.check();if(t!==this.right.check())throw ri();return t+(this.isRed()?0:1)}}Yi.EMPTY=null,Yi.RED=!0,Yi.BLACK=!1,Yi.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Yi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(t){this.comparator=t,this.data=new Wi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ji(this.data.getIterator())}getIteratorFrom(t){return new Ji(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Xi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Xi(this.comparator);return e.data=t,e}}class Ji{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(t){this.fields=t,t.sort(Ii.comparator)}static empty(){return new Zi([])}unionWith(t){let e=new Xi(Ii.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Zi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return bi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ts("Invalid base64 string: "+t):t}}(t);return new es(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new es(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}es.EMPTY_BYTE_STRING=new es("");const ns=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(t){if(ii(!!t),"string"==typeof t){let e=0;const n=ns.exec(t);if(ii(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:is(t.seconds),nanos:is(t.nanos)}}function is(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ss(t){return"string"==typeof t?es.fromBase64String(t):es.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function as(t){const e=t.mapValue.fields.__previous_value__;return os(e)?as(e):e}function cs(t){const e=rs(t.mapValue.fields.__local_write_time__.timestampValue);return new _i(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class ls{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ls("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ls&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?os(t)?4:Is(t)?9007199254740991:10:ri()}function ds(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cs(t).isEqual(cs(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=rs(t.timestampValue),r=rs(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ss(t.bytesValue).isEqual(ss(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return is(t.geoPointValue.latitude)===is(e.geoPointValue.latitude)&&is(t.geoPointValue.longitude)===is(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return is(t.integerValue)===is(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=is(t.doubleValue),r=is(e.doubleValue);return n===r?ji(n)===ji(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],ds);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Hi(n)!==Hi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ds(n[i],r[i])))return!1;return!0}(t,e);default:return ri()}}function ps(t,e){return void 0!==(t.values||[]).find((t=>ds(t,e)))}function gs(t,e){if(t===e)return 0;const n=fs(t),r=fs(e);if(n!==r)return wi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return wi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=is(t.integerValue||t.doubleValue),r=is(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ms(t.timestampValue,e.timestampValue);case 4:return ms(cs(t),cs(e));case 5:return wi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ss(t),r=ss(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=wi(n[i],r[i]);if(0!==t)return t}return wi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=wi(is(t.latitude),is(e.latitude));return 0!==n?n:wi(is(t.longitude),is(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=gs(n[i],r[i]);if(t)return t}return wi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===hs.mapValue&&e===hs.mapValue)return 0;if(t===hs.mapValue)return 1;if(e===hs.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=wi(r[o],s[o]);if(0!==t)return t;const e=gs(n[r[o]],i[s[o]]);if(0!==e)return e}return wi(r.length,s.length)}(t.mapValue,e.mapValue);default:throw ri()}}function ms(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return wi(t,e);const n=rs(t),r=rs(e),i=wi(n.seconds,r.seconds);return 0!==i?i:wi(n.nanos,r.nanos)}function vs(t){return ys(t)}function ys(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=rs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ss(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ai.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ys(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ys(t.fields[i])}`;return n+"}"}(t.mapValue):ri();var e,n}function ws(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bs(t){return!!t&&"integerValue"in t}function _s(t){return!!t&&"arrayValue"in t}function Es(t){return!!t&&"nullValue"in t}function Ts(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cs(t){return!!t&&"mapValue"in t}function Ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ss(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Is(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{constructor(t){this.value=t}static empty(){return new As({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Cs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ss(e)}setAll(t){let e=Ii.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Ss(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Cs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ds(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Cs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ki(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new As(Ss(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new xs(t,0,Ei.min(),Ei.min(),Ei.min(),As.empty(),0)}static newFoundDocument(t,e,n,r){return new xs(t,1,e,Ei.min(),n,r,0)}static newNoDocument(t,e){return new xs(t,2,e,Ei.min(),Ei.min(),As.empty(),0)}static newUnknownDocument(t,e){return new xs(t,3,e,Ei.min(),Ei.min(),As.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=As.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=As.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof xs&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xs(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e){this.position=t,this.inclusive=e}}function ks(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ai.comparator(Ai.fromName(o.referenceValue),n.key):gs(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ns(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ds(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{}class Ms extends Ls{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new qs(t,e,n):"array-contains"===e?new Gs(t,n):"in"===e?new Ws(t,n):"not-in"===e?new Qs(t,n):"array-contains-any"===e?new Ys(t,n):new Ms(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new zs(t,n):new Hs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(gs(e,this.value)):null!==e&&fs(this.value)===fs(e)&&this.matchesComparison(gs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ps extends Ls{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new Ps(t,e)}matches(t){return Fs(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft((t=>t.isInequality()));return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Fs(t){return"and"===t.op}function Vs(t){return $s(t)&&Fs(t)}function $s(t){for(const e of t.filters)if(e instanceof Ps)return!1;return!0}function js(t){if(t instanceof Ms)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(Vs(t))return t.filters.map((t=>js(t))).join(",");{const e=t.filters.map((t=>js(t))).join(",");return`${t.op}(${e})`}}function Us(t,e){return t instanceof Ms?function(t,e){return e instanceof Ms&&t.op===e.op&&t.field.isEqual(e.field)&&ds(t.value,e.value)}(t,e):t instanceof Ps?function(t,e){return e instanceof Ps&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Us(n,e.filters[r])),!0)}(t,e):void ri()}function Bs(t){return t instanceof Ms?function(t){return`${t.field.canonicalString()} ${t.op} ${vs(t.value)}`}(t):t instanceof Ps?function(t){return t.op.toString()+" {"+t.getFilters().map(Bs).join(" ,")+"}"}(t):"Filter"}class qs extends Ms{constructor(t,e,n){super(t,e,n),this.key=Ai.fromName(n.referenceValue)}matches(t){const e=Ai.comparator(t.key,this.key);return this.matchesComparison(e)}}class zs extends Ms{constructor(t,e){super(t,"in",e),this.keys=Ks("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Hs extends Ms{constructor(t,e){super(t,"not-in",e),this.keys=Ks("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ks(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ai.fromName(t.referenceValue)))}class Gs extends Ms{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _s(e)&&ps(e.arrayValue,this.value)}}class Ws extends Ms{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ps(this.value.arrayValue,e)}}class Qs extends Ms{constructor(t,e){super(t,"not-in",e)}matches(t){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ps(this.value.arrayValue,e)}}class Ys extends Ms{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_s(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ps(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function Js(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Xs(t,e,n,r,i,s,o)}function Zs(t){const e=si(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>js(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),$i(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>vs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>vs(t))).join(",")),e.dt=t}return e.dt}function to(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Rs(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Us(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ns(t.startAt,e.startAt)&&Ns(t.endAt,e.endAt)}function eo(t){return Ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function ro(t,e,n,r,i,s,o,a){return new no(t,e,n,r,i,s,o,a)}function io(t){return new no(t)}function so(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function oo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ao(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function co(t){return null!==t.collectionGroup}function uo(t){const e=si(t);if(null===e.wt){e.wt=[];const t=ao(e),n=oo(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Os(t)),e.wt.push(new Os(Ii.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Os(Ii.keyField(),t))}}}return e.wt}function lo(t){const e=si(t);if(!e._t)if("F"===e.limitType)e._t=Js(e.path,e.collectionGroup,uo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of uo(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Os(i.field,e))}const n=e.endAt?new Ds(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ds(e.startAt.position,e.startAt.inclusive):null;e._t=Js(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function ho(t,e){e.getFirstInequalityField(),ao(t);const n=t.filters.concat([e]);return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function fo(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function po(t,e){return to(lo(t),lo(e))&&t.limitType===e.limitType}function go(t){return`${Zs(lo(t))}|lt:${t.limitType}`}function mo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Bs(t))).join(", ")}]`),$i(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>vs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>vs(t))).join(",")),`Target(${e})`}(lo(t))}; limitType=${t.limitType})`}function vo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ai.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of uo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=ks(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,uo(t),e))&&!(t.endAt&&!function(t,e,n){const r=ks(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,uo(t),e))}(t,e)}function yo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wo(t){return(e,n)=>{let r=!1;for(const i of uo(t)){const t=bo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function bo(t,e,n){const r=t.field.isKeyField()?Ai.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?gs(r,i):ri()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ki(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Gi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Wi(Ai.comparator);function To(){return Eo}const Co=new Wi(Ai.comparator);function So(...t){let e=Co;for(const n of t)e=e.insert(n.key,n);return e}function Io(t){let e=Co;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ao(){return Do()}function xo(){return Do()}function Do(){return new _o((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Wi(Ai.comparator);const ko=new Xi(Ai.comparator);function No(...t){let e=ko;for(const n of t)e=e.add(n);return e}const Oo=new Xi(wi);function Ro(){return Oo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(e)?"-0":e}}function Mo(t){return{integerValue:""+t}}function Po(t,e){return Ui(e)?Mo(e):Lo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this._=void 0}}function Vo(t,e,n){return t instanceof Uo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&os(e)&&(e=as(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Bo?qo(t,e):t instanceof zo?Ho(t,e):function(t,e){const n=jo(t,e),r=Go(n)+Go(t.gt);return bs(n)&&bs(t.gt)?Mo(r):Lo(t.serializer,r)}(t,e)}function $o(t,e,n){return t instanceof Bo?qo(t,e):t instanceof zo?Ho(t,e):n}function jo(t,e){return t instanceof Ko?bs(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Uo extends Fo{}class Bo extends Fo{constructor(t){super(),this.elements=t}}function qo(t,e){const n=Wo(e);for(const r of t.elements)n.some((t=>ds(t,r)))||n.push(r);return{arrayValue:{values:n}}}class zo extends Fo{constructor(t){super(),this.elements=t}}function Ho(t,e){let n=Wo(e);for(const r of t.elements)n=n.filter((t=>!ds(t,r)));return{arrayValue:{values:n}}}class Ko extends Fo{constructor(t,e){super(),this.serializer=t,this.gt=e}}function Go(t){return is(t.integerValue||t.doubleValue)}function Wo(t){return _s(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Bo&&e instanceof Bo||t instanceof zo&&e instanceof zo?bi(t.elements,e.elements,ds):t instanceof Ko&&e instanceof Ko?ds(t.gt,e.gt):t instanceof Uo&&e instanceof Uo}(t.transform,e.transform)}class Yo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Yo}static exists(t){return new Yo(void 0,t)}static updateTime(t){return new Yo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Jo{}function Zo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ca(t.key,Yo.none()):new ra(t.key,t.data,Yo.none());{const n=t.data,r=As.empty();let i=new Xi(Ii.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ia(t.key,r,new Zi(i.toArray()),Yo.none())}}function ta(t,e,n){t instanceof ra?function(t,e,n){const r=t.value.clone(),i=oa(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ia?function(t,e,n){if(!Xo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=oa(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(sa(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ea(t,e,n,r){return t instanceof ra?function(t,e,n,r){if(!Xo(t.precondition,e))return n;const i=t.value.clone(),s=aa(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ia?function(t,e,n,r){if(!Xo(t.precondition,e))return n;const i=aa(t.fieldTransforms,r,e),s=e.data;return s.setAll(sa(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Xo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function na(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&bi(t,e,((t,e)=>Qo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Jo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ia extends Jo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sa(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function oa(t,e,n){const r=new Map;ii(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$o(o,a,n[i]))}return r}function aa(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Vo(t,s,e))}return r}class ca extends Jo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ta(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ea(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ea(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=xo();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Zo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ei.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),No())}isEqual(t){return this.batchId===t.batchId&&bi(this.mutations,t.mutations,((t,e)=>na(t,e)))&&bi(this.baseMutations,t.baseMutations,((t,e)=>na(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fa,da;function pa(t){if(void 0===t)return ti("GRPC error has no .code"),oi.UNKNOWN;switch(t){case fa.OK:return oi.OK;case fa.CANCELLED:return oi.CANCELLED;case fa.UNKNOWN:return oi.UNKNOWN;case fa.DEADLINE_EXCEEDED:return oi.DEADLINE_EXCEEDED;case fa.RESOURCE_EXHAUSTED:return oi.RESOURCE_EXHAUSTED;case fa.INTERNAL:return oi.INTERNAL;case fa.UNAVAILABLE:return oi.UNAVAILABLE;case fa.UNAUTHENTICATED:return oi.UNAUTHENTICATED;case fa.INVALID_ARGUMENT:return oi.INVALID_ARGUMENT;case fa.NOT_FOUND:return oi.NOT_FOUND;case fa.ALREADY_EXISTS:return oi.ALREADY_EXISTS;case fa.PERMISSION_DENIED:return oi.PERMISSION_DENIED;case fa.FAILED_PRECONDITION:return oi.FAILED_PRECONDITION;case fa.ABORTED:return oi.ABORTED;case fa.OUT_OF_RANGE:return oi.OUT_OF_RANGE;case fa.UNIMPLEMENTED:return oi.UNIMPLEMENTED;case fa.DATA_LOSS:return oi.DATA_LOSS;default:return ri()}}(da=fa||(fa={}))[da.OK=0]="OK",da[da.CANCELLED=1]="CANCELLED",da[da.UNKNOWN=2]="UNKNOWN",da[da.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",da[da.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",da[da.NOT_FOUND=5]="NOT_FOUND",da[da.ALREADY_EXISTS=6]="ALREADY_EXISTS",da[da.PERMISSION_DENIED=7]="PERMISSION_DENIED",da[da.UNAUTHENTICATED=16]="UNAUTHENTICATED",da[da.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",da[da.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",da[da.ABORTED=10]="ABORTED",da[da.OUT_OF_RANGE=11]="OUT_OF_RANGE",da[da.UNIMPLEMENTED=12]="UNIMPLEMENTED",da[da.INTERNAL=13]="INTERNAL",da[da.UNAVAILABLE=14]="UNAVAILABLE",da[da.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ga{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ma}static getOrCreateInstance(){return null===ma&&(ma=new ga),ma}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let ma=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Gr([4294967295,4294967295],0);function wa(t){const e=va().encode(t),n=new Kr;return n.update(e),new Uint8Array(n.digest())}function ba(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([i,s],0)]}class _a{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ea(`Invalid padding: ${e}`);if(n<0)throw new Ea(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Ea(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Ea(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=Gr.fromNumber(this.It)}Et(t,e,n){let r=t.add(e.multiply(Gr.fromNumber(n)));return 1===r.compare(ya)&&(r=new Gr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=wa(t),[n,r]=ba(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);if(!this.At(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new _a(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.It)return;const e=wa(t),[n,r]=ba(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);this.Rt(t)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Ca.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ta(Ei.min(),r,new Wi(wi),To(),No())}}class Ca{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ca(n,e,No(),No(),No())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e,n,r){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=r}}class Ia{constructor(t,e){this.targetId=t,this.Vt=e}}class Aa{constructor(t,e,n=es.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class xa{constructor(){this.St=0,this.Dt=Na(),this.Ct=es.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=No(),e=No(),n=No();return this.Dt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ri()}})),new Ca(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=Na()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Da{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=To(),this.zt=ka(),this.Wt=new Wi(wi)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,(e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:ri()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach(((t,n)=>{this.te(n)&&e(n)}))}ne(t){var e;const n=t.targetId,r=t.Vt.count,i=this.se(n);if(i){const s=i.target;if(eo(s))if(0===r){const t=new Ai(s.path);this.Yt(n,t,xs.newNoDocument(t,Ei.min()))}else ii(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(t,i);if(0!==r){this.ee(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=ga.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,s,o,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:r}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=ss(i).toUint8Array()}catch(t){if(t instanceof ts)return ei("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new _a(a,s,o)}catch(t){return ei(t instanceof Ea?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:r!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(s)||(this.Yt(t,n,null),r++)})),r}ce(t){const e=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&eo(i.target)){const e=new Ai(i.target.path);null!==this.jt.get(e)||this.ae(r,e)||this.Yt(r,e,xs.newNoDocument(e,t))}n.Mt&&(e.set(r,n.Ot()),n.Ft())}}));let n=No();this.zt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.jt.forEach(((e,n)=>n.setReadTime(t)));const r=new Ta(t,e,this.Wt,this.jt,n);return this.jt=To(),this.zt=ka(),this.Wt=new Wi(wi),r}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,e)?r.Bt(e,1):r.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new xa,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new Xi(wi),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||Zr("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new xa),this.Gt.getRemoteKeysForTarget(t).forEach((e=>{this.Yt(t,e,null)}))}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function ka(){return new Wi(Ai.comparator)}function Na(){return new Wi(Ai.comparator)}const Oa=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ra=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),La=(()=>{const t={and:"AND",or:"OR"};return t})();class Ma{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Pa(t,e){return t.useProto3Json||$i(e)?e:{value:e}}function Fa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Va(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $a(t){return ii(!!t),Ei.fromTimestamp(function(t){const e=rs(t);return new _i(e.seconds,e.nanos)}(t))}function ja(t,e){return function(t){return new Ci(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ua(t){const e=Ci.fromString(t);return ii(sc(e)),e}function Ba(t,e){const n=Ua(e);if(n.get(1)!==t.databaseId.projectId)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ai(Ka(n))}function qa(t,e){return ja(t.databaseId,e)}function za(t){const e=Ua(t);return 4===e.length?Ci.emptyPath():Ka(e)}function Ha(t){return new Ci(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ka(t){return ii(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ga(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ri()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(ii(void 0===e||"string"==typeof e),es.fromBase64String(e||"")):(ii(void 0===e||e instanceof Uint8Array),es.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?oi.UNKNOWN:pa(t.code);return new ai(e,t.message||"")}(o);n=new Aa(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ba(t,r.document.name),s=$a(r.document.updateTime),o=r.document.createTime?$a(r.document.createTime):Ei.min(),a=new As({mapValue:{fields:r.document.fields}}),c=xs.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Sa(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ba(t,r.document),s=r.readTime?$a(r.readTime):Ei.min(),o=xs.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Sa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ba(t,r.document),s=r.removedTargetIds||[];n=new Sa([],s,i,null)}else{if(!("filter"in e))return ri();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new ha(r,i),o=t.targetId;n=new Ia(o,s)}}return n}function Wa(t,e){return{documents:[qa(t,e.path)]}}function Qa(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=qa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return ic(Ps.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:nc(t.field),direction:Za(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Pa(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ya(t){let e=za(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Ja(t);return e instanceof Ps&&Vs(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Os(rc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,$i(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ds(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ds(n,e)}(n.endAt)),ro(e,i,o,s,a,"F",c,u)}function Xa(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ja(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=rc(t.unaryFilter.field);return Ms.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=rc(t.unaryFilter.field);return Ms.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=rc(t.unaryFilter.field);return Ms.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=rc(t.unaryFilter.field);return Ms.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(t):void 0!==t.fieldFilter?function(t){return Ms.create(rc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ps.create(t.compositeFilter.filters.map((t=>Ja(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ri()}}(t.compositeFilter.op))}(t):ri()}function Za(t){return Oa[t]}function tc(t){return Ra[t]}function ec(t){return La[t]}function nc(t){return{fieldPath:t.canonicalString()}}function rc(t){return Ii.fromServerFormat(t.fieldPath)}function ic(t){return t instanceof Ms?function(t){if("=="===t.op){if(Ts(t.value))return{unaryFilter:{field:nc(t.field),op:"IS_NAN"}};if(Es(t.value))return{unaryFilter:{field:nc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ts(t.value))return{unaryFilter:{field:nc(t.field),op:"IS_NOT_NAN"}};if(Es(t.value))return{unaryFilter:{field:nc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nc(t.field),op:tc(t.op),value:t.value}}}(t):t instanceof Ps?function(t){const e=t.getFilters().map((t=>ic(t)));return 1===e.length?e[0]:{compositeFilter:{op:ec(t.op),filters:e}}}(t):ri()}function sc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e,n,r,i=Ei.min(),s=Ei.min(),o=es.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new oc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new oc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new oc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new oc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.fe=t}}function cc(t){const e=Ya({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?fo(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(is(t.integerValue));else if("doubleValue"in t){const n=is(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),ji(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(ss(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?Is(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):ri()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const r of Object.keys(n))this.Te(r,e),this.me(n[r],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const r of n)this.me(r,e)}ve(t,e){this.ye(e,37),Ai.fromName(t).path.forEach((t=>{this.ye(e,60),this.be(t,e)}))}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}uc.Ve=new uc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lc{constructor(){this.rn=new hc}addToCollectionParentIndex(t,e){return this.rn.add(e),Pi.resolve()}getCollectionParents(t,e){return Pi.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return Pi.resolve()}deleteFieldIndex(t,e){return Pi.resolve()}getDocumentsMatchingTarget(t,e){return Pi.resolve(null)}getIndexType(t,e){return Pi.resolve(0)}getFieldIndexes(t,e){return Pi.resolve([])}getNextCollectionGroupToUpdate(t){return Pi.resolve(null)}getMinOffset(t,e){return Pi.resolve(Ni.min())}getMinOffsetFromCollectionGroup(t,e){return Pi.resolve(Ni.min())}updateCollectionGroup(t,e,n){return Pi.resolve()}updateIndexEntries(t,e){return Pi.resolve()}}class hc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Xi(Ci.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Xi(Ci.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class fc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new fc(t,fc.DEFAULT_COLLECTION_PERCENTILE,fc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fc.DEFAULT_COLLECTION_PERCENTILE=10,fc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fc.DEFAULT=new fc(41943040,fc.DEFAULT_COLLECTION_PERCENTILE,fc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fc.DISABLED=new fc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new dc(0)}static Mn(){return new dc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pc{constructor(){this.changes=new _o((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xs.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Pi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ea(n.mutation,t,Zi.empty(),_i.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,No()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=No()){const r=Ao();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=So();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ao();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,No())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=To();const s=Do(),o=Do();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ia)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),ea(o.mutation,e,o.mutation.getFieldMask(),_i.now())):s.set(e.key,Zi.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new gc(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Do();let r=new Wi(((t,e)=>t-e)),i=No();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Zi.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||No()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=xo();c.forEach((t=>{if(!i.has(t)){const r=Zo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Pi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):co(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Pi.resolve(Ao());let o=-1,a=i;return s.next((e=>Pi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Pi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,No()))).next((t=>({batchId:o,changes:Io(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ai(e)).next((t=>{let e=So();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=So();return this.indexManager.getCollectionParents(t,r).next((s=>Pi.forEach(s,(s=>{const o=function(t,e){return new no(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,xs.newInvalidDocument(r)))}));let n=So();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&ea(s.mutation,i,Zi.empty(),_i.now()),vo(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return Pi.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:$a(n.createTime)}),Pi.resolve()}getNamedQuery(t,e){return Pi.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:cc(t.bundledQuery),readTime:$a(t.readTime)}}(e)),Pi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.overlays=new Wi(Ai.comparator),this.ls=new Map}getOverlay(t,e){return Pi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ao();return Pi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.we(t,e,r)})),Pi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.ls.delete(n)),Pi.resolve()}getOverlaysForCollection(t,e,n){const r=Ao(),i=e.length+1,s=new Ai(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Pi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Wi(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ao(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ao(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Pi.resolve(o)}we(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new la(e,n));let i=this.ls.get(e);void 0===i&&(i=No(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.fs=new Xi(bc.ds),this.ws=new Xi(bc._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new bc(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ys(new bc(t,e))}ps(t,e){t.forEach((t=>this.removeReference(t,e)))}Is(t){const e=new Ai(new Ci([])),n=new bc(e,t),r=new bc(e,t+1),i=[];return this.ws.forEachInRange([n,r],(t=>{this.ys(t),i.push(t.key)})),i}Ts(){this.fs.forEach((t=>this.ys(t)))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new Ai(new Ci([])),n=new bc(e,t),r=new bc(e,t+1);let i=No();return this.ws.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new bc(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class bc{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return Ai.comparator(t.key,e.key)||wi(t.As,e.As)}static _s(t,e){return wi(t.As,e.As)||Ai.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new Xi(bc.ds)}checkEmpty(t){return Pi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ua(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new bc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Pi.resolve(s)}lookupMutationBatch(t,e){return Pi.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.bs(n),i=r<0?0:r;return Pi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Pi.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return Pi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new bc(e,0),r=new bc(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(t=>{const e=this.Ps(t.As);i.push(e)})),Pi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Xi(wi);return e.forEach((t=>{const e=new bc(t,0),r=new bc(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],(t=>{n=n.add(t.As)}))})),Pi.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ai.isDocumentKey(i)||(i=i.child(""));const s=new bc(new Ai(i),0);let o=new Xi(wi);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.As)),!0)}),s),Pi.resolve(this.Vs(o))}Vs(t){const e=[];return t.forEach((t=>{const n=this.Ps(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ii(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Pi.forEach(e.mutations,(r=>{const i=new bc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Rs=n}))}Cn(t){}containsKey(t,e){const n=new bc(e,0),r=this.Rs.firstAfterOrEqual(n);return Pi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Pi.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.Ds=t,this.docs=new Wi(Ai.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Pi.resolve(n?n.document.mutableCopy():xs.newInvalidDocument(e))}getEntries(t,e){let n=To();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():xs.newInvalidDocument(t))})),Pi.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=To();const s=e.path,o=new Ai(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Oi(ki(o),n)<=0||(r.has(o.key)||vo(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Pi.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ri()}Cs(t,e){return Pi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Tc(this)}getSize(t){return Pi.resolve(this.size)}}class Tc extends pc{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.os.addEntry(t,r)):this.os.removeEntry(n)})),Pi.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t){this.persistence=t,this.xs=new _o((t=>Zs(t)),to),this.lastRemoteSnapshotVersion=Ei.min(),this.highestTargetId=0,this.Ns=0,this.ks=new wc,this.targetCount=0,this.Ms=dc.kn()}forEachTarget(t,e){return this.xs.forEach(((t,n)=>e(n))),Pi.resolve()}getLastRemoteSnapshotVersion(t){return Pi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Pi.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),Pi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),Pi.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new dc(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,Pi.resolve()}updateTargetData(t,e){return this.Fn(e),Pi.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,Pi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Pi.waitFor(i).next((()=>r))}getTargetCount(t){return Pi.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return Pi.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),Pi.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Pi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),Pi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return Pi.resolve(n)}containsKey(t,e){return Pi.resolve(this.ks.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,e){this.$s={},this.overlays={},this.Os=new Vi(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Cc(this),this.indexManager=new lc,this.remoteDocumentCache=function(t){return new Ec(t)}((t=>this.referenceDelegate.Ls(t))),this.serializer=new ac(e),this.qs=new vc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new yc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new _c(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){Zr("MemoryPersistence","Starting transaction:",t);const r=new Ic(this.Os.next());return this.referenceDelegate.Us(),n(r).next((t=>this.referenceDelegate.Ks(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Gs(t,e){return Pi.or(Object.values(this.$s).map((n=>()=>n.containsKey(t,e))))}}class Ic extends Li{constructor(t){super(),this.currentSequenceNumber=t}}class Ac{constructor(t){this.persistence=t,this.Qs=new wc,this.js=null}static zs(t){return new Ac(t)}get Ws(){if(this.js)return this.js;throw ri()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),Pi.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),Pi.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),Pi.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach((t=>this.Ws.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ws.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Pi.forEach(this.Ws,(n=>{const r=Ai.fromPath(n);return this.Hs(t,r).next((t=>{t||e.removeEntry(r,Ei.min())}))})).next((()=>(this.js=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hs(t,e).next((t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())}))}Ls(t){return 0}Hs(t,e){return Pi.or([()=>Pi.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=r}static Li(t,e){let n=No(),r=No();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ki(t,e).next((i=>i||this.Gi(t,e,r,n))).next((n=>n||this.Qi(t,e)))}Ki(t,e){if(so(e))return Pi.resolve(null);let n=lo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=fo(e,null,"F"),n=lo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=No(...r);return this.Ui.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.ji(e,r);return this.zi(e,s,i,n.readTime)?this.Ki(t,fo(e,null,"F")):this.Wi(t,s,e,n)}))))})))))}Gi(t,e,n,r){return so(e)||r.isEqual(Ei.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next((i=>{const s=this.ji(e,i);return this.zi(e,s,n,r)?this.Qi(t,e):(Jr()<=o["in"].DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mo(e)),this.Wi(t,s,e,Di(r,-1)))}))}ji(t,e){let n=new Xi(wo(t));return e.forEach(((e,r)=>{vo(t,r)&&(n=n.add(r))})),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,e){return Jr()<=o["in"].DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",mo(e)),this.Ui.getDocumentsMatchingQuery(t,e,Ni.min())}Wi(t,e,n,r){return this.Ui.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new Wi(wi),this.Yi=new _o((t=>Zs(t)),to),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mc(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function Nc(t,e,n,r){return new kc(t,e,n,r)}async function Oc(t,e){const n=si(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=No();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({er:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Rc(t){const e=si(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function Lc(t,e){const n=si(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(es.EMPTY_BYTE_STRING,Ei.min()).withLastLimboFreeSnapshotVersion(Ei.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(t,u))}));let a=To(),c=No();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Mc(t,s,e.documentUpdates).next((t=>{a=t.nr,c=t.sr}))),!r.isEqual(Ei.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next((e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Pi.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=i,t)))}function Mc(t,e,n){let r=No(),i=No();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=To();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ei.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:r,sr:i}}))}function Pc(t,e){const n=si(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Bs.getTargetData(t,e).next((i=>i?(r=i,Pi.resolve(r)):n.Bs.allocateTargetId(t).next((i=>(r=new oc(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ji.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function Fc(t,e,n){const r=si(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Fi(t))throw t;Zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Vc(t,e,n){const r=si(t);let i=Ei.min(),s=No();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=si(t),i=r.Yi.get(n);return void 0!==i?Pi.resolve(r.Ji.get(i)):r.Bs.getTargetData(e,n)}(r,t,lo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Hi.getDocumentsMatchingQuery(t,e,n?i:Ei.min(),n?s:No()))).next((t=>($c(r,yo(e),t),{documents:t,ir:s})))))}function $c(t,e,n){let r=t.Xi.get(e)||Ei.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Xi.set(e,r)}class jc{constructor(){this.activeTargetIds=Ro()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Uc{constructor(){this.Hr=new jc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new jc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{Yr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc=null;function Hc(){return null===zc?zc=268435456+Math.round(2147483648*Math.random()):zc++,"0x"+zc.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Kc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="WebChannelConnection";class Qc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,r,i){const s=Hc(),o=this.To(t,e);Zr("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(t,o,a,n).then((e=>(Zr("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ei("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,r,i,s){return this.Io(t,e,n,r,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Yr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}To(t,e){const n=Kc[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,r){const i=Hc();return new Promise(((s,o)=>{const a=new Hr;a.setWithCredentials(!0),a.listenOnce(jr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case $r.NO_ERROR:const e=a.getResponseJson();Zr(Wc,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case $r.TIMEOUT:Zr(Wc,`RPC '${t}' ${i} timed out`),o(new ai(oi.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const n=a.getStatus();if(Zr(Wc,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(oi).indexOf(e)>=0?e:oi.UNKNOWN}(e.status);o(new ai(t,e.message))}else o(new ai(oi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ai(oi.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Zr(Wc,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);Zr(Wc,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const r=Hc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Fr(),o=Vr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new qr({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Zr(Wc,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,f=!1;const d=new Gc({ro:e=>{f?Zr(Wc,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Zr(Wc,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Zr(Wc,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},oo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,zr.EventType.OPEN,(()=>{f||Zr(Wc,`RPC '${t}' stream ${r} transport opened.`)})),p(l,zr.EventType.CLOSE,(()=>{f||(f=!0,Zr(Wc,`RPC '${t}' stream ${r} transport closed`),d.wo())})),p(l,zr.EventType.ERROR,(e=>{f||(f=!0,ei(Wc,`RPC '${t}' stream ${r} transport errored:`,e),d.wo(new ai(oi.UNAVAILABLE,"The operation could not be completed")))})),p(l,zr.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];ii(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zr(Wc,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=fa[t];if(void 0!==e)return pa(e)}(e),i=o.message;void 0===n&&(n=oi.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,d.wo(new ai(n,i)),l.close()}else Zr(Wc,`RPC '${t}' stream ${r} received:`,i),d._o(i)}})),p(o,Ur.STAT_EVENT,(e=>{e.stat===Br.PROXY?Zr(Wc,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Br.NOPROXY&&Zr(Wc,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.fo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){return new Ma(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,e-n);r>0&&Zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,e,n,r,i,s,o,a){this.ii=t,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Jc(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===oi.RESOURCE_EXHAUSTED?(ti(e.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===oi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Fo===e&&this.Zo(t,n)}),(e=>{t((()=>{const t=new ai(oi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)}))}))}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((t=>{n((()=>this.tu(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(t){return Zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.Fo===t?e():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tu extends Zc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=Ga(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ei.min():e.readTime?$a(e.readTime):Ei.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=Ha(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=eo(r)?{documents:Wa(t,r)}:{query:Qa(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Va(t,e.resumeToken);const r=Pa(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ei.min())>0){n.readTime=Fa(t,e.snapshotVersion.toTimestamp());const r=Pa(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Xa(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=Ha(this.serializer),e.removeTarget=t,this.Wo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())}))}vo(t,e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())}))}terminate(){this.lu=!0}}class nu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ti(e),this.mu=!1):Zr("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((t=>{n.enqueueAndForget((async()=>{fu(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=si(t);e.vu.add(4),await su(e),e.bu.set("Unknown"),e.vu.delete(4),await iu(e)}(this))}))})),this.bu=new nu(n,r)}}async function iu(t){if(fu(t))for(const e of t.Ru)await e(!0)}async function su(t){for(const e of t.Ru)await e(!1)}function ou(t,e){const n=si(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),hu(n)?lu(n):bu(n).Ko()&&cu(n,e))}function au(t,e){const n=si(t),r=bu(n);n.Au.delete(e),r.Ko()&&uu(n,e),0===n.Au.size&&(r.Ko()?r.jo():fu(n)&&n.bu.set("Unknown"))}function cu(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ei.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bu(t).su(e)}function uu(t,e){t.Vu.qt(e),bu(t).iu(e)}function lu(t){t.Vu=new Da({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),bu(t).start(),t.bu.gu()}function hu(t){return fu(t)&&!bu(t).Uo()&&t.Au.size>0}function fu(t){return 0===si(t).vu.size}function du(t){t.Vu=void 0}async function pu(t){t.Au.forEach(((e,n)=>{cu(t,e)}))}async function gu(t,e){du(t),hu(t)?(t.bu.Iu(e),lu(t)):t.bu.set("Unknown")}async function mu(t,e,n){if(t.bu.set("Online"),e instanceof Aa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Au.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Au.delete(r),t.Vu.removeTarget(r))}(t,e)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await vu(t,n)}else if(e instanceof Sa?t.Vu.Ht(e):e instanceof Ia?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Ei.min()))try{const e=await Rc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(r);i&&t.Au.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Au.get(e);if(!r)return;t.Au.set(e,r.withResumeToken(es.EMPTY_BYTE_STRING,r.snapshotVersion)),uu(t,e);const i=new oc(r.target,e,n,r.sequenceNumber);cu(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zr("RemoteStore","Failed to raise snapshot:",e),await vu(t,e)}}async function vu(t,e,n){if(!Fi(e))throw e;t.vu.add(1),await su(t),t.bu.set("Offline"),n||(n=()=>Rc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await iu(t)}))}async function yu(t,e){const n=si(t);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const r=fu(n);n.vu.add(3),await su(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await iu(n)}async function wu(t,e){const n=si(t);e?(n.vu.delete(2),await iu(n)):e||(n.vu.add(2),await su(n),n.bu.set("Unknown"))}function bu(t){return t.Su||(t.Su=function(t,e,n){const r=si(t);return r.fu(),new tu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{uo:pu.bind(null,t),ao:gu.bind(null,t),nu:mu.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Qo(),hu(t)?lu(t):t.bu.set("Unknown")):(await t.Su.stop(),du(t))}))),t.Su}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _u{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new _u(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(oi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eu(t,e){if(ti("AsyncQueue",`${e}: ${t}`),Fi(t))return new ai(oi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ai.comparator(e.key,n.key):(t,e)=>Ai.comparator(t.key,e.key),this.keyedMap=So(),this.sortedSet=new Wi(this.comparator)}static emptySet(t){return new Tu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Tu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Tu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.Cu=new Wi(Ai.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):ri():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Su{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Su(t,e,Tu.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&po(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.Nu=void 0,this.listeners=[]}}class Au{constructor(){this.queries=new _o((t=>go(t)),po),this.onlineState="Unknown",this.ku=new Set}}async function xu(t,e){const n=si(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Iu),i)try{s.Nu=await n.onListen(r)}catch(t){const n=Eu(t,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Ou(n)}async function Du(t,e){const n=si(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ku(t,e){const n=si(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.$u(i)&&(r=!0);e.Nu=i}}r&&Ou(n)}function Nu(t,e,n){const r=si(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ou(t){t.ku.forEach((t=>{t.next()}))}class Ru{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Su(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=Su.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(t){this.key=t}}class Mu{constructor(t){this.key=t}}class Pu{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=No(),this.mutatedKeys=No(),this.tc=wo(t),this.ec=new Tu(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new Cu,r=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=vo(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.rc(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.tc(t.doc,e.doc))),this.oc(n);const s=e?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Su(this.query,t.ec,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Cu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=No(),this.ec.forEach((t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))}));const e=[];return t.forEach((t=>{this.Zu.has(t)||e.push(new Mu(t))})),this.Zu.forEach((n=>{t.has(n)||e.push(new Lu(n))})),e}hc(t){this.Yu=t.ir,this.Zu=No();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return Su.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class Fu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Vu{constructor(t){this.key=t,this.fc=!1}}class $u{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new _o((t=>go(t)),po),this._c=new Map,this.mc=new Set,this.gc=new Wi(Ai.comparator),this.yc=new Map,this.Ic=new wc,this.Tc={},this.Ec=new Map,this.Ac=dc.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function ju(t,e){const n=tl(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const t=await Pc(n.localStore,lo(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Uu(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&ou(n.remoteStore,t)}return i}async function Uu(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.sc(n);i.zi&&(i=await Vc(t.localStore,e.query,!1).then((({documents:t})=>e.view.sc(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Wu(t,e.targetId,o.cc),o.snapshot}(t,e,n,r);const s=await Vc(t.localStore,e,!0),o=new Pu(e,s.ir),a=o.sc(s.documents),c=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Wu(t,n,u.cc);const l=new Fu(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Bu(t,e){const n=si(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((t=>!po(t,e)))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),au(n.remoteStore,r.targetId),Ku(n,r.targetId)})).catch(Mi)):(Ku(n,r.targetId),await Fc(n.localStore,r.targetId,!0))}async function qu(t,e){const n=si(t);try{const t=await Lc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.yc.get(e);r&&(ii(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.fc=!0:t.modifiedDocuments.size>0?ii(r.fc):t.removedDocuments.size>0&&(ii(r.fc),r.fc=!1))})),await Xu(n,t,e)}catch(t){await Mi(t)}}function zu(t,e,n){const r=si(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=si(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Mu(e)&&(r=!0)})),r&&Ou(n)}(r.eventManager,e),t.length&&r.dc.nu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hu(t,e,n){const r=si(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let t=new Wi(Ai.comparator);t=t.insert(s,xs.newNoDocument(s,Ei.min()));const n=No().add(s),i=new Ta(Ei.min(),new Map,new Wi(wi),t,n);await qu(r,i),r.gc=r.gc.remove(s),r.yc.delete(e),Yu(r)}else await Fc(r.localStore,e,!1).then((()=>Ku(r,e,n))).catch(Mi)}function Ku(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach((e=>{t.Ic.containsKey(e)||Gu(t,e)}))}function Gu(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(au(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Yu(t))}function Wu(t,e,n){for(const r of n)r instanceof Lu?(t.Ic.addReference(r.key,e),Qu(t,r)):r instanceof Mu?(Zr("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Gu(t,r.key)):ri()}function Qu(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(Zr("SyncEngine","New document in limbo: "+n),t.mc.add(r),Yu(t))}function Yu(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Ai(Ci.fromString(e)),r=t.Ac.next();t.yc.set(r,new Vu(n)),t.gc=t.gc.insert(n,r),ou(t.remoteStore,new oc(lo(io(n.path)),r,"TargetPurposeLimboResolution",Vi.ct))}}async function Xu(t,e,n){const r=si(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((t,a)=>{o.push(r.Rc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=xc.Li(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.dc.nu(i),await async function(t,e){const n=si(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Pi.forEach(e,(e=>Pi.forEach(e.Fi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Pi.forEach(e.Bi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Fi(t))throw t;Zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,s))}async function Ju(t,e){const n=si(t);if(!n.currentUser.isEqual(e)){Zr("SyncEngine","User change. New user:",e.toKey());const t=await Oc(n.localStore,e);n.currentUser=e,function(t,e){t.Ec.forEach((t=>{t.forEach((t=>{t.reject(new ai(oi.CANCELLED,e))}))})),t.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Xu(n,t.er)}}function Zu(t,e){const n=si(t),r=n.yc.get(e);if(r&&r.fc)return No().add(r.key);{let t=No();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.wc.get(e);t=t.unionWith(r.view.nc)}return t}}function tl(t){const e=si(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hu.bind(null,e),e.dc.nu=ku.bind(null,e.eventManager),e.dc.Pc=Nu.bind(null,e.eventManager),e}class el{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Xc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Nc(this.persistence,new Dc,t.initialUser,this.serializer)}createPersistence(t){return new Sc(Ac.zs,this.serializer)}createSharedClientState(t){return new Uc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>zu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ju.bind(null,this.syncEngine),await wu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Au}createDatastore(t){const e=Xc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Qc(r));var r;return function(t,e,n,r){return new eu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>zu(this.syncEngine,t,0),s=qc.D()?new qc:new Bc,new ru(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new $u(t,e,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=si(t);Zr("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await su(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):ti("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class il{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Qr.UNAUTHENTICATED,this.clientId=yi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Eu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function sl(t,e){t.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Oc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ol(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cl(t);Zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>yu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>yu(e.remoteStore,n))),t._onlineComponents=e}function al(t){return"FirebaseError"===t.name?t.code===oi.FAILED_PRECONDITION||t.code===oi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function cl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Zr("FirestoreClient","Using user provided OfflineComponentProvider");try{await sl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!al(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await sl(t,new el)}}else Zr("FirestoreClient","Using default OfflineComponentProvider"),await sl(t,new el);return t._offlineComponents}async function ul(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Zr("FirestoreClient","Using user provided OnlineComponentProvider"),await ol(t,t._uninitializedComponentsProvider._online)):(Zr("FirestoreClient","Using default OnlineComponentProvider"),await ol(t,new nl))),t._onlineComponents}async function ll(t){const e=await ul(t),n=e.eventManager;return n.onListen=ju.bind(null,e.syncEngine),n.onUnlisten=Bu.bind(null,e.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const fl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e,n){if(!n)throw new ai(oi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pl(t,e,n,r){if(!0===e&&!0===r)throw new ai(oi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gl(t){if(Ai.isDocumentKey(t))throw new ai(oi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ml(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ri()}function vl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ai(oi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ml(t);throw new ai(oi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ai(oi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ai(oi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}pl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class wl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(oi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ai(oi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new li;switch(t.type){case"firstParty":return new pi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ai(oi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=fl.get(t);e&&(Zr("ComponentProvider","Removing Datastore"),fl.delete(t),e.terminate())}(this),Promise.resolve()}}function bl(t,e,n,r={}){var i;const s=(t=vl(t,wl))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Qr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ai(oi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qr(s)}t._authCredentials=new hi(new ui(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _l(this.firestore,t,this._key)}}class El{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new El(this.firestore,t,this._query)}}class Tl extends El{constructor(t,e,n){super(t,e,io(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _l(this.firestore,null,new Ai(t))}withConverter(t){return new Tl(this.firestore,t,this._path)}}function Cl(t,e,...n){if(t=(0,a.m9)(t),dl("collection","path",e),t instanceof wl){const r=Ci.fromString(e,...n);return gl(r),new Tl(t,null,r)}{if(!(t instanceof _l||t instanceof Tl))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ci.fromString(e,...n));return gl(r),new Tl(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Jc(this,"async_queue_retry"),this.Xc=()=>{const t=Yc();t&&Zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=Yc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=Yc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new ci;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Fi(t))throw t;Zr("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw ti("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const r=_u.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(r),r}Zc(){this.Wc&&ri()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}function Il(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Al extends wl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Sl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kl(this),this._firestoreClient.terminate()}}function xl(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.P0)("firestore");t&&bl(s,...t)}return s}function Dl(t){return t._firestoreClient||kl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kl(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new us(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,hl(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new il(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nl(es.fromBase64String(t))}catch(t){throw new ai(oi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Nl(es.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ai(oi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ii(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ai(oi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ai(oi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wi(this._lat,t._lat)||wi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=/^__.*__$/;function Pl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ri()}}class Fl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Fl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.fa(t),r}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Gl(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(Pl(this.ca)&&Ml.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Vl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Xc(t)}ya(t,e,n,r=!1){return new Fl({ca:t,methodName:e,ga:n,path:Ii.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $l(t){const e=t._freezeSettings(),n=Xc(t._databaseId);return new Vl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jl(t,e,n,r=!1){return Ul(n,t.ya(r?4:3,e))}function Ul(t,e){if(ql(t=(0,a.m9)(t)))return zl("Unsupported field value:",e,t),Bl(t,e);if(t instanceof Rl)return function(t,e){if(!Pl(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Ul(i,e.wa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Po(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=_i.fromDate(t);return{timestampValue:Fa(e.serializer,n)}}if(t instanceof _i){const n=new _i(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Fa(e.serializer,n)}}if(t instanceof Ll)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Nl)return{bytesValue:Va(e.serializer,t._byteString)};if(t instanceof _l){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ja(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${ml(t)}`)}(t,e)}function Bl(t,e){const n={};return Gi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,((t,r)=>{const i=Ul(r,e.ha(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function ql(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof _i||t instanceof Ll||t instanceof Nl||t instanceof _l||t instanceof Rl)}function zl(t,e,n){if(!ql(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=ml(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}}const Hl=new RegExp("[~\\*/\\[\\]]");function Kl(t,e,n){if(e.search(Hl)>=0)throw Gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ol(...e.split("."))._internalPath}catch(r){throw Gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ai(oi.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _l(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ql(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Yl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ql extends Wl{data(){return super.data()}}function Yl(t,e){return"string"==typeof e?Kl(t,e):e instanceof Ol?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ai(oi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jl{}class Zl extends Jl{}function th(t,e,...n){let r=[];e instanceof Jl&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof rh)).length,n=t.filter((t=>t instanceof eh)).length;if(e>1||e>0&&n>0)throw new ai(oi.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)t=i._apply(t);return t}class eh extends Zl{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new eh(t,e,n)}_apply(t){const e=this._parse(t);return oh(t._query,e),new El(t.firestore,t.converter,ho(t._query,e))}_parse(t){const e=$l(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ai(oi.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){sh(o,s);const e=[];for(const n of o)e.push(ih(r,t,n));a={arrayValue:{values:e}}}else a=ih(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||sh(o,s),a=jl(n,e,o,"in"===s||"not-in"===s);return Ms.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function nh(t,e,n){const r=e,i=Yl("where",t);return eh._create(i,r,n)}class rh extends Jl{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new rh(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Ps.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)oh(n,i),n=ho(n,i)}(t._query,e),new El(t.firestore,t.converter,ho(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function ih(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new ai(oi.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!co(e)&&-1!==n.indexOf("/"))throw new ai(oi.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ci.fromString(n));if(!Ai.isDocumentKey(r))throw new ai(oi.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ws(t,new Ai(r))}if(n instanceof _l)return ws(t,n._key);throw new ai(oi.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ml(n)}.`)}function sh(t,e){if(!Array.isArray(t)||0===t.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oh(t,e){if(e.isInequality()){const n=ao(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new ai(oi.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=oo(t);null!==i&&ah(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ai(oi.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ai(oi.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ah(t,e,n){if(!n.isEqual(e))throw new ai(oi.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ch{convertValue(t,e="none"){switch(fs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return is(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ss(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ri()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ki(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Ll(is(t.latitude),is(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=as(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(cs(t));default:return null}}convertTimestamp(t){const e=rs(t);return new _i(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ci.fromString(t);ii(sc(n));const r=new ls(n.get(1),n.get(3)),i=new Ai(n.popFirst(5));return r.isEqual(e)||ti(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class lh extends Wl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new hh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Yl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class hh extends lh{data(t={}){return super.data(t)}}class fh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new uh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new hh(this._firestore,this._userDataWriter,n.key,n,new uh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ai(oi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new hh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new uh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new hh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new uh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:dh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}class ph extends ch{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _l(this.firestore,null,e)}}function gh(t,...e){var n,r,i;t=(0,a.m9)(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Il(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Il(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof _l)l=vl(t.firestore,Al),h=io(t._key.path),u={next:n=>{e[o]&&e[o](mh(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=vl(t,El);l=vl(n.firestore,Al),h=n._query;const r=new ph(l);u={next:t=>{e[o]&&e[o](new fh(l,r,n,t))},error:e[o+1],complete:e[o+2]},Xl(t._query)}return function(t,e,n,r){const i=new rl(r),s=new Ru(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>xu(await ll(t),s))),()=>{i.Dc(),t.asyncQueue.enqueueAndForget((async()=>Du(await ll(t),s)))}}(Dl(l),h,c,u)}function mh(t,e,n){const r=n.docs.get(e._key),i=new ph(t);return new lh(t,i,e._key,r,new uh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Yr=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Al(new fi(t.getProvider("auth-internal")),new mi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ai(oi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Wr,"3.12.2",t),(0,i.KN)(Wr,"3.12.2","esm2017")}()}}]);
//# sourceMappingURL=chunk-vendors.647dcc40.js.map