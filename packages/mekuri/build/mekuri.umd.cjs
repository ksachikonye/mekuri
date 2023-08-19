(function(P,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],s):(P=typeof globalThis<"u"?globalThis:P||self,s(P.mekuri={},P.React))})(this,function(P,s){"use strict";var J={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function Ae(){if(ee)return I;ee=1;var n=s,a=Symbol.for("react.element"),f=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(R,g,T){var _,w={},k=null,L=null;T!==void 0&&(k=""+T),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(L=g.ref);for(_ in g)l.call(g,_)&&!m.hasOwnProperty(_)&&(w[_]=g[_]);if(R&&R.defaultProps)for(_ in g=R.defaultProps,g)w[_]===void 0&&(w[_]=g[_]);return{$$typeof:a,type:R,key:k,ref:L,props:w,_owner:p.current}}return I.Fragment=f,I.jsx=v,I.jsxs=v,I}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function De(){return re||(re=1,process.env.NODE_ENV!=="production"&&function(){var n=s,a=Symbol.for("react.element"),f=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),R=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),se=Symbol.iterator,Ze="@@iterator";function Qe(e){if(e===null||typeof e!="object")return null;var r=se&&e[se]||e[Ze];return typeof r=="function"?r:null}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];qe("error",e,t)}}function qe(e,r,t){{var o=A.ReactDebugCurrentFrame,c=o.getStackAddendum();c!==""&&(r+="%s",t=t.concat([c]));var d=t.map(function(u){return String(u)});d.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,d)}}var $e=!1,er=!1,rr=!1,tr=!1,nr=!1,ue;ue=Symbol.for("react.module.reference");function ar(e){return!!(typeof e=="string"||typeof e=="function"||e===l||e===m||nr||e===p||e===T||e===_||tr||e===L||$e||er||rr||typeof e=="object"&&e!==null&&(e.$$typeof===k||e.$$typeof===w||e.$$typeof===v||e.$$typeof===R||e.$$typeof===g||e.$$typeof===ue||e.getModuleId!==void 0))}function or(e,r,t){var o=e.displayName;if(o)return o;var c=r.displayName||r.name||"";return c!==""?t+"("+c+")":t}function le(e){return e.displayName||"Context"}function x(e){if(e==null)return null;if(typeof e.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case l:return"Fragment";case f:return"Portal";case m:return"Profiler";case p:return"StrictMode";case T:return"Suspense";case _:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return le(r)+".Consumer";case v:var t=e;return le(t._context)+".Provider";case g:return or(e,e.render,"ForwardRef");case w:var o=e.displayName||null;return o!==null?o:x(e.type)||"Memo";case k:{var c=e,d=c._payload,u=c._init;try{return x(u(d))}catch{return null}}}return null}var O=Object.assign,M=0,ce,fe,de,ve,pe,ge,he;function me(){}me.__reactDisabledLog=!0;function ir(){{if(M===0){ce=console.log,fe=console.info,de=console.warn,ve=console.error,pe=console.group,ge=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:me,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function sr(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:ce}),info:O({},e,{value:fe}),warn:O({},e,{value:de}),error:O({},e,{value:ve}),group:O({},e,{value:pe}),groupCollapsed:O({},e,{value:ge}),groupEnd:O({},e,{value:he})})}M<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var G=A.ReactCurrentDispatcher,H;function N(e,r,t){{if(H===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);H=o&&o[1]||""}return`
`+H+e}}var K=!1,U;{var ur=typeof WeakMap=="function"?WeakMap:Map;U=new ur}function Re(e,r){if(!e||K)return"";{var t=U.get(e);if(t!==void 0)return t}var o;K=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var d;d=G.current,G.current=null,ir();try{if(r){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(S){o=S}Reflect.construct(e,[],u)}else{try{u.call()}catch(S){o=S}e.call(u.prototype)}}else{try{throw Error()}catch(S){o=S}e()}}catch(S){if(S&&o&&typeof S.stack=="string"){for(var i=S.stack.split(`
`),b=o.stack.split(`
`),h=i.length-1,y=b.length-1;h>=1&&y>=0&&i[h]!==b[y];)y--;for(;h>=1&&y>=0;h--,y--)if(i[h]!==b[y]){if(h!==1||y!==1)do if(h--,y--,y<0||i[h]!==b[y]){var C=`
`+i[h].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),typeof e=="function"&&U.set(e,C),C}while(h>=1&&y>=0);break}}}finally{K=!1,G.current=d,sr(),Error.prepareStackTrace=c}var F=e?e.displayName||e.name:"",je=F?N(F):"";return typeof e=="function"&&U.set(e,je),je}function lr(e,r,t){return Re(e,!1)}function cr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function V(e,r,t){if(e==null)return"";if(typeof e=="function")return Re(e,cr(e));if(typeof e=="string")return N(e);switch(e){case T:return N("Suspense");case _:return N("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case g:return lr(e.render);case w:return V(e.type,r,t);case k:{var o=e,c=o._payload,d=o._init;try{return V(d(c),r,t)}catch{}}}return""}var B=Object.prototype.hasOwnProperty,ye={},Ee=A.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}function fr(e,r,t,o,c){{var d=Function.call.bind(B);for(var u in e)if(d(e,u)){var i=void 0;try{if(typeof e[u]!="function"){var b=Error((o||"React class")+": "+t+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw b.name="Invariant Violation",b}i=e[u](r,u,o,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(h){i=h}i&&!(i instanceof Error)&&(z(c),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",t,u,typeof i),z(null)),i instanceof Error&&!(i.message in ye)&&(ye[i.message]=!0,z(c),E("Failed %s type: %s",t,i.message),z(null))}}}var dr=Array.isArray;function X(e){return dr(e)}function vr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function pr(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function Te(e){if(pr(e))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",vr(e)),be(e)}var W=A.ReactCurrentOwner,gr={key:!0,ref:!0,__self:!0,__source:!0},_e,Ce,Z;Z={};function hr(e){if(B.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function mr(e){if(B.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Rr(e,r){if(typeof e.ref=="string"&&W.current&&r&&W.current.stateNode!==r){var t=x(W.current.type);Z[t]||(E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',x(W.current.type),e.ref),Z[t]=!0)}}function yr(e,r){{var t=function(){_e||(_e=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Er(e,r){{var t=function(){Ce||(Ce=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var br=function(e,r,t,o,c,d,u){var i={$$typeof:a,type:e,key:r,ref:t,props:u,_owner:d};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function Tr(e,r,t,o,c){{var d,u={},i=null,b=null;t!==void 0&&(Te(t),i=""+t),mr(r)&&(Te(r.key),i=""+r.key),hr(r)&&(b=r.ref,Rr(r,c));for(d in r)B.call(r,d)&&!gr.hasOwnProperty(d)&&(u[d]=r[d]);if(e&&e.defaultProps){var h=e.defaultProps;for(d in h)u[d]===void 0&&(u[d]=h[d])}if(i||b){var y=typeof e=="function"?e.displayName||e.name||"Unknown":e;i&&yr(u,y),b&&Er(u,y)}return br(e,i,b,c,o,W.current,u)}}var Q=A.ReactCurrentOwner,Pe=A.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);Pe.setExtraStackFrame(t)}else Pe.setExtraStackFrame(null)}var q;q=!1;function $(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function we(){{if(Q.current){var e=x(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function _r(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var xe={};function Cr(e){{var r=we();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Cr(r);if(xe[t])return;xe[t]=!0;var o="";e&&e._owner&&e._owner!==Q.current&&(o=" It was passed a child from "+x(e._owner.type)+"."),D(e),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,o),D(null)}}function ke(e,r){{if(typeof e!="object")return;if(X(e))for(var t=0;t<e.length;t++){var o=e[t];$(o)&&Se(o,r)}else if($(e))e._store&&(e._store.validated=!0);else if(e){var c=Qe(e);if(typeof c=="function"&&c!==e.entries)for(var d=c.call(e),u;!(u=d.next()).done;)$(u.value)&&Se(u.value,r)}}}function Pr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===g||r.$$typeof===w))t=r.propTypes;else return;if(t){var o=x(r);fr(t,e.props,"prop",o,e)}else if(r.PropTypes!==void 0&&!q){q=!0;var c=x(r);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",c||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function wr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var o=r[t];if(o!=="children"&&o!=="key"){D(e),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),D(null);break}}e.ref!==null&&(D(e),E("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function Oe(e,r,t,o,c,d){{var u=ar(e);if(!u){var i="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var b=_r(c);b?i+=b:i+=we();var h;e===null?h="null":X(e)?h="array":e!==void 0&&e.$$typeof===a?(h="<"+(x(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):h=typeof e,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",h,i)}var y=Tr(e,r,t,c,d);if(y==null)return y;if(u){var C=r.children;if(C!==void 0)if(o)if(X(C)){for(var F=0;F<C.length;F++)ke(C[F],e);Object.freeze&&Object.freeze(C)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ke(C,e)}return e===l?wr(y):Pr(y),y}}function xr(e,r,t){return Oe(e,r,t,!0)}function Sr(e,r,t){return Oe(e,r,t,!1)}var kr=Sr,Or=xr;Y.Fragment=l,Y.jsx=kr,Y.jsxs=Or}()),Y}process.env.NODE_ENV==="production"?J.exports=Ae():J.exports=De();var j=J.exports;const Fe=({trigger:n,setMekuriState:a,millisecond:f})=>{const l=s.useRef(!0),p=s.useRef(0);s.useEffect(()=>{if(l.current){l.current=!1,a(v=>({...v,initialRender:!1}));return}const m=window.scrollY||document.documentElement.scrollTop;return a(v=>({...v,nextTrigger:n,phase:"leave",yPosBeforeLeave:m})),p.current=setTimeout(()=>{a(v=>({...v,prevTrigger:v.currentTrigger,currentTrigger:n,nextTrigger:n,phase:"enter"}))},f),()=>{clearTimeout(p.current)}},[n,f,a])},Ie={millisecond:0,second:0},Ye={initialRender:!1,prevTrigger:null,currentTrigger:null,nextTrigger:null,phase:null,yPosBeforeLeave:0},Me={scrollRestoration:"top",mode:"wait"},te=s.createContext(Ie),ne=s.createContext(Ye),ae=s.createContext(Me),We=({trigger:n,millisecond:a=1e3,scrollRestoration:f="top",mode:l="wait",children:p})=>{const[m]=s.useState({millisecond:a,second:a/1e3}),[v,R]=s.useState({initialRender:!0,prevTrigger:null,currentTrigger:n,nextTrigger:null,phase:null,yPosBeforeLeave:0}),[g]=s.useState({scrollRestoration:f,mode:l});return Fe({trigger:n,setMekuriState:R,millisecond:a}),j.jsx(te.Provider,{value:m,children:j.jsx(ae.Provider,{value:g,children:j.jsx(ne.Provider,{value:v,children:p})})})},Le=()=>s.useContext(te),oe=()=>s.useContext(ae),ie=()=>s.useContext(ne),Ne=()=>{const n=window.location.hash.substring(1);if(!n)return!1;const a=document.getElementById(n);if(!a)return!1;const f=window.scrollY||document.documentElement.scrollTop;return a.getBoundingClientRect().top+f},Ue=({onOnce:n,onLeave:a,onEnter:f,onEveryLeave:l,onEveryEnter:p})=>{const m=s.useRef(!0),v=s.useRef(null),R=ie(),{mode:g}=oe();s.useEffect(()=>{v.current=location.pathname},[]),s.useEffect(()=>{if(R.initialRender){m.current&&(n&&n(),m.current=!1);return}const T={prevTrigger:R.prevTrigger,currentTrigger:R.currentTrigger,nextTrigger:R.nextTrigger,yPosBeforeLeave:R.yPosBeforeLeave,getHashPos:()=>Ne()};R.phase==="leave"&&(l&&l(T),g==="wait"&&a&&a(T),g==="sync"&&(v.current===location.pathname?f&&f({...T,prevTrigger:R.currentTrigger,currentTrigger:R.nextTrigger}):a&&a(T))),R.phase==="enter"&&(p&&p(T),v.current===location.pathname&&g==="wait"&&f&&f(T))},[R])},Ve=({routerContext:n,children:a})=>{const f=s.useContext(n),l=s.useRef(f).current;return j.jsx(n.Provider,{value:l,children:a})},Be=({mekuriState:n,mode:a,children:f,setComponentState:l})=>{const p=s.useRef(!0),m=v=>{l({type:v,nextChildren:f,restorePos:{key:n.currentTrigger||"",pos:window.scrollY||document.documentElement.scrollTop||0}})};s.useEffect(()=>{if(p.current){p.current=!1;return}n.phase==="enter"&&a==="wait"&&m("update-unmount"),n.phase==="leave"&&a==="sync"&&m("update")},[n])},ze=({mekuriState:n,mode:a,setComponentState:f})=>{const l=s.useRef(!0);s.useEffect(()=>{if(l.current){l.current=!1;return}n.phase==="enter"&&a==="sync"&&f({type:"unmount-prev"})},[n])},Je=({cache:n,key:a,isPopstate:f,pos:l})=>f===!1?(n.backPosY=l,n.keysArr.push(a),0):a===n.keysArr[n.keysArr.length-2]?(n.keysArr=[a],n.backPosY||0):(n.keysArr=[a],0),Ge=({scrollRestoration:n,componentState:a})=>{const f=s.useRef(!0),l=s.useRef(!1),p=s.useRef({backPosY:0,keysArr:[]});s.useEffect(()=>{if(n!=="none"){if(f.current){window.history.scrollRestoration==="auto"&&(window.history.scrollRestoration="manual"),window.addEventListener("popstate",()=>{l.current=!0}),p.current.keysArr.push(a.restorePos.key),f.current=!1;return}if(n==="top"&&window.scrollTo({top:0}),n==="restore"){const m=Je({cache:p.current,key:a.restorePos.key,isPopstate:l.current,pos:a.restorePos.pos});window.scrollTo({top:m}),l.current=!1}}},[a.restorePos])},He=(n,a)=>{switch(a.type){case"update":return{...n,nextChildren:a.nextChildren||null,restorePos:a.restorePos};case"unmount-prev":return{...n,currentChildren:n.nextChildren||null,nextChildren:null};case"update-unmount":return{...n,currentChildren:a.nextChildren||null,restorePos:a.restorePos};default:throw new Error}};function Ke(n){return s.Children.toArray(n).filter(s.isValidElement)}const Xe=({children:n})=>{const a=Ke(n),{scrollRestoration:f,mode:l}=oe(),p=ie(),[m,v]=s.useReducer(He,{currentChildren:a,nextChildren:null,restorePos:{key:p.currentTrigger??"",pos:0}});return Be({mekuriState:p,mode:l,children:a,setComponentState:v}),ze({mekuriState:p,mode:l,setComponentState:v}),Ge({scrollRestoration:f,componentState:m}),j.jsxs(j.Fragment,{children:[m.currentChildren,m.nextChildren]})};P.Mekuri=Xe,P.MekuriContext=We,P.MekuriFreezer=Ve,P.useMekuriAnimation=Ue,P.useMekuriDuration=Le,Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=mekuri.umd.cjs.map