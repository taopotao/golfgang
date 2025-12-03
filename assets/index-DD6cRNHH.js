function PT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function f_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $h={exports:{}},Za={},Wh={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function xT(){if(iy)return Ne;iy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function F(V,K,H){this.props=V,this.context=K,this.refs=q,this.updater=H||N}F.prototype.isReactComponent={},F.prototype.setState=function(V,K){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,K,"setState")},F.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function oe(){}oe.prototype=F.prototype;function ne(V,K,H){this.props=V,this.context=K,this.refs=q,this.updater=H||N}var Z=ne.prototype=new oe;Z.constructor=ne,B(Z,F.prototype),Z.isPureReactComponent=!0;var ye=Array.isArray,Pe=Object.prototype.hasOwnProperty,Re={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function A(V,K,H){var G,Y={},le=null,Te=null;if(K!=null)for(G in K.ref!==void 0&&(Te=K.ref),K.key!==void 0&&(le=""+K.key),K)Pe.call(K,G)&&!b.hasOwnProperty(G)&&(Y[G]=K[G]);var _e=arguments.length-2;if(_e===1)Y.children=H;else if(1<_e){for(var be=Array(_e),st=0;st<_e;st++)be[st]=arguments[st+2];Y.children=be}if(V&&V.defaultProps)for(G in _e=V.defaultProps,_e)Y[G]===void 0&&(Y[G]=_e[G]);return{$$typeof:n,type:V,key:le,ref:Te,props:Y,_owner:Re.current}}function k(V,K){return{$$typeof:n,type:V.type,key:K,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var K={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(H){return K[H]})}var L=/\/+/g;function R(V,K){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):K.toString(36)}function Ge(V,K,H,G,Y){var le=typeof V;(le==="undefined"||le==="boolean")&&(V=null);var Te=!1;if(V===null)Te=!0;else switch(le){case"string":case"number":Te=!0;break;case"object":switch(V.$$typeof){case n:case e:Te=!0}}if(Te)return Te=V,Y=Y(Te),V=G===""?"."+R(Te,0):G,ye(Y)?(H="",V!=null&&(H=V.replace(L,"$&/")+"/"),Ge(Y,K,H,"",function(st){return st})):Y!=null&&(x(Y)&&(Y=k(Y,H+(!Y.key||Te&&Te.key===Y.key?"":(""+Y.key).replace(L,"$&/")+"/")+V)),K.push(Y)),1;if(Te=0,G=G===""?".":G+":",ye(V))for(var _e=0;_e<V.length;_e++){le=V[_e];var be=G+R(le,_e);Te+=Ge(le,K,H,be,Y)}else if(be=S(V),typeof be=="function")for(V=be.call(V),_e=0;!(le=V.next()).done;)le=le.value,be=G+R(le,_e++),Te+=Ge(le,K,H,be,Y);else if(le==="object")throw K=String(V),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Te}function ht(V,K,H){if(V==null)return V;var G=[],Y=0;return Ge(V,G,"","",function(le){return K.call(H,le,Y++)}),G}function it(V){if(V._status===-1){var K=V._result;K=K(),K.then(function(H){(V._status===0||V._status===-1)&&(V._status=1,V._result=H)},function(H){(V._status===0||V._status===-1)&&(V._status=2,V._result=H)}),V._status===-1&&(V._status=0,V._result=K)}if(V._status===1)return V._result.default;throw V._result}var je={current:null},ie={transition:null},me={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Re};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:ht,forEach:function(V,K,H){ht(V,function(){K.apply(this,arguments)},H)},count:function(V){var K=0;return ht(V,function(){K++}),K},toArray:function(V){return ht(V,function(K){return K})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ne.Component=F,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=ne,Ne.StrictMode=i,Ne.Suspense=p,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ne.act=ae,Ne.cloneElement=function(V,K,H){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var G=B({},V.props),Y=V.key,le=V.ref,Te=V._owner;if(K!=null){if(K.ref!==void 0&&(le=K.ref,Te=Re.current),K.key!==void 0&&(Y=""+K.key),V.type&&V.type.defaultProps)var _e=V.type.defaultProps;for(be in K)Pe.call(K,be)&&!b.hasOwnProperty(be)&&(G[be]=K[be]===void 0&&_e!==void 0?_e[be]:K[be])}var be=arguments.length-2;if(be===1)G.children=H;else if(1<be){_e=Array(be);for(var st=0;st<be;st++)_e[st]=arguments[st+2];G.children=_e}return{$$typeof:n,type:V.type,key:Y,ref:le,props:G,_owner:Te}},Ne.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ne.createElement=A,Ne.createFactory=function(V){var K=A.bind(null,V);return K.type=V,K},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(V){return{$$typeof:f,render:V}},Ne.isValidElement=x,Ne.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:it}},Ne.memo=function(V,K){return{$$typeof:y,type:V,compare:K===void 0?null:K}},Ne.startTransition=function(V){var K=ie.transition;ie.transition={};try{V()}finally{ie.transition=K}},Ne.unstable_act=ae,Ne.useCallback=function(V,K){return je.current.useCallback(V,K)},Ne.useContext=function(V){return je.current.useContext(V)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(V){return je.current.useDeferredValue(V)},Ne.useEffect=function(V,K){return je.current.useEffect(V,K)},Ne.useId=function(){return je.current.useId()},Ne.useImperativeHandle=function(V,K,H){return je.current.useImperativeHandle(V,K,H)},Ne.useInsertionEffect=function(V,K){return je.current.useInsertionEffect(V,K)},Ne.useLayoutEffect=function(V,K){return je.current.useLayoutEffect(V,K)},Ne.useMemo=function(V,K){return je.current.useMemo(V,K)},Ne.useReducer=function(V,K,H){return je.current.useReducer(V,K,H)},Ne.useRef=function(V){return je.current.useRef(V)},Ne.useState=function(V){return je.current.useState(V)},Ne.useSyncExternalStore=function(V,K,H){return je.current.useSyncExternalStore(V,K,H)},Ne.useTransition=function(){return je.current.useTransition()},Ne.version="18.3.1",Ne}var sy;function $f(){return sy||(sy=1,Wh.exports=xT()),Wh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function NT(){if(oy)return Za;oy=1;var n=$f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,y){var w,T={},S=null,N=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(N=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:f,key:S,ref:N,props:T,_owner:o.current}}return Za.Fragment=t,Za.jsx=c,Za.jsxs=c,Za}var ay;function bT(){return ay||(ay=1,$h.exports=NT()),$h.exports}var _=bT(),W=$f();const p_=f_(W),DT=PT({__proto__:null,default:p_},[W]);var Ju={},qh={exports:{}},sn={},Hh={exports:{}},Kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function OT(){return ly||(ly=1,(function(n){function e(ie,me){var ae=ie.length;ie.push(me);e:for(;0<ae;){var V=ae-1>>>1,K=ie[V];if(0<o(K,me))ie[V]=me,ie[ae]=K,ae=V;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var me=ie[0],ae=ie.pop();if(ae!==me){ie[0]=ae;e:for(var V=0,K=ie.length,H=K>>>1;V<H;){var G=2*(V+1)-1,Y=ie[G],le=G+1,Te=ie[le];if(0>o(Y,ae))le<K&&0>o(Te,Y)?(ie[V]=Te,ie[le]=ae,V=le):(ie[V]=Y,ie[G]=ae,V=G);else if(le<K&&0>o(Te,ae))ie[V]=Te,ie[le]=ae,V=le;else break e}}return me}function o(ie,me){var ae=ie.sortIndex-me.sortIndex;return ae!==0?ae:ie.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var p=[],y=[],w=1,T=null,S=3,N=!1,B=!1,q=!1,F=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(ie){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ie)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ye(ie){if(q=!1,Z(ie),!B)if(t(p)!==null)B=!0,it(Pe);else{var me=t(y);me!==null&&je(ye,me.startTime-ie)}}function Pe(ie,me){B=!1,q&&(q=!1,oe(A),A=-1),N=!0;var ae=S;try{for(Z(me),T=t(p);T!==null&&(!(T.expirationTime>me)||ie&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,S=T.priorityLevel;var K=V(T.expirationTime<=me);me=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),Z(me)}else i(p);T=t(p)}if(T!==null)var H=!0;else{var G=t(y);G!==null&&je(ye,G.startTime-me),H=!1}return H}finally{T=null,S=ae,N=!1}}var Re=!1,b=null,A=-1,k=5,x=-1;function O(){return!(n.unstable_now()-x<k)}function L(){if(b!==null){var ie=n.unstable_now();x=ie;var me=!0;try{me=b(!0,ie)}finally{me?R():(Re=!1,b=null)}}else Re=!1}var R;if(typeof ne=="function")R=function(){ne(L)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,ht=Ge.port2;Ge.port1.onmessage=L,R=function(){ht.postMessage(null)}}else R=function(){F(L,0)};function it(ie){b=ie,Re||(Re=!0,R())}function je(ie,me){A=F(function(){ie(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){B||N||(B=!0,it(Pe))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var ae=S;S=me;try{return ie()}finally{S=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,me){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=S;S=ie;try{return me()}finally{S=ae}},n.unstable_scheduleCallback=function(ie,me,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,ie){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ae+K,ie={id:w++,callback:me,priorityLevel:ie,startTime:ae,expirationTime:K,sortIndex:-1},ae>V?(ie.sortIndex=ae,e(y,ie),t(p)===null&&ie===t(y)&&(q?(oe(A),A=-1):q=!0,je(ye,ae-V))):(ie.sortIndex=K,e(p,ie),B||N||(B=!0,it(Pe))),ie},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ie){var me=S;return function(){var ae=S;S=me;try{return ie.apply(this,arguments)}finally{S=ae}}}})(Kh)),Kh}var uy;function VT(){return uy||(uy=1,Hh.exports=OT()),Hh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function LT(){if(cy)return sn;cy=1;var n=$f(),e=VT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function S(r){return p.call(T,r)?!0:p.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function N(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function B(r,s,a,d){if(s===null||typeof s>"u"||N(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,d,h,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){F[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];F[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){F[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){F[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){F[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){F[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){F[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){F[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){F[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function ne(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(oe,ne);F[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(oe,ne);F[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(oe,ne);F[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){F[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),F.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){F[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function Z(r,s,a,d){var h=F.hasOwnProperty(s)?F[s]:null;(h!==null?h.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,a,h,d)&&(a=null),d||h===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):h.mustUseProperty?r[h.propertyName]=a===null?h.type===3?!1:"":a:(s=h.attributeName,d=h.attributeNamespace,a===null?r.removeAttribute(s):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var ye=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pe=Symbol.for("react.element"),Re=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),ht=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),ie=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,V;function K(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var H=!1;function G(r,s){if(!r||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var d=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){d=z}r.call(s.prototype)}else{try{throw Error()}catch(z){d=z}r()}}catch(z){if(z&&d&&typeof z.stack=="string"){for(var h=z.stack.split(`
`),g=d.stack.split(`
`),E=h.length-1,C=g.length-1;1<=E&&0<=C&&h[E]!==g[C];)C--;for(;1<=E&&0<=C;E--,C--)if(h[E]!==g[C]){if(E!==1||C!==1)do if(E--,C--,0>C||h[E]!==g[C]){var P=`
`+h[E].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=E&&0<=C);break}}}finally{H=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Y(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=G(r.type,!1),r;case 11:return r=G(r.type.render,!1),r;case 1:return r=G(r.type,!0),r;default:return""}}function le(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case b:return"Fragment";case Re:return"Portal";case k:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case Ge:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case L:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ht:return s=r.displayName||null,s!==null?s:le(r.type)||"Memo";case it:s=r._payload,r=r._init;try{return le(r(s))}catch{}}return null}function Te(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function be(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function st(r){var s=be(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return h.call(this)},set:function(E){d=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(E){d=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function vn(r){r._valueTracker||(r._valueTracker=st(r))}function er(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=be(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function _n(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Pt(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Fs(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=_e(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function sa(r,s){s=s.checked,s!=null&&Z(r,"checked",s,!1)}function oa(r,s){sa(r,s);var a=_e(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Us(r,s.type,a):s.hasOwnProperty("defaultValue")&&Us(r,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ml(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Us(r,s,a){(s!=="number"||_n(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Cr=Array.isArray;function kr(r,s,a,d){if(r=r.options,s){s={};for(var h=0;h<a.length;h++)s["$"+a[h]]=!0;for(a=0;a<r.length;a++)h=s.hasOwnProperty("$"+r[a].value),r[a].selected!==h&&(r[a].selected=h),h&&d&&(r[a].defaultSelected=!0)}else{for(a=""+_e(a),s=null,h=0;h<r.length;h++){if(r[h].value===a){r[h].selected=!0,d&&(r[h].defaultSelected=!0);return}s!==null||r[h].disabled||(s=r[h])}s!==null&&(s.selected=!0)}}function aa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Bs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Cr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:_e(a)}}function zs(r,s){var a=_e(s.value),d=_e(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function la(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function vt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _t(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?vt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Rr,ua=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,h){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,h)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Rr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ti(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xi=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(r){Xi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Yi[s]=Yi[r]})});function ca(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Yi.hasOwnProperty(r)&&Yi[r]?(""+s).trim():s+"px"}function da(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,h=ca(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,h):r[a]=h}}var ha=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(r,s){if(s){if(ha[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function pa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ji=null;function $s(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ws=null,wn=null,tr=null;function qs(r){if(r=ja(r)){if(typeof Ws!="function")throw Error(t(280));var s=r.stateNode;s&&(s=fu(s),Ws(r.stateNode,r.type,s))}}function nr(r){wn?tr?tr.push(r):tr=[r]:wn=r}function ma(){if(wn){var r=wn,s=tr;if(tr=wn=null,qs(r),s)for(r=0;r<s.length;r++)qs(s[r])}}function Zi(r,s){return r(s)}function ga(){}var Pr=!1;function ya(r,s,a){if(Pr)return r(s,a);Pr=!0;try{return Zi(r,s,a)}finally{Pr=!1,(wn!==null||tr!==null)&&(ga(),ma())}}function lt(r,s){var a=r.stateNode;if(a===null)return null;var d=fu(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Hs=!1;if(f)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Hs=!1}function es(r,s,a,d,h,g,E,C,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(ee){this.onError(ee)}}var ts=!1,Ks=null,Ln=!1,va=null,yd={onError:function(r){ts=!0,Ks=r}};function Gs(r,s,a,d,h,g,E,C,P){ts=!1,Ks=null,es.apply(yd,arguments)}function jl(r,s,a,d,h,g,E,C,P){if(Gs.apply(this,arguments),ts){if(ts){var z=Ks;ts=!1,Ks=null}else throw Error(t(198));Ln||(Ln=!0,va=z)}}function Mn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function ns(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function jn(r){if(Mn(r)!==r)throw Error(t(188))}function Fl(r){var s=r.alternate;if(!s){if(s=Mn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,d=s;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(d=h.return,d!==null){a=d;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return jn(h),r;if(g===d)return jn(h),s;g=g.sibling}throw Error(t(188))}if(a.return!==d.return)a=h,d=g;else{for(var E=!1,C=h.child;C;){if(C===a){E=!0,a=h,d=g;break}if(C===d){E=!0,d=h,a=g;break}C=C.sibling}if(!E){for(C=g.child;C;){if(C===a){E=!0,a=g,d=h;break}if(C===d){E=!0,d=g,a=h;break}C=C.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function _a(r){return r=Fl(r),r!==null?Qs(r):null}function Qs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Qs(r);if(s!==null)return s;r=r.sibling}return null}var Ys=e.unstable_scheduleCallback,wa=e.unstable_cancelCallback,Ul=e.unstable_shouldYield,vd=e.unstable_requestPaint,qe=e.unstable_now,Bl=e.unstable_getCurrentPriorityLevel,rs=e.unstable_ImmediatePriority,ni=e.unstable_UserBlockingPriority,En=e.unstable_NormalPriority,Ea=e.unstable_LowPriority,zl=e.unstable_IdlePriority,is=null,un=null;function $l(r){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(is,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:ql,Ta=Math.log,Wl=Math.LN2;function ql(r){return r>>>=0,r===0?32:31-(Ta(r)/Wl|0)|0}var Xs=64,Js=4194304;function ri(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ss(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,h=r.suspendedLanes,g=r.pingedLanes,E=a&268435455;if(E!==0){var C=E&~h;C!==0?d=ri(C):(g&=E,g!==0&&(d=ri(g)))}else E=a&~h,E!==0?d=ri(E):g!==0&&(d=ri(g));if(d===0)return 0;if(s!==0&&s!==d&&(s&h)===0&&(h=d&-d,g=s&-s,h>=g||h===16&&(g&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-Ht(s),h=1<<a,d|=r[a],s&=~h;return d}function _d(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xr(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,h=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-Ht(g),C=1<<E,P=h[E];P===-1?((C&a)===0||(C&d)!==0)&&(h[E]=_d(C,s)):P<=s&&(r.expiredLanes|=C),g&=~C}}function cn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function os(){var r=Xs;return Xs<<=1,(Xs&4194240)===0&&(Xs=64),r}function ii(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function si(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=a}function We(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var h=31-Ht(a),g=1<<h;s[h]=0,d[h]=-1,r[h]=-1,a&=~g}}function oi(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-Ht(a),h=1<<d;h&s|r[d]&s&&(r[d]|=s),a&=~h}}var Ve=0;function ai(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Hl,Zs,Kl,Gl,Ql,Ia=!1,rr=[],xt=null,Fn=null,Un=null,li=new Map,Tn=new Map,ir=[],wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yl(r,s){switch(r){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":li.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(s.pointerId)}}function Xt(r,s,a,d,h,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:g,targetContainers:[h]},s!==null&&(s=ja(s),s!==null&&Zs(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),r)}function Ed(r,s,a,d,h){switch(s){case"focusin":return xt=Xt(xt,r,s,a,d,h),!0;case"dragenter":return Fn=Xt(Fn,r,s,a,d,h),!0;case"mouseover":return Un=Xt(Un,r,s,a,d,h),!0;case"pointerover":var g=h.pointerId;return li.set(g,Xt(li.get(g)||null,r,s,a,d,h)),!0;case"gotpointercapture":return g=h.pointerId,Tn.set(g,Xt(Tn.get(g)||null,r,s,a,d,h)),!0}return!1}function Xl(r){var s=ds(r.target);if(s!==null){var a=Mn(s);if(a!==null){if(s=a.tag,s===13){if(s=ns(a),s!==null){r.blockedOn=s,Ql(r.priority,function(){Kl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Nr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=eo(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);Ji=d,a.target.dispatchEvent(d),Ji=null}else return s=ja(a),s!==null&&Zs(s),r.blockedOn=a,!1;s.shift()}return!0}function as(r,s,a){Nr(r)&&a.delete(s)}function Jl(){Ia=!1,xt!==null&&Nr(xt)&&(xt=null),Fn!==null&&Nr(Fn)&&(Fn=null),Un!==null&&Nr(Un)&&(Un=null),li.forEach(as),Tn.forEach(as)}function Bn(r,s){r.blockedOn===s&&(r.blockedOn=null,Ia||(Ia=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jl)))}function zn(r){function s(h){return Bn(h,r)}if(0<rr.length){Bn(rr[0],r);for(var a=1;a<rr.length;a++){var d=rr[a];d.blockedOn===r&&(d.blockedOn=null)}}for(xt!==null&&Bn(xt,r),Fn!==null&&Bn(Fn,r),Un!==null&&Bn(Un,r),li.forEach(s),Tn.forEach(s),a=0;a<ir.length;a++)d=ir[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)Xl(a),a.blockedOn===null&&ir.shift()}var br=ye.ReactCurrentBatchConfig,ui=!0;function Je(r,s,a,d){var h=Ve,g=br.transition;br.transition=null;try{Ve=1,Sa(r,s,a,d)}finally{Ve=h,br.transition=g}}function Td(r,s,a,d){var h=Ve,g=br.transition;br.transition=null;try{Ve=4,Sa(r,s,a,d)}finally{Ve=h,br.transition=g}}function Sa(r,s,a,d){if(ui){var h=eo(r,s,a,d);if(h===null)Dd(r,s,d,ls,a),Yl(r,d);else if(Ed(h,r,s,a,d))d.stopPropagation();else if(Yl(r,d),s&4&&-1<wd.indexOf(r)){for(;h!==null;){var g=ja(h);if(g!==null&&Hl(g),g=eo(r,s,a,d),g===null&&Dd(r,s,d,ls,a),g===h)break;h=g}h!==null&&d.stopPropagation()}else Dd(r,s,d,null,a)}}var ls=null;function eo(r,s,a,d){if(ls=null,r=$s(d),r=ds(r),r!==null)if(s=Mn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=ns(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ls=r,null}function Aa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bl()){case rs:return 1;case ni:return 4;case En:case Ea:return 16;case zl:return 536870912;default:return 16}default:return 16}}var dn=null,to=null,Jt=null;function Ca(){if(Jt)return Jt;var r,s=to,a=s.length,d,h="value"in dn?dn.value:dn.textContent,g=h.length;for(r=0;r<a&&s[r]===h[r];r++);var E=a-r;for(d=1;d<=E&&s[a-d]===h[g-d];d++);return Jt=h.slice(r,1<d?1-d:void 0)}function no(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function sr(){return!0}function ka(){return!1}function Nt(r){function s(a,d,h,g,E){this._reactName=a,this._targetInst=h,this.type=d,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var C in r)r.hasOwnProperty(C)&&(a=r[C],this[C]=a?a(g):g[C]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?sr:ka,this.isPropagationStopped=ka,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),s}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=Nt($n),or=ae({},$n,{view:0,detail:0}),Id=Nt(or),io,Dr,ci,us=ae({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ci&&(ci&&r.type==="mousemove"?(io=r.screenX-ci.screenX,Dr=r.screenY-ci.screenY):Dr=io=0,ci=r),io)},movementY:function(r){return"movementY"in r?r.movementY:Dr}}),so=Nt(us),Ra=ae({},us,{dataTransfer:0}),Zl=Nt(Ra),oo=ae({},or,{relatedTarget:0}),ao=Nt(oo),eu=ae({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Or=Nt(eu),tu=ae({},$n,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),nu=Nt(tu),ru=ae({},$n,{data:0}),Pa=Nt(ru),lo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function su(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=iu[r])?!!s[r]:!1}function ar(){return su}var u=ae({},or,{key:function(r){if(r.key){var s=lo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=no(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Kt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(r){return r.type==="keypress"?no(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?no(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Nt(u),v=ae({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Nt(v),M=ae({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),$=Nt(M),se=ae({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=Nt(se),wt=ae({},us,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=Nt(wt),St=[9,13,27,32],ft=f&&"CompositionEvent"in window,In=null;f&&"documentMode"in document&&(In=document.documentMode);var hn=f&&"TextEvent"in window&&!In,cs=f&&(!ft||In&&8<In&&11>=In),uo=" ",Jp=!1;function Zp(r,s){switch(r){case"keyup":return St.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var co=!1;function C0(r,s){switch(r){case"compositionend":return em(s);case"keypress":return s.which!==32?null:(Jp=!0,uo);case"textInput":return r=s.data,r===uo&&Jp?null:r;default:return null}}function k0(r,s){if(co)return r==="compositionend"||!ft&&Zp(r,s)?(r=Ca(),Jt=to=dn=null,co=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return cs&&s.locale!=="ko"?null:s.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!R0[r.type]:s==="textarea"}function nm(r,s,a,d){nr(d),s=cu(s,"onChange"),0<s.length&&(a=new ro("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var xa=null,Na=null;function P0(r){wm(r,0)}function ou(r){var s=go(r);if(er(s))return r}function x0(r,s){if(r==="change")return s}var rm=!1;if(f){var Sd;if(f){var Ad="oninput"in document;if(!Ad){var im=document.createElement("div");im.setAttribute("oninput","return;"),Ad=typeof im.oninput=="function"}Sd=Ad}else Sd=!1;rm=Sd&&(!document.documentMode||9<document.documentMode)}function sm(){xa&&(xa.detachEvent("onpropertychange",om),Na=xa=null)}function om(r){if(r.propertyName==="value"&&ou(Na)){var s=[];nm(s,Na,r,$s(r)),ya(P0,s)}}function N0(r,s,a){r==="focusin"?(sm(),xa=s,Na=a,xa.attachEvent("onpropertychange",om)):r==="focusout"&&sm()}function b0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ou(Na)}function D0(r,s){if(r==="click")return ou(s)}function O0(r,s){if(r==="input"||r==="change")return ou(s)}function V0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Wn=typeof Object.is=="function"?Object.is:V0;function ba(r,s){if(Wn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var h=a[d];if(!p.call(s,h)||!Wn(r[h],s[h]))return!1}return!0}function am(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function lm(r,s){var a=am(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=am(a)}}function um(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?um(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function cm(){for(var r=window,s=_n();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=_n(r.document)}return s}function Cd(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function L0(r){var s=cm(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&um(a.ownerDocument.documentElement,a)){if(d!==null&&Cd(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,g=Math.min(d.start,h);d=d.end===void 0?g:Math.min(d.end,h),!r.extend&&g>d&&(h=d,d=g,g=h),h=lm(a,g);var E=lm(a,d);h&&E&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),r.removeAllRanges(),g>d?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var M0=f&&"documentMode"in document&&11>=document.documentMode,ho=null,kd=null,Da=null,Rd=!1;function dm(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rd||ho==null||ho!==_n(d)||(d=ho,"selectionStart"in d&&Cd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Da&&ba(Da,d)||(Da=d,d=cu(kd,"onSelect"),0<d.length&&(s=new ro("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=ho)))}function au(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var fo={animationend:au("Animation","AnimationEnd"),animationiteration:au("Animation","AnimationIteration"),animationstart:au("Animation","AnimationStart"),transitionend:au("Transition","TransitionEnd")},Pd={},hm={};f&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function lu(r){if(Pd[r])return Pd[r];if(!fo[r])return r;var s=fo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in hm)return Pd[r]=s[a];return r}var fm=lu("animationend"),pm=lu("animationiteration"),mm=lu("animationstart"),gm=lu("transitionend"),ym=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(r,s){ym.set(r,s),l(s,[r])}for(var xd=0;xd<vm.length;xd++){var Nd=vm[xd],j0=Nd.toLowerCase(),F0=Nd[0].toUpperCase()+Nd.slice(1);di(j0,"on"+F0)}di(fm,"onAnimationEnd"),di(pm,"onAnimationIteration"),di(mm,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(gm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function _m(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,jl(d,s,void 0,r),r.currentTarget=null}function wm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],h=d.event;d=d.listeners;e:{var g=void 0;if(s)for(var E=d.length-1;0<=E;E--){var C=d[E],P=C.instance,z=C.currentTarget;if(C=C.listener,P!==g&&h.isPropagationStopped())break e;_m(h,C,z),g=P}else for(E=0;E<d.length;E++){if(C=d[E],P=C.instance,z=C.currentTarget,C=C.listener,P!==g&&h.isPropagationStopped())break e;_m(h,C,z),g=P}}}if(Ln)throw r=va,Ln=!1,va=null,r}function Qe(r,s){var a=s[Fd];a===void 0&&(a=s[Fd]=new Set);var d=r+"__bubble";a.has(d)||(Em(s,r,2,!1),a.add(d))}function bd(r,s,a){var d=0;s&&(d|=4),Em(a,r,d,s)}var uu="_reactListening"+Math.random().toString(36).slice(2);function Va(r){if(!r[uu]){r[uu]=!0,i.forEach(function(a){a!=="selectionchange"&&(U0.has(a)||bd(a,!1,r),bd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[uu]||(s[uu]=!0,bd("selectionchange",!1,s))}}function Em(r,s,a,d){switch(Aa(s)){case 1:var h=Je;break;case 4:h=Td;break;default:h=Sa}a=h.bind(null,s,a,r),h=void 0,!Hs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),d?h!==void 0?r.addEventListener(s,a,{capture:!0,passive:h}):r.addEventListener(s,a,!0):h!==void 0?r.addEventListener(s,a,{passive:h}):r.addEventListener(s,a,!1)}function Dd(r,s,a,d,h){var g=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var E=d.tag;if(E===3||E===4){var C=d.stateNode.containerInfo;if(C===h||C.nodeType===8&&C.parentNode===h)break;if(E===4)for(E=d.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===h||P.nodeType===8&&P.parentNode===h))return;E=E.return}for(;C!==null;){if(E=ds(C),E===null)return;if(P=E.tag,P===5||P===6){d=g=E;continue e}C=C.parentNode}}d=d.return}ya(function(){var z=g,ee=$s(a),te=[];e:{var J=ym.get(r);if(J!==void 0){var ce=ro,fe=r;switch(r){case"keypress":if(no(a)===0)break e;case"keydown":case"keyup":ce=m;break;case"focusin":fe="focus",ce=ao;break;case"focusout":fe="blur",ce=ao;break;case"beforeblur":case"afterblur":ce=ao;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Zl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=$;break;case fm:case pm:case mm:ce=Or;break;case gm:ce=ze;break;case"scroll":ce=Id;break;case"wheel":ce=Le;break;case"copy":case"cut":case"paste":ce=nu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=I}var pe=(s&4)!==0,ut=!pe&&r==="scroll",j=pe?J!==null?J+"Capture":null:J;pe=[];for(var D=z,U;D!==null;){U=D;var re=U.stateNode;if(U.tag===5&&re!==null&&(U=re,j!==null&&(re=lt(D,j),re!=null&&pe.push(La(D,re,U)))),ut)break;D=D.return}0<pe.length&&(J=new ce(J,fe,null,a,ee),te.push({event:J,listeners:pe}))}}if((s&7)===0){e:{if(J=r==="mouseover"||r==="pointerover",ce=r==="mouseout"||r==="pointerout",J&&a!==Ji&&(fe=a.relatedTarget||a.fromElement)&&(ds(fe)||fe[Vr]))break e;if((ce||J)&&(J=ee.window===ee?ee:(J=ee.ownerDocument)?J.defaultView||J.parentWindow:window,ce?(fe=a.relatedTarget||a.toElement,ce=z,fe=fe?ds(fe):null,fe!==null&&(ut=Mn(fe),fe!==ut||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ce=null,fe=z),ce!==fe)){if(pe=so,re="onMouseLeave",j="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(pe=I,re="onPointerLeave",j="onPointerEnter",D="pointer"),ut=ce==null?J:go(ce),U=fe==null?J:go(fe),J=new pe(re,D+"leave",ce,a,ee),J.target=ut,J.relatedTarget=U,re=null,ds(ee)===z&&(pe=new pe(j,D+"enter",fe,a,ee),pe.target=U,pe.relatedTarget=ut,re=pe),ut=re,ce&&fe)t:{for(pe=ce,j=fe,D=0,U=pe;U;U=po(U))D++;for(U=0,re=j;re;re=po(re))U++;for(;0<D-U;)pe=po(pe),D--;for(;0<U-D;)j=po(j),U--;for(;D--;){if(pe===j||j!==null&&pe===j.alternate)break t;pe=po(pe),j=po(j)}pe=null}else pe=null;ce!==null&&Tm(te,J,ce,pe,!1),fe!==null&&ut!==null&&Tm(te,ut,fe,pe,!0)}}e:{if(J=z?go(z):window,ce=J.nodeName&&J.nodeName.toLowerCase(),ce==="select"||ce==="input"&&J.type==="file")var ge=x0;else if(tm(J))if(rm)ge=O0;else{ge=b0;var we=N0}else(ce=J.nodeName)&&ce.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(ge=D0);if(ge&&(ge=ge(r,z))){nm(te,ge,a,ee);break e}we&&we(r,J,z),r==="focusout"&&(we=J._wrapperState)&&we.controlled&&J.type==="number"&&Us(J,"number",J.value)}switch(we=z?go(z):window,r){case"focusin":(tm(we)||we.contentEditable==="true")&&(ho=we,kd=z,Da=null);break;case"focusout":Da=kd=ho=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,dm(te,a,ee);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":dm(te,a,ee)}var Ee;if(ft)e:{switch(r){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else co?Zp(r,a)&&(Ae="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(cs&&a.locale!=="ko"&&(co||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&co&&(Ee=Ca()):(dn=ee,to="value"in dn?dn.value:dn.textContent,co=!0)),we=cu(z,Ae),0<we.length&&(Ae=new Pa(Ae,r,null,a,ee),te.push({event:Ae,listeners:we}),Ee?Ae.data=Ee:(Ee=em(a),Ee!==null&&(Ae.data=Ee)))),(Ee=hn?C0(r,a):k0(r,a))&&(z=cu(z,"onBeforeInput"),0<z.length&&(ee=new Pa("onBeforeInput","beforeinput",null,a,ee),te.push({event:ee,listeners:z}),ee.data=Ee))}wm(te,s)})}function La(r,s,a){return{instance:r,listener:s,currentTarget:a}}function cu(r,s){for(var a=s+"Capture",d=[];r!==null;){var h=r,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=lt(r,a),g!=null&&d.unshift(La(r,g,h)),g=lt(r,s),g!=null&&d.push(La(r,g,h))),r=r.return}return d}function po(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Tm(r,s,a,d,h){for(var g=s._reactName,E=[];a!==null&&a!==d;){var C=a,P=C.alternate,z=C.stateNode;if(P!==null&&P===d)break;C.tag===5&&z!==null&&(C=z,h?(P=lt(a,g),P!=null&&E.unshift(La(a,P,C))):h||(P=lt(a,g),P!=null&&E.push(La(a,P,C)))),a=a.return}E.length!==0&&r.push({event:s,listeners:E})}var B0=/\r\n?/g,z0=/\u0000|\uFFFD/g;function Im(r){return(typeof r=="string"?r:""+r).replace(B0,`
`).replace(z0,"")}function du(r,s,a){if(s=Im(s),Im(r)!==s&&a)throw Error(t(425))}function hu(){}var Od=null,Vd=null;function Ld(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(r){return Sm.resolve(null).then(r).catch(q0)}:Md;function q0(r){setTimeout(function(){throw r})}function jd(r,s){var a=s,d=0;do{var h=a.nextSibling;if(r.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(d===0){r.removeChild(h),zn(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=h}while(a);zn(s)}function hi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Am(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var mo=Math.random().toString(36).slice(2),lr="__reactFiber$"+mo,Ma="__reactProps$"+mo,Vr="__reactContainer$"+mo,Fd="__reactEvents$"+mo,H0="__reactListeners$"+mo,K0="__reactHandles$"+mo;function ds(r){var s=r[lr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Vr]||a[lr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Am(r);r!==null;){if(a=r[lr])return a;r=Am(r)}return s}r=a,a=r.parentNode}return null}function ja(r){return r=r[lr]||r[Vr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function go(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function fu(r){return r[Ma]||null}var Ud=[],yo=-1;function fi(r){return{current:r}}function Ye(r){0>yo||(r.current=Ud[yo],Ud[yo]=null,yo--)}function He(r,s){yo++,Ud[yo]=r.current,r.current=s}var pi={},Mt=fi(pi),Zt=fi(!1),hs=pi;function vo(r,s){var a=r.type.contextTypes;if(!a)return pi;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=s[g];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=h),h}function en(r){return r=r.childContextTypes,r!=null}function pu(){Ye(Zt),Ye(Mt)}function Cm(r,s,a){if(Mt.current!==pi)throw Error(t(168));He(Mt,s),He(Zt,a)}function km(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var h in d)if(!(h in s))throw Error(t(108,Te(r)||"Unknown",h));return ae({},a,d)}function mu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||pi,hs=Mt.current,He(Mt,r),He(Zt,Zt.current),!0}function Rm(r,s,a){var d=r.stateNode;if(!d)throw Error(t(169));a?(r=km(r,s,hs),d.__reactInternalMemoizedMergedChildContext=r,Ye(Zt),Ye(Mt),He(Mt,r)):Ye(Zt),He(Zt,a)}var Lr=null,gu=!1,Bd=!1;function Pm(r){Lr===null?Lr=[r]:Lr.push(r)}function G0(r){gu=!0,Pm(r)}function mi(){if(!Bd&&Lr!==null){Bd=!0;var r=0,s=Ve;try{var a=Lr;for(Ve=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}Lr=null,gu=!1}catch(h){throw Lr!==null&&(Lr=Lr.slice(r+1)),Ys(rs,mi),h}finally{Ve=s,Bd=!1}}return null}var _o=[],wo=0,yu=null,vu=0,Sn=[],An=0,fs=null,Mr=1,jr="";function ps(r,s){_o[wo++]=vu,_o[wo++]=yu,yu=r,vu=s}function xm(r,s,a){Sn[An++]=Mr,Sn[An++]=jr,Sn[An++]=fs,fs=r;var d=Mr;r=jr;var h=32-Ht(d)-1;d&=~(1<<h),a+=1;var g=32-Ht(s)+h;if(30<g){var E=h-h%5;g=(d&(1<<E)-1).toString(32),d>>=E,h-=E,Mr=1<<32-Ht(s)+h|a<<h|d,jr=g+r}else Mr=1<<g|a<<h|d,jr=r}function zd(r){r.return!==null&&(ps(r,1),xm(r,1,0))}function $d(r){for(;r===yu;)yu=_o[--wo],_o[wo]=null,vu=_o[--wo],_o[wo]=null;for(;r===fs;)fs=Sn[--An],Sn[An]=null,jr=Sn[--An],Sn[An]=null,Mr=Sn[--An],Sn[An]=null}var fn=null,pn=null,Ze=!1,qn=null;function Nm(r,s){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function bm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,fn=r,pn=hi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,fn=r,pn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=fs!==null?{id:Mr,overflow:jr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,fn=r,pn=null,!0):!1;default:return!1}}function Wd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function qd(r){if(Ze){var s=pn;if(s){var a=s;if(!bm(r,s)){if(Wd(r))throw Error(t(418));s=hi(a.nextSibling);var d=fn;s&&bm(r,s)?Nm(d,a):(r.flags=r.flags&-4097|2,Ze=!1,fn=r)}}else{if(Wd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,fn=r}}}function Dm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;fn=r}function _u(r){if(r!==fn)return!1;if(!Ze)return Dm(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Ld(r.type,r.memoizedProps)),s&&(s=pn)){if(Wd(r))throw Om(),Error(t(418));for(;s;)Nm(r,s),s=hi(s.nextSibling)}if(Dm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){pn=hi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}pn=null}}else pn=fn?hi(r.stateNode.nextSibling):null;return!0}function Om(){for(var r=pn;r;)r=hi(r.nextSibling)}function Eo(){pn=fn=null,Ze=!1}function Hd(r){qn===null?qn=[r]:qn.push(r)}var Q0=ye.ReactCurrentBatchConfig;function Fa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,r));var h=d,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var C=h.refs;E===null?delete C[g]:C[g]=E},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function wu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Vm(r){var s=r._init;return s(r._payload)}function Lm(r){function s(j,D){if(r){var U=j.deletions;U===null?(j.deletions=[D],j.flags|=16):U.push(D)}}function a(j,D){if(!r)return null;for(;D!==null;)s(j,D),D=D.sibling;return null}function d(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function h(j,D){return j=Ii(j,D),j.index=0,j.sibling=null,j}function g(j,D,U){return j.index=U,r?(U=j.alternate,U!==null?(U=U.index,U<D?(j.flags|=2,D):U):(j.flags|=2,D)):(j.flags|=1048576,D)}function E(j){return r&&j.alternate===null&&(j.flags|=2),j}function C(j,D,U,re){return D===null||D.tag!==6?(D=Mh(U,j.mode,re),D.return=j,D):(D=h(D,U),D.return=j,D)}function P(j,D,U,re){var ge=U.type;return ge===b?ee(j,D,U.props.children,re,U.key):D!==null&&(D.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===it&&Vm(ge)===D.type)?(re=h(D,U.props),re.ref=Fa(j,D,U),re.return=j,re):(re=Wu(U.type,U.key,U.props,null,j.mode,re),re.ref=Fa(j,D,U),re.return=j,re)}function z(j,D,U,re){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=jh(U,j.mode,re),D.return=j,D):(D=h(D,U.children||[]),D.return=j,D)}function ee(j,D,U,re,ge){return D===null||D.tag!==7?(D=Ts(U,j.mode,re,ge),D.return=j,D):(D=h(D,U),D.return=j,D)}function te(j,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Mh(""+D,j.mode,U),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Pe:return U=Wu(D.type,D.key,D.props,null,j.mode,U),U.ref=Fa(j,null,D),U.return=j,U;case Re:return D=jh(D,j.mode,U),D.return=j,D;case it:var re=D._init;return te(j,re(D._payload),U)}if(Cr(D)||me(D))return D=Ts(D,j.mode,U,null),D.return=j,D;wu(j,D)}return null}function J(j,D,U,re){var ge=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ge!==null?null:C(j,D,""+U,re);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Pe:return U.key===ge?P(j,D,U,re):null;case Re:return U.key===ge?z(j,D,U,re):null;case it:return ge=U._init,J(j,D,ge(U._payload),re)}if(Cr(U)||me(U))return ge!==null?null:ee(j,D,U,re,null);wu(j,U)}return null}function ce(j,D,U,re,ge){if(typeof re=="string"&&re!==""||typeof re=="number")return j=j.get(U)||null,C(D,j,""+re,ge);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case Pe:return j=j.get(re.key===null?U:re.key)||null,P(D,j,re,ge);case Re:return j=j.get(re.key===null?U:re.key)||null,z(D,j,re,ge);case it:var we=re._init;return ce(j,D,U,we(re._payload),ge)}if(Cr(re)||me(re))return j=j.get(U)||null,ee(D,j,re,ge,null);wu(D,re)}return null}function fe(j,D,U,re){for(var ge=null,we=null,Ee=D,Ae=D=0,kt=null;Ee!==null&&Ae<U.length;Ae++){Ee.index>Ae?(kt=Ee,Ee=null):kt=Ee.sibling;var Ue=J(j,Ee,U[Ae],re);if(Ue===null){Ee===null&&(Ee=kt);break}r&&Ee&&Ue.alternate===null&&s(j,Ee),D=g(Ue,D,Ae),we===null?ge=Ue:we.sibling=Ue,we=Ue,Ee=kt}if(Ae===U.length)return a(j,Ee),Ze&&ps(j,Ae),ge;if(Ee===null){for(;Ae<U.length;Ae++)Ee=te(j,U[Ae],re),Ee!==null&&(D=g(Ee,D,Ae),we===null?ge=Ee:we.sibling=Ee,we=Ee);return Ze&&ps(j,Ae),ge}for(Ee=d(j,Ee);Ae<U.length;Ae++)kt=ce(Ee,j,Ae,U[Ae],re),kt!==null&&(r&&kt.alternate!==null&&Ee.delete(kt.key===null?Ae:kt.key),D=g(kt,D,Ae),we===null?ge=kt:we.sibling=kt,we=kt);return r&&Ee.forEach(function(Si){return s(j,Si)}),Ze&&ps(j,Ae),ge}function pe(j,D,U,re){var ge=me(U);if(typeof ge!="function")throw Error(t(150));if(U=ge.call(U),U==null)throw Error(t(151));for(var we=ge=null,Ee=D,Ae=D=0,kt=null,Ue=U.next();Ee!==null&&!Ue.done;Ae++,Ue=U.next()){Ee.index>Ae?(kt=Ee,Ee=null):kt=Ee.sibling;var Si=J(j,Ee,Ue.value,re);if(Si===null){Ee===null&&(Ee=kt);break}r&&Ee&&Si.alternate===null&&s(j,Ee),D=g(Si,D,Ae),we===null?ge=Si:we.sibling=Si,we=Si,Ee=kt}if(Ue.done)return a(j,Ee),Ze&&ps(j,Ae),ge;if(Ee===null){for(;!Ue.done;Ae++,Ue=U.next())Ue=te(j,Ue.value,re),Ue!==null&&(D=g(Ue,D,Ae),we===null?ge=Ue:we.sibling=Ue,we=Ue);return Ze&&ps(j,Ae),ge}for(Ee=d(j,Ee);!Ue.done;Ae++,Ue=U.next())Ue=ce(Ee,j,Ae,Ue.value,re),Ue!==null&&(r&&Ue.alternate!==null&&Ee.delete(Ue.key===null?Ae:Ue.key),D=g(Ue,D,Ae),we===null?ge=Ue:we.sibling=Ue,we=Ue);return r&&Ee.forEach(function(RT){return s(j,RT)}),Ze&&ps(j,Ae),ge}function ut(j,D,U,re){if(typeof U=="object"&&U!==null&&U.type===b&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Pe:e:{for(var ge=U.key,we=D;we!==null;){if(we.key===ge){if(ge=U.type,ge===b){if(we.tag===7){a(j,we.sibling),D=h(we,U.props.children),D.return=j,j=D;break e}}else if(we.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===it&&Vm(ge)===we.type){a(j,we.sibling),D=h(we,U.props),D.ref=Fa(j,we,U),D.return=j,j=D;break e}a(j,we);break}else s(j,we);we=we.sibling}U.type===b?(D=Ts(U.props.children,j.mode,re,U.key),D.return=j,j=D):(re=Wu(U.type,U.key,U.props,null,j.mode,re),re.ref=Fa(j,D,U),re.return=j,j=re)}return E(j);case Re:e:{for(we=U.key;D!==null;){if(D.key===we)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(j,D.sibling),D=h(D,U.children||[]),D.return=j,j=D;break e}else{a(j,D);break}else s(j,D);D=D.sibling}D=jh(U,j.mode,re),D.return=j,j=D}return E(j);case it:return we=U._init,ut(j,D,we(U._payload),re)}if(Cr(U))return fe(j,D,U,re);if(me(U))return pe(j,D,U,re);wu(j,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(j,D.sibling),D=h(D,U),D.return=j,j=D):(a(j,D),D=Mh(U,j.mode,re),D.return=j,j=D),E(j)):a(j,D)}return ut}var To=Lm(!0),Mm=Lm(!1),Eu=fi(null),Tu=null,Io=null,Kd=null;function Gd(){Kd=Io=Tu=null}function Qd(r){var s=Eu.current;Ye(Eu),r._currentValue=s}function Yd(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function So(r,s){Tu=r,Kd=Io=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(tn=!0),r.firstContext=null)}function Cn(r){var s=r._currentValue;if(Kd!==r)if(r={context:r,memoizedValue:s,next:null},Io===null){if(Tu===null)throw Error(t(308));Io=r,Tu.dependencies={lanes:0,firstContext:r}}else Io=Io.next=r;return s}var ms=null;function Xd(r){ms===null?ms=[r]:ms.push(r)}function jm(r,s,a,d){var h=s.interleaved;return h===null?(a.next=a,Xd(s)):(a.next=h.next,h.next=a),s.interleaved=a,Fr(r,d)}function Fr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var gi=!1;function Jd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ur(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function yi(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Fe&2)!==0){var h=d.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s,Fr(r,a)}return h=d.interleaved,h===null?(s.next=s,Xd(d)):(s.next=h.next,h.next=s),d.interleaved=s,Fr(r,a)}function Iu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,oi(r,a)}}function Um(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?h=g=s:g=g.next=s}else h=g=s;a={baseState:d.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Su(r,s,a,d){var h=r.updateQueue;gi=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,C=h.shared.pending;if(C!==null){h.shared.pending=null;var P=C,z=P.next;P.next=null,E===null?g=z:E.next=z,E=P;var ee=r.alternate;ee!==null&&(ee=ee.updateQueue,C=ee.lastBaseUpdate,C!==E&&(C===null?ee.firstBaseUpdate=z:C.next=z,ee.lastBaseUpdate=P))}if(g!==null){var te=h.baseState;E=0,ee=z=P=null,C=g;do{var J=C.lane,ce=C.eventTime;if((d&J)===J){ee!==null&&(ee=ee.next={eventTime:ce,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var fe=r,pe=C;switch(J=s,ce=a,pe.tag){case 1:if(fe=pe.payload,typeof fe=="function"){te=fe.call(ce,te,J);break e}te=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=pe.payload,J=typeof fe=="function"?fe.call(ce,te,J):fe,J==null)break e;te=ae({},te,J);break e;case 2:gi=!0}}C.callback!==null&&C.lane!==0&&(r.flags|=64,J=h.effects,J===null?h.effects=[C]:J.push(C))}else ce={eventTime:ce,lane:J,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ee===null?(z=ee=ce,P=te):ee=ee.next=ce,E|=J;if(C=C.next,C===null){if(C=h.shared.pending,C===null)break;J=C,C=J.next,J.next=null,h.lastBaseUpdate=J,h.shared.pending=null}}while(!0);if(ee===null&&(P=te),h.baseState=P,h.firstBaseUpdate=z,h.lastBaseUpdate=ee,s=h.shared.interleaved,s!==null){h=s;do E|=h.lane,h=h.next;while(h!==s)}else g===null&&(h.shared.lanes=0);vs|=E,r.lanes=E,r.memoizedState=te}}function Bm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],h=d.callback;if(h!==null){if(d.callback=null,d=a,typeof h!="function")throw Error(t(191,h));h.call(d)}}}var Ua={},ur=fi(Ua),Ba=fi(Ua),za=fi(Ua);function gs(r){if(r===Ua)throw Error(t(174));return r}function Zd(r,s){switch(He(za,s),He(Ba,r),He(ur,Ua),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:_t(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=_t(s,r)}Ye(ur),He(ur,s)}function Ao(){Ye(ur),Ye(Ba),Ye(za)}function zm(r){gs(za.current);var s=gs(ur.current),a=_t(s,r.type);s!==a&&(He(Ba,r),He(ur,a))}function eh(r){Ba.current===r&&(Ye(ur),Ye(Ba))}var tt=fi(0);function Au(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var th=[];function nh(){for(var r=0;r<th.length;r++)th[r]._workInProgressVersionPrimary=null;th.length=0}var Cu=ye.ReactCurrentDispatcher,rh=ye.ReactCurrentBatchConfig,ys=0,nt=null,Et=null,At=null,ku=!1,$a=!1,Wa=0,Y0=0;function jt(){throw Error(t(321))}function ih(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Wn(r[a],s[a]))return!1;return!0}function sh(r,s,a,d,h,g){if(ys=g,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Cu.current=r===null||r.memoizedState===null?eT:tT,r=a(d,h),$a){g=0;do{if($a=!1,Wa=0,25<=g)throw Error(t(301));g+=1,At=Et=null,s.updateQueue=null,Cu.current=nT,r=a(d,h)}while($a)}if(Cu.current=xu,s=Et!==null&&Et.next!==null,ys=0,At=Et=nt=null,ku=!1,s)throw Error(t(300));return r}function oh(){var r=Wa!==0;return Wa=0,r}function cr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?nt.memoizedState=At=r:At=At.next=r,At}function kn(){if(Et===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=Et.next;var s=At===null?nt.memoizedState:At.next;if(s!==null)At=s,Et=r;else{if(r===null)throw Error(t(310));Et=r,r={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},At===null?nt.memoizedState=At=r:At=At.next=r}return At}function qa(r,s){return typeof s=="function"?s(r):s}function ah(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=Et,h=d.baseQueue,g=a.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}d.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,d=d.baseState;var C=E=null,P=null,z=g;do{var ee=z.lane;if((ys&ee)===ee)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),d=z.hasEagerState?z.eagerState:r(d,z.action);else{var te={lane:ee,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(C=P=te,E=d):P=P.next=te,nt.lanes|=ee,vs|=ee}z=z.next}while(z!==null&&z!==g);P===null?E=d:P.next=C,Wn(d,s.memoizedState)||(tn=!0),s.memoizedState=d,s.baseState=E,s.baseQueue=P,a.lastRenderedState=d}if(r=a.interleaved,r!==null){h=r;do g=h.lane,nt.lanes|=g,vs|=g,h=h.next;while(h!==r)}else h===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function lh(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=a.dispatch,h=a.pending,g=s.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do g=r(g,E.action),E=E.next;while(E!==h);Wn(g,s.memoizedState)||(tn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,d]}function $m(){}function Wm(r,s){var a=nt,d=kn(),h=s(),g=!Wn(d.memoizedState,h);if(g&&(d.memoizedState=h,tn=!0),d=d.queue,uh(Km.bind(null,a,d,r),[r]),d.getSnapshot!==s||g||At!==null&&At.memoizedState.tag&1){if(a.flags|=2048,Ha(9,Hm.bind(null,a,d,h,s),void 0,null),Ct===null)throw Error(t(349));(ys&30)!==0||qm(a,s,h)}return h}function qm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Hm(r,s,a,d){s.value=a,s.getSnapshot=d,Gm(s)&&Qm(r)}function Km(r,s,a){return a(function(){Gm(s)&&Qm(r)})}function Gm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Wn(r,a)}catch{return!0}}function Qm(r){var s=Fr(r,1);s!==null&&Qn(s,r,1,-1)}function Ym(r){var s=cr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:r},s.queue=r,r=r.dispatch=Z0.bind(null,nt,r),[s.memoizedState,r]}function Ha(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function Xm(){return kn().memoizedState}function Ru(r,s,a,d){var h=cr();nt.flags|=r,h.memoizedState=Ha(1|s,a,void 0,d===void 0?null:d)}function Pu(r,s,a,d){var h=kn();d=d===void 0?null:d;var g=void 0;if(Et!==null){var E=Et.memoizedState;if(g=E.destroy,d!==null&&ih(d,E.deps)){h.memoizedState=Ha(s,a,g,d);return}}nt.flags|=r,h.memoizedState=Ha(1|s,a,g,d)}function Jm(r,s){return Ru(8390656,8,r,s)}function uh(r,s){return Pu(2048,8,r,s)}function Zm(r,s){return Pu(4,2,r,s)}function eg(r,s){return Pu(4,4,r,s)}function tg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function ng(r,s,a){return a=a!=null?a.concat([r]):null,Pu(4,4,tg.bind(null,s,r),a)}function ch(){}function rg(r,s){var a=kn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ih(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function ig(r,s){var a=kn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ih(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function sg(r,s,a){return(ys&21)===0?(r.baseState&&(r.baseState=!1,tn=!0),r.memoizedState=a):(Wn(a,s)||(a=os(),nt.lanes|=a,vs|=a,r.baseState=!0),s)}function X0(r,s){var a=Ve;Ve=a!==0&&4>a?a:4,r(!0);var d=rh.transition;rh.transition={};try{r(!1),s()}finally{Ve=a,rh.transition=d}}function og(){return kn().memoizedState}function J0(r,s,a){var d=Ei(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},ag(r))lg(s,a);else if(a=jm(r,s,a,d),a!==null){var h=Qt();Qn(a,r,d,h),ug(a,s,d)}}function Z0(r,s,a){var d=Ei(r),h={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(ag(r))lg(s,h);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,C=g(E,a);if(h.hasEagerState=!0,h.eagerState=C,Wn(C,E)){var P=s.interleaved;P===null?(h.next=h,Xd(s)):(h.next=P.next,P.next=h),s.interleaved=h;return}}catch{}finally{}a=jm(r,s,h,d),a!==null&&(h=Qt(),Qn(a,r,d,h),ug(a,s,d))}}function ag(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function lg(r,s){$a=ku=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function ug(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,oi(r,a)}}var xu={readContext:Cn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},eT={readContext:Cn,useCallback:function(r,s){return cr().memoizedState=[r,s===void 0?null:s],r},useContext:Cn,useEffect:Jm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Ru(4194308,4,tg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Ru(4194308,4,r,s)},useInsertionEffect:function(r,s){return Ru(4,2,r,s)},useMemo:function(r,s){var a=cr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=cr();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=J0.bind(null,nt,r),[d.memoizedState,r]},useRef:function(r){var s=cr();return r={current:r},s.memoizedState=r},useState:Ym,useDebugValue:ch,useDeferredValue:function(r){return cr().memoizedState=r},useTransition:function(){var r=Ym(!1),s=r[0];return r=X0.bind(null,r[1]),cr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=nt,h=cr();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Ct===null)throw Error(t(349));(ys&30)!==0||qm(d,s,a)}h.memoizedState=a;var g={value:a,getSnapshot:s};return h.queue=g,Jm(Km.bind(null,d,g,r),[r]),d.flags|=2048,Ha(9,Hm.bind(null,d,g,a,s),void 0,null),a},useId:function(){var r=cr(),s=Ct.identifierPrefix;if(Ze){var a=jr,d=Mr;a=(d&~(1<<32-Ht(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=Wa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Y0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},tT={readContext:Cn,useCallback:rg,useContext:Cn,useEffect:uh,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:ah,useRef:Xm,useState:function(){return ah(qa)},useDebugValue:ch,useDeferredValue:function(r){var s=kn();return sg(s,Et.memoizedState,r)},useTransition:function(){var r=ah(qa)[0],s=kn().memoizedState;return[r,s]},useMutableSource:$m,useSyncExternalStore:Wm,useId:og,unstable_isNewReconciler:!1},nT={readContext:Cn,useCallback:rg,useContext:Cn,useEffect:uh,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:lh,useRef:Xm,useState:function(){return lh(qa)},useDebugValue:ch,useDeferredValue:function(r){var s=kn();return Et===null?s.memoizedState=r:sg(s,Et.memoizedState,r)},useTransition:function(){var r=lh(qa)[0],s=kn().memoizedState;return[r,s]},useMutableSource:$m,useSyncExternalStore:Wm,useId:og,unstable_isNewReconciler:!1};function Hn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function dh(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Nu={isMounted:function(r){return(r=r._reactInternals)?Mn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=Qt(),h=Ei(r),g=Ur(d,h);g.payload=s,a!=null&&(g.callback=a),s=yi(r,g,h),s!==null&&(Qn(s,r,h,d),Iu(s,r,h))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=Qt(),h=Ei(r),g=Ur(d,h);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=yi(r,g,h),s!==null&&(Qn(s,r,h,d),Iu(s,r,h))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Qt(),d=Ei(r),h=Ur(a,d);h.tag=2,s!=null&&(h.callback=s),s=yi(r,h,d),s!==null&&(Qn(s,r,d,a),Iu(s,r,d))}};function cg(r,s,a,d,h,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,g,E):s.prototype&&s.prototype.isPureReactComponent?!ba(a,d)||!ba(h,g):!0}function dg(r,s,a){var d=!1,h=pi,g=s.contextType;return typeof g=="object"&&g!==null?g=Cn(g):(h=en(s)?hs:Mt.current,d=s.contextTypes,g=(d=d!=null)?vo(r,h):pi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Nu,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=g),s}function hg(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&Nu.enqueueReplaceState(s,s.state,null)}function hh(r,s,a,d){var h=r.stateNode;h.props=a,h.state=r.memoizedState,h.refs={},Jd(r);var g=s.contextType;typeof g=="object"&&g!==null?h.context=Cn(g):(g=en(s)?hs:Mt.current,h.context=vo(r,g)),h.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(dh(r,s,g,a),h.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&Nu.enqueueReplaceState(h,h.state,null),Su(r,a,h,d),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function Co(r,s){try{var a="",d=s;do a+=Y(d),d=d.return;while(d);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:h,digest:null}}function fh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function ph(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var rT=typeof WeakMap=="function"?WeakMap:Map;function fg(r,s,a){a=Ur(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){ju||(ju=!0,Ph=d),ph(r,s)},a}function pg(r,s,a){a=Ur(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var h=s.value;a.payload=function(){return d(h)},a.callback=function(){ph(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){ph(r,s),typeof d!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function mg(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new rT;var h=new Set;d.set(s,h)}else h=d.get(s),h===void 0&&(h=new Set,d.set(s,h));h.has(a)||(h.add(a),r=yT.bind(null,r,s,a),s.then(r,r))}function gg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function yg(r,s,a,d,h){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ur(-1,1),s.tag=2,yi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var iT=ye.ReactCurrentOwner,tn=!1;function Gt(r,s,a,d){s.child=r===null?Mm(s,null,a,d):To(s,r.child,a,d)}function vg(r,s,a,d,h){a=a.render;var g=s.ref;return So(s,h),d=sh(r,s,a,d,g,h),a=oh(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,Br(r,s,h)):(Ze&&a&&zd(s),s.flags|=1,Gt(r,s,d,h),s.child)}function _g(r,s,a,d,h){if(r===null){var g=a.type;return typeof g=="function"&&!Lh(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,wg(r,s,g,d,h)):(r=Wu(a.type,null,d,s,s.mode,h),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&h)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:ba,a(E,d)&&r.ref===s.ref)return Br(r,s,h)}return s.flags|=1,r=Ii(g,d),r.ref=s.ref,r.return=s,s.child=r}function wg(r,s,a,d,h){if(r!==null){var g=r.memoizedProps;if(ba(g,d)&&r.ref===s.ref)if(tn=!1,s.pendingProps=d=g,(r.lanes&h)!==0)(r.flags&131072)!==0&&(tn=!0);else return s.lanes=r.lanes,Br(r,s,h)}return mh(r,s,a,d,h)}function Eg(r,s,a){var d=s.pendingProps,h=d.children,g=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Ro,mn),mn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(Ro,mn),mn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=g!==null?g.baseLanes:a,He(Ro,mn),mn|=d}else g!==null?(d=g.baseLanes|a,s.memoizedState=null):d=a,He(Ro,mn),mn|=d;return Gt(r,s,h,a),s.child}function Tg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function mh(r,s,a,d,h){var g=en(a)?hs:Mt.current;return g=vo(s,g),So(s,h),a=sh(r,s,a,d,g,h),d=oh(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,Br(r,s,h)):(Ze&&d&&zd(s),s.flags|=1,Gt(r,s,a,h),s.child)}function Ig(r,s,a,d,h){if(en(a)){var g=!0;mu(s)}else g=!1;if(So(s,h),s.stateNode===null)Du(r,s),dg(s,a,d),hh(s,a,d,h),d=!0;else if(r===null){var E=s.stateNode,C=s.memoizedProps;E.props=C;var P=E.context,z=a.contextType;typeof z=="object"&&z!==null?z=Cn(z):(z=en(a)?hs:Mt.current,z=vo(s,z));var ee=a.getDerivedStateFromProps,te=typeof ee=="function"||typeof E.getSnapshotBeforeUpdate=="function";te||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(C!==d||P!==z)&&hg(s,E,d,z),gi=!1;var J=s.memoizedState;E.state=J,Su(s,d,E,h),P=s.memoizedState,C!==d||J!==P||Zt.current||gi?(typeof ee=="function"&&(dh(s,a,ee,d),P=s.memoizedState),(C=gi||cg(s,a,C,d,J,P,z))?(te||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=P),E.props=d,E.state=P,E.context=z,d=C):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{E=s.stateNode,Fm(r,s),C=s.memoizedProps,z=s.type===s.elementType?C:Hn(s.type,C),E.props=z,te=s.pendingProps,J=E.context,P=a.contextType,typeof P=="object"&&P!==null?P=Cn(P):(P=en(a)?hs:Mt.current,P=vo(s,P));var ce=a.getDerivedStateFromProps;(ee=typeof ce=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(C!==te||J!==P)&&hg(s,E,d,P),gi=!1,J=s.memoizedState,E.state=J,Su(s,d,E,h);var fe=s.memoizedState;C!==te||J!==fe||Zt.current||gi?(typeof ce=="function"&&(dh(s,a,ce,d),fe=s.memoizedState),(z=gi||cg(s,a,z,d,J,fe,P)||!1)?(ee||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(d,fe,P),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(d,fe,P)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||C===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=fe),E.props=d,E.state=fe,E.context=P,d=z):(typeof E.componentDidUpdate!="function"||C===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),d=!1)}return gh(r,s,a,d,g,h)}function gh(r,s,a,d,h,g){Tg(r,s);var E=(s.flags&128)!==0;if(!d&&!E)return h&&Rm(s,a,!1),Br(r,s,g);d=s.stateNode,iT.current=s;var C=E&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&E?(s.child=To(s,r.child,null,g),s.child=To(s,null,C,g)):Gt(r,s,C,g),s.memoizedState=d.state,h&&Rm(s,a,!0),s.child}function Sg(r){var s=r.stateNode;s.pendingContext?Cm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Cm(r,s.context,!1),Zd(r,s.containerInfo)}function Ag(r,s,a,d,h){return Eo(),Hd(h),s.flags|=256,Gt(r,s,a,d),s.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function vh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Cg(r,s,a){var d=s.pendingProps,h=tt.current,g=!1,E=(s.flags&128)!==0,C;if((C=E)||(C=r!==null&&r.memoizedState===null?!1:(h&2)!==0),C?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),He(tt,h&1),r===null)return qd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=d.children,r=d.fallback,g?(d=s.mode,g=s.child,E={mode:"hidden",children:E},(d&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=qu(E,d,0,null),r=Ts(r,d,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=vh(a),s.memoizedState=yh,r):_h(s,E));if(h=r.memoizedState,h!==null&&(C=h.dehydrated,C!==null))return sT(r,s,E,d,C,h,a);if(g){g=d.fallback,E=s.mode,h=r.child,C=h.sibling;var P={mode:"hidden",children:d.children};return(E&1)===0&&s.child!==h?(d=s.child,d.childLanes=0,d.pendingProps=P,s.deletions=null):(d=Ii(h,P),d.subtreeFlags=h.subtreeFlags&14680064),C!==null?g=Ii(C,g):(g=Ts(g,E,a,null),g.flags|=2),g.return=s,d.return=s,d.sibling=g,s.child=d,d=g,g=s.child,E=r.child.memoizedState,E=E===null?vh(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~a,s.memoizedState=yh,d}return g=r.child,r=g.sibling,d=Ii(g,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function _h(r,s){return s=qu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function bu(r,s,a,d){return d!==null&&Hd(d),To(s,r.child,null,a),r=_h(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function sT(r,s,a,d,h,g,E){if(a)return s.flags&256?(s.flags&=-257,d=fh(Error(t(422))),bu(r,s,E,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=d.fallback,h=s.mode,d=qu({mode:"visible",children:d.children},h,0,null),g=Ts(g,h,E,null),g.flags|=2,d.return=s,g.return=s,d.sibling=g,s.child=d,(s.mode&1)!==0&&To(s,r.child,null,E),s.child.memoizedState=vh(E),s.memoizedState=yh,g);if((s.mode&1)===0)return bu(r,s,E,null);if(h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var C=d.dgst;return d=C,g=Error(t(419)),d=fh(g,d,void 0),bu(r,s,E,d)}if(C=(E&r.childLanes)!==0,tn||C){if(d=Ct,d!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(d.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Fr(r,h),Qn(d,r,h,-1))}return Vh(),d=fh(Error(t(421))),bu(r,s,E,d)}return h.data==="$?"?(s.flags|=128,s.child=r.child,s=vT.bind(null,r),h._reactRetry=s,null):(r=g.treeContext,pn=hi(h.nextSibling),fn=s,Ze=!0,qn=null,r!==null&&(Sn[An++]=Mr,Sn[An++]=jr,Sn[An++]=fs,Mr=r.id,jr=r.overflow,fs=s),s=_h(s,d.children),s.flags|=4096,s)}function kg(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),Yd(r.return,s,a)}function wh(r,s,a,d,h){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:h}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=a,g.tailMode=h)}function Rg(r,s,a){var d=s.pendingProps,h=d.revealOrder,g=d.tail;if(Gt(r,s,d.children,a),d=tt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&kg(r,a,s);else if(r.tag===19)kg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(He(tt,d),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(a=s.child,h=null;a!==null;)r=a.alternate,r!==null&&Au(r)===null&&(h=a),a=a.sibling;a=h,a===null?(h=s.child,s.child=null):(h=a.sibling,a.sibling=null),wh(s,!1,h,a,g);break;case"backwards":for(a=null,h=s.child,s.child=null;h!==null;){if(r=h.alternate,r!==null&&Au(r)===null){s.child=h;break}r=h.sibling,h.sibling=a,a=h,h=r}wh(s,!0,a,null,g);break;case"together":wh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Du(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Br(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),vs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ii(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ii(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function oT(r,s,a){switch(s.tag){case 3:Sg(s),Eo();break;case 5:zm(s);break;case 1:en(s.type)&&mu(s);break;case 4:Zd(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,h=s.memoizedProps.value;He(Eu,d._currentValue),d._currentValue=h;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(He(tt,tt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Cg(r,s,a):(He(tt,tt.current&1),r=Br(r,s,a),r!==null?r.sibling:null);He(tt,tt.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return Rg(r,s,a);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),He(tt,tt.current),d)break;return null;case 22:case 23:return s.lanes=0,Eg(r,s,a)}return Br(r,s,a)}var Pg,Eh,xg,Ng;Pg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Eh=function(){},xg=function(r,s,a,d){var h=r.memoizedProps;if(h!==d){r=s.stateNode,gs(ur.current);var g=null;switch(a){case"input":h=Pt(r,h),d=Pt(r,d),g=[];break;case"select":h=ae({},h,{value:void 0}),d=ae({},d,{value:void 0}),g=[];break;case"textarea":h=aa(r,h),d=aa(r,d),g=[];break;default:typeof h.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=hu)}fa(a,d);var E;a=null;for(z in h)if(!d.hasOwnProperty(z)&&h.hasOwnProperty(z)&&h[z]!=null)if(z==="style"){var C=h[z];for(E in C)C.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in d){var P=d[z];if(C=h!=null?h[z]:void 0,d.hasOwnProperty(z)&&P!==C&&(P!=null||C!=null))if(z==="style")if(C){for(E in C)!C.hasOwnProperty(E)||P&&P.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in P)P.hasOwnProperty(E)&&C[E]!==P[E]&&(a||(a={}),a[E]=P[E])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,C=C?C.__html:void 0,P!=null&&C!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Qe("scroll",r),g||C===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Ng=function(r,s,a,d){a!==d&&(s.flags|=4)};function Ka(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var h=r.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags&14680064,d|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags,d|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function aT(r,s,a){var d=s.pendingProps;switch($d(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return en(s.type)&&pu(),Ft(s),null;case 3:return d=s.stateNode,Ao(),Ye(Zt),Ye(Mt),nh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(_u(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,qn!==null&&(bh(qn),qn=null))),Eh(r,s),Ft(s),null;case 5:eh(s);var h=gs(za.current);if(a=s.type,r!==null&&s.stateNode!=null)xg(r,s,a,d,h),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=gs(ur.current),_u(s)){d=s.stateNode,a=s.type;var g=s.memoizedProps;switch(d[lr]=s,d[Ma]=g,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",d),Qe("close",d);break;case"iframe":case"object":case"embed":Qe("load",d);break;case"video":case"audio":for(h=0;h<Oa.length;h++)Qe(Oa[h],d);break;case"source":Qe("error",d);break;case"img":case"image":case"link":Qe("error",d),Qe("load",d);break;case"details":Qe("toggle",d);break;case"input":Fs(d,g),Qe("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",d);break;case"textarea":Bs(d,g),Qe("invalid",d)}fa(a,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var C=g[E];E==="children"?typeof C=="string"?d.textContent!==C&&(g.suppressHydrationWarning!==!0&&du(d.textContent,C,r),h=["children",C]):typeof C=="number"&&d.textContent!==""+C&&(g.suppressHydrationWarning!==!0&&du(d.textContent,C,r),h=["children",""+C]):o.hasOwnProperty(E)&&C!=null&&E==="onScroll"&&Qe("scroll",d)}switch(a){case"input":vn(d),Ml(d,g,!0);break;case"textarea":vn(d),la(d);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(d.onclick=hu)}d=h,s.updateQueue=d,d!==null&&(s.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=vt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=E.createElement(a,{is:d.is}):(r=E.createElement(a),a==="select"&&(E=r,d.multiple?E.multiple=!0:d.size&&(E.size=d.size))):r=E.createElementNS(r,a),r[lr]=s,r[Ma]=d,Pg(r,s,!1,!1),s.stateNode=r;e:{switch(E=pa(a,d),a){case"dialog":Qe("cancel",r),Qe("close",r),h=d;break;case"iframe":case"object":case"embed":Qe("load",r),h=d;break;case"video":case"audio":for(h=0;h<Oa.length;h++)Qe(Oa[h],r);h=d;break;case"source":Qe("error",r),h=d;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),h=d;break;case"details":Qe("toggle",r),h=d;break;case"input":Fs(r,d),h=Pt(r,d),Qe("invalid",r);break;case"option":h=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},h=ae({},d,{value:void 0}),Qe("invalid",r);break;case"textarea":Bs(r,d),h=aa(r,d),Qe("invalid",r);break;default:h=d}fa(a,h),C=h;for(g in C)if(C.hasOwnProperty(g)){var P=C[g];g==="style"?da(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ua(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&ti(r,P):typeof P=="number"&&ti(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Qe("scroll",r):P!=null&&Z(r,g,P,E))}switch(a){case"input":vn(r),Ml(r,d,!1);break;case"textarea":vn(r),la(r);break;case"option":d.value!=null&&r.setAttribute("value",""+_e(d.value));break;case"select":r.multiple=!!d.multiple,g=d.value,g!=null?kr(r,!!d.multiple,g,!1):d.defaultValue!=null&&kr(r,!!d.multiple,d.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=hu)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Ng(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=gs(za.current),gs(ur.current),_u(s)){if(d=s.stateNode,a=s.memoizedProps,d[lr]=s,(g=d.nodeValue!==a)&&(r=fn,r!==null))switch(r.tag){case 3:du(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&du(d.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[lr]=s,s.stateNode=d}return Ft(s),null;case 13:if(Ye(tt),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&pn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Om(),Eo(),s.flags|=98560,g=!1;else if(g=_u(s),d!==null&&d.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[lr]=s}else Eo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else qn!==null&&(bh(qn),qn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(tt.current&1)!==0?Tt===0&&(Tt=3):Vh())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return Ao(),Eh(r,s),r===null&&Va(s.stateNode.containerInfo),Ft(s),null;case 10:return Qd(s.type._context),Ft(s),null;case 17:return en(s.type)&&pu(),Ft(s),null;case 19:if(Ye(tt),g=s.memoizedState,g===null)return Ft(s),null;if(d=(s.flags&128)!==0,E=g.rendering,E===null)if(d)Ka(g,!1);else{if(Tt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=Au(r),E!==null){for(s.flags|=128,Ka(g,!1),d=E.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)g=a,r=d,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return He(tt,tt.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>Po&&(s.flags|=128,d=!0,Ka(g,!1),s.lanes=4194304)}else{if(!d)if(r=Au(E),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ka(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Ze)return Ft(s),null}else 2*qe()-g.renderingStartTime>Po&&a!==1073741824&&(s.flags|=128,d=!0,Ka(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(a=g.last,a!==null?a.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=tt.current,He(tt,d?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return Oh(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(mn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function lT(r,s){switch($d(s),s.tag){case 1:return en(s.type)&&pu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ao(),Ye(Zt),Ye(Mt),nh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return eh(s),null;case 13:if(Ye(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Eo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(tt),null;case 4:return Ao(),null;case 10:return Qd(s.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var Ou=!1,Ut=!1,uT=typeof WeakSet=="function"?WeakSet:Set,he=null;function ko(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){ot(r,s,d)}else a.current=null}function Th(r,s,a){try{a()}catch(d){ot(r,s,d)}}var bg=!1;function cT(r,s){if(Od=ui,r=cm(),Cd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var h=d.anchorOffset,g=d.focusNode;d=d.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,C=-1,P=-1,z=0,ee=0,te=r,J=null;t:for(;;){for(var ce;te!==a||h!==0&&te.nodeType!==3||(C=E+h),te!==g||d!==0&&te.nodeType!==3||(P=E+d),te.nodeType===3&&(E+=te.nodeValue.length),(ce=te.firstChild)!==null;)J=te,te=ce;for(;;){if(te===r)break t;if(J===a&&++z===h&&(C=E),J===g&&++ee===d&&(P=E),(ce=te.nextSibling)!==null)break;te=J,J=te.parentNode}te=ce}a=C===-1||P===-1?null:{start:C,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vd={focusedElem:r,selectionRange:a},ui=!1,he=s;he!==null;)if(s=he,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,he=r;else for(;he!==null;){s=he;try{var fe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var pe=fe.memoizedProps,ut=fe.memoizedState,j=s.stateNode,D=j.getSnapshotBeforeUpdate(s.elementType===s.type?pe:Hn(s.type,pe),ut);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(re){ot(s,s.return,re)}if(r=s.sibling,r!==null){r.return=s.return,he=r;break}he=s.return}return fe=bg,bg=!1,fe}function Ga(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var h=d=d.next;do{if((h.tag&r)===r){var g=h.destroy;h.destroy=void 0,g!==void 0&&Th(s,a,g)}h=h.next}while(h!==d)}}function Vu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function Ih(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Dg(r){var s=r.alternate;s!==null&&(r.alternate=null,Dg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[lr],delete s[Ma],delete s[Fd],delete s[H0],delete s[K0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Og(r){return r.tag===5||r.tag===3||r.tag===4}function Vg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Og(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Sh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=hu));else if(d!==4&&(r=r.child,r!==null))for(Sh(r,s,a),r=r.sibling;r!==null;)Sh(r,s,a),r=r.sibling}function Ah(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(Ah(r,s,a),r=r.sibling;r!==null;)Ah(r,s,a),r=r.sibling}var bt=null,Kn=!1;function vi(r,s,a){for(a=a.child;a!==null;)Lg(r,s,a),a=a.sibling}function Lg(r,s,a){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(is,a)}catch{}switch(a.tag){case 5:Ut||ko(a,s);case 6:var d=bt,h=Kn;bt=null,vi(r,s,a),bt=d,Kn=h,bt!==null&&(Kn?(r=bt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):bt.removeChild(a.stateNode));break;case 18:bt!==null&&(Kn?(r=bt,a=a.stateNode,r.nodeType===8?jd(r.parentNode,a):r.nodeType===1&&jd(r,a),zn(r)):jd(bt,a.stateNode));break;case 4:d=bt,h=Kn,bt=a.stateNode.containerInfo,Kn=!0,vi(r,s,a),bt=d,Kn=h;break;case 0:case 11:case 14:case 15:if(!Ut&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){h=d=d.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Th(a,s,E),h=h.next}while(h!==d)}vi(r,s,a);break;case 1:if(!Ut&&(ko(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(C){ot(a,s,C)}vi(r,s,a);break;case 21:vi(r,s,a);break;case 22:a.mode&1?(Ut=(d=Ut)||a.memoizedState!==null,vi(r,s,a),Ut=d):vi(r,s,a);break;default:vi(r,s,a)}}function Mg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new uT),s.forEach(function(d){var h=_T.bind(null,r,d);a.has(d)||(a.add(d),d.then(h,h))})}}function Gn(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var h=a[d];try{var g=r,E=s,C=E;e:for(;C!==null;){switch(C.tag){case 5:bt=C.stateNode,Kn=!1;break e;case 3:bt=C.stateNode.containerInfo,Kn=!0;break e;case 4:bt=C.stateNode.containerInfo,Kn=!0;break e}C=C.return}if(bt===null)throw Error(t(160));Lg(g,E,h),bt=null,Kn=!1;var P=h.alternate;P!==null&&(P.return=null),h.return=null}catch(z){ot(h,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)jg(s,r),s=s.sibling}function jg(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Gn(s,r),dr(r),d&4){try{Ga(3,r,r.return),Vu(3,r)}catch(pe){ot(r,r.return,pe)}try{Ga(5,r,r.return)}catch(pe){ot(r,r.return,pe)}}break;case 1:Gn(s,r),dr(r),d&512&&a!==null&&ko(a,a.return);break;case 5:if(Gn(s,r),dr(r),d&512&&a!==null&&ko(a,a.return),r.flags&32){var h=r.stateNode;try{ti(h,"")}catch(pe){ot(r,r.return,pe)}}if(d&4&&(h=r.stateNode,h!=null)){var g=r.memoizedProps,E=a!==null?a.memoizedProps:g,C=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{C==="input"&&g.type==="radio"&&g.name!=null&&sa(h,g),pa(C,E);var z=pa(C,g);for(E=0;E<P.length;E+=2){var ee=P[E],te=P[E+1];ee==="style"?da(h,te):ee==="dangerouslySetInnerHTML"?ua(h,te):ee==="children"?ti(h,te):Z(h,ee,te,z)}switch(C){case"input":oa(h,g);break;case"textarea":zs(h,g);break;case"select":var J=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var ce=g.value;ce!=null?kr(h,!!g.multiple,ce,!1):J!==!!g.multiple&&(g.defaultValue!=null?kr(h,!!g.multiple,g.defaultValue,!0):kr(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ma]=g}catch(pe){ot(r,r.return,pe)}}break;case 6:if(Gn(s,r),dr(r),d&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,g=r.memoizedProps;try{h.nodeValue=g}catch(pe){ot(r,r.return,pe)}}break;case 3:if(Gn(s,r),dr(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{zn(s.containerInfo)}catch(pe){ot(r,r.return,pe)}break;case 4:Gn(s,r),dr(r);break;case 13:Gn(s,r),dr(r),h=r.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Rh=qe())),d&4&&Mg(r);break;case 22:if(ee=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(z=Ut)||ee,Gn(s,r),Ut=z):Gn(s,r),dr(r),d&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!ee&&(r.mode&1)!==0)for(he=r,ee=r.child;ee!==null;){for(te=he=ee;he!==null;){switch(J=he,ce=J.child,J.tag){case 0:case 11:case 14:case 15:Ga(4,J,J.return);break;case 1:ko(J,J.return);var fe=J.stateNode;if(typeof fe.componentWillUnmount=="function"){d=J,a=J.return;try{s=d,fe.props=s.memoizedProps,fe.state=s.memoizedState,fe.componentWillUnmount()}catch(pe){ot(d,a,pe)}}break;case 5:ko(J,J.return);break;case 22:if(J.memoizedState!==null){Bg(te);continue}}ce!==null?(ce.return=J,he=ce):Bg(te)}ee=ee.sibling}e:for(ee=null,te=r;;){if(te.tag===5){if(ee===null){ee=te;try{h=te.stateNode,z?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(C=te.stateNode,P=te.memoizedProps.style,E=P!=null&&P.hasOwnProperty("display")?P.display:null,C.style.display=ca("display",E))}catch(pe){ot(r,r.return,pe)}}}else if(te.tag===6){if(ee===null)try{te.stateNode.nodeValue=z?"":te.memoizedProps}catch(pe){ot(r,r.return,pe)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===r)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===r)break e;for(;te.sibling===null;){if(te.return===null||te.return===r)break e;ee===te&&(ee=null),te=te.return}ee===te&&(ee=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:Gn(s,r),dr(r),d&4&&Mg(r);break;case 21:break;default:Gn(s,r),dr(r)}}function dr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Og(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var h=d.stateNode;d.flags&32&&(ti(h,""),d.flags&=-33);var g=Vg(r);Ah(r,g,h);break;case 3:case 4:var E=d.stateNode.containerInfo,C=Vg(r);Sh(r,C,E);break;default:throw Error(t(161))}}catch(P){ot(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function dT(r,s,a){he=r,Fg(r)}function Fg(r,s,a){for(var d=(r.mode&1)!==0;he!==null;){var h=he,g=h.child;if(h.tag===22&&d){var E=h.memoizedState!==null||Ou;if(!E){var C=h.alternate,P=C!==null&&C.memoizedState!==null||Ut;C=Ou;var z=Ut;if(Ou=E,(Ut=P)&&!z)for(he=h;he!==null;)E=he,P=E.child,E.tag===22&&E.memoizedState!==null?zg(h):P!==null?(P.return=E,he=P):zg(h);for(;g!==null;)he=g,Fg(g),g=g.sibling;he=h,Ou=C,Ut=z}Ug(r)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,he=g):Ug(r)}}function Ug(r){for(;he!==null;){var s=he;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||Vu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Ut)if(a===null)d.componentDidMount();else{var h=s.elementType===s.type?a.memoizedProps:Hn(s.type,a.memoizedProps);d.componentDidUpdate(h,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Bm(s,g,d);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Bm(s,E,a)}break;case 5:var C=s.stateNode;if(a===null&&s.flags&4){a=C;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var ee=z.memoizedState;if(ee!==null){var te=ee.dehydrated;te!==null&&zn(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&Ih(s)}catch(J){ot(s,s.return,J)}}if(s===r){he=null;break}if(a=s.sibling,a!==null){a.return=s.return,he=a;break}he=s.return}}function Bg(r){for(;he!==null;){var s=he;if(s===r){he=null;break}var a=s.sibling;if(a!==null){a.return=s.return,he=a;break}he=s.return}}function zg(r){for(;he!==null;){var s=he;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Vu(4,s)}catch(P){ot(s,a,P)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var h=s.return;try{d.componentDidMount()}catch(P){ot(s,h,P)}}var g=s.return;try{Ih(s)}catch(P){ot(s,g,P)}break;case 5:var E=s.return;try{Ih(s)}catch(P){ot(s,E,P)}}}catch(P){ot(s,s.return,P)}if(s===r){he=null;break}var C=s.sibling;if(C!==null){C.return=s.return,he=C;break}he=s.return}}var hT=Math.ceil,Lu=ye.ReactCurrentDispatcher,Ch=ye.ReactCurrentOwner,Rn=ye.ReactCurrentBatchConfig,Fe=0,Ct=null,pt=null,Dt=0,mn=0,Ro=fi(0),Tt=0,Qa=null,vs=0,Mu=0,kh=0,Ya=null,nn=null,Rh=0,Po=1/0,zr=null,ju=!1,Ph=null,_i=null,Fu=!1,wi=null,Uu=0,Xa=0,xh=null,Bu=-1,zu=0;function Qt(){return(Fe&6)!==0?qe():Bu!==-1?Bu:Bu=qe()}function Ei(r){return(r.mode&1)===0?1:(Fe&2)!==0&&Dt!==0?Dt&-Dt:Q0.transition!==null?(zu===0&&(zu=os()),zu):(r=Ve,r!==0||(r=window.event,r=r===void 0?16:Aa(r.type)),r)}function Qn(r,s,a,d){if(50<Xa)throw Xa=0,xh=null,Error(t(185));si(r,a,d),((Fe&2)===0||r!==Ct)&&(r===Ct&&((Fe&2)===0&&(Mu|=a),Tt===4&&Ti(r,Dt)),rn(r,d),a===1&&Fe===0&&(s.mode&1)===0&&(Po=qe()+500,gu&&mi()))}function rn(r,s){var a=r.callbackNode;xr(r,s);var d=ss(r,r===Ct?Dt:0);if(d===0)a!==null&&wa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&wa(a),s===1)r.tag===0?G0(Wg.bind(null,r)):Pm(Wg.bind(null,r)),W0(function(){(Fe&6)===0&&mi()}),a=null;else{switch(ai(d)){case 1:a=rs;break;case 4:a=ni;break;case 16:a=En;break;case 536870912:a=zl;break;default:a=En}a=Jg(a,$g.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function $g(r,s){if(Bu=-1,zu=0,(Fe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(xo()&&r.callbackNode!==a)return null;var d=ss(r,r===Ct?Dt:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=$u(r,d);else{s=d;var h=Fe;Fe|=2;var g=Hg();(Ct!==r||Dt!==s)&&(zr=null,Po=qe()+500,ws(r,s));do try{mT();break}catch(C){qg(r,C)}while(!0);Gd(),Lu.current=g,Fe=h,pt!==null?s=0:(Ct=null,Dt=0,s=Tt)}if(s!==0){if(s===2&&(h=cn(r),h!==0&&(d=h,s=Nh(r,h))),s===1)throw a=Qa,ws(r,0),Ti(r,d),rn(r,qe()),a;if(s===6)Ti(r,d);else{if(h=r.current.alternate,(d&30)===0&&!fT(h)&&(s=$u(r,d),s===2&&(g=cn(r),g!==0&&(d=g,s=Nh(r,g))),s===1))throw a=Qa,ws(r,0),Ti(r,d),rn(r,qe()),a;switch(r.finishedWork=h,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Es(r,nn,zr);break;case 3:if(Ti(r,d),(d&130023424)===d&&(s=Rh+500-qe(),10<s)){if(ss(r,0)!==0)break;if(h=r.suspendedLanes,(h&d)!==d){Qt(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=Md(Es.bind(null,r,nn,zr),s);break}Es(r,nn,zr);break;case 4:if(Ti(r,d),(d&4194240)===d)break;for(s=r.eventTimes,h=-1;0<d;){var E=31-Ht(d);g=1<<E,E=s[E],E>h&&(h=E),d&=~g}if(d=h,d=qe()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*hT(d/1960))-d,10<d){r.timeoutHandle=Md(Es.bind(null,r,nn,zr),d);break}Es(r,nn,zr);break;case 5:Es(r,nn,zr);break;default:throw Error(t(329))}}}return rn(r,qe()),r.callbackNode===a?$g.bind(null,r):null}function Nh(r,s){var a=Ya;return r.current.memoizedState.isDehydrated&&(ws(r,s).flags|=256),r=$u(r,s),r!==2&&(s=nn,nn=a,s!==null&&bh(s)),r}function bh(r){nn===null?nn=r:nn.push.apply(nn,r)}function fT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var h=a[d],g=h.getSnapshot;h=h.value;try{if(!Wn(g(),h))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ti(r,s){for(s&=~kh,s&=~Mu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Ht(s),d=1<<a;r[a]=-1,s&=~d}}function Wg(r){if((Fe&6)!==0)throw Error(t(327));xo();var s=ss(r,0);if((s&1)===0)return rn(r,qe()),null;var a=$u(r,s);if(r.tag!==0&&a===2){var d=cn(r);d!==0&&(s=d,a=Nh(r,d))}if(a===1)throw a=Qa,ws(r,0),Ti(r,s),rn(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Es(r,nn,zr),rn(r,qe()),null}function Dh(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(Po=qe()+500,gu&&mi())}}function _s(r){wi!==null&&wi.tag===0&&(Fe&6)===0&&xo();var s=Fe;Fe|=1;var a=Rn.transition,d=Ve;try{if(Rn.transition=null,Ve=1,r)return r()}finally{Ve=d,Rn.transition=a,Fe=s,(Fe&6)===0&&mi()}}function Oh(){mn=Ro.current,Ye(Ro)}function ws(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,$0(a)),pt!==null)for(a=pt.return;a!==null;){var d=a;switch($d(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&pu();break;case 3:Ao(),Ye(Zt),Ye(Mt),nh();break;case 5:eh(d);break;case 4:Ao();break;case 13:Ye(tt);break;case 19:Ye(tt);break;case 10:Qd(d.type._context);break;case 22:case 23:Oh()}a=a.return}if(Ct=r,pt=r=Ii(r.current,null),Dt=mn=s,Tt=0,Qa=null,kh=Mu=vs=0,nn=Ya=null,ms!==null){for(s=0;s<ms.length;s++)if(a=ms[s],d=a.interleaved,d!==null){a.interleaved=null;var h=d.next,g=a.pending;if(g!==null){var E=g.next;g.next=h,d.next=E}a.pending=d}ms=null}return r}function qg(r,s){do{var a=pt;try{if(Gd(),Cu.current=xu,ku){for(var d=nt.memoizedState;d!==null;){var h=d.queue;h!==null&&(h.pending=null),d=d.next}ku=!1}if(ys=0,At=Et=nt=null,$a=!1,Wa=0,Ch.current=null,a===null||a.return===null){Tt=1,Qa=s,pt=null;break}e:{var g=r,E=a.return,C=a,P=s;if(s=Dt,C.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,ee=C,te=ee.tag;if((ee.mode&1)===0&&(te===0||te===11||te===15)){var J=ee.alternate;J?(ee.updateQueue=J.updateQueue,ee.memoizedState=J.memoizedState,ee.lanes=J.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var ce=gg(E);if(ce!==null){ce.flags&=-257,yg(ce,E,C,g,s),ce.mode&1&&mg(g,z,s),s=ce,P=z;var fe=s.updateQueue;if(fe===null){var pe=new Set;pe.add(P),s.updateQueue=pe}else fe.add(P);break e}else{if((s&1)===0){mg(g,z,s),Vh();break e}P=Error(t(426))}}else if(Ze&&C.mode&1){var ut=gg(E);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),yg(ut,E,C,g,s),Hd(Co(P,C));break e}}g=P=Co(P,C),Tt!==4&&(Tt=2),Ya===null?Ya=[g]:Ya.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var j=fg(g,P,s);Um(g,j);break e;case 1:C=P;var D=g.type,U=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(_i===null||!_i.has(U)))){g.flags|=65536,s&=-s,g.lanes|=s;var re=pg(g,C,s);Um(g,re);break e}}g=g.return}while(g!==null)}Gg(a)}catch(ge){s=ge,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function Hg(){var r=Lu.current;return Lu.current=xu,r===null?xu:r}function Vh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Ct===null||(vs&268435455)===0&&(Mu&268435455)===0||Ti(Ct,Dt)}function $u(r,s){var a=Fe;Fe|=2;var d=Hg();(Ct!==r||Dt!==s)&&(zr=null,ws(r,s));do try{pT();break}catch(h){qg(r,h)}while(!0);if(Gd(),Fe=a,Lu.current=d,pt!==null)throw Error(t(261));return Ct=null,Dt=0,Tt}function pT(){for(;pt!==null;)Kg(pt)}function mT(){for(;pt!==null&&!Ul();)Kg(pt)}function Kg(r){var s=Xg(r.alternate,r,mn);r.memoizedProps=r.pendingProps,s===null?Gg(r):pt=s,Ch.current=null}function Gg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=aT(a,s,mn),a!==null){pt=a;return}}else{if(a=lT(a,s),a!==null){a.flags&=32767,pt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Tt=6,pt=null;return}}if(s=s.sibling,s!==null){pt=s;return}pt=s=r}while(s!==null);Tt===0&&(Tt=5)}function Es(r,s,a){var d=Ve,h=Rn.transition;try{Rn.transition=null,Ve=1,gT(r,s,a,d)}finally{Rn.transition=h,Ve=d}return null}function gT(r,s,a,d){do xo();while(wi!==null);if((Fe&6)!==0)throw Error(t(327));a=r.finishedWork;var h=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(We(r,g),r===Ct&&(pt=Ct=null,Dt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fu||(Fu=!0,Jg(En,function(){return xo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Rn.transition,Rn.transition=null;var E=Ve;Ve=1;var C=Fe;Fe|=4,Ch.current=null,cT(r,a),jg(a,r),L0(Vd),ui=!!Od,Vd=Od=null,r.current=a,dT(a),vd(),Fe=C,Ve=E,Rn.transition=g}else r.current=a;if(Fu&&(Fu=!1,wi=r,Uu=h),g=r.pendingLanes,g===0&&(_i=null),$l(a.stateNode),rn(r,qe()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)h=s[a],d(h.value,{componentStack:h.stack,digest:h.digest});if(ju)throw ju=!1,r=Ph,Ph=null,r;return(Uu&1)!==0&&r.tag!==0&&xo(),g=r.pendingLanes,(g&1)!==0?r===xh?Xa++:(Xa=0,xh=r):Xa=0,mi(),null}function xo(){if(wi!==null){var r=ai(Uu),s=Rn.transition,a=Ve;try{if(Rn.transition=null,Ve=16>r?16:r,wi===null)var d=!1;else{if(r=wi,wi=null,Uu=0,(Fe&6)!==0)throw Error(t(331));var h=Fe;for(Fe|=4,he=r.current;he!==null;){var g=he,E=g.child;if((he.flags&16)!==0){var C=g.deletions;if(C!==null){for(var P=0;P<C.length;P++){var z=C[P];for(he=z;he!==null;){var ee=he;switch(ee.tag){case 0:case 11:case 15:Ga(8,ee,g)}var te=ee.child;if(te!==null)te.return=ee,he=te;else for(;he!==null;){ee=he;var J=ee.sibling,ce=ee.return;if(Dg(ee),ee===z){he=null;break}if(J!==null){J.return=ce,he=J;break}he=ce}}}var fe=g.alternate;if(fe!==null){var pe=fe.child;if(pe!==null){fe.child=null;do{var ut=pe.sibling;pe.sibling=null,pe=ut}while(pe!==null)}}he=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,he=E;else e:for(;he!==null;){if(g=he,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ga(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,he=j;break e}he=g.return}}var D=r.current;for(he=D;he!==null;){E=he;var U=E.child;if((E.subtreeFlags&2064)!==0&&U!==null)U.return=E,he=U;else e:for(E=D;he!==null;){if(C=he,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Vu(9,C)}}catch(ge){ot(C,C.return,ge)}if(C===E){he=null;break e}var re=C.sibling;if(re!==null){re.return=C.return,he=re;break e}he=C.return}}if(Fe=h,mi(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(is,r)}catch{}d=!0}return d}finally{Ve=a,Rn.transition=s}}return!1}function Qg(r,s,a){s=Co(a,s),s=fg(r,s,1),r=yi(r,s,1),s=Qt(),r!==null&&(si(r,1,s),rn(r,s))}function ot(r,s,a){if(r.tag===3)Qg(r,r,a);else for(;s!==null;){if(s.tag===3){Qg(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(_i===null||!_i.has(d))){r=Co(a,r),r=pg(s,r,1),s=yi(s,r,1),r=Qt(),s!==null&&(si(s,1,r),rn(s,r));break}}s=s.return}}function yT(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=Qt(),r.pingedLanes|=r.suspendedLanes&a,Ct===r&&(Dt&a)===a&&(Tt===4||Tt===3&&(Dt&130023424)===Dt&&500>qe()-Rh?ws(r,0):kh|=a),rn(r,s)}function Yg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Js,Js<<=1,(Js&130023424)===0&&(Js=4194304)));var a=Qt();r=Fr(r,s),r!==null&&(si(r,s,a),rn(r,a))}function vT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Yg(r,a)}function _T(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,h=r.memoizedState;h!==null&&(a=h.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Yg(r,a)}var Xg;Xg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Zt.current)tn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return tn=!1,oT(r,s,a);tn=(r.flags&131072)!==0}else tn=!1,Ze&&(s.flags&1048576)!==0&&xm(s,vu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Du(r,s),r=s.pendingProps;var h=vo(s,Mt.current);So(s,a),h=sh(null,s,d,r,h,a);var g=oh();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,en(d)?(g=!0,mu(s)):g=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Jd(s),h.updater=Nu,s.stateNode=h,h._reactInternals=s,hh(s,d,r,a),s=gh(null,s,d,!0,g,a)):(s.tag=0,Ze&&g&&zd(s),Gt(null,s,h,a),s=s.child),s;case 16:d=s.elementType;e:{switch(Du(r,s),r=s.pendingProps,h=d._init,d=h(d._payload),s.type=d,h=s.tag=ET(d),r=Hn(d,r),h){case 0:s=mh(null,s,d,r,a);break e;case 1:s=Ig(null,s,d,r,a);break e;case 11:s=vg(null,s,d,r,a);break e;case 14:s=_g(null,s,d,Hn(d.type,r),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Hn(d,h),mh(r,s,d,h,a);case 1:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Hn(d,h),Ig(r,s,d,h,a);case 3:e:{if(Sg(s),r===null)throw Error(t(387));d=s.pendingProps,g=s.memoizedState,h=g.element,Fm(r,s),Su(s,d,null,a);var E=s.memoizedState;if(d=E.element,g.isDehydrated)if(g={element:d,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){h=Co(Error(t(423)),s),s=Ag(r,s,d,a,h);break e}else if(d!==h){h=Co(Error(t(424)),s),s=Ag(r,s,d,a,h);break e}else for(pn=hi(s.stateNode.containerInfo.firstChild),fn=s,Ze=!0,qn=null,a=Mm(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Eo(),d===h){s=Br(r,s,a);break e}Gt(r,s,d,a)}s=s.child}return s;case 5:return zm(s),r===null&&qd(s),d=s.type,h=s.pendingProps,g=r!==null?r.memoizedProps:null,E=h.children,Ld(d,h)?E=null:g!==null&&Ld(d,g)&&(s.flags|=32),Tg(r,s),Gt(r,s,E,a),s.child;case 6:return r===null&&qd(s),null;case 13:return Cg(r,s,a);case 4:return Zd(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=To(s,null,d,a):Gt(r,s,d,a),s.child;case 11:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Hn(d,h),vg(r,s,d,h,a);case 7:return Gt(r,s,s.pendingProps,a),s.child;case 8:return Gt(r,s,s.pendingProps.children,a),s.child;case 12:return Gt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,h=s.pendingProps,g=s.memoizedProps,E=h.value,He(Eu,d._currentValue),d._currentValue=E,g!==null)if(Wn(g.value,E)){if(g.children===h.children&&!Zt.current){s=Br(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var C=g.dependencies;if(C!==null){E=g.child;for(var P=C.firstContext;P!==null;){if(P.context===d){if(g.tag===1){P=Ur(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var ee=z.pending;ee===null?P.next=P:(P.next=ee.next,ee.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Yd(g.return,a,s),C.lanes|=a;break}P=P.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,C=E.alternate,C!==null&&(C.lanes|=a),Yd(E,a,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Gt(r,s,h.children,a),s=s.child}return s;case 9:return h=s.type,d=s.pendingProps.children,So(s,a),h=Cn(h),d=d(h),s.flags|=1,Gt(r,s,d,a),s.child;case 14:return d=s.type,h=Hn(d,s.pendingProps),h=Hn(d.type,h),_g(r,s,d,h,a);case 15:return wg(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Hn(d,h),Du(r,s),s.tag=1,en(d)?(r=!0,mu(s)):r=!1,So(s,a),dg(s,d,h),hh(s,d,h,a),gh(null,s,d,!0,r,a);case 19:return Rg(r,s,a);case 22:return Eg(r,s,a)}throw Error(t(156,s.tag))};function Jg(r,s){return Ys(r,s)}function wT(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(r,s,a,d){return new wT(r,s,a,d)}function Lh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ET(r){if(typeof r=="function")return Lh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===ht)return 14}return 2}function Ii(r,s){var a=r.alternate;return a===null?(a=Pn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Wu(r,s,a,d,h,g){var E=2;if(d=r,typeof r=="function")Lh(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case b:return Ts(a.children,h,g,s);case A:E=8,h|=8;break;case k:return r=Pn(12,a,s,h|2),r.elementType=k,r.lanes=g,r;case R:return r=Pn(13,a,s,h),r.elementType=R,r.lanes=g,r;case Ge:return r=Pn(19,a,s,h),r.elementType=Ge,r.lanes=g,r;case je:return qu(a,h,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:E=10;break e;case O:E=9;break e;case L:E=11;break e;case ht:E=14;break e;case it:E=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Pn(E,a,s,h),s.elementType=r,s.type=d,s.lanes=g,s}function Ts(r,s,a,d){return r=Pn(7,r,d,s),r.lanes=a,r}function qu(r,s,a,d){return r=Pn(22,r,d,s),r.elementType=je,r.lanes=a,r.stateNode={isHidden:!1},r}function Mh(r,s,a){return r=Pn(6,r,null,s),r.lanes=a,r}function jh(r,s,a){return s=Pn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function TT(r,s,a,d,h){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=d,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Fh(r,s,a,d,h,g,E,C,P){return r=new TT(r,s,a,C,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Pn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jd(g),r}function IT(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function Zg(r){if(!r)return pi;r=r._reactInternals;e:{if(Mn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(en(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(en(a))return km(r,a,s)}return s}function ey(r,s,a,d,h,g,E,C,P){return r=Fh(a,d,!0,r,h,g,E,C,P),r.context=Zg(null),a=r.current,d=Qt(),h=Ei(a),g=Ur(d,h),g.callback=s??null,yi(a,g,h),r.current.lanes=h,si(r,h,d),rn(r,d),r}function Hu(r,s,a,d){var h=s.current,g=Qt(),E=Ei(h);return a=Zg(a),s.context===null?s.context=a:s.pendingContext=a,s=Ur(g,E),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=yi(h,s,E),r!==null&&(Qn(r,h,E,g),Iu(r,h,E)),E}function Ku(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ty(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Uh(r,s){ty(r,s),(r=r.alternate)&&ty(r,s)}function ST(){return null}var ny=typeof reportError=="function"?reportError:function(r){console.error(r)};function Bh(r){this._internalRoot=r}Gu.prototype.render=Bh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Hu(r,s,null,null)},Gu.prototype.unmount=Bh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;_s(function(){Hu(null,r,null,null)}),s[Vr]=null}};function Gu(r){this._internalRoot=r}Gu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Gl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<ir.length&&s!==0&&s<ir[a].priority;a++);ir.splice(a,0,r),a===0&&Xl(r)}};function zh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Qu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ry(){}function AT(r,s,a,d,h){if(h){if(typeof d=="function"){var g=d;d=function(){var z=Ku(E);g.call(z)}}var E=ey(s,d,r,0,null,!1,!1,"",ry);return r._reactRootContainer=E,r[Vr]=E.current,Va(r.nodeType===8?r.parentNode:r),_s(),E}for(;h=r.lastChild;)r.removeChild(h);if(typeof d=="function"){var C=d;d=function(){var z=Ku(P);C.call(z)}}var P=Fh(r,0,!1,null,null,!1,!1,"",ry);return r._reactRootContainer=P,r[Vr]=P.current,Va(r.nodeType===8?r.parentNode:r),_s(function(){Hu(s,P,a,d)}),P}function Yu(r,s,a,d,h){var g=a._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var C=h;h=function(){var P=Ku(E);C.call(P)}}Hu(s,E,r,h)}else E=AT(a,s,r,h,d);return Ku(E)}Hl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ri(s.pendingLanes);a!==0&&(oi(s,a|1),rn(s,qe()),(Fe&6)===0&&(Po=qe()+500,mi()))}break;case 13:_s(function(){var d=Fr(r,1);if(d!==null){var h=Qt();Qn(d,r,1,h)}}),Uh(r,1)}},Zs=function(r){if(r.tag===13){var s=Fr(r,134217728);if(s!==null){var a=Qt();Qn(s,r,134217728,a)}Uh(r,134217728)}},Kl=function(r){if(r.tag===13){var s=Ei(r),a=Fr(r,s);if(a!==null){var d=Qt();Qn(a,r,s,d)}Uh(r,s)}},Gl=function(){return Ve},Ql=function(r,s){var a=Ve;try{return Ve=r,s()}finally{Ve=a}},Ws=function(r,s,a){switch(s){case"input":if(oa(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var h=fu(d);if(!h)throw Error(t(90));er(d),oa(d,h)}}}break;case"textarea":zs(r,a);break;case"select":s=a.value,s!=null&&kr(r,!!a.multiple,s,!1)}},Zi=Dh,ga=_s;var CT={usingClientEntryPoint:!1,Events:[ja,go,fu,nr,ma,Dh]},Ja={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kT={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=_a(r),r===null?null:r.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||ST,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{is=Xu.inject(kT),un=Xu}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CT,sn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(s))throw Error(t(200));return IT(r,s,null,a)},sn.createRoot=function(r,s){if(!zh(r))throw Error(t(299));var a=!1,d="",h=ny;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=Fh(r,1,!1,null,null,a,!1,d,h),r[Vr]=s.current,Va(r.nodeType===8?r.parentNode:r),new Bh(s)},sn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=_a(s),r=r===null?null:r.stateNode,r},sn.flushSync=function(r){return _s(r)},sn.hydrate=function(r,s,a){if(!Qu(s))throw Error(t(200));return Yu(null,r,s,!0,a)},sn.hydrateRoot=function(r,s,a){if(!zh(r))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,h=!1,g="",E=ny;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=ey(s,null,r,1,a??null,h,!1,g,E),r[Vr]=s.current,Va(r),d)for(r=0;r<d.length;r++)a=d[r],h=a._getVersion,h=h(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,h]:s.mutableSourceEagerHydrationData.push(a,h);return new Gu(s)},sn.render=function(r,s,a){if(!Qu(s))throw Error(t(200));return Yu(null,r,s,!1,a)},sn.unmountComponentAtNode=function(r){if(!Qu(r))throw Error(t(40));return r._reactRootContainer?(_s(function(){Yu(null,null,r,!1,function(){r._reactRootContainer=null,r[Vr]=null})}),!0):!1},sn.unstable_batchedUpdates=Dh,sn.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!Qu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Yu(r,s,a,!1,d)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var dy;function m_(){if(dy)return qh.exports;dy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),qh.exports=LT(),qh.exports}var hy;function MT(){if(hy)return Ju;hy=1;var n=m_();return Ju.createRoot=n.createRoot,Ju.hydrateRoot=n.hydrateRoot,Ju}var jT=MT();const FT=f_(jT);m_();/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},hl.apply(this,arguments)}var xi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(xi||(xi={}));const fy="popstate";function UT(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:c,hash:f}=i.location;return ff("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:gc(o)}return zT(e,t,null,n)}function dt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Wf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BT(){return Math.random().toString(36).substr(2,8)}function py(n,e){return{usr:n.state,key:n.key,idx:e}}function ff(n,e,t,i){return t===void 0&&(t=null),hl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ko(e):e,{state:t,key:e&&e.key||i||BT()})}function gc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ko(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function zT(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,f=xi.Pop,p=null,y=w();y==null&&(y=0,c.replaceState(hl({},c.state,{idx:y}),""));function w(){return(c.state||{idx:null}).idx}function T(){f=xi.Pop;let F=w(),oe=F==null?null:F-y;y=F,p&&p({action:f,location:q.location,delta:oe})}function S(F,oe){f=xi.Push;let ne=ff(q.location,F,oe);y=w()+1;let Z=py(ne,y),ye=q.createHref(ne);try{c.pushState(Z,"",ye)}catch(Pe){if(Pe instanceof DOMException&&Pe.name==="DataCloneError")throw Pe;o.location.assign(ye)}l&&p&&p({action:f,location:q.location,delta:1})}function N(F,oe){f=xi.Replace;let ne=ff(q.location,F,oe);y=w();let Z=py(ne,y),ye=q.createHref(ne);c.replaceState(Z,"",ye),l&&p&&p({action:f,location:q.location,delta:0})}function B(F){let oe=o.location.origin!=="null"?o.location.origin:o.location.href,ne=typeof F=="string"?F:gc(F);return ne=ne.replace(/ $/,"%20"),dt(oe,"No window.location.(origin|href) available to create URL for href: "+ne),new URL(ne,oe)}let q={get action(){return f},get location(){return n(o,c)},listen(F){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(fy,T),p=F,()=>{o.removeEventListener(fy,T),p=null}},createHref(F){return e(o,F)},createURL:B,encodeLocation(F){let oe=B(F);return{pathname:oe.pathname,search:oe.search,hash:oe.hash}},push:S,replace:N,go(F){return c.go(F)}};return q}var my;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(my||(my={}));function $T(n,e,t){return t===void 0&&(t="/"),WT(n,e,t)}function WT(n,e,t,i){let o=typeof e=="string"?Ko(e):e,l=qf(o.pathname||"/",t);if(l==null)return null;let c=g_(n);qT(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let y=rI(l);f=eI(c[p],y)}return f}function g_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(dt(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=bi([i,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(dt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),g_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:JT(y,l.index),routesMeta:w})};return n.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let p of y_(l.path))o(l,c,p)}),e}function y_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=y_(i.join("/")),f=[];return f.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...c),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function qT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:ZT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const HT=/^:[\w-]+$/,KT=3,GT=2,QT=1,YT=10,XT=-2,gy=n=>n==="*";function JT(n,e){let t=n.split("/"),i=t.length;return t.some(gy)&&(i+=XT),e&&(i+=GT),t.filter(o=>!gy(o)).reduce((o,l)=>o+(HT.test(l)?KT:l===""?QT:YT),i)}function ZT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function eI(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=tI({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),S=p.route;if(!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:bi([l,T.pathname]),pathnameBase:lI(bi([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=bi([l,T.pathnameBase]))}return c}function tI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=nI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,w,T)=>{let{paramName:S,isOptional:N}=w;if(S==="*"){let q=f[T]||"";c=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const B=f[T];return N&&!B?y[S]=void 0:y[S]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function nI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Wf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function rI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function qf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const iI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sI=n=>iI.test(n);function oI(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Ko(n):n,l;if(t)if(sI(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),Wf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=yy(t.substring(1),"/"):l=yy(t,e)}else l=e;return{pathname:l,search:uI(i),hash:cI(o)}}function yy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Gh(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Hf(n,e){let t=aI(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Kf(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Ko(n):(o=hl({},n),dt(!o.pathname||!o.pathname.includes("?"),Gh("?","pathname","search",o)),dt(!o.pathname||!o.pathname.includes("#"),Gh("#","pathname","hash",o)),dt(!o.search||!o.search.includes("#"),Gh("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;o.pathname=S.join("/")}f=T>=0?e[T]:"/"}let p=oI(o,f),y=c&&c!=="/"&&c.endsWith("/"),w=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}const bi=n=>n.join("/").replace(/\/\/+/g,"/"),lI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),uI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,cI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function dI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const v_=["post","put","patch","delete"];new Set(v_);const hI=["get",...v_];new Set(hI);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},fl.apply(this,arguments)}const Gf=W.createContext(null),fI=W.createContext(null),qi=W.createContext(null),Bc=W.createContext(null),Zr=W.createContext({outlet:null,matches:[],isDataRoute:!1}),__=W.createContext(null);function pI(n,e){let{relative:t}=e===void 0?{}:e;Go()||dt(!1);let{basename:i,navigator:o}=W.useContext(qi),{hash:l,pathname:c,search:f}=E_(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:bi([i,c])),o.createHref({pathname:p,search:f,hash:l})}function Go(){return W.useContext(Bc)!=null}function Qo(){return Go()||dt(!1),W.useContext(Bc).location}function w_(n){W.useContext(qi).static||W.useLayoutEffect(n)}function Yo(){let{isDataRoute:n}=W.useContext(Zr);return n?RI():mI()}function mI(){Go()||dt(!1);let n=W.useContext(Gf),{basename:e,future:t,navigator:i}=W.useContext(qi),{matches:o}=W.useContext(Zr),{pathname:l}=Qo(),c=JSON.stringify(Hf(o,t.v7_relativeSplatPath)),f=W.useRef(!1);return w_(()=>{f.current=!0}),W.useCallback(function(y,w){if(w===void 0&&(w={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let T=Kf(y,JSON.parse(c),l,w.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:bi([e,T.pathname])),(w.replace?i.replace:i.push)(T,w.state,w)},[e,i,c,l,n])}function gI(){let{matches:n}=W.useContext(Zr),e=n[n.length-1];return e?e.params:{}}function E_(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=W.useContext(qi),{matches:o}=W.useContext(Zr),{pathname:l}=Qo(),c=JSON.stringify(Hf(o,i.v7_relativeSplatPath));return W.useMemo(()=>Kf(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function yI(n,e){return vI(n,e)}function vI(n,e,t,i){Go()||dt(!1);let{navigator:o}=W.useContext(qi),{matches:l}=W.useContext(Zr),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let y=Qo(),w;if(e){var T;let F=typeof e=="string"?Ko(e):e;p==="/"||(T=F.pathname)!=null&&T.startsWith(p)||dt(!1),w=F}else w=y;let S=w.pathname||"/",N=S;if(p!=="/"){let F=p.replace(/^\//,"").split("/");N="/"+S.replace(/^\//,"").split("/").slice(F.length).join("/")}let B=$T(n,{pathname:N}),q=II(B&&B.map(F=>Object.assign({},F,{params:Object.assign({},f,F.params),pathname:bi([p,o.encodeLocation?o.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?p:bi([p,o.encodeLocation?o.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),l,t,i);return e&&q?W.createElement(Bc.Provider,{value:{location:fl({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:xi.Pop}},q):q}function _I(){let n=kI(),e=dI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,null)}const wI=W.createElement(_I,null);class EI extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?W.createElement(Zr.Provider,{value:this.props.routeContext},W.createElement(__.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function TI(n){let{routeContext:e,match:t,children:i}=n,o=W.useContext(Gf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),W.createElement(Zr.Provider,{value:e},i)}function II(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let w=c.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);w>=0||dt(!1),c=c.slice(0,Math.min(c.length,w+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let w=0;w<c.length;w++){let T=c[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=w),T.route.id){let{loaderData:S,errors:N}=t,B=T.route.loader&&S[T.route.id]===void 0&&(!N||N[T.route.id]===void 0);if(T.route.lazy||B){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((w,T,S)=>{let N,B=!1,q=null,F=null;t&&(N=f&&T.route.id?f[T.route.id]:void 0,q=T.route.errorElement||wI,p&&(y<0&&S===0?(PI("route-fallback"),B=!0,F=null):y===S&&(B=!0,F=T.route.hydrateFallbackElement||null)));let oe=e.concat(c.slice(0,S+1)),ne=()=>{let Z;return N?Z=q:B?Z=F:T.route.Component?Z=W.createElement(T.route.Component,null):T.route.element?Z=T.route.element:Z=w,W.createElement(TI,{match:T,routeContext:{outlet:w,matches:oe,isDataRoute:t!=null},children:Z})};return t&&(T.route.ErrorBoundary||T.route.errorElement||S===0)?W.createElement(EI,{location:t.location,revalidation:t.revalidation,component:q,error:N,children:ne(),routeContext:{outlet:null,matches:oe,isDataRoute:!0}}):ne()},null)}var T_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(T_||{}),I_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(I_||{});function SI(n){let e=W.useContext(Gf);return e||dt(!1),e}function AI(n){let e=W.useContext(fI);return e||dt(!1),e}function CI(n){let e=W.useContext(Zr);return e||dt(!1),e}function S_(n){let e=CI(),t=e.matches[e.matches.length-1];return t.route.id||dt(!1),t.route.id}function kI(){var n;let e=W.useContext(__),t=AI(),i=S_();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function RI(){let{router:n}=SI(T_.UseNavigateStable),e=S_(I_.UseNavigateStable),t=W.useRef(!1);return w_(()=>{t.current=!0}),W.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,fl({fromRouteId:e},l)))},[n,e])}const vy={};function PI(n,e,t){vy[n]||(vy[n]=!0)}function xI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function yc(n){let{to:e,replace:t,state:i,relative:o}=n;Go()||dt(!1);let{future:l,static:c}=W.useContext(qi),{matches:f}=W.useContext(Zr),{pathname:p}=Qo(),y=Yo(),w=Kf(e,Hf(f,l.v7_relativeSplatPath),p,o==="path"),T=JSON.stringify(w);return W.useEffect(()=>y(JSON.parse(T),{replace:t,state:i,relative:o}),[y,T,o,t,i]),null}function xn(n){dt(!1)}function NI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=xi.Pop,navigator:l,static:c=!1,future:f}=n;Go()&&dt(!1);let p=e.replace(/^\/*/,"/"),y=W.useMemo(()=>({basename:p,navigator:l,static:c,future:fl({v7_relativeSplatPath:!1},f)}),[p,f,l,c]);typeof i=="string"&&(i=Ko(i));let{pathname:w="/",search:T="",hash:S="",state:N=null,key:B="default"}=i,q=W.useMemo(()=>{let F=qf(w,p);return F==null?null:{location:{pathname:F,search:T,hash:S,state:N,key:B},navigationType:o}},[p,w,T,S,N,B,o]);return q==null?null:W.createElement(qi.Provider,{value:y},W.createElement(Bc.Provider,{children:t,value:q}))}function bI(n){let{children:e,location:t}=n;return yI(pf(e),t)}new Promise(()=>{});function pf(n,e){e===void 0&&(e=[]);let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,pf(i.props.children,l));return}i.type!==xn&&dt(!1),!i.props.index||!i.props.children||dt(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=pf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mf(){return mf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},mf.apply(this,arguments)}function DI(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function OI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function VI(n,e){return n.button===0&&(!e||e==="_self")&&!OI(n)}const LI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],MI="6";try{window.__reactRouterVersion=MI}catch{}const jI="startTransition",_y=DT[jI];function FI(n){let{basename:e,children:t,future:i,window:o}=n,l=W.useRef();l.current==null&&(l.current=UT({window:o,v5Compat:!0}));let c=l.current,[f,p]=W.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},w=W.useCallback(T=>{y&&_y?_y(()=>p(T)):p(T)},[p,y]);return W.useLayoutEffect(()=>c.listen(w),[c,w]),W.useEffect(()=>xI(i),[i]),W.createElement(NI,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:i})}const UI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nn=W.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:f,target:p,to:y,preventScrollReset:w,viewTransition:T}=e,S=DI(e,LI),{basename:N}=W.useContext(qi),B,q=!1;if(typeof y=="string"&&BI.test(y)&&(B=y,UI))try{let Z=new URL(window.location.href),ye=y.startsWith("//")?new URL(Z.protocol+y):new URL(y),Pe=qf(ye.pathname,N);ye.origin===Z.origin&&Pe!=null?y=Pe+ye.search+ye.hash:q=!0}catch{}let F=pI(y,{relative:o}),oe=zI(y,{replace:c,state:f,target:p,preventScrollReset:w,relative:o,viewTransition:T});function ne(Z){i&&i(Z),Z.defaultPrevented||oe(Z)}return W.createElement("a",mf({},S,{href:B||F,onClick:q||l?i:ne,ref:t,target:p}))});var wy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(wy||(wy={}));var Ey;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Ey||(Ey={}));function zI(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,p=Yo(),y=Qo(),w=E_(n,{relative:c});return W.useCallback(T=>{if(VI(T,t)){T.preventDefault();let S=i!==void 0?i:gc(y)===gc(w);p(n,{replace:S,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[y,p,w,i,o,t,n,l,c,f])}const $I=()=>{};var Ty={};/**
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
 */const A_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},WI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},C_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let S=(f&15)<<2|y>>6,N=y&63;p||(N=64,c||(S=64)),i.push(t[w],t[T],t[S],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(A_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):WI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new qI;const S=l<<2|f>>4;if(i.push(S),y!==64){const N=f<<4&240|y>>2;if(i.push(N),T!==64){const B=y<<6&192|T;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HI=function(n){const e=A_(n);return C_.encodeByteArray(e,!0)},vc=function(n){return HI(n).replace(/\./g,"")},k_=function(n){try{return C_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GI=()=>KI().__FIREBASE_DEFAULTS__,QI=()=>{if(typeof process>"u"||typeof Ty>"u")return;const n=Ty.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},YI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&k_(n[1]);return e&&JSON.parse(e)},zc=()=>{try{return $I()||GI()||QI()||YI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},R_=n=>{var e,t;return(t=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},XI=n=>{const e=R_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},P_=()=>{var n;return(n=zc())===null||n===void 0?void 0:n.config},x_=n=>{var e;return(e=zc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class JI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Xo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function N_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ZI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vc(JSON.stringify(t)),vc(JSON.stringify(c)),""].join(".")}const ol={};function eS(){const n={prod:[],emulator:[]};for(const e of Object.keys(ol))ol[e]?n.emulator.push(e):n.prod.push(e);return n}function tS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Iy=!1;function b_(n,e){if(typeof window>"u"||typeof document>"u"||!Xo(window.location.host)||ol[n]===e||ol[n]||Iy)return;ol[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=eS().prod.length>0;function c(){const S=document.getElementById(i);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,N){S.setAttribute("width","24"),S.setAttribute("id",N),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Iy=!0,c()},S}function w(S,N){S.setAttribute("id",N),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=tS(i),N=t("text"),B=document.getElementById(N)||document.createElement("span"),q=t("learnmore"),F=document.getElementById(q)||document.createElement("a"),oe=t("preprendIcon"),ne=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Z=S.element;f(Z),w(F,q);const ye=y();p(ne,oe),Z.append(ne,B,F,ye),document.body.appendChild(Z)}l?(B.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function rS(){var n;const e=(n=zc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function oS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aS(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lS(){return!rS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D_(){try{return typeof indexedDB=="object"}catch{return!1}}function O_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function uS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const cS="FirebaseError";class Sr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=cS,Object.setPrototypeOf(this,Sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?dS(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new Sr(o,f,i)}}function dS(n,e){return n.replace(hS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const hS=/\{\$([^}]+)}/g;function fS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Li(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(Sy(l)&&Sy(c)){if(!Li(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Sy(n){return n!==null&&typeof n=="object"}/**
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
 */function Il(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function el(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function tl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function pS(n,e){const t=new mS(n,e);return t.subscribe.bind(t)}class mS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");gS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Qh),o.error===void 0&&(o.error=Qh),o.complete===void 0&&(o.complete=Qh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qh(){}/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class Xn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Is="[DEFAULT]";/**
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
 */class yS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new JI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_S(e))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Is){return this.instances.has(e)}getOptions(e=Is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Is){return this.component?this.component.multipleInstances?e:Is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vS(n){return n===Is?void 0:n}function _S(n){return n.instantiationMode==="EAGER"}/**
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
 */class wS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const ES={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},TS=De.INFO,IS={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},SS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=IS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qf{constructor(e){this.name=e,this._logLevel=TS,this._logHandler=SS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ES[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const AS=(n,e)=>e.some(t=>n instanceof t);let Ay,Cy;function CS(){return Ay||(Ay=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kS(){return Cy||(Cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V_=new WeakMap,gf=new WeakMap,L_=new WeakMap,Yh=new WeakMap,Yf=new WeakMap;function RS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Hr(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&V_.set(t,n)}).catch(()=>{}),Yf.set(e,n),e}function PS(n){if(gf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});gf.set(n,e)}let yf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||L_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xS(n){yf=n(yf)}function NS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Xh(this),e,...t);return L_.set(i,e.sort?e.sort():[e]),Hr(i)}:kS().includes(n)?function(...e){return n.apply(Xh(this),e),Hr(V_.get(this))}:function(...e){return Hr(n.apply(Xh(this),e))}}function bS(n){return typeof n=="function"?NS(n):(n instanceof IDBTransaction&&PS(n),AS(n,CS())?new Proxy(n,yf):n)}function Hr(n){if(n instanceof IDBRequest)return RS(n);if(Yh.has(n))return Yh.get(n);const e=bS(n);return e!==n&&(Yh.set(n,e),Yf.set(e,n)),e}const Xh=n=>Yf.get(n);function $c(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=Hr(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Hr(c.result),p.oldVersion,p.newVersion,Hr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}function Jh(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Hr(t).then(()=>{})}const DS=["get","getKey","getAll","getAllKeys","count"],OS=["put","add","delete","clear"],Zh=new Map;function ky(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=OS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||DS.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return Zh.set(e,l),l}xS(n=>({...n,get:(e,t,i)=>ky(e,t)||n.get(e,t,i),has:(e,t)=>!!ky(e,t)||n.has(e,t)}));/**
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
 */class VS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(LS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function LS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vf="@firebase/app",Ry="0.13.2";/**
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
 */const Gr=new Qf("@firebase/app"),MS="@firebase/app-compat",jS="@firebase/analytics-compat",FS="@firebase/analytics",US="@firebase/app-check-compat",BS="@firebase/app-check",zS="@firebase/auth",$S="@firebase/auth-compat",WS="@firebase/database",qS="@firebase/data-connect",HS="@firebase/database-compat",KS="@firebase/functions",GS="@firebase/functions-compat",QS="@firebase/installations",YS="@firebase/installations-compat",XS="@firebase/messaging",JS="@firebase/messaging-compat",ZS="@firebase/performance",e1="@firebase/performance-compat",t1="@firebase/remote-config",n1="@firebase/remote-config-compat",r1="@firebase/storage",i1="@firebase/storage-compat",s1="@firebase/firestore",o1="@firebase/ai",a1="@firebase/firestore-compat",l1="firebase",u1="11.10.0";/**
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
 */const _f="[DEFAULT]",c1={[vf]:"fire-core",[MS]:"fire-core-compat",[FS]:"fire-analytics",[jS]:"fire-analytics-compat",[BS]:"fire-app-check",[US]:"fire-app-check-compat",[zS]:"fire-auth",[$S]:"fire-auth-compat",[WS]:"fire-rtdb",[qS]:"fire-data-connect",[HS]:"fire-rtdb-compat",[KS]:"fire-fn",[GS]:"fire-fn-compat",[QS]:"fire-iid",[YS]:"fire-iid-compat",[XS]:"fire-fcm",[JS]:"fire-fcm-compat",[ZS]:"fire-perf",[e1]:"fire-perf-compat",[t1]:"fire-rc",[n1]:"fire-rc-compat",[r1]:"fire-gcs",[i1]:"fire-gcs-compat",[s1]:"fire-fst",[a1]:"fire-fst-compat",[o1]:"fire-vertex","fire-js":"fire-js",[l1]:"fire-js-all"};/**
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
 */const _c=new Map,d1=new Map,wf=new Map;function Py(n,e){try{n.container.addComponent(e)}catch(t){Gr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Er(n){const e=n.name;if(wf.has(e))return Gr.debug(`There were multiple attempts to register component ${e}.`),!1;wf.set(e,n);for(const t of _c.values())Py(t,n);for(const t of d1.values())Py(t,n);return!0}function Jo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function gn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const h1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Di=new Os("app","Firebase",h1);/**
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
 */class f1{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Di.create("app-deleted",{appName:this._name})}}/**
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
 */const Zo=u1;function M_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_f,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Di.create("bad-app-name",{appName:String(o)});if(t||(t=P_()),!t)throw Di.create("no-options");const l=_c.get(o);if(l){if(Li(t,l.options)&&Li(i,l.config))return l;throw Di.create("duplicate-app",{appName:o})}const c=new wS(o);for(const p of wf.values())c.addComponent(p);const f=new f1(t,i,c);return _c.set(o,f),f}function Xf(n=_f){const e=_c.get(n);if(!e&&n===_f&&P_())return M_();if(!e)throw Di.create("no-app",{appName:n});return e}function Dn(n,e,t){var i;let o=(i=c1[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gr.warn(f.join(" "));return}Er(new Xn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const p1="firebase-heartbeat-database",m1=1,pl="firebase-heartbeat-store";let ef=null;function j_(){return ef||(ef=$c(p1,m1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Di.create("idb-open",{originalErrorMessage:n.message})})),ef}async function g1(n){try{const t=(await j_()).transaction(pl),i=await t.objectStore(pl).get(F_(n));return await t.done,i}catch(e){if(e instanceof Sr)Gr.warn(e.message);else{const t=Di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gr.warn(t.message)}}}async function xy(n,e){try{const i=(await j_()).transaction(pl,"readwrite");await i.objectStore(pl).put(e,F_(n)),await i.done}catch(t){if(t instanceof Sr)Gr.warn(t.message);else{const i=Di.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Gr.warn(i.message)}}}function F_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const y1=1024,v1=30;class _1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new E1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ny();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>v1){const c=T1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Gr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ny(),{heartbeatsToSend:i,unsentEntries:o}=w1(this._heartbeatsCache.heartbeats),l=vc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Gr.warn(t),""}}}function Ny(){return new Date().toISOString().substring(0,10)}function w1(n,e=y1){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),by(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),by(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class E1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D_()?O_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await g1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return xy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return xy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function by(n){return vc(JSON.stringify({version:2,heartbeats:n})).length}function T1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function I1(n){Er(new Xn("platform-logger",e=>new VS(e),"PRIVATE")),Er(new Xn("heartbeat",e=>new _1(e),"PRIVATE")),Dn(vf,Ry,n),Dn(vf,Ry,"esm2017"),Dn("fire-js","")}I1("");function Jf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function U_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S1=U_,B_=new Os("auth","Firebase",U_());/**
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
 */const wc=new Qf("@firebase/auth");function A1(n,...e){wc.logLevel<=De.WARN&&wc.warn(`Auth (${Zo}): ${n}`,...e)}function oc(n,...e){wc.logLevel<=De.ERROR&&wc.error(`Auth (${Zo}): ${n}`,...e)}/**
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
 */function Jn(n,...e){throw Zf(n,...e)}function pr(n,...e){return Zf(n,...e)}function z_(n,e,t){const i=Object.assign(Object.assign({},S1()),{[e]:t});return new Os("auth","Firebase",i).create(e,{appName:n.name})}function mr(n){return z_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return B_.create(n,...e)}function Ie(n,e,...t){if(!n)throw Zf(e,...t)}function Wr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oc(e),new Error(e)}function Qr(n,e){n||Wr(e)}/**
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
 */function Ef(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function C1(){return Dy()==="http:"||Dy()==="https:"}function Dy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function k1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C1()||sS()||"connection"in navigator)?navigator.onLine:!0}function R1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Sl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qr(t>e,"Short delay should be less than long delay!"),this.isMobile=nS()||oS()}get(){return k1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ep(n,e){Qr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class $_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const P1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const x1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],N1=new Sl(3e4,6e4);function ei(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ar(n,e,t,i,o={}){return W_(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=Il(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return iS()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Xo(n.emulatorConfig.host)&&(y.credentials="include"),$_.fetch()(await q_(n,n.config.apiHost,t,f),y)})}async function W_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},P1),e);try{const o=new D1(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Zu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Zu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Zu(n,"user-disabled",c);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw z_(n,w,y);Jn(n,w)}}catch(o){if(o instanceof Sr)throw o;Jn(n,"network-request-failed",{message:String(o)})}}async function Al(n,e,t,i,o={}){const l=await Ar(n,e,t,i,o);return"mfaPendingCredential"in l&&Jn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function q_(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?ep(n.config,o):`${n.config.apiScheme}://${o}`;return x1.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function b1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class D1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(pr(this.auth,"network-request-failed")),N1.get())})}}function Zu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=pr(n,e,i);return o.customData._tokenResponse=t,o}function Oy(n){return n!==void 0&&n.enterprise!==void 0}class O1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return b1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function V1(n,e){return Ar(n,"GET","/v2/recaptchaConfig",ei(n,e))}/**
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
 */async function L1(n,e){return Ar(n,"POST","/v1/accounts:delete",e)}async function Ec(n,e){return Ar(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function al(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M1(n,e=!1){const t=et(n),i=await t.getIdToken(e),o=tp(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:al(tf(o.auth_time)),issuedAtTime:al(tf(o.iat)),expirationTime:al(tf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function tf(n){return Number(n)*1e3}function tp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return oc("JWT malformed, contained fewer than 3 sections"),null;try{const o=k_(t);return o?JSON.parse(o):(oc("Failed to decode base64 JWT payload"),null)}catch(o){return oc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Vy(n){const e=tp(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Uo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Sr&&j1(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function j1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class F1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=al(this.lastLoginAt),this.creationTime=al(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Uo(n,Ec(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?H_(l.providerUserInfo):[],f=B1(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),w=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Tf(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function U1(n){const e=et(n);await Tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B1(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function H_(n){return n.map(e=>{var{providerId:t}=e,i=Jf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function z1(n,e){const t=await W_(n,{},async()=>{const i=Il({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await q_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return n.emulatorConfig&&Xo(n.emulatorConfig.host)&&(p.credentials="include"),$_.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $1(n,e){return Ar(n,"POST","/v2/accounts:revokeToken",ei(n,e))}/**
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
 */class Lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Vy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await z1(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Lo;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lo,this.toJSON())}_performRefresh(){return Wr("not implemented")}}/**
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
 */function Ai(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Jf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new F1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Tf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return M1(this,e)}reload(){return U1(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Tc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(mr(this.auth));const e=await this.getIdToken();return await Uo(this,L1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,f,p,y,w;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,B=(c=t.photoURL)!==null&&c!==void 0?c:void 0,q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,oe=(y=t.createdAt)!==null&&y!==void 0?y:void 0,ne=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Z,emailVerified:ye,isAnonymous:Pe,providerData:Re,stsTokenManager:b}=t;Ie(Z&&b,e,"internal-error");const A=Lo.fromJSON(this.name,b);Ie(typeof Z=="string",e,"internal-error"),Ai(T,e.name),Ai(S,e.name),Ie(typeof ye=="boolean",e,"internal-error"),Ie(typeof Pe=="boolean",e,"internal-error"),Ai(N,e.name),Ai(B,e.name),Ai(q,e.name),Ai(F,e.name),Ai(oe,e.name),Ai(ne,e.name);const k=new Yn({uid:Z,auth:e,email:S,emailVerified:ye,displayName:T,isAnonymous:Pe,photoURL:B,phoneNumber:N,tenantId:q,stsTokenManager:A,createdAt:oe,lastLoginAt:ne});return Re&&Array.isArray(Re)&&(k.providerData=Re.map(x=>Object.assign({},x))),F&&(k._redirectEventId=F),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new Lo;o.updateFromServerResponse(t);const l=new Yn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Tc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?H_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Lo;f.updateFromIdToken(i);const p=new Yn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Tf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const Ly=new Map;function qr(n){Qr(n instanceof Function,"Expected a class definition");let e=Ly.get(n);return e?(Qr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ly.set(n,e),e)}/**
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
 */class K_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}K_.type="NONE";const My=K_;/**
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
 */function ac(n,e,t){return`firebase:${n}:${e}:${t}`}class Mo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ac(this.userKey,o.apiKey,l),this.fullPersistenceKey=ac("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ec(this.auth,{idToken:e}).catch(()=>{});return t?Yn._fromGetAccountInfoResponse(this.auth,t,e):null}return Yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Mo(qr(My),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||qr(My);const c=ac(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(c);if(w){let T;if(typeof w=="string"){const S=await Ec(e,{idToken:w}).catch(()=>{});if(!S)break;T=await Yn._fromGetAccountInfoResponse(e,S,w)}else T=Yn._fromJSON(e,w);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Mo(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Mo(l,e,i))}}/**
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
 */function jy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(X_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Z_(e))return"Blackberry";if(ew(e))return"Webos";if(Q_(e))return"Safari";if((e.includes("chrome/")||Y_(e))&&!e.includes("edge/"))return"Chrome";if(J_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function G_(n=qt()){return/firefox\//i.test(n)}function Q_(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y_(n=qt()){return/crios\//i.test(n)}function X_(n=qt()){return/iemobile/i.test(n)}function J_(n=qt()){return/android/i.test(n)}function Z_(n=qt()){return/blackberry/i.test(n)}function ew(n=qt()){return/webos/i.test(n)}function np(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function W1(n=qt()){var e;return np(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function q1(){return aS()&&document.documentMode===10}function tw(n=qt()){return np(n)||J_(n)||ew(n)||Z_(n)||/windows phone/i.test(n)||X_(n)}/**
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
 */function nw(n,e=[]){let t;switch(n){case"Browser":t=jy(qt());break;case"Worker":t=`${jy(qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zo}/${i}`}/**
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
 */class H1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function K1(n,e={}){return Ar(n,"GET","/v2/passwordPolicy",ei(n,e))}/**
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
 */const G1=6;class Q1{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:G1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Y1{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fy(this),this.idTokenSubscription=new Fy(this),this.beforeStateQueue=new H1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Mo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ec(this,{idToken:e}),i=await Yn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(gn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Tc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(mr(this));const t=e?et(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await K1(this),t=new Q1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await $1(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Mo.create(this,[qr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&A1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Hi(n){return et(n)}class Fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=pS(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function X1(n){Wc=n}function rw(n){return Wc.loadJS(n)}function J1(){return Wc.recaptchaEnterpriseScript}function Z1(){return Wc.gapiScript}function eA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class tA{constructor(){this.enterprise=new nA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class nA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const rA="recaptcha-enterprise",iw="NO_RECAPTCHA";class iA{constructor(e){this.type=rA,this.auth=Hi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{V1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new O1(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,c,f){const p=window.grecaptcha;Oy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(iw)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tA().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&Oy(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=J1();p.length!==0&&(p+=f),rw(p).then(()=>{o(f,l,c)}).catch(y=>{c(y)})}}).catch(f=>{c(f)})})}}async function Uy(n,e,t,i=!1,o=!1){const l=new iA(n);let c;if(o)c=iw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Ic(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Uy(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Uy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(c)})}/**
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
 */function sA(n,e){const t=Jo(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Li(l,e??{}))return o;Jn(o,"already-initialized")}return t.initialize({options:e})}function oA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(qr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function aA(n,e,t){const i=Hi(n);Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=sw(e),{host:c,port:f}=lA(e),p=f===null?"":`:${f}`,y={url:`${l}//${c}${p}/`},w=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ie(Li(y,i.config.emulator)&&Li(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Xo(c)?(N_(`${l}//${c}${p}`),b_("Auth",!0)):uA()}function sw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lA(n){const e=sw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:By(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:By(c)}}}function By(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function uA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class rp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wr("not implemented")}_getIdTokenResponse(e){return Wr("not implemented")}_linkToIdToken(e,t){return Wr("not implemented")}_getReauthenticationResolver(e){return Wr("not implemented")}}async function cA(n,e){return Ar(n,"POST","/v1/accounts:update",e)}async function dA(n,e){return Ar(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function hA(n,e){return Al(n,"POST","/v1/accounts:signInWithPassword",ei(n,e))}async function fA(n,e){return Ar(n,"POST","/v1/accounts:sendOobCode",ei(n,e))}async function pA(n,e){return fA(n,e)}/**
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
 */async function mA(n,e){return Al(n,"POST","/v1/accounts:signInWithEmailLink",ei(n,e))}async function gA(n,e){return Al(n,"POST","/v1/accounts:signInWithEmailLink",ei(n,e))}/**
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
 */class ml extends rp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ml(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ml(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,t,"signInWithPassword",hA);case"emailLink":return mA(e,{email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,i,"signUpPassword",dA);case"emailLink":return gA(e,{idToken:t,email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jo(n,e){return Al(n,"POST","/v1/accounts:signInWithIdp",ei(n,e))}/**
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
 */const yA="http://localhost";class Rs extends rp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Jf(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Rs(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return jo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,jo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jo(e,t)}buildRequest(){const e={requestUri:yA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Il(t)}return e}}/**
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
 */function vA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _A(n){const e=el(tl(n)).link,t=e?el(tl(e)).deep_link_id:null,i=el(tl(n)).deep_link_id;return(i?el(tl(i)).link:null)||i||t||e||n}class ip{constructor(e){var t,i,o,l,c,f;const p=el(tl(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(i=p.oobCode)!==null&&i!==void 0?i:null,T=vA((o=p.mode)!==null&&o!==void 0?o:null);Ie(y&&w&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=_A(e);try{return new ip(t)}catch{return null}}}/**
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
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,t){return ml._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ip.parseLink(t);return Ie(i,"argument-error"),ml._fromEmailAndCode(e,i.code,i.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ow{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cl extends ow{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ci extends Cl{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch{return null}}}Ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ci.PROVIDER_ID="facebook.com";/**
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
 */class ki extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rs._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ki.credential(t,i)}catch{return null}}}ki.GOOGLE_SIGN_IN_METHOD="google.com";ki.PROVIDER_ID="google.com";/**
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
 */class Ri extends Cl{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.GITHUB_SIGN_IN_METHOD="github.com";Ri.PROVIDER_ID="github.com";/**
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
 */class Pi extends Cl{constructor(){super("twitter.com")}static credential(e,t){return Rs._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Pi.credential(t,i)}catch{return null}}}Pi.TWITTER_SIGN_IN_METHOD="twitter.com";Pi.PROVIDER_ID="twitter.com";/**
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
 */async function wA(n,e){return Al(n,"POST","/v1/accounts:signUp",ei(n,e))}/**
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
 */class Ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Yn._fromIdTokenResponse(e,i,o),c=zy(i);return new Ps({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=zy(i);return new Ps({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function zy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Sc extends Sr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Sc(e,t,i,o)}}function aw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(n,l,e,i):l})}async function EA(n,e,t=!1){const i=await Uo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ps._forOperation(n,"link",i)}/**
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
 */async function lw(n,e,t=!1){const{auth:i}=n;if(gn(i.app))return Promise.reject(mr(i));const o="reauthenticate";try{const l=await Uo(n,aw(i,o,e,n),t);Ie(l.idToken,i,"internal-error");const c=tp(l.idToken);Ie(c,i,"internal-error");const{sub:f}=c;return Ie(n.uid===f,i,"user-mismatch"),Ps._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Jn(i,"user-mismatch"),l}}/**
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
 */async function uw(n,e,t=!1){if(gn(n.app))return Promise.reject(mr(n));const i="signIn",o=await aw(n,i,e),l=await Ps._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function TA(n,e){return uw(Hi(n),e)}async function IA(n,e){return lw(et(n),e)}/**
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
 */async function cw(n){const e=Hi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function SA(n,e,t){const i=Hi(n);await Ic(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",pA)}async function AA(n,e,t){if(gn(n.app))return Promise.reject(mr(n));const i=Hi(n),c=await Ic(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&cw(n),p}),f=await Ps._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(f.user),f}function CA(n,e,t){return gn(n.app)?Promise.reject(mr(n)):TA(et(n),Vs.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&cw(n),i})}function kA(n,e){const t=et(n);return gn(t.auth.app)?Promise.reject(mr(t.auth)):dw(t,e,null)}function RA(n,e){return dw(et(n),null,e)}async function dw(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await Uo(n,cA(i,l));await n._updateTokensIfNecessary(c,!0)}function PA(n,e,t,i){return et(n).onIdTokenChanged(e,t,i)}function xA(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function NA(n,e,t,i){return et(n).onAuthStateChanged(e,t,i)}function bA(n){return et(n).signOut()}const Ac="__sak";/**
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
 */class hw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const DA=1e3,OA=10;class fw extends hw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);q1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,OA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fw.type="LOCAL";const VA=fw;/**
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
 */class pw extends hw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pw.type="SESSION";const mw=pw;/**
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
 */function LA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new qc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async y=>y(t.origin,l)),p=await LA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
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
 */function sp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class MA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const y=sp("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function gr(){return window}function jA(n){gr().location.href=n}/**
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
 */function gw(){return typeof gr().WorkerGlobalScope<"u"&&typeof gr().importScripts=="function"}async function FA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function BA(){return gw()?self:null}/**
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
 */const yw="firebaseLocalStorageDb",zA=1,Cc="firebaseLocalStorage",vw="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hc(n,e){return n.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function $A(){const n=indexedDB.deleteDatabase(yw);return new kl(n).toPromise()}function If(){const n=indexedDB.open(yw,zA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Cc,{keyPath:vw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Cc)?e(i):(i.close(),await $A(),e(await If()))})})}async function $y(n,e,t){const i=Hc(n,!0).put({[vw]:e,value:t});return new kl(i).toPromise()}async function WA(n,e){const t=Hc(n,!1).get(e),i=await new kl(t).toPromise();return i===void 0?null:i.value}function Wy(n,e){const t=Hc(n,!0).delete(e);return new kl(t).toPromise()}const qA=800,HA=3;class _w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>HA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(BA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await FA(),!this.activeServiceWorker)return;this.sender=new MA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await $y(e,Ac,"1"),await Wy(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>$y(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>WA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Hc(o,!1).getAll();return new kl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_w.type="LOCAL";const KA=_w;new Sl(3e4,6e4);/**
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
 */function GA(n,e){return e?qr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class op extends rp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function QA(n){return uw(n.auth,new op(n),n.bypassAuthState)}function YA(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),lw(t,new op(n),n.bypassAuthState)}async function XA(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),EA(t,new op(n),n.bypassAuthState)}/**
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
 */class ww{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QA;case"linkViaPopup":case"linkViaRedirect":return XA;case"reauthViaPopup":case"reauthViaRedirect":return YA;default:Jn(this.auth,"internal-error")}}resolve(e){Qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JA=new Sl(2e3,1e4);class Vo extends ww{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Vo.currentPopupAction&&Vo.currentPopupAction.cancel(),Vo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Qr(this.filter.length===1,"Popup operations only handle one event");const e=sp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JA.get())};e()}}Vo.currentPopupAction=null;/**
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
 */const ZA="pendingRedirect",lc=new Map;class eC extends ww{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=lc.get(this.auth._key());if(!e){try{const i=await tC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}lc.set(this.auth._key(),e)}return this.bypassAuthState||lc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tC(n,e){const t=iC(e),i=rC(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function nC(n,e){lc.set(n._key(),e)}function rC(n){return qr(n._redirectPersistence)}function iC(n){return ac(ZA,n.config.apiKey,n.name)}async function sC(n,e,t=!1){if(gn(n.app))return Promise.reject(mr(n));const i=Hi(n),o=GA(i,e),c=await new eC(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const oC=600*1e3;class aC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ew(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(pr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oC&&this.cachedEventUids.clear(),this.cachedEventUids.has(qy(e))}saveEventToCache(e){this.cachedEventUids.add(qy(e)),this.lastProcessedEventTime=Date.now()}}function qy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ew({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ew(n);default:return!1}}/**
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
 */async function uC(n,e={}){return Ar(n,"GET","/v1/projects",e)}/**
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
 */const cC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dC=/^https?/;async function hC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uC(n);for(const t of e)try{if(fC(t))return}catch{}Jn(n,"unauthorized-domain")}function fC(n){const e=Ef(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!dC.test(t))return!1;if(cC.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const pC=new Sl(3e4,6e4);function Hy(){const n=gr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function mC(n){return new Promise((e,t)=>{var i,o,l;function c(){Hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hy(),t(pr(n,"network-request-failed"))},timeout:pC.get()})}if(!((o=(i=gr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=gr().gapi)===null||l===void 0)&&l.load)c();else{const f=eA("iframefcb");return gr()[f]=()=>{gapi.load?c():t(pr(n,"network-request-failed"))},rw(`${Z1()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw uc=null,e})}let uc=null;function gC(n){return uc=uc||mC(n),uc}/**
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
 */const yC=new Sl(5e3,15e3),vC="__/auth/iframe",_C="emulator/auth/iframe",wC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TC(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ep(e,_C):`https://${n.config.authDomain}/${vC}`,i={apiKey:e.apiKey,appName:n.name,v:Zo},o=EC.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Il(i).slice(1)}`}async function IC(n){const e=await gC(n),t=gr().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:TC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wC,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=pr(n,"network-request-failed"),f=gr().setTimeout(()=>{l(c)},yC.get());function p(){gr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const SC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AC=500,CC=600,kC="_blank",RC="http://localhost";class Ky{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PC(n,e,t,i=AC,o=CC){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},SC),{width:i.toString(),height:o.toString(),top:l,left:c}),y=qt().toLowerCase();t&&(f=Y_(y)?kC:t),G_(y)&&(e=e||RC,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[N,B])=>`${S}${N}=${B},`,"");if(W1(y)&&f!=="_self")return xC(e||"",f),new Ky(null);const T=window.open(e||"",f,w);Ie(T,n,"popup-blocked");try{T.focus()}catch{}return new Ky(T)}function xC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const NC="__/auth/handler",bC="emulator/auth/handler",DC=encodeURIComponent("fac");async function Gy(n,e,t,i,o,l){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Zo,eventId:o};if(e instanceof ow){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",fS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))c[w]=T}if(e instanceof Cl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(c.scopes=w.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await n._getAppCheckToken(),y=p?`#${DC}=${encodeURIComponent(p)}`:"";return`${OC(n)}?${Il(f).slice(1)}${y}`}function OC({config:n}){return n.emulator?ep(n,bC):`https://${n.authDomain}/${NC}`}/**
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
 */const nf="webStorageSupport";class VC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mw,this._completeRedirectFn=sC,this._overrideRedirectResult=nC}async _openPopup(e,t,i,o){var l;Qr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Gy(e,t,i,Ef(),o);return PC(e,c,sp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Gy(e,t,i,Ef(),o);return jA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Qr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await IC(e),i=new aC(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nf,{type:nf},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[nf];c!==void 0&&t(!!c),Jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tw()||Q_()||np()}}const LC=VC;var Qy="@firebase/auth",Yy="1.10.8";/**
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
 */class MC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FC(n){Er(new Xn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nw(n)},y=new Y1(i,o,l,p);return oA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Er(new Xn("auth-internal",e=>{const t=Hi(e.getProvider("auth").getImmediate());return(i=>new MC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Qy,Yy,jC(n)),Dn(Qy,Yy,"esm2017")}/**
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
 */const UC=300,BC=x_("authIdTokenMaxAge")||UC;let Xy=null;const zC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>BC)return;const o=t==null?void 0:t.token;Xy!==o&&(Xy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $C(n=Xf()){const e=Jo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sA(n,{popupRedirectResolver:LC,persistence:[KA,VA,mw]}),i=x_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=zC(l.toString());xA(t,c,()=>c(t.currentUser)),PA(t,f=>c(f))}}const o=R_("auth");return o&&aA(t,`http://${o}`),t}function WC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}X1({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=pr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",WC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FC("Browser");var qC="firebase",HC="11.10.0";/**
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
 */Dn(qC,HC,"app");var Jy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oi,Tw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,A){function k(){}k.prototype=A.prototype,b.D=A.prototype,b.prototype=new k,b.prototype.constructor=b,b.C=function(x,O,L){for(var R=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)R[Ge-2]=arguments[Ge];return A.prototype[O].apply(x,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(b,A,k){k||(k=0);var x=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)x[O]=A.charCodeAt(k++)|A.charCodeAt(k++)<<8|A.charCodeAt(k++)<<16|A.charCodeAt(k++)<<24;else for(O=0;16>O;++O)x[O]=A[k++]|A[k++]<<8|A[k++]<<16|A[k++]<<24;A=b.g[0],k=b.g[1],O=b.g[2];var L=b.g[3],R=A+(L^k&(O^L))+x[0]+3614090360&4294967295;A=k+(R<<7&4294967295|R>>>25),R=L+(O^A&(k^O))+x[1]+3905402710&4294967295,L=A+(R<<12&4294967295|R>>>20),R=O+(k^L&(A^k))+x[2]+606105819&4294967295,O=L+(R<<17&4294967295|R>>>15),R=k+(A^O&(L^A))+x[3]+3250441966&4294967295,k=O+(R<<22&4294967295|R>>>10),R=A+(L^k&(O^L))+x[4]+4118548399&4294967295,A=k+(R<<7&4294967295|R>>>25),R=L+(O^A&(k^O))+x[5]+1200080426&4294967295,L=A+(R<<12&4294967295|R>>>20),R=O+(k^L&(A^k))+x[6]+2821735955&4294967295,O=L+(R<<17&4294967295|R>>>15),R=k+(A^O&(L^A))+x[7]+4249261313&4294967295,k=O+(R<<22&4294967295|R>>>10),R=A+(L^k&(O^L))+x[8]+1770035416&4294967295,A=k+(R<<7&4294967295|R>>>25),R=L+(O^A&(k^O))+x[9]+2336552879&4294967295,L=A+(R<<12&4294967295|R>>>20),R=O+(k^L&(A^k))+x[10]+4294925233&4294967295,O=L+(R<<17&4294967295|R>>>15),R=k+(A^O&(L^A))+x[11]+2304563134&4294967295,k=O+(R<<22&4294967295|R>>>10),R=A+(L^k&(O^L))+x[12]+1804603682&4294967295,A=k+(R<<7&4294967295|R>>>25),R=L+(O^A&(k^O))+x[13]+4254626195&4294967295,L=A+(R<<12&4294967295|R>>>20),R=O+(k^L&(A^k))+x[14]+2792965006&4294967295,O=L+(R<<17&4294967295|R>>>15),R=k+(A^O&(L^A))+x[15]+1236535329&4294967295,k=O+(R<<22&4294967295|R>>>10),R=A+(O^L&(k^O))+x[1]+4129170786&4294967295,A=k+(R<<5&4294967295|R>>>27),R=L+(k^O&(A^k))+x[6]+3225465664&4294967295,L=A+(R<<9&4294967295|R>>>23),R=O+(A^k&(L^A))+x[11]+643717713&4294967295,O=L+(R<<14&4294967295|R>>>18),R=k+(L^A&(O^L))+x[0]+3921069994&4294967295,k=O+(R<<20&4294967295|R>>>12),R=A+(O^L&(k^O))+x[5]+3593408605&4294967295,A=k+(R<<5&4294967295|R>>>27),R=L+(k^O&(A^k))+x[10]+38016083&4294967295,L=A+(R<<9&4294967295|R>>>23),R=O+(A^k&(L^A))+x[15]+3634488961&4294967295,O=L+(R<<14&4294967295|R>>>18),R=k+(L^A&(O^L))+x[4]+3889429448&4294967295,k=O+(R<<20&4294967295|R>>>12),R=A+(O^L&(k^O))+x[9]+568446438&4294967295,A=k+(R<<5&4294967295|R>>>27),R=L+(k^O&(A^k))+x[14]+3275163606&4294967295,L=A+(R<<9&4294967295|R>>>23),R=O+(A^k&(L^A))+x[3]+4107603335&4294967295,O=L+(R<<14&4294967295|R>>>18),R=k+(L^A&(O^L))+x[8]+1163531501&4294967295,k=O+(R<<20&4294967295|R>>>12),R=A+(O^L&(k^O))+x[13]+2850285829&4294967295,A=k+(R<<5&4294967295|R>>>27),R=L+(k^O&(A^k))+x[2]+4243563512&4294967295,L=A+(R<<9&4294967295|R>>>23),R=O+(A^k&(L^A))+x[7]+1735328473&4294967295,O=L+(R<<14&4294967295|R>>>18),R=k+(L^A&(O^L))+x[12]+2368359562&4294967295,k=O+(R<<20&4294967295|R>>>12),R=A+(k^O^L)+x[5]+4294588738&4294967295,A=k+(R<<4&4294967295|R>>>28),R=L+(A^k^O)+x[8]+2272392833&4294967295,L=A+(R<<11&4294967295|R>>>21),R=O+(L^A^k)+x[11]+1839030562&4294967295,O=L+(R<<16&4294967295|R>>>16),R=k+(O^L^A)+x[14]+4259657740&4294967295,k=O+(R<<23&4294967295|R>>>9),R=A+(k^O^L)+x[1]+2763975236&4294967295,A=k+(R<<4&4294967295|R>>>28),R=L+(A^k^O)+x[4]+1272893353&4294967295,L=A+(R<<11&4294967295|R>>>21),R=O+(L^A^k)+x[7]+4139469664&4294967295,O=L+(R<<16&4294967295|R>>>16),R=k+(O^L^A)+x[10]+3200236656&4294967295,k=O+(R<<23&4294967295|R>>>9),R=A+(k^O^L)+x[13]+681279174&4294967295,A=k+(R<<4&4294967295|R>>>28),R=L+(A^k^O)+x[0]+3936430074&4294967295,L=A+(R<<11&4294967295|R>>>21),R=O+(L^A^k)+x[3]+3572445317&4294967295,O=L+(R<<16&4294967295|R>>>16),R=k+(O^L^A)+x[6]+76029189&4294967295,k=O+(R<<23&4294967295|R>>>9),R=A+(k^O^L)+x[9]+3654602809&4294967295,A=k+(R<<4&4294967295|R>>>28),R=L+(A^k^O)+x[12]+3873151461&4294967295,L=A+(R<<11&4294967295|R>>>21),R=O+(L^A^k)+x[15]+530742520&4294967295,O=L+(R<<16&4294967295|R>>>16),R=k+(O^L^A)+x[2]+3299628645&4294967295,k=O+(R<<23&4294967295|R>>>9),R=A+(O^(k|~L))+x[0]+4096336452&4294967295,A=k+(R<<6&4294967295|R>>>26),R=L+(k^(A|~O))+x[7]+1126891415&4294967295,L=A+(R<<10&4294967295|R>>>22),R=O+(A^(L|~k))+x[14]+2878612391&4294967295,O=L+(R<<15&4294967295|R>>>17),R=k+(L^(O|~A))+x[5]+4237533241&4294967295,k=O+(R<<21&4294967295|R>>>11),R=A+(O^(k|~L))+x[12]+1700485571&4294967295,A=k+(R<<6&4294967295|R>>>26),R=L+(k^(A|~O))+x[3]+2399980690&4294967295,L=A+(R<<10&4294967295|R>>>22),R=O+(A^(L|~k))+x[10]+4293915773&4294967295,O=L+(R<<15&4294967295|R>>>17),R=k+(L^(O|~A))+x[1]+2240044497&4294967295,k=O+(R<<21&4294967295|R>>>11),R=A+(O^(k|~L))+x[8]+1873313359&4294967295,A=k+(R<<6&4294967295|R>>>26),R=L+(k^(A|~O))+x[15]+4264355552&4294967295,L=A+(R<<10&4294967295|R>>>22),R=O+(A^(L|~k))+x[6]+2734768916&4294967295,O=L+(R<<15&4294967295|R>>>17),R=k+(L^(O|~A))+x[13]+1309151649&4294967295,k=O+(R<<21&4294967295|R>>>11),R=A+(O^(k|~L))+x[4]+4149444226&4294967295,A=k+(R<<6&4294967295|R>>>26),R=L+(k^(A|~O))+x[11]+3174756917&4294967295,L=A+(R<<10&4294967295|R>>>22),R=O+(A^(L|~k))+x[2]+718787259&4294967295,O=L+(R<<15&4294967295|R>>>17),R=k+(L^(O|~A))+x[9]+3951481745&4294967295,b.g[0]=b.g[0]+A&4294967295,b.g[1]=b.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,b.g[2]=b.g[2]+O&4294967295,b.g[3]=b.g[3]+L&4294967295}i.prototype.u=function(b,A){A===void 0&&(A=b.length);for(var k=A-this.blockSize,x=this.B,O=this.h,L=0;L<A;){if(O==0)for(;L<=k;)o(this,b,L),L+=this.blockSize;if(typeof b=="string"){for(;L<A;)if(x[O++]=b.charCodeAt(L++),O==this.blockSize){o(this,x),O=0;break}}else for(;L<A;)if(x[O++]=b[L++],O==this.blockSize){o(this,x),O=0;break}}this.h=O,this.o+=A},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var A=1;A<b.length-8;++A)b[A]=0;var k=8*this.o;for(A=b.length-8;A<b.length;++A)b[A]=k&255,k/=256;for(this.u(b),b=Array(16),A=k=0;4>A;++A)for(var x=0;32>x;x+=8)b[k++]=this.g[A]>>>x&255;return b};function l(b,A){var k=f;return Object.prototype.hasOwnProperty.call(k,b)?k[b]:k[b]=A(b)}function c(b,A){this.h=A;for(var k=[],x=!0,O=b.length-1;0<=O;O--){var L=b[O]|0;x&&L==A||(k[O]=L,x=!1)}this.g=k}var f={};function p(b){return-128<=b&&128>b?l(b,function(A){return new c([A|0],0>A?-1:0)}):new c([b|0],0>b?-1:0)}function y(b){if(isNaN(b)||!isFinite(b))return T;if(0>b)return F(y(-b));for(var A=[],k=1,x=0;b>=k;x++)A[x]=b/k|0,k*=4294967296;return new c(A,0)}function w(b,A){if(b.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b.charAt(0)=="-")return F(w(b.substring(1),A));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=y(Math.pow(A,8)),x=T,O=0;O<b.length;O+=8){var L=Math.min(8,b.length-O),R=parseInt(b.substring(O,O+L),A);8>L?(L=y(Math.pow(A,L)),x=x.j(L).add(y(R))):(x=x.j(k),x=x.add(y(R)))}return x}var T=p(0),S=p(1),N=p(16777216);n=c.prototype,n.m=function(){if(q(this))return-F(this).m();for(var b=0,A=1,k=0;k<this.g.length;k++){var x=this.i(k);b+=(0<=x?x:4294967296+x)*A,A*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(B(this))return"0";if(q(this))return"-"+F(this).toString(b);for(var A=y(Math.pow(b,6)),k=this,x="";;){var O=ye(k,A).g;k=oe(k,O.j(A));var L=((0<k.g.length?k.g[0]:k.h)>>>0).toString(b);if(k=O,B(k))return L+x;for(;6>L.length;)L="0"+L;x=L+x}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function B(b){if(b.h!=0)return!1;for(var A=0;A<b.g.length;A++)if(b.g[A]!=0)return!1;return!0}function q(b){return b.h==-1}n.l=function(b){return b=oe(this,b),q(b)?-1:B(b)?0:1};function F(b){for(var A=b.g.length,k=[],x=0;x<A;x++)k[x]=~b.g[x];return new c(k,~b.h).add(S)}n.abs=function(){return q(this)?F(this):this},n.add=function(b){for(var A=Math.max(this.g.length,b.g.length),k=[],x=0,O=0;O<=A;O++){var L=x+(this.i(O)&65535)+(b.i(O)&65535),R=(L>>>16)+(this.i(O)>>>16)+(b.i(O)>>>16);x=R>>>16,L&=65535,R&=65535,k[O]=R<<16|L}return new c(k,k[k.length-1]&-2147483648?-1:0)};function oe(b,A){return b.add(F(A))}n.j=function(b){if(B(this)||B(b))return T;if(q(this))return q(b)?F(this).j(F(b)):F(F(this).j(b));if(q(b))return F(this.j(F(b)));if(0>this.l(N)&&0>b.l(N))return y(this.m()*b.m());for(var A=this.g.length+b.g.length,k=[],x=0;x<2*A;x++)k[x]=0;for(x=0;x<this.g.length;x++)for(var O=0;O<b.g.length;O++){var L=this.i(x)>>>16,R=this.i(x)&65535,Ge=b.i(O)>>>16,ht=b.i(O)&65535;k[2*x+2*O]+=R*ht,ne(k,2*x+2*O),k[2*x+2*O+1]+=L*ht,ne(k,2*x+2*O+1),k[2*x+2*O+1]+=R*Ge,ne(k,2*x+2*O+1),k[2*x+2*O+2]+=L*Ge,ne(k,2*x+2*O+2)}for(x=0;x<A;x++)k[x]=k[2*x+1]<<16|k[2*x];for(x=A;x<2*A;x++)k[x]=0;return new c(k,0)};function ne(b,A){for(;(b[A]&65535)!=b[A];)b[A+1]+=b[A]>>>16,b[A]&=65535,A++}function Z(b,A){this.g=b,this.h=A}function ye(b,A){if(B(A))throw Error("division by zero");if(B(b))return new Z(T,T);if(q(b))return A=ye(F(b),A),new Z(F(A.g),F(A.h));if(q(A))return A=ye(b,F(A)),new Z(F(A.g),A.h);if(30<b.g.length){if(q(b)||q(A))throw Error("slowDivide_ only works with positive integers.");for(var k=S,x=A;0>=x.l(b);)k=Pe(k),x=Pe(x);var O=Re(k,1),L=Re(x,1);for(x=Re(x,2),k=Re(k,2);!B(x);){var R=L.add(x);0>=R.l(b)&&(O=O.add(k),L=R),x=Re(x,1),k=Re(k,1)}return A=oe(b,O.j(A)),new Z(O,A)}for(O=T;0<=b.l(A);){for(k=Math.max(1,Math.floor(b.m()/A.m())),x=Math.ceil(Math.log(k)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),L=y(k),R=L.j(A);q(R)||0<R.l(b);)k-=x,L=y(k),R=L.j(A);B(L)&&(L=S),O=O.add(L),b=oe(b,R)}return new Z(O,b)}n.A=function(b){return ye(this,b).h},n.and=function(b){for(var A=Math.max(this.g.length,b.g.length),k=[],x=0;x<A;x++)k[x]=this.i(x)&b.i(x);return new c(k,this.h&b.h)},n.or=function(b){for(var A=Math.max(this.g.length,b.g.length),k=[],x=0;x<A;x++)k[x]=this.i(x)|b.i(x);return new c(k,this.h|b.h)},n.xor=function(b){for(var A=Math.max(this.g.length,b.g.length),k=[],x=0;x<A;x++)k[x]=this.i(x)^b.i(x);return new c(k,this.h^b.h)};function Pe(b){for(var A=b.g.length+1,k=[],x=0;x<A;x++)k[x]=b.i(x)<<1|b.i(x-1)>>>31;return new c(k,b.h)}function Re(b,A){var k=A>>5;A%=32;for(var x=b.g.length-k,O=[],L=0;L<x;L++)O[L]=0<A?b.i(L+k)>>>A|b.i(L+k+1)<<32-A:b.i(L+k);return new c(O,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Tw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=w,Oi=c}).apply(typeof Jy<"u"?Jy:typeof self<"u"?self:typeof window<"u"?window:{});var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Iw,nl,Sw,cc,Sf,Aw,Cw,kw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ec=="object"&&ec];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var M=u[I];if(!(M in v))break e;v=v[M]}u=u[u.length-1],I=v[u],m=m(I),m!=I&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,I=!1,M={next:function(){if(!I&&v<u.length){var $=v++;return{value:m($,u[$]),done:!1}}return I=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,v){return u.call.apply(u.bind,arguments)}function T(u,m,v){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,I),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function S(u,m,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,S.apply(null,arguments)}function N(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function B(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(I,M,$){for(var se=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)se[ze-2]=arguments[ze];return m.prototype[M].apply(I,se)}}function q(u){const m=u.length;if(0<m){const v=Array(m);for(let I=0;I<m;I++)v[I]=u[I];return v}return[]}function F(u,m){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(p(I)){const M=u.length||0,$=I.length||0;u.length=M+$;for(let se=0;se<$;se++)u[M+se]=I[se]}else u.push(I)}}class oe{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ne(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ye(u){return ye[" "](u),u}ye[" "]=function(){};var Pe=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function Re(u,m,v){for(const I in u)m.call(v,u[I],I,u)}function b(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function A(u){const m={};for(const v in u)m[v]=u[v];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let v,I;for(let M=1;M<arguments.length;M++){I=arguments[M];for(v in I)u[v]=I[v];for(let $=0;$<k.length;$++)v=k[$],Object.prototype.hasOwnProperty.call(I,v)&&(u[v]=I[v])}}function O(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function L(u){f.setTimeout(()=>{throw u},0)}function R(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ge{constructor(){this.h=this.g=null}add(m,v){const I=ht.get();I.set(m,v),this.h?this.h.next=I:this.g=I,this.h=I}}var ht=new oe(()=>new it,u=>u.reset());class it{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let je,ie=!1,me=new Ge,ae=()=>{const u=f.Promise.resolve(void 0);je=()=>{u.then(V)}};var V=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(v){L(v)}var m=ht;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var G=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return u})();function Y(u,m){if(H.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Pe){e:{try{ye(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:le[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Y.aa.h.call(this)}}B(Y,H);var le={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Te="closure_listenable_"+(1e6*Math.random()|0),_e=0;function be(u,m,v,I,M){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!I,this.ha=M,this.key=++_e,this.da=this.fa=!1}function st(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function vn(u){this.src=u,this.g={},this.h=0}vn.prototype.add=function(u,m,v,I,M){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var se=_n(u,m,I,M);return-1<se?(m=u[se],v||(m.fa=!1)):(m=new be(m,this.src,$,!!I,M),m.fa=v,u.push(m)),m};function er(u,m){var v=m.type;if(v in u.g){var I=u.g[v],M=Array.prototype.indexOf.call(I,m,void 0),$;($=0<=M)&&Array.prototype.splice.call(I,M,1),$&&(st(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function _n(u,m,v,I){for(var M=0;M<u.length;++M){var $=u[M];if(!$.da&&$.listener==m&&$.capture==!!v&&$.ha==I)return M}return-1}var Pt="closure_lm_"+(1e6*Math.random()|0),Fs={};function sa(u,m,v,I,M){if(Array.isArray(m)){for(var $=0;$<m.length;$++)sa(u,m[$],v,I,M);return null}return v=la(v),u&&u[Te]?u.K(m,v,y(I)?!!I.capture:!1,M):oa(u,m,v,!1,I,M)}function oa(u,m,v,I,M,$){if(!m)throw Error("Invalid event type");var se=y(M)?!!M.capture:!!M,ze=Bs(u);if(ze||(u[Pt]=ze=new vn(u)),v=ze.add(m,v,I,se,$),v.proxy)return v;if(I=Ml(),v.proxy=I,I.src=u,I.listener=v,u.addEventListener)G||(M=se),M===void 0&&(M=!1),u.addEventListener(m.toString(),I,M);else if(u.attachEvent)u.attachEvent(kr(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ml(){function u(v){return m.call(u.src,u.listener,v)}const m=aa;return u}function Us(u,m,v,I,M){if(Array.isArray(m))for(var $=0;$<m.length;$++)Us(u,m[$],v,I,M);else I=y(I)?!!I.capture:!!I,v=la(v),u&&u[Te]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],v=_n($,v,I,M),-1<v&&(st($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Bs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=_n(m,v,I,M)),(v=-1<u?m[u]:null)&&Cr(v))}function Cr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Te])er(m.i,u);else{var v=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(v,I,u.capture):m.detachEvent?m.detachEvent(kr(v),I):m.addListener&&m.removeListener&&m.removeListener(I),(v=Bs(m))?(er(v,u),v.h==0&&(v.src=null,m[Pt]=null)):st(u)}}}function kr(u){return u in Fs?Fs[u]:Fs[u]="on"+u}function aa(u,m){if(u.da)u=!0;else{m=new Y(m,this);var v=u.listener,I=u.ha||u.src;u.fa&&Cr(u),u=v.call(I,m)}return u}function Bs(u){return u=u[Pt],u instanceof vn?u:null}var zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function la(u){return typeof u=="function"?u:(u[zs]||(u[zs]=function(m){return u.handleEvent(m)}),u[zs])}function vt(){K.call(this),this.i=new vn(this),this.M=this,this.F=null}B(vt,K),vt.prototype[Te]=!0,vt.prototype.removeEventListener=function(u,m,v,I){Us(this,u,m,v,I)};function _t(u,m){var v,I=u.F;if(I)for(v=[];I;I=I.F)v.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new H(m,u);else if(m instanceof H)m.target=m.target||u;else{var M=m;m=new H(I,u),x(m,M)}if(M=!0,v)for(var $=v.length-1;0<=$;$--){var se=m.g=v[$];M=Rr(se,I,!0,m)&&M}if(se=m.g=u,M=Rr(se,I,!0,m)&&M,M=Rr(se,I,!1,m)&&M,v)for($=0;$<v.length;$++)se=m.g=v[$],M=Rr(se,I,!1,m)&&M}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],I=0;I<v.length;I++)st(v[I]);delete u.g[m],u.h--}}this.F=null},vt.prototype.K=function(u,m,v,I){return this.i.add(String(u),m,!1,v,I)},vt.prototype.L=function(u,m,v,I){return this.i.add(String(u),m,!0,v,I)};function Rr(u,m,v,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,$=0;$<m.length;++$){var se=m[$];if(se&&!se.da&&se.capture==v){var ze=se.listener,wt=se.ha||se.src;se.fa&&er(u.i,se),M=ze.call(wt,I)!==!1&&M}}return M&&!I.defaultPrevented}function ua(u,m,v){if(typeof u=="function")v&&(u=S(u,v));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function ti(u){u.g=ua(()=>{u.g=null,u.i&&(u.i=!1,ti(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Yi extends K{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ti(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(u){K.call(this),this.h=u,this.g={}}B(Xi,K);var ca=[];function da(u){Re(u.g,function(m,v){this.g.hasOwnProperty(v)&&Cr(m)},u),u.g={}}Xi.prototype.N=function(){Xi.aa.N.call(this),da(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ha=f.JSON.stringify,fa=f.JSON.parse,pa=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ji(){}Ji.prototype.h=null;function $s(u){return u.h||(u.h=u.i())}function Ws(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){H.call(this,"d")}B(tr,H);function qs(){H.call(this,"c")}B(qs,H);var nr={},ma=null;function Zi(){return ma=ma||new vt}nr.La="serverreachability";function ga(u){H.call(this,nr.La,u)}B(ga,H);function Pr(u){const m=Zi();_t(m,new ga(m))}nr.STAT_EVENT="statevent";function ya(u,m){H.call(this,nr.STAT_EVENT,u),this.stat=m}B(ya,H);function lt(u){const m=Zi();_t(m,new ya(m,u))}nr.Ma="timingevent";function Hs(u,m){H.call(this,nr.Ma,u),this.size=m}B(Hs,H);function Vn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function es(){this.g=!0}es.prototype.xa=function(){this.g=!1};function ts(u,m,v,I,M,$){u.info(function(){if(u.g)if($)for(var se="",ze=$.split("&"),wt=0;wt<ze.length;wt++){var Le=ze[wt].split("=");if(1<Le.length){var St=Le[0];Le=Le[1];var ft=St.split("_");se=2<=ft.length&&ft[1]=="type"?se+(St+"="+Le+"&"):se+(St+"=redacted&")}}else se=null;else se=$;return"XMLHTTP REQ ("+I+") [attempt "+M+"]: "+m+`
`+v+`
`+se})}function Ks(u,m,v,I,M,$,se){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+M+"]: "+m+`
`+v+`
`+$+" "+se})}function Ln(u,m,v,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+yd(u,v)+(I?" "+I:"")})}function va(u,m){u.info(function(){return"TIMEOUT: "+m})}es.prototype.info=function(){};function yd(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var I=v[u];if(!(2>I.length)){var M=I[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var se=1;se<M.length;se++)M[se]=""}}}}return ha(v)}catch{return m}}var Gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mn;function ns(){}B(ns,Ji),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Mn=new ns;function jn(u,m,v,I){this.j=u,this.i=m,this.l=v,this.R=I||1,this.U=new Xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var _a={},Qs={};function Ys(u,m,v){u.L=1,u.v=oi(cn(m)),u.m=v,u.P=!0,wa(u,null)}function wa(u,m){u.F=Date.now(),qe(u),u.A=cn(u.v);var v=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),li(v.i,"t",I),u.C=0,v=u.j.J,u.h=new Fl,u.g=ru(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Yi(S(u.Y,u,u.g),u.O)),m=u.U,v=u.g,I=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(ca[0]=M.toString()),M=ca);for(var $=0;$<M.length;$++){var se=sa(v,M[$],I||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Pr(),ts(u.i,u.u,u.A,u.l,u.R,u.m)}jn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Jt(u)==3?m.j():this.Y(u)},jn.prototype.Y=function(u){try{if(u==this.g)e:{const ft=Jt(this.g);var m=this.g.Ba();const In=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ca(this.g)))){this.J||ft!=4||m==7||(m==8||0>=In?Pr(3):Pr(2)),rs(this);var v=this.g.Z();this.X=v;t:if(Ul(this)){var I=Ca(this.g);u="";var M=I.length,$=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),ni(this);var se="";break t}this.h.i=new f.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!($&&m==M-1)});I.length=0,this.h.g+=u,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,Ks(this.i,this.u,this.A,this.l,this.R,ft,v),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,wt=this.g;if((ze=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(ze)){var Le=ze;break t}}Le=null}if(v=Le)Ln(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ea(this,v);else{this.o=!1,this.s=3,lt(12),En(this),ni(this);break e}}if(this.P){v=!0;let hn;for(;!this.J&&this.C<se.length;)if(hn=vd(this,se),hn==Qs){ft==4&&(this.s=4,lt(14),v=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==_a){this.s=4,lt(15),Ln(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else Ln(this.i,this.l,hn,null),Ea(this,hn);if(Ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||se.length!=0||this.h.h||(this.s=1,lt(16),v=!1),this.o=this.o&&v,!v)Ln(this.i,this.l,se,"[Invalid Chunked Response]"),En(this),ni(this);else if(0<se.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Ra(St),St.M=!0,lt(11))}}else Ln(this.i,this.l,se,null),Ea(this,se);ft==4&&En(this),this.o&&!this.J&&(ft==4?ao(this.j,this):(this.o=!1,qe(this)))}else no(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),En(this),ni(this)}}}catch{}finally{}};function Ul(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function vd(u,m){var v=u.C,I=m.indexOf(`
`,v);return I==-1?Qs:(v=Number(m.substring(v,I)),isNaN(v)?_a:(I+=1,I+v>m.length?Qs:(m=m.slice(I,I+v),u.C=I+v,m)))}jn.prototype.cancel=function(){this.J=!0,En(this)};function qe(u){u.S=Date.now()+u.I,Bl(u,u.I)}function Bl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Vn(S(u.ba,u),m)}function rs(u){u.B&&(f.clearTimeout(u.B),u.B=null)}jn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(va(this.i,this.A),this.L!=2&&(Pr(),lt(17)),En(this),this.s=2,ni(this)):Bl(this,this.S-u)};function ni(u){u.j.G==0||u.J||ao(u.j,u)}function En(u){rs(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,da(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Ea(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||Ht(v.h,u))){if(!u.K&&Ht(v.h,u)&&v.G==3){try{var I=v.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var M=I;if(M[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)oo(v),$n(v);else break e;so(v),lt(18)}}else v.za=M[1],0<v.za-v.T&&37500>M[2]&&v.F&&v.v==0&&!v.C&&(v.C=Vn(S(v.Za,v),6e3));if(1>=$l(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Or(v,11)}else if((u.K||v.g==u)&&oo(v),!ne(m))for(M=v.Da.g.parse(m),m=0;m<M.length;m++){let Le=M[m];if(v.T=Le[0],Le=Le[1],v.G==2)if(Le[0]=="c"){v.K=Le[1],v.ia=Le[2];const St=Le[3];St!=null&&(v.la=St,v.j.info("VER="+v.la));const ft=Le[4];ft!=null&&(v.Aa=ft,v.j.info("SVER="+v.Aa));const In=Le[5];In!=null&&typeof In=="number"&&0<In&&(I=1.5*In,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const hn=u.g;if(hn){const cs=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cs){var $=I.h;$.g||cs.indexOf("spdy")==-1&&cs.indexOf("quic")==-1&&cs.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Ta($,$.h),$.h=null))}if(I.D){const uo=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;uo&&(I.ya=uo,We(I.I,I.D,uo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var se=u;if(I.qa=nu(I,I.J?I.ia:null,I.W),se.K){Wl(I.h,se);var ze=se,wt=I.L;wt&&(ze.I=wt),ze.B&&(rs(ze),qe(ze)),I.g=se}else us(I);0<v.i.length&&or(v)}else Le[0]!="stop"&&Le[0]!="close"||Or(v,7);else v.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Or(v,7):Nt(v):Le[0]!="noop"&&v.l&&v.l.ta(Le),v.v=0)}}Pr(4)}catch{}}var zl=class{constructor(u,m){this.g=u,this.map=m}};function is(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function un(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function $l(u){return u.h?1:u.g?u.g.size:0}function Ht(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ta(u,m){u.g?u.g.add(m):u.h=m}function Wl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}is.prototype.cancel=function(){if(this.i=ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ql(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return q(u.i)}function Xs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,I=0;I<v;I++)m.push(u[I]);return m}m=[],v=0;for(I in u)m[v++]=u[I];return m}function Js(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const I in u)m[v++]=I;return m}}}function ri(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=Js(u),I=Xs(u),M=I.length,$=0;$<M;$++)m.call(void 0,I[$],v&&v[$],u)}var ss=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _d(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var I=u[v].indexOf("="),M=null;if(0<=I){var $=u[v].substring(0,I);M=u[v].substring(I+1)}else $=u[v];m($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function xr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof xr){this.h=u.h,os(this,u.j),this.o=u.o,this.g=u.g,ii(this,u.s),this.l=u.l;var m=u.i,v=new rr;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),si(this,v),this.m=u.m}else u&&(m=String(u).match(ss))?(this.h=!1,os(this,m[1]||"",!0),this.o=Ve(m[2]||""),this.g=Ve(m[3]||"",!0),ii(this,m[4]),this.l=Ve(m[5]||"",!0),si(this,m[6]||"",!0),this.m=Ve(m[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}xr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ai(m,Zs,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ai(m,Zs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(ai(v,v.charAt(0)=="/"?Gl:Kl,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",ai(v,Ia)),u.join("")};function cn(u){return new xr(u)}function os(u,m,v){u.j=v?Ve(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ii(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function si(u,m,v){m instanceof rr?(u.i=m,ir(u.i,u.h)):(v||(m=ai(m,Ql)),u.i=new rr(m,u.h))}function We(u,m,v){u.i.set(m,v)}function oi(u){return We(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ve(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ai(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Hl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Hl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Zs=/[#\/\?@]/g,Kl=/[#\?:]/g,Gl=/[#\?]/g,Ql=/[#\?@]/g,Ia=/#/g;function rr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function xt(u){u.g||(u.g=new Map,u.h=0,u.i&&_d(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=rr.prototype,n.add=function(u,m){xt(this),this.i=null,u=Tn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Fn(u,m){xt(u),m=Tn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Un(u,m){return xt(u),m=Tn(u,m),u.g.has(m)}n.forEach=function(u,m){xt(this),this.g.forEach(function(v,I){v.forEach(function(M){u.call(m,M,I,this)},this)},this)},n.na=function(){xt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let I=0;I<m.length;I++){const M=u[I];for(let $=0;$<M.length;$++)v.push(m[I])}return v},n.V=function(u){xt(this);let m=[];if(typeof u=="string")Un(this,u)&&(m=m.concat(this.g.get(Tn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return xt(this),this.i=null,u=Tn(this,u),Un(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function li(u,m,v){Fn(u,m),0<v.length&&(u.i=null,u.g.set(Tn(u,m),q(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var I=m[v];const $=encodeURIComponent(String(I)),se=this.V(I);for(I=0;I<se.length;I++){var M=$;se[I]!==""&&(M+="="+encodeURIComponent(String(se[I]))),u.push(M)}}return this.i=u.join("&")};function Tn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function ir(u,m){m&&!u.j&&(xt(u),u.i=null,u.g.forEach(function(v,I){var M=I.toLowerCase();I!=M&&(Fn(this,I),li(this,M,v))},u)),u.j=m}function wd(u,m){const v=new es;if(f.Image){const I=new Image;I.onload=N(Xt,v,"TestLoadImage: loaded",!0,m,I),I.onerror=N(Xt,v,"TestLoadImage: error",!1,m,I),I.onabort=N(Xt,v,"TestLoadImage: abort",!1,m,I),I.ontimeout=N(Xt,v,"TestLoadImage: timeout",!1,m,I),f.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function Yl(u,m){const v=new es,I=new AbortController,M=setTimeout(()=>{I.abort(),Xt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then($=>{clearTimeout(M),$.ok?Xt(v,"TestPingServer: ok",!0,m):Xt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Xt(v,"TestPingServer: error",!1,m)})}function Xt(u,m,v,I,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),I(v)}catch{}}function Ed(){this.g=new pa}function Xl(u,m,v){const I=v||"";try{ri(u,function(M,$){let se=M;y(M)&&(se=ha(M)),m.push(I+$+"="+encodeURIComponent(se))})}catch(M){throw m.push(I+"type="+encodeURIComponent("_badmap")),M}}function Nr(u){this.l=u.Ub||null,this.j=u.eb||!1}B(Nr,Ji),Nr.prototype.g=function(){return new as(this.l,this.j)},Nr.prototype.i=(function(u){return function(){return u}})({});function as(u,m){vt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(as,vt),n=as.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,zn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Bn(this):zn(this),this.readyState==3&&Jl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Bn(this))},n.Qa=function(u){this.g&&(this.response=u,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,zn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function zn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function br(u){let m="";return Re(u,function(v,I){m+=I,m+=":",m+=v,m+=`\r
`}),m}function ui(u,m,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=br(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):We(u,m,v))}function Je(u){vt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Je,vt);var Td=/^https?$/i,Sa=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mn.g(),this.v=this.o?$s(this.o):$s(Mn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){ls(this,$);return}if(u=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var M in I)v.set(M,I[M]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const $ of I.keys())v.set($,I.get($));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Sa,m,void 0))||I||M||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,se]of v)this.g.setRequestHeader($,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{to(this),this.u=!0,this.g.send(u),this.u=!1}catch($){ls(this,$)}};function ls(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,eo(u),dn(u)}function eo(u){u.A||(u.A=!0,_t(u,"complete"),_t(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,_t(this,"complete"),_t(this,"abort"),dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Aa(this):this.bb())},n.bb=function(){Aa(this)};function Aa(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)ua(u.Ea,0,u);else if(_t(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const se=u.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var I;if(I=se===0){var M=String(u.D).match(ss)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),I=!Td.test(M?M.toLowerCase():"")}v=I}if(v)_t(u,"complete"),_t(u,"success");else{u.m=6;try{var $=2<Jt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",eo(u)}}finally{dn(u)}}}}function dn(u,m){if(u.g){to(u);const v=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||_t(u,"ready");try{v.onreadystatechange=I}catch{}}}function to(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),fa(m)}};function Ca(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function no(u){const m={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(ne(u[I]))continue;var v=O(u[I]);const M=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=m[M]||[];m[M]=$,$.push(v)}b(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function ka(u){this.Aa=0,this.i=[],this.j=new es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,u),this.cb=sr("retryDelaySeedMs",1e4,u),this.Wa=sr("forwardChannelMaxRetries",2,u),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new is(u&&u.concurrentRequestLimit),this.Da=new Ed,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ka.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,I){lt(0),this.W=u,this.H=m||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=nu(this,null,this.W),or(this)};function Nt(u){if(ro(u),u.G==3){var m=u.U++,v=cn(u.I);if(We(v,"SID",u.K),We(v,"RID",m),We(v,"TYPE","terminate"),Dr(u,v),m=new jn(u,u.j,m),m.L=2,m.v=oi(cn(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.v,v=!0),v||(m.g=ru(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}tu(u)}function $n(u){u.g&&(Ra(u),u.g.cancel(),u.g=null)}function ro(u){$n(u),u.u&&(f.clearTimeout(u.u),u.u=null),oo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function or(u){if(!un(u.h)&&!u.s){u.s=!0;var m=u.Ga;je||ae(),ie||(je(),ie=!0),me.add(m,u),u.B=0}}function Id(u,m){return $l(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Vn(S(u.Ga,u,m),eu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new jn(this,this.j,u);let $=this.o;if(this.S&&($?($=A($),x($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=ci(this,M,m),v=cn(this.I),We(v,"RID",u),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Dr(this,v),$&&(this.O?m="headers="+encodeURIComponent(String(br($)))+"&"+m:this.m&&ui(v,this.m,$)),Ta(this.h,M),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",m),We(v,"SID","null"),M.T=!0,Ys(M,v,null)):Ys(M,v,m),this.G=2}}else this.G==3&&(u?io(this,u):this.i.length==0||un(this.h)||io(this))};function io(u,m){var v;m?v=m.l:v=u.U++;const I=cn(u.I);We(I,"SID",u.K),We(I,"RID",v),We(I,"AID",u.T),Dr(u,I),u.m&&u.o&&ui(I,u.m,u.o),v=new jn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ci(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ta(u.h,v),Ys(v,I,m)}function Dr(u,m){u.H&&Re(u.H,function(v,I){We(m,I,v)}),u.l&&ri({},function(v,I){We(m,I,v)})}function ci(u,m,v){v=Math.min(u.i.length,v);var I=u.l?S(u.l.Na,u.l,u):null;e:{var M=u.i;let $=-1;for(;;){const se=["count="+v];$==-1?0<v?($=M[0].g,se.push("ofs="+$)):$=0:se.push("ofs="+$);let ze=!0;for(let wt=0;wt<v;wt++){let Le=M[wt].g;const St=M[wt].map;if(Le-=$,0>Le)$=Math.max(0,M[wt].g-100),ze=!1;else try{Xl(St,se,"req"+Le+"_")}catch{I&&I(St)}}if(ze){I=se.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,I}function us(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;je||ae(),ie||(je(),ie=!0),me.add(m,u),u.v=0}}function so(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Vn(S(u.Fa,u),eu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Vn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),$n(this),Zl(this))};function Ra(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Zl(u){u.g=new jn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=cn(u.qa);We(m,"RID","rpc"),We(m,"SID",u.K),We(m,"AID",u.T),We(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&We(m,"TO",u.ja),We(m,"TYPE","xmlhttp"),Dr(u,m),u.m&&u.o&&ui(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=oi(cn(m)),v.m=null,v.P=!0,wa(v,u)}n.Za=function(){this.C!=null&&(this.C=null,$n(this),so(this),lt(19))};function oo(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function ao(u,m){var v=null;if(u.g==m){oo(u),Ra(u),u.g=null;var I=2}else if(Ht(u.h,m))v=m.D,Wl(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;I=Zi(),_t(I,new Hs(I,v)),or(u)}else us(u);else if(M=m.s,M==3||M==0&&0<m.X||!(I==1&&Id(u,m)||I==2&&so(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),M){case 1:Or(u,5);break;case 4:Or(u,10);break;case 3:Or(u,6);break;default:Or(u,2)}}}function eu(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Or(u,m){if(u.j.info("Error code "+m),m==2){var v=S(u.fb,u),I=u.Xa;const M=!I;I=new xr(I||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||os(I,"https"),oi(I),M?wd(I.toString(),v):Yl(I.toString(),v)}else lt(2);u.G=0,u.l&&u.l.sa(m),tu(u),ro(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function tu(u){if(u.G=0,u.ka=[],u.l){const m=ql(u.h);(m.length!=0||u.i.length!=0)&&(F(u.ka,m),F(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function nu(u,m,v){var I=v instanceof xr?cn(v):new xr(v);if(I.g!="")m&&(I.g=m+"."+I.g),ii(I,I.s);else{var M=f.location;I=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var $=new xr(null);I&&os($,I),m&&($.g=m),M&&ii($,M),v&&($.l=v),I=$}return v=u.D,m=u.ya,v&&m&&We(I,v,m),We(I,"VER",u.la),Dr(u,I),I}function ru(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new Nr({eb:v})):new Je(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pa(){}n=Pa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function lo(){}lo.prototype.g=function(u,m){return new Kt(u,m)};function Kt(u,m){vt.call(this),this.g=new ka(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ne(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ne(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ar(this)}B(Kt,vt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Nt(this.g)},Kt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=ha(u),u=v);m.i.push(new zl(m.Ya++,u)),m.G==3&&or(m)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Nt(this.g),delete this.g,Kt.aa.N.call(this)};function iu(u){tr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}B(iu,tr);function su(){qs.call(this),this.status=1}B(su,qs);function ar(u){this.g=u}B(ar,Pa),ar.prototype.ua=function(){_t(this.g,"a")},ar.prototype.ta=function(u){_t(this.g,new iu(u))},ar.prototype.sa=function(u){_t(this.g,new su)},ar.prototype.ra=function(){_t(this.g,"b")},lo.prototype.createWebChannel=lo.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,kw=function(){return new lo},Cw=function(){return Zi()},Aw=nr,Sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gs.NO_ERROR=0,Gs.TIMEOUT=8,Gs.HTTP_ERROR=6,cc=Gs,jl.COMPLETE="complete",Sw=jl,Ws.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,nl=Ws,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,Iw=Je}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});const Zy="@firebase/firestore",ev="4.8.0";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */let ea="11.10.0";/**
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
 */const xs=new Qf("@firebase/firestore");function No(){return xs.logLevel}function de(n,...e){if(xs.logLevel<=De.DEBUG){const t=e.map(ap);xs.debug(`Firestore (${ea}): ${n}`,...t)}}function Yr(n,...e){if(xs.logLevel<=De.ERROR){const t=e.map(ap);xs.error(`Firestore (${ea}): ${n}`,...t)}}function Mi(n,...e){if(xs.logLevel<=De.WARN){const t=e.map(ap);xs.warn(`Firestore (${ea}): ${n}`,...t)}}function ap(n){if(typeof n=="string")return n;try{/**
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
 */function Se(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Rw(n,i,t)}function Rw(n,e,t){let i=`FIRESTORE (${ea}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Yr(i),new Error(i)}function Be(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Rw(e,o,i)}function ke(n,e){return n}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Sr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Pw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class GC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class QC{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Kr,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Kr)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string",31837,{l:i}),new Pw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class YC{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XC{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new YC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const i=l=>{l.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new tv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new tv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ZC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function xw(){return new TextEncoder}/**
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
 */class lp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=ZC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function xe(n,e){return n<e?-1:n>e?1:0}function Af(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return xe(i,o);{const l=xw(),c=ek(l.encode(nv(n,t)),l.encode(nv(e,t)));return c!==0?c:xe(i,o)}}t+=i>65535?2:1}return xe(n.length,e.length)}function nv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ek(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return xe(n[t],e[t]);return xe(n.length,e.length)}function Bo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const rv="__name__";class hr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Se(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=hr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return xe(e.length,t.length)}static compareSegments(e,t){const i=hr.isNumericId(e),o=hr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?hr.extractNumericId(e).compare(hr.extractNumericId(t)):Af(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Oi.fromString(e.substring(4,e.length-2))}}class Ke extends hr{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(Q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const tk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends hr{construct(e,t,i){return new Vt(e,t,i)}static isValidIdentifier(e){return tk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rv}static keyField(){return new Vt([rv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ue(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new ue(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(t)}static emptyPath(){return new Vt([])}}/**
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
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(Ke.fromString(e))}static fromName(e){return new ve(Ke.fromString(e).popFirst(5))}static empty(){return new ve(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new Ke(e.slice()))}}/**
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
 */function Nw(n,e,t){if(!t)throw new ue(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function nk(n,e,t,i){if(e===!0&&i===!0)throw new ue(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function iv(n){if(!ve.isDocumentKey(n))throw new ue(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sv(n){if(ve.isDocumentKey(n))throw new ue(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Kc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se(12329,{type:typeof n})}function ln(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Kc(n);throw new ue(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function yt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Rl(n,e){if(!bw(n))throw new ue(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ue(Q.INVALID_ARGUMENT,t);return!0}/**
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
 */const ov=-62135596800,av=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*av);return new $e(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ov)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/av}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Rl(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ov;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:yt("string",$e._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
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
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new $e(0,0))}static max(){return new Ce(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const gl=-1;function rk(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(i===1e9?new $e(t+1,0):new $e(t,i));return new ji(o,ve.empty(),e)}function ik(n){return new ji(n.readTime,n.key,gl)}class ji{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ji(Ce.min(),ve.empty(),gl)}static max(){return new ji(Ce.max(),ve.empty(),gl)}}function sk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
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
 */const ok="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ak{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ta(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==ok)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):X.reject(t)}static resolve(e){return new X(((t,i)=>{t(e)}))}static reject(e){return new X(((t,i)=>{i(e)}))}static waitFor(e){return new X(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=X.resolve(!1);for(const i of e)t=t.next((o=>o?X.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new X(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((w=>{c[y]=w,++f,f===l&&i(c)}),(w=>o(w)))}}))}static doWhile(e,t){return new X(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function lk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function na(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Gc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Gc.ue=-1;/**
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
 */const up=-1;function Qc(n){return n==null}function kc(n){return n===0&&1/n==-1/0}function uk(n){return typeof n=="number"&&Number.isInteger(n)&&!kc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Dw="";function ck(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=lv(e)),e=dk(n.get(t),e);return lv(e)}function dk(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Dw:t+="";break;default:t+=l}}return t}function lv(n){return n+Dw+""}/**
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
 */function uv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ki(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ow(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Ot.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ot{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Ot.RED,this.left=o??Ot.EMPTY,this.right=l??Ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Ot(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ot.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cv(this.data.getIterator())}getIteratorFrom(e){return new cv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class cv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yn{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new yn([])}unionWith(e){let t=new It(Vt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Vw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Vw("Invalid base64 string: "+l):l}})(e);return new Lt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const hk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fi(n){if(Be(!!n,39018),typeof n=="string"){let e=0;const t=hk.exec(n);if(Be(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ui(n){return typeof n=="string"?Lt.fromBase64String(n):Lt.fromUint8Array(n)}/**
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
 */const Lw="server_timestamp",Mw="__type__",jw="__previous_value__",Fw="__local_write_time__";function cp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mw])===null||t===void 0?void 0:t.stringValue)===Lw}function Yc(n){const e=n.mapValue.fields[jw];return cp(e)?Yc(e):e}function yl(n){const e=Fi(n.mapValue.fields[Fw].timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class fk{constructor(e,t,i,o,l,c,f,p,y,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=w}}const Rc="(default)";class vl{constructor(e,t){this.projectId=e,this.database=t||Rc}static empty(){return new vl("","")}get isDefaultDatabase(){return this.database===Rc}isEqual(e){return e instanceof vl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Uw="__type__",pk="__max__",nc={mapValue:{}},Bw="__vector__",Pc="value";function Bi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?cp(n)?4:gk(n)?9007199254740991:mk(n)?10:11:Se(28295,{value:n})}function Tr(n,e){if(n===e)return!0;const t=Bi(n);if(t!==Bi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yl(n).isEqual(yl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Fi(o.timestampValue),f=Fi(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Ui(o.bytesValue).isEqual(Ui(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ct(o.doubleValue),f=ct(l.doubleValue);return c===f?kc(c)===kc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return Bo(n.arrayValue.values||[],e.arrayValue.values||[],Tr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(uv(c)!==uv(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!Tr(c[p],f[p])))return!1;return!0})(n,e);default:return Se(52216,{left:n})}}function _l(n,e){return(n.values||[]).find((t=>Tr(t,e)))!==void 0}function zo(n,e){if(n===e)return 0;const t=Bi(n),i=Bi(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=ct(l.integerValue||l.doubleValue),p=ct(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return dv(n.timestampValue,e.timestampValue);case 4:return dv(yl(n),yl(e));case 5:return Af(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=Ui(l),p=Ui(c);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let y=0;y<f.length&&y<p.length;y++){const w=xe(f[y],p[y]);if(w!==0)return w}return xe(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=xe(ct(l.latitude),ct(c.latitude));return f!==0?f:xe(ct(l.longitude),ct(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return hv(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var f,p,y,w;const T=l.fields||{},S=c.fields||{},N=(f=T[Pc])===null||f===void 0?void 0:f.arrayValue,B=(p=S[Pc])===null||p===void 0?void 0:p.arrayValue,q=xe(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((w=B==null?void 0:B.values)===null||w===void 0?void 0:w.length)||0);return q!==0?q:hv(N,B)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===nc.mapValue&&c===nc.mapValue)return 0;if(l===nc.mapValue)return 1;if(c===nc.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=c.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const S=Af(p[T],w[T]);if(S!==0)return S;const N=zo(f[p[T]],y[w[T]]);if(N!==0)return N}return xe(p.length,w.length)})(n.mapValue,e.mapValue);default:throw Se(23264,{le:t})}}function dv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=Fi(n),i=Fi(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function hv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=zo(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function $o(n){return Cf(n)}function Cf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Fi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ui(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ve.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Cf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Cf(t.fields[c])}`;return o+"}"})(n.mapValue):Se(61005,{value:n})}function dc(n){switch(Bi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yc(n);return e?16+dc(e):16;case 5:return 2*n.stringValue.length;case 6:return Ui(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+dc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Ki(i.fields,((l,c)=>{o+=l.length+dc(c)})),o})(n.mapValue);default:throw Se(13486,{value:n})}}function fv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function kf(n){return!!n&&"integerValue"in n}function dp(n){return!!n&&"arrayValue"in n}function pv(n){return!!n&&"nullValue"in n}function mv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hc(n){return!!n&&"mapValue"in n}function mk(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Uw])===null||t===void 0?void 0:t.stringValue)===Bw}function ll(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ki(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ll(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ll(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===pk}/**
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
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!hc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ll(t)}setAll(e){let t=Vt.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=ll(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());hc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];hc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ki(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new an(ll(this.value))}}function zw(n){const e=[];return Ki(n.fields,((t,i)=>{const o=new Vt([t]);if(hc(i)){const l=zw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new yn(e)}/**
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
 */class Wt{constructor(e,t,i,o,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new Wt(e,0,Ce.min(),Ce.min(),Ce.min(),an.empty(),0)}static newFoundDocument(e,t,i,o){return new Wt(e,1,t,Ce.min(),i,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Ce.min(),Ce.min(),an.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Ce.min(),Ce.min(),an.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xc{constructor(e,t){this.position=e,this.inclusive=t}}function gv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=ve.comparator(ve.fromName(c.referenceValue),t.key):i=zo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function yv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nc{constructor(e,t="asc"){this.field=e,this.dir=t}}function yk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $w{}class gt extends $w{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new _k(e,t,i):t==="array-contains"?new Tk(e,i):t==="in"?new Ik(e,i):t==="not-in"?new Sk(e,i):t==="array-contains-any"?new Ak(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new wk(e,i):new Ek(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zo(t,this.value)):t!==null&&Bi(this.value)===Bi(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends $w{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Zn(e,t)}matches(e){return Ww(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ww(n){return n.op==="and"}function qw(n){return vk(n)&&Ww(n)}function vk(n){for(const e of n.filters)if(e instanceof Zn)return!1;return!0}function Rf(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+$o(n.value);if(qw(n))return n.filters.map((e=>Rf(e))).join(",");{const e=n.filters.map((t=>Rf(t))).join(",");return`${n.op}(${e})`}}function Hw(n,e){return n instanceof gt?(function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&Tr(i.value,o.value)})(n,e):n instanceof Zn?(function(i,o){return o instanceof Zn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&Hw(c,o.filters[f])),!0):!1})(n,e):void Se(19439)}function Kw(n){return n instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${$o(t.value)}`})(n):n instanceof Zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Kw).join(" ,")+"}"})(n):"Filter"}class _k extends gt{constructor(e,t,i){super(e,t,i),this.key=ve.fromName(i.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class wk extends gt{constructor(e,t){super(e,"in",t),this.keys=Gw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ek extends gt{constructor(e,t){super(e,"not-in",t),this.keys=Gw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Gw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>ve.fromName(i.referenceValue)))}class Tk extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dp(t)&&_l(t.arrayValue,this.value)}}class Ik extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_l(this.value.arrayValue,t)}}class Sk extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_l(this.value.arrayValue,t)}}class Ak extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>_l(this.value.arrayValue,i)))}}/**
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
 */class Ck{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.Pe=null}}function vv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new Ck(n,e,t,i,o,l,c)}function hp(n){const e=ke(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Rf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Qc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>$o(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>$o(i))).join(",")),e.Pe=t}return e.Pe}function fp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yv(n.startAt,e.startAt)&&yv(n.endAt,e.endAt)}function Pf(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Pl{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function kk(n,e,t,i,o,l,c,f){return new Pl(n,e,t,i,o,l,c,f)}function Xc(n){return new Pl(n)}function _v(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qw(n){return n.collectionGroup!==null}function ul(n){const e=ke(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new It(Vt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Nc(l,i))})),t.has(Vt.keyField().canonicalString())||e.Te.push(new Nc(Vt.keyField(),i))}return e.Te}function yr(n){const e=ke(n);return e.Ie||(e.Ie=Rk(e,ul(n))),e.Ie}function Rk(n,e){if(n.limitType==="F")return vv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Nc(o.field,l)}));const t=n.endAt?new xc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new xc(n.startAt.position,n.startAt.inclusive):null;return vv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function xf(n,e){const t=n.filters.concat([e]);return new Pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Nf(n,e,t){return new Pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Jc(n,e){return fp(yr(n),yr(e))&&n.limitType===e.limitType}function Yw(n){return`${hp(yr(n))}|lt:${n.limitType}`}function bo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Kw(o))).join(", ")}]`),Qc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>$o(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>$o(o))).join(",")),`Target(${i})`})(yr(n))}; limitType=${n.limitType})`}function Zc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ve.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of ul(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,p){const y=gv(c,f,p);return c.inclusive?y<=0:y<0})(i.startAt,ul(i),o)||i.endAt&&!(function(c,f,p){const y=gv(c,f,p);return c.inclusive?y>=0:y>0})(i.endAt,ul(i),o))})(n,e)}function Pk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xw(n){return(e,t)=>{let i=!1;for(const o of ul(n)){const l=xk(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function xk(n,e,t){const i=n.field.isKeyField()?ve.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),y=f.data.field(l);return p!==null&&y!==null?zo(p,y):Se(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se(19790,{direction:n.dir})}}/**
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
 */class Ls{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Ow(this.inner)}size(){return this.innerSize}}/**
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
 */const Nk=new rt(ve.comparator);function Xr(){return Nk}const Jw=new rt(ve.comparator);function rl(...n){let e=Jw;for(const t of n)e=e.insert(t.key,t);return e}function Zw(n){let e=Jw;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ss(){return cl()}function eE(){return cl()}function cl(){return new Ls((n=>n.toString()),((n,e)=>n.isEqual(e)))}const bk=new rt(ve.comparator),Dk=new It(ve.comparator);function Oe(...n){let e=Dk;for(const t of n)e=e.add(t);return e}const Ok=new It(xe);function Vk(){return Ok}/**
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
 */function pp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(e)?"-0":e}}function tE(n){return{integerValue:""+n}}function Lk(n,e){return uk(e)?tE(e):pp(n,e)}/**
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
 */class ed{constructor(){this._=void 0}}function Mk(n,e,t){return n instanceof bc?(function(o,l){const c={fields:{[Mw]:{stringValue:Lw},[Fw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&cp(l)&&(l=Yc(l)),l&&(c.fields[jw]=l),{mapValue:c}})(t,e):n instanceof Wo?rE(n,e):n instanceof wl?iE(n,e):(function(o,l){const c=nE(o,l),f=wv(c)+wv(o.Ee);return kf(c)&&kf(o.Ee)?tE(f):pp(o.serializer,f)})(n,e)}function jk(n,e,t){return n instanceof Wo?rE(n,e):n instanceof wl?iE(n,e):t}function nE(n,e){return n instanceof Dc?(function(i){return kf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class bc extends ed{}class Wo extends ed{constructor(e){super(),this.elements=e}}function rE(n,e){const t=sE(e);for(const i of n.elements)t.some((o=>Tr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class wl extends ed{constructor(e){super(),this.elements=e}}function iE(n,e){let t=sE(e);for(const i of n.elements)t=t.filter((o=>!Tr(o,i)));return{arrayValue:{values:t}}}class Dc extends ed{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function wv(n){return ct(n.integerValue||n.doubleValue)}function sE(n){return dp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Fk{constructor(e,t){this.field=e,this.transform=t}}function Uk(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof Wo&&o instanceof Wo||i instanceof wl&&o instanceof wl?Bo(i.elements,o.elements,Tr):i instanceof Dc&&o instanceof Dc?Tr(i.Ee,o.Ee):i instanceof bc&&o instanceof bc})(n.transform,e.transform)}class Bk{constructor(e,t){this.version=e,this.transformResults=t}}class On{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class td{}function oE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new mp(n.key,On.none()):new xl(n.key,n.data,On.none());{const t=n.data,i=an.empty();let o=new It(Vt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Gi(n.key,i,new yn(o.toArray()),On.none())}}function zk(n,e,t){n instanceof xl?(function(o,l,c){const f=o.value.clone(),p=Tv(o.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Gi?(function(o,l,c){if(!fc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=Tv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(aE(o)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function dl(n,e,t,i){return n instanceof xl?(function(l,c,f,p){if(!fc(l.precondition,c))return f;const y=l.value.clone(),w=Iv(l.fieldTransforms,p,c);return y.setAll(w),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Gi?(function(l,c,f,p){if(!fc(l.precondition,c))return f;const y=Iv(l.fieldTransforms,p,c),w=c.data;return w.setAll(aE(l)),w.setAll(y),c.convertToFoundDocument(c.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,c,f){return fc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function $k(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=nE(i.transform,o||null);l!=null&&(t===null&&(t=an.empty()),t.set(i.field,l))}return t||null}function Ev(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Bo(i,o,((l,c)=>Uk(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xl extends td{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Gi extends td{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function aE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Tv(n,e,t){const i=new Map;Be(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,jk(c,f,t[o]))}return i}function Iv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,Mk(l,c,e))}return i}class mp extends td{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wk extends td{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&zk(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=eE();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const p=oE(c,f);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ce.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,((t,i)=>Ev(t,i)))&&Bo(this.baseMutations,e.baseMutations,((t,i)=>Ev(t,i)))}}class gp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return bk})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new gp(e,t,i,o)}}/**
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
 */class Hk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var mt,Me;function Gk(n){switch(n){case Q.OK:return Se(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return Se(15467,{code:n})}}function lE(n){if(n===void 0)return Yr("GRPC error has no .code"),Q.UNKNOWN;switch(n){case mt.OK:return Q.OK;case mt.CANCELLED:return Q.CANCELLED;case mt.UNKNOWN:return Q.UNKNOWN;case mt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case mt.INTERNAL:return Q.INTERNAL;case mt.UNAVAILABLE:return Q.UNAVAILABLE;case mt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case mt.NOT_FOUND:return Q.NOT_FOUND;case mt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case mt.ABORTED:return Q.ABORTED;case mt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case mt.DATA_LOSS:return Q.DATA_LOSS;default:return Se(39323,{code:n})}}(Me=mt||(mt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Qk=new Oi([4294967295,4294967295],0);function Sv(n){const e=xw().encode(n),t=new Tw;return t.update(e),new Uint8Array(t.digest())}function Av(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Oi([t,i],0),new Oi([o,l],0)]}class yp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new il(`Invalid padding: ${t}`);if(i<0)throw new il(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new il(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new il(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Oi.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Oi.fromNumber(i)));return o.compare(Qk)===1&&(o=new Oi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Sv(e),[i,o]=Av(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);if(!this.ye(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new yp(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.fe===0)return;const t=Sv(e),[i,o]=Av(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);this.we(c)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nd{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Nl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new nd(Ce.min(),o,new rt(xe),Xr(),Oe())}}class Nl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Nl(i,t,Oe(),Oe(),Oe())}}/**
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
 */class pc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class uE{constructor(e,t){this.targetId=e,this.De=t}}class cE{constructor(e,t,i=Lt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Cv{constructor(){this.ve=0,this.Ce=kv(),this.Fe=Lt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Oe(),t=Oe(),i=Oe();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Se(38017,{changeType:l})}})),new Nl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=kv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Yk{constructor(e){this.We=e,this.Ge=new Map,this.ze=Xr(),this.je=rc(),this.Je=rc(),this.He=new rt(xe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(Pf(l))if(i===0){const c=new ve(l.path);this.Xe(t,c,Wt.newNoDocument(c,Ce.min()))}else Be(i===1,20013,{expectedCount:i});else{const c=this.ot(t);if(c!==i){const f=this._t(e),p=f?this.ut(f,e,c):1;if(p!==0){this.rt(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=Ui(i).toUint8Array()}catch(p){if(p instanceof Vw)return Mi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new yp(c,o,l)}catch(p){return Mi(p instanceof il?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.We.lt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,c)=>{const f=this.st(c);if(f){if(l.current&&Pf(f.target)){const p=new ve(f.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,Wt.newNoDocument(p,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}}));let i=Oe();this.Je.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,c)=>c.setReadTime(e)));const o=new nd(e,t,this.He,this.ze,i);return this.ze=Xr(),this.je=rc(),this.Je=rc(),this.He=new rt(xe),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Cv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new It(xe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new It(xe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Cv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function rc(){return new rt(ve.comparator)}function kv(){return new rt(ve.comparator)}const Xk={asc:"ASCENDING",desc:"DESCENDING"},Jk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zk={and:"AND",or:"OR"};class eR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bf(n,e){return n.useProto3Json||Qc(e)?e:{value:e}}function Oc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tR(n,e){return Oc(n,e.toTimestamp())}function vr(n){return Be(!!n,49232),Ce.fromTimestamp((function(t){const i=Fi(t);return new $e(i.seconds,i.nanos)})(n))}function vp(n,e){return Df(n,e).canonicalString()}function Df(n,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function hE(n){const e=Ke.fromString(n);return Be(yE(e),10190,{key:e.toString()}),e}function Of(n,e){return vp(n.databaseId,e.path)}function rf(n,e){const t=hE(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(pE(t))}function fE(n,e){return vp(n.databaseId,e)}function nR(n){const e=hE(n);return e.length===4?Ke.emptyPath():pE(e)}function Vf(n){return new Ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pE(n){return Be(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Rv(n,e,t){return{name:Of(n,e),fields:t.value.mapValue.fields}}function rR(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Se(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(Be(w===void 0||typeof w=="string",58123),Lt.fromBase64String(w||"")):(Be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Lt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(y){const w=y.code===void 0?Q.UNKNOWN:lE(y.code);return new ue(w,y.message||"")})(c);t=new cE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=rf(n,i.document.name),l=vr(i.document.updateTime),c=i.document.createTime?vr(i.document.createTime):Ce.min(),f=new an({mapValue:{fields:i.document.fields}}),p=Wt.newFoundDocument(o,l,c,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new pc(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=rf(n,i.document),l=i.readTime?vr(i.readTime):Ce.min(),c=Wt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new pc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=rf(n,i.document),l=i.removedTargetIds||[];t=new pc([],l,o,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new Kk(o,l),f=i.targetId;t=new uE(f,c)}}return t}function iR(n,e){let t;if(e instanceof xl)t={update:Rv(n,e.key,e.value)};else if(e instanceof mp)t={delete:Of(n,e.key)};else if(e instanceof Gi)t={update:Rv(n,e.key,e.data),updateMask:fR(e.fieldMask)};else{if(!(e instanceof Wk))return Se(16599,{Rt:e.type});t={verify:Of(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof bc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Wo)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof wl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Dc)return{fieldPath:c.field.canonicalString(),increment:f.Ee};throw Se(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:tR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se(27497)})(n,e.precondition)),t}function sR(n,e){return n&&n.length>0?(Be(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?vr(o.updateTime):vr(l);return c.isEqual(Ce.min())&&(c=vr(l)),new Bk(c,o.transformResults||[])})(t,e)))):[]}function oR(n,e){return{documents:[fE(n,e.path)]}}function aR(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=fE(n,o);const l=(function(y){if(y.length!==0)return gE(Zn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((w=>(function(S){return{field:Do(S.field),direction:cR(S.dir)}})(w)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=bf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function lR(n){let e=nR(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const S=mE(T);return S instanceof Zn&&qw(S)?S.getFilters():[S]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((S=>(function(B){return new Nc(Oo(B.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(S)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let S;return S=typeof T=="object"?T.value:T,Qc(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(T){const S=!!T.before,N=T.values||[];return new xc(N,S)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const S=!T.before,N=T.values||[];return new xc(N,S)})(t.endAt)),kk(e,o,c,l,f,"F",p,y)}function uR(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Oo(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Oo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Oo(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Oo(t.unaryFilter.field);return gt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}})(n):n.fieldFilter!==void 0?(function(t){return gt.create(Oo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Zn.create(t.compositeFilter.filters.map((i=>mE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se(1026)}})(t.compositeFilter.op))})(n):Se(30097,{filter:n})}function cR(n){return Xk[n]}function dR(n){return Jk[n]}function hR(n){return Zk[n]}function Do(n){return{fieldPath:n.canonicalString()}}function Oo(n){return Vt.fromServerFormat(n.fieldPath)}function gE(n){return n instanceof gt?(function(t){if(t.op==="=="){if(mv(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NAN"}};if(pv(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mv(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NAN"}};if(pv(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(t.field),op:dR(t.op),value:t.value}}})(n):n instanceof Zn?(function(t){const i=t.getFilters().map((o=>gE(o)));return i.length===1?i[0]:{compositeFilter:{op:hR(t.op),filters:i}}})(n):Se(54877,{filter:n})}function fR(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ni{constructor(e,t,i,o,l=Ce.min(),c=Ce.min(),f=Lt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pR{constructor(e){this.gt=e}}function mR(n){const e=lR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
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
 */class gR{constructor(){this.Dn=new yR}addToCollectionParentIndex(e,t){return this.Dn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(ji.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(ji.min())}updateCollectionGroup(e,t,i){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class yR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new It(Ke.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new It(Ke.comparator)).toArray()}}/**
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
 */const Pv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vE=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(vE,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
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
 */class qo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new qo(0)}static ur(){return new qo(-1)}}/**
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
 */const xv="LruGarbageCollector",vR=1048576;function Nv([n,e],[t,i]){const o=xe(n,t);return o===0?xe(e,i):o}class _R{constructor(e){this.Tr=e,this.buffer=new It(Nv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Nv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){de(xv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){na(t)?de(xv,"Ignoring IndexedDB error during garbage collection: ",t):await ta(t)}await this.Rr(3e5)}))}}class ER{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return X.resolve(Gc.ue);const i=new _R(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(Pv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pv):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,c,f,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),No()<=De.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-w}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function TR(n,e){return new ER(n,e)}/**
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
 */class IR{constructor(){this.changes=new Ls((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?X.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class AR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&dl(i.mutation,o,yn.empty(),$e.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Oe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Oe()){const o=Ss();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=rl();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=Ss();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Oe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=Xr();const c=cl(),f=(function(){return cl()})();return t.forEach(((p,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Gi)?l=l.insert(y.key,y):w!==void 0?(c.set(y.key,w.mutation.getFieldMask()),dl(w.mutation,y,w.mutation.getFieldMask(),$e.now())):c.set(y.key,yn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,w)=>c.set(y,w))),t.forEach(((y,w)=>{var T;return f.set(y,new SR(w,(T=c.get(y))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=cl();let o=new rt(((c,f)=>c-f)),l=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let w=i.get(p)||yn.empty();w=f.applyToLocalView(y,w),i.set(p,w);const T=(o.get(f.batchId)||Oe()).add(p);o=o.insert(f.batchId,T)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,w=p.value,T=eE();w.forEach((S=>{if(!l.has(S)){const N=oE(t.get(S),i.get(S));N!==null&&T.set(S,N),l=l.add(S)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return X.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return ve.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):X.resolve(Ss());let f=gl,p=l;return c.next((y=>X.forEach(y,((w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?X.resolve():this.remoteDocumentCache.getEntry(e,w).next((S=>{p=p.insert(w,S)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,Oe()))).next((w=>({batchId:f,changes:Zw(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next((i=>{let o=rl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=rl();return this.indexManager.getCollectionParents(e,l).next((f=>X.forEach(f,(p=>{const y=(function(T,S){return new Pl(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((T,S)=>{c=c.insert(T,S)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,y)=>{const w=y.getKey();c.get(w)===null&&(c=c.insert(w,Wt.newInvalidDocument(w)))}));let f=rl();return c.forEach(((p,y)=>{const w=l.get(p);w!==void 0&&dl(w.mutation,y,yn.empty(),$e.now()),Zc(t,y)&&(f=f.insert(p,y))})),f}))}}/**
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
 */class CR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return X.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:vr(o.createTime)}})(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:mR(o.bundledQuery),readTime:vr(o.readTime)}})(t)),X.resolve()}}/**
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
 */class kR{constructor(){this.overlays=new rt(ve.comparator),this.kr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ss();return X.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),X.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),X.resolve()}getOverlaysForCollection(e,t,i){const o=Ss(),l=t.length+1,c=new ve(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return X.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new rt(((y,w)=>y-w));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=Ss(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=Ss(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,w)=>f.set(y,w))),!(f.size()>=o)););return X.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new Hk(t,i));let l=this.kr.get(t);l===void 0&&(l=Oe(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class RR{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
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
 */class _p{constructor(){this.qr=new It(Rt.Qr),this.$r=new It(Rt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Rt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new ve(new Ke([])),i=new Rt(t,e),o=new Rt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ve(new Ke([])),i=new Rt(t,e),o=new Rt(t,e+1);let l=Oe();return this.$r.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Rt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ve.comparator(e.key,t.key)||xe(e.Hr,t.Hr)}static Ur(e,t){return xe(e.Hr,t.Hr)||ve.comparator(e.key,t.key)}}/**
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
 */class PR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new It(Rt.Qr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new qk(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.Yr=this.Yr.add(new Rt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return X.resolve(c)}lookupMutationBatch(e,t){return X.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return X.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?up:this.er-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(c=>{const f=this.Zr(c.Hr);l.push(f)})),X.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new It(xe);return t.forEach((o=>{const l=new Rt(o,0),c=new Rt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],(f=>{i=i.add(f.Hr)}))})),X.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ve.isDocumentKey(l)||(l=l.child(""));const c=new Rt(new ve(l),0);let f=new It(xe);return this.Yr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.Hr)),!0)}),c),X.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return X.forEach(t.mutations,(o=>{const l=new Rt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Rt(t,0),o=this.Yr.firstAfterOrEqual(i);return X.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class xR{constructor(e){this.ni=e,this.docs=(function(){return new rt(ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return X.resolve(i?i.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let i=Xr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Wt.newInvalidDocument(o))})),X.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Xr();const c=t.path,f=new ve(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||sk(ik(w),i)<=0||(o.has(w.key)||Zc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return X.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Se(9500)}ri(e,t){return X.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new NR(this)}getSize(e){return X.resolve(this.size)}}class NR extends IR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),X.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class bR{constructor(e){this.persistence=e,this.ii=new Ls((t=>hp(t)),fp),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.si=0,this.oi=new _p,this.targetCount=0,this._i=qo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),X.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new qo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.hr(t),X.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),X.waitFor(l).next((()=>o))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return X.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),X.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),X.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return X.resolve(i)}containsKey(e,t){return X.resolve(this.oi.containsKey(t))}}/**
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
 */class _E{constructor(e,t){this.ai={},this.overlays={},this.ui=new Gc(0),this.ci=!1,this.ci=!0,this.li=new RR,this.referenceDelegate=e(this),this.hi=new bR(this),this.indexManager=new gR,this.remoteDocumentCache=(function(o){return new xR(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new pR(t),this.Ti=new CR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new PR(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){de("MemoryPersistence","Starting transaction:",e);const o=new DR(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return X.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class DR extends ak{constructor(e){super(),this.currentSequenceNumber=e}}class wp{constructor(e){this.persistence=e,this.Ai=new _p,this.Ri=null}static Vi(e){return new wp(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),X.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.mi,(i=>{const o=ve.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ce.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return X.or([()=>X.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Vc{constructor(e,t){this.persistence=e,this.gi=new Ls((i=>ck(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=TR(this,t)}static Vi(e,t){return new Vc(e,t)}Ii(){}di(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return X.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?X.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(c=>this.Sr(e,c,t).next((f=>{f||(i++,l.removeEntry(c,Ce.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),X.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=dc(e.data.value)),t}Sr(e,t,i){return X.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return X.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ep{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Oe(),o=Oe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Ep(e,t.fromCache,i,o)}}/**
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
 */class OR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return lS()?8:lk(qt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new OR;return this.ws(e,t,c).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,c,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(No()<=De.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",bo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(No()<=De.DEBUG&&de("QueryEngine","Query:",bo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(No()<=De.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",bo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(t))):X.resolve())}ps(e,t){if(_v(t))return X.resolve(null);let i=yr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Nf(t,null,"F"),i=yr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Oe(...l);return this.gs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.bs(t,f);return this.Ds(t,y,c,p.readTime)?this.ps(e,Nf(t,null,"F")):this.vs(e,y,t,p)}))))})))))}ys(e,t,i,o){return _v(t)||o.isEqual(Ce.min())?X.resolve(null):this.gs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ds(t,c,i,o)?X.resolve(null):(No()<=De.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),bo(t)),this.vs(e,c,t,rk(o,gl)).next((f=>f)))}))}bs(e,t){let i=new It(Xw(e));return t.forEach(((o,l)=>{Zc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return No()<=De.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",bo(t)),this.gs.getDocumentsMatchingQuery(e,t,ji.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const Tp="LocalStore",LR=3e8;class MR{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new rt(xe),this.Ms=new Ls((l=>hp(l)),fp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function jR(n,e,t,i){return new MR(n,e,t,i)}async function wE(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=Oe();for(const y of o){c.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Bs:y,removedBatchIds:c,addedBatchIds:f})))}))}))}function FR(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,p,y,w){const T=y.batch,S=T.keys();let N=X.resolve();return S.forEach((B=>{N=N.next((()=>w.getEntry(p,B))).next((q=>{const F=y.docVersions.get(B);Be(F!==null,48541),q.version.compareTo(F)<0&&(T.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),w.addEntry(q)))}))})),N.next((()=>f.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=Oe();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function EE(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function UR(n,e){const t=ke(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((w,T)=>{const S=o.get(T);if(!S)return;f.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let N=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(Lt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):w.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(w.resumeToken,i)),o=o.insert(T,N),(function(q,F,oe){return q.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=LR?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0})(S,N,w)&&f.push(t.hi.updateTargetData(l,N))}));let p=Xr(),y=Oe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(BR(l,c,e.documentUpdates).next((w=>{p=w.Ls,y=w.ks}))),!i.isEqual(Ce.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return X.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.Fs=o,l)))}function BR(n,e,t){let i=Oe(),o=Oe();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=Xr();return t.forEach(((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Ce.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):de(Tp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)})),{Ls:c,ks:o}}))}function zR(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=up),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function $R(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,X.resolve(o)):t.hi.allocateTargetId(i).next((c=>(o=new Ni(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Lf(n,e,t){const i=ke(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!na(c))throw c;de(Tp,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function bv(n,e,t){const i=ke(n);let o=Ce.min(),l=Oe();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,w){const T=ke(p),S=T.Ms.get(w);return S!==void 0?X.resolve(T.Fs.get(S)):T.hi.getTargetData(y,w)})(i,c,yr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Ce.min(),t?l:Oe()))).next((f=>(WR(i,Pk(e),f),{documents:f,qs:l})))))}function WR(n,e,t){let i=n.xs.get(e)||Ce.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class Dv{constructor(){this.activeTargetIds=Vk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qR{constructor(){this.Fo=new Dv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Dv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HR{xo(e){}shutdown(){}}/**
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
 */const Ov="ConnectivityMonitor";class Vv{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){de(Ov,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){de(Ov,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ic=null;function Mf(){return ic===null?ic=(function(){return 268435456+Math.round(2147483648*Math.random())})():ic++,"0x"+ic.toString(16)}/**
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
 */const sf="RestConnection",KR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class GR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Rc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=Mf(),f=this.Go(e,t.toUriEncodedString());de(sf,`Sending RPC '${e}' ${c}:`,f,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,l);const{host:y}=new URL(f),w=Xo(y);return this.jo(e,f,p,i,w).then((T=>(de(sf,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw Mi(sf,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",i),T}))}Jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ea})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=KR[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class QR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Bt="WebChannelConnection";class YR extends GR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const c=Mf();return new Promise(((f,p)=>{const y=new Iw;y.setWithCredentials(!0),y.listenOnce(Sw.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case cc.NO_ERROR:const T=y.getResponseJson();de(Bt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case cc.TIMEOUT:de(Bt,`RPC '${e}' ${c} timed out`),p(new ue(Q.DEADLINE_EXCEEDED,"Request time out"));break;case cc.HTTP_ERROR:const S=y.getStatus();if(de(Bt,`RPC '${e}' ${c} failed with status:`,S,"response text:",y.getResponseText()),S>0){let N=y.getResponseJson();Array.isArray(N)&&(N=N[0]);const B=N==null?void 0:N.error;if(B&&B.status&&B.message){const q=(function(oe){const ne=oe.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(ne)>=0?ne:Q.UNKNOWN})(B.status);p(new ue(q,B.message))}else p(new ue(Q.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ue(Q.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:c,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{de(Bt,`RPC '${e}' ${c} completed.`)}}));const w=JSON.stringify(o);de(Bt,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",w,i,15)}))}P_(e,t,i){const o=Mf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=kw(),f=Cw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const w=l.join("");de(Bt,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=c.createWebChannel(w,p);this.T_(T);let S=!1,N=!1;const B=new QR({Ho:F=>{N?de(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(S||(de(Bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),de(Bt,`RPC '${e}' stream ${o} sending:`,F),T.send(F))},Yo:()=>T.close()}),q=(F,oe,ne)=>{F.listen(oe,(Z=>{try{ne(Z)}catch(ye){setTimeout((()=>{throw ye}),0)}}))};return q(T,nl.EventType.OPEN,(()=>{N||(de(Bt,`RPC '${e}' stream ${o} transport opened.`),B.s_())})),q(T,nl.EventType.CLOSE,(()=>{N||(N=!0,de(Bt,`RPC '${e}' stream ${o} transport closed`),B.__(),this.I_(T))})),q(T,nl.EventType.ERROR,(F=>{N||(N=!0,Mi(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,F.name,"Message:",F.message),B.__(new ue(Q.UNAVAILABLE,"The operation could not be completed")))})),q(T,nl.EventType.MESSAGE,(F=>{var oe;if(!N){const ne=F.data[0];Be(!!ne,16349);const Z=ne,ye=(Z==null?void 0:Z.error)||((oe=Z[0])===null||oe===void 0?void 0:oe.error);if(ye){de(Bt,`RPC '${e}' stream ${o} received error:`,ye);const Pe=ye.status;let Re=(function(k){const x=mt[k];if(x!==void 0)return lE(x)})(Pe),b=ye.message;Re===void 0&&(Re=Q.INTERNAL,b="Unknown error status: "+Pe+" with message "+ye.message),N=!0,B.__(new ue(Re,b)),T.close()}else de(Bt,`RPC '${e}' stream ${o} received:`,ne),B.a_(ne)}})),q(f,Aw.STAT_EVENT,(F=>{F.stat===Sf.PROXY?de(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===Sf.NOPROXY&&de(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.o_()}),0),B}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function of(){return typeof document<"u"?document:null}/**
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
 */function rd(n){return new eR(n,!0)}/**
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
 */class TE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Lv="PersistentStream";class IE{constructor(e,t,i,o,l,c,f,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new TE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Yr(t.toString()),Yr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new ue(Q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return de(Lv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(de(Lv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XR extends IE{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=rR(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ce.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ce.min():c.readTime?vr(c.readTime):Ce.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Vf(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=Pf(p)?{documents:oR(l,p)}:{query:aR(l,p).Vt},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=dE(l,c.resumeToken);const y=bf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ce.min())>0){f.readTime=Oc(l,c.snapshotVersion.toTimestamp());const y=bf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=uR(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Vf(this.serializer),t.removeTarget=e,this.k_(t)}}class JR extends IE{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=sR(e.writeResults,e.commitTime),i=vr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Vf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>iR(this.serializer,i)))};this.k_(t)}}/**
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
 */class ZR{}class eP extends ZR{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,Df(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue(Q.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Jo(e,Df(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(Q.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class tP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Yr(t),this._a=!1):de("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ns="RemoteStore";class nP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((c=>{i.enqueueAndForget((async()=>{Ms(this)&&(de(Ns,"Restarting streams for network reachability change."),await(async function(p){const y=ke(p);y.Ia.add(4),await bl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await id(y)})(this))}))})),this.Aa=new tP(i,o)}}async function id(n){if(Ms(n))for(const e of n.da)await e(!0)}async function bl(n){for(const e of n.da)await e(!1)}function SE(n,e){const t=ke(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Cp(t)?Ap(t):ra(t).x_()&&Sp(t,e))}function Ip(n,e){const t=ke(n),i=ra(t);t.Ta.delete(e),i.x_()&&AE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ms(t)&&t.Aa.set("Unknown"))}function Sp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ra(n).H_(e)}function AE(n,e){n.Ra.$e(e),ra(n).Y_(e)}function Ap(n){n.Ra=new Yk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ra(n).start(),n.Aa.aa()}function Cp(n){return Ms(n)&&!ra(n).M_()&&n.Ta.size>0}function Ms(n){return ke(n).Ia.size===0}function CE(n){n.Ra=void 0}async function rP(n){n.Aa.set("Online")}async function iP(n){n.Ta.forEach(((e,t)=>{Sp(n,e)}))}async function sP(n,e){CE(n),Cp(n)?(n.Aa.la(e),Ap(n)):n.Aa.set("Unknown")}async function oP(n,e,t){if(n.Aa.set("Online"),e instanceof cE&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.Ta.delete(f),o.Ra.removeTarget(f))})(n,e)}catch(i){de(Ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Lc(n,i)}else if(e instanceof pc?n.Ra.Ye(e):e instanceof uE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ce.min()))try{const i=await EE(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.Ra.Pt(c);return f.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.Ta.get(y);w&&l.Ta.set(y,w.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,y)=>{const w=l.Ta.get(p);if(!w)return;l.Ta.set(p,w.withResumeToken(Lt.EMPTY_BYTE_STRING,w.snapshotVersion)),AE(l,p);const T=new Ni(w.target,p,y,w.sequenceNumber);Sp(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){de(Ns,"Failed to raise snapshot:",i),await Lc(n,i)}}async function Lc(n,e,t){if(!na(e))throw e;n.Ia.add(1),await bl(n),n.Aa.set("Offline"),t||(t=()=>EE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{de(Ns,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await id(n)}))}function kE(n,e){return e().catch((t=>Lc(n,t,e)))}async function sd(n){const e=ke(n),t=zi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:up;for(;aP(e);)try{const o=await zR(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,lP(e,o)}catch(o){await Lc(e,o)}RE(e)&&PE(e)}function aP(n){return Ms(n)&&n.Pa.length<10}function lP(n,e){n.Pa.push(e);const t=zi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function RE(n){return Ms(n)&&!zi(n).M_()&&n.Pa.length>0}function PE(n){zi(n).start()}async function uP(n){zi(n).na()}async function cP(n){const e=zi(n);for(const t of n.Pa)e.X_(t.mutations)}async function dP(n,e,t){const i=n.Pa.shift(),o=gp.from(i,e,t);await kE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await sd(n)}async function hP(n,e){e&&zi(n).Z_&&await(async function(i,o){if((function(c){return Gk(c)&&c!==Q.ABORTED})(o.code)){const l=i.Pa.shift();zi(i).N_(),await kE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await sd(i)}})(n,e),RE(n)&&PE(n)}async function Mv(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),de(Ns,"RemoteStore received new credentials");const i=Ms(t);t.Ia.add(3),await bl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await id(t)}async function fP(n,e){const t=ke(n);e?(t.Ia.delete(2),await id(t)):e||(t.Ia.add(2),await bl(t),t.Aa.set("Unknown"))}function ra(n){return n.Va||(n.Va=(function(t,i,o){const l=ke(t);return l.ia(),new XR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:rP.bind(null,n),e_:iP.bind(null,n),n_:sP.bind(null,n),J_:oP.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Cp(n)?Ap(n):n.Aa.set("Unknown")):(await n.Va.stop(),CE(n))}))),n.Va}function zi(n){return n.ma||(n.ma=(function(t,i,o){const l=ke(t);return l.ia(),new JR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:uP.bind(null,n),n_:hP.bind(null,n),ea:cP.bind(null,n),ta:dP.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await sd(n)):(await n.ma.stop(),n.Pa.length>0&&(de(Ns,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class kp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new kp(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rp(n,e){if(Yr("AsyncQueue",`${e}: ${n}`),na(n))return new ue(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Fo{static emptySet(e){return new Fo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ve.comparator(t.key,i.key):(t,i)=>ve.comparator(t.key,i.key),this.keyedMap=rl(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Fo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class jv{constructor(){this.fa=new rt(ve.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Se(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ho{constructor(e,t,i,o,l,c,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Ho(e,t,Fo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class pP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class mP{constructor(){this.queries=Fv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=ke(t),l=o.queries;o.queries=Fv(),l.forEach(((c,f)=>{for(const p of f.wa)p.onError(i)}))})(this,new ue(Q.ABORTED,"Firestore shutting down"))}}function Fv(){return new Ls((n=>Yw(n)),Jc)}async function Pp(n,e){const t=ke(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new pP,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=Rp(c,`Initialization of query '${bo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Np(t)}async function xp(n,e){const t=ke(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function gP(n,e){const t=ke(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.wa)f.Ca(o)&&(i=!0);c.ya=o}}i&&Np(t)}function yP(n,e,t){const i=ke(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Np(n){n.Da.forEach((e=>{e.next()}))}var jf,Uv;(Uv=jf||(jf={})).Fa="default",Uv.Cache="cache";class bp{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ho(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==jf.Cache}}/**
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
 */class xE{constructor(e){this.key=e}}class NE{constructor(e){this.key=e}}class vP{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Oe(),this.mutatedKeys=Oe(),this.Xa=Xw(e),this.eu=new Fo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new jv,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const S=o.get(w),N=Zc(this.query,T)?T:null,B=!!S&&this.mutatedKeys.has(S.key),q=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let F=!1;S&&N?S.data.isEqual(N.data)?B!==q&&(i.track({type:3,doc:N}),F=!0):this.iu(S,N)||(i.track({type:2,doc:N}),F=!0,(p&&this.Xa(N,p)>0||y&&this.Xa(N,y)<0)&&(f=!0)):!S&&N?(i.track({type:0,doc:N}),F=!0):S&&!N&&(i.track({type:1,doc:S}),F=!0,(p||y)&&(f=!0)),F&&(N?(c=c.add(N),l=q?l.add(w):l.delete(w)):(c=c.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const w=this.query.limitType==="F"?c.last():c.first();c=c.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{eu:c,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((w,T)=>(function(N,B){const q=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:F})}};return q(N)-q(B)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,c.length!==0||y?{snapshot:new Ho(this.query,e.eu,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new jv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Oe(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new NE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new xE(i))})),t}uu(e){this.Ha=e.qs,this.Za=Oe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ho.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Dp="SyncEngine";class _P{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class wP{constructor(e){this.key=e,this.lu=!1}}class EP{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Ls((f=>Yw(f)),Jc),this.Tu=new Map,this.Iu=new Set,this.du=new rt(ve.comparator),this.Eu=new Map,this.Au=new _p,this.Ru={},this.Vu=new Map,this.mu=qo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function TP(n,e,t=!0){const i=ME(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await bE(i,e,t,!0),o}async function IP(n,e){const t=ME(n);await bE(t,e,!0,!1)}async function bE(n,e,t,i){const o=await $R(n.localStore,yr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await SP(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&SE(n.remoteStore,o),f}async function SP(n,e,t,i,o){n.gu=(T,S,N)=>(async function(q,F,oe,ne){let Z=F.view.nu(oe);Z.Ds&&(Z=await bv(q.localStore,F.query,!1).then((({documents:b})=>F.view.nu(b,Z))));const ye=ne&&ne.targetChanges.get(F.targetId),Pe=ne&&ne.targetMismatches.get(F.targetId)!=null,Re=F.view.applyChanges(Z,q.isPrimaryClient,ye,Pe);return zv(q,F.targetId,Re._u),Re.snapshot})(n,T,S,N);const l=await bv(n.localStore,e,!0),c=new vP(e,l.qs),f=c.nu(l.documents),p=Nl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(f,n.isPrimaryClient,p);zv(n,t,y._u);const w=new _P(e,t,c);return n.Pu.set(e,w),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function AP(n,e,t){const i=ke(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((c=>!Jc(c,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Lf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Ip(i.remoteStore,o.targetId),Ff(i,o.targetId)})).catch(ta)):(Ff(i,o.targetId),await Lf(i.localStore,o.targetId,!0))}async function CP(n,e){const t=ke(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ip(t.remoteStore,i.targetId))}async function kP(n,e,t){const i=OP(n);try{const o=await(function(c,f){const p=ke(c),y=$e.now(),w=f.reduce(((N,B)=>N.add(B.key)),Oe());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(N=>{let B=Xr(),q=Oe();return p.Os.getEntries(N,w).next((F=>{B=F,B.forEach(((oe,ne)=>{ne.isValidDocument()||(q=q.add(oe))}))})).next((()=>p.localDocuments.getOverlayedDocuments(N,B))).next((F=>{T=F;const oe=[];for(const ne of f){const Z=$k(ne,T.get(ne.key).overlayedDocument);Z!=null&&oe.push(new Gi(ne.key,Z,zw(Z.value.mapValue),On.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,oe,f)})).next((F=>{S=F;const oe=F.applyToLocalDocumentSet(T,q);return p.documentOverlayCache.saveOverlays(N,F.batchId,oe)}))})).then((()=>({batchId:S.batchId,changes:Zw(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,p){let y=c.Ru[c.currentUser.toKey()];y||(y=new rt(xe)),y=y.insert(f,p),c.Ru[c.currentUser.toKey()]=y})(i,o.batchId,t),await Dl(i,o.changes),await sd(i.remoteStore)}catch(o){const l=Rp(o,"Failed to persist write");t.reject(l)}}async function DE(n,e){const t=ke(n);try{const i=await UR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Eu.get(l);c&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.lu=!0:o.modifiedDocuments.size>0?Be(c.lu,14607):o.removedDocuments.size>0&&(Be(c.lu,42227),c.lu=!1))})),await Dl(t,i,e)}catch(i){await ta(i)}}function Bv(n,e,t){const i=ke(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const p=ke(c);p.onlineState=f;let y=!1;p.queries.forEach(((w,T)=>{for(const S of T.wa)S.va(f)&&(y=!0)})),y&&Np(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function RP(n,e,t){const i=ke(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let c=new rt(ve.comparator);c=c.insert(l,Wt.newNoDocument(l,Ce.min()));const f=Oe().add(l),p=new nd(Ce.min(),new Map,new rt(xe),c,f);await DE(i,p),i.du=i.du.remove(l),i.Eu.delete(e),Op(i)}else await Lf(i.localStore,e,!1).then((()=>Ff(i,e,t))).catch(ta)}async function PP(n,e){const t=ke(n),i=e.batch.batchId;try{const o=await FR(t.localStore,e);VE(t,i,null),OE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Dl(t,o)}catch(o){await ta(o)}}async function xP(n,e,t){const i=ke(n);try{const o=await(function(c,f){const p=ke(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return p.mutationQueue.lookupMutationBatch(y,f).next((T=>(Be(T!==null,37113),w=T.keys(),p.mutationQueue.removeMutationBatch(y,T)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>p.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);VE(i,e,t),OE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Dl(i,o)}catch(o){await ta(o)}}function OE(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function VE(n,e,t){const i=ke(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Ff(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||LE(n,i)}))}function LE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ip(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Op(n))}function zv(n,e,t){for(const i of t)i instanceof xE?(n.Au.addReference(i.key,e),NP(n,i)):i instanceof NE?(de(Dp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||LE(n,i.key)):Se(19791,{yu:i})}function NP(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(de(Dp,"New document in limbo: "+t),n.Iu.add(i),Op(n))}function Op(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ve(Ke.fromString(e)),i=n.mu.next();n.Eu.set(i,new wP(t)),n.du=n.du.insert(t,i),SE(n.remoteStore,new Ni(yr(Xc(t.path)),i,"TargetPurposeLimboResolution",Gc.ue))}}async function Dl(n,e,t){const i=ke(n),o=[],l=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,p)=>{c.push(i.gu(p,e,t).then((y=>{var w;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Ep.Es(p.targetId,y);l.push(T)}})))})),await Promise.all(c),i.hu.J_(o),await(async function(p,y){const w=ke(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>X.forEach(y,(S=>X.forEach(S.Is,(N=>w.persistence.referenceDelegate.addReference(T,S.targetId,N))).next((()=>X.forEach(S.ds,(N=>w.persistence.referenceDelegate.removeReference(T,S.targetId,N)))))))))}catch(T){if(!na(T))throw T;de(Tp,"Failed to update sequence numbers: "+T)}for(const T of y){const S=T.targetId;if(!T.fromCache){const N=w.Fs.get(S),B=N.snapshotVersion,q=N.withLastLimboFreeSnapshotVersion(B);w.Fs=w.Fs.insert(S,q)}}})(i.localStore,l))}async function bP(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){de(Dp,"User change. New user:",e.toKey());const i=await wE(t.localStore,e);t.currentUser=e,(function(l,c){l.Vu.forEach((f=>{f.forEach((p=>{p.reject(new ue(Q.CANCELLED,c))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Dl(t,i.Bs)}}function DP(n,e){const t=ke(n),i=t.Eu.get(e);if(i&&i.lu)return Oe().add(i.key);{let o=Oe();const l=t.Tu.get(e);if(!l)return o;for(const c of l){const f=t.Pu.get(c);o=o.unionWith(f.view.tu)}return o}}function ME(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=DE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RP.bind(null,e),e.hu.J_=gP.bind(null,e.eventManager),e.hu.pu=yP.bind(null,e.eventManager),e}function OP(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xP.bind(null,e),e}class Mc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return jR(this.persistence,new VR,e.initialUser,this.serializer)}Du(e){return new _E(wp.Vi,this.serializer)}bu(e){return new qR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mc.provider={build:()=>new Mc};class VP extends Mc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Be(this.persistence.referenceDelegate instanceof Vc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new wR(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new _E((i=>Vc.Vi(i,t)),this.serializer)}}class Uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Bv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=bP.bind(null,this.syncEngine),await fP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new mP})()}createDatastore(e){const t=rd(e.databaseInfo.databaseId),i=(function(l){return new YR(l)})(e.databaseInfo);return(function(l,c,f,p){return new eP(l,c,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new nP(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Bv(this.syncEngine,t,0)),(function(){return Vv.C()?new Vv:new HR})())}createSyncEngine(e,t){return(function(o,l,c,f,p,y,w){const T=new EP(o,l,c,f,p,y);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=ke(o);de(Ns,"RemoteStore shutting down."),l.Ia.add(5),await bl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Uf.provider={build:()=>new Uf};/**
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
 */class Vp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Yr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const $i="FirestoreClient";class LP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=lp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{de($i,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(de($i,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Rp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function af(n,e){n.asyncQueue.verifyOperationInProgress(),de($i,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await wE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{Mi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{de("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Mi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function $v(n,e){n.asyncQueue.verifyOperationInProgress();const t=await MP(n);de($i,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Mv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>Mv(e.remoteStore,o))),n._onlineComponents=e}async function MP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de($i,"Using user provided OfflineComponentProvider");try{await af(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Mi("Error using user provided cache. Falling back to memory cache: "+t),await af(n,new Mc)}}else de($i,"Using default OfflineComponentProvider"),await af(n,new VP(void 0));return n._offlineComponents}async function jE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de($i,"Using user provided OnlineComponentProvider"),await $v(n,n._uninitializedComponentsProvider._online)):(de($i,"Using default OnlineComponentProvider"),await $v(n,new Uf))),n._onlineComponents}function jP(n){return jE(n).then((e=>e.syncEngine))}async function jc(n){const e=await jE(n),t=e.eventManager;return t.onListen=TP.bind(null,e.syncEngine),t.onUnlisten=AP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=IP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=CP.bind(null,e.syncEngine),t}function FP(n,e,t={}){const i=new Kr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,y){const w=new Vp({next:S=>{w.Ou(),c.enqueueAndForget((()=>xp(l,T)));const N=S.docs.has(f);!N&&S.fromCache?y.reject(new ue(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&S.fromCache&&p&&p.source==="server"?y.reject(new ue(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new bp(Xc(f.path),w,{includeMetadataChanges:!0,ka:!0});return Pp(l,T)})(await jc(n),n.asyncQueue,e,t,i))),i.promise}function UP(n,e,t={}){const i=new Kr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,y){const w=new Vp({next:S=>{w.Ou(),c.enqueueAndForget((()=>xp(l,T))),S.fromCache&&p.source==="server"?y.reject(new ue(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new bp(f,w,{includeMetadataChanges:!0,ka:!0});return Pp(l,T)})(await jc(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function FE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Wv=new Map;/**
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
 */const UE="firestore.googleapis.com",qv=!0;class Hv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=UE,this.ssl=qv}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:qv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vR)throw new ue(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class od{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new KC;switch(i.type){case"firstParty":return new XC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Wv.get(t);i&&(de("ComponentProvider","Removing Datastore"),Wv.delete(t),i.terminate())})(this),Promise.resolve()}}function BP(n,e,t,i={}){var o;n=ln(n,od);const l=Xo(e),c=n._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(N_(`https://${p}`),b_("Firestore",!0)),c.host!==UE&&c.host!==p&&Mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:i});if(!Li(y,f)&&(n._setSettings(y),i.mockUserToken)){let w,T;if(typeof i.mockUserToken=="string")w=i.mockUserToken,T=zt.MOCK_USER;else{w=ZI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new ue(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new zt(S)}n._authCredentials=new GC(new Pw(w,T))}}/**
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
 */class js{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class at{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Rl(t,at._jsonSchema))return new at(e,i||null,new ve(Ke.fromString(t.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:yt("string",at._jsonSchemaVersion),referencePath:yt("string")};class Vi extends js{constructor(e,t,i){super(e,t,Xc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new ve(e))}withConverter(e){return new Vi(this.firestore,e,this._path)}}function Ir(n,e,...t){if(n=et(n),Nw("collection","path",e),n instanceof od){const i=Ke.fromString(e,...t);return sv(i),new Vi(n,null,i)}{if(!(n instanceof at||n instanceof Vi))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return sv(i),new Vi(n.firestore,null,i)}}function $t(n,e,...t){if(n=et(n),arguments.length===1&&(e=lp.newId()),Nw("doc","path",e),n instanceof od){const i=Ke.fromString(e,...t);return iv(i),new at(n,null,new ve(i))}{if(!(n instanceof at||n instanceof Vi))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return iv(i),new at(n.firestore,n instanceof Vi?n.converter:null,new ve(i))}}/**
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
 */const Kv="AsyncQueue";class Gv{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new TE(this,"async_queue_retry"),this.oc=()=>{const i=of();i&&de(Kv,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=of();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=of();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Kr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!na(e))throw e;de(Kv,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Yr("INTERNAL UNHANDLED ERROR: ",Qv(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=kp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&Se(47125,{hc:Qv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Qv(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Yv(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Jr extends od{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Gv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gv(e),this._firestoreClient=void 0,await e}}}function zP(n,e){const t=typeof n=="object"?n:Xf(),i=typeof n=="string"?n:Rc,o=Jo(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=XI("firestore");l&&BP(o,...l)}return o}function ad(n){if(n._terminated)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$P(n),n._firestoreClient}function $P(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,p,y,w){return new fk(f,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,FE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new LP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(Lt.fromBase64String(e))}catch(t){throw new ue(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bn(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Rl(e,bn._jsonSchema))return bn.fromBase64String(e.bytes)}}bn._jsonSchemaVersion="firestore/bytes/1.0",bn._jsonSchema={type:yt("string",bn._jsonSchemaVersion),bytes:yt("string")};/**
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
 */class ld{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ud{constructor(e){this._methodName=e}}/**
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
 */class _r{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_r._jsonSchemaVersion}}static fromJSON(e){if(Rl(e,_r._jsonSchema))return new _r(e.latitude,e.longitude)}}_r._jsonSchemaVersion="firestore/geoPoint/1.0",_r._jsonSchema={type:yt("string",_r._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class wr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Rl(e,wr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new wr(e.vectorValues);throw new ue(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wr._jsonSchemaVersion="firestore/vectorValue/1.0",wr._jsonSchema={type:yt("string",wr._jsonSchemaVersion),vectorValues:yt("object")};/**
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
 */const WP=/^__.*__$/;class qP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Gi(e,this.data,this.fieldMask,t,this.fieldTransforms):new xl(e,this.data,t,this.fieldTransforms)}}class BE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Gi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:n})}}class cd{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new cd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Fc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(zE(this.Ec)&&WP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class HP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||rd(e)}Dc(e,t,i,o=!1){return new cd({Ec:e,methodName:t,bc:i,path:Vt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dd(n){const e=n._freezeSettings(),t=rd(n._databaseId);return new HP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $E(n,e,t,i,o,l={}){const c=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);Mp("Data must be an object, but it was:",c,i);const f=WE(i,c);let p,y;if(l.merge)p=new yn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const S=Bf(e,T,t);if(!c.contains(S))throw new ue(Q.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);HE(w,S)||w.push(S)}p=new yn(w),y=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,y=c.fieldTransforms;return new qP(new an(f),p,y)}class hd extends ud{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hd}}function KP(n,e,t){return new cd({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Lp extends ud{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=KP(this,e,!0),i=this.vc.map((l=>ia(l,t))),o=new Wo(i);return new Fk(e.path,o)}isEqual(e){return e instanceof Lp&&Li(this.vc,e.vc)}}function GP(n,e,t,i){const o=n.Dc(1,e,t);Mp("Data must be an object, but it was:",o,i);const l=[],c=an.empty();Ki(i,((p,y)=>{const w=jp(e,p,t);y=et(y);const T=o.gc(w);if(y instanceof hd)l.push(w);else{const S=ia(y,T);S!=null&&(l.push(w),c.set(w,S))}}));const f=new yn(l);return new BE(c,f,o.fieldTransforms)}function QP(n,e,t,i,o,l){const c=n.Dc(1,e,t),f=[Bf(e,i,t)],p=[o];if(l.length%2!=0)throw new ue(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)f.push(Bf(e,l[S])),p.push(l[S+1]);const y=[],w=an.empty();for(let S=f.length-1;S>=0;--S)if(!HE(y,f[S])){const N=f[S];let B=p[S];B=et(B);const q=c.gc(N);if(B instanceof hd)y.push(N);else{const F=ia(B,q);F!=null&&(y.push(N),w.set(N,F))}}const T=new yn(y);return new BE(w,T,c.fieldTransforms)}function YP(n,e,t,i=!1){return ia(t,n.Dc(i?4:3,e))}function ia(n,e){if(qE(n=et(n)))return Mp("Unsupported field value:",e,n),WE(n,e);if(n instanceof ud)return(function(i,o){if(!zE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let p=ia(f,o.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Lk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=$e.fromDate(i);return{timestampValue:Oc(o.serializer,l)}}if(i instanceof $e){const l=new $e(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Oc(o.serializer,l)}}if(i instanceof _r)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof bn)return{bytesValue:dE(o.serializer,i._byteString)};if(i instanceof at){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:vp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof wr)return(function(c,f){return{mapValue:{fields:{[Uw]:{stringValue:Bw},[Pc]:{arrayValue:{values:c.toArray().map((y=>{if(typeof y!="number")throw f.wc("VectorValues must only contain numeric values.");return pp(f.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Kc(i)}`)})(n,e)}function WE(n,e){const t={};return Ow(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(n,((i,o)=>{const l=ia(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function qE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $e||n instanceof _r||n instanceof bn||n instanceof at||n instanceof ud||n instanceof wr)}function Mp(n,e,t){if(!qE(t)||!bw(t)){const i=Kc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Bf(n,e,t){if((e=et(e))instanceof ld)return e._internalPath;if(typeof e=="string")return jp(n,e);throw Fc("Field path arguments must be of type string or ",n,!1,void 0,t)}const XP=new RegExp("[~\\*/\\[\\]]");function jp(n,e,t){if(e.search(XP)>=0)throw Fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ld(...e.split("."))._internalPath}catch{throw Fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ue(Q.INVALID_ARGUMENT,f+n+p)}function HE(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class KE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JP extends KE{data(){return super.data()}}function Fp(n,e){return typeof e=="string"?jp(n,e):e instanceof ld?e._internalPath:e._delegate._internalPath}/**
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
 */function GE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Up{}class ZP extends Up{}function Ol(n,e,...t){let i=[];e instanceof Up&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof Bp)).length,f=l.filter((p=>p instanceof fd)).length;if(c>1||c>0&&f>0)throw new ue(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class fd extends ZP{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new fd(e,t,i)}_apply(e){const t=this._parse(e);return QE(e._query,t),new js(e.firestore,e.converter,xf(e._query,t))}_parse(e){const t=dd(e.firestore);return(function(l,c,f,p,y,w,T){let S;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Jv(T,w);const B=[];for(const q of T)B.push(Xv(p,l,q));S={arrayValue:{values:B}}}else S=Xv(p,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Jv(T,w),S=YP(f,c,T,w==="in"||w==="not-in");return gt.create(y,w,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Vl(n,e,t){const i=e,o=Fp("where",n);return fd._create(o,i,t)}class Bp extends Up{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const f=l.getFlattenedFilters();for(const p of f)QE(c,p),c=xf(c,p)})(e._query,t),new js(e.firestore,e.converter,xf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Xv(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new ue(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qw(e)&&t.indexOf("/")!==-1)throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!ve.isDocumentKey(i))throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return fv(n,new ve(i))}if(t instanceof at)return fv(n,t._key);throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kc(t)}.`)}function Jv(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QE(n,e){const t=(function(o,l){for(const c of o)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ex{convertValue(e,t="none"){switch(Bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ki(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Pc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>ct(c.doubleValue)));return new wr(l)}convertGeoPoint(e){return new _r(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Yc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(yl(e));default:return null}}convertTimestamp(e){const t=Fi(e);return new $e(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);Be(yE(i),9688,{name:e});const o=new vl(i.get(1),i.get(3)),l=new ve(i.popFirst(5));return o.isEqual(t)||Yr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function YE(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class sl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cs extends KE{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Fp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cs._jsonSchema={type:yt("string",Cs._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class mc extends Cs{data(e={}){return super.data(e)}}class ks{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new sl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new mc(this._firestore,this._userDataWriter,i.key,i,new sl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const p=new mc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new sl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new mc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new sl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),w=c.indexOf(f.doc.key)),{type:tx(f.type),doc:p,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ks._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:n})}}/**
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
 */function XE(n){n=ln(n,at);const e=ln(n.firestore,Jr);return FP(ad(e),n._key).then((t=>ZE(e,n,t)))}ks._jsonSchemaVersion="firestore/querySnapshot/1.0",ks._jsonSchema={type:yt("string",ks._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class zp extends ex{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}function Wi(n){n=ln(n,js);const e=ln(n.firestore,Jr),t=ad(e),i=new zp(e);return GE(n._query),UP(t,n._query).then((o=>new ks(e,i,n,o)))}function nx(n,e,t){n=ln(n,at);const i=ln(n.firestore,Jr),o=YE(n.converter,e);return pd(i,[$E(dd(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,On.none())])}function fr(n,e,t,...i){n=ln(n,at);const o=ln(n.firestore,Jr),l=dd(o);let c;return c=typeof(e=et(e))=="string"||e instanceof ld?QP(l,"updateDoc",n._key,e,t,i):GP(l,"updateDoc",n._key,e),pd(o,[c.toMutation(n._key,On.exists(!0))])}function JE(n){return pd(ln(n.firestore,Jr),[new mp(n._key,On.none())])}function rx(n,e){const t=ln(n.firestore,Jr),i=$t(n),o=YE(n.converter,e);return pd(t,[$E(dd(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,On.exists(!1))]).then((()=>i))}function ix(n,...e){var t,i,o;n=et(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||Yv(e[c])||(l=e[c++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Yv(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,w;if(n instanceof at)y=ln(n.firestore,Jr),w=Xc(n._key.path),p={next:T=>{e[c]&&e[c](ZE(y,n,T))},error:e[c+1],complete:e[c+2]};else{const T=ln(n,js);y=ln(T.firestore,Jr),w=T._query;const S=new zp(y);p={next:N=>{e[c]&&e[c](new ks(y,S,T,N))},error:e[c+1],complete:e[c+2]},GE(n._query)}return(function(S,N,B,q){const F=new Vp(q),oe=new bp(N,F,B);return S.asyncQueue.enqueueAndForget((async()=>Pp(await jc(S),oe))),()=>{F.Ou(),S.asyncQueue.enqueueAndForget((async()=>xp(await jc(S),oe)))}})(ad(y),w,f,p)}function pd(n,e){return(function(i,o){const l=new Kr;return i.asyncQueue.enqueueAndForget((async()=>kP(await jP(i),o,l))),l.promise})(ad(n),e)}function ZE(n,e,t){const i=t.docs.get(e._key),o=new zp(n);return new Cs(n,o,e._key,i,new sl(t.hasPendingWrites,t.fromCache),e.converter)}function sx(...n){return new Lp("arrayUnion",n)}(function(e,t=!0){(function(o){ea=o})(Zo),Er(new Xn("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new Jr(new QC(i.getProvider("auth-internal")),new JC(c,i.getProvider("app-check-internal")),(function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vl(y.options.projectId,w)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Dn(Zy,ev,e),Dn(Zy,ev,"esm2017")})();const e0="@firebase/installations",$p="0.6.18";/**
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
 */const t0=1e4,n0=`w:${$p}`,r0="FIS_v2",ox="https://firebaseinstallations.googleapis.com/v1",ax=3600*1e3,lx="installations",ux="Installations";/**
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
 */const cx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bs=new Os(lx,ux,cx);function i0(n){return n instanceof Sr&&n.code.includes("request-failed")}/**
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
 */function s0({projectId:n}){return`${ox}/projects/${n}/installations`}function o0(n){return{token:n.token,requestStatus:2,expiresIn:hx(n.expiresIn),creationTime:Date.now()}}async function a0(n,e){const i=(await e.json()).error;return bs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function l0({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function dx(n,{refreshToken:e}){const t=l0(n);return t.append("Authorization",fx(e)),t}async function u0(n){const e=await n();return e.status>=500&&e.status<600?n():e}function hx(n){return Number(n.replace("s","000"))}function fx(n){return`${r0} ${n}`}/**
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
 */async function px({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=s0(n),o=l0(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:r0,appId:n.appId,sdkVersion:n0},f={method:"POST",headers:o,body:JSON.stringify(c)},p=await u0(()=>fetch(i,f));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:o0(y.authToken)}}else throw await a0("Create Installation",p)}/**
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
 */function c0(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function mx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gx=/^[cdef][\w-]{21}$/,zf="";function yx(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=vx(n);return gx.test(t)?t:zf}catch{return zf}}function vx(n){return mx(n).substr(0,22)}/**
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
 */function md(n){return`${n.appName}!${n.appId}`}/**
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
 */const d0=new Map;function h0(n,e){const t=md(n);f0(t,e),_x(t,e)}function f0(n,e){const t=d0.get(n);if(t)for(const i of t)i(e)}function _x(n,e){const t=wx();t&&t.postMessage({key:n,fid:e}),Ex()}let As=null;function wx(){return!As&&"BroadcastChannel"in self&&(As=new BroadcastChannel("[Firebase] FID Change"),As.onmessage=n=>{f0(n.data.key,n.data.fid)}),As}function Ex(){d0.size===0&&As&&(As.close(),As=null)}/**
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
 */const Tx="firebase-installations-database",Ix=1,Ds="firebase-installations-store";let lf=null;function Wp(){return lf||(lf=$c(Tx,Ix,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ds)}}})),lf}async function Uc(n,e){const t=md(n),o=(await Wp()).transaction(Ds,"readwrite"),l=o.objectStore(Ds),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&h0(n,e.fid),e}async function p0(n){const e=md(n),i=(await Wp()).transaction(Ds,"readwrite");await i.objectStore(Ds).delete(e),await i.done}async function gd(n,e){const t=md(n),o=(await Wp()).transaction(Ds,"readwrite"),l=o.objectStore(Ds),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!c||c.fid!==f.fid)&&h0(n,f.fid),f}/**
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
 */async function qp(n){let e;const t=await gd(n.appConfig,i=>{const o=Sx(i),l=Ax(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===zf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Sx(n){const e=n||{fid:yx(),registrationStatus:0};return m0(e)}function Ax(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(bs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Cx(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kx(n)}:{installationEntry:e}}async function Cx(n,e){try{const t=await px(n,e);return Uc(n.appConfig,t)}catch(t){throw i0(t)&&t.customData.serverCode===409?await p0(n.appConfig):await Uc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function kx(n){let e=await Zv(n.appConfig);for(;e.registrationStatus===1;)await c0(100),e=await Zv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await qp(n);return i||t}return e}function Zv(n){return gd(n,e=>{if(!e)throw bs.create("installation-not-found");return m0(e)})}function m0(n){return Rx(n)?{fid:n.fid,registrationStatus:0}:n}function Rx(n){return n.registrationStatus===1&&n.registrationTime+t0<Date.now()}/**
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
 */async function Px({appConfig:n,heartbeatServiceProvider:e},t){const i=xx(n,t),o=dx(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:n0,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(c)},p=await u0(()=>fetch(i,f));if(p.ok){const y=await p.json();return o0(y)}else throw await a0("Generate Auth Token",p)}function xx(n,{fid:e}){return`${s0(n)}/${e}/authTokens:generate`}/**
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
 */async function Hp(n,e=!1){let t;const i=await gd(n.appConfig,l=>{if(!g0(l))throw bs.create("not-registered");const c=l.authToken;if(!e&&Dx(c))return l;if(c.requestStatus===1)return t=Nx(n,e),l;{if(!navigator.onLine)throw bs.create("app-offline");const f=Vx(l);return t=bx(n,f),f}});return t?await t:i.authToken}async function Nx(n,e){let t=await e_(n.appConfig);for(;t.authToken.requestStatus===1;)await c0(100),t=await e_(n.appConfig);const i=t.authToken;return i.requestStatus===0?Hp(n,e):i}function e_(n){return gd(n,e=>{if(!g0(e))throw bs.create("not-registered");const t=e.authToken;return Lx(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bx(n,e){try{const t=await Px(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Uc(n.appConfig,i),t}catch(t){if(i0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await p0(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Uc(n.appConfig,i)}throw t}}function g0(n){return n!==void 0&&n.registrationStatus===2}function Dx(n){return n.requestStatus===2&&!Ox(n)}function Ox(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ax}function Vx(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Lx(n){return n.requestStatus===1&&n.requestTime+t0<Date.now()}/**
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
 */async function Mx(n){const e=n,{installationEntry:t,registrationPromise:i}=await qp(e);return i?i.catch(console.error):Hp(e).catch(console.error),t.fid}/**
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
 */async function jx(n,e=!1){const t=n;return await Fx(t),(await Hp(t,e)).token}async function Fx(n){const{registrationPromise:e}=await qp(n);e&&await e}/**
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
 */function Ux(n){if(!n||!n.options)throw uf("App Configuration");if(!n.name)throw uf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw uf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function uf(n){return bs.create("missing-app-config-values",{valueName:n})}/**
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
 */const y0="installations",Bx="installations-internal",zx=n=>{const e=n.getProvider("app").getImmediate(),t=Ux(e),i=Jo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},$x=n=>{const e=n.getProvider("app").getImmediate(),t=Jo(e,y0).getImmediate();return{getId:()=>Mx(t),getToken:o=>jx(t,o)}};function Wx(){Er(new Xn(y0,zx,"PUBLIC")),Er(new Xn(Bx,$x,"PRIVATE"))}Wx();Dn(e0,$p);Dn(e0,$p,"esm2017");/**
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
 */const qx="/firebase-messaging-sw.js",Hx="/firebase-cloud-messaging-push-scope",v0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Kx="https://fcmregistrations.googleapis.com/v1",_0="google.c.a.c_id",Gx="google.c.a.c_l",Qx="google.c.a.ts",Yx="google.c.a.e",t_=1e4;var n_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(n_||(n_={}));/**
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
 */var El;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(El||(El={}));/**
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
 */function $r(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Xx(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const cf="fcm_token_details_db",Jx=5,r_="fcm_token_object_Store";async function Zx(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(cf))return null;let e=null;return(await $c(cf,Jx,{upgrade:async(i,o,l,c)=>{var f;if(o<2||!i.objectStoreNames.contains(r_))return;const p=c.objectStore(r_),y=await p.index("fcmSenderId").get(n);if(await p.clear(),!!y){if(o===2){const w=y;if(!w.auth||!w.p256dh||!w.endpoint)return;e={token:w.fcmToken,createTime:(f=w.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:w.auth,p256dh:w.p256dh,endpoint:w.endpoint,swScope:w.swScope,vapidKey:typeof w.vapidKey=="string"?w.vapidKey:$r(w.vapidKey)}}}else if(o===3){const w=y;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:$r(w.auth),p256dh:$r(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:$r(w.vapidKey)}}}else if(o===4){const w=y;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:$r(w.auth),p256dh:$r(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:$r(w.vapidKey)}}}}}})).close(),await Jh(cf),await Jh("fcm_vapid_details_db"),await Jh("undefined"),eN(e)?e:null}function eN(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const tN="firebase-messaging-database",nN=1,Tl="firebase-messaging-store";let df=null;function w0(){return df||(df=$c(tN,nN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Tl)}}})),df}async function rN(n){const e=E0(n),i=await(await w0()).transaction(Tl).objectStore(Tl).get(e);if(i)return i;{const o=await Zx(n.appConfig.senderId);if(o)return await Kp(n,o),o}}async function Kp(n,e){const t=E0(n),o=(await w0()).transaction(Tl,"readwrite");return await o.objectStore(Tl).put(e,t),await o.done,e}function E0({appConfig:n}){return n.appId}/**
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
 */const iN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Yt=new Os("messaging","Messaging",iN);/**
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
 */async function sN(n,e){const t=await Qp(n),i=T0(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(Gp(n.appConfig),o)).json()}catch(c){throw Yt.create("token-subscribe-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw Yt.create("token-subscribe-failed",{errorInfo:c})}if(!l.token)throw Yt.create("token-subscribe-no-token");return l.token}async function oN(n,e){const t=await Qp(n),i=T0(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${Gp(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw Yt.create("token-update-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw Yt.create("token-update-failed",{errorInfo:c})}if(!l.token)throw Yt.create("token-update-no-token");return l.token}async function aN(n,e){const i={method:"DELETE",headers:await Qp(n)};try{const l=await(await fetch(`${Gp(n.appConfig)}/${e}`,i)).json();if(l.error){const c=l.error.message;throw Yt.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw Yt.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Gp({projectId:n}){return`${Kx}/projects/${n}/registrations`}async function Qp({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function T0({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==v0&&(o.web.applicationPubKey=i),o}/**
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
 */const lN=10080*60*1e3;async function uN(n){const e=await dN(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:$r(e.getKey("auth")),p256dh:$r(e.getKey("p256dh"))},i=await rN(n.firebaseDependencies);if(i){if(hN(i.subscriptionOptions,t))return Date.now()>=i.createTime+lN?cN(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await aN(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return i_(n.firebaseDependencies,t)}else return i_(n.firebaseDependencies,t)}async function cN(n,e){try{const t=await oN(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Kp(n.firebaseDependencies,i),t}catch(t){throw t}}async function i_(n,e){const i={token:await sN(n,e),createTime:Date.now(),subscriptionOptions:e};return await Kp(n,i),i.token}async function dN(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Xx(e)})}function hN(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
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
 */function s_(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return fN(e,n),pN(e,n),mN(e,n),e}function fN(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function pN(n,e){e.data&&(n.data=e.data)}function mN(n,e){var t,i,o,l,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const f=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;f&&(n.fcmOptions.link=f);const p=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
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
 */function gN(n){return typeof n=="object"&&!!n&&_0 in n}/**
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
 */function yN(n){if(!n||!n.options)throw hf("App Configuration Object");if(!n.name)throw hf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw hf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function hf(n){return Yt.create("missing-app-config-values",{valueName:n})}/**
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
 */class vN{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=yN(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function _N(n){try{n.swRegistration=await navigator.serviceWorker.register(qx,{scope:Hx}),n.swRegistration.update().catch(()=>{}),await wN(n.swRegistration)}catch(e){throw Yt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function wN(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${t_} ms`)),t_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var c;((c=l.target)===null||c===void 0?void 0:c.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
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
 */async function EN(n,e){if(!e&&!n.swRegistration&&await _N(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Yt.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function TN(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=v0)}/**
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
 */async function I0(n,e){if(!navigator)throw Yt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Yt.create("permission-blocked");return await TN(n,e==null?void 0:e.vapidKey),await EN(n,e==null?void 0:e.serviceWorkerRegistration),uN(n)}/**
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
 */async function IN(n,e,t){const i=SN(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[_0],message_name:t[Gx],message_time:t[Qx],message_device_time:Math.floor(Date.now()/1e3)})}function SN(n){switch(n){case El.NOTIFICATION_CLICKED:return"notification_open";case El.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function AN(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===El.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(s_(t)):n.onMessageHandler.next(s_(t)));const i=t.data;gN(i)&&i[Yx]==="1"&&await IN(n,t.messageType,i)}const o_="@firebase/messaging",a_="0.12.22";/**
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
 */const CN=n=>{const e=new vN(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>AN(e,t)),e},kN=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>I0(e,i)}};function RN(){Er(new Xn("messaging",CN,"PUBLIC")),Er(new Xn("messaging-internal",kN,"PRIVATE")),Dn(o_,a_),Dn(o_,a_,"esm2017")}/**
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
 */async function PN(){try{await O_()}catch{return!1}return typeof window<"u"&&D_()&&uS()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function xN(n=Xf()){return PN().then(e=>{if(!e)throw Yt.create("unsupported-browser")},e=>{throw Yt.create("indexed-db-unsupported")}),Jo(et(n),"messaging").getImmediate()}async function NN(n,e){return n=et(n),I0(n,e)}RN();const bN={apiKey:"AIzaSyAUNktXGZeeXlX3LKFolXZRVQZGDohlIF0",authDomain:"golfgang-79922.firebaseapp.com",projectId:"golfgang-79922",storageBucket:"golfgang-79922.appspot.com",messagingSenderId:"223762413770",appId:"1:223762413770:web:098607b8f30080df90dc33",measurementId:"G-T1FXETH3K0"},Yp=M_(bN),Ll=$C(Yp),Xe=zP(Yp);let DN=null;if(typeof window<"u")try{DN=xN(Yp)}catch(n){console.log("Messaging not supported:",n)}const S0=W.createContext(null);function ON({children:n}){const[e,t]=W.useState(null),[i,o]=W.useState(null),[l,c]=W.useState(!1),[f,p]=W.useState(!0);W.useEffect(()=>{const w=NA(Ll,async T=>{if(!T){t(null),o(null),c(!1),p(!1);return}t(T);try{const S=$t(Xe,"users",T.uid),N=await XE(S);if(N.exists()){const B=N.data();o(B),c((B==null?void 0:B.isAdmin)===!0)}else o({}),c(!1)}catch(S){console.error("Error loading user profile:",S),o({})}p(!1)});return()=>w()},[]);const y={user:e,profile:i,isAdmin:l,loading:f};return _.jsx(S0.Provider,{value:y,children:n})}function Qi(){return W.useContext(S0)}function VN(){var p;const{user:n,isAdmin:e}=Qi(),t=Yo(),i=Qo(),[o,l]=W.useState(!1),c=async()=>{await bA(Ll),t("/login")},f=()=>l(!1);return _.jsxs(_.Fragment,{children:[_.jsx("header",{className:"top-nav",children:_.jsxs("div",{className:"top-nav-inner",children:[_.jsxs(Nn,{to:"/",className:"top-nav-left",style:{textDecoration:"none"},children:[_.jsx("div",{className:"brand-mark"}),_.jsxs("div",{className:"brand-title",children:[_.jsx("span",{className:"brand-title-main",children:"GolfGang"}),_.jsx("span",{className:"brand-title-sub",children:"Tee Time Planner"})]})]}),_.jsxs("div",{className:"top-nav-right desktop-only",children:[n&&_.jsxs(_.Fragment,{children:[_.jsxs("nav",{className:"top-nav-links",children:[_.jsx(Nn,{to:"/",className:i.pathname==="/"?"active":void 0,children:"Calendar"}),e&&_.jsx(Nn,{to:"/admin",className:i.pathname.startsWith("/admin")?"active":void 0,children:"Admin"})]}),_.jsx("button",{onClick:()=>t("/profile"),className:"btn btn-ghost btn-sm",children:"Profile"}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:c,children:"Logout"})]}),!n&&_.jsx(Nn,{to:"/login",className:"btn btn-primary btn-sm",children:"Login"})]}),n&&_.jsxs("button",{className:"mobile-only",onClick:()=>l(!o),style:{background:"none",border:"none",padding:8,cursor:"pointer",display:"flex",flexDirection:"column",gap:4},"aria-label":"Menu",children:[_.jsx("span",{style:{display:"block",width:20,height:2,background:"var(--color-text)",borderRadius:1,transition:"all 0.2s ease",transform:o?"rotate(45deg) translateY(6px)":"none"}}),_.jsx("span",{style:{display:"block",width:20,height:2,background:"var(--color-text)",borderRadius:1,transition:"all 0.2s ease",opacity:o?0:1}}),_.jsx("span",{style:{display:"block",width:20,height:2,background:"var(--color-text)",borderRadius:1,transition:"all 0.2s ease",transform:o?"rotate(-45deg) translateY(-6px)":"none"}})]})]})}),o&&_.jsxs("div",{className:"mobile-only",style:{position:"fixed",top:"var(--nav-height)",left:0,right:0,bottom:0,background:"var(--color-surface)",zIndex:100,padding:16,display:"flex",flexDirection:"column",gap:4,overflowY:"auto",borderTop:"1px solid var(--color-border)"},children:[n&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{padding:"12px 0 16px",borderBottom:"1px solid var(--color-divider)",marginBottom:8},children:[_.jsx("div",{style:{fontWeight:600,fontSize:15,color:"var(--color-text)"},children:(p=n.email)==null?void 0:p.split("@")[0]}),_.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)",marginTop:2},children:[n.email,e&&" • Admin"]})]}),_.jsx(Nn,{to:"/",onClick:f,style:{display:"flex",alignItems:"center",gap:10,padding:"12px 8px",textDecoration:"none",color:i.pathname==="/"?"var(--color-primary)":"var(--color-text)",fontSize:15,fontWeight:500,borderRadius:"var(--radius-md)",background:i.pathname==="/"?"var(--color-primary-soft)":"transparent"},children:"📅 Calendar"}),_.jsx(Nn,{to:"/profile",onClick:f,style:{display:"flex",alignItems:"center",gap:10,padding:"12px 8px",textDecoration:"none",color:i.pathname==="/profile"?"var(--color-primary)":"var(--color-text)",fontSize:15,fontWeight:500,borderRadius:"var(--radius-md)",background:i.pathname==="/profile"?"var(--color-primary-soft)":"transparent"},children:"👤 Profile"}),e&&_.jsx(Nn,{to:"/admin",onClick:f,style:{display:"flex",alignItems:"center",gap:10,padding:"12px 8px",textDecoration:"none",color:i.pathname.startsWith("/admin")?"var(--color-primary)":"var(--color-text)",fontSize:15,fontWeight:500,borderRadius:"var(--radius-md)",background:i.pathname.startsWith("/admin")?"var(--color-primary-soft)":"transparent"},children:"⚙️ Admin"}),_.jsx("div",{style:{marginTop:"auto",paddingTop:16,borderTop:"1px solid var(--color-divider)"},children:_.jsx("button",{onClick:()=>{c(),f()},style:{display:"flex",alignItems:"center",gap:10,padding:"12px 8px",background:"none",border:"none",textAlign:"left",cursor:"pointer",color:"var(--color-danger)",fontSize:15,fontWeight:500,width:"100%",borderRadius:"var(--radius-md)"},children:"🚪 Logout"})})]}),!n&&_.jsx(Nn,{to:"/login",className:"btn btn-primary",onClick:f,style:{marginTop:20},children:"Login"})]})]})}function l_(){const n=Yo(),[e,t]=W.useState(""),[i,o]=W.useState(""),[l,c]=W.useState(""),[f,p]=W.useState(!1);async function y(w){w.preventDefault(),c(""),p(!0);try{let T=e.trim();if(!e.includes("@")){const S=Ol(Ir(Xe,"users"),Vl("username","==",e.trim().toLowerCase())),N=await Wi(S);if(N.empty)throw new Error("Username not found.");T=N.docs[0].data().email}await CA(Ll,T,i),n("/")}catch(T){console.error(T),c(T.message||"Failed to sign in.")}p(!1)}return _.jsx("div",{style:{minHeight:"calc(100vh - var(--nav-height))",display:"flex",justifyContent:"center",alignItems:"center",padding:24},children:_.jsxs("div",{className:"card",style:{width:"100%",maxWidth:400},children:[_.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[_.jsx("div",{style:{width:48,height:48,borderRadius:12,background:"linear-gradient(135deg, #0f7b6c 0%, #2383e2 100%)",margin:"0 auto 16px"}}),_.jsx("h1",{style:{marginBottom:4},children:"Welcome back"}),_.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)",fontSize:14},children:"Sign in to your GolfGang account"})]}),l&&_.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:l}),_.jsxs("form",{onSubmit:y,children:[_.jsxs("div",{style:{marginBottom:16},children:[_.jsx("label",{children:"Email or username"}),_.jsx("input",{className:"input",type:"text",value:e,onChange:w=>t(w.target.value),placeholder:"you@example.com",required:!0})]}),_.jsxs("div",{style:{marginBottom:20},children:[_.jsx("label",{children:"Password"}),_.jsx("input",{className:"input",type:"password",value:i,onChange:w=>o(w.target.value),placeholder:"Your password",required:!0})]}),_.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px 16px"},disabled:f,type:"submit",children:f?"Signing in…":"Sign in"})]}),_.jsxs("div",{style:{marginTop:20,textAlign:"center",fontSize:14},children:[_.jsx("a",{href:"/signup",style:{display:"block",marginBottom:8},children:"Create an account"}),_.jsx("a",{href:"/reset-password",style:{color:"var(--color-text-secondary)"},children:"Forgot password?"})]})]})})}function LN(n=1e4){return new Promise((e,t)=>{if(window.google&&window.google.maps&&window.google.maps.places){e();return}const i=Date.now(),o=setInterval(()=>{window.google&&window.google.maps&&window.google.maps.places?(clearInterval(o),e()):Date.now()-i>n&&(clearInterval(o),t(new Error("Google Maps failed to load within timeout")))},100)})}function A0({onSelect:n,initialValue:e=""}){const t=W.useRef(null),[i,o]=W.useState(e),[l,c]=W.useState(null);return W.useEffect(()=>{let f;return LN().then(()=>{t.current&&(f=new window.google.maps.places.Autocomplete(t.current,{types:["establishment"],fields:["name","formatted_address","place_id","photos"]}),f.addListener("place_changed",()=>{const p=f.getPlace();if(console.log("Place selected:",p),!p||!p.place_id)return;let y="";p.photos&&p.photos.length>0?(y=p.photos[0].getUrl({maxWidth:1e3,maxHeight:600}),console.log("Photo URL:",y)):console.log("No photos available for this place");const w={name:p.name||"",address:p.formatted_address||"",placeId:p.place_id,photoUrl:y};console.log("Payload being sent:",w),o(w.name),n==null||n(w)}),c(null))}).catch(p=>{console.error("Error loading Google Maps:",p),c("Google Maps failed to load. Please refresh the page.")}),()=>{}},[n]),_.jsxs(_.Fragment,{children:[_.jsx("input",{ref:t,className:"input",style:{width:"100%"},placeholder:"Search golf course",value:i,onChange:f=>o(f.target.value)}),l&&_.jsx("p",{style:{color:"var(--danger)",fontSize:12,marginTop:4},children:l})]})}function MN(){const{user:n,isAdmin:e}=Qi(),[t,i]=W.useState([]),[o,l]=W.useState(null),[c,f]=W.useState([]),[p,y]=W.useState(!1),[w,T]=W.useState(!1),[S,N]=W.useState(""),[B,q]=W.useState({name:"",address:"",placeId:"",photoUrl:""}),[F,oe]=W.useState(""),[ne,Z]=W.useState(""),[ye,Pe]=W.useState(""),[Re,b]=W.useState(!1);W.useEffect(()=>{const H=ix(Ir(Xe,"events"),G=>{const Y=G.docs.map(le=>({id:le.id,...le.data()}));i(Y)});return()=>H()},[]);const A=new Date,[k,x]=W.useState(A.getMonth()),[O,L]=W.useState(A.getFullYear()),R=new Date(O,k,1),Ge=R.getDay(),ht=new Date(O,k+1,0).getDate(),it=()=>{x(H=>H===0?11:H-1),k===0&&L(H=>H-1)},je=()=>{x(H=>H===11?0:H+1),k===11&&L(H=>H+1)},ie=H=>{const G=["th","st","nd","rd"],Y=H%100;return H+(G[(Y-20)%10]||G[Y]||G[0])},me=H=>{const G=new Date(O,k,H),Y=G.toISOString().split("T")[0],le=K[Y]||[];l(G),f(le),y(!0)},ae=()=>{if(!o)return;const H=o.toLocaleDateString("en-AU",{weekday:"long"}),G=o.getDate(),Y=o.toLocaleDateString("en-AU",{month:"long"});N(`⛳ ${H} ${ie(G)} ${Y}`),y(!1),T(!0)},V=async()=>{if(!S.trim()||!o)return;b(!0);let H=null;if(F){const[G,Y,le]=F.split("-"),Te=new Date(Number(G),Number(Y)-1,Number(le),23,59,59);H=$e.fromDate(Te)}await rx(Ir(Xe,"events"),{title:S.trim(),date:$e.fromDate(o),responses:{},courseName:B.name||"",courseAddress:B.address||"",coursePlaceId:B.placeId||"",coursePhotoUrl:B.photoUrl||"",tee:ne.trim(),notes:ye.trim(),rsvpDeadline:H,booked:!1,bookedAt:null}),N(""),q({name:"",address:"",placeId:"",photoUrl:""}),Z(""),Pe(""),oe(""),b(!1),T(!1)},K={};return t.forEach(H=>{var le;const G=(le=H.date)!=null&&le.toDate?H.date.toDate():null;if(!G)return;const Y=G.toISOString().split("T")[0];K[Y]||(K[Y]=[]),K[Y].push(H)}),_.jsxs("div",{className:"page",children:[_.jsxs("div",{className:"card",style:{marginBottom:20},children:[_.jsxs("div",{className:"card-header",children:[_.jsxs("div",{children:[_.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:2},children:R.toLocaleDateString("en-AU",{month:"long",year:"numeric"})}),_.jsx("p",{style:{fontSize:13,color:"var(--color-text-secondary)",margin:0},children:"Tap a day to view or create events"})]}),_.jsxs("div",{style:{display:"flex",gap:4},children:[_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:it,children:"←"}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:je,children:"→"})]})]}),_.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4,marginBottom:8},children:["S","M","T","W","T","F","S"].map((H,G)=>_.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:500,color:"var(--color-text-tertiary)",padding:"4px 0"},children:H},G))}),_.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},children:[Array.from({length:Ge}).map((H,G)=>_.jsx("div",{},`empty-${G}`)),Array.from({length:ht}).map((H,G)=>{const Y=G+1,Te=new Date(O,k,Y).toISOString().split("T")[0],_e=K[Te]||[],be=A.getDate()===Y&&A.getMonth()===k&&A.getFullYear()===O,st=_e.some(Pt=>Pt.booked),vn=_e.some(Pt=>!Pt.booked),er=_e.length>0;let _n={};return st?_n={background:"var(--color-success-soft)"}:vn&&(_n={background:"var(--color-warning-soft)"}),_.jsxs("div",{onClick:()=>me(Y),style:{aspectRatio:"1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:6,cursor:"pointer",transition:"all 0.15s ease",border:be?"2px solid var(--color-primary)":"1px solid transparent",..._n},onMouseOver:Pt=>{er||(Pt.currentTarget.style.background="var(--color-bg-hover)")},onMouseOut:Pt=>{er?st?Pt.currentTarget.style.background="var(--color-success-soft)":vn&&(Pt.currentTarget.style.background="var(--color-warning-soft)"):Pt.currentTarget.style.background=""},children:[_.jsx("div",{style:{fontSize:14,fontWeight:be?600:400,color:be?"var(--color-primary)":"var(--color-text)"},children:Y}),er&&_.jsx("div",{style:{width:6,height:6,borderRadius:"50%",marginTop:2,background:st?"var(--color-success)":"var(--color-warning)"}})]},Y)})]}),_.jsxs("div",{className:"calendar-legend",children:[_.jsxs("div",{className:"calendar-legend-item",children:[_.jsx("div",{className:"calendar-legend-dot calendar-legend-dot--proposed"}),_.jsx("span",{children:"Proposed"})]}),_.jsxs("div",{className:"calendar-legend-item",children:[_.jsx("div",{className:"calendar-legend-dot calendar-legend-dot--booked"}),_.jsx("span",{children:"Booked"})]})]})]}),_.jsxs("div",{className:"card",children:[_.jsx("div",{className:"card-header",children:_.jsxs("div",{className:"card-title-group",children:[_.jsx("h3",{className:"card-title",children:"Upcoming Events"}),_.jsx("p",{className:"card-subtitle",children:"Your next rounds"})]})}),_.jsx("div",{className:"card-body",children:t.length===0?_.jsxs("div",{className:"empty-state",children:[_.jsx("div",{className:"empty-state-icon",children:"🏌️"}),_.jsx("div",{className:"empty-state-title",children:"No events yet"}),_.jsx("p",{children:"Tap a day on the calendar to create one"})]}):[...t].sort((H,G)=>H.date.toMillis()-G.date.toMillis()).map(H=>{const G=H.date.toDate(),Y=n&&H.responses?H.responses[n.uid]:null,le=H.responses?Object.values(H.responses).filter(Te=>Te==="available").length:0;return _.jsxs(Nn,{to:`/event/${H.id}`,className:`event-list-item ${Y==="available"?"event-list-item--attending":""}`,style:{textDecoration:"none"},children:[_.jsxs("div",{style:{flex:1,minWidth:0},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[_.jsx("span",{style:{fontWeight:500,color:"var(--color-text)"},children:H.title}),_.jsx("span",{className:`status-badge ${H.booked?"status-badge--booked":"status-badge--proposed"}`,children:H.booked?"Booked":"Proposed"})]}),_.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:[G.toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"}),H.tee&&` • ${H.tee}`,H.courseName&&` • ${H.courseName}`]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:6,fontSize:12},children:[_.jsxs("span",{style:{color:"var(--color-text-tertiary)"},children:["👥 ",le,"/4"]}),Y==="available"&&_.jsx("span",{style:{color:"var(--color-success)",fontWeight:500},children:"✓ You're in"}),!Y&&!H.booked&&_.jsx("span",{style:{color:"var(--color-primary)",fontWeight:500},children:"Awaiting response"})]})]}),_.jsx("div",{style:{fontSize:18,color:"var(--color-text-tertiary)"},children:"→"})]},H.id)})})]}),p&&_.jsx("div",{className:"modal-backdrop",onClick:()=>y(!1),children:_.jsxs("div",{className:"modal",onClick:H=>H.stopPropagation(),children:[_.jsx("h2",{style:{marginTop:0,marginBottom:16},children:o==null?void 0:o.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"})}),c.length>0?_.jsx("div",{style:{marginBottom:20},children:c.map(H=>{const G=H.responses?Object.values(H.responses).filter(le=>le==="available").length:0,Y=n&&H.responses?H.responses[n.uid]:null;return _.jsxs(Nn,{to:`/event/${H.id}`,onClick:()=>y(!1),style:{display:"block",padding:14,background:"var(--color-bg-secondary)",borderRadius:8,marginBottom:8,textDecoration:"none",color:"inherit",borderLeft:Y==="available"?"3px solid var(--color-success)":"3px solid transparent"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[_.jsx("span",{style:{fontWeight:500},children:H.title}),_.jsx("span",{className:`status-badge ${H.booked?"status-badge--booked":"status-badge--proposed"}`,children:H.booked?"Booked":"Proposed"})]}),H.tee&&_.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:["🕐 ",H.tee]}),H.courseName&&_.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:["📍 ",H.courseName]}),_.jsxs("div",{style:{marginTop:8,fontSize:12,display:"flex",alignItems:"center",gap:8},children:[_.jsxs("span",{children:["👥 ",G,"/4"]}),Y==="available"&&_.jsx("span",{style:{color:"var(--color-success)"},children:"✓ You're in"})]})]},H.id)})}):_.jsxs("div",{style:{padding:24,textAlign:"center",color:"var(--color-text-secondary)",background:"var(--color-bg-secondary)",borderRadius:8,marginBottom:20},children:[_.jsx("div",{style:{fontSize:32,marginBottom:8},children:"🏌️"}),_.jsx("div",{children:"No events on this day"})]}),_.jsxs("div",{style:{display:"flex",gap:8},children:[e&&_.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:ae,children:"+ Create Event"}),_.jsx("button",{className:"btn btn-ghost",style:{flex:e?0:1},onClick:()=>y(!1),children:"Close"})]})]})}),w&&_.jsx("div",{className:"modal-backdrop",children:_.jsxs("div",{className:"modal",children:[_.jsx("h2",{style:{marginTop:0},children:"Create Event"}),_.jsx("p",{style:{color:"var(--color-text-secondary)",marginTop:-4,marginBottom:20,fontSize:14},children:o==null?void 0:o.toLocaleDateString("en-AU",{weekday:"long",month:"long",day:"numeric"})}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Event title"}),_.jsx("input",{className:"input",value:S,placeholder:"e.g. Sunday Stableford",onChange:H=>N(H.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Course"}),_.jsx(A0,{initialValue:B.name,onSelect:H=>q(H)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Tee time"}),_.jsx("input",{className:"input",value:ne,placeholder:"e.g. 7:15am",onChange:H=>Z(H.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Notes (optional)"}),_.jsx("textarea",{className:"input",placeholder:"Add any notes...",value:ye,onChange:H=>Pe(H.target.value),rows:3})]}),_.jsxs("div",{children:[_.jsx("label",{children:"RSVP Deadline"}),_.jsx("input",{className:"input",type:"date",value:F,onChange:H=>oe(H.target.value)})]})]}),_.jsxs("div",{style:{marginTop:24,display:"flex",gap:8},children:[_.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:V,disabled:Re,children:Re?"Creating…":"Create Event"}),_.jsx("button",{className:"btn btn-ghost",onClick:()=>T(!1),children:"Cancel"})]})]})})]})}function jN({placeId:n}){const e="AIzaSyB_ovdqnpAQxlMHgVkyL0q2Xy8r99pGphA";if(!n)return null;const t=`https://www.google.com/maps/embed/v1/place?key=${e}&q=place_id:${n}`;return _.jsx("div",{className:"surface",style:{padding:0,overflow:"hidden",marginBottom:"1.5rem",height:"220px"},children:_.jsx("iframe",{title:"Course location",src:t,style:{border:0,width:"100%",height:"100%"},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}function FN({placeId:n,style:e={},alt:t="Place photo"}){const[i,o]=W.useState(null),[l,c]=W.useState(!0);return W.useEffect(()=>{if(!n){o(null),c(!1);return}if(!window.google||!window.google.maps||!window.google.maps.places){console.warn("Google Maps not loaded"),o(null),c(!1);return}c(!0);const f=document.createElement("div");new window.google.maps.places.PlacesService(f).getDetails({placeId:n,fields:["photos"]},(y,w)=>{var T;if(w===window.google.maps.places.PlacesServiceStatus.OK&&((T=y==null?void 0:y.photos)==null?void 0:T.length)>0){const S=y.photos[0].getUrl({maxWidth:1e3,maxHeight:600});o(S)}else o(null);c(!1)})},[n]),l||!i?_.jsx("div",{style:{...e,background:"linear-gradient(135deg, var(--color-surface-soft) 0%, var(--color-surface) 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:l&&_.jsx("span",{style:{color:"var(--color-text-muted)",fontSize:12},children:"Loading..."})}):_.jsx("img",{src:i,alt:t,style:e,onError:f=>{f.target.style.display="none"}})}function u_(n,e){var S;if(!n)return"";const t=(S=n.date)!=null&&S.toDate?n.date.toDate():null,i=n.tee||"",o=n.courseName||"",l=n.notes||"";let c=t?new Date(t):new Date;if(i){const[N,B]=i.split(":").map(q=>parseInt(q,10));Number.isNaN(N)||c.setHours(N),Number.isNaN(B)||c.setMinutes(B)}const f=new Date(c.getTime()+4.5*60*60*1e3);function p(N){const B=N.getUTCFullYear(),q=String(N.getUTCMonth()+1).padStart(2,"0"),F=String(N.getUTCDate()).padStart(2,"0"),oe=String(N.getUTCHours()).padStart(2,"0"),ne=String(N.getUTCMinutes()).padStart(2,"0"),Z=String(N.getUTCSeconds()).padStart(2,"0");return`${B}${q}${F}T${oe}${ne}${Z}Z`}const y=`${p(c)}/${p(f)}`,w=`⛳ ${i||"Golf"} - ${o||"Golf Round"}`;return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:w,dates:y,details:l?`${l}

Event: ${e}`:`Event: ${e}`,location:o}).toString()}`}function UN(){var H;const{id:n}=gI(),e=Yo(),{user:t,isAdmin:i}=Qi(),[o,l]=W.useState(null),[c,f]=W.useState({}),[p,y]=W.useState(null),[w,T]=W.useState(!0),[S,N]=W.useState(!1),[B,q]=W.useState(!1),[F,oe]=W.useState(!1),[ne,Z]=W.useState({title:"",notes:"",courseName:"",courseAddress:"",coursePlaceId:"",coursePhotoUrl:"",tee:"",rsvpDeadline:""}),[ye,Pe]=W.useState([]),[Re,b]=W.useState(!0),A=4;W.useEffect(()=>{async function G(){try{const le=$t(Xe,"events",n),Te=await XE(le);if(!Te.exists()){e("/");return}const _e=Te.data();l({id:Te.id,..._e});const be=_e.responses||{};f(be),t&&y(be[t.uid]||null),Z({title:_e.title||"",notes:_e.notes||"",courseName:_e.courseName||"",courseAddress:_e.courseAddress||"",coursePlaceId:_e.coursePlaceId||"",coursePhotoUrl:_e.coursePhotoUrl||"",tee:_e.tee||"",rsvpDeadline:_e.rsvpDeadline?_e.rsvpDeadline.toDate().toISOString().slice(0,10):""})}catch(le){console.error("Error loading event",le)}finally{T(!1)}}async function Y(){try{const le=Ir(Xe,"users"),_e=(await Wi(le)).docs.map(be=>({id:be.id,...be.data()}));Pe(_e)}catch(le){console.error("Error loading users",le)}finally{b(!1)}}G(),Y()},[n,e,t]);async function k(G){if(!(!t||!o)){N(!0);try{const Y=$t(Xe,"events",o.id),le={...c,[t.uid]:G};await fr(Y,{responses:le}),f(le),y(G)}catch(Y){console.error("Error updating response",Y)}finally{N(!1)}}}const x=async G=>{if(!o||!G)return;const Y=$t(Xe,"events",o.id),le={...c};delete le[G],await fr(Y,{responses:le}),f(le),G===(t==null?void 0:t.uid)&&y(null)},O=async()=>{if(!o)return;const G=$t(Xe,"events",n);await fr(G,{booked:!0,bookedAt:new Date().toISOString()}),l(Y=>Y&&{...Y,booked:!0,bookedAt:new Date().toISOString()})},L=async()=>{if(!o)return;const G=$t(Xe,"events",n);await fr(G,{booked:!1,bookedAt:null}),l(Y=>Y&&{...Y,booked:!1,bookedAt:null})};async function R(){if(o)try{const G=$t(Xe,"events",o.id);let Y={title:ne.title||o.title,notes:ne.notes,courseName:ne.courseName,courseAddress:ne.courseAddress,coursePlaceId:ne.coursePlaceId,coursePhotoUrl:ne.coursePhotoUrl,tee:ne.tee,rsvpDeadline:ne.rsvpDeadline?$e.fromDate(new Date(ne.rsvpDeadline+"T23:59:59")):null};await fr(G,Y),l(le=>le&&{...le,...Y}),q(!1)}catch(G){console.error("Error saving edits",G),alert("Could not save changes.")}}async function Ge(){if(!(!o||!window.confirm("Delete this event?")))try{await JE($t(Xe,"events",o.id)),e("/")}catch(G){console.error("Error deleting event",G)}}async function ht(){var _e;if(!o)return;const G=(_e=o.date)!=null&&_e.toDate?o.date.toDate():null,Y=(G==null?void 0:G.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"}))||"",le=window.location.href;let Te=`⛳ *${o.title||"Golf round"}*
`;Y&&(Te+=`📅 ${Y}
`),o.tee&&(Te+=`🕒 ${o.tee}
`),o.courseName&&(Te+=`📍 ${o.courseName}
`),Te+=`
🔗 ${le}`;try{await navigator.clipboard.writeText(Te),alert("Copied to clipboard!")}catch{alert("Could not copy.")}}if(w||Re)return _.jsx("div",{className:"page",children:_.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto",textAlign:"center"},children:"Loading…"})});if(!o)return _.jsx("div",{className:"page",children:_.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto"},children:"Event not found."})});const it=(H=o.date)!=null&&H.toDate?o.date.toDate():null,je=Object.entries(c).filter(([G,Y])=>Y==="available").map(([G])=>G),ie=je.slice(0,A),me=je.slice(A),ae=t&&me.includes(t.uid),V=t&&ie.includes(t.uid),K=G=>{var le;const Y=ye.find(Te=>Te.id===G);return(Y==null?void 0:Y.username)||((le=Y==null?void 0:Y.email)==null?void 0:le.split("@")[0])||"Unknown"};return _.jsxs("div",{className:"page",style:{display:"flex",flexDirection:"column",gap:16},children:[_.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[_.jsxs("div",{style:{position:"relative",height:180,background:"var(--color-bg-tertiary)"},children:[_.jsx(FN,{placeId:o.coursePlaceId,alt:o.courseName||"Course",style:{width:"100%",height:"100%",objectFit:"cover"}}),_.jsx("div",{style:{position:"absolute",top:12,right:12,display:"flex",gap:8},children:_.jsxs("span",{className:`status-badge ${o.booked?"status-badge--booked":"status-badge--proposed"}`,children:[_.jsx("span",{className:"status-badge--dot"}),o.booked?"Booked":"Proposed"]})})]}),_.jsxs("div",{style:{padding:20},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12},children:[_.jsxs("div",{style:{flex:1},children:[B?_.jsx("input",{className:"input",value:ne.title,onChange:G=>Z(Y=>({...Y,title:G.target.value})),style:{fontSize:18,fontWeight:600,marginBottom:8}}):_.jsx("h1",{style:{fontSize:22,marginBottom:4},children:o.title}),_.jsxs("p",{style:{fontSize:14,color:"var(--color-text-secondary)",margin:0},children:[it==null?void 0:it.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"}),o.tee&&` • ${o.tee}`]})]}),i&&_.jsxs("div",{style:{position:"relative"},children:[B?_.jsxs("div",{style:{display:"flex",gap:6},children:[_.jsx("button",{className:"btn btn-primary btn-sm",onClick:R,children:"Save"}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>q(!1),children:"Cancel"})]}):_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>oe(!F),children:"•••"}),F&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{position:"fixed",inset:0,zIndex:10},onClick:()=>oe(!1)}),_.jsxs("div",{className:"dropdown-menu",children:[_.jsx("button",{className:"dropdown-item",onClick:()=>{q(!0),oe(!1)},children:"✏️ Edit"}),_.jsx("button",{className:"dropdown-item",onClick:()=>{ht(),oe(!1)},children:"📤 Share"}),o.booked&&_.jsx("button",{className:"dropdown-item",onClick:()=>{window.open(u_(o,window.location.href),"_blank"),oe(!1)},children:"📅 Add to Calendar"}),_.jsx("button",{className:"dropdown-item",onClick:()=>{o.booked?L():O(),oe(!1)},children:o.booked?"↩️ Unmark Booked":"✅ Mark Booked"}),_.jsx("div",{className:"dropdown-divider"}),_.jsx("button",{className:"dropdown-item dropdown-item--danger",onClick:()=>{Ge(),oe(!1)},children:"🗑️ Delete"})]})]})]})]}),_.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:B?_.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:12},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Course"}),_.jsx(A0,{initialValue:ne.courseName,onSelect:G=>Z(Y=>({...Y,courseName:G.name,courseAddress:G.address,coursePlaceId:G.placeId,coursePhotoUrl:G.photoUrl}))})]}),_.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Tee Time"}),_.jsx("input",{className:"input",type:"time",value:ne.tee,onChange:G=>Z(Y=>({...Y,tee:G.target.value}))})]}),_.jsxs("div",{children:[_.jsx("label",{children:"RSVP Deadline"}),_.jsx("input",{className:"input",type:"date",value:ne.rsvpDeadline,onChange:G=>Z(Y=>({...Y,rsvpDeadline:G.target.value}))})]})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Notes"}),_.jsx("textarea",{className:"input",rows:2,value:ne.notes,onChange:G=>Z(Y=>({...Y,notes:G.target.value}))})]})]}):_.jsxs(_.Fragment,{children:[o.courseName&&_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[_.jsx("span",{style:{fontSize:16},children:"📍"}),_.jsx("span",{children:o.courseName})]}),o.tee&&_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[_.jsx("span",{style:{fontSize:16},children:"🕐"}),_.jsx("span",{children:o.tee})]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[_.jsx("span",{style:{fontSize:16},children:"👥"}),_.jsxs("span",{children:[ie.length,"/",A]})]})]})}),!B&&o.notes&&_.jsx("p",{style:{marginTop:12,fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.5},children:o.notes})]})]}),!B&&_.jsx("div",{className:"card rsvp-card",children:o.booked?_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:20},children:"🔒"}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:500},children:"RSVPs closed"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:"This round is booked"})]}),V&&_.jsx("button",{className:"btn btn-primary btn-sm",style:{marginLeft:"auto"},onClick:()=>window.open(u_(o,window.location.href),"_blank"),children:"📅 Add to Calendar"})]}):_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{marginBottom:12,fontWeight:500},children:"Are you in?"}),ie.length>=A&&!p&&_.jsx("div",{style:{marginBottom:12,padding:"8px 12px",background:"var(--color-warning-soft)",borderRadius:6,fontSize:13,color:"var(--color-warning)"},children:"Group is full — you'll be added to the reserve list"}),_.jsxs("div",{className:"rsvp-buttons",children:[_.jsx("button",{className:`rsvp-btn rsvp-btn--available ${p==="available"?"active":""}`,onClick:()=>k(p==="available"?null:"available"),disabled:S,children:S&&p==="available"?"...":"✓ I'm in"}),_.jsx("button",{className:`rsvp-btn rsvp-btn--unavailable ${p==="unavailable"?"active":""}`,onClick:()=>k(p==="unavailable"?null:"unavailable"),disabled:S,children:S&&p==="unavailable"?"...":"✗ Can't make it"})]})]})}),p&&!B&&_.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:p==="available"?ae?"var(--color-warning-soft)":"var(--color-success-soft)":"var(--color-bg-secondary)",display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:18},children:p==="available"?ae?"🔔":"✓":"✗"}),_.jsxs("div",{style:{flex:1},children:[_.jsx("div",{style:{fontWeight:500,fontSize:14},children:p==="available"?ae?"You're on the reserve list":"You're in!":"You declined"}),ae&&_.jsxs("div",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:["Position ",me.indexOf(t.uid)+1," in queue"]})]})]}),_.jsxs("div",{className:"card",children:[_.jsxs("div",{className:"section-header",children:[_.jsx("span",{className:"section-title",children:"Players"}),_.jsxs("span",{className:"section-count",children:[ie.length,"/",A]})]}),ie.length===0?_.jsxs("div",{className:"empty-state",style:{padding:"24px 0"},children:[_.jsx("div",{style:{fontSize:32,marginBottom:8},children:"🏌️"}),_.jsx("div",{children:"No one has responded yet"})]}):_.jsx("div",{className:"player-list",children:ie.map(G=>{const Y=G===(t==null?void 0:t.uid);return _.jsxs("div",{className:"player-item",children:[_.jsxs("div",{className:"player-info",children:[_.jsx("div",{className:`player-avatar ${Y?"player-avatar--you":""}`,children:K(G).charAt(0).toUpperCase()}),_.jsxs("span",{className:"player-name",children:[K(G),Y&&_.jsx("span",{className:"player-badge",children:"You"})]})]}),i&&_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>x(G),children:"Remove"})]},G)})}),me.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"divider"}),_.jsxs("div",{className:"section-header",children:[_.jsx("span",{className:"section-title",children:"Reserve List"}),_.jsx("span",{className:"section-count",children:me.length})]}),_.jsx("div",{className:"player-list",children:me.map((G,Y)=>{const le=G===(t==null?void 0:t.uid);return _.jsxs("div",{className:"player-item",style:{opacity:.7},children:[_.jsxs("div",{className:"player-info",children:[_.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"var(--color-warning-soft)",color:"var(--color-warning)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:600},children:Y+1}),_.jsxs("span",{className:"player-name",children:[K(G),le&&_.jsx("span",{className:"player-badge",style:{background:"var(--color-warning)"},children:"You"})]})]}),i&&_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>x(G),children:"Remove"})]},G)})})]})]}),o.coursePlaceId&&_.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:_.jsx(jN,{placeId:o.coursePlaceId})})]})}function BN(){const[n,e]=W.useState([]),[t,i]=W.useState([]),[o,l]=W.useState(!0);W.useEffect(()=>{async function p(){const w=(await Wi(Ir(Xe,"events"))).docs.map(N=>({id:N.id,...N.data()})),S=(await Wi(Ir(Xe,"users"))).docs.map(N=>({id:N.id,...N.data()}));e(w),i(S),l(!1)}p()},[]);const c=async p=>{confirm("Delete this event?")&&(await JE($t(Xe,"events",p)),e(y=>y.filter(w=>w.id!==p)))},f=async(p,y)=>{const w=$t(Xe,"users",p);await fr(w,{isAdmin:!y}),i(T=>T.map(S=>S.id===p?{...S,isAdmin:!y}:S))};return o?_.jsx("div",{className:"page",children:_.jsx("div",{className:"card",style:{textAlign:"center",padding:40},children:"Loading…"})}):_.jsxs("div",{className:"page",children:[_.jsx("div",{className:"page-header",children:_.jsxs("div",{className:"page-header-title",children:[_.jsx("h1",{children:"Admin"}),_.jsx("p",{children:"Manage events and users"})]})}),_.jsxs("div",{className:"card",style:{marginBottom:20},children:[_.jsxs("div",{className:"section-header",children:[_.jsx("span",{className:"section-title",children:"Events"}),_.jsx("span",{className:"section-count",children:n.length})]}),n.length===0?_.jsx("p",{style:{color:"var(--color-text-secondary)",padding:"12px 0"},children:"No events yet"}):n.map((p,y)=>{var T,S;const w=(S=(T=p.date)==null?void 0:T.toDate)==null?void 0:S.call(T).toLocaleString("en-AU",{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return _.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:y<n.length-1?"1px solid var(--color-divider)":"none",gap:12},children:[_.jsxs("div",{style:{flex:1,minWidth:0},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:2},children:[_.jsx("span",{style:{fontWeight:500},children:p.title}),_.jsx("span",{className:`status-badge ${p.booked?"status-badge--booked":"status-badge--proposed"}`,children:p.booked?"Booked":"Proposed"})]}),_.jsx("span",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:w})]}),_.jsxs("div",{style:{display:"flex",gap:6,flexShrink:0},children:[_.jsx(Nn,{to:`/event/${p.id}`,className:"btn btn-ghost btn-sm",children:"Open"}),_.jsx("button",{className:"btn btn-ghost btn-sm",style:{color:"var(--color-danger)"},onClick:()=>c(p.id),children:"Delete"})]})]},p.id)})]}),_.jsxs("div",{className:"card",children:[_.jsxs("div",{className:"section-header",children:[_.jsx("span",{className:"section-title",children:"Users"}),_.jsx("span",{className:"section-count",children:t.length})]}),t.map((p,y)=>_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:y<t.length-1?"1px solid var(--color-divider)":"none",gap:12},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("div",{className:"avatar",children:(p.username||p.email||"?").charAt(0).toUpperCase()}),_.jsxs("div",{children:[_.jsx("span",{style:{fontWeight:500},children:p.username||p.email}),p.isAdmin&&_.jsx("span",{style:{marginLeft:8,fontSize:11,padding:"2px 6px",borderRadius:4,background:"var(--color-primary-soft)",color:"var(--color-primary)",fontWeight:500},children:"Admin"})]})]}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>f(p.id,p.isAdmin),children:p.isAdmin?"Remove Admin":"Make Admin"})]},p.id))]})]})}function zN(){return _.jsxs("div",{className:"card",style:{maxWidth:420,marginInline:"auto",marginTop:"3rem"},children:[_.jsx("h1",{children:"404"}),_.jsx("p",{className:"helper-text",style:{marginTop:"0.4rem"},children:"That page doesn't exist. Head back to the calendar."}),_.jsx(Nn,{to:"/",className:"btn btn-secondary",style:{marginTop:"1rem"},children:"Back to calendar"})]})}function sc({children:n}){const{user:e,loading:t}=Qi();return t?_.jsx("div",{className:"main-inner",children:_.jsx("div",{className:"card",children:"Checking who you are…"})}):e?n:_.jsx(yc,{to:"/login",replace:!0})}function $N({children:n}){const{user:e,isAdmin:t,loading:i}=Qi();return i?_.jsx("div",{className:"main-inner",children:_.jsx("div",{className:"card",children:"Checking permissions…"})}):e?t?n:_.jsx(yc,{to:"/",replace:!0}):_.jsx(yc,{to:"/login",replace:!0})}function WN(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),[c,f]=W.useState(!1);async function p(w){if(w.includes("@"))return w;const T=Ol(Ir(Xe,"users"),Vl("username","==",w.toLowerCase())),S=await Wi(T);if(S.empty)throw new Error("Username not found");return S.docs[0].data().email}async function y(w){w.preventDefault(),l(""),i(""),f(!0);try{const T=await p(n);await SA(Ll,T),i("Password reset link sent! Check your email.")}catch(T){l(T.message)}f(!1)}return _.jsx("div",{style:{maxWidth:420,margin:"4rem auto",padding:"1rem"},children:_.jsxs("div",{className:"surface",style:{padding:"2rem"},children:[_.jsx("h1",{style:{marginTop:0},children:"Reset password"}),_.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"1rem"},children:"Enter your email or username, and we’ll send you a reset link."}),_.jsxs("form",{onSubmit:y,children:[_.jsx("input",{className:"input",placeholder:"Email or username",value:n,onChange:w=>e(w.target.value),style:{marginBottom:"1rem"}}),t&&_.jsx("p",{style:{color:"var(--success)"},children:t}),o&&_.jsx("p",{style:{color:"var(--danger)"},children:o}),_.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:c?"Sending...":"Send reset link"})]})]})})}function qN(){const{user:n}=Qi(),[e,t]=W.useState(""),[i,o]=W.useState(""),[l,c]=W.useState("");if(!n)return _.jsx("p",{children:"Loading…"});async function f(y){const w=Ol(Ir(Xe,"users"),Vl("username","==",y.toLowerCase()));return!(await Wi(w)).empty}async function p(y){y.preventDefault(),o(""),c("");const w=e.toLowerCase().trim();if(!w.match(/^[a-z0-9_]+$/)){o("Username must be letters, numbers or underscores.");return}if(await f(w)){o("Username already taken.");return}await fr($t(Xe,"users",n.uid),{username:w}),c("Username updated!")}return _.jsx("div",{style:{maxWidth:420,margin:"4rem auto"},children:_.jsxs("div",{className:"surface",style:{padding:"2rem"},children:[_.jsx("h1",{children:"Change username"}),_.jsxs("form",{onSubmit:p,children:[_.jsx("input",{className:"input",placeholder:"New username",value:e,onChange:y=>t(y.target.value),style:{marginBottom:"1rem"}}),i&&_.jsx("p",{style:{color:"var(--danger)"},children:i}),l&&_.jsx("p",{style:{color:"var(--success)"},children:l}),_.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Update username"})]})]})})}const HN="BOjFZAtY_oM-ci1cnb3p5sT23gsjbwZo4kINDrd-QFSIMk4zDL89q12PHLyh-_16BWitVjsk9UsNKuUPBuXTrT0";let c_=null;const Xp=()=>"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window,d_=()=>Xp()?Notification.permission:"unsupported",KN=async n=>{if(!Xp())return console.log("Push notifications not supported"),{success:!1,error:"not_supported"};try{if(await Notification.requestPermission()!=="granted")return console.log("Notification permission denied"),{success:!1,error:"permission_denied"};const t="/golfgang/",i=`${t}firebase-messaging-sw.js`.replace("//","/");console.log("Registering service worker at:",i);const o=await navigator.serviceWorker.register(i,{scope:t});if(console.log("Service worker registered:",o),await navigator.serviceWorker.ready,console.log("Service worker ready"),!c_)return console.error("Messaging not initialized"),{success:!1,error:"messaging_not_initialized"};const l=await NN(c_,{vapidKey:HN,serviceWorkerRegistration:o});return l?(console.log("FCM Token obtained:",l.substring(0,20)+"..."),await GN(n,l),{success:!0,token:l}):(console.log("No registration token available"),{success:!1,error:"no_token"})}catch(e){return console.error("Error requesting notification permission:",e),{success:!1,error:e.message}}},GN=async(n,e)=>{try{const t=$t(Xe,"users",n);await fr(t,{fcmTokens:sx(e),notificationsEnabled:!0,lastTokenUpdate:new Date().toISOString()}),console.log("Token saved to user document")}catch(t){throw console.error("Error saving token:",t),t}},h_=async()=>{if(console.log("sendTestNotification called"),console.log("Notification.permission:",Notification.permission),Notification.permission!=="granted"){console.log("Notification permission not granted"),alert("Notification permission not granted. Please enable notifications first.");return}try{if(!("serviceWorker"in navigator)){console.error("Service Worker not supported"),alert("Service Worker not supported in this browser");return}console.log("Waiting for service worker to be ready...");const n=await navigator.serviceWorker.ready;if(console.log("Service worker ready:",n),!n){console.error("No service worker registration found"),alert("Service worker not ready. Please refresh and try again.");return}console.log("Sending notification via service worker..."),await n.showNotification("🏌️ GolfGang Test",{body:"Push notifications are working! 🎉",icon:"/logo192.png",badge:"/logo192.png",tag:"test-notification-"+Date.now(),vibrate:[200,100,200],requireInteraction:!1}),console.log("Test notification sent successfully")}catch(n){console.error("Failed to send test notification:",n),alert(`Failed to send notification: ${n.message}`)}};function QN(){const{user:n}=Qi(),[e,t]=W.useState("default"),[i,o]=W.useState(!1),[l,c]=W.useState(!0);W.useEffect(()=>{c(Xp()),t(d_())},[]);const f=async()=>{if(!n)return;o(!0);const p=await KN(n.uid);o(!1),p.success?(t("granted"),setTimeout(()=>{h_()},1e3)):t(d_())};return l?e==="granted"?_.jsx("div",{style:{padding:16,background:"var(--color-success-soft)",borderRadius:12,marginBottom:16},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:24},children:"🔔"}),_.jsxs("div",{style:{flex:1},children:[_.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-success)"},children:"Notifications Enabled"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"You'll receive updates about events and RSVPs."})]}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:h_,children:"Test"})]})}):e==="denied"?_.jsx("div",{style:{padding:16,background:"var(--color-danger-soft)",borderRadius:12,marginBottom:16},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:24},children:"🔕"}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-danger)"},children:"Notifications Blocked"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Enable notifications in your browser settings to receive updates."})]})]})}):_.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[_.jsx("span",{style:{fontSize:24},children:"🔔"}),_.jsxs("div",{style:{flex:1,minWidth:200},children:[_.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Enable Push Notifications"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Get notified when events are booked or when you're invited."})]}),_.jsx("button",{className:"btn btn-primary",onClick:f,disabled:i,children:i?"Enabling...":"Enable"})]})}):_.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:24},children:"📵"}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Notifications Not Supported"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Your browser doesn't support push notifications."})]})]})})}function YN(){const{user:n,profile:e}=Qi(),[t,i]=W.useState((n==null?void 0:n.email)||""),[o,l]=W.useState((e==null?void 0:e.username)||""),[c,f]=W.useState(""),[p,y]=W.useState(""),[w,T]=W.useState(""),[S,N]=W.useState("");if(!n||!e)return _.jsx("div",{className:"page",children:_.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto",textAlign:"center"},children:"Loading…"})});async function B(Z){const ye=Ol(Ir(Xe,"users"),Vl("username","==",Z)),Pe=await Wi(ye);return!Pe.empty&&Pe.docs[0].id!==n.uid}async function q(){const Z=Vs.credential(n.email,c);await IA(n,Z)}async function F(){T(""),N("");const Z=o.toLowerCase().trim();if(!Z.match(/^[a-z0-9_]+$/)){N("Username can only contain letters, numbers, and underscores.");return}if(await B(Z)){N("That username is already taken.");return}await fr($t(Xe,"users",n.uid),{username:Z}),T("Username updated.")}async function oe(){T(""),N("");try{await q(),await kA(n,t),await fr($t(Xe,"users",n.uid),{email:t}),T("Email updated.")}catch(Z){N(Z.message)}}async function ne(){T(""),N("");try{await q(),await RA(n,p),T("Password updated."),y(""),f("")}catch(Z){N(Z.message)}}return _.jsx("div",{className:"page",children:_.jsxs("div",{style:{maxWidth:480,margin:"0 auto"},children:[_.jsx("div",{className:"page-header",children:_.jsxs("div",{className:"page-header-title",children:[_.jsx("h1",{children:"Profile"}),_.jsx("p",{children:"Manage your account settings"})]})}),_.jsx(QN,{}),w&&_.jsx("div",{className:"toast toast-success",style:{marginBottom:16},children:w}),S&&_.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:S}),_.jsxs("div",{className:"card",style:{marginBottom:16},children:[_.jsx("div",{className:"section-header",style:{marginBottom:12},children:_.jsx("span",{className:"section-title",children:"Username"})}),_.jsxs("div",{style:{marginBottom:12},children:[_.jsx("input",{className:"input",value:o,onChange:Z=>l(Z.target.value),placeholder:"Your username"}),_.jsx("p",{className:"helper-text",style:{marginTop:4},children:"Letters, numbers, and underscores only"})]}),_.jsx("button",{className:"btn btn-primary btn-sm",onClick:F,children:"Update username"})]}),_.jsxs("div",{className:"card",style:{marginBottom:16},children:[_.jsx("div",{className:"section-header",style:{marginBottom:12},children:_.jsx("span",{className:"section-title",children:"Email"})}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Email address"}),_.jsx("input",{className:"input",type:"email",value:t,onChange:Z=>i(Z.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Current password (to confirm)"}),_.jsx("input",{className:"input",type:"password",value:c,onChange:Z=>f(Z.target.value),placeholder:"Enter current password"})]})]}),_.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:12},onClick:oe,children:"Update email"})]}),_.jsxs("div",{className:"card",children:[_.jsx("div",{className:"section-header",style:{marginBottom:12},children:_.jsx("span",{className:"section-title",children:"Change password"})}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Current password"}),_.jsx("input",{className:"input",type:"password",value:c,onChange:Z=>f(Z.target.value),placeholder:"Enter current password"})]}),_.jsxs("div",{children:[_.jsx("label",{children:"New password"}),_.jsx("input",{className:"input",type:"password",value:p,onChange:Z=>y(Z.target.value),placeholder:"Enter new password"})]})]}),_.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:12},onClick:ne,children:"Update password"})]})]})})}function XN(){const n=Yo(),[e,t]=W.useState(""),[i,o]=W.useState(""),[l,c]=W.useState(""),[f,p]=W.useState(""),[y,w]=W.useState(!1);async function T(N){const B=N.toLowerCase(),q=Ol(Ir(Xe,"users"),Vl("username","==",B));return!(await Wi(q)).empty}async function S(N){N.preventDefault(),p("");const B=i.trim().toLowerCase();if(!B.match(/^[a-z0-9_]+$/)){p("Username can only contain letters, numbers, and underscores.");return}w(!0);try{if(await T(B)){p("That username is already taken."),w(!1);return}const q=await AA(Ll,e,l);await nx($t(Xe,"users",q.user.uid),{email:e,username:B,isAdmin:!1}),n("/")}catch(q){p(q.message||"Signup failed")}w(!1)}return _.jsx("div",{style:{minHeight:"calc(100vh - var(--nav-height))",display:"flex",justifyContent:"center",alignItems:"center",padding:24},children:_.jsxs("div",{className:"card",style:{width:"100%",maxWidth:400},children:[_.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[_.jsx("div",{style:{width:48,height:48,borderRadius:12,background:"linear-gradient(135deg, #0f7b6c 0%, #2383e2 100%)",margin:"0 auto 16px"}}),_.jsx("h1",{style:{marginBottom:4},children:"Create account"}),_.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)",fontSize:14},children:"Join GolfGang to plan rounds with friends"})]}),f&&_.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:f}),_.jsxs("form",{onSubmit:S,children:[_.jsxs("div",{style:{marginBottom:16},children:[_.jsx("label",{children:"Email"}),_.jsx("input",{className:"input",type:"email",value:e,onChange:N=>t(N.target.value),placeholder:"you@example.com",required:!0})]}),_.jsxs("div",{style:{marginBottom:16},children:[_.jsx("label",{children:"Username"}),_.jsx("input",{className:"input",value:i,onChange:N=>o(N.target.value),placeholder:"Choose a username",required:!0}),_.jsx("p",{className:"helper-text",style:{marginTop:4},children:"Letters, numbers, and underscores only"})]}),_.jsxs("div",{style:{marginBottom:20},children:[_.jsx("label",{children:"Password"}),_.jsx("input",{className:"input",type:"password",placeholder:"Create a password",value:l,onChange:N=>c(N.target.value),required:!0})]}),_.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px 16px"},disabled:y,type:"submit",children:y?"Creating account…":"Sign up"})]}),_.jsxs("div",{style:{marginTop:20,textAlign:"center",fontSize:14},children:[_.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Already have an account? "}),_.jsx("a",{href:"/login",children:"Sign in"})]})]})})}function JN(){return _.jsxs("div",{className:"app-shell",children:[_.jsx(VN,{}),_.jsx("main",{className:"main-inner",children:_.jsxs(bI,{children:[_.jsx(xn,{path:"/",element:_.jsx(sc,{children:_.jsx(MN,{})})}),_.jsx(xn,{path:"/login",element:_.jsx(l_,{})}),_.jsx(xn,{path:"/event/:id",element:_.jsx(sc,{children:_.jsx(UN,{})})}),_.jsx(xn,{path:"/admin",element:_.jsx($N,{children:_.jsx(BN,{})})}),_.jsx(xn,{path:"/404",element:_.jsx(zN,{})}),_.jsx(xn,{path:"*",element:_.jsx(yc,{to:"/404"})}),_.jsx(xn,{path:"/signup",element:_.jsx(XN,{})}),_.jsx(xn,{path:"/reset-password",element:_.jsx(WN,{})}),_.jsx(xn,{path:"/login",element:_.jsx(l_,{})}),_.jsx(xn,{path:"/profile",element:_.jsx(sc,{children:_.jsx(YN,{})})}),_.jsx(xn,{path:"/change-username",element:_.jsx(sc,{children:_.jsx(qN,{})})})]})})]})}const ZN=W.createContext(null);function eb({children:n}){return _.jsx(ZN.Provider,{value:{theme:"light"},children:n})}FT.createRoot(document.getElementById("root")).render(_.jsx(p_.StrictMode,{children:_.jsx(FI,{basename:"/golfgang/",children:_.jsx(eb,{children:_.jsx(ON,{children:_.jsx(JN,{})})})})}));
