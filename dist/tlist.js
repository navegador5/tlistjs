!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.TLISTJS=t():e.TLISTJS=t()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){(function(e){var n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},i=/%[sdj%]/g;t.format=function(e){if(!g(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(l(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,u=n.length,o=String(e).replace(i,function(e){if("%%"===e)return"%";if(r>=u)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),f=n[r];r<u;f=n[++r])v(f)||!O(f)?o+=" "+f:o+=" "+l(f);return o},t.deprecate=function(r,n){if(void 0!==e&&!0===e.noDeprecation)return r;if(void 0===e)return function(){return t.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(n);e.traceDeprecation?console.trace(n):console.error(n),i=!0}return r.apply(this,arguments)}};var u,o={};function l(e,r){var n={seen:[],stylize:a};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),y(r)?n.showHidden=r:r&&t._extend(n,r),d(n.showHidden)&&(n.showHidden=!1),d(n.depth)&&(n.depth=2),d(n.colors)&&(n.colors=!1),d(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=f),c(n,e,n.depth)}function f(e,t){var r=l.styles[t];return r?"["+l.colors[r][0]+"m"+e+"["+l.colors[r][1]+"m":e}function a(e,t){return e}function c(e,r,n){if(e.customInspect&&r&&P(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,e);return g(i)||(i=c(e,i,n)),i}var u=function(e,t){if(d(t))return e.stylize("undefined","undefined");if(g(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(h(t))return e.stylize(""+t,"number");if(y(t))return e.stylize(""+t,"boolean");if(v(t))return e.stylize("null","null")}(e,r);if(u)return u;var o=Object.keys(r),l=function(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(r)),j(r)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return p(r);if(0===o.length){if(P(r)){var f=r.name?": "+r.name:"";return e.stylize("[Function"+f+"]","special")}if(m(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(w(r))return e.stylize(Date.prototype.toString.call(r),"date");if(j(r))return p(r)}var a,O="",A=!1,V=["{","}"];(b(r)&&(A=!0,V=["[","]"]),P(r))&&(O=" [Function"+(r.name?": "+r.name:"")+"]");return m(r)&&(O=" "+RegExp.prototype.toString.call(r)),w(r)&&(O=" "+Date.prototype.toUTCString.call(r)),j(r)&&(O=" "+p(r)),0!==o.length||A&&0!=r.length?n<0?m(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),a=A?function(e,t,r,n,i){for(var u=[],o=0,l=t.length;o<l;++o)I(t,String(o))?u.push(s(e,t,r,n,String(o),!0)):u.push("");return i.forEach(function(i){i.match(/^\d+$/)||u.push(s(e,t,r,n,i,!0))}),u}(e,r,n,l,o):o.map(function(t){return s(e,r,n,l,t,A)}),e.seen.pop(),function(e,t,r){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(a,O,V)):V[0]+O+V[1]}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function s(e,t,r,n,i,u){var o,l,f;if((f=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?l=f.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):f.set&&(l=e.stylize("[Setter]","special")),I(n,i)||(o="["+i+"]"),l||(e.seen.indexOf(f.value)<0?(l=v(r)?c(e,f.value,null):c(e,f.value,r-1)).indexOf("\n")>-1&&(l=u?l.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+l.split("\n").map(function(e){return"   "+e}).join("\n")):l=e.stylize("[Circular]","special")),d(o)){if(u&&i.match(/^\d+$/))return l;(o=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+l}function b(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function v(e){return null===e}function h(e){return"number"==typeof e}function g(e){return"string"==typeof e}function d(e){return void 0===e}function m(e){return O(e)&&"[object RegExp]"===A(e)}function O(e){return"object"==typeof e&&null!==e}function w(e){return O(e)&&"[object Date]"===A(e)}function j(e){return O(e)&&("[object Error]"===A(e)||e instanceof Error)}function P(e){return"function"==typeof e}function A(e){return Object.prototype.toString.call(e)}function V(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(r){if(d(u)&&(u=e.env.NODE_DEBUG||""),r=r.toUpperCase(),!o[r])if(new RegExp("\\b"+r+"\\b","i").test(u)){var n=e.pid;o[r]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",r,n,e)}}else o[r]=function(){};return o[r]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=b,t.isBoolean=y,t.isNull=v,t.isNullOrUndefined=function(e){return null==e},t.isNumber=h,t.isString=g,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=d,t.isRegExp=m,t.isObject=O,t.isDate=w,t.isError=j,t.isFunction=P,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(4);var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function K(){var e=new Date,t=[V(e.getHours()),V(e.getMinutes()),V(e.getSeconds())].join(":");return[e.getDate(),x[e.getMonth()],t].join(" ")}function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",K(),t.format.apply(t,arguments))},t.inherits=r(5),t._extend=function(e,t){if(!t||!O(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var F="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function T(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(F&&e[F]){var t;if("function"!=typeof(t=e[F]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,F,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),i=[],u=0;u<arguments.length;u++)i.push(arguments[u]);i.push(function(e,n){e?r(e):t(n)});try{e.apply(this,i)}catch(e){r(e)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),F&&Object.defineProperty(t,F,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},t.promisify.custom=F,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var u=this,o=function(){return i.apply(u,arguments)};t.apply(this,r).then(function(t){e.nextTick(o,null,t)},function(t){e.nextTick(T,t,o)})}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.defineProperties(r,n(t)),r}}).call(this,r(3))},function(e,t,r){const n=r(2),i=r(0);class u extends Array{constructor(...e){super(...function(e){return l(e)||(e=e.length>1?xe(e):Object.entries(e[0]).length>0?p(e[0]):[]),e}(e))}}function o(e){return!!i.isArray(e)&&2===e.length}function l(e){return!!i.isArray(e)&&e.filter(o).length===e.length}function f(e,t){return n.mapiv(e,(e,t,r)=>[t,r[e]],[t])}function a(e){return[e.map(e=>e[0]),e.map(e=>e[1])]}function c(e,t){let r={},[n,i]=a(e);for(let e=0;e<n.length;e++)r[n[e]]=i[e];return r}function p(e){return Object.entries(e)}function s(e,t){return e.concat(t)}function b(e,t){return t.concat(e)}function y(e,t){let[r,i]=a(e);return n.allIndexesOf(r,t)}function v(e,t){let[r,i]=a(e);return n.allIndexesOf(i,t)}function h(e,t,r){let[i,u]=a(e),o=n.allIndexesOf(i,t),l=n.allIndexesOf(u,r);return n.slctvIv(o,(e,t,r)=>t==r[e],[l])}function g(e,t){return y(e,t)[0]}function d(e,t){return v(e,t)[0]}function m(e,t,r){return h(e,t,r)[0]}function O(e,t){return y(e,t).last()}function w(e,t){return v(e,t).last()}function j(e,t,r){return h(e,t,r).last()}function P(e,t,r,i){return e=n.insert(e,[t,r],i)}function A(e,t,r){return P(e,t,r,e.length-1)}function V(e,t,r){return P(e,t,r,0)}function x(e,t,r){return e=n.insertArray(e,t,r)}function K(e,t){return y(e,t).length>0}function I(e,t){return v(e,t).length>0}function F(e,t,r){return h(e,t,r).length>0}function T(e,t){return y(e,t).length}function S(e,t){return v(e,t).length}function q(e,t,r){return h(e,t,r).length}function z(e,t,r){let n=y(e,t)[r];return e.seqsNot([n])}function E(e,t,r){let n=v(e,t)[r];return e.seqsNot([n])}function L(e,t,r,n){let i=h(e,t,r)[n];return e.seqsNot([i])}function k(e,t){return z(e,t,0)}function N(e,t){return E(e,t,0)}function D(e,t,r){return L(e,t,r,0)}function _(e,t){return z(e,t,y(e,t).length-1)}function M(e,t){return E(e,t,v(e,t).length-1)}function C(e,t,r){return L(e,t,r,h(e,t,r).length-1)}function J(e,t){let r=y(e,t);return e.seqsNot(r)}function R(e,t){let r=v(e,t);return e.seqsNot(r)}function U(e,t,r){let n=h(e,t,r);return e.seqsNot(n)}function G(e,t,r){let n=y(e,t)[r];return e.seqs([n])[0]}function H(e,t,r){let n=v(e,t)[r];return e.seqs([n])[0]}function $(e,t,r,n){let i=h(e,t,r)[n];return e.seqs([i])[0]}function B(e,t){return G(e,t,0)}function Z(e,t){return H(e,t,0)}function W(e,t,r){return $(e,t,r,0)}function Q(e,t){return G(e,t,y(e,t).length-1)}function X(e,t){return H(e,t,v(e,t).length-1)}function Y(e,t,r){return $(e,t,r,h(e,t,r).length-1)}function ee(e,t){let r=y(e,t);return e.seqs(r)}function te(e,t){let r=v(e,t);return e.seqs(r)}function re(e,t,r){let n=h(e,t,r);return e.seqs(n)}function ne(e,t,r,n){return e[y(e,t)[n]][1]=r,e}function ie(e,t,r){return ne(e,t,r,0)}function ue(e,t,r){return ne(e,t,r,e.length-1)}function oe(e,t,r){let n=y(e,t);for(let t of n)e[t][1]=r;return e}function le(e,t){return e[0]===t[0]}function fe(e,t){return e[1]===t[1]}function ae(e,t){return le(e,t)&&fe(e,t)}function ce(e,t){return e[0]<t[0]}function pe(e,t){return e[1]<t[1]}function se(e,t){return ce(e,t)?-1:le(e,t)?0:1}function be(e,t){return pe(e,t)?-1:fe(e,t)?0:1}function ye(e,t){return ce(e,t)?-1:le(e,t)?be(e,t):1}function ve(e,t){return pe(e,t)?-1:fe(e,t)?se(e,t):1}function he(e){return e.sort(se),e}function ge(e){return e.sort(be),e}function de(e){return e.sort(ye),e}function me(e){return e.sort(ve),e}function Oe(e,t){let r=[];for(let n=0;n<e.length;n++){let i=e[n],u=i[0],o=i[1];K(r,u)&&u===t?r=ne(r,u,o,0):r.push([u,o])}return r}function we(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r],i=n[0],u=n[1];K(t,i)?t=ne(t,i,u,0):t.push([i,u])}return t}function je(e,t){let r=[];for(let n=0;n<e.length;n++){let i=e[n],u=i[0],o=i[1];if(I(r,o)&&o===t){r[d(r,o)]=[u,o]}else r.push([u,o])}return r}function Pe(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r],i=n[0],u=n[1];if(I(t,u)){t[d(t,u)]=[i,u]}else t.push([i,u])}return t}function Ae(e,t,r){let n=[];for(let i=0;i<e.length;i++){let u=e[i],o=u[0],l=u[1];if(F(n,o,l)&&o===t&&l===r){n[m(n,o,l)]=[o,l]}else n.push([o,l])}return n}function Ve(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r],i=n[0],u=n[1];if(F(t,i,u)){t[m(t,i,u)]=[i,u]}else t.push([i,u])}return t}function xe(e){if(e.length%2==1&&(e=e.slice(0,e.length-1)),e.length<2)return[];return f(e.evens(),e.odds())}function Ke(e){let[t,r]=a(e);return n.interleave(t,r,1)}Object.defineProperty(u.prototype,"kvl",{value:function(){return a(this).map(e=>Array.from(e))},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"dict",{value:function(e){return c(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"extend",{value:function(e){return s(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"prextend",{value:function(e){return b(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"allIndexesOfK",{value:function(e){return y(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"allIndexesOfV",{value:function(e){return v(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"allIndexesOfKV",{value:function(e,t){return h(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"firstIndexOfK",{value:function(e){return g(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"firstIndexOfV",{value:function(e){return d(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"firstIndexOfKV",{value:function(e,t){return m(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"lastIndexOfK",{value:function(e){return O(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"lastIndexOfV",{value:function(e){return w(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"lastIndexOfKV",{value:function(e,t){return j(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"insertOne",{value:function(e,t,r){return P(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"append",{value:function(e,t){return A(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"prepend",{value:function(e,t){return V(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"insertTl",{value:function(e,t){return x(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"includesK",{value:function(e){return K(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"includesV",{value:function(e){return I(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"includesKV",{value:function(e,t){return F(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"countK",{value:function(e){return T(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"countV",{value:function(e){return S(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"countKV",{value:function(e,t){return q(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmK",{value:function(e,t){return z(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmV",{value:function(e,t){return E(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmKV",{value:function(e,t,r){return L(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmFirstK",{value:function(e){return k(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmFirstV",{value:function(e){return N(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmFirstKV",{value:function(e,t){return D(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmLastK",{value:function(e){return _(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmLastV",{value:function(e){return M(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmLastKV",{value:function(e,t){return C(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmAllK",{value:function(e){return J(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmAllV",{value:function(e){return R(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"rmAllKV",{value:function(e,t){return U(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getK",{value:function(e,t){return G(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getV",{value:function(e,t){return H(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getKV",{value:function(e,t,r){return $(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getFirstK",{value:function(e){return B(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getFirstV",{value:function(e){return Z(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getFirstKV",{value:function(e,t){return W(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getLastK",{value:function(e){return Q(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getLastV",{value:function(e){return X(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getLastKV",{value:function(e,t){return Y(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getAllK",{value:function(e){return ee(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getAllV",{value:function(e){return te(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"getAllKV",{value:function(e,t){return re(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"set",{value:function(e,t,r){return ne(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"setFirst",{value:function(e,t){return ie(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"setLast",{value:function(e,t){return ue(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"setAll",{value:function(e,t){return oe(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"sortk",{value:function(){return he(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"sortv",{value:function(){return ge(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"sortkv",{value:function(){return de(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"sortvk",{value:function(){return me(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"uniqualizeK",{value:function(e){return Oe(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"uniqualizeAllK",{value:function(){return we(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"uniqualizeV",{value:function(e){return je(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"uniqualizeAllV",{value:function(){return Pe(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"uniqualizeKV",{value:function(e,t){return Ae(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"uniqualizeAllKV",{value:function(){return Ve(tl)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"list",{value:function(){return Array.from(Ke(tl))},writable:!0,enumerable:!1,configurable:!0}),e.exports={Tlist:u,isTuple:o,isTlist:l,t2d:function(e){return{[e[0]]:e[1]}},d2t:function(e){return Object.entries(e)[0]},kvl2tl:f,tl2kvl:a,tl2d:c,d2tl:p,l2tl:xe,tl2l:Ke,extend:s,prextend:b,allIndexesOfK:y,allIndexesOfV:v,allIndexesOfKV:h,firstIndexOfK:g,firstIndexOfV:d,firstIndexOfKV:m,lastIndexOfK:O,lastIndexOfV:w,lastIndexOfKV:j,insert:P,insertOne:function(e,t,r,i){return e=n.insert(e,[t,r],i)},append:A,prepend:V,insertTl:x,includesK:K,includesV:I,includesKV:F,countK:T,countV:S,countKV:q,rmK:z,rmV:E,rmKV:L,rmFirstK:k,rmFirstV:N,rmFirstKV:D,rmLastK:_,rmLastV:M,rmLastKV:C,rmAllK:J,rmAllV:R,rmAllKV:U,getK:G,getV:H,getKV:$,getFirstK:B,getFirstV:Z,getFirstKV:W,getLastK:Q,getLastV:X,getLastKV:Y,getAllK:ee,getAllV:te,getAllKV:re,set:ne,setFirst:ie,setLast:ue,setAll:oe,tupleEqK:le,tupleEqV:fe,tupleEqKV:ae,tupleEq:function(e,t){return ae(e,t)},tupleLtK:ce,tupleLtV:pe,tupleGtK:function(e,t){return e[0]>t[0]},tupleGtV:function(e,t){return e[1]>t[1]},tupleCmpK:se,tupleCmpV:be,tupleCmpKV:ye,tupleCmpVK:ve,sortk:he,sortv:ge,sortkv:de,sortvk:me,uniqualizeK:Oe,uniqualizeAllK:we,uniqualizeV:je,uniqualizeAllV:Pe,uniqualizeKV:Ae,uniqualizeAllKV:Ve}},function(e,t,r){const n=r(0);function i(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=i,o=e[i],l=(0,t[i])(u,o,...r[i]);n.push(l)}return n}function u(e,t,r){return void 0===r&&(r=[]),i(e,t,Array(e.length).fill(r))}function o(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=i,u=(0,t[i])(e,...r[i]);n.push(u)}return n}function l(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=e[i],o=(0,t[i])(u,...r[i]);n.push(o)}return n}function f(e,t,r){return l(e,t,Array(e.length).fill(r))}function a(e,t,r){return i(e,Array(e.length).fill(t),r)}function c(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let e=i,u=(0,t[i])(e,...r);n.push(u)}return n}function p(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=(0,t[i])(...r[i]);n.push(e)}return n}function s(e,t,r){return u(e,Array(e.length).fill(t),r)}function b(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=t(i,...r[i]);n.push(e)}return n}function y(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=t(e[i],...r[i]);n.push(u)}return n}function v(e,t,r){void 0===r&&(r=[]);let n=Array(e.length).fill(r),i=[];for(var u=0;u<e.length;u++){let e=(0,t[u])(...n[u]);i.push(e)}return i}function h(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let e=t(i,...oargs);n.push(e)}return n}function g(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let u=t(e[i],...r);n.push(u)}return n}function d(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=t(i,...r[i]);n.push(e)}return n}function m(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=i,o=e[i],l=(0,t[i])(u,o,...r[i]),f={i:i,v:e[i]};l&&n.push(f)}return n}function O(e,t,r){return m(e,t,r).map(e=>e.i)}function w(e,t,r){return void 0===r&&(r=[]),m(e,t,Array(e.length).fill(r))}function j(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=i,o=(0,t[i])(u,...r[i]),l={i:i,v:e[i]};o&&n.push(l)}return n}function P(e,t,r){return P(e,t,r).map(e=>e.i)}function A(e,t,r){return O(e,Array(e.length).fill(t),r)}function V(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let u=i,o=(0,t[i])(u,...r),l={i:i,v:e[i]};o&&n.push(l)}return n}function x(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=(0,t[i])(...r[i]),o={i:i,v:e[i]};u&&n.push(o)}return n}function K(e,t,r){return m(e,Array(e.length).fill(t),Array(e.length).fill(r))}function I(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=t(i,...r[i]),o={i:i,v:e[i]};u&&n.push(o)}return n}function F(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=t(e[i],...r[i]),o={i:i,v:e[i]};u&&n.push(o)}return n}function T(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let u=(0,t[i])(...r),o={i:i,v:e[i]};u&&n.push(o)}return n}function S(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let u=t(i,...r),o={i:i,v:e[i]};u&&n.push(o)}return n}function q(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let u=t(e[i],...r),o={i:i,v:e[i]};u&&n.push(o)}return n}function z(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=t(...r[i]),o={i:i,v:e[i]};u&&n.push(o)}return n}function E(e){return void 0===e&&(e=!1),e?(e,t,r)=>e[r]===t[r]:(e,t,r)=>t.includes(e[r])}function L(e,t){let r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat(n,r)}function k(e,t){let r=e%t,n=parseInt((e-r)/t);return 0===r||(n+=1),n}function N(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];for(let e=0;e<n.length;e++)t.push(n[e])}return t}function D(e){return e[0].map((t,r)=>e.map((t,n)=>e[n][r]))}function _(e,t){let r=e.length,n=[];for(let i=0;i<r;i+=t){let r=e.slice(i,i+t);n.push(r)}return n}function M(e){let t=e.entries();return Array.from(t)}function C(e,t){let r=M(e);return r=(r=r.filter(e=>e[1]==t)).map(e=>e[0])}function J(e){let t=function(e){e.length;let t=e.map(e=>e.length);return Math.min(...t)}(e);return[e.map(e=>e.slice(0,t)),e.map(e=>e.slice(t)).filter(e=>e.length>0)]}function R(e){let t,r=[],n=e;for(;n.length>0;)[t,n]=J(n),r.push(t);return r}function U(...e){let t;[e,t]=function(e){let t,r=e.length-1;return n.isArray(e[r])?t=1:(t=parseInt(e[r]),e=e.slice(0,r)),[e,t=void 0===t?1:t<1?1:t]}(e),e=g(e,(e,t)=>_(e,t),[t]);let r=function(...e){let t=R(e);return tmats=t.map(D),wfsmat=tmats.map(N),N(wfsmat)}(...e);return r=N(r)}Object.defineProperty(Array.prototype,"mapfivo",{value:function(e,t){return i(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfiv",{value:function(e,t){return u(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfio",{value:function(e,t){return o(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfvo",{value:function(e,t){return l(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfv",{value:function(e,t){return f(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapivo",{value:function(e,t){return a(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfi",{value:function(e,t){return c(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfo",{value:function(e,t){return p(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapiv",{value:function(e,t){return s(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapio",{value:function(e,t){return b(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapvo",{value:function(e,t){return y(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapf",{value:function(e,t){return v(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapi",{value:function(e,t){return h(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapv",{value:function(e,t){return g(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapo",{value:function(e,t){return d(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctivFivo",{value:function(e,t){return m(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"uniqualize",{value:function(){let e=new Set(this);return Array.from(e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"flat",{value:function(){let e=this;for(;e.some(e=>Array.isArray(e));)e=[].concat(...e);return e},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"tlist",{value:M,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"allIndexesOf",{value:function(e){return C(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"last",{value:function(){return this[this.length-1]},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"insert",{value:function(e,t){return this.splice(t,0,e),this},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"insertArray",{value:function(e,t){return this.splice(t,0,...e),this},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"seqs",{value:function(e){return this.filter((t,r)=>e.includes(r))},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"seqsNot",{value:function(e){return this.filter((t,r)=>!e.includes(r))},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"evens",{value:function(){return this.filter((e,t)=>t%2==0)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"odds",{value:function(){return this.filter((e,t)=>t%2==1)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"interleave",{value:function(...e){return e.unshift(this),U(...e)},writable:!0,enumerable:!1,configurable:!0}),e.exports={mapfivo:i,mapfiv:u,mapfio:o,mapfvo:l,mapivo:a,mapfi:c,mapfv:f,mapfo:p,mapiv:s,mapio:b,mapvo:y,mapf:v,mapi:h,mapv:g,mapo:d,slctivFivo:m,slctiFivo:O,slctvFivo:function(e,t,r){return m(e,t,r).map(e=>e.v)},slctivFiv:w,slctiFiv:function(e,t,r){return w(e,t,r).map(e=>e.i)},slctvFiv:function(e,t,r){return w(e,t,r).map(e=>e.v)},slctivFio:j,slctiFio:function(e,t,r){return j(e,t,r).map(e=>e.i)},slctvFio:function(e,t,r){return j(e,t,r).map(e=>e.v)},slctivFvo:function(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let u=e[i],o=(0,t[i])(u,...r[i]),l={i:i,v:e[i]};o&&n.push(l)}return n},slctiFvo:P,slctvFvo:function(e,t,r){return P(e,t,r).map(e=>e.v)},slctivIvo:A,slctiIvo:function(e,t,r){return A(e,t,r).map(e=>e.i)},slctvIvo:function(e,t,r){return A(e,t,r).map(e=>e.v)},slctivFi:V,slctiFi:function(e,t,r){return V(e,t,r).map(e=>e.i)},slctvFi:function(e,t,r){return V(e,t,r).map(e=>e.v)},slctivFo:x,slctiFo:function(e,t,r){return x(e,t,r).map(e=>e.i)},slctvFo:function(e,t,r){return x(e,t,r).map(e=>e.v)},slctivIv:K,slctiIv:function(e,t,r){return K(e,t,r).map(e=>e.i)},slctvIv:function(e,t,r){return K(e,t,r).map(e=>e.v)},slctivIo:I,slctiIo:function(e,t,r){return I(e,t,r).map(e=>e.i)},slctvIo:function(e,t,r){return I(e,t,r).map(e=>e.v)},slctivVo:F,slctiVo:function(e,t,r){return F(e,t,r).map(e=>e.i)},slctvVo:function(e,t,r){return F(e,t,r).map(e=>e.v)},slctivF:T,slctiF:function(e,t,r){return T(e,t,r).map(e=>e.i)},slctvF:function(e,t,r){return T(e,t,r).map(e=>e.v)},slctivI:S,slctiI:function(e,t,r){return S(e,t,r).map(e=>e.i)},slctvI:function(e,t,r){return S(e,t,r).map(e=>e.v)},slctivV:q,slctiV:function(e,t,r){return q(e,t,r).map(e=>e.i)},slctvV:function(e,t,r){return q(e,t,r).map(e=>e.v)},slctivO:z,slctiO:function(e,t,r){return z(e,t,r).map(e=>e.i)},slctvO:function(e,t,r){return z(e,t,r).map(e=>e.v)},replfivo:function(e,t,r,n){let i=O(e,r,n),u=Array.from(e);for(let e of i)u[e]=t;return u},replace:function(e,t,r){let n=Array.from(e);for(let e=0;e<n.length;e++)n[e]===t&&(n[e]=r);return n},diffi:function(e,t,r,n){void 0===n&&(n=E(r));let i=[];for(var u in e)n(e,t,u)||i.push(e[u]);return i},diffv:function(e,t,r,n){void 0===n&&(n=E(r));let i=[];for(var u in e)n(e,t,u)||i.push(e[u]);return i},diffiv:function(e,t,r,n){void 0===n&&(n=E(r));let i=[];for(var u in e)n(e,t,u)||i.push({index:u,value:e[u]});return i},init:function(e,t){return Array.apply(null,Array(e)).map(e=>t)},divide:_,kvlist2d:function(e,t){let r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return r},d2kvlist:function(e){let t=Object.keys(e);return[t,g(t,t=>e[t])]},reheadI:L,reheadV:function(e,t){let r=e.indexOf(t);return L(e,r)},getRowNumsViaLength:k,matRc2index:function(e,t,r){return e*r+t},matIndex2rc:function(e,t){let r=e%t;return[(e-r)/t,r]},list2mat:function(e,t){let r=e.length,n=k(r,t),i=[],u=0;for(var o=0;o<n;o++){let n=[];for(var l=0;l<t;l++)u<r&&n.push(e[u]),u+=1;i.push(n)}return i},list2mat2:function(e,t,r){let n=[],i=0;for(var u=0;u<r;u++){let r=[];for(var o=0;o<t;o++)r.push(e[i]),i+=1;n.push(r)}return n},mat2list:N,transpose:D,batmap:function(e,t,r){let n=[];r=D(r);for(var i=0;i<e.length;i++){let u=t(e[i],...r[i]);n.push(u)}return n},index1dto2d:function(e,t){return[(e-e%t)/t,e%t]},index2dto1d:function(e,t,r){return r*e+t},initMat:function(e,t,r){var n=Array(e).fill(r);for(let e=0;e<n.length;e++)n[e]=Array(t).fill(r);return n},extendWithOneValue:function(e,t,r){let n=Array(r).fill(t);return Array.prototype.concat(e,n)},uniqualize:function(e){let t=new Set(e);return Array.from(t)},tlist:M,allIndexesOf:C,last:function(e){return e[e.length-1]},insert:function(e,t,r){return e.splice(r,0,t),e},insertArray:function(e,t,r){return e.splice(r,0,...t),e},seqs:function(e,t){return e.filter((e,r)=>t.includes(r))},seqsNot:function(e,t){return e.filter((e,r)=>!t.includes(r))},evens:function(e){return e.filter((e,t)=>t%2==0)},odds:function(e){return e.filter((e,t)=>t%2==1)},dmat2mats:R,interleave:U}},function(e,t){var r,n,i=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(e){r=u}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var f,a=[],c=!1,p=-1;function s(){c&&f&&(c=!1,f.length?a=f.concat(a):p=-1,a.length&&b())}function b(){if(!c){var e=l(s);c=!0;for(var t=a.length;t;){for(f=a,a=[];++p<t;)f&&f[p].run();p=-1,t=a.length}f=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new y(e,t)),1!==a.length||c||l(b)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}])});
//# sourceMappingURL=tlist.js.map