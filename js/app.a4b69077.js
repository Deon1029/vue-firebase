(function(){"use strict";var e={9633:function(e,n,r){var o=r(7195),t=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("FirestoreTest",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],s=function(){var e=this,n=e._self._c;return n("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[n("div",[e._v(e._s(e.msg))]),n("div",[n("ul",e._l(e.result,(function(r,o){return n("li",{key:o},[e._v(" "+e._s(r.unitId)),n("br"),e._v(" "+e._s(r.campusCode)),n("br"),e._v(" 위도 : "+e._s(r.location.latitude)),n("br"),e._v(" 경도 : "+e._s(r.location.longitude)),n("br"),n("br")])})),0)])])},u=[],a=(r(7658),r(5467)),c=r(5368),l={name:"FirestoreTest",props:{msg:String},data(){return{result:[]}},created(){const e={apiKey:"AIzaSyCnRn5OjrdiMVS3UgxoOGFYjf9XVE6dhg4",authDomain:"deon-vue-app-test.firebaseapp.com",projectId:"deon-vue-app-test",storageBucket:"deon-vue-app-test.appspot.com",messagingSenderId:"523527133558",appId:"1:523527133558:web:17517cd22d937a7fac0257",measurementId:"G-27T6DLJZVK"},n=(0,a.ZF)(e),r=(0,c.ad)(n),o=(0,c.IO)((0,c.hJ)(r,"DeliverUnitLatLng"),(0,c.ar)("campusCode","==","D1"));(0,c.cf)(o,(e=>{const n=[];e.forEach((e=>{n.push(e.data())})),console.log(n),this.result=n}))}},f=l,d=r(1001),p=(0,d.Z)(f,s,u,!1,null,null,null),v=p.exports,g={name:"App",components:{FirestoreTest:v}},h=g,b=(0,d.Z)(h,t,i,!1,null,null,null),m=b.exports,_=r(4337);(0,_.z)("/vue-firebase/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),o.ZP.config.productionTip=!1,new o.ZP({render:e=>e(m)}).$mount("#app")}},n={};function r(o){var t=n[o];if(void 0!==t)return t.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(n,o,t,i){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],t=e[l][1],i=e[l][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](o[a])}))?o.splice(a--,1):(u=!1,i<s&&(s=i));if(u){e.splice(l--,1);var c=t();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,t,i]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,o){var t,i,s=o[0],u=o[1],a=o[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(t in u)r.o(u,t)&&(r.m[t]=u[t]);if(a)var l=a(r)}for(n&&n(o);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},o=self["webpackChunkvue_firebase_dev"]=self["webpackChunkvue_firebase_dev"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(9633)}));o=r.O(o)})();
//# sourceMappingURL=app.a4b69077.js.map