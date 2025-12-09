function eI(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function O_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zh={exports:{}},ol={},ef={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function tI(){if(Ey)return je;Ey=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,$={};function V(L,G,ge){this.props=L,this.context=G,this.refs=$,this.updater=ge||P}V.prototype.isReactComponent={},V.prototype.setState=function(L,G){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,G,"setState")},V.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function te(){}te.prototype=V.prototype;function re(L,G,ge){this.props=L,this.context=G,this.refs=$,this.updater=ge||P}var J=re.prototype=new te;J.constructor=re,M(J,V.prototype),J.isPureReactComponent=!0;var _e=Array.isArray,Ne=Object.prototype.hasOwnProperty,we={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function x(L,G,ge){var H,oe={},de=null,Ce=null;if(G!=null)for(H in G.ref!==void 0&&(Ce=G.ref),G.key!==void 0&&(de=""+G.key),G)Ne.call(G,H)&&!N.hasOwnProperty(H)&&(oe[H]=G[H]);var Re=arguments.length-2;if(Re===1)oe.children=ge;else if(1<Re){for(var ze=Array(Re),ot=0;ot<Re;ot++)ze[ot]=arguments[ot+2];oe.children=ze}if(L&&L.defaultProps)for(H in Re=L.defaultProps,Re)oe[H]===void 0&&(oe[H]=Re[H]);return{$$typeof:n,type:L,key:de,ref:Ce,props:oe,_owner:we.current}}function C(L,G){return{$$typeof:n,type:L.type,key:G,ref:L.ref,props:L.props,_owner:L._owner}}function b(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function D(L){var G={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ge){return G[ge]})}var j=/\/+/g;function A(L,G){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):G.toString(36)}function Qe(L,G,ge,H,oe){var de=typeof L;(de==="undefined"||de==="boolean")&&(L=null);var Ce=!1;if(L===null)Ce=!0;else switch(de){case"string":case"number":Ce=!0;break;case"object":switch(L.$$typeof){case n:case e:Ce=!0}}if(Ce)return Ce=L,oe=oe(Ce),L=H===""?"."+A(Ce,0):H,_e(oe)?(ge="",L!=null&&(ge=L.replace(j,"$&/")+"/"),Qe(oe,G,ge,"",function(ot){return ot})):oe!=null&&(b(oe)&&(oe=C(oe,ge+(!oe.key||Ce&&Ce.key===oe.key?"":(""+oe.key).replace(j,"$&/")+"/")+L)),G.push(oe)),1;if(Ce=0,H=H===""?".":H+":",_e(L))for(var Re=0;Re<L.length;Re++){de=L[Re];var ze=H+A(de,Re);Ce+=Qe(de,G,ge,ze,oe)}else if(ze=S(L),typeof ze=="function")for(L=ze.call(L),Re=0;!(de=L.next()).done;)de=de.value,ze=H+A(de,Re++),Ce+=Qe(de,G,ge,ze,oe);else if(de==="object")throw G=String(L),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ce}function vt(L,G,ge){if(L==null)return L;var H=[],oe=0;return Qe(L,H,"","",function(de){return G.call(ge,de,oe++)}),H}function _t(L){if(L._status===-1){var G=L._result;G=G(),G.then(function(ge){(L._status===0||L._status===-1)&&(L._status=1,L._result=ge)},function(ge){(L._status===0||L._status===-1)&&(L._status=2,L._result=ge)}),L._status===-1&&(L._status=0,L._result=G)}if(L._status===1)return L._result.default;throw L._result}var We={current:null},se={transition:null},Ee={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:se,ReactCurrentOwner:we};function ae(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:vt,forEach:function(L,G,ge){vt(L,function(){G.apply(this,arguments)},ge)},count:function(L){var G=0;return vt(L,function(){G++}),G},toArray:function(L){return vt(L,function(G){return G})||[]},only:function(L){if(!b(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},je.Component=V,je.Fragment=t,je.Profiler=o,je.PureComponent=re,je.StrictMode=i,je.Suspense=p,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ee,je.act=ae,je.cloneElement=function(L,G,ge){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var H=M({},L.props),oe=L.key,de=L.ref,Ce=L._owner;if(G!=null){if(G.ref!==void 0&&(de=G.ref,Ce=we.current),G.key!==void 0&&(oe=""+G.key),L.type&&L.type.defaultProps)var Re=L.type.defaultProps;for(ze in G)Ne.call(G,ze)&&!N.hasOwnProperty(ze)&&(H[ze]=G[ze]===void 0&&Re!==void 0?Re[ze]:G[ze])}var ze=arguments.length-2;if(ze===1)H.children=ge;else if(1<ze){Re=Array(ze);for(var ot=0;ot<ze;ot++)Re[ot]=arguments[ot+2];H.children=Re}return{$$typeof:n,type:L.type,key:oe,ref:de,props:H,_owner:Ce}},je.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},je.createElement=x,je.createFactory=function(L){var G=x.bind(null,L);return G.type=L,G},je.createRef=function(){return{current:null}},je.forwardRef=function(L){return{$$typeof:h,render:L}},je.isValidElement=b,je.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:_t}},je.memo=function(L,G){return{$$typeof:v,type:L,compare:G===void 0?null:G}},je.startTransition=function(L){var G=se.transition;se.transition={};try{L()}finally{se.transition=G}},je.unstable_act=ae,je.useCallback=function(L,G){return We.current.useCallback(L,G)},je.useContext=function(L){return We.current.useContext(L)},je.useDebugValue=function(){},je.useDeferredValue=function(L){return We.current.useDeferredValue(L)},je.useEffect=function(L,G){return We.current.useEffect(L,G)},je.useId=function(){return We.current.useId()},je.useImperativeHandle=function(L,G,ge){return We.current.useImperativeHandle(L,G,ge)},je.useInsertionEffect=function(L,G){return We.current.useInsertionEffect(L,G)},je.useLayoutEffect=function(L,G){return We.current.useLayoutEffect(L,G)},je.useMemo=function(L,G){return We.current.useMemo(L,G)},je.useReducer=function(L,G,ge){return We.current.useReducer(L,G,ge)},je.useRef=function(L){return We.current.useRef(L)},je.useState=function(L){return We.current.useState(L)},je.useSyncExternalStore=function(L,G,ge){return We.current.useSyncExternalStore(L,G,ge)},je.useTransition=function(){return We.current.useTransition()},je.version="18.3.1",je}var Ty;function rp(){return Ty||(Ty=1,ef.exports=tI()),ef.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy;function nI(){if(Iy)return ol;Iy=1;var n=rp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,v){var _,T={},S=null,P=null;v!==void 0&&(S=""+v),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(P=p.ref);for(_ in p)i.call(p,_)&&!l.hasOwnProperty(_)&&(T[_]=p[_]);if(h&&h.defaultProps)for(_ in p=h.defaultProps,p)T[_]===void 0&&(T[_]=p[_]);return{$$typeof:e,type:h,key:S,ref:P,props:T,_owner:o.current}}return ol.Fragment=t,ol.jsx=c,ol.jsxs=c,ol}var Sy;function rI(){return Sy||(Sy=1,Zh.exports=nI()),Zh.exports}var g=rI(),z=rp();const V_=O_(z),iI=eI({__proto__:null,default:V_},[z]);var rc={},tf={exports:{}},pn={},nf={exports:{}},rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function sI(){return xy||(xy=1,(function(n){function e(se,Ee){var ae=se.length;se.push(Ee);e:for(;0<ae;){var L=ae-1>>>1,G=se[L];if(0<o(G,Ee))se[L]=Ee,se[ae]=G,ae=L;else break e}}function t(se){return se.length===0?null:se[0]}function i(se){if(se.length===0)return null;var Ee=se[0],ae=se.pop();if(ae!==Ee){se[0]=ae;e:for(var L=0,G=se.length,ge=G>>>1;L<ge;){var H=2*(L+1)-1,oe=se[H],de=H+1,Ce=se[de];if(0>o(oe,ae))de<G&&0>o(Ce,oe)?(se[L]=Ce,se[de]=ae,L=de):(se[L]=oe,se[H]=ae,L=H);else if(de<G&&0>o(Ce,ae))se[L]=Ce,se[de]=ae,L=de;else break e}}return Ee}function o(se,Ee){var ae=se.sortIndex-Ee.sortIndex;return ae!==0?ae:se.id-Ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var p=[],v=[],_=1,T=null,S=3,P=!1,M=!1,$=!1,V=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(se){for(var Ee=t(v);Ee!==null;){if(Ee.callback===null)i(v);else if(Ee.startTime<=se)i(v),Ee.sortIndex=Ee.expirationTime,e(p,Ee);else break;Ee=t(v)}}function _e(se){if($=!1,J(se),!M)if(t(p)!==null)M=!0,_t(Ne);else{var Ee=t(v);Ee!==null&&We(_e,Ee.startTime-se)}}function Ne(se,Ee){M=!1,$&&($=!1,te(x),x=-1),P=!0;var ae=S;try{for(J(Ee),T=t(p);T!==null&&(!(T.expirationTime>Ee)||se&&!D());){var L=T.callback;if(typeof L=="function"){T.callback=null,S=T.priorityLevel;var G=L(T.expirationTime<=Ee);Ee=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&i(p),J(Ee)}else i(p);T=t(p)}if(T!==null)var ge=!0;else{var H=t(v);H!==null&&We(_e,H.startTime-Ee),ge=!1}return ge}finally{T=null,S=ae,P=!1}}var we=!1,N=null,x=-1,C=5,b=-1;function D(){return!(n.unstable_now()-b<C)}function j(){if(N!==null){var se=n.unstable_now();b=se;var Ee=!0;try{Ee=N(!0,se)}finally{Ee?A():(we=!1,N=null)}}else we=!1}var A;if(typeof re=="function")A=function(){re(j)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,vt=Qe.port2;Qe.port1.onmessage=j,A=function(){vt.postMessage(null)}}else A=function(){V(j,0)};function _t(se){N=se,we||(we=!0,A())}function We(se,Ee){x=V(function(){se(n.unstable_now())},Ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){M||P||(M=!0,_t(Ne))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(se){switch(S){case 1:case 2:case 3:var Ee=3;break;default:Ee=S}var ae=S;S=Ee;try{return se()}finally{S=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,Ee){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ae=S;S=se;try{return Ee()}finally{S=ae}},n.unstable_scheduleCallback=function(se,Ee,ae){var L=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?L+ae:L):ae=L,se){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,se={id:_++,callback:Ee,priorityLevel:se,startTime:ae,expirationTime:G,sortIndex:-1},ae>L?(se.sortIndex=ae,e(v,se),t(p)===null&&se===t(v)&&($?(te(x),x=-1):$=!0,We(_e,ae-L))):(se.sortIndex=G,e(p,se),M||P||(M=!0,_t(Ne))),se},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(se){var Ee=S;return function(){var ae=S;S=Ee;try{return se.apply(this,arguments)}finally{S=ae}}}})(rf)),rf}var ky;function oI(){return ky||(ky=1,nf.exports=sI()),nf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function aI(){if(Ay)return pn;Ay=1;var n=rp(),e=oI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},T={};function S(r){return p.call(T,r)?!0:p.call(_,r)?!1:v.test(r)?T[r]=!0:(_[r]=!0,!1)}function P(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,s,a,d){if(s===null||typeof s>"u"||P(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,d,f,y,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=y,this.removeEmptyString=E}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){V[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];V[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){V[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){V[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){V[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){V[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){V[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){V[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){V[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function re(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(te,re);V[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(te,re);V[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(te,re);V[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){V[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),V.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){V[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function J(r,s,a,d){var f=V.hasOwnProperty(s)?V[s]:null;(f!==null?f.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,f,d)&&(a=null),d||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,d=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var _e=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ne=Symbol.for("react.element"),we=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),D=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),se=Symbol.iterator;function Ee(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,L;function G(r){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+r}var ge=!1;function H(r,s){if(!r||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(W){var d=W}Reflect.construct(r,[],s)}else{try{s.call()}catch(W){d=W}r.call(s.prototype)}else{try{throw Error()}catch(W){d=W}r()}}catch(W){if(W&&d&&typeof W.stack=="string"){for(var f=W.stack.split(`
`),y=d.stack.split(`
`),E=f.length-1,k=y.length-1;1<=E&&0<=k&&f[E]!==y[k];)k--;for(;1<=E&&0<=k;E--,k--)if(f[E]!==y[k]){if(E!==1||k!==1)do if(E--,k--,0>k||f[E]!==y[k]){var R=`
`+f[E].replace(" at new "," at ");return r.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",r.displayName)),R}while(1<=E&&0<=k);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function oe(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=H(r.type,!1),r;case 11:return r=H(r.type.render,!1),r;case 1:return r=H(r.type,!0),r;default:return""}}function de(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case we:return"Portal";case C:return"Profiler";case x:return"StrictMode";case A:return"Suspense";case Qe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case b:return(r._context.displayName||"Context")+".Provider";case j:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case vt:return s=r.displayName||null,s!==null?s:de(r.type)||"Memo";case _t:s=r._payload,r=r._init;try{return de(r(s))}catch{}}return null}function Ce(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(s);case 8:return s===x?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Re(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ze(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ot(r){var s=ze(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,y=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){d=""+E,y.call(this,E)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(E){d=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Z(r){r._valueTracker||(r._valueTracker=ot(r))}function fe(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=ze(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function ye(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function xe(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ve(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=Re(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Je(r,s){s=s.checked,s!=null&&J(r,"checked",s,!1)}function wt(r,s){Je(r,s);var a=Re(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?hr(r,s.type,a):s.hasOwnProperty("defaultValue")&&hr(r,s.type,Re(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function En(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function hr(r,s,a){(s!=="number"||ye(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var fr=Array.isArray;function Ge(r,s,a,d){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&d&&(r[a].defaultSelected=!0)}else{for(a=""+Re(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,d&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function pa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Xs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(fr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Re(a)}}function Zs(r,s){var a=Re(s.value),d=Re(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function ma(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function kt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function At(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?kt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Lr,ga=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,f)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Lr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function di(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},is=["Webkit","ms","Moz","O"];Object.keys(rs).forEach(function(r){is.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),rs[s]=rs[r]})});function ya(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||rs.hasOwnProperty(r)&&rs[r]?(""+s).trim():s+"px"}function va(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,f=ya(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,f):r[a]=f}}var _a=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(r,s){if(s){if(_a[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ea(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ss=null;function eo(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var to=null,bn=null,pr=null;function no(r){if(r=qa(r)){if(typeof to!="function")throw Error(t(280));var s=r.stateNode;s&&(s=vu(s),to(r.stateNode,r.type,s))}}function mr(r){bn?pr?pr.push(r):pr=[r]:bn=r}function Ta(){if(bn){var r=bn,s=pr;if(pr=bn=null,no(r),s)for(r=0;r<s.length;r++)no(s[r])}}function os(r,s){return r(s)}function Ia(){}var Mr=!1;function Sa(r,s,a){if(Mr)return r(s,a);Mr=!0;try{return os(r,s,a)}finally{Mr=!1,(bn!==null||pr!==null)&&(Ia(),Ta())}}function pt(r,s){var a=r.stateNode;if(a===null)return null;var d=vu(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var ro=!1;if(h)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){ro=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{ro=!1}function as(r,s,a,d,f,y,E,k,R){var W=Array.prototype.slice.call(arguments,3);try{s.apply(a,W)}catch(X){this.onError(X)}}var ls=!1,io=null,qn=!1,xa=null,Ad={onError:function(r){ls=!0,io=r}};function so(r,s,a,d,f,y,E,k,R){ls=!1,io=null,as.apply(Ad,arguments)}function $l(r,s,a,d,f,y,E,k,R){if(so.apply(this,arguments),ls){if(ls){var W=io;ls=!1,io=null}else throw Error(t(198));qn||(qn=!0,xa=W)}}function Hn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function us(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Gn(r){if(Hn(r)!==r)throw Error(t(188))}function Wl(r){var s=r.alternate;if(!s){if(s=Hn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,d=s;;){var f=a.return;if(f===null)break;var y=f.alternate;if(y===null){if(d=f.return,d!==null){a=d;continue}break}if(f.child===y.child){for(y=f.child;y;){if(y===a)return Gn(f),r;if(y===d)return Gn(f),s;y=y.sibling}throw Error(t(188))}if(a.return!==d.return)a=f,d=y;else{for(var E=!1,k=f.child;k;){if(k===a){E=!0,a=f,d=y;break}if(k===d){E=!0,d=f,a=y;break}k=k.sibling}if(!E){for(k=y.child;k;){if(k===a){E=!0,a=y,d=f;break}if(k===d){E=!0,d=y,a=f;break}k=k.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ka(r){return r=Wl(r),r!==null?oo(r):null}function oo(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=oo(r);if(s!==null)return s;r=r.sibling}return null}var ao=e.unstable_scheduleCallback,Aa=e.unstable_cancelCallback,ql=e.unstable_shouldYield,Cd=e.unstable_requestPaint,tt=e.unstable_now,Hl=e.unstable_getCurrentPriorityLevel,cs=e.unstable_ImmediatePriority,hi=e.unstable_UserBlockingPriority,Nn=e.unstable_NormalPriority,Ca=e.unstable_LowPriority,Gl=e.unstable_IdlePriority,ds=null,Tn=null;function Kl(r){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(ds,r,void 0,(r.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Yl,Ra=Math.log,Ql=Math.LN2;function Yl(r){return r>>>=0,r===0?32:31-(Ra(r)/Ql|0)|0}var lo=64,uo=4194304;function fi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function hs(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,f=r.suspendedLanes,y=r.pingedLanes,E=a&268435455;if(E!==0){var k=E&~f;k!==0?d=fi(k):(y&=E,y!==0&&(d=fi(y)))}else E=a&~f,E!==0?d=fi(E):y!==0&&(d=fi(y));if(d===0)return 0;if(s!==0&&s!==d&&(s&f)===0&&(f=d&-d,y=s&-s,f>=y||f===16&&(y&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-en(s),f=1<<a,d|=r[a],s&=~f;return d}function Rd(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fr(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,f=r.expirationTimes,y=r.pendingLanes;0<y;){var E=31-en(y),k=1<<E,R=f[E];R===-1?((k&a)===0||(k&d)!==0)&&(f[E]=Rd(k,s)):R<=s&&(r.expiredLanes|=k),y&=~k}}function In(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function fs(){var r=lo;return lo<<=1,(lo&4194240)===0&&(lo=64),r}function pi(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function mi(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-en(s),r[s]=a}function Xe(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-en(a),y=1<<f;s[f]=0,d[f]=-1,r[f]=-1,a&=~y}}function gi(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-en(a),f=1<<d;f&s|r[d]&s&&(r[d]|=s),a&=~f}}var Fe=0;function yi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Jl,co,Xl,Zl,eu,Pa=!1,gr=[],Mt=null,Kn=null,Qn=null,vi=new Map,Dn=new Map,yr=[],Pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tu(r,s){switch(r){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":vi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(s.pointerId)}}function an(r,s,a,d,f,y){return r===null||r.nativeEvent!==y?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:y,targetContainers:[f]},s!==null&&(s=qa(s),s!==null&&co(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function bd(r,s,a,d,f){switch(s){case"focusin":return Mt=an(Mt,r,s,a,d,f),!0;case"dragenter":return Kn=an(Kn,r,s,a,d,f),!0;case"mouseover":return Qn=an(Qn,r,s,a,d,f),!0;case"pointerover":var y=f.pointerId;return vi.set(y,an(vi.get(y)||null,r,s,a,d,f)),!0;case"gotpointercapture":return y=f.pointerId,Dn.set(y,an(Dn.get(y)||null,r,s,a,d,f)),!0}return!1}function nu(r){var s=vs(r.target);if(s!==null){var a=Hn(s);if(a!==null){if(s=a.tag,s===13){if(s=us(a),s!==null){r.blockedOn=s,eu(r.priority,function(){Xl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ur(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=ho(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);ss=d,a.target.dispatchEvent(d),ss=null}else return s=qa(a),s!==null&&co(s),r.blockedOn=a,!1;s.shift()}return!0}function ps(r,s,a){Ur(r)&&a.delete(s)}function ru(){Pa=!1,Mt!==null&&Ur(Mt)&&(Mt=null),Kn!==null&&Ur(Kn)&&(Kn=null),Qn!==null&&Ur(Qn)&&(Qn=null),vi.forEach(ps),Dn.forEach(ps)}function Yn(r,s){r.blockedOn===s&&(r.blockedOn=null,Pa||(Pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ru)))}function Jn(r){function s(f){return Yn(f,r)}if(0<gr.length){Yn(gr[0],r);for(var a=1;a<gr.length;a++){var d=gr[a];d.blockedOn===r&&(d.blockedOn=null)}}for(Mt!==null&&Yn(Mt,r),Kn!==null&&Yn(Kn,r),Qn!==null&&Yn(Qn,r),vi.forEach(s),Dn.forEach(s),a=0;a<yr.length;a++)d=yr[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<yr.length&&(a=yr[0],a.blockedOn===null);)nu(a),a.blockedOn===null&&yr.shift()}var Br=_e.ReactCurrentBatchConfig,_i=!0;function at(r,s,a,d){var f=Fe,y=Br.transition;Br.transition=null;try{Fe=1,ba(r,s,a,d)}finally{Fe=f,Br.transition=y}}function Nd(r,s,a,d){var f=Fe,y=Br.transition;Br.transition=null;try{Fe=4,ba(r,s,a,d)}finally{Fe=f,Br.transition=y}}function ba(r,s,a,d){if(_i){var f=ho(r,s,a,d);if(f===null)$d(r,s,d,ms,a),tu(r,d);else if(bd(f,r,s,a,d))d.stopPropagation();else if(tu(r,d),s&4&&-1<Pd.indexOf(r)){for(;f!==null;){var y=qa(f);if(y!==null&&Jl(y),y=ho(r,s,a,d),y===null&&$d(r,s,d,ms,a),y===f)break;f=y}f!==null&&d.stopPropagation()}else $d(r,s,d,null,a)}}var ms=null;function ho(r,s,a,d){if(ms=null,r=eo(d),r=vs(r),r!==null)if(s=Hn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=us(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ms=r,null}function Na(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hl()){case cs:return 1;case hi:return 4;case Nn:case Ca:return 16;case Gl:return 536870912;default:return 16}default:return 16}}var Sn=null,fo=null,ln=null;function Da(){if(ln)return ln;var r,s=fo,a=s.length,d,f="value"in Sn?Sn.value:Sn.textContent,y=f.length;for(r=0;r<a&&s[r]===f[r];r++);var E=a-r;for(d=1;d<=E&&s[a-d]===f[y-d];d++);return ln=f.slice(r,1<d?1-d:void 0)}function po(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function vr(){return!0}function Oa(){return!1}function Ft(r){function s(a,d,f,y,E){this._reactName=a,this._targetInst=f,this.type=d,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var k in r)r.hasOwnProperty(k)&&(a=r[k],this[k]=a?a(y):y[k]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?vr:Oa,this.isPropagationStopped=Oa,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),s}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mo=Ft(Xn),_r=ae({},Xn,{view:0,detail:0}),Dd=Ft(_r),go,zr,wi,gs=ae({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==wi&&(wi&&r.type==="mousemove"?(go=r.screenX-wi.screenX,zr=r.screenY-wi.screenY):zr=go=0,wi=r),go)},movementY:function(r){return"movementY"in r?r.movementY:zr}}),yo=Ft(gs),Va=ae({},gs,{dataTransfer:0}),iu=Ft(Va),vo=ae({},_r,{relatedTarget:0}),_o=Ft(vo),su=ae({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),$r=Ft(su),ou=ae({},Xn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),au=Ft(ou),lu=ae({},Xn,{data:0}),ja=Ft(lu),wo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=uu[r])?!!s[r]:!1}function wr(){return cu}var u=ae({},_r,{key:function(r){if(r.key){var s=wo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=po(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?tn[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wr,charCode:function(r){return r.type==="keypress"?po(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?po(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Ft(u),w=ae({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Ft(w),F=ae({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wr}),q=Ft(F),ie=ae({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ke=Ft(ie),Ct=ae({},gs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ue=Ft(Ct),Nt=[9,13,27,32],Et=h&&"CompositionEvent"in window,On=null;h&&"documentMode"in document&&(On=document.documentMode);var xn=h&&"TextEvent"in window&&!On,ys=h&&(!Et||On&&8<On&&11>=On),Eo=" ",mm=!1;function gm(r,s){switch(r){case"keyup":return Nt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ym(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var To=!1;function JE(r,s){switch(r){case"compositionend":return ym(s);case"keypress":return s.which!==32?null:(mm=!0,Eo);case"textInput":return r=s.data,r===Eo&&mm?null:r;default:return null}}function XE(r,s){if(To)return r==="compositionend"||!Et&&gm(r,s)?(r=Da(),ln=fo=Sn=null,To=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ys&&s.locale!=="ko"?null:s.data;default:return null}}var ZE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!ZE[r.type]:s==="textarea"}function _m(r,s,a,d){mr(d),s=mu(s,"onChange"),0<s.length&&(a=new mo("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var La=null,Ma=null;function eT(r){Lm(r,0)}function du(r){var s=Ao(r);if(fe(s))return r}function tT(r,s){if(r==="change")return s}var wm=!1;if(h){var Od;if(h){var Vd="oninput"in document;if(!Vd){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),Vd=typeof Em.oninput=="function"}Od=Vd}else Od=!1;wm=Od&&(!document.documentMode||9<document.documentMode)}function Tm(){La&&(La.detachEvent("onpropertychange",Im),Ma=La=null)}function Im(r){if(r.propertyName==="value"&&du(Ma)){var s=[];_m(s,Ma,r,eo(r)),Sa(eT,s)}}function nT(r,s,a){r==="focusin"?(Tm(),La=s,Ma=a,La.attachEvent("onpropertychange",Im)):r==="focusout"&&Tm()}function rT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return du(Ma)}function iT(r,s){if(r==="click")return du(s)}function sT(r,s){if(r==="input"||r==="change")return du(s)}function oT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Zn=typeof Object.is=="function"?Object.is:oT;function Fa(r,s){if(Zn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var f=a[d];if(!p.call(s,f)||!Zn(r[f],s[f]))return!1}return!0}function Sm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function xm(r,s){var a=Sm(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sm(a)}}function km(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?km(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Am(){for(var r=window,s=ye();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=ye(r.document)}return s}function jd(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function aT(r){var s=Am(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&km(a.ownerDocument.documentElement,a)){if(d!==null&&jd(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,y=Math.min(d.start,f);d=d.end===void 0?y:Math.min(d.end,f),!r.extend&&y>d&&(f=d,d=y,y=f),f=xm(a,y);var E=xm(a,d);f&&E&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),y>d?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var lT=h&&"documentMode"in document&&11>=document.documentMode,Io=null,Ld=null,Ua=null,Md=!1;function Cm(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Md||Io==null||Io!==ye(d)||(d=Io,"selectionStart"in d&&jd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ua&&Fa(Ua,d)||(Ua=d,d=mu(Ld,"onSelect"),0<d.length&&(s=new mo("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=Io)))}function hu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var So={animationend:hu("Animation","AnimationEnd"),animationiteration:hu("Animation","AnimationIteration"),animationstart:hu("Animation","AnimationStart"),transitionend:hu("Transition","TransitionEnd")},Fd={},Rm={};h&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function fu(r){if(Fd[r])return Fd[r];if(!So[r])return r;var s=So[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Rm)return Fd[r]=s[a];return r}var Pm=fu("animationend"),bm=fu("animationiteration"),Nm=fu("animationstart"),Dm=fu("transitionend"),Om=new Map,Vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(r,s){Om.set(r,s),l(s,[r])}for(var Ud=0;Ud<Vm.length;Ud++){var Bd=Vm[Ud],uT=Bd.toLowerCase(),cT=Bd[0].toUpperCase()+Bd.slice(1);Ei(uT,"on"+cT)}Ei(Pm,"onAnimationEnd"),Ei(bm,"onAnimationIteration"),Ei(Nm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Dm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function jm(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,$l(d,s,void 0,r),r.currentTarget=null}function Lm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],f=d.event;d=d.listeners;e:{var y=void 0;if(s)for(var E=d.length-1;0<=E;E--){var k=d[E],R=k.instance,W=k.currentTarget;if(k=k.listener,R!==y&&f.isPropagationStopped())break e;jm(f,k,W),y=R}else for(E=0;E<d.length;E++){if(k=d[E],R=k.instance,W=k.currentTarget,k=k.listener,R!==y&&f.isPropagationStopped())break e;jm(f,k,W),y=R}}}if(qn)throw r=xa,qn=!1,xa=null,r}function it(r,s){var a=s[Qd];a===void 0&&(a=s[Qd]=new Set);var d=r+"__bubble";a.has(d)||(Mm(s,r,2,!1),a.add(d))}function zd(r,s,a){var d=0;s&&(d|=4),Mm(a,r,d,s)}var pu="_reactListening"+Math.random().toString(36).slice(2);function za(r){if(!r[pu]){r[pu]=!0,i.forEach(function(a){a!=="selectionchange"&&(dT.has(a)||zd(a,!1,r),zd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[pu]||(s[pu]=!0,zd("selectionchange",!1,s))}}function Mm(r,s,a,d){switch(Na(s)){case 1:var f=at;break;case 4:f=Nd;break;default:f=ba}a=f.bind(null,s,a,r),f=void 0,!ro||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),d?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function $d(r,s,a,d,f){var y=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var E=d.tag;if(E===3||E===4){var k=d.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(E===4)for(E=d.return;E!==null;){var R=E.tag;if((R===3||R===4)&&(R=E.stateNode.containerInfo,R===f||R.nodeType===8&&R.parentNode===f))return;E=E.return}for(;k!==null;){if(E=vs(k),E===null)return;if(R=E.tag,R===5||R===6){d=y=E;continue e}k=k.parentNode}}d=d.return}Sa(function(){var W=y,X=eo(a),ee=[];e:{var Y=Om.get(r);if(Y!==void 0){var ue=mo,pe=r;switch(r){case"keypress":if(po(a)===0)break e;case"keydown":case"keyup":ue=m;break;case"focusin":pe="focus",ue=_o;break;case"focusout":pe="blur",ue=_o;break;case"beforeblur":case"afterblur":ue=_o;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=iu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=q;break;case Pm:case bm:case Nm:ue=$r;break;case Dm:ue=Ke;break;case"scroll":ue=Dd;break;case"wheel":ue=Ue;break;case"copy":case"cut":case"paste":ue=au;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=I}var me=(s&4)!==0,mt=!me&&r==="scroll",U=me?Y!==null?Y+"Capture":null:Y;me=[];for(var O=W,B;O!==null;){B=O;var ne=B.stateNode;if(B.tag===5&&ne!==null&&(B=ne,U!==null&&(ne=pt(O,U),ne!=null&&me.push($a(O,ne,B)))),mt)break;O=O.return}0<me.length&&(Y=new ue(Y,pe,null,a,X),ee.push({event:Y,listeners:me}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",ue=r==="mouseout"||r==="pointerout",Y&&a!==ss&&(pe=a.relatedTarget||a.fromElement)&&(vs(pe)||pe[Wr]))break e;if((ue||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,ue?(pe=a.relatedTarget||a.toElement,ue=W,pe=pe?vs(pe):null,pe!==null&&(mt=Hn(pe),pe!==mt||pe.tag!==5&&pe.tag!==6)&&(pe=null)):(ue=null,pe=W),ue!==pe)){if(me=yo,ne="onMouseLeave",U="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(me=I,ne="onPointerLeave",U="onPointerEnter",O="pointer"),mt=ue==null?Y:Ao(ue),B=pe==null?Y:Ao(pe),Y=new me(ne,O+"leave",ue,a,X),Y.target=mt,Y.relatedTarget=B,ne=null,vs(X)===W&&(me=new me(U,O+"enter",pe,a,X),me.target=B,me.relatedTarget=mt,ne=me),mt=ne,ue&&pe)t:{for(me=ue,U=pe,O=0,B=me;B;B=xo(B))O++;for(B=0,ne=U;ne;ne=xo(ne))B++;for(;0<O-B;)me=xo(me),O--;for(;0<B-O;)U=xo(U),B--;for(;O--;){if(me===U||U!==null&&me===U.alternate)break t;me=xo(me),U=xo(U)}me=null}else me=null;ue!==null&&Fm(ee,Y,ue,me,!1),pe!==null&&mt!==null&&Fm(ee,mt,pe,me,!0)}}e:{if(Y=W?Ao(W):window,ue=Y.nodeName&&Y.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Y.type==="file")var ve=tT;else if(vm(Y))if(wm)ve=sT;else{ve=rT;var Ie=nT}else(ue=Y.nodeName)&&ue.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(ve=iT);if(ve&&(ve=ve(r,W))){_m(ee,ve,a,X);break e}Ie&&Ie(r,Y,W),r==="focusout"&&(Ie=Y._wrapperState)&&Ie.controlled&&Y.type==="number"&&hr(Y,"number",Y.value)}switch(Ie=W?Ao(W):window,r){case"focusin":(vm(Ie)||Ie.contentEditable==="true")&&(Io=Ie,Ld=W,Ua=null);break;case"focusout":Ua=Ld=Io=null;break;case"mousedown":Md=!0;break;case"contextmenu":case"mouseup":case"dragend":Md=!1,Cm(ee,a,X);break;case"selectionchange":if(lT)break;case"keydown":case"keyup":Cm(ee,a,X)}var Se;if(Et)e:{switch(r){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else To?gm(r,a)&&(Pe="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(ys&&a.locale!=="ko"&&(To||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&To&&(Se=Da()):(Sn=X,fo="value"in Sn?Sn.value:Sn.textContent,To=!0)),Ie=mu(W,Pe),0<Ie.length&&(Pe=new ja(Pe,r,null,a,X),ee.push({event:Pe,listeners:Ie}),Se?Pe.data=Se:(Se=ym(a),Se!==null&&(Pe.data=Se)))),(Se=xn?JE(r,a):XE(r,a))&&(W=mu(W,"onBeforeInput"),0<W.length&&(X=new ja("onBeforeInput","beforeinput",null,a,X),ee.push({event:X,listeners:W}),X.data=Se))}Lm(ee,s)})}function $a(r,s,a){return{instance:r,listener:s,currentTarget:a}}function mu(r,s){for(var a=s+"Capture",d=[];r!==null;){var f=r,y=f.stateNode;f.tag===5&&y!==null&&(f=y,y=pt(r,a),y!=null&&d.unshift($a(r,y,f)),y=pt(r,s),y!=null&&d.push($a(r,y,f))),r=r.return}return d}function xo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Fm(r,s,a,d,f){for(var y=s._reactName,E=[];a!==null&&a!==d;){var k=a,R=k.alternate,W=k.stateNode;if(R!==null&&R===d)break;k.tag===5&&W!==null&&(k=W,f?(R=pt(a,y),R!=null&&E.unshift($a(a,R,k))):f||(R=pt(a,y),R!=null&&E.push($a(a,R,k)))),a=a.return}E.length!==0&&r.push({event:s,listeners:E})}var hT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function Um(r){return(typeof r=="string"?r:""+r).replace(hT,`
`).replace(fT,"")}function gu(r,s,a){if(s=Um(s),Um(r)!==s&&a)throw Error(t(425))}function yu(){}var Wd=null,qd=null;function Hd(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Gd=typeof setTimeout=="function"?setTimeout:void 0,pT=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,mT=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(r){return Bm.resolve(null).then(r).catch(gT)}:Gd;function gT(r){setTimeout(function(){throw r})}function Kd(r,s){var a=s,d=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(d===0){r.removeChild(f),Jn(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=f}while(a);Jn(s)}function Ti(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function zm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ko=Math.random().toString(36).slice(2),Er="__reactFiber$"+ko,Wa="__reactProps$"+ko,Wr="__reactContainer$"+ko,Qd="__reactEvents$"+ko,yT="__reactListeners$"+ko,vT="__reactHandles$"+ko;function vs(r){var s=r[Er];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Wr]||a[Er]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=zm(r);r!==null;){if(a=r[Er])return a;r=zm(r)}return s}r=a,a=r.parentNode}return null}function qa(r){return r=r[Er]||r[Wr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Ao(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function vu(r){return r[Wa]||null}var Yd=[],Co=-1;function Ii(r){return{current:r}}function st(r){0>Co||(r.current=Yd[Co],Yd[Co]=null,Co--)}function nt(r,s){Co++,Yd[Co]=r.current,r.current=s}var Si={},qt=Ii(Si),un=Ii(!1),_s=Si;function Ro(r,s){var a=r.type.contextTypes;if(!a)return Si;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var f={},y;for(y in a)f[y]=s[y];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function cn(r){return r=r.childContextTypes,r!=null}function _u(){st(un),st(qt)}function $m(r,s,a){if(qt.current!==Si)throw Error(t(168));nt(qt,s),nt(un,a)}function Wm(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var f in d)if(!(f in s))throw Error(t(108,Ce(r)||"Unknown",f));return ae({},a,d)}function wu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Si,_s=qt.current,nt(qt,r),nt(un,un.current),!0}function qm(r,s,a){var d=r.stateNode;if(!d)throw Error(t(169));a?(r=Wm(r,s,_s),d.__reactInternalMemoizedMergedChildContext=r,st(un),st(qt),nt(qt,r)):st(un),nt(un,a)}var qr=null,Eu=!1,Jd=!1;function Hm(r){qr===null?qr=[r]:qr.push(r)}function _T(r){Eu=!0,Hm(r)}function xi(){if(!Jd&&qr!==null){Jd=!0;var r=0,s=Fe;try{var a=qr;for(Fe=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}qr=null,Eu=!1}catch(f){throw qr!==null&&(qr=qr.slice(r+1)),ao(cs,xi),f}finally{Fe=s,Jd=!1}}return null}var Po=[],bo=0,Tu=null,Iu=0,Vn=[],jn=0,ws=null,Hr=1,Gr="";function Es(r,s){Po[bo++]=Iu,Po[bo++]=Tu,Tu=r,Iu=s}function Gm(r,s,a){Vn[jn++]=Hr,Vn[jn++]=Gr,Vn[jn++]=ws,ws=r;var d=Hr;r=Gr;var f=32-en(d)-1;d&=~(1<<f),a+=1;var y=32-en(s)+f;if(30<y){var E=f-f%5;y=(d&(1<<E)-1).toString(32),d>>=E,f-=E,Hr=1<<32-en(s)+f|a<<f|d,Gr=y+r}else Hr=1<<y|a<<f|d,Gr=r}function Xd(r){r.return!==null&&(Es(r,1),Gm(r,1,0))}function Zd(r){for(;r===Tu;)Tu=Po[--bo],Po[bo]=null,Iu=Po[--bo],Po[bo]=null;for(;r===ws;)ws=Vn[--jn],Vn[jn]=null,Gr=Vn[--jn],Vn[jn]=null,Hr=Vn[--jn],Vn[jn]=null}var kn=null,An=null,lt=!1,er=null;function Km(r,s){var a=Un(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Qm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,kn=r,An=Ti(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,kn=r,An=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ws!==null?{id:Hr,overflow:Gr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Un(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,kn=r,An=null,!0):!1;default:return!1}}function eh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function th(r){if(lt){var s=An;if(s){var a=s;if(!Qm(r,s)){if(eh(r))throw Error(t(418));s=Ti(a.nextSibling);var d=kn;s&&Qm(r,s)?Km(d,a):(r.flags=r.flags&-4097|2,lt=!1,kn=r)}}else{if(eh(r))throw Error(t(418));r.flags=r.flags&-4097|2,lt=!1,kn=r}}}function Ym(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;kn=r}function Su(r){if(r!==kn)return!1;if(!lt)return Ym(r),lt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Hd(r.type,r.memoizedProps)),s&&(s=An)){if(eh(r))throw Jm(),Error(t(418));for(;s;)Km(r,s),s=Ti(s.nextSibling)}if(Ym(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){An=Ti(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}An=null}}else An=kn?Ti(r.stateNode.nextSibling):null;return!0}function Jm(){for(var r=An;r;)r=Ti(r.nextSibling)}function No(){An=kn=null,lt=!1}function nh(r){er===null?er=[r]:er.push(r)}var wT=_e.ReactCurrentBatchConfig;function Ha(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,r));var f=d,y=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(E){var k=f.refs;E===null?delete k[y]:k[y]=E},s._stringRef=y,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function xu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Xm(r){var s=r._init;return s(r._payload)}function Zm(r){function s(U,O){if(r){var B=U.deletions;B===null?(U.deletions=[O],U.flags|=16):B.push(O)}}function a(U,O){if(!r)return null;for(;O!==null;)s(U,O),O=O.sibling;return null}function d(U,O){for(U=new Map;O!==null;)O.key!==null?U.set(O.key,O):U.set(O.index,O),O=O.sibling;return U}function f(U,O){return U=Di(U,O),U.index=0,U.sibling=null,U}function y(U,O,B){return U.index=B,r?(B=U.alternate,B!==null?(B=B.index,B<O?(U.flags|=2,O):B):(U.flags|=2,O)):(U.flags|=1048576,O)}function E(U){return r&&U.alternate===null&&(U.flags|=2),U}function k(U,O,B,ne){return O===null||O.tag!==6?(O=Gh(B,U.mode,ne),O.return=U,O):(O=f(O,B),O.return=U,O)}function R(U,O,B,ne){var ve=B.type;return ve===N?X(U,O,B.props.children,ne,B.key):O!==null&&(O.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===_t&&Xm(ve)===O.type)?(ne=f(O,B.props),ne.ref=Ha(U,O,B),ne.return=U,ne):(ne=Qu(B.type,B.key,B.props,null,U.mode,ne),ne.ref=Ha(U,O,B),ne.return=U,ne)}function W(U,O,B,ne){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=Kh(B,U.mode,ne),O.return=U,O):(O=f(O,B.children||[]),O.return=U,O)}function X(U,O,B,ne,ve){return O===null||O.tag!==7?(O=Rs(B,U.mode,ne,ve),O.return=U,O):(O=f(O,B),O.return=U,O)}function ee(U,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Gh(""+O,U.mode,B),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ne:return B=Qu(O.type,O.key,O.props,null,U.mode,B),B.ref=Ha(U,null,O),B.return=U,B;case we:return O=Kh(O,U.mode,B),O.return=U,O;case _t:var ne=O._init;return ee(U,ne(O._payload),B)}if(fr(O)||Ee(O))return O=Rs(O,U.mode,B,null),O.return=U,O;xu(U,O)}return null}function Y(U,O,B,ne){var ve=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return ve!==null?null:k(U,O,""+B,ne);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Ne:return B.key===ve?R(U,O,B,ne):null;case we:return B.key===ve?W(U,O,B,ne):null;case _t:return ve=B._init,Y(U,O,ve(B._payload),ne)}if(fr(B)||Ee(B))return ve!==null?null:X(U,O,B,ne,null);xu(U,B)}return null}function ue(U,O,B,ne,ve){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return U=U.get(B)||null,k(O,U,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Ne:return U=U.get(ne.key===null?B:ne.key)||null,R(O,U,ne,ve);case we:return U=U.get(ne.key===null?B:ne.key)||null,W(O,U,ne,ve);case _t:var Ie=ne._init;return ue(U,O,B,Ie(ne._payload),ve)}if(fr(ne)||Ee(ne))return U=U.get(B)||null,X(O,U,ne,ve,null);xu(O,ne)}return null}function pe(U,O,B,ne){for(var ve=null,Ie=null,Se=O,Pe=O=0,Vt=null;Se!==null&&Pe<B.length;Pe++){Se.index>Pe?(Vt=Se,Se=null):Vt=Se.sibling;var qe=Y(U,Se,B[Pe],ne);if(qe===null){Se===null&&(Se=Vt);break}r&&Se&&qe.alternate===null&&s(U,Se),O=y(qe,O,Pe),Ie===null?ve=qe:Ie.sibling=qe,Ie=qe,Se=Vt}if(Pe===B.length)return a(U,Se),lt&&Es(U,Pe),ve;if(Se===null){for(;Pe<B.length;Pe++)Se=ee(U,B[Pe],ne),Se!==null&&(O=y(Se,O,Pe),Ie===null?ve=Se:Ie.sibling=Se,Ie=Se);return lt&&Es(U,Pe),ve}for(Se=d(U,Se);Pe<B.length;Pe++)Vt=ue(Se,U,Pe,B[Pe],ne),Vt!==null&&(r&&Vt.alternate!==null&&Se.delete(Vt.key===null?Pe:Vt.key),O=y(Vt,O,Pe),Ie===null?ve=Vt:Ie.sibling=Vt,Ie=Vt);return r&&Se.forEach(function(Oi){return s(U,Oi)}),lt&&Es(U,Pe),ve}function me(U,O,B,ne){var ve=Ee(B);if(typeof ve!="function")throw Error(t(150));if(B=ve.call(B),B==null)throw Error(t(151));for(var Ie=ve=null,Se=O,Pe=O=0,Vt=null,qe=B.next();Se!==null&&!qe.done;Pe++,qe=B.next()){Se.index>Pe?(Vt=Se,Se=null):Vt=Se.sibling;var Oi=Y(U,Se,qe.value,ne);if(Oi===null){Se===null&&(Se=Vt);break}r&&Se&&Oi.alternate===null&&s(U,Se),O=y(Oi,O,Pe),Ie===null?ve=Oi:Ie.sibling=Oi,Ie=Oi,Se=Vt}if(qe.done)return a(U,Se),lt&&Es(U,Pe),ve;if(Se===null){for(;!qe.done;Pe++,qe=B.next())qe=ee(U,qe.value,ne),qe!==null&&(O=y(qe,O,Pe),Ie===null?ve=qe:Ie.sibling=qe,Ie=qe);return lt&&Es(U,Pe),ve}for(Se=d(U,Se);!qe.done;Pe++,qe=B.next())qe=ue(Se,U,Pe,qe.value,ne),qe!==null&&(r&&qe.alternate!==null&&Se.delete(qe.key===null?Pe:qe.key),O=y(qe,O,Pe),Ie===null?ve=qe:Ie.sibling=qe,Ie=qe);return r&&Se.forEach(function(ZT){return s(U,ZT)}),lt&&Es(U,Pe),ve}function mt(U,O,B,ne){if(typeof B=="object"&&B!==null&&B.type===N&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Ne:e:{for(var ve=B.key,Ie=O;Ie!==null;){if(Ie.key===ve){if(ve=B.type,ve===N){if(Ie.tag===7){a(U,Ie.sibling),O=f(Ie,B.props.children),O.return=U,U=O;break e}}else if(Ie.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===_t&&Xm(ve)===Ie.type){a(U,Ie.sibling),O=f(Ie,B.props),O.ref=Ha(U,Ie,B),O.return=U,U=O;break e}a(U,Ie);break}else s(U,Ie);Ie=Ie.sibling}B.type===N?(O=Rs(B.props.children,U.mode,ne,B.key),O.return=U,U=O):(ne=Qu(B.type,B.key,B.props,null,U.mode,ne),ne.ref=Ha(U,O,B),ne.return=U,U=ne)}return E(U);case we:e:{for(Ie=B.key;O!==null;){if(O.key===Ie)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){a(U,O.sibling),O=f(O,B.children||[]),O.return=U,U=O;break e}else{a(U,O);break}else s(U,O);O=O.sibling}O=Kh(B,U.mode,ne),O.return=U,U=O}return E(U);case _t:return Ie=B._init,mt(U,O,Ie(B._payload),ne)}if(fr(B))return pe(U,O,B,ne);if(Ee(B))return me(U,O,B,ne);xu(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,O!==null&&O.tag===6?(a(U,O.sibling),O=f(O,B),O.return=U,U=O):(a(U,O),O=Gh(B,U.mode,ne),O.return=U,U=O),E(U)):a(U,O)}return mt}var Do=Zm(!0),eg=Zm(!1),ku=Ii(null),Au=null,Oo=null,rh=null;function ih(){rh=Oo=Au=null}function sh(r){var s=ku.current;st(ku),r._currentValue=s}function oh(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function Vo(r,s){Au=r,rh=Oo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(dn=!0),r.firstContext=null)}function Ln(r){var s=r._currentValue;if(rh!==r)if(r={context:r,memoizedValue:s,next:null},Oo===null){if(Au===null)throw Error(t(308));Oo=r,Au.dependencies={lanes:0,firstContext:r}}else Oo=Oo.next=r;return s}var Ts=null;function ah(r){Ts===null?Ts=[r]:Ts.push(r)}function tg(r,s,a,d){var f=s.interleaved;return f===null?(a.next=a,ah(s)):(a.next=f.next,f.next=a),s.interleaved=a,Kr(r,d)}function Kr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ki=!1;function lh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ng(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Qr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ai(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,($e&2)!==0){var f=d.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),d.pending=s,Kr(r,a)}return f=d.interleaved,f===null?(s.next=s,ah(d)):(s.next=f.next,f.next=s),d.interleaved=s,Kr(r,a)}function Cu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,gi(r,a)}}function rg(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var f=null,y=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};y===null?f=y=E:y=y.next=E,a=a.next}while(a!==null);y===null?f=y=s:y=y.next=s}else f=y=s;a={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:y,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Ru(r,s,a,d){var f=r.updateQueue;ki=!1;var y=f.firstBaseUpdate,E=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var R=k,W=R.next;R.next=null,E===null?y=W:E.next=W,E=R;var X=r.alternate;X!==null&&(X=X.updateQueue,k=X.lastBaseUpdate,k!==E&&(k===null?X.firstBaseUpdate=W:k.next=W,X.lastBaseUpdate=R))}if(y!==null){var ee=f.baseState;E=0,X=W=R=null,k=y;do{var Y=k.lane,ue=k.eventTime;if((d&Y)===Y){X!==null&&(X=X.next={eventTime:ue,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var pe=r,me=k;switch(Y=s,ue=a,me.tag){case 1:if(pe=me.payload,typeof pe=="function"){ee=pe.call(ue,ee,Y);break e}ee=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=me.payload,Y=typeof pe=="function"?pe.call(ue,ee,Y):pe,Y==null)break e;ee=ae({},ee,Y);break e;case 2:ki=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[k]:Y.push(k))}else ue={eventTime:ue,lane:Y,tag:k.tag,payload:k.payload,callback:k.callback,next:null},X===null?(W=X=ue,R=ee):X=X.next=ue,E|=Y;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;Y=k,k=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(X===null&&(R=ee),f.baseState=R,f.firstBaseUpdate=W,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do E|=f.lane,f=f.next;while(f!==s)}else y===null&&(f.shared.lanes=0);xs|=E,r.lanes=E,r.memoizedState=ee}}function ig(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],f=d.callback;if(f!==null){if(d.callback=null,d=a,typeof f!="function")throw Error(t(191,f));f.call(d)}}}var Ga={},Tr=Ii(Ga),Ka=Ii(Ga),Qa=Ii(Ga);function Is(r){if(r===Ga)throw Error(t(174));return r}function uh(r,s){switch(nt(Qa,s),nt(Ka,r),nt(Tr,Ga),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:At(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=At(s,r)}st(Tr),nt(Tr,s)}function jo(){st(Tr),st(Ka),st(Qa)}function sg(r){Is(Qa.current);var s=Is(Tr.current),a=At(s,r.type);s!==a&&(nt(Ka,r),nt(Tr,a))}function ch(r){Ka.current===r&&(st(Tr),st(Ka))}var ut=Ii(0);function Pu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var dh=[];function hh(){for(var r=0;r<dh.length;r++)dh[r]._workInProgressVersionPrimary=null;dh.length=0}var bu=_e.ReactCurrentDispatcher,fh=_e.ReactCurrentBatchConfig,Ss=0,ct=null,Rt=null,Dt=null,Nu=!1,Ya=!1,Ja=0,ET=0;function Ht(){throw Error(t(321))}function ph(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Zn(r[a],s[a]))return!1;return!0}function mh(r,s,a,d,f,y){if(Ss=y,ct=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,bu.current=r===null||r.memoizedState===null?xT:kT,r=a(d,f),Ya){y=0;do{if(Ya=!1,Ja=0,25<=y)throw Error(t(301));y+=1,Dt=Rt=null,s.updateQueue=null,bu.current=AT,r=a(d,f)}while(Ya)}if(bu.current=Vu,s=Rt!==null&&Rt.next!==null,Ss=0,Dt=Rt=ct=null,Nu=!1,s)throw Error(t(300));return r}function gh(){var r=Ja!==0;return Ja=0,r}function Ir(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ct.memoizedState=Dt=r:Dt=Dt.next=r,Dt}function Mn(){if(Rt===null){var r=ct.alternate;r=r!==null?r.memoizedState:null}else r=Rt.next;var s=Dt===null?ct.memoizedState:Dt.next;if(s!==null)Dt=s,Rt=r;else{if(r===null)throw Error(t(310));Rt=r,r={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Dt===null?ct.memoizedState=Dt=r:Dt=Dt.next=r}return Dt}function Xa(r,s){return typeof s=="function"?s(r):s}function yh(r){var s=Mn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=Rt,f=d.baseQueue,y=a.pending;if(y!==null){if(f!==null){var E=f.next;f.next=y.next,y.next=E}d.baseQueue=f=y,a.pending=null}if(f!==null){y=f.next,d=d.baseState;var k=E=null,R=null,W=y;do{var X=W.lane;if((Ss&X)===X)R!==null&&(R=R.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),d=W.hasEagerState?W.eagerState:r(d,W.action);else{var ee={lane:X,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};R===null?(k=R=ee,E=d):R=R.next=ee,ct.lanes|=X,xs|=X}W=W.next}while(W!==null&&W!==y);R===null?E=d:R.next=k,Zn(d,s.memoizedState)||(dn=!0),s.memoizedState=d,s.baseState=E,s.baseQueue=R,a.lastRenderedState=d}if(r=a.interleaved,r!==null){f=r;do y=f.lane,ct.lanes|=y,xs|=y,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function vh(r){var s=Mn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=a.dispatch,f=a.pending,y=s.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do y=r(y,E.action),E=E.next;while(E!==f);Zn(y,s.memoizedState)||(dn=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),a.lastRenderedState=y}return[y,d]}function og(){}function ag(r,s){var a=ct,d=Mn(),f=s(),y=!Zn(d.memoizedState,f);if(y&&(d.memoizedState=f,dn=!0),d=d.queue,_h(cg.bind(null,a,d,r),[r]),d.getSnapshot!==s||y||Dt!==null&&Dt.memoizedState.tag&1){if(a.flags|=2048,Za(9,ug.bind(null,a,d,f,s),void 0,null),Ot===null)throw Error(t(349));(Ss&30)!==0||lg(a,s,f)}return f}function lg(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=ct.updateQueue,s===null?(s={lastEffect:null,stores:null},ct.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function ug(r,s,a,d){s.value=a,s.getSnapshot=d,dg(s)&&hg(r)}function cg(r,s,a){return a(function(){dg(s)&&hg(r)})}function dg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Zn(r,a)}catch{return!0}}function hg(r){var s=Kr(r,1);s!==null&&ir(s,r,1,-1)}function fg(r){var s=Ir();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:r},s.queue=r,r=r.dispatch=ST.bind(null,ct,r),[s.memoizedState,r]}function Za(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=ct.updateQueue,s===null?(s={lastEffect:null,stores:null},ct.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function pg(){return Mn().memoizedState}function Du(r,s,a,d){var f=Ir();ct.flags|=r,f.memoizedState=Za(1|s,a,void 0,d===void 0?null:d)}function Ou(r,s,a,d){var f=Mn();d=d===void 0?null:d;var y=void 0;if(Rt!==null){var E=Rt.memoizedState;if(y=E.destroy,d!==null&&ph(d,E.deps)){f.memoizedState=Za(s,a,y,d);return}}ct.flags|=r,f.memoizedState=Za(1|s,a,y,d)}function mg(r,s){return Du(8390656,8,r,s)}function _h(r,s){return Ou(2048,8,r,s)}function gg(r,s){return Ou(4,2,r,s)}function yg(r,s){return Ou(4,4,r,s)}function vg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function _g(r,s,a){return a=a!=null?a.concat([r]):null,Ou(4,4,vg.bind(null,s,r),a)}function wh(){}function wg(r,s){var a=Mn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ph(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function Eg(r,s){var a=Mn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ph(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function Tg(r,s,a){return(Ss&21)===0?(r.baseState&&(r.baseState=!1,dn=!0),r.memoizedState=a):(Zn(a,s)||(a=fs(),ct.lanes|=a,xs|=a,r.baseState=!0),s)}function TT(r,s){var a=Fe;Fe=a!==0&&4>a?a:4,r(!0);var d=fh.transition;fh.transition={};try{r(!1),s()}finally{Fe=a,fh.transition=d}}function Ig(){return Mn().memoizedState}function IT(r,s,a){var d=bi(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Sg(r))xg(s,a);else if(a=tg(r,s,a,d),a!==null){var f=rn();ir(a,r,d,f),kg(a,s,d)}}function ST(r,s,a){var d=bi(r),f={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sg(r))xg(s,f);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var E=s.lastRenderedState,k=y(E,a);if(f.hasEagerState=!0,f.eagerState=k,Zn(k,E)){var R=s.interleaved;R===null?(f.next=f,ah(s)):(f.next=R.next,R.next=f),s.interleaved=f;return}}catch{}finally{}a=tg(r,s,f,d),a!==null&&(f=rn(),ir(a,r,d,f),kg(a,s,d))}}function Sg(r){var s=r.alternate;return r===ct||s!==null&&s===ct}function xg(r,s){Ya=Nu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function kg(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,gi(r,a)}}var Vu={readContext:Ln,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},xT={readContext:Ln,useCallback:function(r,s){return Ir().memoizedState=[r,s===void 0?null:s],r},useContext:Ln,useEffect:mg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Du(4194308,4,vg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Du(4194308,4,r,s)},useInsertionEffect:function(r,s){return Du(4,2,r,s)},useMemo:function(r,s){var a=Ir();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=Ir();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=IT.bind(null,ct,r),[d.memoizedState,r]},useRef:function(r){var s=Ir();return r={current:r},s.memoizedState=r},useState:fg,useDebugValue:wh,useDeferredValue:function(r){return Ir().memoizedState=r},useTransition:function(){var r=fg(!1),s=r[0];return r=TT.bind(null,r[1]),Ir().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=ct,f=Ir();if(lt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Ot===null)throw Error(t(349));(Ss&30)!==0||lg(d,s,a)}f.memoizedState=a;var y={value:a,getSnapshot:s};return f.queue=y,mg(cg.bind(null,d,y,r),[r]),d.flags|=2048,Za(9,ug.bind(null,d,y,a,s),void 0,null),a},useId:function(){var r=Ir(),s=Ot.identifierPrefix;if(lt){var a=Gr,d=Hr;a=(d&~(1<<32-en(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ja++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=ET++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},kT={readContext:Ln,useCallback:wg,useContext:Ln,useEffect:_h,useImperativeHandle:_g,useInsertionEffect:gg,useLayoutEffect:yg,useMemo:Eg,useReducer:yh,useRef:pg,useState:function(){return yh(Xa)},useDebugValue:wh,useDeferredValue:function(r){var s=Mn();return Tg(s,Rt.memoizedState,r)},useTransition:function(){var r=yh(Xa)[0],s=Mn().memoizedState;return[r,s]},useMutableSource:og,useSyncExternalStore:ag,useId:Ig,unstable_isNewReconciler:!1},AT={readContext:Ln,useCallback:wg,useContext:Ln,useEffect:_h,useImperativeHandle:_g,useInsertionEffect:gg,useLayoutEffect:yg,useMemo:Eg,useReducer:vh,useRef:pg,useState:function(){return vh(Xa)},useDebugValue:wh,useDeferredValue:function(r){var s=Mn();return Rt===null?s.memoizedState=r:Tg(s,Rt.memoizedState,r)},useTransition:function(){var r=vh(Xa)[0],s=Mn().memoizedState;return[r,s]},useMutableSource:og,useSyncExternalStore:ag,useId:Ig,unstable_isNewReconciler:!1};function tr(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Eh(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ju={isMounted:function(r){return(r=r._reactInternals)?Hn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=rn(),f=bi(r),y=Qr(d,f);y.payload=s,a!=null&&(y.callback=a),s=Ai(r,y,f),s!==null&&(ir(s,r,f,d),Cu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=rn(),f=bi(r),y=Qr(d,f);y.tag=1,y.payload=s,a!=null&&(y.callback=a),s=Ai(r,y,f),s!==null&&(ir(s,r,f,d),Cu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=rn(),d=bi(r),f=Qr(a,d);f.tag=2,s!=null&&(f.callback=s),s=Ai(r,f,d),s!==null&&(ir(s,r,d,a),Cu(s,r,d))}};function Ag(r,s,a,d,f,y,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,y,E):s.prototype&&s.prototype.isPureReactComponent?!Fa(a,d)||!Fa(f,y):!0}function Cg(r,s,a){var d=!1,f=Si,y=s.contextType;return typeof y=="object"&&y!==null?y=Ln(y):(f=cn(s)?_s:qt.current,d=s.contextTypes,y=(d=d!=null)?Ro(r,f):Si),s=new s(a,y),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ju,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=y),s}function Rg(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&ju.enqueueReplaceState(s,s.state,null)}function Th(r,s,a,d){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},lh(r);var y=s.contextType;typeof y=="object"&&y!==null?f.context=Ln(y):(y=cn(s)?_s:qt.current,f.context=Ro(r,y)),f.state=r.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Eh(r,s,y,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&ju.enqueueReplaceState(f,f.state,null),Ru(r,a,f,d),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Lo(r,s){try{var a="",d=s;do a+=oe(d),d=d.return;while(d);var f=a}catch(y){f=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:s,stack:f,digest:null}}function Ih(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Sh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var CT=typeof WeakMap=="function"?WeakMap:Map;function Pg(r,s,a){a=Qr(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){$u||($u=!0,Fh=d),Sh(r,s)},a}function bg(r,s,a){a=Qr(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var f=s.value;a.payload=function(){return d(f)},a.callback=function(){Sh(r,s)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(a.callback=function(){Sh(r,s),typeof d!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function Ng(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new CT;var f=new Set;d.set(s,f)}else f=d.get(s),f===void 0&&(f=new Set,d.set(s,f));f.has(a)||(f.add(a),r=zT.bind(null,r,s,a),s.then(r,r))}function Dg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Og(r,s,a,d,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Qr(-1,1),s.tag=2,Ai(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var RT=_e.ReactCurrentOwner,dn=!1;function nn(r,s,a,d){s.child=r===null?eg(s,null,a,d):Do(s,r.child,a,d)}function Vg(r,s,a,d,f){a=a.render;var y=s.ref;return Vo(s,f),d=mh(r,s,a,d,y,f),a=gh(),r!==null&&!dn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Yr(r,s,f)):(lt&&a&&Xd(s),s.flags|=1,nn(r,s,d,f),s.child)}function jg(r,s,a,d,f){if(r===null){var y=a.type;return typeof y=="function"&&!Hh(y)&&y.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=y,Lg(r,s,y,d,f)):(r=Qu(a.type,null,d,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(y=r.child,(r.lanes&f)===0){var E=y.memoizedProps;if(a=a.compare,a=a!==null?a:Fa,a(E,d)&&r.ref===s.ref)return Yr(r,s,f)}return s.flags|=1,r=Di(y,d),r.ref=s.ref,r.return=s,s.child=r}function Lg(r,s,a,d,f){if(r!==null){var y=r.memoizedProps;if(Fa(y,d)&&r.ref===s.ref)if(dn=!1,s.pendingProps=d=y,(r.lanes&f)!==0)(r.flags&131072)!==0&&(dn=!0);else return s.lanes=r.lanes,Yr(r,s,f)}return xh(r,s,a,d,f)}function Mg(r,s,a){var d=s.pendingProps,f=d.children,y=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Fo,Cn),Cn|=a;else{if((a&1073741824)===0)return r=y!==null?y.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,nt(Fo,Cn),Cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=y!==null?y.baseLanes:a,nt(Fo,Cn),Cn|=d}else y!==null?(d=y.baseLanes|a,s.memoizedState=null):d=a,nt(Fo,Cn),Cn|=d;return nn(r,s,f,a),s.child}function Fg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function xh(r,s,a,d,f){var y=cn(a)?_s:qt.current;return y=Ro(s,y),Vo(s,f),a=mh(r,s,a,d,y,f),d=gh(),r!==null&&!dn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Yr(r,s,f)):(lt&&d&&Xd(s),s.flags|=1,nn(r,s,a,f),s.child)}function Ug(r,s,a,d,f){if(cn(a)){var y=!0;wu(s)}else y=!1;if(Vo(s,f),s.stateNode===null)Mu(r,s),Cg(s,a,d),Th(s,a,d,f),d=!0;else if(r===null){var E=s.stateNode,k=s.memoizedProps;E.props=k;var R=E.context,W=a.contextType;typeof W=="object"&&W!==null?W=Ln(W):(W=cn(a)?_s:qt.current,W=Ro(s,W));var X=a.getDerivedStateFromProps,ee=typeof X=="function"||typeof E.getSnapshotBeforeUpdate=="function";ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==d||R!==W)&&Rg(s,E,d,W),ki=!1;var Y=s.memoizedState;E.state=Y,Ru(s,d,E,f),R=s.memoizedState,k!==d||Y!==R||un.current||ki?(typeof X=="function"&&(Eh(s,a,X,d),R=s.memoizedState),(k=ki||Ag(s,a,k,d,Y,R,W))?(ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=R),E.props=d,E.state=R,E.context=W,d=k):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{E=s.stateNode,ng(r,s),k=s.memoizedProps,W=s.type===s.elementType?k:tr(s.type,k),E.props=W,ee=s.pendingProps,Y=E.context,R=a.contextType,typeof R=="object"&&R!==null?R=Ln(R):(R=cn(a)?_s:qt.current,R=Ro(s,R));var ue=a.getDerivedStateFromProps;(X=typeof ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==ee||Y!==R)&&Rg(s,E,d,R),ki=!1,Y=s.memoizedState,E.state=Y,Ru(s,d,E,f);var pe=s.memoizedState;k!==ee||Y!==pe||un.current||ki?(typeof ue=="function"&&(Eh(s,a,ue,d),pe=s.memoizedState),(W=ki||Ag(s,a,W,d,Y,pe,R)||!1)?(X||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(d,pe,R),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(d,pe,R)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||k===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=pe),E.props=d,E.state=pe,E.context=R,d=W):(typeof E.componentDidUpdate!="function"||k===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),d=!1)}return kh(r,s,a,d,y,f)}function kh(r,s,a,d,f,y){Fg(r,s);var E=(s.flags&128)!==0;if(!d&&!E)return f&&qm(s,a,!1),Yr(r,s,y);d=s.stateNode,RT.current=s;var k=E&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&E?(s.child=Do(s,r.child,null,y),s.child=Do(s,null,k,y)):nn(r,s,k,y),s.memoizedState=d.state,f&&qm(s,a,!0),s.child}function Bg(r){var s=r.stateNode;s.pendingContext?$m(r,s.pendingContext,s.pendingContext!==s.context):s.context&&$m(r,s.context,!1),uh(r,s.containerInfo)}function zg(r,s,a,d,f){return No(),nh(f),s.flags|=256,nn(r,s,a,d),s.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function Ch(r){return{baseLanes:r,cachePool:null,transitions:null}}function $g(r,s,a){var d=s.pendingProps,f=ut.current,y=!1,E=(s.flags&128)!==0,k;if((k=E)||(k=r!==null&&r.memoizedState===null?!1:(f&2)!==0),k?(y=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),nt(ut,f&1),r===null)return th(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=d.children,r=d.fallback,y?(d=s.mode,y=s.child,E={mode:"hidden",children:E},(d&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=E):y=Yu(E,d,0,null),r=Rs(r,d,a,null),y.return=s,r.return=s,y.sibling=r,s.child=y,s.child.memoizedState=Ch(a),s.memoizedState=Ah,r):Rh(s,E));if(f=r.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return PT(r,s,E,d,k,f,a);if(y){y=d.fallback,E=s.mode,f=r.child,k=f.sibling;var R={mode:"hidden",children:d.children};return(E&1)===0&&s.child!==f?(d=s.child,d.childLanes=0,d.pendingProps=R,s.deletions=null):(d=Di(f,R),d.subtreeFlags=f.subtreeFlags&14680064),k!==null?y=Di(k,y):(y=Rs(y,E,a,null),y.flags|=2),y.return=s,d.return=s,d.sibling=y,s.child=d,d=y,y=s.child,E=r.child.memoizedState,E=E===null?Ch(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=r.childLanes&~a,s.memoizedState=Ah,d}return y=r.child,r=y.sibling,d=Di(y,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function Rh(r,s){return s=Yu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Lu(r,s,a,d){return d!==null&&nh(d),Do(s,r.child,null,a),r=Rh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function PT(r,s,a,d,f,y,E){if(a)return s.flags&256?(s.flags&=-257,d=Ih(Error(t(422))),Lu(r,s,E,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(y=d.fallback,f=s.mode,d=Yu({mode:"visible",children:d.children},f,0,null),y=Rs(y,f,E,null),y.flags|=2,d.return=s,y.return=s,d.sibling=y,s.child=d,(s.mode&1)!==0&&Do(s,r.child,null,E),s.child.memoizedState=Ch(E),s.memoizedState=Ah,y);if((s.mode&1)===0)return Lu(r,s,E,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var k=d.dgst;return d=k,y=Error(t(419)),d=Ih(y,d,void 0),Lu(r,s,E,d)}if(k=(E&r.childLanes)!==0,dn||k){if(d=Ot,d!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|E))!==0?0:f,f!==0&&f!==y.retryLane&&(y.retryLane=f,Kr(r,f),ir(d,r,f,-1))}return qh(),d=Ih(Error(t(421))),Lu(r,s,E,d)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=$T.bind(null,r),f._reactRetry=s,null):(r=y.treeContext,An=Ti(f.nextSibling),kn=s,lt=!0,er=null,r!==null&&(Vn[jn++]=Hr,Vn[jn++]=Gr,Vn[jn++]=ws,Hr=r.id,Gr=r.overflow,ws=s),s=Rh(s,d.children),s.flags|=4096,s)}function Wg(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),oh(r.return,s,a)}function Ph(r,s,a,d,f){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:f}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=d,y.tail=a,y.tailMode=f)}function qg(r,s,a){var d=s.pendingProps,f=d.revealOrder,y=d.tail;if(nn(r,s,d.children,a),d=ut.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Wg(r,a,s);else if(r.tag===19)Wg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(nt(ut,d),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Pu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Ph(s,!1,f,a,y);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Pu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Ph(s,!0,a,null,y);break;case"together":Ph(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Mu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Yr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),xs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Di(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Di(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function bT(r,s,a){switch(s.tag){case 3:Bg(s),No();break;case 5:sg(s);break;case 1:cn(s.type)&&wu(s);break;case 4:uh(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,f=s.memoizedProps.value;nt(ku,d._currentValue),d._currentValue=f;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(nt(ut,ut.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?$g(r,s,a):(nt(ut,ut.current&1),r=Yr(r,s,a),r!==null?r.sibling:null);nt(ut,ut.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return qg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),nt(ut,ut.current),d)break;return null;case 22:case 23:return s.lanes=0,Mg(r,s,a)}return Yr(r,s,a)}var Hg,bh,Gg,Kg;Hg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},bh=function(){},Gg=function(r,s,a,d){var f=r.memoizedProps;if(f!==d){r=s.stateNode,Is(Tr.current);var y=null;switch(a){case"input":f=xe(r,f),d=xe(r,d),y=[];break;case"select":f=ae({},f,{value:void 0}),d=ae({},d,{value:void 0}),y=[];break;case"textarea":f=pa(r,f),d=pa(r,d),y=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=yu)}wa(a,d);var E;a=null;for(W in f)if(!d.hasOwnProperty(W)&&f.hasOwnProperty(W)&&f[W]!=null)if(W==="style"){var k=f[W];for(E in k)k.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?y||(y=[]):(y=y||[]).push(W,null));for(W in d){var R=d[W];if(k=f!=null?f[W]:void 0,d.hasOwnProperty(W)&&R!==k&&(R!=null||k!=null))if(W==="style")if(k){for(E in k)!k.hasOwnProperty(E)||R&&R.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in R)R.hasOwnProperty(E)&&k[E]!==R[E]&&(a||(a={}),a[E]=R[E])}else a||(y||(y=[]),y.push(W,a)),a=R;else W==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,k=k?k.__html:void 0,R!=null&&k!==R&&(y=y||[]).push(W,R)):W==="children"?typeof R!="string"&&typeof R!="number"||(y=y||[]).push(W,""+R):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(R!=null&&W==="onScroll"&&it("scroll",r),y||k===R||(y=[])):(y=y||[]).push(W,R))}a&&(y=y||[]).push("style",a);var W=y;(s.updateQueue=W)&&(s.flags|=4)}},Kg=function(r,s,a,d){a!==d&&(s.flags|=4)};function el(r,s){if(!lt)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Gt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function NT(r,s,a){var d=s.pendingProps;switch(Zd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(s),null;case 1:return cn(s.type)&&_u(),Gt(s),null;case 3:return d=s.stateNode,jo(),st(un),st(qt),hh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(Su(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,er!==null&&(zh(er),er=null))),bh(r,s),Gt(s),null;case 5:ch(s);var f=Is(Qa.current);if(a=s.type,r!==null&&s.stateNode!=null)Gg(r,s,a,d,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Gt(s),null}if(r=Is(Tr.current),Su(s)){d=s.stateNode,a=s.type;var y=s.memoizedProps;switch(d[Er]=s,d[Wa]=y,r=(s.mode&1)!==0,a){case"dialog":it("cancel",d),it("close",d);break;case"iframe":case"object":case"embed":it("load",d);break;case"video":case"audio":for(f=0;f<Ba.length;f++)it(Ba[f],d);break;case"source":it("error",d);break;case"img":case"image":case"link":it("error",d),it("load",d);break;case"details":it("toggle",d);break;case"input":Ve(d,y),it("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!y.multiple},it("invalid",d);break;case"textarea":Xs(d,y),it("invalid",d)}wa(a,y),f=null;for(var E in y)if(y.hasOwnProperty(E)){var k=y[E];E==="children"?typeof k=="string"?d.textContent!==k&&(y.suppressHydrationWarning!==!0&&gu(d.textContent,k,r),f=["children",k]):typeof k=="number"&&d.textContent!==""+k&&(y.suppressHydrationWarning!==!0&&gu(d.textContent,k,r),f=["children",""+k]):o.hasOwnProperty(E)&&k!=null&&E==="onScroll"&&it("scroll",d)}switch(a){case"input":Z(d),En(d,y,!0);break;case"textarea":Z(d),ma(d);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(d.onclick=yu)}d=f,s.updateQueue=d,d!==null&&(s.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=kt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=E.createElement(a,{is:d.is}):(r=E.createElement(a),a==="select"&&(E=r,d.multiple?E.multiple=!0:d.size&&(E.size=d.size))):r=E.createElementNS(r,a),r[Er]=s,r[Wa]=d,Hg(r,s,!1,!1),s.stateNode=r;e:{switch(E=Ea(a,d),a){case"dialog":it("cancel",r),it("close",r),f=d;break;case"iframe":case"object":case"embed":it("load",r),f=d;break;case"video":case"audio":for(f=0;f<Ba.length;f++)it(Ba[f],r);f=d;break;case"source":it("error",r),f=d;break;case"img":case"image":case"link":it("error",r),it("load",r),f=d;break;case"details":it("toggle",r),f=d;break;case"input":Ve(r,d),f=xe(r,d),it("invalid",r);break;case"option":f=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},f=ae({},d,{value:void 0}),it("invalid",r);break;case"textarea":Xs(r,d),f=pa(r,d),it("invalid",r);break;default:f=d}wa(a,f),k=f;for(y in k)if(k.hasOwnProperty(y)){var R=k[y];y==="style"?va(r,R):y==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&ga(r,R)):y==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&di(r,R):typeof R=="number"&&di(r,""+R):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?R!=null&&y==="onScroll"&&it("scroll",r):R!=null&&J(r,y,R,E))}switch(a){case"input":Z(r),En(r,d,!1);break;case"textarea":Z(r),ma(r);break;case"option":d.value!=null&&r.setAttribute("value",""+Re(d.value));break;case"select":r.multiple=!!d.multiple,y=d.value,y!=null?Ge(r,!!d.multiple,y,!1):d.defaultValue!=null&&Ge(r,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=yu)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Gt(s),null;case 6:if(r&&s.stateNode!=null)Kg(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=Is(Qa.current),Is(Tr.current),Su(s)){if(d=s.stateNode,a=s.memoizedProps,d[Er]=s,(y=d.nodeValue!==a)&&(r=kn,r!==null))switch(r.tag){case 3:gu(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&gu(d.nodeValue,a,(r.mode&1)!==0)}y&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[Er]=s,s.stateNode=d}return Gt(s),null;case 13:if(st(ut),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(lt&&An!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Jm(),No(),s.flags|=98560,y=!1;else if(y=Su(s),d!==null&&d.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Er]=s}else No(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Gt(s),y=!1}else er!==null&&(zh(er),er=null),y=!0;if(!y)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(ut.current&1)!==0?Pt===0&&(Pt=3):qh())),s.updateQueue!==null&&(s.flags|=4),Gt(s),null);case 4:return jo(),bh(r,s),r===null&&za(s.stateNode.containerInfo),Gt(s),null;case 10:return sh(s.type._context),Gt(s),null;case 17:return cn(s.type)&&_u(),Gt(s),null;case 19:if(st(ut),y=s.memoizedState,y===null)return Gt(s),null;if(d=(s.flags&128)!==0,E=y.rendering,E===null)if(d)el(y,!1);else{if(Pt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=Pu(r),E!==null){for(s.flags|=128,el(y,!1),d=E.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)y=a,r=d,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,r=E.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return nt(ut,ut.current&1|2),s.child}r=r.sibling}y.tail!==null&&tt()>Uo&&(s.flags|=128,d=!0,el(y,!1),s.lanes=4194304)}else{if(!d)if(r=Pu(E),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),el(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!lt)return Gt(s),null}else 2*tt()-y.renderingStartTime>Uo&&a!==1073741824&&(s.flags|=128,d=!0,el(y,!1),s.lanes=4194304);y.isBackwards?(E.sibling=s.child,s.child=E):(a=y.last,a!==null?a.sibling=E:s.child=E,y.last=E)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=tt(),s.sibling=null,a=ut.current,nt(ut,d?a&1|2:a&1),s):(Gt(s),null);case 22:case 23:return Wh(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(Cn&1073741824)!==0&&(Gt(s),s.subtreeFlags&6&&(s.flags|=8192)):Gt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function DT(r,s){switch(Zd(s),s.tag){case 1:return cn(s.type)&&_u(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return jo(),st(un),st(qt),hh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return ch(s),null;case 13:if(st(ut),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));No()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return st(ut),null;case 4:return jo(),null;case 10:return sh(s.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var Fu=!1,Kt=!1,OT=typeof WeakSet=="function"?WeakSet:Set,he=null;function Mo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){ht(r,s,d)}else a.current=null}function Nh(r,s,a){try{a()}catch(d){ht(r,s,d)}}var Qg=!1;function VT(r,s){if(Wd=_i,r=Am(),jd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var f=d.anchorOffset,y=d.focusNode;d=d.focusOffset;try{a.nodeType,y.nodeType}catch{a=null;break e}var E=0,k=-1,R=-1,W=0,X=0,ee=r,Y=null;t:for(;;){for(var ue;ee!==a||f!==0&&ee.nodeType!==3||(k=E+f),ee!==y||d!==0&&ee.nodeType!==3||(R=E+d),ee.nodeType===3&&(E+=ee.nodeValue.length),(ue=ee.firstChild)!==null;)Y=ee,ee=ue;for(;;){if(ee===r)break t;if(Y===a&&++W===f&&(k=E),Y===y&&++X===d&&(R=E),(ue=ee.nextSibling)!==null)break;ee=Y,Y=ee.parentNode}ee=ue}a=k===-1||R===-1?null:{start:k,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(qd={focusedElem:r,selectionRange:a},_i=!1,he=s;he!==null;)if(s=he,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,he=r;else for(;he!==null;){s=he;try{var pe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(pe!==null){var me=pe.memoizedProps,mt=pe.memoizedState,U=s.stateNode,O=U.getSnapshotBeforeUpdate(s.elementType===s.type?me:tr(s.type,me),mt);U.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){ht(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,he=r;break}he=s.return}return pe=Qg,Qg=!1,pe}function tl(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&r)===r){var y=f.destroy;f.destroy=void 0,y!==void 0&&Nh(s,a,y)}f=f.next}while(f!==d)}}function Uu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function Dh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Yg(r){var s=r.alternate;s!==null&&(r.alternate=null,Yg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Er],delete s[Wa],delete s[Qd],delete s[yT],delete s[vT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Jg(r){return r.tag===5||r.tag===3||r.tag===4}function Xg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Jg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Oh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=yu));else if(d!==4&&(r=r.child,r!==null))for(Oh(r,s,a),r=r.sibling;r!==null;)Oh(r,s,a),r=r.sibling}function Vh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(Vh(r,s,a),r=r.sibling;r!==null;)Vh(r,s,a),r=r.sibling}var Ut=null,nr=!1;function Ci(r,s,a){for(a=a.child;a!==null;)Zg(r,s,a),a=a.sibling}function Zg(r,s,a){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(ds,a)}catch{}switch(a.tag){case 5:Kt||Mo(a,s);case 6:var d=Ut,f=nr;Ut=null,Ci(r,s,a),Ut=d,nr=f,Ut!==null&&(nr?(r=Ut,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ut.removeChild(a.stateNode));break;case 18:Ut!==null&&(nr?(r=Ut,a=a.stateNode,r.nodeType===8?Kd(r.parentNode,a):r.nodeType===1&&Kd(r,a),Jn(r)):Kd(Ut,a.stateNode));break;case 4:d=Ut,f=nr,Ut=a.stateNode.containerInfo,nr=!0,Ci(r,s,a),Ut=d,nr=f;break;case 0:case 11:case 14:case 15:if(!Kt&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var y=f,E=y.destroy;y=y.tag,E!==void 0&&((y&2)!==0||(y&4)!==0)&&Nh(a,s,E),f=f.next}while(f!==d)}Ci(r,s,a);break;case 1:if(!Kt&&(Mo(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(k){ht(a,s,k)}Ci(r,s,a);break;case 21:Ci(r,s,a);break;case 22:a.mode&1?(Kt=(d=Kt)||a.memoizedState!==null,Ci(r,s,a),Kt=d):Ci(r,s,a);break;default:Ci(r,s,a)}}function ey(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new OT),s.forEach(function(d){var f=WT.bind(null,r,d);a.has(d)||(a.add(d),d.then(f,f))})}}function rr(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var f=a[d];try{var y=r,E=s,k=E;e:for(;k!==null;){switch(k.tag){case 5:Ut=k.stateNode,nr=!1;break e;case 3:Ut=k.stateNode.containerInfo,nr=!0;break e;case 4:Ut=k.stateNode.containerInfo,nr=!0;break e}k=k.return}if(Ut===null)throw Error(t(160));Zg(y,E,f),Ut=null,nr=!1;var R=f.alternate;R!==null&&(R.return=null),f.return=null}catch(W){ht(f,s,W)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ty(s,r),s=s.sibling}function ty(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(rr(s,r),Sr(r),d&4){try{tl(3,r,r.return),Uu(3,r)}catch(me){ht(r,r.return,me)}try{tl(5,r,r.return)}catch(me){ht(r,r.return,me)}}break;case 1:rr(s,r),Sr(r),d&512&&a!==null&&Mo(a,a.return);break;case 5:if(rr(s,r),Sr(r),d&512&&a!==null&&Mo(a,a.return),r.flags&32){var f=r.stateNode;try{di(f,"")}catch(me){ht(r,r.return,me)}}if(d&4&&(f=r.stateNode,f!=null)){var y=r.memoizedProps,E=a!==null?a.memoizedProps:y,k=r.type,R=r.updateQueue;if(r.updateQueue=null,R!==null)try{k==="input"&&y.type==="radio"&&y.name!=null&&Je(f,y),Ea(k,E);var W=Ea(k,y);for(E=0;E<R.length;E+=2){var X=R[E],ee=R[E+1];X==="style"?va(f,ee):X==="dangerouslySetInnerHTML"?ga(f,ee):X==="children"?di(f,ee):J(f,X,ee,W)}switch(k){case"input":wt(f,y);break;case"textarea":Zs(f,y);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!y.multiple;var ue=y.value;ue!=null?Ge(f,!!y.multiple,ue,!1):Y!==!!y.multiple&&(y.defaultValue!=null?Ge(f,!!y.multiple,y.defaultValue,!0):Ge(f,!!y.multiple,y.multiple?[]:"",!1))}f[Wa]=y}catch(me){ht(r,r.return,me)}}break;case 6:if(rr(s,r),Sr(r),d&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,y=r.memoizedProps;try{f.nodeValue=y}catch(me){ht(r,r.return,me)}}break;case 3:if(rr(s,r),Sr(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{Jn(s.containerInfo)}catch(me){ht(r,r.return,me)}break;case 4:rr(s,r),Sr(r);break;case 13:rr(s,r),Sr(r),f=r.child,f.flags&8192&&(y=f.memoizedState!==null,f.stateNode.isHidden=y,!y||f.alternate!==null&&f.alternate.memoizedState!==null||(Mh=tt())),d&4&&ey(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Kt=(W=Kt)||X,rr(s,r),Kt=W):rr(s,r),Sr(r),d&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!X&&(r.mode&1)!==0)for(he=r,X=r.child;X!==null;){for(ee=he=X;he!==null;){switch(Y=he,ue=Y.child,Y.tag){case 0:case 11:case 14:case 15:tl(4,Y,Y.return);break;case 1:Mo(Y,Y.return);var pe=Y.stateNode;if(typeof pe.componentWillUnmount=="function"){d=Y,a=Y.return;try{s=d,pe.props=s.memoizedProps,pe.state=s.memoizedState,pe.componentWillUnmount()}catch(me){ht(d,a,me)}}break;case 5:Mo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){iy(ee);continue}}ue!==null?(ue.return=Y,he=ue):iy(ee)}X=X.sibling}e:for(X=null,ee=r;;){if(ee.tag===5){if(X===null){X=ee;try{f=ee.stateNode,W?(y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(k=ee.stateNode,R=ee.memoizedProps.style,E=R!=null&&R.hasOwnProperty("display")?R.display:null,k.style.display=ya("display",E))}catch(me){ht(r,r.return,me)}}}else if(ee.tag===6){if(X===null)try{ee.stateNode.nodeValue=W?"":ee.memoizedProps}catch(me){ht(r,r.return,me)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===r)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===r)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===r)break e;X===ee&&(X=null),ee=ee.return}X===ee&&(X=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:rr(s,r),Sr(r),d&4&&ey(r);break;case 21:break;default:rr(s,r),Sr(r)}}function Sr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Jg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(di(f,""),d.flags&=-33);var y=Xg(r);Vh(r,y,f);break;case 3:case 4:var E=d.stateNode.containerInfo,k=Xg(r);Oh(r,k,E);break;default:throw Error(t(161))}}catch(R){ht(r,r.return,R)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function jT(r,s,a){he=r,ny(r)}function ny(r,s,a){for(var d=(r.mode&1)!==0;he!==null;){var f=he,y=f.child;if(f.tag===22&&d){var E=f.memoizedState!==null||Fu;if(!E){var k=f.alternate,R=k!==null&&k.memoizedState!==null||Kt;k=Fu;var W=Kt;if(Fu=E,(Kt=R)&&!W)for(he=f;he!==null;)E=he,R=E.child,E.tag===22&&E.memoizedState!==null?sy(f):R!==null?(R.return=E,he=R):sy(f);for(;y!==null;)he=y,ny(y),y=y.sibling;he=f,Fu=k,Kt=W}ry(r)}else(f.subtreeFlags&8772)!==0&&y!==null?(y.return=f,he=y):ry(r)}}function ry(r){for(;he!==null;){var s=he;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Kt||Uu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Kt)if(a===null)d.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:tr(s.type,a.memoizedProps);d.componentDidUpdate(f,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&ig(s,y,d);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}ig(s,E,a)}break;case 5:var k=s.stateNode;if(a===null&&s.flags&4){a=k;var R=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var W=s.alternate;if(W!==null){var X=W.memoizedState;if(X!==null){var ee=X.dehydrated;ee!==null&&Jn(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Kt||s.flags&512&&Dh(s)}catch(Y){ht(s,s.return,Y)}}if(s===r){he=null;break}if(a=s.sibling,a!==null){a.return=s.return,he=a;break}he=s.return}}function iy(r){for(;he!==null;){var s=he;if(s===r){he=null;break}var a=s.sibling;if(a!==null){a.return=s.return,he=a;break}he=s.return}}function sy(r){for(;he!==null;){var s=he;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Uu(4,s)}catch(R){ht(s,a,R)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var f=s.return;try{d.componentDidMount()}catch(R){ht(s,f,R)}}var y=s.return;try{Dh(s)}catch(R){ht(s,y,R)}break;case 5:var E=s.return;try{Dh(s)}catch(R){ht(s,E,R)}}}catch(R){ht(s,s.return,R)}if(s===r){he=null;break}var k=s.sibling;if(k!==null){k.return=s.return,he=k;break}he=s.return}}var LT=Math.ceil,Bu=_e.ReactCurrentDispatcher,jh=_e.ReactCurrentOwner,Fn=_e.ReactCurrentBatchConfig,$e=0,Ot=null,Tt=null,Bt=0,Cn=0,Fo=Ii(0),Pt=0,nl=null,xs=0,zu=0,Lh=0,rl=null,hn=null,Mh=0,Uo=1/0,Jr=null,$u=!1,Fh=null,Ri=null,Wu=!1,Pi=null,qu=0,il=0,Uh=null,Hu=-1,Gu=0;function rn(){return($e&6)!==0?tt():Hu!==-1?Hu:Hu=tt()}function bi(r){return(r.mode&1)===0?1:($e&2)!==0&&Bt!==0?Bt&-Bt:wT.transition!==null?(Gu===0&&(Gu=fs()),Gu):(r=Fe,r!==0||(r=window.event,r=r===void 0?16:Na(r.type)),r)}function ir(r,s,a,d){if(50<il)throw il=0,Uh=null,Error(t(185));mi(r,a,d),(($e&2)===0||r!==Ot)&&(r===Ot&&(($e&2)===0&&(zu|=a),Pt===4&&Ni(r,Bt)),fn(r,d),a===1&&$e===0&&(s.mode&1)===0&&(Uo=tt()+500,Eu&&xi()))}function fn(r,s){var a=r.callbackNode;Fr(r,s);var d=hs(r,r===Ot?Bt:0);if(d===0)a!==null&&Aa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&Aa(a),s===1)r.tag===0?_T(ay.bind(null,r)):Hm(ay.bind(null,r)),mT(function(){($e&6)===0&&xi()}),a=null;else{switch(yi(d)){case 1:a=cs;break;case 4:a=hi;break;case 16:a=Nn;break;case 536870912:a=Gl;break;default:a=Nn}a=my(a,oy.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function oy(r,s){if(Hu=-1,Gu=0,($e&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Bo()&&r.callbackNode!==a)return null;var d=hs(r,r===Ot?Bt:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=Ku(r,d);else{s=d;var f=$e;$e|=2;var y=uy();(Ot!==r||Bt!==s)&&(Jr=null,Uo=tt()+500,As(r,s));do try{UT();break}catch(k){ly(r,k)}while(!0);ih(),Bu.current=y,$e=f,Tt!==null?s=0:(Ot=null,Bt=0,s=Pt)}if(s!==0){if(s===2&&(f=In(r),f!==0&&(d=f,s=Bh(r,f))),s===1)throw a=nl,As(r,0),Ni(r,d),fn(r,tt()),a;if(s===6)Ni(r,d);else{if(f=r.current.alternate,(d&30)===0&&!MT(f)&&(s=Ku(r,d),s===2&&(y=In(r),y!==0&&(d=y,s=Bh(r,y))),s===1))throw a=nl,As(r,0),Ni(r,d),fn(r,tt()),a;switch(r.finishedWork=f,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Cs(r,hn,Jr);break;case 3:if(Ni(r,d),(d&130023424)===d&&(s=Mh+500-tt(),10<s)){if(hs(r,0)!==0)break;if(f=r.suspendedLanes,(f&d)!==d){rn(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Gd(Cs.bind(null,r,hn,Jr),s);break}Cs(r,hn,Jr);break;case 4:if(Ni(r,d),(d&4194240)===d)break;for(s=r.eventTimes,f=-1;0<d;){var E=31-en(d);y=1<<E,E=s[E],E>f&&(f=E),d&=~y}if(d=f,d=tt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*LT(d/1960))-d,10<d){r.timeoutHandle=Gd(Cs.bind(null,r,hn,Jr),d);break}Cs(r,hn,Jr);break;case 5:Cs(r,hn,Jr);break;default:throw Error(t(329))}}}return fn(r,tt()),r.callbackNode===a?oy.bind(null,r):null}function Bh(r,s){var a=rl;return r.current.memoizedState.isDehydrated&&(As(r,s).flags|=256),r=Ku(r,s),r!==2&&(s=hn,hn=a,s!==null&&zh(s)),r}function zh(r){hn===null?hn=r:hn.push.apply(hn,r)}function MT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var f=a[d],y=f.getSnapshot;f=f.value;try{if(!Zn(y(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ni(r,s){for(s&=~Lh,s&=~zu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-en(s),d=1<<a;r[a]=-1,s&=~d}}function ay(r){if(($e&6)!==0)throw Error(t(327));Bo();var s=hs(r,0);if((s&1)===0)return fn(r,tt()),null;var a=Ku(r,s);if(r.tag!==0&&a===2){var d=In(r);d!==0&&(s=d,a=Bh(r,d))}if(a===1)throw a=nl,As(r,0),Ni(r,s),fn(r,tt()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Cs(r,hn,Jr),fn(r,tt()),null}function $h(r,s){var a=$e;$e|=1;try{return r(s)}finally{$e=a,$e===0&&(Uo=tt()+500,Eu&&xi())}}function ks(r){Pi!==null&&Pi.tag===0&&($e&6)===0&&Bo();var s=$e;$e|=1;var a=Fn.transition,d=Fe;try{if(Fn.transition=null,Fe=1,r)return r()}finally{Fe=d,Fn.transition=a,$e=s,($e&6)===0&&xi()}}function Wh(){Cn=Fo.current,st(Fo)}function As(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,pT(a)),Tt!==null)for(a=Tt.return;a!==null;){var d=a;switch(Zd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&_u();break;case 3:jo(),st(un),st(qt),hh();break;case 5:ch(d);break;case 4:jo();break;case 13:st(ut);break;case 19:st(ut);break;case 10:sh(d.type._context);break;case 22:case 23:Wh()}a=a.return}if(Ot=r,Tt=r=Di(r.current,null),Bt=Cn=s,Pt=0,nl=null,Lh=zu=xs=0,hn=rl=null,Ts!==null){for(s=0;s<Ts.length;s++)if(a=Ts[s],d=a.interleaved,d!==null){a.interleaved=null;var f=d.next,y=a.pending;if(y!==null){var E=y.next;y.next=f,d.next=E}a.pending=d}Ts=null}return r}function ly(r,s){do{var a=Tt;try{if(ih(),bu.current=Vu,Nu){for(var d=ct.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Nu=!1}if(Ss=0,Dt=Rt=ct=null,Ya=!1,Ja=0,jh.current=null,a===null||a.return===null){Pt=1,nl=s,Tt=null;break}e:{var y=r,E=a.return,k=a,R=s;if(s=Bt,k.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var W=R,X=k,ee=X.tag;if((X.mode&1)===0&&(ee===0||ee===11||ee===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var ue=Dg(E);if(ue!==null){ue.flags&=-257,Og(ue,E,k,y,s),ue.mode&1&&Ng(y,W,s),s=ue,R=W;var pe=s.updateQueue;if(pe===null){var me=new Set;me.add(R),s.updateQueue=me}else pe.add(R);break e}else{if((s&1)===0){Ng(y,W,s),qh();break e}R=Error(t(426))}}else if(lt&&k.mode&1){var mt=Dg(E);if(mt!==null){(mt.flags&65536)===0&&(mt.flags|=256),Og(mt,E,k,y,s),nh(Lo(R,k));break e}}y=R=Lo(R,k),Pt!==4&&(Pt=2),rl===null?rl=[y]:rl.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var U=Pg(y,R,s);rg(y,U);break e;case 1:k=R;var O=y.type,B=y.stateNode;if((y.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Ri===null||!Ri.has(B)))){y.flags|=65536,s&=-s,y.lanes|=s;var ne=bg(y,k,s);rg(y,ne);break e}}y=y.return}while(y!==null)}dy(a)}catch(ve){s=ve,Tt===a&&a!==null&&(Tt=a=a.return);continue}break}while(!0)}function uy(){var r=Bu.current;return Bu.current=Vu,r===null?Vu:r}function qh(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||(xs&268435455)===0&&(zu&268435455)===0||Ni(Ot,Bt)}function Ku(r,s){var a=$e;$e|=2;var d=uy();(Ot!==r||Bt!==s)&&(Jr=null,As(r,s));do try{FT();break}catch(f){ly(r,f)}while(!0);if(ih(),$e=a,Bu.current=d,Tt!==null)throw Error(t(261));return Ot=null,Bt=0,Pt}function FT(){for(;Tt!==null;)cy(Tt)}function UT(){for(;Tt!==null&&!ql();)cy(Tt)}function cy(r){var s=py(r.alternate,r,Cn);r.memoizedProps=r.pendingProps,s===null?dy(r):Tt=s,jh.current=null}function dy(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=NT(a,s,Cn),a!==null){Tt=a;return}}else{if(a=DT(a,s),a!==null){a.flags&=32767,Tt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Pt=6,Tt=null;return}}if(s=s.sibling,s!==null){Tt=s;return}Tt=s=r}while(s!==null);Pt===0&&(Pt=5)}function Cs(r,s,a){var d=Fe,f=Fn.transition;try{Fn.transition=null,Fe=1,BT(r,s,a,d)}finally{Fn.transition=f,Fe=d}return null}function BT(r,s,a,d){do Bo();while(Pi!==null);if(($e&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=a.lanes|a.childLanes;if(Xe(r,y),r===Ot&&(Tt=Ot=null,Bt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wu||(Wu=!0,my(Nn,function(){return Bo(),null})),y=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||y){y=Fn.transition,Fn.transition=null;var E=Fe;Fe=1;var k=$e;$e|=4,jh.current=null,VT(r,a),ty(a,r),aT(qd),_i=!!Wd,qd=Wd=null,r.current=a,jT(a),Cd(),$e=k,Fe=E,Fn.transition=y}else r.current=a;if(Wu&&(Wu=!1,Pi=r,qu=f),y=r.pendingLanes,y===0&&(Ri=null),Kl(a.stateNode),fn(r,tt()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],d(f.value,{componentStack:f.stack,digest:f.digest});if($u)throw $u=!1,r=Fh,Fh=null,r;return(qu&1)!==0&&r.tag!==0&&Bo(),y=r.pendingLanes,(y&1)!==0?r===Uh?il++:(il=0,Uh=r):il=0,xi(),null}function Bo(){if(Pi!==null){var r=yi(qu),s=Fn.transition,a=Fe;try{if(Fn.transition=null,Fe=16>r?16:r,Pi===null)var d=!1;else{if(r=Pi,Pi=null,qu=0,($e&6)!==0)throw Error(t(331));var f=$e;for($e|=4,he=r.current;he!==null;){var y=he,E=y.child;if((he.flags&16)!==0){var k=y.deletions;if(k!==null){for(var R=0;R<k.length;R++){var W=k[R];for(he=W;he!==null;){var X=he;switch(X.tag){case 0:case 11:case 15:tl(8,X,y)}var ee=X.child;if(ee!==null)ee.return=X,he=ee;else for(;he!==null;){X=he;var Y=X.sibling,ue=X.return;if(Yg(X),X===W){he=null;break}if(Y!==null){Y.return=ue,he=Y;break}he=ue}}}var pe=y.alternate;if(pe!==null){var me=pe.child;if(me!==null){pe.child=null;do{var mt=me.sibling;me.sibling=null,me=mt}while(me!==null)}}he=y}}if((y.subtreeFlags&2064)!==0&&E!==null)E.return=y,he=E;else e:for(;he!==null;){if(y=he,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:tl(9,y,y.return)}var U=y.sibling;if(U!==null){U.return=y.return,he=U;break e}he=y.return}}var O=r.current;for(he=O;he!==null;){E=he;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,he=B;else e:for(E=O;he!==null;){if(k=he,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Uu(9,k)}}catch(ve){ht(k,k.return,ve)}if(k===E){he=null;break e}var ne=k.sibling;if(ne!==null){ne.return=k.return,he=ne;break e}he=k.return}}if($e=f,xi(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(ds,r)}catch{}d=!0}return d}finally{Fe=a,Fn.transition=s}}return!1}function hy(r,s,a){s=Lo(a,s),s=Pg(r,s,1),r=Ai(r,s,1),s=rn(),r!==null&&(mi(r,1,s),fn(r,s))}function ht(r,s,a){if(r.tag===3)hy(r,r,a);else for(;s!==null;){if(s.tag===3){hy(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ri===null||!Ri.has(d))){r=Lo(a,r),r=bg(s,r,1),s=Ai(s,r,1),r=rn(),s!==null&&(mi(s,1,r),fn(s,r));break}}s=s.return}}function zT(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=rn(),r.pingedLanes|=r.suspendedLanes&a,Ot===r&&(Bt&a)===a&&(Pt===4||Pt===3&&(Bt&130023424)===Bt&&500>tt()-Mh?As(r,0):Lh|=a),fn(r,s)}function fy(r,s){s===0&&((r.mode&1)===0?s=1:(s=uo,uo<<=1,(uo&130023424)===0&&(uo=4194304)));var a=rn();r=Kr(r,s),r!==null&&(mi(r,s,a),fn(r,a))}function $T(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),fy(r,a)}function WT(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),fy(r,a)}var py;py=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||un.current)dn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return dn=!1,bT(r,s,a);dn=(r.flags&131072)!==0}else dn=!1,lt&&(s.flags&1048576)!==0&&Gm(s,Iu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Mu(r,s),r=s.pendingProps;var f=Ro(s,qt.current);Vo(s,a),f=mh(null,s,d,r,f,a);var y=gh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,cn(d)?(y=!0,wu(s)):y=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,lh(s),f.updater=ju,s.stateNode=f,f._reactInternals=s,Th(s,d,r,a),s=kh(null,s,d,!0,y,a)):(s.tag=0,lt&&y&&Xd(s),nn(null,s,f,a),s=s.child),s;case 16:d=s.elementType;e:{switch(Mu(r,s),r=s.pendingProps,f=d._init,d=f(d._payload),s.type=d,f=s.tag=HT(d),r=tr(d,r),f){case 0:s=xh(null,s,d,r,a);break e;case 1:s=Ug(null,s,d,r,a);break e;case 11:s=Vg(null,s,d,r,a);break e;case 14:s=jg(null,s,d,tr(d.type,r),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:tr(d,f),xh(r,s,d,f,a);case 1:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:tr(d,f),Ug(r,s,d,f,a);case 3:e:{if(Bg(s),r===null)throw Error(t(387));d=s.pendingProps,y=s.memoizedState,f=y.element,ng(r,s),Ru(s,d,null,a);var E=s.memoizedState;if(d=E.element,y.isDehydrated)if(y={element:d,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){f=Lo(Error(t(423)),s),s=zg(r,s,d,a,f);break e}else if(d!==f){f=Lo(Error(t(424)),s),s=zg(r,s,d,a,f);break e}else for(An=Ti(s.stateNode.containerInfo.firstChild),kn=s,lt=!0,er=null,a=eg(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(No(),d===f){s=Yr(r,s,a);break e}nn(r,s,d,a)}s=s.child}return s;case 5:return sg(s),r===null&&th(s),d=s.type,f=s.pendingProps,y=r!==null?r.memoizedProps:null,E=f.children,Hd(d,f)?E=null:y!==null&&Hd(d,y)&&(s.flags|=32),Fg(r,s),nn(r,s,E,a),s.child;case 6:return r===null&&th(s),null;case 13:return $g(r,s,a);case 4:return uh(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=Do(s,null,d,a):nn(r,s,d,a),s.child;case 11:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:tr(d,f),Vg(r,s,d,f,a);case 7:return nn(r,s,s.pendingProps,a),s.child;case 8:return nn(r,s,s.pendingProps.children,a),s.child;case 12:return nn(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,f=s.pendingProps,y=s.memoizedProps,E=f.value,nt(ku,d._currentValue),d._currentValue=E,y!==null)if(Zn(y.value,E)){if(y.children===f.children&&!un.current){s=Yr(r,s,a);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var k=y.dependencies;if(k!==null){E=y.child;for(var R=k.firstContext;R!==null;){if(R.context===d){if(y.tag===1){R=Qr(-1,a&-a),R.tag=2;var W=y.updateQueue;if(W!==null){W=W.shared;var X=W.pending;X===null?R.next=R:(R.next=X.next,X.next=R),W.pending=R}}y.lanes|=a,R=y.alternate,R!==null&&(R.lanes|=a),oh(y.return,a,s),k.lanes|=a;break}R=R.next}}else if(y.tag===10)E=y.type===s.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(t(341));E.lanes|=a,k=E.alternate,k!==null&&(k.lanes|=a),oh(E,a,s),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===s){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}nn(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,d=s.pendingProps.children,Vo(s,a),f=Ln(f),d=d(f),s.flags|=1,nn(r,s,d,a),s.child;case 14:return d=s.type,f=tr(d,s.pendingProps),f=tr(d.type,f),jg(r,s,d,f,a);case 15:return Lg(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:tr(d,f),Mu(r,s),s.tag=1,cn(d)?(r=!0,wu(s)):r=!1,Vo(s,a),Cg(s,d,f),Th(s,d,f,a),kh(null,s,d,!0,r,a);case 19:return qg(r,s,a);case 22:return Mg(r,s,a)}throw Error(t(156,s.tag))};function my(r,s){return ao(r,s)}function qT(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(r,s,a,d){return new qT(r,s,a,d)}function Hh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function HT(r){if(typeof r=="function")return Hh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===j)return 11;if(r===vt)return 14}return 2}function Di(r,s){var a=r.alternate;return a===null?(a=Un(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Qu(r,s,a,d,f,y){var E=2;if(d=r,typeof r=="function")Hh(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case N:return Rs(a.children,f,y,s);case x:E=8,f|=8;break;case C:return r=Un(12,a,s,f|2),r.elementType=C,r.lanes=y,r;case A:return r=Un(13,a,s,f),r.elementType=A,r.lanes=y,r;case Qe:return r=Un(19,a,s,f),r.elementType=Qe,r.lanes=y,r;case We:return Yu(a,f,y,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case b:E=10;break e;case D:E=9;break e;case j:E=11;break e;case vt:E=14;break e;case _t:E=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Un(E,a,s,f),s.elementType=r,s.type=d,s.lanes=y,s}function Rs(r,s,a,d){return r=Un(7,r,d,s),r.lanes=a,r}function Yu(r,s,a,d){return r=Un(22,r,d,s),r.elementType=We,r.lanes=a,r.stateNode={isHidden:!1},r}function Gh(r,s,a){return r=Un(6,r,null,s),r.lanes=a,r}function Kh(r,s,a){return s=Un(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function GT(r,s,a,d,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Qh(r,s,a,d,f,y,E,k,R){return r=new GT(r,s,a,k,R),s===1?(s=1,y===!0&&(s|=8)):s=0,y=Un(3,null,null,s),r.current=y,y.stateNode=r,y.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(y),r}function KT(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function gy(r){if(!r)return Si;r=r._reactInternals;e:{if(Hn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(cn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(cn(a))return Wm(r,a,s)}return s}function yy(r,s,a,d,f,y,E,k,R){return r=Qh(a,d,!0,r,f,y,E,k,R),r.context=gy(null),a=r.current,d=rn(),f=bi(a),y=Qr(d,f),y.callback=s??null,Ai(a,y,f),r.current.lanes=f,mi(r,f,d),fn(r,d),r}function Ju(r,s,a,d){var f=s.current,y=rn(),E=bi(f);return a=gy(a),s.context===null?s.context=a:s.pendingContext=a,s=Qr(y,E),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=Ai(f,s,E),r!==null&&(ir(r,f,E,y),Cu(r,f,E)),E}function Xu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function vy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Yh(r,s){vy(r,s),(r=r.alternate)&&vy(r,s)}function QT(){return null}var _y=typeof reportError=="function"?reportError:function(r){console.error(r)};function Jh(r){this._internalRoot=r}Zu.prototype.render=Jh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Ju(r,s,null,null)},Zu.prototype.unmount=Jh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ks(function(){Ju(null,r,null,null)}),s[Wr]=null}};function Zu(r){this._internalRoot=r}Zu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Zl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<yr.length&&s!==0&&s<yr[a].priority;a++);yr.splice(a,0,r),a===0&&nu(r)}};function Xh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ec(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function wy(){}function YT(r,s,a,d,f){if(f){if(typeof d=="function"){var y=d;d=function(){var W=Xu(E);y.call(W)}}var E=yy(s,d,r,0,null,!1,!1,"",wy);return r._reactRootContainer=E,r[Wr]=E.current,za(r.nodeType===8?r.parentNode:r),ks(),E}for(;f=r.lastChild;)r.removeChild(f);if(typeof d=="function"){var k=d;d=function(){var W=Xu(R);k.call(W)}}var R=Qh(r,0,!1,null,null,!1,!1,"",wy);return r._reactRootContainer=R,r[Wr]=R.current,za(r.nodeType===8?r.parentNode:r),ks(function(){Ju(s,R,a,d)}),R}function tc(r,s,a,d,f){var y=a._reactRootContainer;if(y){var E=y;if(typeof f=="function"){var k=f;f=function(){var R=Xu(E);k.call(R)}}Ju(s,E,r,f)}else E=YT(a,s,r,f,d);return Xu(E)}Jl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=fi(s.pendingLanes);a!==0&&(gi(s,a|1),fn(s,tt()),($e&6)===0&&(Uo=tt()+500,xi()))}break;case 13:ks(function(){var d=Kr(r,1);if(d!==null){var f=rn();ir(d,r,1,f)}}),Yh(r,1)}},co=function(r){if(r.tag===13){var s=Kr(r,134217728);if(s!==null){var a=rn();ir(s,r,134217728,a)}Yh(r,134217728)}},Xl=function(r){if(r.tag===13){var s=bi(r),a=Kr(r,s);if(a!==null){var d=rn();ir(a,r,s,d)}Yh(r,s)}},Zl=function(){return Fe},eu=function(r,s){var a=Fe;try{return Fe=r,s()}finally{Fe=a}},to=function(r,s,a){switch(s){case"input":if(wt(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var f=vu(d);if(!f)throw Error(t(90));fe(d),wt(d,f)}}}break;case"textarea":Zs(r,a);break;case"select":s=a.value,s!=null&&Ge(r,!!a.multiple,s,!1)}},os=$h,Ia=ks;var JT={usingClientEntryPoint:!1,Events:[qa,Ao,vu,mr,Ta,$h]},sl={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XT={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ka(r),r===null?null:r.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||QT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{ds=nc.inject(XT),Tn=nc}catch{}}return pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT,pn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(s))throw Error(t(200));return KT(r,s,null,a)},pn.createRoot=function(r,s){if(!Xh(r))throw Error(t(299));var a=!1,d="",f=_y;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Qh(r,1,!1,null,null,a,!1,d,f),r[Wr]=s.current,za(r.nodeType===8?r.parentNode:r),new Jh(s)},pn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ka(s),r=r===null?null:r.stateNode,r},pn.flushSync=function(r){return ks(r)},pn.hydrate=function(r,s,a){if(!ec(s))throw Error(t(200));return tc(null,r,s,!0,a)},pn.hydrateRoot=function(r,s,a){if(!Xh(r))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,f=!1,y="",E=_y;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(y=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=yy(s,null,r,1,a??null,f,!1,y,E),r[Wr]=s.current,za(r),d)for(r=0;r<d.length;r++)a=d[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Zu(s)},pn.render=function(r,s,a){if(!ec(s))throw Error(t(200));return tc(null,r,s,!1,a)},pn.unmountComponentAtNode=function(r){if(!ec(r))throw Error(t(40));return r._reactRootContainer?(ks(function(){tc(null,null,r,!1,function(){r._reactRootContainer=null,r[Wr]=null})}),!0):!1},pn.unstable_batchedUpdates=$h,pn.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!ec(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return tc(r,s,a,!1,d)},pn.version="18.3.1-next-f1338f8080-20240426",pn}var Cy;function j_(){if(Cy)return tf.exports;Cy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),tf.exports=aI(),tf.exports}var Ry;function lI(){if(Ry)return rc;Ry=1;var n=j_();return rc.createRoot=n.createRoot,rc.hydrateRoot=n.hydrateRoot,rc}var uI=lI();const cI=O_(uI);j_();/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},wl.apply(this,arguments)}var Ui;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ui||(Ui={}));const Py="popstate";function dI(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:c,hash:h}=i.location;return Sf("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Tc(o)}return fI(e,t,null,n)}function yt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ip(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hI(){return Math.random().toString(36).substr(2,8)}function by(n,e){return{usr:n.state,key:n.key,idx:e}}function Sf(n,e,t,i){return t===void 0&&(t=null),wl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?aa(e):e,{state:t,key:e&&e.key||i||hI()})}function Tc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function aa(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function fI(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,h=Ui.Pop,p=null,v=_();v==null&&(v=0,c.replaceState(wl({},c.state,{idx:v}),""));function _(){return(c.state||{idx:null}).idx}function T(){h=Ui.Pop;let V=_(),te=V==null?null:V-v;v=V,p&&p({action:h,location:$.location,delta:te})}function S(V,te){h=Ui.Push;let re=Sf($.location,V,te);v=_()+1;let J=by(re,v),_e=$.createHref(re);try{c.pushState(J,"",_e)}catch(Ne){if(Ne instanceof DOMException&&Ne.name==="DataCloneError")throw Ne;o.location.assign(_e)}l&&p&&p({action:h,location:$.location,delta:1})}function P(V,te){h=Ui.Replace;let re=Sf($.location,V,te);v=_();let J=by(re,v),_e=$.createHref(re);c.replaceState(J,"",_e),l&&p&&p({action:h,location:$.location,delta:0})}function M(V){let te=o.location.origin!=="null"?o.location.origin:o.location.href,re=typeof V=="string"?V:Tc(V);return re=re.replace(/ $/,"%20"),yt(te,"No window.location.(origin|href) available to create URL for href: "+re),new URL(re,te)}let $={get action(){return h},get location(){return n(o,c)},listen(V){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Py,T),p=V,()=>{o.removeEventListener(Py,T),p=null}},createHref(V){return e(o,V)},createURL:M,encodeLocation(V){let te=M(V);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:S,replace:P,go(V){return c.go(V)}};return $}var Ny;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Ny||(Ny={}));function pI(n,e,t){return t===void 0&&(t="/"),mI(n,e,t)}function mI(n,e,t,i){let o=typeof e=="string"?aa(e):e,l=sp(o.pathname||"/",t);if(l==null)return null;let c=L_(n);gI(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let v=CI(l);h=xI(c[p],v)}return h}function L_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(yt(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let v=zi([i,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(yt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),L_(l.children,e,_,v)),!(l.path==null&&!l.index)&&e.push({path:v,score:II(v,l.index),routesMeta:_})};return n.forEach((l,c)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,c);else for(let p of M_(l.path))o(l,c,p)}),e}function M_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=M_(i.join("/")),h=[];return h.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...c),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function gI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:SI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const yI=/^:[\w-]+$/,vI=3,_I=2,wI=1,EI=10,TI=-2,Dy=n=>n==="*";function II(n,e){let t=n.split("/"),i=t.length;return t.some(Dy)&&(i+=TI),e&&(i+=_I),t.filter(o=>!Dy(o)).reduce((o,l)=>o+(yI.test(l)?vI:l===""?wI:EI),i)}function SI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function xI(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let h=0;h<i.length;++h){let p=i[h],v=h===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",T=kI({path:p.relativePath,caseSensitive:p.caseSensitive,end:v},_),S=p.route;if(!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:zi([l,T.pathname]),pathnameBase:DI(zi([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=zi([l,T.pathnameBase]))}return c}function kI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=AI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((v,_,T)=>{let{paramName:S,isOptional:P}=_;if(S==="*"){let $=h[T]||"";c=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const M=h[T];return P&&!M?v[S]=void 0:v[S]=(M||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:c,pattern:n}}function AI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),ip(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function CI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ip(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function sp(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const RI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PI=n=>RI.test(n);function bI(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?aa(n):n,l;if(t)if(PI(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),ip(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=Oy(t.substring(1),"/"):l=Oy(t,e)}else l=e;return{pathname:l,search:OI(i),hash:VI(o)}}function Oy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function sf(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function op(n,e){let t=NI(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function ap(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=aa(n):(o=wl({},n),yt(!o.pathname||!o.pathname.includes("?"),sf("?","pathname","search",o)),yt(!o.pathname||!o.pathname.includes("#"),sf("#","pathname","hash",o)),yt(!o.search||!o.search.includes("#"),sf("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;o.pathname=S.join("/")}h=T>=0?e[T]:"/"}let p=bI(o,h),v=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(v||_)&&(p.pathname+="/"),p}const zi=n=>n.join("/").replace(/\/\/+/g,"/"),DI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),OI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,VI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function jI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const F_=["post","put","patch","delete"];new Set(F_);const LI=["get",...F_];new Set(LI);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},El.apply(this,arguments)}const lp=z.createContext(null),MI=z.createContext(null),Zi=z.createContext(null),Qc=z.createContext(null),ui=z.createContext({outlet:null,matches:[],isDataRoute:!1}),U_=z.createContext(null);function FI(n,e){let{relative:t}=e===void 0?{}:e;la()||yt(!1);let{basename:i,navigator:o}=z.useContext(Zi),{hash:l,pathname:c,search:h}=z_(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:zi([i,c])),o.createHref({pathname:p,search:h,hash:l})}function la(){return z.useContext(Qc)!=null}function zs(){return la()||yt(!1),z.useContext(Qc).location}function B_(n){z.useContext(Zi).static||z.useLayoutEffect(n)}function $s(){let{isDataRoute:n}=z.useContext(ui);return n?ZI():UI()}function UI(){la()||yt(!1);let n=z.useContext(lp),{basename:e,future:t,navigator:i}=z.useContext(Zi),{matches:o}=z.useContext(ui),{pathname:l}=zs(),c=JSON.stringify(op(o,t.v7_relativeSplatPath)),h=z.useRef(!1);return B_(()=>{h.current=!0}),z.useCallback(function(v,_){if(_===void 0&&(_={}),!h.current)return;if(typeof v=="number"){i.go(v);return}let T=ap(v,JSON.parse(c),l,_.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:zi([e,T.pathname])),(_.replace?i.replace:i.push)(T,_.state,_)},[e,i,c,l,n])}function BI(){let{matches:n}=z.useContext(ui),e=n[n.length-1];return e?e.params:{}}function z_(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=z.useContext(Zi),{matches:o}=z.useContext(ui),{pathname:l}=zs(),c=JSON.stringify(op(o,i.v7_relativeSplatPath));return z.useMemo(()=>ap(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function zI(n,e){return $I(n,e)}function $I(n,e,t,i){la()||yt(!1);let{navigator:o}=z.useContext(Zi),{matches:l}=z.useContext(ui),c=l[l.length-1],h=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let v=zs(),_;if(e){var T;let V=typeof e=="string"?aa(e):e;p==="/"||(T=V.pathname)!=null&&T.startsWith(p)||yt(!1),_=V}else _=v;let S=_.pathname||"/",P=S;if(p!=="/"){let V=p.replace(/^\//,"").split("/");P="/"+S.replace(/^\//,"").split("/").slice(V.length).join("/")}let M=pI(n,{pathname:P}),$=KI(M&&M.map(V=>Object.assign({},V,{params:Object.assign({},h,V.params),pathname:zi([p,o.encodeLocation?o.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?p:zi([p,o.encodeLocation?o.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),l,t,i);return e&&$?z.createElement(Qc.Provider,{value:{location:El({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Ui.Pop}},$):$}function WI(){let n=XI(),e=jI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:o},t):null,null)}const qI=z.createElement(WI,null);class HI extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?z.createElement(ui.Provider,{value:this.props.routeContext},z.createElement(U_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GI(n){let{routeContext:e,match:t,children:i}=n,o=z.useContext(lp);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),z.createElement(ui.Provider,{value:e},i)}function KI(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,h=(o=t)==null?void 0:o.errors;if(h!=null){let _=c.findIndex(T=>T.route.id&&(h==null?void 0:h[T.route.id])!==void 0);_>=0||yt(!1),c=c.slice(0,Math.min(c.length,_+1))}let p=!1,v=-1;if(t&&i&&i.v7_partialHydration)for(let _=0;_<c.length;_++){let T=c[_];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(v=_),T.route.id){let{loaderData:S,errors:P}=t,M=T.route.loader&&S[T.route.id]===void 0&&(!P||P[T.route.id]===void 0);if(T.route.lazy||M){p=!0,v>=0?c=c.slice(0,v+1):c=[c[0]];break}}}return c.reduceRight((_,T,S)=>{let P,M=!1,$=null,V=null;t&&(P=h&&T.route.id?h[T.route.id]:void 0,$=T.route.errorElement||qI,p&&(v<0&&S===0?(eS("route-fallback"),M=!0,V=null):v===S&&(M=!0,V=T.route.hydrateFallbackElement||null)));let te=e.concat(c.slice(0,S+1)),re=()=>{let J;return P?J=$:M?J=V:T.route.Component?J=z.createElement(T.route.Component,null):T.route.element?J=T.route.element:J=_,z.createElement(GI,{match:T,routeContext:{outlet:_,matches:te,isDataRoute:t!=null},children:J})};return t&&(T.route.ErrorBoundary||T.route.errorElement||S===0)?z.createElement(HI,{location:t.location,revalidation:t.revalidation,component:$,error:P,children:re(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):re()},null)}var $_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})($_||{}),W_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(W_||{});function QI(n){let e=z.useContext(lp);return e||yt(!1),e}function YI(n){let e=z.useContext(MI);return e||yt(!1),e}function JI(n){let e=z.useContext(ui);return e||yt(!1),e}function q_(n){let e=JI(),t=e.matches[e.matches.length-1];return t.route.id||yt(!1),t.route.id}function XI(){var n;let e=z.useContext(U_),t=YI(),i=q_();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function ZI(){let{router:n}=QI($_.UseNavigateStable),e=q_(W_.UseNavigateStable),t=z.useRef(!1);return B_(()=>{t.current=!0}),z.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,El({fromRouteId:e},l)))},[n,e])}const Vy={};function eS(n,e,t){Vy[n]||(Vy[n]=!0)}function tS(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Ic(n){let{to:e,replace:t,state:i,relative:o}=n;la()||yt(!1);let{future:l,static:c}=z.useContext(Zi),{matches:h}=z.useContext(ui),{pathname:p}=zs(),v=$s(),_=ap(e,op(h,l.v7_relativeSplatPath),p,o==="path"),T=JSON.stringify(_);return z.useEffect(()=>v(JSON.parse(T),{replace:t,state:i,relative:o}),[v,T,o,t,i]),null}function Rn(n){yt(!1)}function nS(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Ui.Pop,navigator:l,static:c=!1,future:h}=n;la()&&yt(!1);let p=e.replace(/^\/*/,"/"),v=z.useMemo(()=>({basename:p,navigator:l,static:c,future:El({v7_relativeSplatPath:!1},h)}),[p,h,l,c]);typeof i=="string"&&(i=aa(i));let{pathname:_="/",search:T="",hash:S="",state:P=null,key:M="default"}=i,$=z.useMemo(()=>{let V=sp(_,p);return V==null?null:{location:{pathname:V,search:T,hash:S,state:P,key:M},navigationType:o}},[p,_,T,S,P,M,o]);return $==null?null:z.createElement(Zi.Provider,{value:v},z.createElement(Qc.Provider,{children:t,value:$}))}function rS(n){let{children:e,location:t}=n;return zI(xf(e),t)}new Promise(()=>{});function xf(n,e){e===void 0&&(e=[]);let t=[];return z.Children.forEach(n,(i,o)=>{if(!z.isValidElement(i))return;let l=[...e,o];if(i.type===z.Fragment){t.push.apply(t,xf(i.props.children,l));return}i.type!==Rn&&yt(!1),!i.props.index||!i.props.children||yt(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=xf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kf(){return kf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},kf.apply(this,arguments)}function iS(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function sS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function oS(n,e){return n.button===0&&(!e||e==="_self")&&!sS(n)}const aS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lS="6";try{window.__reactRouterVersion=lS}catch{}const uS="startTransition",jy=iI[uS];function cS(n){let{basename:e,children:t,future:i,window:o}=n,l=z.useRef();l.current==null&&(l.current=dI({window:o,v5Compat:!0}));let c=l.current,[h,p]=z.useState({action:c.action,location:c.location}),{v7_startTransition:v}=i||{},_=z.useCallback(T=>{v&&jy?jy(()=>p(T)):p(T)},[p,v]);return z.useLayoutEffect(()=>c.listen(_),[c,_]),z.useEffect(()=>tS(i),[i]),z.createElement(nS,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:c,future:i})}const dS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sn=z.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:h,target:p,to:v,preventScrollReset:_,viewTransition:T}=e,S=iS(e,aS),{basename:P}=z.useContext(Zi),M,$=!1;if(typeof v=="string"&&hS.test(v)&&(M=v,dS))try{let J=new URL(window.location.href),_e=v.startsWith("//")?new URL(J.protocol+v):new URL(v),Ne=sp(_e.pathname,P);_e.origin===J.origin&&Ne!=null?v=Ne+_e.search+_e.hash:$=!0}catch{}let V=FI(v,{relative:o}),te=fS(v,{replace:c,state:h,target:p,preventScrollReset:_,relative:o,viewTransition:T});function re(J){i&&i(J),J.defaultPrevented||te(J)}return z.createElement("a",kf({},S,{href:M||V,onClick:$||l?i:re,ref:t,target:p}))});var Ly;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ly||(Ly={}));var My;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(My||(My={}));function fS(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:h}=e===void 0?{}:e,p=$s(),v=zs(),_=z_(n,{relative:c});return z.useCallback(T=>{if(oS(T,t)){T.preventDefault();let S=i!==void 0?i:Tc(v)===Tc(_);p(n,{replace:S,state:o,preventScrollReset:l,relative:c,viewTransition:h})}},[v,p,_,i,o,t,n,l,c,h])}const pS=()=>{};var Fy={};/**
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
 */const H_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},mS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],h=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},G_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,h=c?n[o+1]:0,p=o+2<n.length,v=p?n[o+2]:0,_=l>>2,T=(l&3)<<4|h>>4;let S=(h&15)<<2|v>>6,P=v&63;p||(P=64,c||(S=64)),i.push(t[_],t[T],t[S],t[P])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(H_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const v=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||v==null||T==null)throw new gS;const S=l<<2|h>>4;if(i.push(S),v!==64){const P=h<<4&240|v>>2;if(i.push(P),T!==64){const M=v<<6&192|T;i.push(M)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yS=function(n){const e=H_(n);return G_.encodeByteArray(e,!0)},Sc=function(n){return yS(n).replace(/\./g,"")},K_=function(n){try{return G_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _S=()=>vS().__FIREBASE_DEFAULTS__,wS=()=>{if(typeof process>"u"||typeof Fy>"u")return;const n=Fy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ES=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&K_(n[1]);return e&&JSON.parse(e)},Yc=()=>{try{return pS()||_S()||wS()||ES()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Q_=n=>{var e,t;return(t=(e=Yc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Y_=n=>{const e=Q_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},J_=()=>{var n;return(n=Yc())===null||n===void 0?void 0:n.config},X_=n=>{var e;return(e=Yc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class TS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Ws(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function up(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function IS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Sc(JSON.stringify(t)),Sc(JSON.stringify(c)),""].join(".")}const pl={};function SS(){const n={prod:[],emulator:[]};for(const e of Object.keys(pl))pl[e]?n.emulator.push(e):n.prod.push(e);return n}function xS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Uy=!1;function cp(n,e){if(typeof window>"u"||typeof document>"u"||!Ws(window.location.host)||pl[n]===e||pl[n]||Uy)return;pl[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=SS().prod.length>0;function c(){const S=document.getElementById(i);S&&S.remove()}function h(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,P){S.setAttribute("width","24"),S.setAttribute("id",P),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function v(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Uy=!0,c()},S}function _(S,P){S.setAttribute("id",P),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=xS(i),P=t("text"),M=document.getElementById(P)||document.createElement("span"),$=t("learnmore"),V=document.getElementById($)||document.createElement("a"),te=t("preprendIcon"),re=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const J=S.element;h(J),_(V,$);const _e=v();p(re,te),J.append(re,M,V,_e),document.body.appendChild(J)}l?(M.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function AS(){var n;const e=(n=Yc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function PS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bS(){const n=Zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function NS(){return!AS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Z_(){try{return typeof indexedDB=="object"}catch{return!1}}function ew(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function DS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const OS="FirebaseError";class dr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=OS,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?VS(l,i):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new dr(o,h,i)}}function VS(n,e){return n.replace(jS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const jS=/\{\$([^}]+)}/g;function LS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ri(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(By(l)&&By(c)){if(!ri(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function By(n){return n!==null&&typeof n=="object"}/**
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
 */function bl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ll(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function ul(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function MS(n,e){const t=new FS(n,e);return t.subscribe.bind(t)}class FS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");US(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=of),o.error===void 0&&(o.error=of),o.complete===void 0&&(o.complete=of);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function US(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function of(){}/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ps="[DEFAULT]";/**
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
 */class BS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new TS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($S(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zS(n){return n===Ps?void 0:n}function $S(n){return n.instantiationMode==="EAGER"}/**
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
 */class WS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new BS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const qS={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},HS=Le.INFO,GS={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},KS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=GS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dp{constructor(e){this.name=e,this._logLevel=HS,this._logHandler=KS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const QS=(n,e)=>e.some(t=>n instanceof t);let zy,$y;function YS(){return zy||(zy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JS(){return $y||($y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tw=new WeakMap,Af=new WeakMap,nw=new WeakMap,af=new WeakMap,hp=new WeakMap;function XS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(ti(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&tw.set(t,n)}).catch(()=>{}),hp.set(e,n),e}function ZS(n){if(Af.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Af.set(n,e)}let Cf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Af.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ti(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function e1(n){Cf=n(Cf)}function t1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(lf(this),e,...t);return nw.set(i,e.sort?e.sort():[e]),ti(i)}:JS().includes(n)?function(...e){return n.apply(lf(this),e),ti(tw.get(this))}:function(...e){return ti(n.apply(lf(this),e))}}function n1(n){return typeof n=="function"?t1(n):(n instanceof IDBTransaction&&ZS(n),QS(n,YS())?new Proxy(n,Cf):n)}function ti(n){if(n instanceof IDBRequest)return XS(n);if(af.has(n))return af.get(n);const e=n1(n);return e!==n&&(af.set(n,e),hp.set(e,n)),e}const lf=n=>hp.get(n);function Jc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),h=ti(c);return i&&c.addEventListener("upgradeneeded",p=>{i(ti(c.result),p.oldVersion,p.newVersion,ti(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),h}function uf(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),ti(t).then(()=>{})}const r1=["get","getKey","getAll","getAllKeys","count"],i1=["put","add","delete","clear"],cf=new Map;function Wy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cf.get(e))return cf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=i1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||r1.includes(t)))return;const l=async function(c,...h){const p=this.transaction(c,o?"readwrite":"readonly");let v=p.store;return i&&(v=v.index(h.shift())),(await Promise.all([v[t](...h),o&&p.done]))[0]};return cf.set(e,l),l}e1(n=>({...n,get:(e,t,i)=>Wy(e,t)||n.get(e,t,i),has:(e,t)=>!!Wy(e,t)||n.has(e,t)}));/**
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
 */class s1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(o1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function o1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rf="@firebase/app",qy="0.13.2";/**
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
 */const ii=new dp("@firebase/app"),a1="@firebase/app-compat",l1="@firebase/analytics-compat",u1="@firebase/analytics",c1="@firebase/app-check-compat",d1="@firebase/app-check",h1="@firebase/auth",f1="@firebase/auth-compat",p1="@firebase/database",m1="@firebase/data-connect",g1="@firebase/database-compat",y1="@firebase/functions",v1="@firebase/functions-compat",_1="@firebase/installations",w1="@firebase/installations-compat",E1="@firebase/messaging",T1="@firebase/messaging-compat",I1="@firebase/performance",S1="@firebase/performance-compat",x1="@firebase/remote-config",k1="@firebase/remote-config-compat",A1="@firebase/storage",C1="@firebase/storage-compat",R1="@firebase/firestore",P1="@firebase/ai",b1="@firebase/firestore-compat",N1="firebase",D1="11.10.0";/**
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
 */const Pf="[DEFAULT]",O1={[Rf]:"fire-core",[a1]:"fire-core-compat",[u1]:"fire-analytics",[l1]:"fire-analytics-compat",[d1]:"fire-app-check",[c1]:"fire-app-check-compat",[h1]:"fire-auth",[f1]:"fire-auth-compat",[p1]:"fire-rtdb",[m1]:"fire-data-connect",[g1]:"fire-rtdb-compat",[y1]:"fire-fn",[v1]:"fire-fn-compat",[_1]:"fire-iid",[w1]:"fire-iid-compat",[E1]:"fire-fcm",[T1]:"fire-fcm-compat",[I1]:"fire-perf",[S1]:"fire-perf-compat",[x1]:"fire-rc",[k1]:"fire-rc-compat",[A1]:"fire-gcs",[C1]:"fire-gcs-compat",[R1]:"fire-fst",[b1]:"fire-fst-compat",[P1]:"fire-vertex","fire-js":"fire-js",[N1]:"fire-js-all"};/**
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
 */const xc=new Map,V1=new Map,bf=new Map;function Hy(n,e){try{n.container.addComponent(e)}catch(t){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lr(n){const e=n.name;if(bf.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;bf.set(e,n);for(const t of xc.values())Hy(t,n);for(const t of V1.values())Hy(t,n);return!0}function Hs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function gn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const j1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$i=new qs("app","Firebase",j1);/**
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
 */class L1{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $i.create("app-deleted",{appName:this._name})}}/**
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
 */const ua=D1;function rw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Pf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw $i.create("bad-app-name",{appName:String(o)});if(t||(t=J_()),!t)throw $i.create("no-options");const l=xc.get(o);if(l){if(ri(t,l.options)&&ri(i,l.config))return l;throw $i.create("duplicate-app",{appName:o})}const c=new WS(o);for(const p of bf.values())c.addComponent(p);const h=new L1(t,i,c);return xc.set(o,h),h}function Xc(n=Pf){const e=xc.get(n);if(!e&&n===Pf&&J_())return rw();if(!e)throw $i.create("no-app",{appName:n});return e}function _n(n,e,t){var i;let o=(i=O1[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(h.join(" "));return}lr(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const M1="firebase-heartbeat-database",F1=1,Tl="firebase-heartbeat-store";let df=null;function iw(){return df||(df=Jc(M1,F1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tl)}catch(t){console.warn(t)}}}}).catch(n=>{throw $i.create("idb-open",{originalErrorMessage:n.message})})),df}async function U1(n){try{const t=(await iw()).transaction(Tl),i=await t.objectStore(Tl).get(sw(n));return await t.done,i}catch(e){if(e instanceof dr)ii.warn(e.message);else{const t=$i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ii.warn(t.message)}}}async function Gy(n,e){try{const i=(await iw()).transaction(Tl,"readwrite");await i.objectStore(Tl).put(e,sw(n)),await i.done}catch(t){if(t instanceof dr)ii.warn(t.message);else{const i=$i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ii.warn(i.message)}}}function sw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const B1=1024,z1=30;class $1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new q1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ky();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>z1){const c=H1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ii.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ky(),{heartbeatsToSend:i,unsentEntries:o}=W1(this._heartbeatsCache.heartbeats),l=Sc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return ii.warn(t),""}}}function Ky(){return new Date().toISOString().substring(0,10)}function W1(n,e=B1){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Qy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Qy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class q1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z_()?ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await U1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Qy(n){return Sc(JSON.stringify({version:2,heartbeats:n})).length}function H1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function G1(n){lr(new $n("platform-logger",e=>new s1(e),"PRIVATE")),lr(new $n("heartbeat",e=>new $1(e),"PRIVATE")),_n(Rf,qy,n),_n(Rf,qy,"esm2017"),_n("fire-js","")}G1("");function fp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function ow(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K1=ow,aw=new qs("auth","Firebase",ow());/**
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
 */const kc=new dp("@firebase/auth");function Q1(n,...e){kc.logLevel<=Le.WARN&&kc.warn(`Auth (${ua}): ${n}`,...e)}function hc(n,...e){kc.logLevel<=Le.ERROR&&kc.error(`Auth (${ua}): ${n}`,...e)}/**
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
 */function ur(n,...e){throw pp(n,...e)}function kr(n,...e){return pp(n,...e)}function lw(n,e,t){const i=Object.assign(Object.assign({},K1()),{[e]:t});return new qs("auth","Firebase",i).create(e,{appName:n.name})}function Ar(n){return lw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return aw.create(n,...e)}function ke(n,e,...t){if(!n)throw pp(e,...t)}function Zr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hc(e),new Error(e)}function si(n,e){n||Zr(e)}/**
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
 */function Nf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Y1(){return Yy()==="http:"||Yy()==="https:"}function Yy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function J1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y1()||RS()||"connection"in navigator)?navigator.onLine:!0}function X1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,si(t>e,"Short delay should be less than long delay!"),this.isMobile=kS()||PS()}get(){return J1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mp(n,e){si(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class uw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Z1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ex=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tx=new Nl(3e4,6e4);function ci(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Vr(n,e,t,i,o={}){return cw(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const h=bl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const v=Object.assign({method:e,headers:p},l);return CS()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&Ws(n.emulatorConfig.host)&&(v.credentials="include"),uw.fetch()(await dw(n,n.config.apiHost,t,h),v)})}async function cw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Z1),e);try{const o=new rx(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw ic(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[p,v]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ic(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw ic(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw ic(n,"user-disabled",c);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw lw(n,_,v);ur(n,_)}}catch(o){if(o instanceof dr)throw o;ur(n,"network-request-failed",{message:String(o)})}}async function Dl(n,e,t,i,o={}){const l=await Vr(n,e,t,i,o);return"mfaPendingCredential"in l&&ur(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function dw(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?mp(n.config,o):`${n.config.apiScheme}://${o}`;return ex.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function nx(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(kr(this.auth,"network-request-failed")),tx.get())})}}function ic(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=kr(n,e,i);return o.customData._tokenResponse=t,o}function Jy(n){return n!==void 0&&n.enterprise!==void 0}class ix{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return nx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sx(n,e){return Vr(n,"GET","/v2/recaptchaConfig",ci(n,e))}/**
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
 */async function ox(n,e){return Vr(n,"POST","/v1/accounts:delete",e)}async function Ac(n,e){return Vr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ml(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ax(n,e=!1){const t=et(n),i=await t.getIdToken(e),o=gp(i);ke(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:ml(hf(o.auth_time)),issuedAtTime:ml(hf(o.iat)),expirationTime:ml(hf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function hf(n){return Number(n)*1e3}function gp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return hc("JWT malformed, contained fewer than 3 sections"),null;try{const o=K_(t);return o?JSON.parse(o):(hc("Failed to decode base64 JWT payload"),null)}catch(o){return hc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Xy(n){const e=gp(n);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof dr&&lx(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function lx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ux{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Df{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ml(this.lastLoginAt),this.creationTime=ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Jo(n,Ac(t,{idToken:i}));ke(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?hw(l.providerUserInfo):[],h=dx(n.providerData,c),p=n.isAnonymous,v=!(n.email&&l.passwordHash)&&!(h!=null&&h.length),_=p?v:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Df(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,T)}async function cx(n){const e=et(n);await Cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dx(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function hw(n){return n.map(e=>{var{providerId:t}=e,i=fp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function hx(n,e){const t=await cw(n,{},async()=>{const i=bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await dw(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:h,body:i};return n.emulatorConfig&&Ws(n.emulatorConfig.host)&&(p.credentials="include"),uw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fx(n,e){return Vr(n,"POST","/v2/accounts:revokeToken",ci(n,e))}/**
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
 */class Go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const t=Xy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await hx(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Go;return i&&(ke(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(ke(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ke(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Go,this.toJSON())}_performRefresh(){return Zr("not implemented")}}/**
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
 */function Vi(n,e){ke(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ar{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=fp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ux(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Df(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return ke(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ax(this,e)}reload(){return cx(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await Jo(this,ox(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,h,p,v,_;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,M=(c=t.photoURL)!==null&&c!==void 0?c:void 0,$=(h=t.tenantId)!==null&&h!==void 0?h:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,te=(v=t.createdAt)!==null&&v!==void 0?v:void 0,re=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:J,emailVerified:_e,isAnonymous:Ne,providerData:we,stsTokenManager:N}=t;ke(J&&N,e,"internal-error");const x=Go.fromJSON(this.name,N);ke(typeof J=="string",e,"internal-error"),Vi(T,e.name),Vi(S,e.name),ke(typeof _e=="boolean",e,"internal-error"),ke(typeof Ne=="boolean",e,"internal-error"),Vi(P,e.name),Vi(M,e.name),Vi($,e.name),Vi(V,e.name),Vi(te,e.name),Vi(re,e.name);const C=new ar({uid:J,auth:e,email:S,emailVerified:_e,displayName:T,isAnonymous:Ne,photoURL:M,phoneNumber:P,tenantId:$,stsTokenManager:x,createdAt:te,lastLoginAt:re});return we&&Array.isArray(we)&&(C.providerData=we.map(b=>Object.assign({},b))),V&&(C._redirectEventId=V),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new Go;o.updateFromServerResponse(t);const l=new ar({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Cc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ke(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?hw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new Go;h.updateFromIdToken(i);const p=new ar({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Df(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,v),p}}/**
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
 */const Zy=new Map;function ei(n){si(n instanceof Function,"Expected a class definition");let e=Zy.get(n);return e?(si(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Zy.set(n,e),e)}/**
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
 */class fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fw.type="NONE";const ev=fw;/**
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
 */function fc(n,e,t){return`firebase:${n}:${e}:${t}`}class Ko{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=fc(this.userKey,o.apiKey,l),this.fullPersistenceKey=fc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ac(this.auth,{idToken:e}).catch(()=>{});return t?ar._fromGetAccountInfoResponse(this.auth,t,e):null}return ar._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ko(ei(ev),e,i);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||ei(ev);const c=fc(i,e.config.apiKey,e.name);let h=null;for(const v of t)try{const _=await v._get(c);if(_){let T;if(typeof _=="string"){const S=await Ac(e,{idToken:_}).catch(()=>{});if(!S)break;T=await ar._fromGetAccountInfoResponse(e,S,_)}else T=ar._fromJSON(e,_);v!==l&&(h=T),l=v;break}}catch{}const p=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ko(l,e,i):(l=p[0],h&&await l._set(c,h.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(c)}catch{}})),new Ko(l,e,i))}}/**
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
 */function tv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_w(e))return"Blackberry";if(ww(e))return"Webos";if(mw(e))return"Safari";if((e.includes("chrome/")||gw(e))&&!e.includes("edge/"))return"Chrome";if(vw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pw(n=Zt()){return/firefox\//i.test(n)}function mw(n=Zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gw(n=Zt()){return/crios\//i.test(n)}function yw(n=Zt()){return/iemobile/i.test(n)}function vw(n=Zt()){return/android/i.test(n)}function _w(n=Zt()){return/blackberry/i.test(n)}function ww(n=Zt()){return/webos/i.test(n)}function yp(n=Zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function px(n=Zt()){var e;return yp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mx(){return bS()&&document.documentMode===10}function Ew(n=Zt()){return yp(n)||vw(n)||ww(n)||_w(n)||/windows phone/i.test(n)||yw(n)}/**
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
 */function Tw(n,e=[]){let t;switch(n){case"Browser":t=tv(Zt());break;case"Worker":t=`${tv(Zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ua}/${i}`}/**
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
 */class gx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,h)=>{try{const p=e(l);c(p)}catch(p){h(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function yx(n,e={}){return Vr(n,"GET","/v2/passwordPolicy",ci(n,e))}/**
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
 */const vx=6;class _x{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:vx,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class wx{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nv(this),this.idTokenSubscription=new nv(this),this.beforeStateQueue=new gx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ei(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Ko.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ac(this,{idToken:e}),i=await ar._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(gn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(Ar(this));const t=e?et(e):null;return t&&ke(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ei(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yx(this),t=new _x(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await fx(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ei(e)||this._popupRedirectResolver;ke(t,this,"argument-error"),this.redirectPersistenceManager=await Ko.create(this,[ei(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Q1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function es(n){return et(n)}class nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=MS(t=>this.observer=t)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ex(n){Zc=n}function Iw(n){return Zc.loadJS(n)}function Tx(){return Zc.recaptchaEnterpriseScript}function Ix(){return Zc.gapiScript}function Sx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class xx{constructor(){this.enterprise=new kx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class kx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ax="recaptcha-enterprise",Sw="NO_RECAPTCHA";class Cx{constructor(e){this.type=Ax,this.auth=es(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{sx(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const v=new ix(p);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,c(v.siteKey)}}).catch(p=>{h(p)})})}function o(l,c,h){const p=window.grecaptcha;Jy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(v=>{c(v)}).catch(()=>{c(Sw)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xx().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(h=>{if(!t&&Jy(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Tx();p.length!==0&&(p+=h),Iw(p).then(()=>{o(h,l,c)}).catch(v=>{c(v)})}}).catch(h=>{c(h)})})}}async function rv(n,e,t,i=!1,o=!1){const l=new Cx(n);let c;if(o)c=Sw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,v=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:v,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Rc(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await rv(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await rv(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(c)})}/**
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
 */function Rx(n,e){const t=Hs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ri(l,e??{}))return o;ur(o,"already-initialized")}return t.initialize({options:e})}function Px(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ei);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function bx(n,e,t){const i=es(n);ke(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=xw(e),{host:c,port:h}=Nx(e),p=h===null?"":`:${h}`,v={url:`${l}//${c}${p}/`},_=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(ri(v,i.config.emulator)&&ri(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=v,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,Ws(c)?(up(`${l}//${c}${p}`),cp("Auth",!0)):Dx()}function xw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Nx(n){const e=xw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:iv(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:iv(c)}}}function iv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Dx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class vp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zr("not implemented")}_getIdTokenResponse(e){return Zr("not implemented")}_linkToIdToken(e,t){return Zr("not implemented")}_getReauthenticationResolver(e){return Zr("not implemented")}}async function Ox(n,e){return Vr(n,"POST","/v1/accounts:update",e)}async function Vx(n,e){return Vr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jx(n,e){return Dl(n,"POST","/v1/accounts:signInWithPassword",ci(n,e))}async function Lx(n,e){return Vr(n,"POST","/v1/accounts:sendOobCode",ci(n,e))}async function Mx(n,e){return Lx(n,e)}/**
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
 */async function Fx(n,e){return Dl(n,"POST","/v1/accounts:signInWithEmailLink",ci(n,e))}async function Ux(n,e){return Dl(n,"POST","/v1/accounts:signInWithEmailLink",ci(n,e))}/**
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
 */class Il extends vp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Il(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Il(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,t,"signInWithPassword",jx);case"emailLink":return Fx(e,{email:this._email,oobCode:this._password});default:ur(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,i,"signUpPassword",Vx);case"emailLink":return Ux(e,{idToken:t,email:this._email,oobCode:this._password});default:ur(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qo(n,e){return Dl(n,"POST","/v1/accounts:signInWithIdp",ci(n,e))}/**
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
 */const Bx="http://localhost";class Vs extends vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ur("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=fp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Vs(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Qo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Qo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qo(e,t)}buildRequest(){const e={requestUri:Bx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bl(t)}return e}}/**
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
 */function zx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $x(n){const e=ll(ul(n)).link,t=e?ll(ul(e)).deep_link_id:null,i=ll(ul(n)).deep_link_id;return(i?ll(ul(i)).link:null)||i||t||e||n}class _p{constructor(e){var t,i,o,l,c,h;const p=ll(ul(e)),v=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(i=p.oobCode)!==null&&i!==void 0?i:null,T=zx((o=p.mode)!==null&&o!==void 0?o:null);ke(v&&_&&T,"argument-error"),this.apiKey=v,this.operation=T,this.code=_,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=$x(e);try{return new _p(t)}catch{return null}}}/**
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
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(e,t){return Il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=_p.parseLink(t);return ke(i,"argument-error"),Il._fromEmailAndCode(e,i.code,i.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ol extends kw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ji extends Ol{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch{return null}}}ji.FACEBOOK_SIGN_IN_METHOD="facebook.com";ji.PROVIDER_ID="facebook.com";/**
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
 */class Li extends Ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vs._fromParams({providerId:Li.PROVIDER_ID,signInMethod:Li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Li.credentialFromTaggedObject(e)}static credentialFromError(e){return Li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Li.credential(t,i)}catch{return null}}}Li.GOOGLE_SIGN_IN_METHOD="google.com";Li.PROVIDER_ID="google.com";/**
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
 */class Mi extends Ol{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mi.credential(e.oauthAccessToken)}catch{return null}}}Mi.GITHUB_SIGN_IN_METHOD="github.com";Mi.PROVIDER_ID="github.com";/**
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
 */class Fi extends Ol{constructor(){super("twitter.com")}static credential(e,t){return Vs._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Fi.credential(t,i)}catch{return null}}}Fi.TWITTER_SIGN_IN_METHOD="twitter.com";Fi.PROVIDER_ID="twitter.com";/**
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
 */async function Wx(n,e){return Dl(n,"POST","/v1/accounts:signUp",ci(n,e))}/**
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
 */class js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await ar._fromIdTokenResponse(e,i,o),c=sv(i);return new js({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=sv(i);return new js({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function sv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Pc extends dr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Pc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Pc(e,t,i,o)}}function Aw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Pc._fromErrorAndOperation(n,l,e,i):l})}async function qx(n,e,t=!1){const i=await Jo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return js._forOperation(n,"link",i)}/**
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
 */async function Cw(n,e,t=!1){const{auth:i}=n;if(gn(i.app))return Promise.reject(Ar(i));const o="reauthenticate";try{const l=await Jo(n,Aw(i,o,e,n),t);ke(l.idToken,i,"internal-error");const c=gp(l.idToken);ke(c,i,"internal-error");const{sub:h}=c;return ke(n.uid===h,i,"user-mismatch"),js._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ur(i,"user-mismatch"),l}}/**
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
 */async function Rw(n,e,t=!1){if(gn(n.app))return Promise.reject(Ar(n));const i="signIn",o=await Aw(n,i,e),l=await js._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function Hx(n,e){return Rw(es(n),e)}async function Gx(n,e){return Cw(et(n),e)}/**
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
 */async function Pw(n){const e=es(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Kx(n,e,t){const i=es(n);await Rc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Mx)}async function Qx(n,e,t){if(gn(n.app))return Promise.reject(Ar(n));const i=es(n),c=await Rc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wx).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Pw(n),p}),h=await js._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(h.user),h}function Yx(n,e,t){return gn(n.app)?Promise.reject(Ar(n)):Hx(et(n),Gs.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Pw(n),i})}function Jx(n,e){const t=et(n);return gn(t.auth.app)?Promise.reject(Ar(t.auth)):bw(t,e,null)}function Xx(n,e){return bw(et(n),null,e)}async function bw(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await Jo(n,Ox(i,l));await n._updateTokensIfNecessary(c,!0)}function Zx(n,e,t,i){return et(n).onIdTokenChanged(e,t,i)}function ek(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function tk(n,e,t,i){return et(n).onAuthStateChanged(e,t,i)}function nk(n){return et(n).signOut()}const bc="__sak";/**
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
 */class Nw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rk=1e3,ik=10;class Dw extends Nw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);mx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ik):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dw.type="LOCAL";const sk=Dw;/**
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
 */class Ow extends Nw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ow.type="SESSION";const Vw=Ow;/**
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
 */function ok(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new ed(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(c).map(async v=>v(t.origin,l)),p=await ok(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ed.receivers=[];/**
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
 */function wp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ak{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,p)=>{const v=wp("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===v)switch(S.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(S.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Cr(){return window}function lk(n){Cr().location.href=n}/**
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
 */function jw(){return typeof Cr().WorkerGlobalScope<"u"&&typeof Cr().importScripts=="function"}async function uk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ck(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function dk(){return jw()?self:null}/**
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
 */const Lw="firebaseLocalStorageDb",hk=1,Nc="firebaseLocalStorage",Mw="fbase_key";class Vl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function td(n,e){return n.transaction([Nc],e?"readwrite":"readonly").objectStore(Nc)}function fk(){const n=indexedDB.deleteDatabase(Lw);return new Vl(n).toPromise()}function Of(){const n=indexedDB.open(Lw,hk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Nc,{keyPath:Mw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Nc)?e(i):(i.close(),await fk(),e(await Of()))})})}async function ov(n,e,t){const i=td(n,!0).put({[Mw]:e,value:t});return new Vl(i).toPromise()}async function pk(n,e){const t=td(n,!1).get(e),i=await new Vl(t).toPromise();return i===void 0?null:i.value}function av(n,e){const t=td(n,!0).delete(e);return new Vl(t).toPromise()}const mk=800,gk=3;class Fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Of(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>gk)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ed._getInstance(dk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await uk(),!this.activeServiceWorker)return;this.sender=new ak(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ck()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Of();return await ov(e,bc,"1"),await av(e,bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ov(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>pk(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>av(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=td(o,!1).getAll();return new Vl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fw.type="LOCAL";const yk=Fw;new Nl(3e4,6e4);/**
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
 */function vk(n,e){return e?ei(e):(ke(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ep extends vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _k(n){return Rw(n.auth,new Ep(n),n.bypassAuthState)}function wk(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),Cw(t,new Ep(n),n.bypassAuthState)}async function Ek(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),qx(t,new Ep(n),n.bypassAuthState)}/**
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
 */class Uw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _k;case"linkViaPopup":case"linkViaRedirect":return Ek;case"reauthViaPopup":case"reauthViaRedirect":return wk;default:ur(this.auth,"internal-error")}}resolve(e){si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tk=new Nl(2e3,1e4);class Ho extends Uw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Ho.currentPopupAction&&Ho.currentPopupAction.cancel(),Ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){si(this.filter.length===1,"Popup operations only handle one event");const e=wp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(kr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tk.get())};e()}}Ho.currentPopupAction=null;/**
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
 */const Ik="pendingRedirect",pc=new Map;class Sk extends Uw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=pc.get(this.auth._key());if(!e){try{const i=await xk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}pc.set(this.auth._key(),e)}return this.bypassAuthState||pc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xk(n,e){const t=Ck(e),i=Ak(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function kk(n,e){pc.set(n._key(),e)}function Ak(n){return ei(n._redirectPersistence)}function Ck(n){return fc(Ik,n.config.apiKey,n.name)}async function Rk(n,e,t=!1){if(gn(n.app))return Promise.reject(Ar(n));const i=es(n),o=vk(i,e),c=await new Sk(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const Pk=600*1e3;class bk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Bw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(kr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pk&&this.cachedEventUids.clear(),this.cachedEventUids.has(lv(e))}saveEventToCache(e){this.cachedEventUids.add(lv(e)),this.lastProcessedEventTime=Date.now()}}function lv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(n);default:return!1}}/**
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
 */async function Dk(n,e={}){return Vr(n,"GET","/v1/projects",e)}/**
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
 */const Ok=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vk=/^https?/;async function jk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Dk(n);for(const t of e)try{if(Lk(t))return}catch{}ur(n,"unauthorized-domain")}function Lk(n){const e=Nf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!Vk.test(t))return!1;if(Ok.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const Mk=new Nl(3e4,6e4);function uv(){const n=Cr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Fk(n){return new Promise((e,t)=>{var i,o,l;function c(){uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uv(),t(kr(n,"network-request-failed"))},timeout:Mk.get()})}if(!((o=(i=Cr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Cr().gapi)===null||l===void 0)&&l.load)c();else{const h=Sx("iframefcb");return Cr()[h]=()=>{gapi.load?c():t(kr(n,"network-request-failed"))},Iw(`${Ix()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw mc=null,e})}let mc=null;function Uk(n){return mc=mc||Fk(n),mc}/**
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
 */const Bk=new Nl(5e3,15e3),zk="__/auth/iframe",$k="emulator/auth/iframe",Wk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hk(n){const e=n.config;ke(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mp(e,$k):`https://${n.config.authDomain}/${zk}`,i={apiKey:e.apiKey,appName:n.name,v:ua},o=qk.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${bl(i).slice(1)}`}async function Gk(n){const e=await Uk(n),t=Cr().gapi;return ke(t,n,"internal-error"),e.open({where:document.body,url:Hk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wk,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=kr(n,"network-request-failed"),h=Cr().setTimeout(()=>{l(c)},Bk.get());function p(){Cr().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const Kk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qk=500,Yk=600,Jk="_blank",Xk="http://localhost";class cv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zk(n,e,t,i=Qk,o=Yk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},Kk),{width:i.toString(),height:o.toString(),top:l,left:c}),v=Zt().toLowerCase();t&&(h=gw(v)?Jk:t),pw(v)&&(e=e||Xk,p.scrollbars="yes");const _=Object.entries(p).reduce((S,[P,M])=>`${S}${P}=${M},`,"");if(px(v)&&h!=="_self")return eA(e||"",h),new cv(null);const T=window.open(e||"",h,_);ke(T,n,"popup-blocked");try{T.focus()}catch{}return new cv(T)}function eA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const tA="__/auth/handler",nA="emulator/auth/handler",rA=encodeURIComponent("fac");async function dv(n,e,t,i,o,l){ke(n.config.authDomain,n,"auth-domain-config-required"),ke(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ua,eventId:o};if(e instanceof kw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",LS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))c[_]=T}if(e instanceof Ol){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const p=await n._getAppCheckToken(),v=p?`#${rA}=${encodeURIComponent(p)}`:"";return`${iA(n)}?${bl(h).slice(1)}${v}`}function iA({config:n}){return n.emulator?mp(n,nA):`https://${n.authDomain}/${tA}`}/**
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
 */const ff="webStorageSupport";class sA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vw,this._completeRedirectFn=Rk,this._overrideRedirectResult=kk}async _openPopup(e,t,i,o){var l;si((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await dv(e,t,i,Nf(),o);return Zk(e,c,wp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await dv(e,t,i,Nf(),o);return lk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(si(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Gk(e),i=new bk(e);return t.register("authEvent",o=>(ke(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ff,{type:ff},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[ff];c!==void 0&&t(!!c),ur(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ew()||mw()||yp()}}const oA=sA;var hv="@firebase/auth",fv="1.10.8";/**
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
 */class aA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uA(n){lr(new $n("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=i.options;ke(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tw(n)},v=new wx(i,o,l,p);return Px(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),lr(new $n("auth-internal",e=>{const t=es(e.getProvider("auth").getImmediate());return(i=>new aA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(hv,fv,lA(n)),_n(hv,fv,"esm2017")}/**
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
 */const cA=300,dA=X_("authIdTokenMaxAge")||cA;let pv=null;const hA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>dA)return;const o=t==null?void 0:t.token;pv!==o&&(pv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function fA(n=Xc()){const e=Hs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Rx(n,{popupRedirectResolver:oA,persistence:[yk,sk,Vw]}),i=X_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=hA(l.toString());ek(t,c,()=>c(t.currentUser)),Zx(t,h=>c(h))}}const o=Q_("auth");return o&&bx(t,`http://${o}`),t}function pA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ex({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=kr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",pA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uA("Browser");var mA="firebase",gA="11.10.0";/**
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
 */_n(mA,gA,"app");var mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wi,zw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,x){function C(){}C.prototype=x.prototype,N.D=x.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(b,D,j){for(var A=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)A[Qe-2]=arguments[Qe];return x.prototype[D].apply(b,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,x,C){C||(C=0);var b=Array(16);if(typeof x=="string")for(var D=0;16>D;++D)b[D]=x.charCodeAt(C++)|x.charCodeAt(C++)<<8|x.charCodeAt(C++)<<16|x.charCodeAt(C++)<<24;else for(D=0;16>D;++D)b[D]=x[C++]|x[C++]<<8|x[C++]<<16|x[C++]<<24;x=N.g[0],C=N.g[1],D=N.g[2];var j=N.g[3],A=x+(j^C&(D^j))+b[0]+3614090360&4294967295;x=C+(A<<7&4294967295|A>>>25),A=j+(D^x&(C^D))+b[1]+3905402710&4294967295,j=x+(A<<12&4294967295|A>>>20),A=D+(C^j&(x^C))+b[2]+606105819&4294967295,D=j+(A<<17&4294967295|A>>>15),A=C+(x^D&(j^x))+b[3]+3250441966&4294967295,C=D+(A<<22&4294967295|A>>>10),A=x+(j^C&(D^j))+b[4]+4118548399&4294967295,x=C+(A<<7&4294967295|A>>>25),A=j+(D^x&(C^D))+b[5]+1200080426&4294967295,j=x+(A<<12&4294967295|A>>>20),A=D+(C^j&(x^C))+b[6]+2821735955&4294967295,D=j+(A<<17&4294967295|A>>>15),A=C+(x^D&(j^x))+b[7]+4249261313&4294967295,C=D+(A<<22&4294967295|A>>>10),A=x+(j^C&(D^j))+b[8]+1770035416&4294967295,x=C+(A<<7&4294967295|A>>>25),A=j+(D^x&(C^D))+b[9]+2336552879&4294967295,j=x+(A<<12&4294967295|A>>>20),A=D+(C^j&(x^C))+b[10]+4294925233&4294967295,D=j+(A<<17&4294967295|A>>>15),A=C+(x^D&(j^x))+b[11]+2304563134&4294967295,C=D+(A<<22&4294967295|A>>>10),A=x+(j^C&(D^j))+b[12]+1804603682&4294967295,x=C+(A<<7&4294967295|A>>>25),A=j+(D^x&(C^D))+b[13]+4254626195&4294967295,j=x+(A<<12&4294967295|A>>>20),A=D+(C^j&(x^C))+b[14]+2792965006&4294967295,D=j+(A<<17&4294967295|A>>>15),A=C+(x^D&(j^x))+b[15]+1236535329&4294967295,C=D+(A<<22&4294967295|A>>>10),A=x+(D^j&(C^D))+b[1]+4129170786&4294967295,x=C+(A<<5&4294967295|A>>>27),A=j+(C^D&(x^C))+b[6]+3225465664&4294967295,j=x+(A<<9&4294967295|A>>>23),A=D+(x^C&(j^x))+b[11]+643717713&4294967295,D=j+(A<<14&4294967295|A>>>18),A=C+(j^x&(D^j))+b[0]+3921069994&4294967295,C=D+(A<<20&4294967295|A>>>12),A=x+(D^j&(C^D))+b[5]+3593408605&4294967295,x=C+(A<<5&4294967295|A>>>27),A=j+(C^D&(x^C))+b[10]+38016083&4294967295,j=x+(A<<9&4294967295|A>>>23),A=D+(x^C&(j^x))+b[15]+3634488961&4294967295,D=j+(A<<14&4294967295|A>>>18),A=C+(j^x&(D^j))+b[4]+3889429448&4294967295,C=D+(A<<20&4294967295|A>>>12),A=x+(D^j&(C^D))+b[9]+568446438&4294967295,x=C+(A<<5&4294967295|A>>>27),A=j+(C^D&(x^C))+b[14]+3275163606&4294967295,j=x+(A<<9&4294967295|A>>>23),A=D+(x^C&(j^x))+b[3]+4107603335&4294967295,D=j+(A<<14&4294967295|A>>>18),A=C+(j^x&(D^j))+b[8]+1163531501&4294967295,C=D+(A<<20&4294967295|A>>>12),A=x+(D^j&(C^D))+b[13]+2850285829&4294967295,x=C+(A<<5&4294967295|A>>>27),A=j+(C^D&(x^C))+b[2]+4243563512&4294967295,j=x+(A<<9&4294967295|A>>>23),A=D+(x^C&(j^x))+b[7]+1735328473&4294967295,D=j+(A<<14&4294967295|A>>>18),A=C+(j^x&(D^j))+b[12]+2368359562&4294967295,C=D+(A<<20&4294967295|A>>>12),A=x+(C^D^j)+b[5]+4294588738&4294967295,x=C+(A<<4&4294967295|A>>>28),A=j+(x^C^D)+b[8]+2272392833&4294967295,j=x+(A<<11&4294967295|A>>>21),A=D+(j^x^C)+b[11]+1839030562&4294967295,D=j+(A<<16&4294967295|A>>>16),A=C+(D^j^x)+b[14]+4259657740&4294967295,C=D+(A<<23&4294967295|A>>>9),A=x+(C^D^j)+b[1]+2763975236&4294967295,x=C+(A<<4&4294967295|A>>>28),A=j+(x^C^D)+b[4]+1272893353&4294967295,j=x+(A<<11&4294967295|A>>>21),A=D+(j^x^C)+b[7]+4139469664&4294967295,D=j+(A<<16&4294967295|A>>>16),A=C+(D^j^x)+b[10]+3200236656&4294967295,C=D+(A<<23&4294967295|A>>>9),A=x+(C^D^j)+b[13]+681279174&4294967295,x=C+(A<<4&4294967295|A>>>28),A=j+(x^C^D)+b[0]+3936430074&4294967295,j=x+(A<<11&4294967295|A>>>21),A=D+(j^x^C)+b[3]+3572445317&4294967295,D=j+(A<<16&4294967295|A>>>16),A=C+(D^j^x)+b[6]+76029189&4294967295,C=D+(A<<23&4294967295|A>>>9),A=x+(C^D^j)+b[9]+3654602809&4294967295,x=C+(A<<4&4294967295|A>>>28),A=j+(x^C^D)+b[12]+3873151461&4294967295,j=x+(A<<11&4294967295|A>>>21),A=D+(j^x^C)+b[15]+530742520&4294967295,D=j+(A<<16&4294967295|A>>>16),A=C+(D^j^x)+b[2]+3299628645&4294967295,C=D+(A<<23&4294967295|A>>>9),A=x+(D^(C|~j))+b[0]+4096336452&4294967295,x=C+(A<<6&4294967295|A>>>26),A=j+(C^(x|~D))+b[7]+1126891415&4294967295,j=x+(A<<10&4294967295|A>>>22),A=D+(x^(j|~C))+b[14]+2878612391&4294967295,D=j+(A<<15&4294967295|A>>>17),A=C+(j^(D|~x))+b[5]+4237533241&4294967295,C=D+(A<<21&4294967295|A>>>11),A=x+(D^(C|~j))+b[12]+1700485571&4294967295,x=C+(A<<6&4294967295|A>>>26),A=j+(C^(x|~D))+b[3]+2399980690&4294967295,j=x+(A<<10&4294967295|A>>>22),A=D+(x^(j|~C))+b[10]+4293915773&4294967295,D=j+(A<<15&4294967295|A>>>17),A=C+(j^(D|~x))+b[1]+2240044497&4294967295,C=D+(A<<21&4294967295|A>>>11),A=x+(D^(C|~j))+b[8]+1873313359&4294967295,x=C+(A<<6&4294967295|A>>>26),A=j+(C^(x|~D))+b[15]+4264355552&4294967295,j=x+(A<<10&4294967295|A>>>22),A=D+(x^(j|~C))+b[6]+2734768916&4294967295,D=j+(A<<15&4294967295|A>>>17),A=C+(j^(D|~x))+b[13]+1309151649&4294967295,C=D+(A<<21&4294967295|A>>>11),A=x+(D^(C|~j))+b[4]+4149444226&4294967295,x=C+(A<<6&4294967295|A>>>26),A=j+(C^(x|~D))+b[11]+3174756917&4294967295,j=x+(A<<10&4294967295|A>>>22),A=D+(x^(j|~C))+b[2]+718787259&4294967295,D=j+(A<<15&4294967295|A>>>17),A=C+(j^(D|~x))+b[9]+3951481745&4294967295,N.g[0]=N.g[0]+x&4294967295,N.g[1]=N.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+j&4294967295}i.prototype.u=function(N,x){x===void 0&&(x=N.length);for(var C=x-this.blockSize,b=this.B,D=this.h,j=0;j<x;){if(D==0)for(;j<=C;)o(this,N,j),j+=this.blockSize;if(typeof N=="string"){for(;j<x;)if(b[D++]=N.charCodeAt(j++),D==this.blockSize){o(this,b),D=0;break}}else for(;j<x;)if(b[D++]=N[j++],D==this.blockSize){o(this,b),D=0;break}}this.h=D,this.o+=x},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var x=1;x<N.length-8;++x)N[x]=0;var C=8*this.o;for(x=N.length-8;x<N.length;++x)N[x]=C&255,C/=256;for(this.u(N),N=Array(16),x=C=0;4>x;++x)for(var b=0;32>b;b+=8)N[C++]=this.g[x]>>>b&255;return N};function l(N,x){var C=h;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=x(N)}function c(N,x){this.h=x;for(var C=[],b=!0,D=N.length-1;0<=D;D--){var j=N[D]|0;b&&j==x||(C[D]=j,b=!1)}this.g=C}var h={};function p(N){return-128<=N&&128>N?l(N,function(x){return new c([x|0],0>x?-1:0)}):new c([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return V(v(-N));for(var x=[],C=1,b=0;N>=C;b++)x[b]=N/C|0,C*=4294967296;return new c(x,0)}function _(N,x){if(N.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(N.charAt(0)=="-")return V(_(N.substring(1),x));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=v(Math.pow(x,8)),b=T,D=0;D<N.length;D+=8){var j=Math.min(8,N.length-D),A=parseInt(N.substring(D,D+j),x);8>j?(j=v(Math.pow(x,j)),b=b.j(j).add(v(A))):(b=b.j(C),b=b.add(v(A)))}return b}var T=p(0),S=p(1),P=p(16777216);n=c.prototype,n.m=function(){if($(this))return-V(this).m();for(var N=0,x=1,C=0;C<this.g.length;C++){var b=this.i(C);N+=(0<=b?b:4294967296+b)*x,x*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(M(this))return"0";if($(this))return"-"+V(this).toString(N);for(var x=v(Math.pow(N,6)),C=this,b="";;){var D=_e(C,x).g;C=te(C,D.j(x));var j=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=D,M(C))return j+b;for(;6>j.length;)j="0"+j;b=j+b}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function M(N){if(N.h!=0)return!1;for(var x=0;x<N.g.length;x++)if(N.g[x]!=0)return!1;return!0}function $(N){return N.h==-1}n.l=function(N){return N=te(this,N),$(N)?-1:M(N)?0:1};function V(N){for(var x=N.g.length,C=[],b=0;b<x;b++)C[b]=~N.g[b];return new c(C,~N.h).add(S)}n.abs=function(){return $(this)?V(this):this},n.add=function(N){for(var x=Math.max(this.g.length,N.g.length),C=[],b=0,D=0;D<=x;D++){var j=b+(this.i(D)&65535)+(N.i(D)&65535),A=(j>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);b=A>>>16,j&=65535,A&=65535,C[D]=A<<16|j}return new c(C,C[C.length-1]&-2147483648?-1:0)};function te(N,x){return N.add(V(x))}n.j=function(N){if(M(this)||M(N))return T;if($(this))return $(N)?V(this).j(V(N)):V(V(this).j(N));if($(N))return V(this.j(V(N)));if(0>this.l(P)&&0>N.l(P))return v(this.m()*N.m());for(var x=this.g.length+N.g.length,C=[],b=0;b<2*x;b++)C[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<N.g.length;D++){var j=this.i(b)>>>16,A=this.i(b)&65535,Qe=N.i(D)>>>16,vt=N.i(D)&65535;C[2*b+2*D]+=A*vt,re(C,2*b+2*D),C[2*b+2*D+1]+=j*vt,re(C,2*b+2*D+1),C[2*b+2*D+1]+=A*Qe,re(C,2*b+2*D+1),C[2*b+2*D+2]+=j*Qe,re(C,2*b+2*D+2)}for(b=0;b<x;b++)C[b]=C[2*b+1]<<16|C[2*b];for(b=x;b<2*x;b++)C[b]=0;return new c(C,0)};function re(N,x){for(;(N[x]&65535)!=N[x];)N[x+1]+=N[x]>>>16,N[x]&=65535,x++}function J(N,x){this.g=N,this.h=x}function _e(N,x){if(M(x))throw Error("division by zero");if(M(N))return new J(T,T);if($(N))return x=_e(V(N),x),new J(V(x.g),V(x.h));if($(x))return x=_e(N,V(x)),new J(V(x.g),x.h);if(30<N.g.length){if($(N)||$(x))throw Error("slowDivide_ only works with positive integers.");for(var C=S,b=x;0>=b.l(N);)C=Ne(C),b=Ne(b);var D=we(C,1),j=we(b,1);for(b=we(b,2),C=we(C,2);!M(b);){var A=j.add(b);0>=A.l(N)&&(D=D.add(C),j=A),b=we(b,1),C=we(C,1)}return x=te(N,D.j(x)),new J(D,x)}for(D=T;0<=N.l(x);){for(C=Math.max(1,Math.floor(N.m()/x.m())),b=Math.ceil(Math.log(C)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),j=v(C),A=j.j(x);$(A)||0<A.l(N);)C-=b,j=v(C),A=j.j(x);M(j)&&(j=S),D=D.add(j),N=te(N,A)}return new J(D,N)}n.A=function(N){return _e(this,N).h},n.and=function(N){for(var x=Math.max(this.g.length,N.g.length),C=[],b=0;b<x;b++)C[b]=this.i(b)&N.i(b);return new c(C,this.h&N.h)},n.or=function(N){for(var x=Math.max(this.g.length,N.g.length),C=[],b=0;b<x;b++)C[b]=this.i(b)|N.i(b);return new c(C,this.h|N.h)},n.xor=function(N){for(var x=Math.max(this.g.length,N.g.length),C=[],b=0;b<x;b++)C[b]=this.i(b)^N.i(b);return new c(C,this.h^N.h)};function Ne(N){for(var x=N.g.length+1,C=[],b=0;b<x;b++)C[b]=N.i(b)<<1|N.i(b-1)>>>31;return new c(C,N.h)}function we(N,x){var C=x>>5;x%=32;for(var b=N.g.length-C,D=[],j=0;j<b;j++)D[j]=0<x?N.i(j+C)>>>x|N.i(j+C+1)<<32-x:N.i(j+C);return new c(D,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,zw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=_,Wi=c}).apply(typeof mv<"u"?mv:typeof self<"u"?self:typeof window<"u"?window:{});var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $w,cl,Ww,gc,Vf,qw,Hw,Gw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,w){return u==Array.prototype||u==Object.prototype||(u[m]=w.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof sc=="object"&&sc];for(var m=0;m<u.length;++m){var w=u[m];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var w=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var F=u[I];if(!(F in w))break e;w=w[F]}u=u[u.length-1],I=w[u],m=m(I),m!=I&&m!=null&&e(w,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var w=0,I=!1,F={next:function(){if(!I&&w<u.length){var q=w++;return{value:m(q,u[q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,w){return w})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function v(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,w){return u.call.apply(u.bind,arguments)}function T(u,m,w){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function S(u,m,w){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,S.apply(null,arguments)}function P(u,m){var w=Array.prototype.slice.call(arguments,1);return function(){var I=w.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function M(u,m){function w(){}w.prototype=m.prototype,u.aa=m.prototype,u.prototype=new w,u.prototype.constructor=u,u.Qb=function(I,F,q){for(var ie=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)ie[Ke-2]=arguments[Ke];return m.prototype[F].apply(I,ie)}}function $(u){const m=u.length;if(0<m){const w=Array(m);for(let I=0;I<m;I++)w[I]=u[I];return w}return[]}function V(u,m){for(let w=1;w<arguments.length;w++){const I=arguments[w];if(p(I)){const F=u.length||0,q=I.length||0;u.length=F+q;for(let ie=0;ie<q;ie++)u[F+ie]=I[ie]}else u.push(I)}}class te{constructor(m,w){this.i=m,this.j=w,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function re(u){return/^[\s\xa0]*$/.test(u)}function J(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function _e(u){return _e[" "](u),u}_e[" "]=function(){};var Ne=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function we(u,m,w){for(const I in u)m.call(w,u[I],I,u)}function N(u,m){for(const w in u)m.call(void 0,u[w],w,u)}function x(u){const m={};for(const w in u)m[w]=u[w];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,m){let w,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(w in I)u[w]=I[w];for(let q=0;q<C.length;q++)w=C[q],Object.prototype.hasOwnProperty.call(I,w)&&(u[w]=I[w])}}function D(u){var m=1;u=u.split(":");const w=[];for(;0<m&&u.length;)w.push(u.shift()),m--;return u.length&&w.push(u.join(":")),w}function j(u){h.setTimeout(()=>{throw u},0)}function A(){var u=Ee;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Qe{constructor(){this.h=this.g=null}add(m,w){const I=vt.get();I.set(m,w),this.h?this.h.next=I:this.g=I,this.h=I}}var vt=new te(()=>new _t,u=>u.reset());class _t{constructor(){this.next=this.g=this.h=null}set(m,w){this.h=m,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let We,se=!1,Ee=new Qe,ae=()=>{const u=h.Promise.resolve(void 0);We=()=>{u.then(L)}};var L=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(w){j(w)}var m=vt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}se=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var H=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const w=()=>{};h.addEventListener("test",w,m),h.removeEventListener("test",w,m)}catch{}return u})();function oe(u,m){if(ge.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var w=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ne){e:{try{_e(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else w=="mouseover"?m=u.fromElement:w=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:de[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&oe.aa.h.call(this)}}M(oe,ge);var de={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),Re=0;function ze(u,m,w,I,F){this.listener=u,this.proxy=null,this.src=m,this.type=w,this.capture=!!I,this.ha=F,this.key=++Re,this.da=this.fa=!1}function ot(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Z(u){this.src=u,this.g={},this.h=0}Z.prototype.add=function(u,m,w,I,F){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var ie=ye(u,m,I,F);return-1<ie?(m=u[ie],w||(m.fa=!1)):(m=new ze(m,this.src,q,!!I,F),m.fa=w,u.push(m)),m};function fe(u,m){var w=m.type;if(w in u.g){var I=u.g[w],F=Array.prototype.indexOf.call(I,m,void 0),q;(q=0<=F)&&Array.prototype.splice.call(I,F,1),q&&(ot(m),u.g[w].length==0&&(delete u.g[w],u.h--))}}function ye(u,m,w,I){for(var F=0;F<u.length;++F){var q=u[F];if(!q.da&&q.listener==m&&q.capture==!!w&&q.ha==I)return F}return-1}var xe="closure_lm_"+(1e6*Math.random()|0),Ve={};function Je(u,m,w,I,F){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Je(u,m[q],w,I,F);return null}return w=ma(w),u&&u[Ce]?u.K(m,w,v(I)?!!I.capture:!1,F):wt(u,m,w,!1,I,F)}function wt(u,m,w,I,F,q){if(!m)throw Error("Invalid event type");var ie=v(F)?!!F.capture:!!F,Ke=Xs(u);if(Ke||(u[xe]=Ke=new Z(u)),w=Ke.add(m,w,I,ie,q),w.proxy)return w;if(I=En(),w.proxy=I,I.src=u,I.listener=w,u.addEventListener)H||(F=ie),F===void 0&&(F=!1),u.addEventListener(m.toString(),I,F);else if(u.attachEvent)u.attachEvent(Ge(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return w}function En(){function u(w){return m.call(u.src,u.listener,w)}const m=pa;return u}function hr(u,m,w,I,F){if(Array.isArray(m))for(var q=0;q<m.length;q++)hr(u,m[q],w,I,F);else I=v(I)?!!I.capture:!!I,w=ma(w),u&&u[Ce]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],w=ye(q,w,I,F),-1<w&&(ot(q[w]),Array.prototype.splice.call(q,w,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Xs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ye(m,w,I,F)),(w=-1<u?m[u]:null)&&fr(w))}function fr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ce])fe(m.i,u);else{var w=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(w,I,u.capture):m.detachEvent?m.detachEvent(Ge(w),I):m.addListener&&m.removeListener&&m.removeListener(I),(w=Xs(m))?(fe(w,u),w.h==0&&(w.src=null,m[xe]=null)):ot(u)}}}function Ge(u){return u in Ve?Ve[u]:Ve[u]="on"+u}function pa(u,m){if(u.da)u=!0;else{m=new oe(m,this);var w=u.listener,I=u.ha||u.src;u.fa&&fr(u),u=w.call(I,m)}return u}function Xs(u){return u=u[xe],u instanceof Z?u:null}var Zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ma(u){return typeof u=="function"?u:(u[Zs]||(u[Zs]=function(m){return u.handleEvent(m)}),u[Zs])}function kt(){G.call(this),this.i=new Z(this),this.M=this,this.F=null}M(kt,G),kt.prototype[Ce]=!0,kt.prototype.removeEventListener=function(u,m,w,I){hr(this,u,m,w,I)};function At(u,m){var w,I=u.F;if(I)for(w=[];I;I=I.F)w.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new ge(m,u);else if(m instanceof ge)m.target=m.target||u;else{var F=m;m=new ge(I,u),b(m,F)}if(F=!0,w)for(var q=w.length-1;0<=q;q--){var ie=m.g=w[q];F=Lr(ie,I,!0,m)&&F}if(ie=m.g=u,F=Lr(ie,I,!0,m)&&F,F=Lr(ie,I,!1,m)&&F,w)for(q=0;q<w.length;q++)ie=m.g=w[q],F=Lr(ie,I,!1,m)&&F}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var w=u.g[m],I=0;I<w.length;I++)ot(w[I]);delete u.g[m],u.h--}}this.F=null},kt.prototype.K=function(u,m,w,I){return this.i.add(String(u),m,!1,w,I)},kt.prototype.L=function(u,m,w,I){return this.i.add(String(u),m,!0,w,I)};function Lr(u,m,w,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,q=0;q<m.length;++q){var ie=m[q];if(ie&&!ie.da&&ie.capture==w){var Ke=ie.listener,Ct=ie.ha||ie.src;ie.fa&&fe(u.i,ie),F=Ke.call(Ct,I)!==!1&&F}}return F&&!I.defaultPrevented}function ga(u,m,w){if(typeof u=="function")w&&(u=S(u,w));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function di(u){u.g=ga(()=>{u.g=null,u.i&&(u.i=!1,di(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class rs extends G{constructor(m,w){super(),this.m=m,this.l=w,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:di(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function is(u){G.call(this),this.h=u,this.g={}}M(is,G);var ya=[];function va(u){we(u.g,function(m,w){this.g.hasOwnProperty(w)&&fr(m)},u),u.g={}}is.prototype.N=function(){is.aa.N.call(this),va(this)},is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _a=h.JSON.stringify,wa=h.JSON.parse,Ea=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function ss(){}ss.prototype.h=null;function eo(u){return u.h||(u.h=u.i())}function to(){}var bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){ge.call(this,"d")}M(pr,ge);function no(){ge.call(this,"c")}M(no,ge);var mr={},Ta=null;function os(){return Ta=Ta||new kt}mr.La="serverreachability";function Ia(u){ge.call(this,mr.La,u)}M(Ia,ge);function Mr(u){const m=os();At(m,new Ia(m))}mr.STAT_EVENT="statevent";function Sa(u,m){ge.call(this,mr.STAT_EVENT,u),this.stat=m}M(Sa,ge);function pt(u){const m=os();At(m,new Sa(m,u))}mr.Ma="timingevent";function ro(u,m){ge.call(this,mr.Ma,u),this.size=m}M(ro,ge);function Wn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function as(){this.g=!0}as.prototype.xa=function(){this.g=!1};function ls(u,m,w,I,F,q){u.info(function(){if(u.g)if(q)for(var ie="",Ke=q.split("&"),Ct=0;Ct<Ke.length;Ct++){var Ue=Ke[Ct].split("=");if(1<Ue.length){var Nt=Ue[0];Ue=Ue[1];var Et=Nt.split("_");ie=2<=Et.length&&Et[1]=="type"?ie+(Nt+"="+Ue+"&"):ie+(Nt+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+m+`
`+w+`
`+ie})}function io(u,m,w,I,F,q,ie){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+m+`
`+w+`
`+q+" "+ie})}function qn(u,m,w,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ad(u,w)+(I?" "+I:"")})}function xa(u,m){u.info(function(){return"TIMEOUT: "+m})}as.prototype.info=function(){};function Ad(u,m){if(!u.g)return m;if(!m)return null;try{var w=JSON.parse(m);if(w){for(u=0;u<w.length;u++)if(Array.isArray(w[u])){var I=w[u];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return _a(w)}catch{return m}}var so={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$l={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hn;function us(){}M(us,ss),us.prototype.g=function(){return new XMLHttpRequest},us.prototype.i=function(){return{}},Hn=new us;function Gn(u,m,w,I){this.j=u,this.i=m,this.l=w,this.R=I||1,this.U=new is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var ka={},oo={};function ao(u,m,w){u.L=1,u.v=gi(In(m)),u.m=w,u.P=!0,Aa(u,null)}function Aa(u,m){u.F=Date.now(),tt(u),u.A=In(u.v);var w=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),vi(w.i,"t",I),u.C=0,w=u.j.J,u.h=new Wl,u.g=lu(u.j,w?m:null,!u.m),0<u.O&&(u.M=new rs(S(u.Y,u,u.g),u.O)),m=u.U,w=u.g,I=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(ya[0]=F.toString()),F=ya);for(var q=0;q<F.length;q++){var ie=Je(w,F[q],I||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=u.H?x(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Mr(),ls(u.i,u.u,u.A,u.l,u.R,u.m)}Gn.prototype.ca=function(u){u=u.target;const m=this.M;m&&ln(u)==3?m.j():this.Y(u)},Gn.prototype.Y=function(u){try{if(u==this.g)e:{const Et=ln(this.g);var m=this.g.Ba();const On=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Da(this.g)))){this.J||Et!=4||m==7||(m==8||0>=On?Mr(3):Mr(2)),cs(this);var w=this.g.Z();this.X=w;t:if(ql(this)){var I=Da(this.g);u="";var F=I.length,q=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),hi(this);var ie="";break t}this.h.i=new h.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(q&&m==F-1)});I.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=w==200,io(this.i,this.u,this.A,this.l,this.R,Et,w),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Ct=this.g;if((Ke=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(Ke)){var Ue=Ke;break t}}Ue=null}if(w=Ue)qn(this.i,this.l,w,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ca(this,w);else{this.o=!1,this.s=3,pt(12),Nn(this),hi(this);break e}}if(this.P){w=!0;let xn;for(;!this.J&&this.C<ie.length;)if(xn=Cd(this,ie),xn==oo){Et==4&&(this.s=4,pt(14),w=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(xn==ka){this.s=4,pt(15),qn(this.i,this.l,ie,"[Invalid Chunk]"),w=!1;break}else qn(this.i,this.l,xn,null),Ca(this,xn);if(ql(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||ie.length!=0||this.h.h||(this.s=1,pt(16),w=!1),this.o=this.o&&w,!w)qn(this.i,this.l,ie,"[Invalid Chunked Response]"),Nn(this),hi(this);else if(0<ie.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Va(Nt),Nt.M=!0,pt(11))}}else qn(this.i,this.l,ie,null),Ca(this,ie);Et==4&&Nn(this),this.o&&!this.J&&(Et==4?_o(this.j,this):(this.o=!1,tt(this)))}else po(this.g),w==400&&0<ie.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Nn(this),hi(this)}}}catch{}finally{}};function ql(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Cd(u,m){var w=u.C,I=m.indexOf(`
`,w);return I==-1?oo:(w=Number(m.substring(w,I)),isNaN(w)?ka:(I+=1,I+w>m.length?oo:(m=m.slice(I,I+w),u.C=I+w,m)))}Gn.prototype.cancel=function(){this.J=!0,Nn(this)};function tt(u){u.S=Date.now()+u.I,Hl(u,u.I)}function Hl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Wn(S(u.ba,u),m)}function cs(u){u.B&&(h.clearTimeout(u.B),u.B=null)}Gn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(xa(this.i,this.A),this.L!=2&&(Mr(),pt(17)),Nn(this),this.s=2,hi(this)):Hl(this,this.S-u)};function hi(u){u.j.G==0||u.J||_o(u.j,u)}function Nn(u){cs(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,va(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Ca(u,m){try{var w=u.j;if(w.G!=0&&(w.g==u||en(w.h,u))){if(!u.K&&en(w.h,u)&&w.G==3){try{var I=w.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!w.u){if(w.g)if(w.g.F+3e3<u.F)vo(w),Xn(w);else break e;yo(w),pt(18)}}else w.za=F[1],0<w.za-w.T&&37500>F[2]&&w.F&&w.v==0&&!w.C&&(w.C=Wn(S(w.Za,w),6e3));if(1>=Kl(w.h)&&w.ca){try{w.ca()}catch{}w.ca=void 0}}else $r(w,11)}else if((u.K||w.g==u)&&vo(w),!re(m))for(F=w.Da.g.parse(m),m=0;m<F.length;m++){let Ue=F[m];if(w.T=Ue[0],Ue=Ue[1],w.G==2)if(Ue[0]=="c"){w.K=Ue[1],w.ia=Ue[2];const Nt=Ue[3];Nt!=null&&(w.la=Nt,w.j.info("VER="+w.la));const Et=Ue[4];Et!=null&&(w.Aa=Et,w.j.info("SVER="+w.Aa));const On=Ue[5];On!=null&&typeof On=="number"&&0<On&&(I=1.5*On,w.L=I,w.j.info("backChannelRequestTimeoutMs_="+I)),I=w;const xn=u.g;if(xn){const ys=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ys){var q=I.h;q.g||ys.indexOf("spdy")==-1&&ys.indexOf("quic")==-1&&ys.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ra(q,q.h),q.h=null))}if(I.D){const Eo=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Eo&&(I.ya=Eo,Xe(I.I,I.D,Eo))}}w.G=3,w.l&&w.l.ua(),w.ba&&(w.R=Date.now()-u.F,w.j.info("Handshake RTT: "+w.R+"ms")),I=w;var ie=u;if(I.qa=au(I,I.J?I.ia:null,I.W),ie.K){Ql(I.h,ie);var Ke=ie,Ct=I.L;Ct&&(Ke.I=Ct),Ke.B&&(cs(Ke),tt(Ke)),I.g=ie}else gs(I);0<w.i.length&&_r(w)}else Ue[0]!="stop"&&Ue[0]!="close"||$r(w,7);else w.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?$r(w,7):Ft(w):Ue[0]!="noop"&&w.l&&w.l.ta(Ue),w.v=0)}}Mr(4)}catch{}}var Gl=class{constructor(u,m){this.g=u,this.map=m}};function ds(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Kl(u){return u.h?1:u.g?u.g.size:0}function en(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ra(u,m){u.g?u.g.add(m):u.h=m}function Ql(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ds.prototype.cancel=function(){if(this.i=Yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Yl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const w of u.g.values())m=m.concat(w.D);return m}return $(u.i)}function lo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],w=u.length,I=0;I<w;I++)m.push(u[I]);return m}m=[],w=0;for(I in u)m[w++]=u[I];return m}function uo(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var w=0;w<u;w++)m.push(w);return m}m=[],w=0;for(const I in u)m[w++]=I;return m}}}function fi(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var w=uo(u),I=lo(u),F=I.length,q=0;q<F;q++)m.call(void 0,I[q],w&&w[q],u)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rd(u,m){if(u){u=u.split("&");for(var w=0;w<u.length;w++){var I=u[w].indexOf("="),F=null;if(0<=I){var q=u[w].substring(0,I);F=u[w].substring(I+1)}else q=u[w];m(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Fr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Fr){this.h=u.h,fs(this,u.j),this.o=u.o,this.g=u.g,pi(this,u.s),this.l=u.l;var m=u.i,w=new gr;w.i=m.i,m.g&&(w.g=new Map(m.g),w.h=m.h),mi(this,w),this.m=u.m}else u&&(m=String(u).match(hs))?(this.h=!1,fs(this,m[1]||"",!0),this.o=Fe(m[2]||""),this.g=Fe(m[3]||"",!0),pi(this,m[4]),this.l=Fe(m[5]||"",!0),mi(this,m[6]||"",!0),this.m=Fe(m[7]||"")):(this.h=!1,this.i=new gr(null,this.h))}Fr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(yi(m,co,!0),":");var w=this.g;return(w||m=="file")&&(u.push("//"),(m=this.o)&&u.push(yi(m,co,!0),"@"),u.push(encodeURIComponent(String(w)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.s,w!=null&&u.push(":",String(w))),(w=this.l)&&(this.g&&w.charAt(0)!="/"&&u.push("/"),u.push(yi(w,w.charAt(0)=="/"?Zl:Xl,!0))),(w=this.i.toString())&&u.push("?",w),(w=this.m)&&u.push("#",yi(w,Pa)),u.join("")};function In(u){return new Fr(u)}function fs(u,m,w){u.j=w?Fe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function pi(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function mi(u,m,w){m instanceof gr?(u.i=m,yr(u.i,u.h)):(w||(m=yi(m,eu)),u.i=new gr(m,u.h))}function Xe(u,m,w){u.i.set(m,w)}function gi(u){return Xe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Fe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function yi(u,m,w){return typeof u=="string"?(u=encodeURI(u).replace(m,Jl),w&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Jl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var co=/[#\/\?@]/g,Xl=/[#\?:]/g,Zl=/[#\?]/g,eu=/[#\?@]/g,Pa=/#/g;function gr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Mt(u){u.g||(u.g=new Map,u.h=0,u.i&&Rd(u.i,function(m,w){u.add(decodeURIComponent(m.replace(/\+/g," ")),w)}))}n=gr.prototype,n.add=function(u,m){Mt(this),this.i=null,u=Dn(this,u);var w=this.g.get(u);return w||this.g.set(u,w=[]),w.push(m),this.h+=1,this};function Kn(u,m){Mt(u),m=Dn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Qn(u,m){return Mt(u),m=Dn(u,m),u.g.has(m)}n.forEach=function(u,m){Mt(this),this.g.forEach(function(w,I){w.forEach(function(F){u.call(m,F,I,this)},this)},this)},n.na=function(){Mt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),w=[];for(let I=0;I<m.length;I++){const F=u[I];for(let q=0;q<F.length;q++)w.push(m[I])}return w},n.V=function(u){Mt(this);let m=[];if(typeof u=="string")Qn(this,u)&&(m=m.concat(this.g.get(Dn(this,u))));else{u=Array.from(this.g.values());for(let w=0;w<u.length;w++)m=m.concat(u[w])}return m},n.set=function(u,m){return Mt(this),this.i=null,u=Dn(this,u),Qn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function vi(u,m,w){Kn(u,m),0<w.length&&(u.i=null,u.g.set(Dn(u,m),$(w)),u.h+=w.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var w=0;w<m.length;w++){var I=m[w];const q=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var F=q;ie[I]!==""&&(F+="="+encodeURIComponent(String(ie[I]))),u.push(F)}}return this.i=u.join("&")};function Dn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function yr(u,m){m&&!u.j&&(Mt(u),u.i=null,u.g.forEach(function(w,I){var F=I.toLowerCase();I!=F&&(Kn(this,I),vi(this,F,w))},u)),u.j=m}function Pd(u,m){const w=new as;if(h.Image){const I=new Image;I.onload=P(an,w,"TestLoadImage: loaded",!0,m,I),I.onerror=P(an,w,"TestLoadImage: error",!1,m,I),I.onabort=P(an,w,"TestLoadImage: abort",!1,m,I),I.ontimeout=P(an,w,"TestLoadImage: timeout",!1,m,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function tu(u,m){const w=new as,I=new AbortController,F=setTimeout(()=>{I.abort(),an(w,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(q=>{clearTimeout(F),q.ok?an(w,"TestPingServer: ok",!0,m):an(w,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),an(w,"TestPingServer: error",!1,m)})}function an(u,m,w,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(w)}catch{}}function bd(){this.g=new Ea}function nu(u,m,w){const I=w||"";try{fi(u,function(F,q){let ie=F;v(F)&&(ie=_a(F)),m.push(I+q+"="+encodeURIComponent(ie))})}catch(F){throw m.push(I+"type="+encodeURIComponent("_badmap")),F}}function Ur(u){this.l=u.Ub||null,this.j=u.eb||!1}M(Ur,ss),Ur.prototype.g=function(){return new ps(this.l,this.j)},Ur.prototype.i=(function(u){return function(){return u}})({});function ps(u,m){kt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(ps,kt),n=ps.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Jn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ru(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ru(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Yn(this):Jn(this),this.readyState==3&&ru(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Yn(this))},n.Qa=function(u){this.g&&(this.response=u,Yn(this))},n.ga=function(){this.g&&Yn(this)};function Yn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Jn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var w=m.next();!w.done;)w=w.value,u.push(w[0]+": "+w[1]),w=m.next();return u.join(`\r
`)};function Jn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Br(u){let m="";return we(u,function(w,I){m+=I,m+=":",m+=w,m+=`\r
`}),m}function _i(u,m,w){e:{for(I in w){var I=!1;break e}I=!0}I||(w=Br(w),typeof u=="string"?w!=null&&encodeURIComponent(String(w)):Xe(u,m,w))}function at(u){kt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(at,kt);var Nd=/^https?$/i,ba=["POST","PUT"];n=at.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,w,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hn.g(),this.v=this.o?eo(this.o):eo(Hn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){ms(this,q);return}if(u=w||"",w=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)w.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const q of I.keys())w.set(q,I.get(q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(w.keys()).find(q=>q.toLowerCase()=="content-type"),F=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(ba,m,void 0))||I||F||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of w)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fo(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){ms(this,q)}};function ms(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ho(u),Sn(u)}function ho(u){u.A||(u.A=!0,At(u,"complete"),At(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,At(this,"complete"),At(this,"abort"),Sn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sn(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Na(this):this.bb())},n.bb=function(){Na(this)};function Na(u){if(u.h&&typeof c<"u"&&(!u.v[1]||ln(u)!=4||u.Z()!=2)){if(u.u&&ln(u)==4)ga(u.Ea,0,u);else if(At(u,"readystatechange"),ln(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var w;if(!(w=m)){var I;if(I=ie===0){var F=String(u.D).match(hs)[1]||null;!F&&h.self&&h.self.location&&(F=h.self.location.protocol.slice(0,-1)),I=!Nd.test(F?F.toLowerCase():"")}w=I}if(w)At(u,"complete"),At(u,"success");else{u.m=6;try{var q=2<ln(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",ho(u)}}finally{Sn(u)}}}}function Sn(u,m){if(u.g){fo(u);const w=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||At(u,"ready");try{w.onreadystatechange=I}catch{}}}function fo(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function ln(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),wa(m)}};function Da(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function po(u){const m={};u=(u.g&&2<=ln(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(re(u[I]))continue;var w=D(u[I]);const F=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const q=m[F]||[];m[F]=q,q.push(w)}N(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vr(u,m,w){return w&&w.internalChannelParams&&w.internalChannelParams[u]||m}function Oa(u){this.Aa=0,this.i=[],this.j=new as,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vr("baseRetryDelayMs",5e3,u),this.cb=vr("retryDelaySeedMs",1e4,u),this.Wa=vr("forwardChannelMaxRetries",2,u),this.wa=vr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ds(u&&u.concurrentRequestLimit),this.Da=new bd,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oa.prototype,n.la=8,n.G=1,n.connect=function(u,m,w,I){pt(0),this.W=u,this.H=m||{},w&&I!==void 0&&(this.H.OSID=w,this.H.OAID=I),this.F=this.X,this.I=au(this,null,this.W),_r(this)};function Ft(u){if(mo(u),u.G==3){var m=u.U++,w=In(u.I);if(Xe(w,"SID",u.K),Xe(w,"RID",m),Xe(w,"TYPE","terminate"),zr(u,w),m=new Gn(u,u.j,m),m.L=2,m.v=gi(In(w)),w=!1,h.navigator&&h.navigator.sendBeacon)try{w=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!w&&h.Image&&(new Image().src=m.v,w=!0),w||(m.g=lu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),tt(m)}ou(u)}function Xn(u){u.g&&(Va(u),u.g.cancel(),u.g=null)}function mo(u){Xn(u),u.u&&(h.clearTimeout(u.u),u.u=null),vo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function _r(u){if(!Tn(u.h)&&!u.s){u.s=!0;var m=u.Ga;We||ae(),se||(We(),se=!0),Ee.add(m,u),u.B=0}}function Dd(u,m){return Kl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Wn(S(u.Ga,u,m),su(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Gn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=x(q),b(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var m=0,w=0;w<this.i.length;w++){t:{var I=this.i[w];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=w;break e}if(m===4096||w===this.i.length-1){m=w+1;break e}}m=1e3}else m=1e3;m=wi(this,F,m),w=In(this.I),Xe(w,"RID",u),Xe(w,"CVER",22),this.D&&Xe(w,"X-HTTP-Session-Id",this.D),zr(this,w),q&&(this.O?m="headers="+encodeURIComponent(String(Br(q)))+"&"+m:this.m&&_i(w,this.m,q)),Ra(this.h,F),this.Ua&&Xe(w,"TYPE","init"),this.P?(Xe(w,"$req",m),Xe(w,"SID","null"),F.T=!0,ao(F,w,null)):ao(F,w,m),this.G=2}}else this.G==3&&(u?go(this,u):this.i.length==0||Tn(this.h)||go(this))};function go(u,m){var w;m?w=m.l:w=u.U++;const I=In(u.I);Xe(I,"SID",u.K),Xe(I,"RID",w),Xe(I,"AID",u.T),zr(u,I),u.m&&u.o&&_i(I,u.m,u.o),w=new Gn(u,u.j,w,u.B+1),u.m===null&&(w.H=u.o),m&&(u.i=m.D.concat(u.i)),m=wi(u,w,1e3),w.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ra(u.h,w),ao(w,I,m)}function zr(u,m){u.H&&we(u.H,function(w,I){Xe(m,I,w)}),u.l&&fi({},function(w,I){Xe(m,I,w)})}function wi(u,m,w){w=Math.min(u.i.length,w);var I=u.l?S(u.l.Na,u.l,u):null;e:{var F=u.i;let q=-1;for(;;){const ie=["count="+w];q==-1?0<w?(q=F[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let Ke=!0;for(let Ct=0;Ct<w;Ct++){let Ue=F[Ct].g;const Nt=F[Ct].map;if(Ue-=q,0>Ue)q=Math.max(0,F[Ct].g-100),Ke=!1;else try{nu(Nt,ie,"req"+Ue+"_")}catch{I&&I(Nt)}}if(Ke){I=ie.join("&");break e}}}return u=u.i.splice(0,w),m.D=u,I}function gs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;We||ae(),se||(We(),se=!0),Ee.add(m,u),u.v=0}}function yo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Wn(S(u.Fa,u),su(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Wn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Xn(this),iu(this))};function Va(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function iu(u){u.g=new Gn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=In(u.qa);Xe(m,"RID","rpc"),Xe(m,"SID",u.K),Xe(m,"AID",u.T),Xe(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Xe(m,"TO",u.ja),Xe(m,"TYPE","xmlhttp"),zr(u,m),u.m&&u.o&&_i(m,u.m,u.o),u.L&&(u.g.I=u.L);var w=u.g;u=u.ia,w.L=1,w.v=gi(In(m)),w.m=null,w.P=!0,Aa(w,u)}n.Za=function(){this.C!=null&&(this.C=null,Xn(this),yo(this),pt(19))};function vo(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function _o(u,m){var w=null;if(u.g==m){vo(u),Va(u),u.g=null;var I=2}else if(en(u.h,m))w=m.D,Ql(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){w=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;I=os(),At(I,new ro(I,w)),_r(u)}else gs(u);else if(F=m.s,F==3||F==0&&0<m.X||!(I==1&&Dd(u,m)||I==2&&yo(u)))switch(w&&0<w.length&&(m=u.h,m.i=m.i.concat(w)),F){case 1:$r(u,5);break;case 4:$r(u,10);break;case 3:$r(u,6);break;default:$r(u,2)}}}function su(u,m){let w=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(w*=2),w*m}function $r(u,m){if(u.j.info("Error code "+m),m==2){var w=S(u.fb,u),I=u.Xa;const F=!I;I=new Fr(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||fs(I,"https"),gi(I),F?Pd(I.toString(),w):tu(I.toString(),w)}else pt(2);u.G=0,u.l&&u.l.sa(m),ou(u),mo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function ou(u){if(u.G=0,u.ka=[],u.l){const m=Yl(u.h);(m.length!=0||u.i.length!=0)&&(V(u.ka,m),V(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function au(u,m,w){var I=w instanceof Fr?In(w):new Fr(w);if(I.g!="")m&&(I.g=m+"."+I.g),pi(I,I.s);else{var F=h.location;I=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var q=new Fr(null);I&&fs(q,I),m&&(q.g=m),F&&pi(q,F),w&&(q.l=w),I=q}return w=u.D,m=u.ya,w&&m&&Xe(I,w,m),Xe(I,"VER",u.la),zr(u,I),I}function lu(u,m,w){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new at(new Ur({eb:w})):new at(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ja(){}n=ja.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wo(){}wo.prototype.g=function(u,m){return new tn(u,m)};function tn(u,m){kt.call(this),this.g=new Oa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!re(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!re(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new wr(this)}M(tn,kt),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Ft(this.g)},tn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var w={};w.__data__=u,u=w}else this.u&&(w={},w.__data__=_a(u),u=w);m.i.push(new Gl(m.Ya++,u)),m.G==3&&_r(m)},tn.prototype.N=function(){this.g.l=null,delete this.j,Ft(this.g),delete this.g,tn.aa.N.call(this)};function uu(u){pr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const w in m){u=w;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}M(uu,pr);function cu(){no.call(this),this.status=1}M(cu,no);function wr(u){this.g=u}M(wr,ja),wr.prototype.ua=function(){At(this.g,"a")},wr.prototype.ta=function(u){At(this.g,new uu(u))},wr.prototype.sa=function(u){At(this.g,new cu)},wr.prototype.ra=function(){At(this.g,"b")},wo.prototype.createWebChannel=wo.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,Gw=function(){return new wo},Hw=function(){return os()},qw=mr,Vf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,gc=so,$l.COMPLETE="complete",Ww=$l,to.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",kt.prototype.listen=kt.prototype.K,cl=to,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,$w=at}).apply(typeof sc<"u"?sc:typeof self<"u"?self:typeof window<"u"?window:{});const gv="@firebase/firestore",yv="4.8.0";/**
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
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
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
 */let ca="11.10.0";/**
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
 */const Ls=new dp("@firebase/firestore");function zo(){return Ls.logLevel}function ce(n,...e){if(Ls.logLevel<=Le.DEBUG){const t=e.map(Tp);Ls.debug(`Firestore (${ca}): ${n}`,...t)}}function oi(n,...e){if(Ls.logLevel<=Le.ERROR){const t=e.map(Tp);Ls.error(`Firestore (${ca}): ${n}`,...t)}}function Hi(n,...e){if(Ls.logLevel<=Le.WARN){const t=e.map(Tp);Ls.warn(`Firestore (${ca}): ${n}`,...t)}}function Tp(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Ae(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Kw(n,i,t)}function Kw(n,e,t){let i=`FIRESTORE (${ca}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw oi(i),new Error(i)}function He(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Kw(e,o,i)}function De(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ni{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Qw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Jt.UNAUTHENTICATED)))}shutdown(){}}class vA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class _A{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){He(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ni,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},h=p=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>h(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ni)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(He(typeof i.accessToken=="string",31837,{l:i}),new Qw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Jt(e)}}class wA{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class EA{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new wA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){He(this.o===void 0,3512);const i=l=>{l.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ce("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(He(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new vv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function IA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function Yw(){return new TextEncoder}/**
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
 */class Ip{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=IA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Oe(n,e){return n<e?-1:n>e?1:0}function jf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Oe(i,o);{const l=Yw(),c=SA(l.encode(_v(n,t)),l.encode(_v(e,t)));return c!==0?c:Oe(i,o)}}t+=i>65535?2:1}return Oe(n.length,e.length)}function _v(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function SA(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Oe(n[t],e[t]);return Oe(n.length,e.length)}function Xo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const wv="__name__";class xr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ae(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=xr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const i=xr.isNumericId(e),o=xr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?xr.extractNumericId(e).compare(xr.extractNumericId(t)):jf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wi.fromString(e.substring(4,e.length-2))}}class rt extends xr{construct(e,t,i){return new rt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new le(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new rt(t)}static emptyPath(){return new rt([])}}const xA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends xr{construct(e,t,i){return new $t(e,t,i)}static isValidIdentifier(e){return xA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wv}static keyField(){return new $t([wv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new le(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new le(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new le(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else h==="`"?(c=!c,o++):h!=="."||c?(i+=h,o++):(l(),o++)}if(l(),c)throw new le(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(t)}static emptyPath(){return new $t([])}}/**
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
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(rt.fromString(e))}static fromName(e){return new Te(rt.fromString(e).popFirst(5))}static empty(){return new Te(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new rt(e.slice()))}}/**
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
 */function Jw(n,e,t){if(!t)throw new le(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function kA(n,e,t,i){if(e===!0&&i===!0)throw new le(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ev(n){if(!Te.isDocumentKey(n))throw new le(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tv(n){if(Te.isDocumentKey(n))throw new le(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function nd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function wn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new le(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=nd(n);throw new le(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function xt(n,e){const t={typeString:n};return e&&(t.value=e),t}function jl(n,e){if(!Xw(n))throw new le(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new le(K.INVALID_ARGUMENT,t);return!0}/**
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
 */const Iv=-62135596800,Sv=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Sv);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Iv)throw new le(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sv}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jl(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Iv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:xt("string",Ye._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
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
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new Ye(0,0))}static max(){return new be(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Sl=-1;function AA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=be.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new Gi(o,Te.empty(),e)}function CA(n){return new Gi(n.readTime,n.key,Sl)}class Gi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Gi(be.min(),Te.empty(),Sl)}static max(){return new Gi(be.max(),Te.empty(),Sl)}}function RA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:Oe(n.largestBatchId,e.largestBatchId))}/**
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
 */const PA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function da(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==PA)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.reject(t)}static resolve(e){return new Q(((t,i)=>{t(e)}))}static reject(e){return new Q(((t,i)=>{i(e)}))}static waitFor(e){return new Q(((t,i)=>{let o=0,l=0,c=!1;e.forEach((h=>{++o,h.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=Q.resolve(!1);for(const i of e)t=t.next((o=>o?Q.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new Q(((i,o)=>{const l=e.length,c=new Array(l);let h=0;for(let p=0;p<l;p++){const v=p;t(e[v]).next((_=>{c[v]=_,++h,h===l&&i(c)}),(_=>o(_)))}}))}static doWhile(e,t){return new Q(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function NA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ha(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class rd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}rd.ue=-1;/**
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
 */const Sp=-1;function id(n){return n==null}function Dc(n){return n===0&&1/n==-1/0}function DA(n){return typeof n=="number"&&Number.isInteger(n)&&!Dc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Zw="";function OA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=xv(e)),e=VA(n.get(t),e);return xv(e)}function VA(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Zw:t+="";break;default:t+=l}}return t}function xv(n){return n+Zw+""}/**
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
 */function kv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ts(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function e0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class dt{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new dt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oc(this.root,e,this.comparator,!1)}getReverseIterator(){return new oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oc(this.root,e,this.comparator,!0)}}class oc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??zt.RED,this.left=o??zt.EMPTY,this.right=l??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new zt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return zt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Av(this.data.getIterator())}getIteratorFrom(e){return new Av(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new bt(this.comparator);return t.data=e,t}}class Av{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new bt($t.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class t0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new t0("Invalid base64 string: "+l):l}})(e);return new Wt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Wt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const jA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ki(n){if(He(!!n,39018),typeof n=="string"){let e=0;const t=jA.exec(n);if(He(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:gt(n.seconds),nanos:gt(n.nanos)}}function gt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qi(n){return typeof n=="string"?Wt.fromBase64String(n):Wt.fromUint8Array(n)}/**
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
 */const n0="server_timestamp",r0="__type__",i0="__previous_value__",s0="__local_write_time__";function xp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[r0])===null||t===void 0?void 0:t.stringValue)===n0}function sd(n){const e=n.mapValue.fields[i0];return xp(e)?sd(e):e}function xl(n){const e=Ki(n.mapValue.fields[s0].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class LA{constructor(e,t,i,o,l,c,h,p,v,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=v,this.isUsingEmulator=_}}const Oc="(default)";class kl{constructor(e,t){this.projectId=e,this.database=t||Oc}static empty(){return new kl("","")}get isDefaultDatabase(){return this.database===Oc}isEqual(e){return e instanceof kl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const o0="__type__",MA="__max__",ac={mapValue:{}},a0="__vector__",Vc="value";function Yi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xp(n)?4:UA(n)?9007199254740991:FA(n)?10:11:Ae(28295,{value:n})}function Dr(n,e){if(n===e)return!0;const t=Yi(n);if(t!==Yi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xl(n).isEqual(xl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ki(o.timestampValue),h=Ki(l.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Qi(o.bytesValue).isEqual(Qi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return gt(o.geoPointValue.latitude)===gt(l.geoPointValue.latitude)&&gt(o.geoPointValue.longitude)===gt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return gt(o.integerValue)===gt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=gt(o.doubleValue),h=gt(l.doubleValue);return c===h?Dc(c)===Dc(h):isNaN(c)&&isNaN(h)}return!1})(n,e);case 9:return Xo(n.arrayValue.values||[],e.arrayValue.values||[],Dr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},h=l.mapValue.fields||{};if(kv(c)!==kv(h))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(h[p]===void 0||!Dr(c[p],h[p])))return!1;return!0})(n,e);default:return Ae(52216,{left:n})}}function Al(n,e){return(n.values||[]).find((t=>Dr(t,e)))!==void 0}function Zo(n,e){if(n===e)return 0;const t=Yi(n),i=Yi(e);if(t!==i)return Oe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const h=gt(l.integerValue||l.doubleValue),p=gt(c.integerValue||c.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1})(n,e);case 3:return Cv(n.timestampValue,e.timestampValue);case 4:return Cv(xl(n),xl(e));case 5:return jf(n.stringValue,e.stringValue);case 6:return(function(l,c){const h=Qi(l),p=Qi(c);return h.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const h=l.split("/"),p=c.split("/");for(let v=0;v<h.length&&v<p.length;v++){const _=Oe(h[v],p[v]);if(_!==0)return _}return Oe(h.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const h=Oe(gt(l.latitude),gt(c.latitude));return h!==0?h:Oe(gt(l.longitude),gt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Rv(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var h,p,v,_;const T=l.fields||{},S=c.fields||{},P=(h=T[Vc])===null||h===void 0?void 0:h.arrayValue,M=(p=S[Vc])===null||p===void 0?void 0:p.arrayValue,$=Oe(((v=P==null?void 0:P.values)===null||v===void 0?void 0:v.length)||0,((_=M==null?void 0:M.values)===null||_===void 0?void 0:_.length)||0);return $!==0?$:Rv(P,M)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===ac.mapValue&&c===ac.mapValue)return 0;if(l===ac.mapValue)return 1;if(c===ac.mapValue)return-1;const h=l.fields||{},p=Object.keys(h),v=c.fields||{},_=Object.keys(v);p.sort(),_.sort();for(let T=0;T<p.length&&T<_.length;++T){const S=jf(p[T],_[T]);if(S!==0)return S;const P=Zo(h[p[T]],v[_[T]]);if(P!==0)return P}return Oe(p.length,_.length)})(n.mapValue,e.mapValue);default:throw Ae(23264,{le:t})}}function Cv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Oe(n,e);const t=Ki(n),i=Ki(e),o=Oe(t.seconds,i.seconds);return o!==0?o:Oe(t.nanos,i.nanos)}function Rv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Zo(t[o],i[o]);if(l)return l}return Oe(t.length,i.length)}function ea(n){return Lf(n)}function Lf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Ki(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Qi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Te.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Lf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Lf(t.fields[c])}`;return o+"}"})(n.mapValue):Ae(61005,{value:n})}function yc(n){switch(Yi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sd(n);return e?16+yc(e):16;case 5:return 2*n.stringValue.length;case 6:return Qi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+yc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return ts(i.fields,((l,c)=>{o+=l.length+yc(c)})),o})(n.mapValue);default:throw Ae(13486,{value:n})}}function Pv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Mf(n){return!!n&&"integerValue"in n}function kp(n){return!!n&&"arrayValue"in n}function bv(n){return!!n&&"nullValue"in n}function Nv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vc(n){return!!n&&"mapValue"in n}function FA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[o0])===null||t===void 0?void 0:t.stringValue)===a0}function gl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ts(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=gl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function UA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===MA}/**
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
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!vc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gl(t)}setAll(e){let t=$t.emptyPath(),i={},o=[];e.forEach(((c,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=h.popLast()}c?i[h.lastSegment()]=gl(c):o.push(h.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());vc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];vc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ts(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new yn(gl(this.value))}}function l0(n){const e=[];return ts(n.fields,((t,i)=>{const o=new $t([t]);if(vc(i)){const l=l0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new Pn(e)}/**
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
 */class Xt{constructor(e,t,i,o,l,c,h){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=h}static newInvalidDocument(e){return new Xt(e,0,be.min(),be.min(),be.min(),yn.empty(),0)}static newFoundDocument(e,t,i,o){return new Xt(e,1,t,be.min(),i,o,0)}static newNoDocument(e,t){return new Xt(e,2,t,be.min(),be.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new Xt(e,3,t,be.min(),be.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jc{constructor(e,t){this.position=e,this.inclusive=t}}function Dv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=Te.comparator(Te.fromName(c.referenceValue),t.key):i=Zo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ov(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Dr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Lc{constructor(e,t="asc"){this.field=e,this.dir=t}}function BA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class u0{}class St extends u0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new $A(e,t,i):t==="array-contains"?new HA(e,i):t==="in"?new GA(e,i):t==="not-in"?new KA(e,i):t==="array-contains-any"?new QA(e,i):new St(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new WA(e,i):new qA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zo(t,this.value)):t!==null&&Yi(this.value)===Yi(t)&&this.matchesComparison(Zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends u0{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new cr(e,t)}matches(e){return c0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function c0(n){return n.op==="and"}function d0(n){return zA(n)&&c0(n)}function zA(n){for(const e of n.filters)if(e instanceof cr)return!1;return!0}function Ff(n){if(n instanceof St)return n.field.canonicalString()+n.op.toString()+ea(n.value);if(d0(n))return n.filters.map((e=>Ff(e))).join(",");{const e=n.filters.map((t=>Ff(t))).join(",");return`${n.op}(${e})`}}function h0(n,e){return n instanceof St?(function(i,o){return o instanceof St&&i.op===o.op&&i.field.isEqual(o.field)&&Dr(i.value,o.value)})(n,e):n instanceof cr?(function(i,o){return o instanceof cr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,h)=>l&&h0(c,o.filters[h])),!0):!1})(n,e):void Ae(19439)}function f0(n){return n instanceof St?(function(t){return`${t.field.canonicalString()} ${t.op} ${ea(t.value)}`})(n):n instanceof cr?(function(t){return t.op.toString()+" {"+t.getFilters().map(f0).join(" ,")+"}"})(n):"Filter"}class $A extends St{constructor(e,t,i){super(e,t,i),this.key=Te.fromName(i.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class WA extends St{constructor(e,t){super(e,"in",t),this.keys=p0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class qA extends St{constructor(e,t){super(e,"not-in",t),this.keys=p0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function p0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>Te.fromName(i.referenceValue)))}class HA extends St{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kp(t)&&Al(t.arrayValue,this.value)}}class GA extends St{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Al(this.value.arrayValue,t)}}class KA extends St{constructor(e,t){super(e,"not-in",t)}matches(e){if(Al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Al(this.value.arrayValue,t)}}class QA extends St{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Al(this.value.arrayValue,i)))}}/**
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
 */class YA{constructor(e,t=null,i=[],o=[],l=null,c=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=h,this.Pe=null}}function Vv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new YA(n,e,t,i,o,l,c)}function Ap(n){const e=De(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Ff(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),id(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>ea(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>ea(i))).join(",")),e.Pe=t}return e.Pe}function Cp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!BA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!h0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ov(n.startAt,e.startAt)&&Ov(n.endAt,e.endAt)}function Uf(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ll{constructor(e,t=null,i=[],o=[],l=null,c="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=h,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function JA(n,e,t,i,o,l,c,h){return new Ll(n,e,t,i,o,l,c,h)}function od(n){return new Ll(n)}function jv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function m0(n){return n.collectionGroup!==null}function yl(n){const e=De(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new bt($t.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((v=>{v.isInequality()&&(h=h.add(v.field))}))})),h})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Lc(l,i))})),t.has($t.keyField().canonicalString())||e.Te.push(new Lc($t.keyField(),i))}return e.Te}function Rr(n){const e=De(n);return e.Ie||(e.Ie=XA(e,yl(n))),e.Ie}function XA(n,e){if(n.limitType==="F")return Vv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Lc(o.field,l)}));const t=n.endAt?new jc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new jc(n.startAt.position,n.startAt.inclusive):null;return Vv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Bf(n,e){const t=n.filters.concat([e]);return new Ll(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function zf(n,e,t){return new Ll(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ad(n,e){return Cp(Rr(n),Rr(e))&&n.limitType===e.limitType}function g0(n){return`${Ap(Rr(n))}|lt:${n.limitType}`}function $o(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>f0(o))).join(", ")}]`),id(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>ea(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>ea(o))).join(",")),`Target(${i})`})(Rr(n))}; limitType=${n.limitType})`}function ld(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Te.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of yl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,h,p){const v=Dv(c,h,p);return c.inclusive?v<=0:v<0})(i.startAt,yl(i),o)||i.endAt&&!(function(c,h,p){const v=Dv(c,h,p);return c.inclusive?v>=0:v>0})(i.endAt,yl(i),o))})(n,e)}function ZA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function y0(n){return(e,t)=>{let i=!1;for(const o of yl(n)){const l=eC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function eC(n,e,t){const i=n.field.isKeyField()?Te.comparator(e.key,t.key):(function(l,c,h){const p=c.data.field(l),v=h.data.field(l);return p!==null&&v!==null?Zo(p,v):Ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ae(19790,{direction:n.dir})}}/**
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
 */class Ks{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return e0(this.inner)}size(){return this.innerSize}}/**
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
 */const tC=new dt(Te.comparator);function ai(){return tC}const v0=new dt(Te.comparator);function dl(...n){let e=v0;for(const t of n)e=e.insert(t.key,t);return e}function _0(n){let e=v0;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function bs(){return vl()}function w0(){return vl()}function vl(){return new Ks((n=>n.toString()),((n,e)=>n.isEqual(e)))}const nC=new dt(Te.comparator),rC=new bt(Te.comparator);function Me(...n){let e=rC;for(const t of n)e=e.add(t);return e}const iC=new bt(Oe);function sC(){return iC}/**
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
 */function Rp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dc(e)?"-0":e}}function E0(n){return{integerValue:""+n}}function oC(n,e){return DA(e)?E0(e):Rp(n,e)}/**
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
 */class ud{constructor(){this._=void 0}}function aC(n,e,t){return n instanceof Mc?(function(o,l){const c={fields:{[r0]:{stringValue:n0},[s0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&xp(l)&&(l=sd(l)),l&&(c.fields[i0]=l),{mapValue:c}})(t,e):n instanceof ta?I0(n,e):n instanceof na?S0(n,e):(function(o,l){const c=T0(o,l),h=Lv(c)+Lv(o.Ee);return Mf(c)&&Mf(o.Ee)?E0(h):Rp(o.serializer,h)})(n,e)}function lC(n,e,t){return n instanceof ta?I0(n,e):n instanceof na?S0(n,e):t}function T0(n,e){return n instanceof Fc?(function(i){return Mf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Mc extends ud{}class ta extends ud{constructor(e){super(),this.elements=e}}function I0(n,e){const t=x0(e);for(const i of n.elements)t.some((o=>Dr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class na extends ud{constructor(e){super(),this.elements=e}}function S0(n,e){let t=x0(e);for(const i of n.elements)t=t.filter((o=>!Dr(o,i)));return{arrayValue:{values:t}}}class Fc extends ud{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Lv(n){return gt(n.integerValue||n.doubleValue)}function x0(n){return kp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class k0{constructor(e,t){this.field=e,this.transform=t}}function uC(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof ta&&o instanceof ta||i instanceof na&&o instanceof na?Xo(i.elements,o.elements,Dr):i instanceof Fc&&o instanceof Fc?Dr(i.Ee,o.Ee):i instanceof Mc&&o instanceof Mc})(n.transform,e.transform)}class cC{constructor(e,t){this.version=e,this.transformResults=t}}class zn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _c(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class cd{}function A0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pp(n.key,zn.none()):new Ml(n.key,n.data,zn.none());{const t=n.data,i=yn.empty();let o=new bt($t.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new ns(n.key,i,new Pn(o.toArray()),zn.none())}}function dC(n,e,t){n instanceof Ml?(function(o,l,c){const h=o.value.clone(),p=Fv(o.fieldTransforms,l,c.transformResults);h.setAll(p),l.convertToFoundDocument(c.version,h).setHasCommittedMutations()})(n,e,t):n instanceof ns?(function(o,l,c){if(!_c(o.precondition,l))return void l.convertToUnknownDocument(c.version);const h=Fv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(C0(o)),p.setAll(h),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function _l(n,e,t,i){return n instanceof Ml?(function(l,c,h,p){if(!_c(l.precondition,c))return h;const v=l.value.clone(),_=Uv(l.fieldTransforms,p,c);return v.setAll(_),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),null})(n,e,t,i):n instanceof ns?(function(l,c,h,p){if(!_c(l.precondition,c))return h;const v=Uv(l.fieldTransforms,p,c),_=c.data;return _.setAll(C0(l)),_.setAll(v),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),h===null?null:h.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,c,h){return _c(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h})(n,e,t)}function hC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=T0(i.transform,o||null);l!=null&&(t===null&&(t=yn.empty()),t.set(i.field,l))}return t||null}function Mv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Xo(i,o,((l,c)=>uC(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ml extends cd{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ns extends cd{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function C0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Fv(n,e,t){const i=new Map;He(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,h=e.data.field(l.field);i.set(l.field,lC(c,h,t[o]))}return i}function Uv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,aC(l,c,e))}return i}class Pp extends cd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fC extends cd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&dC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=_l(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=_l(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=w0();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let h=this.applyToLocalView(c,l.mutatedFields);h=t.has(o.key)?null:h;const p=A0(c,h);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(be.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Me())}isEqual(e){return this.batchId===e.batchId&&Xo(this.mutations,e.mutations,((t,i)=>Mv(t,i)))&&Xo(this.baseMutations,e.baseMutations,((t,i)=>Mv(t,i)))}}class bp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){He(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return nC})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new bp(e,t,i,o)}}/**
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
 */class mC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var It,Be;function yC(n){switch(n){case K.OK:return Ae(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function R0(n){if(n===void 0)return oi("GRPC error has no .code"),K.UNKNOWN;switch(n){case It.OK:return K.OK;case It.CANCELLED:return K.CANCELLED;case It.UNKNOWN:return K.UNKNOWN;case It.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case It.INTERNAL:return K.INTERNAL;case It.UNAVAILABLE:return K.UNAVAILABLE;case It.UNAUTHENTICATED:return K.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case It.NOT_FOUND:return K.NOT_FOUND;case It.ALREADY_EXISTS:return K.ALREADY_EXISTS;case It.PERMISSION_DENIED:return K.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case It.ABORTED:return K.ABORTED;case It.OUT_OF_RANGE:return K.OUT_OF_RANGE;case It.UNIMPLEMENTED:return K.UNIMPLEMENTED;case It.DATA_LOSS:return K.DATA_LOSS;default:return Ae(39323,{code:n})}}(Be=It||(It={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const vC=new Wi([4294967295,4294967295],0);function Bv(n){const e=Yw().encode(n),t=new zw;return t.update(e),new Uint8Array(t.digest())}function zv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Wi([t,i],0),new Wi([o,l],0)]}class Np{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new hl(`Invalid padding: ${t}`);if(i<0)throw new hl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new hl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new hl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Wi.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Wi.fromNumber(i)));return o.compare(vC)===1&&(o=new Wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Bv(e),[i,o]=zv(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);if(!this.ye(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Np(l,o,t);return i.forEach((h=>c.insert(h))),c}insert(e){if(this.fe===0)return;const t=Bv(e),[i,o]=zv(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);this.we(c)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class hl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dd{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new dd(be.min(),o,new dt(Oe),ai(),Me())}}class Fl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Fl(i,t,Me(),Me(),Me())}}/**
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
 */class wc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class P0{constructor(e,t){this.targetId=e,this.De=t}}class b0{constructor(e,t,i=Wt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class $v{constructor(){this.ve=0,this.Ce=Wv(),this.Fe=Wt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Me(),t=Me(),i=Me();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ae(38017,{changeType:l})}})),new Fl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Wv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class _C{constructor(e){this.We=e,this.Ge=new Map,this.ze=ai(),this.je=lc(),this.Je=lc(),this.He=new dt(Oe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(Uf(l))if(i===0){const c=new Te(l.path);this.Xe(t,c,Xt.newNoDocument(c,be.min()))}else He(i===1,20013,{expectedCount:i});else{const c=this.ot(t);if(c!==i){const h=this._t(e),p=h?this.ut(h,e,c):1;if(p!==0){this.rt(t);const v=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,h;try{c=Qi(i).toUint8Array()}catch(p){if(p instanceof t0)return Hi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new Np(c,o,l)}catch(p){return Hi(p instanceof hl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.fe===0?null:h}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.We.lt(),h=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(h)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,c)=>{const h=this.st(c);if(h){if(l.current&&Uf(h.target)){const p=new Te(h.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,Xt.newNoDocument(p,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}}));let i=Me();this.Je.forEach(((l,c)=>{let h=!0;c.forEachWhile((p=>{const v=this.st(p);return!v||v.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)})),h&&(i=i.add(l))})),this.ze.forEach(((l,c)=>c.setReadTime(e)));const o=new dd(e,t,this.He,this.ze,i);return this.ze=ai(),this.je=lc(),this.Je=lc(),this.He=new dt(Oe),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new $v,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new bt(Oe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new bt(Oe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new $v),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function lc(){return new dt(Te.comparator)}function Wv(){return new dt(Te.comparator)}const wC={asc:"ASCENDING",desc:"DESCENDING"},EC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TC={and:"AND",or:"OR"};class IC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $f(n,e){return n.useProto3Json||id(e)?e:{value:e}}function Uc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function SC(n,e){return Uc(n,e.toTimestamp())}function Pr(n){return He(!!n,49232),be.fromTimestamp((function(t){const i=Ki(t);return new Ye(i.seconds,i.nanos)})(n))}function Dp(n,e){return Wf(n,e).canonicalString()}function Wf(n,e){const t=(function(o){return new rt(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function D0(n){const e=rt.fromString(n);return He(M0(e),10190,{key:e.toString()}),e}function qf(n,e){return Dp(n.databaseId,e.path)}function pf(n,e){const t=D0(e);if(t.get(1)!==n.databaseId.projectId)throw new le(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new le(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(V0(t))}function O0(n,e){return Dp(n.databaseId,e)}function xC(n){const e=D0(n);return e.length===4?rt.emptyPath():V0(e)}function Hf(n){return new rt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function V0(n){return He(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function qv(n,e,t){return{name:qf(n,e),fields:t.value.mapValue.fields}}function kC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Ae(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,_){return v.useProto3Json?(He(_===void 0||typeof _=="string",58123),Wt.fromBase64String(_||"")):(He(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Wt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,h=c&&(function(v){const _=v.code===void 0?K.UNKNOWN:R0(v.code);return new le(_,v.message||"")})(c);t=new b0(i,o,l,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=pf(n,i.document.name),l=Pr(i.document.updateTime),c=i.document.createTime?Pr(i.document.createTime):be.min(),h=new yn({mapValue:{fields:i.document.fields}}),p=Xt.newFoundDocument(o,l,c,h),v=i.targetIds||[],_=i.removedTargetIds||[];t=new wc(v,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=pf(n,i.document),l=i.readTime?Pr(i.readTime):be.min(),c=Xt.newNoDocument(o,l),h=i.removedTargetIds||[];t=new wc([],h,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=pf(n,i.document),l=i.removedTargetIds||[];t=new wc([],l,o,null)}else{if(!("filter"in e))return Ae(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new gC(o,l),h=i.targetId;t=new P0(h,c)}}return t}function AC(n,e){let t;if(e instanceof Ml)t={update:qv(n,e.key,e.value)};else if(e instanceof Pp)t={delete:qf(n,e.key)};else if(e instanceof ns)t={update:qv(n,e.key,e.data),updateMask:jC(e.fieldMask)};else{if(!(e instanceof fC))return Ae(16599,{Rt:e.type});t={verify:qf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const h=c.transform;if(h instanceof Mc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof ta)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof na)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Fc)return{fieldPath:c.field.canonicalString(),increment:h.Ee};throw Ae(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:SC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ae(27497)})(n,e.precondition)),t}function CC(n,e){return n&&n.length>0?(He(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?Pr(o.updateTime):Pr(l);return c.isEqual(be.min())&&(c=Pr(l)),new cC(c,o.transformResults||[])})(t,e)))):[]}function RC(n,e){return{documents:[O0(n,e.path)]}}function PC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=O0(n,o);const l=(function(v){if(v.length!==0)return L0(cr.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(v){if(v.length!==0)return v.map((_=>(function(S){return{field:Wo(S.field),direction:DC(S.dir)}})(_)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const h=$f(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function bC(n){let e=xC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){He(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(T){const S=j0(T);return S instanceof cr&&d0(S)?S.getFilters():[S]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((S=>(function(M){return new Lc(qo(M.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(S)))})(t.orderBy));let h=null;t.limit&&(h=(function(T){let S;return S=typeof T=="object"?T.value:T,id(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(T){const S=!!T.before,P=T.values||[];return new jc(P,S)})(t.startAt));let v=null;return t.endAt&&(v=(function(T){const S=!T.before,P=T.values||[];return new jc(P,S)})(t.endAt)),JA(e,o,c,l,h,"F",p,v)}function NC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function j0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=qo(t.unaryFilter.field);return St.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=qo(t.unaryFilter.field);return St.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=qo(t.unaryFilter.field);return St.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=qo(t.unaryFilter.field);return St.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return St.create(qo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return cr.create(t.compositeFilter.filters.map((i=>j0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(n):Ae(30097,{filter:n})}function DC(n){return wC[n]}function OC(n){return EC[n]}function VC(n){return TC[n]}function Wo(n){return{fieldPath:n.canonicalString()}}function qo(n){return $t.fromServerFormat(n.fieldPath)}function L0(n){return n instanceof St?(function(t){if(t.op==="=="){if(Nv(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NAN"}};if(bv(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nv(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NOT_NAN"}};if(bv(t.value))return{unaryFilter:{field:Wo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wo(t.field),op:OC(t.op),value:t.value}}})(n):n instanceof cr?(function(t){const i=t.getFilters().map((o=>L0(o)));return i.length===1?i[0]:{compositeFilter:{op:VC(t.op),filters:i}}})(n):Ae(54877,{filter:n})}function jC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function M0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Bi{constructor(e,t,i,o,l=be.min(),c=be.min(),h=Wt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(e){return new Bi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class LC{constructor(e){this.gt=e}}function MC(n){const e=bC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zf(e,e.limit,"L"):e}/**
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
 */class FC{constructor(){this.Dn=new UC}addToCollectionParentIndex(e,t){return this.Dn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Gi.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Gi.min())}updateCollectionGroup(e,t,i){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class UC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new bt(rt.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new bt(rt.comparator)).toArray()}}/**
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
 */const Hv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},F0=41943040;class mn{static withCacheSize(e){return new mn(e,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */mn.DEFAULT_COLLECTION_PERCENTILE=10,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mn.DEFAULT=new mn(F0,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mn.DISABLED=new mn(-1,0,0);/**
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
 */class ra{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ra(0)}static ur(){return new ra(-1)}}/**
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
 */const Gv="LruGarbageCollector",BC=1048576;function Kv([n,e],[t,i]){const o=Oe(n,t);return o===0?Oe(e,i):o}class zC{constructor(e){this.Tr=e,this.buffer=new bt(Kv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Kv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $C{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(Gv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ha(t)?ce(Gv,"Ignoring IndexedDB error during garbage collection: ",t):await da(t)}await this.Rr(3e5)}))}}class WC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(rd.ue);const i=new zC(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(Hv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hv):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,c,h,p,v;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,h=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(v=Date.now(),zo()<=Le.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(h-c)+`ms
	Removed ${l} targets in `+(p-h)+`ms
	Removed ${T} documents in `+(v-p)+`ms
Total Duration: ${v-_}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function qC(n,e){return new WC(n,e)}/**
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
 */class HC{constructor(){this.changes=new Ks((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class KC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&_l(i.mutation,o,Pn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Me()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Me()){const o=bs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=dl();return l.forEach(((h,p)=>{c=c.insert(h,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=bs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Me())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,h)=>{t.set(c,h)}))}))}computeViews(e,t,i,o){let l=ai();const c=vl(),h=(function(){return vl()})();return t.forEach(((p,v)=>{const _=i.get(v.key);o.has(v.key)&&(_===void 0||_.mutation instanceof ns)?l=l.insert(v.key,v):_!==void 0?(c.set(v.key,_.mutation.getFieldMask()),_l(_.mutation,v,_.mutation.getFieldMask(),Ye.now())):c.set(v.key,Pn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((v,_)=>c.set(v,_))),t.forEach(((v,_)=>{var T;return h.set(v,new GC(_,(T=c.get(v))!==null&&T!==void 0?T:null))})),h)))}recalculateAndSaveOverlays(e,t){const i=vl();let o=new dt(((c,h)=>c-h)),l=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const h of c)h.keys().forEach((p=>{const v=t.get(p);if(v===null)return;let _=i.get(p)||Pn.empty();_=h.applyToLocalView(v,_),i.set(p,_);const T=(o.get(h.batchId)||Me()).add(p);o=o.insert(h.batchId,T)}))})).next((()=>{const c=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),v=p.key,_=p.value,T=w0();_.forEach((S=>{if(!l.has(S)){const P=A0(t.get(S),i.get(S));P!==null&&T.set(S,P),l=l.add(S)}})),c.push(this.documentOverlayCache.saveOverlays(e,v,T))}return Q.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return Te.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):m0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Q.resolve(bs());let h=Sl,p=l;return c.next((v=>Q.forEach(v,((_,T)=>(h<T.largestBatchId&&(h=T.largestBatchId),l.get(_)?Q.resolve():this.remoteDocumentCache.getEntry(e,_).next((S=>{p=p.insert(_,S)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,p,v,Me()))).next((_=>({batchId:h,changes:_0(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next((i=>{let o=dl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=dl();return this.indexManager.getCollectionParents(e,l).next((h=>Q.forEach(h,(p=>{const v=(function(T,S){return new Ll(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next((_=>{_.forEach(((T,S)=>{c=c.insert(T,S)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,v)=>{const _=v.getKey();c.get(_)===null&&(c=c.insert(_,Xt.newInvalidDocument(_)))}));let h=dl();return c.forEach(((p,v)=>{const _=l.get(p);_!==void 0&&_l(_.mutation,v,Pn.empty(),Ye.now()),ld(t,v)&&(h=h.insert(p,v))})),h}))}}/**
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
 */class QC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Pr(o.createTime)}})(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:MC(o.bundledQuery),readTime:Pr(o.readTime)}})(t)),Q.resolve()}}/**
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
 */class YC{constructor(){this.overlays=new dt(Te.comparator),this.kr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=bs();return Q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),Q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),Q.resolve()}getOverlaysForCollection(e,t,i){const o=bs(),l=t.length+1,c=new Te(t.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const p=h.getNext().value,v=p.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new dt(((v,_)=>v-_));const c=this.overlays.getIterator();for(;c.hasNext();){const v=c.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>i){let _=l.get(v.largestBatchId);_===null&&(_=bs(),l=l.insert(v.largestBatchId,_)),_.set(v.getKey(),v)}}const h=bs(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((v,_)=>h.set(v,_))),!(h.size()>=o)););return Q.resolve(h)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new mC(t,i));let l=this.kr.get(t);l===void 0&&(l=Me(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class JC{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
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
 */class Op{constructor(){this.qr=new bt(jt.Qr),this.$r=new bt(jt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new jt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new jt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new Te(new rt([])),i=new jt(t,e),o=new jt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Te(new rt([])),i=new jt(t,e),o=new jt(t,e+1);let l=Me();return this.$r.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new jt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class jt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Te.comparator(e.key,t.key)||Oe(e.Hr,t.Hr)}static Ur(e,t){return Oe(e.Hr,t.Hr)||Te.comparator(e.key,t.key)}}/**
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
 */class XC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new bt(jt.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new pC(l,t,i,o);this.mutationQueue.push(c);for(const h of o)this.Yr=this.Yr.add(new jt(h.key,l)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Q.resolve(c)}lookupMutationBatch(e,t){return Q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?Sp:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new jt(t,0),o=new jt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(c=>{const h=this.Zr(c.Hr);l.push(h)})),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new bt(Oe);return t.forEach((o=>{const l=new jt(o,0),c=new jt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],(h=>{i=i.add(h.Hr)}))})),Q.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;Te.isDocumentKey(l)||(l=l.child(""));const c=new jt(new Te(l),0);let h=new bt(Oe);return this.Yr.forEachWhile((p=>{const v=p.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(h=h.add(p.Hr)),!0)}),c),Q.resolve(this.ei(h))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){He(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return Q.forEach(t.mutations,(o=>{const l=new jt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new jt(t,0),o=this.Yr.firstAfterOrEqual(i);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ZC{constructor(e){this.ni=e,this.docs=(function(){return new dt(Te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Q.resolve(i?i.document.mutableCopy():Xt.newInvalidDocument(t))}getEntries(e,t){let i=ai();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Xt.newInvalidDocument(o))})),Q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=ai();const c=t.path,h=new Te(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:v,value:{document:_}}=p.getNext();if(!c.isPrefixOf(v.path))break;v.path.length>c.length+1||RA(CA(_),i)<=0||(o.has(_.key)||ld(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ae(9500)}ri(e,t){return Q.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new eR(this)}getSize(e){return Q.resolve(this.size)}}class eR extends HC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),Q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class tR{constructor(e){this.persistence=e,this.ii=new Ks((t=>Ap(t)),Cp),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.si=0,this.oi=new Op,this.targetCount=0,this._i=ra.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),Q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ra(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.hr(t),Q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((c,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)})),Q.waitFor(l).next((()=>o))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return Q.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),Q.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return Q.resolve(i)}containsKey(e,t){return Q.resolve(this.oi.containsKey(t))}}/**
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
 */class U0{constructor(e,t){this.ai={},this.overlays={},this.ui=new rd(0),this.ci=!1,this.ci=!0,this.li=new JC,this.referenceDelegate=e(this),this.hi=new tR(this),this.indexManager=new FC,this.remoteDocumentCache=(function(o){return new ZC(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new LC(t),this.Ti=new QC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new YC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new XC(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ce("MemoryPersistence","Starting transaction:",e);const o=new nR(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return Q.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class nR extends bA{constructor(e){super(),this.currentSequenceNumber=e}}class Vp{constructor(e){this.persistence=e,this.Ai=new Op,this.Ri=null}static Vi(e){return new Vp(e)}get mi(){if(this.Ri)return this.Ri;throw Ae(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),Q.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,(i=>{const o=Te.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,be.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Q.or([()=>Q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Bc{constructor(e,t){this.persistence=e,this.gi=new Ks((i=>OA(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=qC(this,t)}static Vi(e,t){return new Bc(e,t)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return Q.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?Q.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(c=>this.Sr(e,c,t).next((h=>{h||(i++,l.removeEntry(c,be.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yc(e.data.value)),t}Sr(e,t,i){return Q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return Q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class jp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Me(),o=Me();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new jp(e,t.fromCache,i,o)}}/**
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
 */class rR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return NS()?8:NA(Zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new rR;return this.ws(e,t,c).next((h=>{if(l.result=h,this.Rs)return this.Ss(e,t,c,h.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(zo()<=Le.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",$o(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(zo()<=Le.DEBUG&&ce("QueryEngine","Query:",$o(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(zo()<=Le.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",$o(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rr(t))):Q.resolve())}ps(e,t){if(jv(t))return Q.resolve(null);let i=Rr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=zf(t,null,"F"),i=Rr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Me(...l);return this.gs.getDocuments(e,c).next((h=>this.indexManager.getMinOffset(e,i).next((p=>{const v=this.bs(t,h);return this.Ds(t,v,c,p.readTime)?this.ps(e,zf(t,null,"F")):this.vs(e,v,t,p)}))))})))))}ys(e,t,i,o){return jv(t)||o.isEqual(be.min())?Q.resolve(null):this.gs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ds(t,c,i,o)?Q.resolve(null):(zo()<=Le.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),$o(t)),this.vs(e,c,t,AA(o,Sl)).next((h=>h)))}))}bs(e,t){let i=new bt(y0(e));return t.forEach(((o,l)=>{ld(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return zo()<=Le.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",$o(t)),this.gs.getDocumentsMatchingQuery(e,t,Gi.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const Lp="LocalStore",sR=3e8;class oR{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new dt(Oe),this.Ms=new Ks((l=>Ap(l)),Cp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function aR(n,e,t,i){return new oR(n,e,t,i)}async function B0(n,e){const t=De(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],h=[];let p=Me();for(const v of o){c.push(v.batchId);for(const _ of v.mutations)p=p.add(_.key)}for(const v of l){h.push(v.batchId);for(const _ of v.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next((v=>({Bs:v,removedBatchIds:c,addedBatchIds:h})))}))}))}function lR(n,e){const t=De(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(h,p,v,_){const T=v.batch,S=T.keys();let P=Q.resolve();return S.forEach((M=>{P=P.next((()=>_.getEntry(p,M))).next(($=>{const V=v.docVersions.get(M);He(V!==null,48541),$.version.compareTo(V)<0&&(T.applyToRemoteDocument($,v),$.isValidDocument()&&($.setReadTime(v.commitVersion),_.addEntry($)))}))})),P.next((()=>h.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(h){let p=Me();for(let v=0;v<h.mutationResults.length;++v)h.mutationResults[v].transformResults.length>0&&(p=p.add(h.batch.mutations[v].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function z0(n){const e=De(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function uR(n,e){const t=De(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const h=[];e.targetChanges.forEach(((_,T)=>{const S=o.get(T);if(!S)return;h.push(t.hi.removeMatchingKeys(l,_.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,_.addedDocuments,T))));let P=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(Wt.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,i)),o=o.insert(T,P),(function($,V,te){return $.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=sR?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0})(S,P,_)&&h.push(t.hi.updateTargetData(l,P))}));let p=ai(),v=Me();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),h.push(cR(l,c,e.documentUpdates).next((_=>{p=_.Ls,v=_.ks}))),!i.isEqual(be.min())){const _=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));h.push(_)}return Q.waitFor(h).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,v))).next((()=>p))})).then((l=>(t.Fs=o,l)))}function cR(n,e,t){let i=Me(),o=Me();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=ai();return t.forEach(((h,p)=>{const v=l.get(h);p.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(be.min())?(e.removeEntry(h,p.readTime),c=c.insert(h,p)):!v.isValidDocument()||p.version.compareTo(v.version)>0||p.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(p),c=c.insert(h,p)):ce(Lp,"Ignoring outdated watch update for ",h,". Current version:",v.version," Watch version:",p.version)})),{Ls:c,ks:o}}))}function dR(n,e){const t=De(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Sp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function hR(n,e){const t=De(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,Q.resolve(o)):t.hi.allocateTargetId(i).next((c=>(o=new Bi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Gf(n,e,t){const i=De(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!ha(c))throw c;ce(Lp,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Qv(n,e,t){const i=De(n);let o=be.min(),l=Me();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,v,_){const T=De(p),S=T.Ms.get(_);return S!==void 0?Q.resolve(T.Fs.get(S)):T.hi.getTargetData(v,_)})(i,c,Rr(e)).next((h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,h.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:be.min(),t?l:Me()))).next((h=>(fR(i,ZA(e),h),{documents:h,qs:l})))))}function fR(n,e,t){let i=n.xs.get(e)||be.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class Yv{constructor(){this.activeTargetIds=sC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pR{constructor(){this.Fo=new Yv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Yv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mR{xo(e){}shutdown(){}}/**
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
 */const Jv="ConnectivityMonitor";class Xv{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(Jv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(Jv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uc=null;function Kf(){return uc===null?uc=(function(){return 268435456+Math.round(2147483648*Math.random())})():uc++,"0x"+uc.toString(16)}/**
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
 */const mf="RestConnection",gR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Oc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=Kf(),h=this.Go(e,t.toUriEncodedString());ce(mf,`Sending RPC '${e}' ${c}:`,h,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,l);const{host:v}=new URL(h),_=Ws(v);return this.jo(e,h,p,i,_).then((T=>(ce(mf,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw Hi(mf,`RPC '${e}' ${c} failed with error: `,T,"url: ",h,"request:",i),T}))}Jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ca})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=gR[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class vR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Qt="WebChannelConnection";class _R extends yR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const c=Kf();return new Promise(((h,p)=>{const v=new $w;v.setWithCredentials(!0),v.listenOnce(Ww.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case gc.NO_ERROR:const T=v.getResponseJson();ce(Qt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),h(T);break;case gc.TIMEOUT:ce(Qt,`RPC '${e}' ${c} timed out`),p(new le(K.DEADLINE_EXCEEDED,"Request time out"));break;case gc.HTTP_ERROR:const S=v.getStatus();if(ce(Qt,`RPC '${e}' ${c} failed with status:`,S,"response text:",v.getResponseText()),S>0){let P=v.getResponseJson();Array.isArray(P)&&(P=P[0]);const M=P==null?void 0:P.error;if(M&&M.status&&M.message){const $=(function(te){const re=te.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(re)>=0?re:K.UNKNOWN})(M.status);p(new le($,M.message))}else p(new le(K.UNKNOWN,"Server responded with status "+v.getStatus()))}else p(new le(K.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{c_:e,streamId:c,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{ce(Qt,`RPC '${e}' ${c} completed.`)}}));const _=JSON.stringify(o);ce(Qt,`RPC '${e}' ${c} sending request:`,o),v.send(t,"POST",_,i,15)}))}P_(e,t,i){const o=Kf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Gw(),h=Hw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(p.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=l.join("");ce(Qt,`Creating RPC '${e}' stream ${o}: ${_}`,p);const T=c.createWebChannel(_,p);this.T_(T);let S=!1,P=!1;const M=new vR({Ho:V=>{P?ce(Qt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(S||(ce(Qt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),ce(Qt,`RPC '${e}' stream ${o} sending:`,V),T.send(V))},Yo:()=>T.close()}),$=(V,te,re)=>{V.listen(te,(J=>{try{re(J)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return $(T,cl.EventType.OPEN,(()=>{P||(ce(Qt,`RPC '${e}' stream ${o} transport opened.`),M.s_())})),$(T,cl.EventType.CLOSE,(()=>{P||(P=!0,ce(Qt,`RPC '${e}' stream ${o} transport closed`),M.__(),this.I_(T))})),$(T,cl.EventType.ERROR,(V=>{P||(P=!0,Hi(Qt,`RPC '${e}' stream ${o} transport errored. Name:`,V.name,"Message:",V.message),M.__(new le(K.UNAVAILABLE,"The operation could not be completed")))})),$(T,cl.EventType.MESSAGE,(V=>{var te;if(!P){const re=V.data[0];He(!!re,16349);const J=re,_e=(J==null?void 0:J.error)||((te=J[0])===null||te===void 0?void 0:te.error);if(_e){ce(Qt,`RPC '${e}' stream ${o} received error:`,_e);const Ne=_e.status;let we=(function(C){const b=It[C];if(b!==void 0)return R0(b)})(Ne),N=_e.message;we===void 0&&(we=K.INTERNAL,N="Unknown error status: "+Ne+" with message "+_e.message),P=!0,M.__(new le(we,N)),T.close()}else ce(Qt,`RPC '${e}' stream ${o} received:`,re),M.a_(re)}})),$(h,qw.STAT_EVENT,(V=>{V.stat===Vf.PROXY?ce(Qt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===Vf.NOPROXY&&ce(Qt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{M.o_()}),0),M}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function gf(){return typeof document<"u"?document:null}/**
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
 */function hd(n){return new IC(n,!0)}/**
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
 */class $0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ce("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Zv="PersistentStream";class W0{constructor(e,t,i,o,l,c,h,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new $0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(oi(t.toString()),oi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new le(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(Zv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ce(Zv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wR extends W0{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=kC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return be.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?be.min():c.readTime?Pr(c.readTime):be.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Hf(this.serializer),t.addTarget=(function(l,c){let h;const p=c.target;if(h=Uf(p)?{documents:RC(l,p)}:{query:PC(l,p).Vt},h.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){h.resumeToken=N0(l,c.resumeToken);const v=$f(l,c.expectedCount);v!==null&&(h.expectedCount=v)}else if(c.snapshotVersion.compareTo(be.min())>0){h.readTime=Uc(l,c.snapshotVersion.toTimestamp());const v=$f(l,c.expectedCount);v!==null&&(h.expectedCount=v)}return h})(this.serializer,e);const i=NC(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Hf(this.serializer),t.removeTarget=e,this.k_(t)}}class ER extends W0{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=CC(e.writeResults,e.commitTime),i=Pr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Hf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>AC(this.serializer,i)))};this.k_(t)}}/**
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
 */class TR{}class IR extends TR{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new le(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,Wf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new le(K.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,h])=>this.connection.Jo(e,Wf(t,i),o,c,h,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new le(K.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class SR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(oi(t),this._a=!1):ce("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ms="RemoteStore";class xR{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((c=>{i.enqueueAndForget((async()=>{Qs(this)&&(ce(Ms,"Restarting streams for network reachability change."),await(async function(p){const v=De(p);v.Ia.add(4),await Ul(v),v.Aa.set("Unknown"),v.Ia.delete(4),await fd(v)})(this))}))})),this.Aa=new SR(i,o)}}async function fd(n){if(Qs(n))for(const e of n.da)await e(!0)}async function Ul(n){for(const e of n.da)await e(!1)}function q0(n,e){const t=De(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Bp(t)?Up(t):fa(t).x_()&&Fp(t,e))}function Mp(n,e){const t=De(n),i=fa(t);t.Ta.delete(e),i.x_()&&H0(t,e),t.Ta.size===0&&(i.x_()?i.B_():Qs(t)&&t.Aa.set("Unknown"))}function Fp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fa(n).H_(e)}function H0(n,e){n.Ra.$e(e),fa(n).Y_(e)}function Up(n){n.Ra=new _C({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),fa(n).start(),n.Aa.aa()}function Bp(n){return Qs(n)&&!fa(n).M_()&&n.Ta.size>0}function Qs(n){return De(n).Ia.size===0}function G0(n){n.Ra=void 0}async function kR(n){n.Aa.set("Online")}async function AR(n){n.Ta.forEach(((e,t)=>{Fp(n,e)}))}async function CR(n,e){G0(n),Bp(n)?(n.Aa.la(e),Up(n)):n.Aa.set("Unknown")}async function RR(n,e,t){if(n.Aa.set("Online"),e instanceof b0&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const h of l.targetIds)o.Ta.has(h)&&(await o.remoteSyncer.rejectListen(h,c),o.Ta.delete(h),o.Ra.removeTarget(h))})(n,e)}catch(i){ce(Ms,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await zc(n,i)}else if(e instanceof wc?n.Ra.Ye(e):e instanceof P0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(be.min()))try{const i=await z0(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const h=l.Ra.Pt(c);return h.targetChanges.forEach(((p,v)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.Ta.get(v);_&&l.Ta.set(v,_.withResumeToken(p.resumeToken,c))}})),h.targetMismatches.forEach(((p,v)=>{const _=l.Ta.get(p);if(!_)return;l.Ta.set(p,_.withResumeToken(Wt.EMPTY_BYTE_STRING,_.snapshotVersion)),H0(l,p);const T=new Bi(_.target,p,v,_.sequenceNumber);Fp(l,T)})),l.remoteSyncer.applyRemoteEvent(h)})(n,t)}catch(i){ce(Ms,"Failed to raise snapshot:",i),await zc(n,i)}}async function zc(n,e,t){if(!ha(e))throw e;n.Ia.add(1),await Ul(n),n.Aa.set("Offline"),t||(t=()=>z0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ce(Ms,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await fd(n)}))}function K0(n,e){return e().catch((t=>zc(n,t,e)))}async function pd(n){const e=De(n),t=Ji(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Sp;for(;PR(e);)try{const o=await dR(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,bR(e,o)}catch(o){await zc(e,o)}Q0(e)&&Y0(e)}function PR(n){return Qs(n)&&n.Pa.length<10}function bR(n,e){n.Pa.push(e);const t=Ji(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Q0(n){return Qs(n)&&!Ji(n).M_()&&n.Pa.length>0}function Y0(n){Ji(n).start()}async function NR(n){Ji(n).na()}async function DR(n){const e=Ji(n);for(const t of n.Pa)e.X_(t.mutations)}async function OR(n,e,t){const i=n.Pa.shift(),o=bp.from(i,e,t);await K0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await pd(n)}async function VR(n,e){e&&Ji(n).Z_&&await(async function(i,o){if((function(c){return yC(c)&&c!==K.ABORTED})(o.code)){const l=i.Pa.shift();Ji(i).N_(),await K0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await pd(i)}})(n,e),Q0(n)&&Y0(n)}async function e_(n,e){const t=De(n);t.asyncQueue.verifyOperationInProgress(),ce(Ms,"RemoteStore received new credentials");const i=Qs(t);t.Ia.add(3),await Ul(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await fd(t)}async function jR(n,e){const t=De(n);e?(t.Ia.delete(2),await fd(t)):e||(t.Ia.add(2),await Ul(t),t.Aa.set("Unknown"))}function fa(n){return n.Va||(n.Va=(function(t,i,o){const l=De(t);return l.ia(),new wR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:kR.bind(null,n),e_:AR.bind(null,n),n_:CR.bind(null,n),J_:RR.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Bp(n)?Up(n):n.Aa.set("Unknown")):(await n.Va.stop(),G0(n))}))),n.Va}function Ji(n){return n.ma||(n.ma=(function(t,i,o){const l=De(t);return l.ia(),new ER(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:NR.bind(null,n),n_:VR.bind(null,n),ea:DR.bind(null,n),ta:OR.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await pd(n)):(await n.ma.stop(),n.Pa.length>0&&(ce(Ms,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class zp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,h=new zp(e,t,c,o,l);return h.start(i),h}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $p(n,e){if(oi("AsyncQueue",`${e}: ${n}`),ha(n))return new le(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Yo{static emptySet(e){return new Yo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Te.comparator(t.key,i.key):(t,i)=>Te.comparator(t.key,i.key),this.keyedMap=dl(),this.sortedSet=new dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Yo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class t_{constructor(){this.fa=new dt(Te.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ae(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class ia{constructor(e,t,i,o,l,c,h,p,v){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=v}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((h=>{c.push({type:0,doc:h})})),new ia(e,t,Yo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class LR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class MR{constructor(){this.queries=n_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=De(t),l=o.queries;o.queries=n_(),l.forEach(((c,h)=>{for(const p of h.wa)p.onError(i)}))})(this,new le(K.ABORTED,"Firestore shutting down"))}}function n_(){return new Ks((n=>g0(n)),ad)}async function Wp(n,e){const t=De(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new LR,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const h=$p(c,`Initialization of query '${$o(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Hp(t)}async function qp(n,e){const t=De(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function FR(n,e){const t=De(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const h of c.wa)h.Ca(o)&&(i=!0);c.ya=o}}i&&Hp(t)}function UR(n,e,t){const i=De(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Hp(n){n.Da.forEach((e=>{e.next()}))}var Qf,r_;(r_=Qf||(Qf={})).Fa="default",r_.Cache="cache";class Gp{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new ia(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ia.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Qf.Cache}}/**
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
 */class J0{constructor(e){this.key=e}}class X0{constructor(e){this.key=e}}class BR{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Me(),this.mutatedKeys=Me(),this.Xa=y0(e),this.eu=new Yo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new t_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,T)=>{const S=o.get(_),P=ld(this.query,T)?T:null,M=!!S&&this.mutatedKeys.has(S.key),$=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;S&&P?S.data.isEqual(P.data)?M!==$&&(i.track({type:3,doc:P}),V=!0):this.iu(S,P)||(i.track({type:2,doc:P}),V=!0,(p&&this.Xa(P,p)>0||v&&this.Xa(P,v)<0)&&(h=!0)):!S&&P?(i.track({type:0,doc:P}),V=!0):S&&!P&&(i.track({type:1,doc:S}),V=!0,(p||v)&&(h=!0)),V&&(P?(c=c.add(P),l=$?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{eu:c,ru:i,Ds:h,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((_,T)=>(function(P,M){const $=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{At:V})}};return $(P)-$(M)})(_.type,T.type)||this.Xa(_.doc,T.doc))),this.su(i),o=o!=null&&o;const h=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,v=p!==this.Ya;return this.Ya=p,c.length!==0||v?{snapshot:new ia(this.query,e.eu,l,c,e.mutatedKeys,p===0,v,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:h}:{_u:h}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new t_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Me(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new X0(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new J0(i))})),t}uu(e){this.Ha=e.qs,this.Za=Me();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ia.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Kp="SyncEngine";class zR{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class $R{constructor(e){this.key=e,this.lu=!1}}class WR{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Ks((h=>g0(h)),ad),this.Tu=new Map,this.Iu=new Set,this.du=new dt(Te.comparator),this.Eu=new Map,this.Au=new Op,this.Ru={},this.Vu=new Map,this.mu=ra.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function qR(n,e,t=!0){const i=iE(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Z0(i,e,t,!0),o}async function HR(n,e){const t=iE(n);await Z0(t,e,!0,!1)}async function Z0(n,e,t,i){const o=await hR(n.localStore,Rr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let h;return i&&(h=await GR(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&q0(n.remoteStore,o),h}async function GR(n,e,t,i,o){n.gu=(T,S,P)=>(async function($,V,te,re){let J=V.view.nu(te);J.Ds&&(J=await Qv($.localStore,V.query,!1).then((({documents:N})=>V.view.nu(N,J))));const _e=re&&re.targetChanges.get(V.targetId),Ne=re&&re.targetMismatches.get(V.targetId)!=null,we=V.view.applyChanges(J,$.isPrimaryClient,_e,Ne);return s_($,V.targetId,we._u),we.snapshot})(n,T,S,P);const l=await Qv(n.localStore,e,!0),c=new BR(e,l.qs),h=c.nu(l.documents),p=Fl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),v=c.applyChanges(h,n.isPrimaryClient,p);s_(n,t,v._u);const _=new zR(e,t,c);return n.Pu.set(e,_),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),v.snapshot}async function KR(n,e,t){const i=De(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((c=>!ad(c,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Gf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Mp(i.remoteStore,o.targetId),Yf(i,o.targetId)})).catch(da)):(Yf(i,o.targetId),await Gf(i.localStore,o.targetId,!0))}async function QR(n,e){const t=De(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Mp(t.remoteStore,i.targetId))}async function YR(n,e,t){const i=rP(n);try{const o=await(function(c,h){const p=De(c),v=Ye.now(),_=h.reduce(((P,M)=>P.add(M.key)),Me());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let M=ai(),$=Me();return p.Os.getEntries(P,_).next((V=>{M=V,M.forEach(((te,re)=>{re.isValidDocument()||($=$.add(te))}))})).next((()=>p.localDocuments.getOverlayedDocuments(P,M))).next((V=>{T=V;const te=[];for(const re of h){const J=hC(re,T.get(re.key).overlayedDocument);J!=null&&te.push(new ns(re.key,J,l0(J.value.mapValue),zn.exists(!0)))}return p.mutationQueue.addMutationBatch(P,v,te,h)})).next((V=>{S=V;const te=V.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(P,V.batchId,te)}))})).then((()=>({batchId:S.batchId,changes:_0(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,h,p){let v=c.Ru[c.currentUser.toKey()];v||(v=new dt(Oe)),v=v.insert(h,p),c.Ru[c.currentUser.toKey()]=v})(i,o.batchId,t),await Bl(i,o.changes),await pd(i.remoteStore)}catch(o){const l=$p(o,"Failed to persist write");t.reject(l)}}async function eE(n,e){const t=De(n);try{const i=await uR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Eu.get(l);c&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.lu=!0:o.modifiedDocuments.size>0?He(c.lu,14607):o.removedDocuments.size>0&&(He(c.lu,42227),c.lu=!1))})),await Bl(t,i,e)}catch(i){await da(i)}}function i_(n,e,t){const i=De(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,c)=>{const h=c.view.va(e);h.snapshot&&o.push(h.snapshot)})),(function(c,h){const p=De(c);p.onlineState=h;let v=!1;p.queries.forEach(((_,T)=>{for(const S of T.wa)S.va(h)&&(v=!0)})),v&&Hp(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function JR(n,e,t){const i=De(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let c=new dt(Te.comparator);c=c.insert(l,Xt.newNoDocument(l,be.min()));const h=Me().add(l),p=new dd(be.min(),new Map,new dt(Oe),c,h);await eE(i,p),i.du=i.du.remove(l),i.Eu.delete(e),Qp(i)}else await Gf(i.localStore,e,!1).then((()=>Yf(i,e,t))).catch(da)}async function XR(n,e){const t=De(n),i=e.batch.batchId;try{const o=await lR(t.localStore,e);nE(t,i,null),tE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Bl(t,o)}catch(o){await da(o)}}async function ZR(n,e,t){const i=De(n);try{const o=await(function(c,h){const p=De(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let _;return p.mutationQueue.lookupMutationBatch(v,h).next((T=>(He(T!==null,37113),_=T.keys(),p.mutationQueue.removeMutationBatch(v,T)))).next((()=>p.mutationQueue.performConsistencyCheck(v))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(v,_,h))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,_))).next((()=>p.localDocuments.getDocuments(v,_)))}))})(i.localStore,e);nE(i,e,t),tE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Bl(i,o)}catch(o){await da(o)}}function tE(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function nE(n,e,t){const i=De(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Yf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||rE(n,i)}))}function rE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Mp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Qp(n))}function s_(n,e,t){for(const i of t)i instanceof J0?(n.Au.addReference(i.key,e),eP(n,i)):i instanceof X0?(ce(Kp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||rE(n,i.key)):Ae(19791,{yu:i})}function eP(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(ce(Kp,"New document in limbo: "+t),n.Iu.add(i),Qp(n))}function Qp(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Te(rt.fromString(e)),i=n.mu.next();n.Eu.set(i,new $R(t)),n.du=n.du.insert(t,i),q0(n.remoteStore,new Bi(Rr(od(t.path)),i,"TargetPurposeLimboResolution",rd.ue))}}async function Bl(n,e,t){const i=De(n),o=[],l=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach(((h,p)=>{c.push(i.gu(p,e,t).then((v=>{var _;if((v||t)&&i.isPrimaryClient){const T=v?!v.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(v){o.push(v);const T=jp.Es(p.targetId,v);l.push(T)}})))})),await Promise.all(c),i.hu.J_(o),await(async function(p,v){const _=De(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>Q.forEach(v,(S=>Q.forEach(S.Is,(P=>_.persistence.referenceDelegate.addReference(T,S.targetId,P))).next((()=>Q.forEach(S.ds,(P=>_.persistence.referenceDelegate.removeReference(T,S.targetId,P)))))))))}catch(T){if(!ha(T))throw T;ce(Lp,"Failed to update sequence numbers: "+T)}for(const T of v){const S=T.targetId;if(!T.fromCache){const P=_.Fs.get(S),M=P.snapshotVersion,$=P.withLastLimboFreeSnapshotVersion(M);_.Fs=_.Fs.insert(S,$)}}})(i.localStore,l))}async function tP(n,e){const t=De(n);if(!t.currentUser.isEqual(e)){ce(Kp,"User change. New user:",e.toKey());const i=await B0(t.localStore,e);t.currentUser=e,(function(l,c){l.Vu.forEach((h=>{h.forEach((p=>{p.reject(new le(K.CANCELLED,c))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Bl(t,i.Bs)}}function nP(n,e){const t=De(n),i=t.Eu.get(e);if(i&&i.lu)return Me().add(i.key);{let o=Me();const l=t.Tu.get(e);if(!l)return o;for(const c of l){const h=t.Pu.get(c);o=o.unionWith(h.view.tu)}return o}}function iE(n){const e=De(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=eE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JR.bind(null,e),e.hu.J_=FR.bind(null,e.eventManager),e.hu.pu=UR.bind(null,e.eventManager),e}function rP(n){const e=De(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZR.bind(null,e),e}class $c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return aR(this.persistence,new iR,e.initialUser,this.serializer)}Du(e){return new U0(Vp.Vi,this.serializer)}bu(e){return new pR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$c.provider={build:()=>new $c};class iP extends $c{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){He(this.persistence.referenceDelegate instanceof Bc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new $C(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?mn.withCacheSize(this.cacheSizeBytes):mn.DEFAULT;return new U0((i=>Bc.Vi(i,t)),this.serializer)}}class Jf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>i_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=tP.bind(null,this.syncEngine),await jR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new MR})()}createDatastore(e){const t=hd(e.databaseInfo.databaseId),i=(function(l){return new _R(l)})(e.databaseInfo);return(function(l,c,h,p){return new IR(l,c,h,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,h){return new xR(i,o,l,c,h)})(this.localStore,this.datastore,e.asyncQueue,(t=>i_(this.syncEngine,t,0)),(function(){return Xv.C()?new Xv:new mR})())}createSyncEngine(e,t){return(function(o,l,c,h,p,v,_){const T=new WR(o,l,c,h,p,v);return _&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=De(o);ce(Ms,"RemoteStore shutting down."),l.Ia.add(5),await Ul(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Jf.provider={build:()=>new Jf};/**
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
 */class Yp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):oi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Xi="FirestoreClient";class sP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Jt.UNAUTHENTICATED,this.clientId=Ip.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{ce(Xi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(ce(Xi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=$p(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function yf(n,e){n.asyncQueue.verifyOperationInProgress(),ce(Xi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await B0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{Hi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Hi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function o_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await oP(n);ce(Xi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>e_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>e_(e.remoteStore,o))),n._onlineComponents=e}async function oP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(Xi,"Using user provided OfflineComponentProvider");try{await yf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Hi("Error using user provided cache. Falling back to memory cache: "+t),await yf(n,new $c)}}else ce(Xi,"Using default OfflineComponentProvider"),await yf(n,new iP(void 0));return n._offlineComponents}async function sE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(Xi,"Using user provided OnlineComponentProvider"),await o_(n,n._uninitializedComponentsProvider._online)):(ce(Xi,"Using default OnlineComponentProvider"),await o_(n,new Jf))),n._onlineComponents}function aP(n){return sE(n).then((e=>e.syncEngine))}async function Wc(n){const e=await sE(n),t=e.eventManager;return t.onListen=qR.bind(null,e.syncEngine),t.onUnlisten=KR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=HR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=QR.bind(null,e.syncEngine),t}function lP(n,e,t={}){const i=new ni;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,h,p,v){const _=new Yp({next:S=>{_.Ou(),c.enqueueAndForget((()=>qp(l,T)));const P=S.docs.has(h);!P&&S.fromCache?v.reject(new le(K.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&S.fromCache&&p&&p.source==="server"?v.reject(new le(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(S)},error:S=>v.reject(S)}),T=new Gp(od(h.path),_,{includeMetadataChanges:!0,ka:!0});return Wp(l,T)})(await Wc(n),n.asyncQueue,e,t,i))),i.promise}function uP(n,e,t={}){const i=new ni;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,h,p,v){const _=new Yp({next:S=>{_.Ou(),c.enqueueAndForget((()=>qp(l,T))),S.fromCache&&p.source==="server"?v.reject(new le(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(S)},error:S=>v.reject(S)}),T=new Gp(h,_,{includeMetadataChanges:!0,ka:!0});return Wp(l,T)})(await Wc(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function oE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const a_=new Map;/**
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
 */const aE="firestore.googleapis.com",l_=!0;class u_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new le(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aE,this.ssl=l_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:l_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=F0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BC)throw new le(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class md{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new yA;switch(i.type){case"firstParty":return new EA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new le(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=a_.get(t);i&&(ce("ComponentProvider","Removing Datastore"),a_.delete(t),i.terminate())})(this),Promise.resolve()}}function cP(n,e,t,i={}){var o;n=wn(n,md);const l=Ws(e),c=n._getSettings(),h=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(up(`https://${p}`),cp("Firestore",!0)),c.host!==aE&&c.host!==p&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:i});if(!ri(v,h)&&(n._setSettings(v),i.mockUserToken)){let _,T;if(typeof i.mockUserToken=="string")_=i.mockUserToken,T=Jt.MOCK_USER;else{_=IS(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new le(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Jt(S)}n._authCredentials=new vA(new Qw(_,T))}}/**
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
 */class Ys{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ys(this.firestore,e,this._query)}}class ft{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(jl(t,ft._jsonSchema))return new ft(e,i||null,new Te(rt.fromString(t.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:xt("string",ft._jsonSchemaVersion),referencePath:xt("string")};class qi extends Ys{constructor(e,t,i){super(e,t,od(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new Te(e))}withConverter(e){return new qi(this.firestore,e,this._path)}}function Or(n,e,...t){if(n=et(n),Jw("collection","path",e),n instanceof md){const i=rt.fromString(e,...t);return Tv(i),new qi(n,null,i)}{if(!(n instanceof ft||n instanceof qi))throw new le(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(rt.fromString(e,...t));return Tv(i),new qi(n.firestore,null,i)}}function Lt(n,e,...t){if(n=et(n),arguments.length===1&&(e=Ip.newId()),Jw("doc","path",e),n instanceof md){const i=rt.fromString(e,...t);return Ev(i),new ft(n,null,new Te(i))}{if(!(n instanceof ft||n instanceof qi))throw new le(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(rt.fromString(e,...t));return Ev(i),new ft(n.firestore,n instanceof qi?n.converter:null,new Te(i))}}/**
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
 */const c_="AsyncQueue";class d_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new $0(this,"async_queue_retry"),this.oc=()=>{const i=gf();i&&ce(c_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=gf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=gf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ni;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ha(e))throw e;ce(c_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,oi("INTERNAL UNHANDLED ERROR: ",h_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=zp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&Ae(47125,{hc:h_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function h_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function f_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class li extends md{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new d_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new d_(e),this._firestoreClient=void 0,await e}}}function dP(n,e){const t=typeof n=="object"?n:Xc(),i=typeof n=="string"?n:Oc,o=Hs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Y_("firestore");l&&cP(o,...l)}return o}function gd(n){if(n._terminated)throw new le(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hP(n),n._firestoreClient}function hP(n){var e,t,i;const o=n._freezeSettings(),l=(function(h,p,v,_){return new LA(h,p,v,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,oE(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new sP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class Bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bn(Wt.fromBase64String(e))}catch(t){throw new le(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bn(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jl(e,Bn._jsonSchema))return Bn.fromBase64String(e.bytes)}}Bn._jsonSchemaVersion="firestore/bytes/1.0",Bn._jsonSchema={type:xt("string",Bn._jsonSchemaVersion),bytes:xt("string")};/**
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
 */class yd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zl{constructor(e){this._methodName=e}}/**
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
 */class br{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:br._jsonSchemaVersion}}static fromJSON(e){if(jl(e,br._jsonSchema))return new br(e.latitude,e.longitude)}}br._jsonSchemaVersion="firestore/geoPoint/1.0",br._jsonSchema={type:xt("string",br._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
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
 */class Nr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Nr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jl(e,Nr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Nr(e.vectorValues);throw new le(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nr._jsonSchemaVersion="firestore/vectorValue/1.0",Nr._jsonSchema={type:xt("string",Nr._jsonSchemaVersion),vectorValues:xt("object")};/**
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
 */const fP=/^__.*__$/;class pP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ml(e,this.data,t,this.fieldTransforms)}}class lE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new ns(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function uE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ec:n})}}class vd{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new vd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return qc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(uE(this.Ec)&&fP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class mP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||hd(e)}Dc(e,t,i,o=!1){return new vd({Ec:e,methodName:t,bc:i,path:$t.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _d(n){const e=n._freezeSettings(),t=hd(n._databaseId);return new mP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cE(n,e,t,i,o,l={}){const c=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);Zp("Data must be an object, but it was:",c,i);const h=hE(i,c);let p,v;if(l.merge)p=new Pn(c.fieldMask),v=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const T of l.mergeFields){const S=Xf(e,T,t);if(!c.contains(S))throw new le(K.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);pE(_,S)||_.push(S)}p=new Pn(_),v=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,v=c.fieldTransforms;return new pP(new yn(h),p,v)}class wd extends zl{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wd}}function dE(n,e,t){return new vd({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Jp extends zl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=dE(this,e,!0),i=this.vc.map((l=>Js(l,t))),o=new ta(i);return new k0(e.path,o)}isEqual(e){return e instanceof Jp&&ri(this.vc,e.vc)}}class Xp extends zl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=dE(this,e,!0),i=this.vc.map((l=>Js(l,t))),o=new na(i);return new k0(e.path,o)}isEqual(e){return e instanceof Xp&&ri(this.vc,e.vc)}}function gP(n,e,t,i){const o=n.Dc(1,e,t);Zp("Data must be an object, but it was:",o,i);const l=[],c=yn.empty();ts(i,((p,v)=>{const _=em(e,p,t);v=et(v);const T=o.gc(_);if(v instanceof wd)l.push(_);else{const S=Js(v,T);S!=null&&(l.push(_),c.set(_,S))}}));const h=new Pn(l);return new lE(c,h,o.fieldTransforms)}function yP(n,e,t,i,o,l){const c=n.Dc(1,e,t),h=[Xf(e,i,t)],p=[o];if(l.length%2!=0)throw new le(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)h.push(Xf(e,l[S])),p.push(l[S+1]);const v=[],_=yn.empty();for(let S=h.length-1;S>=0;--S)if(!pE(v,h[S])){const P=h[S];let M=p[S];M=et(M);const $=c.gc(P);if(M instanceof wd)v.push(P);else{const V=Js(M,$);V!=null&&(v.push(P),_.set(P,V))}}const T=new Pn(v);return new lE(_,T,c.fieldTransforms)}function vP(n,e,t,i=!1){return Js(t,n.Dc(i?4:3,e))}function Js(n,e){if(fE(n=et(n)))return Zp("Unsupported field value:",e,n),hE(n,e);if(n instanceof zl)return(function(i,o){if(!uE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const h of i){let p=Js(h,o.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return oC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:Uc(o.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Uc(o.serializer,l)}}if(i instanceof br)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Bn)return{bytesValue:N0(o.serializer,i._byteString)};if(i instanceof ft){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Dp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Nr)return(function(c,h){return{mapValue:{fields:{[o0]:{stringValue:a0},[Vc]:{arrayValue:{values:c.toArray().map((v=>{if(typeof v!="number")throw h.wc("VectorValues must only contain numeric values.");return Rp(h.serializer,v)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${nd(i)}`)})(n,e)}function hE(n,e){const t={};return e0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(n,((i,o)=>{const l=Js(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function fE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ye||n instanceof br||n instanceof Bn||n instanceof ft||n instanceof zl||n instanceof Nr)}function Zp(n,e,t){if(!fE(t)||!Xw(t)){const i=nd(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Xf(n,e,t){if((e=et(e))instanceof yd)return e._internalPath;if(typeof e=="string")return em(n,e);throw qc("Field path arguments must be of type string or ",n,!1,void 0,t)}const _P=new RegExp("[~\\*/\\[\\]]");function em(n,e,t){if(e.search(_P)>=0)throw qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yd(...e.split("."))._internalPath}catch{throw qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new le(K.INVALID_ARGUMENT,h+n+p)}function pE(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class mE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wP extends mE{data(){return super.data()}}function tm(n,e){return typeof e=="string"?em(n,e):e instanceof yd?e._internalPath:e._delegate._internalPath}/**
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
 */function gE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new le(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nm{}class EP extends nm{}function Ed(n,e,...t){let i=[];e instanceof nm&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof rm)).length,h=l.filter((p=>p instanceof Td)).length;if(c>1||c>0&&h>0)throw new le(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class Td extends EP{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Td(e,t,i)}_apply(e){const t=this._parse(e);return yE(e._query,t),new Ys(e.firestore,e.converter,Bf(e._query,t))}_parse(e){const t=_d(e.firestore);return(function(l,c,h,p,v,_,T){let S;if(v.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new le(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){m_(T,_);const M=[];for(const $ of T)M.push(p_(p,l,$));S={arrayValue:{values:M}}}else S=p_(p,l,T)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||m_(T,_),S=vP(h,c,T,_==="in"||_==="not-in");return St.create(v,_,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Id(n,e,t){const i=e,o=tm("where",n);return Td._create(o,i,t)}class rm extends nm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rm(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:cr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const h=l.getFlattenedFilters();for(const p of h)yE(c,p),c=Bf(c,p)})(e._query,t),new Ys(e.firestore,e.converter,Bf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function p_(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new le(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!m0(e)&&t.indexOf("/")!==-1)throw new le(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(rt.fromString(t));if(!Te.isDocumentKey(i))throw new le(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Pv(n,new Te(i))}if(t instanceof ft)return Pv(n,t._key);throw new le(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nd(t)}.`)}function m_(n,e){if(!Array.isArray(n)||n.length===0)throw new le(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yE(n,e){const t=(function(o,l){for(const c of o)for(const h of c.getFlattenedFilters())if(l.indexOf(h.op)>=0)return h.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new le(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class TP{convertValue(e,t="none"){switch(Yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ts(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Vc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>gt(c.doubleValue)));return new Nr(l)}convertGeoPoint(e){return new br(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=sd(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(xl(e));default:return null}}convertTimestamp(e){const t=Ki(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=rt.fromString(e);He(M0(i),9688,{name:e});const o=new kl(i.get(1),i.get(3)),l=new Te(i.popFirst(5));return o.isEqual(t)||oi(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function vE(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class fl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ds extends mE{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(tm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ds._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ds._jsonSchema={type:xt("string",Ds._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class Ec extends Ds{data(e={}){return super.data(e)}}class Os{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new fl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Ec(this._firestore,this._userDataWriter,i.key,i,new fl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((h=>{const p=new Ec(o._firestore,o._userDataWriter,h.doc.key,h.doc,new fl(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);return h.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((h=>l||h.type!==3)).map((h=>{const p=new Ec(o._firestore,o._userDataWriter,h.doc.key,h.doc,new fl(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,_=-1;return h.type!==0&&(v=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),_=c.indexOf(h.doc.key)),{type:IP(h.type),doc:p,oldIndex:v,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ip.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}/**
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
 */function im(n){n=wn(n,ft);const e=wn(n.firestore,li);return lP(gd(e),n._key).then((t=>EE(e,n,t)))}Os._jsonSchemaVersion="firestore/querySnapshot/1.0",Os._jsonSchema={type:xt("string",Os._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};class sm extends TP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,t)}}function Fs(n){n=wn(n,Ys);const e=wn(n.firestore,li),t=gd(e),i=new sm(e);return gE(n._query),uP(t,n._query).then((o=>new Os(e,i,n,o)))}function SP(n,e,t){n=wn(n,ft);const i=wn(n.firestore,li),o=vE(n.converter,e);return Sd(i,[cE(_d(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,zn.none())])}function or(n,e,t,...i){n=wn(n,ft);const o=wn(n.firestore,li),l=_d(o);let c;return c=typeof(e=et(e))=="string"||e instanceof yd?yP(l,"updateDoc",n._key,e,t,i):gP(l,"updateDoc",n._key,e),Sd(o,[c.toMutation(n._key,zn.exists(!0))])}function _E(n){return Sd(wn(n.firestore,li),[new Pp(n._key,zn.none())])}function xP(n,e){const t=wn(n.firestore,li),i=Lt(n),o=vE(n.converter,e);return Sd(t,[cE(_d(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,zn.exists(!1))]).then((()=>i))}function wE(n,...e){var t,i,o;n=et(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||f_(e[c])||(l=e[c++]);const h={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(f_(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,v,_;if(n instanceof ft)v=wn(n.firestore,li),_=od(n._key.path),p={next:T=>{e[c]&&e[c](EE(v,n,T))},error:e[c+1],complete:e[c+2]};else{const T=wn(n,Ys);v=wn(T.firestore,li),_=T._query;const S=new sm(v);p={next:P=>{e[c]&&e[c](new Os(v,S,T,P))},error:e[c+1],complete:e[c+2]},gE(n._query)}return(function(S,P,M,$){const V=new Yp($),te=new Gp(P,V,M);return S.asyncQueue.enqueueAndForget((async()=>Wp(await Wc(S),te))),()=>{V.Ou(),S.asyncQueue.enqueueAndForget((async()=>qp(await Wc(S),te)))}})(gd(v),_,h,p)}function Sd(n,e){return(function(i,o){const l=new ni;return i.asyncQueue.enqueueAndForget((async()=>YR(await aP(i),o,l))),l.promise})(gd(n),e)}function EE(n,e,t){const i=t.docs.get(e._key),o=new sm(n);return new Ds(n,o,e._key,i,new fl(t.hasPendingWrites,t.fromCache),e.converter)}function kP(...n){return new Jp("arrayUnion",n)}function AP(...n){return new Xp("arrayRemove",n)}(function(e,t=!0){(function(o){ca=o})(ua),lr(new $n("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),h=new li(new _A(i.getProvider("auth-internal")),new TA(c,i.getProvider("app-check-internal")),(function(v,_){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new le(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kl(v.options.projectId,_)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),h._setSettings(l),h}),"PUBLIC").setMultipleInstances(!0)),_n(gv,yv,e),_n(gv,yv,"esm2017")})();const TE="@firebase/installations",om="0.6.18";/**
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
 */const IE=1e4,SE=`w:${om}`,xE="FIS_v2",CP="https://firebaseinstallations.googleapis.com/v1",RP=3600*1e3,PP="installations",bP="Installations";/**
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
 */const NP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Us=new qs(PP,bP,NP);function kE(n){return n instanceof dr&&n.code.includes("request-failed")}/**
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
 */function AE({projectId:n}){return`${CP}/projects/${n}/installations`}function CE(n){return{token:n.token,requestStatus:2,expiresIn:OP(n.expiresIn),creationTime:Date.now()}}async function RE(n,e){const i=(await e.json()).error;return Us.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function PE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function DP(n,{refreshToken:e}){const t=PE(n);return t.append("Authorization",VP(e)),t}async function bE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function OP(n){return Number(n.replace("s","000"))}function VP(n){return`${xE} ${n}`}/**
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
 */async function jP({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=AE(n),o=PE(n),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const c={fid:t,authVersion:xE,appId:n.appId,sdkVersion:SE},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await bE(()=>fetch(i,h));if(p.ok){const v=await p.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:CE(v.authToken)}}else throw await RE("Create Installation",p)}/**
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
 */function NE(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function LP(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const MP=/^[cdef][\w-]{21}$/,Zf="";function FP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=UP(n);return MP.test(t)?t:Zf}catch{return Zf}}function UP(n){return LP(n).substr(0,22)}/**
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
 */function xd(n){return`${n.appName}!${n.appId}`}/**
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
 */const DE=new Map;function OE(n,e){const t=xd(n);VE(t,e),BP(t,e)}function VE(n,e){const t=DE.get(n);if(t)for(const i of t)i(e)}function BP(n,e){const t=zP();t&&t.postMessage({key:n,fid:e}),$P()}let Ns=null;function zP(){return!Ns&&"BroadcastChannel"in self&&(Ns=new BroadcastChannel("[Firebase] FID Change"),Ns.onmessage=n=>{VE(n.data.key,n.data.fid)}),Ns}function $P(){DE.size===0&&Ns&&(Ns.close(),Ns=null)}/**
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
 */const WP="firebase-installations-database",qP=1,Bs="firebase-installations-store";let vf=null;function am(){return vf||(vf=Jc(WP,qP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Bs)}}})),vf}async function Hc(n,e){const t=xd(n),o=(await am()).transaction(Bs,"readwrite"),l=o.objectStore(Bs),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&OE(n,e.fid),e}async function jE(n){const e=xd(n),i=(await am()).transaction(Bs,"readwrite");await i.objectStore(Bs).delete(e),await i.done}async function kd(n,e){const t=xd(n),o=(await am()).transaction(Bs,"readwrite"),l=o.objectStore(Bs),c=await l.get(t),h=e(c);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!c||c.fid!==h.fid)&&OE(n,h.fid),h}/**
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
 */async function lm(n){let e;const t=await kd(n.appConfig,i=>{const o=HP(i),l=GP(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Zf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function HP(n){const e=n||{fid:FP(),registrationStatus:0};return LE(e)}function GP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Us.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=KP(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QP(n)}:{installationEntry:e}}async function KP(n,e){try{const t=await jP(n,e);return Hc(n.appConfig,t)}catch(t){throw kE(t)&&t.customData.serverCode===409?await jE(n.appConfig):await Hc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function QP(n){let e=await g_(n.appConfig);for(;e.registrationStatus===1;)await NE(100),e=await g_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await lm(n);return i||t}return e}function g_(n){return kd(n,e=>{if(!e)throw Us.create("installation-not-found");return LE(e)})}function LE(n){return YP(n)?{fid:n.fid,registrationStatus:0}:n}function YP(n){return n.registrationStatus===1&&n.registrationTime+IE<Date.now()}/**
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
 */async function JP({appConfig:n,heartbeatServiceProvider:e},t){const i=XP(n,t),o=DP(n,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const c={installation:{sdkVersion:SE,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await bE(()=>fetch(i,h));if(p.ok){const v=await p.json();return CE(v)}else throw await RE("Generate Auth Token",p)}function XP(n,{fid:e}){return`${AE(n)}/${e}/authTokens:generate`}/**
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
 */async function um(n,e=!1){let t;const i=await kd(n.appConfig,l=>{if(!ME(l))throw Us.create("not-registered");const c=l.authToken;if(!e&&tb(c))return l;if(c.requestStatus===1)return t=ZP(n,e),l;{if(!navigator.onLine)throw Us.create("app-offline");const h=rb(l);return t=eb(n,h),h}});return t?await t:i.authToken}async function ZP(n,e){let t=await y_(n.appConfig);for(;t.authToken.requestStatus===1;)await NE(100),t=await y_(n.appConfig);const i=t.authToken;return i.requestStatus===0?um(n,e):i}function y_(n){return kd(n,e=>{if(!ME(e))throw Us.create("not-registered");const t=e.authToken;return ib(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eb(n,e){try{const t=await JP(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Hc(n.appConfig,i),t}catch(t){if(kE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await jE(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Hc(n.appConfig,i)}throw t}}function ME(n){return n!==void 0&&n.registrationStatus===2}function tb(n){return n.requestStatus===2&&!nb(n)}function nb(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+RP}function rb(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function ib(n){return n.requestStatus===1&&n.requestTime+IE<Date.now()}/**
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
 */async function sb(n){const e=n,{installationEntry:t,registrationPromise:i}=await lm(e);return i?i.catch(console.error):um(e).catch(console.error),t.fid}/**
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
 */async function ob(n,e=!1){const t=n;return await ab(t),(await um(t,e)).token}async function ab(n){const{registrationPromise:e}=await lm(n);e&&await e}/**
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
 */function lb(n){if(!n||!n.options)throw _f("App Configuration");if(!n.name)throw _f("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw _f(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function _f(n){return Us.create("missing-app-config-values",{valueName:n})}/**
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
 */const FE="installations",ub="installations-internal",cb=n=>{const e=n.getProvider("app").getImmediate(),t=lb(e),i=Hs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},db=n=>{const e=n.getProvider("app").getImmediate(),t=Hs(e,FE).getImmediate();return{getId:()=>sb(t),getToken:o=>ob(t,o)}};function hb(){lr(new $n(FE,cb,"PUBLIC")),lr(new $n(ub,db,"PRIVATE"))}hb();_n(TE,om);_n(TE,om,"esm2017");/**
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
 */const fb="/firebase-messaging-sw.js",pb="/firebase-cloud-messaging-push-scope",UE="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",mb="https://fcmregistrations.googleapis.com/v1",BE="google.c.a.c_id",gb="google.c.a.c_l",yb="google.c.a.ts",vb="google.c.a.e",v_=1e4;var __;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(__||(__={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Cl;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Cl||(Cl={}));/**
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
 */function Xr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function _b(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const wf="fcm_token_details_db",wb=5,w_="fcm_token_object_Store";async function Eb(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(wf))return null;let e=null;return(await Jc(wf,wb,{upgrade:async(i,o,l,c)=>{var h;if(o<2||!i.objectStoreNames.contains(w_))return;const p=c.objectStore(w_),v=await p.index("fcmSenderId").get(n);if(await p.clear(),!!v){if(o===2){const _=v;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:(h=_.createTime)!==null&&h!==void 0?h:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:Xr(_.vapidKey)}}}else if(o===3){const _=v;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Xr(_.auth),p256dh:Xr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Xr(_.vapidKey)}}}else if(o===4){const _=v;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Xr(_.auth),p256dh:Xr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Xr(_.vapidKey)}}}}}})).close(),await uf(wf),await uf("fcm_vapid_details_db"),await uf("undefined"),Tb(e)?e:null}function Tb(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Ib="firebase-messaging-database",Sb=1,Rl="firebase-messaging-store";let Ef=null;function zE(){return Ef||(Ef=Jc(Ib,Sb,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rl)}}})),Ef}async function xb(n){const e=$E(n),i=await(await zE()).transaction(Rl).objectStore(Rl).get(e);if(i)return i;{const o=await Eb(n.appConfig.senderId);if(o)return await cm(n,o),o}}async function cm(n,e){const t=$E(n),o=(await zE()).transaction(Rl,"readwrite");return await o.objectStore(Rl).put(e,t),await o.done,e}function $E({appConfig:n}){return n.appId}/**
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
 */const kb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},on=new qs("messaging","Messaging",kb);/**
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
 */async function Ab(n,e){const t=await hm(n),i=WE(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(dm(n.appConfig),o)).json()}catch(c){throw on.create("token-subscribe-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw on.create("token-subscribe-failed",{errorInfo:c})}if(!l.token)throw on.create("token-subscribe-no-token");return l.token}async function Cb(n,e){const t=await hm(n),i=WE(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${dm(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw on.create("token-update-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw on.create("token-update-failed",{errorInfo:c})}if(!l.token)throw on.create("token-update-no-token");return l.token}async function Rb(n,e){const i={method:"DELETE",headers:await hm(n)};try{const l=await(await fetch(`${dm(n.appConfig)}/${e}`,i)).json();if(l.error){const c=l.error.message;throw on.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw on.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function dm({projectId:n}){return`${mb}/projects/${n}/registrations`}async function hm({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function WE({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==UE&&(o.web.applicationPubKey=i),o}/**
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
 */const Pb=10080*60*1e3;async function bb(n){const e=await Db(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Xr(e.getKey("auth")),p256dh:Xr(e.getKey("p256dh"))},i=await xb(n.firebaseDependencies);if(i){if(Ob(i.subscriptionOptions,t))return Date.now()>=i.createTime+Pb?Nb(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await Rb(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return E_(n.firebaseDependencies,t)}else return E_(n.firebaseDependencies,t)}async function Nb(n,e){try{const t=await Cb(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await cm(n.firebaseDependencies,i),t}catch(t){throw t}}async function E_(n,e){const i={token:await Ab(n,e),createTime:Date.now(),subscriptionOptions:e};return await cm(n,i),i.token}async function Db(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_b(e)})}function Ob(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
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
 */function T_(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return Vb(e,n),jb(e,n),Lb(e,n),e}function Vb(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function jb(n,e){e.data&&(n.data=e.data)}function Lb(n,e){var t,i,o,l,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const h=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;h&&(n.fcmOptions.link=h);const p=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
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
 */function Mb(n){return typeof n=="object"&&!!n&&BE in n}/**
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
 */function Fb(n){if(!n||!n.options)throw Tf("App Configuration Object");if(!n.name)throw Tf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw Tf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Tf(n){return on.create("missing-app-config-values",{valueName:n})}/**
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
 */class Ub{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Fb(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function Bb(n){try{n.swRegistration=await navigator.serviceWorker.register(fb,{scope:pb}),n.swRegistration.update().catch(()=>{}),await zb(n.swRegistration)}catch(e){throw on.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function zb(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${v_} ms`)),v_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var c;((c=l.target)===null||c===void 0?void 0:c.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
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
 */async function $b(n,e){if(!e&&!n.swRegistration&&await Bb(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw on.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function Wb(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=UE)}/**
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
 */async function qE(n,e){if(!navigator)throw on.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw on.create("permission-blocked");return await Wb(n,e==null?void 0:e.vapidKey),await $b(n,e==null?void 0:e.serviceWorkerRegistration),bb(n)}/**
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
 */async function qb(n,e,t){const i=Hb(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[BE],message_name:t[gb],message_time:t[yb],message_device_time:Math.floor(Date.now()/1e3)})}function Hb(n){switch(n){case Cl.NOTIFICATION_CLICKED:return"notification_open";case Cl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Gb(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Cl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(T_(t)):n.onMessageHandler.next(T_(t)));const i=t.data;Mb(i)&&i[vb]==="1"&&await qb(n,t.messageType,i)}const I_="@firebase/messaging",S_="0.12.22";/**
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
 */const Kb=n=>{const e=new Ub(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>Gb(e,t)),e},Qb=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>qE(e,i)}};function Yb(){lr(new $n("messaging",Kb,"PUBLIC")),lr(new $n("messaging-internal",Qb,"PRIVATE")),_n(I_,S_),_n(I_,S_,"esm2017")}/**
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
 */async function HE(){try{await ew()}catch{return!1}return typeof window<"u"&&Z_()&&DS()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function ep(n=Xc()){return HE().then(e=>{if(!e)throw on.create("unsupported-browser")},e=>{throw on.create("indexed-db-unsupported")}),Hs(et(n),"messaging").getImmediate()}async function tp(n,e){return n=et(n),qE(n,e)}Yb();const Jb={apiKey:"AIzaSyAUNktXGZeeXlX3LKFolXZRVQZGDohlIF0",authDomain:"golfgang-79922.firebaseapp.com",projectId:"golfgang-79922",storageBucket:"golfgang-79922.appspot.com",messagingSenderId:"223762413770",appId:"1:223762413770:web:098607b8f30080df90dc33",measurementId:"G-T1FXETH3K0"},sa=rw(Jb),Pl=fA(sa),Ze=dP(sa),GE=z.createContext(null);function Xb({children:n}){const[e,t]=z.useState(null),[i,o]=z.useState(null),[l,c]=z.useState(!1),[h,p]=z.useState(!0);z.useEffect(()=>{const T=tk(Pl,async S=>{if(!S){t(null),o(null),c(!1),p(!1);return}t(S);try{const P=Lt(Ze,"users",S.uid),M=await im(P);if(M.exists()){const $=M.data();o($),c(($==null?void 0:$.isAdmin)===!0)}else o({}),c(!1)}catch(P){console.error("Error loading user profile:",P),o({})}p(!1)});return()=>T()},[]);const _={user:e,profile:i,isAdmin:l,loading:h,logout:async()=>{try{await nk(Pl)}catch(T){console.error("Error signing out:",T)}}};return g.jsx(GE.Provider,{value:_,children:n})}function jr(){return z.useContext(GE)}const Zb=z.createContext(null);function eN({children:n}){const e={theme:"light",isDark:!1,setTheme:()=>{},toggleTheme:()=>{}};return g.jsx(Zb.Provider,{value:e,children:n})}function tN(){const n=zs(),e=$s(),{user:t,isAdmin:i,logout:o}=jr(),[l,c]=z.useState(!1),h=z.useRef(null),p=()=>t?(t.displayName||t.email||"").charAt(0).toUpperCase():"?";z.useEffect(()=>{const _=T=>{h.current&&!h.current.contains(T.target)&&c(!1)};return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]);const v=async()=>{c(!1),await o(),e("/login")};return g.jsx("nav",{className:"top-nav",children:g.jsxs("div",{className:"top-nav-inner",children:[g.jsx(sn,{to:"/",className:"top-nav-left",children:g.jsxs("span",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-xl)",fontWeight:700,color:"var(--color-primary)",display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx("span",{style:{fontSize:"24px"},children:"⛳"}),"GolfGang"]})}),g.jsxs("div",{className:"top-nav-right",children:[t&&g.jsx(g.Fragment,{children:g.jsxs("div",{className:"top-nav-links desktop-only",children:[g.jsx(sn,{to:"/",className:n.pathname==="/"?"active":"",children:"Events"}),i&&g.jsx(sn,{to:"/admin",className:n.pathname==="/admin"?"active":"",children:"Admin"})]})}),t?g.jsxs("div",{ref:h,style:{position:"relative"},children:[g.jsx("div",{className:"header-avatar",onClick:()=>c(!l),title:"Menu",style:{cursor:"pointer"},children:p()}),l&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 8px)",right:0,background:"var(--color-surface)",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-lg)",border:"1px solid var(--color-border)",minWidth:160,padding:"6px",zIndex:100},children:[g.jsx("div",{style:{padding:"8px 12px",fontSize:"var(--text-sm)",color:"var(--color-text-secondary)",borderBottom:"1px solid var(--color-border)",marginBottom:6},children:t.displayName||t.email}),g.jsx("button",{onClick:()=>{c(!1),e("/profile")},style:{display:"block",width:"100%",padding:"10px 12px",textAlign:"left",background:"none",border:"none",borderRadius:"var(--radius-md)",cursor:"pointer",fontSize:"var(--text-sm)",color:"var(--color-text)"},onMouseEnter:_=>_.target.style.background="var(--color-bg-hover)",onMouseLeave:_=>_.target.style.background="none",children:"👤 Profile"}),i&&g.jsx("button",{onClick:()=>{c(!1),e("/admin")},style:{display:"block",width:"100%",padding:"10px 12px",textAlign:"left",background:"none",border:"none",borderRadius:"var(--radius-md)",cursor:"pointer",fontSize:"var(--text-sm)",color:"var(--color-text)"},onMouseEnter:_=>_.target.style.background="var(--color-bg-hover)",onMouseLeave:_=>_.target.style.background="none",children:"⚙️ Admin"}),g.jsx("button",{onClick:v,style:{display:"block",width:"100%",padding:"10px 12px",textAlign:"left",background:"none",border:"none",borderRadius:"var(--radius-md)",cursor:"pointer",fontSize:"var(--text-sm)",color:"var(--color-danger)"},onMouseEnter:_=>_.target.style.background="var(--color-bg-hover)",onMouseLeave:_=>_.target.style.background="none",children:"🚪 Log out"})]})]}):g.jsx(sn,{to:"/login",className:"btn btn-primary btn-sm",children:"Log in"})]})]})})}function nN(){const n=zs(),e=$s(),{user:t}=jr();if(!t||["/login","/signup","/reset-password"].includes(n.pathname))return null;const o=[{path:"/",icon:"🏠",label:"Home"},{path:"/my-events",icon:"✓",label:"My RSVPs"}],l=c=>c==="/"?n.pathname==="/":n.pathname.startsWith(c);return g.jsx("nav",{className:"bottom-nav",children:g.jsx("div",{className:"bottom-nav-content",children:o.map(c=>g.jsxs("button",{className:`nav-item ${l(c.path)?"active":""}`,onClick:()=>e(c.path),children:[g.jsx("span",{className:"nav-item-icon",children:c.icon}),g.jsx("span",{className:"nav-item-label",children:c.label})]},c.path))})})}function x_(){const n=$s(),[e,t]=z.useState(""),[i,o]=z.useState(""),[l,c]=z.useState(""),[h,p]=z.useState(!1);async function v(_){_.preventDefault(),c(""),p(!0);try{let T=e.trim();if(!e.includes("@")){const S=Ed(Or(Ze,"users"),Id("username","==",e.trim().toLowerCase())),P=await Fs(S);if(P.empty)throw new Error("Username not found.");T=P.docs[0].data().email}await Yx(Pl,T,i),n("/")}catch(T){console.error(T),c(T.message||"Failed to sign in.")}p(!1)}return g.jsx("div",{style:{minHeight:"calc(100vh - var(--nav-height))",display:"flex",justifyContent:"center",alignItems:"center",padding:24},children:g.jsxs("div",{className:"card",style:{width:"100%",maxWidth:400},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[g.jsx("h1",{style:{fontSize:32,fontWeight:700,color:"#0f7b6c",marginBottom:8},children:"GolfGang"}),g.jsx("h2",{style:{marginBottom:4,fontSize:20,fontWeight:500},children:"Welcome back"}),g.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)",fontSize:14},children:"Sign in to your GolfGang account"})]}),l&&g.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:l}),g.jsxs("form",{onSubmit:v,children:[g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("label",{children:"Email or username"}),g.jsx("input",{className:"input",type:"text",value:e,onChange:_=>t(_.target.value),placeholder:"you@example.com",required:!0})]}),g.jsxs("div",{style:{marginBottom:20},children:[g.jsx("label",{children:"Password"}),g.jsx("input",{className:"input",type:"password",value:i,onChange:_=>o(_.target.value),placeholder:"Your password",required:!0})]}),g.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px 16px"},disabled:h,type:"submit",children:h?"Signing in…":"Sign in"})]}),g.jsxs("div",{style:{marginTop:20,textAlign:"center",fontSize:14},children:[g.jsx(sn,{to:"/signup",style:{display:"block",marginBottom:8},children:"Create an account"}),g.jsx(sn,{to:"/reset-password",style:{color:"var(--color-text-secondary)"},children:"Forgot password?"})]})]})})}function rN(n=1e4){return new Promise((e,t)=>{if(window.google&&window.google.maps&&window.google.maps.places){e();return}const i=Date.now(),o=setInterval(()=>{window.google&&window.google.maps&&window.google.maps.places?(clearInterval(o),e()):Date.now()-i>n&&(clearInterval(o),t(new Error("Google Maps failed to load within timeout")))},100)})}function KE({onSelect:n,initialValue:e=""}){const t=z.useRef(null),[i,o]=z.useState(e),[l,c]=z.useState(null);return z.useEffect(()=>{let h;return rN().then(()=>{t.current&&(h=new window.google.maps.places.Autocomplete(t.current,{types:["establishment"],fields:["name","formatted_address","place_id","photos"]}),h.addListener("place_changed",()=>{const p=h.getPlace();if(console.log("Place selected:",p),!p||!p.place_id)return;let v="";p.photos&&p.photos.length>0?(v=p.photos[0].getUrl({maxWidth:1e3,maxHeight:600}),console.log("Photo URL:",v)):console.log("No photos available for this place");const _={name:p.name||"",address:p.formatted_address||"",placeId:p.place_id,photoUrl:v};console.log("Payload being sent:",_),o(_.name),n==null||n(_)}),c(null))}).catch(p=>{console.error("Error loading Google Maps:",p),c("Google Maps failed to load. Please refresh the page.")}),()=>{}},[n]),g.jsxs(g.Fragment,{children:[g.jsx("input",{ref:t,className:"input",style:{width:"100%"},placeholder:"Search golf course",value:i,onChange:h=>o(h.target.value)}),l&&g.jsx("p",{style:{color:"var(--danger)",fontSize:12,marginTop:4},children:l})]})}function iN(n=3e3){const e=["#2d6a4f","#40916c","#e9c46a","#f4a261","#e63946"];for(let i=0;i<50;i++){const o=document.createElement("div");o.className="confetti",o.style.left=Math.random()*100+"vw",o.style.background=e[Math.floor(Math.random()*e.length)],o.style.width=Math.random()*10+5+"px",o.style.height=Math.random()*10+5+"px",o.style.animationDuration=Math.random()*2+2+"s",o.style.animationDelay=Math.random()*.5+"s",o.style.animation=`confetti-fall ${Math.random()*2+2}s ease-out forwards`,document.body.appendChild(o),setTimeout(()=>o.remove(),n)}}let k_=null;function Yt(n,e="default",t=3e3){const i=document.querySelector(".toast-notification");i&&(i.remove(),clearTimeout(k_));const o=document.createElement("div");return o.className=`toast-notification toast-notification--${e}`,o.textContent=n,document.body.appendChild(o),requestAnimationFrame(()=>{o.classList.add("show")}),k_=setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>o.remove(),400)},t),o}function sr(n="light"){if("vibrate"in navigator){const e={light:[10],medium:[20],heavy:[30],success:[10,50,10],error:[50,30,50]};navigator.vibrate(e[n]||e.light)}}const cc=n=>n?typeof n=="string"?n:n.status:null;function sN(){const{user:n,isAdmin:e}=jr(),[t,i]=z.useState([]),[o,l]=z.useState(null),[c,h]=z.useState([]),[p,v]=z.useState(!1),[_,T]=z.useState(!1),[S,P]=z.useState(""),[M,$]=z.useState({name:"",address:"",placeId:"",photoUrl:""}),[V,te]=z.useState(""),[re,J]=z.useState(""),[_e,Ne]=z.useState(""),[we,N]=z.useState(!1);z.useEffect(()=>{const H=wE(Or(Ze,"events"),oe=>{const de=oe.docs.map(Ce=>({id:Ce.id,...Ce.data()}));i(de)});return()=>H()},[]);const x=new Date,[C,b]=z.useState(x.getMonth()),[D,j]=z.useState(x.getFullYear()),A=new Date(D,C,1),Qe=A.getDay(),vt=new Date(D,C+1,0).getDate(),_t=()=>{sr("light"),b(H=>H===0?11:H-1),C===0&&j(H=>H-1)},We=()=>{sr("light"),b(H=>H===11?0:H+1),C===11&&j(H=>H+1)},se=H=>{const oe=["th","st","nd","rd"],de=H%100;return H+(oe[(de-20)%10]||oe[de]||oe[0])},Ee=H=>{sr("light");const oe=new Date(D,C,H),de=oe.toISOString().split("T")[0],Ce=G[de]||[];l(oe),h(Ce),v(!0)},ae=()=>{if(!o)return;const H=o.toLocaleDateString("en-AU",{weekday:"long"}),oe=o.getDate(),de=o.toLocaleDateString("en-AU",{month:"long"});P(`⛳ ${H} ${se(oe)} ${de}`),v(!1),T(!0)},L=async()=>{if(!S.trim()||!o)return;N(!0),sr("medium");let H=null;if(V){const[oe,de,Ce]=V.split("-"),Re=new Date(Number(oe),Number(de)-1,Number(Ce),23,59,59);H=Ye.fromDate(Re)}try{await xP(Or(Ze,"events"),{title:S.trim(),date:Ye.fromDate(o),responses:{},courseName:M.name||"",courseAddress:M.address||"",coursePlaceId:M.placeId||"",coursePhotoUrl:M.photoUrl||"",tee:re.trim(),notes:_e.trim(),rsvpDeadline:H,booked:!1,bookedAt:null}),P(""),$({name:"",address:"",placeId:"",photoUrl:""}),J(""),Ne(""),te(""),T(!1),Yt("Event created! ⛳","success")}catch(oe){console.error("Error creating event:",oe),Yt("Failed to create event","error")}N(!1)},G={};t.forEach(H=>{var Ce;const oe=(Ce=H.date)!=null&&Ce.toDate?H.date.toDate():null;if(!oe)return;const de=oe.toISOString().split("T")[0];G[de]||(G[de]=[]),G[de].push(H)});const ge=(H,oe)=>{const de={textDecoration:"none",display:"block",padding:16,borderRadius:"var(--radius-lg)",transition:"transform 0.15s ease, box-shadow 0.15s ease",position:"relative",overflow:"hidden"};return H?{...de,background:"linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",border:"2px solid #4caf50",boxShadow:"0 2px 8px rgba(76, 175, 80, 0.15)"}:{...de,background:"var(--color-surface)",border:"1px solid var(--color-border)",borderLeft:"4px solid #ff9800",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}};return g.jsxs("div",{className:"page",children:[g.jsxs("div",{className:"card",style:{marginBottom:20},children:[g.jsxs("div",{className:"card-header",children:[g.jsxs("div",{children:[g.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:2},children:A.toLocaleDateString("en-AU",{month:"long",year:"numeric"})}),g.jsx("p",{style:{fontSize:13,color:"var(--color-text-secondary)",margin:0},children:"Tap a day to view or create events"})]}),g.jsxs("div",{style:{display:"flex",gap:4},children:[g.jsx("button",{className:"btn btn-ghost btn-sm press-effect",onClick:_t,children:"←"}),g.jsx("button",{className:"btn btn-ghost btn-sm press-effect",onClick:We,children:"→"})]})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4,marginBottom:8},children:["S","M","T","W","T","F","S"].map((H,oe)=>g.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:500,color:"var(--color-text-tertiary)",padding:"4px 0"},children:H},oe))}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},children:[Array.from({length:Qe}).map((H,oe)=>g.jsx("div",{},`empty-${oe}`)),Array.from({length:vt}).map((H,oe)=>{const de=oe+1,Re=new Date(D,C,de).toISOString().split("T")[0],ze=G[Re]||[],ot=x.getDate()===de&&x.getMonth()===C&&x.getFullYear()===D,Z=ze.some(Ve=>Ve.booked),fe=ze.some(Ve=>!Ve.booked),ye=ze.length>0;let xe={};return Z?xe={background:"var(--color-success-soft)"}:fe&&(xe={background:"var(--color-warning-soft)"}),g.jsxs("div",{onClick:()=>Ee(de),className:"calendar-day",style:{aspectRatio:"1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:6,cursor:"pointer",border:ot?"2px solid var(--color-primary)":"1px solid transparent",...xe},children:[g.jsx("div",{style:{fontSize:14,fontWeight:ot?600:400,color:ot?"var(--color-primary)":"var(--color-text)"},children:de}),ye&&g.jsx("div",{style:{width:6,height:6,borderRadius:"50%",marginTop:2,background:Z?"var(--color-success)":"var(--color-warning)"}})]},de)})]}),g.jsxs("div",{className:"calendar-legend",children:[g.jsxs("div",{className:"calendar-legend-item",children:[g.jsx("div",{className:"calendar-legend-dot",style:{background:"#ff9800"}}),g.jsx("span",{children:"Proposed"})]}),g.jsxs("div",{className:"calendar-legend-item",children:[g.jsx("div",{className:"calendar-legend-dot",style:{background:"#4caf50"}}),g.jsx("span",{children:"Booked"})]})]})]}),g.jsx("div",{style:{marginBottom:16},children:g.jsxs("div",{className:"section-header",children:[g.jsx("span",{className:"section-title",children:"Upcoming Events"}),g.jsx("span",{className:"section-count",children:t.length})]})}),t.length===0?g.jsx("div",{className:"card",children:g.jsxs("div",{className:"empty-state",children:[g.jsx("div",{className:"empty-state-icon",children:"🏌️"}),g.jsx("div",{className:"empty-state-title",children:"No events yet"}),g.jsx("p",{children:"Tap a day on the calendar to create one"})]})}):g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[...t].sort((H,oe)=>H.date.toMillis()-oe.date.toMillis()).map(H=>{const oe=H.date.toDate(),de=n&&H.responses?cc(H.responses[n.uid]):null,Ce=H.responses?Object.values(H.responses).filter(Re=>cc(Re)==="available").length:0;return g.jsxs(sn,{to:`/event/${H.id}`,style:ge(H.booked),onMouseEnter:Re=>{Re.currentTarget.style.transform="translateY(-2px)",Re.currentTarget.style.boxShadow=H.booked?"0 6px 16px rgba(76, 175, 80, 0.25)":"0 4px 12px rgba(0,0,0,0.1)"},onMouseLeave:Re=>{Re.currentTarget.style.transform="translateY(0)",Re.currentTarget.style.boxShadow=H.booked?"0 2px 8px rgba(76, 175, 80, 0.15)":"0 1px 3px rgba(0,0,0,0.06)"},children:[H.booked&&g.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:4,background:"#4caf50"}}),g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12,marginBottom:8},children:[g.jsxs("div",{style:{flex:1},children:[g.jsx("span",{style:{fontWeight:600,fontSize:15,color:"var(--color-text)",display:"block",marginBottom:4},children:H.title}),g.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:[oe.toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"}),H.tee&&` • ${H.tee}`]}),H.courseName&&g.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)",marginTop:2},children:["📍 ",H.courseName]})]}),g.jsx("div",{style:{padding:"6px 12px",borderRadius:20,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",whiteSpace:"nowrap",...H.booked?{background:"#4caf50",color:"white"}:{background:"#fff3e0",color:"#e65100",border:"1px solid #ffcc80"}},children:H.booked?"✓ Booked":"Proposed"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:12},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,fontSize:13},children:[g.jsxs("span",{style:{color:"var(--color-text-secondary)",display:"flex",alignItems:"center",gap:4},children:["👥 ",Ce,"/4"]}),de==="available"&&g.jsx("span",{style:{color:"#4caf50",fontWeight:600,display:"flex",alignItems:"center",gap:4},children:"✓ You're in"}),!de&&!H.booked&&g.jsx("span",{style:{color:"#e65100",fontWeight:500},children:"Awaiting your response"})]}),g.jsx("span",{style:{fontSize:18,color:"var(--color-text-tertiary)"},children:"→"})]})]},H.id)})}),p&&g.jsx("div",{className:"modal-backdrop",onClick:()=>v(!1),children:g.jsxs("div",{className:"modal",onClick:H=>H.stopPropagation(),children:[g.jsx("h2",{style:{marginTop:0,marginBottom:16},children:o==null?void 0:o.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"})}),c.length>0?g.jsx("div",{style:{marginBottom:20},className:"stagger-list",children:c.map(H=>{const oe=H.responses?Object.values(H.responses).filter(Ce=>cc(Ce)==="available").length:0,de=n&&H.responses?cc(H.responses[n.uid]):null;return g.jsxs(sn,{to:`/event/${H.id}`,onClick:()=>v(!1),style:{display:"block",padding:14,borderRadius:8,marginBottom:8,textDecoration:"none",color:"inherit",...H.booked?{background:"linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",border:"2px solid #4caf50"}:{background:"var(--color-bg-tertiary)",borderLeft:"4px solid #ff9800"}},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[g.jsx("span",{style:{fontWeight:500},children:H.title}),g.jsx("span",{style:{padding:"4px 10px",borderRadius:12,fontSize:10,fontWeight:700,textTransform:"uppercase",...H.booked?{background:"#4caf50",color:"white"}:{background:"#fff3e0",color:"#e65100"}},children:H.booked?"Booked":"Proposed"})]}),H.tee&&g.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:["🕐 ",H.tee]}),H.courseName&&g.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:["📍 ",H.courseName]}),g.jsxs("div",{style:{marginTop:8,fontSize:12,display:"flex",alignItems:"center",gap:8},children:[g.jsxs("span",{children:["👥 ",oe,"/4"]}),de==="available"&&g.jsx("span",{style:{color:"#4caf50",fontWeight:600},children:"✓ You're in"})]})]},H.id)})}):g.jsxs("div",{style:{padding:24,textAlign:"center",color:"var(--color-text-secondary)",background:"var(--color-bg-tertiary)",borderRadius:8,marginBottom:20},children:[g.jsx("div",{style:{fontSize:32,marginBottom:8},children:"🏌️"}),g.jsx("div",{children:"No events on this day"})]}),g.jsxs("div",{style:{display:"flex",gap:8},children:[e&&g.jsx("button",{className:"btn btn-primary hover-lift press-effect",style:{flex:1},onClick:ae,children:"+ Create Event"}),g.jsx("button",{className:"btn btn-ghost press-effect",style:{flex:e?0:1},onClick:()=>v(!1),children:"Close"})]})]})}),_&&g.jsx("div",{className:"modal-backdrop",children:g.jsxs("div",{className:"modal",children:[g.jsx("h2",{style:{marginTop:0},children:"Create Event"}),g.jsx("p",{style:{color:"var(--color-text-secondary)",marginTop:-4,marginBottom:20,fontSize:14},children:o==null?void 0:o.toLocaleDateString("en-AU",{weekday:"long",month:"long",day:"numeric"})}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[g.jsxs("div",{children:[g.jsx("label",{children:"Event title"}),g.jsx("input",{className:"input",value:S,placeholder:"e.g. Sunday Stableford",onChange:H=>P(H.target.value)})]}),g.jsxs("div",{children:[g.jsx("label",{children:"Course"}),g.jsx(KE,{initialValue:M.name,onSelect:H=>$(H)})]}),g.jsxs("div",{children:[g.jsx("label",{children:"Tee time"}),g.jsx("input",{className:"input",value:re,placeholder:"e.g. 6:30 AM",onChange:H=>J(H.target.value)})]}),g.jsxs("div",{children:[g.jsx("label",{children:"RSVP Deadline (optional)"}),g.jsx("input",{className:"input",type:"date",value:V,onChange:H=>te(H.target.value)})]}),g.jsxs("div",{children:[g.jsx("label",{children:"Notes (optional)"}),g.jsx("textarea",{className:"input",rows:2,value:_e,placeholder:"Any extra details...",onChange:H=>Ne(H.target.value)})]})]}),g.jsxs("div",{style:{display:"flex",gap:8,marginTop:24},children:[g.jsx("button",{className:"btn btn-primary hover-lift press-effect",style:{flex:1},onClick:L,disabled:we||!S.trim(),children:we?"Creating...":"Create Event"}),g.jsx("button",{className:"btn btn-ghost press-effect",onClick:()=>T(!1),children:"Cancel"})]})]})})]})}const A_=n=>n?typeof n=="string"?n:n.status:null;function oN(){const{user:n}=jr(),[e,t]=z.useState([]),[i,o]=z.useState(!0);z.useEffect(()=>{const h=wE(Or(Ze,"events"),p=>{const v=p.docs.map(_=>({id:_.id,..._.data()}));t(v),o(!1)});return()=>h()},[]);const l=e.filter(h=>(h.responses?A_(h.responses[n==null?void 0:n.uid]):null)==="available").sort((h,p)=>h.date.toMillis()-p.date.toMillis()),c=h=>{const p={textDecoration:"none",display:"block",padding:16,borderRadius:"var(--radius-lg)",transition:"transform 0.15s ease, box-shadow 0.15s ease",position:"relative",overflow:"hidden"};return h?{...p,background:"linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",border:"2px solid #4caf50",boxShadow:"0 2px 8px rgba(76, 175, 80, 0.15)"}:{...p,background:"var(--color-surface)",border:"1px solid var(--color-border)",borderLeft:"4px solid #ff9800",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}};return i?g.jsxs("div",{className:"page",children:[g.jsx("div",{style:{marginBottom:20},children:g.jsx("h1",{style:{fontSize:"var(--text-xl)",marginBottom:4},children:"My RSVPs"})}),g.jsx("div",{className:"card",children:g.jsx("div",{style:{padding:20,textAlign:"center",color:"var(--color-text-secondary)"},children:"Loading..."})})]}):g.jsxs("div",{className:"page",children:[g.jsxs("div",{style:{marginBottom:20},children:[g.jsx("h1",{style:{fontSize:"var(--text-xl)",marginBottom:4},children:"My RSVPs"}),g.jsx("p",{style:{color:"var(--color-text-secondary)",fontSize:"var(--text-sm)",margin:0},children:"Events you've said yes to"})]}),l.length===0?g.jsxs("div",{className:"card",style:{textAlign:"center",padding:"40px 20px"},children:[g.jsx("div",{style:{fontSize:48,marginBottom:16},children:"🏌️"}),g.jsx("h2",{style:{fontSize:"var(--text-lg)",marginBottom:8},children:"No RSVPs yet"}),g.jsx("p",{style:{color:"var(--color-text-secondary)",marginBottom:20,maxWidth:280,margin:"0 auto 20px"},children:`When you respond "I'm in" to an event, it'll show up here so you can keep track of your rounds.`}),g.jsx(sn,{to:"/",className:"btn btn-primary",children:"Browse Events"})]}):g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:l.map(h=>{const p=h.date.toDate(),v=h.responses?Object.values(h.responses).filter(_=>A_(_)==="available").length:0;return g.jsxs(sn,{to:`/event/${h.id}`,style:c(h.booked),onMouseEnter:_=>{_.currentTarget.style.transform="translateY(-2px)",_.currentTarget.style.boxShadow=h.booked?"0 6px 16px rgba(76, 175, 80, 0.25)":"0 4px 12px rgba(0,0,0,0.1)"},onMouseLeave:_=>{_.currentTarget.style.transform="translateY(0)",_.currentTarget.style.boxShadow=h.booked?"0 2px 8px rgba(76, 175, 80, 0.15)":"0 1px 3px rgba(0,0,0,0.06)"},children:[h.booked&&g.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:4,background:"#4caf50"}}),g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12,marginBottom:8},children:[g.jsxs("div",{style:{flex:1},children:[g.jsx("span",{style:{fontWeight:600,fontSize:15,color:"var(--color-text)",display:"block",marginBottom:4},children:h.title}),g.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:[p.toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"}),h.tee&&` • ${h.tee}`]}),h.courseName&&g.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)",marginTop:2},children:["📍 ",h.courseName]})]}),g.jsx("div",{style:{padding:"6px 12px",borderRadius:20,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",whiteSpace:"nowrap",...h.booked?{background:"#4caf50",color:"white"}:{background:"#fff3e0",color:"#e65100",border:"1px solid #ffcc80"}},children:h.booked?"✓ Booked":"Proposed"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:12},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,fontSize:13},children:[g.jsxs("span",{style:{color:"var(--color-text-secondary)",display:"flex",alignItems:"center",gap:4},children:["👥 ",v,"/4"]}),g.jsx("span",{style:{color:"#4caf50",fontWeight:600,display:"flex",alignItems:"center",gap:4},children:"✓ You're in"})]}),g.jsx("span",{style:{fontSize:18,color:"var(--color-text-tertiary)"},children:"→"})]})]},h.id)})})]})}/**
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
 */const aN="type.googleapis.com/google.protobuf.Int64Value",lN="type.googleapis.com/google.protobuf.UInt64Value";function QE(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Gc(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Gc(e));if(typeof n=="function"||typeof n=="object")return QE(n,e=>Gc(e));throw new Error("Data cannot be encoded in JSON: "+n)}function oa(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case aN:case lN:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>oa(e)):typeof n=="function"||typeof n=="object"?QE(n,e=>oa(e)):n}/**
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
 */const fm="functions";/**
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
 */const C_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class vn extends dr{constructor(e,t,i){super(`${fm}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,vn.prototype)}}function uN(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Kc(n,e){let t=uN(n),i=t,o;try{const l=e&&e.error;if(l){const c=l.status;if(typeof c=="string"){if(!C_[c])return new vn("internal","internal");t=C_[c],i=c}const h=l.message;typeof h=="string"&&(i=h),o=l.details,o!==void 0&&(o=oa(o))}}catch{}return t==="ok"?null:new vn(t,i,o)}/**
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
 */class cN{constructor(e,t,i,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,gn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||i.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:o}}}/**
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
 */const np="us-central1",dN=/^data: (.*?)(?:\n|$)/;function hN(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new vn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class fN{constructor(e,t,i,o,l=np,c=(...h)=>fetch(...h)){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new cN(e,t,i,o),this.cancelAllRequests=new Promise(h=>{this.deleteService=()=>Promise.resolve(h())});try{const h=new URL(l);this.customDomain=h.origin+(h.pathname==="/"?"":h.pathname),this.region=np}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function pN(n,e,t){const i=Ws(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(up(n.emulatorOrigin),cp("Functions",!0))}function mN(n,e,t){const i=o=>yN(n,e,o,{});return i.stream=(o,l)=>_N(n,e,o,l),i}async function gN(n,e,t,i){t["Content-Type"]="application/json";let o;try{o=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await o.json()}catch{}return{status:o.status,json:l}}async function YE(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function yN(n,e,t,i){const o=n._url(e);return vN(n,o,t,i)}async function vN(n,e,t,i){t=Gc(t);const o={data:t},l=await YE(n,i),c=i.timeout||7e4,h=hN(c),p=await Promise.race([gN(e,o,l,n.fetchImpl),h.promise,n.cancelAllRequests]);if(h.cancel(),!p)throw new vn("cancelled","Firebase Functions instance was deleted.");const v=Kc(p.status,p.json);if(v)throw v;if(!p.json)throw new vn("internal","Response is not valid JSON object.");let _=p.json.data;if(typeof _>"u"&&(_=p.json.result),typeof _>"u")throw new vn("internal","Response is missing data field.");return{data:oa(_)}}function _N(n,e,t,i){const o=n._url(e);return wN(n,o,t,i||{})}async function wN(n,e,t,i){var o;t=Gc(t);const l={data:t},c=await YE(n,i);c["Content-Type"]="application/json",c.Accept="text/event-stream";let h;try{h=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:c,signal:i==null?void 0:i.signal})}catch(P){if(P instanceof Error&&P.name==="AbortError"){const $=new vn("cancelled","Request was cancelled.");return{data:Promise.reject($),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject($)}}}}}}const M=Kc(0,null);return{data:Promise.reject(M),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(M)}}}}}}let p,v;const _=new Promise((P,M)=>{p=P,v=M});(o=i==null?void 0:i.signal)===null||o===void 0||o.addEventListener("abort",()=>{const P=new vn("cancelled","Request was cancelled.");v(P)});const T=h.body.getReader(),S=EN(T,p,v,i==null?void 0:i.signal);return{stream:{[Symbol.asyncIterator](){const P=S.getReader();return{async next(){const{value:M,done:$}=await P.read();return{value:M,done:$}},async return(){return await P.cancel(),{done:!0,value:void 0}}}}},data:_}}function EN(n,e,t,i){const o=(c,h)=>{const p=c.match(dN);if(!p)return;const v=p[1];try{const _=JSON.parse(v);if("result"in _){e(oa(_.result));return}if("message"in _){h.enqueue(oa(_.message));return}if("error"in _){const T=Kc(0,_);h.error(T),t(T);return}}catch(_){if(_ instanceof vn){h.error(_),t(_);return}}},l=new TextDecoder;return new ReadableStream({start(c){let h="";return p();async function p(){if(i!=null&&i.aborted){const v=new vn("cancelled","Request was cancelled");return c.error(v),t(v),Promise.resolve()}try{const{value:v,done:_}=await n.read();if(_){h.trim()&&o(h.trim(),c),c.close();return}if(i!=null&&i.aborted){const S=new vn("cancelled","Request was cancelled");c.error(S),t(S),await n.cancel();return}h+=l.decode(v,{stream:!0});const T=h.split(`
`);h=T.pop()||"";for(const S of T)S.trim()&&o(S.trim(),c);return p()}catch(v){const _=v instanceof vn?v:Kc(0,null);c.error(_),t(_)}}},cancel(){return n.cancel()}})}const R_="@firebase/functions",P_="0.12.9";/**
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
 */const TN="auth-internal",IN="app-check-internal",SN="messaging-internal";function xN(n){const e=(t,{instanceIdentifier:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider(TN),c=t.getProvider(SN),h=t.getProvider(IN);return new fN(o,l,c,h,i)};lr(new $n(fm,e,"PUBLIC").setMultipleInstances(!0)),_n(R_,P_,n),_n(R_,P_,"esm2017")}/**
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
 */function kN(n=Xc(),e=np){const i=Hs(et(n),fm).getImmediate({identifier:e}),o=Y_("functions");return o&&AN(i,...o),i}function AN(n,e,t){pN(et(n),e,t)}function CN(n,e,t){return mN(et(n),e)}xN();function RN({placeId:n,style:e={},alt:t="Place photo"}){const[i,o]=z.useState(null),[l,c]=z.useState(!0);return z.useEffect(()=>{if(!n){o(null),c(!1);return}if(!window.google||!window.google.maps||!window.google.maps.places){console.warn("Google Maps not loaded"),o(null),c(!1);return}c(!0);const h=document.createElement("div");new window.google.maps.places.PlacesService(h).getDetails({placeId:n,fields:["photos"]},(v,_)=>{var T;if(_===window.google.maps.places.PlacesServiceStatus.OK&&((T=v==null?void 0:v.photos)==null?void 0:T.length)>0){const S=v.photos[0].getUrl({maxWidth:1e3,maxHeight:600});o(S)}else o(null);c(!1)})},[n]),l||!i?g.jsx("div",{style:{...e,background:"linear-gradient(135deg, var(--color-surface-soft) 0%, var(--color-surface) 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:l&&g.jsx("span",{style:{color:"var(--color-text-muted)",fontSize:12},children:"Loading..."})}):g.jsx("img",{src:i,alt:t,style:e,onError:h=>{h.target.style.display="none"}})}function PN(n){return new Promise((e,t)=>{if(!window.google||!window.google.maps){t("Google Maps JS not loaded");return}new window.google.maps.places.PlacesService(document.createElement("div")).getDetails({placeId:n,fields:["geometry"]},(o,l)=>{l===window.google.maps.places.PlacesServiceStatus.OK?e(o.geometry.location.toJSON()):t(l)})})}async function bN(n,e){const t=`https://api.open-meteo.com/v1/forecast?latitude=${n}&longitude=${e}&hourly=temperature_2m,precipitation_probability,windspeed_10m,cloudcover&daily=temperature_2m_max,precipitation_probability_max,weathercode&timezone=auto`;return await(await fetch(t)).json()}function NN(n,e,t,i){let o="⛳",l="Good";n>=8?(o="☀️",l="Great conditions"):n>=6?(o="⛅",l="Good conditions"):n>=4?(o="🌥️",l="Fair conditions"):(o="🌧️",l="Challenging");const c=[];return t>50&&c.push("rain likely"),i>25&&c.push("windy"),e>35&&c.push("hot"),e<10&&c.push("cold"),{icon:o,label:l,warnings:c}}function DN(n,e){const t=new Date,i=new Date(t.getFullYear(),t.getMonth(),t.getDate()),o=n!=null&&n.toDate?n.toDate():new Date(n),l=new Date(o.getFullYear(),o.getMonth(),o.getDate()),c=Math.round((l-i)/(1e3*60*60*24));let h=9;if(e){const[v]=e.split(":").map(Number);isNaN(v)||(h=v)}return Math.max(0,c*24+h)}function ON({placeId:n,date:e,tee:t}){const[i,o]=z.useState(null),[l,c]=z.useState(null),[h,p]=z.useState(!1),[v,_]=z.useState(!1),T=e!=null&&e.toDate?e.toDate().toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"}):null;if(z.useEffect(()=>{if(!n)return;async function x(){var C,b;p(!0),c(null);try{const D=await PN(n);if(!D){c("Could not get course location");return}const j=await bN(D.lat,D.lng),A=DN(e,t),Qe=((b=(C=j.hourly)==null?void 0:C.temperature_2m)==null?void 0:b.length)||0;if(A>=Qe){c("Forecast not available for this date");return}o({coords:D,weather:j,idx:A})}catch(D){console.error("Failed to load golf conditions:",D),c("Could not load conditions")}finally{p(!1)}}x()},[n,t,e]),!n)return null;const S={padding:"14px 16px",background:"var(--color-bg-secondary)",borderRadius:"var(--radius-lg)",cursor:"pointer",transition:"background 0.15s ease"};if(h)return g.jsx("div",{style:S,children:g.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:"Loading weather..."})});if(l)return g.jsx("div",{style:S,children:g.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:l})});if(!i)return null;const{weather:P,idx:M}=i,$=Math.round(P.hourly.temperature_2m[M]),V=P.hourly.precipitation_probability[M],te=Math.round(P.hourly.windspeed_10m[M]),re=P.hourly.cloudcover[M],J=10-(Math.abs($-22)*.1+V*.05+te*.05+re*.01),_e=Math.max(0,Math.min(10,J)),{icon:Ne,label:we,warnings:N}=NN(_e,$,V,te);return g.jsxs("div",{style:S,onClick:()=>_(!v),children:[g.jsxs("div",{style:{fontSize:11,color:"var(--color-text-tertiary)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.04em",fontWeight:500},children:["Weather ",T&&`• ${T}`," ",t&&`@ ${t}`]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("span",{style:{fontSize:24},children:Ne}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:15,fontWeight:500,color:"var(--color-text)"},children:we}),g.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:[$,"°C • ",te," km/h wind • ",V,"% rain"]})]})]}),g.jsx("span",{style:{fontSize:12,color:"var(--color-text-tertiary)",transform:v?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:"▼"})]}),N.length>0&&g.jsxs("div",{style:{fontSize:12,color:"var(--color-danger)",marginTop:8,display:"flex",alignItems:"center",gap:4},children:["⚠️ ",N.join(", ")]}),v&&g.jsxs("div",{style:{marginTop:12,paddingTop:12,borderTop:"1px solid var(--color-border)",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px 20px",fontSize:13},children:[g.jsxs("div",{children:[g.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Temperature"}),g.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[$,"°C"]})]}),g.jsxs("div",{children:[g.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Rain chance"}),g.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[V,"%"]})]}),g.jsxs("div",{children:[g.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Wind"}),g.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[te," km/h"]})]}),g.jsxs("div",{children:[g.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Cloud cover"}),g.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[re,"%"]})]})]})]})}function VN({isOpen:n,onClose:e,onSubmit:t,existingPreferences:i={}}){const[o,l]=z.useState({transport:i.transport||null,format:i.format||null,teeTime:i.teeTime||null,coursePreference:i.coursePreference||""}),[c,h]=z.useState(!1);if(!n)return null;const p=async(_=!1)=>{h(!0);try{await t(_?{}:o)}finally{h(!1)}},v=_=>{_.target===_.currentTarget&&e()};return g.jsx("div",{className:"modal-backdrop",onClick:v,children:g.jsxs("div",{className:"modal",style:{maxWidth:420},children:[g.jsxs("div",{style:{marginBottom:20},children:[g.jsx("h2",{style:{fontSize:20,marginBottom:4},children:"You're in! 🎉"}),g.jsx("p",{style:{fontSize:14,color:"var(--color-text-secondary)",margin:0},children:"Share your preferences for this round (optional)"})]}),g.jsxs("div",{style:{marginBottom:20},children:[g.jsx("label",{style:{display:"block",fontSize:13,fontWeight:500,marginBottom:8,color:"var(--color-text)"},children:"How do you want to get around?"}),g.jsxs("div",{style:{display:"flex",gap:8},children:[g.jsxs("button",{type:"button",onClick:()=>l(_=>({..._,transport:_.transport==="cart"?null:"cart"})),style:{flex:1,padding:"12px 16px",borderRadius:8,border:`2px solid ${o.transport==="cart"?"var(--color-primary)":"var(--color-border)"}`,background:o.transport==="cart"?"var(--color-primary-soft)":"var(--color-surface)",color:o.transport==="cart"?"var(--color-primary)":"var(--color-text)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[g.jsx("span",{style:{fontSize:24},children:"🛺"}),g.jsx("span",{style:{fontSize:13,fontWeight:500},children:"Cart"})]}),g.jsxs("button",{type:"button",onClick:()=>l(_=>({..._,transport:_.transport==="walk"?null:"walk"})),style:{flex:1,padding:"12px 16px",borderRadius:8,border:`2px solid ${o.transport==="walk"?"var(--color-primary)":"var(--color-border)"}`,background:o.transport==="walk"?"var(--color-primary-soft)":"var(--color-surface)",color:o.transport==="walk"?"var(--color-primary)":"var(--color-text)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[g.jsx("span",{style:{fontSize:24},children:"🚶"}),g.jsx("span",{style:{fontSize:13,fontWeight:500},children:"Walk"})]})]})]}),g.jsxs("div",{style:{marginBottom:20},children:[g.jsx("label",{style:{display:"block",fontSize:13,fontWeight:500,marginBottom:8,color:"var(--color-text)"},children:"Preferred format?"}),g.jsxs("div",{style:{display:"flex",gap:8},children:[g.jsxs("button",{type:"button",onClick:()=>l(_=>({..._,format:_.format==="scramble"?null:"scramble"})),style:{flex:1,padding:"12px 16px",borderRadius:8,border:`2px solid ${o.format==="scramble"?"var(--color-primary)":"var(--color-border)"}`,background:o.format==="scramble"?"var(--color-primary-soft)":"var(--color-surface)",color:o.format==="scramble"?"var(--color-primary)":"var(--color-text)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[g.jsx("span",{style:{fontSize:24},children:"👥"}),g.jsx("span",{style:{fontSize:13,fontWeight:500},children:"Scramble"})]}),g.jsxs("button",{type:"button",onClick:()=>l(_=>({..._,format:_.format==="stroke"?null:"stroke"})),style:{flex:1,padding:"12px 16px",borderRadius:8,border:`2px solid ${o.format==="stroke"?"var(--color-primary)":"var(--color-border)"}`,background:o.format==="stroke"?"var(--color-primary-soft)":"var(--color-surface)",color:o.format==="stroke"?"var(--color-primary)":"var(--color-text)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[g.jsx("span",{style:{fontSize:24},children:"🏌️"}),g.jsx("span",{style:{fontSize:13,fontWeight:500},children:"Stroke Play"})]})]})]}),g.jsxs("div",{style:{marginBottom:20},children:[g.jsx("label",{style:{display:"block",fontSize:13,fontWeight:500,marginBottom:8,color:"var(--color-text)"},children:"Preferred tee time?"}),g.jsxs("div",{style:{display:"flex",gap:8},children:[g.jsxs("button",{type:"button",onClick:()=>l(_=>({..._,teeTime:_.teeTime==="morning"?null:"morning"})),style:{flex:1,padding:"10px 12px",borderRadius:8,border:`2px solid ${o.teeTime==="morning"?"var(--color-primary)":"var(--color-border)"}`,background:o.teeTime==="morning"?"var(--color-primary-soft)":"var(--color-surface)",color:o.teeTime==="morning"?"var(--color-primary)":"var(--color-text)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[g.jsx("span",{style:{fontSize:20},children:"🌅"}),g.jsx("span",{style:{fontSize:12,fontWeight:500},children:"Morning"})]}),g.jsxs("button",{type:"button",onClick:()=>l(_=>({..._,teeTime:_.teeTime==="midday"?null:"midday"})),style:{flex:1,padding:"10px 12px",borderRadius:8,border:`2px solid ${o.teeTime==="midday"?"var(--color-primary)":"var(--color-border)"}`,background:o.teeTime==="midday"?"var(--color-primary-soft)":"var(--color-surface)",color:o.teeTime==="midday"?"var(--color-primary)":"var(--color-text)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[g.jsx("span",{style:{fontSize:20},children:"☀️"}),g.jsx("span",{style:{fontSize:12,fontWeight:500},children:"Midday"})]}),g.jsxs("button",{type:"button",onClick:()=>l(_=>({..._,teeTime:_.teeTime==="twilight"?null:"twilight"})),style:{flex:1,padding:"10px 12px",borderRadius:8,border:`2px solid ${o.teeTime==="twilight"?"var(--color-primary)":"var(--color-border)"}`,background:o.teeTime==="twilight"?"var(--color-primary-soft)":"var(--color-surface)",color:o.teeTime==="twilight"?"var(--color-primary)":"var(--color-text)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[g.jsx("span",{style:{fontSize:20},children:"🌇"}),g.jsx("span",{style:{fontSize:12,fontWeight:500},children:"Twilight"})]})]})]}),g.jsxs("div",{style:{marginBottom:24},children:[g.jsx("label",{style:{display:"block",fontSize:13,fontWeight:500,marginBottom:8,color:"var(--color-text)"},children:"Course preference or suggestion?"}),g.jsx("input",{type:"text",className:"input",placeholder:"e.g. Somewhere with a good 19th hole...",value:o.coursePreference,onChange:_=>l(T=>({...T,coursePreference:_.target.value})),style:{fontSize:14}})]}),g.jsxs("div",{style:{display:"flex",gap:10},children:[g.jsx("button",{className:"btn btn-ghost",onClick:()=>p(!0),disabled:c,style:{flex:1},children:"Skip"}),g.jsx("button",{className:"btn btn-primary hover-lift",onClick:()=>p(!1),disabled:c,style:{flex:2},children:c?"Saving...":"Confirm"})]})]})})}function b_(n,e){var S;if(!n)return"";const t=(S=n.date)!=null&&S.toDate?n.date.toDate():null,i=n.tee||"",o=n.courseName||"",l=n.notes||"";let c=t?new Date(t):new Date;if(i){const[P,M]=i.split(":").map($=>parseInt($,10));Number.isNaN(P)||c.setHours(P),Number.isNaN(M)||c.setMinutes(M)}const h=new Date(c.getTime()+4.5*60*60*1e3);function p(P){const M=P.getUTCFullYear(),$=String(P.getUTCMonth()+1).padStart(2,"0"),V=String(P.getUTCDate()).padStart(2,"0"),te=String(P.getUTCHours()).padStart(2,"0"),re=String(P.getUTCMinutes()).padStart(2,"0"),J=String(P.getUTCSeconds()).padStart(2,"0");return`${M}${$}${V}T${te}${re}${J}Z`}const v=`${p(c)}/${p(h)}`,_=`⛳ ${i||"Golf"} - ${o||"Golf Round"}`;return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:_,dates:v,details:l?`${l}

Event: ${e}`:`Event: ${e}`,location:o}).toString()}`}function jN(n,e){return n?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e||"Golf Course")}&query_place_id=${n}`:e?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`:null}function LN(){const{id:n}=BI(),e=$s(),{user:t,isAdmin:i}=jr(),[o,l]=z.useState(null),[c,h]=z.useState({}),[p,v]=z.useState(null),[_,T]=z.useState(!0),[S,P]=z.useState(!1),[M,$]=z.useState(!1),[V,te]=z.useState(!1),[re,J]=z.useState(!1),[_e,Ne]=z.useState(!1),[we,N]=z.useState({title:"",notes:"",courseName:"",courseAddress:"",coursePlaceId:"",coursePhotoUrl:"",tee:"",rsvpDeadline:""}),[x,C]=z.useState([]),[b,D]=z.useState(!0),j=4;z.useEffect(()=>{async function Z(){try{const ye=Lt(Ze,"events",n),xe=await im(ye);if(!xe.exists()){e("/");return}const Ve=xe.data();l({id:xe.id,...Ve});const Je=Ve.responses||{};if(h(Je),t){const wt=Je[t.uid];v(wt?typeof wt=="string"?wt:wt.status:null)}N({title:Ve.title||"",notes:Ve.notes||"",courseName:Ve.courseName||"",courseAddress:Ve.courseAddress||"",coursePlaceId:Ve.coursePlaceId||"",coursePhotoUrl:Ve.coursePhotoUrl||"",tee:Ve.tee||"",rsvpDeadline:Ve.rsvpDeadline?Ve.rsvpDeadline.toDate().toISOString().slice(0,10):""})}catch(ye){console.error("Error loading event",ye)}finally{T(!1)}}async function fe(){try{const ye=Or(Ze,"users"),Ve=(await Fs(ye)).docs.map(Je=>({id:Je.id,...Je.data()}));C(Ve)}catch(ye){console.error("Error loading users",ye)}finally{D(!1)}}Z(),fe()},[n,e,t]);async function A(Z,fe={}){if(!(!t||!o)){P(!0),sr("light");try{const ye=Lt(Ze,"events",o.id),xe=c[t.uid],Ve=typeof xe=="object"?xe.updatedAt:null,Je={...c,[t.uid]:Z===null?null:{status:Z,preferences:fe,updatedAt:Ve&&(xe==null?void 0:xe.status)==="available"?Ve:new Date().toISOString()}};await or(ye,{responses:Je}),h(Je),v(Z),Z==="available"?Yt("You're in! ⛳","success"):Z==="unavailable"&&Yt("Response saved","default")}catch(ye){console.error("Error updating response",ye),Yt("Failed to save response","error")}finally{P(!1),Ne(!1)}}}const Qe=async Z=>{if(!o||!Z)return;sr("medium");const fe=Lt(Ze,"events",o.id),ye={...c};delete ye[Z],await or(fe,{responses:ye}),h(ye),Z===(t==null?void 0:t.uid)&&v(null),Yt("Player removed","default")},vt=async()=>{if(!o)return;sr("success");const Z=Lt(Ze,"events",n);await or(Z,{booked:!0,bookedAt:new Date().toISOString()}),l(fe=>fe&&{...fe,booked:!0,bookedAt:new Date().toISOString()}),iN(),Yt("Round confirmed! ⛳🎉","success")},_t=async()=>{if(!o)return;sr("medium");const Z=Lt(Ze,"events",n);await or(Z,{booked:!1,bookedAt:null}),l(fe=>fe&&{...fe,booked:!1,bookedAt:null}),Yt("Booking removed","default")},We=async()=>{if(o){J(!0),sr("light");try{const Z=kN(sa,"us-central1"),ye=await CN(Z,"triggerRsvpReminder")({eventId:o.id});Yt(ye.data.message||"Reminders sent! 📬","success")}catch(Z){console.error("Error sending reminder:",Z),Yt("Failed to send reminder","error")}finally{J(!1)}}};async function se(){if(o)try{const Z=Lt(Ze,"events",o.id);let fe={title:we.title||o.title,notes:we.notes,courseName:we.courseName,courseAddress:we.courseAddress,coursePlaceId:we.coursePlaceId,coursePhotoUrl:we.coursePhotoUrl,tee:we.tee,rsvpDeadline:we.rsvpDeadline?Ye.fromDate(new Date(we.rsvpDeadline+"T23:59:59")):null};await or(Z,fe),l(ye=>ye&&{...ye,...fe}),$(!1),Yt("Changes saved ✓","success")}catch(Z){console.error("Error saving edits",Z),Yt("Could not save changes","error")}}async function Ee(){if(!(!o||!window.confirm("Delete this event?"))){sr("heavy");try{await _E(Lt(Ze,"events",o.id)),Yt("Event deleted","default"),e("/")}catch(Z){console.error("Error deleting event",Z),Yt("Failed to delete","error")}}}async function ae(){var wt;if(!o)return;sr("light");const Z=(wt=o.date)!=null&&wt.toDate?o.date.toDate():null,fe=(Z==null?void 0:Z.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"}))||"",xe=`${window.location.origin+(window.location.pathname.includes("/golfgang")?"/golfgang":"")}/event/${o.id}`,Ve=H.map(En=>Re(En).toLowerCase()).join(", ");let Je=`⛳ Golf - ${o.booked?"Booked":"Proposed"}!
`;fe&&(Je+=`📅 ${fe}
`),o.tee&&(Je+=`🕒 ${o.tee}
`),o.courseName&&(Je+=`📍 ${o.courseName}
`),Ve&&(Je+=`🏌️ ${Ve}
`),Je+=`🔗 RSVP here: ${xe}`;try{await navigator.clipboard.writeText(Je),Yt("Copied to clipboard! 📋","success")}catch{Yt("Could not copy","error")}}if(_||b)return g.jsx("div",{className:"page",children:g.jsxs("div",{className:"card",style:{maxWidth:400,margin:"3rem auto",textAlign:"center"},children:[g.jsx("div",{className:"skeleton",style:{height:24,width:"60%",margin:"0 auto 12px"}}),g.jsx("div",{className:"skeleton",style:{height:16,width:"40%",margin:"0 auto"}})]})});if(!o)return g.jsx("div",{className:"page",children:g.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto"},children:"Event not found."})});const L=Z=>Z?typeof Z=="string"?Z:Z.status:null,G=Z=>!Z||typeof Z=="string"?{}:Z.preferences||{},ge=Object.entries(c).filter(([Z,fe])=>L(fe)==="available").sort(([,Z],[,fe])=>{const ye=typeof Z=="object"&&(Z!=null&&Z.updatedAt)?new Date(Z.updatedAt).getTime():0,xe=typeof fe=="object"&&(fe!=null&&fe.updatedAt)?new Date(fe.updatedAt).getTime():0;return ye-xe}).map(([Z])=>Z),H=ge.slice(0,j),oe=ge.slice(j),de=t&&oe.includes(t.uid),Ce=t&&H.includes(t.uid),Re=Z=>{var ye;const fe=x.find(xe=>xe.id===Z);return(fe==null?void 0:fe.username)||((ye=fe==null?void 0:fe.email)==null?void 0:ye.split("@")[0])||"Unknown"},ze=jN(o.coursePlaceId,o.courseName),ot=o.coursePlaceId||o.courseName;return g.jsxs("div",{className:"page",style:{display:"flex",flexDirection:"column",gap:16},children:[g.jsxs("div",{className:"card simple",style:{padding:0,overflow:"hidden"},children:[ot?g.jsxs("div",{style:{position:"relative",height:180,background:"var(--color-bg-tertiary)",overflow:"hidden"},children:[g.jsx(RN,{placeId:o.coursePlaceId,alt:o.courseName||"Course",style:{width:"100%",height:"100%",objectFit:"cover"}}),g.jsx("div",{style:{position:"absolute",top:12,right:12,display:"flex",gap:8},children:g.jsxs("span",{className:`status-badge ${o.booked?"status-badge--booked":"status-badge--proposed"}`,children:[g.jsx("span",{className:"status-badge--dot"}),o.booked?"Booked":"Proposed"]})})]}):g.jsxs("div",{style:{position:"relative",height:120,background:"linear-gradient(135deg, var(--color-fairway) 0%, var(--color-fairway-light) 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:[g.jsx("span",{style:{fontSize:48,opacity:.3},children:"⛳"}),g.jsx("div",{style:{position:"absolute",top:12,right:12,display:"flex",gap:8},children:g.jsxs("span",{className:`status-badge ${o.booked?"status-badge--booked":"status-badge--proposed"}`,children:[g.jsx("span",{className:"status-badge--dot"}),o.booked?"Booked":"Proposed"]})})]}),g.jsxs("div",{style:{padding:20},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12},children:[g.jsx("div",{style:{flex:1},children:M?g.jsx("input",{className:"input",value:we.title,onChange:Z=>N(fe=>({...fe,title:Z.target.value})),placeholder:"Event title",style:{fontSize:18,fontWeight:600,marginBottom:8}}):g.jsx("h1",{style:{fontSize:22,marginBottom:4},children:o.title})}),i&&g.jsxs("div",{style:{position:"relative"},children:[M?g.jsxs("div",{style:{display:"flex",gap:6},children:[g.jsx("button",{className:"btn btn-primary btn-sm hover-lift press-effect",onClick:se,children:"Save"}),g.jsx("button",{className:"btn btn-ghost btn-sm press-effect",onClick:()=>$(!1),children:"Cancel"})]}):g.jsx("button",{className:"btn btn-ghost btn-sm press-effect",onClick:()=>te(!V),children:"•••"}),V&&g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{position:"fixed",inset:0,zIndex:100},onClick:()=>te(!1)}),g.jsxs("div",{className:"dropdown-menu",style:{zIndex:101},children:[g.jsx("button",{className:"dropdown-item",onClick:()=>{$(!0),te(!1)},children:"✏️ Edit"}),g.jsx("button",{className:"dropdown-item",onClick:()=>{ae(),te(!1)},children:"📤 Share"}),o.booked&&g.jsx("button",{className:"dropdown-item",onClick:()=>{window.open(b_(o,window.location.href),"_blank"),te(!1)},children:"📅 Add to Calendar"}),g.jsx("button",{className:"dropdown-item",onClick:()=>{o.booked?_t():vt(),te(!1)},children:o.booked?"↩️ Unmark Booked":"✅ Mark Booked"}),!o.booked&&g.jsx("button",{className:"dropdown-item",onClick:()=>{We(),te(!1)},disabled:re,children:re?"🔔 Sending...":"🔔 Send RSVP Reminder"}),g.jsx("div",{className:"dropdown-divider"}),g.jsx("button",{className:"dropdown-item dropdown-item--danger",onClick:()=>{Ee(),te(!1)},children:"🗑️ Delete"})]})]})]})]}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:M?g.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:12},children:[g.jsxs("div",{children:[g.jsx("label",{children:"Course"}),g.jsx(KE,{initialValue:we.courseName,onSelect:Z=>N(fe=>({...fe,courseName:Z.name,courseAddress:Z.address,coursePlaceId:Z.placeId,coursePhotoUrl:Z.photoUrl}))})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[g.jsxs("div",{children:[g.jsx("label",{children:"Tee Time"}),g.jsx("input",{className:"input",type:"time",value:we.tee,onChange:Z=>N(fe=>({...fe,tee:Z.target.value}))})]}),g.jsxs("div",{children:[g.jsx("label",{children:"RSVP Deadline"}),g.jsx("input",{className:"input",type:"date",value:we.rsvpDeadline,onChange:Z=>N(fe=>({...fe,rsvpDeadline:Z.target.value}))})]})]}),g.jsxs("div",{children:[g.jsx("label",{children:"Notes"}),g.jsx("textarea",{className:"input",rows:2,value:we.notes,onChange:Z=>N(fe=>({...fe,notes:Z.target.value}))})]})]}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[g.jsx("span",{style:{fontSize:16},children:"📍"}),o.courseName?ze?g.jsx("a",{href:ze,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary)",textDecoration:"none"},children:o.courseName}):g.jsx("span",{children:o.courseName}):g.jsx("span",{style:{color:"var(--color-text-tertiary)",fontStyle:"italic"},children:"Course TBA"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[g.jsx("span",{style:{fontSize:16},children:"🕐"}),o.tee?g.jsx("span",{children:o.tee}):g.jsx("span",{style:{color:"var(--color-text-tertiary)",fontStyle:"italic"},children:"Tee time TBA"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[g.jsx("span",{style:{fontSize:16},children:"👥"}),g.jsxs("span",{children:[H.length,"/",j]})]}),o.rsvpDeadline&&g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[g.jsx("span",{style:{fontSize:16},children:"📅"}),g.jsxs("span",{children:["RSVP by ",o.rsvpDeadline.toDate().toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"})]})]})]})}),!M&&o.notes&&g.jsx("p",{style:{marginTop:12,fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.5},children:o.notes}),!M&&o.coursePlaceId&&o.tee&&g.jsx("div",{style:{marginTop:16},children:g.jsx(ON,{placeId:o.coursePlaceId,tee:o.tee,date:o.date})}),!M&&(!o.coursePlaceId||!o.tee)&&i&&g.jsxs("div",{style:{marginTop:16,padding:"12px 16px",background:"var(--color-warning-soft)",borderRadius:8,fontSize:13,color:"var(--color-warning)",display:"flex",alignItems:"center",gap:8},children:[g.jsx("span",{children:"💡"}),g.jsx("span",{children:!o.coursePlaceId&&!o.tee?"Add a course and tee time to see weather conditions":o.coursePlaceId?"Add a tee time to see weather conditions":"Add a course to see weather conditions"}),g.jsx("button",{className:"btn btn-ghost btn-sm",style:{marginLeft:"auto",padding:"4px 10px"},onClick:()=>$(!0),children:"Edit"})]})]})]}),!M&&g.jsx("div",{className:"card rsvp-card",children:o.booked?g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("span",{style:{fontSize:20},children:"🔒"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:500},children:"RSVPs closed"}),g.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:"This round is booked"})]}),Ce&&g.jsx("button",{className:"btn btn-primary btn-sm hover-lift press-effect",style:{marginLeft:"auto"},onClick:()=>window.open(b_(o,window.location.href),"_blank"),children:"📅 Add to Calendar"})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{marginBottom:12,fontWeight:500},children:"Are you in?"}),H.length>=j&&!p&&g.jsx("div",{style:{marginBottom:12,padding:"8px 12px",background:"var(--color-warning-soft)",borderRadius:6,fontSize:13,color:"var(--color-warning)"},children:"Group is full — you'll be added to the reserve list"}),g.jsxs("div",{className:"rsvp-buttons",children:[g.jsx("button",{className:`rsvp-btn rsvp-btn--available ${p==="available"?"active":""}`,onClick:()=>{p==="available"?A(null):Ne(!0)},disabled:S,children:S&&p==="available"?"...":"✓ I'm in"}),g.jsx("button",{className:`rsvp-btn rsvp-btn--unavailable ${p==="unavailable"?"active":""}`,onClick:()=>A(p==="unavailable"?null:"unavailable"),disabled:S,children:S&&p==="unavailable"?"...":"✗ Can't make it"})]})]})}),p&&!M&&g.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:p==="available"?de?"var(--color-warning-soft)":"var(--color-success-soft)":"var(--color-bg-secondary)",display:"flex",alignItems:"center",gap:10,animation:"fade-up 0.3s ease-out"},children:[g.jsx("span",{style:{fontSize:18},children:p==="available"?de?"🔔":"✓":"✗"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:500,fontSize:14},children:p==="available"?de?"You're on the reserve list":"You're in!":"You declined"}),de&&g.jsxs("div",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:["Position ",oe.indexOf(t.uid)+1," in queue"]})]}),p==="available"&&!o.booked&&g.jsx("button",{className:"btn btn-ghost btn-sm press-effect",onClick:()=>Ne(!0),style:{fontSize:12},children:"Edit preferences"})]}),g.jsx(VN,{isOpen:_e,onClose:()=>Ne(!1),onSubmit:Z=>A("available",Z),existingPreferences:t?G(c[t.uid]):{}}),g.jsxs("div",{className:"card",children:[g.jsxs("div",{className:"section-header",children:[g.jsx("span",{className:"section-title",children:"Players"}),g.jsxs("span",{className:"section-count",children:[H.length,"/",j]})]}),H.length===0?g.jsxs("div",{className:"empty-state",style:{padding:"24px 0"},children:[g.jsx("div",{style:{fontSize:32,marginBottom:8},children:"🏌️"}),g.jsx("div",{children:"No one has responded yet"})]}):g.jsxs(g.Fragment,{children:[(()=>{const Z=H.map(Ge=>G(c[Ge])),fe=Z.filter(Ge=>Ge.transport==="cart").length,ye=Z.filter(Ge=>Ge.transport==="walk").length,xe=Z.filter(Ge=>Ge.format==="scramble").length,Ve=Z.filter(Ge=>Ge.format==="stroke").length,Je=Z.filter(Ge=>Ge.teeTime==="morning").length,wt=Z.filter(Ge=>Ge.teeTime==="midday").length,En=Z.filter(Ge=>Ge.teeTime==="twilight").length,hr=Z.filter(Ge=>Ge.coursePreference).map(Ge=>Ge.coursePreference);return fe+ye+xe+Ve+Je+wt+En>0||hr.length>0?g.jsxs("div",{style:{padding:"12px 14px",background:"var(--color-bg-secondary)",borderRadius:8,marginBottom:16,fontSize:13},children:[g.jsx("div",{style:{fontSize:11,fontWeight:500,color:"var(--color-text-tertiary)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},children:"Group Preferences"}),g.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:[(fe>0||ye>0)&&g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("span",{children:"🛺"}),g.jsxs("span",{style:{color:"var(--color-text-secondary)"},children:[fe>0&&`${fe} cart`,fe>0&&ye>0&&" · ",ye>0&&`${ye} walk`]})]}),(xe>0||Ve>0)&&g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("span",{children:"🏌️"}),g.jsxs("span",{style:{color:"var(--color-text-secondary)"},children:[xe>0&&`${xe} scramble`,xe>0&&Ve>0&&" · ",Ve>0&&`${Ve} stroke`]})]}),(Je>0||wt>0||En>0)&&g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("span",{children:"🕐"}),g.jsxs("span",{style:{color:"var(--color-text-secondary)"},children:[Je>0&&`${Je} morning`,Je>0&&(wt>0||En>0)&&" · ",wt>0&&`${wt} midday`,wt>0&&En>0&&" · ",En>0&&`${En} twilight`]})]})]}),hr.length>0&&g.jsxs("div",{style:{marginTop:8,color:"var(--color-text-secondary)"},children:[g.jsx("span",{style:{color:"var(--color-text-tertiary)"},children:"Course suggestions: "}),hr.join(", ")]})]}):null})(),g.jsx("div",{className:"player-list stagger-list",children:H.map(Z=>{const fe=Z===(t==null?void 0:t.uid),ye=G(c[Z]),xe=ye.transport||ye.format||ye.teeTime||ye.coursePreference;return g.jsxs("div",{className:"player-item",style:{flexDirection:"column",alignItems:"stretch",gap:8},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsxs("div",{className:"player-info",children:[g.jsx("div",{className:`player-avatar ${fe?"player-avatar--you":""}`,children:Re(Z).charAt(0).toUpperCase()}),g.jsxs("span",{className:"player-name",children:[Re(Z),fe&&g.jsx("span",{className:"player-badge",children:"You"})]})]}),i&&g.jsx("button",{className:"btn btn-ghost btn-sm press-effect",onClick:()=>Qe(Z),children:"Remove"})]}),xe&&g.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginLeft:46,fontSize:12},children:[ye.transport&&g.jsx("span",{style:{padding:"2px 8px",background:"var(--color-bg-secondary)",borderRadius:12,color:"var(--color-text-secondary)"},children:ye.transport==="cart"?"🛺 Cart":"🚶 Walk"}),ye.format&&g.jsx("span",{style:{padding:"2px 8px",background:"var(--color-bg-secondary)",borderRadius:12,color:"var(--color-text-secondary)"},children:ye.format==="scramble"?"👥 Scramble":"🏌️ Stroke"}),ye.teeTime&&g.jsx("span",{style:{padding:"2px 8px",background:"var(--color-bg-secondary)",borderRadius:12,color:"var(--color-text-secondary)"},children:ye.teeTime==="morning"?"🌅 Morning":ye.teeTime==="midday"?"☀️ Midday":"🌇 Twilight"}),ye.coursePreference&&g.jsxs("span",{style:{padding:"2px 8px",background:"var(--color-primary-soft)",borderRadius:12,color:"var(--color-primary)",maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:ye.coursePreference,children:["📍 ",ye.coursePreference]})]})]},Z)})})]}),oe.length>0&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"divider"}),g.jsxs("div",{className:"section-header",children:[g.jsx("span",{className:"section-title",children:"Reserve List"}),g.jsx("span",{className:"section-count",children:oe.length})]}),g.jsx("div",{className:"player-list stagger-list",children:oe.map((Z,fe)=>{const ye=Z===(t==null?void 0:t.uid),xe=G(c[Z]),Ve=xe.transport||xe.format||xe.teeTime||xe.coursePreference;return g.jsxs("div",{className:"player-item",style:{flexDirection:"column",alignItems:"stretch",gap:8,opacity:.7},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsxs("div",{className:"player-info",children:[g.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"var(--color-warning-soft)",color:"var(--color-warning)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:600},children:fe+1}),g.jsxs("span",{className:"player-name",children:[Re(Z),ye&&g.jsx("span",{className:"player-badge",style:{background:"var(--color-warning)"},children:"You"})]})]}),i&&g.jsx("button",{className:"btn btn-ghost btn-sm press-effect",onClick:()=>Qe(Z),children:"Remove"})]}),Ve&&g.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginLeft:46,fontSize:12},children:[xe.transport&&g.jsx("span",{style:{padding:"2px 8px",background:"var(--color-bg-secondary)",borderRadius:12,color:"var(--color-text-secondary)"},children:xe.transport==="cart"?"🛺 Cart":"🚶 Walk"}),xe.format&&g.jsx("span",{style:{padding:"2px 8px",background:"var(--color-bg-secondary)",borderRadius:12,color:"var(--color-text-secondary)"},children:xe.format==="scramble"?"👥 Scramble":"🏌️ Stroke"}),xe.teeTime&&g.jsx("span",{style:{padding:"2px 8px",background:"var(--color-bg-secondary)",borderRadius:12,color:"var(--color-text-secondary)"},children:xe.teeTime==="morning"?"🌅 Morning":xe.teeTime==="midday"?"☀️ Midday":"🌇 Twilight"}),xe.coursePreference&&g.jsxs("span",{style:{padding:"2px 8px",background:"var(--color-primary-soft)",borderRadius:12,color:"var(--color-primary)",maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:xe.coursePreference,children:["📍 ",xe.coursePreference]})]})]},Z)})})]})]})]})}function MN(){const[n,e]=z.useState([]),[t,i]=z.useState([]),[o,l]=z.useState(!0);z.useEffect(()=>{async function p(){const _=(await Fs(Or(Ze,"events"))).docs.map(P=>({id:P.id,...P.data()})),S=(await Fs(Or(Ze,"users"))).docs.map(P=>({id:P.id,...P.data()}));e(_),i(S),l(!1)}p()},[]);const c=async p=>{confirm("Delete this event?")&&(await _E(Lt(Ze,"events",p)),e(v=>v.filter(_=>_.id!==p)))},h=async(p,v)=>{const _=Lt(Ze,"users",p);await or(_,{isAdmin:!v}),i(T=>T.map(S=>S.id===p?{...S,isAdmin:!v}:S))};return o?g.jsx("div",{className:"page",children:g.jsx("div",{className:"card",style:{textAlign:"center",padding:40},children:"Loading…"})}):g.jsxs("div",{className:"page",children:[g.jsx("div",{className:"page-header",children:g.jsxs("div",{className:"page-header-title",children:[g.jsx("h1",{children:"Admin"}),g.jsx("p",{children:"Manage events and users"})]})}),g.jsxs("div",{className:"card",style:{marginBottom:20},children:[g.jsxs("div",{className:"section-header",children:[g.jsx("span",{className:"section-title",children:"Events"}),g.jsx("span",{className:"section-count",children:n.length})]}),n.length===0?g.jsx("p",{style:{color:"var(--color-text-secondary)",padding:"12px 0"},children:"No events yet"}):n.map((p,v)=>{var T,S;const _=(S=(T=p.date)==null?void 0:T.toDate)==null?void 0:S.call(T).toLocaleString("en-AU",{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:v<n.length-1?"1px solid var(--color-divider)":"none",gap:12},children:[g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:2},children:[g.jsx("span",{style:{fontWeight:500},children:p.title}),g.jsx("span",{className:`status-badge ${p.booked?"status-badge--booked":"status-badge--proposed"}`,children:p.booked?"Booked":"Proposed"})]}),g.jsx("span",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:_})]}),g.jsxs("div",{style:{display:"flex",gap:6,flexShrink:0},children:[g.jsx(sn,{to:`/event/${p.id}`,className:"btn btn-ghost btn-sm",children:"Open"}),g.jsx("button",{className:"btn btn-ghost btn-sm",style:{color:"var(--color-danger)"},onClick:()=>c(p.id),children:"Delete"})]})]},p.id)})]}),g.jsxs("div",{className:"card",children:[g.jsxs("div",{className:"section-header",children:[g.jsx("span",{className:"section-title",children:"Users"}),g.jsx("span",{className:"section-count",children:t.length})]}),t.map((p,v)=>g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:v<t.length-1?"1px solid var(--color-divider)":"none",gap:12},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("div",{className:"avatar",children:(p.username||p.email||"?").charAt(0).toUpperCase()}),g.jsxs("div",{children:[g.jsx("span",{style:{fontWeight:500},children:p.username||p.email}),p.isAdmin&&g.jsx("span",{style:{marginLeft:8,fontSize:11,padding:"2px 6px",borderRadius:4,background:"var(--color-primary-soft)",color:"var(--color-primary)",fontWeight:500},children:"Admin"})]})]}),g.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>h(p.id,p.isAdmin),children:p.isAdmin?"Remove Admin":"Make Admin"})]},p.id))]})]})}function FN(){return g.jsxs("div",{className:"card",style:{maxWidth:420,marginInline:"auto",marginTop:"3rem"},children:[g.jsx("h1",{children:"404"}),g.jsx("p",{className:"helper-text",style:{marginTop:"0.4rem"},children:"That page doesn't exist. Head back to the calendar."}),g.jsx(sn,{to:"/",className:"btn btn-secondary",style:{marginTop:"1rem"},children:"Back to calendar"})]})}function al({children:n}){const{user:e,loading:t}=jr();return t?g.jsx("div",{className:"main-inner",children:g.jsx("div",{className:"card",children:"Checking who you are…"})}):e?n:g.jsx(Ic,{to:"/login",replace:!0})}function UN({children:n}){const{user:e,isAdmin:t,loading:i}=jr();return i?g.jsx("div",{className:"main-inner",children:g.jsx("div",{className:"card",children:"Checking permissions…"})}):e?t?n:g.jsx(Ic,{to:"/",replace:!0}):g.jsx(Ic,{to:"/login",replace:!0})}function BN(){const[n,e]=z.useState(""),[t,i]=z.useState(""),[o,l]=z.useState(!1),[c,h]=z.useState(!1);async function p(v){v.preventDefault(),i(""),l(!1),h(!0);try{await Kx(Pl,n.trim()),l(!0)}catch(_){console.error(_),_.code==="auth/user-not-found"?i("No account found with this email address."):_.code==="auth/invalid-email"?i("Please enter a valid email address."):_.code==="auth/too-many-requests"?i("Too many attempts. Please try again later."):i(_.message||"Failed to send reset email.")}h(!1)}return g.jsx("div",{style:{minHeight:"calc(100vh - var(--nav-height))",display:"flex",justifyContent:"center",alignItems:"center",padding:24},children:g.jsxs("div",{className:"card",style:{width:"100%",maxWidth:400},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[g.jsx("h1",{style:{fontSize:32,fontWeight:700,color:"#0f7b6c",marginBottom:8},children:"GolfGang"}),g.jsx("h2",{style:{marginBottom:4,fontSize:20,fontWeight:500},children:"Reset password"}),g.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)",fontSize:14},children:"Enter your email and we'll send you a reset link"})]}),t&&g.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:t}),o?g.jsxs("div",{children:[g.jsx("div",{className:"toast toast-success",style:{marginBottom:16},children:"Password reset email sent! Check your inbox (and spam folder) for a link to reset your password."}),g.jsx(sn,{to:"/login",className:"btn btn-primary",style:{width:"100%",padding:"12px 16px",display:"block",textAlign:"center"},children:"Back to sign in"})]}):g.jsxs("form",{onSubmit:p,children:[g.jsxs("div",{style:{marginBottom:20},children:[g.jsx("label",{children:"Email"}),g.jsx("input",{className:"input",type:"email",value:n,onChange:v=>e(v.target.value),placeholder:"you@example.com",required:!0})]}),g.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px 16px"},disabled:c,type:"submit",children:c?"Sending…":"Send reset link"})]}),g.jsx("div",{style:{marginTop:20,textAlign:"center",fontSize:14},children:g.jsx(sn,{to:"/login",style:{color:"var(--color-text-secondary)"},children:"← Back to sign in"})})]})})}function zN(){const{user:n}=jr(),[e,t]=z.useState(""),[i,o]=z.useState(""),[l,c]=z.useState("");if(!n)return g.jsx("p",{children:"Loading…"});async function h(v){const _=Ed(Or(Ze,"users"),Id("username","==",v.toLowerCase()));return!(await Fs(_)).empty}async function p(v){v.preventDefault(),o(""),c("");const _=e.toLowerCase().trim();if(!_.match(/^[a-z0-9_]+$/)){o("Username must be letters, numbers or underscores.");return}if(await h(_)){o("Username already taken.");return}await or(Lt(Ze,"users",n.uid),{username:_}),c("Username updated!")}return g.jsx("div",{style:{maxWidth:420,margin:"4rem auto"},children:g.jsxs("div",{className:"surface",style:{padding:"2rem"},children:[g.jsx("h1",{children:"Change username"}),g.jsxs("form",{onSubmit:p,children:[g.jsx("input",{className:"input",placeholder:"New username",value:e,onChange:v=>t(v.target.value),style:{marginBottom:"1rem"}}),i&&g.jsx("p",{style:{color:"var(--danger)"},children:i}),l&&g.jsx("p",{style:{color:"var(--success)"},children:l}),g.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Update username"})]})]})})}const $N="BOjFZAtY_oM-ci1cnb3p5sT23gsjbwZo4kINDrd-QFSIMk4zDL89q12PHLyh-_16BWitVjsk9UsNKuUPBuXTrT0";let dc=null;const WN=async()=>dc||(await HE()&&(dc=ep(sa)),dc),pm=()=>"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window,If=()=>pm()?Notification.permission:"unsupported",qN=async n=>{if(!pm())return console.log("Push notifications not supported"),{success:!1,error:"not_supported"};try{if(await Notification.requestPermission()!=="granted")return console.log("Notification permission denied"),{success:!1,error:"permission_denied"};const t="/golfgang/",i=`${t}firebase-messaging-sw.js`.replace("//","/");console.log("Registering service worker at:",i);const o=await navigator.serviceWorker.register(i,{scope:t});console.log("Service worker registered:",o),await navigator.serviceWorker.ready,console.log("Service worker ready");const l=await WN();if(!l)return console.error("Messaging not supported"),{success:!1,error:"messaging_not_supported"};const c=await tp(l,{vapidKey:$N,serviceWorkerRegistration:o});return c?(console.log("FCM Token obtained:",c.substring(0,20)+"..."),await HN(n,c),{success:!0,token:c}):(console.log("No registration token available"),{success:!1,error:"no_token"})}catch(e){return console.error("Error requesting notification permission:",e),{success:!1,error:e.message}}},HN=async(n,e)=>{try{const t=Lt(Ze,"users",n);await or(t,{fcmTokens:kP(e),notificationsEnabled:!0,lastTokenUpdate:new Date().toISOString()}),console.log("Token saved to user document")}catch(t){throw console.error("Error saving token:",t),t}},N_=async()=>{if(console.log("sendTestNotification called"),console.log("Notification.permission:",Notification.permission),Notification.permission!=="granted"){console.log("Notification permission not granted"),alert("Notification permission not granted. Please enable notifications first.");return}try{if(!("serviceWorker"in navigator)){console.error("Service Worker not supported"),alert("Service Worker not supported in this browser");return}console.log("Waiting for service worker to be ready...");const n=await navigator.serviceWorker.ready;if(console.log("Service worker ready:",n),!n){console.error("No service worker registration found"),alert("Service worker not ready. Please refresh and try again.");return}console.log("Sending notification via service worker..."),await n.showNotification("🏌️ GolfGang Test",{body:"Push notifications are working! 🎉",icon:"/logo192.png",badge:"/logo192.png",tag:"test-notification-"+Date.now(),vibrate:[200,100,200],requireInteraction:!1}),console.log("Test notification sent successfully")}catch(n){console.error("Failed to send test notification:",n),alert(`Failed to send notification: ${n.message}`)}},D_="BOjFZAtY_oM-ci1cnb3p5sT23gsjbwZo4kINDrd-QFSIMk4zDL89q12PHLyh-_16BWitVjsk9UsNKuUPBuXTrT0";function GN(){const{user:n}=jr(),[e,t]=z.useState("default"),[i,o]=z.useState(!1),[l,c]=z.useState(!0),[h,p]=z.useState(!1),[v,_]=z.useState(!0);z.useEffect(()=>{(async()=>{if(!(n!=null&&n.uid)||!pm()){_(!1);return}if(c(!0),t(If()),If()==="granted")try{const M=ep(sa),$=await navigator.serviceWorker.getRegistration("/golfgang/");if($){const V=await tp(M,{vapidKey:D_,serviceWorkerRegistration:$});if(V){const te=await im(Lt(Ze,"users",n.uid));if(te.exists()){const J=te.data().fcmTokens||[];p(J.includes(V))}}}}catch(M){console.log("Error checking device token:",M)}_(!1)})()},[n==null?void 0:n.uid]);const T=async()=>{if(!n)return;o(!0);const P=await qN(n.uid);o(!1),P.success?(t("granted"),p(!0),setTimeout(()=>{N_()},1e3)):t(If())},S=async()=>{if(n){o(!0);try{const P=ep(sa),M=await navigator.serviceWorker.getRegistration("/golfgang/");if(M){const $=await tp(P,{vapidKey:D_,serviceWorkerRegistration:M});$&&(await or(Lt(Ze,"users",n.uid),{fcmTokens:AP($)}),console.log("Disabled notifications for this device"))}p(!1)}catch(P){console.error("Error disabling notifications:",P),alert("Failed to disable notifications")}finally{o(!1)}}};return l?v?g.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("span",{style:{fontSize:24},children:"🔔"}),g.jsx("div",{children:g.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Checking notifications..."})})]})}):e==="granted"&&h?g.jsx("div",{style:{padding:16,background:"var(--color-success-soft)",borderRadius:12,marginBottom:16},children:g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("span",{style:{fontSize:24},children:"🔔"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-success)"},children:"Notifications Enabled"}),g.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"You'll receive updates about events and RSVPs."})]}),g.jsx("button",{className:"btn btn-ghost btn-sm",onClick:N_,style:{marginRight:8},children:"Test"}),g.jsx("button",{className:"btn btn-ghost btn-sm",onClick:S,disabled:i,style:{color:"var(--color-danger)"},children:i?"...":"Disable"})]})}):e==="granted"&&!h?g.jsx("div",{style:{padding:16,background:"var(--color-warning-soft)",borderRadius:12,marginBottom:16},children:g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[g.jsx("span",{style:{fontSize:24},children:"🔔"}),g.jsxs("div",{style:{flex:1,minWidth:200},children:[g.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-warning)"},children:"Enable for This Device"}),g.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Notifications aren't set up on this device yet."})]}),g.jsx("button",{className:"btn btn-primary",onClick:T,disabled:i,children:i?"Enabling...":"Enable"})]})}):e==="denied"?g.jsx("div",{style:{padding:16,background:"var(--color-danger-soft)",borderRadius:12,marginBottom:16},children:g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("span",{style:{fontSize:24},children:"🔕"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-danger)"},children:"Notifications Blocked"}),g.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Enable notifications in your browser settings to receive updates."})]})]})}):g.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[g.jsx("span",{style:{fontSize:24},children:"🔔"}),g.jsxs("div",{style:{flex:1,minWidth:200},children:[g.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Enable Push Notifications"}),g.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Get notified when events are booked or when you're invited."})]}),g.jsx("button",{className:"btn btn-primary",onClick:T,disabled:i,children:i?"Enabling...":"Enable"})]})}):g.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("span",{style:{fontSize:24},children:"📵"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Notifications Not Supported"}),g.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Your browser doesn't support push notifications."})]})]})})}function KN(){const{user:n,profile:e}=jr(),[t,i]=z.useState((n==null?void 0:n.email)||""),[o,l]=z.useState((e==null?void 0:e.username)||""),[c,h]=z.useState(""),[p,v]=z.useState(""),[_,T]=z.useState(""),[S,P]=z.useState("");if(!n||!e)return g.jsx("div",{className:"page",children:g.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto",textAlign:"center"},children:"Loading…"})});async function M(J){const _e=Ed(Or(Ze,"users"),Id("username","==",J)),Ne=await Fs(_e);return!Ne.empty&&Ne.docs[0].id!==n.uid}async function $(){const J=Gs.credential(n.email,c);await Gx(n,J)}async function V(){T(""),P("");const J=o.toLowerCase().trim();if(!J.match(/^[a-z0-9_]+$/)){P("Username can only contain letters, numbers, and underscores.");return}if(await M(J)){P("That username is already taken.");return}await or(Lt(Ze,"users",n.uid),{username:J}),T("Username updated.")}async function te(){T(""),P("");try{await $(),await Jx(n,t),await or(Lt(Ze,"users",n.uid),{email:t}),T("Email updated.")}catch(J){P(J.message)}}async function re(){T(""),P("");try{await $(),await Xx(n,p),T("Password updated."),v(""),h("")}catch(J){P(J.message)}}return g.jsx("div",{className:"page",children:g.jsxs("div",{style:{maxWidth:480,margin:"0 auto"},children:[g.jsx("div",{className:"page-header",children:g.jsxs("div",{className:"page-header-title",children:[g.jsx("h1",{children:"Profile"}),g.jsx("p",{children:"Manage your account settings"})]})}),g.jsx(GN,{}),_&&g.jsx("div",{className:"toast toast-success",style:{marginBottom:16},children:_}),S&&g.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:S}),g.jsxs("div",{className:"card",style:{marginBottom:16},children:[g.jsx("div",{className:"section-header",style:{marginBottom:12},children:g.jsx("span",{className:"section-title",children:"Username"})}),g.jsxs("div",{style:{marginBottom:12},children:[g.jsx("input",{className:"input",value:o,onChange:J=>l(J.target.value),placeholder:"Your username"}),g.jsx("p",{className:"helper-text",style:{marginTop:4},children:"Letters, numbers, and underscores only"})]}),g.jsx("button",{className:"btn btn-primary btn-sm",onClick:V,children:"Update username"})]}),g.jsxs("div",{className:"card",style:{marginBottom:16},children:[g.jsx("div",{className:"section-header",style:{marginBottom:12},children:g.jsx("span",{className:"section-title",children:"Email"})}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[g.jsxs("div",{children:[g.jsx("label",{children:"Email address"}),g.jsx("input",{className:"input",type:"email",value:t,onChange:J=>i(J.target.value)})]}),g.jsxs("div",{children:[g.jsx("label",{children:"Current password (to confirm)"}),g.jsx("input",{className:"input",type:"password",value:c,onChange:J=>h(J.target.value),placeholder:"Enter current password"})]})]}),g.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:12},onClick:te,children:"Update email"})]}),g.jsxs("div",{className:"card",children:[g.jsx("div",{className:"section-header",style:{marginBottom:12},children:g.jsx("span",{className:"section-title",children:"Change password"})}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[g.jsxs("div",{children:[g.jsx("label",{children:"Current password"}),g.jsx("input",{className:"input",type:"password",value:c,onChange:J=>h(J.target.value),placeholder:"Enter current password"})]}),g.jsxs("div",{children:[g.jsx("label",{children:"New password"}),g.jsx("input",{className:"input",type:"password",value:p,onChange:J=>v(J.target.value),placeholder:"Enter new password"})]})]}),g.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:12},onClick:re,children:"Update password"})]})]})})}function QN(){const n=$s(),[e,t]=z.useState(""),[i,o]=z.useState(""),[l,c]=z.useState(""),[h,p]=z.useState(""),[v,_]=z.useState(!1),[T,S]=z.useState(!1);async function P(V){const te=V.toLowerCase(),re=Ed(Or(Ze,"users"),Id("username","==",te));return!(await Fs(re)).empty}async function M(){if("Notification"in window)try{return await Notification.requestPermission()==="granted"}catch(V){return console.error("Notification permission error:",V),!1}return!1}async function $(V){V.preventDefault(),p("");const te=i.trim().toLowerCase();if(!te.match(/^[a-z0-9_]+$/)){p("Username can only contain letters, numbers, and underscores.");return}_(!0);try{if(await P(te)){p("That username is already taken."),_(!1);return}const re=await Qx(Pl,e,l);await SP(Lt(Ze,"users",re.user.uid),{email:e,username:te,isAdmin:!1}),await M(),n("/")}catch(re){console.error(re),p(re.message||"Signup failed")}_(!1)}return g.jsx("div",{style:{minHeight:"calc(100vh - var(--nav-height))",display:"flex",justifyContent:"center",alignItems:"center",padding:24},children:g.jsxs("div",{className:"card",style:{width:"100%",maxWidth:400},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[g.jsx("h1",{style:{fontSize:32,fontWeight:700,color:"#0f7b6c",marginBottom:8},children:"GolfGang"}),g.jsx("h2",{style:{marginBottom:4,fontSize:20,fontWeight:500},children:"Create account"}),g.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)",fontSize:14},children:"Join GolfGang to plan rounds with friends"})]}),h&&g.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:h}),g.jsxs("form",{onSubmit:$,children:[g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("label",{children:"Email"}),g.jsx("input",{className:"input",type:"email",value:e,onChange:V=>t(V.target.value),placeholder:"you@example.com",required:!0})]}),g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("label",{children:"Username"}),g.jsx("input",{className:"input",value:i,onChange:V=>o(V.target.value),placeholder:"Choose a username",required:!0}),g.jsx("p",{className:"helper-text",style:{marginTop:4},children:"Letters, numbers, and underscores only"})]}),g.jsxs("div",{style:{marginBottom:20},children:[g.jsx("label",{children:"Password"}),g.jsx("input",{className:"input",type:"password",placeholder:"Create a password",value:l,onChange:V=>c(V.target.value),required:!0})]}),g.jsxs("div",{style:{marginBottom:20,padding:12,background:"var(--color-surface-secondary, #f5f5f5)",borderRadius:8,fontSize:13},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:T?8:0},children:[g.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"🔔 We'll ask for notification permissions to keep you updated"}),g.jsx("button",{type:"button",onClick:()=>S(!T),style:{background:"none",border:"none",color:"#0f7b6c",cursor:"pointer",fontSize:12,padding:0,marginLeft:8,textDecoration:"underline"},children:T?"Hide":"Learn more"})]}),T&&g.jsxs("div",{style:{color:"var(--color-text-secondary)",fontSize:12,lineHeight:1.5},children:[g.jsx("p",{style:{margin:"0 0 8px 0"},children:"Notifications help you stay in the loop when friends invite you to rounds or comment on your posts."}),g.jsxs("p",{style:{margin:0},children:[g.jsx("strong",{children:"To disable notifications later:"})," Go to your Profile and toggle off notifications, or simply log out of your account."]})]})]}),g.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px 16px"},disabled:v,type:"submit",children:v?"Creating account…":"Sign up"})]}),g.jsxs("div",{style:{marginTop:20,textAlign:"center",fontSize:14},children:[g.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Already have an account? "}),g.jsx(sn,{to:"/login",children:"Sign in"})]})]})})}function YN(){return g.jsxs("div",{className:"app-shell",children:[g.jsx(tN,{}),g.jsx("main",{className:"main-inner",children:g.jsxs(rS,{children:[g.jsx(Rn,{path:"/",element:g.jsx(al,{children:g.jsx(sN,{})})}),g.jsx(Rn,{path:"/my-events",element:g.jsx(al,{children:g.jsx(oN,{})})}),g.jsx(Rn,{path:"/login",element:g.jsx(x_,{})}),g.jsx(Rn,{path:"/event/:id",element:g.jsx(al,{children:g.jsx(LN,{})})}),g.jsx(Rn,{path:"/admin",element:g.jsx(UN,{children:g.jsx(MN,{})})}),g.jsx(Rn,{path:"/404",element:g.jsx(FN,{})}),g.jsx(Rn,{path:"*",element:g.jsx(Ic,{to:"/404"})}),g.jsx(Rn,{path:"/signup",element:g.jsx(QN,{})}),g.jsx(Rn,{path:"/reset-password",element:g.jsx(BN,{})}),g.jsx(Rn,{path:"/login",element:g.jsx(x_,{})}),g.jsx(Rn,{path:"/profile",element:g.jsx(al,{children:g.jsx(KN,{})})}),g.jsx(Rn,{path:"/change-username",element:g.jsx(al,{children:g.jsx(zN,{})})})]})}),g.jsx(nN,{})]})}cI.createRoot(document.getElementById("root")).render(g.jsx(V_.StrictMode,{children:g.jsx(cS,{basename:"/golfgang",children:g.jsx(eN,{children:g.jsx(Xb,{children:g.jsx(YN,{})})})})}));
