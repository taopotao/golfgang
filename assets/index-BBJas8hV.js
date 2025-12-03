function BT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function S_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qh={exports:{}},tl={},Yh={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function zT(){if(hy)return De;hy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function M(V,G,H){this.props=V,this.context=G,this.refs=$,this.updater=H||N}M.prototype.isReactComponent={},M.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},M.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ne(){}ne.prototype=M.prototype;function se(V,G,H){this.props=V,this.context=G,this.refs=$,this.updater=H||N}var Z=se.prototype=new ne;Z.constructor=se,U(Z,M.prototype),Z.isPureReactComponent=!0;var le=Array.isArray,Ce=Object.prototype.hasOwnProperty,Re={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function A(V,G,H){var ue,he={},Y=null,re=null;if(G!=null)for(ue in G.ref!==void 0&&(re=G.ref),G.key!==void 0&&(Y=""+G.key),G)Ce.call(G,ue)&&!b.hasOwnProperty(ue)&&(he[ue]=G[ue]);var ge=arguments.length-2;if(ge===1)he.children=H;else if(1<ge){for(var xe=Array(ge),Ne=0;Ne<ge;Ne++)xe[Ne]=arguments[Ne+2];he.children=xe}if(V&&V.defaultProps)for(ue in ge=V.defaultProps,ge)he[ue]===void 0&&(he[ue]=ge[ue]);return{$$typeof:n,type:V,key:Y,ref:re,props:he,_owner:Re.current}}function R(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(H){return G[H]})}var L=/\/+/g;function k(V,G){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):G.toString(36)}function Je(V,G,H,ue,he){var Y=typeof V;(Y==="undefined"||Y==="boolean")&&(V=null);var re=!1;if(V===null)re=!0;else switch(Y){case"string":case"number":re=!0;break;case"object":switch(V.$$typeof){case n:case e:re=!0}}if(re)return re=V,he=he(re),V=ue===""?"."+k(re,0):ue,le(he)?(H="",V!=null&&(H=V.replace(L,"$&/")+"/"),Je(he,G,H,"",function(Ne){return Ne})):he!=null&&(P(he)&&(he=R(he,H+(!he.key||re&&re.key===he.key?"":(""+he.key).replace(L,"$&/")+"/")+V)),G.push(he)),1;if(re=0,ue=ue===""?".":ue+":",le(V))for(var ge=0;ge<V.length;ge++){Y=V[ge];var xe=ue+k(Y,ge);re+=Je(Y,G,H,xe,he)}else if(xe=S(V),typeof xe=="function")for(V=xe.call(V),ge=0;!(Y=V.next()).done;)Y=Y.value,xe=ue+k(Y,ge++),re+=Je(Y,G,H,xe,he);else if(Y==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return re}function dt(V,G,H){if(V==null)return V;var ue=[],he=0;return Je(V,ue,"","",function(Y){return G.call(H,Y,he++)}),ue}function ht(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(H){(V._status===0||V._status===-1)&&(V._status=1,V._result=H)},function(H){(V._status===0||V._status===-1)&&(V._status=2,V._result=H)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},oe={transition:null},_e={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:oe,ReactCurrentOwner:Re};function ae(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:dt,forEach:function(V,G,H){dt(V,function(){G.apply(this,arguments)},H)},count:function(V){var G=0;return dt(V,function(){G++}),G},toArray:function(V){return dt(V,function(G){return G})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},De.Component=M,De.Fragment=t,De.Profiler=o,De.PureComponent=se,De.StrictMode=i,De.Suspense=p,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,De.act=ae,De.cloneElement=function(V,G,H){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ue=U({},V.props),he=V.key,Y=V.ref,re=V._owner;if(G!=null){if(G.ref!==void 0&&(Y=G.ref,re=Re.current),G.key!==void 0&&(he=""+G.key),V.type&&V.type.defaultProps)var ge=V.type.defaultProps;for(xe in G)Ce.call(G,xe)&&!b.hasOwnProperty(xe)&&(ue[xe]=G[xe]===void 0&&ge!==void 0?ge[xe]:G[xe])}var xe=arguments.length-2;if(xe===1)ue.children=H;else if(1<xe){ge=Array(xe);for(var Ne=0;Ne<xe;Ne++)ge[Ne]=arguments[Ne+2];ue.children=ge}return{$$typeof:n,type:V.type,key:he,ref:Y,props:ue,_owner:re}},De.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},De.createElement=A,De.createFactory=function(V){var G=A.bind(null,V);return G.type=V,G},De.createRef=function(){return{current:null}},De.forwardRef=function(V){return{$$typeof:h,render:V}},De.isValidElement=P,De.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:ht}},De.memo=function(V,G){return{$$typeof:y,type:V,compare:G===void 0?null:G}},De.startTransition=function(V){var G=oe.transition;oe.transition={};try{V()}finally{oe.transition=G}},De.unstable_act=ae,De.useCallback=function(V,G){return Ue.current.useCallback(V,G)},De.useContext=function(V){return Ue.current.useContext(V)},De.useDebugValue=function(){},De.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},De.useEffect=function(V,G){return Ue.current.useEffect(V,G)},De.useId=function(){return Ue.current.useId()},De.useImperativeHandle=function(V,G,H){return Ue.current.useImperativeHandle(V,G,H)},De.useInsertionEffect=function(V,G){return Ue.current.useInsertionEffect(V,G)},De.useLayoutEffect=function(V,G){return Ue.current.useLayoutEffect(V,G)},De.useMemo=function(V,G){return Ue.current.useMemo(V,G)},De.useReducer=function(V,G,H){return Ue.current.useReducer(V,G,H)},De.useRef=function(V){return Ue.current.useRef(V)},De.useState=function(V){return Ue.current.useState(V)},De.useSyncExternalStore=function(V,G,H){return Ue.current.useSyncExternalStore(V,G,H)},De.useTransition=function(){return Ue.current.useTransition()},De.version="18.3.1",De}var fy;function Yf(){return fy||(fy=1,Yh.exports=zT()),Yh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function $T(){if(py)return tl;py=1;var n=Yf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,y){var w,T={},S=null,N=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(N=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(h&&h.defaultProps)for(w in p=h.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:h,key:S,ref:N,props:T,_owner:o.current}}return tl.Fragment=t,tl.jsx=c,tl.jsxs=c,tl}var my;function WT(){return my||(my=1,Qh.exports=$T()),Qh.exports}var _=WT(),W=Yf();const A_=S_(W),qT=BT({__proto__:null,default:A_},[W]);var ec={},Jh={exports:{}},on={},Xh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function HT(){return gy||(gy=1,(function(n){function e(oe,_e){var ae=oe.length;oe.push(_e);e:for(;0<ae;){var V=ae-1>>>1,G=oe[V];if(0<o(G,_e))oe[V]=_e,oe[ae]=G,ae=V;else break e}}function t(oe){return oe.length===0?null:oe[0]}function i(oe){if(oe.length===0)return null;var _e=oe[0],ae=oe.pop();if(ae!==_e){oe[0]=ae;e:for(var V=0,G=oe.length,H=G>>>1;V<H;){var ue=2*(V+1)-1,he=oe[ue],Y=ue+1,re=oe[Y];if(0>o(he,ae))Y<G&&0>o(re,he)?(oe[V]=re,oe[Y]=ae,V=Y):(oe[V]=he,oe[ue]=ae,V=ue);else if(Y<G&&0>o(re,ae))oe[V]=re,oe[Y]=ae,V=Y;else break e}}return _e}function o(oe,_e){var ae=oe.sortIndex-_e.sortIndex;return ae!==0?ae:oe.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var p=[],y=[],w=1,T=null,S=3,N=!1,U=!1,$=!1,M=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(oe){for(var _e=t(y);_e!==null;){if(_e.callback===null)i(y);else if(_e.startTime<=oe)i(y),_e.sortIndex=_e.expirationTime,e(p,_e);else break;_e=t(y)}}function le(oe){if($=!1,Z(oe),!U)if(t(p)!==null)U=!0,ht(Ce);else{var _e=t(y);_e!==null&&Ue(le,_e.startTime-oe)}}function Ce(oe,_e){U=!1,$&&($=!1,ne(A),A=-1),N=!0;var ae=S;try{for(Z(_e),T=t(p);T!==null&&(!(T.expirationTime>_e)||oe&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,S=T.priorityLevel;var G=V(T.expirationTime<=_e);_e=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&i(p),Z(_e)}else i(p);T=t(p)}if(T!==null)var H=!0;else{var ue=t(y);ue!==null&&Ue(le,ue.startTime-_e),H=!1}return H}finally{T=null,S=ae,N=!1}}var Re=!1,b=null,A=-1,R=5,P=-1;function O(){return!(n.unstable_now()-P<R)}function L(){if(b!==null){var oe=n.unstable_now();P=oe;var _e=!0;try{_e=b(!0,oe)}finally{_e?k():(Re=!1,b=null)}}else Re=!1}var k;if(typeof se=="function")k=function(){se(L)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,dt=Je.port2;Je.port1.onmessage=L,k=function(){dt.postMessage(null)}}else k=function(){M(L,0)};function ht(oe){b=oe,Re||(Re=!0,k())}function Ue(oe,_e){A=M(function(){oe(n.unstable_now())},_e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(oe){oe.callback=null},n.unstable_continueExecution=function(){U||N||(U=!0,ht(Ce))},n.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<oe?Math.floor(1e3/oe):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(oe){switch(S){case 1:case 2:case 3:var _e=3;break;default:_e=S}var ae=S;S=_e;try{return oe()}finally{S=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(oe,_e){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var ae=S;S=oe;try{return _e()}finally{S=ae}},n.unstable_scheduleCallback=function(oe,_e,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,oe){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,oe={id:w++,callback:_e,priorityLevel:oe,startTime:ae,expirationTime:G,sortIndex:-1},ae>V?(oe.sortIndex=ae,e(y,oe),t(p)===null&&oe===t(y)&&($?(ne(A),A=-1):$=!0,Ue(le,ae-V))):(oe.sortIndex=G,e(p,oe),U||N||(U=!0,ht(Ce))),oe},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(oe){var _e=S;return function(){var ae=S;S=_e;try{return oe.apply(this,arguments)}finally{S=ae}}}})(Zh)),Zh}var yy;function GT(){return yy||(yy=1,Xh.exports=HT()),Xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function KT(){if(vy)return on;vy=1;var n=Yf(),e=GT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function S(r){return p.call(T,r)?!0:p.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function N(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function U(r,s,a,d){if(s===null||typeof s>"u"||N(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,d,f,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){M[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];M[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){M[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){M[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){M[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){M[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){M[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){M[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){M[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function se(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ne,se);M[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ne,se);M[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ne,se);M[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){M[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),M.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){M[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function Z(r,s,a,d){var f=M.hasOwnProperty(s)?M[s]:null;(f!==null?f.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(U(s,a,f,d)&&(a=null),d||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,d=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Re=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),oe=Symbol.iterator;function _e(r){return r===null||typeof r!="object"?null:(r=oe&&r[oe]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,V;function G(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var H=!1;function ue(r,s){if(!r||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var d=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){d=z}r.call(s.prototype)}else{try{throw Error()}catch(z){d=z}r()}}catch(z){if(z&&d&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=d.stack.split(`
`),E=f.length-1,C=g.length-1;1<=E&&0<=C&&f[E]!==g[C];)C--;for(;1<=E&&0<=C;E--,C--)if(f[E]!==g[C]){if(E!==1||C!==1)do if(E--,C--,0>C||f[E]!==g[C]){var x=`
`+f[E].replace(" at new "," at ");return r.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",r.displayName)),x}while(1<=E&&0<=C);break}}}finally{H=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function he(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=ue(r.type,!1),r;case 11:return r=ue(r.type.render,!1),r;case 1:return r=ue(r.type,!0),r;default:return""}}function Y(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case b:return"Fragment";case Re:return"Portal";case R:return"Profiler";case A:return"StrictMode";case k:return"Suspense";case Je:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case L:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case dt:return s=r.displayName||null,s!==null?s:Y(r.type)||"Memo";case ht:s=r._payload,r=r._init;try{return Y(r(s))}catch{}}return null}function re(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ge(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function xe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ne(r){var s=xe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){d=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(E){d=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function St(r){r._valueTracker||(r._valueTracker=Ne(r))}function ir(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=xe(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function En(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function xt(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function zs(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=ge(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function aa(r,s){s=s.checked,s!=null&&Z(r,"checked",s,!1)}function la(r,s){aa(r,s);var a=ge(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?$s(r,s.type,a):s.hasOwnProperty("defaultValue")&&$s(r,s.type,ge(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Fl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function $s(r,s,a){(s!=="number"||En(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var kr=Array.isArray;function Rr(r,s,a,d){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&d&&(r[a].defaultSelected=!0)}else{for(a=""+ge(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,d&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ua(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ws(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(kr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:ge(a)}}function qs(r,s){var a=ge(s.value),d=ge(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function ca(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function vt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _t(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?vt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Pr,da=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,f)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Pr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ni(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xi=["Webkit","ms","Moz","O"];Object.keys(Ji).forEach(function(r){Xi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ji[s]=Ji[r]})});function ha(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ji.hasOwnProperty(r)&&Ji[r]?(""+s).trim():s+"px"}function fa(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,f=ha(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,f):r[a]=f}}var pa=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(r,s){if(s){if(pa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ga(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function Hs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Gs=null,Tn=null,sr=null;function Ks(r){if(r=Ua(r)){if(typeof Gs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=mu(s),Gs(r.stateNode,r.type,s))}}function or(r){Tn?sr?sr.push(r):sr=[r]:Tn=r}function ya(){if(Tn){var r=Tn,s=sr;if(sr=Tn=null,Ks(r),s)for(r=0;r<s.length;r++)Ks(s[r])}}function es(r,s){return r(s)}function va(){}var xr=!1;function _a(r,s,a){if(xr)return r(s,a);xr=!0;try{return es(r,s,a)}finally{xr=!1,(Tn!==null||sr!==null)&&(va(),ya())}}function at(r,s){var a=r.stateNode;if(a===null)return null;var d=mu(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Qs=!1;if(h)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Qs=!1}function ts(r,s,a,d,f,g,E,C,x){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(X){this.onError(X)}}var ns=!1,Ys=null,jn=!1,wa=null,Id={onError:function(r){ns=!0,Ys=r}};function Js(r,s,a,d,f,g,E,C,x){ns=!1,Ys=null,ts.apply(Id,arguments)}function Ul(r,s,a,d,f,g,E,C,x){if(Js.apply(this,arguments),ns){if(ns){var z=Ys;ns=!1,Ys=null}else throw Error(t(198));jn||(jn=!0,wa=z)}}function Fn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function rs(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Un(r){if(Fn(r)!==r)throw Error(t(188))}function Bl(r){var s=r.alternate;if(!s){if(s=Fn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,d=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(d=f.return,d!==null){a=d;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Un(f),r;if(g===d)return Un(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==d.return)a=f,d=g;else{for(var E=!1,C=f.child;C;){if(C===a){E=!0,a=f,d=g;break}if(C===d){E=!0,d=f,a=g;break}C=C.sibling}if(!E){for(C=g.child;C;){if(C===a){E=!0,a=g,d=f;break}if(C===d){E=!0,d=g,a=f;break}C=C.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ea(r){return r=Bl(r),r!==null?Xs(r):null}function Xs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Xs(r);if(s!==null)return s;r=r.sibling}return null}var Zs=e.unstable_scheduleCallback,Ta=e.unstable_cancelCallback,zl=e.unstable_shouldYield,Sd=e.unstable_requestPaint,Ge=e.unstable_now,$l=e.unstable_getCurrentPriorityLevel,is=e.unstable_ImmediatePriority,ri=e.unstable_UserBlockingPriority,In=e.unstable_NormalPriority,Ia=e.unstable_LowPriority,Wl=e.unstable_IdlePriority,ss=null,fn=null;function ql(r){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(ss,r,void 0,(r.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Gl,Sa=Math.log,Hl=Math.LN2;function Gl(r){return r>>>=0,r===0?32:31-(Sa(r)/Hl|0)|0}var eo=64,to=4194304;function ii(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function os(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,f=r.suspendedLanes,g=r.pingedLanes,E=a&268435455;if(E!==0){var C=E&~f;C!==0?d=ii(C):(g&=E,g!==0&&(d=ii(g)))}else E=a&~f,E!==0?d=ii(E):g!==0&&(d=ii(g));if(d===0)return 0;if(s!==0&&s!==d&&(s&f)===0&&(f=d&-d,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-Gt(s),f=1<<a,d|=r[a],s&=~f;return d}function Ad(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nr(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-Gt(g),C=1<<E,x=f[E];x===-1?((C&a)===0||(C&d)!==0)&&(f[E]=Ad(C,s)):x<=s&&(r.expiredLanes|=C),g&=~C}}function pn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function as(){var r=eo;return eo<<=1,(eo&4194240)===0&&(eo=64),r}function si(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function oi(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Gt(s),r[s]=a}function qe(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Gt(a),g=1<<f;s[f]=0,d[f]=-1,r[f]=-1,a&=~g}}function ai(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-Gt(a),f=1<<d;f&s|r[d]&s&&(r[d]|=s),a&=~f}}var Le=0;function li(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Kl,no,Ql,Yl,Jl,Aa=!1,ar=[],Nt=null,Bn=null,zn=null,ui=new Map,Sn=new Map,lr=[],Cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xl(r,s){switch(r){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":ui.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(s.pointerId)}}function Xt(r,s,a,d,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ua(s),s!==null&&no(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function kd(r,s,a,d,f){switch(s){case"focusin":return Nt=Xt(Nt,r,s,a,d,f),!0;case"dragenter":return Bn=Xt(Bn,r,s,a,d,f),!0;case"mouseover":return zn=Xt(zn,r,s,a,d,f),!0;case"pointerover":var g=f.pointerId;return ui.set(g,Xt(ui.get(g)||null,r,s,a,d,f)),!0;case"gotpointercapture":return g=f.pointerId,Sn.set(g,Xt(Sn.get(g)||null,r,s,a,d,f)),!0}return!1}function Zl(r){var s=hs(r.target);if(s!==null){var a=Fn(s);if(a!==null){if(s=a.tag,s===13){if(s=rs(a),s!==null){r.blockedOn=s,Jl(r.priority,function(){Ql(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function br(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=ro(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);Zi=d,a.target.dispatchEvent(d),Zi=null}else return s=Ua(a),s!==null&&no(s),r.blockedOn=a,!1;s.shift()}return!0}function ls(r,s,a){br(r)&&a.delete(s)}function eu(){Aa=!1,Nt!==null&&br(Nt)&&(Nt=null),Bn!==null&&br(Bn)&&(Bn=null),zn!==null&&br(zn)&&(zn=null),ui.forEach(ls),Sn.forEach(ls)}function $n(r,s){r.blockedOn===s&&(r.blockedOn=null,Aa||(Aa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,eu)))}function Wn(r){function s(f){return $n(f,r)}if(0<ar.length){$n(ar[0],r);for(var a=1;a<ar.length;a++){var d=ar[a];d.blockedOn===r&&(d.blockedOn=null)}}for(Nt!==null&&$n(Nt,r),Bn!==null&&$n(Bn,r),zn!==null&&$n(zn,r),ui.forEach(s),Sn.forEach(s),a=0;a<lr.length;a++)d=lr[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Zl(a),a.blockedOn===null&&lr.shift()}var Dr=le.ReactCurrentBatchConfig,ci=!0;function et(r,s,a,d){var f=Le,g=Dr.transition;Dr.transition=null;try{Le=1,Ca(r,s,a,d)}finally{Le=f,Dr.transition=g}}function Rd(r,s,a,d){var f=Le,g=Dr.transition;Dr.transition=null;try{Le=4,Ca(r,s,a,d)}finally{Le=f,Dr.transition=g}}function Ca(r,s,a,d){if(ci){var f=ro(r,s,a,d);if(f===null)Fd(r,s,d,us,a),Xl(r,d);else if(kd(f,r,s,a,d))d.stopPropagation();else if(Xl(r,d),s&4&&-1<Cd.indexOf(r)){for(;f!==null;){var g=Ua(f);if(g!==null&&Kl(g),g=ro(r,s,a,d),g===null&&Fd(r,s,d,us,a),g===f)break;f=g}f!==null&&d.stopPropagation()}else Fd(r,s,d,null,a)}}var us=null;function ro(r,s,a,d){if(us=null,r=Hs(d),r=hs(r),r!==null)if(s=Fn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=rs(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return us=r,null}function ka(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($l()){case is:return 1;case ri:return 4;case In:case Ia:return 16;case Wl:return 536870912;default:return 16}default:return 16}}var mn=null,io=null,Zt=null;function Ra(){if(Zt)return Zt;var r,s=io,a=s.length,d,f="value"in mn?mn.value:mn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var E=a-r;for(d=1;d<=E&&s[a-d]===f[g-d];d++);return Zt=f.slice(r,1<d?1-d:void 0)}function so(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ur(){return!0}function Pa(){return!1}function bt(r){function s(a,d,f,g,E){this._reactName=a,this._targetInst=f,this.type=d,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var C in r)r.hasOwnProperty(C)&&(a=r[C],this[C]=a?a(g):g[C]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ur:Pa,this.isPropagationStopped=Pa,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),s}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=bt(qn),cr=ae({},qn,{view:0,detail:0}),Pd=bt(cr),ao,Or,di,cs=ae({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==di&&(di&&r.type==="mousemove"?(ao=r.screenX-di.screenX,Or=r.screenY-di.screenY):Or=ao=0,di=r),ao)},movementY:function(r){return"movementY"in r?r.movementY:Or}}),lo=bt(cs),xa=ae({},cs,{dataTransfer:0}),tu=bt(xa),uo=ae({},cr,{relatedTarget:0}),co=bt(uo),nu=ae({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vr=bt(nu),ru=ae({},qn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),iu=bt(ru),su=ae({},qn,{data:0}),Na=bt(su),ho={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ou={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function au(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ou[r])?!!s[r]:!1}function dr(){return au}var u=ae({},cr,{key:function(r){if(r.key){var s=ho[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=so(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Kt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(r){return r.type==="keypress"?so(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?so(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=bt(u),v=ae({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=bt(v),j=ae({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr}),q=bt(j),ie=ae({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=bt(ie),wt=ae({},cs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=bt(wt),At=[9,13,27,32],ft=h&&"CompositionEvent"in window,An=null;h&&"documentMode"in document&&(An=document.documentMode);var gn=h&&"TextEvent"in window&&!An,ds=h&&(!ft||An&&8<An&&11>=An),fo=" ",om=!1;function am(r,s){switch(r){case"keyup":return At.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var po=!1;function j0(r,s){switch(r){case"compositionend":return lm(s);case"keypress":return s.which!==32?null:(om=!0,fo);case"textInput":return r=s.data,r===fo&&om?null:r;default:return null}}function F0(r,s){if(po)return r==="compositionend"||!ft&&am(r,s)?(r=Ra(),Zt=io=mn=null,po=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ds&&s.locale!=="ko"?null:s.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!U0[r.type]:s==="textarea"}function cm(r,s,a,d){or(d),s=hu(s,"onChange"),0<s.length&&(a=new oo("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var ba=null,Da=null;function B0(r){Rm(r,0)}function lu(r){var s=_o(r);if(ir(s))return r}function z0(r,s){if(r==="change")return s}var dm=!1;if(h){var xd;if(h){var Nd="oninput"in document;if(!Nd){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),Nd=typeof hm.oninput=="function"}xd=Nd}else xd=!1;dm=xd&&(!document.documentMode||9<document.documentMode)}function fm(){ba&&(ba.detachEvent("onpropertychange",pm),Da=ba=null)}function pm(r){if(r.propertyName==="value"&&lu(Da)){var s=[];cm(s,Da,r,Hs(r)),_a(B0,s)}}function $0(r,s,a){r==="focusin"?(fm(),ba=s,Da=a,ba.attachEvent("onpropertychange",pm)):r==="focusout"&&fm()}function W0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return lu(Da)}function q0(r,s){if(r==="click")return lu(s)}function H0(r,s){if(r==="input"||r==="change")return lu(s)}function G0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Hn=typeof Object.is=="function"?Object.is:G0;function Oa(r,s){if(Hn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var f=a[d];if(!p.call(s,f)||!Hn(r[f],s[f]))return!1}return!0}function mm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function gm(r,s){var a=mm(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mm(a)}}function ym(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?ym(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function vm(){for(var r=window,s=En();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=En(r.document)}return s}function bd(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function K0(r){var s=vm(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&ym(a.ownerDocument.documentElement,a)){if(d!==null&&bd(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(d.start,f);d=d.end===void 0?g:Math.min(d.end,f),!r.extend&&g>d&&(f=d,d=g,g=f),f=gm(a,g);var E=gm(a,d);f&&E&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>d?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Q0=h&&"documentMode"in document&&11>=document.documentMode,mo=null,Dd=null,Va=null,Od=!1;function _m(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Od||mo==null||mo!==En(d)||(d=mo,"selectionStart"in d&&bd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Va&&Oa(Va,d)||(Va=d,d=hu(Dd,"onSelect"),0<d.length&&(s=new oo("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=mo)))}function uu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var go={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},Vd={},wm={};h&&(wm=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function cu(r){if(Vd[r])return Vd[r];if(!go[r])return r;var s=go[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in wm)return Vd[r]=s[a];return r}var Em=cu("animationend"),Tm=cu("animationiteration"),Im=cu("animationstart"),Sm=cu("transitionend"),Am=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hi(r,s){Am.set(r,s),l(s,[r])}for(var Ld=0;Ld<Cm.length;Ld++){var Md=Cm[Ld],Y0=Md.toLowerCase(),J0=Md[0].toUpperCase()+Md.slice(1);hi(Y0,"on"+J0)}hi(Em,"onAnimationEnd"),hi(Tm,"onAnimationIteration"),hi(Im,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(Sm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X0=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function km(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,Ul(d,s,void 0,r),r.currentTarget=null}function Rm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],f=d.event;d=d.listeners;e:{var g=void 0;if(s)for(var E=d.length-1;0<=E;E--){var C=d[E],x=C.instance,z=C.currentTarget;if(C=C.listener,x!==g&&f.isPropagationStopped())break e;km(f,C,z),g=x}else for(E=0;E<d.length;E++){if(C=d[E],x=C.instance,z=C.currentTarget,C=C.listener,x!==g&&f.isPropagationStopped())break e;km(f,C,z),g=x}}}if(jn)throw r=wa,jn=!1,wa=null,r}function Xe(r,s){var a=s[qd];a===void 0&&(a=s[qd]=new Set);var d=r+"__bubble";a.has(d)||(Pm(s,r,2,!1),a.add(d))}function jd(r,s,a){var d=0;s&&(d|=4),Pm(a,r,d,s)}var du="_reactListening"+Math.random().toString(36).slice(2);function Ma(r){if(!r[du]){r[du]=!0,i.forEach(function(a){a!=="selectionchange"&&(X0.has(a)||jd(a,!1,r),jd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[du]||(s[du]=!0,jd("selectionchange",!1,s))}}function Pm(r,s,a,d){switch(ka(s)){case 1:var f=et;break;case 4:f=Rd;break;default:f=Ca}a=f.bind(null,s,a,r),f=void 0,!Qs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),d?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Fd(r,s,a,d,f){var g=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var E=d.tag;if(E===3||E===4){var C=d.stateNode.containerInfo;if(C===f||C.nodeType===8&&C.parentNode===f)break;if(E===4)for(E=d.return;E!==null;){var x=E.tag;if((x===3||x===4)&&(x=E.stateNode.containerInfo,x===f||x.nodeType===8&&x.parentNode===f))return;E=E.return}for(;C!==null;){if(E=hs(C),E===null)return;if(x=E.tag,x===5||x===6){d=g=E;continue e}C=C.parentNode}}d=d.return}_a(function(){var z=g,X=Hs(a),ee=[];e:{var J=Am.get(r);if(J!==void 0){var de=oo,me=r;switch(r){case"keypress":if(so(a)===0)break e;case"keydown":case"keyup":de=m;break;case"focusin":me="focus",de=co;break;case"focusout":me="blur",de=co;break;case"beforeblur":case"afterblur":de=co;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=tu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=q;break;case Em:case Tm:case Im:de=Vr;break;case Sm:de=$e;break;case"scroll":de=Pd;break;case"wheel":de=Me;break;case"copy":case"cut":case"paste":de=iu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=I}var ye=(s&4)!==0,lt=!ye&&r==="scroll",F=ye?J!==null?J+"Capture":null:J;ye=[];for(var D=z,B;D!==null;){B=D;var te=B.stateNode;if(B.tag===5&&te!==null&&(B=te,F!==null&&(te=at(D,F),te!=null&&ye.push(ja(D,te,B)))),lt)break;D=D.return}0<ye.length&&(J=new de(J,me,null,a,X),ee.push({event:J,listeners:ye}))}}if((s&7)===0){e:{if(J=r==="mouseover"||r==="pointerover",de=r==="mouseout"||r==="pointerout",J&&a!==Zi&&(me=a.relatedTarget||a.fromElement)&&(hs(me)||me[Lr]))break e;if((de||J)&&(J=X.window===X?X:(J=X.ownerDocument)?J.defaultView||J.parentWindow:window,de?(me=a.relatedTarget||a.toElement,de=z,me=me?hs(me):null,me!==null&&(lt=Fn(me),me!==lt||me.tag!==5&&me.tag!==6)&&(me=null)):(de=null,me=z),de!==me)){if(ye=lo,te="onMouseLeave",F="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(ye=I,te="onPointerLeave",F="onPointerEnter",D="pointer"),lt=de==null?J:_o(de),B=me==null?J:_o(me),J=new ye(te,D+"leave",de,a,X),J.target=lt,J.relatedTarget=B,te=null,hs(X)===z&&(ye=new ye(F,D+"enter",me,a,X),ye.target=B,ye.relatedTarget=lt,te=ye),lt=te,de&&me)t:{for(ye=de,F=me,D=0,B=ye;B;B=yo(B))D++;for(B=0,te=F;te;te=yo(te))B++;for(;0<D-B;)ye=yo(ye),D--;for(;0<B-D;)F=yo(F),B--;for(;D--;){if(ye===F||F!==null&&ye===F.alternate)break t;ye=yo(ye),F=yo(F)}ye=null}else ye=null;de!==null&&xm(ee,J,de,ye,!1),me!==null&&lt!==null&&xm(ee,lt,me,ye,!0)}}e:{if(J=z?_o(z):window,de=J.nodeName&&J.nodeName.toLowerCase(),de==="select"||de==="input"&&J.type==="file")var ve=z0;else if(um(J))if(dm)ve=H0;else{ve=W0;var Ee=$0}else(de=J.nodeName)&&de.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(ve=q0);if(ve&&(ve=ve(r,z))){cm(ee,ve,a,X);break e}Ee&&Ee(r,J,z),r==="focusout"&&(Ee=J._wrapperState)&&Ee.controlled&&J.type==="number"&&$s(J,"number",J.value)}switch(Ee=z?_o(z):window,r){case"focusin":(um(Ee)||Ee.contentEditable==="true")&&(mo=Ee,Dd=z,Va=null);break;case"focusout":Va=Dd=mo=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,_m(ee,a,X);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":_m(ee,a,X)}var Te;if(ft)e:{switch(r){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else po?am(r,a)&&(Ae="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(ds&&a.locale!=="ko"&&(po||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&po&&(Te=Ra()):(mn=X,io="value"in mn?mn.value:mn.textContent,po=!0)),Ee=hu(z,Ae),0<Ee.length&&(Ae=new Na(Ae,r,null,a,X),ee.push({event:Ae,listeners:Ee}),Te?Ae.data=Te:(Te=lm(a),Te!==null&&(Ae.data=Te)))),(Te=gn?j0(r,a):F0(r,a))&&(z=hu(z,"onBeforeInput"),0<z.length&&(X=new Na("onBeforeInput","beforeinput",null,a,X),ee.push({event:X,listeners:z}),X.data=Te))}Rm(ee,s)})}function ja(r,s,a){return{instance:r,listener:s,currentTarget:a}}function hu(r,s){for(var a=s+"Capture",d=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=at(r,a),g!=null&&d.unshift(ja(r,g,f)),g=at(r,s),g!=null&&d.push(ja(r,g,f))),r=r.return}return d}function yo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function xm(r,s,a,d,f){for(var g=s._reactName,E=[];a!==null&&a!==d;){var C=a,x=C.alternate,z=C.stateNode;if(x!==null&&x===d)break;C.tag===5&&z!==null&&(C=z,f?(x=at(a,g),x!=null&&E.unshift(ja(a,x,C))):f||(x=at(a,g),x!=null&&E.push(ja(a,x,C)))),a=a.return}E.length!==0&&r.push({event:s,listeners:E})}var Z0=/\r\n?/g,eT=/\u0000|\uFFFD/g;function Nm(r){return(typeof r=="string"?r:""+r).replace(Z0,`
`).replace(eT,"")}function fu(r,s,a){if(s=Nm(s),Nm(r)!==s&&a)throw Error(t(425))}function pu(){}var Ud=null,Bd=null;function zd(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,tT=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,nT=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(r){return bm.resolve(null).then(r).catch(rT)}:$d;function rT(r){setTimeout(function(){throw r})}function Wd(r,s){var a=s,d=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(d===0){r.removeChild(f),Wn(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=f}while(a);Wn(s)}function fi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Dm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var vo=Math.random().toString(36).slice(2),hr="__reactFiber$"+vo,Fa="__reactProps$"+vo,Lr="__reactContainer$"+vo,qd="__reactEvents$"+vo,iT="__reactListeners$"+vo,sT="__reactHandles$"+vo;function hs(r){var s=r[hr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Lr]||a[hr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Dm(r);r!==null;){if(a=r[hr])return a;r=Dm(r)}return s}r=a,a=r.parentNode}return null}function Ua(r){return r=r[hr]||r[Lr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function _o(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function mu(r){return r[Fa]||null}var Hd=[],wo=-1;function pi(r){return{current:r}}function Ze(r){0>wo||(r.current=Hd[wo],Hd[wo]=null,wo--)}function Ke(r,s){wo++,Hd[wo]=r.current,r.current=s}var mi={},Ft=pi(mi),en=pi(!1),fs=mi;function Eo(r,s){var a=r.type.contextTypes;if(!a)return mi;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function tn(r){return r=r.childContextTypes,r!=null}function gu(){Ze(en),Ze(Ft)}function Om(r,s,a){if(Ft.current!==mi)throw Error(t(168));Ke(Ft,s),Ke(en,a)}function Vm(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var f in d)if(!(f in s))throw Error(t(108,re(r)||"Unknown",f));return ae({},a,d)}function yu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||mi,fs=Ft.current,Ke(Ft,r),Ke(en,en.current),!0}function Lm(r,s,a){var d=r.stateNode;if(!d)throw Error(t(169));a?(r=Vm(r,s,fs),d.__reactInternalMemoizedMergedChildContext=r,Ze(en),Ze(Ft),Ke(Ft,r)):Ze(en),Ke(en,a)}var Mr=null,vu=!1,Gd=!1;function Mm(r){Mr===null?Mr=[r]:Mr.push(r)}function oT(r){vu=!0,Mm(r)}function gi(){if(!Gd&&Mr!==null){Gd=!0;var r=0,s=Le;try{var a=Mr;for(Le=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}Mr=null,vu=!1}catch(f){throw Mr!==null&&(Mr=Mr.slice(r+1)),Zs(is,gi),f}finally{Le=s,Gd=!1}}return null}var To=[],Io=0,_u=null,wu=0,Cn=[],kn=0,ps=null,jr=1,Fr="";function ms(r,s){To[Io++]=wu,To[Io++]=_u,_u=r,wu=s}function jm(r,s,a){Cn[kn++]=jr,Cn[kn++]=Fr,Cn[kn++]=ps,ps=r;var d=jr;r=Fr;var f=32-Gt(d)-1;d&=~(1<<f),a+=1;var g=32-Gt(s)+f;if(30<g){var E=f-f%5;g=(d&(1<<E)-1).toString(32),d>>=E,f-=E,jr=1<<32-Gt(s)+f|a<<f|d,Fr=g+r}else jr=1<<g|a<<f|d,Fr=r}function Kd(r){r.return!==null&&(ms(r,1),jm(r,1,0))}function Qd(r){for(;r===_u;)_u=To[--Io],To[Io]=null,wu=To[--Io],To[Io]=null;for(;r===ps;)ps=Cn[--kn],Cn[kn]=null,Fr=Cn[--kn],Cn[kn]=null,jr=Cn[--kn],Cn[kn]=null}var yn=null,vn=null,tt=!1,Gn=null;function Fm(r,s){var a=Nn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Um(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,yn=r,vn=fi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,yn=r,vn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ps!==null?{id:jr,overflow:Fr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Nn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,yn=r,vn=null,!0):!1;default:return!1}}function Yd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Jd(r){if(tt){var s=vn;if(s){var a=s;if(!Um(r,s)){if(Yd(r))throw Error(t(418));s=fi(a.nextSibling);var d=yn;s&&Um(r,s)?Fm(d,a):(r.flags=r.flags&-4097|2,tt=!1,yn=r)}}else{if(Yd(r))throw Error(t(418));r.flags=r.flags&-4097|2,tt=!1,yn=r}}}function Bm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;yn=r}function Eu(r){if(r!==yn)return!1;if(!tt)return Bm(r),tt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!zd(r.type,r.memoizedProps)),s&&(s=vn)){if(Yd(r))throw zm(),Error(t(418));for(;s;)Fm(r,s),s=fi(s.nextSibling)}if(Bm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){vn=fi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}vn=null}}else vn=yn?fi(r.stateNode.nextSibling):null;return!0}function zm(){for(var r=vn;r;)r=fi(r.nextSibling)}function So(){vn=yn=null,tt=!1}function Xd(r){Gn===null?Gn=[r]:Gn.push(r)}var aT=le.ReactCurrentBatchConfig;function Ba(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,r));var f=d,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var C=f.refs;E===null?delete C[g]:C[g]=E},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Tu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function $m(r){var s=r._init;return s(r._payload)}function Wm(r){function s(F,D){if(r){var B=F.deletions;B===null?(F.deletions=[D],F.flags|=16):B.push(D)}}function a(F,D){if(!r)return null;for(;D!==null;)s(F,D),D=D.sibling;return null}function d(F,D){for(F=new Map;D!==null;)D.key!==null?F.set(D.key,D):F.set(D.index,D),D=D.sibling;return F}function f(F,D){return F=Si(F,D),F.index=0,F.sibling=null,F}function g(F,D,B){return F.index=B,r?(B=F.alternate,B!==null?(B=B.index,B<D?(F.flags|=2,D):B):(F.flags|=2,D)):(F.flags|=1048576,D)}function E(F){return r&&F.alternate===null&&(F.flags|=2),F}function C(F,D,B,te){return D===null||D.tag!==6?(D=$h(B,F.mode,te),D.return=F,D):(D=f(D,B),D.return=F,D)}function x(F,D,B,te){var ve=B.type;return ve===b?X(F,D,B.props.children,te,B.key):D!==null&&(D.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ht&&$m(ve)===D.type)?(te=f(D,B.props),te.ref=Ba(F,D,B),te.return=F,te):(te=Hu(B.type,B.key,B.props,null,F.mode,te),te.ref=Ba(F,D,B),te.return=F,te)}function z(F,D,B,te){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=Wh(B,F.mode,te),D.return=F,D):(D=f(D,B.children||[]),D.return=F,D)}function X(F,D,B,te,ve){return D===null||D.tag!==7?(D=Is(B,F.mode,te,ve),D.return=F,D):(D=f(D,B),D.return=F,D)}function ee(F,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return D=$h(""+D,F.mode,B),D.return=F,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ce:return B=Hu(D.type,D.key,D.props,null,F.mode,B),B.ref=Ba(F,null,D),B.return=F,B;case Re:return D=Wh(D,F.mode,B),D.return=F,D;case ht:var te=D._init;return ee(F,te(D._payload),B)}if(kr(D)||_e(D))return D=Is(D,F.mode,B,null),D.return=F,D;Tu(F,D)}return null}function J(F,D,B,te){var ve=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return ve!==null?null:C(F,D,""+B,te);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Ce:return B.key===ve?x(F,D,B,te):null;case Re:return B.key===ve?z(F,D,B,te):null;case ht:return ve=B._init,J(F,D,ve(B._payload),te)}if(kr(B)||_e(B))return ve!==null?null:X(F,D,B,te,null);Tu(F,B)}return null}function de(F,D,B,te,ve){if(typeof te=="string"&&te!==""||typeof te=="number")return F=F.get(B)||null,C(D,F,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Ce:return F=F.get(te.key===null?B:te.key)||null,x(D,F,te,ve);case Re:return F=F.get(te.key===null?B:te.key)||null,z(D,F,te,ve);case ht:var Ee=te._init;return de(F,D,B,Ee(te._payload),ve)}if(kr(te)||_e(te))return F=F.get(B)||null,X(D,F,te,ve,null);Tu(D,te)}return null}function me(F,D,B,te){for(var ve=null,Ee=null,Te=D,Ae=D=0,Rt=null;Te!==null&&Ae<B.length;Ae++){Te.index>Ae?(Rt=Te,Te=null):Rt=Te.sibling;var Be=J(F,Te,B[Ae],te);if(Be===null){Te===null&&(Te=Rt);break}r&&Te&&Be.alternate===null&&s(F,Te),D=g(Be,D,Ae),Ee===null?ve=Be:Ee.sibling=Be,Ee=Be,Te=Rt}if(Ae===B.length)return a(F,Te),tt&&ms(F,Ae),ve;if(Te===null){for(;Ae<B.length;Ae++)Te=ee(F,B[Ae],te),Te!==null&&(D=g(Te,D,Ae),Ee===null?ve=Te:Ee.sibling=Te,Ee=Te);return tt&&ms(F,Ae),ve}for(Te=d(F,Te);Ae<B.length;Ae++)Rt=de(Te,F,Ae,B[Ae],te),Rt!==null&&(r&&Rt.alternate!==null&&Te.delete(Rt.key===null?Ae:Rt.key),D=g(Rt,D,Ae),Ee===null?ve=Rt:Ee.sibling=Rt,Ee=Rt);return r&&Te.forEach(function(Ai){return s(F,Ai)}),tt&&ms(F,Ae),ve}function ye(F,D,B,te){var ve=_e(B);if(typeof ve!="function")throw Error(t(150));if(B=ve.call(B),B==null)throw Error(t(151));for(var Ee=ve=null,Te=D,Ae=D=0,Rt=null,Be=B.next();Te!==null&&!Be.done;Ae++,Be=B.next()){Te.index>Ae?(Rt=Te,Te=null):Rt=Te.sibling;var Ai=J(F,Te,Be.value,te);if(Ai===null){Te===null&&(Te=Rt);break}r&&Te&&Ai.alternate===null&&s(F,Te),D=g(Ai,D,Ae),Ee===null?ve=Ai:Ee.sibling=Ai,Ee=Ai,Te=Rt}if(Be.done)return a(F,Te),tt&&ms(F,Ae),ve;if(Te===null){for(;!Be.done;Ae++,Be=B.next())Be=ee(F,Be.value,te),Be!==null&&(D=g(Be,D,Ae),Ee===null?ve=Be:Ee.sibling=Be,Ee=Be);return tt&&ms(F,Ae),ve}for(Te=d(F,Te);!Be.done;Ae++,Be=B.next())Be=de(Te,F,Ae,Be.value,te),Be!==null&&(r&&Be.alternate!==null&&Te.delete(Be.key===null?Ae:Be.key),D=g(Be,D,Ae),Ee===null?ve=Be:Ee.sibling=Be,Ee=Be);return r&&Te.forEach(function(UT){return s(F,UT)}),tt&&ms(F,Ae),ve}function lt(F,D,B,te){if(typeof B=="object"&&B!==null&&B.type===b&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Ce:e:{for(var ve=B.key,Ee=D;Ee!==null;){if(Ee.key===ve){if(ve=B.type,ve===b){if(Ee.tag===7){a(F,Ee.sibling),D=f(Ee,B.props.children),D.return=F,F=D;break e}}else if(Ee.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ht&&$m(ve)===Ee.type){a(F,Ee.sibling),D=f(Ee,B.props),D.ref=Ba(F,Ee,B),D.return=F,F=D;break e}a(F,Ee);break}else s(F,Ee);Ee=Ee.sibling}B.type===b?(D=Is(B.props.children,F.mode,te,B.key),D.return=F,F=D):(te=Hu(B.type,B.key,B.props,null,F.mode,te),te.ref=Ba(F,D,B),te.return=F,F=te)}return E(F);case Re:e:{for(Ee=B.key;D!==null;){if(D.key===Ee)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){a(F,D.sibling),D=f(D,B.children||[]),D.return=F,F=D;break e}else{a(F,D);break}else s(F,D);D=D.sibling}D=Wh(B,F.mode,te),D.return=F,F=D}return E(F);case ht:return Ee=B._init,lt(F,D,Ee(B._payload),te)}if(kr(B))return me(F,D,B,te);if(_e(B))return ye(F,D,B,te);Tu(F,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,D!==null&&D.tag===6?(a(F,D.sibling),D=f(D,B),D.return=F,F=D):(a(F,D),D=$h(B,F.mode,te),D.return=F,F=D),E(F)):a(F,D)}return lt}var Ao=Wm(!0),qm=Wm(!1),Iu=pi(null),Su=null,Co=null,Zd=null;function eh(){Zd=Co=Su=null}function th(r){var s=Iu.current;Ze(Iu),r._currentValue=s}function nh(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function ko(r,s){Su=r,Zd=Co=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(nn=!0),r.firstContext=null)}function Rn(r){var s=r._currentValue;if(Zd!==r)if(r={context:r,memoizedValue:s,next:null},Co===null){if(Su===null)throw Error(t(308));Co=r,Su.dependencies={lanes:0,firstContext:r}}else Co=Co.next=r;return s}var gs=null;function rh(r){gs===null?gs=[r]:gs.push(r)}function Hm(r,s,a,d){var f=s.interleaved;return f===null?(a.next=a,rh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Ur(r,d)}function Ur(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var yi=!1;function ih(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Br(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function vi(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Fe&2)!==0){var f=d.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),d.pending=s,Ur(r,a)}return f=d.interleaved,f===null?(s.next=s,rh(d)):(s.next=f.next,f.next=s),d.interleaved=s,Ur(r,a)}function Au(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,ai(r,a)}}function Km(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Cu(r,s,a,d){var f=r.updateQueue;yi=!1;var g=f.firstBaseUpdate,E=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var x=C,z=x.next;x.next=null,E===null?g=z:E.next=z,E=x;var X=r.alternate;X!==null&&(X=X.updateQueue,C=X.lastBaseUpdate,C!==E&&(C===null?X.firstBaseUpdate=z:C.next=z,X.lastBaseUpdate=x))}if(g!==null){var ee=f.baseState;E=0,X=z=x=null,C=g;do{var J=C.lane,de=C.eventTime;if((d&J)===J){X!==null&&(X=X.next={eventTime:de,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var me=r,ye=C;switch(J=s,de=a,ye.tag){case 1:if(me=ye.payload,typeof me=="function"){ee=me.call(de,ee,J);break e}ee=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ye.payload,J=typeof me=="function"?me.call(de,ee,J):me,J==null)break e;ee=ae({},ee,J);break e;case 2:yi=!0}}C.callback!==null&&C.lane!==0&&(r.flags|=64,J=f.effects,J===null?f.effects=[C]:J.push(C))}else de={eventTime:de,lane:J,tag:C.tag,payload:C.payload,callback:C.callback,next:null},X===null?(z=X=de,x=ee):X=X.next=de,E|=J;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;J=C,C=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);if(X===null&&(x=ee),f.baseState=x,f.firstBaseUpdate=z,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do E|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);_s|=E,r.lanes=E,r.memoizedState=ee}}function Qm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],f=d.callback;if(f!==null){if(d.callback=null,d=a,typeof f!="function")throw Error(t(191,f));f.call(d)}}}var za={},fr=pi(za),$a=pi(za),Wa=pi(za);function ys(r){if(r===za)throw Error(t(174));return r}function sh(r,s){switch(Ke(Wa,s),Ke($a,r),Ke(fr,za),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:_t(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=_t(s,r)}Ze(fr),Ke(fr,s)}function Ro(){Ze(fr),Ze($a),Ze(Wa)}function Ym(r){ys(Wa.current);var s=ys(fr.current),a=_t(s,r.type);s!==a&&(Ke($a,r),Ke(fr,a))}function oh(r){$a.current===r&&(Ze(fr),Ze($a))}var nt=pi(0);function ku(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ah=[];function lh(){for(var r=0;r<ah.length;r++)ah[r]._workInProgressVersionPrimary=null;ah.length=0}var Ru=le.ReactCurrentDispatcher,uh=le.ReactCurrentBatchConfig,vs=0,rt=null,Et=null,Ct=null,Pu=!1,qa=!1,Ha=0,lT=0;function Ut(){throw Error(t(321))}function ch(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Hn(r[a],s[a]))return!1;return!0}function dh(r,s,a,d,f,g){if(vs=g,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ru.current=r===null||r.memoizedState===null?hT:fT,r=a(d,f),qa){g=0;do{if(qa=!1,Ha=0,25<=g)throw Error(t(301));g+=1,Ct=Et=null,s.updateQueue=null,Ru.current=pT,r=a(d,f)}while(qa)}if(Ru.current=bu,s=Et!==null&&Et.next!==null,vs=0,Ct=Et=rt=null,Pu=!1,s)throw Error(t(300));return r}function hh(){var r=Ha!==0;return Ha=0,r}function pr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?rt.memoizedState=Ct=r:Ct=Ct.next=r,Ct}function Pn(){if(Et===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=Et.next;var s=Ct===null?rt.memoizedState:Ct.next;if(s!==null)Ct=s,Et=r;else{if(r===null)throw Error(t(310));Et=r,r={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Ct===null?rt.memoizedState=Ct=r:Ct=Ct.next=r}return Ct}function Ga(r,s){return typeof s=="function"?s(r):s}function fh(r){var s=Pn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=Et,f=d.baseQueue,g=a.pending;if(g!==null){if(f!==null){var E=f.next;f.next=g.next,g.next=E}d.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,d=d.baseState;var C=E=null,x=null,z=g;do{var X=z.lane;if((vs&X)===X)x!==null&&(x=x.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),d=z.hasEagerState?z.eagerState:r(d,z.action);else{var ee={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};x===null?(C=x=ee,E=d):x=x.next=ee,rt.lanes|=X,_s|=X}z=z.next}while(z!==null&&z!==g);x===null?E=d:x.next=C,Hn(d,s.memoizedState)||(nn=!0),s.memoizedState=d,s.baseState=E,s.baseQueue=x,a.lastRenderedState=d}if(r=a.interleaved,r!==null){f=r;do g=f.lane,rt.lanes|=g,_s|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function ph(r){var s=Pn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do g=r(g,E.action),E=E.next;while(E!==f);Hn(g,s.memoizedState)||(nn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,d]}function Jm(){}function Xm(r,s){var a=rt,d=Pn(),f=s(),g=!Hn(d.memoizedState,f);if(g&&(d.memoizedState=f,nn=!0),d=d.queue,mh(tg.bind(null,a,d,r),[r]),d.getSnapshot!==s||g||Ct!==null&&Ct.memoizedState.tag&1){if(a.flags|=2048,Ka(9,eg.bind(null,a,d,f,s),void 0,null),kt===null)throw Error(t(349));(vs&30)!==0||Zm(a,s,f)}return f}function Zm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function eg(r,s,a,d){s.value=a,s.getSnapshot=d,ng(s)&&rg(r)}function tg(r,s,a){return a(function(){ng(s)&&rg(r)})}function ng(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Hn(r,a)}catch{return!0}}function rg(r){var s=Ur(r,1);s!==null&&Jn(s,r,1,-1)}function ig(r){var s=pr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:r},s.queue=r,r=r.dispatch=dT.bind(null,rt,r),[s.memoizedState,r]}function Ka(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function sg(){return Pn().memoizedState}function xu(r,s,a,d){var f=pr();rt.flags|=r,f.memoizedState=Ka(1|s,a,void 0,d===void 0?null:d)}function Nu(r,s,a,d){var f=Pn();d=d===void 0?null:d;var g=void 0;if(Et!==null){var E=Et.memoizedState;if(g=E.destroy,d!==null&&ch(d,E.deps)){f.memoizedState=Ka(s,a,g,d);return}}rt.flags|=r,f.memoizedState=Ka(1|s,a,g,d)}function og(r,s){return xu(8390656,8,r,s)}function mh(r,s){return Nu(2048,8,r,s)}function ag(r,s){return Nu(4,2,r,s)}function lg(r,s){return Nu(4,4,r,s)}function ug(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function cg(r,s,a){return a=a!=null?a.concat([r]):null,Nu(4,4,ug.bind(null,s,r),a)}function gh(){}function dg(r,s){var a=Pn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ch(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function hg(r,s){var a=Pn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ch(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function fg(r,s,a){return(vs&21)===0?(r.baseState&&(r.baseState=!1,nn=!0),r.memoizedState=a):(Hn(a,s)||(a=as(),rt.lanes|=a,_s|=a,r.baseState=!0),s)}function uT(r,s){var a=Le;Le=a!==0&&4>a?a:4,r(!0);var d=uh.transition;uh.transition={};try{r(!1),s()}finally{Le=a,uh.transition=d}}function pg(){return Pn().memoizedState}function cT(r,s,a){var d=Ti(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},mg(r))gg(s,a);else if(a=Hm(r,s,a,d),a!==null){var f=Yt();Jn(a,r,d,f),yg(a,s,d)}}function dT(r,s,a){var d=Ti(r),f={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(mg(r))gg(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,C=g(E,a);if(f.hasEagerState=!0,f.eagerState=C,Hn(C,E)){var x=s.interleaved;x===null?(f.next=f,rh(s)):(f.next=x.next,x.next=f),s.interleaved=f;return}}catch{}finally{}a=Hm(r,s,f,d),a!==null&&(f=Yt(),Jn(a,r,d,f),yg(a,s,d))}}function mg(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function gg(r,s){qa=Pu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function yg(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,ai(r,a)}}var bu={readContext:Rn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},hT={readContext:Rn,useCallback:function(r,s){return pr().memoizedState=[r,s===void 0?null:s],r},useContext:Rn,useEffect:og,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,xu(4194308,4,ug.bind(null,s,r),a)},useLayoutEffect:function(r,s){return xu(4194308,4,r,s)},useInsertionEffect:function(r,s){return xu(4,2,r,s)},useMemo:function(r,s){var a=pr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=pr();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=cT.bind(null,rt,r),[d.memoizedState,r]},useRef:function(r){var s=pr();return r={current:r},s.memoizedState=r},useState:ig,useDebugValue:gh,useDeferredValue:function(r){return pr().memoizedState=r},useTransition:function(){var r=ig(!1),s=r[0];return r=uT.bind(null,r[1]),pr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=rt,f=pr();if(tt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),kt===null)throw Error(t(349));(vs&30)!==0||Zm(d,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,og(tg.bind(null,d,g,r),[r]),d.flags|=2048,Ka(9,eg.bind(null,d,g,a,s),void 0,null),a},useId:function(){var r=pr(),s=kt.identifierPrefix;if(tt){var a=Fr,d=jr;a=(d&~(1<<32-Gt(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ha++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=lT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},fT={readContext:Rn,useCallback:dg,useContext:Rn,useEffect:mh,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:hg,useReducer:fh,useRef:sg,useState:function(){return fh(Ga)},useDebugValue:gh,useDeferredValue:function(r){var s=Pn();return fg(s,Et.memoizedState,r)},useTransition:function(){var r=fh(Ga)[0],s=Pn().memoizedState;return[r,s]},useMutableSource:Jm,useSyncExternalStore:Xm,useId:pg,unstable_isNewReconciler:!1},pT={readContext:Rn,useCallback:dg,useContext:Rn,useEffect:mh,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:hg,useReducer:ph,useRef:sg,useState:function(){return ph(Ga)},useDebugValue:gh,useDeferredValue:function(r){var s=Pn();return Et===null?s.memoizedState=r:fg(s,Et.memoizedState,r)},useTransition:function(){var r=ph(Ga)[0],s=Pn().memoizedState;return[r,s]},useMutableSource:Jm,useSyncExternalStore:Xm,useId:pg,unstable_isNewReconciler:!1};function Kn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function yh(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Du={isMounted:function(r){return(r=r._reactInternals)?Fn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=Yt(),f=Ti(r),g=Br(d,f);g.payload=s,a!=null&&(g.callback=a),s=vi(r,g,f),s!==null&&(Jn(s,r,f,d),Au(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=Yt(),f=Ti(r),g=Br(d,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=vi(r,g,f),s!==null&&(Jn(s,r,f,d),Au(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Yt(),d=Ti(r),f=Br(a,d);f.tag=2,s!=null&&(f.callback=s),s=vi(r,f,d),s!==null&&(Jn(s,r,d,a),Au(s,r,d))}};function vg(r,s,a,d,f,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,g,E):s.prototype&&s.prototype.isPureReactComponent?!Oa(a,d)||!Oa(f,g):!0}function _g(r,s,a){var d=!1,f=mi,g=s.contextType;return typeof g=="object"&&g!==null?g=Rn(g):(f=tn(s)?fs:Ft.current,d=s.contextTypes,g=(d=d!=null)?Eo(r,f):mi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Du,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function wg(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&Du.enqueueReplaceState(s,s.state,null)}function vh(r,s,a,d){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},ih(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Rn(g):(g=tn(s)?fs:Ft.current,f.context=Eo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(yh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Du.enqueueReplaceState(f,f.state,null),Cu(r,a,f,d),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Po(r,s){try{var a="",d=s;do a+=he(d),d=d.return;while(d);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function _h(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function wh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var mT=typeof WeakMap=="function"?WeakMap:Map;function Eg(r,s,a){a=Br(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){Uu||(Uu=!0,Vh=d),wh(r,s)},a}function Tg(r,s,a){a=Br(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var f=s.value;a.payload=function(){return d(f)},a.callback=function(){wh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){wh(r,s),typeof d!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function Ig(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new mT;var f=new Set;d.set(s,f)}else f=d.get(s),f===void 0&&(f=new Set,d.set(s,f));f.has(a)||(f.add(a),r=PT.bind(null,r,s,a),s.then(r,r))}function Sg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ag(r,s,a,d,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Br(-1,1),s.tag=2,vi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var gT=le.ReactCurrentOwner,nn=!1;function Qt(r,s,a,d){s.child=r===null?qm(s,null,a,d):Ao(s,r.child,a,d)}function Cg(r,s,a,d,f){a=a.render;var g=s.ref;return ko(s,f),d=dh(r,s,a,d,g,f),a=hh(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,zr(r,s,f)):(tt&&a&&Kd(s),s.flags|=1,Qt(r,s,d,f),s.child)}function kg(r,s,a,d,f){if(r===null){var g=a.type;return typeof g=="function"&&!zh(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Rg(r,s,g,d,f)):(r=Hu(a.type,null,d,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:Oa,a(E,d)&&r.ref===s.ref)return zr(r,s,f)}return s.flags|=1,r=Si(g,d),r.ref=s.ref,r.return=s,s.child=r}function Rg(r,s,a,d,f){if(r!==null){var g=r.memoizedProps;if(Oa(g,d)&&r.ref===s.ref)if(nn=!1,s.pendingProps=d=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(nn=!0);else return s.lanes=r.lanes,zr(r,s,f)}return Eh(r,s,a,d,f)}function Pg(r,s,a){var d=s.pendingProps,f=d.children,g=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(No,_n),_n|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(No,_n),_n|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=g!==null?g.baseLanes:a,Ke(No,_n),_n|=d}else g!==null?(d=g.baseLanes|a,s.memoizedState=null):d=a,Ke(No,_n),_n|=d;return Qt(r,s,f,a),s.child}function xg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Eh(r,s,a,d,f){var g=tn(a)?fs:Ft.current;return g=Eo(s,g),ko(s,f),a=dh(r,s,a,d,g,f),d=hh(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,zr(r,s,f)):(tt&&d&&Kd(s),s.flags|=1,Qt(r,s,a,f),s.child)}function Ng(r,s,a,d,f){if(tn(a)){var g=!0;yu(s)}else g=!1;if(ko(s,f),s.stateNode===null)Vu(r,s),_g(s,a,d),vh(s,a,d,f),d=!0;else if(r===null){var E=s.stateNode,C=s.memoizedProps;E.props=C;var x=E.context,z=a.contextType;typeof z=="object"&&z!==null?z=Rn(z):(z=tn(a)?fs:Ft.current,z=Eo(s,z));var X=a.getDerivedStateFromProps,ee=typeof X=="function"||typeof E.getSnapshotBeforeUpdate=="function";ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(C!==d||x!==z)&&wg(s,E,d,z),yi=!1;var J=s.memoizedState;E.state=J,Cu(s,d,E,f),x=s.memoizedState,C!==d||J!==x||en.current||yi?(typeof X=="function"&&(yh(s,a,X,d),x=s.memoizedState),(C=yi||vg(s,a,C,d,J,x,z))?(ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=x),E.props=d,E.state=x,E.context=z,d=C):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{E=s.stateNode,Gm(r,s),C=s.memoizedProps,z=s.type===s.elementType?C:Kn(s.type,C),E.props=z,ee=s.pendingProps,J=E.context,x=a.contextType,typeof x=="object"&&x!==null?x=Rn(x):(x=tn(a)?fs:Ft.current,x=Eo(s,x));var de=a.getDerivedStateFromProps;(X=typeof de=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(C!==ee||J!==x)&&wg(s,E,d,x),yi=!1,J=s.memoizedState,E.state=J,Cu(s,d,E,f);var me=s.memoizedState;C!==ee||J!==me||en.current||yi?(typeof de=="function"&&(yh(s,a,de,d),me=s.memoizedState),(z=yi||vg(s,a,z,d,J,me,x)||!1)?(X||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(d,me,x),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(d,me,x)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||C===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=me),E.props=d,E.state=me,E.context=x,d=z):(typeof E.componentDidUpdate!="function"||C===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),d=!1)}return Th(r,s,a,d,g,f)}function Th(r,s,a,d,f,g){xg(r,s);var E=(s.flags&128)!==0;if(!d&&!E)return f&&Lm(s,a,!1),zr(r,s,g);d=s.stateNode,gT.current=s;var C=E&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&E?(s.child=Ao(s,r.child,null,g),s.child=Ao(s,null,C,g)):Qt(r,s,C,g),s.memoizedState=d.state,f&&Lm(s,a,!0),s.child}function bg(r){var s=r.stateNode;s.pendingContext?Om(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Om(r,s.context,!1),sh(r,s.containerInfo)}function Dg(r,s,a,d,f){return So(),Xd(f),s.flags|=256,Qt(r,s,a,d),s.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Sh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Og(r,s,a){var d=s.pendingProps,f=nt.current,g=!1,E=(s.flags&128)!==0,C;if((C=E)||(C=r!==null&&r.memoizedState===null?!1:(f&2)!==0),C?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ke(nt,f&1),r===null)return Jd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=d.children,r=d.fallback,g?(d=s.mode,g=s.child,E={mode:"hidden",children:E},(d&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Gu(E,d,0,null),r=Is(r,d,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Sh(a),s.memoizedState=Ih,r):Ah(s,E));if(f=r.memoizedState,f!==null&&(C=f.dehydrated,C!==null))return yT(r,s,E,d,C,f,a);if(g){g=d.fallback,E=s.mode,f=r.child,C=f.sibling;var x={mode:"hidden",children:d.children};return(E&1)===0&&s.child!==f?(d=s.child,d.childLanes=0,d.pendingProps=x,s.deletions=null):(d=Si(f,x),d.subtreeFlags=f.subtreeFlags&14680064),C!==null?g=Si(C,g):(g=Is(g,E,a,null),g.flags|=2),g.return=s,d.return=s,d.sibling=g,s.child=d,d=g,g=s.child,E=r.child.memoizedState,E=E===null?Sh(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~a,s.memoizedState=Ih,d}return g=r.child,r=g.sibling,d=Si(g,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function Ah(r,s){return s=Gu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ou(r,s,a,d){return d!==null&&Xd(d),Ao(s,r.child,null,a),r=Ah(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function yT(r,s,a,d,f,g,E){if(a)return s.flags&256?(s.flags&=-257,d=_h(Error(t(422))),Ou(r,s,E,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=d.fallback,f=s.mode,d=Gu({mode:"visible",children:d.children},f,0,null),g=Is(g,f,E,null),g.flags|=2,d.return=s,g.return=s,d.sibling=g,s.child=d,(s.mode&1)!==0&&Ao(s,r.child,null,E),s.child.memoizedState=Sh(E),s.memoizedState=Ih,g);if((s.mode&1)===0)return Ou(r,s,E,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var C=d.dgst;return d=C,g=Error(t(419)),d=_h(g,d,void 0),Ou(r,s,E,d)}if(C=(E&r.childLanes)!==0,nn||C){if(d=kt,d!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|E))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ur(r,f),Jn(d,r,f,-1))}return Bh(),d=_h(Error(t(421))),Ou(r,s,E,d)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=xT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,vn=fi(f.nextSibling),yn=s,tt=!0,Gn=null,r!==null&&(Cn[kn++]=jr,Cn[kn++]=Fr,Cn[kn++]=ps,jr=r.id,Fr=r.overflow,ps=s),s=Ah(s,d.children),s.flags|=4096,s)}function Vg(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),nh(r.return,s,a)}function Ch(r,s,a,d,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=a,g.tailMode=f)}function Lg(r,s,a){var d=s.pendingProps,f=d.revealOrder,g=d.tail;if(Qt(r,s,d.children,a),d=nt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Vg(r,a,s);else if(r.tag===19)Vg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Ke(nt,d),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&ku(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Ch(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&ku(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Ch(s,!0,a,null,g);break;case"together":Ch(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Vu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function zr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),_s|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Si(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Si(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function vT(r,s,a){switch(s.tag){case 3:bg(s),So();break;case 5:Ym(s);break;case 1:tn(s.type)&&yu(s);break;case 4:sh(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,f=s.memoizedProps.value;Ke(Iu,d._currentValue),d._currentValue=f;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Ke(nt,nt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Og(r,s,a):(Ke(nt,nt.current&1),r=zr(r,s,a),r!==null?r.sibling:null);Ke(nt,nt.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return Lg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(nt,nt.current),d)break;return null;case 22:case 23:return s.lanes=0,Pg(r,s,a)}return zr(r,s,a)}var Mg,kh,jg,Fg;Mg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},kh=function(){},jg=function(r,s,a,d){var f=r.memoizedProps;if(f!==d){r=s.stateNode,ys(fr.current);var g=null;switch(a){case"input":f=xt(r,f),d=xt(r,d),g=[];break;case"select":f=ae({},f,{value:void 0}),d=ae({},d,{value:void 0}),g=[];break;case"textarea":f=ua(r,f),d=ua(r,d),g=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=pu)}ma(a,d);var E;a=null;for(z in f)if(!d.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var C=f[z];for(E in C)C.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in d){var x=d[z];if(C=f!=null?f[z]:void 0,d.hasOwnProperty(z)&&x!==C&&(x!=null||C!=null))if(z==="style")if(C){for(E in C)!C.hasOwnProperty(E)||x&&x.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in x)x.hasOwnProperty(E)&&C[E]!==x[E]&&(a||(a={}),a[E]=x[E])}else a||(g||(g=[]),g.push(z,a)),a=x;else z==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,C=C?C.__html:void 0,x!=null&&C!==x&&(g=g||[]).push(z,x)):z==="children"?typeof x!="string"&&typeof x!="number"||(g=g||[]).push(z,""+x):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(x!=null&&z==="onScroll"&&Xe("scroll",r),g||C===x||(g=[])):(g=g||[]).push(z,x))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Fg=function(r,s,a,d){a!==d&&(s.flags|=4)};function Qa(r,s){if(!tt)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Bt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function _T(r,s,a){var d=s.pendingProps;switch(Qd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(s),null;case 1:return tn(s.type)&&gu(),Bt(s),null;case 3:return d=s.stateNode,Ro(),Ze(en),Ze(Ft),lh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(Eu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Gn!==null&&(jh(Gn),Gn=null))),kh(r,s),Bt(s),null;case 5:oh(s);var f=ys(Wa.current);if(a=s.type,r!==null&&s.stateNode!=null)jg(r,s,a,d,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Bt(s),null}if(r=ys(fr.current),Eu(s)){d=s.stateNode,a=s.type;var g=s.memoizedProps;switch(d[hr]=s,d[Fa]=g,r=(s.mode&1)!==0,a){case"dialog":Xe("cancel",d),Xe("close",d);break;case"iframe":case"object":case"embed":Xe("load",d);break;case"video":case"audio":for(f=0;f<La.length;f++)Xe(La[f],d);break;case"source":Xe("error",d);break;case"img":case"image":case"link":Xe("error",d),Xe("load",d);break;case"details":Xe("toggle",d);break;case"input":zs(d,g),Xe("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!g.multiple},Xe("invalid",d);break;case"textarea":Ws(d,g),Xe("invalid",d)}ma(a,g),f=null;for(var E in g)if(g.hasOwnProperty(E)){var C=g[E];E==="children"?typeof C=="string"?d.textContent!==C&&(g.suppressHydrationWarning!==!0&&fu(d.textContent,C,r),f=["children",C]):typeof C=="number"&&d.textContent!==""+C&&(g.suppressHydrationWarning!==!0&&fu(d.textContent,C,r),f=["children",""+C]):o.hasOwnProperty(E)&&C!=null&&E==="onScroll"&&Xe("scroll",d)}switch(a){case"input":St(d),Fl(d,g,!0);break;case"textarea":St(d),ca(d);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(d.onclick=pu)}d=f,s.updateQueue=d,d!==null&&(s.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=vt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=E.createElement(a,{is:d.is}):(r=E.createElement(a),a==="select"&&(E=r,d.multiple?E.multiple=!0:d.size&&(E.size=d.size))):r=E.createElementNS(r,a),r[hr]=s,r[Fa]=d,Mg(r,s,!1,!1),s.stateNode=r;e:{switch(E=ga(a,d),a){case"dialog":Xe("cancel",r),Xe("close",r),f=d;break;case"iframe":case"object":case"embed":Xe("load",r),f=d;break;case"video":case"audio":for(f=0;f<La.length;f++)Xe(La[f],r);f=d;break;case"source":Xe("error",r),f=d;break;case"img":case"image":case"link":Xe("error",r),Xe("load",r),f=d;break;case"details":Xe("toggle",r),f=d;break;case"input":zs(r,d),f=xt(r,d),Xe("invalid",r);break;case"option":f=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},f=ae({},d,{value:void 0}),Xe("invalid",r);break;case"textarea":Ws(r,d),f=ua(r,d),Xe("invalid",r);break;default:f=d}ma(a,f),C=f;for(g in C)if(C.hasOwnProperty(g)){var x=C[g];g==="style"?fa(r,x):g==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&da(r,x)):g==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&ni(r,x):typeof x=="number"&&ni(r,""+x):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?x!=null&&g==="onScroll"&&Xe("scroll",r):x!=null&&Z(r,g,x,E))}switch(a){case"input":St(r),Fl(r,d,!1);break;case"textarea":St(r),ca(r);break;case"option":d.value!=null&&r.setAttribute("value",""+ge(d.value));break;case"select":r.multiple=!!d.multiple,g=d.value,g!=null?Rr(r,!!d.multiple,g,!1):d.defaultValue!=null&&Rr(r,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=pu)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Bt(s),null;case 6:if(r&&s.stateNode!=null)Fg(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=ys(Wa.current),ys(fr.current),Eu(s)){if(d=s.stateNode,a=s.memoizedProps,d[hr]=s,(g=d.nodeValue!==a)&&(r=yn,r!==null))switch(r.tag){case 3:fu(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&fu(d.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[hr]=s,s.stateNode=d}return Bt(s),null;case 13:if(Ze(nt),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(tt&&vn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)zm(),So(),s.flags|=98560,g=!1;else if(g=Eu(s),d!==null&&d.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[hr]=s}else So(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Bt(s),g=!1}else Gn!==null&&(jh(Gn),Gn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(nt.current&1)!==0?Tt===0&&(Tt=3):Bh())),s.updateQueue!==null&&(s.flags|=4),Bt(s),null);case 4:return Ro(),kh(r,s),r===null&&Ma(s.stateNode.containerInfo),Bt(s),null;case 10:return th(s.type._context),Bt(s),null;case 17:return tn(s.type)&&gu(),Bt(s),null;case 19:if(Ze(nt),g=s.memoizedState,g===null)return Bt(s),null;if(d=(s.flags&128)!==0,E=g.rendering,E===null)if(d)Qa(g,!1);else{if(Tt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=ku(r),E!==null){for(s.flags|=128,Qa(g,!1),d=E.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)g=a,r=d,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ke(nt,nt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ge()>bo&&(s.flags|=128,d=!0,Qa(g,!1),s.lanes=4194304)}else{if(!d)if(r=ku(E),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Qa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!tt)return Bt(s),null}else 2*Ge()-g.renderingStartTime>bo&&a!==1073741824&&(s.flags|=128,d=!0,Qa(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(a=g.last,a!==null?a.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ge(),s.sibling=null,a=nt.current,Ke(nt,d?a&1|2:a&1),s):(Bt(s),null);case 22:case 23:return Uh(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(_n&1073741824)!==0&&(Bt(s),s.subtreeFlags&6&&(s.flags|=8192)):Bt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function wT(r,s){switch(Qd(s),s.tag){case 1:return tn(s.type)&&gu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ro(),Ze(en),Ze(Ft),lh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return oh(s),null;case 13:if(Ze(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));So()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ze(nt),null;case 4:return Ro(),null;case 10:return th(s.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var Lu=!1,zt=!1,ET=typeof WeakSet=="function"?WeakSet:Set,pe=null;function xo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){st(r,s,d)}else a.current=null}function Rh(r,s,a){try{a()}catch(d){st(r,s,d)}}var Ug=!1;function TT(r,s){if(Ud=ci,r=vm(),bd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var f=d.anchorOffset,g=d.focusNode;d=d.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,C=-1,x=-1,z=0,X=0,ee=r,J=null;t:for(;;){for(var de;ee!==a||f!==0&&ee.nodeType!==3||(C=E+f),ee!==g||d!==0&&ee.nodeType!==3||(x=E+d),ee.nodeType===3&&(E+=ee.nodeValue.length),(de=ee.firstChild)!==null;)J=ee,ee=de;for(;;){if(ee===r)break t;if(J===a&&++z===f&&(C=E),J===g&&++X===d&&(x=E),(de=ee.nextSibling)!==null)break;ee=J,J=ee.parentNode}ee=de}a=C===-1||x===-1?null:{start:C,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bd={focusedElem:r,selectionRange:a},ci=!1,pe=s;pe!==null;)if(s=pe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,pe=r;else for(;pe!==null;){s=pe;try{var me=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ye=me.memoizedProps,lt=me.memoizedState,F=s.stateNode,D=F.getSnapshotBeforeUpdate(s.elementType===s.type?ye:Kn(s.type,ye),lt);F.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){st(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,pe=r;break}pe=s.return}return me=Ug,Ug=!1,me}function Ya(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Rh(s,a,g)}f=f.next}while(f!==d)}}function Mu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function Ph(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Bg(r){var s=r.alternate;s!==null&&(r.alternate=null,Bg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[hr],delete s[Fa],delete s[qd],delete s[iT],delete s[sT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function zg(r){return r.tag===5||r.tag===3||r.tag===4}function $g(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||zg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function xh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=pu));else if(d!==4&&(r=r.child,r!==null))for(xh(r,s,a),r=r.sibling;r!==null;)xh(r,s,a),r=r.sibling}function Nh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(Nh(r,s,a),r=r.sibling;r!==null;)Nh(r,s,a),r=r.sibling}var Dt=null,Qn=!1;function _i(r,s,a){for(a=a.child;a!==null;)Wg(r,s,a),a=a.sibling}function Wg(r,s,a){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(ss,a)}catch{}switch(a.tag){case 5:zt||xo(a,s);case 6:var d=Dt,f=Qn;Dt=null,_i(r,s,a),Dt=d,Qn=f,Dt!==null&&(Qn?(r=Dt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Dt.removeChild(a.stateNode));break;case 18:Dt!==null&&(Qn?(r=Dt,a=a.stateNode,r.nodeType===8?Wd(r.parentNode,a):r.nodeType===1&&Wd(r,a),Wn(r)):Wd(Dt,a.stateNode));break;case 4:d=Dt,f=Qn,Dt=a.stateNode.containerInfo,Qn=!0,_i(r,s,a),Dt=d,Qn=f;break;case 0:case 11:case 14:case 15:if(!zt&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var g=f,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Rh(a,s,E),f=f.next}while(f!==d)}_i(r,s,a);break;case 1:if(!zt&&(xo(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(C){st(a,s,C)}_i(r,s,a);break;case 21:_i(r,s,a);break;case 22:a.mode&1?(zt=(d=zt)||a.memoizedState!==null,_i(r,s,a),zt=d):_i(r,s,a);break;default:_i(r,s,a)}}function qg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new ET),s.forEach(function(d){var f=NT.bind(null,r,d);a.has(d)||(a.add(d),d.then(f,f))})}}function Yn(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var f=a[d];try{var g=r,E=s,C=E;e:for(;C!==null;){switch(C.tag){case 5:Dt=C.stateNode,Qn=!1;break e;case 3:Dt=C.stateNode.containerInfo,Qn=!0;break e;case 4:Dt=C.stateNode.containerInfo,Qn=!0;break e}C=C.return}if(Dt===null)throw Error(t(160));Wg(g,E,f),Dt=null,Qn=!1;var x=f.alternate;x!==null&&(x.return=null),f.return=null}catch(z){st(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Hg(s,r),s=s.sibling}function Hg(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Yn(s,r),mr(r),d&4){try{Ya(3,r,r.return),Mu(3,r)}catch(ye){st(r,r.return,ye)}try{Ya(5,r,r.return)}catch(ye){st(r,r.return,ye)}}break;case 1:Yn(s,r),mr(r),d&512&&a!==null&&xo(a,a.return);break;case 5:if(Yn(s,r),mr(r),d&512&&a!==null&&xo(a,a.return),r.flags&32){var f=r.stateNode;try{ni(f,"")}catch(ye){st(r,r.return,ye)}}if(d&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,E=a!==null?a.memoizedProps:g,C=r.type,x=r.updateQueue;if(r.updateQueue=null,x!==null)try{C==="input"&&g.type==="radio"&&g.name!=null&&aa(f,g),ga(C,E);var z=ga(C,g);for(E=0;E<x.length;E+=2){var X=x[E],ee=x[E+1];X==="style"?fa(f,ee):X==="dangerouslySetInnerHTML"?da(f,ee):X==="children"?ni(f,ee):Z(f,X,ee,z)}switch(C){case"input":la(f,g);break;case"textarea":qs(f,g);break;case"select":var J=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var de=g.value;de!=null?Rr(f,!!g.multiple,de,!1):J!==!!g.multiple&&(g.defaultValue!=null?Rr(f,!!g.multiple,g.defaultValue,!0):Rr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Fa]=g}catch(ye){st(r,r.return,ye)}}break;case 6:if(Yn(s,r),mr(r),d&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ye){st(r,r.return,ye)}}break;case 3:if(Yn(s,r),mr(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{Wn(s.containerInfo)}catch(ye){st(r,r.return,ye)}break;case 4:Yn(s,r),mr(r);break;case 13:Yn(s,r),mr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Oh=Ge())),d&4&&qg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(zt=(z=zt)||X,Yn(s,r),zt=z):Yn(s,r),mr(r),d&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&(r.mode&1)!==0)for(pe=r,X=r.child;X!==null;){for(ee=pe=X;pe!==null;){switch(J=pe,de=J.child,J.tag){case 0:case 11:case 14:case 15:Ya(4,J,J.return);break;case 1:xo(J,J.return);var me=J.stateNode;if(typeof me.componentWillUnmount=="function"){d=J,a=J.return;try{s=d,me.props=s.memoizedProps,me.state=s.memoizedState,me.componentWillUnmount()}catch(ye){st(d,a,ye)}}break;case 5:xo(J,J.return);break;case 22:if(J.memoizedState!==null){Qg(ee);continue}}de!==null?(de.return=J,pe=de):Qg(ee)}X=X.sibling}e:for(X=null,ee=r;;){if(ee.tag===5){if(X===null){X=ee;try{f=ee.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(C=ee.stateNode,x=ee.memoizedProps.style,E=x!=null&&x.hasOwnProperty("display")?x.display:null,C.style.display=ha("display",E))}catch(ye){st(r,r.return,ye)}}}else if(ee.tag===6){if(X===null)try{ee.stateNode.nodeValue=z?"":ee.memoizedProps}catch(ye){st(r,r.return,ye)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===r)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===r)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===r)break e;X===ee&&(X=null),ee=ee.return}X===ee&&(X=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:Yn(s,r),mr(r),d&4&&qg(r);break;case 21:break;default:Yn(s,r),mr(r)}}function mr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(zg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(ni(f,""),d.flags&=-33);var g=$g(r);Nh(r,g,f);break;case 3:case 4:var E=d.stateNode.containerInfo,C=$g(r);xh(r,C,E);break;default:throw Error(t(161))}}catch(x){st(r,r.return,x)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function IT(r,s,a){pe=r,Gg(r)}function Gg(r,s,a){for(var d=(r.mode&1)!==0;pe!==null;){var f=pe,g=f.child;if(f.tag===22&&d){var E=f.memoizedState!==null||Lu;if(!E){var C=f.alternate,x=C!==null&&C.memoizedState!==null||zt;C=Lu;var z=zt;if(Lu=E,(zt=x)&&!z)for(pe=f;pe!==null;)E=pe,x=E.child,E.tag===22&&E.memoizedState!==null?Yg(f):x!==null?(x.return=E,pe=x):Yg(f);for(;g!==null;)pe=g,Gg(g),g=g.sibling;pe=f,Lu=C,zt=z}Kg(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,pe=g):Kg(r)}}function Kg(r){for(;pe!==null;){var s=pe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:zt||Mu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!zt)if(a===null)d.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Kn(s.type,a.memoizedProps);d.componentDidUpdate(f,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Qm(s,g,d);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Qm(s,E,a)}break;case 5:var C=s.stateNode;if(a===null&&s.flags&4){a=C;var x=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var ee=X.dehydrated;ee!==null&&Wn(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||s.flags&512&&Ph(s)}catch(J){st(s,s.return,J)}}if(s===r){pe=null;break}if(a=s.sibling,a!==null){a.return=s.return,pe=a;break}pe=s.return}}function Qg(r){for(;pe!==null;){var s=pe;if(s===r){pe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,pe=a;break}pe=s.return}}function Yg(r){for(;pe!==null;){var s=pe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Mu(4,s)}catch(x){st(s,a,x)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var f=s.return;try{d.componentDidMount()}catch(x){st(s,f,x)}}var g=s.return;try{Ph(s)}catch(x){st(s,g,x)}break;case 5:var E=s.return;try{Ph(s)}catch(x){st(s,E,x)}}}catch(x){st(s,s.return,x)}if(s===r){pe=null;break}var C=s.sibling;if(C!==null){C.return=s.return,pe=C;break}pe=s.return}}var ST=Math.ceil,ju=le.ReactCurrentDispatcher,bh=le.ReactCurrentOwner,xn=le.ReactCurrentBatchConfig,Fe=0,kt=null,pt=null,Ot=0,_n=0,No=pi(0),Tt=0,Ja=null,_s=0,Fu=0,Dh=0,Xa=null,rn=null,Oh=0,bo=1/0,$r=null,Uu=!1,Vh=null,wi=null,Bu=!1,Ei=null,zu=0,Za=0,Lh=null,$u=-1,Wu=0;function Yt(){return(Fe&6)!==0?Ge():$u!==-1?$u:$u=Ge()}function Ti(r){return(r.mode&1)===0?1:(Fe&2)!==0&&Ot!==0?Ot&-Ot:aT.transition!==null?(Wu===0&&(Wu=as()),Wu):(r=Le,r!==0||(r=window.event,r=r===void 0?16:ka(r.type)),r)}function Jn(r,s,a,d){if(50<Za)throw Za=0,Lh=null,Error(t(185));oi(r,a,d),((Fe&2)===0||r!==kt)&&(r===kt&&((Fe&2)===0&&(Fu|=a),Tt===4&&Ii(r,Ot)),sn(r,d),a===1&&Fe===0&&(s.mode&1)===0&&(bo=Ge()+500,vu&&gi()))}function sn(r,s){var a=r.callbackNode;Nr(r,s);var d=os(r,r===kt?Ot:0);if(d===0)a!==null&&Ta(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&Ta(a),s===1)r.tag===0?oT(Xg.bind(null,r)):Mm(Xg.bind(null,r)),nT(function(){(Fe&6)===0&&gi()}),a=null;else{switch(li(d)){case 1:a=is;break;case 4:a=ri;break;case 16:a=In;break;case 536870912:a=Wl;break;default:a=In}a=oy(a,Jg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Jg(r,s){if($u=-1,Wu=0,(Fe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Do()&&r.callbackNode!==a)return null;var d=os(r,r===kt?Ot:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=qu(r,d);else{s=d;var f=Fe;Fe|=2;var g=ey();(kt!==r||Ot!==s)&&($r=null,bo=Ge()+500,Es(r,s));do try{kT();break}catch(C){Zg(r,C)}while(!0);eh(),ju.current=g,Fe=f,pt!==null?s=0:(kt=null,Ot=0,s=Tt)}if(s!==0){if(s===2&&(f=pn(r),f!==0&&(d=f,s=Mh(r,f))),s===1)throw a=Ja,Es(r,0),Ii(r,d),sn(r,Ge()),a;if(s===6)Ii(r,d);else{if(f=r.current.alternate,(d&30)===0&&!AT(f)&&(s=qu(r,d),s===2&&(g=pn(r),g!==0&&(d=g,s=Mh(r,g))),s===1))throw a=Ja,Es(r,0),Ii(r,d),sn(r,Ge()),a;switch(r.finishedWork=f,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Ts(r,rn,$r);break;case 3:if(Ii(r,d),(d&130023424)===d&&(s=Oh+500-Ge(),10<s)){if(os(r,0)!==0)break;if(f=r.suspendedLanes,(f&d)!==d){Yt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=$d(Ts.bind(null,r,rn,$r),s);break}Ts(r,rn,$r);break;case 4:if(Ii(r,d),(d&4194240)===d)break;for(s=r.eventTimes,f=-1;0<d;){var E=31-Gt(d);g=1<<E,E=s[E],E>f&&(f=E),d&=~g}if(d=f,d=Ge()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*ST(d/1960))-d,10<d){r.timeoutHandle=$d(Ts.bind(null,r,rn,$r),d);break}Ts(r,rn,$r);break;case 5:Ts(r,rn,$r);break;default:throw Error(t(329))}}}return sn(r,Ge()),r.callbackNode===a?Jg.bind(null,r):null}function Mh(r,s){var a=Xa;return r.current.memoizedState.isDehydrated&&(Es(r,s).flags|=256),r=qu(r,s),r!==2&&(s=rn,rn=a,s!==null&&jh(s)),r}function jh(r){rn===null?rn=r:rn.push.apply(rn,r)}function AT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var f=a[d],g=f.getSnapshot;f=f.value;try{if(!Hn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ii(r,s){for(s&=~Dh,s&=~Fu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Gt(s),d=1<<a;r[a]=-1,s&=~d}}function Xg(r){if((Fe&6)!==0)throw Error(t(327));Do();var s=os(r,0);if((s&1)===0)return sn(r,Ge()),null;var a=qu(r,s);if(r.tag!==0&&a===2){var d=pn(r);d!==0&&(s=d,a=Mh(r,d))}if(a===1)throw a=Ja,Es(r,0),Ii(r,s),sn(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ts(r,rn,$r),sn(r,Ge()),null}function Fh(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(bo=Ge()+500,vu&&gi())}}function ws(r){Ei!==null&&Ei.tag===0&&(Fe&6)===0&&Do();var s=Fe;Fe|=1;var a=xn.transition,d=Le;try{if(xn.transition=null,Le=1,r)return r()}finally{Le=d,xn.transition=a,Fe=s,(Fe&6)===0&&gi()}}function Uh(){_n=No.current,Ze(No)}function Es(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,tT(a)),pt!==null)for(a=pt.return;a!==null;){var d=a;switch(Qd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&gu();break;case 3:Ro(),Ze(en),Ze(Ft),lh();break;case 5:oh(d);break;case 4:Ro();break;case 13:Ze(nt);break;case 19:Ze(nt);break;case 10:th(d.type._context);break;case 22:case 23:Uh()}a=a.return}if(kt=r,pt=r=Si(r.current,null),Ot=_n=s,Tt=0,Ja=null,Dh=Fu=_s=0,rn=Xa=null,gs!==null){for(s=0;s<gs.length;s++)if(a=gs[s],d=a.interleaved,d!==null){a.interleaved=null;var f=d.next,g=a.pending;if(g!==null){var E=g.next;g.next=f,d.next=E}a.pending=d}gs=null}return r}function Zg(r,s){do{var a=pt;try{if(eh(),Ru.current=bu,Pu){for(var d=rt.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Pu=!1}if(vs=0,Ct=Et=rt=null,qa=!1,Ha=0,bh.current=null,a===null||a.return===null){Tt=1,Ja=s,pt=null;break}e:{var g=r,E=a.return,C=a,x=s;if(s=Ot,C.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var z=x,X=C,ee=X.tag;if((X.mode&1)===0&&(ee===0||ee===11||ee===15)){var J=X.alternate;J?(X.updateQueue=J.updateQueue,X.memoizedState=J.memoizedState,X.lanes=J.lanes):(X.updateQueue=null,X.memoizedState=null)}var de=Sg(E);if(de!==null){de.flags&=-257,Ag(de,E,C,g,s),de.mode&1&&Ig(g,z,s),s=de,x=z;var me=s.updateQueue;if(me===null){var ye=new Set;ye.add(x),s.updateQueue=ye}else me.add(x);break e}else{if((s&1)===0){Ig(g,z,s),Bh();break e}x=Error(t(426))}}else if(tt&&C.mode&1){var lt=Sg(E);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Ag(lt,E,C,g,s),Xd(Po(x,C));break e}}g=x=Po(x,C),Tt!==4&&(Tt=2),Xa===null?Xa=[g]:Xa.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=Eg(g,x,s);Km(g,F);break e;case 1:C=x;var D=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(wi===null||!wi.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=Tg(g,C,s);Km(g,te);break e}}g=g.return}while(g!==null)}ny(a)}catch(ve){s=ve,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function ey(){var r=ju.current;return ju.current=bu,r===null?bu:r}function Bh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),kt===null||(_s&268435455)===0&&(Fu&268435455)===0||Ii(kt,Ot)}function qu(r,s){var a=Fe;Fe|=2;var d=ey();(kt!==r||Ot!==s)&&($r=null,Es(r,s));do try{CT();break}catch(f){Zg(r,f)}while(!0);if(eh(),Fe=a,ju.current=d,pt!==null)throw Error(t(261));return kt=null,Ot=0,Tt}function CT(){for(;pt!==null;)ty(pt)}function kT(){for(;pt!==null&&!zl();)ty(pt)}function ty(r){var s=sy(r.alternate,r,_n);r.memoizedProps=r.pendingProps,s===null?ny(r):pt=s,bh.current=null}function ny(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=_T(a,s,_n),a!==null){pt=a;return}}else{if(a=wT(a,s),a!==null){a.flags&=32767,pt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Tt=6,pt=null;return}}if(s=s.sibling,s!==null){pt=s;return}pt=s=r}while(s!==null);Tt===0&&(Tt=5)}function Ts(r,s,a){var d=Le,f=xn.transition;try{xn.transition=null,Le=1,RT(r,s,a,d)}finally{xn.transition=f,Le=d}return null}function RT(r,s,a,d){do Do();while(Ei!==null);if((Fe&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(qe(r,g),r===kt&&(pt=kt=null,Ot=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Bu||(Bu=!0,oy(In,function(){return Do(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=xn.transition,xn.transition=null;var E=Le;Le=1;var C=Fe;Fe|=4,bh.current=null,TT(r,a),Hg(a,r),K0(Bd),ci=!!Ud,Bd=Ud=null,r.current=a,IT(a),Sd(),Fe=C,Le=E,xn.transition=g}else r.current=a;if(Bu&&(Bu=!1,Ei=r,zu=f),g=r.pendingLanes,g===0&&(wi=null),ql(a.stateNode),sn(r,Ge()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],d(f.value,{componentStack:f.stack,digest:f.digest});if(Uu)throw Uu=!1,r=Vh,Vh=null,r;return(zu&1)!==0&&r.tag!==0&&Do(),g=r.pendingLanes,(g&1)!==0?r===Lh?Za++:(Za=0,Lh=r):Za=0,gi(),null}function Do(){if(Ei!==null){var r=li(zu),s=xn.transition,a=Le;try{if(xn.transition=null,Le=16>r?16:r,Ei===null)var d=!1;else{if(r=Ei,Ei=null,zu=0,(Fe&6)!==0)throw Error(t(331));var f=Fe;for(Fe|=4,pe=r.current;pe!==null;){var g=pe,E=g.child;if((pe.flags&16)!==0){var C=g.deletions;if(C!==null){for(var x=0;x<C.length;x++){var z=C[x];for(pe=z;pe!==null;){var X=pe;switch(X.tag){case 0:case 11:case 15:Ya(8,X,g)}var ee=X.child;if(ee!==null)ee.return=X,pe=ee;else for(;pe!==null;){X=pe;var J=X.sibling,de=X.return;if(Bg(X),X===z){pe=null;break}if(J!==null){J.return=de,pe=J;break}pe=de}}}var me=g.alternate;if(me!==null){var ye=me.child;if(ye!==null){me.child=null;do{var lt=ye.sibling;ye.sibling=null,ye=lt}while(ye!==null)}}pe=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,pe=E;else e:for(;pe!==null;){if(g=pe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ya(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,pe=F;break e}pe=g.return}}var D=r.current;for(pe=D;pe!==null;){E=pe;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,pe=B;else e:for(E=D;pe!==null;){if(C=pe,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Mu(9,C)}}catch(ve){st(C,C.return,ve)}if(C===E){pe=null;break e}var te=C.sibling;if(te!==null){te.return=C.return,pe=te;break e}pe=C.return}}if(Fe=f,gi(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(ss,r)}catch{}d=!0}return d}finally{Le=a,xn.transition=s}}return!1}function ry(r,s,a){s=Po(a,s),s=Eg(r,s,1),r=vi(r,s,1),s=Yt(),r!==null&&(oi(r,1,s),sn(r,s))}function st(r,s,a){if(r.tag===3)ry(r,r,a);else for(;s!==null;){if(s.tag===3){ry(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(wi===null||!wi.has(d))){r=Po(a,r),r=Tg(s,r,1),s=vi(s,r,1),r=Yt(),s!==null&&(oi(s,1,r),sn(s,r));break}}s=s.return}}function PT(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=Yt(),r.pingedLanes|=r.suspendedLanes&a,kt===r&&(Ot&a)===a&&(Tt===4||Tt===3&&(Ot&130023424)===Ot&&500>Ge()-Oh?Es(r,0):Dh|=a),sn(r,s)}function iy(r,s){s===0&&((r.mode&1)===0?s=1:(s=to,to<<=1,(to&130023424)===0&&(to=4194304)));var a=Yt();r=Ur(r,s),r!==null&&(oi(r,s,a),sn(r,a))}function xT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),iy(r,a)}function NT(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),iy(r,a)}var sy;sy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||en.current)nn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return nn=!1,vT(r,s,a);nn=(r.flags&131072)!==0}else nn=!1,tt&&(s.flags&1048576)!==0&&jm(s,wu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Vu(r,s),r=s.pendingProps;var f=Eo(s,Ft.current);ko(s,a),f=dh(null,s,d,r,f,a);var g=hh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,tn(d)?(g=!0,yu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,ih(s),f.updater=Du,s.stateNode=f,f._reactInternals=s,vh(s,d,r,a),s=Th(null,s,d,!0,g,a)):(s.tag=0,tt&&g&&Kd(s),Qt(null,s,f,a),s=s.child),s;case 16:d=s.elementType;e:{switch(Vu(r,s),r=s.pendingProps,f=d._init,d=f(d._payload),s.type=d,f=s.tag=DT(d),r=Kn(d,r),f){case 0:s=Eh(null,s,d,r,a);break e;case 1:s=Ng(null,s,d,r,a);break e;case 11:s=Cg(null,s,d,r,a);break e;case 14:s=kg(null,s,d,Kn(d.type,r),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Kn(d,f),Eh(r,s,d,f,a);case 1:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Kn(d,f),Ng(r,s,d,f,a);case 3:e:{if(bg(s),r===null)throw Error(t(387));d=s.pendingProps,g=s.memoizedState,f=g.element,Gm(r,s),Cu(s,d,null,a);var E=s.memoizedState;if(d=E.element,g.isDehydrated)if(g={element:d,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=Po(Error(t(423)),s),s=Dg(r,s,d,a,f);break e}else if(d!==f){f=Po(Error(t(424)),s),s=Dg(r,s,d,a,f);break e}else for(vn=fi(s.stateNode.containerInfo.firstChild),yn=s,tt=!0,Gn=null,a=qm(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(So(),d===f){s=zr(r,s,a);break e}Qt(r,s,d,a)}s=s.child}return s;case 5:return Ym(s),r===null&&Jd(s),d=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,E=f.children,zd(d,f)?E=null:g!==null&&zd(d,g)&&(s.flags|=32),xg(r,s),Qt(r,s,E,a),s.child;case 6:return r===null&&Jd(s),null;case 13:return Og(r,s,a);case 4:return sh(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=Ao(s,null,d,a):Qt(r,s,d,a),s.child;case 11:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Kn(d,f),Cg(r,s,d,f,a);case 7:return Qt(r,s,s.pendingProps,a),s.child;case 8:return Qt(r,s,s.pendingProps.children,a),s.child;case 12:return Qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,f=s.pendingProps,g=s.memoizedProps,E=f.value,Ke(Iu,d._currentValue),d._currentValue=E,g!==null)if(Hn(g.value,E)){if(g.children===f.children&&!en.current){s=zr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var C=g.dependencies;if(C!==null){E=g.child;for(var x=C.firstContext;x!==null;){if(x.context===d){if(g.tag===1){x=Br(-1,a&-a),x.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?x.next=x:(x.next=X.next,X.next=x),z.pending=x}}g.lanes|=a,x=g.alternate,x!==null&&(x.lanes|=a),nh(g.return,a,s),C.lanes|=a;break}x=x.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,C=E.alternate,C!==null&&(C.lanes|=a),nh(E,a,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Qt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,d=s.pendingProps.children,ko(s,a),f=Rn(f),d=d(f),s.flags|=1,Qt(r,s,d,a),s.child;case 14:return d=s.type,f=Kn(d,s.pendingProps),f=Kn(d.type,f),kg(r,s,d,f,a);case 15:return Rg(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Kn(d,f),Vu(r,s),s.tag=1,tn(d)?(r=!0,yu(s)):r=!1,ko(s,a),_g(s,d,f),vh(s,d,f,a),Th(null,s,d,!0,r,a);case 19:return Lg(r,s,a);case 22:return Pg(r,s,a)}throw Error(t(156,s.tag))};function oy(r,s){return Zs(r,s)}function bT(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(r,s,a,d){return new bT(r,s,a,d)}function zh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function DT(r){if(typeof r=="function")return zh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===dt)return 14}return 2}function Si(r,s){var a=r.alternate;return a===null?(a=Nn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Hu(r,s,a,d,f,g){var E=2;if(d=r,typeof r=="function")zh(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case b:return Is(a.children,f,g,s);case A:E=8,f|=8;break;case R:return r=Nn(12,a,s,f|2),r.elementType=R,r.lanes=g,r;case k:return r=Nn(13,a,s,f),r.elementType=k,r.lanes=g,r;case Je:return r=Nn(19,a,s,f),r.elementType=Je,r.lanes=g,r;case Ue:return Gu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:E=10;break e;case O:E=9;break e;case L:E=11;break e;case dt:E=14;break e;case ht:E=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Nn(E,a,s,f),s.elementType=r,s.type=d,s.lanes=g,s}function Is(r,s,a,d){return r=Nn(7,r,d,s),r.lanes=a,r}function Gu(r,s,a,d){return r=Nn(22,r,d,s),r.elementType=Ue,r.lanes=a,r.stateNode={isHidden:!1},r}function $h(r,s,a){return r=Nn(6,r,null,s),r.lanes=a,r}function Wh(r,s,a){return s=Nn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function OT(r,s,a,d,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function qh(r,s,a,d,f,g,E,C,x){return r=new OT(r,s,a,C,x),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Nn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(g),r}function VT(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function ay(r){if(!r)return mi;r=r._reactInternals;e:{if(Fn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(tn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(tn(a))return Vm(r,a,s)}return s}function ly(r,s,a,d,f,g,E,C,x){return r=qh(a,d,!0,r,f,g,E,C,x),r.context=ay(null),a=r.current,d=Yt(),f=Ti(a),g=Br(d,f),g.callback=s??null,vi(a,g,f),r.current.lanes=f,oi(r,f,d),sn(r,d),r}function Ku(r,s,a,d){var f=s.current,g=Yt(),E=Ti(f);return a=ay(a),s.context===null?s.context=a:s.pendingContext=a,s=Br(g,E),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=vi(f,s,E),r!==null&&(Jn(r,f,E,g),Au(r,f,E)),E}function Qu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function uy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Hh(r,s){uy(r,s),(r=r.alternate)&&uy(r,s)}function LT(){return null}var cy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Gh(r){this._internalRoot=r}Yu.prototype.render=Gh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Ku(r,s,null,null)},Yu.prototype.unmount=Gh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ws(function(){Ku(null,r,null,null)}),s[Lr]=null}};function Yu(r){this._internalRoot=r}Yu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Yl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<lr.length&&s!==0&&s<lr[a].priority;a++);lr.splice(a,0,r),a===0&&Zl(r)}};function Kh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ju(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function dy(){}function MT(r,s,a,d,f){if(f){if(typeof d=="function"){var g=d;d=function(){var z=Qu(E);g.call(z)}}var E=ly(s,d,r,0,null,!1,!1,"",dy);return r._reactRootContainer=E,r[Lr]=E.current,Ma(r.nodeType===8?r.parentNode:r),ws(),E}for(;f=r.lastChild;)r.removeChild(f);if(typeof d=="function"){var C=d;d=function(){var z=Qu(x);C.call(z)}}var x=qh(r,0,!1,null,null,!1,!1,"",dy);return r._reactRootContainer=x,r[Lr]=x.current,Ma(r.nodeType===8?r.parentNode:r),ws(function(){Ku(s,x,a,d)}),x}function Xu(r,s,a,d,f){var g=a._reactRootContainer;if(g){var E=g;if(typeof f=="function"){var C=f;f=function(){var x=Qu(E);C.call(x)}}Ku(s,E,r,f)}else E=MT(a,s,r,f,d);return Qu(E)}Kl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ii(s.pendingLanes);a!==0&&(ai(s,a|1),sn(s,Ge()),(Fe&6)===0&&(bo=Ge()+500,gi()))}break;case 13:ws(function(){var d=Ur(r,1);if(d!==null){var f=Yt();Jn(d,r,1,f)}}),Hh(r,1)}},no=function(r){if(r.tag===13){var s=Ur(r,134217728);if(s!==null){var a=Yt();Jn(s,r,134217728,a)}Hh(r,134217728)}},Ql=function(r){if(r.tag===13){var s=Ti(r),a=Ur(r,s);if(a!==null){var d=Yt();Jn(a,r,s,d)}Hh(r,s)}},Yl=function(){return Le},Jl=function(r,s){var a=Le;try{return Le=r,s()}finally{Le=a}},Gs=function(r,s,a){switch(s){case"input":if(la(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var f=mu(d);if(!f)throw Error(t(90));ir(d),la(d,f)}}}break;case"textarea":qs(r,a);break;case"select":s=a.value,s!=null&&Rr(r,!!a.multiple,s,!1)}},es=Fh,va=ws;var jT={usingClientEntryPoint:!1,Events:[Ua,_o,mu,or,ya,Fh]},el={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FT={bundleType:el.bundleType,version:el.version,rendererPackageName:el.rendererPackageName,rendererConfig:el.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ea(r),r===null?null:r.stateNode},findFiberByHostInstance:el.findFiberByHostInstance||LT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{ss=Zu.inject(FT),fn=Zu}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jT,on.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kh(s))throw Error(t(200));return VT(r,s,null,a)},on.createRoot=function(r,s){if(!Kh(r))throw Error(t(299));var a=!1,d="",f=cy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=qh(r,1,!1,null,null,a,!1,d,f),r[Lr]=s.current,Ma(r.nodeType===8?r.parentNode:r),new Gh(s)},on.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ea(s),r=r===null?null:r.stateNode,r},on.flushSync=function(r){return ws(r)},on.hydrate=function(r,s,a){if(!Ju(s))throw Error(t(200));return Xu(null,r,s,!0,a)},on.hydrateRoot=function(r,s,a){if(!Kh(r))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,f=!1,g="",E=cy;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=ly(s,null,r,1,a??null,f,!1,g,E),r[Lr]=s.current,Ma(r),d)for(r=0;r<d.length;r++)a=d[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Yu(s)},on.render=function(r,s,a){if(!Ju(s))throw Error(t(200));return Xu(null,r,s,!1,a)},on.unmountComponentAtNode=function(r){if(!Ju(r))throw Error(t(40));return r._reactRootContainer?(ws(function(){Xu(null,null,r,!1,function(){r._reactRootContainer=null,r[Lr]=null})}),!0):!1},on.unstable_batchedUpdates=Fh,on.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!Ju(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Xu(r,s,a,!1,d)},on.version="18.3.1-next-f1338f8080-20240426",on}var _y;function C_(){if(_y)return Jh.exports;_y=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Jh.exports=KT(),Jh.exports}var wy;function QT(){if(wy)return ec;wy=1;var n=C_();return ec.createRoot=n.createRoot,ec.hydrateRoot=n.hydrateRoot,ec}var YT=QT();const JT=S_(YT);C_();/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},pl.apply(this,arguments)}var Ni;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ni||(Ni={}));const Ey="popstate";function XT(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:c,hash:h}=i.location;return _f("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:vc(o)}return eI(e,t,null,n)}function ct(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Jf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZT(){return Math.random().toString(36).substr(2,8)}function Ty(n,e){return{usr:n.state,key:n.key,idx:e}}function _f(n,e,t,i){return t===void 0&&(t=null),pl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Jo(e):e,{state:t,key:e&&e.key||i||ZT()})}function vc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Jo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function eI(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,h=Ni.Pop,p=null,y=w();y==null&&(y=0,c.replaceState(pl({},c.state,{idx:y}),""));function w(){return(c.state||{idx:null}).idx}function T(){h=Ni.Pop;let M=w(),ne=M==null?null:M-y;y=M,p&&p({action:h,location:$.location,delta:ne})}function S(M,ne){h=Ni.Push;let se=_f($.location,M,ne);y=w()+1;let Z=Ty(se,y),le=$.createHref(se);try{c.pushState(Z,"",le)}catch(Ce){if(Ce instanceof DOMException&&Ce.name==="DataCloneError")throw Ce;o.location.assign(le)}l&&p&&p({action:h,location:$.location,delta:1})}function N(M,ne){h=Ni.Replace;let se=_f($.location,M,ne);y=w();let Z=Ty(se,y),le=$.createHref(se);c.replaceState(Z,"",le),l&&p&&p({action:h,location:$.location,delta:0})}function U(M){let ne=o.location.origin!=="null"?o.location.origin:o.location.href,se=typeof M=="string"?M:vc(M);return se=se.replace(/ $/,"%20"),ct(ne,"No window.location.(origin|href) available to create URL for href: "+se),new URL(se,ne)}let $={get action(){return h},get location(){return n(o,c)},listen(M){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Ey,T),p=M,()=>{o.removeEventListener(Ey,T),p=null}},createHref(M){return e(o,M)},createURL:U,encodeLocation(M){let ne=U(M);return{pathname:ne.pathname,search:ne.search,hash:ne.hash}},push:S,replace:N,go(M){return c.go(M)}};return $}var Iy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Iy||(Iy={}));function tI(n,e,t){return t===void 0&&(t="/"),nI(n,e,t)}function nI(n,e,t,i){let o=typeof e=="string"?Jo(e):e,l=Xf(o.pathname||"/",t);if(l==null)return null;let c=k_(n);rI(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let y=mI(l);h=hI(c[p],y)}return h}function k_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(ct(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=Di([i,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(ct(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),k_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:cI(y,l.index),routesMeta:w})};return n.forEach((l,c)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,c);else for(let p of R_(l.path))o(l,c,p)}),e}function R_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=R_(i.join("/")),h=[];return h.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...c),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function rI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:dI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const iI=/^:[\w-]+$/,sI=3,oI=2,aI=1,lI=10,uI=-2,Sy=n=>n==="*";function cI(n,e){let t=n.split("/"),i=t.length;return t.some(Sy)&&(i+=uI),e&&(i+=oI),t.filter(o=>!Sy(o)).reduce((o,l)=>o+(iI.test(l)?sI:l===""?aI:lI),i)}function dI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function hI(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let h=0;h<i.length;++h){let p=i[h],y=h===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=fI({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),S=p.route;if(!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Di([l,T.pathname]),pathnameBase:wI(Di([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=Di([l,T.pathnameBase]))}return c}function fI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=pI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((y,w,T)=>{let{paramName:S,isOptional:N}=w;if(S==="*"){let $=h[T]||"";c=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const U=h[T];return N&&!U?y[S]=void 0:y[S]=(U||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function pI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Jf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function mI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Xf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const gI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yI=n=>gI.test(n);function vI(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Jo(n):n,l;if(t)if(yI(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),Jf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=Ay(t.substring(1),"/"):l=Ay(t,e)}else l=e;return{pathname:l,search:EI(i),hash:TI(o)}}function Ay(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ef(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _I(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Zf(n,e){let t=_I(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function ep(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Jo(n):(o=pl({},n),ct(!o.pathname||!o.pathname.includes("?"),ef("?","pathname","search",o)),ct(!o.pathname||!o.pathname.includes("#"),ef("#","pathname","hash",o)),ct(!o.search||!o.search.includes("#"),ef("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;o.pathname=S.join("/")}h=T>=0?e[T]:"/"}let p=vI(o,h),y=c&&c!=="/"&&c.endsWith("/"),w=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}const Di=n=>n.join("/").replace(/\/\/+/g,"/"),wI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),EI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,TI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function II(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const P_=["post","put","patch","delete"];new Set(P_);const SI=["get",...P_];new Set(SI);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ml.apply(this,arguments)}const tp=W.createContext(null),AI=W.createContext(null),Hi=W.createContext(null),qc=W.createContext(null),ei=W.createContext({outlet:null,matches:[],isDataRoute:!1}),x_=W.createContext(null);function CI(n,e){let{relative:t}=e===void 0?{}:e;Xo()||ct(!1);let{basename:i,navigator:o}=W.useContext(Hi),{hash:l,pathname:c,search:h}=b_(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Di([i,c])),o.createHref({pathname:p,search:h,hash:l})}function Xo(){return W.useContext(qc)!=null}function Zo(){return Xo()||ct(!1),W.useContext(qc).location}function N_(n){W.useContext(Hi).static||W.useLayoutEffect(n)}function ea(){let{isDataRoute:n}=W.useContext(ei);return n?UI():kI()}function kI(){Xo()||ct(!1);let n=W.useContext(tp),{basename:e,future:t,navigator:i}=W.useContext(Hi),{matches:o}=W.useContext(ei),{pathname:l}=Zo(),c=JSON.stringify(Zf(o,t.v7_relativeSplatPath)),h=W.useRef(!1);return N_(()=>{h.current=!0}),W.useCallback(function(y,w){if(w===void 0&&(w={}),!h.current)return;if(typeof y=="number"){i.go(y);return}let T=ep(y,JSON.parse(c),l,w.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Di([e,T.pathname])),(w.replace?i.replace:i.push)(T,w.state,w)},[e,i,c,l,n])}function RI(){let{matches:n}=W.useContext(ei),e=n[n.length-1];return e?e.params:{}}function b_(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=W.useContext(Hi),{matches:o}=W.useContext(ei),{pathname:l}=Zo(),c=JSON.stringify(Zf(o,i.v7_relativeSplatPath));return W.useMemo(()=>ep(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function PI(n,e){return xI(n,e)}function xI(n,e,t,i){Xo()||ct(!1);let{navigator:o}=W.useContext(Hi),{matches:l}=W.useContext(ei),c=l[l.length-1],h=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let y=Zo(),w;if(e){var T;let M=typeof e=="string"?Jo(e):e;p==="/"||(T=M.pathname)!=null&&T.startsWith(p)||ct(!1),w=M}else w=y;let S=w.pathname||"/",N=S;if(p!=="/"){let M=p.replace(/^\//,"").split("/");N="/"+S.replace(/^\//,"").split("/").slice(M.length).join("/")}let U=tI(n,{pathname:N}),$=VI(U&&U.map(M=>Object.assign({},M,{params:Object.assign({},h,M.params),pathname:Di([p,o.encodeLocation?o.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?p:Di([p,o.encodeLocation?o.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),l,t,i);return e&&$?W.createElement(qc.Provider,{value:{location:ml({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:Ni.Pop}},$):$}function NI(){let n=FI(),e=II(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,null)}const bI=W.createElement(NI,null);class DI extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?W.createElement(ei.Provider,{value:this.props.routeContext},W.createElement(x_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function OI(n){let{routeContext:e,match:t,children:i}=n,o=W.useContext(tp);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),W.createElement(ei.Provider,{value:e},i)}function VI(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,h=(o=t)==null?void 0:o.errors;if(h!=null){let w=c.findIndex(T=>T.route.id&&(h==null?void 0:h[T.route.id])!==void 0);w>=0||ct(!1),c=c.slice(0,Math.min(c.length,w+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let w=0;w<c.length;w++){let T=c[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=w),T.route.id){let{loaderData:S,errors:N}=t,U=T.route.loader&&S[T.route.id]===void 0&&(!N||N[T.route.id]===void 0);if(T.route.lazy||U){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((w,T,S)=>{let N,U=!1,$=null,M=null;t&&(N=h&&T.route.id?h[T.route.id]:void 0,$=T.route.errorElement||bI,p&&(y<0&&S===0?(BI("route-fallback"),U=!0,M=null):y===S&&(U=!0,M=T.route.hydrateFallbackElement||null)));let ne=e.concat(c.slice(0,S+1)),se=()=>{let Z;return N?Z=$:U?Z=M:T.route.Component?Z=W.createElement(T.route.Component,null):T.route.element?Z=T.route.element:Z=w,W.createElement(OI,{match:T,routeContext:{outlet:w,matches:ne,isDataRoute:t!=null},children:Z})};return t&&(T.route.ErrorBoundary||T.route.errorElement||S===0)?W.createElement(DI,{location:t.location,revalidation:t.revalidation,component:$,error:N,children:se(),routeContext:{outlet:null,matches:ne,isDataRoute:!0}}):se()},null)}var D_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(D_||{}),O_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(O_||{});function LI(n){let e=W.useContext(tp);return e||ct(!1),e}function MI(n){let e=W.useContext(AI);return e||ct(!1),e}function jI(n){let e=W.useContext(ei);return e||ct(!1),e}function V_(n){let e=jI(),t=e.matches[e.matches.length-1];return t.route.id||ct(!1),t.route.id}function FI(){var n;let e=W.useContext(x_),t=MI(),i=V_();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function UI(){let{router:n}=LI(D_.UseNavigateStable),e=V_(O_.UseNavigateStable),t=W.useRef(!1);return N_(()=>{t.current=!0}),W.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,ml({fromRouteId:e},l)))},[n,e])}const Cy={};function BI(n,e,t){Cy[n]||(Cy[n]=!0)}function zI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function _c(n){let{to:e,replace:t,state:i,relative:o}=n;Xo()||ct(!1);let{future:l,static:c}=W.useContext(Hi),{matches:h}=W.useContext(ei),{pathname:p}=Zo(),y=ea(),w=ep(e,Zf(h,l.v7_relativeSplatPath),p,o==="path"),T=JSON.stringify(w);return W.useEffect(()=>y(JSON.parse(T),{replace:t,state:i,relative:o}),[y,T,o,t,i]),null}function bn(n){ct(!1)}function $I(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Ni.Pop,navigator:l,static:c=!1,future:h}=n;Xo()&&ct(!1);let p=e.replace(/^\/*/,"/"),y=W.useMemo(()=>({basename:p,navigator:l,static:c,future:ml({v7_relativeSplatPath:!1},h)}),[p,h,l,c]);typeof i=="string"&&(i=Jo(i));let{pathname:w="/",search:T="",hash:S="",state:N=null,key:U="default"}=i,$=W.useMemo(()=>{let M=Xf(w,p);return M==null?null:{location:{pathname:M,search:T,hash:S,state:N,key:U},navigationType:o}},[p,w,T,S,N,U,o]);return $==null?null:W.createElement(Hi.Provider,{value:y},W.createElement(qc.Provider,{children:t,value:$}))}function WI(n){let{children:e,location:t}=n;return PI(wf(e),t)}new Promise(()=>{});function wf(n,e){e===void 0&&(e=[]);let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,wf(i.props.children,l));return}i.type!==bn&&ct(!1),!i.props.index||!i.props.children||ct(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=wf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ef(){return Ef=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ef.apply(this,arguments)}function qI(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function HI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function GI(n,e){return n.button===0&&(!e||e==="_self")&&!HI(n)}const KI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],QI="6";try{window.__reactRouterVersion=QI}catch{}const YI="startTransition",ky=qT[YI];function JI(n){let{basename:e,children:t,future:i,window:o}=n,l=W.useRef();l.current==null&&(l.current=XT({window:o,v5Compat:!0}));let c=l.current,[h,p]=W.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},w=W.useCallback(T=>{y&&ky?ky(()=>p(T)):p(T)},[p,y]);return W.useLayoutEffect(()=>c.listen(w),[c,w]),W.useEffect(()=>zI(i),[i]),W.createElement($I,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:c,future:i})}const XI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dn=W.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:h,target:p,to:y,preventScrollReset:w,viewTransition:T}=e,S=qI(e,KI),{basename:N}=W.useContext(Hi),U,$=!1;if(typeof y=="string"&&ZI.test(y)&&(U=y,XI))try{let Z=new URL(window.location.href),le=y.startsWith("//")?new URL(Z.protocol+y):new URL(y),Ce=Xf(le.pathname,N);le.origin===Z.origin&&Ce!=null?y=Ce+le.search+le.hash:$=!0}catch{}let M=CI(y,{relative:o}),ne=eS(y,{replace:c,state:h,target:p,preventScrollReset:w,relative:o,viewTransition:T});function se(Z){i&&i(Z),Z.defaultPrevented||ne(Z)}return W.createElement("a",Ef({},S,{href:U||M,onClick:$||l?i:se,ref:t,target:p}))});var Ry;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ry||(Ry={}));var Py;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Py||(Py={}));function eS(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:h}=e===void 0?{}:e,p=ea(),y=Zo(),w=b_(n,{relative:c});return W.useCallback(T=>{if(GI(T,t)){T.preventDefault();let S=i!==void 0?i:vc(y)===vc(w);p(n,{replace:S,state:o,preventScrollReset:l,relative:c,viewTransition:h})}},[y,p,w,i,o,t,n,l,c,h])}const tS=()=>{};var xy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},nS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],h=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},M_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,h=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,T=(l&3)<<4|h>>4;let S=(h&15)<<2|y>>6,N=y&63;p||(N=64,c||(S=64)),i.push(t[w],t[T],t[S],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(L_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||y==null||T==null)throw new rS;const S=l<<2|h>>4;if(i.push(S),y!==64){const N=h<<4&240|y>>2;if(i.push(N),T!==64){const U=y<<6&192|T;i.push(U)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iS=function(n){const e=L_(n);return M_.encodeByteArray(e,!0)},wc=function(n){return iS(n).replace(/\./g,"")},j_=function(n){try{return M_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oS=()=>sS().__FIREBASE_DEFAULTS__,aS=()=>{if(typeof process>"u"||typeof xy>"u")return;const n=xy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&j_(n[1]);return e&&JSON.parse(e)},Hc=()=>{try{return tS()||oS()||aS()||lS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},F_=n=>{var e,t;return(t=(e=Hc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},U_=n=>{const e=F_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},B_=()=>{var n;return(n=Hc())===null||n===void 0?void 0:n.config},z_=n=>{var e;return(e=Hc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Vs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function np(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function cS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wc(JSON.stringify(t)),wc(JSON.stringify(c)),""].join(".")}const ll={};function dS(){const n={prod:[],emulator:[]};for(const e of Object.keys(ll))ll[e]?n.emulator.push(e):n.prod.push(e);return n}function hS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ny=!1;function rp(n,e){if(typeof window>"u"||typeof document>"u"||!Vs(window.location.host)||ll[n]===e||ll[n]||Ny)return;ll[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=dS().prod.length>0;function c(){const S=document.getElementById(i);S&&S.remove()}function h(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,N){S.setAttribute("width","24"),S.setAttribute("id",N),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ny=!0,c()},S}function w(S,N){S.setAttribute("id",N),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=hS(i),N=t("text"),U=document.getElementById(N)||document.createElement("span"),$=t("learnmore"),M=document.getElementById($)||document.createElement("a"),ne=t("preprendIcon"),se=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Z=S.element;h(Z),w(M,$);const le=y();p(se,ne),Z.append(se,U,M,le),document.body.appendChild(Z)}l?(U.innerText="Preview backend disconnected.",se.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(se.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function pS(){var n;const e=(n=Hc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vS(){const n=Ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _S(){return!pS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $_(){try{return typeof indexedDB=="object"}catch{return!1}}function W_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function wS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="FirebaseError";class rr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ES,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?TS(l,i):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new rr(o,h,i)}}function TS(n,e){return n.replace(IS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const IS=/\{\$([^}]+)}/g;function SS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(by(l)&&by(c)){if(!Mi(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function by(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function nl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function rl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function AS(n,e){const t=new CS(n,e);return t.subscribe.bind(t)}class CS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");kS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=tf),o.error===void 0&&(o.error=tf),o.complete===void 0&&(o.complete=tf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function tf(){}/**
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
 */function He(n){return n&&n._delegate?n._delegate:n}class Ln{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class RS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new uS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xS(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:PS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PS(n){return n===Ss?void 0:n}function xS(n){return n.instantiationMode==="EAGER"}/**
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
 */class NS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new RS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const bS={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},DS=Oe.INFO,OS={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},VS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=OS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ip{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=VS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const LS=(n,e)=>e.some(t=>n instanceof t);let Dy,Oy;function MS(){return Dy||(Dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jS(){return Oy||(Oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,Tf=new WeakMap,H_=new WeakMap,nf=new WeakMap,sp=new WeakMap;function FS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Gr(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&q_.set(t,n)}).catch(()=>{}),sp.set(e,n),e}function US(n){if(Tf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Tf.set(n,e)}let If={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||H_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Gr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function BS(n){If=n(If)}function zS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(rf(this),e,...t);return H_.set(i,e.sort?e.sort():[e]),Gr(i)}:jS().includes(n)?function(...e){return n.apply(rf(this),e),Gr(q_.get(this))}:function(...e){return Gr(n.apply(rf(this),e))}}function $S(n){return typeof n=="function"?zS(n):(n instanceof IDBTransaction&&US(n),LS(n,MS())?new Proxy(n,If):n)}function Gr(n){if(n instanceof IDBRequest)return FS(n);if(nf.has(n))return nf.get(n);const e=$S(n);return e!==n&&(nf.set(n,e),sp.set(e,n)),e}const rf=n=>sp.get(n);function Gc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),h=Gr(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Gr(c.result),p.oldVersion,p.newVersion,Gr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),h}function sf(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Gr(t).then(()=>{})}const WS=["get","getKey","getAll","getAllKeys","count"],qS=["put","add","delete","clear"],of=new Map;function Vy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(of.get(e))return of.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=qS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||WS.includes(t)))return;const l=async function(c,...h){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(h.shift())),(await Promise.all([y[t](...h),o&&p.done]))[0]};return of.set(e,l),l}BS(n=>({...n,get:(e,t,i)=>Vy(e,t)||n.get(e,t,i),has:(e,t)=>!!Vy(e,t)||n.has(e,t)}));/**
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
 */class HS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function GS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sf="@firebase/app",Ly="0.13.2";/**
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
 */const Qr=new ip("@firebase/app"),KS="@firebase/app-compat",QS="@firebase/analytics-compat",YS="@firebase/analytics",JS="@firebase/app-check-compat",XS="@firebase/app-check",ZS="@firebase/auth",e1="@firebase/auth-compat",t1="@firebase/database",n1="@firebase/data-connect",r1="@firebase/database-compat",i1="@firebase/functions",s1="@firebase/functions-compat",o1="@firebase/installations",a1="@firebase/installations-compat",l1="@firebase/messaging",u1="@firebase/messaging-compat",c1="@firebase/performance",d1="@firebase/performance-compat",h1="@firebase/remote-config",f1="@firebase/remote-config-compat",p1="@firebase/storage",m1="@firebase/storage-compat",g1="@firebase/firestore",y1="@firebase/ai",v1="@firebase/firestore-compat",_1="firebase",w1="11.10.0";/**
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
 */const Af="[DEFAULT]",E1={[Sf]:"fire-core",[KS]:"fire-core-compat",[YS]:"fire-analytics",[QS]:"fire-analytics-compat",[XS]:"fire-app-check",[JS]:"fire-app-check-compat",[ZS]:"fire-auth",[e1]:"fire-auth-compat",[t1]:"fire-rtdb",[n1]:"fire-data-connect",[r1]:"fire-rtdb-compat",[i1]:"fire-fn",[s1]:"fire-fn-compat",[o1]:"fire-iid",[a1]:"fire-iid-compat",[l1]:"fire-fcm",[u1]:"fire-fcm-compat",[c1]:"fire-perf",[d1]:"fire-perf-compat",[h1]:"fire-rc",[f1]:"fire-rc-compat",[p1]:"fire-gcs",[m1]:"fire-gcs-compat",[g1]:"fire-fst",[v1]:"fire-fst-compat",[y1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
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
 */const Ec=new Map,T1=new Map,Cf=new Map;function My(n,e){try{n.container.addComponent(e)}catch(t){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function er(n){const e=n.name;if(Cf.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,n);for(const t of Ec.values())My(t,n);for(const t of T1.values())My(t,n);return!0}function Ms(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ln(n){return n==null?!1:n.settings!==void 0}/**
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
 */const I1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oi=new Ls("app","Firebase",I1);/**
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
 */class S1{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oi.create("app-deleted",{appName:this._name})}}/**
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
 */const ta=w1;function G_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Af,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Oi.create("bad-app-name",{appName:String(o)});if(t||(t=B_()),!t)throw Oi.create("no-options");const l=Ec.get(o);if(l){if(Mi(t,l.options)&&Mi(i,l.config))return l;throw Oi.create("duplicate-app",{appName:o})}const c=new NS(o);for(const p of Cf.values())c.addComponent(p);const h=new S1(t,i,c);return Ec.set(o,h),h}function Kc(n=Af){const e=Ec.get(n);if(!e&&n===Af&&B_())return G_();if(!e)throw Oi.create("no-app",{appName:n});return e}function dn(n,e,t){var i;let o=(i=E1[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(h.join(" "));return}er(new Ln(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const A1="firebase-heartbeat-database",C1=1,gl="firebase-heartbeat-store";let af=null;function K_(){return af||(af=Gc(A1,C1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(gl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Oi.create("idb-open",{originalErrorMessage:n.message})})),af}async function k1(n){try{const t=(await K_()).transaction(gl),i=await t.objectStore(gl).get(Q_(n));return await t.done,i}catch(e){if(e instanceof rr)Qr.warn(e.message);else{const t=Oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qr.warn(t.message)}}}async function jy(n,e){try{const i=(await K_()).transaction(gl,"readwrite");await i.objectStore(gl).put(e,Q_(n)),await i.done}catch(t){if(t instanceof rr)Qr.warn(t.message);else{const i=Oi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qr.warn(i.message)}}}function Q_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const R1=1024,P1=30;class x1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new b1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Fy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>P1){const c=D1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Qr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fy(),{heartbeatsToSend:i,unsentEntries:o}=N1(this._heartbeatsCache.heartbeats),l=wc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Qr.warn(t),""}}}function Fy(){return new Date().toISOString().substring(0,10)}function N1(n,e=R1){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Uy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Uy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class b1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $_()?W_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await k1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Uy(n){return wc(JSON.stringify({version:2,heartbeats:n})).length}function D1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function O1(n){er(new Ln("platform-logger",e=>new HS(e),"PRIVATE")),er(new Ln("heartbeat",e=>new x1(e),"PRIVATE")),dn(Sf,Ly,n),dn(Sf,Ly,"esm2017"),dn("fire-js","")}O1("");function op(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function Y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const V1=Y_,J_=new Ls("auth","Firebase",Y_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new ip("@firebase/auth");function L1(n,...e){Tc.logLevel<=Oe.WARN&&Tc.warn(`Auth (${ta}): ${n}`,...e)}function lc(n,...e){Tc.logLevel<=Oe.ERROR&&Tc.error(`Auth (${ta}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n,...e){throw ap(n,...e)}function yr(n,...e){return ap(n,...e)}function X_(n,e,t){const i=Object.assign(Object.assign({},V1()),{[e]:t});return new Ls("auth","Firebase",i).create(e,{appName:n.name})}function vr(n){return X_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ap(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return J_.create(n,...e)}function Ie(n,e,...t){if(!n)throw ap(e,...t)}function qr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lc(e),new Error(e)}function Yr(n,e){n||qr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function M1(){return By()==="http:"||By()==="https:"}function By(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M1()||gS()||"connection"in navigator)?navigator.onLine:!0}function F1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yr(t>e,"Short delay should be less than long delay!"),this.isMobile=fS()||yS()}get(){return j1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n,e){Yr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],z1=new Cl(3e4,6e4);function ti(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Cr(n,e,t,i,o={}){return ew(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const h=Al(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return mS()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Vs(n.emulatorConfig.host)&&(y.credentials="include"),Z_.fetch()(await tw(n,n.config.apiHost,t,h),y)})}async function ew(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},U1),e);try{const o=new W1(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw tc(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[p,y]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw tc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw tc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw tc(n,"user-disabled",c);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw X_(n,w,y);tr(n,w)}}catch(o){if(o instanceof rr)throw o;tr(n,"network-request-failed",{message:String(o)})}}async function kl(n,e,t,i,o={}){const l=await Cr(n,e,t,i,o);return"mfaPendingCredential"in l&&tr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function tw(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?lp(n.config,o):`${n.config.apiScheme}://${o}`;return B1.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function $1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class W1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(yr(this.auth,"network-request-failed")),z1.get())})}}function tc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=yr(n,e,i);return o.customData._tokenResponse=t,o}function zy(n){return n!==void 0&&n.enterprise!==void 0}class q1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function H1(n,e){return Cr(n,"GET","/v2/recaptchaConfig",ti(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(n,e){return Cr(n,"POST","/v1/accounts:delete",e)}async function Ic(n,e){return Cr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K1(n,e=!1){const t=He(n),i=await t.getIdToken(e),o=up(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:ul(lf(o.auth_time)),issuedAtTime:ul(lf(o.iat)),expirationTime:ul(lf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function lf(n){return Number(n)*1e3}function up(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const o=j_(t);return o?JSON.parse(o):(lc("Failed to decode base64 JWT payload"),null)}catch(o){return lc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function $y(n){const e=up(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof rr&&Q1(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Q1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ul(this.lastLoginAt),this.creationTime=ul(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await $o(n,Ic(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?nw(l.providerUserInfo):[],h=X1(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(h!=null&&h.length),w=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Rf(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function J1(n){const e=He(n);await Sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X1(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function nw(n){return n.map(e=>{var{providerId:t}=e,i=op(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(n,e){const t=await ew(n,{},async()=>{const i=Al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await tw(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:h,body:i};return n.emulatorConfig&&Vs(n.emulatorConfig.host)&&(p.credentials="include"),Z_.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function eA(n,e){return Cr(n,"POST","/v2/accounts:revokeToken",ti(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=$y(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await Z1(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Fo;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fo,this.toJSON())}_performRefresh(){return qr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Rf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await $o(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K1(this,e)}reload(){return J1(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Sc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await $o(this,G1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,h,p,y,w;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,U=(c=t.photoURL)!==null&&c!==void 0?c:void 0,$=(h=t.tenantId)!==null&&h!==void 0?h:void 0,M=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ne=(y=t.createdAt)!==null&&y!==void 0?y:void 0,se=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Z,emailVerified:le,isAnonymous:Ce,providerData:Re,stsTokenManager:b}=t;Ie(Z&&b,e,"internal-error");const A=Fo.fromJSON(this.name,b);Ie(typeof Z=="string",e,"internal-error"),Ci(T,e.name),Ci(S,e.name),Ie(typeof le=="boolean",e,"internal-error"),Ie(typeof Ce=="boolean",e,"internal-error"),Ci(N,e.name),Ci(U,e.name),Ci($,e.name),Ci(M,e.name),Ci(ne,e.name),Ci(se,e.name);const R=new Zn({uid:Z,auth:e,email:S,emailVerified:le,displayName:T,isAnonymous:Ce,photoURL:U,phoneNumber:N,tenantId:$,stsTokenManager:A,createdAt:ne,lastLoginAt:se});return Re&&Array.isArray(Re)&&(R.providerData=Re.map(P=>Object.assign({},P))),M&&(R._redirectEventId=M),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new Fo;o.updateFromServerResponse(t);const l=new Zn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Sc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?nw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new Fo;h.updateFromIdToken(i);const p=new Zn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Rf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=new Map;function Hr(n){Yr(n instanceof Function,"Expected a class definition");let e=Wy.get(n);return e?(Yr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wy.set(n,e),e)}/**
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
 */class rw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rw.type="NONE";const qy=rw;/**
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
 */function uc(n,e,t){return`firebase:${n}:${e}:${t}`}class Uo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=uc(this.userKey,o.apiKey,l),this.fullPersistenceKey=uc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ic(this.auth,{idToken:e}).catch(()=>{});return t?Zn._fromGetAccountInfoResponse(this.auth,t,e):null}return Zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Uo(Hr(qy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Hr(qy);const c=uc(i,e.config.apiKey,e.name);let h=null;for(const y of t)try{const w=await y._get(c);if(w){let T;if(typeof w=="string"){const S=await Ic(e,{idToken:w}).catch(()=>{});if(!S)break;T=await Zn._fromGetAccountInfoResponse(e,S,w)}else T=Zn._fromJSON(e,w);y!==l&&(h=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Uo(l,e,i):(l=p[0],h&&await l._set(c,h.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Uo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uw(e))return"Blackberry";if(cw(e))return"Webos";if(sw(e))return"Safari";if((e.includes("chrome/")||ow(e))&&!e.includes("edge/"))return"Chrome";if(lw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function iw(n=Ht()){return/firefox\//i.test(n)}function sw(n=Ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ow(n=Ht()){return/crios\//i.test(n)}function aw(n=Ht()){return/iemobile/i.test(n)}function lw(n=Ht()){return/android/i.test(n)}function uw(n=Ht()){return/blackberry/i.test(n)}function cw(n=Ht()){return/webos/i.test(n)}function cp(n=Ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tA(n=Ht()){var e;return cp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nA(){return vS()&&document.documentMode===10}function dw(n=Ht()){return cp(n)||lw(n)||cw(n)||uw(n)||/windows phone/i.test(n)||aw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n,e=[]){let t;switch(n){case"Browser":t=Hy(Ht());break;case"Worker":t=`${Hy(Ht())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ta}/${i}`}/**
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
 */class rA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,h)=>{try{const p=e(l);c(p)}catch(p){h(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function iA(n,e={}){return Cr(n,"GET","/v2/passwordPolicy",ti(n,e))}/**
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
 */const sA=6;class oA{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:sA,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gy(this),this.idTokenSubscription=new Gy(this),this.beforeStateQueue=new rA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Hr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Uo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ic(this,{idToken:e}),i=await Zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ln(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=F1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(vr(this));const t=e?He(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iA(this),t=new oA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await eA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Hr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Uo.create(this,[Hr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&L1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Gi(n){return He(n)}class Gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=AS(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lA(n){Qc=n}function fw(n){return Qc.loadJS(n)}function uA(){return Qc.recaptchaEnterpriseScript}function cA(){return Qc.gapiScript}function dA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class hA{constructor(){this.enterprise=new fA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const pA="recaptcha-enterprise",pw="NO_RECAPTCHA";class mA{constructor(e){this.type=pA,this.auth=Gi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{H1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const y=new q1(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{h(p)})})}function o(l,c,h){const p=window.grecaptcha;zy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(pw)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hA().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(h=>{if(!t&&zy(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=uA();p.length!==0&&(p+=h),fw(p).then(()=>{o(h,l,c)}).catch(y=>{c(y)})}}).catch(h=>{c(h)})})}}async function Ky(n,e,t,i=!1,o=!1){const l=new mA(n);let c;if(o)c=pw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,y=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Ac(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ky(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Ky(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(n,e){const t=Ms(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Mi(l,e??{}))return o;tr(o,"already-initialized")}return t.initialize({options:e})}function yA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Hr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function vA(n,e,t){const i=Gi(n);Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=mw(e),{host:c,port:h}=_A(e),p=h===null?"":`:${h}`,y={url:`${l}//${c}${p}/`},w=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ie(Mi(y,i.config.emulator)&&Mi(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Vs(c)?(np(`${l}//${c}${p}`),rp("Auth",!0)):wA()}function mw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _A(n){const e=mw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Qy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Qy(c)}}}function Qy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qr("not implemented")}_getIdTokenResponse(e){return qr("not implemented")}_linkToIdToken(e,t){return qr("not implemented")}_getReauthenticationResolver(e){return qr("not implemented")}}async function EA(n,e){return Cr(n,"POST","/v1/accounts:update",e)}async function TA(n,e){return Cr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(n,e){return kl(n,"POST","/v1/accounts:signInWithPassword",ti(n,e))}async function SA(n,e){return Cr(n,"POST","/v1/accounts:sendOobCode",ti(n,e))}async function AA(n,e){return SA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(n,e){return kl(n,"POST","/v1/accounts:signInWithEmailLink",ti(n,e))}async function kA(n,e){return kl(n,"POST","/v1/accounts:signInWithEmailLink",ti(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends dp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new yl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new yl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ac(e,t,"signInWithPassword",IA);case"emailLink":return CA(e,{email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ac(e,i,"signUpPassword",TA);case"emailLink":return kA(e,{idToken:t,email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(n,e){return kl(n,"POST","/v1/accounts:signInWithIdp",ti(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="http://localhost";class Ps extends dp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=op(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Ps(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Bo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Bo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bo(e,t)}buildRequest(){const e={requestUri:RA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Al(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xA(n){const e=nl(rl(n)).link,t=e?nl(rl(e)).deep_link_id:null,i=nl(rl(n)).deep_link_id;return(i?nl(rl(i)).link:null)||i||t||e||n}class hp{constructor(e){var t,i,o,l,c,h;const p=nl(rl(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(i=p.oobCode)!==null&&i!==void 0?i:null,T=PA((o=p.mode)!==null&&o!==void 0?o:null);Ie(y&&w&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=xA(e);try{return new hp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,t){return yl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=hp.parseLink(t);return Ie(i,"argument-error"),yl._fromEmailAndCode(e,i.code,i.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rl extends gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Rl{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ki.credential(e.oauthAccessToken)}catch{return null}}}ki.FACEBOOK_SIGN_IN_METHOD="facebook.com";ki.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ps._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ri.credential(t,i)}catch{return null}}}Ri.GOOGLE_SIGN_IN_METHOD="google.com";Ri.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Rl{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pi.credential(e.oauthAccessToken)}catch{return null}}}Pi.GITHUB_SIGN_IN_METHOD="github.com";Pi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Rl{constructor(){super("twitter.com")}static credential(e,t){return Ps._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return xi.credential(t,i)}catch{return null}}}xi.TWITTER_SIGN_IN_METHOD="twitter.com";xi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(n,e){return kl(n,"POST","/v1/accounts:signUp",ti(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Zn._fromIdTokenResponse(e,i,o),c=Yy(i);return new xs({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Yy(i);return new xs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Yy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends rr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Cc(e,t,i,o)}}function yw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(n,l,e,i):l})}async function bA(n,e,t=!1){const i=await $o(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xs._forOperation(n,"link",i)}/**
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
 */async function vw(n,e,t=!1){const{auth:i}=n;if(ln(i.app))return Promise.reject(vr(i));const o="reauthenticate";try{const l=await $o(n,yw(i,o,e,n),t);Ie(l.idToken,i,"internal-error");const c=up(l.idToken);Ie(c,i,"internal-error");const{sub:h}=c;return Ie(n.uid===h,i,"user-mismatch"),xs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&tr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(n,e,t=!1){if(ln(n.app))return Promise.reject(vr(n));const i="signIn",o=await yw(n,i,e),l=await xs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function DA(n,e){return _w(Gi(n),e)}async function OA(n,e){return vw(He(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(n){const e=Gi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function VA(n,e,t){const i=Gi(n);await Ac(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",AA)}async function LA(n,e,t){if(ln(n.app))return Promise.reject(vr(n));const i=Gi(n),c=await Ac(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&ww(n),p}),h=await xs._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(h.user),h}function MA(n,e,t){return ln(n.app)?Promise.reject(vr(n)):DA(He(n),js.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ww(n),i})}function jA(n,e){const t=He(n);return ln(t.auth.app)?Promise.reject(vr(t.auth)):Ew(t,e,null)}function FA(n,e){return Ew(He(n),null,e)}async function Ew(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await $o(n,EA(i,l));await n._updateTokensIfNecessary(c,!0)}function UA(n,e,t,i){return He(n).onIdTokenChanged(e,t,i)}function BA(n,e,t){return He(n).beforeAuthStateChanged(e,t)}function zA(n,e,t,i){return He(n).onAuthStateChanged(e,t,i)}function $A(n){return He(n).signOut()}const kc="__sak";/**
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
 */class Tw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kc,"1"),this.storage.removeItem(kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=1e3,qA=10;class Iw extends Tw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);nA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,qA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iw.type="LOCAL";const HA=Iw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw extends Tw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sw.type="SESSION";const Aw=Sw;/**
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
 */function GA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Yc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(c).map(async y=>y(t.origin,l)),p=await GA(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class KA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,p)=>{const y=fp("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(S.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){return window}function QA(n){_r().location.href=n}/**
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
 */function Cw(){return typeof _r().WorkerGlobalScope<"u"&&typeof _r().importScripts=="function"}async function YA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function XA(){return Cw()?self:null}/**
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
 */const kw="firebaseLocalStorageDb",ZA=1,Rc="firebaseLocalStorage",Rw="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jc(n,e){return n.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function eC(){const n=indexedDB.deleteDatabase(kw);return new Pl(n).toPromise()}function Pf(){const n=indexedDB.open(kw,ZA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Rc,{keyPath:Rw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Rc)?e(i):(i.close(),await eC(),e(await Pf()))})})}async function Jy(n,e,t){const i=Jc(n,!0).put({[Rw]:e,value:t});return new Pl(i).toPromise()}async function tC(n,e){const t=Jc(n,!1).get(e),i=await new Pl(t).toPromise();return i===void 0?null:i.value}function Xy(n,e){const t=Jc(n,!0).delete(e);return new Pl(t).toPromise()}const nC=800,rC=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>rC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(XA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await YA(),!this.activeServiceWorker)return;this.sender=new KA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pf();return await Jy(e,kc,"1"),await Xy(e,kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Jy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>tC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Jc(o,!1).getAll();return new Pl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const iC=Pw;new Cl(3e4,6e4);/**
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
 */function sC(n,e){return e?Hr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class pp extends dp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oC(n){return _w(n.auth,new pp(n),n.bypassAuthState)}function aC(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),vw(t,new pp(n),n.bypassAuthState)}async function lC(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),bA(t,new pp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oC;case"linkViaPopup":case"linkViaRedirect":return lC;case"reauthViaPopup":case"reauthViaRedirect":return aC;default:tr(this.auth,"internal-error")}}resolve(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=new Cl(2e3,1e4);class jo extends xw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Yr(this.filter.length===1,"Popup operations only handle one event");const e=fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uC.get())};e()}}jo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="pendingRedirect",cc=new Map;class dC extends xw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=cc.get(this.auth._key());if(!e){try{const i=await hC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}cc.set(this.auth._key(),e)}return this.bypassAuthState||cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hC(n,e){const t=mC(e),i=pC(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function fC(n,e){cc.set(n._key(),e)}function pC(n){return Hr(n._redirectPersistence)}function mC(n){return uc(cC,n.config.apiKey,n.name)}async function gC(n,e,t=!1){if(ln(n.app))return Promise.reject(vr(n));const i=Gi(n),o=sC(i,e),c=await new dC(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=600*1e3;class vC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_C(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Nw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(yr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _C(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(n,e={}){return Cr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TC=/^https?/;async function IC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wC(n);for(const t of e)try{if(SC(t))return}catch{}tr(n,"unauthorized-domain")}function SC(n){const e=kf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!TC.test(t))return!1;if(EC.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const AC=new Cl(3e4,6e4);function ev(){const n=_r().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CC(n){return new Promise((e,t)=>{var i,o,l;function c(){ev(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ev(),t(yr(n,"network-request-failed"))},timeout:AC.get()})}if(!((o=(i=_r().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=_r().gapi)===null||l===void 0)&&l.load)c();else{const h=dA("iframefcb");return _r()[h]=()=>{gapi.load?c():t(yr(n,"network-request-failed"))},fw(`${cA()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw dc=null,e})}let dc=null;function kC(n){return dc=dc||CC(n),dc}/**
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
 */const RC=new Cl(5e3,15e3),PC="__/auth/iframe",xC="emulator/auth/iframe",NC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DC(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?lp(e,xC):`https://${n.config.authDomain}/${PC}`,i={apiKey:e.apiKey,appName:n.name,v:ta},o=bC.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Al(i).slice(1)}`}async function OC(n){const e=await kC(n),t=_r().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:DC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NC,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=yr(n,"network-request-failed"),h=_r().setTimeout(()=>{l(c)},RC.get());function p(){_r().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const VC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LC=500,MC=600,jC="_blank",FC="http://localhost";class tv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UC(n,e,t,i=LC,o=MC){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},VC),{width:i.toString(),height:o.toString(),top:l,left:c}),y=Ht().toLowerCase();t&&(h=ow(y)?jC:t),iw(y)&&(e=e||FC,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[N,U])=>`${S}${N}=${U},`,"");if(tA(y)&&h!=="_self")return BC(e||"",h),new tv(null);const T=window.open(e||"",h,w);Ie(T,n,"popup-blocked");try{T.focus()}catch{}return new tv(T)}function BC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const zC="__/auth/handler",$C="emulator/auth/handler",WC=encodeURIComponent("fac");async function nv(n,e,t,i,o,l){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ta,eventId:o};if(e instanceof gw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",SS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))c[w]=T}if(e instanceof Rl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(c.scopes=w.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const w of Object.keys(h))h[w]===void 0&&delete h[w];const p=await n._getAppCheckToken(),y=p?`#${WC}=${encodeURIComponent(p)}`:"";return`${qC(n)}?${Al(h).slice(1)}${y}`}function qC({config:n}){return n.emulator?lp(n,$C):`https://${n.authDomain}/${zC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="webStorageSupport";class HC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aw,this._completeRedirectFn=gC,this._overrideRedirectResult=fC}async _openPopup(e,t,i,o){var l;Yr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await nv(e,t,i,kf(),o);return UC(e,c,fp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await nv(e,t,i,kf(),o);return QA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Yr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await OC(e),i=new vC(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(uf,{type:uf},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[uf];c!==void 0&&t(!!c),tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=IC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dw()||sw()||cp()}}const GC=HC;var rv="@firebase/auth",iv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YC(n){er(new Ln("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=i.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hw(n)},y=new aA(i,o,l,p);return yA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),er(new Ln("auth-internal",e=>{const t=Gi(e.getProvider("auth").getImmediate());return(i=>new KC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(rv,iv,QC(n)),dn(rv,iv,"esm2017")}/**
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
 */const JC=300,XC=z_("authIdTokenMaxAge")||JC;let sv=null;const ZC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>XC)return;const o=t==null?void 0:t.token;sv!==o&&(sv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ek(n=Kc()){const e=Ms(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gA(n,{popupRedirectResolver:GC,persistence:[iC,HA,Aw]}),i=z_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=ZC(l.toString());BA(t,c,()=>c(t.currentUser)),UA(t,h=>c(h))}}const o=F_("auth");return o&&vA(t,`http://${o}`),t}function tk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}lA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=yr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",tk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YC("Browser");var nk="firebase",rk="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(nk,rk,"app");var ov=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vi,bw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,A){function R(){}R.prototype=A.prototype,b.D=A.prototype,b.prototype=new R,b.prototype.constructor=b,b.C=function(P,O,L){for(var k=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)k[Je-2]=arguments[Je];return A.prototype[O].apply(P,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(b,A,R){R||(R=0);var P=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)P[O]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(O=0;16>O;++O)P[O]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=b.g[0],R=b.g[1],O=b.g[2];var L=b.g[3],k=A+(L^R&(O^L))+P[0]+3614090360&4294967295;A=R+(k<<7&4294967295|k>>>25),k=L+(O^A&(R^O))+P[1]+3905402710&4294967295,L=A+(k<<12&4294967295|k>>>20),k=O+(R^L&(A^R))+P[2]+606105819&4294967295,O=L+(k<<17&4294967295|k>>>15),k=R+(A^O&(L^A))+P[3]+3250441966&4294967295,R=O+(k<<22&4294967295|k>>>10),k=A+(L^R&(O^L))+P[4]+4118548399&4294967295,A=R+(k<<7&4294967295|k>>>25),k=L+(O^A&(R^O))+P[5]+1200080426&4294967295,L=A+(k<<12&4294967295|k>>>20),k=O+(R^L&(A^R))+P[6]+2821735955&4294967295,O=L+(k<<17&4294967295|k>>>15),k=R+(A^O&(L^A))+P[7]+4249261313&4294967295,R=O+(k<<22&4294967295|k>>>10),k=A+(L^R&(O^L))+P[8]+1770035416&4294967295,A=R+(k<<7&4294967295|k>>>25),k=L+(O^A&(R^O))+P[9]+2336552879&4294967295,L=A+(k<<12&4294967295|k>>>20),k=O+(R^L&(A^R))+P[10]+4294925233&4294967295,O=L+(k<<17&4294967295|k>>>15),k=R+(A^O&(L^A))+P[11]+2304563134&4294967295,R=O+(k<<22&4294967295|k>>>10),k=A+(L^R&(O^L))+P[12]+1804603682&4294967295,A=R+(k<<7&4294967295|k>>>25),k=L+(O^A&(R^O))+P[13]+4254626195&4294967295,L=A+(k<<12&4294967295|k>>>20),k=O+(R^L&(A^R))+P[14]+2792965006&4294967295,O=L+(k<<17&4294967295|k>>>15),k=R+(A^O&(L^A))+P[15]+1236535329&4294967295,R=O+(k<<22&4294967295|k>>>10),k=A+(O^L&(R^O))+P[1]+4129170786&4294967295,A=R+(k<<5&4294967295|k>>>27),k=L+(R^O&(A^R))+P[6]+3225465664&4294967295,L=A+(k<<9&4294967295|k>>>23),k=O+(A^R&(L^A))+P[11]+643717713&4294967295,O=L+(k<<14&4294967295|k>>>18),k=R+(L^A&(O^L))+P[0]+3921069994&4294967295,R=O+(k<<20&4294967295|k>>>12),k=A+(O^L&(R^O))+P[5]+3593408605&4294967295,A=R+(k<<5&4294967295|k>>>27),k=L+(R^O&(A^R))+P[10]+38016083&4294967295,L=A+(k<<9&4294967295|k>>>23),k=O+(A^R&(L^A))+P[15]+3634488961&4294967295,O=L+(k<<14&4294967295|k>>>18),k=R+(L^A&(O^L))+P[4]+3889429448&4294967295,R=O+(k<<20&4294967295|k>>>12),k=A+(O^L&(R^O))+P[9]+568446438&4294967295,A=R+(k<<5&4294967295|k>>>27),k=L+(R^O&(A^R))+P[14]+3275163606&4294967295,L=A+(k<<9&4294967295|k>>>23),k=O+(A^R&(L^A))+P[3]+4107603335&4294967295,O=L+(k<<14&4294967295|k>>>18),k=R+(L^A&(O^L))+P[8]+1163531501&4294967295,R=O+(k<<20&4294967295|k>>>12),k=A+(O^L&(R^O))+P[13]+2850285829&4294967295,A=R+(k<<5&4294967295|k>>>27),k=L+(R^O&(A^R))+P[2]+4243563512&4294967295,L=A+(k<<9&4294967295|k>>>23),k=O+(A^R&(L^A))+P[7]+1735328473&4294967295,O=L+(k<<14&4294967295|k>>>18),k=R+(L^A&(O^L))+P[12]+2368359562&4294967295,R=O+(k<<20&4294967295|k>>>12),k=A+(R^O^L)+P[5]+4294588738&4294967295,A=R+(k<<4&4294967295|k>>>28),k=L+(A^R^O)+P[8]+2272392833&4294967295,L=A+(k<<11&4294967295|k>>>21),k=O+(L^A^R)+P[11]+1839030562&4294967295,O=L+(k<<16&4294967295|k>>>16),k=R+(O^L^A)+P[14]+4259657740&4294967295,R=O+(k<<23&4294967295|k>>>9),k=A+(R^O^L)+P[1]+2763975236&4294967295,A=R+(k<<4&4294967295|k>>>28),k=L+(A^R^O)+P[4]+1272893353&4294967295,L=A+(k<<11&4294967295|k>>>21),k=O+(L^A^R)+P[7]+4139469664&4294967295,O=L+(k<<16&4294967295|k>>>16),k=R+(O^L^A)+P[10]+3200236656&4294967295,R=O+(k<<23&4294967295|k>>>9),k=A+(R^O^L)+P[13]+681279174&4294967295,A=R+(k<<4&4294967295|k>>>28),k=L+(A^R^O)+P[0]+3936430074&4294967295,L=A+(k<<11&4294967295|k>>>21),k=O+(L^A^R)+P[3]+3572445317&4294967295,O=L+(k<<16&4294967295|k>>>16),k=R+(O^L^A)+P[6]+76029189&4294967295,R=O+(k<<23&4294967295|k>>>9),k=A+(R^O^L)+P[9]+3654602809&4294967295,A=R+(k<<4&4294967295|k>>>28),k=L+(A^R^O)+P[12]+3873151461&4294967295,L=A+(k<<11&4294967295|k>>>21),k=O+(L^A^R)+P[15]+530742520&4294967295,O=L+(k<<16&4294967295|k>>>16),k=R+(O^L^A)+P[2]+3299628645&4294967295,R=O+(k<<23&4294967295|k>>>9),k=A+(O^(R|~L))+P[0]+4096336452&4294967295,A=R+(k<<6&4294967295|k>>>26),k=L+(R^(A|~O))+P[7]+1126891415&4294967295,L=A+(k<<10&4294967295|k>>>22),k=O+(A^(L|~R))+P[14]+2878612391&4294967295,O=L+(k<<15&4294967295|k>>>17),k=R+(L^(O|~A))+P[5]+4237533241&4294967295,R=O+(k<<21&4294967295|k>>>11),k=A+(O^(R|~L))+P[12]+1700485571&4294967295,A=R+(k<<6&4294967295|k>>>26),k=L+(R^(A|~O))+P[3]+2399980690&4294967295,L=A+(k<<10&4294967295|k>>>22),k=O+(A^(L|~R))+P[10]+4293915773&4294967295,O=L+(k<<15&4294967295|k>>>17),k=R+(L^(O|~A))+P[1]+2240044497&4294967295,R=O+(k<<21&4294967295|k>>>11),k=A+(O^(R|~L))+P[8]+1873313359&4294967295,A=R+(k<<6&4294967295|k>>>26),k=L+(R^(A|~O))+P[15]+4264355552&4294967295,L=A+(k<<10&4294967295|k>>>22),k=O+(A^(L|~R))+P[6]+2734768916&4294967295,O=L+(k<<15&4294967295|k>>>17),k=R+(L^(O|~A))+P[13]+1309151649&4294967295,R=O+(k<<21&4294967295|k>>>11),k=A+(O^(R|~L))+P[4]+4149444226&4294967295,A=R+(k<<6&4294967295|k>>>26),k=L+(R^(A|~O))+P[11]+3174756917&4294967295,L=A+(k<<10&4294967295|k>>>22),k=O+(A^(L|~R))+P[2]+718787259&4294967295,O=L+(k<<15&4294967295|k>>>17),k=R+(L^(O|~A))+P[9]+3951481745&4294967295,b.g[0]=b.g[0]+A&4294967295,b.g[1]=b.g[1]+(O+(k<<21&4294967295|k>>>11))&4294967295,b.g[2]=b.g[2]+O&4294967295,b.g[3]=b.g[3]+L&4294967295}i.prototype.u=function(b,A){A===void 0&&(A=b.length);for(var R=A-this.blockSize,P=this.B,O=this.h,L=0;L<A;){if(O==0)for(;L<=R;)o(this,b,L),L+=this.blockSize;if(typeof b=="string"){for(;L<A;)if(P[O++]=b.charCodeAt(L++),O==this.blockSize){o(this,P),O=0;break}}else for(;L<A;)if(P[O++]=b[L++],O==this.blockSize){o(this,P),O=0;break}}this.h=O,this.o+=A},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var A=1;A<b.length-8;++A)b[A]=0;var R=8*this.o;for(A=b.length-8;A<b.length;++A)b[A]=R&255,R/=256;for(this.u(b),b=Array(16),A=R=0;4>A;++A)for(var P=0;32>P;P+=8)b[R++]=this.g[A]>>>P&255;return b};function l(b,A){var R=h;return Object.prototype.hasOwnProperty.call(R,b)?R[b]:R[b]=A(b)}function c(b,A){this.h=A;for(var R=[],P=!0,O=b.length-1;0<=O;O--){var L=b[O]|0;P&&L==A||(R[O]=L,P=!1)}this.g=R}var h={};function p(b){return-128<=b&&128>b?l(b,function(A){return new c([A|0],0>A?-1:0)}):new c([b|0],0>b?-1:0)}function y(b){if(isNaN(b)||!isFinite(b))return T;if(0>b)return M(y(-b));for(var A=[],R=1,P=0;b>=R;P++)A[P]=b/R|0,R*=4294967296;return new c(A,0)}function w(b,A){if(b.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b.charAt(0)=="-")return M(w(b.substring(1),A));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(A,8)),P=T,O=0;O<b.length;O+=8){var L=Math.min(8,b.length-O),k=parseInt(b.substring(O,O+L),A);8>L?(L=y(Math.pow(A,L)),P=P.j(L).add(y(k))):(P=P.j(R),P=P.add(y(k)))}return P}var T=p(0),S=p(1),N=p(16777216);n=c.prototype,n.m=function(){if($(this))return-M(this).m();for(var b=0,A=1,R=0;R<this.g.length;R++){var P=this.i(R);b+=(0<=P?P:4294967296+P)*A,A*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(U(this))return"0";if($(this))return"-"+M(this).toString(b);for(var A=y(Math.pow(b,6)),R=this,P="";;){var O=le(R,A).g;R=ne(R,O.j(A));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(b);if(R=O,U(R))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function U(b){if(b.h!=0)return!1;for(var A=0;A<b.g.length;A++)if(b.g[A]!=0)return!1;return!0}function $(b){return b.h==-1}n.l=function(b){return b=ne(this,b),$(b)?-1:U(b)?0:1};function M(b){for(var A=b.g.length,R=[],P=0;P<A;P++)R[P]=~b.g[P];return new c(R,~b.h).add(S)}n.abs=function(){return $(this)?M(this):this},n.add=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],P=0,O=0;O<=A;O++){var L=P+(this.i(O)&65535)+(b.i(O)&65535),k=(L>>>16)+(this.i(O)>>>16)+(b.i(O)>>>16);P=k>>>16,L&=65535,k&=65535,R[O]=k<<16|L}return new c(R,R[R.length-1]&-2147483648?-1:0)};function ne(b,A){return b.add(M(A))}n.j=function(b){if(U(this)||U(b))return T;if($(this))return $(b)?M(this).j(M(b)):M(M(this).j(b));if($(b))return M(this.j(M(b)));if(0>this.l(N)&&0>b.l(N))return y(this.m()*b.m());for(var A=this.g.length+b.g.length,R=[],P=0;P<2*A;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<b.g.length;O++){var L=this.i(P)>>>16,k=this.i(P)&65535,Je=b.i(O)>>>16,dt=b.i(O)&65535;R[2*P+2*O]+=k*dt,se(R,2*P+2*O),R[2*P+2*O+1]+=L*dt,se(R,2*P+2*O+1),R[2*P+2*O+1]+=k*Je,se(R,2*P+2*O+1),R[2*P+2*O+2]+=L*Je,se(R,2*P+2*O+2)}for(P=0;P<A;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=A;P<2*A;P++)R[P]=0;return new c(R,0)};function se(b,A){for(;(b[A]&65535)!=b[A];)b[A+1]+=b[A]>>>16,b[A]&=65535,A++}function Z(b,A){this.g=b,this.h=A}function le(b,A){if(U(A))throw Error("division by zero");if(U(b))return new Z(T,T);if($(b))return A=le(M(b),A),new Z(M(A.g),M(A.h));if($(A))return A=le(b,M(A)),new Z(M(A.g),A.h);if(30<b.g.length){if($(b)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var R=S,P=A;0>=P.l(b);)R=Ce(R),P=Ce(P);var O=Re(R,1),L=Re(P,1);for(P=Re(P,2),R=Re(R,2);!U(P);){var k=L.add(P);0>=k.l(b)&&(O=O.add(R),L=k),P=Re(P,1),R=Re(R,1)}return A=ne(b,O.j(A)),new Z(O,A)}for(O=T;0<=b.l(A);){for(R=Math.max(1,Math.floor(b.m()/A.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=y(R),k=L.j(A);$(k)||0<k.l(b);)R-=P,L=y(R),k=L.j(A);U(L)&&(L=S),O=O.add(L),b=ne(b,k)}return new Z(O,b)}n.A=function(b){return le(this,b).h},n.and=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],P=0;P<A;P++)R[P]=this.i(P)&b.i(P);return new c(R,this.h&b.h)},n.or=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],P=0;P<A;P++)R[P]=this.i(P)|b.i(P);return new c(R,this.h|b.h)},n.xor=function(b){for(var A=Math.max(this.g.length,b.g.length),R=[],P=0;P<A;P++)R[P]=this.i(P)^b.i(P);return new c(R,this.h^b.h)};function Ce(b){for(var A=b.g.length+1,R=[],P=0;P<A;P++)R[P]=b.i(P)<<1|b.i(P-1)>>>31;return new c(R,b.h)}function Re(b,A){var R=A>>5;A%=32;for(var P=b.g.length-R,O=[],L=0;L<P;L++)O[L]=0<A?b.i(L+R)>>>A|b.i(L+R+1)<<32-A:b.i(L+R);return new c(O,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,bw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=w,Vi=c}).apply(typeof ov<"u"?ov:typeof self<"u"?self:typeof window<"u"?window:{});var nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dw,il,Ow,hc,xf,Vw,Lw,Mw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof nc=="object"&&nc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var j=u[I];if(!(j in v))break e;v=v[j]}u=u[u.length-1],I=v[u],m=m(I),m!=I&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,I=!1,j={next:function(){if(!I&&v<u.length){var q=v++;return{value:m(q,u[q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,v){return u.call.apply(u.bind,arguments)}function T(u,m,v){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,I),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function S(u,m,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,S.apply(null,arguments)}function N(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function U(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(I,j,q){for(var ie=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)ie[$e-2]=arguments[$e];return m.prototype[j].apply(I,ie)}}function $(u){const m=u.length;if(0<m){const v=Array(m);for(let I=0;I<m;I++)v[I]=u[I];return v}return[]}function M(u,m){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(p(I)){const j=u.length||0,q=I.length||0;u.length=j+q;for(let ie=0;ie<q;ie++)u[j+ie]=I[ie]}else u.push(I)}}class ne{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function se(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var Ce=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function Re(u,m,v){for(const I in u)m.call(v,u[I],I,u)}function b(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function A(u){const m={};for(const v in u)m[v]=u[v];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,m){let v,I;for(let j=1;j<arguments.length;j++){I=arguments[j];for(v in I)u[v]=I[v];for(let q=0;q<R.length;q++)v=R[q],Object.prototype.hasOwnProperty.call(I,v)&&(u[v]=I[v])}}function O(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function L(u){h.setTimeout(()=>{throw u},0)}function k(){var u=_e;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Je{constructor(){this.h=this.g=null}add(m,v){const I=dt.get();I.set(m,v),this.h?this.h.next=I:this.g=I,this.h=I}}var dt=new ne(()=>new ht,u=>u.reset());class ht{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,oe=!1,_e=new Je,ae=()=>{const u=h.Promise.resolve(void 0);Ue=()=>{u.then(V)}};var V=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(v){L(v)}var m=dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}oe=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var ue=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};h.addEventListener("test",v,m),h.removeEventListener("test",v,m)}catch{}return u})();function he(u,m){if(H.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ce){e:{try{le(m.nodeName);var j=!0;break e}catch{}j=!1}j||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Y[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&he.aa.h.call(this)}}U(he,H);var Y={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var re="closure_listenable_"+(1e6*Math.random()|0),ge=0;function xe(u,m,v,I,j){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!I,this.ha=j,this.key=++ge,this.da=this.fa=!1}function Ne(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function St(u){this.src=u,this.g={},this.h=0}St.prototype.add=function(u,m,v,I,j){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var ie=En(u,m,I,j);return-1<ie?(m=u[ie],v||(m.fa=!1)):(m=new xe(m,this.src,q,!!I,j),m.fa=v,u.push(m)),m};function ir(u,m){var v=m.type;if(v in u.g){var I=u.g[v],j=Array.prototype.indexOf.call(I,m,void 0),q;(q=0<=j)&&Array.prototype.splice.call(I,j,1),q&&(Ne(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function En(u,m,v,I){for(var j=0;j<u.length;++j){var q=u[j];if(!q.da&&q.listener==m&&q.capture==!!v&&q.ha==I)return j}return-1}var xt="closure_lm_"+(1e6*Math.random()|0),zs={};function aa(u,m,v,I,j){if(Array.isArray(m)){for(var q=0;q<m.length;q++)aa(u,m[q],v,I,j);return null}return v=ca(v),u&&u[re]?u.K(m,v,y(I)?!!I.capture:!1,j):la(u,m,v,!1,I,j)}function la(u,m,v,I,j,q){if(!m)throw Error("Invalid event type");var ie=y(j)?!!j.capture:!!j,$e=Ws(u);if($e||(u[xt]=$e=new St(u)),v=$e.add(m,v,I,ie,q),v.proxy)return v;if(I=Fl(),v.proxy=I,I.src=u,I.listener=v,u.addEventListener)ue||(j=ie),j===void 0&&(j=!1),u.addEventListener(m.toString(),I,j);else if(u.attachEvent)u.attachEvent(Rr(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Fl(){function u(v){return m.call(u.src,u.listener,v)}const m=ua;return u}function $s(u,m,v,I,j){if(Array.isArray(m))for(var q=0;q<m.length;q++)$s(u,m[q],v,I,j);else I=y(I)?!!I.capture:!!I,v=ca(v),u&&u[re]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],v=En(q,v,I,j),-1<v&&(Ne(q[v]),Array.prototype.splice.call(q,v,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ws(u))&&(m=u.g[m.toString()],u=-1,m&&(u=En(m,v,I,j)),(v=-1<u?m[u]:null)&&kr(v))}function kr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[re])ir(m.i,u);else{var v=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(v,I,u.capture):m.detachEvent?m.detachEvent(Rr(v),I):m.addListener&&m.removeListener&&m.removeListener(I),(v=Ws(m))?(ir(v,u),v.h==0&&(v.src=null,m[xt]=null)):Ne(u)}}}function Rr(u){return u in zs?zs[u]:zs[u]="on"+u}function ua(u,m){if(u.da)u=!0;else{m=new he(m,this);var v=u.listener,I=u.ha||u.src;u.fa&&kr(u),u=v.call(I,m)}return u}function Ws(u){return u=u[xt],u instanceof St?u:null}var qs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ca(u){return typeof u=="function"?u:(u[qs]||(u[qs]=function(m){return u.handleEvent(m)}),u[qs])}function vt(){G.call(this),this.i=new St(this),this.M=this,this.F=null}U(vt,G),vt.prototype[re]=!0,vt.prototype.removeEventListener=function(u,m,v,I){$s(this,u,m,v,I)};function _t(u,m){var v,I=u.F;if(I)for(v=[];I;I=I.F)v.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new H(m,u);else if(m instanceof H)m.target=m.target||u;else{var j=m;m=new H(I,u),P(m,j)}if(j=!0,v)for(var q=v.length-1;0<=q;q--){var ie=m.g=v[q];j=Pr(ie,I,!0,m)&&j}if(ie=m.g=u,j=Pr(ie,I,!0,m)&&j,j=Pr(ie,I,!1,m)&&j,v)for(q=0;q<v.length;q++)ie=m.g=v[q],j=Pr(ie,I,!1,m)&&j}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],I=0;I<v.length;I++)Ne(v[I]);delete u.g[m],u.h--}}this.F=null},vt.prototype.K=function(u,m,v,I){return this.i.add(String(u),m,!1,v,I)},vt.prototype.L=function(u,m,v,I){return this.i.add(String(u),m,!0,v,I)};function Pr(u,m,v,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,q=0;q<m.length;++q){var ie=m[q];if(ie&&!ie.da&&ie.capture==v){var $e=ie.listener,wt=ie.ha||ie.src;ie.fa&&ir(u.i,ie),j=$e.call(wt,I)!==!1&&j}}return j&&!I.defaultPrevented}function da(u,m,v){if(typeof u=="function")v&&(u=S(u,v));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function ni(u){u.g=da(()=>{u.g=null,u.i&&(u.i=!1,ni(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ji extends G{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ni(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(u){G.call(this),this.h=u,this.g={}}U(Xi,G);var ha=[];function fa(u){Re(u.g,function(m,v){this.g.hasOwnProperty(v)&&kr(m)},u),u.g={}}Xi.prototype.N=function(){Xi.aa.N.call(this),fa(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pa=h.JSON.stringify,ma=h.JSON.parse,ga=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Zi(){}Zi.prototype.h=null;function Hs(u){return u.h||(u.h=u.i())}function Gs(){}var Tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){H.call(this,"d")}U(sr,H);function Ks(){H.call(this,"c")}U(Ks,H);var or={},ya=null;function es(){return ya=ya||new vt}or.La="serverreachability";function va(u){H.call(this,or.La,u)}U(va,H);function xr(u){const m=es();_t(m,new va(m))}or.STAT_EVENT="statevent";function _a(u,m){H.call(this,or.STAT_EVENT,u),this.stat=m}U(_a,H);function at(u){const m=es();_t(m,new _a(m,u))}or.Ma="timingevent";function Qs(u,m){H.call(this,or.Ma,u),this.size=m}U(Qs,H);function Mn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function ns(u,m,v,I,j,q){u.info(function(){if(u.g)if(q)for(var ie="",$e=q.split("&"),wt=0;wt<$e.length;wt++){var Me=$e[wt].split("=");if(1<Me.length){var At=Me[0];Me=Me[1];var ft=At.split("_");ie=2<=ft.length&&ft[1]=="type"?ie+(At+"="+Me+"&"):ie+(At+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+I+") [attempt "+j+"]: "+m+`
`+v+`
`+ie})}function Ys(u,m,v,I,j,q,ie){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+j+"]: "+m+`
`+v+`
`+q+" "+ie})}function jn(u,m,v,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Id(u,v)+(I?" "+I:"")})}function wa(u,m){u.info(function(){return"TIMEOUT: "+m})}ts.prototype.info=function(){};function Id(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var I=v[u];if(!(2>I.length)){var j=I[1];if(Array.isArray(j)&&!(1>j.length)){var q=j[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<j.length;ie++)j[ie]=""}}}}return pa(v)}catch{return m}}var Js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ul={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fn;function rs(){}U(rs,Zi),rs.prototype.g=function(){return new XMLHttpRequest},rs.prototype.i=function(){return{}},Fn=new rs;function Un(u,m,v,I){this.j=u,this.i=m,this.l=v,this.R=I||1,this.U=new Xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bl}function Bl(){this.i=null,this.g="",this.h=!1}var Ea={},Xs={};function Zs(u,m,v){u.L=1,u.v=ai(pn(m)),u.m=v,u.P=!0,Ta(u,null)}function Ta(u,m){u.F=Date.now(),Ge(u),u.A=pn(u.v);var v=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),ui(v.i,"t",I),u.C=0,v=u.j.J,u.h=new Bl,u.g=su(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Ji(S(u.Y,u,u.g),u.O)),m=u.U,v=u.g,I=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(ha[0]=j.toString()),j=ha);for(var q=0;q<j.length;q++){var ie=aa(v,j[q],I||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),xr(),ns(u.i,u.u,u.A,u.l,u.R,u.m)}Un.prototype.ca=function(u){u=u.target;const m=this.M;m&&Zt(u)==3?m.j():this.Y(u)},Un.prototype.Y=function(u){try{if(u==this.g)e:{const ft=Zt(this.g);var m=this.g.Ba();const An=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ra(this.g)))){this.J||ft!=4||m==7||(m==8||0>=An?xr(3):xr(2)),is(this);var v=this.g.Z();this.X=v;t:if(zl(this)){var I=Ra(this.g);u="";var j=I.length,q=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){In(this),ri(this);var ie="";break t}this.h.i=new h.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(q&&m==j-1)});I.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=v==200,Ys(this.i,this.u,this.A,this.l,this.R,ft,v),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,wt=this.g;if(($e=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se($e)){var Me=$e;break t}}Me=null}if(v=Me)jn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ia(this,v);else{this.o=!1,this.s=3,at(12),In(this),ri(this);break e}}if(this.P){v=!0;let gn;for(;!this.J&&this.C<ie.length;)if(gn=Sd(this,ie),gn==Xs){ft==4&&(this.s=4,at(14),v=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==Ea){this.s=4,at(15),jn(this.i,this.l,ie,"[Invalid Chunk]"),v=!1;break}else jn(this.i,this.l,gn,null),Ia(this,gn);if(zl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||ie.length!=0||this.h.h||(this.s=1,at(16),v=!1),this.o=this.o&&v,!v)jn(this.i,this.l,ie,"[Invalid Chunked Response]"),In(this),ri(this);else if(0<ie.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),xa(At),At.M=!0,at(11))}}else jn(this.i,this.l,ie,null),Ia(this,ie);ft==4&&In(this),this.o&&!this.J&&(ft==4?co(this.j,this):(this.o=!1,Ge(this)))}else so(this.g),v==400&&0<ie.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),In(this),ri(this)}}}catch{}finally{}};function zl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Sd(u,m){var v=u.C,I=m.indexOf(`
`,v);return I==-1?Xs:(v=Number(m.substring(v,I)),isNaN(v)?Ea:(I+=1,I+v>m.length?Xs:(m=m.slice(I,I+v),u.C=I+v,m)))}Un.prototype.cancel=function(){this.J=!0,In(this)};function Ge(u){u.S=Date.now()+u.I,$l(u,u.I)}function $l(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Mn(S(u.ba,u),m)}function is(u){u.B&&(h.clearTimeout(u.B),u.B=null)}Un.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(wa(this.i,this.A),this.L!=2&&(xr(),at(17)),In(this),this.s=2,ri(this)):$l(this,this.S-u)};function ri(u){u.j.G==0||u.J||co(u.j,u)}function In(u){is(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,fa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Ia(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||Gt(v.h,u))){if(!u.K&&Gt(v.h,u)&&v.G==3){try{var I=v.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var j=I;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)uo(v),qn(v);else break e;lo(v),at(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Mn(S(v.Za,v),6e3));if(1>=ql(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Vr(v,11)}else if((u.K||v.g==u)&&uo(v),!se(m))for(j=v.Da.g.parse(m),m=0;m<j.length;m++){let Me=j[m];if(v.T=Me[0],Me=Me[1],v.G==2)if(Me[0]=="c"){v.K=Me[1],v.ia=Me[2];const At=Me[3];At!=null&&(v.la=At,v.j.info("VER="+v.la));const ft=Me[4];ft!=null&&(v.Aa=ft,v.j.info("SVER="+v.Aa));const An=Me[5];An!=null&&typeof An=="number"&&0<An&&(I=1.5*An,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const gn=u.g;if(gn){const ds=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var q=I.h;q.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Sa(q,q.h),q.h=null))}if(I.D){const fo=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;fo&&(I.ya=fo,qe(I.I,I.D,fo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var ie=u;if(I.qa=iu(I,I.J?I.ia:null,I.W),ie.K){Hl(I.h,ie);var $e=ie,wt=I.L;wt&&($e.I=wt),$e.B&&(is($e),Ge($e)),I.g=ie}else cs(I);0<v.i.length&&cr(v)}else Me[0]!="stop"&&Me[0]!="close"||Vr(v,7);else v.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Vr(v,7):bt(v):Me[0]!="noop"&&v.l&&v.l.ta(Me),v.v=0)}}xr(4)}catch{}}var Wl=class{constructor(u,m){this.g=u,this.map=m}};function ss(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ql(u){return u.h?1:u.g?u.g.size:0}function Gt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Sa(u,m){u.g?u.g.add(m):u.h=m}function Hl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ss.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Gl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return $(u.i)}function eo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,I=0;I<v;I++)m.push(u[I]);return m}m=[],v=0;for(I in u)m[v++]=u[I];return m}function to(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const I in u)m[v++]=I;return m}}}function ii(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=to(u),I=eo(u),j=I.length,q=0;q<j;q++)m.call(void 0,I[q],v&&v[q],u)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ad(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var I=u[v].indexOf("="),j=null;if(0<=I){var q=u[v].substring(0,I);j=u[v].substring(I+1)}else q=u[v];m(q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Nr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Nr){this.h=u.h,as(this,u.j),this.o=u.o,this.g=u.g,si(this,u.s),this.l=u.l;var m=u.i,v=new ar;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),oi(this,v),this.m=u.m}else u&&(m=String(u).match(os))?(this.h=!1,as(this,m[1]||"",!0),this.o=Le(m[2]||""),this.g=Le(m[3]||"",!0),si(this,m[4]),this.l=Le(m[5]||"",!0),oi(this,m[6]||"",!0),this.m=Le(m[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}Nr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(li(m,no,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(li(m,no,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(li(v,v.charAt(0)=="/"?Yl:Ql,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",li(v,Aa)),u.join("")};function pn(u){return new Nr(u)}function as(u,m,v){u.j=v?Le(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function si(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function oi(u,m,v){m instanceof ar?(u.i=m,lr(u.i,u.h)):(v||(m=li(m,Jl)),u.i=new ar(m,u.h))}function qe(u,m,v){u.i.set(m,v)}function ai(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Le(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function li(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Kl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Kl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var no=/[#\/\?@]/g,Ql=/[#\?:]/g,Yl=/[#\?]/g,Jl=/[#\?@]/g,Aa=/#/g;function ar(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Nt(u){u.g||(u.g=new Map,u.h=0,u.i&&Ad(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=ar.prototype,n.add=function(u,m){Nt(this),this.i=null,u=Sn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Bn(u,m){Nt(u),m=Sn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function zn(u,m){return Nt(u),m=Sn(u,m),u.g.has(m)}n.forEach=function(u,m){Nt(this),this.g.forEach(function(v,I){v.forEach(function(j){u.call(m,j,I,this)},this)},this)},n.na=function(){Nt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let I=0;I<m.length;I++){const j=u[I];for(let q=0;q<j.length;q++)v.push(m[I])}return v},n.V=function(u){Nt(this);let m=[];if(typeof u=="string")zn(this,u)&&(m=m.concat(this.g.get(Sn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return Nt(this),this.i=null,u=Sn(this,u),zn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ui(u,m,v){Bn(u,m),0<v.length&&(u.i=null,u.g.set(Sn(u,m),$(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var I=m[v];const q=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var j=q;ie[I]!==""&&(j+="="+encodeURIComponent(String(ie[I]))),u.push(j)}}return this.i=u.join("&")};function Sn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function lr(u,m){m&&!u.j&&(Nt(u),u.i=null,u.g.forEach(function(v,I){var j=I.toLowerCase();I!=j&&(Bn(this,I),ui(this,j,v))},u)),u.j=m}function Cd(u,m){const v=new ts;if(h.Image){const I=new Image;I.onload=N(Xt,v,"TestLoadImage: loaded",!0,m,I),I.onerror=N(Xt,v,"TestLoadImage: error",!1,m,I),I.onabort=N(Xt,v,"TestLoadImage: abort",!1,m,I),I.ontimeout=N(Xt,v,"TestLoadImage: timeout",!1,m,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function Xl(u,m){const v=new ts,I=new AbortController,j=setTimeout(()=>{I.abort(),Xt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(q=>{clearTimeout(j),q.ok?Xt(v,"TestPingServer: ok",!0,m):Xt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),Xt(v,"TestPingServer: error",!1,m)})}function Xt(u,m,v,I,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),I(v)}catch{}}function kd(){this.g=new ga}function Zl(u,m,v){const I=v||"";try{ii(u,function(j,q){let ie=j;y(j)&&(ie=pa(j)),m.push(I+q+"="+encodeURIComponent(ie))})}catch(j){throw m.push(I+"type="+encodeURIComponent("_badmap")),j}}function br(u){this.l=u.Ub||null,this.j=u.eb||!1}U(br,Zi),br.prototype.g=function(){return new ls(this.l,this.j)},br.prototype.i=(function(u){return function(){return u}})({});function ls(u,m){vt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(ls,vt),n=ls.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Wn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;eu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function eu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?$n(this):Wn(this),this.readyState==3&&eu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,$n(this))},n.Qa=function(u){this.g&&(this.response=u,$n(this))},n.ga=function(){this.g&&$n(this)};function $n(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Wn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Dr(u){let m="";return Re(u,function(v,I){m+=I,m+=":",m+=v,m+=`\r
`}),m}function ci(u,m,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=Dr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):qe(u,m,v))}function et(u){vt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(et,vt);var Rd=/^https?$/i,Ca=["POST","PUT"];n=et.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fn.g(),this.v=this.o?Hs(this.o):Hs(Fn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){us(this,q);return}if(u=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var j in I)v.set(j,I[j]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const q of I.keys())v.set(q,I.get(q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),j=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Ca,m,void 0))||I||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of v)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{io(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){us(this,q)}};function us(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ro(u),mn(u)}function ro(u){u.A||(u.A=!0,_t(u,"complete"),_t(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,_t(this,"complete"),_t(this,"abort"),mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ka(this):this.bb())},n.bb=function(){ka(this)};function ka(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Zt(u)!=4||u.Z()!=2)){if(u.u&&Zt(u)==4)da(u.Ea,0,u);else if(_t(u,"readystatechange"),Zt(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var I;if(I=ie===0){var j=String(u.D).match(os)[1]||null;!j&&h.self&&h.self.location&&(j=h.self.location.protocol.slice(0,-1)),I=!Rd.test(j?j.toLowerCase():"")}v=I}if(v)_t(u,"complete"),_t(u,"success");else{u.m=6;try{var q=2<Zt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",ro(u)}}finally{mn(u)}}}}function mn(u,m){if(u.g){io(u);const v=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||_t(u,"ready");try{v.onreadystatechange=I}catch{}}}function io(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Zt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ma(m)}};function Ra(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function so(u){const m={};u=(u.g&&2<=Zt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(se(u[I]))continue;var v=O(u[I]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=m[j]||[];m[j]=q,q.push(v)}b(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Pa(u){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ur("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ur("baseRetryDelayMs",5e3,u),this.cb=ur("retryDelaySeedMs",1e4,u),this.Wa=ur("forwardChannelMaxRetries",2,u),this.wa=ur("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ss(u&&u.concurrentRequestLimit),this.Da=new kd,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pa.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,I){at(0),this.W=u,this.H=m||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=iu(this,null,this.W),cr(this)};function bt(u){if(oo(u),u.G==3){var m=u.U++,v=pn(u.I);if(qe(v,"SID",u.K),qe(v,"RID",m),qe(v,"TYPE","terminate"),Or(u,v),m=new Un(u,u.j,m),m.L=2,m.v=ai(pn(v)),v=!1,h.navigator&&h.navigator.sendBeacon)try{v=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&h.Image&&(new Image().src=m.v,v=!0),v||(m.g=su(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ge(m)}ru(u)}function qn(u){u.g&&(xa(u),u.g.cancel(),u.g=null)}function oo(u){qn(u),u.u&&(h.clearTimeout(u.u),u.u=null),uo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function cr(u){if(!fn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Ue||ae(),oe||(Ue(),oe=!0),_e.add(m,u),u.B=0}}function Pd(u,m){return ql(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Mn(S(u.Ga,u,m),nu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new Un(this,this.j,u);let q=this.o;if(this.S&&(q?(q=A(q),P(q,this.S)):q=this.S),this.m!==null||this.O||(j.H=q,q=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=di(this,j,m),v=pn(this.I),qe(v,"RID",u),qe(v,"CVER",22),this.D&&qe(v,"X-HTTP-Session-Id",this.D),Or(this,v),q&&(this.O?m="headers="+encodeURIComponent(String(Dr(q)))+"&"+m:this.m&&ci(v,this.m,q)),Sa(this.h,j),this.Ua&&qe(v,"TYPE","init"),this.P?(qe(v,"$req",m),qe(v,"SID","null"),j.T=!0,Zs(j,v,null)):Zs(j,v,m),this.G=2}}else this.G==3&&(u?ao(this,u):this.i.length==0||fn(this.h)||ao(this))};function ao(u,m){var v;m?v=m.l:v=u.U++;const I=pn(u.I);qe(I,"SID",u.K),qe(I,"RID",v),qe(I,"AID",u.T),Or(u,I),u.m&&u.o&&ci(I,u.m,u.o),v=new Un(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=di(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Sa(u.h,v),Zs(v,I,m)}function Or(u,m){u.H&&Re(u.H,function(v,I){qe(m,I,v)}),u.l&&ii({},function(v,I){qe(m,I,v)})}function di(u,m,v){v=Math.min(u.i.length,v);var I=u.l?S(u.l.Na,u.l,u):null;e:{var j=u.i;let q=-1;for(;;){const ie=["count="+v];q==-1?0<v?(q=j[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let $e=!0;for(let wt=0;wt<v;wt++){let Me=j[wt].g;const At=j[wt].map;if(Me-=q,0>Me)q=Math.max(0,j[wt].g-100),$e=!1;else try{Zl(At,ie,"req"+Me+"_")}catch{I&&I(At)}}if($e){I=ie.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,I}function cs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Ue||ae(),oe||(Ue(),oe=!0),_e.add(m,u),u.v=0}}function lo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Mn(S(u.Fa,u),nu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,tu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Mn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),qn(this),tu(this))};function xa(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function tu(u){u.g=new Un(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=pn(u.qa);qe(m,"RID","rpc"),qe(m,"SID",u.K),qe(m,"AID",u.T),qe(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(m,"TO",u.ja),qe(m,"TYPE","xmlhttp"),Or(u,m),u.m&&u.o&&ci(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ai(pn(m)),v.m=null,v.P=!0,Ta(v,u)}n.Za=function(){this.C!=null&&(this.C=null,qn(this),lo(this),at(19))};function uo(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function co(u,m){var v=null;if(u.g==m){uo(u),xa(u),u.g=null;var I=2}else if(Gt(u.h,m))v=m.D,Hl(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;I=es(),_t(I,new Qs(I,v)),cr(u)}else cs(u);else if(j=m.s,j==3||j==0&&0<m.X||!(I==1&&Pd(u,m)||I==2&&lo(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),j){case 1:Vr(u,5);break;case 4:Vr(u,10);break;case 3:Vr(u,6);break;default:Vr(u,2)}}}function nu(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Vr(u,m){if(u.j.info("Error code "+m),m==2){var v=S(u.fb,u),I=u.Xa;const j=!I;I=new Nr(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||as(I,"https"),ai(I),j?Cd(I.toString(),v):Xl(I.toString(),v)}else at(2);u.G=0,u.l&&u.l.sa(m),ru(u),oo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function ru(u){if(u.G=0,u.ka=[],u.l){const m=Gl(u.h);(m.length!=0||u.i.length!=0)&&(M(u.ka,m),M(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function iu(u,m,v){var I=v instanceof Nr?pn(v):new Nr(v);if(I.g!="")m&&(I.g=m+"."+I.g),si(I,I.s);else{var j=h.location;I=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var q=new Nr(null);I&&as(q,I),m&&(q.g=m),j&&si(q,j),v&&(q.l=v),I=q}return v=u.D,m=u.ya,v&&m&&qe(I,v,m),qe(I,"VER",u.la),Or(u,I),I}function su(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new et(new br({eb:v})):new et(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Na(){}n=Na.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ho(){}ho.prototype.g=function(u,m){return new Kt(u,m)};function Kt(u,m){vt.call(this),this.g=new Pa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!se(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!se(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new dr(this)}U(Kt,vt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){bt(this.g)},Kt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=pa(u),u=v);m.i.push(new Wl(m.Ya++,u)),m.G==3&&cr(m)},Kt.prototype.N=function(){this.g.l=null,delete this.j,bt(this.g),delete this.g,Kt.aa.N.call(this)};function ou(u){sr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}U(ou,sr);function au(){Ks.call(this),this.status=1}U(au,Ks);function dr(u){this.g=u}U(dr,Na),dr.prototype.ua=function(){_t(this.g,"a")},dr.prototype.ta=function(u){_t(this.g,new ou(u))},dr.prototype.sa=function(u){_t(this.g,new au)},dr.prototype.ra=function(){_t(this.g,"b")},ho.prototype.createWebChannel=ho.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,Mw=function(){return new ho},Lw=function(){return es()},Vw=or,xf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Js.NO_ERROR=0,Js.TIMEOUT=8,Js.HTTP_ERROR=6,hc=Js,Ul.COMPLETE="complete",Ow=Ul,Gs.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,il=Gs,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,Dw=et}).apply(typeof nc<"u"?nc:typeof self<"u"?self:typeof window<"u"?window:{});const av="@firebase/firestore",lv="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let na="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new ip("@firebase/firestore");function Oo(){return Ns.logLevel}function fe(n,...e){if(Ns.logLevel<=Oe.DEBUG){const t=e.map(mp);Ns.debug(`Firestore (${na}): ${n}`,...t)}}function Jr(n,...e){if(Ns.logLevel<=Oe.ERROR){const t=e.map(mp);Ns.error(`Firestore (${na}): ${n}`,...t)}}function ji(n,...e){if(Ns.logLevel<=Oe.WARN){const t=e.map(mp);Ns.warn(`Firestore (${na}): ${n}`,...t)}}function mp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,jw(n,i,t)}function jw(n,e,t){let i=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Jr(i),new Error(i)}function ze(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||jw(e,o,i)}function Pe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ik{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Wt.UNAUTHENTICATED)))}shutdown(){}}class sk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ok{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Kr,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},h=p=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>h(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Kr)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string",31837,{l:i}),new Fw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class ak{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lk{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new ak(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class uv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const i=l=>{l.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,fe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new uv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new uv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function Uw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=ck(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function be(n,e){return n<e?-1:n>e?1:0}function Nf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return be(i,o);{const l=Uw(),c=dk(l.encode(cv(n,t)),l.encode(cv(e,t)));return c!==0?c:be(i,o)}}t+=i>65535?2:1}return be(n.length,e.length)}function cv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function dk(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return be(n[t],e[t]);return be(n.length,e.length)}function Wo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="__name__";class gr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Se(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=gr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return be(e.length,t.length)}static compareSegments(e,t){const i=gr.isNumericId(e),o=gr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?gr.extractNumericId(e).compare(gr.extractNumericId(t)):Nf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vi.fromString(e.substring(4,e.length-2))}}class Ye extends gr{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ce(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ye(t)}static emptyPath(){return new Ye([])}}const hk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends gr{construct(e,t,i){return new Mt(e,t,i)}static isValidIdentifier(e){return hk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dv}static keyField(){return new Mt([dv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ce(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new ce(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ce(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else h==="`"?(c=!c,o++):h!=="."||c?(i+=h,o++):(l(),o++)}if(l(),c)throw new ce(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Bw(n,e,t){if(!t)throw new ce(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fk(n,e,t,i){if(e===!0&&i===!0)throw new ce(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function hv(n){if(!we.isDocumentKey(n))throw new ce(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function fv(n){if(we.isDocumentKey(n))throw new ce(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se(12329,{type:typeof n})}function hn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xc(n);throw new ce(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function yt(n,e){const t={typeString:n};return e&&(t.value=e),t}function xl(n,e){if(!zw(n))throw new ce(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ce(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=-62135596800,mv=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*mv);return new We(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pv)throw new ce(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mv}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xl(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:yt("string",We._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new We(0,0))}static max(){return new ke(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const vl=-1;function pk(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=ke.fromTimestamp(i===1e9?new We(t+1,0):new We(t,i));return new Fi(o,we.empty(),e)}function mk(n){return new Fi(n.readTime,n.key,vl)}class Fi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Fi(ke.min(),we.empty(),vl)}static max(){return new Fi(ke.max(),we.empty(),vl)}}function gk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==yk)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.reject(t)}static resolve(e){return new Q(((t,i)=>{t(e)}))}static reject(e){return new Q(((t,i)=>{i(e)}))}static waitFor(e){return new Q(((t,i)=>{let o=0,l=0,c=!1;e.forEach((h=>{++o,h.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=Q.resolve(!1);for(const i of e)t=t.next((o=>o?Q.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new Q(((i,o)=>{const l=e.length,c=new Array(l);let h=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((w=>{c[y]=w,++h,h===l&&i(c)}),(w=>o(w)))}}))}static doWhile(e,t){return new Q(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function _k(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ia(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Zc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=-1;function ed(n){return n==null}function Pc(n){return n===0&&1/n==-1/0}function wk(n){return typeof n=="number"&&Number.isInteger(n)&&!Pc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="";function Ek(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gv(e)),e=Tk(n.get(t),e);return gv(e)}function Tk(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case $w:t+="";break;default:t+=l}}return t}function gv(n){return n+$w+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ki(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ww(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.comparator=e,this.root=t||Vt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rc(this.root,e,this.comparator,!0)}}class rc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Vt.RED,this.left=o??Vt.EMPTY,this.right=l??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Vt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Vt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Vt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vv(this.data.getIterator())}getIteratorFrom(e){return new vv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class vv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new wn([])}unionWith(e){let t=new It(Mt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class qw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new qw("Invalid base64 string: "+l):l}})(e);return new jt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const Ik=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(n){if(ze(!!n,39018),typeof n=="string"){let e=0;const t=Ik.exec(n);if(ze(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bi(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="server_timestamp",Gw="__type__",Kw="__previous_value__",Qw="__local_write_time__";function vp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gw])===null||t===void 0?void 0:t.stringValue)===Hw}function td(n){const e=n.mapValue.fields[Kw];return vp(e)?td(e):e}function _l(n){const e=Ui(n.mapValue.fields[Qw].timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,t,i,o,l,c,h,p,y,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=w}}const xc="(default)";class wl{constructor(e,t){this.projectId=e,this.database=t||xc}static empty(){return new wl("","")}get isDefaultDatabase(){return this.database===xc}isEqual(e){return e instanceof wl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="__type__",Ak="__max__",ic={mapValue:{}},Jw="__vector__",Nc="value";function zi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vp(n)?4:kk(n)?9007199254740991:Ck(n)?10:11:Se(28295,{value:n})}function Sr(n,e){if(n===e)return!0;const t=zi(n);if(t!==zi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _l(n).isEqual(_l(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ui(o.timestampValue),h=Ui(l.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Bi(o.bytesValue).isEqual(Bi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ut(o.doubleValue),h=ut(l.doubleValue);return c===h?Pc(c)===Pc(h):isNaN(c)&&isNaN(h)}return!1})(n,e);case 9:return Wo(n.arrayValue.values||[],e.arrayValue.values||[],Sr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},h=l.mapValue.fields||{};if(yv(c)!==yv(h))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(h[p]===void 0||!Sr(c[p],h[p])))return!1;return!0})(n,e);default:return Se(52216,{left:n})}}function El(n,e){return(n.values||[]).find((t=>Sr(t,e)))!==void 0}function qo(n,e){if(n===e)return 0;const t=zi(n),i=zi(e);if(t!==i)return be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const h=ut(l.integerValue||l.doubleValue),p=ut(c.integerValue||c.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1})(n,e);case 3:return _v(n.timestampValue,e.timestampValue);case 4:return _v(_l(n),_l(e));case 5:return Nf(n.stringValue,e.stringValue);case 6:return(function(l,c){const h=Bi(l),p=Bi(c);return h.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const h=l.split("/"),p=c.split("/");for(let y=0;y<h.length&&y<p.length;y++){const w=be(h[y],p[y]);if(w!==0)return w}return be(h.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const h=be(ut(l.latitude),ut(c.latitude));return h!==0?h:be(ut(l.longitude),ut(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return wv(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var h,p,y,w;const T=l.fields||{},S=c.fields||{},N=(h=T[Nc])===null||h===void 0?void 0:h.arrayValue,U=(p=S[Nc])===null||p===void 0?void 0:p.arrayValue,$=be(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((w=U==null?void 0:U.values)===null||w===void 0?void 0:w.length)||0);return $!==0?$:wv(N,U)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===ic.mapValue&&c===ic.mapValue)return 0;if(l===ic.mapValue)return 1;if(c===ic.mapValue)return-1;const h=l.fields||{},p=Object.keys(h),y=c.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const S=Nf(p[T],w[T]);if(S!==0)return S;const N=qo(h[p[T]],y[w[T]]);if(N!==0)return N}return be(p.length,w.length)})(n.mapValue,e.mapValue);default:throw Se(23264,{le:t})}}function _v(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=Ui(n),i=Ui(e),o=be(t.seconds,i.seconds);return o!==0?o:be(t.nanos,i.nanos)}function wv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=qo(t[o],i[o]);if(l)return l}return be(t.length,i.length)}function Ho(n){return bf(n)}function bf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Ui(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return we.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=bf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${bf(t.fields[c])}`;return o+"}"})(n.mapValue):Se(61005,{value:n})}function fc(n){switch(zi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=td(n);return e?16+fc(e):16;case 5:return 2*n.stringValue.length;case 6:return Bi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+fc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Ki(i.fields,((l,c)=>{o+=l.length+fc(c)})),o})(n.mapValue);default:throw Se(13486,{value:n})}}function Ev(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Df(n){return!!n&&"integerValue"in n}function _p(n){return!!n&&"arrayValue"in n}function Tv(n){return!!n&&"nullValue"in n}function Iv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pc(n){return!!n&&"mapValue"in n}function Ck(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yw])===null||t===void 0?void 0:t.stringValue)===Jw}function cl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ki(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=cl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=cl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function kk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ak}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!pc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cl(t)}setAll(e){let t=Mt.emptyPath(),i={},o=[];e.forEach(((c,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=h.popLast()}c?i[h.lastSegment()]=cl(c):o.push(h.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());pc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];pc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ki(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new un(cl(this.value))}}function Xw(n){const e=[];return Ki(n.fields,((t,i)=>{const o=new Mt([t]);if(pc(i)){const l=Xw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,i,o,l,c,h){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=h}static newInvalidDocument(e){return new qt(e,0,ke.min(),ke.min(),ke.min(),un.empty(),0)}static newFoundDocument(e,t,i,o){return new qt(e,1,t,ke.min(),i,o,0)}static newNoDocument(e,t){return new qt(e,2,t,ke.min(),ke.min(),un.empty(),0)}static newUnknownDocument(e,t){return new qt(e,3,t,ke.min(),ke.min(),un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bc{constructor(e,t){this.position=e,this.inclusive=t}}function Sv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=we.comparator(we.fromName(c.referenceValue),t.key):i=qo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Av(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Sr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Dc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zw{}class gt extends Zw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new xk(e,t,i):t==="array-contains"?new Dk(e,i):t==="in"?new Ok(e,i):t==="not-in"?new Vk(e,i):t==="array-contains-any"?new Lk(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Nk(e,i):new bk(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qo(t,this.value)):t!==null&&zi(this.value)===zi(t)&&this.matchesComparison(qo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends Zw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new nr(e,t)}matches(e){return eE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function eE(n){return n.op==="and"}function tE(n){return Pk(n)&&eE(n)}function Pk(n){for(const e of n.filters)if(e instanceof nr)return!1;return!0}function Of(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+Ho(n.value);if(tE(n))return n.filters.map((e=>Of(e))).join(",");{const e=n.filters.map((t=>Of(t))).join(",");return`${n.op}(${e})`}}function nE(n,e){return n instanceof gt?(function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&Sr(i.value,o.value)})(n,e):n instanceof nr?(function(i,o){return o instanceof nr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,h)=>l&&nE(c,o.filters[h])),!0):!1})(n,e):void Se(19439)}function rE(n){return n instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ho(t.value)}`})(n):n instanceof nr?(function(t){return t.op.toString()+" {"+t.getFilters().map(rE).join(" ,")+"}"})(n):"Filter"}class xk extends gt{constructor(e,t,i){super(e,t,i),this.key=we.fromName(i.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class Nk extends gt{constructor(e,t){super(e,"in",t),this.keys=iE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class bk extends gt{constructor(e,t){super(e,"not-in",t),this.keys=iE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function iE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>we.fromName(i.referenceValue)))}class Dk extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _p(t)&&El(t.arrayValue,this.value)}}class Ok extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&El(this.value.arrayValue,t)}}class Vk extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(El(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!El(this.value.arrayValue,t)}}class Lk extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_p(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>El(this.value.arrayValue,i)))}}/**
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
 */class Mk{constructor(e,t=null,i=[],o=[],l=null,c=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=h,this.Pe=null}}function Cv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new Mk(n,e,t,i,o,l,c)}function wp(n){const e=Pe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Of(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),ed(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Ho(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Ho(i))).join(",")),e.Pe=t}return e.Pe}function Ep(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Av(n.startAt,e.startAt)&&Av(n.endAt,e.endAt)}function Vf(n){return we.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t=null,i=[],o=[],l=null,c="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=h,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function jk(n,e,t,i,o,l,c,h){return new Nl(n,e,t,i,o,l,c,h)}function nd(n){return new Nl(n)}function kv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sE(n){return n.collectionGroup!==null}function dl(n){const e=Pe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new It(Mt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(h=h.add(y.field))}))})),h})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Dc(l,i))})),t.has(Mt.keyField().canonicalString())||e.Te.push(new Dc(Mt.keyField(),i))}return e.Te}function wr(n){const e=Pe(n);return e.Ie||(e.Ie=Fk(e,dl(n))),e.Ie}function Fk(n,e){if(n.limitType==="F")return Cv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Dc(o.field,l)}));const t=n.endAt?new bc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new bc(n.startAt.position,n.startAt.inclusive):null;return Cv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Lf(n,e){const t=n.filters.concat([e]);return new Nl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Mf(n,e,t){return new Nl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function rd(n,e){return Ep(wr(n),wr(e))&&n.limitType===e.limitType}function oE(n){return`${wp(wr(n))}|lt:${n.limitType}`}function Vo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>rE(o))).join(", ")}]`),ed(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Ho(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Ho(o))).join(",")),`Target(${i})`})(wr(n))}; limitType=${n.limitType})`}function id(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):we.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of dl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,h,p){const y=Sv(c,h,p);return c.inclusive?y<=0:y<0})(i.startAt,dl(i),o)||i.endAt&&!(function(c,h,p){const y=Sv(c,h,p);return c.inclusive?y>=0:y>0})(i.endAt,dl(i),o))})(n,e)}function Uk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function aE(n){return(e,t)=>{let i=!1;for(const o of dl(n)){const l=Bk(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function Bk(n,e,t){const i=n.field.isKeyField()?we.comparator(e.key,t.key):(function(l,c,h){const p=c.data.field(l),y=h.data.field(l);return p!==null&&y!==null?qo(p,y):Se(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=new it(we.comparator);function Xr(){return zk}const lE=new it(we.comparator);function sl(...n){let e=lE;for(const t of n)e=e.insert(t.key,t);return e}function uE(n){let e=lE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function As(){return hl()}function cE(){return hl()}function hl(){return new Fs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const $k=new it(we.comparator),Wk=new It(we.comparator);function Ve(...n){let e=Wk;for(const t of n)e=e.add(t);return e}const qk=new It(be);function Hk(){return qk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pc(e)?"-0":e}}function dE(n){return{integerValue:""+n}}function Gk(n,e){return wk(e)?dE(e):Tp(n,e)}/**
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
 */class sd{constructor(){this._=void 0}}function Kk(n,e,t){return n instanceof Oc?(function(o,l){const c={fields:{[Gw]:{stringValue:Hw},[Qw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&vp(l)&&(l=td(l)),l&&(c.fields[Kw]=l),{mapValue:c}})(t,e):n instanceof Go?fE(n,e):n instanceof Tl?pE(n,e):(function(o,l){const c=hE(o,l),h=Rv(c)+Rv(o.Ee);return Df(c)&&Df(o.Ee)?dE(h):Tp(o.serializer,h)})(n,e)}function Qk(n,e,t){return n instanceof Go?fE(n,e):n instanceof Tl?pE(n,e):t}function hE(n,e){return n instanceof Vc?(function(i){return Df(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Oc extends sd{}class Go extends sd{constructor(e){super(),this.elements=e}}function fE(n,e){const t=mE(e);for(const i of n.elements)t.some((o=>Sr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Tl extends sd{constructor(e){super(),this.elements=e}}function pE(n,e){let t=mE(e);for(const i of n.elements)t=t.filter((o=>!Sr(o,i)));return{arrayValue:{values:t}}}class Vc extends sd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Rv(n){return ut(n.integerValue||n.doubleValue)}function mE(n){return _p(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,t){this.field=e,this.transform=t}}function Jk(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof Go&&o instanceof Go||i instanceof Tl&&o instanceof Tl?Wo(i.elements,o.elements,Sr):i instanceof Vc&&o instanceof Vc?Sr(i.Ee,o.Ee):i instanceof Oc&&o instanceof Oc})(n.transform,e.transform)}class Xk{constructor(e,t){this.version=e,this.transformResults=t}}class Vn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class od{}function gE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ip(n.key,Vn.none()):new bl(n.key,n.data,Vn.none());{const t=n.data,i=un.empty();let o=new It(Mt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Qi(n.key,i,new wn(o.toArray()),Vn.none())}}function Zk(n,e,t){n instanceof bl?(function(o,l,c){const h=o.value.clone(),p=xv(o.fieldTransforms,l,c.transformResults);h.setAll(p),l.convertToFoundDocument(c.version,h).setHasCommittedMutations()})(n,e,t):n instanceof Qi?(function(o,l,c){if(!mc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const h=xv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(yE(o)),p.setAll(h),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function fl(n,e,t,i){return n instanceof bl?(function(l,c,h,p){if(!mc(l.precondition,c))return h;const y=l.value.clone(),w=Nv(l.fieldTransforms,p,c);return y.setAll(w),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Qi?(function(l,c,h,p){if(!mc(l.precondition,c))return h;const y=Nv(l.fieldTransforms,p,c),w=c.data;return w.setAll(yE(l)),w.setAll(y),c.convertToFoundDocument(c.version,w).setHasLocalMutations(),h===null?null:h.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,c,h){return mc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h})(n,e,t)}function eR(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=hE(i.transform,o||null);l!=null&&(t===null&&(t=un.empty()),t.set(i.field,l))}return t||null}function Pv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Wo(i,o,((l,c)=>Jk(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class bl extends od{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qi extends od{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function yE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function xv(n,e,t){const i=new Map;ze(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,h=e.data.field(l.field);i.set(l.field,Qk(c,h,t[o]))}return i}function Nv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,Kk(l,c,e))}return i}class Ip extends od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tR extends od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&Zk(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=fl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=fl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=cE();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let h=this.applyToLocalView(c,l.mutatedFields);h=t.has(o.key)?null:h;const p=gE(c,h);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(ke.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,((t,i)=>Pv(t,i)))&&Wo(this.baseMutations,e.baseMutations,((t,i)=>Pv(t,i)))}}class Sp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){ze(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return $k})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new Sp(e,t,i,o)}}/**
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
 */class rR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,je;function sR(n){switch(n){case K.OK:return Se(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return Se(15467,{code:n})}}function vE(n){if(n===void 0)return Jr("GRPC error has no .code"),K.UNKNOWN;switch(n){case mt.OK:return K.OK;case mt.CANCELLED:return K.CANCELLED;case mt.UNKNOWN:return K.UNKNOWN;case mt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case mt.INTERNAL:return K.INTERNAL;case mt.UNAVAILABLE:return K.UNAVAILABLE;case mt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case mt.NOT_FOUND:return K.NOT_FOUND;case mt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case mt.ABORTED:return K.ABORTED;case mt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case mt.DATA_LOSS:return K.DATA_LOSS;default:return Se(39323,{code:n})}}(je=mt||(mt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const oR=new Vi([4294967295,4294967295],0);function bv(n){const e=Uw().encode(n),t=new bw;return t.update(e),new Uint8Array(t.digest())}function Dv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Vi([t,i],0),new Vi([o,l],0)]}class Ap{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ol(`Invalid padding: ${t}`);if(i<0)throw new ol(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ol(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ol(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Vi.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Vi.fromNumber(i)));return o.compare(oR)===1&&(o=new Vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=bv(e),[i,o]=Dv(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);if(!this.ye(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Ap(l,o,t);return i.forEach((h=>c.insert(h))),c}insert(e){if(this.fe===0)return;const t=bv(e),[i,o]=Dv(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);this.we(c)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ol extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Dl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ad(ke.min(),o,new it(be),Xr(),Ve())}}class Dl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Dl(i,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class _E{constructor(e,t){this.targetId=e,this.De=t}}class wE{constructor(e,t,i=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Ov{constructor(){this.ve=0,this.Ce=Vv(),this.Fe=jt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),t=Ve(),i=Ve();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Se(38017,{changeType:l})}})),new Dl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Vv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class aR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Xr(),this.je=sc(),this.Je=sc(),this.He=new it(be)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(Vf(l))if(i===0){const c=new we(l.path);this.Xe(t,c,qt.newNoDocument(c,ke.min()))}else ze(i===1,20013,{expectedCount:i});else{const c=this.ot(t);if(c!==i){const h=this._t(e),p=h?this.ut(h,e,c):1;if(p!==0){this.rt(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,h;try{c=Bi(i).toUint8Array()}catch(p){if(p instanceof qw)return ji("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new Ap(c,o,l)}catch(p){return ji(p instanceof ol?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.fe===0?null:h}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.We.lt(),h=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(h)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,c)=>{const h=this.st(c);if(h){if(l.current&&Vf(h.target)){const p=new we(h.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,qt.newNoDocument(p,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}}));let i=Ve();this.Je.forEach(((l,c)=>{let h=!0;c.forEachWhile((p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)})),h&&(i=i.add(l))})),this.ze.forEach(((l,c)=>c.setReadTime(e)));const o=new ad(e,t,this.He,this.ze,i);return this.ze=Xr(),this.je=sc(),this.Je=sc(),this.He=new it(be),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ov,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new It(be),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new It(be),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ov),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function sc(){return new it(we.comparator)}function Vv(){return new it(we.comparator)}const lR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class dR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jf(n,e){return n.useProto3Json||ed(e)?e:{value:e}}function Lc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function hR(n,e){return Lc(n,e.toTimestamp())}function Er(n){return ze(!!n,49232),ke.fromTimestamp((function(t){const i=Ui(t);return new We(i.seconds,i.nanos)})(n))}function Cp(n,e){return Ff(n,e).canonicalString()}function Ff(n,e){const t=(function(o){return new Ye(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function TE(n){const e=Ye.fromString(n);return ze(kE(e),10190,{key:e.toString()}),e}function Uf(n,e){return Cp(n.databaseId,e.path)}function cf(n,e){const t=TE(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new we(SE(t))}function IE(n,e){return Cp(n.databaseId,e)}function fR(n){const e=TE(n);return e.length===4?Ye.emptyPath():SE(e)}function Bf(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function SE(n){return ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Lv(n,e,t){return{name:Uf(n,e),fields:t.value.mapValue.fields}}function pR(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Se(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(ze(w===void 0||typeof w=="string",58123),jt.fromBase64String(w||"")):(ze(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),jt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,h=c&&(function(y){const w=y.code===void 0?K.UNKNOWN:vE(y.code);return new ce(w,y.message||"")})(c);t=new wE(i,o,l,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=cf(n,i.document.name),l=Er(i.document.updateTime),c=i.document.createTime?Er(i.document.createTime):ke.min(),h=new un({mapValue:{fields:i.document.fields}}),p=qt.newFoundDocument(o,l,c,h),y=i.targetIds||[],w=i.removedTargetIds||[];t=new gc(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=cf(n,i.document),l=i.readTime?Er(i.readTime):ke.min(),c=qt.newNoDocument(o,l),h=i.removedTargetIds||[];t=new gc([],h,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=cf(n,i.document),l=i.removedTargetIds||[];t=new gc([],l,o,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new iR(o,l),h=i.targetId;t=new _E(h,c)}}return t}function mR(n,e){let t;if(e instanceof bl)t={update:Lv(n,e.key,e.value)};else if(e instanceof Ip)t={delete:Uf(n,e.key)};else if(e instanceof Qi)t={update:Lv(n,e.key,e.data),updateMask:SR(e.fieldMask)};else{if(!(e instanceof tR))return Se(16599,{Rt:e.type});t={verify:Uf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const h=c.transform;if(h instanceof Oc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Go)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Tl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Vc)return{fieldPath:c.field.canonicalString(),increment:h.Ee};throw Se(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:hR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se(27497)})(n,e.precondition)),t}function gR(n,e){return n&&n.length>0?(ze(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?Er(o.updateTime):Er(l);return c.isEqual(ke.min())&&(c=Er(l)),new Xk(c,o.transformResults||[])})(t,e)))):[]}function yR(n,e){return{documents:[IE(n,e.path)]}}function vR(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=IE(n,o);const l=(function(y){if(y.length!==0)return CE(nr.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((w=>(function(S){return{field:Lo(S.field),direction:ER(S.dir)}})(w)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const h=jf(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function _R(n){let e=fR(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ze(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const S=AE(T);return S instanceof nr&&tE(S)?S.getFilters():[S]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((S=>(function(U){return new Dc(Mo(U.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(S)))})(t.orderBy));let h=null;t.limit&&(h=(function(T){let S;return S=typeof T=="object"?T.value:T,ed(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(T){const S=!!T.before,N=T.values||[];return new bc(N,S)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const S=!T.before,N=T.values||[];return new bc(N,S)})(t.endAt)),jk(e,o,c,l,h,"F",p,y)}function wR(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function AE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Mo(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Mo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Mo(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Mo(t.unaryFilter.field);return gt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}})(n):n.fieldFilter!==void 0?(function(t){return gt.create(Mo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return nr.create(t.compositeFilter.filters.map((i=>AE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se(1026)}})(t.compositeFilter.op))})(n):Se(30097,{filter:n})}function ER(n){return lR[n]}function TR(n){return uR[n]}function IR(n){return cR[n]}function Lo(n){return{fieldPath:n.canonicalString()}}function Mo(n){return Mt.fromServerFormat(n.fieldPath)}function CE(n){return n instanceof gt?(function(t){if(t.op==="=="){if(Iv(t.value))return{unaryFilter:{field:Lo(t.field),op:"IS_NAN"}};if(Tv(t.value))return{unaryFilter:{field:Lo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Iv(t.value))return{unaryFilter:{field:Lo(t.field),op:"IS_NOT_NAN"}};if(Tv(t.value))return{unaryFilter:{field:Lo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lo(t.field),op:TR(t.op),value:t.value}}})(n):n instanceof nr?(function(t){const i=t.getFilters().map((o=>CE(o)));return i.length===1?i[0]:{compositeFilter:{op:IR(t.op),filters:i}}})(n):Se(54877,{filter:n})}function SR(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function kE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t,i,o,l=ke.min(),c=ke.min(),h=jt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(e){return new bi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.gt=e}}function CR(n){const e=_R({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mf(e,e.limit,"L"):e}/**
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
 */class kR{constructor(){this.Dn=new RR}addToCollectionParentIndex(e,t){return this.Dn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Fi.min())}updateCollectionGroup(e,t,i){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class RR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new It(Ye.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new It(Ye.comparator)).toArray()}}/**
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
 */const Mv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},RE=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(RE,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ko(0)}static ur(){return new Ko(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="LruGarbageCollector",PR=1048576;function Fv([n,e],[t,i]){const o=be(n,t);return o===0?be(e,i):o}class xR{constructor(e){this.Tr=e,this.buffer=new It(Fv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Fv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class NR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){fe(jv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ia(t)?fe(jv,"Ignoring IndexedDB error during garbage collection: ",t):await ra(t)}await this.Rr(3e5)}))}}class bR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Zc.ue);const i=new xR(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(Mv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mv):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,c,h,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,h=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),Oo()<=Oe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-w}ms
	Determined least recently used ${o} in `+(h-c)+`ms
	Removed ${l} targets in `+(p-h)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function DR(n,e){return new bR(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.changes=new Fs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&fl(i.mutation,o,wn.empty(),We.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ve()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ve()){const o=As();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=sl();return l.forEach(((h,p)=>{c=c.insert(h,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=As();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ve())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,h)=>{t.set(c,h)}))}))}computeViews(e,t,i,o){let l=Xr();const c=hl(),h=(function(){return hl()})();return t.forEach(((p,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Qi)?l=l.insert(y.key,y):w!==void 0?(c.set(y.key,w.mutation.getFieldMask()),fl(w.mutation,y,w.mutation.getFieldMask(),We.now())):c.set(y.key,wn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,w)=>c.set(y,w))),t.forEach(((y,w)=>{var T;return h.set(y,new VR(w,(T=c.get(y))!==null&&T!==void 0?T:null))})),h)))}recalculateAndSaveOverlays(e,t){const i=hl();let o=new it(((c,h)=>c-h)),l=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const h of c)h.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let w=i.get(p)||wn.empty();w=h.applyToLocalView(y,w),i.set(p,w);const T=(o.get(h.batchId)||Ve()).add(p);o=o.insert(h.batchId,T)}))})).next((()=>{const c=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),y=p.key,w=p.value,T=cE();w.forEach((S=>{if(!l.has(S)){const N=gE(t.get(S),i.get(S));N!==null&&T.set(S,N),l=l.add(S)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return Q.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return we.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Q.resolve(As());let h=vl,p=l;return c.next((y=>Q.forEach(y,((w,T)=>(h<T.largestBatchId&&(h=T.largestBatchId),l.get(w)?Q.resolve():this.remoteDocumentCache.getEntry(e,w).next((S=>{p=p.insert(w,S)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,Ve()))).next((w=>({batchId:h,changes:uE(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next((i=>{let o=sl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=sl();return this.indexManager.getCollectionParents(e,l).next((h=>Q.forEach(h,(p=>{const y=(function(T,S){return new Nl(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((T,S)=>{c=c.insert(T,S)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,y)=>{const w=y.getKey();c.get(w)===null&&(c=c.insert(w,qt.newInvalidDocument(w)))}));let h=sl();return c.forEach(((p,y)=>{const w=l.get(p);w!==void 0&&fl(w.mutation,y,wn.empty(),We.now()),id(t,y)&&(h=h.insert(p,y))})),h}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Er(o.createTime)}})(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:CR(o.bundledQuery),readTime:Er(o.readTime)}})(t)),Q.resolve()}}/**
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
 */class jR{constructor(){this.overlays=new it(we.comparator),this.kr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=As();return Q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),Q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),Q.resolve()}getOverlaysForCollection(e,t,i){const o=As(),l=t.length+1,c=new we(t.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const p=h.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new it(((y,w)=>y-w));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=As(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const h=As(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,w)=>h.set(y,w))),!(h.size()>=o)););return Q.resolve(h)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new rR(t,i));let l=this.kr.get(t);l===void 0&&(l=Ve(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class FR{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.qr=new It(Pt.Qr),this.$r=new It(Pt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Pt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Pt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new we(new Ye([])),i=new Pt(t,e),o=new Pt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new we(new Ye([])),i=new Pt(t,e),o=new Pt(t,e+1);let l=Ve();return this.$r.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Pt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Pt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return we.comparator(e.key,t.key)||be(e.Hr,t.Hr)}static Ur(e,t){return be(e.Hr,t.Hr)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new It(Pt.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new nR(l,t,i,o);this.mutationQueue.push(c);for(const h of o)this.Yr=this.Yr.add(new Pt(h.key,l)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Q.resolve(c)}lookupMutationBatch(e,t){return Q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?yp:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Pt(t,0),o=new Pt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(c=>{const h=this.Zr(c.Hr);l.push(h)})),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new It(be);return t.forEach((o=>{const l=new Pt(o,0),c=new Pt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],(h=>{i=i.add(h.Hr)}))})),Q.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;we.isDocumentKey(l)||(l=l.child(""));const c=new Pt(new we(l),0);let h=new It(be);return this.Yr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(h=h.add(p.Hr)),!0)}),c),Q.resolve(this.ei(h))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return Q.forEach(t.mutations,(o=>{const l=new Pt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Pt(t,0),o=this.Yr.firstAfterOrEqual(i);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.ni=e,this.docs=(function(){return new it(we.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Q.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(t))}getEntries(e,t){let i=Xr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():qt.newInvalidDocument(o))})),Q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Xr();const c=t.path,h=new we(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||gk(mk(w),i)<=0||(o.has(w.key)||id(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Se(9500)}ri(e,t){return Q.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new zR(this)}getSize(e){return Q.resolve(this.size)}}class zR extends OR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),Q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.persistence=e,this.ii=new Fs((t=>wp(t)),Ep),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.si=0,this.oi=new kp,this.targetCount=0,this._i=Ko.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),Q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ko(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.hr(t),Q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((c,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)})),Q.waitFor(l).next((()=>o))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return Q.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),Q.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return Q.resolve(i)}containsKey(e,t){return Q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t){this.ai={},this.overlays={},this.ui=new Zc(0),this.ci=!1,this.ci=!0,this.li=new FR,this.referenceDelegate=e(this),this.hi=new $R(this),this.indexManager=new kR,this.remoteDocumentCache=(function(o){return new BR(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new AR(t),this.Ti=new MR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new UR(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){fe("MemoryPersistence","Starting transaction:",e);const o=new WR(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return Q.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class WR extends vk{constructor(e){super(),this.currentSequenceNumber=e}}class Rp{constructor(e){this.persistence=e,this.Ai=new kp,this.Ri=null}static Vi(e){return new Rp(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),Q.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,(i=>{const o=we.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,ke.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Q.or([()=>Q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Mc{constructor(e,t){this.persistence=e,this.gi=new Fs((i=>Ek(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=DR(this,t)}static Vi(e,t){return new Mc(e,t)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return Q.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?Q.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(c=>this.Sr(e,c,t).next((h=>{h||(i++,l.removeEntry(c,ke.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fc(e.data.value)),t}Sr(e,t,i){return Q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return Q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ve(),o=Ve();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Pp(e,t.fromCache,i,o)}}/**
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
 */class qR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class HR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return _S()?8:_k(Ht())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new qR;return this.ws(e,t,c).next((h=>{if(l.result=h,this.Rs)return this.Ss(e,t,c,h.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Oo()<=Oe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(Oo()<=Oe.DEBUG&&fe("QueryEngine","Query:",Vo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Oo()<=Oe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wr(t))):Q.resolve())}ps(e,t){if(kv(t))return Q.resolve(null);let i=wr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Mf(t,null,"F"),i=wr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Ve(...l);return this.gs.getDocuments(e,c).next((h=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.bs(t,h);return this.Ds(t,y,c,p.readTime)?this.ps(e,Mf(t,null,"F")):this.vs(e,y,t,p)}))))})))))}ys(e,t,i,o){return kv(t)||o.isEqual(ke.min())?Q.resolve(null):this.gs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ds(t,c,i,o)?Q.resolve(null):(Oo()<=Oe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Vo(t)),this.vs(e,c,t,pk(o,vl)).next((h=>h)))}))}bs(e,t){let i=new It(aE(e));return t.forEach(((o,l)=>{id(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Oo()<=Oe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Vo(t)),this.gs.getDocumentsMatchingQuery(e,t,Fi.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="LocalStore",GR=3e8;class KR{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new it(be),this.Ms=new Fs((l=>wp(l)),Ep),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function QR(n,e,t,i){return new KR(n,e,t,i)}async function xE(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],h=[];let p=Ve();for(const y of o){c.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){h.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Bs:y,removedBatchIds:c,addedBatchIds:h})))}))}))}function YR(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(h,p,y,w){const T=y.batch,S=T.keys();let N=Q.resolve();return S.forEach((U=>{N=N.next((()=>w.getEntry(p,U))).next(($=>{const M=y.docVersions.get(U);ze(M!==null,48541),$.version.compareTo(M)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),w.addEntry($)))}))})),N.next((()=>h.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(h){let p=Ve();for(let y=0;y<h.mutationResults.length;++y)h.mutationResults[y].transformResults.length>0&&(p=p.add(h.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function NE(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function JR(n,e){const t=Pe(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const h=[];e.targetChanges.forEach(((w,T)=>{const S=o.get(T);if(!S)return;h.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let N=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(jt.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):w.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(w.resumeToken,i)),o=o.insert(T,N),(function($,M,ne){return $.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=GR?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0})(S,N,w)&&h.push(t.hi.updateTargetData(l,N))}));let p=Xr(),y=Ve();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),h.push(XR(l,c,e.documentUpdates).next((w=>{p=w.Ls,y=w.ks}))),!i.isEqual(ke.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));h.push(w)}return Q.waitFor(h).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.Fs=o,l)))}function XR(n,e,t){let i=Ve(),o=Ve();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=Xr();return t.forEach(((h,p)=>{const y=l.get(h);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(ke.min())?(e.removeEntry(h,p.readTime),c=c.insert(h,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(h,p)):fe(xp,"Ignoring outdated watch update for ",h,". Current version:",y.version," Watch version:",p.version)})),{Ls:c,ks:o}}))}function ZR(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=yp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function eP(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,Q.resolve(o)):t.hi.allocateTargetId(i).next((c=>(o=new bi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function zf(n,e,t){const i=Pe(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!ia(c))throw c;fe(xp,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Uv(n,e,t){const i=Pe(n);let o=ke.min(),l=Ve();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,w){const T=Pe(p),S=T.Ms.get(w);return S!==void 0?Q.resolve(T.Fs.get(S)):T.hi.getTargetData(y,w)})(i,c,wr(e)).next((h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,h.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:ke.min(),t?l:Ve()))).next((h=>(tP(i,Uk(e),h),{documents:h,qs:l})))))}function tP(n,e,t){let i=n.xs.get(e)||ke.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class Bv{constructor(){this.activeTargetIds=Hk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nP{constructor(){this.Fo=new Bv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Bv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rP{xo(e){}shutdown(){}}/**
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
 */const zv="ConnectivityMonitor";class $v{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){fe(zv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){fe(zv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oc=null;function $f(){return oc===null?oc=(function(){return 268435456+Math.round(2147483648*Math.random())})():oc++,"0x"+oc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="RestConnection",iP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===xc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=$f(),h=this.Go(e,t.toUriEncodedString());fe(df,`Sending RPC '${e}' ${c}:`,h,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,l);const{host:y}=new URL(h),w=Vs(y);return this.jo(e,h,p,i,w).then((T=>(fe(df,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw ji(df,`RPC '${e}' ${c} failed with error: `,T,"url: ",h,"request:",i),T}))}Jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+na})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=iP[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class aP extends sP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const c=$f();return new Promise(((h,p)=>{const y=new Dw;y.setWithCredentials(!0),y.listenOnce(Ow.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case hc.NO_ERROR:const T=y.getResponseJson();fe($t,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),h(T);break;case hc.TIMEOUT:fe($t,`RPC '${e}' ${c} timed out`),p(new ce(K.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const S=y.getStatus();if(fe($t,`RPC '${e}' ${c} failed with status:`,S,"response text:",y.getResponseText()),S>0){let N=y.getResponseJson();Array.isArray(N)&&(N=N[0]);const U=N==null?void 0:N.error;if(U&&U.status&&U.message){const $=(function(ne){const se=ne.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(se)>=0?se:K.UNKNOWN})(U.status);p(new ce($,U.message))}else p(new ce(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ce(K.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:c,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{fe($t,`RPC '${e}' ${c} completed.`)}}));const w=JSON.stringify(o);fe($t,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",w,i,15)}))}P_(e,t,i){const o=$f(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Mw(),h=Lw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const w=l.join("");fe($t,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=c.createWebChannel(w,p);this.T_(T);let S=!1,N=!1;const U=new oP({Ho:M=>{N?fe($t,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(S||(fe($t,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),fe($t,`RPC '${e}' stream ${o} sending:`,M),T.send(M))},Yo:()=>T.close()}),$=(M,ne,se)=>{M.listen(ne,(Z=>{try{se(Z)}catch(le){setTimeout((()=>{throw le}),0)}}))};return $(T,il.EventType.OPEN,(()=>{N||(fe($t,`RPC '${e}' stream ${o} transport opened.`),U.s_())})),$(T,il.EventType.CLOSE,(()=>{N||(N=!0,fe($t,`RPC '${e}' stream ${o} transport closed`),U.__(),this.I_(T))})),$(T,il.EventType.ERROR,(M=>{N||(N=!0,ji($t,`RPC '${e}' stream ${o} transport errored. Name:`,M.name,"Message:",M.message),U.__(new ce(K.UNAVAILABLE,"The operation could not be completed")))})),$(T,il.EventType.MESSAGE,(M=>{var ne;if(!N){const se=M.data[0];ze(!!se,16349);const Z=se,le=(Z==null?void 0:Z.error)||((ne=Z[0])===null||ne===void 0?void 0:ne.error);if(le){fe($t,`RPC '${e}' stream ${o} received error:`,le);const Ce=le.status;let Re=(function(R){const P=mt[R];if(P!==void 0)return vE(P)})(Ce),b=le.message;Re===void 0&&(Re=K.INTERNAL,b="Unknown error status: "+Ce+" with message "+le.message),N=!0,U.__(new ce(Re,b)),T.close()}else fe($t,`RPC '${e}' stream ${o} received:`,se),U.a_(se)}})),$(h,Vw.STAT_EVENT,(M=>{M.stat===xf.PROXY?fe($t,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===xf.NOPROXY&&fe($t,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{U.o_()}),0),U}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function hf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n){return new dR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="PersistentStream";class DE{constructor(e,t,i,o,l,c,h,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new bE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Jr(t.toString()),Jr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new ce(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return fe(Wv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(fe(Wv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lP extends DE{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=pR(this.serializer,e),i=(function(l){if(!("targetChange"in l))return ke.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ke.min():c.readTime?Er(c.readTime):ke.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Bf(this.serializer),t.addTarget=(function(l,c){let h;const p=c.target;if(h=Vf(p)?{documents:yR(l,p)}:{query:vR(l,p).Vt},h.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){h.resumeToken=EE(l,c.resumeToken);const y=jf(l,c.expectedCount);y!==null&&(h.expectedCount=y)}else if(c.snapshotVersion.compareTo(ke.min())>0){h.readTime=Lc(l,c.snapshotVersion.toTimestamp());const y=jf(l,c.expectedCount);y!==null&&(h.expectedCount=y)}return h})(this.serializer,e);const i=wR(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Bf(this.serializer),t.removeTarget=e,this.k_(t)}}class uP extends DE{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=gR(e.writeResults,e.commitTime),i=Er(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Bf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>mR(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{}class dP extends cP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ce(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,Ff(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(K.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,h])=>this.connection.Jo(e,Ff(t,i),o,c,h,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ce(K.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class hP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Jr(t),this._a=!1):fe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="RemoteStore";class fP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((c=>{i.enqueueAndForget((async()=>{Us(this)&&(fe(bs,"Restarting streams for network reachability change."),await(async function(p){const y=Pe(p);y.Ia.add(4),await Ol(y),y.Aa.set("Unknown"),y.Ia.delete(4),await ud(y)})(this))}))})),this.Aa=new hP(i,o)}}async function ud(n){if(Us(n))for(const e of n.da)await e(!0)}async function Ol(n){for(const e of n.da)await e(!1)}function OE(n,e){const t=Pe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Op(t)?Dp(t):sa(t).x_()&&bp(t,e))}function Np(n,e){const t=Pe(n),i=sa(t);t.Ta.delete(e),i.x_()&&VE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Us(t)&&t.Aa.set("Unknown"))}function bp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sa(n).H_(e)}function VE(n,e){n.Ra.$e(e),sa(n).Y_(e)}function Dp(n){n.Ra=new aR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),sa(n).start(),n.Aa.aa()}function Op(n){return Us(n)&&!sa(n).M_()&&n.Ta.size>0}function Us(n){return Pe(n).Ia.size===0}function LE(n){n.Ra=void 0}async function pP(n){n.Aa.set("Online")}async function mP(n){n.Ta.forEach(((e,t)=>{bp(n,e)}))}async function gP(n,e){LE(n),Op(n)?(n.Aa.la(e),Dp(n)):n.Aa.set("Unknown")}async function yP(n,e,t){if(n.Aa.set("Online"),e instanceof wE&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const h of l.targetIds)o.Ta.has(h)&&(await o.remoteSyncer.rejectListen(h,c),o.Ta.delete(h),o.Ra.removeTarget(h))})(n,e)}catch(i){fe(bs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await jc(n,i)}else if(e instanceof gc?n.Ra.Ye(e):e instanceof _E?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ke.min()))try{const i=await NE(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const h=l.Ra.Pt(c);return h.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.Ta.get(y);w&&l.Ta.set(y,w.withResumeToken(p.resumeToken,c))}})),h.targetMismatches.forEach(((p,y)=>{const w=l.Ta.get(p);if(!w)return;l.Ta.set(p,w.withResumeToken(jt.EMPTY_BYTE_STRING,w.snapshotVersion)),VE(l,p);const T=new bi(w.target,p,y,w.sequenceNumber);bp(l,T)})),l.remoteSyncer.applyRemoteEvent(h)})(n,t)}catch(i){fe(bs,"Failed to raise snapshot:",i),await jc(n,i)}}async function jc(n,e,t){if(!ia(e))throw e;n.Ia.add(1),await Ol(n),n.Aa.set("Offline"),t||(t=()=>NE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{fe(bs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ud(n)}))}function ME(n,e){return e().catch((t=>jc(n,t,e)))}async function cd(n){const e=Pe(n),t=$i(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:yp;for(;vP(e);)try{const o=await ZR(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,_P(e,o)}catch(o){await jc(e,o)}jE(e)&&FE(e)}function vP(n){return Us(n)&&n.Pa.length<10}function _P(n,e){n.Pa.push(e);const t=$i(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function jE(n){return Us(n)&&!$i(n).M_()&&n.Pa.length>0}function FE(n){$i(n).start()}async function wP(n){$i(n).na()}async function EP(n){const e=$i(n);for(const t of n.Pa)e.X_(t.mutations)}async function TP(n,e,t){const i=n.Pa.shift(),o=Sp.from(i,e,t);await ME(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await cd(n)}async function IP(n,e){e&&$i(n).Z_&&await(async function(i,o){if((function(c){return sR(c)&&c!==K.ABORTED})(o.code)){const l=i.Pa.shift();$i(i).N_(),await ME(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await cd(i)}})(n,e),jE(n)&&FE(n)}async function qv(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),fe(bs,"RemoteStore received new credentials");const i=Us(t);t.Ia.add(3),await Ol(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ud(t)}async function SP(n,e){const t=Pe(n);e?(t.Ia.delete(2),await ud(t)):e||(t.Ia.add(2),await Ol(t),t.Aa.set("Unknown"))}function sa(n){return n.Va||(n.Va=(function(t,i,o){const l=Pe(t);return l.ia(),new lP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:pP.bind(null,n),e_:mP.bind(null,n),n_:gP.bind(null,n),J_:yP.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Op(n)?Dp(n):n.Aa.set("Unknown")):(await n.Va.stop(),LE(n))}))),n.Va}function $i(n){return n.ma||(n.ma=(function(t,i,o){const l=Pe(t);return l.ia(),new uP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:wP.bind(null,n),n_:IP.bind(null,n),ea:EP.bind(null,n),ta:TP.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await cd(n)):(await n.ma.stop(),n.Pa.length>0&&(fe(bs,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,h=new Vp(e,t,c,o,l);return h.start(i),h}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lp(n,e){if(Jr("AsyncQueue",`${e}: ${n}`),ia(n))return new ce(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{static emptySet(e){return new zo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||we.comparator(t.key,i.key):(t,i)=>we.comparator(t.key,i.key),this.keyedMap=sl(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new zo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.fa=new it(we.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Se(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Qo{constructor(e,t,i,o,l,c,h,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((h=>{c.push({type:0,doc:h})})),new Qo(e,t,zo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class CP{constructor(){this.queries=Gv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Pe(t),l=o.queries;o.queries=Gv(),l.forEach(((c,h)=>{for(const p of h.wa)p.onError(i)}))})(this,new ce(K.ABORTED,"Firestore shutting down"))}}function Gv(){return new Fs((n=>oE(n)),rd)}async function Mp(n,e){const t=Pe(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new AP,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const h=Lp(c,`Initialization of query '${Vo(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Fp(t)}async function jp(n,e){const t=Pe(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function kP(n,e){const t=Pe(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const h of c.wa)h.Ca(o)&&(i=!0);c.ya=o}}i&&Fp(t)}function RP(n,e,t){const i=Pe(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Fp(n){n.Da.forEach((e=>{e.next()}))}var Wf,Kv;(Kv=Wf||(Wf={})).Fa="default",Kv.Cache="cache";class Up{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Qo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Wf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class PP{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=aE(e),this.eu=new zo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new Hv,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const S=o.get(w),N=id(this.query,T)?T:null,U=!!S&&this.mutatedKeys.has(S.key),$=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let M=!1;S&&N?S.data.isEqual(N.data)?U!==$&&(i.track({type:3,doc:N}),M=!0):this.iu(S,N)||(i.track({type:2,doc:N}),M=!0,(p&&this.Xa(N,p)>0||y&&this.Xa(N,y)<0)&&(h=!0)):!S&&N?(i.track({type:0,doc:N}),M=!0):S&&!N&&(i.track({type:1,doc:S}),M=!0,(p||y)&&(h=!0)),M&&(N?(c=c.add(N),l=$?l.add(w):l.delete(w)):(c=c.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const w=this.query.limitType==="F"?c.last():c.first();c=c.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{eu:c,ru:i,Ds:h,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((w,T)=>(function(N,U){const $=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:M})}};return $(N)-$(U)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(i),o=o!=null&&o;const h=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,c.length!==0||y?{snapshot:new Qo(this.query,e.eu,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:h}:{_u:h}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Hv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new BE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new UE(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ve();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Qo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Bp="SyncEngine";class xP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class NP{constructor(e){this.key=e,this.lu=!1}}class bP{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Fs((h=>oE(h)),rd),this.Tu=new Map,this.Iu=new Set,this.du=new it(we.comparator),this.Eu=new Map,this.Au=new kp,this.Ru={},this.Vu=new Map,this.mu=Ko.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function DP(n,e,t=!0){const i=GE(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await zE(i,e,t,!0),o}async function OP(n,e){const t=GE(n);await zE(t,e,!0,!1)}async function zE(n,e,t,i){const o=await eP(n.localStore,wr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let h;return i&&(h=await VP(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&OE(n.remoteStore,o),h}async function VP(n,e,t,i,o){n.gu=(T,S,N)=>(async function($,M,ne,se){let Z=M.view.nu(ne);Z.Ds&&(Z=await Uv($.localStore,M.query,!1).then((({documents:b})=>M.view.nu(b,Z))));const le=se&&se.targetChanges.get(M.targetId),Ce=se&&se.targetMismatches.get(M.targetId)!=null,Re=M.view.applyChanges(Z,$.isPrimaryClient,le,Ce);return Yv($,M.targetId,Re._u),Re.snapshot})(n,T,S,N);const l=await Uv(n.localStore,e,!0),c=new PP(e,l.qs),h=c.nu(l.documents),p=Dl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(h,n.isPrimaryClient,p);Yv(n,t,y._u);const w=new xP(e,t,c);return n.Pu.set(e,w),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function LP(n,e,t){const i=Pe(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((c=>!rd(c,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await zf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Np(i.remoteStore,o.targetId),qf(i,o.targetId)})).catch(ra)):(qf(i,o.targetId),await zf(i.localStore,o.targetId,!0))}async function MP(n,e){const t=Pe(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Np(t.remoteStore,i.targetId))}async function jP(n,e,t){const i=qP(n);try{const o=await(function(c,h){const p=Pe(c),y=We.now(),w=h.reduce(((N,U)=>N.add(U.key)),Ve());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(N=>{let U=Xr(),$=Ve();return p.Os.getEntries(N,w).next((M=>{U=M,U.forEach(((ne,se)=>{se.isValidDocument()||($=$.add(ne))}))})).next((()=>p.localDocuments.getOverlayedDocuments(N,U))).next((M=>{T=M;const ne=[];for(const se of h){const Z=eR(se,T.get(se.key).overlayedDocument);Z!=null&&ne.push(new Qi(se.key,Z,Xw(Z.value.mapValue),Vn.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,ne,h)})).next((M=>{S=M;const ne=M.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(N,M.batchId,ne)}))})).then((()=>({batchId:S.batchId,changes:uE(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,h,p){let y=c.Ru[c.currentUser.toKey()];y||(y=new it(be)),y=y.insert(h,p),c.Ru[c.currentUser.toKey()]=y})(i,o.batchId,t),await Vl(i,o.changes),await cd(i.remoteStore)}catch(o){const l=Lp(o,"Failed to persist write");t.reject(l)}}async function $E(n,e){const t=Pe(n);try{const i=await JR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Eu.get(l);c&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.lu=!0:o.modifiedDocuments.size>0?ze(c.lu,14607):o.removedDocuments.size>0&&(ze(c.lu,42227),c.lu=!1))})),await Vl(t,i,e)}catch(i){await ra(i)}}function Qv(n,e,t){const i=Pe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,c)=>{const h=c.view.va(e);h.snapshot&&o.push(h.snapshot)})),(function(c,h){const p=Pe(c);p.onlineState=h;let y=!1;p.queries.forEach(((w,T)=>{for(const S of T.wa)S.va(h)&&(y=!0)})),y&&Fp(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function FP(n,e,t){const i=Pe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let c=new it(we.comparator);c=c.insert(l,qt.newNoDocument(l,ke.min()));const h=Ve().add(l),p=new ad(ke.min(),new Map,new it(be),c,h);await $E(i,p),i.du=i.du.remove(l),i.Eu.delete(e),zp(i)}else await zf(i.localStore,e,!1).then((()=>qf(i,e,t))).catch(ra)}async function UP(n,e){const t=Pe(n),i=e.batch.batchId;try{const o=await YR(t.localStore,e);qE(t,i,null),WE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Vl(t,o)}catch(o){await ra(o)}}async function BP(n,e,t){const i=Pe(n);try{const o=await(function(c,h){const p=Pe(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return p.mutationQueue.lookupMutationBatch(y,h).next((T=>(ze(T!==null,37113),w=T.keys(),p.mutationQueue.removeMutationBatch(y,T)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,h))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>p.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);qE(i,e,t),WE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Vl(i,o)}catch(o){await ra(o)}}function WE(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function qE(n,e,t){const i=Pe(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function qf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||HE(n,i)}))}function HE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Np(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),zp(n))}function Yv(n,e,t){for(const i of t)i instanceof UE?(n.Au.addReference(i.key,e),zP(n,i)):i instanceof BE?(fe(Bp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||HE(n,i.key)):Se(19791,{yu:i})}function zP(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(fe(Bp,"New document in limbo: "+t),n.Iu.add(i),zp(n))}function zp(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new we(Ye.fromString(e)),i=n.mu.next();n.Eu.set(i,new NP(t)),n.du=n.du.insert(t,i),OE(n.remoteStore,new bi(wr(nd(t.path)),i,"TargetPurposeLimboResolution",Zc.ue))}}async function Vl(n,e,t){const i=Pe(n),o=[],l=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach(((h,p)=>{c.push(i.gu(p,e,t).then((y=>{var w;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Pp.Es(p.targetId,y);l.push(T)}})))})),await Promise.all(c),i.hu.J_(o),await(async function(p,y){const w=Pe(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>Q.forEach(y,(S=>Q.forEach(S.Is,(N=>w.persistence.referenceDelegate.addReference(T,S.targetId,N))).next((()=>Q.forEach(S.ds,(N=>w.persistence.referenceDelegate.removeReference(T,S.targetId,N)))))))))}catch(T){if(!ia(T))throw T;fe(xp,"Failed to update sequence numbers: "+T)}for(const T of y){const S=T.targetId;if(!T.fromCache){const N=w.Fs.get(S),U=N.snapshotVersion,$=N.withLastLimboFreeSnapshotVersion(U);w.Fs=w.Fs.insert(S,$)}}})(i.localStore,l))}async function $P(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){fe(Bp,"User change. New user:",e.toKey());const i=await xE(t.localStore,e);t.currentUser=e,(function(l,c){l.Vu.forEach((h=>{h.forEach((p=>{p.reject(new ce(K.CANCELLED,c))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Vl(t,i.Bs)}}function WP(n,e){const t=Pe(n),i=t.Eu.get(e);if(i&&i.lu)return Ve().add(i.key);{let o=Ve();const l=t.Tu.get(e);if(!l)return o;for(const c of l){const h=t.Pu.get(c);o=o.unionWith(h.view.tu)}return o}}function GE(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$E.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FP.bind(null,e),e.hu.J_=kP.bind(null,e.eventManager),e.hu.pu=RP.bind(null,e.eventManager),e}function qP(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BP.bind(null,e),e}class Fc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ld(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return QR(this.persistence,new HR,e.initialUser,this.serializer)}Du(e){return new PE(Rp.Vi,this.serializer)}bu(e){return new nP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fc.provider={build:()=>new Fc};class HP extends Fc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ze(this.persistence.referenceDelegate instanceof Mc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new NR(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new PE((i=>Mc.Vi(i,t)),this.serializer)}}class Hf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Qv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=$P.bind(null,this.syncEngine),await SP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new CP})()}createDatastore(e){const t=ld(e.databaseInfo.databaseId),i=(function(l){return new aP(l)})(e.databaseInfo);return(function(l,c,h,p){return new dP(l,c,h,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,h){return new fP(i,o,l,c,h)})(this.localStore,this.datastore,e.asyncQueue,(t=>Qv(this.syncEngine,t,0)),(function(){return $v.C()?new $v:new rP})())}createSyncEngine(e,t){return(function(o,l,c,h,p,y,w){const T=new bP(o,l,c,h,p,y);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Pe(o);fe(bs,"RemoteStore shutting down."),l.Ia.add(5),await Ol(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Hf.provider={build:()=>new Hf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $p{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Jr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="FirestoreClient";class GP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Wt.UNAUTHENTICATED,this.clientId=gp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{fe(Wi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(fe(Wi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Lp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function ff(n,e){n.asyncQueue.verifyOperationInProgress(),fe(Wi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await xE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{ji("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{fe("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{ji("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function Jv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await KP(n);fe(Wi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>qv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>qv(e.remoteStore,o))),n._onlineComponents=e}async function KP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe(Wi,"Using user provided OfflineComponentProvider");try{await ff(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ji("Error using user provided cache. Falling back to memory cache: "+t),await ff(n,new Fc)}}else fe(Wi,"Using default OfflineComponentProvider"),await ff(n,new HP(void 0));return n._offlineComponents}async function KE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe(Wi,"Using user provided OnlineComponentProvider"),await Jv(n,n._uninitializedComponentsProvider._online)):(fe(Wi,"Using default OnlineComponentProvider"),await Jv(n,new Hf))),n._onlineComponents}function QP(n){return KE(n).then((e=>e.syncEngine))}async function Uc(n){const e=await KE(n),t=e.eventManager;return t.onListen=DP.bind(null,e.syncEngine),t.onUnlisten=LP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=OP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=MP.bind(null,e.syncEngine),t}function YP(n,e,t={}){const i=new Kr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,h,p,y){const w=new $p({next:S=>{w.Ou(),c.enqueueAndForget((()=>jp(l,T)));const N=S.docs.has(h);!N&&S.fromCache?y.reject(new ce(K.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&S.fromCache&&p&&p.source==="server"?y.reject(new ce(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new Up(nd(h.path),w,{includeMetadataChanges:!0,ka:!0});return Mp(l,T)})(await Uc(n),n.asyncQueue,e,t,i))),i.promise}function JP(n,e,t={}){const i=new Kr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,h,p,y){const w=new $p({next:S=>{w.Ou(),c.enqueueAndForget((()=>jp(l,T))),S.fromCache&&p.source==="server"?y.reject(new ce(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),T=new Up(h,w,{includeMetadataChanges:!0,ka:!0});return Mp(l,T)})(await Uc(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function QE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firestore.googleapis.com",Zv=!0;class e_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YE,this.ssl=Zv}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Zv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=RE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<PR)throw new ce(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dd{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new e_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new e_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new ik;switch(i.type){case"firstParty":return new lk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ce(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Xv.get(t);i&&(fe("ComponentProvider","Removing Datastore"),Xv.delete(t),i.terminate())})(this),Promise.resolve()}}function XP(n,e,t,i={}){var o;n=hn(n,dd);const l=Vs(e),c=n._getSettings(),h=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(np(`https://${p}`),rp("Firestore",!0)),c.host!==YE&&c.host!==p&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:i});if(!Mi(y,h)&&(n._setSettings(y),i.mockUserToken)){let w,T;if(typeof i.mockUserToken=="string")w=i.mockUserToken,T=Wt.MOCK_USER;else{w=cS(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new ce(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Wt(S)}n._authCredentials=new sk(new Fw(w,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Bs(this.firestore,e,this._query)}}class ot{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(xl(t,ot._jsonSchema))return new ot(e,i||null,new we(Ye.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:yt("string",ot._jsonSchemaVersion),referencePath:yt("string")};class Li extends Bs{constructor(e,t,i){super(e,t,nd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new we(e))}withConverter(e){return new Li(this.firestore,e,this._path)}}function Ar(n,e,...t){if(n=He(n),Bw("collection","path",e),n instanceof dd){const i=Ye.fromString(e,...t);return fv(i),new Li(n,null,i)}{if(!(n instanceof ot||n instanceof Li))throw new ce(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return fv(i),new Li(n.firestore,null,i)}}function Lt(n,e,...t){if(n=He(n),arguments.length===1&&(e=gp.newId()),Bw("doc","path",e),n instanceof dd){const i=Ye.fromString(e,...t);return hv(i),new ot(n,null,new we(i))}{if(!(n instanceof ot||n instanceof Li))throw new ce(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return hv(i),new ot(n.firestore,n instanceof Li?n.converter:null,new we(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="AsyncQueue";class n_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new bE(this,"async_queue_retry"),this.oc=()=>{const i=hf();i&&fe(t_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=hf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=hf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Kr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ia(e))throw e;fe(t_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Jr("INTERNAL UNHANDLED ERROR: ",r_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Vp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&Se(47125,{hc:r_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function r_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function i_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Zr extends dd{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new n_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new n_(e),this._firestoreClient=void 0,await e}}}function ZP(n,e){const t=typeof n=="object"?n:Kc(),i=typeof n=="string"?n:xc,o=Ms(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=U_("firestore");l&&XP(o,...l)}return o}function hd(n){if(n._terminated)throw new ce(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ex(n),n._firestoreClient}function ex(n){var e,t,i;const o=n._freezeSettings(),l=(function(h,p,y,w){return new Sk(h,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,QE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new GP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(jt.fromBase64String(e))}catch(t){throw new ce(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new On(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:On._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xl(e,On._jsonSchema))return On.fromBase64String(e.bytes)}}On._jsonSchemaVersion="firestore/bytes/1.0",On._jsonSchema={type:yt("string",On._jsonSchemaVersion),bytes:yt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tr._jsonSchemaVersion}}static fromJSON(e){if(xl(e,Tr._jsonSchema))return new Tr(e.latitude,e.longitude)}}Tr._jsonSchemaVersion="firestore/geoPoint/1.0",Tr._jsonSchema={type:yt("string",Tr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class Ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xl(e,Ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ir(e.vectorValues);throw new ce(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ir._jsonSchemaVersion="firestore/vectorValue/1.0",Ir._jsonSchema={type:yt("string",Ir._jsonSchemaVersion),vectorValues:yt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=/^__.*__$/;class nx{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new bl(e,this.data,t,this.fieldTransforms)}}class JE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function XE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:n})}}class md{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new md(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Bc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(XE(this.Ec)&&tx.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class rx{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||ld(e)}Dc(e,t,i,o=!1){return new md({Ec:e,methodName:t,bc:i,path:Mt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gd(n){const e=n._freezeSettings(),t=ld(n._databaseId);return new rx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ZE(n,e,t,i,o,l={}){const c=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);qp("Data must be an object, but it was:",c,i);const h=e0(i,c);let p,y;if(l.merge)p=new wn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const S=Gf(e,T,t);if(!c.contains(S))throw new ce(K.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);n0(w,S)||w.push(S)}p=new wn(w),y=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,y=c.fieldTransforms;return new nx(new un(h),p,y)}class yd extends pd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yd}}function ix(n,e,t){return new md({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Wp extends pd{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=ix(this,e,!0),i=this.vc.map((l=>oa(l,t))),o=new Go(i);return new Yk(e.path,o)}isEqual(e){return e instanceof Wp&&Mi(this.vc,e.vc)}}function sx(n,e,t,i){const o=n.Dc(1,e,t);qp("Data must be an object, but it was:",o,i);const l=[],c=un.empty();Ki(i,((p,y)=>{const w=Hp(e,p,t);y=He(y);const T=o.gc(w);if(y instanceof yd)l.push(w);else{const S=oa(y,T);S!=null&&(l.push(w),c.set(w,S))}}));const h=new wn(l);return new JE(c,h,o.fieldTransforms)}function ox(n,e,t,i,o,l){const c=n.Dc(1,e,t),h=[Gf(e,i,t)],p=[o];if(l.length%2!=0)throw new ce(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)h.push(Gf(e,l[S])),p.push(l[S+1]);const y=[],w=un.empty();for(let S=h.length-1;S>=0;--S)if(!n0(y,h[S])){const N=h[S];let U=p[S];U=He(U);const $=c.gc(N);if(U instanceof yd)y.push(N);else{const M=oa(U,$);M!=null&&(y.push(N),w.set(N,M))}}const T=new wn(y);return new JE(w,T,c.fieldTransforms)}function ax(n,e,t,i=!1){return oa(t,n.Dc(i?4:3,e))}function oa(n,e){if(t0(n=He(n)))return qp("Unsupported field value:",e,n),e0(n,e);if(n instanceof pd)return(function(i,o){if(!XE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const h of i){let p=oa(h,o.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=He(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Gk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=We.fromDate(i);return{timestampValue:Lc(o.serializer,l)}}if(i instanceof We){const l=new We(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Lc(o.serializer,l)}}if(i instanceof Tr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof On)return{bytesValue:EE(o.serializer,i._byteString)};if(i instanceof ot){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Cp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Ir)return(function(c,h){return{mapValue:{fields:{[Yw]:{stringValue:Jw},[Nc]:{arrayValue:{values:c.toArray().map((y=>{if(typeof y!="number")throw h.wc("VectorValues must only contain numeric values.");return Tp(h.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Xc(i)}`)})(n,e)}function e0(n,e){const t={};return Ww(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(n,((i,o)=>{const l=oa(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function t0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof We||n instanceof Tr||n instanceof On||n instanceof ot||n instanceof pd||n instanceof Ir)}function qp(n,e,t){if(!t0(t)||!zw(t)){const i=Xc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Gf(n,e,t){if((e=He(e))instanceof fd)return e._internalPath;if(typeof e=="string")return Hp(n,e);throw Bc("Field path arguments must be of type string or ",n,!1,void 0,t)}const lx=new RegExp("[~\\*/\\[\\]]");function Hp(n,e,t){if(e.search(lx)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fd(...e.split("."))._internalPath}catch{throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ce(K.INVALID_ARGUMENT,h+n+p)}function n0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ux(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ux extends r0{data(){return super.data()}}function Gp(n,e){return typeof e=="string"?Hp(n,e):e instanceof fd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ce(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kp{}class cx extends Kp{}function Ll(n,e,...t){let i=[];e instanceof Kp&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof Qp)).length,h=l.filter((p=>p instanceof vd)).length;if(c>1||c>0&&h>0)throw new ce(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class vd extends cx{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new vd(e,t,i)}_apply(e){const t=this._parse(e);return s0(e._query,t),new Bs(e.firestore,e.converter,Lf(e._query,t))}_parse(e){const t=gd(e.firestore);return(function(l,c,h,p,y,w,T){let S;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ce(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){o_(T,w);const U=[];for(const $ of T)U.push(s_(p,l,$));S={arrayValue:{values:U}}}else S=s_(p,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||o_(T,w),S=ax(h,c,T,w==="in"||w==="not-in");return gt.create(y,w,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ml(n,e,t){const i=e,o=Gp("where",n);return vd._create(o,i,t)}class Qp extends Kp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:nr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const h=l.getFlattenedFilters();for(const p of h)s0(c,p),c=Lf(c,p)})(e._query,t),new Bs(e.firestore,e.converter,Lf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function s_(n,e,t){if(typeof(t=He(t))=="string"){if(t==="")throw new ce(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sE(e)&&t.indexOf("/")!==-1)throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ye.fromString(t));if(!we.isDocumentKey(i))throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ev(n,new we(i))}if(t instanceof ot)return Ev(n,t._key);throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xc(t)}.`)}function o_(n,e){if(!Array.isArray(n)||n.length===0)throw new ce(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function s0(n,e){const t=(function(o,l){for(const c of o)for(const h of c.getFlattenedFilters())if(l.indexOf(h.op)>=0)return h.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ce(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class dx{convertValue(e,t="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ki(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Nc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>ut(c.doubleValue)));return new Ir(l)}convertGeoPoint(e){return new Tr(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=td(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(_l(e));default:return null}}convertTimestamp(e){const t=Ui(e);return new We(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);ze(kE(i),9688,{name:e});const o=new wl(i.get(1),i.get(3)),l=new we(i.popFirst(5));return o.isEqual(t)||Jr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class al{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ks extends r0{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Gp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ks._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",ks._jsonSchema={type:yt("string",ks._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class yc extends ks{data(e={}){return super.data(e)}}class Rs{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new al(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new yc(this._firestore,this._userDataWriter,i.key,i,new al(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((h=>{const p=new yc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new al(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);return h.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((h=>l||h.type!==3)).map((h=>{const p=new yc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new al(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return h.type!==0&&(y=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),w=c.indexOf(h.doc.key)),{type:hx(h.type),doc:p,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(n){n=hn(n,ot);const e=hn(n.firestore,Zr);return YP(hd(e),n._key).then((t=>u0(e,n,t)))}Rs._jsonSchemaVersion="firestore/querySnapshot/1.0",Rs._jsonSchema={type:yt("string",Rs._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class Yp extends dx{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function qi(n){n=hn(n,Bs);const e=hn(n.firestore,Zr),t=hd(e),i=new Yp(e);return i0(n._query),JP(t,n._query).then((o=>new Rs(e,i,n,o)))}function fx(n,e,t){n=hn(n,ot);const i=hn(n.firestore,Zr),o=o0(n.converter,e);return _d(i,[ZE(gd(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Vn.none())])}function Xn(n,e,t,...i){n=hn(n,ot);const o=hn(n.firestore,Zr),l=gd(o);let c;return c=typeof(e=He(e))=="string"||e instanceof fd?ox(l,"updateDoc",n._key,e,t,i):sx(l,"updateDoc",n._key,e),_d(o,[c.toMutation(n._key,Vn.exists(!0))])}function l0(n){return _d(hn(n.firestore,Zr),[new Ip(n._key,Vn.none())])}function px(n,e){const t=hn(n.firestore,Zr),i=Lt(n),o=o0(n.converter,e);return _d(t,[ZE(gd(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Vn.exists(!1))]).then((()=>i))}function mx(n,...e){var t,i,o;n=He(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||i_(e[c])||(l=e[c++]);const h={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(i_(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,w;if(n instanceof ot)y=hn(n.firestore,Zr),w=nd(n._key.path),p={next:T=>{e[c]&&e[c](u0(y,n,T))},error:e[c+1],complete:e[c+2]};else{const T=hn(n,Bs);y=hn(T.firestore,Zr),w=T._query;const S=new Yp(y);p={next:N=>{e[c]&&e[c](new Rs(y,S,T,N))},error:e[c+1],complete:e[c+2]},i0(n._query)}return(function(S,N,U,$){const M=new $p($),ne=new Up(N,M,U);return S.asyncQueue.enqueueAndForget((async()=>Mp(await Uc(S),ne))),()=>{M.Ou(),S.asyncQueue.enqueueAndForget((async()=>jp(await Uc(S),ne)))}})(hd(y),w,h,p)}function _d(n,e){return(function(i,o){const l=new Kr;return i.asyncQueue.enqueueAndForget((async()=>jP(await QP(i),o,l))),l.promise})(hd(n),e)}function u0(n,e,t){const i=t.docs.get(e._key),o=new Yp(n);return new ks(n,o,e._key,i,new al(t.hasPendingWrites,t.fromCache),e.converter)}function gx(...n){return new Wp("arrayUnion",n)}(function(e,t=!0){(function(o){na=o})(ta),er(new Ln("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),h=new Zr(new ok(i.getProvider("auth-internal")),new uk(c,i.getProvider("app-check-internal")),(function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ce(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wl(y.options.projectId,w)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),h._setSettings(l),h}),"PUBLIC").setMultipleInstances(!0)),dn(av,lv,e),dn(av,lv,"esm2017")})();const c0="@firebase/installations",Jp="0.6.18";/**
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
 */const d0=1e4,h0=`w:${Jp}`,f0="FIS_v2",yx="https://firebaseinstallations.googleapis.com/v1",vx=3600*1e3,_x="installations",wx="Installations";/**
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
 */const Ex={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ds=new Ls(_x,wx,Ex);function p0(n){return n instanceof rr&&n.code.includes("request-failed")}/**
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
 */function m0({projectId:n}){return`${yx}/projects/${n}/installations`}function g0(n){return{token:n.token,requestStatus:2,expiresIn:Ix(n.expiresIn),creationTime:Date.now()}}async function y0(n,e){const i=(await e.json()).error;return Ds.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function v0({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Tx(n,{refreshToken:e}){const t=v0(n);return t.append("Authorization",Sx(e)),t}async function _0(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Ix(n){return Number(n.replace("s","000"))}function Sx(n){return`${f0} ${n}`}/**
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
 */async function Ax({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=m0(n),o=v0(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:f0,appId:n.appId,sdkVersion:h0},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await _0(()=>fetch(i,h));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:g0(y.authToken)}}else throw await y0("Create Installation",p)}/**
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
 */function w0(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Cx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kx=/^[cdef][\w-]{21}$/,Kf="";function Rx(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Px(n);return kx.test(t)?t:Kf}catch{return Kf}}function Px(n){return Cx(n).substr(0,22)}/**
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
 */function wd(n){return`${n.appName}!${n.appId}`}/**
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
 */const E0=new Map;function T0(n,e){const t=wd(n);I0(t,e),xx(t,e)}function I0(n,e){const t=E0.get(n);if(t)for(const i of t)i(e)}function xx(n,e){const t=Nx();t&&t.postMessage({key:n,fid:e}),bx()}let Cs=null;function Nx(){return!Cs&&"BroadcastChannel"in self&&(Cs=new BroadcastChannel("[Firebase] FID Change"),Cs.onmessage=n=>{I0(n.data.key,n.data.fid)}),Cs}function bx(){E0.size===0&&Cs&&(Cs.close(),Cs=null)}/**
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
 */const Dx="firebase-installations-database",Ox=1,Os="firebase-installations-store";let pf=null;function Xp(){return pf||(pf=Gc(Dx,Ox,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Os)}}})),pf}async function zc(n,e){const t=wd(n),o=(await Xp()).transaction(Os,"readwrite"),l=o.objectStore(Os),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&T0(n,e.fid),e}async function S0(n){const e=wd(n),i=(await Xp()).transaction(Os,"readwrite");await i.objectStore(Os).delete(e),await i.done}async function Ed(n,e){const t=wd(n),o=(await Xp()).transaction(Os,"readwrite"),l=o.objectStore(Os),c=await l.get(t),h=e(c);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!c||c.fid!==h.fid)&&T0(n,h.fid),h}/**
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
 */async function Zp(n){let e;const t=await Ed(n.appConfig,i=>{const o=Vx(i),l=Lx(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Kf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Vx(n){const e=n||{fid:Rx(),registrationStatus:0};return A0(e)}function Lx(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ds.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Mx(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jx(n)}:{installationEntry:e}}async function Mx(n,e){try{const t=await Ax(n,e);return zc(n.appConfig,t)}catch(t){throw p0(t)&&t.customData.serverCode===409?await S0(n.appConfig):await zc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function jx(n){let e=await a_(n.appConfig);for(;e.registrationStatus===1;)await w0(100),e=await a_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Zp(n);return i||t}return e}function a_(n){return Ed(n,e=>{if(!e)throw Ds.create("installation-not-found");return A0(e)})}function A0(n){return Fx(n)?{fid:n.fid,registrationStatus:0}:n}function Fx(n){return n.registrationStatus===1&&n.registrationTime+d0<Date.now()}/**
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
 */async function Ux({appConfig:n,heartbeatServiceProvider:e},t){const i=Bx(n,t),o=Tx(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:h0,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await _0(()=>fetch(i,h));if(p.ok){const y=await p.json();return g0(y)}else throw await y0("Generate Auth Token",p)}function Bx(n,{fid:e}){return`${m0(n)}/${e}/authTokens:generate`}/**
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
 */async function em(n,e=!1){let t;const i=await Ed(n.appConfig,l=>{if(!C0(l))throw Ds.create("not-registered");const c=l.authToken;if(!e&&Wx(c))return l;if(c.requestStatus===1)return t=zx(n,e),l;{if(!navigator.onLine)throw Ds.create("app-offline");const h=Hx(l);return t=$x(n,h),h}});return t?await t:i.authToken}async function zx(n,e){let t=await l_(n.appConfig);for(;t.authToken.requestStatus===1;)await w0(100),t=await l_(n.appConfig);const i=t.authToken;return i.requestStatus===0?em(n,e):i}function l_(n){return Ed(n,e=>{if(!C0(e))throw Ds.create("not-registered");const t=e.authToken;return Gx(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $x(n,e){try{const t=await Ux(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await zc(n.appConfig,i),t}catch(t){if(p0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await S0(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zc(n.appConfig,i)}throw t}}function C0(n){return n!==void 0&&n.registrationStatus===2}function Wx(n){return n.requestStatus===2&&!qx(n)}function qx(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+vx}function Hx(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Gx(n){return n.requestStatus===1&&n.requestTime+d0<Date.now()}/**
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
 */async function Kx(n){const e=n,{installationEntry:t,registrationPromise:i}=await Zp(e);return i?i.catch(console.error):em(e).catch(console.error),t.fid}/**
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
 */async function Qx(n,e=!1){const t=n;return await Yx(t),(await em(t,e)).token}async function Yx(n){const{registrationPromise:e}=await Zp(n);e&&await e}/**
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
 */function Jx(n){if(!n||!n.options)throw mf("App Configuration");if(!n.name)throw mf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw mf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function mf(n){return Ds.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="installations",Xx="installations-internal",Zx=n=>{const e=n.getProvider("app").getImmediate(),t=Jx(e),i=Ms(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},eN=n=>{const e=n.getProvider("app").getImmediate(),t=Ms(e,k0).getImmediate();return{getId:()=>Kx(t),getToken:o=>Qx(t,o)}};function tN(){er(new Ln(k0,Zx,"PUBLIC")),er(new Ln(Xx,eN,"PRIVATE"))}tN();dn(c0,Jp);dn(c0,Jp,"esm2017");/**
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
 */const nN="/firebase-messaging-sw.js",rN="/firebase-cloud-messaging-push-scope",R0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",iN="https://fcmregistrations.googleapis.com/v1",P0="google.c.a.c_id",sN="google.c.a.c_l",oN="google.c.a.ts",aN="google.c.a.e",u_=1e4;var c_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(c_||(c_={}));/**
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
 */var Il;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Il||(Il={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function lN(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const gf="fcm_token_details_db",uN=5,d_="fcm_token_object_Store";async function cN(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(gf))return null;let e=null;return(await Gc(gf,uN,{upgrade:async(i,o,l,c)=>{var h;if(o<2||!i.objectStoreNames.contains(d_))return;const p=c.objectStore(d_),y=await p.index("fcmSenderId").get(n);if(await p.clear(),!!y){if(o===2){const w=y;if(!w.auth||!w.p256dh||!w.endpoint)return;e={token:w.fcmToken,createTime:(h=w.createTime)!==null&&h!==void 0?h:Date.now(),subscriptionOptions:{auth:w.auth,p256dh:w.p256dh,endpoint:w.endpoint,swScope:w.swScope,vapidKey:typeof w.vapidKey=="string"?w.vapidKey:Wr(w.vapidKey)}}}else if(o===3){const w=y;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:Wr(w.auth),p256dh:Wr(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:Wr(w.vapidKey)}}}else if(o===4){const w=y;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:Wr(w.auth),p256dh:Wr(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:Wr(w.vapidKey)}}}}}})).close(),await sf(gf),await sf("fcm_vapid_details_db"),await sf("undefined"),dN(e)?e:null}function dN(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const hN="firebase-messaging-database",fN=1,Sl="firebase-messaging-store";let yf=null;function x0(){return yf||(yf=Gc(hN,fN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Sl)}}})),yf}async function pN(n){const e=N0(n),i=await(await x0()).transaction(Sl).objectStore(Sl).get(e);if(i)return i;{const o=await cN(n.appConfig.senderId);if(o)return await tm(n,o),o}}async function tm(n,e){const t=N0(n),o=(await x0()).transaction(Sl,"readwrite");return await o.objectStore(Sl).put(e,t),await o.done,e}function N0({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Jt=new Ls("messaging","Messaging",mN);/**
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
 */async function gN(n,e){const t=await rm(n),i=b0(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(nm(n.appConfig),o)).json()}catch(c){throw Jt.create("token-subscribe-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw Jt.create("token-subscribe-failed",{errorInfo:c})}if(!l.token)throw Jt.create("token-subscribe-no-token");return l.token}async function yN(n,e){const t=await rm(n),i=b0(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${nm(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw Jt.create("token-update-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw Jt.create("token-update-failed",{errorInfo:c})}if(!l.token)throw Jt.create("token-update-no-token");return l.token}async function vN(n,e){const i={method:"DELETE",headers:await rm(n)};try{const l=await(await fetch(`${nm(n.appConfig)}/${e}`,i)).json();if(l.error){const c=l.error.message;throw Jt.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw Jt.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function nm({projectId:n}){return`${iN}/projects/${n}/registrations`}async function rm({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function b0({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==R0&&(o.web.applicationPubKey=i),o}/**
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
 */const _N=10080*60*1e3;async function wN(n){const e=await TN(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Wr(e.getKey("auth")),p256dh:Wr(e.getKey("p256dh"))},i=await pN(n.firebaseDependencies);if(i){if(IN(i.subscriptionOptions,t))return Date.now()>=i.createTime+_N?EN(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await vN(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return h_(n.firebaseDependencies,t)}else return h_(n.firebaseDependencies,t)}async function EN(n,e){try{const t=await yN(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await tm(n.firebaseDependencies,i),t}catch(t){throw t}}async function h_(n,e){const i={token:await gN(n,e),createTime:Date.now(),subscriptionOptions:e};return await tm(n,i),i.token}async function TN(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:lN(e)})}function IN(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return SN(e,n),AN(e,n),CN(e,n),e}function SN(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function AN(n,e){e.data&&(n.data=e.data)}function CN(n,e){var t,i,o,l,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const h=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;h&&(n.fcmOptions.link=h);const p=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
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
 */function kN(n){return typeof n=="object"&&!!n&&P0 in n}/**
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
 */function RN(n){if(!n||!n.options)throw vf("App Configuration Object");if(!n.name)throw vf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw vf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function vf(n){return Jt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=RN(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(n){try{n.swRegistration=await navigator.serviceWorker.register(nN,{scope:rN}),n.swRegistration.update().catch(()=>{}),await NN(n.swRegistration)}catch(e){throw Jt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function NN(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${u_} ms`)),u_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var c;((c=l.target)===null||c===void 0?void 0:c.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(n,e){if(!e&&!n.swRegistration&&await xN(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Jt.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=R0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(n,e){if(!navigator)throw Jt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Jt.create("permission-blocked");return await DN(n,e==null?void 0:e.vapidKey),await bN(n,e==null?void 0:e.serviceWorkerRegistration),wN(n)}/**
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
 */async function ON(n,e,t){const i=VN(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[P0],message_name:t[sN],message_time:t[oN],message_device_time:Math.floor(Date.now()/1e3)})}function VN(n){switch(n){case Il.NOTIFICATION_CLICKED:return"notification_open";case Il.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Il.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(f_(t)):n.onMessageHandler.next(f_(t)));const i=t.data;kN(i)&&i[aN]==="1"&&await ON(n,t.messageType,i)}const p_="@firebase/messaging",m_="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=n=>{const e=new PN(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>LN(e,t)),e},jN=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>D0(e,i)}};function FN(){er(new Ln("messaging",MN,"PUBLIC")),er(new Ln("messaging-internal",jN,"PRIVATE")),dn(p_,m_),dn(p_,m_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(){try{await W_()}catch{return!1}return typeof window<"u"&&$_()&&wS()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(n=Kc()){return UN().then(e=>{if(!e)throw Jt.create("unsupported-browser")},e=>{throw Jt.create("indexed-db-unsupported")}),Ms(He(n),"messaging").getImmediate()}async function zN(n,e){return n=He(n),D0(n,e)}FN();const $N={apiKey:"AIzaSyAUNktXGZeeXlX3LKFolXZRVQZGDohlIF0",authDomain:"golfgang-79922.firebaseapp.com",projectId:"golfgang-79922",storageBucket:"golfgang-79922.appspot.com",messagingSenderId:"223762413770",appId:"1:223762413770:web:098607b8f30080df90dc33",measurementId:"G-T1FXETH3K0"},Td=G_($N),jl=ek(Td),Qe=ZP(Td);let WN=null;if(typeof window<"u")try{WN=BN(Td)}catch(n){console.log("Messaging not supported:",n)}const O0=W.createContext(null);function qN({children:n}){const[e,t]=W.useState(null),[i,o]=W.useState(null),[l,c]=W.useState(!1),[h,p]=W.useState(!0);W.useEffect(()=>{const w=zA(jl,async T=>{if(!T){t(null),o(null),c(!1),p(!1);return}t(T);try{const S=Lt(Qe,"users",T.uid),N=await a0(S);if(N.exists()){const U=N.data();o(U),c((U==null?void 0:U.isAdmin)===!0)}else o({}),c(!1)}catch(S){console.error("Error loading user profile:",S),o({})}p(!1)});return()=>w()},[]);const y={user:e,profile:i,isAdmin:l,loading:h};return _.jsx(O0.Provider,{value:y,children:n})}function Yi(){return W.useContext(O0)}function HN(){var p;const{user:n,isAdmin:e}=Yi(),t=ea(),i=Zo(),[o,l]=W.useState(!1),c=async()=>{try{n!=null&&n.uid&&await Xn(Lt(Qe,"users",n.uid),{fcmTokens:[],notificationsEnabled:!1})}catch(y){console.error("Error clearing tokens:",y)}await $A(jl),t("/login")},h=()=>l(!1);return _.jsxs(_.Fragment,{children:[_.jsx("header",{className:"top-nav",children:_.jsxs("div",{className:"top-nav-inner",children:[_.jsxs(Dn,{to:"/",className:"top-nav-left",style:{textDecoration:"none"},children:[_.jsx("div",{className:"brand-mark"}),_.jsxs("div",{className:"brand-title",children:[_.jsx("span",{className:"brand-title-main",children:"GolfGang"}),_.jsx("span",{className:"brand-title-sub",children:"Tee Time Planner"})]})]}),_.jsxs("div",{className:"top-nav-right desktop-only",children:[n&&_.jsxs(_.Fragment,{children:[_.jsxs("nav",{className:"top-nav-links",children:[_.jsx(Dn,{to:"/",className:i.pathname==="/"?"active":void 0,children:"Calendar"}),e&&_.jsx(Dn,{to:"/admin",className:i.pathname.startsWith("/admin")?"active":void 0,children:"Admin"})]}),_.jsx("button",{onClick:()=>t("/profile"),className:"btn btn-ghost btn-sm",children:"Profile"}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:c,children:"Logout"})]}),!n&&_.jsx(Dn,{to:"/login",className:"btn btn-primary btn-sm",children:"Login"})]}),n&&_.jsxs("button",{className:"mobile-only",onClick:()=>l(!o),style:{background:"none",border:"none",padding:8,cursor:"pointer",display:"flex",flexDirection:"column",gap:4},"aria-label":"Menu",children:[_.jsx("span",{style:{display:"block",width:20,height:2,background:"var(--color-text)",borderRadius:1,transition:"all 0.2s ease",transform:o?"rotate(45deg) translateY(6px)":"none"}}),_.jsx("span",{style:{display:"block",width:20,height:2,background:"var(--color-text)",borderRadius:1,transition:"all 0.2s ease",opacity:o?0:1}}),_.jsx("span",{style:{display:"block",width:20,height:2,background:"var(--color-text)",borderRadius:1,transition:"all 0.2s ease",transform:o?"rotate(-45deg) translateY(-6px)":"none"}})]})]})}),o&&_.jsxs("div",{className:"mobile-only",style:{position:"fixed",top:"var(--nav-height)",left:0,right:0,bottom:0,background:"var(--color-surface)",zIndex:100,padding:16,display:"flex",flexDirection:"column",gap:4,overflowY:"auto",borderTop:"1px solid var(--color-border)"},children:[n&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{padding:"12px 0 16px",borderBottom:"1px solid var(--color-divider)",marginBottom:8},children:[_.jsx("div",{style:{fontWeight:600,fontSize:15,color:"var(--color-text)"},children:(p=n.email)==null?void 0:p.split("@")[0]}),_.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)",marginTop:2},children:[n.email,e&&" • Admin"]})]}),_.jsx(Dn,{to:"/",onClick:h,style:{display:"flex",alignItems:"center",gap:10,padding:"12px 8px",textDecoration:"none",color:i.pathname==="/"?"var(--color-primary)":"var(--color-text)",fontSize:15,fontWeight:500,borderRadius:"var(--radius-md)",background:i.pathname==="/"?"var(--color-primary-soft)":"transparent"},children:"📅 Calendar"}),_.jsx(Dn,{to:"/profile",onClick:h,style:{display:"flex",alignItems:"center",gap:10,padding:"12px 8px",textDecoration:"none",color:i.pathname==="/profile"?"var(--color-primary)":"var(--color-text)",fontSize:15,fontWeight:500,borderRadius:"var(--radius-md)",background:i.pathname==="/profile"?"var(--color-primary-soft)":"transparent"},children:"👤 Profile"}),e&&_.jsx(Dn,{to:"/admin",onClick:h,style:{display:"flex",alignItems:"center",gap:10,padding:"12px 8px",textDecoration:"none",color:i.pathname.startsWith("/admin")?"var(--color-primary)":"var(--color-text)",fontSize:15,fontWeight:500,borderRadius:"var(--radius-md)",background:i.pathname.startsWith("/admin")?"var(--color-primary-soft)":"transparent"},children:"⚙️ Admin"}),_.jsx("div",{style:{marginTop:"auto",paddingTop:16,borderTop:"1px solid var(--color-divider)"},children:_.jsx("button",{onClick:()=>{c(),h()},style:{display:"flex",alignItems:"center",gap:10,padding:"12px 8px",background:"none",border:"none",textAlign:"left",cursor:"pointer",color:"var(--color-danger)",fontSize:15,fontWeight:500,width:"100%",borderRadius:"var(--radius-md)"},children:"🚪 Logout"})})]}),!n&&_.jsx(Dn,{to:"/login",className:"btn btn-primary",onClick:h,style:{marginTop:20},children:"Login"})]})]})}function g_(){const n=ea(),[e,t]=W.useState(""),[i,o]=W.useState(""),[l,c]=W.useState(""),[h,p]=W.useState(!1);async function y(w){w.preventDefault(),c(""),p(!0);try{let T=e.trim();if(!e.includes("@")){const S=Ll(Ar(Qe,"users"),Ml("username","==",e.trim().toLowerCase())),N=await qi(S);if(N.empty)throw new Error("Username not found.");T=N.docs[0].data().email}await MA(jl,T,i),n("/")}catch(T){console.error(T),c(T.message||"Failed to sign in.")}p(!1)}return _.jsx("div",{style:{minHeight:"calc(100vh - var(--nav-height))",display:"flex",justifyContent:"center",alignItems:"center",padding:24},children:_.jsxs("div",{className:"card",style:{width:"100%",maxWidth:400},children:[_.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[_.jsx("div",{style:{width:48,height:48,borderRadius:12,background:"linear-gradient(135deg, #0f7b6c 0%, #2383e2 100%)",margin:"0 auto 16px"}}),_.jsx("h1",{style:{marginBottom:4},children:"Welcome back"}),_.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)",fontSize:14},children:"Sign in to your GolfGang account"})]}),l&&_.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:l}),_.jsxs("form",{onSubmit:y,children:[_.jsxs("div",{style:{marginBottom:16},children:[_.jsx("label",{children:"Email or username"}),_.jsx("input",{className:"input",type:"text",value:e,onChange:w=>t(w.target.value),placeholder:"you@example.com",required:!0})]}),_.jsxs("div",{style:{marginBottom:20},children:[_.jsx("label",{children:"Password"}),_.jsx("input",{className:"input",type:"password",value:i,onChange:w=>o(w.target.value),placeholder:"Your password",required:!0})]}),_.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px 16px"},disabled:h,type:"submit",children:h?"Signing in…":"Sign in"})]}),_.jsxs("div",{style:{marginTop:20,textAlign:"center",fontSize:14},children:[_.jsx("a",{href:"/signup",style:{display:"block",marginBottom:8},children:"Create an account"}),_.jsx("a",{href:"/reset-password",style:{color:"var(--color-text-secondary)"},children:"Forgot password?"})]})]})})}function GN(n=1e4){return new Promise((e,t)=>{if(window.google&&window.google.maps&&window.google.maps.places){e();return}const i=Date.now(),o=setInterval(()=>{window.google&&window.google.maps&&window.google.maps.places?(clearInterval(o),e()):Date.now()-i>n&&(clearInterval(o),t(new Error("Google Maps failed to load within timeout")))},100)})}function V0({onSelect:n,initialValue:e=""}){const t=W.useRef(null),[i,o]=W.useState(e),[l,c]=W.useState(null);return W.useEffect(()=>{let h;return GN().then(()=>{t.current&&(h=new window.google.maps.places.Autocomplete(t.current,{types:["establishment"],fields:["name","formatted_address","place_id","photos"]}),h.addListener("place_changed",()=>{const p=h.getPlace();if(console.log("Place selected:",p),!p||!p.place_id)return;let y="";p.photos&&p.photos.length>0?(y=p.photos[0].getUrl({maxWidth:1e3,maxHeight:600}),console.log("Photo URL:",y)):console.log("No photos available for this place");const w={name:p.name||"",address:p.formatted_address||"",placeId:p.place_id,photoUrl:y};console.log("Payload being sent:",w),o(w.name),n==null||n(w)}),c(null))}).catch(p=>{console.error("Error loading Google Maps:",p),c("Google Maps failed to load. Please refresh the page.")}),()=>{}},[n]),_.jsxs(_.Fragment,{children:[_.jsx("input",{ref:t,className:"input",style:{width:"100%"},placeholder:"Search golf course",value:i,onChange:h=>o(h.target.value)}),l&&_.jsx("p",{style:{color:"var(--danger)",fontSize:12,marginTop:4},children:l})]})}function KN(){const{user:n,isAdmin:e}=Yi(),[t,i]=W.useState([]),[o,l]=W.useState(null),[c,h]=W.useState([]),[p,y]=W.useState(!1),[w,T]=W.useState(!1),[S,N]=W.useState(""),[U,$]=W.useState({name:"",address:"",placeId:"",photoUrl:""}),[M,ne]=W.useState(""),[se,Z]=W.useState(""),[le,Ce]=W.useState(""),[Re,b]=W.useState(!1);W.useEffect(()=>{const H=mx(Ar(Qe,"events"),ue=>{const he=ue.docs.map(Y=>({id:Y.id,...Y.data()}));i(he)});return()=>H()},[]);const A=new Date,[R,P]=W.useState(A.getMonth()),[O,L]=W.useState(A.getFullYear()),k=new Date(O,R,1),Je=k.getDay(),dt=new Date(O,R+1,0).getDate(),ht=()=>{P(H=>H===0?11:H-1),R===0&&L(H=>H-1)},Ue=()=>{P(H=>H===11?0:H+1),R===11&&L(H=>H+1)},oe=H=>{const ue=["th","st","nd","rd"],he=H%100;return H+(ue[(he-20)%10]||ue[he]||ue[0])},_e=H=>{const ue=new Date(O,R,H),he=ue.toISOString().split("T")[0],Y=G[he]||[];l(ue),h(Y),y(!0)},ae=()=>{if(!o)return;const H=o.toLocaleDateString("en-AU",{weekday:"long"}),ue=o.getDate(),he=o.toLocaleDateString("en-AU",{month:"long"});N(`⛳ ${H} ${oe(ue)} ${he}`),y(!1),T(!0)},V=async()=>{if(!S.trim()||!o)return;b(!0);let H=null;if(M){const[ue,he,Y]=M.split("-"),re=new Date(Number(ue),Number(he)-1,Number(Y),23,59,59);H=We.fromDate(re)}await px(Ar(Qe,"events"),{title:S.trim(),date:We.fromDate(o),responses:{},courseName:U.name||"",courseAddress:U.address||"",coursePlaceId:U.placeId||"",coursePhotoUrl:U.photoUrl||"",tee:se.trim(),notes:le.trim(),rsvpDeadline:H,booked:!1,bookedAt:null}),N(""),$({name:"",address:"",placeId:"",photoUrl:""}),Z(""),Ce(""),ne(""),b(!1),T(!1)},G={};return t.forEach(H=>{var Y;const ue=(Y=H.date)!=null&&Y.toDate?H.date.toDate():null;if(!ue)return;const he=ue.toISOString().split("T")[0];G[he]||(G[he]=[]),G[he].push(H)}),_.jsxs("div",{className:"page",children:[_.jsxs("div",{className:"card",style:{marginBottom:20},children:[_.jsxs("div",{className:"card-header",children:[_.jsxs("div",{children:[_.jsx("h2",{style:{fontSize:18,fontWeight:600,marginBottom:2},children:k.toLocaleDateString("en-AU",{month:"long",year:"numeric"})}),_.jsx("p",{style:{fontSize:13,color:"var(--color-text-secondary)",margin:0},children:"Tap a day to view or create events"})]}),_.jsxs("div",{style:{display:"flex",gap:4},children:[_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:ht,children:"←"}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:Ue,children:"→"})]})]}),_.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4,marginBottom:8},children:["S","M","T","W","T","F","S"].map((H,ue)=>_.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:500,color:"var(--color-text-tertiary)",padding:"4px 0"},children:H},ue))}),_.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},children:[Array.from({length:Je}).map((H,ue)=>_.jsx("div",{},`empty-${ue}`)),Array.from({length:dt}).map((H,ue)=>{const he=ue+1,re=new Date(O,R,he).toISOString().split("T")[0],ge=G[re]||[],xe=A.getDate()===he&&A.getMonth()===R&&A.getFullYear()===O,Ne=ge.some(xt=>xt.booked),St=ge.some(xt=>!xt.booked),ir=ge.length>0;let En={};return Ne?En={background:"var(--color-success-soft)"}:St&&(En={background:"var(--color-warning-soft)"}),_.jsxs("div",{onClick:()=>_e(he),style:{aspectRatio:"1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:6,cursor:"pointer",transition:"all 0.15s ease",border:xe?"2px solid var(--color-primary)":"1px solid transparent",...En},onMouseOver:xt=>{ir||(xt.currentTarget.style.background="var(--color-bg-hover)")},onMouseOut:xt=>{ir?Ne?xt.currentTarget.style.background="var(--color-success-soft)":St&&(xt.currentTarget.style.background="var(--color-warning-soft)"):xt.currentTarget.style.background=""},children:[_.jsx("div",{style:{fontSize:14,fontWeight:xe?600:400,color:xe?"var(--color-primary)":"var(--color-text)"},children:he}),ir&&_.jsx("div",{style:{width:6,height:6,borderRadius:"50%",marginTop:2,background:Ne?"var(--color-success)":"var(--color-warning)"}})]},he)})]}),_.jsxs("div",{className:"calendar-legend",children:[_.jsxs("div",{className:"calendar-legend-item",children:[_.jsx("div",{className:"calendar-legend-dot calendar-legend-dot--proposed"}),_.jsx("span",{children:"Proposed"})]}),_.jsxs("div",{className:"calendar-legend-item",children:[_.jsx("div",{className:"calendar-legend-dot calendar-legend-dot--booked"}),_.jsx("span",{children:"Booked"})]})]})]}),_.jsxs("div",{className:"card",children:[_.jsx("div",{className:"card-header",children:_.jsxs("div",{className:"card-title-group",children:[_.jsx("h3",{className:"card-title",children:"Upcoming Events"}),_.jsx("p",{className:"card-subtitle",children:"Your next rounds"})]})}),_.jsx("div",{className:"card-body",children:t.length===0?_.jsxs("div",{className:"empty-state",children:[_.jsx("div",{className:"empty-state-icon",children:"🏌️"}),_.jsx("div",{className:"empty-state-title",children:"No events yet"}),_.jsx("p",{children:"Tap a day on the calendar to create one"})]}):[...t].sort((H,ue)=>H.date.toMillis()-ue.date.toMillis()).map(H=>{const ue=H.date.toDate(),he=n&&H.responses?H.responses[n.uid]:null,Y=H.responses?Object.values(H.responses).filter(re=>re==="available").length:0;return _.jsxs(Dn,{to:`/event/${H.id}`,className:`event-list-item ${he==="available"?"event-list-item--attending":""}`,style:{textDecoration:"none"},children:[_.jsxs("div",{style:{flex:1,minWidth:0},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[_.jsx("span",{style:{fontWeight:500,color:"var(--color-text)"},children:H.title}),_.jsx("span",{className:`status-badge ${H.booked?"status-badge--booked":"status-badge--proposed"}`,children:H.booked?"Booked":"Proposed"})]}),_.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:[ue.toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"}),H.tee&&` • ${H.tee}`,H.courseName&&` • ${H.courseName}`]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:6,fontSize:12},children:[_.jsxs("span",{style:{color:"var(--color-text-tertiary)"},children:["👥 ",Y,"/4"]}),he==="available"&&_.jsx("span",{style:{color:"var(--color-success)",fontWeight:500},children:"✓ You're in"}),!he&&!H.booked&&_.jsx("span",{style:{color:"var(--color-primary)",fontWeight:500},children:"Awaiting response"})]})]}),_.jsx("div",{style:{fontSize:18,color:"var(--color-text-tertiary)"},children:"→"})]},H.id)})})]}),p&&_.jsx("div",{className:"modal-backdrop",onClick:()=>y(!1),children:_.jsxs("div",{className:"modal",onClick:H=>H.stopPropagation(),children:[_.jsx("h2",{style:{marginTop:0,marginBottom:16},children:o==null?void 0:o.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"})}),c.length>0?_.jsx("div",{style:{marginBottom:20},children:c.map(H=>{const ue=H.responses?Object.values(H.responses).filter(Y=>Y==="available").length:0,he=n&&H.responses?H.responses[n.uid]:null;return _.jsxs(Dn,{to:`/event/${H.id}`,onClick:()=>y(!1),style:{display:"block",padding:14,background:"var(--color-bg-secondary)",borderRadius:8,marginBottom:8,textDecoration:"none",color:"inherit",borderLeft:he==="available"?"3px solid var(--color-success)":"3px solid transparent"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[_.jsx("span",{style:{fontWeight:500},children:H.title}),_.jsx("span",{className:`status-badge ${H.booked?"status-badge--booked":"status-badge--proposed"}`,children:H.booked?"Booked":"Proposed"})]}),H.tee&&_.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:["🕐 ",H.tee]}),H.courseName&&_.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:["📍 ",H.courseName]}),_.jsxs("div",{style:{marginTop:8,fontSize:12,display:"flex",alignItems:"center",gap:8},children:[_.jsxs("span",{children:["👥 ",ue,"/4"]}),he==="available"&&_.jsx("span",{style:{color:"var(--color-success)"},children:"✓ You're in"})]})]},H.id)})}):_.jsxs("div",{style:{padding:24,textAlign:"center",color:"var(--color-text-secondary)",background:"var(--color-bg-secondary)",borderRadius:8,marginBottom:20},children:[_.jsx("div",{style:{fontSize:32,marginBottom:8},children:"🏌️"}),_.jsx("div",{children:"No events on this day"})]}),_.jsxs("div",{style:{display:"flex",gap:8},children:[e&&_.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:ae,children:"+ Create Event"}),_.jsx("button",{className:"btn btn-ghost",style:{flex:e?0:1},onClick:()=>y(!1),children:"Close"})]})]})}),w&&_.jsx("div",{className:"modal-backdrop",children:_.jsxs("div",{className:"modal",children:[_.jsx("h2",{style:{marginTop:0},children:"Create Event"}),_.jsx("p",{style:{color:"var(--color-text-secondary)",marginTop:-4,marginBottom:20,fontSize:14},children:o==null?void 0:o.toLocaleDateString("en-AU",{weekday:"long",month:"long",day:"numeric"})}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Event title"}),_.jsx("input",{className:"input",value:S,placeholder:"e.g. Sunday Stableford",onChange:H=>N(H.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Course"}),_.jsx(V0,{initialValue:U.name,onSelect:H=>$(H)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Tee time"}),_.jsx("input",{className:"input",value:se,placeholder:"e.g. 7:15am",onChange:H=>Z(H.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Notes (optional)"}),_.jsx("textarea",{className:"input",placeholder:"Add any notes...",value:le,onChange:H=>Ce(H.target.value),rows:3})]}),_.jsxs("div",{children:[_.jsx("label",{children:"RSVP Deadline"}),_.jsx("input",{className:"input",type:"date",value:M,onChange:H=>ne(H.target.value)})]})]}),_.jsxs("div",{style:{marginTop:24,display:"flex",gap:8},children:[_.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:V,disabled:Re,children:Re?"Creating…":"Create Event"}),_.jsx("button",{className:"btn btn-ghost",onClick:()=>T(!1),children:"Cancel"})]})]})})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN="type.googleapis.com/google.protobuf.Int64Value",YN="type.googleapis.com/google.protobuf.UInt64Value";function L0(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function $c(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>$c(e));if(typeof n=="function"||typeof n=="object")return L0(n,e=>$c(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Yo(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case QN:case YN:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Yo(e)):typeof n=="function"||typeof n=="object"?L0(n,e=>Yo(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class cn extends rr{constructor(e,t,i){super(`${im}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,cn.prototype)}}function JN(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Wc(n,e){let t=JN(n),i=t,o;try{const l=e&&e.error;if(l){const c=l.status;if(typeof c=="string"){if(!y_[c])return new cn("internal","internal");t=y_[c],i=c}const h=l.message;typeof h=="string"&&(i=h),o=l.details,o!==void 0&&(o=Yo(o))}}catch{}return t==="ok"?null:new cn(t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,t,i,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,ln(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||i.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="us-central1",ZN=/^data: (.*?)(?:\n|$)/;function eb(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new cn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class tb{constructor(e,t,i,o,l=Qf,c=(...h)=>fetch(...h)){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new XN(e,t,i,o),this.cancelAllRequests=new Promise(h=>{this.deleteService=()=>Promise.resolve(h())});try{const h=new URL(l);this.customDomain=h.origin+(h.pathname==="/"?"":h.pathname),this.region=Qf}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function nb(n,e,t){const i=Vs(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(np(n.emulatorOrigin),rp("Functions",!0))}function rb(n,e,t){const i=o=>sb(n,e,o,{});return i.stream=(o,l)=>ab(n,e,o,l),i}async function ib(n,e,t,i){t["Content-Type"]="application/json";let o;try{o=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await o.json()}catch{}return{status:o.status,json:l}}async function M0(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function sb(n,e,t,i){const o=n._url(e);return ob(n,o,t,i)}async function ob(n,e,t,i){t=$c(t);const o={data:t},l=await M0(n,i),c=i.timeout||7e4,h=eb(c),p=await Promise.race([ib(e,o,l,n.fetchImpl),h.promise,n.cancelAllRequests]);if(h.cancel(),!p)throw new cn("cancelled","Firebase Functions instance was deleted.");const y=Wc(p.status,p.json);if(y)throw y;if(!p.json)throw new cn("internal","Response is not valid JSON object.");let w=p.json.data;if(typeof w>"u"&&(w=p.json.result),typeof w>"u")throw new cn("internal","Response is missing data field.");return{data:Yo(w)}}function ab(n,e,t,i){const o=n._url(e);return lb(n,o,t,i||{})}async function lb(n,e,t,i){var o;t=$c(t);const l={data:t},c=await M0(n,i);c["Content-Type"]="application/json",c.Accept="text/event-stream";let h;try{h=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:c,signal:i==null?void 0:i.signal})}catch(N){if(N instanceof Error&&N.name==="AbortError"){const $=new cn("cancelled","Request was cancelled.");return{data:Promise.reject($),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject($)}}}}}}const U=Wc(0,null);return{data:Promise.reject(U),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(U)}}}}}}let p,y;const w=new Promise((N,U)=>{p=N,y=U});(o=i==null?void 0:i.signal)===null||o===void 0||o.addEventListener("abort",()=>{const N=new cn("cancelled","Request was cancelled.");y(N)});const T=h.body.getReader(),S=ub(T,p,y,i==null?void 0:i.signal);return{stream:{[Symbol.asyncIterator](){const N=S.getReader();return{async next(){const{value:U,done:$}=await N.read();return{value:U,done:$}},async return(){return await N.cancel(),{done:!0,value:void 0}}}}},data:w}}function ub(n,e,t,i){const o=(c,h)=>{const p=c.match(ZN);if(!p)return;const y=p[1];try{const w=JSON.parse(y);if("result"in w){e(Yo(w.result));return}if("message"in w){h.enqueue(Yo(w.message));return}if("error"in w){const T=Wc(0,w);h.error(T),t(T);return}}catch(w){if(w instanceof cn){h.error(w),t(w);return}}},l=new TextDecoder;return new ReadableStream({start(c){let h="";return p();async function p(){if(i!=null&&i.aborted){const y=new cn("cancelled","Request was cancelled");return c.error(y),t(y),Promise.resolve()}try{const{value:y,done:w}=await n.read();if(w){h.trim()&&o(h.trim(),c),c.close();return}if(i!=null&&i.aborted){const S=new cn("cancelled","Request was cancelled");c.error(S),t(S),await n.cancel();return}h+=l.decode(y,{stream:!0});const T=h.split(`
`);h=T.pop()||"";for(const S of T)S.trim()&&o(S.trim(),c);return p()}catch(y){const w=y instanceof cn?y:Wc(0,null);c.error(w),t(w)}}},cancel(){return n.cancel()}})}const v_="@firebase/functions",__="0.12.9";/**
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
 */const cb="auth-internal",db="app-check-internal",hb="messaging-internal";function fb(n){const e=(t,{instanceIdentifier:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider(cb),c=t.getProvider(hb),h=t.getProvider(db);return new tb(o,l,c,h,i)};er(new Ln(im,e,"PUBLIC").setMultipleInstances(!0)),dn(v_,__,n),dn(v_,__,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n=Kc(),e=Qf){const i=Ms(He(n),im).getImmediate({identifier:e}),o=U_("functions");return o&&mb(i,...o),i}function mb(n,e,t){nb(He(n),e,t)}function gb(n,e,t){return rb(He(n),e)}fb();function yb({placeId:n,style:e={},alt:t="Place photo"}){const[i,o]=W.useState(null),[l,c]=W.useState(!0);return W.useEffect(()=>{if(!n){o(null),c(!1);return}if(!window.google||!window.google.maps||!window.google.maps.places){console.warn("Google Maps not loaded"),o(null),c(!1);return}c(!0);const h=document.createElement("div");new window.google.maps.places.PlacesService(h).getDetails({placeId:n,fields:["photos"]},(y,w)=>{var T;if(w===window.google.maps.places.PlacesServiceStatus.OK&&((T=y==null?void 0:y.photos)==null?void 0:T.length)>0){const S=y.photos[0].getUrl({maxWidth:1e3,maxHeight:600});o(S)}else o(null);c(!1)})},[n]),l||!i?_.jsx("div",{style:{...e,background:"linear-gradient(135deg, var(--color-surface-soft) 0%, var(--color-surface) 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:l&&_.jsx("span",{style:{color:"var(--color-text-muted)",fontSize:12},children:"Loading..."})}):_.jsx("img",{src:i,alt:t,style:e,onError:h=>{h.target.style.display="none"}})}function vb(n){return new Promise((e,t)=>{if(!window.google||!window.google.maps){t("Google Maps JS not loaded");return}new window.google.maps.places.PlacesService(document.createElement("div")).getDetails({placeId:n,fields:["geometry"]},(o,l)=>{l===window.google.maps.places.PlacesServiceStatus.OK?e(o.geometry.location.toJSON()):t(l)})})}async function _b(n,e){const t=`https://api.open-meteo.com/v1/forecast?latitude=${n}&longitude=${e}&hourly=temperature_2m,precipitation_probability,windspeed_10m,cloudcover&daily=temperature_2m_max,precipitation_probability_max,weathercode&timezone=auto`;return await(await fetch(t)).json()}function wb(n,e,t,i){let o="⛳",l="Good";n>=8?(o="☀️",l="Great conditions"):n>=6?(o="⛅",l="Good conditions"):n>=4?(o="🌥️",l="Fair conditions"):(o="🌧️",l="Challenging");const c=[];return t>50&&c.push("rain likely"),i>25&&c.push("windy"),e>35&&c.push("hot"),e<10&&c.push("cold"),{icon:o,label:l,warnings:c}}function Eb({placeId:n,date:e,tee:t}){const[i,o]=W.useState(null),[l,c]=W.useState(null),[h,p]=W.useState(!1),[y,w]=W.useState(!1),T=e!=null&&e.toDate?e.toDate().toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"}):null;if(W.useEffect(()=>{if(!n)return;async function R(){p(!0),c(null);try{const P=await vb(n);if(!P){c("Could not get course location");return}const O=await _b(P.lat,P.lng);let L=null;if(t){const[k]=t.split(":").map(Number);L=k}o({coords:P,weather:O,idx:L})}catch(P){console.error("Failed to load golf conditions:",P),c("Could not load conditions")}finally{p(!1)}}R()},[n,t,e]),!n)return null;const S={padding:"14px 16px",background:"var(--color-bg-secondary)",borderRadius:"var(--radius-lg)",cursor:"pointer",transition:"background 0.15s ease"};if(h)return _.jsx("div",{style:S,children:_.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:"Loading weather..."})});if(l)return _.jsx("div",{style:S,children:_.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:l})});if(!i)return null;const{weather:N,idx:U}=i,$=U??9,M=Math.round(N.hourly.temperature_2m[$]),ne=N.hourly.precipitation_probability[$],se=Math.round(N.hourly.windspeed_10m[$]),Z=N.hourly.cloudcover[$],le=10-(Math.abs(M-22)*.1+ne*.05+se*.05+Z*.01),Ce=Math.max(0,Math.min(10,le)),{icon:Re,label:b,warnings:A}=wb(Ce,M,ne,se);return _.jsxs("div",{style:S,onClick:()=>w(!y),children:[_.jsxs("div",{style:{fontSize:11,color:"var(--color-text-tertiary)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.04em",fontWeight:500},children:["Weather ",T&&`• ${T}`," ",t&&`@ ${t}`]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:24},children:Re}),_.jsxs("div",{children:[_.jsx("div",{style:{fontSize:15,fontWeight:500,color:"var(--color-text)"},children:b}),_.jsxs("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:[M,"°C • ",se," km/h wind • ",ne,"% rain"]})]})]}),_.jsx("span",{style:{fontSize:12,color:"var(--color-text-tertiary)",transform:y?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:"▼"})]}),A.length>0&&_.jsxs("div",{style:{fontSize:12,color:"var(--color-danger)",marginTop:8,display:"flex",alignItems:"center",gap:4},children:["⚠️ ",A.join(", ")]}),y&&_.jsxs("div",{style:{marginTop:12,paddingTop:12,borderTop:"1px solid var(--color-border)",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px 20px",fontSize:13},children:[_.jsxs("div",{children:[_.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Temperature"}),_.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[M,"°C"]})]}),_.jsxs("div",{children:[_.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Rain chance"}),_.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[ne,"%"]})]}),_.jsxs("div",{children:[_.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Wind"}),_.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[se," km/h"]})]}),_.jsxs("div",{children:[_.jsx("div",{style:{color:"var(--color-text-tertiary)",fontSize:11,marginBottom:2},children:"Cloud cover"}),_.jsxs("div",{style:{fontWeight:500,color:"var(--color-text)"},children:[Z,"%"]})]})]})]})}function w_(n,e){var S;if(!n)return"";const t=(S=n.date)!=null&&S.toDate?n.date.toDate():null,i=n.tee||"",o=n.courseName||"",l=n.notes||"";let c=t?new Date(t):new Date;if(i){const[N,U]=i.split(":").map($=>parseInt($,10));Number.isNaN(N)||c.setHours(N),Number.isNaN(U)||c.setMinutes(U)}const h=new Date(c.getTime()+4.5*60*60*1e3);function p(N){const U=N.getUTCFullYear(),$=String(N.getUTCMonth()+1).padStart(2,"0"),M=String(N.getUTCDate()).padStart(2,"0"),ne=String(N.getUTCHours()).padStart(2,"0"),se=String(N.getUTCMinutes()).padStart(2,"0"),Z=String(N.getUTCSeconds()).padStart(2,"0");return`${U}${$}${M}T${ne}${se}${Z}Z`}const y=`${p(c)}/${p(h)}`,w=`⛳ ${i||"Golf"} - ${o||"Golf Round"}`;return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:w,dates:y,details:l?`${l}

Event: ${e}`:`Event: ${e}`,location:o}).toString()}`}function Tb(n,e){return n?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e||"Golf Course")}&query_place_id=${n}`:e?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`:null}function Ib(){const{id:n}=RI(),e=ea(),{user:t,isAdmin:i}=Yi(),[o,l]=W.useState(null),[c,h]=W.useState({}),[p,y]=W.useState(null),[w,T]=W.useState(!0),[S,N]=W.useState(!1),[U,$]=W.useState(!1),[M,ne]=W.useState(!1),[se,Z]=W.useState(!1),[le,Ce]=W.useState({title:"",notes:"",courseName:"",courseAddress:"",coursePlaceId:"",coursePhotoUrl:"",tee:"",rsvpDeadline:""}),[Re,b]=W.useState([]),[A,R]=W.useState(!0),P=4;W.useEffect(()=>{async function Y(){try{const ge=Lt(Qe,"events",n),xe=await a0(ge);if(!xe.exists()){e("/");return}const Ne=xe.data();l({id:xe.id,...Ne});const St=Ne.responses||{};h(St),t&&y(St[t.uid]||null),Ce({title:Ne.title||"",notes:Ne.notes||"",courseName:Ne.courseName||"",courseAddress:Ne.courseAddress||"",coursePlaceId:Ne.coursePlaceId||"",coursePhotoUrl:Ne.coursePhotoUrl||"",tee:Ne.tee||"",rsvpDeadline:Ne.rsvpDeadline?Ne.rsvpDeadline.toDate().toISOString().slice(0,10):""})}catch(ge){console.error("Error loading event",ge)}finally{T(!1)}}async function re(){try{const ge=Ar(Qe,"users"),Ne=(await qi(ge)).docs.map(St=>({id:St.id,...St.data()}));b(Ne)}catch(ge){console.error("Error loading users",ge)}finally{R(!1)}}Y(),re()},[n,e,t]);async function O(Y){if(!(!t||!o)){N(!0);try{const re=Lt(Qe,"events",o.id),ge={...c,[t.uid]:Y};await Xn(re,{responses:ge}),h(ge),y(Y)}catch(re){console.error("Error updating response",re)}finally{N(!1)}}}const L=async Y=>{if(!o||!Y)return;const re=Lt(Qe,"events",o.id),ge={...c};delete ge[Y],await Xn(re,{responses:ge}),h(ge),Y===(t==null?void 0:t.uid)&&y(null)},k=async()=>{if(!o)return;const Y=Lt(Qe,"events",n);await Xn(Y,{booked:!0,bookedAt:new Date().toISOString()}),l(re=>re&&{...re,booked:!0,bookedAt:new Date().toISOString()})},Je=async()=>{if(!o)return;const Y=Lt(Qe,"events",n);await Xn(Y,{booked:!1,bookedAt:null}),l(re=>re&&{...re,booked:!1,bookedAt:null})},dt=async()=>{if(o){Z(!0);try{const Y=pb(Td,"us-central1"),ge=await gb(Y,"triggerRsvpReminder")({eventId:o.id});alert(ge.data.message||"Reminders sent!")}catch(Y){console.error("Error sending reminder:",Y),alert("Failed to send reminder: "+(Y.message||"Unknown error"))}finally{Z(!1)}}};async function ht(){if(o)try{const Y=Lt(Qe,"events",o.id);let re={title:le.title||o.title,notes:le.notes,courseName:le.courseName,courseAddress:le.courseAddress,coursePlaceId:le.coursePlaceId,coursePhotoUrl:le.coursePhotoUrl,tee:le.tee,rsvpDeadline:le.rsvpDeadline?We.fromDate(new Date(le.rsvpDeadline+"T23:59:59")):null};await Xn(Y,re),l(ge=>ge&&{...ge,...re}),$(!1)}catch(Y){console.error("Error saving edits",Y),alert("Could not save changes.")}}async function Ue(){if(!(!o||!window.confirm("Delete this event?")))try{await l0(Lt(Qe,"events",o.id)),e("/")}catch(Y){console.error("Error deleting event",Y)}}async function oe(){var Ne;if(!o)return;const Y=(Ne=o.date)!=null&&Ne.toDate?o.date.toDate():null,re=(Y==null?void 0:Y.toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"}))||"",ge=window.location.href;let xe=`⛳ *${o.title||"Golf round"}*
`;re&&(xe+=`📅 ${re}
`),o.tee&&(xe+=`🕒 ${o.tee}
`),o.courseName&&(xe+=`📍 ${o.courseName}
`),xe+=`
🔗 ${ge}`;try{await navigator.clipboard.writeText(xe),alert("Copied to clipboard!")}catch{alert("Could not copy.")}}if(w||A)return _.jsx("div",{className:"page",children:_.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto",textAlign:"center"},children:"Loading…"})});if(!o)return _.jsx("div",{className:"page",children:_.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto"},children:"Event not found."})});const _e=Object.entries(c).filter(([Y,re])=>re==="available").map(([Y])=>Y),ae=_e.slice(0,P),V=_e.slice(P),G=t&&V.includes(t.uid),H=t&&ae.includes(t.uid),ue=Y=>{var ge;const re=Re.find(xe=>xe.id===Y);return(re==null?void 0:re.username)||((ge=re==null?void 0:re.email)==null?void 0:ge.split("@")[0])||"Unknown"},he=Tb(o.coursePlaceId,o.courseName);return _.jsxs("div",{className:"page",style:{display:"flex",flexDirection:"column",gap:16},children:[_.jsxs("div",{className:"card",style:{padding:0},children:[_.jsxs("div",{style:{position:"relative",height:180,background:"var(--color-bg-tertiary)",overflow:"hidden",borderRadius:"12px 12px 0 0"},children:[_.jsx(yb,{placeId:o.coursePlaceId,alt:o.courseName||"Course",style:{width:"100%",height:"100%",objectFit:"cover"}}),_.jsx("div",{style:{position:"absolute",top:12,right:12,display:"flex",gap:8},children:_.jsxs("span",{className:`status-badge ${o.booked?"status-badge--booked":"status-badge--proposed"}`,children:[_.jsx("span",{className:"status-badge--dot"}),o.booked?"Booked":"Proposed"]})})]}),_.jsxs("div",{style:{padding:20},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12},children:[_.jsx("div",{style:{flex:1},children:U?_.jsx("input",{className:"input",value:le.title,onChange:Y=>Ce(re=>({...re,title:Y.target.value})),placeholder:"Event title",style:{fontSize:18,fontWeight:600,marginBottom:8}}):_.jsx("h1",{style:{fontSize:22,marginBottom:4},children:o.title})}),i&&_.jsxs("div",{style:{position:"relative"},children:[U?_.jsxs("div",{style:{display:"flex",gap:6},children:[_.jsx("button",{className:"btn btn-primary btn-sm",onClick:ht,children:"Save"}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>$(!1),children:"Cancel"})]}):_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>ne(!M),children:"•••"}),M&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{position:"fixed",inset:0,zIndex:100},onClick:()=>ne(!1)}),_.jsxs("div",{className:"dropdown-menu",style:{zIndex:101},children:[_.jsx("button",{className:"dropdown-item",onClick:()=>{$(!0),ne(!1)},children:"✏️ Edit"}),_.jsx("button",{className:"dropdown-item",onClick:()=>{oe(),ne(!1)},children:"📤 Share"}),o.booked&&_.jsx("button",{className:"dropdown-item",onClick:()=>{window.open(w_(o,window.location.href),"_blank"),ne(!1)},children:"📅 Add to Calendar"}),_.jsx("button",{className:"dropdown-item",onClick:()=>{o.booked?Je():k(),ne(!1)},children:o.booked?"↩️ Unmark Booked":"✅ Mark Booked"}),!o.booked&&_.jsx("button",{className:"dropdown-item",onClick:()=>{dt(),ne(!1)},disabled:se,children:se?"🔔 Sending...":"🔔 Send RSVP Reminder"}),_.jsx("div",{className:"dropdown-divider"}),_.jsx("button",{className:"dropdown-item dropdown-item--danger",onClick:()=>{Ue(),ne(!1)},children:"🗑️ Delete"})]})]})]})]}),_.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,marginTop:16},children:U?_.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:12},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Course"}),_.jsx(V0,{initialValue:le.courseName,onSelect:Y=>Ce(re=>({...re,courseName:Y.name,courseAddress:Y.address,coursePlaceId:Y.placeId,coursePhotoUrl:Y.photoUrl}))})]}),_.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Tee Time"}),_.jsx("input",{className:"input",type:"time",value:le.tee,onChange:Y=>Ce(re=>({...re,tee:Y.target.value}))})]}),_.jsxs("div",{children:[_.jsx("label",{children:"RSVP Deadline"}),_.jsx("input",{className:"input",type:"date",value:le.rsvpDeadline,onChange:Y=>Ce(re=>({...re,rsvpDeadline:Y.target.value}))})]})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Notes"}),_.jsx("textarea",{className:"input",rows:2,value:le.notes,onChange:Y=>Ce(re=>({...re,notes:Y.target.value}))})]})]}):_.jsxs(_.Fragment,{children:[o.courseName&&_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[_.jsx("span",{style:{fontSize:16},children:"📍"}),he?_.jsx("a",{href:he,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary)",textDecoration:"none"},children:o.courseName}):_.jsx("span",{children:o.courseName})]}),o.tee&&_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[_.jsx("span",{style:{fontSize:16},children:"🕐"}),_.jsx("span",{children:o.tee})]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:14},children:[_.jsx("span",{style:{fontSize:16},children:"👥"}),_.jsxs("span",{children:[ae.length,"/",P]})]})]})}),!U&&o.notes&&_.jsx("p",{style:{marginTop:12,fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.5},children:o.notes}),!U&&o.coursePlaceId&&_.jsx("div",{style:{marginTop:16},children:_.jsx(Eb,{placeId:o.coursePlaceId,tee:o.tee,date:o.date})})]})]}),!U&&_.jsx("div",{className:"card rsvp-card",children:o.booked?_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:20},children:"🔒"}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:500},children:"RSVPs closed"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:"This round is booked"})]}),H&&_.jsx("button",{className:"btn btn-primary btn-sm",style:{marginLeft:"auto"},onClick:()=>window.open(w_(o,window.location.href),"_blank"),children:"📅 Add to Calendar"})]}):_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{marginBottom:12,fontWeight:500},children:"Are you in?"}),ae.length>=P&&!p&&_.jsx("div",{style:{marginBottom:12,padding:"8px 12px",background:"var(--color-warning-soft)",borderRadius:6,fontSize:13,color:"var(--color-warning)"},children:"Group is full — you'll be added to the reserve list"}),_.jsxs("div",{className:"rsvp-buttons",children:[_.jsx("button",{className:`rsvp-btn rsvp-btn--available ${p==="available"?"active":""}`,onClick:()=>O(p==="available"?null:"available"),disabled:S,children:S&&p==="available"?"...":"✓ I'm in"}),_.jsx("button",{className:`rsvp-btn rsvp-btn--unavailable ${p==="unavailable"?"active":""}`,onClick:()=>O(p==="unavailable"?null:"unavailable"),disabled:S,children:S&&p==="unavailable"?"...":"✗ Can't make it"})]})]})}),p&&!U&&_.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:p==="available"?G?"var(--color-warning-soft)":"var(--color-success-soft)":"var(--color-bg-secondary)",display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:18},children:p==="available"?G?"🔔":"✓":"✗"}),_.jsxs("div",{style:{flex:1},children:[_.jsx("div",{style:{fontWeight:500,fontSize:14},children:p==="available"?G?"You're on the reserve list":"You're in!":"You declined"}),G&&_.jsxs("div",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:["Position ",V.indexOf(t.uid)+1," in queue"]})]})]}),_.jsxs("div",{className:"card",children:[_.jsxs("div",{className:"section-header",children:[_.jsx("span",{className:"section-title",children:"Players"}),_.jsxs("span",{className:"section-count",children:[ae.length,"/",P]})]}),ae.length===0?_.jsxs("div",{className:"empty-state",style:{padding:"24px 0"},children:[_.jsx("div",{style:{fontSize:32,marginBottom:8},children:"🏌️"}),_.jsx("div",{children:"No one has responded yet"})]}):_.jsx("div",{className:"player-list",children:ae.map(Y=>{const re=Y===(t==null?void 0:t.uid);return _.jsxs("div",{className:"player-item",children:[_.jsxs("div",{className:"player-info",children:[_.jsx("div",{className:`player-avatar ${re?"player-avatar--you":""}`,children:ue(Y).charAt(0).toUpperCase()}),_.jsxs("span",{className:"player-name",children:[ue(Y),re&&_.jsx("span",{className:"player-badge",children:"You"})]})]}),i&&_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>L(Y),children:"Remove"})]},Y)})}),V.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"divider"}),_.jsxs("div",{className:"section-header",children:[_.jsx("span",{className:"section-title",children:"Reserve List"}),_.jsx("span",{className:"section-count",children:V.length})]}),_.jsx("div",{className:"player-list",children:V.map((Y,re)=>{const ge=Y===(t==null?void 0:t.uid);return _.jsxs("div",{className:"player-item",style:{opacity:.7},children:[_.jsxs("div",{className:"player-info",children:[_.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"var(--color-warning-soft)",color:"var(--color-warning)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:600},children:re+1}),_.jsxs("span",{className:"player-name",children:[ue(Y),ge&&_.jsx("span",{className:"player-badge",style:{background:"var(--color-warning)"},children:"You"})]})]}),i&&_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>L(Y),children:"Remove"})]},Y)})})]})]})]})}function Sb(){const[n,e]=W.useState([]),[t,i]=W.useState([]),[o,l]=W.useState(!0);W.useEffect(()=>{async function p(){const w=(await qi(Ar(Qe,"events"))).docs.map(N=>({id:N.id,...N.data()})),S=(await qi(Ar(Qe,"users"))).docs.map(N=>({id:N.id,...N.data()}));e(w),i(S),l(!1)}p()},[]);const c=async p=>{confirm("Delete this event?")&&(await l0(Lt(Qe,"events",p)),e(y=>y.filter(w=>w.id!==p)))},h=async(p,y)=>{const w=Lt(Qe,"users",p);await Xn(w,{isAdmin:!y}),i(T=>T.map(S=>S.id===p?{...S,isAdmin:!y}:S))};return o?_.jsx("div",{className:"page",children:_.jsx("div",{className:"card",style:{textAlign:"center",padding:40},children:"Loading…"})}):_.jsxs("div",{className:"page",children:[_.jsx("div",{className:"page-header",children:_.jsxs("div",{className:"page-header-title",children:[_.jsx("h1",{children:"Admin"}),_.jsx("p",{children:"Manage events and users"})]})}),_.jsxs("div",{className:"card",style:{marginBottom:20},children:[_.jsxs("div",{className:"section-header",children:[_.jsx("span",{className:"section-title",children:"Events"}),_.jsx("span",{className:"section-count",children:n.length})]}),n.length===0?_.jsx("p",{style:{color:"var(--color-text-secondary)",padding:"12px 0"},children:"No events yet"}):n.map((p,y)=>{var T,S;const w=(S=(T=p.date)==null?void 0:T.toDate)==null?void 0:S.call(T).toLocaleString("en-AU",{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return _.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:y<n.length-1?"1px solid var(--color-divider)":"none",gap:12},children:[_.jsxs("div",{style:{flex:1,minWidth:0},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:2},children:[_.jsx("span",{style:{fontWeight:500},children:p.title}),_.jsx("span",{className:`status-badge ${p.booked?"status-badge--booked":"status-badge--proposed"}`,children:p.booked?"Booked":"Proposed"})]}),_.jsx("span",{style:{fontSize:13,color:"var(--color-text-secondary)"},children:w})]}),_.jsxs("div",{style:{display:"flex",gap:6,flexShrink:0},children:[_.jsx(Dn,{to:`/event/${p.id}`,className:"btn btn-ghost btn-sm",children:"Open"}),_.jsx("button",{className:"btn btn-ghost btn-sm",style:{color:"var(--color-danger)"},onClick:()=>c(p.id),children:"Delete"})]})]},p.id)})]}),_.jsxs("div",{className:"card",children:[_.jsxs("div",{className:"section-header",children:[_.jsx("span",{className:"section-title",children:"Users"}),_.jsx("span",{className:"section-count",children:t.length})]}),t.map((p,y)=>_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:y<t.length-1?"1px solid var(--color-divider)":"none",gap:12},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("div",{className:"avatar",children:(p.username||p.email||"?").charAt(0).toUpperCase()}),_.jsxs("div",{children:[_.jsx("span",{style:{fontWeight:500},children:p.username||p.email}),p.isAdmin&&_.jsx("span",{style:{marginLeft:8,fontSize:11,padding:"2px 6px",borderRadius:4,background:"var(--color-primary-soft)",color:"var(--color-primary)",fontWeight:500},children:"Admin"})]})]}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>h(p.id,p.isAdmin),children:p.isAdmin?"Remove Admin":"Make Admin"})]},p.id))]})]})}function Ab(){return _.jsxs("div",{className:"card",style:{maxWidth:420,marginInline:"auto",marginTop:"3rem"},children:[_.jsx("h1",{children:"404"}),_.jsx("p",{className:"helper-text",style:{marginTop:"0.4rem"},children:"That page doesn't exist. Head back to the calendar."}),_.jsx(Dn,{to:"/",className:"btn btn-secondary",style:{marginTop:"1rem"},children:"Back to calendar"})]})}function ac({children:n}){const{user:e,loading:t}=Yi();return t?_.jsx("div",{className:"main-inner",children:_.jsx("div",{className:"card",children:"Checking who you are…"})}):e?n:_.jsx(_c,{to:"/login",replace:!0})}function Cb({children:n}){const{user:e,isAdmin:t,loading:i}=Yi();return i?_.jsx("div",{className:"main-inner",children:_.jsx("div",{className:"card",children:"Checking permissions…"})}):e?t?n:_.jsx(_c,{to:"/",replace:!0}):_.jsx(_c,{to:"/login",replace:!0})}function kb(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),[c,h]=W.useState(!1);async function p(w){if(w.includes("@"))return w;const T=Ll(Ar(Qe,"users"),Ml("username","==",w.toLowerCase())),S=await qi(T);if(S.empty)throw new Error("Username not found");return S.docs[0].data().email}async function y(w){w.preventDefault(),l(""),i(""),h(!0);try{const T=await p(n);await VA(jl,T),i("Password reset link sent! Check your email.")}catch(T){l(T.message)}h(!1)}return _.jsx("div",{style:{maxWidth:420,margin:"4rem auto",padding:"1rem"},children:_.jsxs("div",{className:"surface",style:{padding:"2rem"},children:[_.jsx("h1",{style:{marginTop:0},children:"Reset password"}),_.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"1rem"},children:"Enter your email or username, and we’ll send you a reset link."}),_.jsxs("form",{onSubmit:y,children:[_.jsx("input",{className:"input",placeholder:"Email or username",value:n,onChange:w=>e(w.target.value),style:{marginBottom:"1rem"}}),t&&_.jsx("p",{style:{color:"var(--success)"},children:t}),o&&_.jsx("p",{style:{color:"var(--danger)"},children:o}),_.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:c?"Sending...":"Send reset link"})]})]})})}function Rb(){const{user:n}=Yi(),[e,t]=W.useState(""),[i,o]=W.useState(""),[l,c]=W.useState("");if(!n)return _.jsx("p",{children:"Loading…"});async function h(y){const w=Ll(Ar(Qe,"users"),Ml("username","==",y.toLowerCase()));return!(await qi(w)).empty}async function p(y){y.preventDefault(),o(""),c("");const w=e.toLowerCase().trim();if(!w.match(/^[a-z0-9_]+$/)){o("Username must be letters, numbers or underscores.");return}if(await h(w)){o("Username already taken.");return}await Xn(Lt(Qe,"users",n.uid),{username:w}),c("Username updated!")}return _.jsx("div",{style:{maxWidth:420,margin:"4rem auto"},children:_.jsxs("div",{className:"surface",style:{padding:"2rem"},children:[_.jsx("h1",{children:"Change username"}),_.jsxs("form",{onSubmit:p,children:[_.jsx("input",{className:"input",placeholder:"New username",value:e,onChange:y=>t(y.target.value),style:{marginBottom:"1rem"}}),i&&_.jsx("p",{style:{color:"var(--danger)"},children:i}),l&&_.jsx("p",{style:{color:"var(--success)"},children:l}),_.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Update username"})]})]})})}const Pb="BOjFZAtY_oM-ci1cnb3p5sT23gsjbwZo4kINDrd-QFSIMk4zDL89q12PHLyh-_16BWitVjsk9UsNKuUPBuXTrT0";let E_=null;const sm=()=>"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window,T_=()=>sm()?Notification.permission:"unsupported",xb=async n=>{if(!sm())return console.log("Push notifications not supported"),{success:!1,error:"not_supported"};try{if(await Notification.requestPermission()!=="granted")return console.log("Notification permission denied"),{success:!1,error:"permission_denied"};const t="/golfgang/",i=`${t}firebase-messaging-sw.js`.replace("//","/");console.log("Registering service worker at:",i);const o=await navigator.serviceWorker.register(i,{scope:t});if(console.log("Service worker registered:",o),await navigator.serviceWorker.ready,console.log("Service worker ready"),!E_)return console.error("Messaging not initialized"),{success:!1,error:"messaging_not_initialized"};const l=await zN(E_,{vapidKey:Pb,serviceWorkerRegistration:o});return l?(console.log("FCM Token obtained:",l.substring(0,20)+"..."),await Nb(n,l),{success:!0,token:l}):(console.log("No registration token available"),{success:!1,error:"no_token"})}catch(e){return console.error("Error requesting notification permission:",e),{success:!1,error:e.message}}},Nb=async(n,e)=>{try{const t=Lt(Qe,"users",n);await Xn(t,{fcmTokens:gx(e),notificationsEnabled:!0,lastTokenUpdate:new Date().toISOString()}),console.log("Token saved to user document")}catch(t){throw console.error("Error saving token:",t),t}},I_=async()=>{if(console.log("sendTestNotification called"),console.log("Notification.permission:",Notification.permission),Notification.permission!=="granted"){console.log("Notification permission not granted"),alert("Notification permission not granted. Please enable notifications first.");return}try{if(!("serviceWorker"in navigator)){console.error("Service Worker not supported"),alert("Service Worker not supported in this browser");return}console.log("Waiting for service worker to be ready...");const n=await navigator.serviceWorker.ready;if(console.log("Service worker ready:",n),!n){console.error("No service worker registration found"),alert("Service worker not ready. Please refresh and try again.");return}console.log("Sending notification via service worker..."),await n.showNotification("🏌️ GolfGang Test",{body:"Push notifications are working! 🎉",icon:"/logo192.png",badge:"/logo192.png",tag:"test-notification-"+Date.now(),vibrate:[200,100,200],requireInteraction:!1}),console.log("Test notification sent successfully")}catch(n){console.error("Failed to send test notification:",n),alert(`Failed to send notification: ${n.message}`)}};function bb(){const{user:n}=Yi(),[e,t]=W.useState("default"),[i,o]=W.useState(!1),[l,c]=W.useState(!0);W.useEffect(()=>{c(sm()),t(T_())},[]);const h=async()=>{if(!n)return;o(!0);const p=await xb(n.uid);o(!1),p.success?(t("granted"),setTimeout(()=>{I_()},1e3)):t(T_())};return l?e==="granted"?_.jsx("div",{style:{padding:16,background:"var(--color-success-soft)",borderRadius:12,marginBottom:16},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:24},children:"🔔"}),_.jsxs("div",{style:{flex:1},children:[_.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-success)"},children:"Notifications Enabled"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"You'll receive updates about events and RSVPs."})]}),_.jsx("button",{className:"btn btn-ghost btn-sm",onClick:I_,children:"Test"})]})}):e==="denied"?_.jsx("div",{style:{padding:16,background:"var(--color-danger-soft)",borderRadius:12,marginBottom:16},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:24},children:"🔕"}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,marginBottom:2,color:"var(--color-danger)"},children:"Notifications Blocked"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Enable notifications in your browser settings to receive updates."})]})]})}):_.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[_.jsx("span",{style:{fontSize:24},children:"🔔"}),_.jsxs("div",{style:{flex:1,minWidth:200},children:[_.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Enable Push Notifications"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Get notified when events are booked or when you're invited."})]}),_.jsx("button",{className:"btn btn-primary",onClick:h,disabled:i,children:i?"Enabling...":"Enable"})]})}):_.jsx("div",{style:{padding:16,background:"var(--color-surface-soft)",borderRadius:12,marginBottom:16},children:_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[_.jsx("span",{style:{fontSize:24},children:"📵"}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,marginBottom:2},children:"Notifications Not Supported"}),_.jsx("div",{style:{fontSize:13,color:"var(--color-text-muted)"},children:"Your browser doesn't support push notifications."})]})]})})}function Db(){const{user:n,profile:e}=Yi(),[t,i]=W.useState((n==null?void 0:n.email)||""),[o,l]=W.useState((e==null?void 0:e.username)||""),[c,h]=W.useState(""),[p,y]=W.useState(""),[w,T]=W.useState(""),[S,N]=W.useState("");if(!n||!e)return _.jsx("div",{className:"page",children:_.jsx("div",{className:"card",style:{maxWidth:400,margin:"3rem auto",textAlign:"center"},children:"Loading…"})});async function U(Z){const le=Ll(Ar(Qe,"users"),Ml("username","==",Z)),Ce=await qi(le);return!Ce.empty&&Ce.docs[0].id!==n.uid}async function $(){const Z=js.credential(n.email,c);await OA(n,Z)}async function M(){T(""),N("");const Z=o.toLowerCase().trim();if(!Z.match(/^[a-z0-9_]+$/)){N("Username can only contain letters, numbers, and underscores.");return}if(await U(Z)){N("That username is already taken.");return}await Xn(Lt(Qe,"users",n.uid),{username:Z}),T("Username updated.")}async function ne(){T(""),N("");try{await $(),await jA(n,t),await Xn(Lt(Qe,"users",n.uid),{email:t}),T("Email updated.")}catch(Z){N(Z.message)}}async function se(){T(""),N("");try{await $(),await FA(n,p),T("Password updated."),y(""),h("")}catch(Z){N(Z.message)}}return _.jsx("div",{className:"page",children:_.jsxs("div",{style:{maxWidth:480,margin:"0 auto"},children:[_.jsx("div",{className:"page-header",children:_.jsxs("div",{className:"page-header-title",children:[_.jsx("h1",{children:"Profile"}),_.jsx("p",{children:"Manage your account settings"})]})}),_.jsx(bb,{}),w&&_.jsx("div",{className:"toast toast-success",style:{marginBottom:16},children:w}),S&&_.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:S}),_.jsxs("div",{className:"card",style:{marginBottom:16},children:[_.jsx("div",{className:"section-header",style:{marginBottom:12},children:_.jsx("span",{className:"section-title",children:"Username"})}),_.jsxs("div",{style:{marginBottom:12},children:[_.jsx("input",{className:"input",value:o,onChange:Z=>l(Z.target.value),placeholder:"Your username"}),_.jsx("p",{className:"helper-text",style:{marginTop:4},children:"Letters, numbers, and underscores only"})]}),_.jsx("button",{className:"btn btn-primary btn-sm",onClick:M,children:"Update username"})]}),_.jsxs("div",{className:"card",style:{marginBottom:16},children:[_.jsx("div",{className:"section-header",style:{marginBottom:12},children:_.jsx("span",{className:"section-title",children:"Email"})}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Email address"}),_.jsx("input",{className:"input",type:"email",value:t,onChange:Z=>i(Z.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Current password (to confirm)"}),_.jsx("input",{className:"input",type:"password",value:c,onChange:Z=>h(Z.target.value),placeholder:"Enter current password"})]})]}),_.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:12},onClick:ne,children:"Update email"})]}),_.jsxs("div",{className:"card",children:[_.jsx("div",{className:"section-header",style:{marginBottom:12},children:_.jsx("span",{className:"section-title",children:"Change password"})}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[_.jsxs("div",{children:[_.jsx("label",{children:"Current password"}),_.jsx("input",{className:"input",type:"password",value:c,onChange:Z=>h(Z.target.value),placeholder:"Enter current password"})]}),_.jsxs("div",{children:[_.jsx("label",{children:"New password"}),_.jsx("input",{className:"input",type:"password",value:p,onChange:Z=>y(Z.target.value),placeholder:"Enter new password"})]})]}),_.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:12},onClick:se,children:"Update password"})]})]})})}function Ob(){const n=ea(),[e,t]=W.useState(""),[i,o]=W.useState(""),[l,c]=W.useState(""),[h,p]=W.useState(""),[y,w]=W.useState(!1);async function T(N){const U=N.toLowerCase(),$=Ll(Ar(Qe,"users"),Ml("username","==",U));return!(await qi($)).empty}async function S(N){N.preventDefault(),p("");const U=i.trim().toLowerCase();if(!U.match(/^[a-z0-9_]+$/)){p("Username can only contain letters, numbers, and underscores.");return}w(!0);try{if(await T(U)){p("That username is already taken."),w(!1);return}const $=await LA(jl,e,l);await fx(Lt(Qe,"users",$.user.uid),{email:e,username:U,isAdmin:!1}),n("/")}catch($){p($.message||"Signup failed")}w(!1)}return _.jsx("div",{style:{minHeight:"calc(100vh - var(--nav-height))",display:"flex",justifyContent:"center",alignItems:"center",padding:24},children:_.jsxs("div",{className:"card",style:{width:"100%",maxWidth:400},children:[_.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[_.jsx("div",{style:{width:48,height:48,borderRadius:12,background:"linear-gradient(135deg, #0f7b6c 0%, #2383e2 100%)",margin:"0 auto 16px"}}),_.jsx("h1",{style:{marginBottom:4},children:"Create account"}),_.jsx("p",{style:{margin:0,color:"var(--color-text-secondary)",fontSize:14},children:"Join GolfGang to plan rounds with friends"})]}),h&&_.jsx("div",{className:"toast toast-danger",style:{marginBottom:16},children:h}),_.jsxs("form",{onSubmit:S,children:[_.jsxs("div",{style:{marginBottom:16},children:[_.jsx("label",{children:"Email"}),_.jsx("input",{className:"input",type:"email",value:e,onChange:N=>t(N.target.value),placeholder:"you@example.com",required:!0})]}),_.jsxs("div",{style:{marginBottom:16},children:[_.jsx("label",{children:"Username"}),_.jsx("input",{className:"input",value:i,onChange:N=>o(N.target.value),placeholder:"Choose a username",required:!0}),_.jsx("p",{className:"helper-text",style:{marginTop:4},children:"Letters, numbers, and underscores only"})]}),_.jsxs("div",{style:{marginBottom:20},children:[_.jsx("label",{children:"Password"}),_.jsx("input",{className:"input",type:"password",placeholder:"Create a password",value:l,onChange:N=>c(N.target.value),required:!0})]}),_.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px 16px"},disabled:y,type:"submit",children:y?"Creating account…":"Sign up"})]}),_.jsxs("div",{style:{marginTop:20,textAlign:"center",fontSize:14},children:[_.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Already have an account? "}),_.jsx("a",{href:"/login",children:"Sign in"})]})]})})}function Vb(){return _.jsxs("div",{className:"app-shell",children:[_.jsx(HN,{}),_.jsx("main",{className:"main-inner",children:_.jsxs(WI,{children:[_.jsx(bn,{path:"/",element:_.jsx(ac,{children:_.jsx(KN,{})})}),_.jsx(bn,{path:"/login",element:_.jsx(g_,{})}),_.jsx(bn,{path:"/event/:id",element:_.jsx(ac,{children:_.jsx(Ib,{})})}),_.jsx(bn,{path:"/admin",element:_.jsx(Cb,{children:_.jsx(Sb,{})})}),_.jsx(bn,{path:"/404",element:_.jsx(Ab,{})}),_.jsx(bn,{path:"*",element:_.jsx(_c,{to:"/404"})}),_.jsx(bn,{path:"/signup",element:_.jsx(Ob,{})}),_.jsx(bn,{path:"/reset-password",element:_.jsx(kb,{})}),_.jsx(bn,{path:"/login",element:_.jsx(g_,{})}),_.jsx(bn,{path:"/profile",element:_.jsx(ac,{children:_.jsx(Db,{})})}),_.jsx(bn,{path:"/change-username",element:_.jsx(ac,{children:_.jsx(Rb,{})})})]})})]})}const Lb=W.createContext(null);function Mb({children:n}){return _.jsx(Lb.Provider,{value:{theme:"light"},children:n})}JT.createRoot(document.getElementById("root")).render(_.jsx(A_.StrictMode,{children:_.jsx(JI,{basename:"/golfgang/",children:_.jsx(Mb,{children:_.jsx(qN,{children:_.jsx(Vb,{})})})})}));
