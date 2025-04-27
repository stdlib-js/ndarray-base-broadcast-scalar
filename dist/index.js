"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(N,u){"use strict";var c=require("@stdlib/assert-is-number").isPrimitive,q=require("@stdlib/array-base-assert-is-accessor-array"),f=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),m=require("@stdlib/array-base-accessor-setter"),b=require("@stdlib/array-base-setter"),l=require("@stdlib/array-base-zeros"),g=require("@stdlib/ndarray-base-buffer"),w=require("@stdlib/ndarray-base-ctor"),x=require("@stdlib/string-format");function S(e,r,s,o){var a,i,t;if(a=g(r,1),a===null)throw new TypeError(x("invalid argument. Second argument must be a recognized data type. Value: `%s`.",r));return f(r)&&c(e)&&(e=[e,0]),q(a)?i=m(r):i=b(r),i(a,0,e),t=s.length||1,new w(r,a,s,l(t),0,o)}u.exports=S});var z=n();module.exports=z;
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
