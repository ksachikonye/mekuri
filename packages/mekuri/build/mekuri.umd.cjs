(function(P,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],i):(P=typeof globalThis<"u"?globalThis:P||self,i(P.mekuri={},P.React))})(this,function(P,i){"use strict";var H={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function De(){if(ee)return I;ee=1;var a=i,n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,v=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function d(b,h,R){var E,C={},w=null,W=null;R!==void 0&&(w=""+R),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(W=h.ref);for(E in h)c.call(h,E)&&!g.hasOwnProperty(E)&&(C[E]=h[E]);if(b&&b.defaultProps)for(E in h=b.defaultProps,h)C[E]===void 0&&(C[E]=h[E]);return{$$typeof:n,type:b,key:w,ref:W,props:C,_owner:v.current}}return I.Fragment=s,I.jsx=d,I.jsxs=d,I}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Fe(){return re||(re=1,process.env.NODE_ENV!=="production"&&function(){var a=i,n=Symbol.for("react.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),b=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),ue=Symbol.iterator,Qe="@@iterator";function qe(e){if(e===null||typeof e!="object")return null;var r=ue&&e[ue]||e[Qe];return typeof r=="function"?r:null}var A=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];$e("error",e,t)}}function $e(e,r,t){{var o=A.ReactDebugCurrentFrame,f=o.getStackAddendum();f!==""&&(r+="%s",t=t.concat([f]));var p=t.map(function(l){return String(l)});p.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,p)}}var er=!1,rr=!1,tr=!1,nr=!1,ar=!1,ce;ce=Symbol.for("react.module.reference");function or(e){return!!(typeof e=="string"||typeof e=="function"||e===c||e===g||ar||e===v||e===R||e===E||nr||e===W||er||rr||tr||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===C||e.$$typeof===d||e.$$typeof===b||e.$$typeof===h||e.$$typeof===ce||e.getModuleId!==void 0))}function ir(e,r,t){var o=e.displayName;if(o)return o;var f=r.displayName||r.name||"";return f!==""?t+"("+f+")":t}function le(e){return e.displayName||"Context"}function O(e){if(e==null)return null;if(typeof e.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case c:return"Fragment";case s:return"Portal";case g:return"Profiler";case v:return"StrictMode";case R:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case b:var r=e;return le(r)+".Consumer";case d:var t=e;return le(t._context)+".Provider";case h:return ir(e,e.render,"ForwardRef");case C:var o=e.displayName||null;return o!==null?o:O(e.type)||"Memo";case w:{var f=e,p=f._payload,l=f._init;try{return O(l(p))}catch{return null}}}return null}var k=Object.assign,M=0,fe,de,ve,pe,he,ge,be;function ye(){}ye.__reactDisabledLog=!0;function sr(){{if(M===0){fe=console.log,de=console.info,ve=console.warn,pe=console.error,he=console.group,ge=console.groupCollapsed,be=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ye,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function ur(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:fe}),info:k({},e,{value:de}),warn:k({},e,{value:ve}),error:k({},e,{value:pe}),group:k({},e,{value:he}),groupCollapsed:k({},e,{value:ge}),groupEnd:k({},e,{value:be})})}M<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=A.ReactCurrentDispatcher,G;function U(e,r,t){{if(G===void 0)try{throw Error()}catch(f){var o=f.stack.trim().match(/\n( *(at )?)/);G=o&&o[1]||""}return`
`+G+e}}var K=!1,B;{var cr=typeof WeakMap=="function"?WeakMap:Map;B=new cr}function me(e,r){if(!e||K)return"";{var t=B.get(e);if(t!==void 0)return t}var o;K=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var p;p=J.current,J.current=null,sr();try{if(r){var l=function(){throw Error()};if(Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(S){o=S}Reflect.construct(e,[],l)}else{try{l.call()}catch(S){o=S}e.call(l.prototype)}}else{try{throw Error()}catch(S){o=S}e()}}catch(S){if(S&&o&&typeof S.stack=="string"){for(var u=S.stack.split(`
`),_=o.stack.split(`
`),y=u.length-1,m=_.length-1;y>=1&&m>=0&&u[y]!==_[m];)m--;for(;y>=1&&m>=0;y--,m--)if(u[y]!==_[m]){if(y!==1||m!==1)do if(y--,m--,m<0||u[y]!==_[m]){var x=`
`+u[y].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),typeof e=="function"&&B.set(e,x),x}while(y>=1&&m>=0);break}}}finally{K=!1,J.current=p,ur(),Error.prepareStackTrace=f}var F=e?e.displayName||e.name:"",Ae=F?U(F):"";return typeof e=="function"&&B.set(e,Ae),Ae}function lr(e,r,t){return me(e,!1)}function fr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return me(e,fr(e));if(typeof e=="string")return U(e);switch(e){case R:return U("Suspense");case E:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case h:return lr(e.render);case C:return N(e.type,r,t);case w:{var o=e,f=o._payload,p=o._init;try{return N(p(f),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,Ee={},Re=A.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);Re.setExtraStackFrame(t)}else Re.setExtraStackFrame(null)}function dr(e,r,t,o,f){{var p=Function.call.bind(V);for(var l in e)if(p(e,l)){var u=void 0;try{if(typeof e[l]!="function"){var _=Error((o||"React class")+": "+t+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}u=e[l](r,l,o,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(y){u=y}u&&!(u instanceof Error)&&(z(f),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",t,l,typeof u),z(null)),u instanceof Error&&!(u.message in Ee)&&(Ee[u.message]=!0,z(f),T("Failed %s type: %s",t,u.message),z(null))}}}var vr=Array.isArray;function X(e){return vr(e)}function pr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function hr(e){try{return Te(e),!1}catch{return!0}}function Te(e){return""+e}function _e(e){if(hr(e))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",pr(e)),Te(e)}var L=A.ReactCurrentOwner,gr={key:!0,ref:!0,__self:!0,__source:!0},Ce,Pe,Z;Z={};function br(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function yr(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function mr(e,r){if(typeof e.ref=="string"&&L.current&&r&&L.current.stateNode!==r){var t=O(L.current.type);Z[t]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',O(L.current.type),e.ref),Z[t]=!0)}}function Er(e,r){{var t=function(){Ce||(Ce=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Rr(e,r){{var t=function(){Pe||(Pe=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Tr=function(e,r,t,o,f,p,l){var u={$$typeof:n,type:e,key:r,ref:t,props:l,_owner:p};return u._store={},Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function _r(e,r,t,o,f){{var p,l={},u=null,_=null;t!==void 0&&(_e(t),u=""+t),yr(r)&&(_e(r.key),u=""+r.key),br(r)&&(_=r.ref,mr(r,f));for(p in r)V.call(r,p)&&!gr.hasOwnProperty(p)&&(l[p]=r[p]);if(e&&e.defaultProps){var y=e.defaultProps;for(p in y)l[p]===void 0&&(l[p]=y[p])}if(u||_){var m=typeof e=="function"?e.displayName||e.name||"Unknown":e;u&&Er(l,m),_&&Rr(l,m)}return Tr(e,u,_,f,o,L.current,l)}}var Q=A.ReactCurrentOwner,we=A.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);we.setExtraStackFrame(t)}else we.setExtraStackFrame(null)}var q;q=!1;function $(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function xe(){{if(Q.current){var e=O(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Cr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Oe={};function Pr(e){{var r=xe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Pr(r);if(Oe[t])return;Oe[t]=!0;var o="";e&&e._owner&&e._owner!==Q.current&&(o=" It was passed a child from "+O(e._owner.type)+"."),D(e),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,o),D(null)}}function ke(e,r){{if(typeof e!="object")return;if(X(e))for(var t=0;t<e.length;t++){var o=e[t];$(o)&&Se(o,r)}else if($(e))e._store&&(e._store.validated=!0);else if(e){var f=qe(e);if(typeof f=="function"&&f!==e.entries)for(var p=f.call(e),l;!(l=p.next()).done;)$(l.value)&&Se(l.value,r)}}}function wr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===h||r.$$typeof===C))t=r.propTypes;else return;if(t){var o=O(r);dr(t,e.props,"prop",o,e)}else if(r.PropTypes!==void 0&&!q){q=!0;var f=O(r);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",f||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function xr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var o=r[t];if(o!=="children"&&o!=="key"){D(e),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),D(null);break}}e.ref!==null&&(D(e),T("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function je(e,r,t,o,f,p){{var l=or(e);if(!l){var u="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var _=Cr(f);_?u+=_:u+=xe();var y;e===null?y="null":X(e)?y="array":e!==void 0&&e.$$typeof===n?(y="<"+(O(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):y=typeof e,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",y,u)}var m=_r(e,r,t,f,p);if(m==null)return m;if(l){var x=r.children;if(x!==void 0)if(o)if(X(x)){for(var F=0;F<x.length;F++)ke(x[F],e);Object.freeze&&Object.freeze(x)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ke(x,e)}return e===c?xr(m):wr(m),m}}function Or(e,r,t){return je(e,r,t,!0)}function Sr(e,r,t){return je(e,r,t,!1)}var kr=Sr,jr=Or;Y.Fragment=c,Y.jsx=kr,Y.jsxs=jr}()),Y}process.env.NODE_ENV==="production"?H.exports=De():H.exports=Fe();var j=H.exports;const Ie=({trigger:a,setMekuriState:n,millisecond:s})=>{const c=i.useRef(!0),v=i.useRef(0);i.useEffect(()=>{if(c.current){c.current=!1,n(d=>({...d,initialRender:!1}));return}const g=window.scrollY||document.documentElement.scrollTop;return n(d=>({...d,nextTrigger:a,phase:"leave",yPosBeforeLeave:g})),v.current=setTimeout(()=>{n(d=>({...d,prevTrigger:d.currentTrigger,currentTrigger:a,nextTrigger:a,phase:"enter"}))},s),()=>{clearTimeout(v.current)}},[a,s,n])},Ye={millisecond:0,second:0},Me={initialRender:!1,prevTrigger:null,currentTrigger:null,nextTrigger:null,phase:null,yPosBeforeLeave:0},Le={scrollRestoration:"top",mode:"wait"},te=i.createContext(Ye),ne=i.createContext(Me),ae=i.createContext(Le),We=({trigger:a,millisecond:n=1e3,scrollRestoration:s="top",mode:c="wait",children:v})=>{const[g]=i.useState({millisecond:n,second:n/1e3}),[d,b]=i.useState({initialRender:!0,prevTrigger:null,currentTrigger:a,nextTrigger:null,phase:null,yPosBeforeLeave:0}),[h]=i.useState({scrollRestoration:s,mode:c});return Ie({trigger:a,setMekuriState:b,millisecond:n}),j.jsx(te.Provider,{value:g,children:j.jsx(ae.Provider,{value:h,children:j.jsx(ne.Provider,{value:d,children:v})})})},Ue=()=>i.useContext(te),oe=()=>i.useContext(ae),ie=()=>i.useContext(ne),Be=()=>{const a=window.location.hash.substring(1);if(!a)return!1;const n=document.getElementById(a);if(!n)return!1;const s=window.scrollY||document.documentElement.scrollTop;return n.getBoundingClientRect().top+s},se=(a,n)=>{const s=a==null?void 0:a.current;if(!s)return;new IntersectionObserver((v,g)=>{v.forEach(d=>{n(d.isIntersecting),g.unobserve(d.target)})},{rootMargin:"0px",threshold:0}).observe(s)},Ne=({onOnce:a,onLeave:n,onEnter:s,onEveryLeave:c,onEveryEnter:v})=>{const g=i.useRef(!0),d=i.useRef(null),b=ie(),{mode:h}=oe();i.useEffect(()=>{d.current=location.pathname},[]),i.useEffect(()=>{const R={prevTrigger:b.prevTrigger,currentTrigger:b.currentTrigger,nextTrigger:b.nextTrigger,yPosBeforeLeave:b.yPosBeforeLeave,getHashPos:Be,intersectionObserver:se};if(b.initialRender){g.current&&(a&&a(R),g.current=!1);return}b.phase==="leave"&&(c&&c(R),h==="wait"&&n&&n(R),h==="sync"&&(d.current===location.pathname?s&&s({...R,prevTrigger:b.currentTrigger,currentTrigger:b.nextTrigger}):n&&n(R))),b.phase==="enter"&&(v&&v(R),d.current===location.pathname&&h==="wait"&&s&&s(R))},[b])},Ve=({routerContext:a,children:n})=>{const s=i.useContext(a),c=i.useRef(s).current;return j.jsx(a.Provider,{value:c,children:n})},ze=({mekuriState:a,mode:n,children:s,setComponentState:c})=>{const v=i.useRef(!0),g=d=>{c({type:d,nextChildren:s})};i.useEffect(()=>{if(v.current){v.current=!1;return}a.phase==="enter"&&n==="wait"&&g("update-unmount"),a.phase==="leave"&&n==="sync"&&g("update")},[a.phase])},He=({mekuriState:a,mode:n,setComponentState:s})=>{const c=i.useRef(!0);i.useEffect(()=>{if(c.current){c.current=!1;return}a.phase==="enter"&&n==="sync"&&s({type:"unmount-prev"})},[a.phase])},Je=({isCacheUpdate:a,offsetIndex:n,cache:s,key:c,isPopstate:v,pos:g})=>{if(v===!1)return a&&(s.backPosY=g,s.keysArr.push(c)),0;const d=c===s.keysArr[s.keysArr.length-n]&&s.backPosY||0;return a&&(s.keysArr=[c]),d},Ge=({mekuriState:a,scrollRestoration:n})=>{const s=i.useRef(!0),c=i.useRef(!1),v=typeof n=="object"&&"scrollRestoration"in n,g=i.useRef({backPosY:0,keysArr:[]}),d=v&&!n.onEnter&&n.onLeave,b=i.useRef(d?"leave":"enter"),h=i.useCallback(E=>{const C=b.current===E,w=Je({isCacheUpdate:C,offsetIndex:E==="enter"?2:1,cache:g.current,key:a.currentTrigger||"",pos:a.yPosBeforeLeave,isPopstate:c.current});return C&&(c.current=!1),w},[a.currentTrigger,a.yPosBeforeLeave,b]),R=i.useCallback((E,C,w)=>{E==="top"?w(0):E==="restore"&&w(h(C))},[h]);i.useEffect(()=>{if(n!=="none"){if(s.current){window.history.scrollRestoration==="auto"&&(window.history.scrollRestoration="manual"),window.addEventListener("popstate",()=>{c.current=!0}),g.current.keysArr.push(a.currentTrigger||""),s.current=!1;return}if(a.phase==="leave"&&v&&(n!=null&&n.onLeave)&&R(n.scrollRestoration,a.phase,n.onLeave),a.phase==="enter")switch(n){case"top":window.scrollTo({top:0});break;case"restore":window.scrollTo({top:h(a.phase)});break;default:v&&(n!=null&&n.onEnter)&&R(n.scrollRestoration,a.phase,n.onEnter);break}}},[a.phase])},Ke=(a,n)=>{switch(n.type){case"update":return{...a,nextChildren:n.nextChildren||null};case"unmount-prev":return{...a,currentChildren:a.nextChildren||null,nextChildren:null};case"update-unmount":return{...a,currentChildren:n.nextChildren||null};default:throw new Error}};function Xe(a){return i.Children.toArray(a).filter(i.isValidElement)}const Ze=({children:a})=>{const n=Xe(a),{scrollRestoration:s,mode:c}=oe(),v=ie(),[g,d]=i.useReducer(Ke,{currentChildren:n,nextChildren:null});return ze({mekuriState:v,mode:c,children:n,setComponentState:d}),He({mekuriState:v,mode:c,setComponentState:d}),Ge({mekuriState:v,scrollRestoration:s}),j.jsxs(j.Fragment,{children:[g.currentChildren,g.nextChildren]})};P.Mekuri=Ze,P.MekuriContext=We,P.MekuriFreezer=Ve,P.intersectionObserverHandler=se,P.useMekuriAnimation=Ne,P.useMekuriDuration=Ue,Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=mekuri.umd.cjs.map
