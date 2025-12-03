function QT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function P_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yh={exports:{}},rl={},Jh={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function YT(){if(vy)return De;vy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,z={};function M(V,K,H){this.props=V,this.context=K,this.refs=z,this.updater=H||P}M.prototype.isReactComponent={},M.prototype.setState=function(V,K){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,K,"setState")},M.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function te(){}te.prototype=M.prototype;function ie(V,K,H){this.props=V,this.context=K,this.refs=z,this.updater=H||P}var X=ie.prototype=new te;X.constructor=ie,j(X,M.prototype),X.isPureReactComponent=!0;var le=Array.isArray,ke=Object.prototype.hasOwnProperty,Re={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function A(V,K,H){var ue,he={},Y=null,re=null;if(K!=null)for(ue in K.ref!==void 0&&(re=K.ref),K.key!==void 0&&(Y=""+K.key),K)ke.call(K,ue)&&!b.hasOwnProperty(ue)&&(he[ue]=K[ue]);var ge=arguments.length-2;if(ge===1)he.children=H;else if(1<ge){for(var xe=Array(ge),Ne=0;Ne<ge;Ne++)xe[Ne]=arguments[Ne+2];he.children=xe}if(V&&V.defaultProps)for(ue in ge=V.defaultProps,ge)he[ue]===void 0&&(he[ue]=ge[ue]);return{$$typeof:n,type:V,key:Y,ref:re,props:he,_owner:Re.current}}function R(V,K){return{$$typeof:n,type:V.type,key:K,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var K={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(H){return K[H]})}var L=/\/+/g;function C(V,K){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):K.toString(36)}function Je(V,K,H,ue,he){var Y=typeof V;(Y==="undefined"||Y==="boolean")&&(V=null);var re=!1;if(V===null)re=!0;else switch(Y){case"string":case"number":re=!0;break;case"object":switch(V.$$typeof){case n:case e:re=!0}}if(re)return re=V,he=he(re),V=ue===""?"."+C(re,0):ue,le(he)?(H="",V!=null&&(H=V.replace(L,"$&/")+"/"),Je(he,K,H,"",function(Ne){return Ne})):he!=null&&(x(he)&&(he=R(he,H+(!he.key||re&&re.key===he.key?"":(""+he.key).replace(L,"$&/")+"/")+V)),K.push(he)),1;if(re=0,ue=ue===""?".":ue+":",le(V))for(var ge=0;ge<V.length;ge++){Y=V[ge];var xe=ue+C(Y,ge);re+=Je(Y,K,H,xe,he)}else if(xe=S(V),typeof xe=="function")for(V=xe.call(V),ge=0;!(Y=V.next()).done;)Y=Y.value,xe=ue+C(Y,ge++),re+=Je(Y,K,H,xe,he);else if(Y==="object")throw K=String(V),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return re}function dt(V,K,H){if(V==null)return V;var ue=[],he=0;return Je(V,ue,"","",function(Y){return K.call(H,Y,he++)}),ue}function ht(V){if(V._status===-1){var K=V._result;K=K(),K.then(function(H){(V._status===0||V._status===-1)&&(V._status=1,V._result=H)},function(H){(V._status===0||V._status===-1)&&(V._status=2,V._result=H)}),V._status===-1&&(V._status=0,V._result=K)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},oe={transition:null},_e={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:oe,ReactCurrentOwner:Re};function ae(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:dt,forEach:function(V,K,H){dt(V,function(){K.apply(this,arguments)},H)},count:function(V){var K=0;return dt(V,function(){K++}),K},toArray:function(V){return dt(V,function(K){return K})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},De.Component=M,De.Fragment=t,De.Profiler=o,De.PureComponent=ie,De.StrictMode=i,De.Suspense=p,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,De.act=ae,De.cloneElement=function(V,K,H){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ue=j({},V.props),he=V.key,Y=V.ref,re=V._owner;if(K!=null){if(K.ref!==void 0&&(Y=K.ref,re=Re.current),K.key!==void 0&&(he=""+K.key),V.type&&V.type.defaultProps)var ge=V.type.defaultProps;for(xe in K)ke.call(K,xe)&&!b.hasOwnProperty(xe)&&(ue[xe]=K[xe]===void 0&&ge!==void 0?ge[xe]:K[xe])}var xe=arguments.length-2;if(xe===1)ue.children=H;else if(1<xe){ge=Array(xe);for(var Ne=0;Ne<xe;Ne++)ge[Ne]=arguments[Ne+2];ue.children=ge}return{$$typeof:n,type:V.type,key:he,ref:Y,props:ue,_owner:re}},De.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},De.createElement=A,De.createFactory=function(V){var K=A.bind(null,V);return K.type=V,K},De.createRef=function(){return{current:null}},De.forwardRef=function(V){return{$$typeof:h,render:V}},De.isValidElement=x,De.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:ht}},De.memo=function(V,K){return{$$typeof:y,type:V,compare:K===void 0?null:K}},De.startTransition=function(V){var K=oe.transition;oe.transition={};try{V()}finally{oe.transition=K}},De.unstable_act=ae,De.useCallback=function(V,K){return Ue.current.useCallback(V,K)},De.useContext=function(V){return Ue.current.useContext(V)},De.useDebugValue=function(){},De.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},De.useEffect=function(V,K){return Ue.current.useEffect(V,K)},De.useId=function(){return Ue.current.useId()},De.useImperativeHandle=function(V,K,H){return Ue.current.useImperativeHandle(V,K,H)},De.useInsertionEffect=function(V,K){return Ue.current.useInsertionEffect(V,K)},De.useLayoutEffect=function(V,K){return Ue.current.useLayoutEffect(V,K)},De.useMemo=function(V,K){return Ue.current.useMemo(V,K)},De.useReducer=function(V,K,H){return Ue.current.useReducer(V,K,H)},De.useRef=function(V){return Ue.current.useRef(V)},De.useState=function(V){return Ue.current.useState(V)},De.useSyncExternalStore=function(V,K,H){return Ue.current.useSyncExternalStore(V,K,H)},De.useTransition=function(){return Ue.current.useTransition()},De.version="18.3.1",De}var _y;function ep(){return _y||(_y=1,Jh.exports=YT()),Jh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function JT(){if(wy)return rl;wy=1;var n=ep(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,y){var w,T={},S=null,P=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(P=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(h&&h.defaultProps)for(w in p=h.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:h,key:S,ref:P,props:T,_owner:o.current}}return rl.Fragment=t,rl.jsx=c,rl.jsxs=c,rl}var Ey;function XT(){return Ey||(Ey=1,Yh.exports=JT()),Yh.exports}var v=XT(),W=ep();const x_=P_(W),ZT=QT({__proto__:null,default:x_},[W]);var nc={},Xh={exports:{}},on={},Zh={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function eI(){return Ty||(Ty=1,(function(n){function e(oe,_e){var ae=oe.length;oe.push(_e);e:for(;0<ae;){var V=ae-1>>>1,K=oe[V];if(0<o(K,_e))oe[V]=_e,oe[ae]=K,ae=V;else break e}}function t(oe){return oe.length===0?null:oe[0]}function i(oe){if(oe.length===0)return null;var _e=oe[0],ae=oe.pop();if(ae!==_e){oe[0]=ae;e:for(var V=0,K=oe.length,H=K>>>1;V<H;){var ue=2*(V+1)-1,he=oe[ue],Y=ue+1,re=oe[Y];if(0>o(he,ae))Y<K&&0>o(re,he)?(oe[V]=re,oe[Y]=ae,V=Y):(oe[V]=he,oe[ue]=ae,V=ue);else if(Y<K&&0>o(re,ae))oe[V]=re,oe[Y]=ae,V=Y;else break e}}return _e}function o(oe,_e){var ae=oe.sortIndex-_e.sortIndex;return ae!==0?ae:oe.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var p=[],y=[],w=1,T=null,S=3,P=!1,j=!1,z=!1,M=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(oe){for(var _e=t(y);_e!==null;){if(_e.callback===null)i(y);else if(_e.startTime<=oe)i(y),_e.sortIndex=_e.expirationTime,e(p,_e);else break;_e=t(y)}}function le(oe){if(z=!1,X(oe),!j)if(t(p)!==null)j=!0,ht(ke);else{var _e=t(y);_e!==null&&Ue(le,_e.startTime-oe)}}function ke(oe,_e){j=!1,z&&(z=!1,te(A),A=-1),P=!0;var ae=S;try{for(X(_e),T=t(p);T!==null&&(!(T.expirationTime>_e)||oe&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,S=T.priorityLevel;var K=V(T.expirationTime<=_e);_e=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),X(_e)}else i(p);T=t(p)}if(T!==null)var H=!0;else{var ue=t(y);ue!==null&&Ue(le,ue.startTime-_e),H=!1}return H}finally{T=null,S=ae,P=!1}}var Re=!1,b=null,A=-1,R=5,x=-1;function O(){return!(n.unstable_now()-x<R)}function L(){if(b!==null){var oe=n.unstable_now();x=oe;var _e=!0;try{_e=b(!0,oe)}finally{_e?C():(Re=!1,b=null)}}else Re=!1}var C;if(typeof ie=="function")C=function(){ie(L)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,dt=Je.port2;Je.port1.onmessage=L,C=function(){dt.postMessage(null)}}else C=function(){M(L,0)};function ht(oe){b=oe,Re||(Re=!0,C())}function Ue(oe,_e){A=M(function(){oe(n.unstable_now())},_e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(oe){oe.callback=null},n.unstable_continueExecution=function(){j||P||(j=!0,ht(ke))},n.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<oe?Math.floor(1e3/oe):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(oe){switch(S){case 1:case 2:case 3:var _e=3;break;default:_e=S}var ae=S;S=_e;try{return oe()}finally{S=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(oe,_e){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var ae=S;S=oe;try{return _e()}finally{S=ae}},n.unstable_scheduleCallback=function(oe,_e,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,oe){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ae+K,oe={id:w++,callback:_e,priorityLevel:oe,startTime:ae,expirationTime:K,sortIndex:-1},ae>V?(oe.sortIndex=ae,e(y,oe),t(p)===null&&oe===t(y)&&(z?(te(A),A=-1):z=!0,Ue(le,ae-V))):(oe.sortIndex=K,e(p,oe),j||P||(j=!0,ht(ke))),oe},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(oe){var _e=S;return function(){var ae=S;S=_e;try{return oe.apply(this,arguments)}finally{S=ae}}}})(ef)),ef}var Iy;function tI(){return Iy||(Iy=1,Zh.exports=eI()),Zh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy;function nI(){if(Sy)return on;Sy=1;var n=ep(),e=tI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function S(r){return p.call(T,r)?!0:p.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function P(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function j(r,s,a,d){if(s===null||typeof s>"u"||P(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,d,f,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){M[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];M[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){M[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){M[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){M[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){M[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){M[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){M[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){M[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function ie(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(te,ie);M[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(te,ie);M[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(te,ie);M[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){M[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),M.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){M[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function X(r,s,a,d){var f=M.hasOwnProperty(s)?M[s]:null;(f!==null?f.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(j(s,a,f,d)&&(a=null),d||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,d=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Re=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),oe=Symbol.iterator;function _e(r){return r===null||typeof r!="object"?null:(r=oe&&r[oe]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,V;function K(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var H=!1;function ue(r,s){if(!r||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var d=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){d=$}r.call(s.prototype)}else{try{throw Error()}catch($){d=$}r()}}catch($){if($&&d&&typeof $.stack=="string"){for(var f=$.stack.split(`
`),g=d.stack.split(`
`),E=f.length-1,k=g.length-1;1<=E&&0<=k&&f[E]!==g[k];)k--;for(;1<=E&&0<=k;E--,k--)if(f[E]!==g[k]){if(E!==1||k!==1)do if(E--,k--,0>k||f[E]!==g[k]){var N=`
`+f[E].replace(" at new "," at ");return r.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",r.displayName)),N}while(1<=E&&0<=k);break}}}finally{H=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function he(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=ue(r.type,!1),r;case 11:return r=ue(r.type.render,!1),r;case 1:return r=ue(r.type,!0),r;default:return""}}function Y(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case b:return"Fragment";case Re:return"Portal";case R:return"Profiler";case A:return"StrictMode";case C:return"Suspense";case Je:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case L:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case dt:return s=r.displayName||null,s!==null?s:Y(r.type)||"Memo";case ht:s=r._payload,r=r._init;try{return Y(r(s))}catch{}}return null}function re(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ge(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function xe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ne(r){var s=xe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){d=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(E){d=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function St(r){r._valueTracker||(r._valueTracker=Ne(r))}function ir(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=xe(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function En(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Nt(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function $s(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=ge(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ua(r,s){s=s.checked,s!=null&&X(r,"checked",s,!1)}function ca(r,s){ua(r,s);var a=ge(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ws(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ws(r,s.type,ge(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Bl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ws(r,s,a){(s!=="number"||En(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Cr=Array.isArray;function Rr(r,s,a,d){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&d&&(r[a].defaultSelected=!0)}else{for(a=""+ge(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,d&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function da(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function qs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Cr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:ge(a)}}function Hs(r,s){var a=ge(s.value),d=ge(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function ha(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function vt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _t(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?vt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Pr,fa=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,f)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Pr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ri(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xi=["Webkit","ms","Moz","O"];Object.keys(Ji).forEach(function(r){Xi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ji[s]=Ji[r]})});function pa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ji.hasOwnProperty(r)&&Ji[r]?(""+s).trim():s+"px"}function ma(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,f=pa(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,f):r[a]=f}}var ga=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(r,s){if(s){if(ga[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function va(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function Ks(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Gs=null,Tn=null,sr=null;function Qs(r){if(r=za(r)){if(typeof Gs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=yu(s),Gs(r.stateNode,r.type,s))}}function or(r){Tn?sr?sr.push(r):sr=[r]:Tn=r}function _a(){if(Tn){var r=Tn,s=sr;if(sr=Tn=null,Qs(r),s)for(r=0;r<s.length;r++)Qs(s[r])}}function es(r,s){return r(s)}function wa(){}var xr=!1;function Ea(r,s,a){if(xr)return r(s,a);xr=!0;try{return es(r,s,a)}finally{xr=!1,(Tn!==null||sr!==null)&&(wa(),_a())}}function at(r,s){var a=r.stateNode;if(a===null)return null;var d=yu(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ys=!1;if(h)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Ys=!1}function ts(r,s,a,d,f,g,E,k,N){var $=Array.prototype.slice.call(arguments,3);try{s.apply(a,$)}catch(Z){this.onError(Z)}}var ns=!1,Js=null,jn=!1,Ta=null,Sd={onError:function(r){ns=!0,Js=r}};function Xs(r,s,a,d,f,g,E,k,N){ns=!1,Js=null,ts.apply(Sd,arguments)}function zl(r,s,a,d,f,g,E,k,N){if(Xs.apply(this,arguments),ns){if(ns){var $=Js;ns=!1,Js=null}else throw Error(t(198));jn||(jn=!0,Ta=$)}}function Fn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function rs(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Un(r){if(Fn(r)!==r)throw Error(t(188))}function $l(r){var s=r.alternate;if(!s){if(s=Fn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,d=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(d=f.return,d!==null){a=d;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Un(f),r;if(g===d)return Un(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==d.return)a=f,d=g;else{for(var E=!1,k=f.child;k;){if(k===a){E=!0,a=f,d=g;break}if(k===d){E=!0,d=f,a=g;break}k=k.sibling}if(!E){for(k=g.child;k;){if(k===a){E=!0,a=g,d=f;break}if(k===d){E=!0,d=g,a=f;break}k=k.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ia(r){return r=$l(r),r!==null?Zs(r):null}function Zs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Zs(r);if(s!==null)return s;r=r.sibling}return null}var eo=e.unstable_scheduleCallback,Sa=e.unstable_cancelCallback,Wl=e.unstable_shouldYield,Ad=e.unstable_requestPaint,Ge=e.unstable_now,ql=e.unstable_getCurrentPriorityLevel,is=e.unstable_ImmediatePriority,ii=e.unstable_UserBlockingPriority,In=e.unstable_NormalPriority,Aa=e.unstable_LowPriority,Hl=e.unstable_IdlePriority,ss=null,fn=null;function Kl(r){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(ss,r,void 0,(r.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:Ql,ka=Math.log,Gl=Math.LN2;function Ql(r){return r>>>=0,r===0?32:31-(ka(r)/Gl|0)|0}var to=64,no=4194304;function si(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function os(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,f=r.suspendedLanes,g=r.pingedLanes,E=a&268435455;if(E!==0){var k=E&~f;k!==0?d=si(k):(g&=E,g!==0&&(d=si(g)))}else E=a&~f,E!==0?d=si(E):g!==0&&(d=si(g));if(d===0)return 0;if(s!==0&&s!==d&&(s&f)===0&&(f=d&-d,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-Kt(s),f=1<<a,d|=r[a],s&=~f;return d}function kd(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nr(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-Kt(g),k=1<<E,N=f[E];N===-1?((k&a)===0||(k&d)!==0)&&(f[E]=kd(k,s)):N<=s&&(r.expiredLanes|=k),g&=~k}}function pn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function as(){var r=to;return to<<=1,(to&4194240)===0&&(to=64),r}function oi(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ai(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Kt(s),r[s]=a}function qe(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Kt(a),g=1<<f;s[f]=0,d[f]=-1,r[f]=-1,a&=~g}}function li(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-Kt(a),f=1<<d;f&s|r[d]&s&&(r[d]|=s),a&=~f}}var Le=0;function ui(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Yl,ro,Jl,Xl,Zl,Ca=!1,ar=[],bt=null,Bn=null,zn=null,ci=new Map,Sn=new Map,lr=[],Cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(r,s){switch(r){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":ci.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(s.pointerId)}}function Xt(r,s,a,d,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:g,targetContainers:[f]},s!==null&&(s=za(s),s!==null&&ro(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Rd(r,s,a,d,f){switch(s){case"focusin":return bt=Xt(bt,r,s,a,d,f),!0;case"dragenter":return Bn=Xt(Bn,r,s,a,d,f),!0;case"mouseover":return zn=Xt(zn,r,s,a,d,f),!0;case"pointerover":var g=f.pointerId;return ci.set(g,Xt(ci.get(g)||null,r,s,a,d,f)),!0;case"gotpointercapture":return g=f.pointerId,Sn.set(g,Xt(Sn.get(g)||null,r,s,a,d,f)),!0}return!1}function tu(r){var s=hs(r.target);if(s!==null){var a=Fn(s);if(a!==null){if(s=a.tag,s===13){if(s=rs(a),s!==null){r.blockedOn=s,Zl(r.priority,function(){Jl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function br(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=io(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);Zi=d,a.target.dispatchEvent(d),Zi=null}else return s=za(a),s!==null&&ro(s),r.blockedOn=a,!1;s.shift()}return!0}function ls(r,s,a){br(r)&&a.delete(s)}function nu(){Ca=!1,bt!==null&&br(bt)&&(bt=null),Bn!==null&&br(Bn)&&(Bn=null),zn!==null&&br(zn)&&(zn=null),ci.forEach(ls),Sn.forEach(ls)}function $n(r,s){r.blockedOn===s&&(r.blockedOn=null,Ca||(Ca=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nu)))}function Wn(r){function s(f){return $n(f,r)}if(0<ar.length){$n(ar[0],r);for(var a=1;a<ar.length;a++){var d=ar[a];d.blockedOn===r&&(d.blockedOn=null)}}for(bt!==null&&$n(bt,r),Bn!==null&&$n(Bn,r),zn!==null&&$n(zn,r),ci.forEach(s),Sn.forEach(s),a=0;a<lr.length;a++)d=lr[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)tu(a),a.blockedOn===null&&lr.shift()}var Dr=le.ReactCurrentBatchConfig,di=!0;function et(r,s,a,d){var f=Le,g=Dr.transition;Dr.transition=null;try{Le=1,Ra(r,s,a,d)}finally{Le=f,Dr.transition=g}}function Pd(r,s,a,d){var f=Le,g=Dr.transition;Dr.transition=null;try{Le=4,Ra(r,s,a,d)}finally{Le=f,Dr.transition=g}}function Ra(r,s,a,d){if(di){var f=io(r,s,a,d);if(f===null)Ud(r,s,d,us,a),eu(r,d);else if(Rd(f,r,s,a,d))d.stopPropagation();else if(eu(r,d),s&4&&-1<Cd.indexOf(r)){for(;f!==null;){var g=za(f);if(g!==null&&Yl(g),g=io(r,s,a,d),g===null&&Ud(r,s,d,us,a),g===f)break;f=g}f!==null&&d.stopPropagation()}else Ud(r,s,d,null,a)}}var us=null;function io(r,s,a,d){if(us=null,r=Ks(d),r=hs(r),r!==null)if(s=Fn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=rs(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return us=r,null}function Pa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ql()){case is:return 1;case ii:return 4;case In:case Aa:return 16;case Hl:return 536870912;default:return 16}default:return 16}}var mn=null,so=null,Zt=null;function xa(){if(Zt)return Zt;var r,s=so,a=s.length,d,f="value"in mn?mn.value:mn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var E=a-r;for(d=1;d<=E&&s[a-d]===f[g-d];d++);return Zt=f.slice(r,1<d?1-d:void 0)}function oo(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ur(){return!0}function Na(){return!1}function Dt(r){function s(a,d,f,g,E){this._reactName=a,this._targetInst=f,this.type=d,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var k in r)r.hasOwnProperty(k)&&(a=r[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ur:Na,this.isPropagationStopped=Na,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),s}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=Dt(qn),cr=ae({},qn,{view:0,detail:0}),xd=Dt(cr),lo,Or,hi,cs=ae({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==hi&&(hi&&r.type==="mousemove"?(lo=r.screenX-hi.screenX,Or=r.screenY-hi.screenY):Or=lo=0,hi=r),lo)},movementY:function(r){return"movementY"in r?r.movementY:Or}}),uo=Dt(cs),ba=ae({},cs,{dataTransfer:0}),ru=Dt(ba),co=ae({},cr,{relatedTarget:0}),ho=Dt(co),iu=ae({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vr=Dt(iu),su=ae({},qn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ou=Dt(su),au=ae({},qn,{data:0}),Da=Dt(au),fo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=lu[r])?!!s[r]:!1}function dr(){return uu}var u=ae({},cr,{key:function(r){if(r.key){var s=fo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=oo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Gt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(r){return r.type==="keypress"?oo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?oo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Dt(u),_=ae({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Dt(_),F=ae({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr}),q=Dt(F),se=ae({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=Dt(se),wt=ae({},cs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=Dt(wt),At=[9,13,27,32],ft=h&&"CompositionEvent"in window,An=null;h&&"documentMode"in document&&(An=document.documentMode);var gn=h&&"TextEvent"in window&&!An,ds=h&&(!ft||An&&8<An&&11>=An),po=" ",hm=!1;function fm(r,s){switch(r){case"keyup":return At.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var mo=!1;function H0(r,s){switch(r){case"compositionend":return pm(s);case"keypress":return s.which!==32?null:(hm=!0,po);case"textInput":return r=s.data,r===po&&hm?null:r;default:return null}}function K0(r,s){if(mo)return r==="compositionend"||!ft&&fm(r,s)?(r=xa(),Zt=so=mn=null,mo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ds&&s.locale!=="ko"?null:s.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!G0[r.type]:s==="textarea"}function gm(r,s,a,d){or(d),s=pu(s,"onChange"),0<s.length&&(a=new ao("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var Oa=null,Va=null;function Q0(r){Om(r,0)}function cu(r){var s=wo(r);if(ir(s))return r}function Y0(r,s){if(r==="change")return s}var ym=!1;if(h){var Nd;if(h){var bd="oninput"in document;if(!bd){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),bd=typeof vm.oninput=="function"}Nd=bd}else Nd=!1;ym=Nd&&(!document.documentMode||9<document.documentMode)}function _m(){Oa&&(Oa.detachEvent("onpropertychange",wm),Va=Oa=null)}function wm(r){if(r.propertyName==="value"&&cu(Va)){var s=[];gm(s,Va,r,Ks(r)),Ea(Q0,s)}}function J0(r,s,a){r==="focusin"?(_m(),Oa=s,Va=a,Oa.attachEvent("onpropertychange",wm)):r==="focusout"&&_m()}function X0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return cu(Va)}function Z0(r,s){if(r==="click")return cu(s)}function eT(r,s){if(r==="input"||r==="change")return cu(s)}function tT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Hn=typeof Object.is=="function"?Object.is:tT;function La(r,s){if(Hn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var f=a[d];if(!p.call(s,f)||!Hn(r[f],s[f]))return!1}return!0}function Em(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Tm(r,s){var a=Em(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Em(a)}}function Im(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Im(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Sm(){for(var r=window,s=En();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=En(r.document)}return s}function Dd(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function nT(r){var s=Sm(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Im(a.ownerDocument.documentElement,a)){if(d!==null&&Dd(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(d.start,f);d=d.end===void 0?g:Math.min(d.end,f),!r.extend&&g>d&&(f=d,d=g,g=f),f=Tm(a,g);var E=Tm(a,d);f&&E&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>d?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var rT=h&&"documentMode"in document&&11>=document.documentMode,go=null,Od=null,Ma=null,Vd=!1;function Am(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vd||go==null||go!==En(d)||(d=go,"selectionStart"in d&&Dd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ma&&La(Ma,d)||(Ma=d,d=pu(Od,"onSelect"),0<d.length&&(s=new ao("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=go)))}function du(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var yo={animationend:du("Animation","AnimationEnd"),animationiteration:du("Animation","AnimationIteration"),animationstart:du("Animation","AnimationStart"),transitionend:du("Transition","TransitionEnd")},Ld={},km={};h&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function hu(r){if(Ld[r])return Ld[r];if(!yo[r])return r;var s=yo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in km)return Ld[r]=s[a];return r}var Cm=hu("animationend"),Rm=hu("animationiteration"),Pm=hu("animationstart"),xm=hu("transitionend"),Nm=new Map,bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(r,s){Nm.set(r,s),l(s,[r])}for(var Md=0;Md<bm.length;Md++){var jd=bm[Md],iT=jd.toLowerCase(),sT=jd[0].toUpperCase()+jd.slice(1);fi(iT,"on"+sT)}fi(Cm,"onAnimationEnd"),fi(Rm,"onAnimationIteration"),fi(Pm,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(xm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function Dm(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,zl(d,s,void 0,r),r.currentTarget=null}function Om(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],f=d.event;d=d.listeners;e:{var g=void 0;if(s)for(var E=d.length-1;0<=E;E--){var k=d[E],N=k.instance,$=k.currentTarget;if(k=k.listener,N!==g&&f.isPropagationStopped())break e;Dm(f,k,$),g=N}else for(E=0;E<d.length;E++){if(k=d[E],N=k.instance,$=k.currentTarget,k=k.listener,N!==g&&f.isPropagationStopped())break e;Dm(f,k,$),g=N}}}if(jn)throw r=Ta,jn=!1,Ta=null,r}function Xe(r,s){var a=s[Hd];a===void 0&&(a=s[Hd]=new Set);var d=r+"__bubble";a.has(d)||(Vm(s,r,2,!1),a.add(d))}function Fd(r,s,a){var d=0;s&&(d|=4),Vm(a,r,d,s)}var fu="_reactListening"+Math.random().toString(36).slice(2);function Fa(r){if(!r[fu]){r[fu]=!0,i.forEach(function(a){a!=="selectionchange"&&(oT.has(a)||Fd(a,!1,r),Fd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[fu]||(s[fu]=!0,Fd("selectionchange",!1,s))}}function Vm(r,s,a,d){switch(Pa(s)){case 1:var f=et;break;case 4:f=Pd;break;default:f=Ra}a=f.bind(null,s,a,r),f=void 0,!Ys||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),d?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Ud(r,s,a,d,f){var g=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var E=d.tag;if(E===3||E===4){var k=d.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(E===4)for(E=d.return;E!==null;){var N=E.tag;if((N===3||N===4)&&(N=E.stateNode.containerInfo,N===f||N.nodeType===8&&N.parentNode===f))return;E=E.return}for(;k!==null;){if(E=hs(k),E===null)return;if(N=E.tag,N===5||N===6){d=g=E;continue e}k=k.parentNode}}d=d.return}Ea(function(){var $=g,Z=Ks(a),ee=[];e:{var J=Nm.get(r);if(J!==void 0){var de=ao,me=r;switch(r){case"keypress":if(oo(a)===0)break e;case"keydown":case"keyup":de=m;break;case"focusin":me="focus",de=ho;break;case"focusout":me="blur",de=ho;break;case"beforeblur":case"afterblur":de=ho;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=ru;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=q;break;case Cm:case Rm:case Pm:de=Vr;break;case xm:de=$e;break;case"scroll":de=xd;break;case"wheel":de=Me;break;case"copy":case"cut":case"paste":de=ou;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=I}var ye=(s&4)!==0,lt=!ye&&r==="scroll",U=ye?J!==null?J+"Capture":null:J;ye=[];for(var D=$,B;D!==null;){B=D;var ne=B.stateNode;if(B.tag===5&&ne!==null&&(B=ne,U!==null&&(ne=at(D,U),ne!=null&&ye.push(Ua(D,ne,B)))),lt)break;D=D.return}0<ye.length&&(J=new de(J,me,null,a,Z),ee.push({event:J,listeners:ye}))}}if((s&7)===0){e:{if(J=r==="mouseover"||r==="pointerover",de=r==="mouseout"||r==="pointerout",J&&a!==Zi&&(me=a.relatedTarget||a.fromElement)&&(hs(me)||me[Lr]))break e;if((de||J)&&(J=Z.window===Z?Z:(J=Z.ownerDocument)?J.defaultView||J.parentWindow:window,de?(me=a.relatedTarget||a.toElement,de=$,me=me?hs(me):null,me!==null&&(lt=Fn(me),me!==lt||me.tag!==5&&me.tag!==6)&&(me=null)):(de=null,me=$),de!==me)){if(ye=uo,ne="onMouseLeave",U="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(ye=I,ne="onPointerLeave",U="onPointerEnter",D="pointer"),lt=de==null?J:wo(de),B=me==null?J:wo(me),J=new ye(ne,D+"leave",de,a,Z),J.target=lt,J.relatedTarget=B,ne=null,hs(Z)===$&&(ye=new ye(U,D+"enter",me,a,Z),ye.target=B,ye.relatedTarget=lt,ne=ye),lt=ne,de&&me)t:{for(ye=de,U=me,D=0,B=ye;B;B=vo(B))D++;for(B=0,ne=U;ne;ne=vo(ne))B++;for(;0<D-B;)ye=vo(ye),D--;for(;0<B-D;)U=vo(U),B--;for(;D--;){if(ye===U||U!==null&&ye===U.alternate)break t;ye=vo(ye),U=vo(U)}ye=null}else ye=null;de!==null&&Lm(ee,J,de,ye,!1),me!==null&&lt!==null&&Lm(ee,lt,me,ye,!0)}}e:{if(J=$?wo($):window,de=J.nodeName&&J.nodeName.toLowerCase(),de==="select"||de==="input"&&J.type==="file")var ve=Y0;else if(mm(J))if(ym)ve=eT;else{ve=X0;var Ee=J0}else(de=J.nodeName)&&de.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(ve=Z0);if(ve&&(ve=ve(r,$))){gm(ee,ve,a,Z);break e}Ee&&Ee(r,J,$),r==="focusout"&&(Ee=J._wrapperState)&&Ee.controlled&&J.type==="number"&&Ws(J,"number",J.value)}switch(Ee=$?wo($):window,r){case"focusin":(mm(Ee)||Ee.contentEditable==="true")&&(go=Ee,Od=$,Ma=null);break;case"focusout":Ma=Od=go=null;break;case"mousedown":Vd=!0;break;case"contextmenu":case"mouseup":case"dragend":Vd=!1,Am(ee,a,Z);break;case"selectionchange":if(rT)break;case"keydown":case"keyup":Am(ee,a,Z)}var Te;if(ft)e:{switch(r){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else mo?fm(r,a)&&(Ae="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(ds&&a.locale!=="ko"&&(mo||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&mo&&(Te=xa()):(mn=Z,so="value"in mn?mn.value:mn.textContent,mo=!0)),Ee=pu($,Ae),0<Ee.length&&(Ae=new Da(Ae,r,null,a,Z),ee.push({event:Ae,listeners:Ee}),Te?Ae.data=Te:(Te=pm(a),Te!==null&&(Ae.data=Te)))),(Te=gn?H0(r,a):K0(r,a))&&($=pu($,"onBeforeInput"),0<$.length&&(Z=new Da("onBeforeInput","beforeinput",null,a,Z),ee.push({event:Z,listeners:$}),Z.data=Te))}Om(ee,s)})}function Ua(r,s,a){return{instance:r,listener:s,currentTarget:a}}function pu(r,s){for(var a=s+"Capture",d=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=at(r,a),g!=null&&d.unshift(Ua(r,g,f)),g=at(r,s),g!=null&&d.push(Ua(r,g,f))),r=r.return}return d}function vo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Lm(r,s,a,d,f){for(var g=s._reactName,E=[];a!==null&&a!==d;){var k=a,N=k.alternate,$=k.stateNode;if(N!==null&&N===d)break;k.tag===5&&$!==null&&(k=$,f?(N=at(a,g),N!=null&&E.unshift(Ua(a,N,k))):f||(N=at(a,g),N!=null&&E.push(Ua(a,N,k)))),a=a.return}E.length!==0&&r.push({event:s,listeners:E})}var aT=/\r\n?/g,lT=/\u0000|\uFFFD/g;function Mm(r){return(typeof r=="string"?r:""+r).replace(aT,`
`).replace(lT,"")}function mu(r,s,a){if(s=Mm(s),Mm(r)!==s&&a)throw Error(t(425))}function gu(){}var Bd=null,zd=null;function $d(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,uT=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,cT=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(r){return jm.resolve(null).then(r).catch(dT)}:Wd;function dT(r){setTimeout(function(){throw r})}function qd(r,s){var a=s,d=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(d===0){r.removeChild(f),Wn(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=f}while(a);Wn(s)}function pi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Fm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var _o=Math.random().toString(36).slice(2),hr="__reactFiber$"+_o,Ba="__reactProps$"+_o,Lr="__reactContainer$"+_o,Hd="__reactEvents$"+_o,hT="__reactListeners$"+_o,fT="__reactHandles$"+_o;function hs(r){var s=r[hr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Lr]||a[hr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Fm(r);r!==null;){if(a=r[hr])return a;r=Fm(r)}return s}r=a,a=r.parentNode}return null}function za(r){return r=r[hr]||r[Lr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function wo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function yu(r){return r[Ba]||null}var Kd=[],Eo=-1;function mi(r){return{current:r}}function Ze(r){0>Eo||(r.current=Kd[Eo],Kd[Eo]=null,Eo--)}function Qe(r,s){Eo++,Kd[Eo]=r.current,r.current=s}var gi={},Ft=mi(gi),en=mi(!1),fs=gi;function To(r,s){var a=r.type.contextTypes;if(!a)return gi;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function tn(r){return r=r.childContextTypes,r!=null}function vu(){Ze(en),Ze(Ft)}function Um(r,s,a){if(Ft.current!==gi)throw Error(t(168));Qe(Ft,s),Qe(en,a)}function Bm(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var f in d)if(!(f in s))throw Error(t(108,re(r)||"Unknown",f));return ae({},a,d)}function _u(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||gi,fs=Ft.current,Qe(Ft,r),Qe(en,en.current),!0}function zm(r,s,a){var d=r.stateNode;if(!d)throw Error(t(169));a?(r=Bm(r,s,fs),d.__reactInternalMemoizedMergedChildContext=r,Ze(en),Ze(Ft),Qe(Ft,r)):Ze(en),Qe(en,a)}var Mr=null,wu=!1,Gd=!1;function $m(r){Mr===null?Mr=[r]:Mr.push(r)}function pT(r){wu=!0,$m(r)}function yi(){if(!Gd&&Mr!==null){Gd=!0;var r=0,s=Le;try{var a=Mr;for(Le=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}Mr=null,wu=!1}catch(f){throw Mr!==null&&(Mr=Mr.slice(r+1)),eo(is,yi),f}finally{Le=s,Gd=!1}}return null}var Io=[],So=0,Eu=null,Tu=0,kn=[],Cn=0,ps=null,jr=1,Fr="";function ms(r,s){Io[So++]=Tu,Io[So++]=Eu,Eu=r,Tu=s}function Wm(r,s,a){kn[Cn++]=jr,kn[Cn++]=Fr,kn[Cn++]=ps,ps=r;var d=jr;r=Fr;var f=32-Kt(d)-1;d&=~(1<<f),a+=1;var g=32-Kt(s)+f;if(30<g){var E=f-f%5;g=(d&(1<<E)-1).toString(32),d>>=E,f-=E,jr=1<<32-Kt(s)+f|a<<f|d,Fr=g+r}else jr=1<<g|a<<f|d,Fr=r}function Qd(r){r.return!==null&&(ms(r,1),Wm(r,1,0))}function Yd(r){for(;r===Eu;)Eu=Io[--So],Io[So]=null,Tu=Io[--So],Io[So]=null;for(;r===ps;)ps=kn[--Cn],kn[Cn]=null,Fr=kn[--Cn],kn[Cn]=null,jr=kn[--Cn],kn[Cn]=null}var yn=null,vn=null,tt=!1,Kn=null;function qm(r,s){var a=Nn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Hm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,yn=r,vn=pi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,yn=r,vn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ps!==null?{id:jr,overflow:Fr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Nn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,yn=r,vn=null,!0):!1;default:return!1}}function Jd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Xd(r){if(tt){var s=vn;if(s){var a=s;if(!Hm(r,s)){if(Jd(r))throw Error(t(418));s=pi(a.nextSibling);var d=yn;s&&Hm(r,s)?qm(d,a):(r.flags=r.flags&-4097|2,tt=!1,yn=r)}}else{if(Jd(r))throw Error(t(418));r.flags=r.flags&-4097|2,tt=!1,yn=r}}}function Km(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;yn=r}function Iu(r){if(r!==yn)return!1;if(!tt)return Km(r),tt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!$d(r.type,r.memoizedProps)),s&&(s=vn)){if(Jd(r))throw Gm(),Error(t(418));for(;s;)qm(r,s),s=pi(s.nextSibling)}if(Km(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){vn=pi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}vn=null}}else vn=yn?pi(r.stateNode.nextSibling):null;return!0}function Gm(){for(var r=vn;r;)r=pi(r.nextSibling)}function Ao(){vn=yn=null,tt=!1}function Zd(r){Kn===null?Kn=[r]:Kn.push(r)}var mT=le.ReactCurrentBatchConfig;function $a(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,r));var f=d,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var k=f.refs;E===null?delete k[g]:k[g]=E},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Su(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Qm(r){var s=r._init;return s(r._payload)}function Ym(r){function s(U,D){if(r){var B=U.deletions;B===null?(U.deletions=[D],U.flags|=16):B.push(D)}}function a(U,D){if(!r)return null;for(;D!==null;)s(U,D),D=D.sibling;return null}function d(U,D){for(U=new Map;D!==null;)D.key!==null?U.set(D.key,D):U.set(D.index,D),D=D.sibling;return U}function f(U,D){return U=Ai(U,D),U.index=0,U.sibling=null,U}function g(U,D,B){return U.index=B,r?(B=U.alternate,B!==null?(B=B.index,B<D?(U.flags|=2,D):B):(U.flags|=2,D)):(U.flags|=1048576,D)}function E(U){return r&&U.alternate===null&&(U.flags|=2),U}function k(U,D,B,ne){return D===null||D.tag!==6?(D=Wh(B,U.mode,ne),D.return=U,D):(D=f(D,B),D.return=U,D)}function N(U,D,B,ne){var ve=B.type;return ve===b?Z(U,D,B.props.children,ne,B.key):D!==null&&(D.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ht&&Qm(ve)===D.type)?(ne=f(D,B.props),ne.ref=$a(U,D,B),ne.return=U,ne):(ne=Gu(B.type,B.key,B.props,null,U.mode,ne),ne.ref=$a(U,D,B),ne.return=U,ne)}function $(U,D,B,ne){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=qh(B,U.mode,ne),D.return=U,D):(D=f(D,B.children||[]),D.return=U,D)}function Z(U,D,B,ne,ve){return D===null||D.tag!==7?(D=Is(B,U.mode,ne,ve),D.return=U,D):(D=f(D,B),D.return=U,D)}function ee(U,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Wh(""+D,U.mode,B),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ke:return B=Gu(D.type,D.key,D.props,null,U.mode,B),B.ref=$a(U,null,D),B.return=U,B;case Re:return D=qh(D,U.mode,B),D.return=U,D;case ht:var ne=D._init;return ee(U,ne(D._payload),B)}if(Cr(D)||_e(D))return D=Is(D,U.mode,B,null),D.return=U,D;Su(U,D)}return null}function J(U,D,B,ne){var ve=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return ve!==null?null:k(U,D,""+B,ne);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ke:return B.key===ve?N(U,D,B,ne):null;case Re:return B.key===ve?$(U,D,B,ne):null;case ht:return ve=B._init,J(U,D,ve(B._payload),ne)}if(Cr(B)||_e(B))return ve!==null?null:Z(U,D,B,ne,null);Su(U,B)}return null}function de(U,D,B,ne,ve){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return U=U.get(B)||null,k(D,U,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case ke:return U=U.get(ne.key===null?B:ne.key)||null,N(D,U,ne,ve);case Re:return U=U.get(ne.key===null?B:ne.key)||null,$(D,U,ne,ve);case ht:var Ee=ne._init;return de(U,D,B,Ee(ne._payload),ve)}if(Cr(ne)||_e(ne))return U=U.get(B)||null,Z(D,U,ne,ve,null);Su(D,ne)}return null}function me(U,D,B,ne){for(var ve=null,Ee=null,Te=D,Ae=D=0,Rt=null;Te!==null&&Ae<B.length;Ae++){Te.index>Ae?(Rt=Te,Te=null):Rt=Te.sibling;var Be=J(U,Te,B[Ae],ne);if(Be===null){Te===null&&(Te=Rt);break}r&&Te&&Be.alternate===null&&s(U,Te),D=g(Be,D,Ae),Ee===null?ve=Be:Ee.sibling=Be,Ee=Be,Te=Rt}if(Ae===B.length)return a(U,Te),tt&&ms(U,Ae),ve;if(Te===null){for(;Ae<B.length;Ae++)Te=ee(U,B[Ae],ne),Te!==null&&(D=g(Te,D,Ae),Ee===null?ve=Te:Ee.sibling=Te,Ee=Te);return tt&&ms(U,Ae),ve}for(Te=d(U,Te);Ae<B.length;Ae++)Rt=de(Te,U,Ae,B[Ae],ne),Rt!==null&&(r&&Rt.alternate!==null&&Te.delete(Rt.key===null?Ae:Rt.key),D=g(Rt,D,Ae),Ee===null?ve=Rt:Ee.sibling=Rt,Ee=Rt);return r&&Te.forEach(function(ki){return s(U,ki)}),tt&&ms(U,Ae),ve}function ye(U,D,B,ne){var ve=_e(B);if(typeof ve!="function")throw Error(t(150));if(B=ve.call(B),B==null)throw Error(t(151));for(var Ee=ve=null,Te=D,Ae=D=0,Rt=null,Be=B.next();Te!==null&&!Be.done;Ae++,Be=B.next()){Te.index>Ae?(Rt=Te,Te=null):Rt=Te.sibling;var ki=J(U,Te,Be.value,ne);if(ki===null){Te===null&&(Te=Rt);break}r&&Te&&ki.alternate===null&&s(U,Te),D=g(ki,D,Ae),Ee===null?ve=ki:Ee.sibling=ki,Ee=ki,Te=Rt}if(Be.done)return a(U,Te),tt&&ms(U,Ae),ve;if(Te===null){for(;!Be.done;Ae++,Be=B.next())Be=ee(U,Be.value,ne),Be!==null&&(D=g(Be,D,Ae),Ee===null?ve=Be:Ee.sibling=Be,Ee=Be);return tt&&ms(U,Ae),ve}for(Te=d(U,Te);!Be.done;Ae++,Be=B.next())Be=de(Te,U,Ae,Be.value,ne),Be!==null&&(r&&Be.alternate!==null&&Te.delete(Be.key===null?Ae:Be.key),D=g(Be,D,Ae),Ee===null?ve=Be:Ee.sibling=Be,Ee=Be);return r&&Te.forEach(function(GT){return s(U,GT)}),tt&&ms(U,Ae),ve}function lt(U,D,B,ne){if(typeof B=="object"&&B!==null&&B.type===b&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case ke:e:{for(var ve=B.key,Ee=D;Ee!==null;){if(Ee.key===ve){if(ve=B.type,ve===b){if(Ee.tag===7){a(U,Ee.sibling),D=f(Ee,B.props.children),D.return=U,U=D;break e}}else if(Ee.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ht&&Qm(ve)===Ee.type){a(U,Ee.sibling),D=f(Ee,B.props),D.ref=$a(U,Ee,B),D.return=U,U=D;break e}a(U,Ee);break}else s(U,Ee);Ee=Ee.sibling}B.type===b?(D=Is(B.props.children,U.mode,ne,B.key),D.return=U,U=D):(ne=Gu(B.type,B.key,B.props,null,U.mode,ne),ne.ref=$a(U,D,B),ne.return=U,U=ne)}return E(U);case Re:e:{for(Ee=B.key;D!==null;){if(D.key===Ee)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){a(U,D.sibling),D=f(D,B.children||[]),D.return=U,U=D;break e}else{a(U,D);break}else s(U,D);D=D.sibling}D=qh(B,U.mode,ne),D.return=U,U=D}return E(U);case ht:return Ee=B._init,lt(U,D,Ee(B._payload),ne)}if(Cr(B))return me(U,D,B,ne);if(_e(B))return ye(U,D,B,ne);Su(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,D!==null&&D.tag===6?(a(U,D.sibling),D=f(D,B),D.return=U,U=D):(a(U,D),D=Wh(B,U.mode,ne),D.return=U,U=D),E(U)):a(U,D)}return lt}var ko=Ym(!0),Jm=Ym(!1),Au=mi(null),ku=null,Co=null,eh=null;function th(){eh=Co=ku=null}function nh(r){var s=Au.current;Ze(Au),r._currentValue=s}function rh(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function Ro(r,s){ku=r,eh=Co=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(nn=!0),r.firstContext=null)}function Rn(r){var s=r._currentValue;if(eh!==r)if(r={context:r,memoizedValue:s,next:null},Co===null){if(ku===null)throw Error(t(308));Co=r,ku.dependencies={lanes:0,firstContext:r}}else Co=Co.next=r;return s}var gs=null;function ih(r){gs===null?gs=[r]:gs.push(r)}function Xm(r,s,a,d){var f=s.interleaved;return f===null?(a.next=a,ih(s)):(a.next=f.next,f.next=a),s.interleaved=a,Ur(r,d)}function Ur(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var vi=!1;function sh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Br(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function _i(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Fe&2)!==0){var f=d.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),d.pending=s,Ur(r,a)}return f=d.interleaved,f===null?(s.next=s,ih(d)):(s.next=f.next,f.next=s),d.interleaved=s,Ur(r,a)}function Cu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,li(r,a)}}function eg(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Ru(r,s,a,d){var f=r.updateQueue;vi=!1;var g=f.firstBaseUpdate,E=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var N=k,$=N.next;N.next=null,E===null?g=$:E.next=$,E=N;var Z=r.alternate;Z!==null&&(Z=Z.updateQueue,k=Z.lastBaseUpdate,k!==E&&(k===null?Z.firstBaseUpdate=$:k.next=$,Z.lastBaseUpdate=N))}if(g!==null){var ee=f.baseState;E=0,Z=$=N=null,k=g;do{var J=k.lane,de=k.eventTime;if((d&J)===J){Z!==null&&(Z=Z.next={eventTime:de,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var me=r,ye=k;switch(J=s,de=a,ye.tag){case 1:if(me=ye.payload,typeof me=="function"){ee=me.call(de,ee,J);break e}ee=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ye.payload,J=typeof me=="function"?me.call(de,ee,J):me,J==null)break e;ee=ae({},ee,J);break e;case 2:vi=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,J=f.effects,J===null?f.effects=[k]:J.push(k))}else de={eventTime:de,lane:J,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Z===null?($=Z=de,N=ee):Z=Z.next=de,E|=J;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;J=k,k=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);if(Z===null&&(N=ee),f.baseState=N,f.firstBaseUpdate=$,f.lastBaseUpdate=Z,s=f.shared.interleaved,s!==null){f=s;do E|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);_s|=E,r.lanes=E,r.memoizedState=ee}}function tg(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],f=d.callback;if(f!==null){if(d.callback=null,d=a,typeof f!="function")throw Error(t(191,f));f.call(d)}}}var Wa={},fr=mi(Wa),qa=mi(Wa),Ha=mi(Wa);function ys(r){if(r===Wa)throw Error(t(174));return r}function oh(r,s){switch(Qe(Ha,s),Qe(qa,r),Qe(fr,Wa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:_t(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=_t(s,r)}Ze(fr),Qe(fr,s)}function Po(){Ze(fr),Ze(qa),Ze(Ha)}function ng(r){ys(Ha.current);var s=ys(fr.current),a=_t(s,r.type);s!==a&&(Qe(qa,r),Qe(fr,a))}function ah(r){qa.current===r&&(Ze(fr),Ze(qa))}var nt=mi(0);function Pu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var lh=[];function uh(){for(var r=0;r<lh.length;r++)lh[r]._workInProgressVersionPrimary=null;lh.length=0}var xu=le.ReactCurrentDispatcher,ch=le.ReactCurrentBatchConfig,vs=0,rt=null,Et=null,kt=null,Nu=!1,Ka=!1,Ga=0,gT=0;function Ut(){throw Error(t(321))}function dh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Hn(r[a],s[a]))return!1;return!0}function hh(r,s,a,d,f,g){if(vs=g,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,xu.current=r===null||r.memoizedState===null?wT:ET,r=a(d,f),Ka){g=0;do{if(Ka=!1,Ga=0,25<=g)throw Error(t(301));g+=1,kt=Et=null,s.updateQueue=null,xu.current=TT,r=a(d,f)}while(Ka)}if(xu.current=Ou,s=Et!==null&&Et.next!==null,vs=0,kt=Et=rt=null,Nu=!1,s)throw Error(t(300));return r}function fh(){var r=Ga!==0;return Ga=0,r}function pr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?rt.memoizedState=kt=r:kt=kt.next=r,kt}function Pn(){if(Et===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=Et.next;var s=kt===null?rt.memoizedState:kt.next;if(s!==null)kt=s,Et=r;else{if(r===null)throw Error(t(310));Et=r,r={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},kt===null?rt.memoizedState=kt=r:kt=kt.next=r}return kt}function Qa(r,s){return typeof s=="function"?s(r):s}function ph(r){var s=Pn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=Et,f=d.baseQueue,g=a.pending;if(g!==null){if(f!==null){var E=f.next;f.next=g.next,g.next=E}d.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,d=d.baseState;var k=E=null,N=null,$=g;do{var Z=$.lane;if((vs&Z)===Z)N!==null&&(N=N.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),d=$.hasEagerState?$.eagerState:r(d,$.action);else{var ee={lane:Z,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};N===null?(k=N=ee,E=d):N=N.next=ee,rt.lanes|=Z,_s|=Z}$=$.next}while($!==null&&$!==g);N===null?E=d:N.next=k,Hn(d,s.memoizedState)||(nn=!0),s.memoizedState=d,s.baseState=E,s.baseQueue=N,a.lastRenderedState=d}if(r=a.interleaved,r!==null){f=r;do g=f.lane,rt.lanes|=g,_s|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function mh(r){var s=Pn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do g=r(g,E.action),E=E.next;while(E!==f);Hn(g,s.memoizedState)||(nn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,d]}function rg(){}function ig(r,s){var a=rt,d=Pn(),f=s(),g=!Hn(d.memoizedState,f);if(g&&(d.memoizedState=f,nn=!0),d=d.queue,gh(ag.bind(null,a,d,r),[r]),d.getSnapshot!==s||g||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,Ya(9,og.bind(null,a,d,f,s),void 0,null),Ct===null)throw Error(t(349));(vs&30)!==0||sg(a,s,f)}return f}function sg(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function og(r,s,a,d){s.value=a,s.getSnapshot=d,lg(s)&&ug(r)}function ag(r,s,a){return a(function(){lg(s)&&ug(r)})}function lg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Hn(r,a)}catch{return!0}}function ug(r){var s=Ur(r,1);s!==null&&Jn(s,r,1,-1)}function cg(r){var s=pr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:r},s.queue=r,r=r.dispatch=_T.bind(null,rt,r),[s.memoizedState,r]}function Ya(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function dg(){return Pn().memoizedState}function bu(r,s,a,d){var f=pr();rt.flags|=r,f.memoizedState=Ya(1|s,a,void 0,d===void 0?null:d)}function Du(r,s,a,d){var f=Pn();d=d===void 0?null:d;var g=void 0;if(Et!==null){var E=Et.memoizedState;if(g=E.destroy,d!==null&&dh(d,E.deps)){f.memoizedState=Ya(s,a,g,d);return}}rt.flags|=r,f.memoizedState=Ya(1|s,a,g,d)}function hg(r,s){return bu(8390656,8,r,s)}function gh(r,s){return Du(2048,8,r,s)}function fg(r,s){return Du(4,2,r,s)}function pg(r,s){return Du(4,4,r,s)}function mg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function gg(r,s,a){return a=a!=null?a.concat([r]):null,Du(4,4,mg.bind(null,s,r),a)}function yh(){}function yg(r,s){var a=Pn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&dh(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function vg(r,s){var a=Pn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&dh(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function _g(r,s,a){return(vs&21)===0?(r.baseState&&(r.baseState=!1,nn=!0),r.memoizedState=a):(Hn(a,s)||(a=as(),rt.lanes|=a,_s|=a,r.baseState=!0),s)}function yT(r,s){var a=Le;Le=a!==0&&4>a?a:4,r(!0);var d=ch.transition;ch.transition={};try{r(!1),s()}finally{Le=a,ch.transition=d}}function wg(){return Pn().memoizedState}function vT(r,s,a){var d=Ii(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Eg(r))Tg(s,a);else if(a=Xm(r,s,a,d),a!==null){var f=Yt();Jn(a,r,d,f),Ig(a,s,d)}}function _T(r,s,a){var d=Ii(r),f={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Eg(r))Tg(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,k=g(E,a);if(f.hasEagerState=!0,f.eagerState=k,Hn(k,E)){var N=s.interleaved;N===null?(f.next=f,ih(s)):(f.next=N.next,N.next=f),s.interleaved=f;return}}catch{}finally{}a=Xm(r,s,f,d),a!==null&&(f=Yt(),Jn(a,r,d,f),Ig(a,s,d))}}function Eg(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function Tg(r,s){Ka=Nu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Ig(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,li(r,a)}}var Ou={readContext:Rn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},wT={readContext:Rn,useCallback:function(r,s){return pr().memoizedState=[r,s===void 0?null:s],r},useContext:Rn,useEffect:hg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,bu(4194308,4,mg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return bu(4194308,4,r,s)},useInsertionEffect:function(r,s){return bu(4,2,r,s)},useMemo:function(r,s){var a=pr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=pr();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=vT.bind(null,rt,r),[d.memoizedState,r]},useRef:function(r){var s=pr();return r={current:r},s.memoizedState=r},useState:cg,useDebugValue:yh,useDeferredValue:function(r){return pr().memoizedState=r},useTransition:function(){var r=cg(!1),s=r[0];return r=yT.bind(null,r[1]),pr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=rt,f=pr();if(tt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Ct===null)throw Error(t(349));(vs&30)!==0||sg(d,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,hg(ag.bind(null,d,g,r),[r]),d.flags|=2048,Ya(9,og.bind(null,d,g,a,s),void 0,null),a},useId:function(){var r=pr(),s=Ct.identifierPrefix;if(tt){var a=Fr,d=jr;a=(d&~(1<<32-Kt(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ga++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=gT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},ET={readContext:Rn,useCallback:yg,useContext:Rn,useEffect:gh,useImperativeHandle:gg,useInsertionEffect:fg,useLayoutEffect:pg,useMemo:vg,useReducer:ph,useRef:dg,useState:function(){return ph(Qa)},useDebugValue:yh,useDeferredValue:function(r){var s=Pn();return _g(s,Et.memoizedState,r)},useTransition:function(){var r=ph(Qa)[0],s=Pn().memoizedState;return[r,s]},useMutableSource:rg,useSyncExternalStore:ig,useId:wg,unstable_isNewReconciler:!1},TT={readContext:Rn,useCallback:yg,useContext:Rn,useEffect:gh,useImperativeHandle:gg,useInsertionEffect:fg,useLayoutEffect:pg,useMemo:vg,useReducer:mh,useRef:dg,useState:function(){return mh(Qa)},useDebugValue:yh,useDeferredValue:function(r){var s=Pn();return Et===null?s.memoizedState=r:_g(s,Et.memoizedState,r)},useTransition:function(){var r=mh(Qa)[0],s=Pn().memoizedState;return[r,s]},useMutableSource:rg,useSyncExternalStore:ig,useId:wg,unstable_isNewReconciler:!1};function Gn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function vh(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Vu={isMounted:function(r){return(r=r._reactInternals)?Fn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=Yt(),f=Ii(r),g=Br(d,f);g.payload=s,a!=null&&(g.callback=a),s=_i(r,g,f),s!==null&&(Jn(s,r,f,d),Cu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=Yt(),f=Ii(r),g=Br(d,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=_i(r,g,f),s!==null&&(Jn(s,r,f,d),Cu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Yt(),d=Ii(r),f=Br(a,d);f.tag=2,s!=null&&(f.callback=s),s=_i(r,f,d),s!==null&&(Jn(s,r,d,a),Cu(s,r,d))}};function Sg(r,s,a,d,f,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,g,E):s.prototype&&s.prototype.isPureReactComponent?!La(a,d)||!La(f,g):!0}function Ag(r,s,a){var d=!1,f=gi,g=s.contextType;return typeof g=="object"&&g!==null?g=Rn(g):(f=tn(s)?fs:Ft.current,d=s.contextTypes,g=(d=d!=null)?To(r,f):gi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Vu,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function kg(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&Vu.enqueueReplaceState(s,s.state,null)}function _h(r,s,a,d){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},sh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Rn(g):(g=tn(s)?fs:Ft.current,f.context=To(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(vh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Vu.enqueueReplaceState(f,f.state,null),Ru(r,a,f,d),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function xo(r,s){try{var a="",d=s;do a+=he(d),d=d.return;while(d);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function wh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Eh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var IT=typeof WeakMap=="function"?WeakMap:Map;function Cg(r,s,a){a=Br(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){zu||(zu=!0,Lh=d),Eh(r,s)},a}function Rg(r,s,a){a=Br(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var f=s.value;a.payload=function(){return d(f)},a.callback=function(){Eh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Eh(r,s),typeof d!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function Pg(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new IT;var f=new Set;d.set(s,f)}else f=d.get(s),f===void 0&&(f=new Set,d.set(s,f));f.has(a)||(f.add(a),r=MT.bind(null,r,s,a),s.then(r,r))}function xg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ng(r,s,a,d,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Br(-1,1),s.tag=2,_i(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var ST=le.ReactCurrentOwner,nn=!1;function Qt(r,s,a,d){s.child=r===null?Jm(s,null,a,d):ko(s,r.child,a,d)}function bg(r,s,a,d,f){a=a.render;var g=s.ref;return Ro(s,f),d=hh(r,s,a,d,g,f),a=fh(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,zr(r,s,f)):(tt&&a&&Qd(s),s.flags|=1,Qt(r,s,d,f),s.child)}function Dg(r,s,a,d,f){if(r===null){var g=a.type;return typeof g=="function"&&!$h(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Og(r,s,g,d,f)):(r=Gu(a.type,null,d,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:La,a(E,d)&&r.ref===s.ref)return zr(r,s,f)}return s.flags|=1,r=Ai(g,d),r.ref=s.ref,r.return=s,s.child=r}function Og(r,s,a,d,f){if(r!==null){var g=r.memoizedProps;if(La(g,d)&&r.ref===s.ref)if(nn=!1,s.pendingProps=d=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(nn=!0);else return s.lanes=r.lanes,zr(r,s,f)}return Th(r,s,a,d,f)}function Vg(r,s,a){var d=s.pendingProps,f=d.children,g=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(bo,_n),_n|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Qe(bo,_n),_n|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=g!==null?g.baseLanes:a,Qe(bo,_n),_n|=d}else g!==null?(d=g.baseLanes|a,s.memoizedState=null):d=a,Qe(bo,_n),_n|=d;return Qt(r,s,f,a),s.child}function Lg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Th(r,s,a,d,f){var g=tn(a)?fs:Ft.current;return g=To(s,g),Ro(s,f),a=hh(r,s,a,d,g,f),d=fh(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,zr(r,s,f)):(tt&&d&&Qd(s),s.flags|=1,Qt(r,s,a,f),s.child)}function Mg(r,s,a,d,f){if(tn(a)){var g=!0;_u(s)}else g=!1;if(Ro(s,f),s.stateNode===null)Mu(r,s),Ag(s,a,d),_h(s,a,d,f),d=!0;else if(r===null){var E=s.stateNode,k=s.memoizedProps;E.props=k;var N=E.context,$=a.contextType;typeof $=="object"&&$!==null?$=Rn($):($=tn(a)?fs:Ft.current,$=To(s,$));var Z=a.getDerivedStateFromProps,ee=typeof Z=="function"||typeof E.getSnapshotBeforeUpdate=="function";ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==d||N!==$)&&kg(s,E,d,$),vi=!1;var J=s.memoizedState;E.state=J,Ru(s,d,E,f),N=s.memoizedState,k!==d||J!==N||en.current||vi?(typeof Z=="function"&&(vh(s,a,Z,d),N=s.memoizedState),(k=vi||Sg(s,a,k,d,J,N,$))?(ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=N),E.props=d,E.state=N,E.context=$,d=k):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{E=s.stateNode,Zm(r,s),k=s.memoizedProps,$=s.type===s.elementType?k:Gn(s.type,k),E.props=$,ee=s.pendingProps,J=E.context,N=a.contextType,typeof N=="object"&&N!==null?N=Rn(N):(N=tn(a)?fs:Ft.current,N=To(s,N));var de=a.getDerivedStateFromProps;(Z=typeof de=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==ee||J!==N)&&kg(s,E,d,N),vi=!1,J=s.memoizedState,E.state=J,Ru(s,d,E,f);var me=s.memoizedState;k!==ee||J!==me||en.current||vi?(typeof de=="function"&&(vh(s,a,de,d),me=s.memoizedState),($=vi||Sg(s,a,$,d,J,me,N)||!1)?(Z||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(d,me,N),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(d,me,N)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||k===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=me),E.props=d,E.state=me,E.context=N,d=$):(typeof E.componentDidUpdate!="function"||k===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),d=!1)}return Ih(r,s,a,d,g,f)}function Ih(r,s,a,d,f,g){Lg(r,s);var E=(s.flags&128)!==0;if(!d&&!E)return f&&zm(s,a,!1),zr(r,s,g);d=s.stateNode,ST.current=s;var k=E&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&E?(s.child=ko(s,r.child,null,g),s.child=ko(s,null,k,g)):Qt(r,s,k,g),s.memoizedState=d.state,f&&zm(s,a,!0),s.child}function jg(r){var s=r.stateNode;s.pendingContext?Um(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Um(r,s.context,!1),oh(r,s.containerInfo)}function Fg(r,s,a,d,f){return Ao(),Zd(f),s.flags|=256,Qt(r,s,a,d),s.child}var Sh={dehydrated:null,treeContext:null,retryLane:0};function Ah(r){return{baseLanes:r,cachePool:null,transitions:null}}function Ug(r,s,a){var d=s.pendingProps,f=nt.current,g=!1,E=(s.flags&128)!==0,k;if((k=E)||(k=r!==null&&r.memoizedState===null?!1:(f&2)!==0),k?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Qe(nt,f&1),r===null)return Xd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=d.children,r=d.fallback,g?(d=s.mode,g=s.child,E={mode:"hidden",children:E},(d&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Qu(E,d,0,null),r=Is(r,d,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Ah(a),s.memoizedState=Sh,r):kh(s,E));if(f=r.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return AT(r,s,E,d,k,f,a);if(g){g=d.fallback,E=s.mode,f=r.child,k=f.sibling;var N={mode:"hidden",children:d.children};return(E&1)===0&&s.child!==f?(d=s.child,d.childLanes=0,d.pendingProps=N,s.deletions=null):(d=Ai(f,N),d.subtreeFlags=f.subtreeFlags&14680064),k!==null?g=Ai(k,g):(g=Is(g,E,a,null),g.flags|=2),g.return=s,d.return=s,d.sibling=g,s.child=d,d=g,g=s.child,E=r.child.memoizedState,E=E===null?Ah(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~a,s.memoizedState=Sh,d}return g=r.child,r=g.sibling,d=Ai(g,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function kh(r,s){return s=Qu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Lu(r,s,a,d){return d!==null&&Zd(d),ko(s,r.child,null,a),r=kh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function AT(r,s,a,d,f,g,E){if(a)return s.flags&256?(s.flags&=-257,d=wh(Error(t(422))),Lu(r,s,E,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=d.fallback,f=s.mode,d=Qu({mode:"visible",children:d.children},f,0,null),g=Is(g,f,E,null),g.flags|=2,d.return=s,g.return=s,d.sibling=g,s.child=d,(s.mode&1)!==0&&ko(s,r.child,null,E),s.child.memoizedState=Ah(E),s.memoizedState=Sh,g);if((s.mode&1)===0)return Lu(r,s,E,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var k=d.dgst;return d=k,g=Error(t(419)),d=wh(g,d,void 0),Lu(r,s,E,d)}if(k=(E&r.childLanes)!==0,nn||k){if(d=Ct,d!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|E))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ur(r,f),Jn(d,r,f,-1))}return zh(),d=wh(Error(t(421))),Lu(r,s,E,d)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=jT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,vn=pi(f.nextSibling),yn=s,tt=!0,Kn=null,r!==null&&(kn[Cn++]=jr,kn[Cn++]=Fr,kn[Cn++]=ps,jr=r.id,Fr=r.overflow,ps=s),s=kh(s,d.children),s.flags|=4096,s)}function Bg(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),rh(r.return,s,a)}function Ch(r,s,a,d,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=a,g.tailMode=f)}function zg(r,s,a){var d=s.pendingProps,f=d.revealOrder,g=d.tail;if(Qt(r,s,d.children,a),d=nt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Bg(r,a,s);else if(r.tag===19)Bg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Qe(nt,d),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Pu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Ch(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Pu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Ch(s,!0,a,null,g);break;case"together":Ch(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Mu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function zr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),_s|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ai(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ai(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function kT(r,s,a){switch(s.tag){case 3:jg(s),Ao();break;case 5:ng(s);break;case 1:tn(s.type)&&_u(s);break;case 4:oh(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,f=s.memoizedProps.value;Qe(Au,d._currentValue),d._currentValue=f;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Qe(nt,nt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Ug(r,s,a):(Qe(nt,nt.current&1),r=zr(r,s,a),r!==null?r.sibling:null);Qe(nt,nt.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return zg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qe(nt,nt.current),d)break;return null;case 22:case 23:return s.lanes=0,Vg(r,s,a)}return zr(r,s,a)}var $g,Rh,Wg,qg;$g=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Rh=function(){},Wg=function(r,s,a,d){var f=r.memoizedProps;if(f!==d){r=s.stateNode,ys(fr.current);var g=null;switch(a){case"input":f=Nt(r,f),d=Nt(r,d),g=[];break;case"select":f=ae({},f,{value:void 0}),d=ae({},d,{value:void 0}),g=[];break;case"textarea":f=da(r,f),d=da(r,d),g=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=gu)}ya(a,d);var E;a=null;for($ in f)if(!d.hasOwnProperty($)&&f.hasOwnProperty($)&&f[$]!=null)if($==="style"){var k=f[$];for(E in k)k.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in d){var N=d[$];if(k=f!=null?f[$]:void 0,d.hasOwnProperty($)&&N!==k&&(N!=null||k!=null))if($==="style")if(k){for(E in k)!k.hasOwnProperty(E)||N&&N.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in N)N.hasOwnProperty(E)&&k[E]!==N[E]&&(a||(a={}),a[E]=N[E])}else a||(g||(g=[]),g.push($,a)),a=N;else $==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,k=k?k.__html:void 0,N!=null&&k!==N&&(g=g||[]).push($,N)):$==="children"?typeof N!="string"&&typeof N!="number"||(g=g||[]).push($,""+N):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(N!=null&&$==="onScroll"&&Xe("scroll",r),g||k===N||(g=[])):(g=g||[]).push($,N))}a&&(g=g||[]).push("style",a);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},qg=function(r,s,a,d){a!==d&&(s.flags|=4)};function Ja(r,s){if(!tt)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Bt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function CT(r,s,a){var d=s.pendingProps;switch(Yd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(s),null;case 1:return tn(s.type)&&vu(),Bt(s),null;case 3:return d=s.stateNode,Po(),Ze(en),Ze(Ft),uh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(Iu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Kn!==null&&(Fh(Kn),Kn=null))),Rh(r,s),Bt(s),null;case 5:ah(s);var f=ys(Ha.current);if(a=s.type,r!==null&&s.stateNode!=null)Wg(r,s,a,d,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Bt(s),null}if(r=ys(fr.current),Iu(s)){d=s.stateNode,a=s.type;var g=s.memoizedProps;switch(d[hr]=s,d[Ba]=g,r=(s.mode&1)!==0,a){case"dialog":Xe("cancel",d),Xe("close",d);break;case"iframe":case"object":case"embed":Xe("load",d);break;case"video":case"audio":for(f=0;f<ja.length;f++)Xe(ja[f],d);break;case"source":Xe("error",d);break;case"img":case"image":case"link":Xe("error",d),Xe("load",d);break;case"details":Xe("toggle",d);break;case"input":$s(d,g),Xe("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!g.multiple},Xe("invalid",d);break;case"textarea":qs(d,g),Xe("invalid",d)}ya(a,g),f=null;for(var E in g)if(g.hasOwnProperty(E)){var k=g[E];E==="children"?typeof k=="string"?d.textContent!==k&&(g.suppressHydrationWarning!==!0&&mu(d.textContent,k,r),f=["children",k]):typeof k=="number"&&d.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&mu(d.textContent,k,r),f=["children",""+k]):o.hasOwnProperty(E)&&k!=null&&E==="onScroll"&&Xe("scroll",d)}switch(a){case"input":St(d),Bl(d,g,!0);break;case"textarea":St(d),ha(d);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(d.onclick=gu)}d=f,s.updateQueue=d,d!==null&&(s.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=vt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=E.createElement(a,{is:d.is}):(r=E.createElement(a),a==="select"&&(E=r,d.multiple?E.multiple=!0:d.size&&(E.size=d.size))):r=E.createElementNS(r,a),r[hr]=s,r[Ba]=d,$g(r,s,!1,!1),s.stateNode=r;e:{switch(E=va(a,d),a){case"dialog":Xe("cancel",r),Xe("close",r),f=d;break;case"iframe":case"object":case"embed":Xe("load",r),f=d;break;case"video":case"audio":for(f=0;f<ja.length;f++)Xe(ja[f],r);f=d;break;case"source":Xe("error",r),f=d;break;case"img":case"image":case"link":Xe("error",r),Xe("load",r),f=d;break;case"details":Xe("toggle",r),f=d;break;case"input":$s(r,d),f=Nt(r,d),Xe("invalid",r);break;case"option":f=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},f=ae({},d,{value:void 0}),Xe("invalid",r);break;case"textarea":qs(r,d),f=da(r,d),Xe("invalid",r);break;default:f=d}ya(a,f),k=f;for(g in k)if(k.hasOwnProperty(g)){var N=k[g];g==="style"?ma(r,N):g==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&fa(r,N)):g==="children"?typeof N=="string"?(a!=="textarea"||N!=="")&&ri(r,N):typeof N=="number"&&ri(r,""+N):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?N!=null&&g==="onScroll"&&Xe("scroll",r):N!=null&&X(r,g,N,E))}switch(a){case"input":St(r),Bl(r,d,!1);break;case"textarea":St(r),ha(r);break;case"option":d.value!=null&&r.setAttribute("value",""+ge(d.value));break;case"select":r.multiple=!!d.multiple,g=d.value,g!=null?Rr(r,!!d.multiple,g,!1):d.defaultValue!=null&&Rr(r,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=gu)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Bt(s),null;case 6:if(r&&s.stateNode!=null)qg(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=ys(Ha.current),ys(fr.current),Iu(s)){if(d=s.stateNode,a=s.memoizedProps,d[hr]=s,(g=d.nodeValue!==a)&&(r=yn,r!==null))switch(r.tag){case 3:mu(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&mu(d.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[hr]=s,s.stateNode=d}return Bt(s),null;case 13:if(Ze(nt),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(tt&&vn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Gm(),Ao(),s.flags|=98560,g=!1;else if(g=Iu(s),d!==null&&d.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[hr]=s}else Ao(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Bt(s),g=!1}else Kn!==null&&(Fh(Kn),Kn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(nt.current&1)!==0?Tt===0&&(Tt=3):zh())),s.updateQueue!==null&&(s.flags|=4),Bt(s),null);case 4:return Po(),Rh(r,s),r===null&&Fa(s.stateNode.containerInfo),Bt(s),null;case 10:return nh(s.type._context),Bt(s),null;case 17:return tn(s.type)&&vu(),Bt(s),null;case 19:if(Ze(nt),g=s.memoizedState,g===null)return Bt(s),null;if(d=(s.flags&128)!==0,E=g.rendering,E===null)if(d)Ja(g,!1);else{if(Tt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=Pu(r),E!==null){for(s.flags|=128,Ja(g,!1),d=E.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)g=a,r=d,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Qe(nt,nt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ge()>Do&&(s.flags|=128,d=!0,Ja(g,!1),s.lanes=4194304)}else{if(!d)if(r=Pu(E),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ja(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!tt)return Bt(s),null}else 2*Ge()-g.renderingStartTime>Do&&a!==1073741824&&(s.flags|=128,d=!0,Ja(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(a=g.last,a!==null?a.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ge(),s.sibling=null,a=nt.current,Qe(nt,d?a&1|2:a&1),s):(Bt(s),null);case 22:case 23:return Bh(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(_n&1073741824)!==0&&(Bt(s),s.subtreeFlags&6&&(s.flags|=8192)):Bt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function RT(r,s){switch(Yd(s),s.tag){case 1:return tn(s.type)&&vu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Po(),Ze(en),Ze(Ft),uh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return ah(s),null;case 13:if(Ze(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ao()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ze(nt),null;case 4:return Po(),null;case 10:return nh(s.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var ju=!1,zt=!1,PT=typeof WeakSet=="function"?WeakSet:Set,pe=null;function No(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){st(r,s,d)}else a.current=null}function Ph(r,s,a){try{a()}catch(d){st(r,s,d)}}var Hg=!1;function xT(r,s){if(Bd=di,r=Sm(),Dd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var f=d.anchorOffset,g=d.focusNode;d=d.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,k=-1,N=-1,$=0,Z=0,ee=r,J=null;t:for(;;){for(var de;ee!==a||f!==0&&ee.nodeType!==3||(k=E+f),ee!==g||d!==0&&ee.nodeType!==3||(N=E+d),ee.nodeType===3&&(E+=ee.nodeValue.length),(de=ee.firstChild)!==null;)J=ee,ee=de;for(;;){if(ee===r)break t;if(J===a&&++$===f&&(k=E),J===g&&++Z===d&&(N=E),(de=ee.nextSibling)!==null)break;ee=J,J=ee.parentNode}ee=de}a=k===-1||N===-1?null:{start:k,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(zd={focusedElem:r,selectionRange:a},di=!1,pe=s;pe!==null;)if(s=pe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,pe=r;else for(;pe!==null;){s=pe;try{var me=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ye=me.memoizedProps,lt=me.memoizedState,U=s.stateNode,D=U.getSnapshotBeforeUpdate(s.elementType===s.type?ye:Gn(s.type,ye),lt);U.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){st(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,pe=r;break}pe=s.return}return me=Hg,Hg=!1,me}function Xa(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Ph(s,a,g)}f=f.next}while(f!==d)}}function Fu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function xh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Kg(r){var s=r.alternate;s!==null&&(r.alternate=null,Kg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[hr],delete s[Ba],delete s[Hd],delete s[hT],delete s[fT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Gg(r){return r.tag===5||r.tag===3||r.tag===4}function Qg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Gg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Nh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=gu));else if(d!==4&&(r=r.child,r!==null))for(Nh(r,s,a),r=r.sibling;r!==null;)Nh(r,s,a),r=r.sibling}function bh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(bh(r,s,a),r=r.sibling;r!==null;)bh(r,s,a),r=r.sibling}var Ot=null,Qn=!1;function wi(r,s,a){for(a=a.child;a!==null;)Yg(r,s,a),a=a.sibling}function Yg(r,s,a){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(ss,a)}catch{}switch(a.tag){case 5:zt||No(a,s);case 6:var d=Ot,f=Qn;Ot=null,wi(r,s,a),Ot=d,Qn=f,Ot!==null&&(Qn?(r=Ot,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ot.removeChild(a.stateNode));break;case 18:Ot!==null&&(Qn?(r=Ot,a=a.stateNode,r.nodeType===8?qd(r.parentNode,a):r.nodeType===1&&qd(r,a),Wn(r)):qd(Ot,a.stateNode));break;case 4:d=Ot,f=Qn,Ot=a.stateNode.containerInfo,Qn=!0,wi(r,s,a),Ot=d,Qn=f;break;case 0:case 11:case 14:case 15:if(!zt&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var g=f,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Ph(a,s,E),f=f.next}while(f!==d)}wi(r,s,a);break;case 1:if(!zt&&(No(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(k){st(a,s,k)}wi(r,s,a);break;case 21:wi(r,s,a);break;case 22:a.mode&1?(zt=(d=zt)||a.memoizedState!==null,wi(r,s,a),zt=d):wi(r,s,a);break;default:wi(r,s,a)}}function Jg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new PT),s.forEach(function(d){var f=FT.bind(null,r,d);a.has(d)||(a.add(d),d.then(f,f))})}}function Yn(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var f=a[d];try{var g=r,E=s,k=E;e:for(;k!==null;){switch(k.tag){case 5:Ot=k.stateNode,Qn=!1;break e;case 3:Ot=k.stateNode.containerInfo,Qn=!0;break e;case 4:Ot=k.stateNode.containerInfo,Qn=!0;break e}k=k.return}if(Ot===null)throw Error(t(160));Yg(g,E,f),Ot=null,Qn=!1;var N=f.alternate;N!==null&&(N.return=null),f.return=null}catch($){st(f,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Xg(s,r),s=s.sibling}function Xg(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Yn(s,r),mr(r),d&4){try{Xa(3,r,r.return),Fu(3,r)}catch(ye){st(r,r.return,ye)}try{Xa(5,r,r.return)}catch(ye){st(r,r.return,ye)}}break;case 1:Yn(s,r),mr(r),d&512&&a!==null&&No(a,a.return);break;case 5:if(Yn(s,r),mr(r),d&512&&a!==null&&No(a,a.return),r.flags&32){var f=r.stateNode;try{ri(f,"")}catch(ye){st(r,r.return,ye)}}if(d&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,E=a!==null?a.memoizedProps:g,k=r.type,N=r.updateQueue;if(r.updateQueue=null,N!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&ua(f,g),va(k,E);var $=va(k,g);for(E=0;E<N.length;E+=2){var Z=N[E],ee=N[E+1];Z==="style"?ma(f,ee):Z==="dangerouslySetInnerHTML"?fa(f,ee):Z==="children"?ri(f,ee):X(f,Z,ee,$)}switch(k){case"input":ca(f,g);break;case"textarea":Hs(f,g);break;case"select":var J=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var de=g.value;de!=null?Rr(f,!!g.multiple,de,!1):J!==!!g.multiple&&(g.defaultValue!=null?Rr(f,!!g.multiple,g.defaultValue,!0):Rr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ba]=g}catch(ye){st(r,r.return,ye)}}break;case 6:if(Yn(s,r),mr(r),d&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ye){st(r,r.return,ye)}}break;case 3:if(Yn(s,r),mr(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{Wn(s.containerInfo)}catch(ye){st(r,r.return,ye)}break;case 4:Yn(s,r),mr(r);break;case 13:Yn(s,r),mr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Vh=Ge())),d&4&&Jg(r);break;case 22:if(Z=a!==null&&a.memoizedState!==null,r.mode&1?(zt=($=zt)||Z,Yn(s,r),zt=$):Yn(s,r),mr(r),d&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!Z&&(r.mode&1)!==0)for(pe=r,Z=r.child;Z!==null;){for(ee=pe=Z;pe!==null;){switch(J=pe,de=J.child,J.tag){case 0:case 11:case 14:case 15:Xa(4,J,J.return);break;case 1:No(J,J.return);var me=J.stateNode;if(typeof me.componentWillUnmount=="function"){d=J,a=J.return;try{s=d,me.props=s.memoizedProps,me.state=s.memoizedState,me.componentWillUnmount()}catch(ye){st(d,a,ye)}}break;case 5:No(J,J.return);break;case 22:if(J.memoizedState!==null){ty(ee);continue}}de!==null?(de.return=J,pe=de):ty(ee)}Z=Z.sibling}e:for(Z=null,ee=r;;){if(ee.tag===5){if(Z===null){Z=ee;try{f=ee.stateNode,$?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=ee.stateNode,N=ee.memoizedProps.style,E=N!=null&&N.hasOwnProperty("display")?N.display:null,k.style.display=pa("display",E))}catch(ye){st(r,r.return,ye)}}}else if(ee.tag===6){if(Z===null)try{ee.stateNode.nodeValue=$?"":ee.memoizedProps}catch(ye){st(r,r.return,ye)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===r)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===r)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===r)break e;Z===ee&&(Z=null),ee=ee.return}Z===ee&&(Z=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:Yn(s,r),mr(r),d&4&&Jg(r);break;case 21:break;default:Yn(s,r),mr(r)}}function mr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Gg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(ri(f,""),d.flags&=-33);var g=Qg(r);bh(r,g,f);break;case 3:case 4:var E=d.stateNode.containerInfo,k=Qg(r);Nh(r,k,E);break;default:throw Error(t(161))}}catch(N){st(r,r.return,N)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function NT(r,s,a){pe=r,Zg(r)}function Zg(r,s,a){for(var d=(r.mode&1)!==0;pe!==null;){var f=pe,g=f.child;if(f.tag===22&&d){var E=f.memoizedState!==null||ju;if(!E){var k=f.alternate,N=k!==null&&k.memoizedState!==null||zt;k=ju;var $=zt;if(ju=E,(zt=N)&&!$)for(pe=f;pe!==null;)E=pe,N=E.child,E.tag===22&&E.memoizedState!==null?ny(f):N!==null?(N.return=E,pe=N):ny(f);for(;g!==null;)pe=g,Zg(g),g=g.sibling;pe=f,ju=k,zt=$}ey(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,pe=g):ey(r)}}function ey(r){for(;pe!==null;){var s=pe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:zt||Fu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!zt)if(a===null)d.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Gn(s.type,a.memoizedProps);d.componentDidUpdate(f,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&tg(s,g,d);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}tg(s,E,a)}break;case 5:var k=s.stateNode;if(a===null&&s.flags&4){a=k;var N=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&a.focus();break;case"img":N.src&&(a.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var Z=$.memoizedState;if(Z!==null){var ee=Z.dehydrated;ee!==null&&Wn(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||s.flags&512&&xh(s)}catch(J){st(s,s.return,J)}}if(s===r){pe=null;break}if(a=s.sibling,a!==null){a.return=s.return,pe=a;break}pe=s.return}}function ty(r){for(;pe!==null;){var s=pe;if(s===r){pe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,pe=a;break}pe=s.return}}function ny(r){for(;pe!==null;){var s=pe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Fu(4,s)}catch(N){st(s,a,N)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var f=s.return;try{d.componentDidMount()}catch(N){st(s,f,N)}}var g=s.return;try{xh(s)}catch(N){st(s,g,N)}break;case 5:var E=s.return;try{xh(s)}catch(N){st(s,E,N)}}}catch(N){st(s,s.return,N)}if(s===r){pe=null;break}var k=s.sibling;if(k!==null){k.return=s.return,pe=k;break}pe=s.return}}var bT=Math.ceil,Uu=le.ReactCurrentDispatcher,Dh=le.ReactCurrentOwner,xn=le.ReactCurrentBatchConfig,Fe=0,Ct=null,pt=null,Vt=0,_n=0,bo=mi(0),Tt=0,Za=null,_s=0,Bu=0,Oh=0,el=null,rn=null,Vh=0,Do=1/0,$r=null,zu=!1,Lh=null,Ei=null,$u=!1,Ti=null,Wu=0,tl=0,Mh=null,qu=-1,Hu=0;function Yt(){return(Fe&6)!==0?Ge():qu!==-1?qu:qu=Ge()}function Ii(r){return(r.mode&1)===0?1:(Fe&2)!==0&&Vt!==0?Vt&-Vt:mT.transition!==null?(Hu===0&&(Hu=as()),Hu):(r=Le,r!==0||(r=window.event,r=r===void 0?16:Pa(r.type)),r)}function Jn(r,s,a,d){if(50<tl)throw tl=0,Mh=null,Error(t(185));ai(r,a,d),((Fe&2)===0||r!==Ct)&&(r===Ct&&((Fe&2)===0&&(Bu|=a),Tt===4&&Si(r,Vt)),sn(r,d),a===1&&Fe===0&&(s.mode&1)===0&&(Do=Ge()+500,wu&&yi()))}function sn(r,s){var a=r.callbackNode;Nr(r,s);var d=os(r,r===Ct?Vt:0);if(d===0)a!==null&&Sa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&Sa(a),s===1)r.tag===0?pT(iy.bind(null,r)):$m(iy.bind(null,r)),cT(function(){(Fe&6)===0&&yi()}),a=null;else{switch(ui(d)){case 1:a=is;break;case 4:a=ii;break;case 16:a=In;break;case 536870912:a=Hl;break;default:a=In}a=hy(a,ry.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function ry(r,s){if(qu=-1,Hu=0,(Fe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Oo()&&r.callbackNode!==a)return null;var d=os(r,r===Ct?Vt:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=Ku(r,d);else{s=d;var f=Fe;Fe|=2;var g=oy();(Ct!==r||Vt!==s)&&($r=null,Do=Ge()+500,Es(r,s));do try{VT();break}catch(k){sy(r,k)}while(!0);th(),Uu.current=g,Fe=f,pt!==null?s=0:(Ct=null,Vt=0,s=Tt)}if(s!==0){if(s===2&&(f=pn(r),f!==0&&(d=f,s=jh(r,f))),s===1)throw a=Za,Es(r,0),Si(r,d),sn(r,Ge()),a;if(s===6)Si(r,d);else{if(f=r.current.alternate,(d&30)===0&&!DT(f)&&(s=Ku(r,d),s===2&&(g=pn(r),g!==0&&(d=g,s=jh(r,g))),s===1))throw a=Za,Es(r,0),Si(r,d),sn(r,Ge()),a;switch(r.finishedWork=f,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Ts(r,rn,$r);break;case 3:if(Si(r,d),(d&130023424)===d&&(s=Vh+500-Ge(),10<s)){if(os(r,0)!==0)break;if(f=r.suspendedLanes,(f&d)!==d){Yt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Wd(Ts.bind(null,r,rn,$r),s);break}Ts(r,rn,$r);break;case 4:if(Si(r,d),(d&4194240)===d)break;for(s=r.eventTimes,f=-1;0<d;){var E=31-Kt(d);g=1<<E,E=s[E],E>f&&(f=E),d&=~g}if(d=f,d=Ge()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*bT(d/1960))-d,10<d){r.timeoutHandle=Wd(Ts.bind(null,r,rn,$r),d);break}Ts(r,rn,$r);break;case 5:Ts(r,rn,$r);break;default:throw Error(t(329))}}}return sn(r,Ge()),r.callbackNode===a?ry.bind(null,r):null}function jh(r,s){var a=el;return r.current.memoizedState.isDehydrated&&(Es(r,s).flags|=256),r=Ku(r,s),r!==2&&(s=rn,rn=a,s!==null&&Fh(s)),r}function Fh(r){rn===null?rn=r:rn.push.apply(rn,r)}function DT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var f=a[d],g=f.getSnapshot;f=f.value;try{if(!Hn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Si(r,s){for(s&=~Oh,s&=~Bu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Kt(s),d=1<<a;r[a]=-1,s&=~d}}function iy(r){if((Fe&6)!==0)throw Error(t(327));Oo();var s=os(r,0);if((s&1)===0)return sn(r,Ge()),null;var a=Ku(r,s);if(r.tag!==0&&a===2){var d=pn(r);d!==0&&(s=d,a=jh(r,d))}if(a===1)throw a=Za,Es(r,0),Si(r,s),sn(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ts(r,rn,$r),sn(r,Ge()),null}function Uh(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(Do=Ge()+500,wu&&yi())}}function ws(r){Ti!==null&&Ti.tag===0&&(Fe&6)===0&&Oo();var s=Fe;Fe|=1;var a=xn.transition,d=Le;try{if(xn.transition=null,Le=1,r)return r()}finally{Le=d,xn.transition=a,Fe=s,(Fe&6)===0&&yi()}}function Bh(){_n=bo.current,Ze(bo)}function Es(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,uT(a)),pt!==null)for(a=pt.return;a!==null;){var d=a;switch(Yd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&vu();break;case 3:Po(),Ze(en),Ze(Ft),uh();break;case 5:ah(d);break;case 4:Po();break;case 13:Ze(nt);break;case 19:Ze(nt);break;case 10:nh(d.type._context);break;case 22:case 23:Bh()}a=a.return}if(Ct=r,pt=r=Ai(r.current,null),Vt=_n=s,Tt=0,Za=null,Oh=Bu=_s=0,rn=el=null,gs!==null){for(s=0;s<gs.length;s++)if(a=gs[s],d=a.interleaved,d!==null){a.interleaved=null;var f=d.next,g=a.pending;if(g!==null){var E=g.next;g.next=f,d.next=E}a.pending=d}gs=null}return r}function sy(r,s){do{var a=pt;try{if(th(),xu.current=Ou,Nu){for(var d=rt.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Nu=!1}if(vs=0,kt=Et=rt=null,Ka=!1,Ga=0,Dh.current=null,a===null||a.return===null){Tt=1,Za=s,pt=null;break}e:{var g=r,E=a.return,k=a,N=s;if(s=Vt,k.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var $=N,Z=k,ee=Z.tag;if((Z.mode&1)===0&&(ee===0||ee===11||ee===15)){var J=Z.alternate;J?(Z.updateQueue=J.updateQueue,Z.memoizedState=J.memoizedState,Z.lanes=J.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var de=xg(E);if(de!==null){de.flags&=-257,Ng(de,E,k,g,s),de.mode&1&&Pg(g,$,s),s=de,N=$;var me=s.updateQueue;if(me===null){var ye=new Set;ye.add(N),s.updateQueue=ye}else me.add(N);break e}else{if((s&1)===0){Pg(g,$,s),zh();break e}N=Error(t(426))}}else if(tt&&k.mode&1){var lt=xg(E);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Ng(lt,E,k,g,s),Zd(xo(N,k));break e}}g=N=xo(N,k),Tt!==4&&(Tt=2),el===null?el=[g]:el.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=Cg(g,N,s);eg(g,U);break e;case 1:k=N;var D=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Ei===null||!Ei.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=Rg(g,k,s);eg(g,ne);break e}}g=g.return}while(g!==null)}ly(a)}catch(ve){s=ve,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function oy(){var r=Uu.current;return Uu.current=Ou,r===null?Ou:r}function zh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Ct===null||(_s&268435455)===0&&(Bu&268435455)===0||Si(Ct,Vt)}function Ku(r,s){var a=Fe;Fe|=2;var d=oy();(Ct!==r||Vt!==s)&&($r=null,Es(r,s));do try{OT();break}catch(f){sy(r,f)}while(!0);if(th(),Fe=a,Uu.current=d,pt!==null)throw Error(t(261));return Ct=null,Vt=0,Tt}function OT(){for(;pt!==null;)ay(pt)}function VT(){for(;pt!==null&&!Wl();)ay(pt)}function ay(r){var s=dy(r.alternate,r,_n);r.memoizedProps=r.pendingProps,s===null?ly(r):pt=s,Dh.current=null}function ly(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=CT(a,s,_n),a!==null){pt=a;return}}else{if(a=RT(a,s),a!==null){a.flags&=32767,pt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Tt=6,pt=null;return}}if(s=s.sibling,s!==null){pt=s;return}pt=s=r}while(s!==null);Tt===0&&(Tt=5)}function Ts(r,s,a){var d=Le,f=xn.transition;try{xn.transition=null,Le=1,LT(r,s,a,d)}finally{xn.transition=f,Le=d}return null}function LT(r,s,a,d){do Oo();while(Ti!==null);if((Fe&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(qe(r,g),r===Ct&&(pt=Ct=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||$u||($u=!0,hy(In,function(){return Oo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=xn.transition,xn.transition=null;var E=Le;Le=1;var k=Fe;Fe|=4,Dh.current=null,xT(r,a),Xg(a,r),nT(zd),di=!!Bd,zd=Bd=null,r.current=a,NT(a),Ad(),Fe=k,Le=E,xn.transition=g}else r.current=a;if($u&&($u=!1,Ti=r,Wu=f),g=r.pendingLanes,g===0&&(Ei=null),Kl(a.stateNode),sn(r,Ge()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],d(f.value,{componentStack:f.stack,digest:f.digest});if(zu)throw zu=!1,r=Lh,Lh=null,r;return(Wu&1)!==0&&r.tag!==0&&Oo(),g=r.pendingLanes,(g&1)!==0?r===Mh?tl++:(tl=0,Mh=r):tl=0,yi(),null}function Oo(){if(Ti!==null){var r=ui(Wu),s=xn.transition,a=Le;try{if(xn.transition=null,Le=16>r?16:r,Ti===null)var d=!1;else{if(r=Ti,Ti=null,Wu=0,(Fe&6)!==0)throw Error(t(331));var f=Fe;for(Fe|=4,pe=r.current;pe!==null;){var g=pe,E=g.child;if((pe.flags&16)!==0){var k=g.deletions;if(k!==null){for(var N=0;N<k.length;N++){var $=k[N];for(pe=$;pe!==null;){var Z=pe;switch(Z.tag){case 0:case 11:case 15:Xa(8,Z,g)}var ee=Z.child;if(ee!==null)ee.return=Z,pe=ee;else for(;pe!==null;){Z=pe;var J=Z.sibling,de=Z.return;if(Kg(Z),Z===$){pe=null;break}if(J!==null){J.return=de,pe=J;break}pe=de}}}var me=g.alternate;if(me!==null){var ye=me.child;if(ye!==null){me.child=null;do{var lt=ye.sibling;ye.sibling=null,ye=lt}while(ye!==null)}}pe=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,pe=E;else e:for(;pe!==null;){if(g=pe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Xa(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,pe=U;break e}pe=g.return}}var D=r.current;for(pe=D;pe!==null;){E=pe;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,pe=B;else e:for(E=D;pe!==null;){if(k=pe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Fu(9,k)}}catch(ve){st(k,k.return,ve)}if(k===E){pe=null;break e}var ne=k.sibling;if(ne!==null){ne.return=k.return,pe=ne;break e}pe=k.return}}if(Fe=f,yi(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(ss,r)}catch{}d=!0}return d}finally{Le=a,xn.transition=s}}return!1}function uy(r,s,a){s=xo(a,s),s=Cg(r,s,1),r=_i(r,s,1),s=Yt(),r!==null&&(ai(r,1,s),sn(r,s))}function st(r,s,a){if(r.tag===3)uy(r,r,a);else for(;s!==null;){if(s.tag===3){uy(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ei===null||!Ei.has(d))){r=xo(a,r),r=Rg(s,r,1),s=_i(s,r,1),r=Yt(),s!==null&&(ai(s,1,r),sn(s,r));break}}s=s.return}}function MT(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=Yt(),r.pingedLanes|=r.suspendedLanes&a,Ct===r&&(Vt&a)===a&&(Tt===4||Tt===3&&(Vt&130023424)===Vt&&500>Ge()-Vh?Es(r,0):Oh|=a),sn(r,s)}function cy(r,s){s===0&&((r.mode&1)===0?s=1:(s=no,no<<=1,(no&130023424)===0&&(no=4194304)));var a=Yt();r=Ur(r,s),r!==null&&(ai(r,s,a),sn(r,a))}function jT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),cy(r,a)}function FT(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),cy(r,a)}var dy;dy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||en.current)nn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return nn=!1,kT(r,s,a);nn=(r.flags&131072)!==0}else nn=!1,tt&&(s.flags&1048576)!==0&&Wm(s,Tu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Mu(r,s),r=s.pendingProps;var f=To(s,Ft.current);Ro(s,a),f=hh(null,s,d,r,f,a);var g=fh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,tn(d)?(g=!0,_u(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,sh(s),f.updater=Vu,s.stateNode=f,f._reactInternals=s,_h(s,d,r,a),s=Ih(null,s,d,!0,g,a)):(s.tag=0,tt&&g&&Qd(s),Qt(null,s,f,a),s=s.child),s;case 16:d=s.elementType;e:{switch(Mu(r,s),r=s.pendingProps,f=d._init,d=f(d._payload),s.type=d,f=s.tag=BT(d),r=Gn(d,r),f){case 0:s=Th(null,s,d,r,a);break e;case 1:s=Mg(null,s,d,r,a);break e;case 11:s=bg(null,s,d,r,a);break e;case 14:s=Dg(null,s,d,Gn(d.type,r),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Gn(d,f),Th(r,s,d,f,a);case 1:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Gn(d,f),Mg(r,s,d,f,a);case 3:e:{if(jg(s),r===null)throw Error(t(387));d=s.pendingProps,g=s.memoizedState,f=g.element,Zm(r,s),Ru(s,d,null,a);var E=s.memoizedState;if(d=E.element,g.isDehydrated)if(g={element:d,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=xo(Error(t(423)),s),s=Fg(r,s,d,a,f);break e}else if(d!==f){f=xo(Error(t(424)),s),s=Fg(r,s,d,a,f);break e}else for(vn=pi(s.stateNode.containerInfo.firstChild),yn=s,tt=!0,Kn=null,a=Jm(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ao(),d===f){s=zr(r,s,a);break e}Qt(r,s,d,a)}s=s.child}return s;case 5:return ng(s),r===null&&Xd(s),d=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,E=f.children,$d(d,f)?E=null:g!==null&&$d(d,g)&&(s.flags|=32),Lg(r,s),Qt(r,s,E,a),s.child;case 6:return r===null&&Xd(s),null;case 13:return Ug(r,s,a);case 4:return oh(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=ko(s,null,d,a):Qt(r,s,d,a),s.child;case 11:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Gn(d,f),bg(r,s,d,f,a);case 7:return Qt(r,s,s.pendingProps,a),s.child;case 8:return Qt(r,s,s.pendingProps.children,a),s.child;case 12:return Qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,f=s.pendingProps,g=s.memoizedProps,E=f.value,Qe(Au,d._currentValue),d._currentValue=E,g!==null)if(Hn(g.value,E)){if(g.children===f.children&&!en.current){s=zr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var k=g.dependencies;if(k!==null){E=g.child;for(var N=k.firstContext;N!==null;){if(N.context===d){if(g.tag===1){N=Br(-1,a&-a),N.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var Z=$.pending;Z===null?N.next=N:(N.next=Z.next,Z.next=N),$.pending=N}}g.lanes|=a,N=g.alternate,N!==null&&(N.lanes|=a),rh(g.return,a,s),k.lanes|=a;break}N=N.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,k=E.alternate,k!==null&&(k.lanes|=a),rh(E,a,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Qt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,d=s.pendingProps.children,Ro(s,a),f=Rn(f),d=d(f),s.flags|=1,Qt(r,s,d,a),s.child;case 14:return d=s.type,f=Gn(d,s.pendingProps),f=Gn(d.type,f),Dg(r,s,d,f,a);case 15:return Og(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Gn(d,f),Mu(r,s),s.tag=1,tn(d)?(r=!0,_u(s)):r=!1,Ro(s,a),Ag(s,d,f),_h(s,d,f,a),Ih(null,s,d,!0,r,a);case 19:return zg(r,s,a);case 22:return Vg(r,s,a)}throw Error(t(156,s.tag))};function hy(r,s){return eo(r,s)}function UT(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(r,s,a,d){return new UT(r,s,a,d)}function $h(r){return r=r.prototype,!(!r||!r.isReactComponent)}function BT(r){if(typeof r=="function")return $h(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===dt)return 14}return 2}function Ai(r,s){var a=r.alternate;return a===null?(a=Nn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Gu(r,s,a,d,f,g){var E=2;if(d=r,typeof r=="function")$h(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case b:return Is(a.children,f,g,s);case A:E=8,f|=8;break;case R:return r=Nn(12,a,s,f|2),r.elementType=R,r.lanes=g,r;case C:return r=Nn(13,a,s,f),r.elementType=C,r.lanes=g,r;case Je:return r=Nn(19,a,s,f),r.elementType=Je,r.lanes=g,r;case Ue:return Qu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:E=10;break e;case O:E=9;break e;case L:E=11;break e;case dt:E=14;break e;case ht:E=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Nn(E,a,s,f),s.elementType=r,s.type=d,s.lanes=g,s}function Is(r,s,a,d){return r=Nn(7,r,d,s),r.lanes=a,r}function Qu(r,s,a,d){return r=Nn(22,r,d,s),r.elementType=Ue,r.lanes=a,r.stateNode={isHidden:!1},r}function Wh(r,s,a){return r=Nn(6,r,null,s),r.lanes=a,r}function qh(r,s,a){return s=Nn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function zT(r,s,a,d,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Hh(r,s,a,d,f,g,E,k,N){return r=new zT(r,s,a,k,N),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Nn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(g),r}function $T(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function fy(r){if(!r)return gi;r=r._reactInternals;e:{if(Fn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(tn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(tn(a))return Bm(r,a,s)}return s}function py(r,s,a,d,f,g,E,k,N){return r=Hh(a,d,!0,r,f,g,E,k,N),r.context=fy(null),a=r.current,d=Yt(),f=Ii(a),g=Br(d,f),g.callback=s??null,_i(a,g,f),r.current.lanes=f,ai(r,f,d),sn(r,d),r}function Yu(r,s,a,d){var f=s.current,g=Yt(),E=Ii(f);return a=fy(a),s.context===null?s.context=a:s.pendingContext=a,s=Br(g,E),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=_i(f,s,E),r!==null&&(Jn(r,f,E,g),Cu(r,f,E)),E}function Ju(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function my(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Kh(r,s){my(r,s),(r=r.alternate)&&my(r,s)}function WT(){return null}var gy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Gh(r){this._internalRoot=r}Xu.prototype.render=Gh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Yu(r,s,null,null)},Xu.prototype.unmount=Gh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ws(function(){Yu(null,r,null,null)}),s[Lr]=null}};function Xu(r){this._internalRoot=r}Xu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Xl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<lr.length&&s!==0&&s<lr[a].priority;a++);lr.splice(a,0,r),a===0&&tu(r)}};function Qh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Zu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function yy(){}function qT(r,s,a,d,f){if(f){if(typeof d=="function"){var g=d;d=function(){var $=Ju(E);g.call($)}}var E=py(s,d,r,0,null,!1,!1,"",yy);return r._reactRootContainer=E,r[Lr]=E.current,Fa(r.nodeType===8?r.parentNode:r),ws(),E}for(;f=r.lastChild;)r.removeChild(f);if(typeof d=="function"){var k=d;d=function(){var $=Ju(N);k.call($)}}var N=Hh(r,0,!1,null,null,!1,!1,"",yy);return r._reactRootContainer=N,r[Lr]=N.current,Fa(r.nodeType===8?r.parentNode:r),ws(function(){Yu(s,N,a,d)}),N}function ec(r,s,a,d,f){var g=a._reactRootContainer;if(g){var E=g;if(typeof f=="function"){var k=f;f=function(){var N=Ju(E);k.call(N)}}Yu(s,E,r,f)}else E=qT(a,s,r,f,d);return Ju(E)}Yl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=si(s.pendingLanes);a!==0&&(li(s,a|1),sn(s,Ge()),(Fe&6)===0&&(Do=Ge()+500,yi()))}break;case 13:ws(function(){var d=Ur(r,1);if(d!==null){var f=Yt();Jn(d,r,1,f)}}),Kh(r,1)}},ro=function(r){if(r.tag===13){var s=Ur(r,134217728);if(s!==null){var a=Yt();Jn(s,r,134217728,a)}Kh(r,134217728)}},Jl=function(r){if(r.tag===13){var s=Ii(r),a=Ur(r,s);if(a!==null){var d=Yt();Jn(a,r,s,d)}Kh(r,s)}},Xl=function(){return Le},Zl=function(r,s){var a=Le;try{return Le=r,s()}finally{Le=a}},Gs=function(r,s,a){switch(s){case"input":if(ca(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var f=yu(d);if(!f)throw Error(t(90));ir(d),ca(d,f)}}}break;case"textarea":Hs(r,a);break;case"select":s=a.value,s!=null&&Rr(r,!!a.multiple,s,!1)}},es=Uh,wa=ws;var HT={usingClientEntryPoint:!1,Events:[za,wo,yu,or,_a,Uh]},nl={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KT={bundleType:nl.bundleType,version:nl.version,rendererPackageName:nl.rendererPackageName,rendererConfig:nl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ia(r),r===null?null:r.stateNode},findFiberByHostInstance:nl.findFiberByHostInstance||WT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{ss=tc.inject(KT),fn=tc}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HT,on.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qh(s))throw Error(t(200));return $T(r,s,null,a)},on.createRoot=function(r,s){if(!Qh(r))throw Error(t(299));var a=!1,d="",f=gy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Hh(r,1,!1,null,null,a,!1,d,f),r[Lr]=s.current,Fa(r.nodeType===8?r.parentNode:r),new Gh(s)},on.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ia(s),r=r===null?null:r.stateNode,r},on.flushSync=function(r){return ws(r)},on.hydrate=function(r,s,a){if(!Zu(s))throw Error(t(200));return ec(null,r,s,!0,a)},on.hydrateRoot=function(r,s,a){if(!Qh(r))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,f=!1,g="",E=gy;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=py(s,null,r,1,a??null,f,!1,g,E),r[Lr]=s.current,Fa(r),d)for(r=0;r<d.length;r++)a=d[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Xu(s)},on.render=function(r,s,a){if(!Zu(s))throw Error(t(200));return ec(null,r,s,!1,a)},on.unmountComponentAtNode=function(r){if(!Zu(r))throw Error(t(40));return r._reactRootContainer?(ws(function(){ec(null,null,r,!1,function(){r._reactRootContainer=null,r[Lr]=null})}),!0):!1},on.unstable_batchedUpdates=Uh,on.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!Zu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ec(r,s,a,!1,d)},on.version="18.3.1-next-f1338f8080-20240426",on}var Ay;function N_(){if(Ay)return Xh.exports;Ay=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Xh.exports=nI(),Xh.exports}var ky;function rI(){if(ky)return nc;ky=1;var n=N_();return nc.createRoot=n.createRoot,nc.hydrateRoot=n.hydrateRoot,nc}var iI=rI();const sI=P_(iI);N_();/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gl(){return gl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},gl.apply(this,arguments)}var bi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(bi||(bi={}));const Cy="popstate";function oI(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:c,hash:h}=i.location;return Ef("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Ec(o)}return lI(e,t,null,n)}function ct(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function tp(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aI(){return Math.random().toString(36).substr(2,8)}function Ry(n,e){return{usr:n.state,key:n.key,idx:e}}function Ef(n,e,t,i){return t===void 0&&(t=null),gl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?ea(e):e,{state:t,key:e&&e.key||i||aI()})}function Ec(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ea(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function lI(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,h=bi.Pop,p=null,y=w();y==null&&(y=0,c.replaceState(gl({},c.state,{idx:y}),""));function w(){return(c.state||{idx:null}).idx}function T(){h=bi.Pop;let M=w(),te=M==null?null:M-y;y=M,p&&p({action:h,location:z.location,delta:te})}function S(M,te){h=bi.Push;let ie=Ef(z.location,M,te);y=w()+1;let X=Ry(ie,y),le=z.createHref(ie);try{c.pushState(X,"",le)}catch(ke){if(ke instanceof DOMException&&ke.name==="DataCloneError")throw ke;o.location.assign(le)}l&&p&&p({action:h,location:z.location,delta:1})}function P(M,te){h=bi.Replace;let ie=Ef(z.location,M,te);y=w();let X=Ry(ie,y),le=z.createHref(ie);c.replaceState(X,"",le),l&&p&&p({action:h,location:z.location,delta:0})}function j(M){let te=o.location.origin!=="null"?o.location.origin:o.location.href,ie=typeof M=="string"?M:Ec(M);return ie=ie.replace(/ $/,"%20"),ct(te,"No window.location.(origin|href) available to create URL for href: "+ie),new URL(ie,te)}let z={get action(){return h},get location(){return n(o,c)},listen(M){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Cy,T),p=M,()=>{o.removeEventListener(Cy,T),p=null}},createHref(M){return e(o,M)},createURL:j,encodeLocation(M){let te=j(M);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:S,replace:P,go(M){return c.go(M)}};return z}var Py;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Py||(Py={}));function uI(n,e,t){return t===void 0&&(t="/"),cI(n,e,t)}function cI(n,e,t,i){let o=typeof e=="string"?ea(e):e,l=np(o.pathname||"/",t);if(l==null)return null;let c=b_(n);dI(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let y=II(l);h=wI(c[p],y)}return h}function b_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(ct(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=Oi([i,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(ct(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),b_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:vI(y,l.index),routesMeta:w})};return n.forEach((l,c)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,c);else for(let p of D_(l.path))o(l,c,p)}),e}function D_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=D_(i.join("/")),h=[];return h.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...c),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function dI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:_I(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const hI=/^:[\w-]+$/,fI=3,pI=2,mI=1,gI=10,yI=-2,xy=n=>n==="*";function vI(n,e){let t=n.split("/"),i=t.length;return t.some(xy)&&(i+=yI),e&&(i+=pI),t.filter(o=>!xy(o)).reduce((o,l)=>o+(hI.test(l)?fI:l===""?mI:gI),i)}function _I(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function wI(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let h=0;h<i.length;++h){let p=i[h],y=h===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=EI({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),S=p.route;if(!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Oi([l,T.pathname]),pathnameBase:RI(Oi([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=Oi([l,T.pathnameBase]))}return c}function EI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=TI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((y,w,T)=>{let{paramName:S,isOptional:P}=w;if(S==="*"){let z=h[T]||"";c=l.slice(0,l.length-z.length).replace(/(.)\/+$/,"$1")}const j=h[T];return P&&!j?y[S]=void 0:y[S]=(j||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function TI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),tp(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function II(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tp(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function np(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const SI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AI=n=>SI.test(n);function kI(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?ea(n):n,l;if(t)if(AI(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),tp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=Ny(t.substring(1),"/"):l=Ny(t,e)}else l=e;return{pathname:l,search:PI(i),hash:xI(o)}}function Ny(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function tf(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function rp(n,e){let t=CI(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function ip(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=ea(n):(o=gl({},n),ct(!o.pathname||!o.pathname.includes("?"),tf("?","pathname","search",o)),ct(!o.pathname||!o.pathname.includes("#"),tf("#","pathname","hash",o)),ct(!o.search||!o.search.includes("#"),tf("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;o.pathname=S.join("/")}h=T>=0?e[T]:"/"}let p=kI(o,h),y=c&&c!=="/"&&c.endsWith("/"),w=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}const Oi=n=>n.join("/").replace(/\/\/+/g,"/"),RI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),PI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,xI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function NI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const O_=["post","put","patch","delete"];new Set(O_);const bI=["get",...O_];new Set(bI);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},yl.apply(this,arguments)}const sp=W.createContext(null),DI=W.createContext(null),Hi=W.createContext(null),Gc=W.createContext(null),ti=W.createContext({outlet:null,matches:[],isDataRoute:!1}),V_=W.createContext(null);function OI(n,e){let{relative:t}=e===void 0?{}:e;ta()||ct(!1);let{basename:i,navigator:o}=W.useContext(Hi),{hash:l,pathname:c,search:h}=M_(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Oi([i,c])),o.createHref({pathname:p,search:h,hash:l})}function ta(){return W.useContext(Gc)!=null}function na(){return ta()||ct(!1),W.useContext(Gc).location}function L_(n){W.useContext(Hi).static||W.useLayoutEffect(n)}function ra(){let{isDataRoute:n}=W.useContext(ti);return n?GI():VI()}function VI(){ta()||ct(!1);let n=W.useContext(sp),{basename:e,future:t,navigator:i}=W.useContext(Hi),{matches:o}=W.useContext(ti),{pathname:l}=na(),c=JSON.stringify(rp(o,t.v7_relativeSplatPath)),h=W.useRef(!1);return L_(()=>{h.current=!0}),W.useCallback(function(y,w){if(w===void 0&&(w={}),!h.current)return;if(typeof y=="number"){i.go(y);return}let T=ip(y,JSON.parse(c),l,w.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Oi([e,T.pathname])),(w.replace?i.replace:i.push)(T,w.state,w)},[e,i,c,l,n])}function LI(){let{matches:n}=W.useContext(ti),e=n[n.length-1];return e?e.params:{}}function M_(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=W.useContext(Hi),{matches:o}=W.useContext(ti),{pathname:l}=na(),c=JSON.stringify(rp(o,i.v7_relativeSplatPath));return W.useMemo(()=>ip(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function MI(n,e){return jI(n,e)}function jI(n,e,t,i){ta()||ct(!1);let{navigator:o}=W.useContext(Hi),{matches:l}=W.useContext(ti),c=l[l.length-1],h=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let y=na(),w;if(e){var T;let M=typeof e=="string"?ea(e):e;p==="/"||(T=M.pathname)!=null&&T.startsWith(p)||ct(!1),w=M}else w=y;let S=w.pathname||"/",P=S;if(p!=="/"){let M=p.replace(/^\//,"").split("/");P="/"+S.replace(/^\//,"").split("/").slice(M.length).join("/")}let j=uI(n,{pathname:P}),z=$I(j&&j.map(M=>Object.assign({},M,{params:Object.assign({},h,M.params),pathname:Oi([p,o.encodeLocation?o.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?p:Oi([p,o.encodeLocation?o.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),l,t,i);return e&&z?W.createElement(Gc.Provider,{value:{location:yl({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:bi.Pop}},z):z}function FI(){let n=KI(),e=NI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,null)}const UI=W.createElement(FI,null);class BI extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?W.createElement(ti.Provider,{value:this.props.routeContext},W.createElement(V_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zI(n){let{routeContext:e,match:t,children:i}=n,o=W.useContext(sp);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),W.createElement(ti.Provider,{value:e},i)}function $I(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,h=(o=t)==null?void 0:o.errors;if(h!=null){let w=c.findIndex(T=>T.route.id&&(h==null?void 0:h[T.route.id])!==void 0);w>=0||ct(!1),c=c.slice(0,Math.min(c.length,w+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let w=0;w<c.length;w++){let T=c[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=w),T.route.id){let{loaderData:S,errors:P}=t,j=T.route.loader&&S[T.route.id]===void 0&&(!P||P[T.route.id]===void 0);if(T.route.lazy||j){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((w,T,S)=>{let P,j=!1,z=null,M=null;t&&(P=h&&T.route.id?h[T.route.id]:void 0,z=T.route.errorElement||UI,p&&(y<0&&S===0?(QI("route-fallback"),j=!0,M=null):y===S&&(j=!0,M=T.route.hydrateFallbackElement||null)));let te=e.concat(c.slice(0,S+1)),ie=()=>{let X;return P?X=z:j?X=M:T.route.Component?X=W.createElement(T.route.Component,null):T.route.element?X=T.route.element:X=w,W.createElement(zI,{match:T,routeContext:{outlet:w,matches:te,isDataRoute:t!=null},children:X})};return t&&(T.route.ErrorBoundary||T.route.errorElement||S===0)?W.createElement(BI,{location:t.location,revalidation:t.revalidation,component:z,error:P,children:ie(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):ie()},null)}var j_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(j_||{}),F_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(F_||{});function WI(n){let e=W.useContext(sp);return e||ct(!1),e}function qI(n){let e=W.useContext(DI);return e||ct(!1),e}function HI(n){let e=W.useContext(ti);return e||ct(!1),e}function U_(n){let e=HI(),t=e.matches[e.matches.length-1];return t.route.id||ct(!1),t.route.id}function KI(){var n;let e=W.useContext(V_),t=qI(),i=U_();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function GI(){let{router:n}=WI(j_.UseNavigateStable),e=U_(F_.UseNavigateStable),t=W.useRef(!1);return L_(()=>{t.current=!0}),W.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,yl({fromRouteId:e},l)))},[n,e])}const by={};function QI(n,e,t){by[n]||(by[n]=!0)}function YI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Tc(n){let{to:e,replace:t,state:i,relative:o}=n;ta()||ct(!1);let{future:l,static:c}=W.useContext(Hi),{matches:h}=W.useContext(ti),{pathname:p}=na(),y=ra(),w=ip(e,rp(h,l.v7_relativeSplatPath),p,o==="path"),T=JSON.stringify(w);return W.useEffect(()=>y(JSON.parse(T),{replace:t,state:i,relative:o}),[y,T,o,t,i]),null}function bn(n){ct(!1)}function JI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=bi.Pop,navigator:l,static:c=!1,future:h}=n;ta()&&ct(!1);let p=e.replace(/^\/*/,"/"),y=W.useMemo(()=>({basename:p,navigator:l,static:c,future:yl({v7_relativeSplatPath:!1},h)}),[p,h,l,c]);typeof i=="string"&&(i=ea(i));let{pathname:w="/",search:T="",hash:S="",state:P=null,key:j="default"}=i,z=W.useMemo(()=>{let M=np(w,p);return M==null?null:{location:{pathname:M,search:T,hash:S,state:P,key:j},navigationType:o}},[p,w,T,S,P,j,o]);return z==null?null:W.createElement(Hi.Provider,{value:y},W.createElement(Gc.Provider,{children:t,value:z}))}function XI(n){let{children:e,location:t}=n;return MI(Tf(e),t)}new Promise(()=>{});function Tf(n,e){e===void 0&&(e=[]);let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,Tf(i.props.children,l));return}i.type!==bn&&ct(!1),!i.props.index||!i.props.children||ct(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Tf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function If(){return If=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},If.apply(this,arguments)}function ZI(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function eS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function tS(n,e){return n.button===0&&(!e||e==="_self")&&!eS(n)}const nS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rS="6";try{window.__reactRouterVersion=rS}catch{}const iS="startTransition",Dy=ZT[iS];function sS(n){let{basename:e,children:t,future:i,window:o}=n,l=W.useRef();l.current==null&&(l.current=oI({window:o,v5Compat:!0}));let c=l.current,[h,p]=W.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},w=W.useCallback(T=>{y&&Dy?Dy(()=>p(T)):p(T)},[p,y]);return W.useLayoutEffect(()=>c.listen(w),[c,w]),W.useEffect(()=>YI(i),[i]),W.createElement(JI,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:c,future:i})}const oS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dn=W.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:h,target:p,to:y,preventScrollReset:w,viewTransition:T}=e,S=ZI(e,nS),{basename:P}=W.useContext(Hi),j,z=!1;if(typeof y=="string"&&aS.test(y)&&(j=y,oS))try{let X=new URL(window.location.href),le=y.startsWith("//")?new URL(X.protocol+y):new URL(y),ke=np(le.pathname,P);le.origin===X.origin&&ke!=null?y=ke+le.search+le.hash:z=!0}catch{}let M=OI(y,{relative:o}),te=lS(y,{replace:c,state:h,target:p,preventScrollReset:w,relative:o,viewTransition:T});function ie(X){i&&i(X),X.defaultPrevented||te(X)}return W.createElement("a",If({},S,{href:j||M,onClick:z||l?i:ie,ref:t,target:p}))});var Oy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Oy||(Oy={}));var Vy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Vy||(Vy={}));function lS(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:h}=e===void 0?{}:e,p=ra(),y=na(),w=M_(n,{relative:c});return W.useCallback(T=>{if(tS(T,t)){T.preventDefault();let S=i!==void 0?i:Ec(y)===Ec(w);p(n,{replace:S,state:o,preventScrollReset:l,relative:c,viewTransition:h})}},[y,p,w,i,o,t,n,l,c,h])}const uS=()=>{};var Ly={};/**
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
 */const B_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},cS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],h=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},z_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,h=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,T=(l&3)<<4|h>>4;let S=(h&15)<<2|y>>6,P=y&63;p||(P=64,c||(S=64)),i.push(t[w],t[T],t[S],t[P])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(B_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||y==null||T==null)throw new dS;const S=l<<2|h>>4;if(i.push(S),y!==64){const P=h<<4&240|y>>2;if(i.push(P),T!==64){const j=y<<6&192|T;i.push(j)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hS=function(n){const e=B_(n);return z_.encodeByteArray(e,!0)},Ic=function(n){return hS(n).replace(/\./g,"")},$_=function(n){try{return z_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pS=()=>fS().__FIREBASE_DEFAULTS__,mS=()=>{if(typeof process>"u"||typeof Ly>"u")return;const n=Ly.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$_(n[1]);return e&&JSON.parse(e)},Qc=()=>{try{return uS()||pS()||mS()||gS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},W_=n=>{var e,t;return(t=(e=Qc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},q_=n=>{const e=W_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},H_=()=>{var n;return(n=Qc())===null||n===void 0?void 0:n.config},K_=n=>{var e;return(e=Qc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class yS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Vs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function op(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function vS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ic(JSON.stringify(t)),Ic(JSON.stringify(c)),""].join(".")}const cl={};function _S(){const n={prod:[],emulator:[]};for(const e of Object.keys(cl))cl[e]?n.emulator.push(e):n.prod.push(e);return n}function wS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let My=!1;function ap(n,e){if(typeof window>"u"||typeof document>"u"||!Vs(window.location.host)||cl[n]===e||cl[n]||My)return;cl[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=_S().prod.length>0;function c(){const S=document.getElementById(i);S&&S.remove()}function h(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,P){S.setAttribute("width","24"),S.setAttribute("id",P),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{My=!0,c()},S}function w(S,P){S.setAttribute("id",P),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=wS(i),P=t("text"),j=document.getElementById(P)||document.createElement("span"),z=t("learnmore"),M=document.getElementById(z)||document.createElement("a"),te=t("preprendIcon"),ie=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const X=S.element;h(X),w(M,z);const le=y();p(ie,te),X.append(ie,j,M,le),document.body.appendChild(X)}l?(j.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ES(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function TS(){var n;const e=(n=Qc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function AS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kS(){const n=Ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CS(){return!TS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function G_(){try{return typeof indexedDB=="object"}catch{return!1}}function Q_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function RS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const PS="FirebaseError";class rr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=PS,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?xS(l,i):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new rr(o,h,i)}}function xS(n,e){return n.replace(NS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const NS=/\{\$([^}]+)}/g;function bS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(jy(l)&&jy(c)){if(!Qr(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function jy(n){return n!==null&&typeof n=="object"}/**
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
 */function kl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function il(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function sl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function DS(n,e){const t=new OS(n,e);return t.subscribe.bind(t)}class OS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");VS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=nf),o.error===void 0&&(o.error=nf),o.complete===void 0&&(o.complete=nf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function nf(){}/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}class Ln{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ss="[DEFAULT]";/**
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
 */class LS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new yS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jS(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:MS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MS(n){return n===Ss?void 0:n}function jS(n){return n.instantiationMode==="EAGER"}/**
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
 */class FS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new LS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const US={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},BS=Oe.INFO,zS={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},$S=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=zS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lp{constructor(e){this.name=e,this._logLevel=BS,this._logHandler=$S,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?US[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const WS=(n,e)=>e.some(t=>n instanceof t);let Fy,Uy;function qS(){return Fy||(Fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HS(){return Uy||(Uy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y_=new WeakMap,Sf=new WeakMap,J_=new WeakMap,rf=new WeakMap,up=new WeakMap;function KS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Kr(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Y_.set(t,n)}).catch(()=>{}),up.set(e,n),e}function GS(n){if(Sf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Sf.set(n,e)}let Af={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||J_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function QS(n){Af=n(Af)}function YS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(sf(this),e,...t);return J_.set(i,e.sort?e.sort():[e]),Kr(i)}:HS().includes(n)?function(...e){return n.apply(sf(this),e),Kr(Y_.get(this))}:function(...e){return Kr(n.apply(sf(this),e))}}function JS(n){return typeof n=="function"?YS(n):(n instanceof IDBTransaction&&GS(n),WS(n,qS())?new Proxy(n,Af):n)}function Kr(n){if(n instanceof IDBRequest)return KS(n);if(rf.has(n))return rf.get(n);const e=JS(n);return e!==n&&(rf.set(n,e),up.set(e,n)),e}const sf=n=>up.get(n);function Yc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),h=Kr(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Kr(c.result),p.oldVersion,p.newVersion,Kr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),h}function of(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Kr(t).then(()=>{})}const XS=["get","getKey","getAll","getAllKeys","count"],ZS=["put","add","delete","clear"],af=new Map;function By(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(af.get(e))return af.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=ZS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||XS.includes(t)))return;const l=async function(c,...h){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(h.shift())),(await Promise.all([y[t](...h),o&&p.done]))[0]};return af.set(e,l),l}QS(n=>({...n,get:(e,t,i)=>By(e,t)||n.get(e,t,i),has:(e,t)=>!!By(e,t)||n.has(e,t)}));/**
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
 */class e1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(t1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function t1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kf="@firebase/app",zy="0.13.2";/**
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
 */const Yr=new lp("@firebase/app"),n1="@firebase/app-compat",r1="@firebase/analytics-compat",i1="@firebase/analytics",s1="@firebase/app-check-compat",o1="@firebase/app-check",a1="@firebase/auth",l1="@firebase/auth-compat",u1="@firebase/database",c1="@firebase/data-connect",d1="@firebase/database-compat",h1="@firebase/functions",f1="@firebase/functions-compat",p1="@firebase/installations",m1="@firebase/installations-compat",g1="@firebase/messaging",y1="@firebase/messaging-compat",v1="@firebase/performance",_1="@firebase/performance-compat",w1="@firebase/remote-config",E1="@firebase/remote-config-compat",T1="@firebase/storage",I1="@firebase/storage-compat",S1="@firebase/firestore",A1="@firebase/ai",k1="@firebase/firestore-compat",C1="firebase",R1="11.10.0";/**
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
 */const Cf="[DEFAULT]",P1={[kf]:"fire-core",[n1]:"fire-core-compat",[i1]:"fire-analytics",[r1]:"fire-analytics-compat",[o1]:"fire-app-check",[s1]:"fire-app-check-compat",[a1]:"fire-auth",[l1]:"fire-auth-compat",[u1]:"fire-rtdb",[c1]:"fire-data-connect",[d1]:"fire-rtdb-compat",[h1]:"fire-fn",[f1]:"fire-fn-compat",[p1]:"fire-iid",[m1]:"fire-iid-compat",[g1]:"fire-fcm",[y1]:"fire-fcm-compat",[v1]:"fire-perf",[_1]:"fire-perf-compat",[w1]:"fire-rc",[E1]:"fire-rc-compat",[T1]:"fire-gcs",[I1]:"fire-gcs-compat",[S1]:"fire-fst",[k1]:"fire-fst-compat",[A1]:"fire-vertex","fire-js":"fire-js",[C1]:"fire-js-all"};/**
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
 */const Sc=new Map,x1=new Map,Rf=new Map;function $y(n,e){try{n.container.addComponent(e)}catch(t){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function er(n){const e=n.name;if(Rf.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;Rf.set(e,n);for(const t of Sc.values())$y(t,n);for(const t of x1.values())$y(t,n);return!0}function Ms(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ln(n){return n==null?!1:n.settings!==void 0}/**
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
 */const N1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vi=new Ls("app","Firebase",N1);/**
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
 */class b1{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vi.create("app-deleted",{appName:this._name})}}/**
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
 */const ia=R1;function X_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Cf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Vi.create("bad-app-name",{appName:String(o)});if(t||(t=H_()),!t)throw Vi.create("no-options");const l=Sc.get(o);if(l){if(Qr(t,l.options)&&Qr(i,l.config))return l;throw Vi.create("duplicate-app",{appName:o})}const c=new FS(o);for(const p of Rf.values())c.addComponent(p);const h=new b1(t,i,c);return Sc.set(o,h),h}function Jc(n=Cf){const e=Sc.get(n);if(!e&&n===Cf&&H_())return X_();if(!e)throw Vi.create("no-app",{appName:n});return e}function dn(n,e,t){var i;let o=(i=P1[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(h.join(" "));return}er(new Ln(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const D1="firebase-heartbeat-database",O1=1,vl="firebase-heartbeat-store";let lf=null;function Z_(){return lf||(lf=Yc(D1,O1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vi.create("idb-open",{originalErrorMessage:n.message})})),lf}async function V1(n){try{const t=(await Z_()).transaction(vl),i=await t.objectStore(vl).get(ew(n));return await t.done,i}catch(e){if(e instanceof rr)Yr.warn(e.message);else{const t=Vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(t.message)}}}async function Wy(n,e){try{const i=(await Z_()).transaction(vl,"readwrite");await i.objectStore(vl).put(e,ew(n)),await i.done}catch(t){if(t instanceof rr)Yr.warn(t.message);else{const i=Vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yr.warn(i.message)}}}function ew(n){return`${n.name}!${n.options.appId}`}/**
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
 */const L1=1024,M1=30;class j1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new U1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=qy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>M1){const c=B1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Yr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qy(),{heartbeatsToSend:i,unsentEntries:o}=F1(this._heartbeatsCache.heartbeats),l=Ic(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Yr.warn(t),""}}}function qy(){return new Date().toISOString().substring(0,10)}function F1(n,e=L1){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Hy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Hy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class U1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G_()?Q_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await V1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Hy(n){return Ic(JSON.stringify({version:2,heartbeats:n})).length}function B1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function z1(n){er(new Ln("platform-logger",e=>new e1(e),"PRIVATE")),er(new Ln("heartbeat",e=>new j1(e),"PRIVATE")),dn(kf,zy,n),dn(kf,zy,"esm2017"),dn("fire-js","")}z1("");function cp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function tw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $1=tw,nw=new Ls("auth","Firebase",tw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new lp("@firebase/auth");function W1(n,...e){Ac.logLevel<=Oe.WARN&&Ac.warn(`Auth (${ia}): ${n}`,...e)}function dc(n,...e){Ac.logLevel<=Oe.ERROR&&Ac.error(`Auth (${ia}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n,...e){throw dp(n,...e)}function yr(n,...e){return dp(n,...e)}function rw(n,e,t){const i=Object.assign(Object.assign({},$1()),{[e]:t});return new Ls("auth","Firebase",i).create(e,{appName:n.name})}function vr(n){return rw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return nw.create(n,...e)}function Ie(n,e,...t){if(!n)throw dp(e,...t)}function qr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw dc(e),new Error(e)}function Jr(n,e){n||qr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function q1(){return Ky()==="http:"||Ky()==="https:"}function Ky(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q1()||SS()||"connection"in navigator)?navigator.onLine:!0}function K1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jr(t>e,"Short delay should be less than long delay!"),this.isMobile=ES()||AS()}get(){return H1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e){Jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Y1=new Cl(3e4,6e4);function ni(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function kr(n,e,t,i,o={}){return sw(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const h=kl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return IS()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Vs(n.emulatorConfig.host)&&(y.credentials="include"),iw.fetch()(await ow(n,n.config.apiHost,t,h),y)})}async function sw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},G1),e);try{const o=new X1(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw rc(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[p,y]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw rc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw rc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw rc(n,"user-disabled",c);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw rw(n,w,y);tr(n,w)}}catch(o){if(o instanceof rr)throw o;tr(n,"network-request-failed",{message:String(o)})}}async function Rl(n,e,t,i,o={}){const l=await kr(n,e,t,i,o);return"mfaPendingCredential"in l&&tr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function ow(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?hp(n.config,o):`${n.config.apiScheme}://${o}`;return Q1.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function J1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(yr(this.auth,"network-request-failed")),Y1.get())})}}function rc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=yr(n,e,i);return o.customData._tokenResponse=t,o}function Gy(n){return n!==void 0&&n.enterprise!==void 0}class Z1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return J1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eA(n,e){return kr(n,"GET","/v2/recaptchaConfig",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(n,e){return kr(n,"POST","/v1/accounts:delete",e)}async function kc(n,e){return kr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nA(n,e=!1){const t=Ke(n),i=await t.getIdToken(e),o=fp(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:dl(uf(o.auth_time)),issuedAtTime:dl(uf(o.iat)),expirationTime:dl(uf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function uf(n){return Number(n)*1e3}function fp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return dc("JWT malformed, contained fewer than 3 sections"),null;try{const o=$_(t);return o?JSON.parse(o):(dc("Failed to decode base64 JWT payload"),null)}catch(o){return dc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Qy(n){const e=fp(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof rr&&rA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function rA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=dl(this.lastLoginAt),this.creationTime=dl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Wo(n,kc(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?aw(l.providerUserInfo):[],h=oA(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(h!=null&&h.length),w=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new xf(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function sA(n){const e=Ke(n);await Cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function aw(n){return n.map(e=>{var{providerId:t}=e,i=cp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(n,e){const t=await sw(n,{},async()=>{const i=kl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await ow(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:h,body:i};return n.emulatorConfig&&Vs(n.emulatorConfig.host)&&(p.credentials="include"),iw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lA(n,e){return kr(n,"POST","/v2/accounts:revokeToken",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Qy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await aA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Uo;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return qr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new xf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Wo(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await Wo(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,h,p,y,w;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,j=(c=t.photoURL)!==null&&c!==void 0?c:void 0,z=(h=t.tenantId)!==null&&h!==void 0?h:void 0,M=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,te=(y=t.createdAt)!==null&&y!==void 0?y:void 0,ie=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:X,emailVerified:le,isAnonymous:ke,providerData:Re,stsTokenManager:b}=t;Ie(X&&b,e,"internal-error");const A=Uo.fromJSON(this.name,b);Ie(typeof X=="string",e,"internal-error"),Ci(T,e.name),Ci(S,e.name),Ie(typeof le=="boolean",e,"internal-error"),Ie(typeof ke=="boolean",e,"internal-error"),Ci(P,e.name),Ci(j,e.name),Ci(z,e.name),Ci(M,e.name),Ci(te,e.name),Ci(ie,e.name);const R=new Zn({uid:X,auth:e,email:S,emailVerified:le,displayName:T,isAnonymous:ke,photoURL:j,phoneNumber:P,tenantId:z,stsTokenManager:A,createdAt:te,lastLoginAt:ie});return Re&&Array.isArray(Re)&&(R.providerData=Re.map(x=>Object.assign({},x))),M&&(R._redirectEventId=M),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new Uo;o.updateFromServerResponse(t);const l=new Zn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Cc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?aw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new Uo;h.updateFromIdToken(i);const p=new Zn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new xf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new Map;function Hr(n){Jr(n instanceof Function,"Expected a class definition");let e=Yy.get(n);return e?(Jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yy.set(n,e),e)}/**
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
 */class lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lw.type="NONE";const Jy=lw;/**
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
 */function hc(n,e,t){return`firebase:${n}:${e}:${t}`}class Bo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=hc(this.userKey,o.apiKey,l),this.fullPersistenceKey=hc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await kc(this.auth,{idToken:e}).catch(()=>{});return t?Zn._fromGetAccountInfoResponse(this.auth,t,e):null}return Zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Bo(Hr(Jy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Hr(Jy);const c=hc(i,e.config.apiKey,e.name);let h=null;for(const y of t)try{const w=await y._get(c);if(w){let T;if(typeof w=="string"){const S=await kc(e,{idToken:w}).catch(()=>{});if(!S)break;T=await Zn._fromGetAccountInfoResponse(e,S,w)}else T=Zn._fromJSON(e,w);y!==l&&(h=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Bo(l,e,i):(l=p[0],h&&await l._set(c,h.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Bo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pw(e))return"Blackberry";if(mw(e))return"Webos";if(cw(e))return"Safari";if((e.includes("chrome/")||dw(e))&&!e.includes("edge/"))return"Chrome";if(fw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function uw(n=Ht()){return/firefox\//i.test(n)}function cw(n=Ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dw(n=Ht()){return/crios\//i.test(n)}function hw(n=Ht()){return/iemobile/i.test(n)}function fw(n=Ht()){return/android/i.test(n)}function pw(n=Ht()){return/blackberry/i.test(n)}function mw(n=Ht()){return/webos/i.test(n)}function pp(n=Ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function uA(n=Ht()){var e;return pp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cA(){return kS()&&document.documentMode===10}function gw(n=Ht()){return pp(n)||fw(n)||mw(n)||pw(n)||/windows phone/i.test(n)||hw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n,e=[]){let t;switch(n){case"Browser":t=Xy(Ht());break;case"Worker":t=`${Xy(Ht())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ia}/${i}`}/**
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
 */class dA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,h)=>{try{const p=e(l);c(p)}catch(p){h(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function hA(n,e={}){return kr(n,"GET","/v2/passwordPolicy",ni(n,e))}/**
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
 */const fA=6;class pA{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:fA,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zy(this),this.idTokenSubscription=new Zy(this),this.beforeStateQueue=new dA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Hr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await kc(this,{idToken:e}),i=await Zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ln(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(vr(this));const t=e?Ke(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hA(this),t=new pA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await lA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Hr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[Hr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&W1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ki(n){return Ke(n)}class Zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=DS(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gA(n){Xc=n}function vw(n){return Xc.loadJS(n)}function yA(){return Xc.recaptchaEnterpriseScript}function vA(){return Xc.gapiScript}function _A(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class wA{constructor(){this.enterprise=new EA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const TA="recaptcha-enterprise",_w="NO_RECAPTCHA";class IA{constructor(e){this.type=TA,this.auth=Ki(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{eA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const y=new Z1(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{h(p)})})}function o(l,c,h){const p=window.grecaptcha;Gy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(_w)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wA().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(h=>{if(!t&&Gy(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=yA();p.length!==0&&(p+=h),vw(p).then(()=>{o(h,l,c)}).catch(y=>{c(y)})}}).catch(h=>{c(h)})})}}async function ev(n,e,t,i=!1,o=!1){const l=new IA(n);let c;if(o)c=_w;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,y=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Rc(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ev(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ev(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(n,e){const t=Ms(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Qr(l,e??{}))return o;tr(o,"already-initialized")}return t.initialize({options:e})}function AA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Hr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function kA(n,e,t){const i=Ki(n);Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=ww(e),{host:c,port:h}=CA(e),p=h===null?"":`:${h}`,y={url:`${l}//${c}${p}/`},w=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ie(Qr(y,i.config.emulator)&&Qr(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Vs(c)?(op(`${l}//${c}${p}`),ap("Auth",!0)):RA()}function ww(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function CA(n){const e=ww(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:tv(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:tv(c)}}}function tv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function RA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qr("not implemented")}_getIdTokenResponse(e){return qr("not implemented")}_linkToIdToken(e,t){return qr("not implemented")}_getReauthenticationResolver(e){return qr("not implemented")}}async function PA(n,e){return kr(n,"POST","/v1/accounts:update",e)}async function xA(n,e){return kr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(n,e){return Rl(n,"POST","/v1/accounts:signInWithPassword",ni(n,e))}async function bA(n,e){return kr(n,"POST","/v1/accounts:sendOobCode",ni(n,e))}async function DA(n,e){return bA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(n,e){return Rl(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,e))}async function VA(n,e){return Rl(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends mp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new _l(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new _l(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,t,"signInWithPassword",NA);case"emailLink":return OA(e,{email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,i,"signUpPassword",xA);case"emailLink":return VA(e,{idToken:t,email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n,e){return Rl(n,"POST","/v1/accounts:signInWithIdp",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA="http://localhost";class Ps extends mp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=cp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Ps(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return zo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,zo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zo(e,t)}buildRequest(){const e={requestUri:LA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=kl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jA(n){const e=il(sl(n)).link,t=e?il(sl(e)).deep_link_id:null,i=il(sl(n)).deep_link_id;return(i?il(sl(i)).link:null)||i||t||e||n}class gp{constructor(e){var t,i,o,l,c,h;const p=il(sl(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(i=p.oobCode)!==null&&i!==void 0?i:null,T=MA((o=p.mode)!==null&&o!==void 0?o:null);Ie(y&&w&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=jA(e);try{return new gp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,t){return _l._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=gp.parseLink(t);return Ie(i,"argument-error"),_l._fromEmailAndCode(e,i.code,i.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pl extends Ew{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Pl{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ps._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Pi.credential(t,i)}catch{return null}}}Pi.GOOGLE_SIGN_IN_METHOD="google.com";Pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Pl{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xi.credential(e.oauthAccessToken)}catch{return null}}}xi.GITHUB_SIGN_IN_METHOD="github.com";xi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Pl{constructor(){super("twitter.com")}static credential(e,t){return Ps._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ni.credential(t,i)}catch{return null}}}Ni.TWITTER_SIGN_IN_METHOD="twitter.com";Ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(n,e){return Rl(n,"POST","/v1/accounts:signUp",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Zn._fromIdTokenResponse(e,i,o),c=nv(i);return new xs({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=nv(i);return new xs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function nv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends rr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Pc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Pc(e,t,i,o)}}function Tw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Pc._fromErrorAndOperation(n,l,e,i):l})}async function UA(n,e,t=!1){const i=await Wo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xs._forOperation(n,"link",i)}/**
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
 */async function Iw(n,e,t=!1){const{auth:i}=n;if(ln(i.app))return Promise.reject(vr(i));const o="reauthenticate";try{const l=await Wo(n,Tw(i,o,e,n),t);Ie(l.idToken,i,"internal-error");const c=fp(l.idToken);Ie(c,i,"internal-error");const{sub:h}=c;return Ie(n.uid===h,i,"user-mismatch"),xs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&tr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(n,e,t=!1){if(ln(n.app))return Promise.reject(vr(n));const i="signIn",o=await Tw(n,i,e),l=await xs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function BA(n,e){return Sw(Ki(n),e)}async function zA(n,e){return Iw(Ke(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(n){const e=Ki(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $A(n,e,t){const i=Ki(n);await Rc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",DA)}async function WA(n,e,t){if(ln(n.app))return Promise.reject(vr(n));const i=Ki(n),c=await Rc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Aw(n),p}),h=await xs._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(h.user),h}function qA(n,e,t){return ln(n.app)?Promise.reject(vr(n)):BA(Ke(n),js.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Aw(n),i})}function HA(n,e){const t=Ke(n);return ln(t.auth.app)?Promise.reject(vr(t.auth)):kw(t,e,null)}function KA(n,e){return kw(Ke(n),null,e)}async function kw(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await Wo(n,PA(i,l));await n._updateTokensIfNecessary(c,!0)}function GA(n,e,t,i){return Ke(n).onIdTokenChanged(e,t,i)}function QA(n,e,t){return Ke(n).beforeAuthStateChanged(e,t)}function YA(n,e,t,i){return Ke(n).onAuthStateChanged(e,t,i)}function JA(n){return Ke(n).signOut()}const xc="__sak";/**
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
 */class Cw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xc,"1"),this.storage.removeItem(xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=1e3,ZA=10;class Rw extends Cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);cA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ZA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},XA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rw.type="LOCAL";const ek=Rw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw extends Cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pw.type="SESSION";const xw=Pw;/**
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
 */function tk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Zc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(c).map(async y=>y(t.origin,l)),p=await tk(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class nk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,p)=>{const y=yp("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(S.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){return window}function rk(n){_r().location.href=n}/**
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
 */function Nw(){return typeof _r().WorkerGlobalScope<"u"&&typeof _r().importScripts=="function"}async function ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ok(){return Nw()?self:null}/**
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
 */const bw="firebaseLocalStorageDb",ak=1,Nc="firebaseLocalStorage",Dw="fbase_key";class xl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ed(n,e){return n.transaction([Nc],e?"readwrite":"readonly").objectStore(Nc)}function lk(){const n=indexedDB.deleteDatabase(bw);return new xl(n).toPromise()}function Nf(){const n=indexedDB.open(bw,ak);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Nc,{keyPath:Dw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Nc)?e(i):(i.close(),await lk(),e(await Nf()))})})}async function rv(n,e,t){const i=ed(n,!0).put({[Dw]:e,value:t});return new xl(i).toPromise()}async function uk(n,e){const t=ed(n,!1).get(e),i=await new xl(t).toPromise();return i===void 0?null:i.value}function iv(n,e){const t=ed(n,!0).delete(e);return new xl(t).toPromise()}const ck=800,dk=3;class Ow{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>dk)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zc._getInstance(ok()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ik(),!this.activeServiceWorker)return;this.sender=new nk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nf();return await rv(e,xc,"1"),await iv(e,xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>rv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>uk(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>iv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=ed(o,!1).getAll();return new xl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ow.type="LOCAL";const hk=Ow;new Cl(3e4,6e4);/**
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
 */function fk(n,e){return e?Hr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class vp extends mp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pk(n){return Sw(n.auth,new vp(n),n.bypassAuthState)}function mk(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),Iw(t,new vp(n),n.bypassAuthState)}async function gk(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),UA(t,new vp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pk;case"linkViaPopup":case"linkViaRedirect":return gk;case"reauthViaPopup":case"reauthViaRedirect":return mk;default:tr(this.auth,"internal-error")}}resolve(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new Cl(2e3,1e4);class Fo extends Vw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Fo.currentPopupAction&&Fo.currentPopupAction.cancel(),Fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Jr(this.filter.length===1,"Popup operations only handle one event");const e=yp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yk.get())};e()}}Fo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="pendingRedirect",fc=new Map;class _k extends Vw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=fc.get(this.auth._key());if(!e){try{const i=await wk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}fc.set(this.auth._key(),e)}return this.bypassAuthState||fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wk(n,e){const t=Ik(e),i=Tk(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function Ek(n,e){fc.set(n._key(),e)}function Tk(n){return Hr(n._redirectPersistence)}function Ik(n){return hc(vk,n.config.apiKey,n.name)}async function Sk(n,e,t=!1){if(ln(n.app))return Promise.reject(vr(n));const i=Ki(n),o=fk(i,e),c=await new _k(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=600*1e3;class kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ck(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Lw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(yr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ak&&this.cachedEventUids.clear(),this.cachedEventUids.has(sv(e))}saveEventToCache(e){this.cachedEventUids.add(sv(e)),this.lastProcessedEventTime=Date.now()}}function sv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ck(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(n,e={}){return kr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xk=/^https?/;async function Nk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Rk(n);for(const t of e)try{if(bk(t))return}catch{}tr(n,"unauthorized-domain")}function bk(n){const e=Pf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!xk.test(t))return!1;if(Pk.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const Dk=new Cl(3e4,6e4);function ov(){const n=_r().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ok(n){return new Promise((e,t)=>{var i,o,l;function c(){ov(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ov(),t(yr(n,"network-request-failed"))},timeout:Dk.get()})}if(!((o=(i=_r().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=_r().gapi)===null||l===void 0)&&l.load)c();else{const h=_A("iframefcb");return _r()[h]=()=>{gapi.load?c():t(yr(n,"network-request-failed"))},vw(`${vA()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw pc=null,e})}let pc=null;function Vk(n){return pc=pc||Ok(n),pc}/**
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
 */const Lk=new Cl(5e3,15e3),Mk="__/auth/iframe",jk="emulator/auth/iframe",Fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bk(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hp(e,jk):`https://${n.config.authDomain}/${Mk}`,i={apiKey:e.apiKey,appName:n.name,v:ia},o=Uk.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${kl(i).slice(1)}`}async function zk(n){const e=await Vk(n),t=_r().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:Bk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fk,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=yr(n,"network-request-failed"),h=_r().setTimeout(()=>{l(c)},Lk.get());function p(){_r().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const $k={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wk=500,qk=600,Hk="_blank",Kk="http://localhost";class av{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gk(n,e,t,i=Wk,o=qk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},$k),{width:i.toString(),height:o.toString(),top:l,left:c}),y=Ht().toLowerCase();t&&(h=dw(y)?Hk:t),uw(y)&&(e=e||Kk,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[P,j])=>`${S}${P}=${j},`,"");if(uA(y)&&h!=="_self")return Qk(e||"",h),new av(null);const T=window.open(e||"",h,w);Ie(T,n,"popup-blocked");try{T.focus()}catch{}return new av(T)}function Qk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Yk="__/auth/handler",Jk="emulator/auth/handler",Xk=encodeURIComponent("fac");async function lv(n,e,t,i,o,l){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ia,eventId:o};if(e instanceof Ew){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",bS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))c[w]=T}if(e instanceof Pl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(c.scopes=w.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const w of Object.keys(h))h[w]===void 0&&delete h[w];const p=await n._getAppCheckToken(),y=p?`#${Xk}=${encodeURIComponent(p)}`:"";return`${Zk(n)}?${kl(h).slice(1)}${y}`}function Zk({config:n}){return n.emulator?hp(n,Jk):`https://${n.authDomain}/${Yk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="webStorageSupport";class eC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xw,this._completeRedirectFn=Sk,this._overrideRedirectResult=Ek}async _openPopup(e,t,i,o){var l;Jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await lv(e,t,i,Pf(),o);return Gk(e,c,yp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await lv(e,t,i,Pf(),o);return rk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Jr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await zk(e),i=new kk(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cf,{type:cf},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[cf];c!==void 0&&t(!!c),tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Nk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gw()||cw()||pp()}}const tC=eC;var uv="@firebase/auth",cv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iC(n){er(new Ln("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=i.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yw(n)},y=new mA(i,o,l,p);return AA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),er(new Ln("auth-internal",e=>{const t=Ki(e.getProvider("auth").getImmediate());return(i=>new nC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(uv,cv,rC(n)),dn(uv,cv,"esm2017")}/**
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
 */const sC=300,oC=K_("authIdTokenMaxAge")||sC;let dv=null;const aC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>oC)return;const o=t==null?void 0:t.token;dv!==o&&(dv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function lC(n=Jc()){const e=Ms(n,"auth");if(e.isInitialized())return e.getImmediate();const t=SA(n,{popupRedirectResolver:tC,persistence:[hk,ek,xw]}),i=K_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=aC(l.toString());QA(t,c,()=>c(t.currentUser)),GA(t,h=>c(h))}}const o=W_("auth");return o&&kA(t,`http://${o}`),t}function uC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=yr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",uC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iC("Browser");var cC="firebase",dC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(cC,dC,"app");var hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li,Mw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,A){function R(){}R.prototype=A.prototype,b.D=A.prototype,b.prototype=new R,b.prototype.constructor=b,b.C=function(x,O,L){for(var C=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)C[Je-2]=arguments[Je];return A.prototype[O].apply(x,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(b,A,R){R||(R=0);var x=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)x[O]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(O=0;16>O;++O)x[O]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=b.g[0],R=b.g[1],O=b.g[2];var L=b.g[3],C=A+(L^R&(O^L))+x[0]+3614090360&4294967295;A=R+(C<<7&4294967295|C>>>25),C=L+(O^A&(R^O))+x[1]+3905402710&4294967295,L=A+(C<<12&4294967295|C>>>20),C=O+(R^L&(A^R))+x[2]+606105819&4294967295,O=L+(C<<17&4294967295|C>>>15),C=R+(A^O&(L^A))+x[3]+3250441966&4294967295,R=O+(C<<22&4294967295|C>>>10),C=A+(L^R&(O^L))+x[4]+4118548399&4294967295,A=R+(C<<7&4294967295|C>>>25),C=L+(O^A&(R^O))+x[5]+1200080426&4294967295,L=A+(C<<12&4294967295|C>>>20),C=O+(R^L&(A^R))+x[6]+2821735955&4294967295,O=L+(C<<17&4294967295|C>>>15),C=R+(A^O&(L^A))+x[7]+4249261313&4294967295,R=O+(C<<22&4294967295|C>>>10),C=A+(L^R&(O^L))+x[8]+1770035416&4294967295,A=R+(C<<7&4294967295|C>>>25),C=L+(O^A&(R^O))+x[9]+2336552879&4294967295,L=A+(C<<12&4294967295|C>>>20),C=O+(R^L&(A^R))+x[10]+4294925233&4294967295,O=L+(C<<17&4294967295|C>>>15),C=R+(A^O&(L^A))+x[11]+2304563134&4294967295,R=O+(C<<22&4294967295|C>>>10),C=A+(L^R&(O^L))+x[12]+1804603682&4294967295,A=R+(C<<7&4294967295|C>>>25),C=L+(O^A&(R^O))+x[13]+4254626195&4294967295,L=A+(C<<12&4294967295|C>>>20),C=O+(R^L&(A^R))+x[14]+2792965006&4294967295,O=L+(C<<17&4294967295|C>>>15),C=R+(A^O&(L^A))+x[15]+1236535329&4294967295,R=O+(C<<22&4294967295|C>>>10),C=A+(O^L&(R^O))+x[1]+4129170786&4294967295,A=R+(C<<5&4294967295|C>>>27),C=L+(R^O&(A^R))+x[6]+3225465664&4294967295,L=A+(C<<9&4294967295|C>>>23),C=O+(A^R&(L^A))+x[11]+643717713&4294967295,O=L+(C<<14&4294967295|C>>>18),C=R+(L^A&(O^L))+x[0]+3921069994&4294967295,R=O+(C<<20&4294967295|C>>>12),C=A+(O^L&(R^O))+x[5]+3593408605&4294967295,A=R+(C<<5&4294967295|C>>>27),C=L+(R^O&(A^R))+x[10]+38016083&4294967295,L=A+(C<<9&4294967295|C>>>23),C=O+(A^R&(L^A))+x[15]+3634488961&4294967295,O=L+(C<<14&4294967295|C>>>18),C=R+(L^A&(O^L))+x[4]+3889429448&4294967295,R=O+(C<<20&4294967295|C>>>12),C=A+(O^L&(R^O))+x[9]+568446438&4294967295,A=R+(C<<5&4294967295|C>>>27),C=L+(R^O&(A^R))+x[14]+3275163606&4294967295,L=A+(C<<9&4294967295|C>>>23),C=O+(A^R&(L^A))+x[3]+4107603335&4294967295,O=L+(C<<14&4294967295|C>>>18),C=R+(L^A&(O^L))+x[8]+1163531501&4294967295,R=O+(C<<20&4294967295|C>>>12),C=A+(O^L&(R^O))+x[13]+2850285829&4294967295,A=R+(C<<5&4294967295|C>>>27),C=L+(R^O&(A^R))+x[2]+4243563512&4294967295,L=A+(C<<9&4294967295|C>>>23),C=O+(A^R&(L^A))+x[7]+1735328473&4294967295,O=L+(C<<14&4294967295|C>>>18),C=R+(L^A&(O^L))+x[12]+2368359562&4294967295,R=O+(C<<20&4294967295|C>>>12),C=A+(R^O^L)+x[5]+4294588738&4294967295,A=R+(C<<4&4294967295|C>>>28),C=L+(A^R^O)+x[8]+2272392833&4294967295,L=A+(C<<11&4294967295|C>>>21),C=O+(L^A^R)+x[11]+1839030562&4294967295,O=L+(C<<16&4294967295|C>>>16),C=R+(O^L^A)+x[14]+4259657740&4294967295,R=O+(C<<23&4294967295|C>>>9),C=A+(R^O^L)+x[1]+2763975236&4294967295,A=R+(C<<4&4294967295|C>>>28),C=L+(A^R^O)+x[4]+1272893353&4294967295,L=A+(C<<11&4294967295|C>>>21),C=O+(L^A^R)+x[7]+4139469664&4294967295,O=L+(C<<16&4294967295|C>>>16),C=R+(O^L^A)+x[10]+3200236656&4294967295,R=O+(C<<23&4294967295|C>>>9),C=A+(R^O^L)+x[13]+681279174&4294967295,A=R+(C<<4&4294967295|C>>>28),C=L+(A^R^O)+x[0]+3936430074&4294967295,L=A+(C<<11&4294967295|C>>>21),C=O+(L^A^R)+x[3]+3572445317&4294967295,O=L+(C<<16&4294967295|C>>>16),C=R+(O^L^A)+x[6]+76029189&4294967295,R=O+(C<<23&4294967295|C>>>9),C=A+(R^O^L)+x[9]+3654602809&4294967295,A=R+(C<<4&4294967295|C>>>28),C=L+(A^R^O)+x[12]+3873151461&4294967295,L=A+(C<<11&4294967295|C>>>21),C=O+(L^A^R)+x[15]+530742520&4294967295,O=L+(C<<16&4294967295|C>>>16),C=R+(O^L^A)+x[2]+3299628645&4294967295,R=O+(C<<23&4294967295|C>>>9),C=A+(O^(R|~L))+x[0]+4096336452&4294967295,A=R+(C<<6&4294967295|C>>>26),C=L+(R^(A|~O))+x[7]+1126891415&4294967295,L=A+(C<<10&4294967295|C>>>22),C=O+(A^(L|~R))+x[14]+2878612391&4294967295,O=L+(C<<15&4294967295|C>>>17),C=R+(L^(O|~A))+x[5]+4237533241&4294967295,R=O+(C<<21&4294967295|C>>>11),C=A+(O^(R|~L))+x[12]+1700485571&4294967295,A=R+(C<<6&4294967295|C>>>26),C=L+(R^(A|~O))+x[3]+2399980690&4294967295,L=A+(C<<10&4294967295|C>>>22),C=O+(A^(L|~R))+x[10]+4293915773&4294967295,O=L+(C<<15&4294967295|C>>>17),C=R+(L^(O|~A))+x[1]+2240044497&4294967295,R=O+(C<<21&4294967295|C>>>11),C=A+(O^(R|~L))+x[8]+1873313359&4294967295,A=R+(C<<6&4294967295|C>>>26),C=L+(R^(A|~O))+x[15]+4264355552&4294967295,L=A+(C<<10&4294967295|C>>>22),C=O+(A^(L|~R))+x[6]+2734768916&4294967295,O=L+(C<<15&4294967295|C>>>17),C=R+(L^(O|~A))+x[13]+1309151649&4294967295,R=O+(C<<21&4294967295|C>>>11),C=A+(O^(R|~L))+x[4]+4149444226&4294967295,A=R+(C<<6&4294967295|C>>>26),C=L+(R^(A|~O))+x[11]+3174756917&4294967295,L=A+(C<<10&4294967295|C>>>22),C=O+(A^(L|~R))+x[2]+718787259&4294967295,O=L+(C<<15&4294967295|C>>>17),C=R+(L^(O|~A))+x[9]+3951481745&4294967295,b.g[0]=b.g[0]+A&4294967295,b.g[1]=b.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,b.g[2]=b.g[2]+O&4294967295,b.g[3]=b.g[3]+L&4294967295}i.prototype.u=function(b,A){A===void 0&&(A=b.length);for(var R=A-this.blockSize,x=this.B,O=this.h,L=0;L<A;){if(O==0)for(;L<=R;)o(this,b,L),L+=this.blockSize;if(typeof b=="string"){for(;L<A;)if(x[O++]=b.charCodeAt(L++),O==this.blockSize){o(this,x),O=0;break}}else for(;L<A;)if(x[O++]=b[L++],O==this.blockSize){o(this,x),O=0;break}}this.h=O,this.o+=A},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var A=1;A<b.length-8;++A)b[A]=0;var R=8*this.o;for(A=b.length-8;A<b.length;++A)b[A]=R&255,R/=256;for(this.u(b),b=Array(16),A=R=0;4>A;++A)for(var x=0;32>x;x+=8)b[R++]=this.g[A]>>>x&255;return b};function l(b,A){var R=h;return Object.prototype.hasOwnProperty.call(R,b)?R[b]:R[b]=A(b)}function c(b,A){this.h=A;for(var R=[],x=!0,O=b.length-1;0<=O;O--){var L=b[O]|0;x&&L==A||(R[O]=L,x=!1)}this.g=R}var h={};function p(b){return-128<=b&&128>b?l(b,function(A){return new c([A|0],0>A?-1:0)}):new c([b|0],0>b?-1:0)}function y(b){if(isNaN(b)||!isFinite(b))return T;if(0>b)return M(y(-b));for(var A=[],R=1,x=0;b>=R;x++)A[x]=b/R|0,R*=4294967296;return new c(A,0)}function w(b,A){if(b.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b.charAt(0)=="-")return M(w(b.substring(1),A));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(A,8)),x=T,O=0;O<b.length;O+=8){var L=Math.min(8,b.length-O),C=parseInt(b.substring(O,O+L),A);8>L?(L=y(Math.pow(A,L)),x=x.j(L).add(y(C))):(x=x.j(R),x=x.add(y(C)))}return x}var T=p(0),S=p(1),P=p(16777216);n=c.prototype,n.m=function(){if(z(this))return-M(this).m();for(var b=0,A=1,R=0;R<this.g.length;R++){var x=this.i(R);b+=(0<=x?x:4294967296+x)*A,A*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(j(this))return"0";if(z(this))return"-"+M(this).toString(b);for(var A=y(Math.pow(b,6)),R=this,x="";;){var O=le(R,A).g;R=te(R,O.j(A));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(b);if(R=O,j(R))return L+x;for(;6>L.length;)L="0"+L;x=L+x}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function j(b){if(b.h!=0)return!1;for(var A=0;A<b.g.length;A++)if(b.g[A]!=0)return!1;return!0}function z(b){return b.h==-1}n.l=function(b){return b=te(this,b),z(b)?-1:j(b)?0:1};function M(b){for(var A=b.g.length,R=[],x=0;x<A;x++)R[x]=~b.g[x];return new c(R,~b.h).add(S)}n.abs=function(){return z(this)?M(this):this},n.add=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],x=0,O=0;O<=A;O++){var L=x+(this.i(O)&65535)+(b.i(O)&65535),C=(L>>>16)+(this.i(O)>>>16)+(b.i(O)>>>16);x=C>>>16,L&=65535,C&=65535,R[O]=C<<16|L}return new c(R,R[R.length-1]&-2147483648?-1:0)};function te(b,A){return b.add(M(A))}n.j=function(b){if(j(this)||j(b))return T;if(z(this))return z(b)?M(this).j(M(b)):M(M(this).j(b));if(z(b))return M(this.j(M(b)));if(0>this.l(P)&&0>b.l(P))return y(this.m()*b.m());for(var A=this.g.length+b.g.length,R=[],x=0;x<2*A;x++)R[x]=0;for(x=0;x<this.g.length;x++)for(var O=0;O<b.g.length;O++){var L=this.i(x)>>>16,C=this.i(x)&65535,Je=b.i(O)>>>16,dt=b.i(O)&65535;R[2*x+2*O]+=C*dt,ie(R,2*x+2*O),R[2*x+2*O+1]+=L*dt,ie(R,2*x+2*O+1),R[2*x+2*O+1]+=C*Je,ie(R,2*x+2*O+1),R[2*x+2*O+2]+=L*Je,ie(R,2*x+2*O+2)}for(x=0;x<A;x++)R[x]=R[2*x+1]<<16|R[2*x];for(x=A;x<2*A;x++)R[x]=0;return new c(R,0)};function ie(b,A){for(;(b[A]&65535)!=b[A];)b[A+1]+=b[A]>>>16,b[A]&=65535,A++}function X(b,A){this.g=b,this.h=A}function le(b,A){if(j(A))throw Error("division by zero");if(j(b))return new X(T,T);if(z(b))return A=le(M(b),A),new X(M(A.g),M(A.h));if(z(A))return A=le(b,M(A)),new X(M(A.g),A.h);if(30<b.g.length){if(z(b)||z(A))throw Error("slowDivide_ only works with positive integers.");for(var R=S,x=A;0>=x.l(b);)R=ke(R),x=ke(x);var O=Re(R,1),L=Re(x,1);for(x=Re(x,2),R=Re(R,2);!j(x);){var C=L.add(x);0>=C.l(b)&&(O=O.add(R),L=C),x=Re(x,1),R=Re(R,1)}return A=te(b,O.j(A)),new X(O,A)}for(O=T;0<=b.l(A);){for(R=Math.max(1,Math.floor(b.m()/A.m())),x=Math.ceil(Math.log(R)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),L=y(R),C=L.j(A);z(C)||0<C.l(b);)R-=x,L=y(R),C=L.j(A);j(L)&&(L=S),O=O.add(L),b=te(b,C)}return new X(O,b)}n.A=function(b){return le(this,b).h},n.and=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],x=0;x<A;x++)R[x]=this.i(x)&b.i(x);return new c(R,this.h&b.h)},n.or=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],x=0;x<A;x++)R[x]=this.i(x)|b.i(x);return new c(R,this.h|b.h)},n.xor=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],x=0;x<A;x++)R[x]=this.i(x)^b.i(x);return new c(R,this.h^b.h)};function ke(b){for(var A=b.g.length+1,R=[],x=0;x<A;x++)R[x]=b.i(x)<<1|b.i(x-1)>>>31;return new c(R,b.h)}function Re(b,A){var R=A>>5;A%=32;for(var x=b.g.length-R,O=[],L=0;L<x;L++)O[L]=0<A?b.i(L+R)>>>A|b.i(L+R+1)<<32-A:b.i(L+R);return new c(O,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Mw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=w,Li=c}).apply(typeof hv<"u"?hv:typeof self<"u"?self:typeof window<"u"?window:{});var ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jw,ol,Fw,mc,bf,Uw,Bw,zw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ic=="object"&&ic];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var F=u[I];if(!(F in _))break e;_=_[F]}u=u[u.length-1],I=_[u],m=m(I),m!=I&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,I=!1,F={next:function(){if(!I&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function S(u,m,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,S.apply(null,arguments)}function P(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var I=_.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function j(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(I,F,q){for(var se=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)se[$e-2]=arguments[$e];return m.prototype[F].apply(I,se)}}function z(u){const m=u.length;if(0<m){const _=Array(m);for(let I=0;I<m;I++)_[I]=u[I];return _}return[]}function M(u,m){for(let _=1;_<arguments.length;_++){const I=arguments[_];if(p(I)){const F=u.length||0,q=I.length||0;u.length=F+q;for(let se=0;se<q;se++)u[F+se]=I[se]}else u.push(I)}}class te{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ie(u){return/^[\s\xa0]*$/.test(u)}function X(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var ke=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function Re(u,m,_){for(const I in u)m.call(_,u[I],I,u)}function b(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function A(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let _,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(_ in I)u[_]=I[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(I,_)&&(u[_]=I[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function L(u){h.setTimeout(()=>{throw u},0)}function C(){var u=_e;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Je{constructor(){this.h=this.g=null}add(m,_){const I=dt.get();I.set(m,_),this.h?this.h.next=I:this.g=I,this.h=I}}var dt=new te(()=>new ht,u=>u.reset());class ht{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,oe=!1,_e=new Je,ae=()=>{const u=h.Promise.resolve(void 0);Ue=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){L(_)}var m=dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}oe=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var ue=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u})();function he(u,m){if(H.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(ke){e:{try{le(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Y[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&he.aa.h.call(this)}}j(he,H);var Y={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var re="closure_listenable_"+(1e6*Math.random()|0),ge=0;function xe(u,m,_,I,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!I,this.ha=F,this.key=++ge,this.da=this.fa=!1}function Ne(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function St(u){this.src=u,this.g={},this.h=0}St.prototype.add=function(u,m,_,I,F){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var se=En(u,m,I,F);return-1<se?(m=u[se],_||(m.fa=!1)):(m=new xe(m,this.src,q,!!I,F),m.fa=_,u.push(m)),m};function ir(u,m){var _=m.type;if(_ in u.g){var I=u.g[_],F=Array.prototype.indexOf.call(I,m,void 0),q;(q=0<=F)&&Array.prototype.splice.call(I,F,1),q&&(Ne(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function En(u,m,_,I){for(var F=0;F<u.length;++F){var q=u[F];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==I)return F}return-1}var Nt="closure_lm_"+(1e6*Math.random()|0),$s={};function ua(u,m,_,I,F){if(Array.isArray(m)){for(var q=0;q<m.length;q++)ua(u,m[q],_,I,F);return null}return _=ha(_),u&&u[re]?u.K(m,_,y(I)?!!I.capture:!1,F):ca(u,m,_,!1,I,F)}function ca(u,m,_,I,F,q){if(!m)throw Error("Invalid event type");var se=y(F)?!!F.capture:!!F,$e=qs(u);if($e||(u[Nt]=$e=new St(u)),_=$e.add(m,_,I,se,q),_.proxy)return _;if(I=Bl(),_.proxy=I,I.src=u,I.listener=_,u.addEventListener)ue||(F=se),F===void 0&&(F=!1),u.addEventListener(m.toString(),I,F);else if(u.attachEvent)u.attachEvent(Rr(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Bl(){function u(_){return m.call(u.src,u.listener,_)}const m=da;return u}function Ws(u,m,_,I,F){if(Array.isArray(m))for(var q=0;q<m.length;q++)Ws(u,m[q],_,I,F);else I=y(I)?!!I.capture:!!I,_=ha(_),u&&u[re]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=En(q,_,I,F),-1<_&&(Ne(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=qs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=En(m,_,I,F)),(_=-1<u?m[u]:null)&&Cr(_))}function Cr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[re])ir(m.i,u);else{var _=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(_,I,u.capture):m.detachEvent?m.detachEvent(Rr(_),I):m.addListener&&m.removeListener&&m.removeListener(I),(_=qs(m))?(ir(_,u),_.h==0&&(_.src=null,m[Nt]=null)):Ne(u)}}}function Rr(u){return u in $s?$s[u]:$s[u]="on"+u}function da(u,m){if(u.da)u=!0;else{m=new he(m,this);var _=u.listener,I=u.ha||u.src;u.fa&&Cr(u),u=_.call(I,m)}return u}function qs(u){return u=u[Nt],u instanceof St?u:null}var Hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ha(u){return typeof u=="function"?u:(u[Hs]||(u[Hs]=function(m){return u.handleEvent(m)}),u[Hs])}function vt(){K.call(this),this.i=new St(this),this.M=this,this.F=null}j(vt,K),vt.prototype[re]=!0,vt.prototype.removeEventListener=function(u,m,_,I){Ws(this,u,m,_,I)};function _t(u,m){var _,I=u.F;if(I)for(_=[];I;I=I.F)_.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new H(m,u);else if(m instanceof H)m.target=m.target||u;else{var F=m;m=new H(I,u),x(m,F)}if(F=!0,_)for(var q=_.length-1;0<=q;q--){var se=m.g=_[q];F=Pr(se,I,!0,m)&&F}if(se=m.g=u,F=Pr(se,I,!0,m)&&F,F=Pr(se,I,!1,m)&&F,_)for(q=0;q<_.length;q++)se=m.g=_[q],F=Pr(se,I,!1,m)&&F}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],I=0;I<_.length;I++)Ne(_[I]);delete u.g[m],u.h--}}this.F=null},vt.prototype.K=function(u,m,_,I){return this.i.add(String(u),m,!1,_,I)},vt.prototype.L=function(u,m,_,I){return this.i.add(String(u),m,!0,_,I)};function Pr(u,m,_,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,q=0;q<m.length;++q){var se=m[q];if(se&&!se.da&&se.capture==_){var $e=se.listener,wt=se.ha||se.src;se.fa&&ir(u.i,se),F=$e.call(wt,I)!==!1&&F}}return F&&!I.defaultPrevented}function fa(u,m,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function ri(u){u.g=fa(()=>{u.g=null,u.i&&(u.i=!1,ri(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ji extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ri(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(u){K.call(this),this.h=u,this.g={}}j(Xi,K);var pa=[];function ma(u){Re(u.g,function(m,_){this.g.hasOwnProperty(_)&&Cr(m)},u),u.g={}}Xi.prototype.N=function(){Xi.aa.N.call(this),ma(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ga=h.JSON.stringify,ya=h.JSON.parse,va=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Zi(){}Zi.prototype.h=null;function Ks(u){return u.h||(u.h=u.i())}function Gs(){}var Tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){H.call(this,"d")}j(sr,H);function Qs(){H.call(this,"c")}j(Qs,H);var or={},_a=null;function es(){return _a=_a||new vt}or.La="serverreachability";function wa(u){H.call(this,or.La,u)}j(wa,H);function xr(u){const m=es();_t(m,new wa(m))}or.STAT_EVENT="statevent";function Ea(u,m){H.call(this,or.STAT_EVENT,u),this.stat=m}j(Ea,H);function at(u){const m=es();_t(m,new Ea(m,u))}or.Ma="timingevent";function Ys(u,m){H.call(this,or.Ma,u),this.size=m}j(Ys,H);function Mn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function ns(u,m,_,I,F,q){u.info(function(){if(u.g)if(q)for(var se="",$e=q.split("&"),wt=0;wt<$e.length;wt++){var Me=$e[wt].split("=");if(1<Me.length){var At=Me[0];Me=Me[1];var ft=At.split("_");se=2<=ft.length&&ft[1]=="type"?se+(At+"="+Me+"&"):se+(At+"=redacted&")}}else se=null;else se=q;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+m+`
`+_+`
`+se})}function Js(u,m,_,I,F,q,se){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+m+`
`+_+`
`+q+" "+se})}function jn(u,m,_,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Sd(u,_)+(I?" "+I:"")})}function Ta(u,m){u.info(function(){return"TIMEOUT: "+m})}ts.prototype.info=function(){};function Sd(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var I=_[u];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var se=1;se<F.length;se++)F[se]=""}}}}return ga(_)}catch{return m}}var Xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fn;function rs(){}j(rs,Zi),rs.prototype.g=function(){return new XMLHttpRequest},rs.prototype.i=function(){return{}},Fn=new rs;function Un(u,m,_,I){this.j=u,this.i=m,this.l=_,this.R=I||1,this.U=new Xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $l}function $l(){this.i=null,this.g="",this.h=!1}var Ia={},Zs={};function eo(u,m,_){u.L=1,u.v=li(pn(m)),u.m=_,u.P=!0,Sa(u,null)}function Sa(u,m){u.F=Date.now(),Ge(u),u.A=pn(u.v);var _=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),ci(_.i,"t",I),u.C=0,_=u.j.J,u.h=new $l,u.g=au(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Ji(S(u.Y,u,u.g),u.O)),m=u.U,_=u.g,I=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(pa[0]=F.toString()),F=pa);for(var q=0;q<F.length;q++){var se=ua(_,F[q],I||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),xr(),ns(u.i,u.u,u.A,u.l,u.R,u.m)}Un.prototype.ca=function(u){u=u.target;const m=this.M;m&&Zt(u)==3?m.j():this.Y(u)},Un.prototype.Y=function(u){try{if(u==this.g)e:{const ft=Zt(this.g);var m=this.g.Ba();const An=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||xa(this.g)))){this.J||ft!=4||m==7||(m==8||0>=An?xr(3):xr(2)),is(this);var _=this.g.Z();this.X=_;t:if(Wl(this)){var I=xa(this.g);u="";var F=I.length,q=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){In(this),ii(this);var se="";break t}this.h.i=new h.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(q&&m==F-1)});I.length=0,this.h.g+=u,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=_==200,Js(this.i,this.u,this.A,this.l,this.R,ft,_),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,wt=this.g;if(($e=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie($e)){var Me=$e;break t}}Me=null}if(_=Me)jn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Aa(this,_);else{this.o=!1,this.s=3,at(12),In(this),ii(this);break e}}if(this.P){_=!0;let gn;for(;!this.J&&this.C<se.length;)if(gn=Ad(this,se),gn==Zs){ft==4&&(this.s=4,at(14),_=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==Ia){this.s=4,at(15),jn(this.i,this.l,se,"[Invalid Chunk]"),_=!1;break}else jn(this.i,this.l,gn,null),Aa(this,gn);if(Wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||se.length!=0||this.h.h||(this.s=1,at(16),_=!1),this.o=this.o&&_,!_)jn(this.i,this.l,se,"[Invalid Chunked Response]"),In(this),ii(this);else if(0<se.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),ba(At),At.M=!0,at(11))}}else jn(this.i,this.l,se,null),Aa(this,se);ft==4&&In(this),this.o&&!this.J&&(ft==4?ho(this.j,this):(this.o=!1,Ge(this)))}else oo(this.g),_==400&&0<se.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),In(this),ii(this)}}}catch{}finally{}};function Wl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Ad(u,m){var _=u.C,I=m.indexOf(`
`,_);return I==-1?Zs:(_=Number(m.substring(_,I)),isNaN(_)?Ia:(I+=1,I+_>m.length?Zs:(m=m.slice(I,I+_),u.C=I+_,m)))}Un.prototype.cancel=function(){this.J=!0,In(this)};function Ge(u){u.S=Date.now()+u.I,ql(u,u.I)}function ql(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Mn(S(u.ba,u),m)}function is(u){u.B&&(h.clearTimeout(u.B),u.B=null)}Un.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ta(this.i,this.A),this.L!=2&&(xr(),at(17)),In(this),this.s=2,ii(this)):ql(this,this.S-u)};function ii(u){u.j.G==0||u.J||ho(u.j,u)}function In(u){is(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ma(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Aa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Kt(_.h,u))){if(!u.K&&Kt(_.h,u)&&_.G==3){try{var I=_.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)co(_),qn(_);else break e;uo(_),at(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=Mn(S(_.Za,_),6e3));if(1>=Kl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Vr(_,11)}else if((u.K||_.g==u)&&co(_),!ie(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Me=F[m];if(_.T=Me[0],Me=Me[1],_.G==2)if(Me[0]=="c"){_.K=Me[1],_.ia=Me[2];const At=Me[3];At!=null&&(_.la=At,_.j.info("VER="+_.la));const ft=Me[4];ft!=null&&(_.Aa=ft,_.j.info("SVER="+_.Aa));const An=Me[5];An!=null&&typeof An=="number"&&0<An&&(I=1.5*An,_.L=I,_.j.info("backChannelRequestTimeoutMs_="+I)),I=_;const gn=u.g;if(gn){const ds=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var q=I.h;q.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ka(q,q.h),q.h=null))}if(I.D){const po=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;po&&(I.ya=po,qe(I.I,I.D,po))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),I=_;var se=u;if(I.qa=ou(I,I.J?I.ia:null,I.W),se.K){Gl(I.h,se);var $e=se,wt=I.L;wt&&($e.I=wt),$e.B&&(is($e),Ge($e)),I.g=se}else cs(I);0<_.i.length&&cr(_)}else Me[0]!="stop"&&Me[0]!="close"||Vr(_,7);else _.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Vr(_,7):Dt(_):Me[0]!="noop"&&_.l&&_.l.ta(Me),_.v=0)}}xr(4)}catch{}}var Hl=class{constructor(u,m){this.g=u,this.map=m}};function ss(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Kl(u){return u.h?1:u.g?u.g.size:0}function Kt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ka(u,m){u.g?u.g.add(m):u.h=m}function Gl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ss.prototype.cancel=function(){if(this.i=Ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ql(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return z(u.i)}function to(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,I=0;I<_;I++)m.push(u[I]);return m}m=[],_=0;for(I in u)m[_++]=u[I];return m}function no(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const I in u)m[_++]=I;return m}}}function si(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=no(u),I=to(u),F=I.length,q=0;q<F;q++)m.call(void 0,I[q],_&&_[q],u)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kd(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var I=u[_].indexOf("="),F=null;if(0<=I){var q=u[_].substring(0,I);F=u[_].substring(I+1)}else q=u[_];m(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Nr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Nr){this.h=u.h,as(this,u.j),this.o=u.o,this.g=u.g,oi(this,u.s),this.l=u.l;var m=u.i,_=new ar;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ai(this,_),this.m=u.m}else u&&(m=String(u).match(os))?(this.h=!1,as(this,m[1]||"",!0),this.o=Le(m[2]||""),this.g=Le(m[3]||"",!0),oi(this,m[4]),this.l=Le(m[5]||"",!0),ai(this,m[6]||"",!0),this.m=Le(m[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}Nr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ui(m,ro,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ui(m,ro,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ui(_,_.charAt(0)=="/"?Xl:Jl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ui(_,Ca)),u.join("")};function pn(u){return new Nr(u)}function as(u,m,_){u.j=_?Le(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function oi(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ai(u,m,_){m instanceof ar?(u.i=m,lr(u.i,u.h)):(_||(m=ui(m,Zl)),u.i=new ar(m,u.h))}function qe(u,m,_){u.i.set(m,_)}function li(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Le(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ui(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Yl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Yl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ro=/[#\/\?@]/g,Jl=/[#\?:]/g,Xl=/[#\?]/g,Zl=/[#\?@]/g,Ca=/#/g;function ar(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function bt(u){u.g||(u.g=new Map,u.h=0,u.i&&kd(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=ar.prototype,n.add=function(u,m){bt(this),this.i=null,u=Sn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Bn(u,m){bt(u),m=Sn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function zn(u,m){return bt(u),m=Sn(u,m),u.g.has(m)}n.forEach=function(u,m){bt(this),this.g.forEach(function(_,I){_.forEach(function(F){u.call(m,F,I,this)},this)},this)},n.na=function(){bt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let I=0;I<m.length;I++){const F=u[I];for(let q=0;q<F.length;q++)_.push(m[I])}return _},n.V=function(u){bt(this);let m=[];if(typeof u=="string")zn(this,u)&&(m=m.concat(this.g.get(Sn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return bt(this),this.i=null,u=Sn(this,u),zn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ci(u,m,_){Bn(u,m),0<_.length&&(u.i=null,u.g.set(Sn(u,m),z(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var I=m[_];const q=encodeURIComponent(String(I)),se=this.V(I);for(I=0;I<se.length;I++){var F=q;se[I]!==""&&(F+="="+encodeURIComponent(String(se[I]))),u.push(F)}}return this.i=u.join("&")};function Sn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function lr(u,m){m&&!u.j&&(bt(u),u.i=null,u.g.forEach(function(_,I){var F=I.toLowerCase();I!=F&&(Bn(this,I),ci(this,F,_))},u)),u.j=m}function Cd(u,m){const _=new ts;if(h.Image){const I=new Image;I.onload=P(Xt,_,"TestLoadImage: loaded",!0,m,I),I.onerror=P(Xt,_,"TestLoadImage: error",!1,m,I),I.onabort=P(Xt,_,"TestLoadImage: abort",!1,m,I),I.ontimeout=P(Xt,_,"TestLoadImage: timeout",!1,m,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function eu(u,m){const _=new ts,I=new AbortController,F=setTimeout(()=>{I.abort(),Xt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(q=>{clearTimeout(F),q.ok?Xt(_,"TestPingServer: ok",!0,m):Xt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Xt(_,"TestPingServer: error",!1,m)})}function Xt(u,m,_,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(_)}catch{}}function Rd(){this.g=new va}function tu(u,m,_){const I=_||"";try{si(u,function(F,q){let se=F;y(F)&&(se=ga(F)),m.push(I+q+"="+encodeURIComponent(se))})}catch(F){throw m.push(I+"type="+encodeURIComponent("_badmap")),F}}function br(u){this.l=u.Ub||null,this.j=u.eb||!1}j(br,Zi),br.prototype.g=function(){return new ls(this.l,this.j)},br.prototype.i=(function(u){return function(){return u}})({});function ls(u,m){vt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(ls,vt),n=ls.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Wn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function nu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?$n(this):Wn(this),this.readyState==3&&nu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,$n(this))},n.Qa=function(u){this.g&&(this.response=u,$n(this))},n.ga=function(){this.g&&$n(this)};function $n(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Wn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Dr(u){let m="";return Re(u,function(_,I){m+=I,m+=":",m+=_,m+=`\r
`}),m}function di(u,m,_){e:{for(I in _){var I=!1;break e}I=!0}I||(_=Dr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):qe(u,m,_))}function et(u){vt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(et,vt);var Pd=/^https?$/i,Ra=["POST","PUT"];n=et.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fn.g(),this.v=this.o?Ks(this.o):Ks(Fn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){us(this,q);return}if(u=_||"",_=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)_.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const q of I.keys())_.set(q,I.get(q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),F=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Ra,m,void 0))||I||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,se]of _)this.g.setRequestHeader(q,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{so(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){us(this,q)}};function us(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,io(u),mn(u)}function io(u){u.A||(u.A=!0,_t(u,"complete"),_t(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,_t(this,"complete"),_t(this,"abort"),mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pa(this):this.bb())},n.bb=function(){Pa(this)};function Pa(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Zt(u)!=4||u.Z()!=2)){if(u.u&&Zt(u)==4)fa(u.Ea,0,u);else if(_t(u,"readystatechange"),Zt(u)==4){u.h=!1;try{const se=u.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var I;if(I=se===0){var F=String(u.D).match(os)[1]||null;!F&&h.self&&h.self.location&&(F=h.self.location.protocol.slice(0,-1)),I=!Pd.test(F?F.toLowerCase():"")}_=I}if(_)_t(u,"complete"),_t(u,"success");else{u.m=6;try{var q=2<Zt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",io(u)}}finally{mn(u)}}}}function mn(u,m){if(u.g){so(u);const _=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||_t(u,"ready");try{_.onreadystatechange=I}catch{}}}function so(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Zt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ya(m)}};function xa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function oo(u){const m={};u=(u.g&&2<=Zt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(ie(u[I]))continue;var _=O(u[I]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[F]||[];m[F]=q,q.push(_)}b(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Na(u){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ur("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ur("baseRetryDelayMs",5e3,u),this.cb=ur("retryDelaySeedMs",1e4,u),this.Wa=ur("forwardChannelMaxRetries",2,u),this.wa=ur("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ss(u&&u.concurrentRequestLimit),this.Da=new Rd,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Na.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,I){at(0),this.W=u,this.H=m||{},_&&I!==void 0&&(this.H.OSID=_,this.H.OAID=I),this.F=this.X,this.I=ou(this,null,this.W),cr(this)};function Dt(u){if(ao(u),u.G==3){var m=u.U++,_=pn(u.I);if(qe(_,"SID",u.K),qe(_,"RID",m),qe(_,"TYPE","terminate"),Or(u,_),m=new Un(u,u.j,m),m.L=2,m.v=li(pn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.v,_=!0),_||(m.g=au(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ge(m)}su(u)}function qn(u){u.g&&(ba(u),u.g.cancel(),u.g=null)}function ao(u){qn(u),u.u&&(h.clearTimeout(u.u),u.u=null),co(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function cr(u){if(!fn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Ue||ae(),oe||(Ue(),oe=!0),_e.add(m,u),u.B=0}}function xd(u,m){return Kl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Mn(S(u.Ga,u,m),iu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Un(this,this.j,u);let q=this.o;if(this.S&&(q?(q=A(q),x(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var I=this.i[_];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=hi(this,F,m),_=pn(this.I),qe(_,"RID",u),qe(_,"CVER",22),this.D&&qe(_,"X-HTTP-Session-Id",this.D),Or(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Dr(q)))+"&"+m:this.m&&di(_,this.m,q)),ka(this.h,F),this.Ua&&qe(_,"TYPE","init"),this.P?(qe(_,"$req",m),qe(_,"SID","null"),F.T=!0,eo(F,_,null)):eo(F,_,m),this.G=2}}else this.G==3&&(u?lo(this,u):this.i.length==0||fn(this.h)||lo(this))};function lo(u,m){var _;m?_=m.l:_=u.U++;const I=pn(u.I);qe(I,"SID",u.K),qe(I,"RID",_),qe(I,"AID",u.T),Or(u,I),u.m&&u.o&&di(I,u.m,u.o),_=new Un(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=hi(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ka(u.h,_),eo(_,I,m)}function Or(u,m){u.H&&Re(u.H,function(_,I){qe(m,I,_)}),u.l&&si({},function(_,I){qe(m,I,_)})}function hi(u,m,_){_=Math.min(u.i.length,_);var I=u.l?S(u.l.Na,u.l,u):null;e:{var F=u.i;let q=-1;for(;;){const se=["count="+_];q==-1?0<_?(q=F[0].g,se.push("ofs="+q)):q=0:se.push("ofs="+q);let $e=!0;for(let wt=0;wt<_;wt++){let Me=F[wt].g;const At=F[wt].map;if(Me-=q,0>Me)q=Math.max(0,F[wt].g-100),$e=!1;else try{tu(At,se,"req"+Me+"_")}catch{I&&I(At)}}if($e){I=se.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,I}function cs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Ue||ae(),oe||(Ue(),oe=!0),_e.add(m,u),u.v=0}}function uo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Mn(S(u.Fa,u),iu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,ru(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Mn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),qn(this),ru(this))};function ba(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function ru(u){u.g=new Un(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=pn(u.qa);qe(m,"RID","rpc"),qe(m,"SID",u.K),qe(m,"AID",u.T),qe(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(m,"TO",u.ja),qe(m,"TYPE","xmlhttp"),Or(u,m),u.m&&u.o&&di(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=li(pn(m)),_.m=null,_.P=!0,Sa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,qn(this),uo(this),at(19))};function co(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function ho(u,m){var _=null;if(u.g==m){co(u),ba(u),u.g=null;var I=2}else if(Kt(u.h,m))_=m.D,Gl(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;I=es(),_t(I,new Ys(I,_)),cr(u)}else cs(u);else if(F=m.s,F==3||F==0&&0<m.X||!(I==1&&xd(u,m)||I==2&&uo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:Vr(u,5);break;case 4:Vr(u,10);break;case 3:Vr(u,6);break;default:Vr(u,2)}}}function iu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Vr(u,m){if(u.j.info("Error code "+m),m==2){var _=S(u.fb,u),I=u.Xa;const F=!I;I=new Nr(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||as(I,"https"),li(I),F?Cd(I.toString(),_):eu(I.toString(),_)}else at(2);u.G=0,u.l&&u.l.sa(m),su(u),ao(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function su(u){if(u.G=0,u.ka=[],u.l){const m=Ql(u.h);(m.length!=0||u.i.length!=0)&&(M(u.ka,m),M(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function ou(u,m,_){var I=_ instanceof Nr?pn(_):new Nr(_);if(I.g!="")m&&(I.g=m+"."+I.g),oi(I,I.s);else{var F=h.location;I=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var q=new Nr(null);I&&as(q,I),m&&(q.g=m),F&&oi(q,F),_&&(q.l=_),I=q}return _=u.D,m=u.ya,_&&m&&qe(I,_,m),qe(I,"VER",u.la),Or(u,I),I}function au(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new et(new br({eb:_})):new et(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Da(){}n=Da.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fo(){}fo.prototype.g=function(u,m){return new Gt(u,m)};function Gt(u,m){vt.call(this),this.g=new Na(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ie(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ie(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new dr(this)}j(Gt,vt),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Dt(this.g)},Gt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ga(u),u=_);m.i.push(new Hl(m.Ya++,u)),m.G==3&&cr(m)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Dt(this.g),delete this.g,Gt.aa.N.call(this)};function lu(u){sr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}j(lu,sr);function uu(){Qs.call(this),this.status=1}j(uu,Qs);function dr(u){this.g=u}j(dr,Da),dr.prototype.ua=function(){_t(this.g,"a")},dr.prototype.ta=function(u){_t(this.g,new lu(u))},dr.prototype.sa=function(u){_t(this.g,new uu)},dr.prototype.ra=function(){_t(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,zw=function(){return new fo},Bw=function(){return es()},Uw=or,bf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xs.NO_ERROR=0,Xs.TIMEOUT=8,Xs.HTTP_ERROR=6,mc=Xs,zl.COMPLETE="complete",Fw=zl,Gs.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,ol=Gs,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,jw=et}).apply(typeof ic<"u"?ic:typeof self<"u"?self:typeof window<"u"?window:{});const fv="@firebase/firestore",pv="4.8.0";/**
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
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
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
 */let sa="11.10.0";/**
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
 */const Ns=new lp("@firebase/firestore");function Vo(){return Ns.logLevel}function fe(n,...e){if(Ns.logLevel<=Oe.DEBUG){const t=e.map(_p);Ns.debug(`Firestore (${sa}): ${n}`,...t)}}function Xr(n,...e){if(Ns.logLevel<=Oe.ERROR){const t=e.map(_p);Ns.error(`Firestore (${sa}): ${n}`,...t)}}function ji(n,...e){if(Ns.logLevel<=Oe.WARN){const t=e.map(_p);Ns.warn(`Firestore (${sa}): ${n}`,...t)}}function _p(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,$w(n,i,t)}function $w(n,e,t){let i=`FIRESTORE (${sa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Xr(i),new Error(i)}function ze(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||$w(e,o,i)}function Pe(n,e){return n}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Ww{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Wt.UNAUTHENTICATED)))}shutdown(){}}class fC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class pC{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Gr,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},h=p=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>h(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Gr)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string",31837,{l:i}),new Ww(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class mC{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gC{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new mC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const i=l=>{l.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,fe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new mv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new mv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function qw(){return new TextEncoder}/**
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
 */class wp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=vC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function be(n,e){return n<e?-1:n>e?1:0}function Df(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return be(i,o);{const l=qw(),c=_C(l.encode(gv(n,t)),l.encode(gv(e,t)));return c!==0?c:be(i,o)}}t+=i>65535?2:1}return be(n.length,e.length)}function gv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function _C(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return be(n[t],e[t]);return be(n.length,e.length)}function qo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const yv="__name__";class gr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Se(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=gr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return be(e.length,t.length)}static compareSegments(e,t){const i=gr.isNumericId(e),o=gr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?gr.extractNumericId(e).compare(gr.extractNumericId(t)):Df(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Li.fromString(e.substring(4,e.length-2))}}class Ye extends gr{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ce(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ye(t)}static emptyPath(){return new Ye([])}}const wC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends gr{construct(e,t,i){return new Mt(e,t,i)}static isValidIdentifier(e){return wC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yv}static keyField(){return new Mt([yv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ce(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new ce(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ce(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else h==="`"?(c=!c,o++):h!=="."||c?(i+=h,o++):(l(),o++)}if(l(),c)throw new ce(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
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
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(Ye.fromString(e))}static fromName(e){return new we(Ye.fromString(e).popFirst(5))}static empty(){return new we(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new Ye(e.slice()))}}/**
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
 */function Hw(n,e,t){if(!t)throw new ce(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function EC(n,e,t,i){if(e===!0&&i===!0)throw new ce(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vv(n){if(!we.isDocumentKey(n))throw new ce(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _v(n){if(we.isDocumentKey(n))throw new ce(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function td(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se(12329,{type:typeof n})}function hn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=td(n);throw new ce(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function yt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Nl(n,e){if(!Kw(n))throw new ce(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ce(G.INVALID_ARGUMENT,t);return!0}/**
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
 */const wv=-62135596800,Ev=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Ev);return new We(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<wv)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ev}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Nl(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:yt("string",We._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
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
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new We(0,0))}static max(){return new Ce(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const wl=-1;function TC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(i===1e9?new We(t+1,0):new We(t,i));return new Fi(o,we.empty(),e)}function IC(n){return new Fi(n.readTime,n.key,wl)}class Fi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Fi(Ce.min(),we.empty(),wl)}static max(){return new Fi(Ce.max(),we.empty(),wl)}}function SC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function oa(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==AC)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.reject(t)}static resolve(e){return new Q(((t,i)=>{t(e)}))}static reject(e){return new Q(((t,i)=>{i(e)}))}static waitFor(e){return new Q(((t,i)=>{let o=0,l=0,c=!1;e.forEach((h=>{++o,h.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=Q.resolve(!1);for(const i of e)t=t.next((o=>o?Q.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new Q(((i,o)=>{const l=e.length,c=new Array(l);let h=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((w=>{c[y]=w,++h,h===l&&i(c)}),(w=>o(w)))}}))}static doWhile(e,t){return new Q(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function CC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function aa(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class nd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}nd.ue=-1;/**
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
 */const Ep=-1;function rd(n){return n==null}function bc(n){return n===0&&1/n==-1/0}function RC(n){return typeof n=="number"&&Number.isInteger(n)&&!bc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Gw="";function PC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Tv(e)),e=xC(n.get(t),e);return Tv(e)}function xC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Gw:t+="";break;default:t+=l}}return t}function Tv(n){return n+Gw+""}/**
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
 */function Iv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class it{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sc(this.root,e,this.comparator,!0)}}class sc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Lt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(e){return new Sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class Sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new wn([])}unionWith(e){let t=new It(Mt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Yw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Yw("Invalid base64 string: "+l):l}})(e);return new jt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const NC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(n){if(ze(!!n,39018),typeof n=="string"){let e=0;const t=NC.exec(n);if(ze(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bi(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="server_timestamp",Xw="__type__",Zw="__previous_value__",eE="__local_write_time__";function Tp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Xw])===null||t===void 0?void 0:t.stringValue)===Jw}function id(n){const e=n.mapValue.fields[Zw];return Tp(e)?id(e):e}function El(n){const e=Ui(n.mapValue.fields[eE].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class bC{constructor(e,t,i,o,l,c,h,p,y,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=w}}const Dc="(default)";class Tl{constructor(e,t){this.projectId=e,this.database=t||Dc}static empty(){return new Tl("","")}get isDefaultDatabase(){return this.database===Dc}isEqual(e){return e instanceof Tl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="__type__",DC="__max__",oc={mapValue:{}},nE="__vector__",Oc="value";function zi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Tp(n)?4:VC(n)?9007199254740991:OC(n)?10:11:Se(28295,{value:n})}function Sr(n,e){if(n===e)return!0;const t=zi(n);if(t!==zi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return El(n).isEqual(El(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ui(o.timestampValue),h=Ui(l.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Bi(o.bytesValue).isEqual(Bi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ut(o.doubleValue),h=ut(l.doubleValue);return c===h?bc(c)===bc(h):isNaN(c)&&isNaN(h)}return!1})(n,e);case 9:return qo(n.arrayValue.values||[],e.arrayValue.values||[],Sr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},h=l.mapValue.fields||{};if(Iv(c)!==Iv(h))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(h[p]===void 0||!Sr(c[p],h[p])))return!1;return!0})(n,e);default:return Se(52216,{left:n})}}function Il(n,e){return(n.values||[]).find((t=>Sr(t,e)))!==void 0}function Ho(n,e){if(n===e)return 0;const t=zi(n),i=zi(e);if(t!==i)return be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const h=ut(l.integerValue||l.doubleValue),p=ut(c.integerValue||c.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1})(n,e);case 3:return Av(n.timestampValue,e.timestampValue);case 4:return Av(El(n),El(e));case 5:return Df(n.stringValue,e.stringValue);case 6:return(function(l,c){const h=Bi(l),p=Bi(c);return h.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const h=l.split("/"),p=c.split("/");for(let y=0;y<h.length&&y<p.length;y++){const w=be(h[y],p[y]);if(w!==0)return w}return be(h.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const h=be(ut(l.latitude),ut(c.latitude));return h!==0?h:be(ut(l.longitude),ut(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return kv(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var h,p,y,w;const T=l.fields||{},S=c.fields||{},P=(h=T[Oc])===null||h===void 0?void 0:h.arrayValue,j=(p=S[Oc])===null||p===void 0?void 0:p.arrayValue,z=be(((y=P==null?void 0:P.values)===null||y===void 0?void 0:y.length)||0,((w=j==null?void 0:j.values)===null||w===void 0?void 0:w.length)||0);return z!==0?z:kv(P,j)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===oc.mapValue&&c===oc.mapValue)return 0;if(l===oc.mapValue)return 1;if(c===oc.mapValue)return-1;const h=l.fields||{},p=Object.keys(h),y=c.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const S=Df(p[T],w[T]);if(S!==0)return S;const P=Ho(h[p[T]],y[w[T]]);if(P!==0)return P}return be(p.length,w.length)})(n.mapValue,e.mapValue);default:throw Se(23264,{le:t})}}function Av(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=Ui(n),i=Ui(e),o=be(t.seconds,i.seconds);return o!==0?o:be(t.nanos,i.nanos)}function kv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Ho(t[o],i[o]);if(l)return l}return be(t.length,i.length)}function Ko(n){return Of(n)}function Of(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Ui(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return we.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Of(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Of(t.fields[c])}`;return o+"}"})(n.mapValue):Se(61005,{value:n})}function gc(n){switch(zi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=id(n);return e?16+gc(e):16;case 5:return 2*n.stringValue.length;case 6:return Bi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+gc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Gi(i.fields,((l,c)=>{o+=l.length+gc(c)})),o})(n.mapValue);default:throw Se(13486,{value:n})}}function Cv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Vf(n){return!!n&&"integerValue"in n}function Ip(n){return!!n&&"arrayValue"in n}function Rv(n){return!!n&&"nullValue"in n}function Pv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yc(n){return!!n&&"mapValue"in n}function OC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[tE])===null||t===void 0?void 0:t.stringValue)===nE}function hl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=hl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function VC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===DC}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!yc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hl(t)}setAll(e){let t=Mt.emptyPath(),i={},o=[];e.forEach(((c,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=h.popLast()}c?i[h.lastSegment()]=hl(c):o.push(h.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());yc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];yc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Gi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new un(hl(this.value))}}function rE(n){const e=[];return Gi(n.fields,((t,i)=>{const o=new Mt([t]);if(yc(i)){const l=rE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new wn(e)}/**
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
 */class qt{constructor(e,t,i,o,l,c,h){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=h}static newInvalidDocument(e){return new qt(e,0,Ce.min(),Ce.min(),Ce.min(),un.empty(),0)}static newFoundDocument(e,t,i,o){return new qt(e,1,t,Ce.min(),i,o,0)}static newNoDocument(e,t){return new qt(e,2,t,Ce.min(),Ce.min(),un.empty(),0)}static newUnknownDocument(e,t){return new qt(e,3,t,Ce.min(),Ce.min(),un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vc{constructor(e,t){this.position=e,this.inclusive=t}}function xv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=we.comparator(we.fromName(c.referenceValue),t.key):i=Ho(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Nv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Sr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Lc{constructor(e,t="asc"){this.field=e,this.dir=t}}function LC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class iE{}class gt extends iE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new jC(e,t,i):t==="array-contains"?new BC(e,i):t==="in"?new zC(e,i):t==="not-in"?new $C(e,i):t==="array-contains-any"?new WC(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new FC(e,i):new UC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ho(t,this.value)):t!==null&&zi(this.value)===zi(t)&&this.matchesComparison(Ho(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends iE{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new nr(e,t)}matches(e){return sE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function sE(n){return n.op==="and"}function oE(n){return MC(n)&&sE(n)}function MC(n){for(const e of n.filters)if(e instanceof nr)return!1;return!0}function Lf(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+Ko(n.value);if(oE(n))return n.filters.map((e=>Lf(e))).join(",");{const e=n.filters.map((t=>Lf(t))).join(",");return`${n.op}(${e})`}}function aE(n,e){return n instanceof gt?(function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&Sr(i.value,o.value)})(n,e):n instanceof nr?(function(i,o){return o instanceof nr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,h)=>l&&aE(c,o.filters[h])),!0):!1})(n,e):void Se(19439)}function lE(n){return n instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ko(t.value)}`})(n):n instanceof nr?(function(t){return t.op.toString()+" {"+t.getFilters().map(lE).join(" ,")+"}"})(n):"Filter"}class jC extends gt{constructor(e,t,i){super(e,t,i),this.key=we.fromName(i.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class FC extends gt{constructor(e,t){super(e,"in",t),this.keys=uE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class UC extends gt{constructor(e,t){super(e,"not-in",t),this.keys=uE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function uE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>we.fromName(i.referenceValue)))}class BC extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ip(t)&&Il(t.arrayValue,this.value)}}class zC extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Il(this.value.arrayValue,t)}}class $C extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Il(this.value.arrayValue,t)}}class WC extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ip(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Il(this.value.arrayValue,i)))}}/**
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
 */class qC{constructor(e,t=null,i=[],o=[],l=null,c=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=h,this.Pe=null}}function bv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new qC(n,e,t,i,o,l,c)}function Sp(n){const e=Pe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Lf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),rd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Ko(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Ko(i))).join(",")),e.Pe=t}return e.Pe}function Ap(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!LC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!aE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nv(n.startAt,e.startAt)&&Nv(n.endAt,e.endAt)}function Mf(n){return we.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class bl{constructor(e,t=null,i=[],o=[],l=null,c="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=h,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function HC(n,e,t,i,o,l,c,h){return new bl(n,e,t,i,o,l,c,h)}function sd(n){return new bl(n)}function Dv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cE(n){return n.collectionGroup!==null}function fl(n){const e=Pe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new It(Mt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(h=h.add(y.field))}))})),h})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Lc(l,i))})),t.has(Mt.keyField().canonicalString())||e.Te.push(new Lc(Mt.keyField(),i))}return e.Te}function wr(n){const e=Pe(n);return e.Ie||(e.Ie=KC(e,fl(n))),e.Ie}function KC(n,e){if(n.limitType==="F")return bv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Lc(o.field,l)}));const t=n.endAt?new Vc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Vc(n.startAt.position,n.startAt.inclusive):null;return bv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function jf(n,e){const t=n.filters.concat([e]);return new bl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ff(n,e,t){return new bl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function od(n,e){return Ap(wr(n),wr(e))&&n.limitType===e.limitType}function dE(n){return`${Sp(wr(n))}|lt:${n.limitType}`}function Lo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>lE(o))).join(", ")}]`),rd(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Ko(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Ko(o))).join(",")),`Target(${i})`})(wr(n))}; limitType=${n.limitType})`}function ad(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):we.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of fl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,h,p){const y=xv(c,h,p);return c.inclusive?y<=0:y<0})(i.startAt,fl(i),o)||i.endAt&&!(function(c,h,p){const y=xv(c,h,p);return c.inclusive?y>=0:y>0})(i.endAt,fl(i),o))})(n,e)}function GC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hE(n){return(e,t)=>{let i=!1;for(const o of fl(n)){const l=QC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function QC(n,e,t){const i=n.field.isKeyField()?we.comparator(e.key,t.key):(function(l,c,h){const p=c.data.field(l),y=h.data.field(l);return p!==null&&y!==null?Ho(p,y):Se(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se(19790,{direction:n.dir})}}/**
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
 */class Fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Gi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Qw(this.inner)}size(){return this.innerSize}}/**
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
 */const YC=new it(we.comparator);function Zr(){return YC}const fE=new it(we.comparator);function al(...n){let e=fE;for(const t of n)e=e.insert(t.key,t);return e}function pE(n){let e=fE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function As(){return pl()}function mE(){return pl()}function pl(){return new Fs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const JC=new it(we.comparator),XC=new It(we.comparator);function Ve(...n){let e=XC;for(const t of n)e=e.add(t);return e}const ZC=new It(be);function eR(){return ZC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function gE(n){return{integerValue:""+n}}function tR(n,e){return RC(e)?gE(e):kp(n,e)}/**
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
 */class ld{constructor(){this._=void 0}}function nR(n,e,t){return n instanceof Mc?(function(o,l){const c={fields:{[Xw]:{stringValue:Jw},[eE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Tp(l)&&(l=id(l)),l&&(c.fields[Zw]=l),{mapValue:c}})(t,e):n instanceof Go?vE(n,e):n instanceof Qo?_E(n,e):(function(o,l){const c=yE(o,l),h=Ov(c)+Ov(o.Ee);return Vf(c)&&Vf(o.Ee)?gE(h):kp(o.serializer,h)})(n,e)}function rR(n,e,t){return n instanceof Go?vE(n,e):n instanceof Qo?_E(n,e):t}function yE(n,e){return n instanceof jc?(function(i){return Vf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Mc extends ld{}class Go extends ld{constructor(e){super(),this.elements=e}}function vE(n,e){const t=wE(e);for(const i of n.elements)t.some((o=>Sr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Qo extends ld{constructor(e){super(),this.elements=e}}function _E(n,e){let t=wE(e);for(const i of n.elements)t=t.filter((o=>!Sr(o,i)));return{arrayValue:{values:t}}}class jc extends ld{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Ov(n){return ut(n.integerValue||n.doubleValue)}function wE(n){return Ip(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class EE{constructor(e,t){this.field=e,this.transform=t}}function iR(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof Go&&o instanceof Go||i instanceof Qo&&o instanceof Qo?qo(i.elements,o.elements,Sr):i instanceof jc&&o instanceof jc?Sr(i.Ee,o.Ee):i instanceof Mc&&o instanceof Mc})(n.transform,e.transform)}class sR{constructor(e,t){this.version=e,this.transformResults=t}}class Vn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ud{}function TE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Cp(n.key,Vn.none()):new Dl(n.key,n.data,Vn.none());{const t=n.data,i=un.empty();let o=new It(Mt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Qi(n.key,i,new wn(o.toArray()),Vn.none())}}function oR(n,e,t){n instanceof Dl?(function(o,l,c){const h=o.value.clone(),p=Lv(o.fieldTransforms,l,c.transformResults);h.setAll(p),l.convertToFoundDocument(c.version,h).setHasCommittedMutations()})(n,e,t):n instanceof Qi?(function(o,l,c){if(!vc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const h=Lv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(IE(o)),p.setAll(h),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ml(n,e,t,i){return n instanceof Dl?(function(l,c,h,p){if(!vc(l.precondition,c))return h;const y=l.value.clone(),w=Mv(l.fieldTransforms,p,c);return y.setAll(w),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Qi?(function(l,c,h,p){if(!vc(l.precondition,c))return h;const y=Mv(l.fieldTransforms,p,c),w=c.data;return w.setAll(IE(l)),w.setAll(y),c.convertToFoundDocument(c.version,w).setHasLocalMutations(),h===null?null:h.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,c,h){return vc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h})(n,e,t)}function aR(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=yE(i.transform,o||null);l!=null&&(t===null&&(t=un.empty()),t.set(i.field,l))}return t||null}function Vv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&qo(i,o,((l,c)=>iR(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Dl extends ud{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qi extends ud{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function IE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Lv(n,e,t){const i=new Map;ze(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,h=e.data.field(l.field);i.set(l.field,rR(c,h,t[o]))}return i}function Mv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,nR(l,c,e))}return i}class Cp extends ud{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lR extends ud{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&oR(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ml(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ml(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=mE();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let h=this.applyToLocalView(c,l.mutatedFields);h=t.has(o.key)?null:h;const p=TE(c,h);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ce.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&qo(this.mutations,e.mutations,((t,i)=>Vv(t,i)))&&qo(this.baseMutations,e.baseMutations,((t,i)=>Vv(t,i)))}}class Rp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){ze(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return JC})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new Rp(e,t,i,o)}}/**
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
 */class cR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var mt,je;function hR(n){switch(n){case G.OK:return Se(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return Se(15467,{code:n})}}function SE(n){if(n===void 0)return Xr("GRPC error has no .code"),G.UNKNOWN;switch(n){case mt.OK:return G.OK;case mt.CANCELLED:return G.CANCELLED;case mt.UNKNOWN:return G.UNKNOWN;case mt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case mt.INTERNAL:return G.INTERNAL;case mt.UNAVAILABLE:return G.UNAVAILABLE;case mt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case mt.NOT_FOUND:return G.NOT_FOUND;case mt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case mt.ABORTED:return G.ABORTED;case mt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case mt.DATA_LOSS:return G.DATA_LOSS;default:return Se(39323,{code:n})}}(je=mt||(mt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const fR=new Li([4294967295,4294967295],0);function jv(n){const e=qw().encode(n),t=new Mw;return t.update(e),new Uint8Array(t.digest())}function Fv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Li([t,i],0),new Li([o,l],0)]}class Pp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ll(`Invalid padding: ${t}`);if(i<0)throw new ll(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ll(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ll(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Li.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Li.fromNumber(i)));return o.compare(fR)===1&&(o=new Li([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=jv(e),[i,o]=Fv(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);if(!this.ye(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Pp(l,o,t);return i.forEach((h=>c.insert(h))),c}insert(e){if(this.fe===0)return;const t=jv(e),[i,o]=Fv(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);this.we(c)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ll extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cd{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Ol.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new cd(Ce.min(),o,new it(be),Zr(),Ve())}}class Ol{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ol(i,t,Ve(),Ve(),Ve())}}/**
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
 */class _c{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class AE{constructor(e,t){this.targetId=e,this.De=t}}class kE{constructor(e,t,i=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Uv{constructor(){this.ve=0,this.Ce=Bv(),this.Fe=jt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),t=Ve(),i=Ve();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Se(38017,{changeType:l})}})),new Ol(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Bv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class pR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Zr(),this.je=ac(),this.Je=ac(),this.He=new it(be)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(Mf(l))if(i===0){const c=new we(l.path);this.Xe(t,c,qt.newNoDocument(c,Ce.min()))}else ze(i===1,20013,{expectedCount:i});else{const c=this.ot(t);if(c!==i){const h=this._t(e),p=h?this.ut(h,e,c):1;if(p!==0){this.rt(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,h;try{c=Bi(i).toUint8Array()}catch(p){if(p instanceof Yw)return ji("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new Pp(c,o,l)}catch(p){return ji(p instanceof ll?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.fe===0?null:h}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.We.lt(),h=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(h)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,c)=>{const h=this.st(c);if(h){if(l.current&&Mf(h.target)){const p=new we(h.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,qt.newNoDocument(p,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}}));let i=Ve();this.Je.forEach(((l,c)=>{let h=!0;c.forEachWhile((p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)})),h&&(i=i.add(l))})),this.ze.forEach(((l,c)=>c.setReadTime(e)));const o=new cd(e,t,this.He,this.ze,i);return this.ze=Zr(),this.je=ac(),this.Je=ac(),this.He=new it(be),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Uv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new It(be),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new It(be),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Uv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ac(){return new it(we.comparator)}function Bv(){return new it(we.comparator)}const mR={asc:"ASCENDING",desc:"DESCENDING"},gR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yR={and:"AND",or:"OR"};class vR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uf(n,e){return n.useProto3Json||rd(e)?e:{value:e}}function Fc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _R(n,e){return Fc(n,e.toTimestamp())}function Er(n){return ze(!!n,49232),Ce.fromTimestamp((function(t){const i=Ui(t);return new We(i.seconds,i.nanos)})(n))}function xp(n,e){return Bf(n,e).canonicalString()}function Bf(n,e){const t=(function(o){return new Ye(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function RE(n){const e=Ye.fromString(n);return ze(DE(e),10190,{key:e.toString()}),e}function zf(n,e){return xp(n.databaseId,e.path)}function df(n,e){const t=RE(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new we(xE(t))}function PE(n,e){return xp(n.databaseId,e)}function wR(n){const e=RE(n);return e.length===4?Ye.emptyPath():xE(e)}function $f(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xE(n){return ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function zv(n,e,t){return{name:zf(n,e),fields:t.value.mapValue.fields}}function ER(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Se(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(ze(w===void 0||typeof w=="string",58123),jt.fromBase64String(w||"")):(ze(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),jt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,h=c&&(function(y){const w=y.code===void 0?G.UNKNOWN:SE(y.code);return new ce(w,y.message||"")})(c);t=new kE(i,o,l,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=df(n,i.document.name),l=Er(i.document.updateTime),c=i.document.createTime?Er(i.document.createTime):Ce.min(),h=new un({mapValue:{fields:i.document.fields}}),p=qt.newFoundDocument(o,l,c,h),y=i.targetIds||[],w=i.removedTargetIds||[];t=new _c(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=df(n,i.document),l=i.readTime?Er(i.readTime):Ce.min(),c=qt.newNoDocument(o,l),h=i.removedTargetIds||[];t=new _c([],h,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=df(n,i.document),l=i.removedTargetIds||[];t=new _c([],l,o,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new dR(o,l),h=i.targetId;t=new AE(h,c)}}return t}function TR(n,e){let t;if(e instanceof Dl)t={update:zv(n,e.key,e.value)};else if(e instanceof Cp)t={delete:zf(n,e.key)};else if(e instanceof Qi)t={update:zv(n,e.key,e.data),updateMask:NR(e.fieldMask)};else{if(!(e instanceof lR))return Se(16599,{Rt:e.type});t={verify:zf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const h=c.transform;if(h instanceof Mc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Go)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Qo)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof jc)return{fieldPath:c.field.canonicalString(),increment:h.Ee};throw Se(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:_R(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se(27497)})(n,e.precondition)),t}function IR(n,e){return n&&n.length>0?(ze(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?Er(o.updateTime):Er(l);return c.isEqual(Ce.min())&&(c=Er(l)),new sR(c,o.transformResults||[])})(t,e)))):[]}function SR(n,e){return{documents:[PE(n,e.path)]}}function AR(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=PE(n,o);const l=(function(y){if(y.length!==0)return bE(nr.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((w=>(function(S){return{field:Mo(S.field),direction:RR(S.dir)}})(w)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const h=Uf(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function kR(n){let e=wR(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ze(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const S=NE(T);return S instanceof nr&&oE(S)?S.getFilters():[S]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((S=>(function(j){return new Lc(jo(j.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(S)))})(t.orderBy));let h=null;t.limit&&(h=(function(T){let S;return S=typeof T=="object"?T.value:T,rd(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(T){const S=!!T.before,P=T.values||[];return new Vc(P,S)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const S=!T.before,P=T.values||[];return new Vc(P,S)})(t.endAt)),HC(e,o,c,l,h,"F",p,y)}function CR(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function NE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=jo(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=jo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=jo(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=jo(t.unaryFilter.field);return gt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}})(n):n.fieldFilter!==void 0?(function(t){return gt.create(jo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return nr.create(t.compositeFilter.filters.map((i=>NE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se(1026)}})(t.compositeFilter.op))})(n):Se(30097,{filter:n})}function RR(n){return mR[n]}function PR(n){return gR[n]}function xR(n){return yR[n]}function Mo(n){return{fieldPath:n.canonicalString()}}function jo(n){return Mt.fromServerFormat(n.fieldPath)}function bE(n){return n instanceof gt?(function(t){if(t.op==="=="){if(Pv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NAN"}};if(Rv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NAN"}};if(Rv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mo(t.field),op:PR(t.op),value:t.value}}})(n):n instanceof nr?(function(t){const i=t.getFilters().map((o=>bE(o)));return i.length===1?i[0]:{compositeFilter:{op:xR(t.op),filters:i}}})(n):Se(54877,{filter:n})}function NR(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function DE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Di{constructor(e,t,i,o,l=Ce.min(),c=Ce.min(),h=jt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(e){return new Di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bR{constructor(e){this.gt=e}}function DR(n){const e=kR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ff(e,e.limit,"L"):e}/**
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
 */class OR{constructor(){this.Dn=new VR}addToCollectionParentIndex(e,t){return this.Dn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Fi.min())}updateCollectionGroup(e,t,i){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class VR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new It(Ye.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new It(Ye.comparator)).toArray()}}/**
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
 */const $v={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},OE=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(OE,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class Yo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Yo(0)}static ur(){return new Yo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="LruGarbageCollector",LR=1048576;function qv([n,e],[t,i]){const o=be(n,t);return o===0?be(e,i):o}class MR{constructor(e){this.Tr=e,this.buffer=new It(qv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();qv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){fe(Wv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){aa(t)?fe(Wv,"Ignoring IndexedDB error during garbage collection: ",t):await oa(t)}await this.Rr(3e5)}))}}class FR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(nd.ue);const i=new MR(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve($v)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$v):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,c,h,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,h=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),Vo()<=Oe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-w}ms
	Determined least recently used ${o} in `+(h-c)+`ms
	Removed ${l} targets in `+(p-h)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function UR(n,e){return new FR(n,e)}/**
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
 */class BR{constructor(){this.changes=new Fs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $R{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&ml(i.mutation,o,wn.empty(),We.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ve()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ve()){const o=As();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=al();return l.forEach(((h,p)=>{c=c.insert(h,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=As();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ve())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,h)=>{t.set(c,h)}))}))}computeViews(e,t,i,o){let l=Zr();const c=pl(),h=(function(){return pl()})();return t.forEach(((p,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Qi)?l=l.insert(y.key,y):w!==void 0?(c.set(y.key,w.mutation.getFieldMask()),ml(w.mutation,y,w.mutation.getFieldMask(),We.now())):c.set(y.key,wn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,w)=>c.set(y,w))),t.forEach(((y,w)=>{var T;return h.set(y,new zR(w,(T=c.get(y))!==null&&T!==void 0?T:null))})),h)))}recalculateAndSaveOverlays(e,t){const i=pl();let o=new it(((c,h)=>c-h)),l=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const h of c)h.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let w=i.get(p)||wn.empty();w=h.applyToLocalView(y,w),i.set(p,w);const T=(o.get(h.batchId)||Ve()).add(p);o=o.insert(h.batchId,T)}))})).next((()=>{const c=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),y=p.key,w=p.value,T=mE();w.forEach((S=>{if(!l.has(S)){const P=TE(t.get(S),i.get(S));P!==null&&T.set(S,P),l=l.add(S)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return Q.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return we.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Q.resolve(As());let h=wl,p=l;return c.next((y=>Q.forEach(y,((w,T)=>(h<T.largestBatchId&&(h=T.largestBatchId),l.get(w)?Q.resolve():this.remoteDocumentCache.getEntry(e,w).next((S=>{p=p.insert(w,S)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,Ve()))).next((w=>({batchId:h,changes:pE(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next((i=>{let o=al();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=al();return this.indexManager.getCollectionParents(e,l).next((h=>Q.forEach(h,(p=>{const y=(function(T,S){return new bl(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((T,S)=>{c=c.insert(T,S)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,y)=>{const w=y.getKey();c.get(w)===null&&(c=c.insert(w,qt.newInvalidDocument(w)))}));let h=al();return c.forEach(((p,y)=>{const w=l.get(p);w!==void 0&&ml(w.mutation,y,wn.empty(),We.now()),ad(t,y)&&(h=h.insert(p,y))})),h}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Er(o.createTime)}})(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:DR(o.bundledQuery),readTime:Er(o.readTime)}})(t)),Q.resolve()}}/**
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
 */class qR{constructor(){this.overlays=new it(we.comparator),this.kr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=As();return Q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),Q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),Q.resolve()}getOverlaysForCollection(e,t,i){const o=As(),l=t.length+1,c=new we(t.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const p=h.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new it(((y,w)=>y-w));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=As(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const h=As(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,w)=>h.set(y,w))),!(h.size()>=o)););return Q.resolve(h)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new cR(t,i));let l=this.kr.get(t);l===void 0&&(l=Ve(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class HR{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
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
 */class Np{constructor(){this.qr=new It(Pt.Qr),this.$r=new It(Pt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Pt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Pt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new we(new Ye([])),i=new Pt(t,e),o=new Pt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new we(new Ye([])),i=new Pt(t,e),o=new Pt(t,e+1);let l=Ve();return this.$r.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Pt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Pt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return we.comparator(e.key,t.key)||be(e.Hr,t.Hr)}static Ur(e,t){return be(e.Hr,t.Hr)||we.comparator(e.key,t.key)}}/**
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
 */class KR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new It(Pt.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new uR(l,t,i,o);this.mutationQueue.push(c);for(const h of o)this.Yr=this.Yr.add(new Pt(h.key,l)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Q.resolve(c)}lookupMutationBatch(e,t){return Q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?Ep:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Pt(t,0),o=new Pt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(c=>{const h=this.Zr(c.Hr);l.push(h)})),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new It(be);return t.forEach((o=>{const l=new Pt(o,0),c=new Pt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],(h=>{i=i.add(h.Hr)}))})),Q.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;we.isDocumentKey(l)||(l=l.child(""));const c=new Pt(new we(l),0);let h=new It(be);return this.Yr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(h=h.add(p.Hr)),!0)}),c),Q.resolve(this.ei(h))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return Q.forEach(t.mutations,(o=>{const l=new Pt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Pt(t,0),o=this.Yr.firstAfterOrEqual(i);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class GR{constructor(e){this.ni=e,this.docs=(function(){return new it(we.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Q.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(t))}getEntries(e,t){let i=Zr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():qt.newInvalidDocument(o))})),Q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Zr();const c=t.path,h=new we(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||SC(IC(w),i)<=0||(o.has(w.key)||ad(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Se(9500)}ri(e,t){return Q.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new QR(this)}getSize(e){return Q.resolve(this.size)}}class QR extends BR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),Q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class YR{constructor(e){this.persistence=e,this.ii=new Fs((t=>Sp(t)),Ap),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.si=0,this.oi=new Np,this.targetCount=0,this._i=Yo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),Q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Yo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.hr(t),Q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((c,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)})),Q.waitFor(l).next((()=>o))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return Q.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),Q.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return Q.resolve(i)}containsKey(e,t){return Q.resolve(this.oi.containsKey(t))}}/**
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
 */class VE{constructor(e,t){this.ai={},this.overlays={},this.ui=new nd(0),this.ci=!1,this.ci=!0,this.li=new HR,this.referenceDelegate=e(this),this.hi=new YR(this),this.indexManager=new OR,this.remoteDocumentCache=(function(o){return new GR(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new bR(t),this.Ti=new WR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new KR(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){fe("MemoryPersistence","Starting transaction:",e);const o=new JR(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return Q.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class JR extends kC{constructor(e){super(),this.currentSequenceNumber=e}}class bp{constructor(e){this.persistence=e,this.Ai=new Np,this.Ri=null}static Vi(e){return new bp(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),Q.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,(i=>{const o=we.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ce.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Q.or([()=>Q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Uc{constructor(e,t){this.persistence=e,this.gi=new Fs((i=>PC(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=UR(this,t)}static Vi(e,t){return new Uc(e,t)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return Q.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?Q.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(c=>this.Sr(e,c,t).next((h=>{h||(i++,l.removeEntry(c,Ce.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gc(e.data.value)),t}Sr(e,t,i){return Q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return Q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Dp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ve(),o=Ve();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Dp(e,t.fromCache,i,o)}}/**
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
 */class XR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return CS()?8:CC(Ht())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new XR;return this.ws(e,t,c).next((h=>{if(l.result=h,this.Rs)return this.Ss(e,t,c,h.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Vo()<=Oe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(Vo()<=Oe.DEBUG&&fe("QueryEngine","Query:",Lo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Vo()<=Oe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wr(t))):Q.resolve())}ps(e,t){if(Dv(t))return Q.resolve(null);let i=wr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ff(t,null,"F"),i=wr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Ve(...l);return this.gs.getDocuments(e,c).next((h=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.bs(t,h);return this.Ds(t,y,c,p.readTime)?this.ps(e,Ff(t,null,"F")):this.vs(e,y,t,p)}))))})))))}ys(e,t,i,o){return Dv(t)||o.isEqual(Ce.min())?Q.resolve(null):this.gs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ds(t,c,i,o)?Q.resolve(null):(Vo()<=Oe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Lo(t)),this.vs(e,c,t,TC(o,wl)).next((h=>h)))}))}bs(e,t){let i=new It(hE(e));return t.forEach(((o,l)=>{ad(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Vo()<=Oe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Lo(t)),this.gs.getDocumentsMatchingQuery(e,t,Fi.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="LocalStore",eP=3e8;class tP{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new it(be),this.Ms=new Fs((l=>Sp(l)),Ap),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $R(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function nP(n,e,t,i){return new tP(n,e,t,i)}async function LE(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],h=[];let p=Ve();for(const y of o){c.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){h.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Bs:y,removedBatchIds:c,addedBatchIds:h})))}))}))}function rP(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(h,p,y,w){const T=y.batch,S=T.keys();let P=Q.resolve();return S.forEach((j=>{P=P.next((()=>w.getEntry(p,j))).next((z=>{const M=y.docVersions.get(j);ze(M!==null,48541),z.version.compareTo(M)<0&&(T.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),w.addEntry(z)))}))})),P.next((()=>h.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(h){let p=Ve();for(let y=0;y<h.mutationResults.length;++y)h.mutationResults[y].transformResults.length>0&&(p=p.add(h.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function ME(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function iP(n,e){const t=Pe(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const h=[];e.targetChanges.forEach(((w,T)=>{const S=o.get(T);if(!S)return;h.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let P=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(jt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):w.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(w.resumeToken,i)),o=o.insert(T,P),(function(z,M,te){return z.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=eP?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0})(S,P,w)&&h.push(t.hi.updateTargetData(l,P))}));let p=Zr(),y=Ve();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),h.push(sP(l,c,e.documentUpdates).next((w=>{p=w.Ls,y=w.ks}))),!i.isEqual(Ce.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));h.push(w)}return Q.waitFor(h).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.Fs=o,l)))}function sP(n,e,t){let i=Ve(),o=Ve();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=Zr();return t.forEach(((h,p)=>{const y=l.get(h);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(Ce.min())?(e.removeEntry(h,p.readTime),c=c.insert(h,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(h,p)):fe(Op,"Ignoring outdated watch update for ",h,". Current version:",y.version," Watch version:",p.version)})),{Ls:c,ks:o}}))}function oP(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Ep),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function aP(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,Q.resolve(o)):t.hi.allocateTargetId(i).next((c=>(o=new Di(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Wf(n,e,t){const i=Pe(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!aa(c))throw c;fe(Op,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Hv(n,e,t){const i=Pe(n);let o=Ce.min(),l=Ve();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,w){const T=Pe(p),S=T.Ms.get(w);return S!==void 0?Q.resolve(T.Fs.get(S)):T.hi.getTargetData(y,w)})(i,c,wr(e)).next((h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,h.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Ce.min(),t?l:Ve()))).next((h=>(lP(i,GC(e),h),{documents:h,qs:l})))))}function lP(n,e,t){let i=n.xs.get(e)||Ce.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class Kv{constructor(){this.activeTargetIds=eR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uP{constructor(){this.Fo=new Kv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Kv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cP{xo(e){}shutdown(){}}/**
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
 */const Gv="ConnectivityMonitor";class Qv{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){fe(Gv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){fe(Gv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lc=null;function qf(){return lc===null?lc=(function(){return 268435456+Math.round(2147483648*Math.random())})():lc++,"0x"+lc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="RestConnection",dP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Dc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=qf(),h=this.Go(e,t.toUriEncodedString());fe(hf,`Sending RPC '${e}' ${c}:`,h,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,l);const{host:y}=new URL(h),w=Vs(y);return this.jo(e,h,p,i,w).then((T=>(fe(hf,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw ji(hf,`RPC '${e}' ${c} failed with error: `,T,"url: ",h,"request:",i),T}))}Jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+sa})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=dP[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class fP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const $t="WebChannelConnection";class pP extends hP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const c=qf();return new Promise(((h,p)=>{const y=new jw;y.setWithCredentials(!0),y.listenOnce(Fw.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case mc.NO_ERROR:const T=y.getResponseJson();fe($t,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),h(T);break;case mc.TIMEOUT:fe($t,`RPC '${e}' ${c} timed out`),p(new ce(G.DEADLINE_EXCEEDED,"Request time out"));break;case mc.HTTP_ERROR:const S=y.getStatus();if(fe($t,`RPC '${e}' ${c} failed with status:`,S,"response text:",y.getResponseText()),S>0){let P=y.getResponseJson();Array.isArray(P)&&(P=P[0]);const j=P==null?void 0:P.error;if(j&&j.status&&j.message){const z=(function(te){const ie=te.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(ie)>=0?ie:G.UNKNOWN})(j.status);p(new ce(z,j.message))}else p(new ce(G.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ce(G.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:c,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{fe($t,`RPC '${e}' ${c} completed.`)}}));const w=JSON.stringify(o);fe($t,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",w,i,15)}))}P_(e,t,i){const o=qf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=zw(),h=Bw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const w=l.join("");fe($t,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=c.createWebChannel(w,p);this.T_(T);let S=!1,P=!1;const j=new fP({Ho:M=>{P?fe($t,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(S||(fe($t,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),fe($t,`RPC '${e}' stream ${o} sending:`,M),T.send(M))},Yo:()=>T.close()}),z=(M,te,ie)=>{M.listen(te,(X=>{try{ie(X)}catch(le){setTimeout((()=>{throw le}),0)}}))};return z(T,ol.EventType.OPEN,(()=>{P||(fe($t,`RPC '${e}' stream ${o} transport opened.`),j.s_())})),z(T,ol.EventType.CLOSE,(()=>{P||(P=!0,fe($t,`RPC '${e}' stream ${o} transport closed`),j.__(),this.I_(T))})),z(T,ol.EventType.ERROR,(M=>{P||(P=!0,ji($t,`RPC '${e}' stream ${o} transport errored. Name:`,M.name,"Message:",M.message),j.__(new ce(G.UNAVAILABLE,"The operation could not be completed")))})),z(T,ol.EventType.MESSAGE,(M=>{var te;if(!P){const ie=M.data[0];ze(!!ie,16349);const X=ie,le=(X==null?void 0:X.error)||((te=X[0])===null||te===void 0?void 0:te.error);if(le){fe($t,`RPC '${e}' stream ${o} received error:`,le);const ke=le.status;let Re=(function(R){const x=mt[R];if(x!==void 0)return SE(x)})(ke),b=le.message;Re===void 0&&(Re=G.INTERNAL,b="Unknown error status: "+ke+" with message "+le.message),P=!0,j.__(new ce(Re,b)),T.close()}else fe($t,`RPC '${e}' stream ${o} received:`,ie),j.a_(ie)}})),z(h,Uw.STAT_EVENT,(M=>{M.stat===bf.PROXY?fe($t,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===bf.NOPROXY&&fe($t,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{j.o_()}),0),j}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ff(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n){return new vR(n,!0)}/**
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
 */class jE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Yv="PersistentStream";class FE{constructor(e,t,i,o,l,c,h,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new jE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Xr(t.toString()),Xr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new ce(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return fe(Yv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(fe(Yv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mP extends FE{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ER(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ce.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ce.min():c.readTime?Er(c.readTime):Ce.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=$f(this.serializer),t.addTarget=(function(l,c){let h;const p=c.target;if(h=Mf(p)?{documents:SR(l,p)}:{query:AR(l,p).Vt},h.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){h.resumeToken=CE(l,c.resumeToken);const y=Uf(l,c.expectedCount);y!==null&&(h.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ce.min())>0){h.readTime=Fc(l,c.snapshotVersion.toTimestamp());const y=Uf(l,c.expectedCount);y!==null&&(h.expectedCount=y)}return h})(this.serializer,e);const i=CR(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=$f(this.serializer),t.removeTarget=e,this.k_(t)}}class gP extends FE{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=IR(e.writeResults,e.commitTime),i=Er(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=$f(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>TR(this.serializer,i)))};this.k_(t)}}/**
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
 */class yP{}class vP extends yP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,Bf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(G.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,h])=>this.connection.Jo(e,Bf(t,i),o,c,h,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ce(G.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class _P{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Xr(t),this._a=!1):fe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const bs="RemoteStore";class wP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((c=>{i.enqueueAndForget((async()=>{Us(this)&&(fe(bs,"Restarting streams for network reachability change."),await(async function(p){const y=Pe(p);y.Ia.add(4),await Vl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await hd(y)})(this))}))})),this.Aa=new _P(i,o)}}async function hd(n){if(Us(n))for(const e of n.da)await e(!0)}async function Vl(n){for(const e of n.da)await e(!1)}function UE(n,e){const t=Pe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),jp(t)?Mp(t):la(t).x_()&&Lp(t,e))}function Vp(n,e){const t=Pe(n),i=la(t);t.Ta.delete(e),i.x_()&&BE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Us(t)&&t.Aa.set("Unknown"))}function Lp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}la(n).H_(e)}function BE(n,e){n.Ra.$e(e),la(n).Y_(e)}function Mp(n){n.Ra=new pR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),la(n).start(),n.Aa.aa()}function jp(n){return Us(n)&&!la(n).M_()&&n.Ta.size>0}function Us(n){return Pe(n).Ia.size===0}function zE(n){n.Ra=void 0}async function EP(n){n.Aa.set("Online")}async function TP(n){n.Ta.forEach(((e,t)=>{Lp(n,e)}))}async function IP(n,e){zE(n),jp(n)?(n.Aa.la(e),Mp(n)):n.Aa.set("Unknown")}async function SP(n,e,t){if(n.Aa.set("Online"),e instanceof kE&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const h of l.targetIds)o.Ta.has(h)&&(await o.remoteSyncer.rejectListen(h,c),o.Ta.delete(h),o.Ra.removeTarget(h))})(n,e)}catch(i){fe(bs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Bc(n,i)}else if(e instanceof _c?n.Ra.Ye(e):e instanceof AE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ce.min()))try{const i=await ME(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const h=l.Ra.Pt(c);return h.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.Ta.get(y);w&&l.Ta.set(y,w.withResumeToken(p.resumeToken,c))}})),h.targetMismatches.forEach(((p,y)=>{const w=l.Ta.get(p);if(!w)return;l.Ta.set(p,w.withResumeToken(jt.EMPTY_BYTE_STRING,w.snapshotVersion)),BE(l,p);const T=new Di(w.target,p,y,w.sequenceNumber);Lp(l,T)})),l.remoteSyncer.applyRemoteEvent(h)})(n,t)}catch(i){fe(bs,"Failed to raise snapshot:",i),await Bc(n,i)}}async function Bc(n,e,t){if(!aa(e))throw e;n.Ia.add(1),await Vl(n),n.Aa.set("Offline"),t||(t=()=>ME(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{fe(bs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await hd(n)}))}function $E(n,e){return e().catch((t=>Bc(n,t,e)))}async function fd(n){const e=Pe(n),t=$i(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ep;for(;AP(e);)try{const o=await oP(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,kP(e,o)}catch(o){await Bc(e,o)}WE(e)&&qE(e)}function AP(n){return Us(n)&&n.Pa.length<10}function kP(n,e){n.Pa.push(e);const t=$i(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function WE(n){return Us(n)&&!$i(n).M_()&&n.Pa.length>0}function qE(n){$i(n).start()}async function CP(n){$i(n).na()}async function RP(n){const e=$i(n);for(const t of n.Pa)e.X_(t.mutations)}async function PP(n,e,t){const i=n.Pa.shift(),o=Rp.from(i,e,t);await $E(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await fd(n)}async function xP(n,e){e&&$i(n).Z_&&await(async function(i,o){if((function(c){return hR(c)&&c!==G.ABORTED})(o.code)){const l=i.Pa.shift();$i(i).N_(),await $E(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await fd(i)}})(n,e),WE(n)&&qE(n)}async function Jv(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),fe(bs,"RemoteStore received new credentials");const i=Us(t);t.Ia.add(3),await Vl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await hd(t)}async function NP(n,e){const t=Pe(n);e?(t.Ia.delete(2),await hd(t)):e||(t.Ia.add(2),await Vl(t),t.Aa.set("Unknown"))}function la(n){return n.Va||(n.Va=(function(t,i,o){const l=Pe(t);return l.ia(),new mP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:EP.bind(null,n),e_:TP.bind(null,n),n_:IP.bind(null,n),J_:SP.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),jp(n)?Mp(n):n.Aa.set("Unknown")):(await n.Va.stop(),zE(n))}))),n.Va}function $i(n){return n.ma||(n.ma=(function(t,i,o){const l=Pe(t);return l.ia(),new gP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:CP.bind(null,n),n_:xP.bind(null,n),ea:RP.bind(null,n),ta:PP.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await fd(n)):(await n.ma.stop(),n.Pa.length>0&&(fe(bs,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Fp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,h=new Fp(e,t,c,o,l);return h.start(i),h}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(n,e){if(Xr("AsyncQueue",`${e}: ${n}`),aa(n))return new ce(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class $o{static emptySet(e){return new $o(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||we.comparator(t.key,i.key):(t,i)=>we.comparator(t.key,i.key),this.keyedMap=al(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new $o;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Xv{constructor(){this.fa=new it(we.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Se(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Jo{constructor(e,t,i,o,l,c,h,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((h=>{c.push({type:0,doc:h})})),new Jo(e,t,$o.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&od(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class bP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class DP{constructor(){this.queries=Zv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Pe(t),l=o.queries;o.queries=Zv(),l.forEach(((c,h)=>{for(const p of h.wa)p.onError(i)}))})(this,new ce(G.ABORTED,"Firestore shutting down"))}}function Zv(){return new Fs((n=>dE(n)),od)}async function Bp(n,e){const t=Pe(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new bP,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const h=Up(c,`Initialization of query '${Lo(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&$p(t)}async function zp(n,e){const t=Pe(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function OP(n,e){const t=Pe(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const h of c.wa)h.Ca(o)&&(i=!0);c.ya=o}}i&&$p(t)}function VP(n,e,t){const i=Pe(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function $p(n){n.Da.forEach((e=>{e.next()}))}var Hf,e_;(e_=Hf||(Hf={})).Fa="default",e_.Cache="cache";class Wp{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Jo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Jo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Hf.Cache}}/**
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
 */class HE{constructor(e){this.key=e}}class KE{constructor(e){this.key=e}}class LP{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=hE(e),this.eu=new $o(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new Xv,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const S=o.get(w),P=ad(this.query,T)?T:null,j=!!S&&this.mutatedKeys.has(S.key),z=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let M=!1;S&&P?S.data.isEqual(P.data)?j!==z&&(i.track({type:3,doc:P}),M=!0):this.iu(S,P)||(i.track({type:2,doc:P}),M=!0,(p&&this.Xa(P,p)>0||y&&this.Xa(P,y)<0)&&(h=!0)):!S&&P?(i.track({type:0,doc:P}),M=!0):S&&!P&&(i.track({type:1,doc:S}),M=!0,(p||y)&&(h=!0)),M&&(P?(c=c.add(P),l=z?l.add(w):l.delete(w)):(c=c.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const w=this.query.limitType==="F"?c.last():c.first();c=c.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{eu:c,ru:i,Ds:h,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((w,T)=>(function(P,j){const z=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:M})}};return z(P)-z(j)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(i),o=o!=null&&o;const h=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,c.length!==0||y?{snapshot:new Jo(this.query,e.eu,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:h}:{_u:h}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Xv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new KE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new HE(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ve();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Jo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const qp="SyncEngine";class MP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class jP{constructor(e){this.key=e,this.lu=!1}}class FP{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Fs((h=>dE(h)),od),this.Tu=new Map,this.Iu=new Set,this.du=new it(we.comparator),this.Eu=new Map,this.Au=new Np,this.Ru={},this.Vu=new Map,this.mu=Yo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function UP(n,e,t=!0){const i=ZE(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await GE(i,e,t,!0),o}async function BP(n,e){const t=ZE(n);await GE(t,e,!0,!1)}async function GE(n,e,t,i){const o=await aP(n.localStore,wr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let h;return i&&(h=await zP(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&UE(n.remoteStore,o),h}async function zP(n,e,t,i,o){n.gu=(T,S,P)=>(async function(z,M,te,ie){let X=M.view.nu(te);X.Ds&&(X=await Hv(z.localStore,M.query,!1).then((({documents:b})=>M.view.nu(b,X))));const le=ie&&ie.targetChanges.get(M.targetId),ke=ie&&ie.targetMismatches.get(M.targetId)!=null,Re=M.view.applyChanges(X,z.isPrimaryClient,le,ke);return n_(z,M.targetId,Re._u),Re.snapshot})(n,T,S,P);const l=await Hv(n.localStore,e,!0),c=new LP(e,l.qs),h=c.nu(l.documents),p=Ol.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(h,n.isPrimaryClient,p);n_(n,t,y._u);const w=new MP(e,t,c);return n.Pu.set(e,w),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function $P(n,e,t){const i=Pe(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((c=>!od(c,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Wf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Vp(i.remoteStore,o.targetId),Kf(i,o.targetId)})).catch(oa)):(Kf(i,o.targetId),await Wf(i.localStore,o.targetId,!0))}async function WP(n,e){const t=Pe(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Vp(t.remoteStore,i.targetId))}async function qP(n,e,t){const i=XP(n);try{const o=await(function(c,h){const p=Pe(c),y=We.now(),w=h.reduce(((P,j)=>P.add(j.key)),Ve());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let j=Zr(),z=Ve();return p.Os.getEntries(P,w).next((M=>{j=M,j.forEach(((te,ie)=>{ie.isValidDocument()||(z=z.add(te))}))})).next((()=>p.localDocuments.getOverlayedDocuments(P,j))).next((M=>{T=M;const te=[];for(const ie of h){const X=aR(ie,T.get(ie.key).overlayedDocument);X!=null&&te.push(new Qi(ie.key,X,rE(X.value.mapValue),Vn.exists(!0)))}return p.mutationQueue.addMutationBatch(P,y,te,h)})).next((M=>{S=M;const te=M.applyToLocalDocumentSet(T,z);return p.documentOverlayCache.saveOverlays(P,M.batchId,te)}))})).then((()=>({batchId:S.batchId,changes:pE(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,h,p){let y=c.Ru[c.currentUser.toKey()];y||(y=new it(be)),y=y.insert(h,p),c.Ru[c.currentUser.toKey()]=y})(i,o.batchId,t),await Ll(i,o.changes),await fd(i.remoteStore)}catch(o){const l=Up(o,"Failed to persist write");t.reject(l)}}async function QE(n,e){const t=Pe(n);try{const i=await iP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Eu.get(l);c&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.lu=!0:o.modifiedDocuments.size>0?ze(c.lu,14607):o.removedDocuments.size>0&&(ze(c.lu,42227),c.lu=!1))})),await Ll(t,i,e)}catch(i){await oa(i)}}function t_(n,e,t){const i=Pe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,c)=>{const h=c.view.va(e);h.snapshot&&o.push(h.snapshot)})),(function(c,h){const p=Pe(c);p.onlineState=h;let y=!1;p.queries.forEach(((w,T)=>{for(const S of T.wa)S.va(h)&&(y=!0)})),y&&$p(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function HP(n,e,t){const i=Pe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let c=new it(we.comparator);c=c.insert(l,qt.newNoDocument(l,Ce.min()));const h=Ve().add(l),p=new cd(Ce.min(),new Map,new it(be),c,h);await QE(i,p),i.du=i.du.remove(l),i.Eu.delete(e),Hp(i)}else await Wf(i.localStore,e,!1).then((()=>Kf(i,e,t))).catch(oa)}async function KP(n,e){const t=Pe(n),i=e.batch.batchId;try{const o=await rP(t.localStore,e);JE(t,i,null),YE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ll(t,o)}catch(o){await oa(o)}}async function GP(n,e,t){const i=Pe(n);try{const o=await(function(c,h){const p=Pe(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return p.mutationQueue.lookupMutationBatch(y,h).next((T=>(ze(T!==null,37113),w=T.keys(),p.mutationQueue.removeMutationBatch(y,T)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,h))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>p.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);JE(i,e,t),YE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ll(i,o)}catch(o){await oa(o)}}function YE(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function JE(n,e,t){const i=Pe(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Kf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||XE(n,i)}))}function XE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Vp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Hp(n))}function n_(n,e,t){for(const i of t)i instanceof HE?(n.Au.addReference(i.key,e),QP(n,i)):i instanceof KE?(fe(qp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||XE(n,i.key)):Se(19791,{yu:i})}function QP(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(fe(qp,"New document in limbo: "+t),n.Iu.add(i),Hp(n))}function Hp(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new we(Ye.fromString(e)),i=n.mu.next();n.Eu.set(i,new jP(t)),n.du=n.du.insert(t,i),UE(n.remoteStore,new Di(wr(sd(t.path)),i,"TargetPurposeLimboResolution",nd.ue))}}async function Ll(n,e,t){const i=Pe(n),o=[],l=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach(((h,p)=>{c.push(i.gu(p,e,t).then((y=>{var w;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Dp.Es(p.targetId,y);l.push(T)}})))})),await Promise.all(c),i.hu.J_(o),await(async function(p,y){const w=Pe(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>Q.forEach(y,(S=>Q.forEach(S.Is,(P=>w.persistence.referenceDelegate.addReference(T,S.targetId,P))).next((()=>Q.forEach(S.ds,(P=>w.persistence.referenceDelegate.removeReference(T,S.targetId,P)))))))))}catch(T){if(!aa(T))throw T;fe(Op,"Failed to update sequence numbers: "+T)}for(const T of y){const S=T.targetId;if(!T.fromCache){const P=w.Fs.get(S),j=P.snapshotVersion,z=P.withLastLimboFreeSnapshotVersion(j);w.Fs=w.Fs.insert(S,z)}}})(i.localStore,l))}async function YP(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){fe(qp,"User change. New user:",e.toKey());const i=await LE(t.localStore,e);t.currentUser=e,(function(l,c){l.Vu.forEach((h=>{h.forEach((p=>{p.reject(new ce(G.CANCELLED,c))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ll(t,i.Bs)}}function JP(n,e){const t=Pe(n),i=t.Eu.get(e);if(i&&i.lu)return Ve().add(i.key);{let o=Ve();const l=t.Tu.get(e);if(!l)return o;for(const c of l){const h=t.Pu.get(c);o=o.unionWith(h.view.tu)}return o}}function ZE(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=QE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HP.bind(null,e),e.hu.J_=OP.bind(null,e.eventManager),e.hu.pu=VP.bind(null,e.eventManager),e}function XP(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GP.bind(null,e),e}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return nP(this.persistence,new ZR,e.initialUser,this.serializer)}Du(e){return new VE(bp.Vi,this.serializer)}bu(e){return new uP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class ZP extends zc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ze(this.persistence.referenceDelegate instanceof Uc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new jR(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new VE((i=>Uc.Vi(i,t)),this.serializer)}}class Gf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>t_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=YP.bind(null,this.syncEngine),await NP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new DP})()}createDatastore(e){const t=dd(e.databaseInfo.databaseId),i=(function(l){return new pP(l)})(e.databaseInfo);return(function(l,c,h,p){return new vP(l,c,h,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,h){return new wP(i,o,l,c,h)})(this.localStore,this.datastore,e.asyncQueue,(t=>t_(this.syncEngine,t,0)),(function(){return Qv.C()?new Qv:new cP})())}createSyncEngine(e,t){return(function(o,l,c,h,p,y,w){const T=new FP(o,l,c,h,p,y);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Pe(o);fe(bs,"RemoteStore shutting down."),l.Ia.add(5),await Vl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gf.provider={build:()=>new Gf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Xr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Wi="FirestoreClient";class ex{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Wt.UNAUTHENTICATED,this.clientId=wp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{fe(Wi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(fe(Wi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Up(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function pf(n,e){n.asyncQueue.verifyOperationInProgress(),fe(Wi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await LE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{ji("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{fe("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{ji("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function r_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tx(n);fe(Wi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Jv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>Jv(e.remoteStore,o))),n._onlineComponents=e}async function tx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe(Wi,"Using user provided OfflineComponentProvider");try{await pf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ji("Error using user provided cache. Falling back to memory cache: "+t),await pf(n,new zc)}}else fe(Wi,"Using default OfflineComponentProvider"),await pf(n,new ZP(void 0));return n._offlineComponents}async function e0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe(Wi,"Using user provided OnlineComponentProvider"),await r_(n,n._uninitializedComponentsProvider._online)):(fe(Wi,"Using default OnlineComponentProvider"),await r_(n,new Gf))),n._onlineComponents}function nx(n){return e0(n).then((e=>e.syncEngine))}async function $c(n){const e=await e0(n),t=e.eventManager;return t.onListen=UP.bind(null,e.syncEngine),t.onUnlisten=$P.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=BP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WP.bind(null,e.syncEngine),t}function rx(n,e,t={}){const i=new Gr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,h,p,y){const w=new Kp({next:S=>{w.Ou(),c.enqueueAndForget((()=>zp(l,T)));const P=S.docs.has(h);!P&&S.fromCache?y.reject(new ce(G.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&S.fromCache&&p&&p.source==="server"?y.reject(new ce(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new Wp(sd(h.path),w,{includeMetadataChanges:!0,ka:!0});return Bp(l,T)})(await $c(n),n.asyncQueue,e,t,i))),i.promise}function ix(n,e,t={}){const i=new Gr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,h,p,y){const w=new Kp({next:S=>{w.Ou(),c.enqueueAndForget((()=>zp(l,T))),S.fromCache&&p.source==="server"?y.reject(new ce(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new Wp(h,w,{includeMetadataChanges:!0,ka:!0});return Bp(l,T)})(await $c(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function t0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="firestore.googleapis.com",s_=!0;class o_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=n0,this.ssl=s_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:s_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=OE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LR)throw new ce(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=t0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pd{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new hC;switch(i.type){case"firstParty":return new gC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ce(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=i_.get(t);i&&(fe("ComponentProvider","Removing Datastore"),i_.delete(t),i.terminate())})(this),Promise.resolve()}}function sx(n,e,t,i={}){var o;n=hn(n,pd);const l=Vs(e),c=n._getSettings(),h=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(op(`https://${p}`),ap("Firestore",!0)),c.host!==n0&&c.host!==p&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:i});if(!Qr(y,h)&&(n._setSettings(y),i.mockUserToken)){let w,T;if(typeof i.mockUserToken=="string")w=i.mockUserToken,T=Wt.MOCK_USER;else{w=vS(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new ce(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Wt(S)}n._authCredentials=new fC(new Ww(w,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Bs(this.firestore,e,this._query)}}class ot{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Nl(t,ot._jsonSchema))return new ot(e,i||null,new we(Ye.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:yt("string",ot._jsonSchemaVersion),referencePath:yt("string")};class Mi extends Bs{constructor(e,t,i){super(e,t,sd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new we(e))}withConverter(e){return new Mi(this.firestore,e,this._path)}}function Ar(n,e,...t){if(n=Ke(n),Hw("collection","path",e),n instanceof pd){const i=Ye.fromString(e,...t);return _v(i),new Mi(n,null,i)}{if(!(n instanceof ot||n instanceof Mi))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return _v(i),new Mi(n.firestore,null,i)}}function xt(n,e,...t){if(n=Ke(n),arguments.length===1&&(e=wp.newId()),Hw("doc","path",e),n instanceof pd){const i=Ye.fromString(e,...t);return vv(i),new ot(n,null,new we(i))}{if(!(n instanceof ot||n instanceof Mi))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return vv(i),new ot(n.firestore,n instanceof Mi?n.converter:null,new we(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="AsyncQueue";class l_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new jE(this,"async_queue_retry"),this.oc=()=>{const i=ff();i&&fe(a_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=ff();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ff();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Gr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!aa(e))throw e;fe(a_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Xr("INTERNAL UNHANDLED ERROR: ",u_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Fp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&Se(47125,{hc:u_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function u_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function c_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class ei extends pd{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new l_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new l_(e),this._firestoreClient=void 0,await e}}}function ox(n,e){const t=typeof n=="object"?n:Jc(),i=typeof n=="string"?n:Dc,o=Ms(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=q_("firestore");l&&sx(o,...l)}return o}function md(n){if(n._terminated)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ax(n),n._firestoreClient}function ax(n){var e,t,i;const o=n._freezeSettings(),l=(function(h,p,y,w){return new bC(h,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,t0(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new ex(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(jt.fromBase64String(e))}catch(t){throw new ce(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new On(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:On._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Nl(e,On._jsonSchema))return On.fromBase64String(e.bytes)}}On._jsonSchemaVersion="firestore/bytes/1.0",On._jsonSchema={type:yt("string",On._jsonSchemaVersion),bytes:yt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this._methodName=e}}/**
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
 */class Tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tr._jsonSchemaVersion}}static fromJSON(e){if(Nl(e,Tr._jsonSchema))return new Tr(e.latitude,e.longitude)}}Tr._jsonSchemaVersion="firestore/geoPoint/1.0",Tr._jsonSchema={type:yt("string",Tr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class Ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Nl(e,Ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ir(e.vectorValues);throw new ce(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ir._jsonSchemaVersion="firestore/vectorValue/1.0",Ir._jsonSchema={type:yt("string",Ir._jsonSchemaVersion),vectorValues:yt("object")};/**
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
 */const lx=/^__.*__$/;class ux{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dl(e,this.data,t,this.fieldTransforms)}}class r0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function i0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:n})}}class yd{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Wc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(i0(this.Ec)&&lx.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class cx{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||dd(e)}Dc(e,t,i,o=!1){return new yd({Ec:e,methodName:t,bc:i,path:Mt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vd(n){const e=n._freezeSettings(),t=dd(n._databaseId);return new cx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function s0(n,e,t,i,o,l={}){const c=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);Yp("Data must be an object, but it was:",c,i);const h=a0(i,c);let p,y;if(l.merge)p=new wn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const S=Qf(e,T,t);if(!c.contains(S))throw new ce(G.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);u0(w,S)||w.push(S)}p=new wn(w),y=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,y=c.fieldTransforms;return new ux(new un(h),p,y)}class _d extends Ml{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _d}}function o0(n,e,t){return new yd({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Gp extends Ml{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=o0(this,e,!0),i=this.vc.map((l=>zs(l,t))),o=new Go(i);return new EE(e.path,o)}isEqual(e){return e instanceof Gp&&Qr(this.vc,e.vc)}}class Qp extends Ml{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=o0(this,e,!0),i=this.vc.map((l=>zs(l,t))),o=new Qo(i);return new EE(e.path,o)}isEqual(e){return e instanceof Qp&&Qr(this.vc,e.vc)}}function dx(n,e,t,i){const o=n.Dc(1,e,t);Yp("Data must be an object, but it was:",o,i);const l=[],c=un.empty();Gi(i,((p,y)=>{const w=Jp(e,p,t);y=Ke(y);const T=o.gc(w);if(y instanceof _d)l.push(w);else{const S=zs(y,T);S!=null&&(l.push(w),c.set(w,S))}}));const h=new wn(l);return new r0(c,h,o.fieldTransforms)}function hx(n,e,t,i,o,l){const c=n.Dc(1,e,t),h=[Qf(e,i,t)],p=[o];if(l.length%2!=0)throw new ce(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)h.push(Qf(e,l[S])),p.push(l[S+1]);const y=[],w=un.empty();for(let S=h.length-1;S>=0;--S)if(!u0(y,h[S])){const P=h[S];let j=p[S];j=Ke(j);const z=c.gc(P);if(j instanceof _d)y.push(P);else{const M=zs(j,z);M!=null&&(y.push(P),w.set(P,M))}}const T=new wn(y);return new r0(w,T,c.fieldTransforms)}function fx(n,e,t,i=!1){return zs(t,n.Dc(i?4:3,e))}function zs(n,e){if(l0(n=Ke(n)))return Yp("Unsupported field value:",e,n),a0(n,e);if(n instanceof Ml)return(function(i,o){if(!i0(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const h of i){let p=zs(h,o.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=Ke(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return tR(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=We.fromDate(i);return{timestampValue:Fc(o.serializer,l)}}if(i instanceof We){const l=new We(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Fc(o.serializer,l)}}if(i instanceof Tr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof On)return{bytesValue:CE(o.serializer,i._byteString)};if(i instanceof ot){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:xp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Ir)return(function(c,h){return{mapValue:{fields:{[tE]:{stringValue:nE},[Oc]:{arrayValue:{values:c.toArray().map((y=>{if(typeof y!="number")throw h.wc("VectorValues must only contain numeric values.");return kp(h.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${td(i)}`)})(n,e)}function a0(n,e){const t={};return Qw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gi(n,((i,o)=>{const l=zs(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function l0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof We||n instanceof Tr||n instanceof On||n instanceof ot||n instanceof Ml||n instanceof Ir)}function Yp(n,e,t){if(!l0(t)||!Kw(t)){const i=td(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Qf(n,e,t){if((e=Ke(e))instanceof gd)return e._internalPath;if(typeof e=="string")return Jp(n,e);throw Wc("Field path arguments must be of type string or ",n,!1,void 0,t)}const px=new RegExp("[~\\*/\\[\\]]");function Jp(n,e,t){if(e.search(px)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new gd(...e.split("."))._internalPath}catch{throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ce(G.INVALID_ARGUMENT,h+n+p)}function u0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mx extends c0{data(){return super.data()}}function Xp(n,e){return typeof e=="string"?Jp(n,e):e instanceof gd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ce(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zp{}class gx extends Zp{}function jl(n,e,...t){let i=[];e instanceof Zp&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof em)).length,h=l.filter((p=>p instanceof wd)).length;if(c>1||c>0&&h>0)throw new ce(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class wd extends gx{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new wd(e,t,i)}_apply(e){const t=this._parse(e);return h0(e._query,t),new Bs(e.firestore,e.converter,jf(e._query,t))}_parse(e){const t=vd(e.firestore);return(function(l,c,h,p,y,w,T){let S;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ce(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){h_(T,w);const j=[];for(const z of T)j.push(d_(p,l,z));S={arrayValue:{values:j}}}else S=d_(p,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||h_(T,w),S=fx(h,c,T,w==="in"||w==="not-in");return gt.create(y,w,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Fl(n,e,t){const i=e,o=Xp("where",n);return wd._create(o,i,t)}class em extends Zp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new em(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:nr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const h=l.getFlattenedFilters();for(const p of h)h0(c,p),c=jf(c,p)})(e._query,t),new Bs(e.firestore,e.converter,jf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function d_(n,e,t){if(typeof(t=Ke(t))=="string"){if(t==="")throw new ce(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cE(e)&&t.indexOf("/")!==-1)throw new ce(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ye.fromString(t));if(!we.isDocumentKey(i))throw new ce(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Cv(n,new we(i))}if(t instanceof ot)return Cv(n,t._key);throw new ce(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${td(t)}.`)}function h_(n,e){if(!Array.isArray(n)||n.length===0)throw new ce(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function h0(n,e){const t=(function(o,l){for(const c of o)for(const h of c.getFlattenedFilters())if(l.indexOf(h.op)>=0)return h.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ce(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class yx{convertValue(e,t="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Gi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Oc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>ut(c.doubleValue)));return new Ir(l)}convertGeoPoint(e){return new Tr(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=id(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(El(e));default:return null}}convertTimestamp(e){const t=Ui(e);return new We(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);ze(DE(i),9688,{name:e});const o=new Tl(i.get(1),i.get(3)),l=new we(i.popFirst(5));return o.isEqual(t)||Xr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class ul{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cs extends c0{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Xp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cs._jsonSchema={type:yt("string",Cs._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class wc extends Cs{data(e={}){return super.data(e)}}class Rs{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ul(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new wc(this._firestore,this._userDataWriter,i.key,i,new ul(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((h=>{const p=new wc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new ul(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);return h.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((h=>l||h.type!==3)).map((h=>{const p=new wc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new ul(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return h.type!==0&&(y=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),w=c.indexOf(h.doc.key)),{type:vx(h.type),doc:p,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n){n=hn(n,ot);const e=hn(n.firestore,ei);return rx(md(e),n._key).then((t=>m0(e,n,t)))}Rs._jsonSchemaVersion="firestore/querySnapshot/1.0",Rs._jsonSchema={type:yt("string",Rs._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class nm extends yx{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function qi(n){n=hn(n,Bs);const e=hn(n.firestore,ei),t=md(e),i=new nm(e);return d0(n._query),ix(t,n._query).then((o=>new Rs(e,i,n,o)))}function _x(n,e,t){n=hn(n,ot);const i=hn(n.firestore,ei),o=f0(n.converter,e);return Ed(i,[s0(vd(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Vn.none())])}function Xn(n,e,t,...i){n=hn(n,ot);const o=hn(n.firestore,ei),l=vd(o);let c;return c=typeof(e=Ke(e))=="string"||e instanceof gd?hx(l,"updateDoc",n._key,e,t,i):dx(l,"updateDoc",n._key,e),Ed(o,[c.toMutation(n._key,Vn.exists(!0))])}function p0(n){return Ed(hn(n.firestore,ei),[new Cp(n._key,Vn.none())])}function wx(n,e){const t=hn(n.firestore,ei),i=xt(n),o=f0(n.converter,e);return Ed(t,[s0(vd(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Vn.exists(!1))]).then((()=>i))}function Ex(n,...e){var t,i,o;n=Ke(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||c_(e[c])||(l=e[c++]);const h={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(c_(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,w;if(n instanceof ot)y=hn(n.firestore,ei),w=sd(n._key.path),p={next:T=>{e[c]&&e[c](m0(y,n,T))},error:e[c+1],complete:e[c+2]};else{const T=hn(n,Bs);y=hn(T.firestore,ei),w=T._query;const S=new nm(y);p={next:P=>{e[c]&&e[c](new Rs(y,S,T,P))},error:e[c+1],complete:e[c+2]},d0(n._query)}return(function(S,P,j,z){const M=new Kp(z),te=new Wp(P,M,j);return S.asyncQueue.enqueueAndForget((async()=>Bp(await $c(S),te))),()=>{M.Ou(),S.asyncQueue.enqueueAndForget((async()=>zp(await $c(S),te)))}})(md(y),w,h,p)}function Ed(n,e){return(function(i,o){const l=new Gr;return i.asyncQueue.enqueueAndForget((async()=>qP(await nx(i),o,l))),l.promise})(md(n),e)}function m0(n,e,t){const i=t.docs.get(e._key),o=new nm(n);return new Cs(n,o,e._key,i,new ul(t.hasPendingWrites,t.fromCache),e.converter)}function Tx(...n){return new Gp("arrayUnion",n)}function Ix(...n){return new Qp("arrayRemove",n)}(function(e,t=!0){(function(o){sa=o})(ia),er(new Ln("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),h=new ei(new pC(i.getProvider("auth-internal")),new yC(c,i.getProvider("app-check-internal")),(function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ce(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tl(y.options.projectId,w)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),h._setSettings(l),h}),"PUBLIC").setMultipleInstances(!0)),dn(fv,pv,e),dn(fv,pv,"esm2017")})();const g0="@firebase/installations",rm="0.6.18";/**
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
 */const y0=1e4,v0=`w:${rm}`,_0="FIS_v2",Sx="https://firebaseinstallations.googleapis.com/v1",Ax=3600*1e3,kx="installations",Cx="Installations";/**
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
 */const Rx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ds=new Ls(kx,Cx,Rx);function w0(n){return n instanceof rr&&n.code.includes("request-failed")}/**
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
 */function E0({projectId:n}){return`${Sx}/projects/${n}/installations`}function T0(n){return{token:n.token,requestStatus:2,expiresIn:xx(n.expiresIn),creationTime:Date.now()}}async function I0(n,e){const i=(await e.json()).error;return Ds.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function S0({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Px(n,{refreshToken:e}){const t=S0(n);return t.append("Authorization",Nx(e)),t}async function A0(n){const e=await n();return e.status>=500&&e.status<600?n():e}function xx(n){return Number(n.replace("s","000"))}function Nx(n){return`${_0} ${n}`}/**
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
 */async function bx({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=E0(n),o=S0(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:_0,appId:n.appId,sdkVersion:v0},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await A0(()=>fetch(i,h));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:T0(y.authToken)}}else throw await I0("Create Installation",p)}/**
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
 */function k0(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Dx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ox=/^[cdef][\w-]{21}$/,Yf="";function Vx(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Lx(n);return Ox.test(t)?t:Yf}catch{return Yf}}function Lx(n){return Dx(n).substr(0,22)}/**
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
 */function Td(n){return`${n.appName}!${n.appId}`}/**
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
 */const C0=new Map;function R0(n,e){const t=Td(n);P0(t,e),Mx(t,e)}function P0(n,e){const t=C0.get(n);if(t)for(const i of t)i(e)}function Mx(n,e){const t=jx();t&&t.postMessage({key:n,fid:e}),Fx()}let ks=null;function jx(){return!ks&&"BroadcastChannel"in self&&(ks=new BroadcastChannel("[Firebase] FID Change"),ks.onmessage=n=>{P0(n.data.key,n.data.fid)}),ks}function Fx(){C0.size===0&&ks&&(ks.close(),ks=null)}/**
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
 */const Ux="firebase-installations-database",Bx=1,Os="firebase-installations-store";let mf=null;function im(){return mf||(mf=Yc(Ux,Bx,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Os)}}})),mf}async function qc(n,e){const t=Td(n),o=(await im()).transaction(Os,"readwrite"),l=o.objectStore(Os),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&R0(n,e.fid),e}async function x0(n){const e=Td(n),i=(await im()).transaction(Os,"readwrite");await i.objectStore(Os).delete(e),await i.done}async function Id(n,e){const t=Td(n),o=(await im()).transaction(Os,"readwrite"),l=o.objectStore(Os),c=await l.get(t),h=e(c);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!c||c.fid!==h.fid)&&R0(n,h.fid),h}/**
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
 */async function sm(n){let e;const t=await Id(n.appConfig,i=>{const o=zx(i),l=$x(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Yf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function zx(n){const e=n||{fid:Vx(),registrationStatus:0};return N0(e)}function $x(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ds.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Wx(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qx(n)}:{installationEntry:e}}async function Wx(n,e){try{const t=await bx(n,e);return qc(n.appConfig,t)}catch(t){throw w0(t)&&t.customData.serverCode===409?await x0(n.appConfig):await qc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function qx(n){let e=await f_(n.appConfig);for(;e.registrationStatus===1;)await k0(100),e=await f_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await sm(n);return i||t}return e}function f_(n){return Id(n,e=>{if(!e)throw Ds.create("installation-not-found");return N0(e)})}function N0(n){return Hx(n)?{fid:n.fid,registrationStatus:0}:n}function Hx(n){return n.registrationStatus===1&&n.registrationTime+y0<Date.now()}/**
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
 */async function Kx({appConfig:n,heartbeatServiceProvider:e},t){const i=Gx(n,t),o=Px(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:v0,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await A0(()=>fetch(i,h));if(p.ok){const y=await p.json();return T0(y)}else throw await I0("Generate Auth Token",p)}function Gx(n,{fid:e}){return`${E0(n)}/${e}/authTokens:generate`}/**
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
 */async function om(n,e=!1){let t;const i=await Id(n.appConfig,l=>{if(!b0(l))throw Ds.create("not-registered");const c=l.authToken;if(!e&&Jx(c))return l;if(c.requestStatus===1)return t=Qx(n,e),l;{if(!navigator.onLine)throw Ds.create("app-offline");const h=Zx(l);return t=Yx(n,h),h}});return t?await t:i.authToken}async function Qx(n,e){let t=await p_(n.appConfig);for(;t.authToken.requestStatus===1;)await k0(100),t=await p_(n.appConfig);const i=t.authToken;return i.requestStatus===0?om(n,e):i}function p_(n){return Id(n,e=>{if(!b0(e))throw Ds.create("not-registered");const t=e.authToken;return eN(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Yx(n,e){try{const t=await Kx(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await qc(n.appConfig,i),t}catch(t){if(w0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await x0(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qc(n.appConfig,i)}throw t}}function b0(n){return n!==void 0&&n.registrationStatus===2}function Jx(n){return n.requestStatus===2&&!Xx(n)}function Xx(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Ax}function Zx(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function eN(n){return n.requestStatus===1&&n.requestTime+y0<Date.now()}/**
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
 */async function tN(n){const e=n,{installationEntry:t,registrationPromise:i}=await sm(e);return i?i.catch(console.error):om(e).catch(console.error),t.fid}/**
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
 */async function nN(n,e=!1){const t=n;return await rN(t),(await om(t,e)).token}async function rN(n){const{registrationPromise:e}=await sm(n);e&&await e}/**
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
 */function iN(n){if(!n||!n.options)throw gf("App Configuration");if(!n.name)throw gf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw gf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function gf(n){return Ds.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="installations",sN="installations-internal",oN=n=>{const e=n.getProvider("app").getImmediate(),t=iN(e),i=Ms(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},aN=n=>{const e=n.getProvider("app").getImmediate(),t=Ms(e,D0).getImmediate();return{getId:()=>tN(t),getToken:o=>nN(t,o)}};function lN(){er(new Ln(D0,oN,"PUBLIC")),er(new Ln(sN,aN,"PRIVATE"))}lN();dn(g0,rm);dn(g0,rm,"esm2017");/**
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
 */const uN="/firebase-messaging-sw.js",cN="/firebase-cloud-messaging-push-scope",O0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",dN="https://fcmregistrations.googleapis.com/v1",V0="google.c.a.c_id",hN="google.c.a.c_l",fN="google.c.a.ts",pN="google.c.a.e",m_=1e4;var g_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(g_||(g_={}));/**
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
 */var Sl;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Sl||(Sl={}));/**
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
 */function Wr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function mN(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const yf="fcm_token_details_db",gN=5,y_="fcm_token_object_Store";async function yN(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(yf))return null;let e=null;return(await Yc(yf,gN,{upgrade:async(i,o,l,c)=>{var h;if(o<2||!i.objectStoreNames.contains(y_))return;const p=c.objectStore(y_),y=await p.index("fcmSenderId").get(n);if(await p.clear(),!!y){if(o===2){const w=y;if(!w.auth||!w.p256dh||!w.endpoint)return;e={token:w.fcmToken,createTime:(h=w.createTime)!==null&&h!==void 0?h:Date.now(),subscriptionOptions:{auth:w.auth,p256dh:w.p256dh,endpoint:w.endpoint,swScope:w.swScope,vapidKey:typeof w.vapidKey=="string"?w.vapidKey:Wr(w.vapidKey)}}}else if(o===3){const w=y;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:Wr(w.auth),p256dh:Wr(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:Wr(w.vapidKey)}}}else if(o===4){const w=y;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:Wr(w.auth),p256dh:Wr(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:Wr(w.vapidKey)}}}}}})).close(),await of(yf),await of("fcm_vapid_details_db"),await of("undefined"),vN(e)?e:null}function vN(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const _N="firebase-messaging-database",wN=1,Al="firebase-messaging-store";let vf=null;function L0(){return vf||(vf=Yc(_N,wN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Al)}}})),vf}async function EN(n){const e=M0(n),i=await(await L0()).transaction(Al).objectStore(Al).get(e);if(i)return i;{const o=await yN(n.appConfig.senderId);if(o)return await am(n,o),o}}async function am(n,e){const t=M0(n),o=(await L0()).transaction(Al,"readwrite");return await o.objectStore(Al).put(e,t),await o.done,e}function M0({appConfig:n}){return n.appId}/**
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
 */const TN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Jt=new Ls("messaging","Messaging",TN);/**
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
 */async function IN(n,e){const t=await um(n),i=j0(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(lm(n.appConfig),o)).json()}catch(c){throw Jt.create("token-subscribe-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw Jt.create("token-subscribe-failed",{errorInfo:c})}if(!l.token)throw Jt.create("token-subscribe-no-token");return l.token}async function SN(n,e){const t=await um(n),i=j0(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${lm(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw Jt.create("token-update-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw Jt.create("token-update-failed",{errorInfo:c})}if(!l.token)throw Jt.create("token-update-no-token");return l.token}async function AN(n,e){const i={method:"DELETE",headers:await um(n)};try{const l=await(await fetch(`${lm(n.appConfig)}/${e}`,i)).json();if(l.error){const c=l.error.message;throw Jt.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw Jt.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function lm({projectId:n}){return`${dN}/projects/${n}/registrations`}async function um({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function j0({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==O0&&(o.web.applicationPubKey=i),o}/**
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
 */const kN=10080*60*1e3;async function CN(n){const e=await PN(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Wr(e.getKey("auth")),p256dh:Wr(e.getKey("p256dh"))},i=await EN(n.firebaseDependencies);if(i){if(xN(i.subscriptionOptions,t))return Date.now()>=i.createTime+kN?RN(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await AN(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return v_(n.firebaseDependencies,t)}else return v_(n.firebaseDependencies,t)}async function RN(n,e){try{const t=await SN(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await am(n.firebaseDependencies,i),t}catch(t){throw t}}async function v_(n,e){const i={token:await IN(n,e),createTime:Date.now(),subscriptionOptions:e};return await am(n,i),i.token}async function PN(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:mN(e)})}function xN(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return NN(e,n),bN(e,n),DN(e,n),e}function NN(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function bN(n,e){e.data&&(n.data=e.data)}function DN(n,e){var t,i,o,l,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const h=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;h&&(n.fcmOptions.link=h);const p=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
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
 */function ON(n){return typeof n=="object"&&!!n&&V0 in n}/**
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
 */function VN(n){if(!n||!n.options)throw _f("App Configuration Object");if(!n.name)throw _f("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw _f(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function _f(n){return Jt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=VN(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(n){try{n.swRegistration=await navigator.serviceWorker.register(uN,{scope:cN}),n.swRegistration.update().catch(()=>{}),await jN(n.swRegistration)}catch(e){throw Jt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function jN(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${m_} ms`)),m_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var c;((c=l.target)===null||c===void 0?void 0:c.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(n,e){if(!e&&!n.swRegistration&&await MN(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Jt.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=O0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(n,e){if(!navigator)throw Jt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Jt.create("permission-blocked");return await UN(n,e==null?void 0:e.vapidKey),await FN(n,e==null?void 0:e.serviceWorkerRegistration),CN(n)}/**
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
 */async function BN(n,e,t){const i=zN(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[V0],message_name:t[hN],message_time:t[fN],message_device_time:Math.floor(Date.now()/1e3)})}function zN(n){switch(n){case Sl.NOTIFICATION_CLICKED:return"notification_open";case Sl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function $N(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Sl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(__(t)):n.onMessageHandler.next(__(t)));const i=t.data;ON(i)&&i[pN]==="1"&&await BN(n,t.messageType,i)}const w_="@firebase/messaging",E_="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=n=>{const e=new LN(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>$N(e,t)),e},qN=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>F0(e,i)}};function HN(){er(new Ln("messaging",WN,"PUBLIC")),er(new Ln("messaging-internal",qN,"PRIVATE")),dn(w_,E_),dn(w_,E_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(){try{await Q_()}catch{return!1}return typeof window<"u"&&G_()&&RS()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Jf(n=Jc()){return U0().then(e=>{if(!e)throw Jt.create("unsupported-browser")},e=>{throw Jt.create("indexed-db-unsupported")}),Ms(Ke(n),"messaging").getImmediate()}async function Xf(n,e){return n=Ke(n),F0(n,e)}HN();const KN={apiKey:"AIzaSyAUNktXGZeeXlX3LKFolXZRVQZGDohlIF0",authDomain:"golfgang-79922.firebaseapp.com",projectId:"golfgang-79922",storageBucket:"golfgang-79922.appspot.com",messagingSenderId:"223762413770",appId:"1:223762413770:web:098607b8f30080df90dc33",measurementId:"G-T1FXETH3K0"},Xo=X_(KN),Ul=lC(Xo),He=ox(Xo),B0=W.createContext(null);function GN({children:n}){const[e,t]=W.useState(null),[i,o]=W.useState(null),[l,c]=W.useState(!1),[h,p]=W.useState(!0);W.useEffect(()=>{const w=YA(Ul,async T=>{if(!T){t(null),o(null),c(!1),p(!1);return}t(T);try{const S=xt(He,"users",T.uid),P=await tm(S);if(P.exists()){const j=P.data();o(j),c((j==null?void 0:j.isAdmin)===!0)}else o({}),c(!1)}catch(S){console.error("Error loading user profile:",S),o({})}p(!1)});return()=>w()},[]);const y={user:e,profile:i,isAdmin:l,loading:h};return v.jsx(B0.Provider,{value:y,children:n})}function Yi(){return W.useContext(B0)}const z0=W.createContext(null);function QN({children:n}){return v.jsx(z0.Provider,{value:{theme:"light"},children:n})}function YN(){return W.useContext(z0)||{theme:"light"}}function JN(){var w;const{user:n,isAdmin:e}=Yi(),t=ra(),i=na(),{theme:o,toggleTheme:l}=YN(),[c,h]=W.useState(!1),p=async()=>{await JA(Ul),t("/login")},y=()=>h(!1);return v.jsxs(v.Fragment,{children:[v.jsx("header",{className:"top-nav",children:v.jsxs("div",{className:"top-nav-inner",children:[v.jsx(Dn,{to:"/",className:"top-nav-left",style:{textDecoration:"none"},children:v.jsx("img",{src:"/logo.png",alt:"GolfGang",className:"brand-logo",style:{height:40,width:"auto",objectFit:"contain"}})}),v.jsxs("div",{className:"top-nav-right desktop-only nav-desktop",children:[n&&v.jsxs(v.Fragment,{children:[v.jsxs("nav",{className:"top-nav-links",children:[v.jsx(Dn,{to:"/",className:i.pathname==="/"?"active":void 0,children:"Calendar"}),e&&v.jsx(Dn,{to:"/admin",className:i.pathname.startsWith("/admin")?"active":void 0,children:"Admin"})]}),v.jsxs("button",{onClick:l,className:"theme-toggle-btn",children:[v.jsx("div",{className:"theme-toggle-thumb",style:{left:o==="dark"?30:3}}),v.jsx("span",{children:"☀️"}),v.jsx("span",{children:"🌙"})]}),v.jsx("button",{onClick:()=>t("/profile"),className:"btn btn-ghost btn-sm",children:"Profile"}),v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:p,children:"Logout"})]}),!n&&v.jsx(Dn,{to:"/login",className:"btn btn-primary btn-sm",children:"Login"})]}),n&&v.jsxs("button",{className:"mobile-only",onClick:()=>h(!c),style:{background:"none",border:"none",padding:8,cursor:"pointer",display:"flex",flexDirection:"column",gap:5},"aria-label":"Menu",children:[v.jsx("span",{style:{display:"block",width:22,height:2,background:"var(--color-text-main)",borderRadius:2,transition:"all 0.2s ease",transform:c?"rotate(45deg) translateY(7px)":"none"}}),v.jsx("span",{style:{display:"block",width:22,height:2,background:"var(--color-text-main)",borderRadius:2,transition:"all 0.2s ease",opacity:c?0:1}}),v.jsx("span",{style:{display:"block",width:22,height:2,background:"var(--color-text-main)",borderRadius:2,transition:"all 0.2s ease",transform:c?"rotate(-45deg) translateY(-7px)":"none"}})]})]})}),c&&v.jsxs("div",{className:"mobile-only",style:{position:"fixed",top:"var(--nav-height)",left:0,right:0,bottom:0,background:"var(--color-bg)",zIndex:100,padding:20,display:"flex",flexDirection:"column",gap:8,overflowY:"auto"},children:[n&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{style:{padding:"16px 0",borderBottom:"1px solid var(--color-border-subtle)",marginBottom:8},children:[v.jsx("div",{style:{fontWeight:600,fontSize:16},children:(w=n.email)==null?void 0:w.split("@")[0]}),v.jsxs("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:[n.email,e&&" • Admin"]})]}),v.jsx(Dn,{to:"/",onClick:y,style:{display:"flex",alignItems:"center",gap:12,padding:"14px 0",textDecoration:"none",color:i.pathname==="/"?"var(--color-primary)":"var(--color-text-main)",fontSize:16,fontWeight:500},children:"📅 Calendar"}),v.jsx(Dn,{to:"/profile",onClick:y,style:{display:"flex",alignItems:"center",gap:12,padding:"14px 0",textDecoration:"none",color:i.pathname==="/profile"?"var(--color-primary)":"var(--color-text-main)",fontSize:16,fontWeight:500},children:"👤 Profile"}),e&&v.jsx(Dn,{to:"/admin",onClick:y,style:{display:"flex",alignItems:"center",gap:12,padding:"14px 0",textDecoration:"none",color:i.pathname.startsWith("/admin")?"var(--color-primary)":"var(--color-text-main)",fontSize:16,fontWeight:500},children:"⚙️ Admin"}),v.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderTop:"1px solid var(--color-border-subtle)",marginTop:8},children:[v.jsx("span",{style:{fontSize:16,fontWeight:500},children:o==="dark"?"🌙 Dark Mode":"☀️ Light Mode"}),v.jsx("button",{onClick:l,style:{padding:"8px 16px",background:"var(--color-surface-soft)",border:"1px solid var(--color-border-subtle)",borderRadius:8,cursor:"pointer",fontSize:14,color:"var(--color-text-main)"},children:"Switch"})]}),v.jsx("button",{onClick:()=>{p(),y()},style:{display:"flex",alignItems:"center",gap:12,padding:"14px 0",background:"none",border:"none",textAlign:"left",cursor:"pointer",color:"var(--color-danger)",fontSize:16,fontWeight:500,width:"100%"},children:"🚪 Logout"})]}),!n&&v.jsx(Dn,{to:"/login",className:"btn btn-primary",onClick:y,style:{marginTop:20},children:"Login"})]})]})}function T_(){const n=ra(),[e,t]=W.useState(""),[i,o]=W.useState(""),[l,c]=W.useState(""),[h,p]=W.useState(!1);async function y(w){w.preventDefault(),c(""),p(!0);try{let T=e.trim();if(!e.includes("@")){const S=jl(Ar(He,"users"),Fl("username","==",e.trim().toLowerCase())),P=await qi(S);if(P.empty)throw new Error("Username not found.");T=P.docs[0].data().email}await qA(Ul,T,i),n("/")}catch(T){console.error(T),c(T.message||"Failed to sign in.")}p(!1)}return v.jsx("div",{style:{minHeight:"calc(100vh - var(--nav-height))",display:"flex",justifyContent:"center",alignItems:"center",padding:24},children:v.jsxs("div",{className:"card",style:{width:"100%",maxWidth:400},children:[v.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[v.jsx("div",{style:{width:48,height:48,borderRadius:12,background:"linear-gradient(135deg, #0f7b6c 0%, #2383e2 100%)",margin:"0 auto 16px"}}),v.jsx("h1",{style:{marginBottom:4},children:"Welcome back"}),v.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)",fontSize:14},children:"Sign in to your GolfGang account"})]}),l&&v.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:l}),v.jsxs("form",{onSubmit:y,children:[v.jsxs("div",{style:{marginBottom:16},children:[v.jsx("label",{children:"Email or username"}),v.jsx("input",{className:"input",type:"text",value:e,onChange:w=>t(w.target.value),placeholder:"you@example.com",required:!0})]}),v.jsxs("div",{style:{marginBottom:20},children:[v.jsx("label",{children:"Password"}),v.jsx("input",{className:"input",type:"password",value:i,onChange:w=>o(w.target.value),placeholder:"Your password",required:!0})]}),v.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px 16px"},disabled:h,type:"submit",children:h?"Signing in…":"Sign in"})]}),v.jsxs("div",{style:{marginTop:20,textAlign:"center",fontSize:14},children:[v.jsx("a",{href:"/signup",style:{display:"block",marginBottom:8},children:"Create an account"}),v.jsx("a",{href:"/reset-password",style:{color:"var(--color-text-secondary)"},children:"Forgot password?"})]})]})})}function XN(n=1e4){return new Promise((e,t)=>{if(window.google&&window.google.maps&&window.google.maps.places){e();return}const i=Date.now(),o=setInterval(()=>{window.google&&window.google.maps&&window.google.maps.places?(clearInterval(o),e()):Date.now()-i>n&&(clearInterval(o),t(new Error("Google Maps failed to load within timeout")))},100)})}function $0({onSelect:n,initialValue:e=""}){const t=W.useRef(null),[i,o]=W.useState(e),[l,c]=W.useState(null);return W.useEffect(()=>{let h;return XN().then(()=>{t.current&&(h=new window.google.maps.places.Autocomplete(t.current,{types:["establishment"],fields:["name","formatted_address","place_id","photos"]}),h.addListener("place_changed",()=>{const p=h.getPlace();if(console.log("Place selected:",p),!p||!p.place_id)return;let y="";p.photos&&p.photos.length>0?(y=p.photos[0].getUrl({maxWidth:1e3,maxHeight:600}),console.log("Photo URL:",y)):console.log("No photos available for this place");const w={name:p.name||"",address:p.formatted_address||"",placeId:p.place_id,photoUrl:y};console.log("Payload being sent:",w),o(w.name),n==null||n(w)}),c(null))}).catch(p=>{console.error("Error loading Google Maps:",p),c("Google Maps failed to load. Please refresh the page.")}),()=>{}},[n]),v.jsxs(v.Fragment,{children:[v.jsx("input",{ref:t,className:"input",style:{width:"100%"},placeholder:"Search golf course",value:i,onChange:h=>o(h.target.value)}),l&&v.jsx("p",{style:{color:"var(--danger)",fontSize:12,marginTop:4},children:l})]})}function ZN(){const{user:n,isAdmin:e}=Yi(),[t,i]=W.useState([]),[o,l]=W.useState(null),[c,h]=W.useState([]),[p,y]=W.useState(!1),[w,T]=W.useState(!1),[S,P]=W.useState(""),[j,z]=W.useState({name:"",address:"",placeId:"",photoUrl:""}),[M,te]=W.useState(""),[ie,X]=W.useState(""),[le,ke]=W.useState(""),[Re,b]=W.useState(!1);W.useEffect(()=>{const H=Ex(Ar(He,"events"),ue=>{const he=ue.docs.map(Y=>({id:Y.id,...Y.data()}));i(he)});return()=>H()},[]);const A=new Date,[R,x]=W.useState(A.getMonth()),[O,L]=W.useState(A.getFullYear()),C=new Date(O,R,1),Je=C.getDay(),dt=new Date(O,R+1,0).getDate(),ht=()=>{x(H=>H===0?11:H-1),R===0&&L(H=>H-1)},Ue=()=>{x(H=>H===11?0:H+1),R===11&&L(H=>H+1)},oe=H=>{const ue=["th","st","nd","rd"],he=H%100;return H+(ue[(he-20)%10]||ue[he]||ue[0])},_e=H=>{const ue=new Date(O,R,H),he=ue.toISOString().split("T")[0],Y=K[he]||[];l(ue),h(Y),y(!0)},ae=()=>{if(!o)return;const H=o.toLocaleDateString("en-AU",{weekday:"long"}),ue=o.getDate(),he=o.toLocaleDateString("en-AU",{month:"long"});P(`⛳ ${H} ${oe(ue)} ${he}`),y(!1),T(!0)},V=async()=>{if(!S.trim()||!o)return;b(!0);let H=null;if(M){const[ue,he,Y]=M.split("-"),re=new Date(Number(ue),Number(he)-1,Number(Y),23,59,59);H=We.fromDate(re)}await wx(Ar(He,"events"),{title:S.trim(),date:We.fromDate(o),responses:{},courseName:j.name||"",courseAddress:j.address||"",coursePlaceId:j.placeId||"",coursePhotoUrl:j.photoUrl||"",tee:ie.trim(),notes:le.trim(),rsvpDeadline:H,booked:!1,bookedAt:null}),P(""),z({name:"",address:"",placeId:"",photoUrl:""}),X(""),ke(""),te(""),b(!1),T(!1)},K={};return t.forEach(H=>{var Y;const ue=(Y=H.date)!=null&&Y.toDate?H.date.toDate():null;if(!ue)return;const he=ue.toISOString().split("T")[0];K[he]||(K[he]=[]),K[he].push(H)}),v.jsxs("div",{className:"page",children:[v.jsxs("div",{className:"card",style:{marginBottom:20},children:[v.jsxs("div",{className:"card-header",children:[v.jsxs("div",{children:[v.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:2},children:C.toLocaleDateString("en-AU",{month:"long",year:"numeric"})}),v.jsx("p",{style:{fontSize:13,color:"var(--color-text-secondary)",margin:0},children:"Tap a day to view or create events"})]}),v.jsxs("div",{style:{display:"flex",gap:4},children:[v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:ht,children:"←"}),v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:Ue,children:"→"})]})]}),v.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4,marginBottom:8},children:["S","M","T","W","T","F","S"].map((H,ue)=>v.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:500,color:"var(--color-text-tertiary)",padding:"4px 0"},children:H},ue))}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},children:[Array.from({length:Je}).map((H,ue)=>v.jsx("div",{},`empty-${ue}`)),Array.from({length:dt}).map((H,ue)=>{const he=ue+1,re=new Date(O,R,he).toISOString().split("T")[0],ge=K[re]||[],xe=A.getDate()===he&&A.getMonth()===R&&A.getFullYear()===O,Ne=ge.some(Nt=>Nt.booked),St=ge.some(Nt=>!Nt.booked),ir=ge.length>0;let En={};return Ne?En={background:"var(--color-success-soft)"}:St&&(En={background:"var(--color-warning-soft)"}),v.jsxs("div",{onClick:()=>_e(he),style:{aspectRatio:"1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:6,cursor:"pointer",transition:"all 0.15s ease",border:xe?"2px solid var(--color-primary)":"1px solid transparent",...En},onMouseOver:Nt=>{ir||(Nt.currentTarget.style.background="var(--color-bg-hover)")},onMouseOut:Nt=>{ir?Ne?Nt.currentTarget.style.background="var(--color-success-soft)":St&&(Nt.currentTarget.style.background="var(--color-warning-soft)"):Nt.currentTarget.style.background=""},children:[v.jsx("div",{style:{fontSize:14,fontWeight:xe?600:400,color:xe?"var(--color-primary)":"var(--color-text)"},children:he}),ir&&v.jsx("div",{style:{width:6,height:6,borderRadius:"50%",marginTop:2,background:Ne?"var(--color-success)":"var(--color-warning)"}})]},he)})]}),v.jsxs("div",{className:"calendar-legend",children:[v.jsxs("div",{className:"calendar-legend-item",children:[v.jsx("div",{className:"calendar-legend-dot calendar-legend-dot--proposed"}),v.jsx("span",{children:"Proposed"})]}),v.jsxs("div",{className:"calendar-legend-item",children:[v.jsx("div",{className:"calendar-legend-dot calendar-legend-dot--booked"}),v.jsx("span",{children:"Booked"})]})]})]}),v.jsxs("div",{className:"card",children:[v.jsx("div",{className:"card-header",children:v.jsxs("div",{className:"card-title-group",children:[v.jsx("h3",{className:"card-title",children:"Upcoming Events"}),v.jsx("p",{className:"card-subtitle",children:"Your next rounds"})]})}),v.jsx("div",{className:"card-body",children:t.length===0?v.jsxs("div",{className:"empty-state",children:[v.jsx("div",{className:"empty-state-icon",children:"🏌️"}),v.jsx("div",{className:"empty-state-title",children:"No events yet"}),v.jsx("p",{children:"Tap a day on the calendar to create one"})]}):[...t].sort((H,ue)=>H.date.toMillis()-ue.date.toMillis()).map(H=>{const ue=H.date.toDate(),he=n&&H.responses?H.responses[n.uid]:null,Y=H.responses?Object.values(H.responses).filter(re=>re==="available").length:0;return v.jsxs(Dn,{to:`/event/${H.id}`,className:`event-list-item ${he==="available"?"event-list-item--attending":""}`,style:{textDecoration:"none"},children:[v.jsxs("div",{style:{flex:1,minWidth:0},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[v.jsx("span",{style:{fontWeight:500,color:"var(--color-text)"},children:H.title}),v.jsx("span",{className:`status-badge ${H.booked?"status-badge--booked":"status-badge--proposed"}`,children:H.booked?"Booked":"Proposed"})]}),v.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:[ue.toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"}),H.tee&&` • ${H.tee}`,H.courseName&&` • ${H.courseName}`]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:6,fontSize:12},children:[v.jsxs("span",{style:{color:"var(--color-text-tertiary)"},children:["👥 ",Y,"/4"]}),he==="available"&&v.jsx("span",{style:{color:"var(--color-success)",fontWeight:500},children:"✓ You're in"}),!he&&!H.booked&&v.jsx("span",{style:{color:"var(--color-primary)",fontWeight:500},children:"Awaiting response"})]})]}),v.jsx("div",{style:{fontSize:18,color:"var(--color-text-tertiary)"},children:"→"})]},H.id)})})]}),p&&v.jsx("div",{className:"modal-backdrop",onClick:()=>y(!1),children:v.jsxs("div",{className:"modal",onClick:H=>H.stopPropagation(),children:[v.jsx("h2",{style:{marginTop:0,marginBottom:16},children:o==null?void 0:o.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"})}),c.length>0?v.jsx("div",{style:{marginBottom:20},children:c.map(H=>{const ue=H.responses?Object.values(H.responses).filter(Y=>Y==="available").length:0,he=n&&H.responses?H.responses[n.uid]:null;return v.jsxs(Dn,{to:`/event/${H.id}`,onClick:()=>y(!1),style:{display:"block",padding:14,background:"var(--color-bg-secondary)",borderRadius:8,marginBottom:8,textDecoration:"none",color:"inherit",borderLeft:he==="available"?"3px solid var(--color-success)":"3px solid transparent"},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[v.jsx("span",{style:{fontWeight:500},children:H.title}),v.jsx("span",{className:`status-badge ${H.booked?"status-badge--booked":"status-badge--proposed"}`,children:H.booked?"Booked":"Proposed"})]}),H.tee&&v.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:["🕐 ",H.tee]}),H.courseName&&v.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:["📍 ",H.courseName]}),v.jsxs("div",{style:{marginTop:8,fontSize:12,display:"flex",alignItems:"center",gap:8},children:[v.jsxs("span",{children:["👥 ",ue,"/4"]}),he==="available"&&v.jsx("span",{style:{color:"var(--color-success)"},children:"✓ You're in"})]})]},H.id)})}):v.jsxs("div",{style:{padding:24,textAlign:"center",color:"var(--color-text-secondary)",background:"var(--color-bg-secondary)",borderRadius:8,marginBottom:20},children:[v.jsx("div",{style:{fontSize:32,marginBottom:8},children:"🏌️"}),v.jsx("div",{children:"No events on this day"})]}),v.jsxs("div",{style:{display:"flex",gap:8},children:[e&&v.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:ae,children:"+ Create Event"}),v.jsx("button",{className:"btn btn-ghost",style:{flex:e?0:1},onClick:()=>y(!1),children:"Close"})]})]})}),w&&v.jsx("div",{className:"modal-backdrop",children:v.jsxs("div",{className:"modal",children:[v.jsx("h2",{style:{marginTop:0},children:"Create Event"}),v.jsx("p",{style:{color:"var(--color-text-secondary)",marginTop:-4,marginBottom:20,fontSize:14},children:o==null?void 0:o.toLocaleDateString("en-AU",{weekday:"long",month:"long",day:"numeric"})}),v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[v.jsxs("div",{children:[v.jsx("label",{children:"Event title"}),v.jsx("input",{className:"input",value:S,placeholder:"e.g. Sunday Stableford",onChange:H=>P(H.target.value)})]}),v.jsxs("div",{children:[v.jsx("label",{children:"Course"}),v.jsx($0,{initialValue:j.name,onSelect:H=>z(H)})]}),v.jsxs("div",{children:[v.jsx("label",{children:"Tee time"}),v.jsx("input",{className:"input",value:ie,placeholder:"e.g. 7:15am",onChange:H=>X(H.target.value)})]}),v.jsxs("div",{children:[v.jsx("label",{children:"Notes (optional)"}),v.jsx("textarea",{className:"input",placeholder:"Add any notes...",value:le,onChange:H=>ke(H.target.value),rows:3})]}),v.jsxs("div",{children:[v.jsx("label",{children:"RSVP Deadline"}),v.jsx("input",{className:"input",type:"date",value:M,onChange:H=>te(H.target.value)})]})]}),v.jsxs("div",{style:{marginTop:24,display:"flex",gap:8},children:[v.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:V,disabled:Re,children:Re?"Creating…":"Create Event"}),v.jsx("button",{className:"btn btn-ghost",onClick:()=>T(!1),children:"Cancel"})]})]})})]})}/**
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
 */const eb="type.googleapis.com/google.protobuf.Int64Value",tb="type.googleapis.com/google.protobuf.UInt64Value";function W0(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Hc(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Hc(e));if(typeof n=="function"||typeof n=="object")return W0(n,e=>Hc(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Zo(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case eb:case tb:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Zo(e)):typeof n=="function"||typeof n=="object"?W0(n,e=>Zo(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="functions";/**
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
 */const I_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class cn extends rr{constructor(e,t,i){super(`${cm}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,cn.prototype)}}function nb(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Kc(n,e){let t=nb(n),i=t,o;try{const l=e&&e.error;if(l){const c=l.status;if(typeof c=="string"){if(!I_[c])return new cn("internal","internal");t=I_[c],i=c}const h=l.message;typeof h=="string"&&(i=h),o=l.details,o!==void 0&&(o=Zo(o))}}catch{}return t==="ok"?null:new cn(t,i,o)}/**
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
 */class rb{constructor(e,t,i,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,ln(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||i.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:o}}}/**
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
 */const Zf="us-central1",ib=/^data: (.*?)(?:\n|$)/;function sb(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new cn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class ob{constructor(e,t,i,o,l=Zf,c=(...h)=>fetch(...h)){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new rb(e,t,i,o),this.cancelAllRequests=new Promise(h=>{this.deleteService=()=>Promise.resolve(h())});try{const h=new URL(l);this.customDomain=h.origin+(h.pathname==="/"?"":h.pathname),this.region=Zf}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function ab(n,e,t){const i=Vs(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(op(n.emulatorOrigin),ap("Functions",!0))}function lb(n,e,t){const i=o=>cb(n,e,o,{});return i.stream=(o,l)=>hb(n,e,o,l),i}async function ub(n,e,t,i){t["Content-Type"]="application/json";let o;try{o=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await o.json()}catch{}return{status:o.status,json:l}}async function q0(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function cb(n,e,t,i){const o=n._url(e);return db(n,o,t,i)}async function db(n,e,t,i){t=Hc(t);const o={data:t},l=await q0(n,i),c=i.timeout||7e4,h=sb(c),p=await Promise.race([ub(e,o,l,n.fetchImpl),h.promise,n.cancelAllRequests]);if(h.cancel(),!p)throw new cn("cancelled","Firebase Functions instance was deleted.");const y=Kc(p.status,p.json);if(y)throw y;if(!p.json)throw new cn("internal","Response is not valid JSON object.");let w=p.json.data;if(typeof w>"u"&&(w=p.json.result),typeof w>"u")throw new cn("internal","Response is missing data field.");return{data:Zo(w)}}function hb(n,e,t,i){const o=n._url(e);return fb(n,o,t,i||{})}async function fb(n,e,t,i){var o;t=Hc(t);const l={data:t},c=await q0(n,i);c["Content-Type"]="application/json",c.Accept="text/event-stream";let h;try{h=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:c,signal:i==null?void 0:i.signal})}catch(P){if(P instanceof Error&&P.name==="AbortError"){const z=new cn("cancelled","Request was cancelled.");return{data:Promise.reject(z),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(z)}}}}}}const j=Kc(0,null);return{data:Promise.reject(j),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(j)}}}}}}let p,y;const w=new Promise((P,j)=>{p=P,y=j});(o=i==null?void 0:i.signal)===null||o===void 0||o.addEventListener("abort",()=>{const P=new cn("cancelled","Request was cancelled.");y(P)});const T=h.body.getReader(),S=pb(T,p,y,i==null?void 0:i.signal);return{stream:{[Symbol.asyncIterator](){const P=S.getReader();return{async next(){const{value:j,done:z}=await P.read();return{value:j,done:z}},async return(){return await P.cancel(),{done:!0,value:void 0}}}}},data:w}}function pb(n,e,t,i){const o=(c,h)=>{const p=c.match(ib);if(!p)return;const y=p[1];try{const w=JSON.parse(y);if("result"in w){e(Zo(w.result));return}if("message"in w){h.enqueue(Zo(w.message));return}if("error"in w){const T=Kc(0,w);h.error(T),t(T);return}}catch(w){if(w instanceof cn){h.error(w),t(w);return}}},l=new TextDecoder;return new ReadableStream({start(c){let h="";return p();async function p(){if(i!=null&&i.aborted){const y=new cn("cancelled","Request was cancelled");return c.error(y),t(y),Promise.resolve()}try{const{value:y,done:w}=await n.read();if(w){h.trim()&&o(h.trim(),c),c.close();return}if(i!=null&&i.aborted){const S=new cn("cancelled","Request was cancelled");c.error(S),t(S),await n.cancel();return}h+=l.decode(y,{stream:!0});const T=h.split(`
`);h=T.pop()||"";for(const S of T)S.trim()&&o(S.trim(),c);return p()}catch(y){const w=y instanceof cn?y:Kc(0,null);c.error(w),t(w)}}},cancel(){return n.cancel()}})}const S_="@firebase/functions",A_="0.12.9";/**
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
 */const mb="auth-internal",gb="app-check-internal",yb="messaging-internal";function vb(n){const e=(t,{instanceIdentifier:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider(mb),c=t.getProvider(yb),h=t.getProvider(gb);return new ob(o,l,c,h,i)};er(new Ln(cm,e,"PUBLIC").setMultipleInstances(!0)),dn(S_,A_,n),dn(S_,A_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(n=Jc(),e=Zf){const i=Ms(Ke(n),cm).getImmediate({identifier:e}),o=q_("functions");return o&&wb(i,...o),i}function wb(n,e,t){ab(Ke(n),e,t)}function Eb(n,e,t){return lb(Ke(n),e)}vb();function Tb({placeId:n,style:e={},alt:t="Place photo"}){const[i,o]=W.useState(null),[l,c]=W.useState(!0);return W.useEffect(()=>{if(!n){o(null),c(!1);return}if(!window.google||!window.google.maps||!window.google.maps.places){console.warn("Google Maps not loaded"),o(null),c(!1);return}c(!0);const h=document.createElement("div");new window.google.maps.places.PlacesService(h).getDetails({placeId:n,fields:["photos"]},(y,w)=>{var T;if(w===window.google.maps.places.PlacesServiceStatus.OK&&((T=y==null?void 0:y.photos)==null?void 0:T.length)>0){const S=y.photos[0].getUrl({maxWidth:1e3,maxHeight:600});o(S)}else o(null);c(!1)})},[n]),l||!i?v.jsx("div",{style:{...e,background:"linear-gradient(135deg, var(--color-surface-soft) 0%, var(--color-surface) 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:l&&v.jsx("span",{style:{color:"var(--color-text-muted)",fontSize:12},children:"Loading..."})}):v.jsx("img",{src:i,alt:t,style:e,onError:h=>{h.target.style.display="none"}})}function Ib(n){return new Promise((e,t)=>{if(!window.google||!window.google.maps){t("Google Maps JS not loaded");return}new window.google.maps.places.PlacesService(document.createElement("div")).getDetails({placeId:n,fields:["geometry"]},(o,l)=>{l===window.google.maps.places.PlacesServiceStatus.OK?e(o.geometry.location.toJSON()):t(l)})})}async function Sb(n,e){const t=`https://api.open-meteo.com/v1/forecast?latitude=${n}&longitude=${e}&hourly=temperature_2m,precipitation_probability,windspeed_10m,cloudcover&daily=temperature_2m_max,precipitation_probability_max,weathercode&timezone=auto`;return await(await fetch(t)).json()}function Ab(n,e,t,i){let o="⛳",l="Good";n>=8?(o="☀️",l="Great conditions"):n>=6?(o="⛅",l="Good conditions"):n>=4?(o="🌥️",l="Fair conditions"):(o="🌧️",l="Challenging");const c=[];return t>50&&c.push("rain likely"),i>25&&c.push("windy"),e>35&&c.push("hot"),e<10&&c.push("cold"),{icon:o,label:l,warnings:c}}function kb({placeId:n,date:e,tee:t}){const[i,o]=W.useState(null),[l,c]=W.useState(null),[h,p]=W.useState(!1),[y,w]=W.useState(!1),T=e!=null&&e.toDate?e.toDate().toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"}):null;if(W.useEffect(()=>{if(!n)return;async function R(){p(!0),c(null);try{const x=await Ib(n);if(!x){c("Could not get course location");return}const O=await Sb(x.lat,x.lng);let L=null;if(t){const[C]=t.split(":").map(Number);L=C}o({coords:x,weather:O,idx:L})}catch(x){console.error("Failed to load golf conditions:",x),c("Could not load conditions")}finally{p(!1)}}R()},[n,t,e]),!n)return null;const S={padding:"14px 16px",background:"var(--color-bg-secondary)",borderRadius:"var(--radius-lg)",cursor:"pointer",transition:"background 0.15s ease"};if(h)return v.jsx("div",{style:S,children:v.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:"Loading weather..."})});if(l)return v.jsx("div",{style:S,children:v.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:l})});if(!i)return null;const{weather:P,idx:j}=i,z=j??9,M=Math.round(P.hourly.temperature_2m[z]),te=P.hourly.precipitation_probability[z],ie=Math.round(P.hourly.windspeed_10m[z]),X=P.hourly.cloudcover[z],le=10-(Math.abs(M-22)*.1+te*.05+ie*.05+X*.01),ke=Math.max(0,Math.min(10,le)),{icon:Re,label:b,warnings:A}=Ab(ke,M,te,ie);return v.jsxs("div",{style:S,onClick:()=>w(!y),children:[v.jsxs("div",{style:{fontSize:11,color:"var(--color-text-tertiary)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.04em",fontWeight:500},children:["Weather ",T&&`• ${T}`," ",t&&`@ ${t}`]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[v.jsx("span",{style:{fontSize:24},children:Re}),v.jsxs("div",{children:[v.jsx("div",{style:{fontSize:15,fontWeight:500,color:"var(--color-text)"},children:b}),v.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:[M,"°C • ",ie," km/h wind • ",te,"% rain"]})]})]}),v.jsx("span",{style:{fontSize:12,color:"var(--color-text-tertiary)",transform:y?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:"▼"})]}),A.length>0&&v.jsxs("div",{style:{fontSize:12,color:"var(--color-danger)",marginTop:8,display:"flex",alignItems:"center",gap:4},children:["⚠️ ",A.join(", ")]}),y&&v.jsxs("div",{style:{marginTop:12,paddingTop:12,borderTop:"1px solid var(--color-border)",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px 20px",fontSize:13},children:[v.jsxs("div",{children:[v.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Temperature"}),v.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[M,"°C"]})]}),v.jsxs("div",{children:[v.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Rain chance"}),v.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[te,"%"]})]}),v.jsxs("div",{children:[v.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Wind"}),v.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[ie," km/h"]})]}),v.jsxs("div",{children:[v.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Cloud cover"}),v.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[X,"%"]})]})]})]})}function k_(n,e){var S;if(!n)return"";const t=(S=n.date)!=null&&S.toDate?n.date.toDate():null,i=n.tee||"",o=n.courseName||"",l=n.notes||"";let c=t?new Date(t):new Date;if(i){const[P,j]=i.split(":").map(z=>parseInt(z,10));Number.isNaN(P)||c.setHours(P),Number.isNaN(j)||c.setMinutes(j)}const h=new Date(c.getTime()+4.5*60*60*1e3);function p(P){const j=P.getUTCFullYear(),z=String(P.getUTCMonth()+1).padStart(2,"0"),M=String(P.getUTCDate()).padStart(2,"0"),te=String(P.getUTCHours()).padStart(2,"0"),ie=String(P.getUTCMinutes()).padStart(2,"0"),X=String(P.getUTCSeconds()).padStart(2,"0");return`${j}${z}${M}T${te}${ie}${X}Z`}const y=`${p(c)}/${p(h)}`,w=`⛳ ${i||"Golf"} - ${o||"Golf Round"}`;return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:w,dates:y,details:l?`${l}

Event: ${e}`:`Event: ${e}`,location:o}).toString()}`}function Cb(n,e){return n?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e||"Golf Course")}&query_place_id=${n}`:e?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`:null}function Rb(){const{id:n}=LI(),e=ra(),{user:t,isAdmin:i}=Yi(),[o,l]=W.useState(null),[c,h]=W.useState({}),[p,y]=W.useState(null),[w,T]=W.useState(!0),[S,P]=W.useState(!1),[j,z]=W.useState(!1),[M,te]=W.useState(!1),[ie,X]=W.useState(!1),[le,ke]=W.useState({title:"",notes:"",courseName:"",courseAddress:"",coursePlaceId:"",coursePhotoUrl:"",tee:"",rsvpDeadline:""}),[Re,b]=W.useState([]),[A,R]=W.useState(!0),x=4;W.useEffect(()=>{async function Y(){try{const ge=xt(He,"events",n),xe=await tm(ge);if(!xe.exists()){e("/");return}const Ne=xe.data();l({id:xe.id,...Ne});const St=Ne.responses||{};h(St),t&&y(St[t.uid]||null),ke({title:Ne.title||"",notes:Ne.notes||"",courseName:Ne.courseName||"",courseAddress:Ne.courseAddress||"",coursePlaceId:Ne.coursePlaceId||"",coursePhotoUrl:Ne.coursePhotoUrl||"",tee:Ne.tee||"",rsvpDeadline:Ne.rsvpDeadline?Ne.rsvpDeadline.toDate().toISOString().slice(0,10):""})}catch(ge){console.error("Error loading event",ge)}finally{T(!1)}}async function re(){try{const ge=Ar(He,"users"),Ne=(await qi(ge)).docs.map(St=>({id:St.id,...St.data()}));b(Ne)}catch(ge){console.error("Error loading users",ge)}finally{R(!1)}}Y(),re()},[n,e,t]);async function O(Y){if(!(!t||!o)){P(!0);try{const re=xt(He,"events",o.id),ge={...c,[t.uid]:Y};await Xn(re,{responses:ge}),h(ge),y(Y)}catch(re){console.error("Error updating response",re)}finally{P(!1)}}}const L=async Y=>{if(!o||!Y)return;const re=xt(He,"events",o.id),ge={...c};delete ge[Y],await Xn(re,{responses:ge}),h(ge),Y===(t==null?void 0:t.uid)&&y(null)},C=async()=>{if(!o)return;const Y=xt(He,"events",n);await Xn(Y,{booked:!0,bookedAt:new Date().toISOString()}),l(re=>re&&{...re,booked:!0,bookedAt:new Date().toISOString()})},Je=async()=>{if(!o)return;const Y=xt(He,"events",n);await Xn(Y,{booked:!1,bookedAt:null}),l(re=>re&&{...re,booked:!1,bookedAt:null})},dt=async()=>{if(o){X(!0);try{const Y=_b(Xo,"us-central1"),ge=await Eb(Y,"triggerRsvpReminder")({eventId:o.id});alert(ge.data.message||"Reminders sent!")}catch(Y){console.error("Error sending reminder:",Y),alert("Failed to send reminder: "+(Y.message||"Unknown error"))}finally{X(!1)}}};async function ht(){if(o)try{const Y=xt(He,"events",o.id);let re={title:le.title||o.title,notes:le.notes,courseName:le.courseName,courseAddress:le.courseAddress,coursePlaceId:le.coursePlaceId,coursePhotoUrl:le.coursePhotoUrl,tee:le.tee,rsvpDeadline:le.rsvpDeadline?We.fromDate(new Date(le.rsvpDeadline+"T23:59:59")):null};await Xn(Y,re),l(ge=>ge&&{...ge,...re}),z(!1)}catch(Y){console.error("Error saving edits",Y),alert("Could not save changes.")}}async function Ue(){if(!(!o||!window.confirm("Delete this event?")))try{await p0(xt(He,"events",o.id)),e("/")}catch(Y){console.error("Error deleting event",Y)}}async function oe(){var Ne;if(!o)return;const Y=(Ne=o.date)!=null&&Ne.toDate?o.date.toDate():null,re=(Y==null?void 0:Y.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"}))||"",ge=window.location.href;let xe=`⛳ *${o.title||"Golf round"}*
`;re&&(xe+=`📅 ${re}
`),o.tee&&(xe+=`🕒 ${o.tee}
`),o.courseName&&(xe+=`📍 ${o.courseName}
`),xe+=`
🔗 ${ge}`;try{await navigator.clipboard.writeText(xe),alert("Copied to clipboard!")}catch{alert("Could not copy.")}}if(w||A)return v.jsx("div",{className:"page",children:v.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto",textAlign:"center"},children:"Loading…"})});if(!o)return v.jsx("div",{className:"page",children:v.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto"},children:"Event not found."})});const _e=Object.entries(c).filter(([Y,re])=>re==="available").map(([Y])=>Y),ae=_e.slice(0,x),V=_e.slice(x),K=t&&V.includes(t.uid),H=t&&ae.includes(t.uid),ue=Y=>{var ge;const re=Re.find(xe=>xe.id===Y);return(re==null?void 0:re.username)||((ge=re==null?void 0:re.email)==null?void 0:ge.split("@")[0])||"Unknown"},he=Cb(o.coursePlaceId,o.courseName);return v.jsxs("div",{className:"page",style:{display:"flex",flexDirection:"column",gap:16},children:[v.jsxs("div",{className:"card",style:{padding:0},children:[v.jsxs("div",{style:{position:"relative",height:180,background:"var(--color-bg-tertiary)",overflow:"hidden",borderRadius:"12px 12px 0 0"},children:[v.jsx(Tb,{placeId:o.coursePlaceId,alt:o.courseName||"Course",style:{width:"100%",height:"100%",objectFit:"cover"}}),v.jsx("div",{style:{position:"absolute",top:12,right:12,display:"flex",gap:8},children:v.jsxs("span",{className:`status-badge ${o.booked?"status-badge--booked":"status-badge--proposed"}`,children:[v.jsx("span",{className:"status-badge--dot"}),o.booked?"Booked":"Proposed"]})})]}),v.jsxs("div",{style:{padding:20},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12},children:[v.jsx("div",{style:{flex:1},children:j?v.jsx("input",{className:"input",value:le.title,onChange:Y=>ke(re=>({...re,title:Y.target.value})),placeholder:"Event title",style:{fontSize:18,fontWeight:600,marginBottom:8}}):v.jsx("h1",{style:{fontSize:22,marginBottom:4},children:o.title})}),i&&v.jsxs("div",{style:{position:"relative"},children:[j?v.jsxs("div",{style:{display:"flex",gap:6},children:[v.jsx("button",{className:"btn btn-primary btn-sm",onClick:ht,children:"Save"}),v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>z(!1),children:"Cancel"})]}):v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>te(!M),children:"•••"}),M&&v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{position:"fixed",inset:0,zIndex:100},onClick:()=>te(!1)}),v.jsxs("div",{className:"dropdown-menu",style:{zIndex:101},children:[v.jsx("button",{className:"dropdown-item",onClick:()=>{z(!0),te(!1)},children:"✏️ Edit"}),v.jsx("button",{className:"dropdown-item",onClick:()=>{oe(),te(!1)},children:"📤 Share"}),o.booked&&v.jsx("button",{className:"dropdown-item",onClick:()=>{window.open(k_(o,window.location.href),"_blank"),te(!1)},children:"📅 Add to Calendar"}),v.jsx("button",{className:"dropdown-item",onClick:()=>{o.booked?Je():C(),te(!1)},children:o.booked?"↩️ Unmark Booked":"✅ Mark Booked"}),!o.booked&&v.jsx("button",{className:"dropdown-item",onClick:()=>{dt(),te(!1)},disabled:ie,children:ie?"🔔 Sending...":"🔔 Send RSVP Reminder"}),v.jsx("div",{className:"dropdown-divider"}),v.jsx("button",{className:"dropdown-item dropdown-item--danger",onClick:()=>{Ue(),te(!1)},children:"🗑️ Delete"})]})]})]})]}),v.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:j?v.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:12},children:[v.jsxs("div",{children:[v.jsx("label",{children:"Course"}),v.jsx($0,{initialValue:le.courseName,onSelect:Y=>ke(re=>({...re,courseName:Y.name,courseAddress:Y.address,coursePlaceId:Y.placeId,coursePhotoUrl:Y.photoUrl}))})]}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[v.jsxs("div",{children:[v.jsx("label",{children:"Tee Time"}),v.jsx("input",{className:"input",type:"time",value:le.tee,onChange:Y=>ke(re=>({...re,tee:Y.target.value}))})]}),v.jsxs("div",{children:[v.jsx("label",{children:"RSVP Deadline"}),v.jsx("input",{className:"input",type:"date",value:le.rsvpDeadline,onChange:Y=>ke(re=>({...re,rsvpDeadline:Y.target.value}))})]})]}),v.jsxs("div",{children:[v.jsx("label",{children:"Notes"}),v.jsx("textarea",{className:"input",rows:2,value:le.notes,onChange:Y=>ke(re=>({...re,notes:Y.target.value}))})]})]}):v.jsxs(v.Fragment,{children:[o.courseName&&v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[v.jsx("span",{style:{fontSize:16},children:"📍"}),he?v.jsx("a",{href:he,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary)",textDecoration:"none"},children:o.courseName}):v.jsx("span",{children:o.courseName})]}),o.tee&&v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[v.jsx("span",{style:{fontSize:16},children:"🕐"}),v.jsx("span",{children:o.tee})]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[v.jsx("span",{style:{fontSize:16},children:"👥"}),v.jsxs("span",{children:[ae.length,"/",x]})]})]})}),!j&&o.notes&&v.jsx("p",{style:{marginTop:12,fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.5},children:o.notes}),!j&&o.coursePlaceId&&v.jsx("div",{style:{marginTop:16},children:v.jsx(kb,{placeId:o.coursePlaceId,tee:o.tee,date:o.date})})]})]}),!j&&v.jsx("div",{className:"card rsvp-card",children:o.booked?v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[v.jsx("span",{style:{fontSize:20},children:"🔒"}),v.jsxs("div",{children:[v.jsx("div",{style:{fontWeight:500},children:"RSVPs closed"}),v.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:"This round is booked"})]}),H&&v.jsx("button",{className:"btn btn-primary btn-sm",style:{marginLeft:"auto"},onClick:()=>window.open(k_(o,window.location.href),"_blank"),children:"📅 Add to Calendar"})]}):v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{marginBottom:12,fontWeight:500},children:"Are you in?"}),ae.length>=x&&!p&&v.jsx("div",{style:{marginBottom:12,padding:"8px 12px",background:"var(--color-warning-soft)",borderRadius:6,fontSize:13,color:"var(--color-warning)"},children:"Group is full — you'll be added to the reserve list"}),v.jsxs("div",{className:"rsvp-buttons",children:[v.jsx("button",{className:`rsvp-btn rsvp-btn--available ${p==="available"?"active":""}`,onClick:()=>O(p==="available"?null:"available"),disabled:S,children:S&&p==="available"?"...":"✓ I'm in"}),v.jsx("button",{className:`rsvp-btn rsvp-btn--unavailable ${p==="unavailable"?"active":""}`,onClick:()=>O(p==="unavailable"?null:"unavailable"),disabled:S,children:S&&p==="unavailable"?"...":"✗ Can't make it"})]})]})}),p&&!j&&v.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:p==="available"?K?"var(--color-warning-soft)":"var(--color-success-soft)":"var(--color-bg-secondary)",display:"flex",alignItems:"center",gap:10},children:[v.jsx("span",{style:{fontSize:18},children:p==="available"?K?"🔔":"✓":"✗"}),v.jsxs("div",{style:{flex:1},children:[v.jsx("div",{style:{fontWeight:500,fontSize:14},children:p==="available"?K?"You're on the reserve list":"You're in!":"You declined"}),K&&v.jsxs("div",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:["Position ",V.indexOf(t.uid)+1," in queue"]})]})]}),v.jsxs("div",{className:"card",children:[v.jsxs("div",{className:"section-header",children:[v.jsx("span",{className:"section-title",children:"Players"}),v.jsxs("span",{className:"section-count",children:[ae.length,"/",x]})]}),ae.length===0?v.jsxs("div",{className:"empty-state",style:{padding:"24px 0"},children:[v.jsx("div",{style:{fontSize:32,marginBottom:8},children:"🏌️"}),v.jsx("div",{children:"No one has responded yet"})]}):v.jsx("div",{className:"player-list",children:ae.map(Y=>{const re=Y===(t==null?void 0:t.uid);return v.jsxs("div",{className:"player-item",children:[v.jsxs("div",{className:"player-info",children:[v.jsx("div",{className:`player-avatar ${re?"player-avatar--you":""}`,children:ue(Y).charAt(0).toUpperCase()}),v.jsxs("span",{className:"player-name",children:[ue(Y),re&&v.jsx("span",{className:"player-badge",children:"You"})]})]}),i&&v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>L(Y),children:"Remove"})]},Y)})}),V.length>0&&v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"divider"}),v.jsxs("div",{className:"section-header",children:[v.jsx("span",{className:"section-title",children:"Reserve List"}),v.jsx("span",{className:"section-count",children:V.length})]}),v.jsx("div",{className:"player-list",children:V.map((Y,re)=>{const ge=Y===(t==null?void 0:t.uid);return v.jsxs("div",{className:"player-item",style:{opacity:.7},children:[v.jsxs("div",{className:"player-info",children:[v.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"var(--color-warning-soft)",color:"var(--color-warning)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:600},children:re+1}),v.jsxs("span",{className:"player-name",children:[ue(Y),ge&&v.jsx("span",{className:"player-badge",style:{background:"var(--color-warning)"},children:"You"})]})]}),i&&v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>L(Y),children:"Remove"})]},Y)})})]})]})]})}function Pb(){const[n,e]=W.useState([]),[t,i]=W.useState([]),[o,l]=W.useState(!0);W.useEffect(()=>{async function p(){const w=(await qi(Ar(He,"events"))).docs.map(P=>({id:P.id,...P.data()})),S=(await qi(Ar(He,"users"))).docs.map(P=>({id:P.id,...P.data()}));e(w),i(S),l(!1)}p()},[]);const c=async p=>{confirm("Delete this event?")&&(await p0(xt(He,"events",p)),e(y=>y.filter(w=>w.id!==p)))},h=async(p,y)=>{const w=xt(He,"users",p);await Xn(w,{isAdmin:!y}),i(T=>T.map(S=>S.id===p?{...S,isAdmin:!y}:S))};return o?v.jsx("div",{className:"page",children:v.jsx("div",{className:"card",style:{textAlign:"center",padding:40},children:"Loading…"})}):v.jsxs("div",{className:"page",children:[v.jsx("div",{className:"page-header",children:v.jsxs("div",{className:"page-header-title",children:[v.jsx("h1",{children:"Admin"}),v.jsx("p",{children:"Manage events and users"})]})}),v.jsxs("div",{className:"card",style:{marginBottom:20},children:[v.jsxs("div",{className:"section-header",children:[v.jsx("span",{className:"section-title",children:"Events"}),v.jsx("span",{className:"section-count",children:n.length})]}),n.length===0?v.jsx("p",{style:{color:"var(--color-text-secondary)",padding:"12px 0"},children:"No events yet"}):n.map((p,y)=>{var T,S;const w=(S=(T=p.date)==null?void 0:T.toDate)==null?void 0:S.call(T).toLocaleString("en-AU",{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:y<n.length-1?"1px solid var(--color-divider)":"none",gap:12},children:[v.jsxs("div",{style:{flex:1,minWidth:0},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:2},children:[v.jsx("span",{style:{fontWeight:500},children:p.title}),v.jsx("span",{className:`status-badge ${p.booked?"status-badge--booked":"status-badge--proposed"}`,children:p.booked?"Booked":"Proposed"})]}),v.jsx("span",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:w})]}),v.jsxs("div",{style:{display:"flex",gap:6,flexShrink:0},children:[v.jsx(Dn,{to:`/event/${p.id}`,className:"btn btn-ghost btn-sm",children:"Open"}),v.jsx("button",{className:"btn btn-ghost btn-sm",style:{color:"var(--color-danger)"},onClick:()=>c(p.id),children:"Delete"})]})]},p.id)})]}),v.jsxs("div",{className:"card",children:[v.jsxs("div",{className:"section-header",children:[v.jsx("span",{className:"section-title",children:"Users"}),v.jsx("span",{className:"section-count",children:t.length})]}),t.map((p,y)=>v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:y<t.length-1?"1px solid var(--color-divider)":"none",gap:12},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[v.jsx("div",{className:"avatar",children:(p.username||p.email||"?").charAt(0).toUpperCase()}),v.jsxs("div",{children:[v.jsx("span",{style:{fontWeight:500},children:p.username||p.email}),p.isAdmin&&v.jsx("span",{style:{marginLeft:8,fontSize:11,padding:"2px 6px",borderRadius:4,background:"var(--color-primary-soft)",color:"var(--color-primary)",fontWeight:500},children:"Admin"})]})]}),v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>h(p.id,p.isAdmin),children:p.isAdmin?"Remove Admin":"Make Admin"})]},p.id))]})]})}function xb(){return v.jsxs("div",{className:"card",style:{maxWidth:420,marginInline:"auto",marginTop:"3rem"},children:[v.jsx("h1",{children:"404"}),v.jsx("p",{className:"helper-text",style:{marginTop:"0.4rem"},children:"That page doesn't exist. Head back to the calendar."}),v.jsx(Dn,{to:"/",className:"btn btn-secondary",style:{marginTop:"1rem"},children:"Back to calendar"})]})}function uc({children:n}){const{user:e,loading:t}=Yi();return t?v.jsx("div",{className:"main-inner",children:v.jsx("div",{className:"card",children:"Checking who you are…"})}):e?n:v.jsx(Tc,{to:"/login",replace:!0})}function Nb({children:n}){const{user:e,isAdmin:t,loading:i}=Yi();return i?v.jsx("div",{className:"main-inner",children:v.jsx("div",{className:"card",children:"Checking permissions…"})}):e?t?n:v.jsx(Tc,{to:"/",replace:!0}):v.jsx(Tc,{to:"/login",replace:!0})}function bb(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),[c,h]=W.useState(!1);async function p(w){if(w.includes("@"))return w;const T=jl(Ar(He,"users"),Fl("username","==",w.toLowerCase())),S=await qi(T);if(S.empty)throw new Error("Username not found");return S.docs[0].data().email}async function y(w){w.preventDefault(),l(""),i(""),h(!0);try{const T=await p(n);await $A(Ul,T),i("Password reset link sent! Check your email.")}catch(T){l(T.message)}h(!1)}return v.jsx("div",{style:{maxWidth:420,margin:"4rem auto",padding:"1rem"},children:v.jsxs("div",{className:"surface",style:{padding:"2rem"},children:[v.jsx("h1",{style:{marginTop:0},children:"Reset password"}),v.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"1rem"},children:"Enter your email or username, and we’ll send you a reset link."}),v.jsxs("form",{onSubmit:y,children:[v.jsx("input",{className:"input",placeholder:"Email or username",value:n,onChange:w=>e(w.target.value),style:{marginBottom:"1rem"}}),t&&v.jsx("p",{style:{color:"var(--success)"},children:t}),o&&v.jsx("p",{style:{color:"var(--danger)"},children:o}),v.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:c?"Sending...":"Send reset link"})]})]})})}function Db(){const{user:n}=Yi(),[e,t]=W.useState(""),[i,o]=W.useState(""),[l,c]=W.useState("");if(!n)return v.jsx("p",{children:"Loading…"});async function h(y){const w=jl(Ar(He,"users"),Fl("username","==",y.toLowerCase()));return!(await qi(w)).empty}async function p(y){y.preventDefault(),o(""),c("");const w=e.toLowerCase().trim();if(!w.match(/^[a-z0-9_]+$/)){o("Username must be letters, numbers or underscores.");return}if(await h(w)){o("Username already taken.");return}await Xn(xt(He,"users",n.uid),{username:w}),c("Username updated!")}return v.jsx("div",{style:{maxWidth:420,margin:"4rem auto"},children:v.jsxs("div",{className:"surface",style:{padding:"2rem"},children:[v.jsx("h1",{children:"Change username"}),v.jsxs("form",{onSubmit:p,children:[v.jsx("input",{className:"input",placeholder:"New username",value:e,onChange:y=>t(y.target.value),style:{marginBottom:"1rem"}}),i&&v.jsx("p",{style:{color:"var(--danger)"},children:i}),l&&v.jsx("p",{style:{color:"var(--success)"},children:l}),v.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Update username"})]})]})})}const Ob="BOjFZAtY_oM-ci1cnb3p5sT23gsjbwZo4kINDrd-QFSIMk4zDL89q12PHLyh-_16BWitVjsk9UsNKuUPBuXTrT0";let cc=null;const Vb=async()=>cc||(await U0()&&(cc=Jf(Xo)),cc),dm=()=>"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window,wf=()=>dm()?Notification.permission:"unsupported",Lb=async n=>{if(!dm())return console.log("Push notifications not supported"),{success:!1,error:"not_supported"};try{if(await Notification.requestPermission()!=="granted")return console.log("Notification permission denied"),{success:!1,error:"permission_denied"};const t="/golfgang/",i=`${t}firebase-messaging-sw.js`.replace("//","/");console.log("Registering service worker at:",i);const o=await navigator.serviceWorker.register(i,{scope:t});console.log("Service worker registered:",o),await navigator.serviceWorker.ready,console.log("Service worker ready");const l=await Vb();if(!l)return console.error("Messaging not supported"),{success:!1,error:"messaging_not_supported"};const c=await Xf(l,{vapidKey:Ob,serviceWorkerRegistration:o});return c?(console.log("FCM Token obtained:",c.substring(0,20)+"..."),await Mb(n,c),{success:!0,token:c}):(console.log("No registration token available"),{success:!1,error:"no_token"})}catch(e){return console.error("Error requesting notification permission:",e),{success:!1,error:e.message}}},Mb=async(n,e)=>{try{const t=xt(He,"users",n);await Xn(t,{fcmTokens:Tx(e),notificationsEnabled:!0,lastTokenUpdate:new Date().toISOString()}),console.log("Token saved to user document")}catch(t){throw console.error("Error saving token:",t),t}},C_=async()=>{if(console.log("sendTestNotification called"),console.log("Notification.permission:",Notification.permission),Notification.permission!=="granted"){console.log("Notification permission not granted"),alert("Notification permission not granted. Please enable notifications first.");return}try{if(!("serviceWorker"in navigator)){console.error("Service Worker not supported"),alert("Service Worker not supported in this browser");return}console.log("Waiting for service worker to be ready...");const n=await navigator.serviceWorker.ready;if(console.log("Service worker ready:",n),!n){console.error("No service worker registration found"),alert("Service worker not ready. Please refresh and try again.");return}console.log("Sending notification via service worker..."),await n.showNotification("🏌️ GolfGang Test",{body:"Push notifications are working! 🎉",icon:"/logo192.png",badge:"/logo192.png",tag:"test-notification-"+Date.now(),vibrate:[200,100,200],requireInteraction:!1}),console.log("Test notification sent successfully")}catch(n){console.error("Failed to send test notification:",n),alert(`Failed to send notification: ${n.message}`)}},R_="BOjFZAtY_oM-ci1cnb3p5sT23gsjbwZo4kINDrd-QFSIMk4zDL89q12PHLyh-_16BWitVjsk9UsNKuUPBuXTrT0";function jb(){const{user:n}=Yi(),[e,t]=W.useState("default"),[i,o]=W.useState(!1),[l,c]=W.useState(!0),[h,p]=W.useState(!1),[y,w]=W.useState(!0);W.useEffect(()=>{(async()=>{if(!(n!=null&&n.uid)||!dm()){w(!1);return}if(c(!0),t(wf()),wf()==="granted")try{const j=Jf(Xo),z=await navigator.serviceWorker.getRegistration("/golfgang/");if(z){const M=await Xf(j,{vapidKey:R_,serviceWorkerRegistration:z});if(M){const te=await tm(xt(He,"users",n.uid));if(te.exists()){const X=te.data().fcmTokens||[];p(X.includes(M))}}}}catch(j){console.log("Error checking device token:",j)}w(!1)})()},[n==null?void 0:n.uid]);const T=async()=>{if(!n)return;o(!0);const P=await Lb(n.uid);o(!1),P.success?(t("granted"),p(!0),setTimeout(()=>{C_()},1e3)):t(wf())},S=async()=>{if(n){o(!0);try{const P=Jf(Xo),j=await navigator.serviceWorker.getRegistration("/golfgang/");if(j){const z=await Xf(P,{vapidKey:R_,serviceWorkerRegistration:j});z&&(await Xn(xt(He,"users",n.uid),{fcmTokens:Ix(z)}),console.log("Disabled notifications for this device"))}p(!1)}catch(P){console.error("Error disabling notifications:",P),alert("Failed to disable notifications")}finally{o(!1)}}};return l?y?v.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[v.jsx("span",{style:{fontSize:24},children:"🔔"}),v.jsx("div",{children:v.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Checking notifications..."})})]})}):e==="granted"&&h?v.jsx("div",{style:{padding:16,background:"var(--color-success-soft)",borderRadius:12,marginBottom:16},children:v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[v.jsx("span",{style:{fontSize:24},children:"🔔"}),v.jsxs("div",{style:{flex:1},children:[v.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-success)"},children:"Notifications Enabled"}),v.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"You'll receive updates about events and RSVPs."})]}),v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:C_,style:{marginRight:8},children:"Test"}),v.jsx("button",{className:"btn btn-ghost btn-sm",onClick:S,disabled:i,style:{color:"var(--color-danger)"},children:i?"...":"Disable"})]})}):e==="granted"&&!h?v.jsx("div",{style:{padding:16,background:"var(--color-warning-soft)",borderRadius:12,marginBottom:16},children:v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[v.jsx("span",{style:{fontSize:24},children:"🔔"}),v.jsxs("div",{style:{flex:1,minWidth:200},children:[v.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-warning)"},children:"Enable for This Device"}),v.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Notifications aren't set up on this device yet."})]}),v.jsx("button",{className:"btn btn-primary",onClick:T,disabled:i,children:i?"Enabling...":"Enable"})]})}):e==="denied"?v.jsx("div",{style:{padding:16,background:"var(--color-danger-soft)",borderRadius:12,marginBottom:16},children:v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[v.jsx("span",{style:{fontSize:24},children:"🔕"}),v.jsxs("div",{children:[v.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-danger)"},children:"Notifications Blocked"}),v.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Enable notifications in your browser settings to receive updates."})]})]})}):v.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[v.jsx("span",{style:{fontSize:24},children:"🔔"}),v.jsxs("div",{style:{flex:1,minWidth:200},children:[v.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Enable Push Notifications"}),v.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Get notified when events are booked or when you're invited."})]}),v.jsx("button",{className:"btn btn-primary",onClick:T,disabled:i,children:i?"Enabling...":"Enable"})]})}):v.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[v.jsx("span",{style:{fontSize:24},children:"📵"}),v.jsxs("div",{children:[v.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Notifications Not Supported"}),v.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Your browser doesn't support push notifications."})]})]})})}function Fb(){const{user:n,profile:e}=Yi(),[t,i]=W.useState((n==null?void 0:n.email)||""),[o,l]=W.useState((e==null?void 0:e.username)||""),[c,h]=W.useState(""),[p,y]=W.useState(""),[w,T]=W.useState(""),[S,P]=W.useState("");if(!n||!e)return v.jsx("div",{className:"page",children:v.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto",textAlign:"center"},children:"Loading…"})});async function j(X){const le=jl(Ar(He,"users"),Fl("username","==",X)),ke=await qi(le);return!ke.empty&&ke.docs[0].id!==n.uid}async function z(){const X=js.credential(n.email,c);await zA(n,X)}async function M(){T(""),P("");const X=o.toLowerCase().trim();if(!X.match(/^[a-z0-9_]+$/)){P("Username can only contain letters, numbers, and underscores.");return}if(await j(X)){P("That username is already taken.");return}await Xn(xt(He,"users",n.uid),{username:X}),T("Username updated.")}async function te(){T(""),P("");try{await z(),await HA(n,t),await Xn(xt(He,"users",n.uid),{email:t}),T("Email updated.")}catch(X){P(X.message)}}async function ie(){T(""),P("");try{await z(),await KA(n,p),T("Password updated."),y(""),h("")}catch(X){P(X.message)}}return v.jsx("div",{className:"page",children:v.jsxs("div",{style:{maxWidth:480,margin:"0 auto"},children:[v.jsx("div",{className:"page-header",children:v.jsxs("div",{className:"page-header-title",children:[v.jsx("h1",{children:"Profile"}),v.jsx("p",{children:"Manage your account settings"})]})}),v.jsx(jb,{}),w&&v.jsx("div",{className:"toast toast-success",style:{marginBottom:16},children:w}),S&&v.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:S}),v.jsxs("div",{className:"card",style:{marginBottom:16},children:[v.jsx("div",{className:"section-header",style:{marginBottom:12},children:v.jsx("span",{className:"section-title",children:"Username"})}),v.jsxs("div",{style:{marginBottom:12},children:[v.jsx("input",{className:"input",value:o,onChange:X=>l(X.target.value),placeholder:"Your username"}),v.jsx("p",{className:"helper-text",style:{marginTop:4},children:"Letters, numbers, and underscores only"})]}),v.jsx("button",{className:"btn btn-primary btn-sm",onClick:M,children:"Update username"})]}),v.jsxs("div",{className:"card",style:{marginBottom:16},children:[v.jsx("div",{className:"section-header",style:{marginBottom:12},children:v.jsx("span",{className:"section-title",children:"Email"})}),v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[v.jsxs("div",{children:[v.jsx("label",{children:"Email address"}),v.jsx("input",{className:"input",type:"email",value:t,onChange:X=>i(X.target.value)})]}),v.jsxs("div",{children:[v.jsx("label",{children:"Current password (to confirm)"}),v.jsx("input",{className:"input",type:"password",value:c,onChange:X=>h(X.target.value),placeholder:"Enter current password"})]})]}),v.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:12},onClick:te,children:"Update email"})]}),v.jsxs("div",{className:"card",children:[v.jsx("div",{className:"section-header",style:{marginBottom:12},children:v.jsx("span",{className:"section-title",children:"Change password"})}),v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[v.jsxs("div",{children:[v.jsx("label",{children:"Current password"}),v.jsx("input",{className:"input",type:"password",value:c,onChange:X=>h(X.target.value),placeholder:"Enter current password"})]}),v.jsxs("div",{children:[v.jsx("label",{children:"New password"}),v.jsx("input",{className:"input",type:"password",value:p,onChange:X=>y(X.target.value),placeholder:"Enter new password"})]})]}),v.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:12},onClick:ie,children:"Update password"})]})]})})}function Ub(){const n=ra(),[e,t]=W.useState(""),[i,o]=W.useState(""),[l,c]=W.useState(""),[h,p]=W.useState(""),[y,w]=W.useState(!1);async function T(P){const j=P.toLowerCase(),z=jl(Ar(He,"users"),Fl("username","==",j));return!(await qi(z)).empty}async function S(P){P.preventDefault(),p("");const j=i.trim().toLowerCase();if(!j.match(/^[a-z0-9_]+$/)){p("Username can only contain letters, numbers, and underscores.");return}w(!0);try{if(await T(j)){p("That username is already taken."),w(!1);return}const z=await WA(Ul,e,l);await _x(xt(He,"users",z.user.uid),{email:e,username:j,isAdmin:!1}),n("/")}catch(z){p(z.message||"Signup failed")}w(!1)}return v.jsx("div",{style:{minHeight:"calc(100vh - var(--nav-height))",display:"flex",justifyContent:"center",alignItems:"center",padding:24},children:v.jsxs("div",{className:"card",style:{width:"100%",maxWidth:400},children:[v.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[v.jsx("div",{style:{width:48,height:48,borderRadius:12,background:"linear-gradient(135deg, #0f7b6c 0%, #2383e2 100%)",margin:"0 auto 16px"}}),v.jsx("h1",{style:{marginBottom:4},children:"Create account"}),v.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)",fontSize:14},children:"Join GolfGang to plan rounds with friends"})]}),h&&v.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:h}),v.jsxs("form",{onSubmit:S,children:[v.jsxs("div",{style:{marginBottom:16},children:[v.jsx("label",{children:"Email"}),v.jsx("input",{className:"input",type:"email",value:e,onChange:P=>t(P.target.value),placeholder:"you@example.com",required:!0})]}),v.jsxs("div",{style:{marginBottom:16},children:[v.jsx("label",{children:"Username"}),v.jsx("input",{className:"input",value:i,onChange:P=>o(P.target.value),placeholder:"Choose a username",required:!0}),v.jsx("p",{className:"helper-text",style:{marginTop:4},children:"Letters, numbers, and underscores only"})]}),v.jsxs("div",{style:{marginBottom:20},children:[v.jsx("label",{children:"Password"}),v.jsx("input",{className:"input",type:"password",placeholder:"Create a password",value:l,onChange:P=>c(P.target.value),required:!0})]}),v.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px 16px"},disabled:y,type:"submit",children:y?"Creating account…":"Sign up"})]}),v.jsxs("div",{style:{marginTop:20,textAlign:"center",fontSize:14},children:[v.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Already have an account? "}),v.jsx("a",{href:"/login",children:"Sign in"})]})]})})}function Bb(){return v.jsxs("div",{className:"app-shell",children:[v.jsx(JN,{}),v.jsx("main",{className:"main-inner",children:v.jsxs(XI,{children:[v.jsx(bn,{path:"/",element:v.jsx(uc,{children:v.jsx(ZN,{})})}),v.jsx(bn,{path:"/login",element:v.jsx(T_,{})}),v.jsx(bn,{path:"/event/:id",element:v.jsx(uc,{children:v.jsx(Rb,{})})}),v.jsx(bn,{path:"/admin",element:v.jsx(Nb,{children:v.jsx(Pb,{})})}),v.jsx(bn,{path:"/404",element:v.jsx(xb,{})}),v.jsx(bn,{path:"*",element:v.jsx(Tc,{to:"/404"})}),v.jsx(bn,{path:"/signup",element:v.jsx(Ub,{})}),v.jsx(bn,{path:"/reset-password",element:v.jsx(bb,{})}),v.jsx(bn,{path:"/login",element:v.jsx(T_,{})}),v.jsx(bn,{path:"/profile",element:v.jsx(uc,{children:v.jsx(Fb,{})})}),v.jsx(bn,{path:"/change-username",element:v.jsx(uc,{children:v.jsx(Db,{})})})]})})]})}sI.createRoot(document.getElementById("root")).render(v.jsx(x_.StrictMode,{children:v.jsx(sS,{basename:"/golfgang/",children:v.jsx(QN,{children:v.jsx(GN,{children:v.jsx(Bb,{})})})})}));
