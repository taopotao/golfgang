function l0(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function lv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ed={exports:{}},Fa={},wd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function u0(){if(pg)return Ce;pg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,$={};function M(O,H,fe){this.props=O,this.context=H,this.refs=$,this.updater=fe||F}M.prototype.isReactComponent={},M.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ne(){}ne.prototype=M.prototype;function re(O,H,fe){this.props=O,this.context=H,this.refs=$,this.updater=fe||F}var te=re.prototype=new ne;te.constructor=re,B(te,M.prototype),te.isPureReactComponent=!0;var de=Array.isArray,Ne=Object.prototype.hasOwnProperty,Ie={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function A(O,H,fe){var Se,Re={},xe=null,be=null;if(H!=null)for(Se in H.ref!==void 0&&(be=H.ref),H.key!==void 0&&(xe=""+H.key),H)Ne.call(H,Se)&&!D.hasOwnProperty(Se)&&(Re[Se]=H[Se]);var Fe=arguments.length-2;if(Fe===1)Re.children=fe;else if(1<Fe){for(var $e=Array(Fe),_t=0;_t<Fe;_t++)$e[_t]=arguments[_t+2];Re.children=$e}if(O&&O.defaultProps)for(Se in Fe=O.defaultProps,Fe)Re[Se]===void 0&&(Re[Se]=Fe[Se]);return{$$typeof:r,type:O,key:xe,ref:be,props:Re,_owner:Ie.current}}function C(O,H){return{$$typeof:r,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function x(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return H[fe]})}var V=/\/+/g;function R(O,H){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):H.toString(36)}function nt(O,H,fe,Se,Re){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(xe){case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case r:case e:be=!0}}if(be)return be=O,Re=Re(be),O=Se===""?"."+R(be,0):Se,de(Re)?(fe="",O!=null&&(fe=O.replace(V,"$&/")+"/"),nt(Re,H,fe,"",function(_t){return _t})):Re!=null&&(k(Re)&&(Re=C(Re,fe+(!Re.key||be&&be.key===Re.key?"":(""+Re.key).replace(V,"$&/")+"/")+O)),H.push(Re)),1;if(be=0,Se=Se===""?".":Se+":",de(O))for(var Fe=0;Fe<O.length;Fe++){xe=O[Fe];var $e=Se+R(xe,Fe);be+=nt(xe,H,fe,$e,Re)}else if($e=I(O),typeof $e=="function")for(O=$e.call(O),Fe=0;!(xe=O.next()).done;)xe=xe.value,$e=Se+R(xe,Fe++),be+=nt(xe,H,fe,$e,Re);else if(xe==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return be}function xt(O,H,fe){if(O==null)return O;var Se=[],Re=0;return nt(O,Se,"","",function(xe){return H.call(fe,xe,Re++)}),Se}function Ot(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var ze={current:null},ee={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ie};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:xt,forEach:function(O,H,fe){xt(O,function(){H.apply(this,arguments)},fe)},count:function(O){var H=0;return xt(O,function(){H++}),H},toArray:function(O){return xt(O,function(H){return H})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=M,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=re,Ce.StrictMode=s,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=oe,Ce.cloneElement=function(O,H,fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=B({},O.props),Re=O.key,xe=O.ref,be=O._owner;if(H!=null){if(H.ref!==void 0&&(xe=H.ref,be=Ie.current),H.key!==void 0&&(Re=""+H.key),O.type&&O.type.defaultProps)var Fe=O.type.defaultProps;for($e in H)Ne.call(H,$e)&&!D.hasOwnProperty($e)&&(Se[$e]=H[$e]===void 0&&Fe!==void 0?Fe[$e]:H[$e])}var $e=arguments.length-2;if($e===1)Se.children=fe;else if(1<$e){Fe=Array($e);for(var _t=0;_t<$e;_t++)Fe[_t]=arguments[_t+2];Se.children=Fe}return{$$typeof:r,type:O.type,key:Re,ref:xe,props:Se,_owner:be}},Ce.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Ce.createElement=A,Ce.createFactory=function(O){var H=A.bind(null,O);return H.type=O,H},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:f,render:O}},Ce.isValidElement=k,Ce.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Ot}},Ce.memo=function(O,H){return{$$typeof:v,type:O,compare:H===void 0?null:H}},Ce.startTransition=function(O){var H=ee.transition;ee.transition={};try{O()}finally{ee.transition=H}},Ce.unstable_act=oe,Ce.useCallback=function(O,H){return ze.current.useCallback(O,H)},Ce.useContext=function(O){return ze.current.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O){return ze.current.useDeferredValue(O)},Ce.useEffect=function(O,H){return ze.current.useEffect(O,H)},Ce.useId=function(){return ze.current.useId()},Ce.useImperativeHandle=function(O,H,fe){return ze.current.useImperativeHandle(O,H,fe)},Ce.useInsertionEffect=function(O,H){return ze.current.useInsertionEffect(O,H)},Ce.useLayoutEffect=function(O,H){return ze.current.useLayoutEffect(O,H)},Ce.useMemo=function(O,H){return ze.current.useMemo(O,H)},Ce.useReducer=function(O,H,fe){return ze.current.useReducer(O,H,fe)},Ce.useRef=function(O){return ze.current.useRef(O)},Ce.useState=function(O){return ze.current.useState(O)},Ce.useSyncExternalStore=function(O,H,fe){return ze.current.useSyncExternalStore(O,H,fe)},Ce.useTransition=function(){return ze.current.useTransition()},Ce.version="18.3.1",Ce}var mg;function pf(){return mg||(mg=1,wd.exports=u0()),wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function c0(){if(gg)return Fa;gg=1;var r=pf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,v){var E,T={},I=null,F=null;v!==void 0&&(I=""+v),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(F=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(T[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:f,key:I,ref:F,props:T,_owner:o.current}}return Fa.Fragment=t,Fa.jsx=h,Fa.jsxs=h,Fa}var yg;function h0(){return yg||(yg=1,Ed.exports=c0()),Ed.exports}var G=h0(),J=pf();const uv=lv(J),d0=l0({__proto__:null,default:uv},[J]);var bu={},Td={exports:{}},en={},Id={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function f0(){return vg||(vg=1,(function(r){function e(ee,me){var oe=ee.length;ee.push(me);e:for(;0<oe;){var O=oe-1>>>1,H=ee[O];if(0<o(H,me))ee[O]=me,ee[oe]=H,oe=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var me=ee[0],oe=ee.pop();if(oe!==me){ee[0]=oe;e:for(var O=0,H=ee.length,fe=H>>>1;O<fe;){var Se=2*(O+1)-1,Re=ee[Se],xe=Se+1,be=ee[xe];if(0>o(Re,oe))xe<H&&0>o(be,Re)?(ee[O]=be,ee[xe]=oe,O=xe):(ee[O]=Re,ee[Se]=oe,O=Se);else if(xe<H&&0>o(be,oe))ee[O]=be,ee[xe]=oe,O=xe;else break e}}return me}function o(ee,me){var oe=ee.sortIndex-me.sortIndex;return oe!==0?oe:ee.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],v=[],E=1,T=null,I=3,F=!1,B=!1,$=!1,M=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(ee){for(var me=t(v);me!==null;){if(me.callback===null)s(v);else if(me.startTime<=ee)s(v),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(v)}}function de(ee){if($=!1,te(ee),!B)if(t(g)!==null)B=!0,Ot(Ne);else{var me=t(v);me!==null&&ze(de,me.startTime-ee)}}function Ne(ee,me){B=!1,$&&($=!1,ne(A),A=-1),F=!0;var oe=I;try{for(te(me),T=t(g);T!==null&&(!(T.expirationTime>me)||ee&&!x());){var O=T.callback;if(typeof O=="function"){T.callback=null,I=T.priorityLevel;var H=O(T.expirationTime<=me);me=r.unstable_now(),typeof H=="function"?T.callback=H:T===t(g)&&s(g),te(me)}else s(g);T=t(g)}if(T!==null)var fe=!0;else{var Se=t(v);Se!==null&&ze(de,Se.startTime-me),fe=!1}return fe}finally{T=null,I=oe,F=!1}}var Ie=!1,D=null,A=-1,C=5,k=-1;function x(){return!(r.unstable_now()-k<C)}function V(){if(D!==null){var ee=r.unstable_now();k=ee;var me=!0;try{me=D(!0,ee)}finally{me?R():(Ie=!1,D=null)}}else Ie=!1}var R;if(typeof re=="function")R=function(){re(V)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,xt=nt.port2;nt.port1.onmessage=V,R=function(){xt.postMessage(null)}}else R=function(){M(V,0)};function Ot(ee){D=ee,Ie||(Ie=!0,R())}function ze(ee,me){A=M(function(){ee(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){B||F||(B=!0,Ot(Ne))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var oe=I;I=me;try{return ee()}finally{I=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,me){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var oe=I;I=ee;try{return me()}finally{I=oe}},r.unstable_scheduleCallback=function(ee,me,oe){var O=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,ee){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=oe+H,ee={id:E++,callback:me,priorityLevel:ee,startTime:oe,expirationTime:H,sortIndex:-1},oe>O?(ee.sortIndex=oe,e(v,ee),t(g)===null&&ee===t(v)&&($?(ne(A),A=-1):$=!0,ze(de,oe-O))):(ee.sortIndex=H,e(g,ee),B||F||(B=!0,Ot(Ne))),ee},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(ee){var me=I;return function(){var oe=I;I=me;try{return ee.apply(this,arguments)}finally{I=oe}}}})(Sd)),Sd}var _g;function p0(){return _g||(_g=1,Id.exports=f0()),Id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function m0(){if(Eg)return en;Eg=1;var r=pf(),e=p0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(n){return g.call(T,n)?!0:g.call(E,n)?!1:v.test(n)?T[n]=!0:(E[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function B(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,m,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=_}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];M[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function re(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ne,re);M[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ne,re);M[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ne,re);M[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function te(n,i,a,c){var d=M.hasOwnProperty(i)?M[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(B(i,a,d,c)&&(a=null),c||d===null?I(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var de=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ne=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),x=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ee=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var fe=!1;function Se(n,i){if(!n||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(n,[],i)}else{try{i.call()}catch(j){c=j}n.call(i.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),_=d.length-1,S=m.length-1;1<=_&&0<=S&&d[_]!==m[S];)S--;for(;1<=_&&0<=S;_--,S--)if(d[_]!==m[S]){if(_!==1||S!==1)do if(_--,S--,0>S||d[_]!==m[S]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=S);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Re(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Ie:return"Portal";case C:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xt:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case Ot:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _t(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function cr(n){n._valueTracker||(n._valueTracker=_t(n))}function Ss(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ur(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Vi(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function As(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Fe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Wo(n,i){i=i.checked,i!=null&&te(n,"checked",i,!1)}function Ho(n,i){Wo(n,i);var a=Fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rs(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rs(n,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Tl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rs(n,i,a){(i!=="number"||Ur(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var hr=Array.isArray;function dr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function qo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Cs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(hr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Fe(a)}}function Ps(n,i){var a=Fe(i.value),c=Fe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ko(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function dt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?dt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fr,Go=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function jr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mi=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(n){Mi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Li[i]=Li[n]})});function Qo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Li.hasOwnProperty(n)&&Li[n]?(""+i).trim():i+"px"}function Yo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Qo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Jo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(n,i){if(i){if(Jo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Zo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function ks(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ns=null,hn=null,Hn=null;function Ds(n){if(n=Ia(n)){if(typeof Ns!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xl(i),Ns(n.stateNode,n.type,i))}}function qn(n){hn?Hn?Hn.push(n):Hn=[n]:hn=n}function ea(){if(hn){var n=hn,i=Hn;if(Hn=hn=null,Ds(n),i)for(n=0;n<i.length;n++)Ds(i[n])}}function Fi(n,i){return n(i)}function ta(){}var pr=!1;function na(n,i,a){if(pr)return n(i,a);pr=!0;try{return Fi(n,i,a)}finally{pr=!1,(hn!==null||Hn!==null)&&(ta(),ea())}}function rt(n,i){var a=n.stateNode;if(a===null)return null;var c=Xl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var xs=!1;if(f)try{var In={};Object.defineProperty(In,"passive",{get:function(){xs=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{xs=!1}function Ui(n,i,a,c,d,m,_,S,P){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(Q){this.onError(Q)}}var ji=!1,Os=null,Sn=!1,ra=null,Gc={onError:function(n){ji=!0,Os=n}};function Vs(n,i,a,c,d,m,_,S,P){ji=!1,Os=null,Ui.apply(Gc,arguments)}function Il(n,i,a,c,d,m,_,S,P){if(Vs.apply(this,arguments),ji){if(ji){var j=Os;ji=!1,Os=null}else throw Error(t(198));Sn||(Sn=!0,ra=j)}}function An(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function zi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Rn(n){if(An(n)!==n)throw Error(t(188))}function Sl(n){var i=n.alternate;if(!i){if(i=An(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Rn(d),n;if(m===c)return Rn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var _=!1,S=d.child;S;){if(S===a){_=!0,a=d,c=m;break}if(S===c){_=!0,c=d,a=m;break}S=S.sibling}if(!_){for(S=m.child;S;){if(S===a){_=!0,a=m,c=d;break}if(S===c){_=!0,c=m,a=d;break}S=S.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ia(n){return n=Sl(n),n!==null?Ls(n):null}function Ls(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ls(n);if(i!==null)return i;n=n.sibling}return null}var Ms=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,Al=e.unstable_shouldYield,Qc=e.unstable_requestPaint,We=e.unstable_now,Rl=e.unstable_getCurrentPriorityLevel,Bi=e.unstable_ImmediatePriority,zr=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Cl=e.unstable_IdlePriority,$i=null,nn=null;function Pl(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot($i,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Nl,aa=Math.log,kl=Math.LN2;function Nl(n){return n>>>=0,n===0?32:31-(aa(n)/kl|0)|0}var bs=64,Fs=4194304;function Br(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,_=a&268435455;if(_!==0){var S=_&~d;S!==0?c=Br(S):(m&=_,m!==0&&(c=Br(m)))}else _=a&~d,_!==0?c=Br(_):m!==0&&(c=Br(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function Yc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var _=31-Bt(m),S=1<<_,P=d[_];P===-1?((S&a)===0||(S&c)!==0)&&(d[_]=Yc(S,i)):P<=i&&(n.expiredLanes|=S),m&=~S}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Hi(){var n=bs;return bs<<=1,(bs&4194240)===0&&(bs=64),n}function $r(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Wr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function Be(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Hr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var De=0;function qr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dl,Us,xl,Ol,Vl,la=!1,Kn=[],Ct=null,Cn=null,Pn=null,Kr=new Map,fn=new Map,Gn=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ll(n,i){switch(n){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Kr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(i.pointerId)}}function Kt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ia(i),i!==null&&Us(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Xc(n,i,a,c,d){switch(i){case"focusin":return Ct=Kt(Ct,n,i,a,c,d),!0;case"dragenter":return Cn=Kt(Cn,n,i,a,c,d),!0;case"mouseover":return Pn=Kt(Pn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Kr.set(m,Kt(Kr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,fn.set(m,Kt(fn.get(m)||null,n,i,a,c,d)),!0}return!1}function Ml(n){var i=Yi(n.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=zi(a),i!==null){n.blockedOn=i,Vl(n.priority,function(){xl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=js(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);bi=c,a.target.dispatchEvent(c),bi=null}else return i=Ia(a),i!==null&&Us(i),n.blockedOn=a,!1;i.shift()}return!0}function qi(n,i,a){gr(n)&&a.delete(i)}function bl(){la=!1,Ct!==null&&gr(Ct)&&(Ct=null),Cn!==null&&gr(Cn)&&(Cn=null),Pn!==null&&gr(Pn)&&(Pn=null),Kr.forEach(qi),fn.forEach(qi)}function kn(n,i){n.blockedOn===i&&(n.blockedOn=null,la||(la=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bl)))}function Nn(n){function i(d){return kn(d,n)}if(0<Kn.length){kn(Kn[0],n);for(var a=1;a<Kn.length;a++){var c=Kn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ct!==null&&kn(Ct,n),Cn!==null&&kn(Cn,n),Pn!==null&&kn(Pn,n),Kr.forEach(i),fn.forEach(i),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)Ml(a),a.blockedOn===null&&Gn.shift()}var yr=de.ReactCurrentBatchConfig,Gr=!0;function Ye(n,i,a,c){var d=De,m=yr.transition;yr.transition=null;try{De=1,ua(n,i,a,c)}finally{De=d,yr.transition=m}}function Zc(n,i,a,c){var d=De,m=yr.transition;yr.transition=null;try{De=4,ua(n,i,a,c)}finally{De=d,yr.transition=m}}function ua(n,i,a,c){if(Gr){var d=js(n,i,a,c);if(d===null)ch(n,i,c,Ki,a),Ll(n,c);else if(Xc(d,n,i,a,c))c.stopPropagation();else if(Ll(n,c),i&4&&-1<Jc.indexOf(n)){for(;d!==null;){var m=Ia(d);if(m!==null&&Dl(m),m=js(n,i,a,c),m===null&&ch(n,i,c,Ki,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else ch(n,i,c,null,a)}}var Ki=null;function js(n,i,a,c){if(Ki=null,n=ks(c),n=Yi(n),n!==null)if(i=An(n),i===null)n=null;else if(a=i.tag,a===13){if(n=zi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ki=n,null}function ca(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rl()){case Bi:return 1;case zr:return 4;case dn:case oa:return 16;case Cl:return 536870912;default:return 16}default:return 16}}var sn=null,zs=null,Gt=null;function ha(){if(Gt)return Gt;var n,i=zs,a=i.length,c,d="value"in sn?sn.value:sn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[m-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Bs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Qn(){return!0}function da(){return!1}function Pt(n){function i(a,c,d,m,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Qn:da,this.isPropagationStopped=da,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),i}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=Pt(Dn),Yn=oe({},Dn,{view:0,detail:0}),eh=Pt(Yn),Ws,vr,Qr,Gi=oe({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qr&&(Qr&&n.type==="mousemove"?(Ws=n.screenX-Qr.screenX,vr=n.screenY-Qr.screenY):vr=Ws=0,Qr=n),Ws)},movementY:function(n){return"movementY"in n?n.movementY:vr}}),Hs=Pt(Gi),fa=oe({},Gi,{dataTransfer:0}),Fl=Pt(fa),qs=oe({},Yn,{relatedTarget:0}),Ks=Pt(qs),Ul=oe({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),_r=Pt(Ul),jl=oe({},Dn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zl=Pt(jl),Bl=oe({},Dn,{data:0}),pa=Pt(Bl),Gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$l={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=$l[n])?!!i[n]:!1}function Jn(){return Wl}var u=oe({},Yn,{key:function(n){if(n.key){var i=Gs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Bs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(n){return n.type==="keypress"?Bs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Pt(u),y=oe({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Pt(y),L=oe({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn}),z=Pt(L),Z=oe({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Pt(Z),pt=oe({},Gi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Pt(pt),Et=[9,13,27,32],lt=f&&"CompositionEvent"in window,pn=null;f&&"documentMode"in document&&(pn=document.documentMode);var on=f&&"TextEvent"in window&&!pn,Qi=f&&(!lt||pn&&8<pn&&11>=pn),Qs=" ",lp=!1;function up(n,i){switch(n){case"keyup":return Et.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function sw(n,i){switch(n){case"compositionend":return cp(i);case"keypress":return i.which!==32?null:(lp=!0,Qs);case"textInput":return n=i.data,n===Qs&&lp?null:n;default:return null}}function ow(n,i){if(Ys)return n==="compositionend"||!lt&&up(n,i)?(n=ha(),Gt=zs=sn=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qi&&i.locale!=="ko"?null:i.data;default:return null}}var aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!aw[n.type]:i==="textarea"}function dp(n,i,a,c){qn(c),i=Ql(i,"onChange"),0<i.length&&(a=new $s("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ma=null,ga=null;function lw(n){Np(n,0)}function Hl(n){var i=to(n);if(Ss(i))return n}function uw(n,i){if(n==="change")return i}var fp=!1;if(f){var th;if(f){var nh="oninput"in document;if(!nh){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),nh=typeof pp.oninput=="function"}th=nh}else th=!1;fp=th&&(!document.documentMode||9<document.documentMode)}function mp(){ma&&(ma.detachEvent("onpropertychange",gp),ga=ma=null)}function gp(n){if(n.propertyName==="value"&&Hl(ga)){var i=[];dp(i,ga,n,ks(n)),na(lw,i)}}function cw(n,i,a){n==="focusin"?(mp(),ma=i,ga=a,ma.attachEvent("onpropertychange",gp)):n==="focusout"&&mp()}function hw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Hl(ga)}function dw(n,i){if(n==="click")return Hl(i)}function fw(n,i){if(n==="input"||n==="change")return Hl(i)}function pw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xn=typeof Object.is=="function"?Object.is:pw;function ya(n,i){if(xn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!xn(n[d],i[d]))return!1}return!0}function yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vp(n,i){var a=yp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yp(a)}}function _p(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?_p(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ep(){for(var n=window,i=Ur();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ur(n.document)}return i}function rh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function mw(n){var i=Ep(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&_p(a.ownerDocument.documentElement,a)){if(c!==null&&rh(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=vp(a,m);var _=vp(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gw=f&&"documentMode"in document&&11>=document.documentMode,Js=null,ih=null,va=null,sh=!1;function wp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sh||Js==null||Js!==Ur(c)||(c=Js,"selectionStart"in c&&rh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),va&&ya(va,c)||(va=c,c=Ql(ih,"onSelect"),0<c.length&&(i=new $s("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Js)))}function ql(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Xs={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},oh={},Tp={};f&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Kl(n){if(oh[n])return oh[n];if(!Xs[n])return n;var i=Xs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Tp)return oh[n]=i[a];return n}var Ip=Kl("animationend"),Sp=Kl("animationiteration"),Ap=Kl("animationstart"),Rp=Kl("transitionend"),Cp=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,i){Cp.set(n,i),l(i,[n])}for(var ah=0;ah<Pp.length;ah++){var lh=Pp[ah],yw=lh.toLowerCase(),vw=lh[0].toUpperCase()+lh.slice(1);Yr(yw,"on"+vw)}Yr(Ip,"onAnimationEnd"),Yr(Sp,"onAnimationIteration"),Yr(Ap,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Rp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_w=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function kp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Il(c,i,void 0,n),n.currentTarget=null}function Np(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var _=c.length-1;0<=_;_--){var S=c[_],P=S.instance,j=S.currentTarget;if(S=S.listener,P!==m&&d.isPropagationStopped())break e;kp(d,S,j),m=P}else for(_=0;_<c.length;_++){if(S=c[_],P=S.instance,j=S.currentTarget,S=S.listener,P!==m&&d.isPropagationStopped())break e;kp(d,S,j),m=P}}}if(Sn)throw n=ra,Sn=!1,ra=null,n}function Ke(n,i){var a=i[gh];a===void 0&&(a=i[gh]=new Set);var c=n+"__bubble";a.has(c)||(Dp(i,n,2,!1),a.add(c))}function uh(n,i,a){var c=0;i&&(c|=4),Dp(a,n,c,i)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[Gl]){n[Gl]=!0,s.forEach(function(a){a!=="selectionchange"&&(_w.has(a)||uh(a,!1,n),uh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Gl]||(i[Gl]=!0,uh("selectionchange",!1,i))}}function Dp(n,i,a,c){switch(ca(i)){case 1:var d=Ye;break;case 4:d=Zc;break;default:d=ua}a=d.bind(null,i,a,n),d=void 0,!xs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function ch(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;S!==null;){if(_=Yi(S),_===null)return;if(P=_.tag,P===5||P===6){c=m=_;continue e}S=S.parentNode}}c=c.return}na(function(){var j=m,Q=ks(a),Y=[];e:{var K=Cp.get(n);if(K!==void 0){var ie=$s,le=n;switch(n){case"keypress":if(Bs(a)===0)break e;case"keydown":case"keyup":ie=p;break;case"focusin":le="focus",ie=Ks;break;case"focusout":le="blur",ie=Ks;break;case"beforeblur":case"afterblur":ie=Ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=z;break;case Ip:case Sp:case Ap:ie=_r;break;case Rp:ie=je;break;case"scroll":ie=eh;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=w}var ue=(i&4)!==0,it=!ue&&n==="scroll",b=ue?K!==null?K+"Capture":null:K;ue=[];for(var N=j,U;N!==null;){U=N;var X=U.stateNode;if(U.tag===5&&X!==null&&(U=X,b!==null&&(X=rt(N,b),X!=null&&ue.push(wa(N,X,U)))),it)break;N=N.return}0<ue.length&&(K=new ie(K,le,null,a,Q),Y.push({event:K,listeners:ue}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",K&&a!==bi&&(le=a.relatedTarget||a.fromElement)&&(Yi(le)||le[Er]))break e;if((ie||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,ie?(le=a.relatedTarget||a.toElement,ie=j,le=le?Yi(le):null,le!==null&&(it=An(le),le!==it||le.tag!==5&&le.tag!==6)&&(le=null)):(ie=null,le=j),ie!==le)){if(ue=Hs,X="onMouseLeave",b="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ue=w,X="onPointerLeave",b="onPointerEnter",N="pointer"),it=ie==null?K:to(ie),U=le==null?K:to(le),K=new ue(X,N+"leave",ie,a,Q),K.target=it,K.relatedTarget=U,X=null,Yi(Q)===j&&(ue=new ue(b,N+"enter",le,a,Q),ue.target=U,ue.relatedTarget=it,X=ue),it=X,ie&&le)t:{for(ue=ie,b=le,N=0,U=ue;U;U=Zs(U))N++;for(U=0,X=b;X;X=Zs(X))U++;for(;0<N-U;)ue=Zs(ue),N--;for(;0<U-N;)b=Zs(b),U--;for(;N--;){if(ue===b||b!==null&&ue===b.alternate)break t;ue=Zs(ue),b=Zs(b)}ue=null}else ue=null;ie!==null&&xp(Y,K,ie,ue,!1),le!==null&&it!==null&&xp(Y,it,le,ue,!0)}}e:{if(K=j?to(j):window,ie=K.nodeName&&K.nodeName.toLowerCase(),ie==="select"||ie==="input"&&K.type==="file")var he=uw;else if(hp(K))if(fp)he=fw;else{he=hw;var ge=cw}else(ie=K.nodeName)&&ie.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(he=dw);if(he&&(he=he(n,j))){dp(Y,he,a,Q);break e}ge&&ge(n,K,j),n==="focusout"&&(ge=K._wrapperState)&&ge.controlled&&K.type==="number"&&Rs(K,"number",K.value)}switch(ge=j?to(j):window,n){case"focusin":(hp(ge)||ge.contentEditable==="true")&&(Js=ge,ih=j,va=null);break;case"focusout":va=ih=Js=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,wp(Y,a,Q);break;case"selectionchange":if(gw)break;case"keydown":case"keyup":wp(Y,a,Q)}var ye;if(lt)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ys?up(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Qi&&a.locale!=="ko"&&(Ys||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ys&&(ye=ha()):(sn=Q,zs="value"in sn?sn.value:sn.textContent,Ys=!0)),ge=Ql(j,Ee),0<ge.length&&(Ee=new pa(Ee,n,null,a,Q),Y.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=cp(a),ye!==null&&(Ee.data=ye)))),(ye=on?sw(n,a):ow(n,a))&&(j=Ql(j,"onBeforeInput"),0<j.length&&(Q=new pa("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:j}),Q.data=ye))}Np(Y,i)})}function wa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ql(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=rt(n,a),m!=null&&c.unshift(wa(n,m,d)),m=rt(n,i),m!=null&&c.push(wa(n,m,d))),n=n.return}return c}function Zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xp(n,i,a,c,d){for(var m=i._reactName,_=[];a!==null&&a!==c;){var S=a,P=S.alternate,j=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&j!==null&&(S=j,d?(P=rt(a,m),P!=null&&_.unshift(wa(a,P,S))):d||(P=rt(a,m),P!=null&&_.push(wa(a,P,S)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var Ew=/\r\n?/g,ww=/\u0000|\uFFFD/g;function Op(n){return(typeof n=="string"?n:""+n).replace(Ew,`
`).replace(ww,"")}function Yl(n,i,a){if(i=Op(i),Op(n)!==i&&a)throw Error(t(425))}function Jl(){}var hh=null,dh=null;function fh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,Tw=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(n){return Vp.resolve(null).then(n).catch(Sw)}:ph;function Sw(n){setTimeout(function(){throw n})}function mh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Nn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Nn(i)}function Jr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Lp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Xn="__reactFiber$"+eo,Ta="__reactProps$"+eo,Er="__reactContainer$"+eo,gh="__reactEvents$"+eo,Aw="__reactListeners$"+eo,Rw="__reactHandles$"+eo;function Yi(n){var i=n[Xn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Er]||a[Xn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Lp(n);n!==null;){if(a=n[Xn])return a;n=Lp(n)}return i}n=a,a=n.parentNode}return null}function Ia(n){return n=n[Xn]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function to(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xl(n){return n[Ta]||null}var yh=[],no=-1;function Xr(n){return{current:n}}function Ge(n){0>no||(n.current=yh[no],yh[no]=null,no--)}function He(n,i){no++,yh[no]=n.current,n.current=i}var Zr={},Vt=Xr(Zr),Qt=Xr(!1),Ji=Zr;function ro(n,i){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function Zl(){Ge(Qt),Ge(Vt)}function Mp(n,i,a){if(Vt.current!==Zr)throw Error(t(168));He(Vt,i),He(Qt,a)}function bp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return oe({},a,c)}function eu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,Ji=Vt.current,He(Vt,n),He(Qt,Qt.current),!0}function Fp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=bp(n,i,Ji),c.__reactInternalMemoizedMergedChildContext=n,Ge(Qt),Ge(Vt),He(Vt,n)):Ge(Qt),He(Qt,a)}var wr=null,tu=!1,vh=!1;function Up(n){wr===null?wr=[n]:wr.push(n)}function Cw(n){tu=!0,Up(n)}function ei(){if(!vh&&wr!==null){vh=!0;var n=0,i=De;try{var a=wr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}wr=null,tu=!1}catch(d){throw wr!==null&&(wr=wr.slice(n+1)),Ms(Bi,ei),d}finally{De=i,vh=!1}}return null}var io=[],so=0,nu=null,ru=0,mn=[],gn=0,Xi=null,Tr=1,Ir="";function Zi(n,i){io[so++]=ru,io[so++]=nu,nu=n,ru=i}function jp(n,i,a){mn[gn++]=Tr,mn[gn++]=Ir,mn[gn++]=Xi,Xi=n;var c=Tr;n=Ir;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var m=32-Bt(i)+d;if(30<m){var _=d-d%5;m=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Tr=1<<32-Bt(i)+d|a<<d|c,Ir=m+n}else Tr=1<<m|a<<d|c,Ir=n}function _h(n){n.return!==null&&(Zi(n,1),jp(n,1,0))}function Eh(n){for(;n===nu;)nu=io[--so],io[so]=null,ru=io[--so],io[so]=null;for(;n===Xi;)Xi=mn[--gn],mn[gn]=null,Ir=mn[--gn],mn[gn]=null,Tr=mn[--gn],mn[gn]=null}var an=null,ln=null,Je=!1,On=null;function zp(n,i){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Bp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,an=n,ln=Jr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,an=n,ln=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Xi!==null?{id:Tr,overflow:Ir}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function wh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Th(n){if(Je){var i=ln;if(i){var a=i;if(!Bp(n,i)){if(wh(n))throw Error(t(418));i=Jr(a.nextSibling);var c=an;i&&Bp(n,i)?zp(c,a):(n.flags=n.flags&-4097|2,Je=!1,an=n)}}else{if(wh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,an=n}}}function $p(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function iu(n){if(n!==an)return!1;if(!Je)return $p(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!fh(n.type,n.memoizedProps)),i&&(i=ln)){if(wh(n))throw Wp(),Error(t(418));for(;i;)zp(n,i),i=Jr(i.nextSibling)}if($p(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ln=Jr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ln=null}}else ln=an?Jr(n.stateNode.nextSibling):null;return!0}function Wp(){for(var n=ln;n;)n=Jr(n.nextSibling)}function oo(){ln=an=null,Je=!1}function Ih(n){On===null?On=[n]:On.push(n)}var Pw=de.ReactCurrentBatchConfig;function Sa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(_){var S=d.refs;_===null?delete S[m]:S[m]=_},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function su(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Hp(n){var i=n._init;return i(n._payload)}function qp(n){function i(b,N){if(n){var U=b.deletions;U===null?(b.deletions=[N],b.flags|=16):U.push(N)}}function a(b,N){if(!n)return null;for(;N!==null;)i(b,N),N=N.sibling;return null}function c(b,N){for(b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(b,N){return b=li(b,N),b.index=0,b.sibling=null,b}function m(b,N,U){return b.index=U,n?(U=b.alternate,U!==null?(U=U.index,U<N?(b.flags|=2,N):U):(b.flags|=2,N)):(b.flags|=1048576,N)}function _(b){return n&&b.alternate===null&&(b.flags|=2),b}function S(b,N,U,X){return N===null||N.tag!==6?(N=pd(U,b.mode,X),N.return=b,N):(N=d(N,U),N.return=b,N)}function P(b,N,U,X){var he=U.type;return he===D?Q(b,N,U.props.children,X,U.key):N!==null&&(N.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Ot&&Hp(he)===N.type)?(X=d(N,U.props),X.ref=Sa(b,N,U),X.return=b,X):(X=ku(U.type,U.key,U.props,null,b.mode,X),X.ref=Sa(b,N,U),X.return=b,X)}function j(b,N,U,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=md(U,b.mode,X),N.return=b,N):(N=d(N,U.children||[]),N.return=b,N)}function Q(b,N,U,X,he){return N===null||N.tag!==7?(N=as(U,b.mode,X,he),N.return=b,N):(N=d(N,U),N.return=b,N)}function Y(b,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return N=pd(""+N,b.mode,U),N.return=b,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ne:return U=ku(N.type,N.key,N.props,null,b.mode,U),U.ref=Sa(b,null,N),U.return=b,U;case Ie:return N=md(N,b.mode,U),N.return=b,N;case Ot:var X=N._init;return Y(b,X(N._payload),U)}if(hr(N)||me(N))return N=as(N,b.mode,U,null),N.return=b,N;su(b,N)}return null}function K(b,N,U,X){var he=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return he!==null?null:S(b,N,""+U,X);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ne:return U.key===he?P(b,N,U,X):null;case Ie:return U.key===he?j(b,N,U,X):null;case Ot:return he=U._init,K(b,N,he(U._payload),X)}if(hr(U)||me(U))return he!==null?null:Q(b,N,U,X,null);su(b,U)}return null}function ie(b,N,U,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return b=b.get(U)||null,S(N,b,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ne:return b=b.get(X.key===null?U:X.key)||null,P(N,b,X,he);case Ie:return b=b.get(X.key===null?U:X.key)||null,j(N,b,X,he);case Ot:var ge=X._init;return ie(b,N,U,ge(X._payload),he)}if(hr(X)||me(X))return b=b.get(U)||null,Q(N,b,X,he,null);su(N,X)}return null}function le(b,N,U,X){for(var he=null,ge=null,ye=N,Ee=N=0,It=null;ye!==null&&Ee<U.length;Ee++){ye.index>Ee?(It=ye,ye=null):It=ye.sibling;var Me=K(b,ye,U[Ee],X);if(Me===null){ye===null&&(ye=It);break}n&&ye&&Me.alternate===null&&i(b,ye),N=m(Me,N,Ee),ge===null?he=Me:ge.sibling=Me,ge=Me,ye=It}if(Ee===U.length)return a(b,ye),Je&&Zi(b,Ee),he;if(ye===null){for(;Ee<U.length;Ee++)ye=Y(b,U[Ee],X),ye!==null&&(N=m(ye,N,Ee),ge===null?he=ye:ge.sibling=ye,ge=ye);return Je&&Zi(b,Ee),he}for(ye=c(b,ye);Ee<U.length;Ee++)It=ie(ye,b,Ee,U[Ee],X),It!==null&&(n&&It.alternate!==null&&ye.delete(It.key===null?Ee:It.key),N=m(It,N,Ee),ge===null?he=It:ge.sibling=It,ge=It);return n&&ye.forEach(function(ui){return i(b,ui)}),Je&&Zi(b,Ee),he}function ue(b,N,U,X){var he=me(U);if(typeof he!="function")throw Error(t(150));if(U=he.call(U),U==null)throw Error(t(151));for(var ge=he=null,ye=N,Ee=N=0,It=null,Me=U.next();ye!==null&&!Me.done;Ee++,Me=U.next()){ye.index>Ee?(It=ye,ye=null):It=ye.sibling;var ui=K(b,ye,Me.value,X);if(ui===null){ye===null&&(ye=It);break}n&&ye&&ui.alternate===null&&i(b,ye),N=m(ui,N,Ee),ge===null?he=ui:ge.sibling=ui,ge=ui,ye=It}if(Me.done)return a(b,ye),Je&&Zi(b,Ee),he;if(ye===null){for(;!Me.done;Ee++,Me=U.next())Me=Y(b,Me.value,X),Me!==null&&(N=m(Me,N,Ee),ge===null?he=Me:ge.sibling=Me,ge=Me);return Je&&Zi(b,Ee),he}for(ye=c(b,ye);!Me.done;Ee++,Me=U.next())Me=ie(ye,b,Ee,Me.value,X),Me!==null&&(n&&Me.alternate!==null&&ye.delete(Me.key===null?Ee:Me.key),N=m(Me,N,Ee),ge===null?he=Me:ge.sibling=Me,ge=Me);return n&&ye.forEach(function(a0){return i(b,a0)}),Je&&Zi(b,Ee),he}function it(b,N,U,X){if(typeof U=="object"&&U!==null&&U.type===D&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ne:e:{for(var he=U.key,ge=N;ge!==null;){if(ge.key===he){if(he=U.type,he===D){if(ge.tag===7){a(b,ge.sibling),N=d(ge,U.props.children),N.return=b,b=N;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Ot&&Hp(he)===ge.type){a(b,ge.sibling),N=d(ge,U.props),N.ref=Sa(b,ge,U),N.return=b,b=N;break e}a(b,ge);break}else i(b,ge);ge=ge.sibling}U.type===D?(N=as(U.props.children,b.mode,X,U.key),N.return=b,b=N):(X=ku(U.type,U.key,U.props,null,b.mode,X),X.ref=Sa(b,N,U),X.return=b,b=X)}return _(b);case Ie:e:{for(ge=U.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(b,N.sibling),N=d(N,U.children||[]),N.return=b,b=N;break e}else{a(b,N);break}else i(b,N);N=N.sibling}N=md(U,b.mode,X),N.return=b,b=N}return _(b);case Ot:return ge=U._init,it(b,N,ge(U._payload),X)}if(hr(U))return le(b,N,U,X);if(me(U))return ue(b,N,U,X);su(b,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,N!==null&&N.tag===6?(a(b,N.sibling),N=d(N,U),N.return=b,b=N):(a(b,N),N=pd(U,b.mode,X),N.return=b,b=N),_(b)):a(b,N)}return it}var ao=qp(!0),Kp=qp(!1),ou=Xr(null),au=null,lo=null,Sh=null;function Ah(){Sh=lo=au=null}function Rh(n){var i=ou.current;Ge(ou),n._currentValue=i}function Ch(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function uo(n,i){au=n,Sh=lo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Jt=!0),n.firstContext=null)}function yn(n){var i=n._currentValue;if(Sh!==n)if(n={context:n,memoizedValue:i,next:null},lo===null){if(au===null)throw Error(t(308));lo=n,au.dependencies={lanes:0,firstContext:n}}else lo=lo.next=n;return i}var es=null;function Ph(n){es===null?es=[n]:es.push(n)}function Gp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Ph(i)):(a.next=d.next,d.next=a),i.interleaved=a,Sr(n,c)}function Sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ti=!1;function kh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ni(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Sr(n,a)}return d=c.interleaved,d===null?(i.next=i,Ph(c)):(i.next=d.next,d.next=i),c.interleaved=i,Sr(n,a)}function lu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hr(n,a)}}function Yp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function uu(n,i,a,c){var d=n.updateQueue;ti=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,j=P.next;P.next=null,_===null?m=j:_.next=j,_=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==_&&(S===null?Q.firstBaseUpdate=j:S.next=j,Q.lastBaseUpdate=P))}if(m!==null){var Y=d.baseState;_=0,Q=j=P=null,S=m;do{var K=S.lane,ie=S.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:ie,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=n,ue=S;switch(K=i,ie=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){Y=le.call(ie,Y,K);break e}Y=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,K=typeof le=="function"?le.call(ie,Y,K):le,K==null)break e;Y=oe({},Y,K);break e;case 2:ti=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[S]:K.push(S))}else ie={eventTime:ie,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(j=Q=ie,P=Y):Q=Q.next=ie,_|=K;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;K=S,S=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);rs|=_,n.lanes=_,n.memoizedState=Y}}function Jp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Aa={},Zn=Xr(Aa),Ra=Xr(Aa),Ca=Xr(Aa);function ts(n){if(n===Aa)throw Error(t(174));return n}function Nh(n,i){switch(He(Ca,i),He(Ra,n),He(Zn,Aa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ft(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ft(i,n)}Ge(Zn),He(Zn,i)}function co(){Ge(Zn),Ge(Ra),Ge(Ca)}function Xp(n){ts(Ca.current);var i=ts(Zn.current),a=ft(i,n.type);i!==a&&(He(Ra,n),He(Zn,a))}function Dh(n){Ra.current===n&&(Ge(Zn),Ge(Ra))}var Xe=Xr(0);function cu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xh=[];function Oh(){for(var n=0;n<xh.length;n++)xh[n]._workInProgressVersionPrimary=null;xh.length=0}var hu=de.ReactCurrentDispatcher,Vh=de.ReactCurrentBatchConfig,ns=0,Ze=null,mt=null,wt=null,du=!1,Pa=!1,ka=0,kw=0;function Lt(){throw Error(t(321))}function Lh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!xn(n[a],i[a]))return!1;return!0}function Mh(n,i,a,c,d,m){if(ns=m,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,hu.current=n===null||n.memoizedState===null?Ow:Vw,n=a(c,d),Pa){m=0;do{if(Pa=!1,ka=0,25<=m)throw Error(t(301));m+=1,wt=mt=null,i.updateQueue=null,hu.current=Lw,n=a(c,d)}while(Pa)}if(hu.current=mu,i=mt!==null&&mt.next!==null,ns=0,wt=mt=Ze=null,du=!1,i)throw Error(t(300));return n}function bh(){var n=ka!==0;return ka=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=n:wt=wt.next=n,wt}function vn(){if(mt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var i=wt===null?Ze.memoizedState:wt.next;if(i!==null)wt=i,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},wt===null?Ze.memoizedState=wt=n:wt=wt.next=n}return wt}function Na(n,i){return typeof i=="function"?i(n):i}function Fh(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var S=_=null,P=null,j=m;do{var Q=j.lane;if((ns&Q)===Q)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Y={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(S=P=Y,_=c):P=P.next=Y,Ze.lanes|=Q,rs|=Q}j=j.next}while(j!==null&&j!==m);P===null?_=c:P.next=S,xn(c,i.memoizedState)||(Jt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ze.lanes|=m,rs|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Uh(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do m=n(m,_.action),_=_.next;while(_!==d);xn(m,i.memoizedState)||(Jt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Zp(){}function em(n,i){var a=Ze,c=vn(),d=i(),m=!xn(c.memoizedState,d);if(m&&(c.memoizedState=d,Jt=!0),c=c.queue,jh(rm.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,Da(9,nm.bind(null,a,c,d,i),void 0,null),Tt===null)throw Error(t(349));(ns&30)!==0||tm(a,i,d)}return d}function tm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function nm(n,i,a,c){i.value=a,i.getSnapshot=c,im(i)&&sm(n)}function rm(n,i,a){return a(function(){im(i)&&sm(n)})}function im(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!xn(n,a)}catch{return!0}}function sm(n){var i=Sr(n,1);i!==null&&bn(i,n,1,-1)}function om(n){var i=er();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:n},i.queue=n,n=n.dispatch=xw.bind(null,Ze,n),[i.memoizedState,n]}function Da(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function am(){return vn().memoizedState}function fu(n,i,a,c){var d=er();Ze.flags|=n,d.memoizedState=Da(1|i,a,void 0,c===void 0?null:c)}function pu(n,i,a,c){var d=vn();c=c===void 0?null:c;var m=void 0;if(mt!==null){var _=mt.memoizedState;if(m=_.destroy,c!==null&&Lh(c,_.deps)){d.memoizedState=Da(i,a,m,c);return}}Ze.flags|=n,d.memoizedState=Da(1|i,a,m,c)}function lm(n,i){return fu(8390656,8,n,i)}function jh(n,i){return pu(2048,8,n,i)}function um(n,i){return pu(4,2,n,i)}function cm(n,i){return pu(4,4,n,i)}function hm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dm(n,i,a){return a=a!=null?a.concat([n]):null,pu(4,4,hm.bind(null,i,n),a)}function zh(){}function fm(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Lh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function pm(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Lh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function mm(n,i,a){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a):(xn(a,i)||(a=Hi(),Ze.lanes|=a,rs|=a,n.baseState=!0),i)}function Nw(n,i){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=Vh.transition;Vh.transition={};try{n(!1),i()}finally{De=a,Vh.transition=c}}function gm(){return vn().memoizedState}function Dw(n,i,a){var c=oi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ym(n))vm(i,a);else if(a=Gp(n,i,a,c),a!==null){var d=Ht();bn(a,n,c,d),_m(a,i,c)}}function xw(n,i,a){var c=oi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ym(n))vm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,S=m(_,a);if(d.hasEagerState=!0,d.eagerState=S,xn(S,_)){var P=i.interleaved;P===null?(d.next=d,Ph(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Gp(n,i,d,c),a!==null&&(d=Ht(),bn(a,n,c,d),_m(a,i,c))}}function ym(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function vm(n,i){Pa=du=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function _m(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hr(n,a)}}var mu={readContext:yn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},Ow={readContext:yn,useCallback:function(n,i){return er().memoizedState=[n,i===void 0?null:i],n},useContext:yn,useEffect:lm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,fu(4194308,4,hm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return fu(4194308,4,n,i)},useInsertionEffect:function(n,i){return fu(4,2,n,i)},useMemo:function(n,i){var a=er();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=er();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Dw.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=er();return n={current:n},i.memoizedState=n},useState:om,useDebugValue:zh,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=om(!1),i=n[0];return n=Nw.bind(null,n[1]),er().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=er();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tt===null)throw Error(t(349));(ns&30)!==0||tm(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,lm(rm.bind(null,c,m,n),[n]),c.flags|=2048,Da(9,nm.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=er(),i=Tt.identifierPrefix;if(Je){var a=Ir,c=Tr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ka++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=kw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Vw={readContext:yn,useCallback:fm,useContext:yn,useEffect:jh,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:Fh,useRef:am,useState:function(){return Fh(Na)},useDebugValue:zh,useDeferredValue:function(n){var i=vn();return mm(i,mt.memoizedState,n)},useTransition:function(){var n=Fh(Na)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Zp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1},Lw={readContext:yn,useCallback:fm,useContext:yn,useEffect:jh,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:Uh,useRef:am,useState:function(){return Uh(Na)},useDebugValue:zh,useDeferredValue:function(n){var i=vn();return mt===null?i.memoizedState=n:mm(i,mt.memoizedState,n)},useTransition:function(){var n=Uh(Na)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Zp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1};function Vn(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Bh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var gu={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=oi(n),m=Ar(c,d);m.payload=i,a!=null&&(m.callback=a),i=ni(n,m,d),i!==null&&(bn(i,n,d,c),lu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=oi(n),m=Ar(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ni(n,m,d),i!==null&&(bn(i,n,d,c),lu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=oi(n),d=Ar(a,c);d.tag=2,i!=null&&(d.callback=i),i=ni(n,d,c),i!==null&&(bn(i,n,c,a),lu(i,n,c))}};function Em(n,i,a,c,d,m,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,_):i.prototype&&i.prototype.isPureReactComponent?!ya(a,c)||!ya(d,m):!0}function wm(n,i,a){var c=!1,d=Zr,m=i.contextType;return typeof m=="object"&&m!==null?m=yn(m):(d=Yt(i)?Ji:Vt.current,c=i.contextTypes,m=(c=c!=null)?ro(n,d):Zr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Tm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&gu.enqueueReplaceState(i,i.state,null)}function $h(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},kh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=yn(m):(m=Yt(i)?Ji:Vt.current,d.context=ro(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Bh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&gu.enqueueReplaceState(d,d.state,null),uu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ho(n,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Wh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Hh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Mw=typeof WeakMap=="function"?WeakMap:Map;function Im(n,i,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Iu||(Iu=!0,od=c),Hh(n,i)},a}function Sm(n,i,a){a=Ar(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Hh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Hh(n,i),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function Am(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Mw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Yw.bind(null,n,i,a),i.then(n,n))}function Rm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ar(-1,1),i.tag=2,ni(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var bw=de.ReactCurrentOwner,Jt=!1;function Wt(n,i,a,c){i.child=n===null?Kp(i,null,a,c):ao(i,n.child,a,c)}function Pm(n,i,a,c,d){a=a.render;var m=i.ref;return uo(i,d),c=Mh(n,i,a,c,m,d),a=bh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Rr(n,i,d)):(Je&&a&&_h(i),i.flags|=1,Wt(n,i,c,d),i.child)}function km(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!fd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Nm(n,i,m,c,d)):(n=ku(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(_,c)&&n.ref===i.ref)return Rr(n,i,d)}return i.flags|=1,n=li(m,c),n.ref=i.ref,n.return=i,i.child=n}function Nm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ya(m,c)&&n.ref===i.ref)if(Jt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jt=!0);else return i.lanes=n.lanes,Rr(n,i,d)}return qh(n,i,a,c,d)}function Dm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(po,un),un|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(po,un),un|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,He(po,un),un|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,He(po,un),un|=c;return Wt(n,i,d,a),i.child}function xm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function qh(n,i,a,c,d){var m=Yt(a)?Ji:Vt.current;return m=ro(i,m),uo(i,d),a=Mh(n,i,a,c,m,d),c=bh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Rr(n,i,d)):(Je&&c&&_h(i),i.flags|=1,Wt(n,i,a,d),i.child)}function Om(n,i,a,c,d){if(Yt(a)){var m=!0;eu(i)}else m=!1;if(uo(i,d),i.stateNode===null)vu(n,i),wm(i,a,c),$h(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,S=i.memoizedProps;_.props=S;var P=_.context,j=a.contextType;typeof j=="object"&&j!==null?j=yn(j):(j=Yt(a)?Ji:Vt.current,j=ro(i,j));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof _.getSnapshotBeforeUpdate=="function";Y||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==c||P!==j)&&Tm(i,_,c,j),ti=!1;var K=i.memoizedState;_.state=K,uu(i,c,_,d),P=i.memoizedState,S!==c||K!==P||Qt.current||ti?(typeof Q=="function"&&(Bh(i,a,Q,c),P=i.memoizedState),(S=ti||Em(i,a,S,c,K,P,j))?(Y||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),_.props=c,_.state=P,_.context=j,c=S):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,Qp(n,i),S=i.memoizedProps,j=i.type===i.elementType?S:Vn(i.type,S),_.props=j,Y=i.pendingProps,K=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=yn(P):(P=Yt(a)?Ji:Vt.current,P=ro(i,P));var ie=a.getDerivedStateFromProps;(Q=typeof ie=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==Y||K!==P)&&Tm(i,_,c,P),ti=!1,K=i.memoizedState,_.state=K,uu(i,c,_,d);var le=i.memoizedState;S!==Y||K!==le||Qt.current||ti?(typeof ie=="function"&&(Bh(i,a,ie,c),le=i.memoizedState),(j=ti||Em(i,a,j,c,K,le,P)||!1)?(Q||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,le,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,le,P)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=le),_.props=c,_.state=le,_.context=P,c=j):(typeof _.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return Kh(n,i,a,c,m,d)}function Kh(n,i,a,c,d,m){xm(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&Fp(i,a,!1),Rr(n,i,m);c=i.stateNode,bw.current=i;var S=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=ao(i,n.child,null,m),i.child=ao(i,null,S,m)):Wt(n,i,S,m),i.memoizedState=c.state,d&&Fp(i,a,!0),i.child}function Vm(n){var i=n.stateNode;i.pendingContext?Mp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Mp(n,i.context,!1),Nh(n,i.containerInfo)}function Lm(n,i,a,c,d){return oo(),Ih(d),i.flags|=256,Wt(n,i,a,c),i.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Qh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mm(n,i,a){var c=i.pendingProps,d=Xe.current,m=!1,_=(i.flags&128)!==0,S;if((S=_)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Xe,d&1),n===null)return Th(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,n=c.fallback,m?(c=i.mode,m=i.child,_={mode:"hidden",children:_},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=_):m=Nu(_,c,0,null),n=as(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Qh(a),i.memoizedState=Gh,n):Yh(i,_));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return Fw(n,i,_,c,S,d,a);if(m){m=c.fallback,_=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=li(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=li(S,m):(m=as(m,_,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,_=n.child.memoizedState,_=_===null?Qh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=n.childLanes&~a,i.memoizedState=Gh,c}return m=n.child,n=m.sibling,c=li(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Yh(n,i){return i=Nu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function yu(n,i,a,c){return c!==null&&Ih(c),ao(i,n.child,null,a),n=Yh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Fw(n,i,a,c,d,m,_){if(a)return i.flags&256?(i.flags&=-257,c=Wh(Error(t(422))),yu(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Nu({mode:"visible",children:c.children},d,0,null),m=as(m,d,_,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ao(i,n.child,null,_),i.child.memoizedState=Qh(_),i.memoizedState=Gh,m);if((i.mode&1)===0)return yu(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=Wh(m,c,void 0),yu(n,i,_,c)}if(S=(_&n.childLanes)!==0,Jt||S){if(c=Tt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Sr(n,d),bn(c,n,d,-1))}return dd(),c=Wh(Error(t(421))),yu(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Jw.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,ln=Jr(d.nextSibling),an=i,Je=!0,On=null,n!==null&&(mn[gn++]=Tr,mn[gn++]=Ir,mn[gn++]=Xi,Tr=n.id,Ir=n.overflow,Xi=i),i=Yh(i,c.children),i.flags|=4096,i)}function bm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Ch(n.return,i,a)}function Jh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Fm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Wt(n,i,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bm(n,a,i);else if(n.tag===19)bm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Xe,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&cu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Jh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&cu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Jh(i,!0,a,null,m);break;case"together":Jh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function vu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Rr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),rs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=li(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=li(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Uw(n,i,a){switch(i.tag){case 3:Vm(i),oo();break;case 5:Xp(i);break;case 1:Yt(i.type)&&eu(i);break;case 4:Nh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(ou,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Mm(n,i,a):(He(Xe,Xe.current&1),n=Rr(n,i,a),n!==null?n.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Fm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,Dm(n,i,a)}return Rr(n,i,a)}var Um,Xh,jm,zm;Um=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Xh=function(){},jm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ts(Zn.current);var m=null;switch(a){case"input":d=Vi(n,d),c=Vi(n,c),m=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":d=qo(n,d),c=qo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Jl)}Xo(a,c);var _;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(_ in S)S.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var P=c[j];if(S=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==S&&(P!=null||S!=null))if(j==="style")if(S){for(_ in S)!S.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&S[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(m||(m=[]),m.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(m=m||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Ke("scroll",n),m||S===P||(m=[])):(m=m||[]).push(j,P))}a&&(m=m||[]).push("style",a);var j=m;(i.updateQueue=j)&&(i.flags|=4)}},zm=function(n,i,a,c){a!==c&&(i.flags|=4)};function xa(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function jw(n,i,a){var c=i.pendingProps;switch(Eh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(i),null;case 1:return Yt(i.type)&&Zl(),Mt(i),null;case 3:return c=i.stateNode,co(),Ge(Qt),Ge(Vt),Oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(iu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,On!==null&&(ud(On),On=null))),Xh(n,i),Mt(i),null;case 5:Dh(i);var d=ts(Ca.current);if(a=i.type,n!==null&&i.stateNode!=null)jm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mt(i),null}if(n=ts(Zn.current),iu(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Xn]=i,c[Ta]=m,n=(i.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<_a.length;d++)Ke(_a[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":As(c,m),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ke("invalid",c);break;case"textarea":Cs(c,m),Ke("invalid",c)}Xo(a,m),d=null;for(var _ in m)if(m.hasOwnProperty(_)){var S=m[_];_==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&Yl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&Yl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(_)&&S!=null&&_==="onScroll"&&Ke("scroll",c)}switch(a){case"input":cr(c),Tl(c,m,!0);break;case"textarea":cr(c),Ko(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Jl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=dt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Xn]=i,n[Ta]=c,Um(n,i,!1,!1),i.stateNode=n;e:{switch(_=Zo(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<_a.length;d++)Ke(_a[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":As(n,c),d=Vi(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Cs(n,c),d=qo(n,c),Ke("invalid",n);break;default:d=c}Xo(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var P=S[m];m==="style"?Yo(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Go(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&jr(n,P):typeof P=="number"&&jr(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Ke("scroll",n):P!=null&&te(n,m,P,_))}switch(a){case"input":cr(n),Tl(n,c,!1);break;case"textarea":cr(n),Ko(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?dr(n,!!c.multiple,m,!1):c.defaultValue!=null&&dr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mt(i),null;case 6:if(n&&i.stateNode!=null)zm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ts(Ca.current),ts(Zn.current),iu(i)){if(c=i.stateNode,a=i.memoizedProps,c[Xn]=i,(m=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Yl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Xn]=i,i.stateNode=c}return Mt(i),null;case 13:if(Ge(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&ln!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wp(),oo(),i.flags|=98560,m=!1;else if(m=iu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Xn]=i}else oo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mt(i),m=!1}else On!==null&&(ud(On),On=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xe.current&1)!==0?gt===0&&(gt=3):dd())),i.updateQueue!==null&&(i.flags|=4),Mt(i),null);case 4:return co(),Xh(n,i),n===null&&Ea(i.stateNode.containerInfo),Mt(i),null;case 10:return Rh(i.type._context),Mt(i),null;case 17:return Yt(i.type)&&Zl(),Mt(i),null;case 19:if(Ge(Xe),m=i.memoizedState,m===null)return Mt(i),null;if(c=(i.flags&128)!==0,_=m.rendering,_===null)if(c)xa(m,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=cu(n),_!==null){for(i.flags|=128,xa(m,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,n=_.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),i.child}n=n.sibling}m.tail!==null&&We()>mo&&(i.flags|=128,c=!0,xa(m,!1),i.lanes=4194304)}else{if(!c)if(n=cu(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),xa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Je)return Mt(i),null}else 2*We()-m.renderingStartTime>mo&&a!==1073741824&&(i.flags|=128,c=!0,xa(m,!1),i.lanes=4194304);m.isBackwards?(_.sibling=i.child,i.child=_):(a=m.last,a!==null?a.sibling=_:i.child=_,m.last=_)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=We(),i.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),i):(Mt(i),null);case 22:case 23:return hd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(un&1073741824)!==0&&(Mt(i),i.subtreeFlags&6&&(i.flags|=8192)):Mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function zw(n,i){switch(Eh(i),i.tag){case 1:return Yt(i.type)&&Zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return co(),Ge(Qt),Ge(Vt),Oh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Dh(i),null;case 13:if(Ge(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));oo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ge(Xe),null;case 4:return co(),null;case 10:return Rh(i.type._context),null;case 22:case 23:return hd(),null;case 24:return null;default:return null}}var _u=!1,bt=!1,Bw=typeof WeakSet=="function"?WeakSet:Set,ae=null;function fo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Zh(n,i,a){try{a()}catch(c){tt(n,i,c)}}var Bm=!1;function $w(n,i){if(hh=Gr,n=Ep(),rh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,S=-1,P=-1,j=0,Q=0,Y=n,K=null;t:for(;;){for(var ie;Y!==a||d!==0&&Y.nodeType!==3||(S=_+d),Y!==m||c!==0&&Y.nodeType!==3||(P=_+c),Y.nodeType===3&&(_+=Y.nodeValue.length),(ie=Y.firstChild)!==null;)K=Y,Y=ie;for(;;){if(Y===n)break t;if(K===a&&++j===d&&(S=_),K===m&&++Q===c&&(P=_),(ie=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=ie}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(dh={focusedElem:n,selectionRange:a},Gr=!1,ae=i;ae!==null;)if(i=ae,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ae=n;else for(;ae!==null;){i=ae;try{var le=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,it=le.memoizedState,b=i.stateNode,N=b.getSnapshotBeforeUpdate(i.elementType===i.type?ue:Vn(i.type,ue),it);b.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){tt(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,ae=n;break}ae=i.return}return le=Bm,Bm=!1,le}function Oa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Zh(i,a,m)}d=d.next}while(d!==c)}}function Eu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function ed(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function $m(n){var i=n.alternate;i!==null&&(n.alternate=null,$m(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Xn],delete i[Ta],delete i[gh],delete i[Aw],delete i[Rw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wm(n){return n.tag===5||n.tag===3||n.tag===4}function Hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function td(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Jl));else if(c!==4&&(n=n.child,n!==null))for(td(n,i,a),n=n.sibling;n!==null;)td(n,i,a),n=n.sibling}function nd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(nd(n,i,a),n=n.sibling;n!==null;)nd(n,i,a),n=n.sibling}var kt=null,Ln=!1;function ri(n,i,a){for(a=a.child;a!==null;)qm(n,i,a),a=a.sibling}function qm(n,i,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount($i,a)}catch{}switch(a.tag){case 5:bt||fo(a,i);case 6:var c=kt,d=Ln;kt=null,ri(n,i,a),kt=c,Ln=d,kt!==null&&(Ln?(n=kt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):kt.removeChild(a.stateNode));break;case 18:kt!==null&&(Ln?(n=kt,a=a.stateNode,n.nodeType===8?mh(n.parentNode,a):n.nodeType===1&&mh(n,a),Nn(n)):mh(kt,a.stateNode));break;case 4:c=kt,d=Ln,kt=a.stateNode.containerInfo,Ln=!0,ri(n,i,a),kt=c,Ln=d;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,_=m.destroy;m=m.tag,_!==void 0&&((m&2)!==0||(m&4)!==0)&&Zh(a,i,_),d=d.next}while(d!==c)}ri(n,i,a);break;case 1:if(!bt&&(fo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){tt(a,i,S)}ri(n,i,a);break;case 21:ri(n,i,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,ri(n,i,a),bt=c):ri(n,i,a);break;default:ri(n,i,a)}}function Km(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Bw),i.forEach(function(c){var d=Xw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Mn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,_=i,S=_;e:for(;S!==null;){switch(S.tag){case 5:kt=S.stateNode,Ln=!1;break e;case 3:kt=S.stateNode.containerInfo,Ln=!0;break e;case 4:kt=S.stateNode.containerInfo,Ln=!0;break e}S=S.return}if(kt===null)throw Error(t(160));qm(m,_,d),kt=null,Ln=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){tt(d,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gm(i,n),i=i.sibling}function Gm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(i,n),tr(n),c&4){try{Oa(3,n,n.return),Eu(3,n)}catch(ue){tt(n,n.return,ue)}try{Oa(5,n,n.return)}catch(ue){tt(n,n.return,ue)}}break;case 1:Mn(i,n),tr(n),c&512&&a!==null&&fo(a,a.return);break;case 5:if(Mn(i,n),tr(n),c&512&&a!==null&&fo(a,a.return),n.flags&32){var d=n.stateNode;try{jr(d,"")}catch(ue){tt(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,_=a!==null?a.memoizedProps:m,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Wo(d,m),Zo(S,_);var j=Zo(S,m);for(_=0;_<P.length;_+=2){var Q=P[_],Y=P[_+1];Q==="style"?Yo(d,Y):Q==="dangerouslySetInnerHTML"?Go(d,Y):Q==="children"?jr(d,Y):te(d,Q,Y,j)}switch(S){case"input":Ho(d,m);break;case"textarea":Ps(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?dr(d,!!m.multiple,ie,!1):K!==!!m.multiple&&(m.defaultValue!=null?dr(d,!!m.multiple,m.defaultValue,!0):dr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ta]=m}catch(ue){tt(n,n.return,ue)}}break;case 6:if(Mn(i,n),tr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ue){tt(n,n.return,ue)}}break;case 3:if(Mn(i,n),tr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Nn(i.containerInfo)}catch(ue){tt(n,n.return,ue)}break;case 4:Mn(i,n),tr(n);break;case 13:Mn(i,n),tr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(sd=We())),c&4&&Km(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(bt=(j=bt)||Q,Mn(i,n),bt=j):Mn(i,n),tr(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&(n.mode&1)!==0)for(ae=n,Q=n.child;Q!==null;){for(Y=ae=Q;ae!==null;){switch(K=ae,ie=K.child,K.tag){case 0:case 11:case 14:case 15:Oa(4,K,K.return);break;case 1:fo(K,K.return);var le=K.stateNode;if(typeof le.componentWillUnmount=="function"){c=K,a=K.return;try{i=c,le.props=i.memoizedProps,le.state=i.memoizedState,le.componentWillUnmount()}catch(ue){tt(c,a,ue)}}break;case 5:fo(K,K.return);break;case 22:if(K.memoizedState!==null){Jm(Y);continue}}ie!==null?(ie.return=K,ae=ie):Jm(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Qo("display",_))}catch(ue){tt(n,n.return,ue)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(ue){tt(n,n.return,ue)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Mn(i,n),tr(n),c&4&&Km(n);break;case 21:break;default:Mn(i,n),tr(n)}}function tr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(jr(d,""),c.flags&=-33);var m=Hm(n);nd(n,m,d);break;case 3:case 4:var _=c.stateNode.containerInfo,S=Hm(n);td(n,S,_);break;default:throw Error(t(161))}}catch(P){tt(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ww(n,i,a){ae=n,Qm(n)}function Qm(n,i,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,m=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||_u;if(!_){var S=d.alternate,P=S!==null&&S.memoizedState!==null||bt;S=_u;var j=bt;if(_u=_,(bt=P)&&!j)for(ae=d;ae!==null;)_=ae,P=_.child,_.tag===22&&_.memoizedState!==null?Xm(d):P!==null?(P.return=_,ae=P):Xm(d);for(;m!==null;)ae=m,Qm(m),m=m.sibling;ae=d,_u=S,bt=j}Ym(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ae=m):Ym(n)}}function Ym(n){for(;ae!==null;){var i=ae;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bt||Eu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Vn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Jp(i,m,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Jp(i,_,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&Nn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||i.flags&512&&ed(i)}catch(K){tt(i,i.return,K)}}if(i===n){ae=null;break}if(a=i.sibling,a!==null){a.return=i.return,ae=a;break}ae=i.return}}function Jm(n){for(;ae!==null;){var i=ae;if(i===n){ae=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ae=a;break}ae=i.return}}function Xm(n){for(;ae!==null;){var i=ae;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Eu(4,i)}catch(P){tt(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){tt(i,d,P)}}var m=i.return;try{ed(i)}catch(P){tt(i,m,P)}break;case 5:var _=i.return;try{ed(i)}catch(P){tt(i,_,P)}}}catch(P){tt(i,i.return,P)}if(i===n){ae=null;break}var S=i.sibling;if(S!==null){S.return=i.return,ae=S;break}ae=i.return}}var Hw=Math.ceil,wu=de.ReactCurrentDispatcher,rd=de.ReactCurrentOwner,_n=de.ReactCurrentBatchConfig,Le=0,Tt=null,ut=null,Nt=0,un=0,po=Xr(0),gt=0,Va=null,rs=0,Tu=0,id=0,La=null,Xt=null,sd=0,mo=1/0,Cr=null,Iu=!1,od=null,ii=null,Su=!1,si=null,Au=0,Ma=0,ad=null,Ru=-1,Cu=0;function Ht(){return(Le&6)!==0?We():Ru!==-1?Ru:Ru=We()}function oi(n){return(n.mode&1)===0?1:(Le&2)!==0&&Nt!==0?Nt&-Nt:Pw.transition!==null?(Cu===0&&(Cu=Hi()),Cu):(n=De,n!==0||(n=window.event,n=n===void 0?16:ca(n.type)),n)}function bn(n,i,a,c){if(50<Ma)throw Ma=0,ad=null,Error(t(185));Wr(n,a,c),((Le&2)===0||n!==Tt)&&(n===Tt&&((Le&2)===0&&(Tu|=a),gt===4&&ai(n,Nt)),Zt(n,c),a===1&&Le===0&&(i.mode&1)===0&&(mo=We()+500,tu&&ei()))}function Zt(n,i){var a=n.callbackNode;mr(n,i);var c=Wi(n,n===Tt?Nt:0);if(c===0)a!==null&&sa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&sa(a),i===1)n.tag===0?Cw(eg.bind(null,n)):Up(eg.bind(null,n)),Iw(function(){(Le&6)===0&&ei()}),a=null;else{switch(qr(c)){case 1:a=Bi;break;case 4:a=zr;break;case 16:a=dn;break;case 536870912:a=Cl;break;default:a=dn}a=lg(a,Zm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Zm(n,i){if(Ru=-1,Cu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(go()&&n.callbackNode!==a)return null;var c=Wi(n,n===Tt?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Pu(n,c);else{i=c;var d=Le;Le|=2;var m=ng();(Tt!==n||Nt!==i)&&(Cr=null,mo=We()+500,ss(n,i));do try{Gw();break}catch(S){tg(n,S)}while(!0);Ah(),wu.current=m,Le=d,ut!==null?i=0:(Tt=null,Nt=0,i=gt)}if(i!==0){if(i===2&&(d=rn(n),d!==0&&(c=d,i=ld(n,d))),i===1)throw a=Va,ss(n,0),ai(n,c),Zt(n,We()),a;if(i===6)ai(n,c);else{if(d=n.current.alternate,(c&30)===0&&!qw(d)&&(i=Pu(n,c),i===2&&(m=rn(n),m!==0&&(c=m,i=ld(n,m))),i===1))throw a=Va,ss(n,0),ai(n,c),Zt(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:os(n,Xt,Cr);break;case 3:if(ai(n,c),(c&130023424)===c&&(i=sd+500-We(),10<i)){if(Wi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ph(os.bind(null,n,Xt,Cr),i);break}os(n,Xt,Cr);break;case 4:if(ai(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-Bt(c);m=1<<_,_=i[_],_>d&&(d=_),c&=~m}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Hw(c/1960))-c,10<c){n.timeoutHandle=ph(os.bind(null,n,Xt,Cr),c);break}os(n,Xt,Cr);break;case 5:os(n,Xt,Cr);break;default:throw Error(t(329))}}}return Zt(n,We()),n.callbackNode===a?Zm.bind(null,n):null}function ld(n,i){var a=La;return n.current.memoizedState.isDehydrated&&(ss(n,i).flags|=256),n=Pu(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&ud(i)),n}function ud(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function qw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!xn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ai(n,i){for(i&=~id,i&=~Tu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function eg(n){if((Le&6)!==0)throw Error(t(327));go();var i=Wi(n,0);if((i&1)===0)return Zt(n,We()),null;var a=Pu(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=ld(n,c))}if(a===1)throw a=Va,ss(n,0),ai(n,i),Zt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,os(n,Xt,Cr),Zt(n,We()),null}function cd(n,i){var a=Le;Le|=1;try{return n(i)}finally{Le=a,Le===0&&(mo=We()+500,tu&&ei())}}function is(n){si!==null&&si.tag===0&&(Le&6)===0&&go();var i=Le;Le|=1;var a=_n.transition,c=De;try{if(_n.transition=null,De=1,n)return n()}finally{De=c,_n.transition=a,Le=i,(Le&6)===0&&ei()}}function hd(){un=po.current,Ge(po)}function ss(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Tw(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Eh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Zl();break;case 3:co(),Ge(Qt),Ge(Vt),Oh();break;case 5:Dh(c);break;case 4:co();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:Rh(c.type._context);break;case 22:case 23:hd()}a=a.return}if(Tt=n,ut=n=li(n.current,null),Nt=un=i,gt=0,Va=null,id=Tu=rs=0,Xt=La=null,es!==null){for(i=0;i<es.length;i++)if(a=es[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=d,c.next=_}a.pending=c}es=null}return n}function tg(n,i){do{var a=ut;try{if(Ah(),hu.current=mu,du){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}du=!1}if(ns=0,wt=mt=Ze=null,Pa=!1,ka=0,rd.current=null,a===null||a.return===null){gt=1,Va=i,ut=null;break}e:{var m=n,_=a.return,S=a,P=i;if(i=Nt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,Q=S,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ie=Rm(_);if(ie!==null){ie.flags&=-257,Cm(ie,_,S,m,i),ie.mode&1&&Am(m,j,i),i=ie,P=j;var le=i.updateQueue;if(le===null){var ue=new Set;ue.add(P),i.updateQueue=ue}else le.add(P);break e}else{if((i&1)===0){Am(m,j,i),dd();break e}P=Error(t(426))}}else if(Je&&S.mode&1){var it=Rm(_);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Cm(it,_,S,m,i),Ih(ho(P,S));break e}}m=P=ho(P,S),gt!==4&&(gt=2),La===null?La=[m]:La.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var b=Im(m,P,i);Yp(m,b);break e;case 1:S=P;var N=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ii===null||!ii.has(U)))){m.flags|=65536,i&=-i,m.lanes|=i;var X=Sm(m,S,i);Yp(m,X);break e}}m=m.return}while(m!==null)}ig(a)}catch(he){i=he,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function ng(){var n=wu.current;return wu.current=mu,n===null?mu:n}function dd(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||(rs&268435455)===0&&(Tu&268435455)===0||ai(Tt,Nt)}function Pu(n,i){var a=Le;Le|=2;var c=ng();(Tt!==n||Nt!==i)&&(Cr=null,ss(n,i));do try{Kw();break}catch(d){tg(n,d)}while(!0);if(Ah(),Le=a,wu.current=c,ut!==null)throw Error(t(261));return Tt=null,Nt=0,gt}function Kw(){for(;ut!==null;)rg(ut)}function Gw(){for(;ut!==null&&!Al();)rg(ut)}function rg(n){var i=ag(n.alternate,n,un);n.memoizedProps=n.pendingProps,i===null?ig(n):ut=i,rd.current=null}function ig(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=jw(a,i,un),a!==null){ut=a;return}}else{if(a=zw(a,i),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,ut=null;return}}if(i=i.sibling,i!==null){ut=i;return}ut=i=n}while(i!==null);gt===0&&(gt=5)}function os(n,i,a){var c=De,d=_n.transition;try{_n.transition=null,De=1,Qw(n,i,a,c)}finally{_n.transition=d,De=c}return null}function Qw(n,i,a,c){do go();while(si!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Be(n,m),n===Tt&&(ut=Tt=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Su||(Su=!0,lg(dn,function(){return go(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=_n.transition,_n.transition=null;var _=De;De=1;var S=Le;Le|=4,rd.current=null,$w(n,a),Gm(a,n),mw(dh),Gr=!!hh,dh=hh=null,n.current=a,Ww(a),Qc(),Le=S,De=_,_n.transition=m}else n.current=a;if(Su&&(Su=!1,si=n,Au=d),m=n.pendingLanes,m===0&&(ii=null),Pl(a.stateNode),Zt(n,We()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Iu)throw Iu=!1,n=od,od=null,n;return(Au&1)!==0&&n.tag!==0&&go(),m=n.pendingLanes,(m&1)!==0?n===ad?Ma++:(Ma=0,ad=n):Ma=0,ei(),null}function go(){if(si!==null){var n=qr(Au),i=_n.transition,a=De;try{if(_n.transition=null,De=16>n?16:n,si===null)var c=!1;else{if(n=si,si=null,Au=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ae=n.current;ae!==null;){var m=ae,_=m.child;if((ae.flags&16)!==0){var S=m.deletions;if(S!==null){for(var P=0;P<S.length;P++){var j=S[P];for(ae=j;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:Oa(8,Q,m)}var Y=Q.child;if(Y!==null)Y.return=Q,ae=Y;else for(;ae!==null;){Q=ae;var K=Q.sibling,ie=Q.return;if($m(Q),Q===j){ae=null;break}if(K!==null){K.return=ie,ae=K;break}ae=ie}}}var le=m.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var it=ue.sibling;ue.sibling=null,ue=it}while(ue!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&_!==null)_.return=m,ae=_;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oa(9,m,m.return)}var b=m.sibling;if(b!==null){b.return=m.return,ae=b;break e}ae=m.return}}var N=n.current;for(ae=N;ae!==null;){_=ae;var U=_.child;if((_.subtreeFlags&2064)!==0&&U!==null)U.return=_,ae=U;else e:for(_=N;ae!==null;){if(S=ae,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Eu(9,S)}}catch(he){tt(S,S.return,he)}if(S===_){ae=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,ae=X;break e}ae=S.return}}if(Le=d,ei(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot($i,n)}catch{}c=!0}return c}finally{De=a,_n.transition=i}}return!1}function sg(n,i,a){i=ho(a,i),i=Im(n,i,1),n=ni(n,i,1),i=Ht(),n!==null&&(Wr(n,1,i),Zt(n,i))}function tt(n,i,a){if(n.tag===3)sg(n,n,a);else for(;i!==null;){if(i.tag===3){sg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){n=ho(a,n),n=Sm(i,n,1),i=ni(i,n,1),n=Ht(),i!==null&&(Wr(i,1,n),Zt(i,n));break}}i=i.return}}function Yw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Nt&a)===a&&(gt===4||gt===3&&(Nt&130023424)===Nt&&500>We()-sd?ss(n,0):id|=a),Zt(n,i)}function og(n,i){i===0&&((n.mode&1)===0?i=1:(i=Fs,Fs<<=1,(Fs&130023424)===0&&(Fs=4194304)));var a=Ht();n=Sr(n,i),n!==null&&(Wr(n,i,a),Zt(n,a))}function Jw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),og(n,a)}function Xw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),og(n,a)}var ag;ag=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qt.current)Jt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Jt=!1,Uw(n,i,a);Jt=(n.flags&131072)!==0}else Jt=!1,Je&&(i.flags&1048576)!==0&&jp(i,ru,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;vu(n,i),n=i.pendingProps;var d=ro(i,Vt.current);uo(i,a),d=Mh(null,i,c,n,d,a);var m=bh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yt(c)?(m=!0,eu(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,kh(i),d.updater=gu,i.stateNode=d,d._reactInternals=i,$h(i,c,n,a),i=Kh(null,i,c,!0,m,a)):(i.tag=0,Je&&m&&_h(i),Wt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(vu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=e0(c),n=Vn(c,n),d){case 0:i=qh(null,i,c,n,a);break e;case 1:i=Om(null,i,c,n,a);break e;case 11:i=Pm(null,i,c,n,a);break e;case 14:i=km(null,i,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),qh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),Om(n,i,c,d,a);case 3:e:{if(Vm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Qp(n,i),uu(i,c,null,a);var _=i.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ho(Error(t(423)),i),i=Lm(n,i,c,a,d);break e}else if(c!==d){d=ho(Error(t(424)),i),i=Lm(n,i,c,a,d);break e}else for(ln=Jr(i.stateNode.containerInfo.firstChild),an=i,Je=!0,On=null,a=Kp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),c===d){i=Rr(n,i,a);break e}Wt(n,i,c,a)}i=i.child}return i;case 5:return Xp(i),n===null&&Th(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,_=d.children,fh(c,d)?_=null:m!==null&&fh(c,m)&&(i.flags|=32),xm(n,i),Wt(n,i,_,a),i.child;case 6:return n===null&&Th(i),null;case 13:return Mm(n,i,a);case 4:return Nh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ao(i,null,c,a):Wt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),Pm(n,i,c,d,a);case 7:return Wt(n,i,i.pendingProps,a),i.child;case 8:return Wt(n,i,i.pendingProps.children,a),i.child;case 12:return Wt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,_=d.value,He(ou,c._currentValue),c._currentValue=_,m!==null)if(xn(m.value,_)){if(m.children===d.children&&!Qt.current){i=Rr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var S=m.dependencies;if(S!==null){_=m.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=Ar(-1,a&-a),P.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),j.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),Ch(m.return,a,i),S.lanes|=a;break}P=P.next}}else if(m.tag===10)_=m.type===i.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,S=_.alternate,S!==null&&(S.lanes|=a),Ch(_,a,i),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===i){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}Wt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,uo(i,a),d=yn(d),c=c(d),i.flags|=1,Wt(n,i,c,a),i.child;case 14:return c=i.type,d=Vn(c,i.pendingProps),d=Vn(c.type,d),km(n,i,c,d,a);case 15:return Nm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),vu(n,i),i.tag=1,Yt(c)?(n=!0,eu(i)):n=!1,uo(i,a),wm(i,c,d),$h(i,c,d,a),Kh(null,i,c,!0,n,a);case 19:return Fm(n,i,a);case 22:return Dm(n,i,a)}throw Error(t(156,i.tag))};function lg(n,i){return Ms(n,i)}function Zw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,i,a,c){return new Zw(n,i,a,c)}function fd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function e0(n){if(typeof n=="function")return fd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===xt)return 14}return 2}function li(n,i){var a=n.alternate;return a===null?(a=En(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ku(n,i,a,c,d,m){var _=2;if(c=n,typeof n=="function")fd(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return as(a.children,d,m,i);case A:_=8,d|=8;break;case C:return n=En(12,a,i,d|2),n.elementType=C,n.lanes=m,n;case R:return n=En(13,a,i,d),n.elementType=R,n.lanes=m,n;case nt:return n=En(19,a,i,d),n.elementType=nt,n.lanes=m,n;case ze:return Nu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case x:_=9;break e;case V:_=11;break e;case xt:_=14;break e;case Ot:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=En(_,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function as(n,i,a,c){return n=En(7,n,c,i),n.lanes=a,n}function Nu(n,i,a,c){return n=En(22,n,c,i),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function pd(n,i,a){return n=En(6,n,null,i),n.lanes=a,n}function md(n,i,a){return i=En(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function t0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$r(0),this.expirationTimes=$r(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function gd(n,i,a,c,d,m,_,S,P){return n=new t0(n,i,a,S,P),i===1?(i=1,m===!0&&(i|=8)):i=0,m=En(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(m),n}function n0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function ug(n){if(!n)return Zr;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return bp(n,a,i)}return i}function cg(n,i,a,c,d,m,_,S,P){return n=gd(a,c,!0,n,d,m,_,S,P),n.context=ug(null),a=n.current,c=Ht(),d=oi(a),m=Ar(c,d),m.callback=i??null,ni(a,m,d),n.current.lanes=d,Wr(n,d,c),Zt(n,c),n}function Du(n,i,a,c){var d=i.current,m=Ht(),_=oi(d);return a=ug(a),i.context===null?i.context=a:i.pendingContext=a,i=Ar(m,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ni(d,i,_),n!==null&&(bn(n,d,_,m),lu(n,d,_)),_}function xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function yd(n,i){hg(n,i),(n=n.alternate)&&hg(n,i)}function r0(){return null}var dg=typeof reportError=="function"?reportError:function(n){console.error(n)};function vd(n){this._internalRoot=n}Ou.prototype.render=vd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Du(n,i,null,null)},Ou.prototype.unmount=vd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;is(function(){Du(null,n,null,null)}),i[Er]=null}};function Ou(n){this._internalRoot=n}Ou.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ol();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Gn.length&&i!==0&&i<Gn[a].priority;a++);Gn.splice(a,0,n),a===0&&Ml(n)}};function _d(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fg(){}function i0(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=xu(_);m.call(j)}}var _=cg(i,c,n,0,null,!1,!1,"",fg);return n._reactRootContainer=_,n[Er]=_.current,Ea(n.nodeType===8?n.parentNode:n),is(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var j=xu(P);S.call(j)}}var P=gd(n,0,!1,null,null,!1,!1,"",fg);return n._reactRootContainer=P,n[Er]=P.current,Ea(n.nodeType===8?n.parentNode:n),is(function(){Du(i,P,a,c)}),P}function Lu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var _=m;if(typeof d=="function"){var S=d;d=function(){var P=xu(_);S.call(P)}}Du(i,_,n,d)}else _=i0(a,i,n,d,c);return xu(_)}Dl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Br(i.pendingLanes);a!==0&&(Hr(i,a|1),Zt(i,We()),(Le&6)===0&&(mo=We()+500,ei()))}break;case 13:is(function(){var c=Sr(n,1);if(c!==null){var d=Ht();bn(c,n,1,d)}}),yd(n,1)}},Us=function(n){if(n.tag===13){var i=Sr(n,134217728);if(i!==null){var a=Ht();bn(i,n,134217728,a)}yd(n,134217728)}},xl=function(n){if(n.tag===13){var i=oi(n),a=Sr(n,i);if(a!==null){var c=Ht();bn(a,n,i,c)}yd(n,i)}},Ol=function(){return De},Vl=function(n,i){var a=De;try{return De=n,i()}finally{De=a}},Ns=function(n,i,a){switch(i){case"input":if(Ho(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Xl(c);if(!d)throw Error(t(90));Ss(c),Ho(c,d)}}}break;case"textarea":Ps(n,a);break;case"select":i=a.value,i!=null&&dr(n,!!a.multiple,i,!1)}},Fi=cd,ta=is;var s0={usingClientEntryPoint:!1,Events:[Ia,to,Xl,qn,ea,cd]},ba={findFiberByHostInstance:Yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o0={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ia(n),n===null?null:n.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||r0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{$i=Mu.inject(o0),nn=Mu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0,en.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(i))throw Error(t(200));return n0(n,i,null,a)},en.createRoot=function(n,i){if(!_d(n))throw Error(t(299));var a=!1,c="",d=dg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=gd(n,1,!1,null,null,a,!1,c,d),n[Er]=i.current,Ea(n.nodeType===8?n.parentNode:n),new vd(i)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ia(i),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return is(n)},en.hydrate=function(n,i,a){if(!Vu(i))throw Error(t(200));return Lu(null,n,i,!0,a)},en.hydrateRoot=function(n,i,a){if(!_d(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",_=dg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=cg(i,null,n,1,a??null,d,!1,m,_),n[Er]=i.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ou(i)},en.render=function(n,i,a){if(!Vu(i))throw Error(t(200));return Lu(null,n,i,!1,a)},en.unmountComponentAtNode=function(n){if(!Vu(n))throw Error(t(40));return n._reactRootContainer?(is(function(){Lu(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},en.unstable_batchedUpdates=cd,en.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Vu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Lu(n,i,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var wg;function cv(){if(wg)return Td.exports;wg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=m0(),Td.exports}var Tg;function g0(){if(Tg)return bu;Tg=1;var r=cv();return bu.createRoot=r.createRoot,bu.hydrateRoot=r.hydrateRoot,bu}var y0=g0();const v0=lv(y0);cv();/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Ja.apply(this,arguments)}var mi;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(mi||(mi={}));const Ig="popstate";function _0(r){r===void 0&&(r={});function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return Fd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ec(o)}return w0(e,t,null,r)}function at(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function mf(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function E0(){return Math.random().toString(36).substr(2,8)}function Sg(r,e){return{usr:r.state,key:r.key,idx:e}}function Fd(r,e,t,s){return t===void 0&&(t=null),Ja({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Vo(e):e,{state:t,key:e&&e.key||s||E0()})}function ec(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Vo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function w0(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f=mi.Pop,g=null,v=E();v==null&&(v=0,h.replaceState(Ja({},h.state,{idx:v}),""));function E(){return(h.state||{idx:null}).idx}function T(){f=mi.Pop;let M=E(),ne=M==null?null:M-v;v=M,g&&g({action:f,location:$.location,delta:ne})}function I(M,ne){f=mi.Push;let re=Fd($.location,M,ne);v=E()+1;let te=Sg(re,v),de=$.createHref(re);try{h.pushState(te,"",de)}catch(Ne){if(Ne instanceof DOMException&&Ne.name==="DataCloneError")throw Ne;o.location.assign(de)}l&&g&&g({action:f,location:$.location,delta:1})}function F(M,ne){f=mi.Replace;let re=Fd($.location,M,ne);v=E();let te=Sg(re,v),de=$.createHref(re);h.replaceState(te,"",de),l&&g&&g({action:f,location:$.location,delta:0})}function B(M){let ne=o.location.origin!=="null"?o.location.origin:o.location.href,re=typeof M=="string"?M:ec(M);return re=re.replace(/ $/,"%20"),at(ne,"No window.location.(origin|href) available to create URL for href: "+re),new URL(re,ne)}let $={get action(){return f},get location(){return r(o,h)},listen(M){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Ig,T),g=M,()=>{o.removeEventListener(Ig,T),g=null}},createHref(M){return e(o,M)},createURL:B,encodeLocation(M){let ne=B(M);return{pathname:ne.pathname,search:ne.search,hash:ne.hash}},push:I,replace:F,go(M){return h.go(M)}};return $}var Ag;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Ag||(Ag={}));function T0(r,e,t){return t===void 0&&(t="/"),I0(r,e,t)}function I0(r,e,t,s){let o=typeof e=="string"?Vo(e):e,l=gf(o.pathname||"/",t);if(l==null)return null;let h=hv(r);S0(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let v=M0(l);f=O0(h[g],v)}return f}function hv(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(at(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let v=yi([s,g.relativePath]),E=t.concat(g);l.children&&l.children.length>0&&(at(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),hv(l.children,e,E,v)),!(l.path==null&&!l.index)&&e.push({path:v,score:D0(v,l.index),routesMeta:E})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of dv(l.path))o(l,h,g)}),e}function dv(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=dv(s.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function S0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:x0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const A0=/^:[\w-]+$/,R0=3,C0=2,P0=1,k0=10,N0=-2,Rg=r=>r==="*";function D0(r,e){let t=r.split("/"),s=t.length;return t.some(Rg)&&(s+=N0),e&&(s+=C0),t.filter(o=>!Rg(o)).reduce((o,l)=>o+(A0.test(l)?R0:l===""?P0:k0),s)}function x0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function O0(r,e,t){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let g=s[f],v=f===s.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=V0({path:g.relativePath,caseSensitive:g.caseSensitive,end:v},E),I=g.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:yi([l,T.pathname]),pathnameBase:z0(yi([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=yi([l,T.pathnameBase]))}return h}function V0(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=L0(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((v,E,T)=>{let{paramName:I,isOptional:F}=E;if(I==="*"){let $=f[T]||"";h=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const B=f[T];return F&&!B?v[I]=void 0:v[I]=(B||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:h,pattern:r}}function L0(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),mf(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(s.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function M0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mf(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function gf(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}const b0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,F0=r=>b0.test(r);function U0(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Vo(r):r,l;if(t)if(F0(t))l=t;else{if(t.includes("//")){let h=t;t=t.replace(/\/\/+/g,"/"),mf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+t))}t.startsWith("/")?l=Cg(t.substring(1),"/"):l=Cg(t,e)}else l=e;return{pathname:l,search:B0(s),hash:$0(o)}}function Cg(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ad(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function yf(r,e){let t=j0(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function vf(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=Vo(r):(o=Ja({},r),at(!o.pathname||!o.pathname.includes("?"),Ad("?","pathname","search",o)),at(!o.pathname||!o.pathname.includes("#"),Ad("#","pathname","hash",o)),at(!o.search||!o.search.includes("#"),Ad("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let g=U0(o,f),v=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(v||E)&&(g.pathname+="/"),g}const yi=r=>r.join("/").replace(/\/\/+/g,"/"),z0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),B0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,$0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function W0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const fv=["post","put","patch","delete"];new Set(fv);const H0=["get",...fv];new Set(H0);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Xa.apply(this,arguments)}const _f=J.createContext(null),q0=J.createContext(null),Di=J.createContext(null),Tc=J.createContext(null),br=J.createContext({outlet:null,matches:[],isDataRoute:!1}),pv=J.createContext(null);function K0(r,e){let{relative:t}=e===void 0?{}:e;Lo()||at(!1);let{basename:s,navigator:o}=J.useContext(Di),{hash:l,pathname:h,search:f}=gv(r,{relative:t}),g=h;return s!=="/"&&(g=h==="/"?s:yi([s,h])),o.createHref({pathname:g,search:f,hash:l})}function Lo(){return J.useContext(Tc)!=null}function ul(){return Lo()||at(!1),J.useContext(Tc).location}function mv(r){J.useContext(Di).static||J.useLayoutEffect(r)}function Ic(){let{isDataRoute:r}=J.useContext(br);return r?aT():G0()}function G0(){Lo()||at(!1);let r=J.useContext(_f),{basename:e,future:t,navigator:s}=J.useContext(Di),{matches:o}=J.useContext(br),{pathname:l}=ul(),h=JSON.stringify(yf(o,t.v7_relativeSplatPath)),f=J.useRef(!1);return mv(()=>{f.current=!0}),J.useCallback(function(v,E){if(E===void 0&&(E={}),!f.current)return;if(typeof v=="number"){s.go(v);return}let T=vf(v,JSON.parse(h),l,E.relative==="path");r==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:yi([e,T.pathname])),(E.replace?s.replace:s.push)(T,E.state,E)},[e,s,h,l,r])}function Q0(){let{matches:r}=J.useContext(br),e=r[r.length-1];return e?e.params:{}}function gv(r,e){let{relative:t}=e===void 0?{}:e,{future:s}=J.useContext(Di),{matches:o}=J.useContext(br),{pathname:l}=ul(),h=JSON.stringify(yf(o,s.v7_relativeSplatPath));return J.useMemo(()=>vf(r,JSON.parse(h),l,t==="path"),[r,h,l,t])}function Y0(r,e){return J0(r,e)}function J0(r,e,t,s){Lo()||at(!1);let{navigator:o}=J.useContext(Di),{matches:l}=J.useContext(br),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let v=ul(),E;if(e){var T;let M=typeof e=="string"?Vo(e):e;g==="/"||(T=M.pathname)!=null&&T.startsWith(g)||at(!1),E=M}else E=v;let I=E.pathname||"/",F=I;if(g!=="/"){let M=g.replace(/^\//,"").split("/");F="/"+I.replace(/^\//,"").split("/").slice(M.length).join("/")}let B=T0(r,{pathname:F}),$=nT(B&&B.map(M=>Object.assign({},M,{params:Object.assign({},f,M.params),pathname:yi([g,o.encodeLocation?o.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?g:yi([g,o.encodeLocation?o.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),l,t,s);return e&&$?J.createElement(Tc.Provider,{value:{location:Xa({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:mi.Pop}},$):$}function X0(){let r=oT(),e=W0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),t?J.createElement("pre",{style:o},t):null,null)}const Z0=J.createElement(X0,null);class eT extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?J.createElement(br.Provider,{value:this.props.routeContext},J.createElement(pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tT(r){let{routeContext:e,match:t,children:s}=r,o=J.useContext(_f);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),J.createElement(br.Provider,{value:e},s)}function nT(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let h=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let E=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);E>=0||at(!1),h=h.slice(0,Math.min(h.length,E+1))}let g=!1,v=-1;if(t&&s&&s.v7_partialHydration)for(let E=0;E<h.length;E++){let T=h[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(v=E),T.route.id){let{loaderData:I,errors:F}=t,B=T.route.loader&&I[T.route.id]===void 0&&(!F||F[T.route.id]===void 0);if(T.route.lazy||B){g=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}return h.reduceRight((E,T,I)=>{let F,B=!1,$=null,M=null;t&&(F=f&&T.route.id?f[T.route.id]:void 0,$=T.route.errorElement||Z0,g&&(v<0&&I===0?(lT("route-fallback"),B=!0,M=null):v===I&&(B=!0,M=T.route.hydrateFallbackElement||null)));let ne=e.concat(h.slice(0,I+1)),re=()=>{let te;return F?te=$:B?te=M:T.route.Component?te=J.createElement(T.route.Component,null):T.route.element?te=T.route.element:te=E,J.createElement(tT,{match:T,routeContext:{outlet:E,matches:ne,isDataRoute:t!=null},children:te})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?J.createElement(eT,{location:t.location,revalidation:t.revalidation,component:$,error:F,children:re(),routeContext:{outlet:null,matches:ne,isDataRoute:!0}}):re()},null)}var yv=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(yv||{}),vv=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(vv||{});function rT(r){let e=J.useContext(_f);return e||at(!1),e}function iT(r){let e=J.useContext(q0);return e||at(!1),e}function sT(r){let e=J.useContext(br);return e||at(!1),e}function _v(r){let e=sT(),t=e.matches[e.matches.length-1];return t.route.id||at(!1),t.route.id}function oT(){var r;let e=J.useContext(pv),t=iT(),s=_v();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function aT(){let{router:r}=rT(yv.UseNavigateStable),e=_v(vv.UseNavigateStable),t=J.useRef(!1);return mv(()=>{t.current=!0}),J.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,Xa({fromRouteId:e},l)))},[r,e])}const Pg={};function lT(r,e,t){Pg[r]||(Pg[r]=!0)}function uT(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function tc(r){let{to:e,replace:t,state:s,relative:o}=r;Lo()||at(!1);let{future:l,static:h}=J.useContext(Di),{matches:f}=J.useContext(br),{pathname:g}=ul(),v=Ic(),E=vf(e,yf(f,l.v7_relativeSplatPath),g,o==="path"),T=JSON.stringify(E);return J.useEffect(()=>v(JSON.parse(T),{replace:t,state:s,relative:o}),[v,T,o,t,s]),null}function ls(r){at(!1)}function cT(r){let{basename:e="/",children:t=null,location:s,navigationType:o=mi.Pop,navigator:l,static:h=!1,future:f}=r;Lo()&&at(!1);let g=e.replace(/^\/*/,"/"),v=J.useMemo(()=>({basename:g,navigator:l,static:h,future:Xa({v7_relativeSplatPath:!1},f)}),[g,f,l,h]);typeof s=="string"&&(s=Vo(s));let{pathname:E="/",search:T="",hash:I="",state:F=null,key:B="default"}=s,$=J.useMemo(()=>{let M=gf(E,g);return M==null?null:{location:{pathname:M,search:T,hash:I,state:F,key:B},navigationType:o}},[g,E,T,I,F,B,o]);return $==null?null:J.createElement(Di.Provider,{value:v},J.createElement(Tc.Provider,{children:t,value:$}))}function hT(r){let{children:e,location:t}=r;return Y0(Ud(e),t)}new Promise(()=>{});function Ud(r,e){e===void 0&&(e=[]);let t=[];return J.Children.forEach(r,(s,o)=>{if(!J.isValidElement(s))return;let l=[...e,o];if(s.type===J.Fragment){t.push.apply(t,Ud(s.props.children,l));return}s.type!==ls&&at(!1),!s.props.index||!s.props.children||at(!1);let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Ud(s.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jd(){return jd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},jd.apply(this,arguments)}function dT(r,e){if(r==null)return{};var t={},s=Object.keys(r),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function fT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function pT(r,e){return r.button===0&&(!e||e==="_self")&&!fT(r)}const mT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gT="6";try{window.__reactRouterVersion=gT}catch{}const yT="startTransition",kg=d0[yT];function vT(r){let{basename:e,children:t,future:s,window:o}=r,l=J.useRef();l.current==null&&(l.current=_0({window:o,v5Compat:!0}));let h=l.current,[f,g]=J.useState({action:h.action,location:h.location}),{v7_startTransition:v}=s||{},E=J.useCallback(T=>{v&&kg?kg(()=>g(T)):g(T)},[g,v]);return J.useLayoutEffect(()=>h.listen(E),[h,E]),J.useEffect(()=>uT(s),[s]),J.createElement(cT,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:s})}const _T=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ET=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wu=J.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:h,state:f,target:g,to:v,preventScrollReset:E,viewTransition:T}=e,I=dT(e,mT),{basename:F}=J.useContext(Di),B,$=!1;if(typeof v=="string"&&ET.test(v)&&(B=v,_T))try{let te=new URL(window.location.href),de=v.startsWith("//")?new URL(te.protocol+v):new URL(v),Ne=gf(de.pathname,F);de.origin===te.origin&&Ne!=null?v=Ne+de.search+de.hash:$=!0}catch{}let M=K0(v,{relative:o}),ne=wT(v,{replace:h,state:f,target:g,preventScrollReset:E,relative:o,viewTransition:T});function re(te){s&&s(te),te.defaultPrevented||ne(te)}return J.createElement("a",jd({},I,{href:B||M,onClick:$||l?s:re,ref:t,target:g}))});var Ng;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Ng||(Ng={}));var Dg;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));function wT(r,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,g=Ic(),v=ul(),E=gv(r,{relative:h});return J.useCallback(T=>{if(pT(T,t)){T.preventDefault();let I=s!==void 0?s:ec(v)===ec(E);g(r,{replace:I,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[v,g,E,s,o,t,r,l,h,f])}const TT=()=>{};var xg={};/**
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
 */const Ev=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},IT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},wv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|v>>6,F=v&63;g||(F=64,h||(I=64)),s.push(t[E],t[T],t[I],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ev(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):IT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||v==null||T==null)throw new ST;const I=l<<2|f>>4;if(s.push(I),v!==64){const F=f<<4&240|v>>2;if(s.push(F),T!==64){const B=v<<6&192|T;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ST extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AT=function(r){const e=Ev(r);return wv.encodeByteArray(e,!0)},nc=function(r){return AT(r).replace(/\./g,"")},Tv=function(r){try{return wv.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function RT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CT=()=>RT().__FIREBASE_DEFAULTS__,PT=()=>{if(typeof process>"u"||typeof xg>"u")return;const r=xg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},kT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Tv(r[1]);return e&&JSON.parse(e)},Sc=()=>{try{return TT()||CT()||PT()||kT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Iv=r=>{var e,t;return(t=(e=Sc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},NT=r=>{const e=Iv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Sv=()=>{var r;return(r=Sc())===null||r===void 0?void 0:r.config},Av=r=>{var e;return(e=Sc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class DT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Mo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rv(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function xT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[nc(JSON.stringify(t)),nc(JSON.stringify(h)),""].join(".")}const Wa={};function OT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Wa))Wa[e]?r.emulator.push(e):r.prod.push(e);return r}function VT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Og=!1;function Cv(r,e){if(typeof window>"u"||typeof document>"u"||!Mo(window.location.host)||Wa[r]===e||Wa[r]||Og)return;Wa[r]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",l=OT().prod.length>0;function h(){const I=document.getElementById(s);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,F){I.setAttribute("width","24"),I.setAttribute("id",F),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function v(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Og=!0,h()},I}function E(I,F){I.setAttribute("id",F),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=VT(s),F=t("text"),B=document.getElementById(F)||document.createElement("span"),$=t("learnmore"),M=document.getElementById($)||document.createElement("a"),ne=t("preprendIcon"),re=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const te=I.element;f(te),E(M,$);const de=v();g(re,ne),te.append(re,B,M,de),document.body.appendChild(te)}l?(B.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function MT(){var r;const e=(r=Sc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function FT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function UT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jT(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function zT(){return!MT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BT(){try{return typeof indexedDB=="object"}catch{return!1}}function $T(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const WT="FirebaseError";class Fr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=WT,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cl.prototype.create)}}class cl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?HT(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Fr(o,f,s)}}function HT(r,e){return r.replace(qT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const qT=/\{\$([^}]+)}/g;function KT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ds(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Vg(l)&&Vg(h)){if(!ds(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Vg(r){return r!==null&&typeof r=="object"}/**
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
 */function hl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ua(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function ja(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function GT(r,e){const t=new QT(r,e);return t.subscribe.bind(t)}class QT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");YT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Rd),o.error===void 0&&(o.error=Rd),o.complete===void 0&&(o.complete=Rd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Rd(){}/**
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
 */function qt(r){return r&&r._delegate?r._delegate:r}class fs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const us="[DEFAULT]";/**
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
 */class JT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new DT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZT(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:XT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XT(r){return r===us?void 0:r}function ZT(r){return r.instantiationMode==="EAGER"}/**
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
 */class eI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new JT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const tI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},nI=Pe.INFO,rI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},iI=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=rI[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ef{constructor(e){this.name=e,this._logLevel=nI,this._logHandler=iI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const sI=(r,e)=>e.some(t=>r instanceof t);let Lg,Mg;function oI(){return Lg||(Lg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return Mg||(Mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pv=new WeakMap,zd=new WeakMap,kv=new WeakMap,Cd=new WeakMap,wf=new WeakMap;function lI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(vi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Pv.set(t,r)}).catch(()=>{}),wf.set(e,r),e}function uI(r){if(zd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});zd.set(r,e)}let Bd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return zd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||kv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function cI(r){Bd=r(Bd)}function hI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Pd(this),e,...t);return kv.set(s,e.sort?e.sort():[e]),vi(s)}:aI().includes(r)?function(...e){return r.apply(Pd(this),e),vi(Pv.get(this))}:function(...e){return vi(r.apply(Pd(this),e))}}function dI(r){return typeof r=="function"?hI(r):(r instanceof IDBTransaction&&uI(r),sI(r,oI())?new Proxy(r,Bd):r)}function vi(r){if(r instanceof IDBRequest)return lI(r);if(Cd.has(r))return Cd.get(r);const e=dI(r);return e!==r&&(Cd.set(r,e),wf.set(e,r)),e}const Pd=r=>wf.get(r);function fI(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=vi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(vi(h.result),g.oldVersion,g.newVersion,vi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const pI=["get","getKey","getAll","getAllKeys","count"],mI=["put","add","delete","clear"],kd=new Map;function bg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=mI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||pI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&g.done]))[0]};return kd.set(e,l),l}cI(r=>({...r,get:(e,t,s)=>bg(e,t)||r.get(e,t,s),has:(e,t)=>!!bg(e,t)||r.has(e,t)}));/**
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
 */class gI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function yI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $d="@firebase/app",Fg="0.13.2";/**
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
 */const xr=new Ef("@firebase/app"),vI="@firebase/app-compat",_I="@firebase/analytics-compat",EI="@firebase/analytics",wI="@firebase/app-check-compat",TI="@firebase/app-check",II="@firebase/auth",SI="@firebase/auth-compat",AI="@firebase/database",RI="@firebase/data-connect",CI="@firebase/database-compat",PI="@firebase/functions",kI="@firebase/functions-compat",NI="@firebase/installations",DI="@firebase/installations-compat",xI="@firebase/messaging",OI="@firebase/messaging-compat",VI="@firebase/performance",LI="@firebase/performance-compat",MI="@firebase/remote-config",bI="@firebase/remote-config-compat",FI="@firebase/storage",UI="@firebase/storage-compat",jI="@firebase/firestore",zI="@firebase/ai",BI="@firebase/firestore-compat",$I="firebase",WI="11.10.0";/**
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
 */const Wd="[DEFAULT]",HI={[$d]:"fire-core",[vI]:"fire-core-compat",[EI]:"fire-analytics",[_I]:"fire-analytics-compat",[TI]:"fire-app-check",[wI]:"fire-app-check-compat",[II]:"fire-auth",[SI]:"fire-auth-compat",[AI]:"fire-rtdb",[RI]:"fire-data-connect",[CI]:"fire-rtdb-compat",[PI]:"fire-fn",[kI]:"fire-fn-compat",[NI]:"fire-iid",[DI]:"fire-iid-compat",[xI]:"fire-fcm",[OI]:"fire-fcm-compat",[VI]:"fire-perf",[LI]:"fire-perf-compat",[MI]:"fire-rc",[bI]:"fire-rc-compat",[FI]:"fire-gcs",[UI]:"fire-gcs-compat",[jI]:"fire-fst",[BI]:"fire-fst-compat",[zI]:"fire-vertex","fire-js":"fire-js",[$I]:"fire-js-all"};/**
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
 */const rc=new Map,qI=new Map,Hd=new Map;function Ug(r,e){try{r.container.addComponent(e)}catch(t){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Co(r){const e=r.name;if(Hd.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;Hd.set(e,r);for(const t of rc.values())Ug(t,r);for(const t of qI.values())Ug(t,r);return!0}function Tf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function wn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const KI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new cl("app","Firebase",KI);/**
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
 */class GI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=WI;function Nv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=Sv()),!t)throw _i.create("no-options");const l=rc.get(o);if(l){if(ds(t,l.options)&&ds(s,l.config))return l;throw _i.create("duplicate-app",{appName:o})}const h=new eI(o);for(const g of Hd.values())h.addComponent(g);const f=new GI(t,s,h);return rc.set(o,f),f}function Dv(r=Wd){const e=rc.get(r);if(!e&&r===Wd&&Sv())return Nv();if(!e)throw _i.create("no-app",{appName:r});return e}function Ei(r,e,t){var s;let o=(s=HI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(f.join(" "));return}Co(new fs(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const QI="firebase-heartbeat-database",YI=1,Za="firebase-heartbeat-store";let Nd=null;function xv(){return Nd||(Nd=fI(QI,YI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Za)}catch(t){console.warn(t)}}}}).catch(r=>{throw _i.create("idb-open",{originalErrorMessage:r.message})})),Nd}async function JI(r){try{const t=(await xv()).transaction(Za),s=await t.objectStore(Za).get(Ov(r));return await t.done,s}catch(e){if(e instanceof Fr)xr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(t.message)}}}async function jg(r,e){try{const s=(await xv()).transaction(Za,"readwrite");await s.objectStore(Za).put(e,Ov(r)),await s.done}catch(t){if(t instanceof Fr)xr.warn(t.message);else{const s=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xr.warn(s.message)}}}function Ov(r){return`${r.name}!${r.options.appId}`}/**
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
 */const XI=1024,ZI=30;class eS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nS(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=zg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>ZI){const h=rS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){xr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zg(),{heartbeatsToSend:s,unsentEntries:o}=tS(this._heartbeatsCache.heartbeats),l=nc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return xr.warn(t),""}}}function zg(){return new Date().toISOString().substring(0,10)}function tS(r,e=XI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Bg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Bg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class nS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BT()?$T().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await JI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Bg(r){return nc(JSON.stringify({version:2,heartbeats:r})).length}function rS(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function iS(r){Co(new fs("platform-logger",e=>new gI(e),"PRIVATE")),Co(new fs("heartbeat",e=>new eS(e),"PRIVATE")),Ei($d,Fg,r),Ei($d,Fg,"esm2017"),Ei("fire-js","")}iS("");function If(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Vv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sS=Vv,Lv=new cl("auth","Firebase",Vv());/**
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
 */const ic=new Ef("@firebase/auth");function oS(r,...e){ic.logLevel<=Pe.WARN&&ic.warn(`Auth (${bo}): ${r}`,...e)}function Hu(r,...e){ic.logLevel<=Pe.ERROR&&ic.error(`Auth (${bo}): ${r}`,...e)}/**
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
 */function Wn(r,...e){throw Sf(r,...e)}function rr(r,...e){return Sf(r,...e)}function Mv(r,e,t){const s=Object.assign(Object.assign({},sS()),{[e]:t});return new cl("auth","Firebase",s).create(e,{appName:r.name})}function Nr(r){return Mv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Lv.create(r,...e)}function ve(r,e,...t){if(!r)throw Sf(e,...t)}function Pr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Hu(e),new Error(e)}function Or(r,e){r||Pr(e)}/**
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
 */function qd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function aS(){return $g()==="http:"||$g()==="https:"}function $g(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function lS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aS()||FT()||"connection"in navigator)?navigator.onLine:!0}function uS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class dl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Or(t>e,"Short delay should be less than long delay!"),this.isMobile=LT()||UT()}get(){return lS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Af(r,e){Or(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dS=new dl(3e4,6e4);function xi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Oi(r,e,t,s,o={}){return Fv(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=hl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},l);return bT()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Mo(r.emulatorConfig.host)&&(v.credentials="include"),bv.fetch()(await Uv(r,r.config.apiHost,t,f),v)})}async function Fv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},cS),e);try{const o=new pS(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Fu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,v]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Fu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Fu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Mv(r,E,v);Wn(r,E)}}catch(o){if(o instanceof Fr)throw o;Wn(r,"network-request-failed",{message:String(o)})}}async function fl(r,e,t,s,o={}){const l=await Oi(r,e,t,s,o);return"mfaPendingCredential"in l&&Wn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function Uv(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Af(r.config,o):`${r.config.apiScheme}://${o}`;return hS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function fS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(rr(this.auth,"network-request-failed")),dS.get())})}}function Fu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=rr(r,e,s);return o.customData._tokenResponse=t,o}function Wg(r){return r!==void 0&&r.enterprise!==void 0}class mS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gS(r,e){return Oi(r,"GET","/v2/recaptchaConfig",xi(r,e))}/**
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
 */async function yS(r,e){return Oi(r,"POST","/v1/accounts:delete",e)}async function sc(r,e){return Oi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ha(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vS(r,e=!1){const t=qt(r),s=await t.getIdToken(e),o=Rf(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ha(Dd(o.auth_time)),issuedAtTime:Ha(Dd(o.iat)),expirationTime:Ha(Dd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Dd(r){return Number(r)*1e3}function Rf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Hu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Tv(t);return o?JSON.parse(o):(Hu("Failed to decode base64 JWT payload"),null)}catch(o){return Hu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Hg(r){const e=Rf(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function el(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Fr&&_S(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function _S({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class ES{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ha(this.lastLoginAt),this.creationTime=Ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await el(r,sc(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?jv(l.providerUserInfo):[],f=TS(r.providerData,h),g=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),E=g?v:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Kd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,T)}async function wS(r){const e=qt(r);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TS(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function jv(r){return r.map(e=>{var{providerId:t}=e,s=If(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function IS(r,e){const t=await Fv(r,{},async()=>{const s=hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await Uv(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:s};return r.emulatorConfig&&Mo(r.emulatorConfig.host)&&(g.credentials="include"),bv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function SS(r,e){return Oi(r,"POST","/v2/accounts:revokeToken",xi(r,e))}/**
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
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Hg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await IS(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Io;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
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
 */function ci(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=If(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ES(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Kd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await el(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vS(this,e)}reload(){return wS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await oc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await el(this,yS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,v,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,B=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,M=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ne=(v=t.createdAt)!==null&&v!==void 0?v:void 0,re=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:te,emailVerified:de,isAnonymous:Ne,providerData:Ie,stsTokenManager:D}=t;ve(te&&D,e,"internal-error");const A=Io.fromJSON(this.name,D);ve(typeof te=="string",e,"internal-error"),ci(T,e.name),ci(I,e.name),ve(typeof de=="boolean",e,"internal-error"),ve(typeof Ne=="boolean",e,"internal-error"),ci(F,e.name),ci(B,e.name),ci($,e.name),ci(M,e.name),ci(ne,e.name),ci(re,e.name);const C=new Fn({uid:te,auth:e,email:I,emailVerified:de,displayName:T,isAnonymous:Ne,photoURL:B,phoneNumber:F,tenantId:$,stsTokenManager:A,createdAt:ne,lastLoginAt:re});return Ie&&Array.isArray(Ie)&&(C.providerData=Ie.map(k=>Object.assign({},k))),M&&(C._redirectEventId=M),C}static async _fromIdTokenResponse(e,t,s=!1){const o=new Io;o.updateFromServerResponse(t);const l=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await oc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?jv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Io;f.updateFromIdToken(s);const g=new Fn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Kd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,v),g}}/**
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
 */const qg=new Map;function kr(r){Or(r instanceof Function,"Expected a class definition");let e=qg.get(r);return e?(Or(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,qg.set(r,e),e)}/**
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
 */class zv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zv.type="NONE";const Kg=zv;/**
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
 */function qu(r,e,t){return`firebase:${r}:${e}:${t}`}class So{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=qu(this.userKey,o.apiKey,l),this.fullPersistenceKey=qu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sc(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new So(kr(Kg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||kr(Kg);const h=qu(s,e.config.apiKey,e.name);let f=null;for(const v of t)try{const E=await v._get(h);if(E){let T;if(typeof E=="string"){const I=await sc(e,{idToken:E}).catch(()=>{});if(!I)break;T=await Fn._fromGetAccountInfoResponse(e,I,E)}else T=Fn._fromJSON(e,E);v!==l&&(f=T),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new So(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new So(l,e,s))}}/**
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
 */function Gg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kv(e))return"Blackberry";if(Gv(e))return"Webos";if($v(e))return"Safari";if((e.includes("chrome/")||Wv(e))&&!e.includes("edge/"))return"Chrome";if(qv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bv(r=zt()){return/firefox\//i.test(r)}function $v(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wv(r=zt()){return/crios\//i.test(r)}function Hv(r=zt()){return/iemobile/i.test(r)}function qv(r=zt()){return/android/i.test(r)}function Kv(r=zt()){return/blackberry/i.test(r)}function Gv(r=zt()){return/webos/i.test(r)}function Cf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function AS(r=zt()){var e;return Cf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RS(){return jT()&&document.documentMode===10}function Qv(r=zt()){return Cf(r)||qv(r)||Gv(r)||Kv(r)||/windows phone/i.test(r)||Hv(r)}/**
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
 */function Yv(r,e=[]){let t;switch(r){case"Browser":t=Gg(zt());break;case"Worker":t=`${Gg(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bo}/${s}`}/**
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
 */class CS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function PS(r,e={}){return Oi(r,"GET","/v2/passwordPolicy",xi(r,e))}/**
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
 */const kS=6;class NS{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:kS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class DS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qg(this),this.idTokenSubscription=new Qg(this),this.beforeStateQueue=new CS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await So.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sc(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(Nr(this));const t=e?qt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PS(this),t=new NS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await SS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&oS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _s(r){return qt(r)}class Qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=GT(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xS(r){Ac=r}function Jv(r){return Ac.loadJS(r)}function OS(){return Ac.recaptchaEnterpriseScript}function VS(){return Ac.gapiScript}function LS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class MS{constructor(){this.enterprise=new bS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class bS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const FS="recaptcha-enterprise",Xv="NO_RECAPTCHA";class US{constructor(e){this.type=FS,this.auth=_s(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{gS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new mS(g);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Wg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(Xv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Wg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=OS();g.length!==0&&(g+=f),Jv(g).then(()=>{o(f,l,h)}).catch(v=>{h(v)})}}).catch(f=>{h(f)})})}}async function Yg(r,e,t,s=!1,o=!1){const l=new US(r);let h;if(o)h=Xv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Gd(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Yg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Yg(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
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
 */function jS(r,e){const t=Tf(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ds(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function zS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(kr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BS(r,e,t){const s=_s(r);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Zv(e),{host:h,port:f}=$S(e),g=f===null?"":`:${f}`,v={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(ds(v,s.config.emulator)&&ds(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Mo(h)?(Rv(`${l}//${h}${g}`),Cv("Auth",!0)):WS()}function Zv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function $S(r){const e=Zv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Jg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Jg(h)}}}function Jg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function WS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Pf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,t){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}async function HS(r,e){return Oi(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qS(r,e){return fl(r,"POST","/v1/accounts:signInWithPassword",xi(r,e))}/**
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
 */async function KS(r,e){return fl(r,"POST","/v1/accounts:signInWithEmailLink",xi(r,e))}async function GS(r,e){return fl(r,"POST","/v1/accounts:signInWithEmailLink",xi(r,e))}/**
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
 */class tl extends Pf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new tl(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new tl(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gd(e,t,"signInWithPassword",qS);case"emailLink":return KS(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gd(e,s,"signUpPassword",HS);case"emailLink":return GS(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ao(r,e){return fl(r,"POST","/v1/accounts:signInWithIdp",xi(r,e))}/**
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
 */const QS="http://localhost";class ps extends Pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=If(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ps(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ao(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ao(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ao(e,t)}buildRequest(){const e={requestUri:QS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hl(t)}return e}}/**
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
 */function YS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JS(r){const e=Ua(ja(r)).link,t=e?Ua(ja(e)).deep_link_id:null,s=Ua(ja(r)).deep_link_id;return(s?Ua(ja(s)).link:null)||s||t||e||r}class kf{constructor(e){var t,s,o,l,h,f;const g=Ua(ja(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,T=YS((o=g.mode)!==null&&o!==void 0?o:null);ve(v&&E&&T,"argument-error"),this.apiKey=v,this.operation=T,this.code=E,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=JS(e);try{return new kf(t)}catch{return null}}}/**
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
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,t){return tl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=kf.parseLink(t);return ve(s,"argument-error"),tl._fromEmailAndCode(e,s.code,s.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class e_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pl extends e_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hi extends pl{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
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
 */class di extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ps._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
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
 */class fi extends pl{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
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
 */class pi extends pl{constructor(){super("twitter.com")}static credential(e,t){return ps._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
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
 */async function XS(r,e){return fl(r,"POST","/v1/accounts:signUp",xi(r,e))}/**
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
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Fn._fromIdTokenResponse(e,s,o),h=Xg(s);return new ms({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Xg(s);return new ms({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Xg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ac extends Fr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ac(e,t,s,o)}}function t_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(r,l,e,s):l})}async function ZS(r,e,t=!1){const s=await el(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ms._forOperation(r,"link",s)}/**
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
 */async function e1(r,e,t=!1){const{auth:s}=r;if(wn(s.app))return Promise.reject(Nr(s));const o="reauthenticate";try{const l=await el(r,t_(s,o,e,r),t);ve(l.idToken,s,"internal-error");const h=Rf(l.idToken);ve(h,s,"internal-error");const{sub:f}=h;return ve(r.uid===f,s,"user-mismatch"),ms._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Wn(s,"user-mismatch"),l}}/**
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
 */async function n_(r,e,t=!1){if(wn(r.app))return Promise.reject(Nr(r));const s="signIn",o=await t_(r,s,e),l=await ms._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function t1(r,e){return n_(_s(r),e)}/**
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
 */async function r_(r){const e=_s(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function n1(r,e,t){if(wn(r.app))return Promise.reject(Nr(r));const s=_s(r),h=await Gd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&r_(r),g}),f=await ms._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function r1(r,e,t){return wn(r.app)?Promise.reject(Nr(r)):t1(qt(r),Fo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&r_(r),s})}function i1(r,e,t,s){return qt(r).onIdTokenChanged(e,t,s)}function s1(r,e,t){return qt(r).beforeAuthStateChanged(e,t)}function o1(r,e,t,s){return qt(r).onAuthStateChanged(e,t,s)}function a1(r){return qt(r).signOut()}const lc="__sak";/**
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
 */class i_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const l1=1e3,u1=10;class s_ extends i_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);RS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,u1):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},l1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}s_.type="LOCAL";const c1=s_;/**
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
 */class o_ extends i_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}o_.type="SESSION";const a_=o_;/**
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
 */function h1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Rc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,l)),g=await h1(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
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
 */function Nf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class d1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const v=Nf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===v)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ir(){return window}function f1(r){ir().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function l_(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function p1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function g1(){return l_()?self:null}/**
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
 */const u_="firebaseLocalStorageDb",y1=1,uc="firebaseLocalStorage",c_="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Cc(r,e){return r.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function v1(){const r=indexedDB.deleteDatabase(u_);return new ml(r).toPromise()}function Qd(){const r=indexedDB.open(u_,y1);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(uc,{keyPath:c_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(uc)?e(s):(s.close(),await v1(),e(await Qd()))})})}async function Zg(r,e,t){const s=Cc(r,!0).put({[c_]:e,value:t});return new ml(s).toPromise()}async function _1(r,e){const t=Cc(r,!1).get(e),s=await new ml(t).toPromise();return s===void 0?null:s.value}function ey(r,e){const t=Cc(r,!0).delete(e);return new ml(t).toPromise()}const E1=800,w1=3;class h_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>w1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(g1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await p1(),!this.activeServiceWorker)return;this.sender=new d1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await Zg(e,lc,"1"),await ey(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>_1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ey(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Cc(o,!1).getAll();return new ml(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h_.type="LOCAL";const T1=h_;new dl(3e4,6e4);/**
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
 */function I1(r,e){return e?kr(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Df extends Pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ao(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ao(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function S1(r){return n_(r.auth,new Df(r),r.bypassAuthState)}function A1(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),e1(t,new Df(r),r.bypassAuthState)}async function R1(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),ZS(t,new Df(r),r.bypassAuthState)}/**
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
 */class d_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S1;case"linkViaPopup":case"linkViaRedirect":return R1;case"reauthViaPopup":case"reauthViaRedirect":return A1;default:Wn(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const C1=new dl(2e3,1e4);class wo extends d_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,C1.get())};e()}}wo.currentPopupAction=null;/**
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
 */const P1="pendingRedirect",Ku=new Map;class k1 extends d_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const s=await N1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function N1(r,e){const t=O1(e),s=x1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function D1(r,e){Ku.set(r._key(),e)}function x1(r){return kr(r._redirectPersistence)}function O1(r){return qu(P1,r.config.apiKey,r.name)}async function V1(r,e,t=!1){if(wn(r.app))return Promise.reject(Nr(r));const s=_s(r),o=I1(s,e),h=await new k1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const L1=600*1e3;class M1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!f_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(rr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ty(e))}saveEventToCache(e){this.cachedEventUids.add(ty(e)),this.lastProcessedEventTime=Date.now()}}function ty(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function f_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f_(r);default:return!1}}/**
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
 */async function F1(r,e={}){return Oi(r,"GET","/v1/projects",e)}/**
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
 */const U1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j1=/^https?/;async function z1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await F1(r);for(const t of e)try{if(B1(t))return}catch{}Wn(r,"unauthorized-domain")}function B1(r){const e=qd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!j1.test(t))return!1;if(U1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $1=new dl(3e4,6e4);function ny(){const r=ir().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function W1(r){return new Promise((e,t)=>{var s,o,l;function h(){ny(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ny(),t(rr(r,"network-request-failed"))},timeout:$1.get()})}if(!((o=(s=ir().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ir().gapi)===null||l===void 0)&&l.load)h();else{const f=LS("iframefcb");return ir()[f]=()=>{gapi.load?h():t(rr(r,"network-request-failed"))},Jv(`${VS()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function H1(r){return Gu=Gu||W1(r),Gu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const q1=new dl(5e3,15e3),K1="__/auth/iframe",G1="emulator/auth/iframe",Q1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Y1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function J1(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Af(e,G1):`https://${r.config.authDomain}/${K1}`,s={apiKey:e.apiKey,appName:r.name,v:bo},o=Y1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${hl(s).slice(1)}`}async function X1(r){const e=await H1(r),t=ir().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:J1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=rr(r,"network-request-failed"),f=ir().setTimeout(()=>{l(h)},q1.get());function g(){ir().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Z1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eA=500,tA=600,nA="_blank",rA="http://localhost";class ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iA(r,e,t,s=eA,o=tA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},Z1),{width:s.toString(),height:o.toString(),top:l,left:h}),v=zt().toLowerCase();t&&(f=Wv(v)?nA:t),Bv(v)&&(e=e||rA,g.scrollbars="yes");const E=Object.entries(g).reduce((I,[F,B])=>`${I}${F}=${B},`,"");if(AS(v)&&f!=="_self")return sA(e||"",f),new ry(null);const T=window.open(e||"",f,E);ve(T,r,"popup-blocked");try{T.focus()}catch{}return new ry(T)}function sA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const oA="__/auth/handler",aA="emulator/auth/handler",lA=encodeURIComponent("fac");async function iy(r,e,t,s,o,l){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:bo,eventId:o};if(e instanceof e_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",KT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof pl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),v=g?`#${lA}=${encodeURIComponent(g)}`:"";return`${uA(r)}?${hl(f).slice(1)}${v}`}function uA({config:r}){return r.emulator?Af(r,aA):`https://${r.authDomain}/${oA}`}/**
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
 */const xd="webStorageSupport";class cA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a_,this._completeRedirectFn=V1,this._overrideRedirectResult=D1}async _openPopup(e,t,s,o){var l;Or((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await iy(e,t,s,qd(),o);return iA(e,h,Nf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await iy(e,t,s,qd(),o);return f1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Or(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await X1(e),s=new M1(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xd,{type:xd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[xd];h!==void 0&&t(!!h),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=z1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qv()||$v()||Cf()}}const hA=cA;var sy="@firebase/auth",oy="1.10.8";/**
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
 */class dA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pA(r){Co(new fs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yv(r)},v=new DS(s,o,l,g);return zS(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Co(new fs("auth-internal",e=>{const t=_s(e.getProvider("auth").getImmediate());return(s=>new dA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ei(sy,oy,fA(r)),Ei(sy,oy,"esm2017")}/**
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
 */const mA=300,gA=Av("authIdTokenMaxAge")||mA;let ay=null;const yA=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>gA)return;const o=t==null?void 0:t.token;ay!==o&&(ay=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function vA(r=Dv()){const e=Tf(r,"auth");if(e.isInitialized())return e.getImmediate();const t=jS(r,{popupRedirectResolver:hA,persistence:[T1,c1,a_]}),s=Av("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=yA(l.toString());s1(t,h,()=>h(t.currentUser)),i1(t,f=>h(f))}}const o=Iv("auth");return o&&BS(t,`http://${o}`),t}function _A(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}xS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=rr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",_A().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pA("Browser");var EA="firebase",wA="11.10.0";/**
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
 */Ei(EA,wA,"app");var ly=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wi,p_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,A){function C(){}C.prototype=A.prototype,D.D=A.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(k,x,V){for(var R=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)R[nt-2]=arguments[nt];return A.prototype[x].apply(k,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,A,C){C||(C=0);var k=Array(16);if(typeof A=="string")for(var x=0;16>x;++x)k[x]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(x=0;16>x;++x)k[x]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=D.g[0],C=D.g[1],x=D.g[2];var V=D.g[3],R=A+(V^C&(x^V))+k[0]+3614090360&4294967295;A=C+(R<<7&4294967295|R>>>25),R=V+(x^A&(C^x))+k[1]+3905402710&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(C^V&(A^C))+k[2]+606105819&4294967295,x=V+(R<<17&4294967295|R>>>15),R=C+(A^x&(V^A))+k[3]+3250441966&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(V^C&(x^V))+k[4]+4118548399&4294967295,A=C+(R<<7&4294967295|R>>>25),R=V+(x^A&(C^x))+k[5]+1200080426&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(C^V&(A^C))+k[6]+2821735955&4294967295,x=V+(R<<17&4294967295|R>>>15),R=C+(A^x&(V^A))+k[7]+4249261313&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(V^C&(x^V))+k[8]+1770035416&4294967295,A=C+(R<<7&4294967295|R>>>25),R=V+(x^A&(C^x))+k[9]+2336552879&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(C^V&(A^C))+k[10]+4294925233&4294967295,x=V+(R<<17&4294967295|R>>>15),R=C+(A^x&(V^A))+k[11]+2304563134&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(V^C&(x^V))+k[12]+1804603682&4294967295,A=C+(R<<7&4294967295|R>>>25),R=V+(x^A&(C^x))+k[13]+4254626195&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(C^V&(A^C))+k[14]+2792965006&4294967295,x=V+(R<<17&4294967295|R>>>15),R=C+(A^x&(V^A))+k[15]+1236535329&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(x^V&(C^x))+k[1]+4129170786&4294967295,A=C+(R<<5&4294967295|R>>>27),R=V+(C^x&(A^C))+k[6]+3225465664&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(V^A))+k[11]+643717713&4294967295,x=V+(R<<14&4294967295|R>>>18),R=C+(V^A&(x^V))+k[0]+3921069994&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(x^V&(C^x))+k[5]+3593408605&4294967295,A=C+(R<<5&4294967295|R>>>27),R=V+(C^x&(A^C))+k[10]+38016083&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(V^A))+k[15]+3634488961&4294967295,x=V+(R<<14&4294967295|R>>>18),R=C+(V^A&(x^V))+k[4]+3889429448&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(x^V&(C^x))+k[9]+568446438&4294967295,A=C+(R<<5&4294967295|R>>>27),R=V+(C^x&(A^C))+k[14]+3275163606&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(V^A))+k[3]+4107603335&4294967295,x=V+(R<<14&4294967295|R>>>18),R=C+(V^A&(x^V))+k[8]+1163531501&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(x^V&(C^x))+k[13]+2850285829&4294967295,A=C+(R<<5&4294967295|R>>>27),R=V+(C^x&(A^C))+k[2]+4243563512&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(V^A))+k[7]+1735328473&4294967295,x=V+(R<<14&4294967295|R>>>18),R=C+(V^A&(x^V))+k[12]+2368359562&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(C^x^V)+k[5]+4294588738&4294967295,A=C+(R<<4&4294967295|R>>>28),R=V+(A^C^x)+k[8]+2272392833&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^C)+k[11]+1839030562&4294967295,x=V+(R<<16&4294967295|R>>>16),R=C+(x^V^A)+k[14]+4259657740&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(C^x^V)+k[1]+2763975236&4294967295,A=C+(R<<4&4294967295|R>>>28),R=V+(A^C^x)+k[4]+1272893353&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^C)+k[7]+4139469664&4294967295,x=V+(R<<16&4294967295|R>>>16),R=C+(x^V^A)+k[10]+3200236656&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(C^x^V)+k[13]+681279174&4294967295,A=C+(R<<4&4294967295|R>>>28),R=V+(A^C^x)+k[0]+3936430074&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^C)+k[3]+3572445317&4294967295,x=V+(R<<16&4294967295|R>>>16),R=C+(x^V^A)+k[6]+76029189&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(C^x^V)+k[9]+3654602809&4294967295,A=C+(R<<4&4294967295|R>>>28),R=V+(A^C^x)+k[12]+3873151461&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^C)+k[15]+530742520&4294967295,x=V+(R<<16&4294967295|R>>>16),R=C+(x^V^A)+k[2]+3299628645&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(x^(C|~V))+k[0]+4096336452&4294967295,A=C+(R<<6&4294967295|R>>>26),R=V+(C^(A|~x))+k[7]+1126891415&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~C))+k[14]+2878612391&4294967295,x=V+(R<<15&4294967295|R>>>17),R=C+(V^(x|~A))+k[5]+4237533241&4294967295,C=x+(R<<21&4294967295|R>>>11),R=A+(x^(C|~V))+k[12]+1700485571&4294967295,A=C+(R<<6&4294967295|R>>>26),R=V+(C^(A|~x))+k[3]+2399980690&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~C))+k[10]+4293915773&4294967295,x=V+(R<<15&4294967295|R>>>17),R=C+(V^(x|~A))+k[1]+2240044497&4294967295,C=x+(R<<21&4294967295|R>>>11),R=A+(x^(C|~V))+k[8]+1873313359&4294967295,A=C+(R<<6&4294967295|R>>>26),R=V+(C^(A|~x))+k[15]+4264355552&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~C))+k[6]+2734768916&4294967295,x=V+(R<<15&4294967295|R>>>17),R=C+(V^(x|~A))+k[13]+1309151649&4294967295,C=x+(R<<21&4294967295|R>>>11),R=A+(x^(C|~V))+k[4]+4149444226&4294967295,A=C+(R<<6&4294967295|R>>>26),R=V+(C^(A|~x))+k[11]+3174756917&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~C))+k[2]+718787259&4294967295,x=V+(R<<15&4294967295|R>>>17),R=C+(V^(x|~A))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+A&4294967295,D.g[1]=D.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,D.g[2]=D.g[2]+x&4294967295,D.g[3]=D.g[3]+V&4294967295}s.prototype.u=function(D,A){A===void 0&&(A=D.length);for(var C=A-this.blockSize,k=this.B,x=this.h,V=0;V<A;){if(x==0)for(;V<=C;)o(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<A;)if(k[x++]=D.charCodeAt(V++),x==this.blockSize){o(this,k),x=0;break}}else for(;V<A;)if(k[x++]=D[V++],x==this.blockSize){o(this,k),x=0;break}}this.h=x,this.o+=A},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var A=1;A<D.length-8;++A)D[A]=0;var C=8*this.o;for(A=D.length-8;A<D.length;++A)D[A]=C&255,C/=256;for(this.u(D),D=Array(16),A=C=0;4>A;++A)for(var k=0;32>k;k+=8)D[C++]=this.g[A]>>>k&255;return D};function l(D,A){var C=f;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=A(D)}function h(D,A){this.h=A;for(var C=[],k=!0,x=D.length-1;0<=x;x--){var V=D[x]|0;k&&V==A||(C[x]=V,k=!1)}this.g=C}var f={};function g(D){return-128<=D&&128>D?l(D,function(A){return new h([A|0],0>A?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return M(v(-D));for(var A=[],C=1,k=0;D>=C;k++)A[k]=D/C|0,C*=4294967296;return new h(A,0)}function E(D,A){if(D.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(D.charAt(0)=="-")return M(E(D.substring(1),A));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=v(Math.pow(A,8)),k=T,x=0;x<D.length;x+=8){var V=Math.min(8,D.length-x),R=parseInt(D.substring(x,x+V),A);8>V?(V=v(Math.pow(A,V)),k=k.j(V).add(v(R))):(k=k.j(C),k=k.add(v(R)))}return k}var T=g(0),I=g(1),F=g(16777216);r=h.prototype,r.m=function(){if($(this))return-M(this).m();for(var D=0,A=1,C=0;C<this.g.length;C++){var k=this.i(C);D+=(0<=k?k:4294967296+k)*A,A*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(B(this))return"0";if($(this))return"-"+M(this).toString(D);for(var A=v(Math.pow(D,6)),C=this,k="";;){var x=de(C,A).g;C=ne(C,x.j(A));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=x,B(C))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function B(D){if(D.h!=0)return!1;for(var A=0;A<D.g.length;A++)if(D.g[A]!=0)return!1;return!0}function $(D){return D.h==-1}r.l=function(D){return D=ne(this,D),$(D)?-1:B(D)?0:1};function M(D){for(var A=D.g.length,C=[],k=0;k<A;k++)C[k]=~D.g[k];return new h(C,~D.h).add(I)}r.abs=function(){return $(this)?M(this):this},r.add=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0,x=0;x<=A;x++){var V=k+(this.i(x)&65535)+(D.i(x)&65535),R=(V>>>16)+(this.i(x)>>>16)+(D.i(x)>>>16);k=R>>>16,V&=65535,R&=65535,C[x]=R<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ne(D,A){return D.add(M(A))}r.j=function(D){if(B(this)||B(D))return T;if($(this))return $(D)?M(this).j(M(D)):M(M(this).j(D));if($(D))return M(this.j(M(D)));if(0>this.l(F)&&0>D.l(F))return v(this.m()*D.m());for(var A=this.g.length+D.g.length,C=[],k=0;k<2*A;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var x=0;x<D.g.length;x++){var V=this.i(k)>>>16,R=this.i(k)&65535,nt=D.i(x)>>>16,xt=D.i(x)&65535;C[2*k+2*x]+=R*xt,re(C,2*k+2*x),C[2*k+2*x+1]+=V*xt,re(C,2*k+2*x+1),C[2*k+2*x+1]+=R*nt,re(C,2*k+2*x+1),C[2*k+2*x+2]+=V*nt,re(C,2*k+2*x+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new h(C,0)};function re(D,A){for(;(D[A]&65535)!=D[A];)D[A+1]+=D[A]>>>16,D[A]&=65535,A++}function te(D,A){this.g=D,this.h=A}function de(D,A){if(B(A))throw Error("division by zero");if(B(D))return new te(T,T);if($(D))return A=de(M(D),A),new te(M(A.g),M(A.h));if($(A))return A=de(D,M(A)),new te(M(A.g),A.h);if(30<D.g.length){if($(D)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var C=I,k=A;0>=k.l(D);)C=Ne(C),k=Ne(k);var x=Ie(C,1),V=Ie(k,1);for(k=Ie(k,2),C=Ie(C,2);!B(k);){var R=V.add(k);0>=R.l(D)&&(x=x.add(C),V=R),k=Ie(k,1),C=Ie(C,1)}return A=ne(D,x.j(A)),new te(x,A)}for(x=T;0<=D.l(A);){for(C=Math.max(1,Math.floor(D.m()/A.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=v(C),R=V.j(A);$(R)||0<R.l(D);)C-=k,V=v(C),R=V.j(A);B(V)&&(V=I),x=x.add(V),D=ne(D,R)}return new te(x,D)}r.A=function(D){return de(this,D).h},r.and=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)&D.i(k);return new h(C,this.h&D.h)},r.or=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)|D.i(k);return new h(C,this.h|D.h)},r.xor=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)^D.i(k);return new h(C,this.h^D.h)};function Ne(D){for(var A=D.g.length+1,C=[],k=0;k<A;k++)C[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(C,D.h)}function Ie(D,A){var C=A>>5;A%=32;for(var k=D.g.length-C,x=[],V=0;V<k;V++)x[V]=0<A?D.i(V+C)>>>A|D.i(V+C+1)<<32-A:D.i(V+C);return new h(x,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,p_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,wi=h}).apply(typeof ly<"u"?ly:typeof self<"u"?self:typeof window<"u"?window:{});var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m_,za,g_,Qu,Yd,y_,v_,__;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uu=="object"&&Uu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,L={next:function(){if(!w&&y<u.length){var z=y++;return{value:p(z,u[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function v(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function I(u,p,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,I.apply(null,arguments)}function F(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function B(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,L,z){for(var Z=Array(arguments.length-2),je=2;je<arguments.length;je++)Z[je-2]=arguments[je];return p.prototype[L].apply(w,Z)}}function $(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function M(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const L=u.length||0,z=w.length||0;u.length=L+z;for(let Z=0;Z<z;Z++)u[L+Z]=w[Z]}else u.push(w)}}class ne{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function re(u){return/^[\s\xa0]*$/.test(u)}function te(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function de(u){return de[" "](u),u}de[" "]=function(){};var Ne=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Ie(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function D(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function A(u){const p={};for(const y in u)p[y]=u[y];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let z=0;z<C.length;z++)y=C[z],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function x(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function V(u){f.setTimeout(()=>{throw u},0)}function R(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class nt{constructor(){this.h=this.g=null}add(p,y){const w=xt.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var xt=new ne(()=>new Ot,u=>u.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ee=!1,me=new nt,oe=()=>{const u=f.Promise.resolve(void 0);ze=()=>{u.then(O)}};var O=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){V(y)}var p=xt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Re(u,p){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ne){e:{try{de(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}B(Re,fe);var xe={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++Fe,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function cr(u){this.src=u,this.g={},this.h=0}cr.prototype.add=function(u,p,y,w,L){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var Z=Ur(u,p,w,L);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new $e(p,this.src,z,!!w,L),p.fa=y,u.push(p)),p};function Ss(u,p){var y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),z;(z=0<=L)&&Array.prototype.splice.call(w,L,1),z&&(_t(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Ur(u,p,y,w){for(var L=0;L<u.length;++L){var z=u[L];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==w)return L}return-1}var Vi="closure_lm_"+(1e6*Math.random()|0),As={};function Wo(u,p,y,w,L){if(Array.isArray(p)){for(var z=0;z<p.length;z++)Wo(u,p[z],y,w,L);return null}return y=Ko(y),u&&u[be]?u.K(p,y,v(w)?!!w.capture:!1,L):Ho(u,p,y,!1,w,L)}function Ho(u,p,y,w,L,z){if(!p)throw Error("Invalid event type");var Z=v(L)?!!L.capture:!!L,je=Cs(u);if(je||(u[Vi]=je=new cr(u)),y=je.add(p,y,w,Z,z),y.proxy)return y;if(w=Tl(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Se||(L=Z),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(dr(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Tl(){function u(y){return p.call(u.src,u.listener,y)}const p=qo;return u}function Rs(u,p,y,w,L){if(Array.isArray(p))for(var z=0;z<p.length;z++)Rs(u,p[z],y,w,L);else w=v(w)?!!w.capture:!!w,y=Ko(y),u&&u[be]?(u=u.i,p=String(p).toString(),p in u.g&&(z=u.g[p],y=Ur(z,y,w,L),-1<y&&(_t(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[p],u.h--)))):u&&(u=Cs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Ur(p,y,w,L)),(y=-1<u?p[u]:null)&&hr(y))}function hr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[be])Ss(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(dr(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Cs(p))?(Ss(y,u),y.h==0&&(y.src=null,p[Vi]=null)):_t(u)}}}function dr(u){return u in As?As[u]:As[u]="on"+u}function qo(u,p){if(u.da)u=!0;else{p=new Re(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&hr(u),u=y.call(w,p)}return u}function Cs(u){return u=u[Vi],u instanceof cr?u:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ko(u){return typeof u=="function"?u:(u[Ps]||(u[Ps]=function(p){return u.handleEvent(p)}),u[Ps])}function dt(){H.call(this),this.i=new cr(this),this.M=this,this.F=null}B(dt,H),dt.prototype[be]=!0,dt.prototype.removeEventListener=function(u,p,y,w){Rs(this,u,p,y,w)};function ft(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new fe(p,u);else if(p instanceof fe)p.target=p.target||u;else{var L=p;p=new fe(w,u),k(p,L)}if(L=!0,y)for(var z=y.length-1;0<=z;z--){var Z=p.g=y[z];L=fr(Z,w,!0,p)&&L}if(Z=p.g=u,L=fr(Z,w,!0,p)&&L,L=fr(Z,w,!1,p)&&L,y)for(z=0;z<y.length;z++)Z=p.g=y[z],L=fr(Z,w,!1,p)&&L}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)_t(y[w]);delete u.g[p],u.h--}}this.F=null},dt.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},dt.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function fr(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,z=0;z<p.length;++z){var Z=p[z];if(Z&&!Z.da&&Z.capture==y){var je=Z.listener,pt=Z.ha||Z.src;Z.fa&&Ss(u.i,Z),L=je.call(pt,w)!==!1&&L}}return L&&!w.defaultPrevented}function Go(u,p,y){if(typeof u=="function")y&&(u=I(u,y));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function jr(u){u.g=Go(()=>{u.g=null,u.i&&(u.i=!1,jr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Li extends H{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:jr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mi(u){H.call(this),this.h=u,this.g={}}B(Mi,H);var Qo=[];function Yo(u){Ie(u.g,function(p,y){this.g.hasOwnProperty(y)&&hr(p)},u),u.g={}}Mi.prototype.N=function(){Mi.aa.N.call(this),Yo(this)},Mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=f.JSON.stringify,Xo=f.JSON.parse,Zo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function bi(){}bi.prototype.h=null;function ks(u){return u.h||(u.h=u.i())}function Ns(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){fe.call(this,"d")}B(Hn,fe);function Ds(){fe.call(this,"c")}B(Ds,fe);var qn={},ea=null;function Fi(){return ea=ea||new dt}qn.La="serverreachability";function ta(u){fe.call(this,qn.La,u)}B(ta,fe);function pr(u){const p=Fi();ft(p,new ta(p))}qn.STAT_EVENT="statevent";function na(u,p){fe.call(this,qn.STAT_EVENT,u),this.stat=p}B(na,fe);function rt(u){const p=Fi();ft(p,new na(p,u))}qn.Ma="timingevent";function xs(u,p){fe.call(this,qn.Ma,u),this.size=p}B(xs,fe);function In(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Ui(){this.g=!0}Ui.prototype.xa=function(){this.g=!1};function ji(u,p,y,w,L,z){u.info(function(){if(u.g)if(z)for(var Z="",je=z.split("&"),pt=0;pt<je.length;pt++){var Oe=je[pt].split("=");if(1<Oe.length){var Et=Oe[0];Oe=Oe[1];var lt=Et.split("_");Z=2<=lt.length&&lt[1]=="type"?Z+(Et+"="+Oe+"&"):Z+(Et+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+Z})}function Os(u,p,y,w,L,z,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+z+" "+Z})}function Sn(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Gc(u,y)+(w?" "+w:"")})}function ra(u,p){u.info(function(){return"TIMEOUT: "+p})}Ui.prototype.info=function(){};function Gc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var z=L[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return Jo(y)}catch{return p}}var Vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Il={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},An;function zi(){}B(zi,bi),zi.prototype.g=function(){return new XMLHttpRequest},zi.prototype.i=function(){return{}},An=new zi;function Rn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new Mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sl}function Sl(){this.i=null,this.g="",this.h=!1}var ia={},Ls={};function Ms(u,p,y){u.L=1,u.v=Hr(rn(p)),u.m=y,u.P=!0,sa(u,null)}function sa(u,p){u.F=Date.now(),We(u),u.A=rn(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Kr(y.i,"t",w),u.C=0,y=u.j.J,u.h=new Sl,u.g=Bl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Li(I(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Qo[0]=L.toString()),L=Qo);for(var z=0;z<L.length;z++){var Z=Wo(y,L[z],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),pr(),ji(u.i,u.u,u.A,u.l,u.R,u.m)}Rn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Gt(u)==3?p.j():this.Y(u)},Rn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Gt(this.g);var p=this.g.Ba();const pn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||lt!=4||p==7||(p==8||0>=pn?pr(3):pr(2)),Bi(this);var y=this.g.Z();this.X=y;t:if(Al(this)){var w=ha(this.g);u="";var L=w.length,z=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),zr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(z&&p==L-1)});w.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,Os(this.i,this.u,this.A,this.l,this.R,lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,pt=this.g;if((je=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(je)){var Oe=je;break t}}Oe=null}if(y=Oe)Sn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,y);else{this.o=!1,this.s=3,rt(12),dn(this),zr(this);break e}}if(this.P){y=!0;let on;for(;!this.J&&this.C<Z.length;)if(on=Qc(this,Z),on==Ls){lt==4&&(this.s=4,rt(14),y=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(on==ia){this.s=4,rt(15),Sn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Sn(this.i,this.l,on,null),oa(this,on);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||Z.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)Sn(this.i,this.l,Z,"[Invalid Chunked Response]"),dn(this),zr(this);else if(0<Z.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),fa(Et),Et.M=!0,rt(11))}}else Sn(this.i,this.l,Z,null),oa(this,Z);lt==4&&dn(this),this.o&&!this.J&&(lt==4?Ks(this.j,this):(this.o=!1,We(this)))}else Bs(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),dn(this),zr(this)}}}catch{}finally{}};function Al(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Qc(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Ls:(y=Number(p.substring(y,w)),isNaN(y)?ia:(w+=1,w+y>p.length?Ls:(p=p.slice(w,w+y),u.C=w+y,p)))}Rn.prototype.cancel=function(){this.J=!0,dn(this)};function We(u){u.S=Date.now()+u.I,Rl(u,u.I)}function Rl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=In(I(u.ba,u),p)}function Bi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Rn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ra(this.i,this.A),this.L!=2&&(pr(),rt(17)),dn(this),this.s=2,zr(this)):Rl(this,this.S-u)};function zr(u){u.j.G==0||u.J||Ks(u.j,u)}function dn(u){Bi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Yo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function oa(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)qs(y),Dn(y);else break e;Hs(y),rt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=In(I(y.Za,y),6e3));if(1>=Pl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else _r(y,11)}else if((u.K||y.g==u)&&qs(y),!re(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Oe=L[p];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const Et=Oe[3];Et!=null&&(y.la=Et,y.j.info("VER="+y.la));const lt=Oe[4];lt!=null&&(y.Aa=lt,y.j.info("SVER="+y.Aa));const pn=Oe[5];pn!=null&&typeof pn=="number"&&0<pn&&(w=1.5*pn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const on=u.g;if(on){const Qi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var z=w.h;z.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(aa(z,z.h),z.h=null))}if(w.D){const Qs=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(w.ya=Qs,Be(w.I,w.D,Qs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var Z=u;if(w.qa=zl(w,w.J?w.ia:null,w.W),Z.K){kl(w.h,Z);var je=Z,pt=w.L;pt&&(je.I=pt),je.B&&(Bi(je),We(je)),w.g=Z}else Gi(w);0<y.i.length&&Yn(y)}else Oe[0]!="stop"&&Oe[0]!="close"||_r(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?_r(y,7):Pt(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}pr(4)}catch{}}var Cl=class{constructor(u,p){this.g=u,this.map=p}};function $i(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Pl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function aa(u,p){u.g?u.g.add(p):u.h=p}function kl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}$i.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Nl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return $(u.i)}function bs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function Fs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function Br(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Fs(u),w=bs(u),L=w.length,z=0;z<L;z++)p.call(void 0,w[z],y&&y[z],u)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),L=null;if(0<=w){var z=u[y].substring(0,w);L=u[y].substring(w+1)}else z=u[y];p(z,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function mr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof mr){this.h=u.h,Hi(this,u.j),this.o=u.o,this.g=u.g,$r(this,u.s),this.l=u.l;var p=u.i,y=new Kn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Wr(this,y),this.m=u.m}else u&&(p=String(u).match(Wi))?(this.h=!1,Hi(this,p[1]||"",!0),this.o=De(p[2]||""),this.g=De(p[3]||"",!0),$r(this,p[4]),this.l=De(p[5]||"",!0),Wr(this,p[6]||"",!0),this.m=De(p[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}mr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(qr(p,Us,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(qr(p,Us,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(qr(y,y.charAt(0)=="/"?Ol:xl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",qr(y,la)),u.join("")};function rn(u){return new mr(u)}function Hi(u,p,y){u.j=y?De(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function $r(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Wr(u,p,y){p instanceof Kn?(u.i=p,Gn(u.i,u.h)):(y||(p=qr(p,Vl)),u.i=new Kn(p,u.h))}function Be(u,p,y){u.i.set(p,y)}function Hr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function De(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function qr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Dl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Dl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Us=/[#\/\?@]/g,xl=/[#\?:]/g,Ol=/[#\?]/g,Vl=/[#\?@]/g,la=/#/g;function Kn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Ct(u){u.g||(u.g=new Map,u.h=0,u.i&&Yc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Kn.prototype,r.add=function(u,p){Ct(this),this.i=null,u=fn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Cn(u,p){Ct(u),p=fn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Pn(u,p){return Ct(u),p=fn(u,p),u.g.has(p)}r.forEach=function(u,p){Ct(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)},r.na=function(){Ct(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const L=u[w];for(let z=0;z<L.length;z++)y.push(p[w])}return y},r.V=function(u){Ct(this);let p=[];if(typeof u=="string")Pn(this,u)&&(p=p.concat(this.g.get(fn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return Ct(this),this.i=null,u=fn(this,u),Pn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Kr(u,p,y){Cn(u,p),0<y.length&&(u.i=null,u.g.set(fn(u,p),$(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const z=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var L=z;Z[w]!==""&&(L+="="+encodeURIComponent(String(Z[w]))),u.push(L)}}return this.i=u.join("&")};function fn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Gn(u,p){p&&!u.j&&(Ct(u),u.i=null,u.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(Cn(this,w),Kr(this,L,y))},u)),u.j=p}function Jc(u,p){const y=new Ui;if(f.Image){const w=new Image;w.onload=F(Kt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=F(Kt,y,"TestLoadImage: error",!1,p,w),w.onabort=F(Kt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=F(Kt,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Ll(u,p){const y=new Ui,w=new AbortController,L=setTimeout(()=>{w.abort(),Kt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(z=>{clearTimeout(L),z.ok?Kt(y,"TestPingServer: ok",!0,p):Kt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Kt(y,"TestPingServer: error",!1,p)})}function Kt(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Xc(){this.g=new Zo}function Ml(u,p,y){const w=y||"";try{Br(u,function(L,z){let Z=L;v(L)&&(Z=Jo(L)),p.push(w+z+"="+encodeURIComponent(Z))})}catch(L){throw p.push(w+"type="+encodeURIComponent("_badmap")),L}}function gr(u){this.l=u.Ub||null,this.j=u.eb||!1}B(gr,bi),gr.prototype.g=function(){return new qi(this.l,this.j)},gr.prototype.i=(function(u){return function(){return u}})({});function qi(u,p){dt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(qi,dt),r=qi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Nn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function bl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?kn(this):Nn(this),this.readyState==3&&bl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,kn(this))},r.Qa=function(u){this.g&&(this.response=u,kn(this))},r.ga=function(){this.g&&kn(this)};function kn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Nn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Nn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function yr(u){let p="";return Ie(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Gr(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=yr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Be(u,p,y))}function Ye(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ye,dt);var Zc=/^https?$/i,ua=["POST","PUT"];r=Ye.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():An.g(),this.v=this.o?ks(this.o):ks(An),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){Ki(this,z);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())y.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ua,p,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of y)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zs(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){Ki(this,z)}};function Ki(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,js(u),sn(u)}function js(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),sn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Ye.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},r.bb=function(){ca(this)};function ca(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Go(u.Ea,0,u);else if(ft(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=Z===0){var L=String(u.D).match(Wi)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),w=!Zc.test(L?L.toLowerCase():"")}y=w}if(y)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var z=2<Gt(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",js(u)}}finally{sn(u)}}}}function sn(u,p){if(u.g){zs(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ft(u,"ready");try{y.onreadystatechange=w}catch{}}}function zs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Xo(p)}};function ha(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Bs(u){const p={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(re(u[w]))continue;var y=x(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[L]||[];p[L]=z,z.push(y)}D(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function da(u){this.Aa=0,this.i=[],this.j=new Ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,u),this.cb=Qn("retryDelaySeedMs",1e4,u),this.Wa=Qn("forwardChannelMaxRetries",2,u),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new $i(u&&u.concurrentRequestLimit),this.Da=new Xc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=da.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,w){rt(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=zl(this,null,this.W),Yn(this)};function Pt(u){if($s(u),u.G==3){var p=u.U++,y=rn(u.I);if(Be(y,"SID",u.K),Be(y,"RID",p),Be(y,"TYPE","terminate"),vr(u,y),p=new Rn(u,u.j,p),p.L=2,p.v=Hr(rn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Bl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),We(p)}jl(u)}function Dn(u){u.g&&(fa(u),u.g.cancel(),u.g=null)}function $s(u){Dn(u),u.u&&(f.clearTimeout(u.u),u.u=null),qs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Yn(u){if(!nn(u.h)&&!u.s){u.s=!0;var p=u.Ga;ze||oe(),ee||(ze(),ee=!0),me.add(p,u),u.B=0}}function eh(u,p){return Pl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=In(I(u.Ga,u,p),Ul(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Rn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=A(z),k(z,this.S)):z=this.S),this.m!==null||this.O||(L.H=z,z=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Qr(this,L,p),y=rn(this.I),Be(y,"RID",u),Be(y,"CVER",22),this.D&&Be(y,"X-HTTP-Session-Id",this.D),vr(this,y),z&&(this.O?p="headers="+encodeURIComponent(String(yr(z)))+"&"+p:this.m&&Gr(y,this.m,z)),aa(this.h,L),this.Ua&&Be(y,"TYPE","init"),this.P?(Be(y,"$req",p),Be(y,"SID","null"),L.T=!0,Ms(L,y,null)):Ms(L,y,p),this.G=2}}else this.G==3&&(u?Ws(this,u):this.i.length==0||nn(this.h)||Ws(this))};function Ws(u,p){var y;p?y=p.l:y=u.U++;const w=rn(u.I);Be(w,"SID",u.K),Be(w,"RID",y),Be(w,"AID",u.T),vr(u,w),u.m&&u.o&&Gr(w,u.m,u.o),y=new Rn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Qr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),aa(u.h,y),Ms(y,w,p)}function vr(u,p){u.H&&Ie(u.H,function(y,w){Be(p,w,y)}),u.l&&Br({},function(y,w){Be(p,w,y)})}function Qr(u,p,y){y=Math.min(u.i.length,y);var w=u.l?I(u.l.Na,u.l,u):null;e:{var L=u.i;let z=-1;for(;;){const Z=["count="+y];z==-1?0<y?(z=L[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let je=!0;for(let pt=0;pt<y;pt++){let Oe=L[pt].g;const Et=L[pt].map;if(Oe-=z,0>Oe)z=Math.max(0,L[pt].g-100),je=!1;else try{Ml(Et,Z,"req"+Oe+"_")}catch{w&&w(Et)}}if(je){w=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function Gi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ze||oe(),ee||(ze(),ee=!0),me.add(p,u),u.v=0}}function Hs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=In(I(u.Fa,u),Ul(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=In(I(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Dn(this),Fl(this))};function fa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Fl(u){u.g=new Rn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=rn(u.qa);Be(p,"RID","rpc"),Be(p,"SID",u.K),Be(p,"AID",u.T),Be(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(p,"TO",u.ja),Be(p,"TYPE","xmlhttp"),vr(u,p),u.m&&u.o&&Gr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Hr(rn(p)),y.m=null,y.P=!0,sa(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Dn(this),Hs(this),rt(19))};function qs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Ks(u,p){var y=null;if(u.g==p){qs(u),fa(u),u.g=null;var w=2}else if(Bt(u.h,p))y=p.D,kl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;w=Fi(),ft(w,new xs(w,y)),Yn(u)}else Gi(u);else if(L=p.s,L==3||L==0&&0<p.X||!(w==1&&eh(u,p)||w==2&&Hs(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:_r(u,5);break;case 4:_r(u,10);break;case 3:_r(u,6);break;default:_r(u,2)}}}function Ul(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function _r(u,p){if(u.j.info("Error code "+p),p==2){var y=I(u.fb,u),w=u.Xa;const L=!w;w=new mr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Hi(w,"https"),Hr(w),L?Jc(w.toString(),y):Ll(w.toString(),y)}else rt(2);u.G=0,u.l&&u.l.sa(p),jl(u),$s(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function jl(u){if(u.G=0,u.ka=[],u.l){const p=Nl(u.h);(p.length!=0||u.i.length!=0)&&(M(u.ka,p),M(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function zl(u,p,y){var w=y instanceof mr?rn(y):new mr(y);if(w.g!="")p&&(w.g=p+"."+w.g),$r(w,w.s);else{var L=f.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var z=new mr(null);w&&Hi(z,w),p&&(z.g=p),L&&$r(z,L),y&&(z.l=y),w=z}return y=u.D,p=u.ya,y&&p&&Be(w,y,p),Be(w,"VER",u.la),vr(u,w),w}function Bl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ye(new gr({eb:y})):new Ye(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}r=pa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Gs(){}Gs.prototype.g=function(u,p){return new $t(u,p)};function $t(u,p){dt.call(this),this.g=new da(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!re(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!re(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Jn(this)}B($t,dt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Pt(this.g)},$t.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Jo(u),u=y);p.i.push(new Cl(p.Ya++,u)),p.G==3&&Yn(p)},$t.prototype.N=function(){this.g.l=null,delete this.j,Pt(this.g),delete this.g,$t.aa.N.call(this)};function $l(u){Hn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}B($l,Hn);function Wl(){Ds.call(this),this.status=1}B(Wl,Ds);function Jn(u){this.g=u}B(Jn,pa),Jn.prototype.ua=function(){ft(this.g,"a")},Jn.prototype.ta=function(u){ft(this.g,new $l(u))},Jn.prototype.sa=function(u){ft(this.g,new Wl)},Jn.prototype.ra=function(){ft(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,__=function(){return new Gs},v_=function(){return Fi()},y_=qn,Yd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,Qu=Vs,Il.COMPLETE="complete",g_=Il,Ns.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,za=Ns,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,m_=Ye}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});const uy="@firebase/firestore",cy="4.8.0";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Uo="11.10.0";/**
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
 */const gs=new Ef("@firebase/firestore");function yo(){return gs.logLevel}function se(r,...e){if(gs.logLevel<=Pe.DEBUG){const t=e.map(xf);gs.debug(`Firestore (${Uo}): ${r}`,...t)}}function Vr(r,...e){if(gs.logLevel<=Pe.ERROR){const t=e.map(xf);gs.error(`Firestore (${Uo}): ${r}`,...t)}}function Lr(r,...e){if(gs.logLevel<=Pe.WARN){const t=e.map(xf);gs.warn(`Firestore (${Uo}): ${r}`,...t)}}function xf(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function _e(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,E_(r,s,t)}function E_(r,e,t){let s=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Vr(s),new Error(s)}function Ue(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||E_(e,o,s)}function Te(r,e){return r}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class w_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class TA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class IA{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ti,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ti)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new w_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class SA{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AA{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new SA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new hy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new hy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function CA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function I_(){return new TextEncoder}/**
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
 */class Pc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=CA(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ae(r,e){return r<e?-1:r>e?1:0}function Jd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ae(s,o);{const l=I_(),h=PA(l.encode(dy(r,t)),l.encode(dy(e,t)));return h!==0?h:Ae(s,o)}}t+=s>65535?2:1}return Ae(r.length,e.length)}function dy(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function PA(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ae(r[t],e[t]);return Ae(r.length,e.length)}function Po(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const fy="__name__";class nr{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=nr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const s=nr.isNumericId(e),o=nr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?nr.extractNumericId(e).compare(nr.extractNumericId(t)):Jd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wi.fromString(e.substring(4,e.length-2))}}class Qe extends nr{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const kA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends nr{construct(e,t,s){return new At(e,t,s)}static isValidIdentifier(e){return kA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fy}static keyField(){return new At([fy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ce(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ce(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ce(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ce(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(t)}static emptyPath(){return new At([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Qe.fromString(e))}static fromName(e){return new pe(Qe.fromString(e).popFirst(5))}static empty(){return new pe(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Qe(e.slice()))}}/**
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
 */function S_(r,e,t){if(!t)throw new ce(q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function A_(r,e,t,s){if(e===!0&&s===!0)throw new ce(q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function py(r){if(!pe.isDocumentKey(r))throw new ce(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function my(r){if(pe.isDocumentKey(r))throw new ce(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function R_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Of(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function jn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ce(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Of(r);throw new ce(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ht(r,e){const t={typeString:r};return e&&(t.value=e),t}function gl(r,e){if(!R_(r))throw new ce(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ce(q.INVALID_ARGUMENT,t);return!0}/**
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
 */const gy=-62135596800,yy=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*yy);return new qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gy)throw new ce(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yy}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gl(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:ht("string",qe._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new qe(0,0))}static max(){return new we(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const nl=-1;function NA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new qe(t+1,0):new qe(t,s));return new Si(o,pe.empty(),e)}function DA(r){return new Si(r.readTime,r.key,nl)}class Si{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Si(we.min(),pe.empty(),nl)}static max(){return new Si(we.max(),pe.empty(),nl)}}function xA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:Ae(r.largestBatchId,e.largestBatchId))}/**
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
 */const OA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function jo(r){if(r.code!==q.FAILED_PRECONDITION||r.message!==OA)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,s)=>{t(e)}))}static reject(e){return new W(((t,s)=>{s(e)}))}static waitFor(e){return new W(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next((o=>o?W.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new W(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next((E=>{h[v]=E,++f,f===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new W(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function LA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class kc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}kc.ue=-1;/**
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
 */const Vf=-1;function Nc(r){return r==null}function cc(r){return r===0&&1/r==-1/0}function MA(r){return typeof r=="number"&&Number.isInteger(r)&&!cc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const C_="";function bA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=vy(e)),e=FA(r.get(t),e);return vy(e)}function FA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case C_:t+="";break;default:t+=l}}return t}function vy(r){return r+C_+""}/**
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
 */function _y(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Es(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function P_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ju(this.root,e,this.comparator,!0)}}class ju{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=l??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ey(this.data.getIterator())}getIteratorFrom(e){return new Ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new Un([])}unionWith(e){let t=new vt(At.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class k_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new k_("Invalid base64 string: "+l):l}})(e);return new Rt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const UA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=UA.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ri(r){return typeof r=="string"?Rt.fromBase64String(r):Rt.fromUint8Array(r)}/**
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
 */const N_="server_timestamp",D_="__type__",x_="__previous_value__",O_="__local_write_time__";function Lf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[D_])===null||t===void 0?void 0:t.stringValue)===N_}function Dc(r){const e=r.mapValue.fields[x_];return Lf(e)?Dc(e):e}function rl(r){const e=Ai(r.mapValue.fields[O_].timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class jA{constructor(e,t,s,o,l,h,f,g,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=E}}const hc="(default)";class ko{constructor(e,t){this.projectId=e,this.database=t||hc}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database===hc}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const V_="__type__",zA="__max__",zu={mapValue:{}},L_="__vector__",dc="value";function Ci(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Lf(r)?4:$A(r)?9007199254740991:BA(r)?10:11:_e(28295,{value:r})}function lr(r,e){if(r===e)return!0;const t=Ci(r);if(t!==Ci(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return rl(r).isEqual(rl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ai(o.timestampValue),f=Ai(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ri(o.bytesValue).isEqual(Ri(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?cc(h)===cc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Po(r.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(_y(h)!==_y(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!lr(h[g],f[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function il(r,e){return(r.values||[]).find((t=>lr(t,e)))!==void 0}function No(r,e){if(r===e)return 0;const t=Ci(r),s=Ci(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=st(l.integerValue||l.doubleValue),g=st(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return wy(r.timestampValue,e.timestampValue);case 4:return wy(rl(r),rl(e));case 5:return Jd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Ri(l),g=Ri(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let v=0;v<f.length&&v<g.length;v++){const E=Ae(f[v],g[v]);if(E!==0)return E}return Ae(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ae(st(l.latitude),st(h.latitude));return f!==0?f:Ae(st(l.longitude),st(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Ty(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,v,E;const T=l.fields||{},I=h.fields||{},F=(f=T[dc])===null||f===void 0?void 0:f.arrayValue,B=(g=I[dc])===null||g===void 0?void 0:g.arrayValue,$=Ae(((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0,((E=B==null?void 0:B.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:Ty(F,B)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===zu.mapValue&&h===zu.mapValue)return 0;if(l===zu.mapValue)return 1;if(h===zu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),v=h.fields||{},E=Object.keys(v);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const I=Jd(g[T],E[T]);if(I!==0)return I;const F=No(f[g[T]],v[E[T]]);if(F!==0)return F}return Ae(g.length,E.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function wy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ae(r,e);const t=Ai(r),s=Ai(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function Ty(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=No(t[o],s[o]);if(l)return l}return Ae(t.length,s.length)}function Do(r){return Xd(r)}function Xd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ai(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ri(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return pe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Xd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Xd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function Yu(r){switch(Ci(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dc(r);return e?16+Yu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ri(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Yu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Es(s.fields,((l,h)=>{o+=l.length+Yu(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Zd(r){return!!r&&"integerValue"in r}function Mf(r){return!!r&&"arrayValue"in r}function Iy(r){return!!r&&"nullValue"in r}function Sy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ju(r){return!!r&&"mapValue"in r}function BA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[V_])===null||t===void 0?void 0:t.stringValue)===L_}function qa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Es(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=qa(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qa(r.arrayValue.values[t]);return e}return Object.assign({},r)}function $A(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===zA}/**
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
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ju(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qa(t)}setAll(e){let t=At.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=qa(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Ju(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Ju(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Es(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new Tn(qa(this.value))}}function M_(r){const e=[];return Es(r.fields,((t,s)=>{const o=new At([t]);if(Ju(s)){const l=M_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Un(e)}/**
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
 */class jt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new jt(e,0,we.min(),we.min(),we.min(),Tn.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,we.min(),we.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,we.min(),we.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fc{constructor(e,t){this.position=e,this.inclusive=t}}function Ay(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=No(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ry(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!lr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class pc{constructor(e,t="asc"){this.field=e,this.dir=t}}function WA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class b_{}class yt extends b_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new qA(e,t,s):t==="array-contains"?new QA(e,s):t==="in"?new YA(e,s):t==="not-in"?new JA(e,s):t==="array-contains-any"?new XA(e,s):new yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new KA(e,s):new GA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(No(t,this.value)):t!==null&&Ci(this.value)===Ci(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends b_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ur(e,t)}matches(e){return F_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function F_(r){return r.op==="and"}function U_(r){return HA(r)&&F_(r)}function HA(r){for(const e of r.filters)if(e instanceof ur)return!1;return!0}function ef(r){if(r instanceof yt)return r.field.canonicalString()+r.op.toString()+Do(r.value);if(U_(r))return r.filters.map((e=>ef(e))).join(",");{const e=r.filters.map((t=>ef(t))).join(",");return`${r.op}(${e})`}}function j_(r,e){return r instanceof yt?(function(s,o){return o instanceof yt&&s.op===o.op&&s.field.isEqual(o.field)&&lr(s.value,o.value)})(r,e):r instanceof ur?(function(s,o){return o instanceof ur&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&j_(h,o.filters[f])),!0):!1})(r,e):void _e(19439)}function z_(r){return r instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`})(r):r instanceof ur?(function(t){return t.op.toString()+" {"+t.getFilters().map(z_).join(" ,")+"}"})(r):"Filter"}class qA extends yt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class KA extends yt{constructor(e,t){super(e,"in",t),this.keys=B_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class GA extends yt{constructor(e,t){super(e,"not-in",t),this.keys=B_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function B_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class QA extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mf(t)&&il(t.arrayValue,this.value)}}class YA extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&il(this.value.arrayValue,t)}}class JA extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!il(this.value.arrayValue,t)}}class XA extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>il(this.value.arrayValue,s)))}}/**
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
 */class ZA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Cy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new ZA(r,e,t,s,o,l,h)}function bf(r){const e=Te(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ef(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Nc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Do(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Do(s))).join(",")),e.Pe=t}return e.Pe}function Ff(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!WA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!j_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ry(r.startAt,e.startAt)&&Ry(r.endAt,e.endAt)}function tf(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class xc{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function eR(r,e,t,s,o,l,h,f){return new xc(r,e,t,s,o,l,h,f)}function Oc(r){return new xc(r)}function Py(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tR(r){return r.collectionGroup!==null}function Ka(r){const e=Te(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(At.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(f=f.add(v.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new pc(l,s))})),t.has(At.keyField().canonicalString())||e.Te.push(new pc(At.keyField(),s))}return e.Te}function sr(r){const e=Te(r);return e.Ie||(e.Ie=nR(e,Ka(r))),e.Ie}function nR(r,e){if(r.limitType==="F")return Cy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new pc(o.field,l)}));const t=r.endAt?new fc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new fc(r.startAt.position,r.startAt.inclusive):null;return Cy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function nf(r,e,t){return new xc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Vc(r,e){return Ff(sr(r),sr(e))&&r.limitType===e.limitType}function $_(r){return`${bf(sr(r))}|lt:${r.limitType}`}function vo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>z_(o))).join(", ")}]`),Nc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Do(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Do(o))).join(",")),`Target(${s})`})(sr(r))}; limitType=${r.limitType})`}function Lc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):pe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Ka(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,g){const v=Ay(h,f,g);return h.inclusive?v<=0:v<0})(s.startAt,Ka(s),o)||s.endAt&&!(function(h,f,g){const v=Ay(h,f,g);return h.inclusive?v>=0:v>0})(s.endAt,Ka(s),o))})(r,e)}function rR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function W_(r){return(e,t)=>{let s=!1;for(const o of Ka(r)){const l=iR(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function iR(r,e,t){const s=r.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),v=f.data.field(l);return g!==null&&v!==null?No(g,v):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:r.dir})}}/**
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
 */class ws{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return P_(this.inner)}size(){return this.innerSize}}/**
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
 */const sR=new et(pe.comparator);function Mr(){return sR}const H_=new et(pe.comparator);function Ba(...r){let e=H_;for(const t of r)e=e.insert(t.key,t);return e}function q_(r){let e=H_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function cs(){return Ga()}function K_(){return Ga()}function Ga(){return new ws((r=>r.toString()),((r,e)=>r.isEqual(e)))}const oR=new et(pe.comparator),aR=new vt(pe.comparator);function ke(...r){let e=aR;for(const t of r)e=e.add(t);return e}const lR=new vt(Ae);function uR(){return lR}/**
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
 */function Uf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function G_(r){return{integerValue:""+r}}function cR(r,e){return MA(e)?G_(e):Uf(r,e)}/**
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
 */class Mc{constructor(){this._=void 0}}function hR(r,e,t){return r instanceof sl?(function(o,l){const h={fields:{[D_]:{stringValue:N_},[O_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Lf(l)&&(l=Dc(l)),l&&(h.fields[x_]=l),{mapValue:h}})(t,e):r instanceof ol?Y_(r,e):r instanceof al?J_(r,e):(function(o,l){const h=Q_(o,l),f=ky(h)+ky(o.Ee);return Zd(h)&&Zd(o.Ee)?G_(f):Uf(o.serializer,f)})(r,e)}function dR(r,e,t){return r instanceof ol?Y_(r,e):r instanceof al?J_(r,e):t}function Q_(r,e){return r instanceof mc?(function(s){return Zd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class sl extends Mc{}class ol extends Mc{constructor(e){super(),this.elements=e}}function Y_(r,e){const t=X_(e);for(const s of r.elements)t.some((o=>lr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class al extends Mc{constructor(e){super(),this.elements=e}}function J_(r,e){let t=X_(e);for(const s of r.elements)t=t.filter((o=>!lr(o,s)));return{arrayValue:{values:t}}}class mc extends Mc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ky(r){return st(r.integerValue||r.doubleValue)}function X_(r){return Mf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class fR{constructor(e,t){this.field=e,this.transform=t}}function pR(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof ol&&o instanceof ol||s instanceof al&&o instanceof al?Po(s.elements,o.elements,lr):s instanceof mc&&o instanceof mc?lr(s.Ee,o.Ee):s instanceof sl&&o instanceof sl})(r.transform,e.transform)}class mR{constructor(e,t){this.version=e,this.transformResults=t}}class zn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class bc{}function Z_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new jf(r.key,zn.none()):new yl(r.key,r.data,zn.none());{const t=r.data,s=Tn.empty();let o=new vt(At.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Ts(r.key,s,new Un(o.toArray()),zn.none())}}function gR(r,e,t){r instanceof yl?(function(o,l,h){const f=o.value.clone(),g=Dy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Ts?(function(o,l,h){if(!Xu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Dy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(eE(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Qa(r,e,t,s){return r instanceof yl?(function(l,h,f,g){if(!Xu(l.precondition,h))return f;const v=l.value.clone(),E=xy(l.fieldTransforms,g,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,s):r instanceof Ts?(function(l,h,f,g){if(!Xu(l.precondition,h))return f;const v=xy(l.fieldTransforms,g,h),E=h.data;return E.setAll(eE(l)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,f){return Xu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function yR(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Q_(s.transform,o||null);l!=null&&(t===null&&(t=Tn.empty()),t.set(s.field,l))}return t||null}function Ny(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Po(s,o,((l,h)=>pR(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class yl extends bc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ts extends bc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function eE(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Dy(r,e,t){const s=new Map;Ue(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,dR(h,f,t[o]))}return s}function xy(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,hR(l,h,e))}return s}class jf extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vR extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _R{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&gR(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Qa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Qa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=K_();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=Z_(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,((t,s)=>Ny(t,s)))&&Po(this.baseMutations,e.baseMutations,((t,s)=>Ny(t,s)))}}class zf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return oR})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new zf(e,t,s,o)}}/**
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
 */class ER{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class wR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,Ve;function TR(r){switch(r){case q.OK:return _e(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function tE(r){if(r===void 0)return Vr("GRPC error has no .code"),q.UNKNOWN;switch(r){case ct.OK:return q.OK;case ct.CANCELLED:return q.CANCELLED;case ct.UNKNOWN:return q.UNKNOWN;case ct.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ct.INTERNAL:return q.INTERNAL;case ct.UNAVAILABLE:return q.UNAVAILABLE;case ct.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ct.NOT_FOUND:return q.NOT_FOUND;case ct.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ct.ABORTED:return q.ABORTED;case ct.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ct.DATA_LOSS:return q.DATA_LOSS;default:return _e(39323,{code:r})}}(Ve=ct||(ct={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const IR=new wi([4294967295,4294967295],0);function Oy(r){const e=I_().encode(r),t=new p_;return t.update(e),new Uint8Array(t.digest())}function Vy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new wi([t,s],0),new wi([o,l],0)]}class Bf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new $a(`Invalid padding: ${t}`);if(s<0)throw new $a(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new $a(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new $a(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=wi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(wi.fromNumber(s)));return o.compare(IR)===1&&(o=new wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Oy(e),[s,o]=Vy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Bf(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=Oy(e),[s,o]=Vy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class $a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,vl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Fc(we.min(),o,new et(Ae),Mr(),ke())}}class vl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new vl(s,t,ke(),ke(),ke())}}/**
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
 */class Zu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class nE{constructor(e,t){this.targetId=e,this.De=t}}class rE{constructor(e,t,s=Rt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Ly{constructor(){this.ve=0,this.Ce=My(),this.Fe=Rt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),t=ke(),s=ke();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:l})}})),new vl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=My()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class SR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Mr(),this.je=Bu(),this.Je=Bu(),this.He=new et(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(tf(l))if(s===0){const h=new pe(l.path);this.Xe(t,h,jt.newNoDocument(h,we.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ri(s).toUint8Array()}catch(g){if(g instanceof k_)return Lr("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Bf(h,o,l)}catch(g){return Lr(g instanceof $a?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&tf(f.target)){const g=new pe(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,jt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=ke();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const v=this.st(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Fc(e,t,this.He,this.ze,s);return this.ze=Mr(),this.je=Bu(),this.Je=Bu(),this.He=new et(Ae),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ly,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new vt(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new vt(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ly),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Bu(){return new et(pe.comparator)}function My(){return new et(pe.comparator)}const AR={asc:"ASCENDING",desc:"DESCENDING"},RR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CR={and:"AND",or:"OR"};class PR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rf(r,e){return r.useProto3Json||Nc(e)?e:{value:e}}function gc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function kR(r,e){return gc(r,e.toTimestamp())}function or(r){return Ue(!!r,49232),we.fromTimestamp((function(t){const s=Ai(t);return new qe(s.seconds,s.nanos)})(r))}function $f(r,e){return sf(r,e).canonicalString()}function sf(r,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function sE(r){const e=Qe.fromString(r);return Ue(cE(e),10190,{key:e.toString()}),e}function of(r,e){return $f(r.databaseId,e.path)}function Od(r,e){const t=sE(e);if(t.get(1)!==r.databaseId.projectId)throw new ce(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ce(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(aE(t))}function oE(r,e){return $f(r.databaseId,e)}function NR(r){const e=sE(r);return e.length===4?Qe.emptyPath():aE(e)}function af(r){return new Qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function aE(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function by(r,e,t){return{name:of(r,e),fields:t.value.mapValue.fields}}function DR(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:_e(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,E){return v.useProto3Json?(Ue(E===void 0||typeof E=="string",58123),Rt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Rt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(v){const E=v.code===void 0?q.UNKNOWN:tE(v.code);return new ce(E,v.message||"")})(h);t=new rE(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Od(r,s.document.name),l=or(s.document.updateTime),h=s.document.createTime?or(s.document.createTime):we.min(),f=new Tn({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,l,h,f),v=s.targetIds||[],E=s.removedTargetIds||[];t=new Zu(v,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Od(r,s.document),l=s.readTime?or(s.readTime):we.min(),h=jt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Zu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Od(r,s.document),l=s.removedTargetIds||[];t=new Zu([],l,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new wR(o,l),f=s.targetId;t=new nE(f,h)}}return t}function xR(r,e){let t;if(e instanceof yl)t={update:by(r,e.key,e.value)};else if(e instanceof jf)t={delete:of(r,e.key)};else if(e instanceof Ts)t={update:by(r,e.key,e.data),updateMask:zR(e.fieldMask)};else{if(!(e instanceof vR))return _e(16599,{Rt:e.type});t={verify:of(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const f=h.transform;if(f instanceof sl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ol)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof al)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof mc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:kR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function OR(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?or(o.updateTime):or(l);return h.isEqual(we.min())&&(h=or(l)),new mR(h,o.transformResults||[])})(t,e)))):[]}function VR(r,e){return{documents:[oE(r,e.path)]}}function LR(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=oE(r,o);const l=(function(v){if(v.length!==0)return uE(ur.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(v){if(v.length!==0)return v.map((E=>(function(I){return{field:_o(I.field),direction:FR(I.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=rf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function MR(r){let e=NR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(T){const I=lE(T);return I instanceof ur&&U_(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((I=>(function(B){return new pc(Eo(B.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,Nc(I)?null:I})(t.limit));let g=null;t.startAt&&(g=(function(T){const I=!!T.before,F=T.values||[];return new fc(F,I)})(t.startAt));let v=null;return t.endAt&&(v=(function(T){const I=!T.before,F=T.values||[];return new fc(F,I)})(t.endAt)),eR(e,o,h,l,f,"F",g,v)}function bR(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function lE(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Eo(t.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Eo(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Eo(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Eo(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return yt.create(Eo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ur.create(t.compositeFilter.filters.map((s=>lE(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function FR(r){return AR[r]}function UR(r){return RR[r]}function jR(r){return CR[r]}function _o(r){return{fieldPath:r.canonicalString()}}function Eo(r){return At.fromServerFormat(r.fieldPath)}function uE(r){return r instanceof yt?(function(t){if(t.op==="=="){if(Sy(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NAN"}};if(Iy(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sy(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NAN"}};if(Iy(t.value))return{unaryFilter:{field:_o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(t.field),op:UR(t.op),value:t.value}}})(r):r instanceof ur?(function(t){const s=t.getFilters().map((o=>uE(o)));return s.length===1?s[0]:{compositeFilter:{op:jR(t.op),filters:s}}})(r):_e(54877,{filter:r})}function zR(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function cE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class gi{constructor(e,t,s,o,l=we.min(),h=we.min(),f=Rt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BR{constructor(e){this.gt=e}}function $R(r){const e=MR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?nf(e,e.limit,"L"):e}/**
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
 */class WR{constructor(){this.Dn=new HR}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Si.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class HR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(Qe.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(Qe.comparator)).toArray()}}/**
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
 */const Fy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hE=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(hE,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
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
 */class xo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new xo(0)}static ur(){return new xo(-1)}}/**
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
 */const Uy="LruGarbageCollector",qR=1048576;function jy([r,e],[t,s]){const o=Ae(r,t);return o===0?Ae(e,s):o}class KR{constructor(e){this.Tr=e,this.buffer=new vt(jy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();jy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class GR{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){se(Uy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zo(t)?se(Uy,"Ignoring IndexedDB error during garbage collection: ",t):await jo(t)}await this.Rr(3e5)}))}}class QR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(kc.ue);const s=new KR(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Fy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,f,g,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,f=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(v=Date.now(),yo()<=Pe.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(v-g)+`ms
Total Duration: ${v-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function YR(r,e){return new QR(r,e)}/**
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
 */class JR{constructor(){this.changes=new ws((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class XR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ZR{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Qa(s.mutation,o,Un.empty(),qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ke()){const o=cs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Ba();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=cs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ke())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=Mr();const h=Ga(),f=(function(){return Ga()})();return t.forEach(((g,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof Ts)?l=l.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),Qa(E.mutation,v,E.mutation.getFieldMask(),qe.now())):h.set(v.key,Un.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((v,E)=>h.set(v,E))),t.forEach(((v,E)=>{var T;return f.set(v,new XR(E,(T=h.get(v))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=Ga();let o=new et(((h,f)=>h-f)),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let E=s.get(g)||Un.empty();E=f.applyToLocalView(v,E),s.set(g,E);const T=(o.get(f.batchId)||ke()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),v=g.key,E=g.value,T=K_();E.forEach((I=>{if(!l.has(I)){const F=Z_(t.get(I),s.get(I));F!==null&&T.set(I,F),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,T))}return W.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tR(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):W.resolve(cs());let f=nl,g=l;return h.next((v=>W.forEach(v,((E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next((I=>{g=g.insert(E,I)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,g,v,ke()))).next((E=>({batchId:f,changes:q_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=Ba();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Ba();return this.indexManager.getCollectionParents(e,l).next((f=>W.forEach(f,(g=>{const v=(function(T,I){return new xc(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((E=>{E.forEach(((T,I)=>{h=h.insert(T,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,jt.newInvalidDocument(E)))}));let f=Ba();return h.forEach(((g,v)=>{const E=l.get(g);E!==void 0&&Qa(E.mutation,v,Un.empty(),qe.now()),Lc(t,v)&&(f=f.insert(g,v))})),f}))}}/**
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
 */class eC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:or(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:$R(o.bundledQuery),readTime:or(o.readTime)}})(t)),W.resolve()}}/**
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
 */class tC{constructor(){this.overlays=new et(pe.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=cs();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=cs(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et(((v,E)=>v-E));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=l.get(v.largestBatchId);E===null&&(E=cs(),l=l.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const f=cs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,E)=>f.set(v,E))),!(f.size()>=o)););return W.resolve(f)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new ER(t,s));let l=this.kr.get(t);l===void 0&&(l=ke(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nC{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class Wf{constructor(){this.qr=new vt(St.Qr),this.$r=new vt(St.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new St(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new pe(new Qe([])),s=new St(t,e),o=new St(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new Qe([])),s=new St(t,e),o=new St(t,e+1);let l=ke();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
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
 */class rC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new vt(St.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new _R(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Vf:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(Ae);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{s=s.add(f.Hr)}))})),W.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;pe.isDocumentKey(l)||(l=l.child(""));const h=new St(new pe(l),0);let f=new vt(Ae);return this.Yr.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(f=f.add(g.Hr)),!0)}),h),W.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return W.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new St(t,0),o=this.Yr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iC{constructor(e){this.ni=e,this.docs=(function(){return new et(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=Mr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Mr();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:v,value:{document:E}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||xA(DA(E),s)<=0||(o.has(E.key)||Lc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ri(e,t){return W.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new sC(this)}getSize(e){return W.resolve(this.size)}}class sC extends JR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class oC{constructor(e){this.persistence=e,this.ii=new ws((t=>bf(t)),Ff),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new Wf,this.targetCount=0,this._i=xo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new xo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
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
 */class dE{constructor(e,t){this.ai={},this.overlays={},this.ui=new kc(0),this.ci=!1,this.ci=!0,this.li=new nC,this.referenceDelegate=e(this),this.hi=new oC(this),this.indexManager=new WR,this.remoteDocumentCache=(function(o){return new iC(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new BR(t),this.Ti=new eC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new rC(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new aC(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return W.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class aC extends VA{constructor(e){super(),this.currentSequenceNumber=e}}class Hf{constructor(e){this.persistence=e,this.Ai=new Wf,this.Ri=null}static Vi(e){return new Hf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,(s=>{const o=pe.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class yc{constructor(e,t){this.persistence=e,this.gi=new ws((s=>bA(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=YR(this,t)}static Vi(e,t){return new yc(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return W.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(s++,l.removeEntry(h,we.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yu(e.data.value)),t}Sr(e,t,s){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new qf(e,t.fromCache,s,o)}}/**
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
 */class lC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return zT()?8:LA(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new lC;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(yo()<=Pe.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(yo()<=Pe.DEBUG&&se("QueryEngine","Query:",vo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(yo()<=Pe.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(t))):W.resolve())}ps(e,t){if(Py(t))return W.resolve(null);let s=sr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=nf(t,null,"F"),s=sr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=ke(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.bs(t,f);return this.Ds(t,v,h,g.readTime)?this.ps(e,nf(t,null,"F")):this.vs(e,v,t,g)}))))})))))}ys(e,t,s,o){return Py(t)||o.isEqual(we.min())?W.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?W.resolve(null):(yo()<=Pe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vo(t)),this.vs(e,h,t,NA(o,nl)).next((f=>f)))}))}bs(e,t){let s=new vt(W_(e));return t.forEach(((o,l)=>{Lc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return yo()<=Pe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",vo(t)),this.gs.getDocumentsMatchingQuery(e,t,Si.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Kf="LocalStore",cC=3e8;class hC{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Ae),this.Ms=new ws((l=>bf(l)),Ff),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function dC(r,e,t,s){return new hC(r,e,t,s)}async function fE(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let g=ke();for(const v of o){h.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}for(const v of l){f.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:f})))}))}))}function fC(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,v,E){const T=v.batch,I=T.keys();let F=W.resolve();return I.forEach((B=>{F=F.next((()=>E.getEntry(g,B))).next(($=>{const M=v.docVersions.get(B);Ue(M!==null,48541),$.version.compareTo(M)<0&&(T.applyToRemoteDocument($,v),$.isValidDocument()&&($.setReadTime(v.commitVersion),E.addEntry($)))}))})),F.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let g=ke();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(g=g.add(f.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function pE(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function pC(r,e){const t=Te(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((E,T)=>{const I=o.get(T);if(!I)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,T))));let F=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(Rt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,s)),o=o.insert(T,F),(function($,M,ne){return $.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=cC?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0})(I,F,E)&&f.push(t.hi.updateTargetData(l,F))}));let g=Mr(),v=ke();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(mC(l,h,e.documentUpdates).next((E=>{g=E.Ls,v=E.ks}))),!s.isEqual(we.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return W.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,v))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function mC(r,e,t){let s=ke(),o=ke();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Mr();return t.forEach(((f,g)=>{const v=l.get(f);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):se(Kf,"Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function gC(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Vf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function yC(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,W.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new gi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function lf(r,e,t){const s=Te(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!zo(h))throw h;se(Kf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function zy(r,e,t){const s=Te(r);let o=we.min(),l=ke();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,E){const T=Te(g),I=T.Ms.get(E);return I!==void 0?W.resolve(T.Fs.get(I)):T.hi.getTargetData(v,E)})(s,h,sr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:ke()))).next((f=>(vC(s,rR(e),f),{documents:f,qs:l})))))}function vC(r,e,t){let s=r.xs.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class By{constructor(){this.activeTargetIds=uR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _C{constructor(){this.Fo=new By,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new By,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EC{xo(e){}shutdown(){}}/**
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
 */const $y="ConnectivityMonitor";class Wy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){se($y,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){se($y,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $u=null;function uf(){return $u===null?$u=(function(){return 268435456+Math.round(2147483648*Math.random())})():$u++,"0x"+$u.toString(16)}/**
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
 */const Vd="RestConnection",wC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class TC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===hc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=uf(),f=this.Go(e,t.toUriEncodedString());se(Vd,`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:v}=new URL(f),E=Mo(v);return this.jo(e,f,g,s,E).then((T=>(se(Vd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Lr(Vd,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",s),T}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Uo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=wC[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class IC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ft="WebChannelConnection";class SC extends TC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=uf();return new Promise(((f,g)=>{const v=new m_;v.setWithCredentials(!0),v.listenOnce(g_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Qu.NO_ERROR:const T=v.getResponseJson();se(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case Qu.TIMEOUT:se(Ft,`RPC '${e}' ${h} timed out`),g(new ce(q.DEADLINE_EXCEEDED,"Request time out"));break;case Qu.HTTP_ERROR:const I=v.getStatus();if(se(Ft,`RPC '${e}' ${h} failed with status:`,I,"response text:",v.getResponseText()),I>0){let F=v.getResponseJson();Array.isArray(F)&&(F=F[0]);const B=F==null?void 0:F.error;if(B&&B.status&&B.message){const $=(function(ne){const re=ne.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(re)>=0?re:q.UNKNOWN})(B.status);g(new ce($,B.message))}else g(new ce(q.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new ce(q.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{se(Ft,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);se(Ft,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",E,s,15)}))}P_(e,t,s){const o=uf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=__(),f=v_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");se(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);this.T_(T);let I=!1,F=!1;const B=new IC({Ho:M=>{F?se(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(I||(se(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),se(Ft,`RPC '${e}' stream ${o} sending:`,M),T.send(M))},Yo:()=>T.close()}),$=(M,ne,re)=>{M.listen(ne,(te=>{try{re(te)}catch(de){setTimeout((()=>{throw de}),0)}}))};return $(T,za.EventType.OPEN,(()=>{F||(se(Ft,`RPC '${e}' stream ${o} transport opened.`),B.s_())})),$(T,za.EventType.CLOSE,(()=>{F||(F=!0,se(Ft,`RPC '${e}' stream ${o} transport closed`),B.__(),this.I_(T))})),$(T,za.EventType.ERROR,(M=>{F||(F=!0,Lr(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,M.name,"Message:",M.message),B.__(new ce(q.UNAVAILABLE,"The operation could not be completed")))})),$(T,za.EventType.MESSAGE,(M=>{var ne;if(!F){const re=M.data[0];Ue(!!re,16349);const te=re,de=(te==null?void 0:te.error)||((ne=te[0])===null||ne===void 0?void 0:ne.error);if(de){se(Ft,`RPC '${e}' stream ${o} received error:`,de);const Ne=de.status;let Ie=(function(C){const k=ct[C];if(k!==void 0)return tE(k)})(Ne),D=de.message;Ie===void 0&&(Ie=q.INTERNAL,D="Unknown error status: "+Ne+" with message "+de.message),F=!0,B.__(new ce(Ie,D)),T.close()}else se(Ft,`RPC '${e}' stream ${o} received:`,re),B.a_(re)}})),$(f,y_.STAT_EVENT,(M=>{M.stat===Yd.PROXY?se(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===Yd.NOPROXY&&se(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.o_()}),0),B}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ld(){return typeof document<"u"?document:null}/**
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
 */function Uc(r){return new PR(r,!0)}/**
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
 */class mE{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Hy="PersistentStream";class gE{constructor(e,t,s,o,l,h,f,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new mE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Vr(t.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ce(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return se(Hy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(se(Hy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class AC extends gE{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=DR(this.serializer,e),s=(function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?or(h.readTime):we.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=af(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=tf(g)?{documents:VR(l,g)}:{query:LR(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=iE(l,h.resumeToken);const v=rf(l,h.expectedCount);v!==null&&(f.expectedCount=v)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=gc(l,h.snapshotVersion.toTimestamp());const v=rf(l,h.expectedCount);v!==null&&(f.expectedCount=v)}return f})(this.serializer,e);const s=bR(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=af(this.serializer),t.removeTarget=e,this.k_(t)}}class RC extends gE{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=OR(e.writeResults,e.commitTime),s=or(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=af(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>xR(this.serializer,s)))};this.k_(t)}}/**
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
 */class CC{}class PC extends CC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ce(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,sf(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(q.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,sf(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(q.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class kC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Vr(t),this._a=!1):se("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const ys="RemoteStore";class NC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{Is(this)&&(se(ys,"Restarting streams for network reachability change."),await(async function(g){const v=Te(g);v.Ia.add(4),await _l(v),v.Aa.set("Unknown"),v.Ia.delete(4),await jc(v)})(this))}))})),this.Aa=new kC(s,o)}}async function jc(r){if(Is(r))for(const e of r.da)await e(!0)}async function _l(r){for(const e of r.da)await e(!1)}function yE(r,e){const t=Te(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Jf(t)?Yf(t):Bo(t).x_()&&Qf(t,e))}function Gf(r,e){const t=Te(r),s=Bo(t);t.Ta.delete(e),s.x_()&&vE(t,e),t.Ta.size===0&&(s.x_()?s.B_():Is(t)&&t.Aa.set("Unknown"))}function Qf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bo(r).H_(e)}function vE(r,e){r.Ra.$e(e),Bo(r).Y_(e)}function Yf(r){r.Ra=new SR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Bo(r).start(),r.Aa.aa()}function Jf(r){return Is(r)&&!Bo(r).M_()&&r.Ta.size>0}function Is(r){return Te(r).Ia.size===0}function _E(r){r.Ra=void 0}async function DC(r){r.Aa.set("Online")}async function xC(r){r.Ta.forEach(((e,t)=>{Qf(r,e)}))}async function OC(r,e){_E(r),Jf(r)?(r.Aa.la(e),Yf(r)):r.Aa.set("Unknown")}async function VC(r,e,t){if(r.Aa.set("Online"),e instanceof rE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(s){se(ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vc(r,s)}else if(e instanceof Zu?r.Ra.Ye(e):e instanceof nE?r.Ra.it(e):r.Ra.et(e),!t.isEqual(we.min()))try{const s=await pE(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ta.get(v);E&&l.Ta.set(v,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,v)=>{const E=l.Ta.get(g);if(!E)return;l.Ta.set(g,E.withResumeToken(Rt.EMPTY_BYTE_STRING,E.snapshotVersion)),vE(l,g);const T=new gi(E.target,g,v,E.sequenceNumber);Qf(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(s){se(ys,"Failed to raise snapshot:",s),await vc(r,s)}}async function vc(r,e,t){if(!zo(e))throw e;r.Ia.add(1),await _l(r),r.Aa.set("Offline"),t||(t=()=>pE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(ys,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await jc(r)}))}function EE(r,e){return e().catch((t=>vc(r,t,e)))}async function zc(r){const e=Te(r),t=Pi(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Vf;for(;LC(e);)try{const o=await gC(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,MC(e,o)}catch(o){await vc(e,o)}wE(e)&&TE(e)}function LC(r){return Is(r)&&r.Pa.length<10}function MC(r,e){r.Pa.push(e);const t=Pi(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function wE(r){return Is(r)&&!Pi(r).M_()&&r.Pa.length>0}function TE(r){Pi(r).start()}async function bC(r){Pi(r).na()}async function FC(r){const e=Pi(r);for(const t of r.Pa)e.X_(t.mutations)}async function UC(r,e,t){const s=r.Pa.shift(),o=zf.from(s,e,t);await EE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await zc(r)}async function jC(r,e){e&&Pi(r).Z_&&await(async function(s,o){if((function(h){return TR(h)&&h!==q.ABORTED})(o.code)){const l=s.Pa.shift();Pi(s).N_(),await EE(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await zc(s)}})(r,e),wE(r)&&TE(r)}async function qy(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),se(ys,"RemoteStore received new credentials");const s=Is(t);t.Ia.add(3),await _l(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await jc(t)}async function zC(r,e){const t=Te(r);e?(t.Ia.delete(2),await jc(t)):e||(t.Ia.add(2),await _l(t),t.Aa.set("Unknown"))}function Bo(r){return r.Va||(r.Va=(function(t,s,o){const l=Te(t);return l.ia(),new AC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:DC.bind(null,r),e_:xC.bind(null,r),n_:OC.bind(null,r),J_:VC.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Jf(r)?Yf(r):r.Aa.set("Unknown")):(await r.Va.stop(),_E(r))}))),r.Va}function Pi(r){return r.ma||(r.ma=(function(t,s,o){const l=Te(t);return l.ia(),new RC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:bC.bind(null,r),n_:jC.bind(null,r),ea:FC.bind(null,r),ta:UC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await zc(r)):(await r.ma.stop(),r.Pa.length>0&&(se(ys,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class Xf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Xf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(r,e){if(Vr("AsyncQueue",`${e}: ${r}`),zo(r))return new ce(q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Ro{static emptySet(e){return new Ro(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Ba(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ro)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ro;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Ky{constructor(){this.fa=new et(pe.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Oo{constructor(e,t,s,o,l,h,f,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Oo(e,t,Ro.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class BC{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class $C{constructor(){this.queries=Gy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Te(t),l=o.queries;o.queries=Gy(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(s)}))})(this,new ce(q.ABORTED,"Firestore shutting down"))}}function Gy(){return new ws((r=>$_(r)),Vc)}async function IE(r,e){const t=Te(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new BC,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Zf(h,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&ep(t)}async function SE(r,e){const t=Te(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function WC(r,e){const t=Te(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(s=!0);h.ya=o}}s&&ep(t)}function HC(r,e,t){const s=Te(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function ep(r){r.Da.forEach((e=>{e.next()}))}var cf,Qy;(Qy=cf||(cf={})).Fa="default",Qy.Cache="cache";class AE{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Oo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==cf.Cache}}/**
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
 */class RE{constructor(e){this.key=e}}class CE{constructor(e){this.key=e}}class qC{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=W_(e),this.eu=new Ro(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Ky,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const I=o.get(E),F=Lc(this.query,T)?T:null,B=!!I&&this.mutatedKeys.has(I.key),$=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let M=!1;I&&F?I.data.isEqual(F.data)?B!==$&&(s.track({type:3,doc:F}),M=!0):this.iu(I,F)||(s.track({type:2,doc:F}),M=!0,(g&&this.Xa(F,g)>0||v&&this.Xa(F,v)<0)&&(f=!0)):!I&&F?(s.track({type:0,doc:F}),M=!0):I&&!F&&(s.track({type:1,doc:I}),M=!0,(g||v)&&(f=!0)),M&&(F?(h=h.add(F),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,T)=>(function(F,B){const $=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:M})}};return $(F)-$(B)})(E.type,T.type)||this.Xa(E.doc,T.doc))),this.su(s),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,v=g!==this.Ya;return this.Ya=g,h.length!==0||v?{snapshot:new Oo(this.query,e.eu,l,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ky,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new CE(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new RE(s))})),t}uu(e){this.Ha=e.qs,this.Za=ke();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Oo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const tp="SyncEngine";class KC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class GC{constructor(e){this.key=e,this.lu=!1}}class QC{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ws((f=>$_(f)),Vc),this.Tu=new Map,this.Iu=new Set,this.du=new et(pe.comparator),this.Eu=new Map,this.Au=new Wf,this.Ru={},this.Vu=new Map,this.mu=xo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function YC(r,e,t=!0){const s=OE(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await PE(s,e,t,!0),o}async function JC(r,e){const t=OE(r);await PE(t,e,!0,!1)}async function PE(r,e,t,s){const o=await yC(r.localStore,sr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await XC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&yE(r.remoteStore,o),f}async function XC(r,e,t,s,o){r.gu=(T,I,F)=>(async function($,M,ne,re){let te=M.view.nu(ne);te.Ds&&(te=await zy($.localStore,M.query,!1).then((({documents:D})=>M.view.nu(D,te))));const de=re&&re.targetChanges.get(M.targetId),Ne=re&&re.targetMismatches.get(M.targetId)!=null,Ie=M.view.applyChanges(te,$.isPrimaryClient,de,Ne);return Jy($,M.targetId,Ie._u),Ie.snapshot})(r,T,I,F);const l=await zy(r.localStore,e,!0),h=new qC(e,l.qs),f=h.nu(l.documents),g=vl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(f,r.isPrimaryClient,g);Jy(r,t,v._u);const E=new KC(e,t,h);return r.Pu.set(e,E),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),v.snapshot}async function ZC(r,e,t){const s=Te(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Vc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await lf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Gf(s.remoteStore,o.targetId),hf(s,o.targetId)})).catch(jo)):(hf(s,o.targetId),await lf(s.localStore,o.targetId,!0))}async function eP(r,e){const t=Te(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Gf(t.remoteStore,s.targetId))}async function tP(r,e,t){const s=lP(r);try{const o=await(function(h,f){const g=Te(h),v=qe.now(),E=f.reduce(((F,B)=>F.add(B.key)),ke());let T,I;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let B=Mr(),$=ke();return g.Os.getEntries(F,E).next((M=>{B=M,B.forEach(((ne,re)=>{re.isValidDocument()||($=$.add(ne))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,B))).next((M=>{T=M;const ne=[];for(const re of f){const te=yR(re,T.get(re.key).overlayedDocument);te!=null&&ne.push(new Ts(re.key,te,M_(te.value.mapValue),zn.exists(!0)))}return g.mutationQueue.addMutationBatch(F,v,ne,f)})).next((M=>{I=M;const ne=M.applyToLocalDocumentSet(T,$);return g.documentOverlayCache.saveOverlays(F,M.batchId,ne)}))})).then((()=>({batchId:I.batchId,changes:q_(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let v=h.Ru[h.currentUser.toKey()];v||(v=new et(Ae)),v=v.insert(f,g),h.Ru[h.currentUser.toKey()]=v})(s,o.batchId,t),await El(s,o.changes),await zc(s.remoteStore)}catch(o){const l=Zf(o,"Failed to persist write");t.reject(l)}}async function kE(r,e){const t=Te(r);try{const s=await pC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ue(h.lu,14607):o.removedDocuments.size>0&&(Ue(h.lu,42227),h.lu=!1))})),await El(t,s,e)}catch(s){await jo(s)}}function Yy(r,e,t){const s=Te(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Te(h);g.onlineState=f;let v=!1;g.queries.forEach(((E,T)=>{for(const I of T.wa)I.va(f)&&(v=!0)})),v&&ep(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nP(r,e,t){const s=Te(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new et(pe.comparator);h=h.insert(l,jt.newNoDocument(l,we.min()));const f=ke().add(l),g=new Fc(we.min(),new Map,new et(Ae),h,f);await kE(s,g),s.du=s.du.remove(l),s.Eu.delete(e),np(s)}else await lf(s.localStore,e,!1).then((()=>hf(s,e,t))).catch(jo)}async function rP(r,e){const t=Te(r),s=e.batch.batchId;try{const o=await fC(t.localStore,e);DE(t,s,null),NE(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await El(t,o)}catch(o){await jo(o)}}async function iP(r,e,t){const s=Te(r);try{const o=await(function(h,f){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return g.mutationQueue.lookupMutationBatch(v,f).next((T=>(Ue(T!==null,37113),E=T.keys(),g.mutationQueue.removeMutationBatch(v,T)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>g.localDocuments.getDocuments(v,E)))}))})(s.localStore,e);DE(s,e,t),NE(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await El(s,o)}catch(o){await jo(o)}}function NE(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function DE(r,e,t){const s=Te(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function hf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||xE(r,s)}))}function xE(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Gf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),np(r))}function Jy(r,e,t){for(const s of t)s instanceof RE?(r.Au.addReference(s.key,e),sP(r,s)):s instanceof CE?(se(tp,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||xE(r,s.key)):_e(19791,{yu:s})}function sP(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(se(tp,"New document in limbo: "+t),r.Iu.add(s),np(r))}function np(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new pe(Qe.fromString(e)),s=r.mu.next();r.Eu.set(s,new GC(t)),r.du=r.du.insert(t,s),yE(r.remoteStore,new gi(sr(Oc(t.path)),s,"TargetPurposeLimboResolution",kc.ue))}}async function El(r,e,t){const s=Te(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((f,g)=>{h.push(s.gu(g,e,t).then((v=>{var E;if((v||t)&&s.isPrimaryClient){const T=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(v){o.push(v);const T=qf.Es(g.targetId,v);l.push(T)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,v){const E=Te(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(v,(I=>W.forEach(I.Is,(F=>E.persistence.referenceDelegate.addReference(T,I.targetId,F))).next((()=>W.forEach(I.ds,(F=>E.persistence.referenceDelegate.removeReference(T,I.targetId,F)))))))))}catch(T){if(!zo(T))throw T;se(Kf,"Failed to update sequence numbers: "+T)}for(const T of v){const I=T.targetId;if(!T.fromCache){const F=E.Fs.get(I),B=F.snapshotVersion,$=F.withLastLimboFreeSnapshotVersion(B);E.Fs=E.Fs.insert(I,$)}}})(s.localStore,l))}async function oP(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){se(tp,"User change. New user:",e.toKey());const s=await fE(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new ce(q.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await El(t,s.Bs)}}function aP(r,e){const t=Te(r),s=t.Eu.get(e);if(s&&s.lu)return ke().add(s.key);{let o=ke();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function OE(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=kE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nP.bind(null,e),e.hu.J_=WC.bind(null,e.eventManager),e.hu.pu=HC.bind(null,e.eventManager),e}function lP(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iP.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return dC(this.persistence,new uC,e.initialUser,this.serializer)}Du(e){return new dE(Hf.Vi,this.serializer)}bu(e){return new _C}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class uP extends _c{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ue(this.persistence.referenceDelegate instanceof yc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new GR(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new dE((s=>yc.Vi(s,t)),this.serializer)}}class df{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oP.bind(null,this.syncEngine),await zC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $C})()}createDatastore(e){const t=Uc(e.databaseInfo.databaseId),s=(function(l){return new SC(l)})(e.databaseInfo);return(function(l,h,f,g){return new PC(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new NC(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Yy(this.syncEngine,t,0)),(function(){return Wy.C()?new Wy:new EC})())}createSyncEngine(e,t){return(function(o,l,h,f,g,v,E){const T=new QC(o,l,h,f,g,v);return E&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Te(o);se(ys,"RemoteStore shutting down."),l.Ia.add(5),await _l(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}df.provider={build:()=>new df};/**
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
 *//**
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
 */class VE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ki="FirestoreClient";class cP{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Pc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{se(ki,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(se(ki,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Zf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Md(r,e){r.asyncQueue.verifyOperationInProgress(),se(ki,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await fE(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Lr("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{se("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Lr("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function Xy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await hP(r);se(ki,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>qy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>qy(e.remoteStore,o))),r._onlineComponents=e}async function hP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(ki,"Using user provided OfflineComponentProvider");try{await Md(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Lr("Error using user provided cache. Falling back to memory cache: "+t),await Md(r,new _c)}}else se(ki,"Using default OfflineComponentProvider"),await Md(r,new uP(void 0));return r._offlineComponents}async function LE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(ki,"Using user provided OnlineComponentProvider"),await Xy(r,r._uninitializedComponentsProvider._online)):(se(ki,"Using default OnlineComponentProvider"),await Xy(r,new df))),r._onlineComponents}function dP(r){return LE(r).then((e=>e.syncEngine))}async function ff(r){const e=await LE(r),t=e.eventManager;return t.onListen=YC.bind(null,e.syncEngine),t.onUnlisten=ZC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eP.bind(null,e.syncEngine),t}function fP(r,e,t={}){const s=new Ti;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,v){const E=new VE({next:I=>{E.Ou(),h.enqueueAndForget((()=>SE(l,T)));const F=I.docs.has(f);!F&&I.fromCache?v.reject(new ce(q.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&I.fromCache&&g&&g.source==="server"?v.reject(new ce(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(I)},error:I=>v.reject(I)}),T=new AE(Oc(f.path),E,{includeMetadataChanges:!0,ka:!0});return IE(l,T)})(await ff(r),r.asyncQueue,e,t,s))),s.promise}/**
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
 */function ME(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Zy=new Map;/**
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
 */const bE="firestore.googleapis.com",ev=!0;class tv{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bE,this.ssl=ev}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ev;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qR)throw new ce(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}A_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ME((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ce(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new T_;switch(s.type){case"firstParty":return new AA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Zy.get(t);s&&(se("ComponentProvider","Removing Datastore"),Zy.delete(t),s.terminate())})(this),Promise.resolve()}}function FE(r,e,t,s={}){var o;r=jn(r,Bc);const l=Mo(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(Rv(`https://${g}`),Cv("Firestore",!0)),h.host!==bE&&h.host!==g&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!ds(v,f)&&(r._setSettings(v),s.mockUserToken)){let E,T;if(typeof s.mockUserToken=="string")E=s.mockUserToken,T=Ut.MOCK_USER;else{E=xT(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new ce(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ut(I)}r._authCredentials=new TA(new w_(E,T))}}/**
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
 */class wl{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wl(this.firestore,e,this._query)}}class ot{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(gl(t,ot._jsonSchema))return new ot(e,s||null,new pe(Qe.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ht("string",ot._jsonSchemaVersion),referencePath:ht("string")};class Dr extends wl{constructor(e,t,s){super(e,t,Oc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new pe(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function ll(r,e,...t){if(r=qt(r),S_("collection","path",e),r instanceof Bc){const s=Qe.fromString(e,...t);return my(s),new Dr(r,null,s)}{if(!(r instanceof ot||r instanceof Dr))throw new ce(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Qe.fromString(e,...t));return my(s),new Dr(r.firestore,null,s)}}function vs(r,e,...t){if(r=qt(r),arguments.length===1&&(e=Pc.newId()),S_("doc","path",e),r instanceof Bc){const s=Qe.fromString(e,...t);return py(s),new ot(r,null,new pe(s))}{if(!(r instanceof ot||r instanceof Dr))throw new ce(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Qe.fromString(e,...t));return py(s),new ot(r.firestore,r instanceof Dr?r.converter:null,new pe(s))}}/**
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
 */const nv="AsyncQueue";class rv{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new mE(this,"async_queue_retry"),this.oc=()=>{const s=Ld();s&&se(nv,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Ld();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ld();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ti;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!zo(e))throw e;se(nv,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Vr("INTERNAL UNHANDLED ERROR: ",iv(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Xf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:iv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function iv(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function sv(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Ni extends Bc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new rv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rv(e),this._firestoreClient=void 0,await e}}}function UE(r,e){const t=typeof r=="object"?r:Dv(),s=typeof r=="string"?r:hc,o=Tf(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=NT("firestore");l&&FE(o,...l)}return o}function $c(r){if(r._terminated)throw new ce(q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||pP(r),r._firestoreClient}function pP(r){var e,t,s;const o=r._freezeSettings(),l=(function(f,g,v,E){return new jA(f,g,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,ME(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new cP(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cn(Rt.fromBase64String(e))}catch(t){throw new ce(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cn(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gl(e,cn._jsonSchema))return cn.fromBase64String(e.bytes)}}cn._jsonSchemaVersion="firestore/bytes/1.0",cn._jsonSchema={type:ht("string",cn._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class Wc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hc{constructor(e){this._methodName=e}}/**
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
 */class Bn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bn._jsonSchemaVersion}}static fromJSON(e){if(gl(e,Bn._jsonSchema))return new Bn(e.latitude,e.longitude)}}Bn._jsonSchemaVersion="firestore/geoPoint/1.0",Bn._jsonSchema={type:ht("string",Bn._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class $n{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gl(e,$n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $n(e.vectorValues);throw new ce(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$n._jsonSchemaVersion="firestore/vectorValue/1.0",$n._jsonSchema={type:ht("string",$n._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const mP=/^__.*__$/;class gP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ts(e,this.data,this.fieldMask,t,this.fieldTransforms):new yl(e,this.data,t,this.fieldTransforms)}}function jE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:r})}}class rp{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ec(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(jE(this.Ec)&&mP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class yP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Uc(e)}Dc(e,t,s,o=!1){return new rp({Ec:e,methodName:t,bc:s,path:At.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zE(r){const e=r._freezeSettings(),t=Uc(r._databaseId);return new yP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function BE(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);qE("Data must be an object, but it was:",h,s);const f=WE(s,h);let g,v;if(l.merge)g=new Un(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const I=vP(e,T,t);if(!h.contains(I))throw new ce(q.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);EP(E,I)||E.push(I)}g=new Un(E),v=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,v=h.fieldTransforms;return new gP(new Tn(f),g,v)}class ip extends Hc{_toFieldTransform(e){return new fR(e.path,new sl)}isEqual(e){return e instanceof ip}}function $E(r,e){if(HE(r=qt(r)))return qE("Unsupported field value:",e,r),WE(r,e);if(r instanceof Hc)return(function(s,o){if(!jE(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let g=$E(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=qt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=qe.fromDate(s);return{timestampValue:gc(o.serializer,l)}}if(s instanceof qe){const l=new qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:gc(o.serializer,l)}}if(s instanceof Bn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof cn)return{bytesValue:iE(o.serializer,s._byteString)};if(s instanceof ot){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:$f(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof $n)return(function(h,f){return{mapValue:{fields:{[V_]:{stringValue:L_},[dc]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw f.wc("VectorValues must only contain numeric values.");return Uf(f.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Of(s)}`)})(r,e)}function WE(r,e){const t={};return P_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(r,((s,o)=>{const l=$E(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function HE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof qe||r instanceof Bn||r instanceof cn||r instanceof ot||r instanceof Hc||r instanceof $n)}function qE(r,e,t){if(!HE(t)||!R_(t)){const s=Of(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function vP(r,e,t){if((e=qt(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return KE(r,e);throw Ec("Field path arguments must be of type string or ",r,!1,void 0,t)}const _P=new RegExp("[~\\*/\\[\\]]");function KE(r,e,t){if(e.search(_P)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Wc(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ec(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ce(q.INVALID_ARGUMENT,f+r+g)}function EP(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class GE{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(QE("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wP extends GE{data(){return super.data()}}function QE(r,e){return typeof e=="string"?KE(r,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
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
 */function TP(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ce(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class YE{convertValue(e,t="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Es(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[dc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>st(h.doubleValue)));return new $n(l)}convertGeoPoint(e){return new Bn(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Dc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(rl(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);Ue(cE(s),9688,{name:e});const o=new ko(s.get(1),s.get(3)),l=new pe(s.popFirst(5));return o.isEqual(t)||Vr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function JE(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class To{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ii extends GE{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(QE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ii._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ii._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ii._jsonSchema={type:ht("string",Ii._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Ya extends Ii{data(e={}){return super.data(e)}}class hs{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new To(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ya(this._firestore,this._userDataWriter,s.key,s,new To(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new Ya(o._firestore,o._userDataWriter,f.doc.key,f.doc,new To(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new Ya(o._firestore,o._userDataWriter,f.doc.key,f.doc,new To(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return f.type!==0&&(v=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:IP(f.type),doc:g,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */function sp(r){r=jn(r,ot);const e=jn(r.firestore,Ni);return fP($c(e),r._key).then((t=>tw(e,r,t)))}hs._jsonSchemaVersion="firestore/querySnapshot/1.0",hs._jsonSchema={type:ht("string",hs._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class XE extends YE{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function op(r,e,t){r=jn(r,ot);const s=jn(r.firestore,Ni),o=JE(r.converter,e);return Kc(s,[BE(zE(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,zn.none())])}function ZE(r){return Kc(jn(r.firestore,Ni),[new jf(r._key,zn.none())])}function ew(r,e){const t=jn(r.firestore,Ni),s=vs(r),o=JE(r.converter,e);return Kc(t,[BE(zE(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,zn.exists(!1))]).then((()=>s))}function qc(r,...e){var t,s,o;r=qt(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||sv(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(sv(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,v,E;if(r instanceof ot)v=jn(r.firestore,Ni),E=Oc(r._key.path),g={next:T=>{e[h]&&e[h](tw(v,r,T))},error:e[h+1],complete:e[h+2]};else{const T=jn(r,wl);v=jn(T.firestore,Ni),E=T._query;const I=new XE(v);g={next:F=>{e[h]&&e[h](new hs(v,I,T,F))},error:e[h+1],complete:e[h+2]},TP(r._query)}return(function(I,F,B,$){const M=new VE($),ne=new AE(F,M,B);return I.asyncQueue.enqueueAndForget((async()=>IE(await ff(I),ne))),()=>{M.Ou(),I.asyncQueue.enqueueAndForget((async()=>SE(await ff(I),ne)))}})($c(v),E,f,g)}function Kc(r,e){return(function(s,o){const l=new Ti;return s.asyncQueue.enqueueAndForget((async()=>tP(await dP(s),o,l))),l.promise})($c(r),e)}function tw(r,e,t){const s=t.docs.get(e._key),o=new XE(r);return new Ii(r,o,e._key,s,new To(t.hasPendingWrites,t.fromCache),e.converter)}function ap(){return new ip("serverTimestamp")}(function(e,t=!0){(function(o){Uo=o})(bo),Co(new fs("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Ni(new IA(s.getProvider("auth-internal")),new RA(h,s.getProvider("app-check-internal")),(function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ce(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(v.options.projectId,E)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Ei(uy,cy,e),Ei(uy,cy,"esm2017")})();const SP=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:YE,Bytes:cn,CollectionReference:Dr,DocumentReference:ot,DocumentSnapshot:Ii,FieldPath:Wc,FieldValue:Hc,Firestore:Ni,FirestoreError:ce,GeoPoint:Bn,Query:wl,QueryDocumentSnapshot:Ya,QuerySnapshot:hs,SnapshotMetadata:To,Timestamp:qe,VectorValue:$n,_AutoId:Pc,_ByteString:Rt,_DatabaseId:ko,_DocumentKey:pe,_EmptyAuthCredentialsProvider:T_,_FieldPath:At,_cast:jn,_logWarn:Lr,_validateIsNotUsedTogether:A_,addDoc:ew,collection:ll,connectFirestoreEmulator:FE,deleteDoc:ZE,doc:vs,ensureFirestoreConfigured:$c,executeWrite:Kc,getDoc:sp,getFirestore:UE,onSnapshot:qc,serverTimestamp:ap,setDoc:op},Symbol.toStringTag,{value:"Module"})),AP={apiKey:"YOUR_API_KEY",authDomain:"YOUR_PROJECT_ID.firebaseapp.com",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_PROJECT_ID.appspot.com",messagingSenderId:"YOUR_SENDER_ID",appId:"YOUR_APP_ID"},nw=Nv(AP),wc=vA(nw),ar=UE(nw),rw=J.createContext(null);function RP({children:r}){const[e,t]=J.useState(null),[s,o]=J.useState(!1),[l,h]=J.useState(!0);J.useEffect(()=>{const g=o1(wc,async v=>{if(!v){t(null),o(!1),h(!1);return}t(v);try{const E=vs(ar,"users",v.uid),I=(await sp(E)).data();o((I==null?void 0:I.isAdmin)===!0)}catch(E){console.error("Error loading user profile",E)}h(!1)});return()=>g()},[]);const f={user:e,isAdmin:s,loading:l};return G.jsx(rw.Provider,{value:f,children:r})}function $o(){return J.useContext(rw)}function CP(){const{user:r,isAdmin:e}=$o(),t=Ic(),s=async()=>{await a1(wc),t("/login")};return G.jsxs("nav",{style:{borderBottom:"1px solid #1e293b",padding:"0.75rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#020617"},children:[G.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[G.jsx("span",{style:{fontWeight:700},children:"GolfGang"}),r&&G.jsxs(G.Fragment,{children:[G.jsx(Wu,{to:"/",children:"Events"}),e&&G.jsx(Wu,{to:"/admin",children:"Admin"})]})]}),G.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[r&&G.jsxs(G.Fragment,{children:[G.jsxs("span",{style:{fontSize:"0.85rem",opacity:.8},children:[r.email," ",e&&"(admin)"]}),G.jsx("button",{className:"btn btn-secondary",onClick:s,children:"Logout"})]}),!r&&G.jsx(Wu,{to:"/login",className:"btn btn-primary",children:"Login"})]})]})}function PP(){const[r,e]=J.useState(""),[t,s]=J.useState(""),[o,l]=J.useState(!1),[h,f]=J.useState(""),[g,v]=J.useState(!1),E=Ic(),{user:T}=$o();T&&E("/");const I=async F=>{F.preventDefault(),f(""),v(!0);try{if(o){const B=await n1(wc,r,t);await op(vs(ar,"users",B.user.uid),{email:r,isAdmin:!1})}else await r1(wc,r,t);E("/")}catch(B){console.error(B),f(B.message)}finally{v(!1)}};return G.jsxs("div",{className:"card",style:{marginTop:"3rem"},children:[G.jsx("h1",{children:o?"Register":"Login"}),G.jsx("p",{style:{fontSize:"0.9rem",opacity:.7},children:"Only your GolfGang should have accounts here."}),G.jsxs("form",{onSubmit:I,style:{marginTop:"1rem"},children:[G.jsxs("label",{children:["Email",G.jsx("input",{className:"input",type:"email",required:!0,value:r,onChange:F=>e(F.target.value),placeholder:"you@example.com"})]}),G.jsx("div",{style:{height:"0.75rem"}}),G.jsxs("label",{children:["Password",G.jsx("input",{className:"input",type:"password",required:!0,minLength:6,value:t,onChange:F=>s(F.target.value),placeholder:"••••••••"})]}),h&&G.jsx("p",{style:{color:"#f97373",marginTop:"0.5rem"},children:h}),G.jsx("button",{type:"submit",className:"btn btn-primary",style:{marginTop:"1rem",width:"100%"},disabled:g,children:g?"Working...":o?"Create account":"Login"})]}),G.jsx("button",{className:"btn btn-secondary",style:{marginTop:"0.75rem",width:"100%"},type:"button",onClick:()=>l(F=>!F),children:o?"Already have an account? Login":"Need an account? Register"})]})}const kP="modulepreload",NP=function(r){return"/golfgang/"+r},ov={},DP=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let h=function(v){return Promise.all(v.map(E=>Promise.resolve(E).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=h(t.map(v=>{if(v=NP(v),v in ov)return;ov[v]=!0;const E=v.endsWith(".css"),T=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${T}`))return;const I=document.createElement("link");if(I.rel=E?"stylesheet":kP,E||(I.as="script"),I.crossOrigin="",I.href=v,g&&I.setAttribute("nonce",g),document.head.appendChild(I),E)return new Promise((F,B)=>{I.addEventListener("load",F),I.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${v}`)))})}))}function l(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};function iw({event:r,counts:e}){var s;const t=(s=r.date)!=null&&s.toDate?r.date.toDate():null;return G.jsxs("div",{className:"card",style:{marginBottom:"0.75rem"},children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"0.5rem",alignItems:"center"},children:[G.jsxs("div",{children:[G.jsx("h2",{style:{margin:0},children:r.title}),t&&G.jsxs("p",{style:{margin:"0.25rem 0",fontSize:"0.9rem"},children:[t.toLocaleDateString()," (",t.toLocaleDateString("en-AU",{weekday:"short"}),")"]})]}),G.jsx(Wu,{to:`/event/${r.id}`,className:"btn btn-secondary",children:"Open"})]}),e&&G.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.85rem",opacity:.8},children:["✅ ",e.yes," · ❔ ",e.maybe," · ❌ ",e.no]})]})}function xP(){const[r,e]=J.useState([]),[t,s]=J.useState({}),[o,l]=J.useState(!0);return J.useEffect(()=>{const h=ll(ar,"events"),f=qc(h,g=>{const v=[];g.forEach(E=>v.push({id:E.id,...E.data()})),v.sort((E,T)=>{var B,$;const I=(B=E.date)!=null&&B.toDate?E.date.toDate():new Date,F=($=T.date)!=null&&$.toDate?T.date.toDate():new Date;return I-F}),e(v),l(!1)});return()=>f()},[]),J.useEffect(()=>{if(r.length===0)return;let h=[];return(async()=>{const{collection:f,onSnapshot:g}=await DP(async()=>{const{collection:v,onSnapshot:E}=await Promise.resolve().then(()=>SP);return{collection:v,onSnapshot:E}},void 0);h=r.map(v=>{const E=f(ar,"events",v.id,"responses");return g(E,T=>{let I=0,F=0,B=0;T.forEach($=>{const M=$.data().status;M==="yes"?I++:M==="no"?F++:M==="maybe"&&B++}),s($=>({...$,[v.id]:{yes:I,no:F,maybe:B}}))})})})(),()=>{h.forEach(f=>f&&f())}},[r]),o?G.jsx("div",{children:"Loading events..."}):G.jsxs("div",{children:[G.jsx("h1",{children:"Upcoming rounds"}),r.length===0&&G.jsx("p",{style:{opacity:.8},children:"No events yet. Ask the admin to add one."}),r.map(h=>G.jsx(iw,{event:h,counts:t[h.id]},h.id))]})}function OP({currentStatus:r,onChange:e,loading:t}){const s=l=>()=>e(l),o=l=>({flex:1,marginRight:"0.5rem",opacity:l?1:.75});return G.jsxs("div",{style:{display:"flex",marginTop:"0.75rem"},children:[G.jsx("button",{className:"btn btn-primary",style:o(r==="yes"),onClick:s("yes"),disabled:t,children:"✅ Yes"}),G.jsx("button",{className:"btn btn-secondary",style:o(r==="maybe"),onClick:s("maybe"),disabled:t,children:"❔ Maybe"}),G.jsx("button",{className:"btn btn-danger",style:{flex:1,opacity:r==="no"?1:.75},onClick:s("no"),disabled:t,children:"❌ No"})]})}function VP(){var $;const{id:r}=Q0(),{user:e}=$o(),[t,s]=J.useState(null),[o,l]=J.useState([]),[h,f]=J.useState(null),[g,v]=J.useState(!0),[E,T]=J.useState(!1);J.useEffect(()=>{const M=vs(ar,"events",r);sp(M).then(te=>{te.exists()&&s({id:te.id,...te.data()}),v(!1)});const ne=ll(ar,"events",r,"responses"),re=qc(ne,te=>{const de=[];te.forEach(Ie=>de.push({id:Ie.id,...Ie.data()})),l(de);const Ne=de.find(Ie=>Ie.id===e.uid);f((Ne==null?void 0:Ne.status)??null)});return()=>re()},[r,e.uid]);const I=async M=>{T(!0);try{const ne=vs(ar,"events",r,"responses",e.uid);await op(ne,{status:M,updatedAt:ap(),userEmail:e.email})}finally{T(!1)}};if(g||!t)return G.jsx("div",{children:"Loading event..."});const F=($=t.date)!=null&&$.toDate?t.date.toDate():null,B={yes:o.filter(M=>M.status==="yes"),maybe:o.filter(M=>M.status==="maybe"),no:o.filter(M=>M.status==="no")};return G.jsxs("div",{children:[G.jsxs("div",{className:"card",children:[G.jsx("h1",{children:t.title}),F&&G.jsx("p",{style:{marginTop:0},children:F.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"short",year:"numeric"})}),G.jsx("p",{style:{fontSize:"0.9rem",opacity:.8},children:"Mark your availability:"}),G.jsx(OP,{currentStatus:h,onChange:I,loading:E})]}),G.jsxs("div",{style:{display:"grid",gap:"0.75rem",marginTop:"1rem"},children:[G.jsx(bd,{label:"✅ Yes",list:B.yes}),G.jsx(bd,{label:"❔ Maybe",list:B.maybe}),G.jsx(bd,{label:"❌ No",list:B.no})]})]})}function bd({label:r,list:e}){return G.jsxs("div",{className:"card",children:[G.jsx("h2",{style:{marginTop:0},children:r}),e.length===0&&G.jsx("p",{style:{fontSize:"0.9rem",opacity:.7},children:"No one yet."}),e.map(t=>G.jsx("p",{style:{fontSize:"0.9rem"},children:t.userEmail||t.id},t.id))]})}function LP(){const{user:r}=$o(),[e,t]=J.useState(""),[s,o]=J.useState(""),[l,h]=J.useState(!1),[f,g]=J.useState([]);J.useEffect(()=>{const T=ll(ar,"events"),I=qc(T,F=>{const B=[];F.forEach($=>B.push({id:$.id,...$.data()})),B.sort(($,M)=>{var te,de;const ne=(te=$.date)!=null&&te.toDate?$.date.toDate():new Date,re=(de=M.date)!=null&&de.toDate?M.date.toDate():new Date;return ne-re}),g(B)});return()=>I()},[]);const v=async T=>{if(T.preventDefault(),!(!e||!s)){h(!0);try{const I=ll(ar,"events");await ew(I,{title:e,date:new Date(s),createdBy:r.uid,createdAt:ap()}),t(""),o("")}finally{h(!1)}}},E=async T=>{confirm("Delete this event?")&&await ZE(vs(ar,"events",T))};return G.jsxs("div",{children:[G.jsx("h1",{children:"Admin"}),G.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[G.jsx("h2",{style:{marginTop:0},children:"Create event"}),G.jsxs("form",{onSubmit:v,children:[G.jsxs("label",{children:["Title",G.jsx("input",{className:"input",value:e,onChange:T=>t(T.target.value),placeholder:"Round at Albert Park"})]}),G.jsx("div",{style:{height:"0.75rem"}}),G.jsxs("label",{children:["Date",G.jsx("input",{className:"input",type:"date",value:s,onChange:T=>o(T.target.value)})]}),G.jsx("button",{className:"btn btn-primary",type:"submit",style:{marginTop:"0.75rem"},disabled:l,children:l?"Creating...":"Create"})]})]}),G.jsx("h2",{children:"All events"}),f.map(T=>G.jsxs("div",{style:{position:"relative"},children:[G.jsx(iw,{event:T}),G.jsx("button",{className:"btn btn-danger",style:{position:"absolute",top:10,right:10,fontSize:"0.75rem",padding:"0.25rem 0.75rem"},onClick:()=>E(T.id),children:"Delete"})]},T.id))]})}function MP(){return G.jsxs("div",{className:"card",children:[G.jsx("h1",{children:"404"}),G.jsx("p",{children:"That page doesn’t exist."})]})}function av({children:r}){const{user:e,loading:t}=$o();return t?G.jsx("div",{className:"app-shell",children:"Loading..."}):e?r:G.jsx(tc,{to:"/login",replace:!0})}function bP({children:r}){const{user:e,isAdmin:t,loading:s}=$o();return s?G.jsx("div",{className:"app-shell",children:"Loading..."}):e?t?r:G.jsx(tc,{to:"/",replace:!0}):G.jsx(tc,{to:"/login",replace:!0})}function FP(){return G.jsxs("div",{className:"app-shell",children:[G.jsx(CP,{}),G.jsx("main",{style:{maxWidth:900,margin:"1.5rem auto",padding:"0 1rem"},children:G.jsxs(hT,{children:[G.jsx(ls,{path:"/",element:G.jsx(av,{children:G.jsx(xP,{})})}),G.jsx(ls,{path:"/login",element:G.jsx(PP,{})}),G.jsx(ls,{path:"/event/:id",element:G.jsx(av,{children:G.jsx(VP,{})})}),G.jsx(ls,{path:"/admin",element:G.jsx(bP,{children:G.jsx(LP,{})})}),G.jsx(ls,{path:"/404",element:G.jsx(MP,{})}),G.jsx(ls,{path:"*",element:G.jsx(tc,{to:"/404"})})]})})]})}v0.createRoot(document.getElementById("root")).render(G.jsx(uv.StrictMode,{children:G.jsx(vT,{basename:"/golfgang",children:G.jsx(RP,{children:G.jsx(FP,{})})})}));
