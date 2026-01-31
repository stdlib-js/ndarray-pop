"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(l,a){
var o=require('@stdlib/assert-is-plain-object/dist'),u=require('@stdlib/assert-has-own-property/dist'),m=require('@stdlib/assert-is-integer/dist').isPrimitive,p=require('@stdlib/assert-is-ndarray-like/dist'),d=require('@stdlib/ndarray-base-pop/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function v(e){var r,i;if(!p(e))throw new TypeError(t('2X54f',e));if(i={dim:-1},arguments.length>1){if(r=arguments[1],!o(r))throw new TypeError(t('2X52V',r));if(u(r,"dim")){if(!m(r.dim))throw new TypeError(t('2X58M',"dim",r.dim));i.dim=r.dim}}return d(e,i.dim,!1)}a.exports=v
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
