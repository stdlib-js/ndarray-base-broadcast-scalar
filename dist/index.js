"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=c(function(A,u){"use strict";var v=require("@stdlib/assert-is-number").isPrimitive,q=require("@stdlib/array-base-assert-is-accessor-array"),f=require("@stdlib/array-base-accessor-setter"),m=require("@stdlib/array-base-setter"),b=require("@stdlib/array-base-zeros"),l=require("@stdlib/ndarray-base-buffer"),g=require("@stdlib/ndarray-base-ctor"),w=require("@stdlib/string-format");function x(e,r,s,o){var a,i,t;if(a=l(r,1),a===null)throw new TypeError(w("invalid argument. Second argument must be a recognized data type. Value: `%s`.",r));return/^complex/.test(r)&&v(e)&&(e=[e,0]),q(a)?i=f(r):i=m(r),i(a,0,e),t=s.length||1,new g(r,a,s,b(t),0,o)}u.exports=x});var S=n();module.exports=S;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
