"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=o(function(S,s){
var c=require('@stdlib/array-base-assert-is-accessor-array/dist'),f=require('@stdlib/array-base-accessor-setter/dist'),q=require('@stdlib/array-base-setter/dist'),v=require('@stdlib/array-base-zeros/dist'),m=require('@stdlib/ndarray-base-buffer/dist'),b=require('@stdlib/ndarray-base-ctor/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function g(e,r,i,n){var a,t;if(a=m(r,1),a===null)throw new TypeError(l('1d337',r));return/^complex/.test(r)&&typeof e=="number"&&(e=[e,0]),c(a)?t=f(r):t=q(r),t(a,0,e),new b(r,a,i,v(i.length),0,n)}s.exports=g
});var w=u();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
