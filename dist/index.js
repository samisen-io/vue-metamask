!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t.default=o.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{metaMaskId:{type:String,default:"1"}},data:function(){return{web3:null,metaMaskId:this.props.metaMaskId,netID:"1",MetaMaskAddress:"",Message:"",Web3Interval:null,AccountInterval:null,NetworkInterval:null,type:"Nologin",MetamaskMsg:{LOAD_MATAMASK_WALLET_ERROR:"There's an error loading Metamask, please try again later.",EMPTY_METAMASK_ACCOUNT:"Please log in your Metamask to proceed.",METAMASK_ACCOUNT:"You are choosing this Metamask wallet:",NETWORK_ERROR:"There's a connection error, please try again.",METAMASK_NOT_INSTALL:"Please download Metamask to proceed.",METAMASK_TEST_NET:"Please choose mainnet to proceed this application."}}},methods:{fetchWeb3:function(){void 0===window.web3&&(this.web3=null,this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL))},fetchAccounts:function(){var e=this;null!==this.web3&&this.web3.eth.getAccounts(function(t,n){return null!=t?e.Log(e.MetamaskMsg.LOAD_MATAMASK_WALLET_ERROR):0===n.length?e.Log(e.MetamaskMsg.EMPTY_METAMASK_ACCOUNT,"Nologin"):void(e.MetaMaskAddress=n[0])})},fetchNetWork:function(){var e=this;this.web3.version.getNetwork(function(t,n){return null!=t?e.Log(e.MetamaskMsg.METAMASK_TEST_NET):""!==e.MetaMaskAddress&&e.metaMaskId!==n?e.Log(e.MetamaskMsg.METAMASK_TEST_NET,"NoMainNet"):void(e.netID=n)})},Log:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.Message=e,this.$emit("onComplete",{msg:e})}},mounted:function(){var e=this,t=window.web3;void 0!==t?(window.web3=new Web3(t.currentProvider),this.web3=window.web3,this.fetchAccounts(),this.fetchNetWork(),this.Web3Interval=setInterval(function(){return e.fetchWeb3()},1e3),this.AccountInterval=setInterval(function(){return e.fetchAccounts()},1e3),this.NetworkInterval=setInterval(function(){return e.fetchNetWork()},1e3)):(this.web3=null,this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL))}}},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(11).default)("4f78fab2",r,!0,{})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],u=i[2],c=i[3],f={id:e+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},function(e,t,n){"use strict";var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vue-metamask"})},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(e,t){return u.call(t),f(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(7));t.default=r.default},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n(0);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n(8);var a=n(5),s=Object(a.a)(o.default,r.a,r.b,!1,null,"a162bede",null);t.default=s.exports},function(e,t,n){"use strict";var r=n(2);n.n(r).a},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,"\n.vue-metamask[data-v-a162bede]{position:fixed;top:0;left:0;width:0;height:0\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(3),o=n.n(r),i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},s=i&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,f=!1,l=function(){},d=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,r){f=n,d=r||{};var i=o()(e,t);return g(i),function(t){for(var n=[],r=0;r<i.length;r++){var s=i[r];(u=a[s.id]).refs--,n.push(u)}t?g(i=o()(e,t)):i=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(m(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function M(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(f)return l;r.parentNode.removeChild(r)}if(h){var o=c++;r=u||(u=M()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=M(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);d.ssrId&&e.setAttribute(p,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}}]);