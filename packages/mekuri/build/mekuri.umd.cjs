(function(x,v){typeof exports=="object"&&typeof module<"u"?v(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],v):(x=typeof globalThis<"u"?globalThis:x||self,v(x.mekuri={},x.React))})(this,function(x,v){"use strict";var z={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Ye(){if(ne)return I;ne=1;var a=v,n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function R(h,s,b){var m,w={},k=null,N=null;b!==void 0&&(k=""+b),s.key!==void 0&&(k=""+s.key),s.ref!==void 0&&(N=s.ref);for(m in s)u.call(s,m)&&!y.hasOwnProperty(m)&&(w[m]=s[m]);if(h&&h.defaultProps)for(m in s=h.defaultProps,s)w[m]===void 0&&(w[m]=s[m]);return{$$typeof:n,type:h,key:k,ref:N,props:w,_owner:l.current}}return I.Fragment=i,I.jsx=R,I.jsxs=R,I}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function Le(){return ae||(ae=1,process.env.NODE_ENV!=="production"&&function(){var a=v,n=Symbol.for("react.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),h=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),le=Symbol.iterator,qe="@@iterator";function $e(e){if(e===null||typeof e!="object")return null;var r=le&&e[le]||e[qe];return typeof r=="function"?r:null}var D=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];er("error",e,t)}}function er(e,r,t){{var o=D.ReactDebugCurrentFrame,d=o.getStackAddendum();d!==""&&(r+="%s",t=t.concat([d]));var p=t.map(function(f){return String(f)});p.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,p)}}var rr=!1,tr=!1,nr=!1,ar=!1,or=!1,de;de=Symbol.for("react.module.reference");function ur(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===y||or||e===l||e===b||e===m||ar||e===N||rr||tr||nr||typeof e=="object"&&e!==null&&(e.$$typeof===k||e.$$typeof===w||e.$$typeof===R||e.$$typeof===h||e.$$typeof===s||e.$$typeof===de||e.getModuleId!==void 0))}function sr(e,r,t){var o=e.displayName;if(o)return o;var d=r.displayName||r.name||"";return d!==""?t+"("+d+")":t}function ve(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&_("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case i:return"Portal";case y:return"Profiler";case l:return"StrictMode";case b:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h:var r=e;return ve(r)+".Consumer";case R:var t=e;return ve(t._context)+".Provider";case s:return sr(e,e.render,"ForwardRef");case w:var o=e.displayName||null;return o!==null?o:C(e.type)||"Memo";case k:{var d=e,p=d._payload,f=d._init;try{return C(f(p))}catch{return null}}}return null}var O=Object.assign,L=0,pe,he,me,ye,Re,ge,Ee;function be(){}be.__reactDisabledLog=!0;function ir(){{if(L===0){pe=console.log,he=console.info,me=console.warn,ye=console.error,Re=console.group,ge=console.groupCollapsed,Ee=console.groupEnd;var e={configurable:!0,enumerable:!0,value:be,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}L++}}function cr(){{if(L--,L===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:pe}),info:O({},e,{value:he}),warn:O({},e,{value:me}),error:O({},e,{value:ye}),group:O({},e,{value:Re}),groupCollapsed:O({},e,{value:ge}),groupEnd:O({},e,{value:Ee})})}L<0&&_("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=D.ReactCurrentDispatcher,Z;function U(e,r,t){{if(Z===void 0)try{throw Error()}catch(d){var o=d.stack.trim().match(/\n( *(at )?)/);Z=o&&o[1]||""}return`
`+Z+e}}var Q=!1,V;{var fr=typeof WeakMap=="function"?WeakMap:Map;V=new fr}function _e(e,r){if(!e||Q)return"";{var t=V.get(e);if(t!==void 0)return t}var o;Q=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var p;p=X.current,X.current=null,ir();try{if(r){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(S){o=S}Reflect.construct(e,[],f)}else{try{f.call()}catch(S){o=S}e.call(f.prototype)}}else{try{throw Error()}catch(S){o=S}e()}}catch(S){if(S&&o&&typeof S.stack=="string"){for(var c=S.stack.split(`
`),P=o.stack.split(`
`),g=c.length-1,E=P.length-1;g>=1&&E>=0&&c[g]!==P[E];)E--;for(;g>=1&&E>=0;g--,E--)if(c[g]!==P[E]){if(g!==1||E!==1)do if(g--,E--,E<0||c[g]!==P[E]){var T=`
`+c[g].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),typeof e=="function"&&V.set(e,T),T}while(g>=1&&E>=0);break}}}finally{Q=!1,X.current=p,cr(),Error.prepareStackTrace=d}var F=e?e.displayName||e.name:"",Ie=F?U(F):"";return typeof e=="function"&&V.set(e,Ie),Ie}function lr(e,r,t){return _e(e,!1)}function dr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function B(e,r,t){if(e==null)return"";if(typeof e=="function")return _e(e,dr(e));if(typeof e=="string")return U(e);switch(e){case b:return U("Suspense");case m:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case s:return lr(e.render);case w:return B(e.type,r,t);case k:{var o=e,d=o._payload,p=o._init;try{return B(p(d),r,t)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,Pe={},Te=D.ReactDebugCurrentFrame;function G(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}function vr(e,r,t,o,d){{var p=Function.call.bind(J);for(var f in e)if(p(e,f)){var c=void 0;try{if(typeof e[f]!="function"){var P=Error((o||"React class")+": "+t+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}c=e[f](r,f,o,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(g){c=g}c&&!(c instanceof Error)&&(G(d),_("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",t,f,typeof c),G(null)),c instanceof Error&&!(c.message in Pe)&&(Pe[c.message]=!0,G(d),_("Failed %s type: %s",t,c.message),G(null))}}}var pr=Array.isArray;function q(e){return pr(e)}function hr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function mr(e){try{return xe(e),!1}catch{return!0}}function xe(e){return""+e}function we(e){if(mr(e))return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",hr(e)),xe(e)}var M=D.ReactCurrentOwner,yr={key:!0,ref:!0,__self:!0,__source:!0},Ce,Se,$;$={};function Rr(e){if(J.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function gr(e){if(J.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Er(e,r){if(typeof e.ref=="string"&&M.current&&r&&M.current.stateNode!==r){var t=C(M.current.type);$[t]||(_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(M.current.type),e.ref),$[t]=!0)}}function br(e,r){{var t=function(){Ce||(Ce=!0,_("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function _r(e,r){{var t=function(){Se||(Se=!0,_("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Pr=function(e,r,t,o,d,p,f){var c={$$typeof:n,type:e,key:r,ref:t,props:f,_owner:p};return c._store={},Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function Tr(e,r,t,o,d){{var p,f={},c=null,P=null;t!==void 0&&(we(t),c=""+t),gr(r)&&(we(r.key),c=""+r.key),Rr(r)&&(P=r.ref,Er(r,d));for(p in r)J.call(r,p)&&!yr.hasOwnProperty(p)&&(f[p]=r[p]);if(e&&e.defaultProps){var g=e.defaultProps;for(p in g)f[p]===void 0&&(f[p]=g[p])}if(c||P){var E=typeof e=="function"?e.displayName||e.name||"Unknown":e;c&&br(f,E),P&&_r(f,E)}return Pr(e,c,P,d,o,M.current,f)}}var ee=D.ReactCurrentOwner,ke=D.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);ke.setExtraStackFrame(t)}else ke.setExtraStackFrame(null)}var re;re=!1;function te(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function Oe(){{if(ee.current){var e=C(ee.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function xr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var je={};function wr(e){{var r=Oe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function De(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=wr(r);if(je[t])return;je[t]=!0;var o="";e&&e._owner&&e._owner!==ee.current&&(o=" It was passed a child from "+C(e._owner.type)+"."),A(e),_('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,o),A(null)}}function Ae(e,r){{if(typeof e!="object")return;if(q(e))for(var t=0;t<e.length;t++){var o=e[t];te(o)&&De(o,r)}else if(te(e))e._store&&(e._store.validated=!0);else if(e){var d=$e(e);if(typeof d=="function"&&d!==e.entries)for(var p=d.call(e),f;!(f=p.next()).done;)te(f.value)&&De(f.value,r)}}}function Cr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===s||r.$$typeof===w))t=r.propTypes;else return;if(t){var o=C(r);vr(t,e.props,"prop",o,e)}else if(r.PropTypes!==void 0&&!re){re=!0;var d=C(r);_("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",d||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&_("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Sr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var o=r[t];if(o!=="children"&&o!=="key"){A(e),_("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),A(null);break}}e.ref!==null&&(A(e),_("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function Fe(e,r,t,o,d,p){{var f=ur(e);if(!f){var c="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var P=xr(d);P?c+=P:c+=Oe();var g;e===null?g="null":q(e)?g="array":e!==void 0&&e.$$typeof===n?(g="<"+(C(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):g=typeof e,_("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",g,c)}var E=Tr(e,r,t,d,p);if(E==null)return E;if(f){var T=r.children;if(T!==void 0)if(o)if(q(T)){for(var F=0;F<T.length;F++)Ae(T[F],e);Object.freeze&&Object.freeze(T)}else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ae(T,e)}return e===u?Sr(E):Cr(E),E}}function kr(e,r,t){return Fe(e,r,t,!0)}function Or(e,r,t){return Fe(e,r,t,!1)}var jr=Or,Dr=kr;Y.Fragment=u,Y.jsx=jr,Y.jsxs=Dr}()),Y}process.env.NODE_ENV==="production"?z.exports=Ye():z.exports=Le();var W=z.exports;const H=(a,n=!1)=>{const i=n?"^":"",u=n?"(?:[\\/#\\?]|$)$":"(?:[\\/#\\?]|$)",l=i+a.replace(/\//g,"\\/").replace(/\?/g,"\\?").replace(/\#/g,"\\#").replace(/★/g,".*")+u;return new RegExp(l)},Me=(a,n)=>!n||a.length===0?!1:!!a.slice().find(u=>H(u,!0).test(n)),We=({state:a,dispatch:n,millisecond:i,preventArr:u,router:l})=>{const y=v.useRef(!0),R=v.useRef(0);v.useEffect(()=>{if(y.current||Me(u,l)){y.current=!1,n({firstAccess:!1,prev:null,current:l,phase:null,next:null});return}const h=document.documentElement.scrollTop;return n({next:l,phase:"leave",yPosBeforeLeave:h}),R.current=setTimeout(()=>{n({prev:a.current,current:l,next:l,phase:"enter"})},i),()=>{clearTimeout(R.current)}},[l])},oe={firstAccess:!0,prev:null,current:null,next:null,phase:null,yPosBeforeLeave:0},Ne={millisecond:0,second:0},ue=v.createContext(Ne),se=v.createContext(oe),Ue=({millisecond:a,preventArr:n,router:i,children:u})=>{const[l]=v.useState({millisecond:a,second:a/1e3}),[y,R]=v.useReducer((h,s)=>({...h,...s}),oe);return We({state:y,dispatch:R,router:i,millisecond:a,preventArr:n}),W.jsx(ue.Provider,{value:l,children:W.jsx(se.Provider,{value:y,children:u})})},ie=()=>v.useContext(ue),Ve=()=>v.useContext(se),ce=(a,n)=>a.slice().sort((i,u)=>u.path.length-i.path.length).find(i=>H(i.path,!1).test(n)),fe=({componentArr:a,router:n,children:i})=>{const u=ce(a,n);return u?u.component:i},Be=({componentArr:a,router:n,state:i})=>{const u=ce(a,n);return(u==null?void 0:u.component)===i.current},K=typeof document<"u"?v.useLayoutEffect:v.useEffect,Je=(a,n)=>{switch(n.type){case"update":return{...a,next:n.component||null,restorePos:n.restorePos};case"unmount-prev":return{...a,current:a.next||null,next:null};case"update-unmount":return{...a,current:n.component||null,restorePos:n.restorePos};default:throw new Error}},Ge=({router:a,mode:n,millisecond:i,state:u,componentArr:l,children:y,dispatch:R})=>{const h=v.useRef(!0),s=v.useRef(0),b=()=>{const m=fe({componentArr:l,router:a,children:y});!m||Be({componentArr:l,router:a,state:u})||R({type:n==="wait"?"update-unmount":"update",component:m,restorePos:{key:a,pos:window.pageYOffset||document.documentElement.scrollTop||0}})};K(()=>{if(h.current){h.current=!1;return}return n==="wait"?s.current=setTimeout(b,i):b(),()=>{clearTimeout(s.current)}},[a])},ze=({state:a,mode:n,millisecond:i,dispatch:u})=>{const l=v.useRef(!0),y=v.useRef(0),R=()=>{n==="sync"&&u({type:"unmount-prev"})};K(()=>{if(l.current){l.current=!1;return}if(!(!a.next&&n==="sync"))return n==="wait"?R():y.current=setTimeout(R,i),()=>{clearTimeout(y.current)}},[a.current,a.next])},He=({cache:a,key:n,isPopstate:i,pos:u})=>i===!1?(a.backPosY=u,a.keysArr.push(n),0):n===a.keysArr[a.keysArr.length-2]?(a.keysArr=[n],a.backPosY||0):0,Ke=({scrollRestoration:a,state:n})=>{const i=v.useRef(!0),u=v.useRef(!1),l=v.useRef({backPosY:0,keysArr:[]});K(()=>{if(i.current){window.history.scrollRestoration==="auto"&&(window.history.scrollRestoration="manual"),window.addEventListener("popstate",()=>{u.current=!0}),l.current.keysArr.push(n.restorePos.key),i.current=!1;return}if(a==="top")window.scrollTo({top:0});else if(a==="restore"){const y=He({cache:l.current,key:n.restorePos.key,isPopstate:u.current,pos:n.restorePos.pos});window.scrollTo({top:y}),u.current=!1}},[n.restorePos])},Xe=v.memo(function({componentArr:n,mode:i,scrollRestoration:u,router:l,children:y}){const R=ie().millisecond,[h,s]=v.useReducer(Je,{current:fe({componentArr:n,router:l,children:y}),next:null,restorePos:{key:l,pos:0}});return Ge({router:l,mode:i,millisecond:R,state:h,componentArr:n,children:y,dispatch:s}),ze({state:h,mode:i,millisecond:R,dispatch:s}),Ke({scrollRestoration:u,state:h}),W.jsxs(W.Fragment,{children:[h.current&&h.current,h.next&&h.next]})}),j=(a,n)=>n?a.slice().find(u=>H(u,!0).test(n))??!1:!1,Ze=()=>{const a=window.location.hash.substring(1);if(!a)return!1;const n=document.getElementById(a);if(!n)return!1;const i=window.pageYOffset||document.documentElement.scrollTop;return n.getBoundingClientRect().top+i},Qe=({isReRender:a=!0,mode:n,once:i,leave:u,enter:l,afterEnter:y})=>{const R=v.useRef(!0),h=v.useRef(null),s=Ve();v.useEffect(()=>{h.current=location.pathname},[]),v.useEffect(()=>{if(s.firstAccess){R.current&&(i&&i(),R.current=!1);return}const b={prev:s.prev,current:s.current,next:s.next,yPosBeforeLeave:s.yPosBeforeLeave,isPrev:m=>j(m,s.prev),isCurrent:m=>j(m,s.current),isNext:m=>j(m,s.next),getHashPos:()=>Ze()};if(s.phase==="leave")n==="wait"&&u&&u(b),n==="sync"&&(h.current===location.pathname?l&&l({...b,prev:s.current,current:s.next,isPrev:m=>j(m,s.current),isCurrent:m=>j(m,s.next)}):u&&u(b));else if(s.phase==="enter"){if(n==="sync"&&j([s.current],location.pathname)&&y&&y(b),h.current!==location.pathname&&a)return;n==="wait"&&l&&l(b)}},[s])};x.MekuriContext=Ue,x.MekuriLayout=Xe,x.useMekuriAnimation=Qe,x.useMekuriDuration=ie,Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=mekuri.umd.cjs.map
