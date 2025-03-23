"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=o(function(z,t){"use strict";var c=require("@stdlib/assert-is-number").isPrimitive,v=require("@stdlib/array-base-assert-is-accessor-array"),q=require("@stdlib/array-base-accessor-setter"),f=require("@stdlib/array-base-setter"),m=require("@stdlib/array-base-zeros"),b=require("@stdlib/ndarray-base-buffer"),l=require("@stdlib/ndarray-base-ctor"),g=require("@stdlib/string-format");function w(e,r,s,n){var i,a;if(i=b(r,1),i===null)throw new TypeError(g("invalid argument. Second argument must be a recognized data type. Value: `%s`.",r));return/^complex/.test(r)&&c(e)&&(e=[e,0]),v(i)?a=q(r):a=f(r),a(i,0,e),new l(r,i,s,m(s.length),0,n)}t.exports=w});var x=u();module.exports=x;
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
