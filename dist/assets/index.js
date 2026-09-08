(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,E=te(e=>e.replace(re,`-$1`).toLowerCase()),ie=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=te(e=>e?`on${ie(e)}`:``),D=(e,t)=>!Object.is(e,t),oe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},O=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},se=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ce=e=>{let t=g(e)?Number(e):NaN;return isNaN(t)?e:t},le,ue=()=>le||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function de(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?he(r):de(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var fe=/;(?![^(]*\))/g,pe=/:([^]+)/,me=/\/\*[^]*?\*\//g;function he(e){let t={};return e.replace(me,``).split(fe).forEach(e=>{if(e){let n=e.split(pe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ge(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=ge(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var _e=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ve=e(_e);_e+``;function ye(e){return!!e||e===``}function be(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=xe(e[r],t[r]);return n}function xe(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?be(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!xe(e[n],t[n]))return!1}}return String(e)===String(t)}function Se(e,t){return e.findIndex(e=>xe(e,t))}var Ce=e=>!!(e&&e.__v_isRef===!0),we=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?Ce(e)?we(e.value):JSON.stringify(e,Te,2):String(e),Te=(e,t)=>Ce(t)?Te(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ee(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ee(e))}:_(t)?Ee(t):v(t)&&!d(t)&&!C(t)?String(t):t,Ee=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,k,De=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&k&&(k.active?(this.parent=k,this.index=(k.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=k;try{return k=this,e()}finally{k=t}}}on(){++this._on===1&&(this.prevScope=k,k=this)}off(){if(this._on>0&&--this._on===0){if(k===this)k=this.prevScope;else{let e=k;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Oe(){return k}var A,ke=new WeakSet,Ae=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,k&&(k.active?k.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ke.has(this)&&(ke.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qe(this),Le(this);let e=A,t=Ue;A=this,Ue=!0;try{return this.fn()}finally{Re(this),A=e,Ue=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ve(e);this.deps=this.depsTail=void 0,qe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ke.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ze(this)&&this.run()}get dirty(){return ze(this)}},je=0,Me,Ne;function Pe(e,t=!1){if(e.flags|=8,t){e.next=Ne,Ne=e;return}e.next=Me,Me=e}function Fe(){je++}function Ie(){if(--je>0)return;if(Ne){let e=Ne;for(Ne=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Me;){let t=Me;for(Me=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Le(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Re(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ve(r),He(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Be(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Be(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Je)||(e.globalVersion=Je,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ze(e))))return;e.flags|=2;let t=e.dep,n=A,r=Ue;A=e,Ue=!0;try{Le(e);let n=e.fn(e._value);(t.version===0||D(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{A=n,Ue=r,Re(e),e.flags&=-3}}function Ve(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ve(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function He(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ue=!0,We=[];function Ge(){We.push(Ue),Ue=!1}function Ke(){let e=We.pop();Ue=e===void 0?!0:e}function qe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=A;A=void 0;try{t()}finally{A=e}}}var Je=0,Ye=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Xe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!A||!Ue||A===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==A)t=this.activeLink=new Ye(A,this),A.deps?(t.prevDep=A.depsTail,A.depsTail.nextDep=t,A.depsTail=t):A.deps=A.depsTail=t,Ze(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=A.depsTail,t.nextDep=void 0,A.depsTail.nextDep=t,A.depsTail=t,A.deps===t&&(A.deps=e)}return t}trigger(e){this.version++,Je++,this.notify(e)}notify(e){Fe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ie()}}};function Ze(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ze(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Qe=new WeakMap,$e=Symbol(``),et=Symbol(``),tt=Symbol(``);function j(e,t,n){if(Ue&&A){let t=Qe.get(e);t||Qe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Xe),r.map=t,r.key=n),r.track()}}function nt(e,t,n,r,i,a){let o=Qe.get(e);if(!o){Je++;return}let s=e=>{e&&e.trigger()};if(Fe(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===tt||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(tt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get($e)),f(e)&&s(o.get(et)));break;case`delete`:i||(s(o.get($e)),f(e)&&s(o.get(et)));break;case`set`:f(e)&&s(o.get($e));break}}Ie()}function rt(e){let t=N(e);return t===e?t:(j(t,`iterate`,tt),M(e)?t:t.map(Gt))}function it(e){return j(e=N(e),`iterate`,tt),e}function at(e,t){return Ht(e)?Kt(Vt(e)?Gt(t):t):Gt(t)}var ot={__proto__:null,[Symbol.iterator](){return st(this,Symbol.iterator,e=>at(this,e))},concat(...e){return rt(this).concat(...e.map(e=>d(e)?rt(e):e))},entries(){return st(this,`entries`,e=>(e[1]=at(this,e[1]),e))},every(e,t){return lt(this,`every`,e,t,void 0,arguments)},filter(e,t){return lt(this,`filter`,e,t,e=>e.map(e=>at(this,e)),arguments)},find(e,t){return lt(this,`find`,e,t,e=>at(this,e),arguments)},findIndex(e,t){return lt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return lt(this,`findLast`,e,t,e=>at(this,e),arguments)},findLastIndex(e,t){return lt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return lt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return dt(this,`includes`,e)},indexOf(...e){return dt(this,`indexOf`,e)},join(e){return rt(this).join(e)},lastIndexOf(...e){return dt(this,`lastIndexOf`,e)},map(e,t){return lt(this,`map`,e,t,void 0,arguments)},pop(){return ft(this,`pop`)},push(...e){return ft(this,`push`,e)},reduce(e,...t){return ut(this,`reduce`,e,t)},reduceRight(e,...t){return ut(this,`reduceRight`,e,t)},shift(){return ft(this,`shift`)},some(e,t){return lt(this,`some`,e,t,void 0,arguments)},splice(...e){return ft(this,`splice`,e)},toReversed(){return rt(this).toReversed()},toSorted(e){return rt(this).toSorted(e)},toSpliced(...e){return rt(this).toSpliced(...e)},unshift(...e){return ft(this,`unshift`,e)},values(){return st(this,`values`,e=>at(this,e))}};function st(e,t,n){let r=it(e),i=r[t]();return r!==e&&!M(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ct=Array.prototype;function lt(e,t,n,r,i,a){let o=it(e),s=o!==e&&!M(e),c=o[t];if(c!==ct[t]){let t=c.apply(e,a);return s?Gt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,at(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ut(e,t,n,r){let i=it(e),a=i!==e&&!M(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=at(e,t)),n.call(this,t,at(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?at(e,c):c}function dt(e,t,n){let r=N(e);j(r,`iterate`,tt);let i=r[t](...n);return(i===-1||i===!1)&&Ut(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function ft(e,t,n=[]){Ge(),Fe();let r=N(e)[t].apply(e,n);return Ie(),Ke(),r}var pt=e(`__proto__,__v_isRef,__isVue`),mt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ht(e){_(e)||(e=String(e));let t=N(this);return j(t,`has`,e),t.hasOwnProperty(e)}var gt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Pt:Nt:i?Mt:jt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=ot[t]))return e;if(t===`hasOwnProperty`)return ht}let o=Reflect.get(e,t,P(e)?e:n);if((_(t)?mt.has(t):pt(t))||(r||j(e,`get`,t),i))return o;if(P(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?zt(e):e}return v(o)?r?zt(o):Lt(o):o}},_t=class extends gt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Ht(i);if(!M(n)&&!Ht(n)&&(i=N(i),n=N(n)),!a&&P(i)&&!P(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,P(e)?e:r);return e===N(r)&&(o?D(n,i)&&nt(e,`set`,t,n,i):nt(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&nt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!mt.has(t))&&j(e,`has`,t),n}ownKeys(e){return j(e,`iterate`,d(e)?`length`:$e),Reflect.ownKeys(e)}},vt=class extends gt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},yt=new _t,bt=new vt,xt=new _t(!0),St=e=>e,Ct=e=>Reflect.getPrototypeOf(e);function wt(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?St:t?Kt:Gt;return!t&&j(a,`iterate`,l?et:$e),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Tt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Et(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(D(n,a)&&j(i,`get`,n),j(i,`get`,a));let{has:o}=Ct(i),s=t?St:e?Kt:Gt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&j(N(t),`iterate`,$e),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(D(t,i)&&j(r,`has`,t),j(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?St:e?Kt:Gt;return!e&&j(o,`iterate`,$e),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Tt(`add`),set:Tt(`set`),delete:Tt(`delete`),clear:Tt(`clear`)}:{add(e){let n=N(this),r=Ct(n),i=N(e),a=!t&&!M(e)&&!Ht(e)?i:e;return r.has.call(n,a)||D(e,a)&&r.has.call(n,e)||D(i,a)&&r.has.call(n,i)||(n.add(a),nt(n,`add`,a,a)),this},set(e,n){!t&&!M(n)&&!Ht(n)&&(n=N(n));let r=N(this),{has:i,get:a}=Ct(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?D(n,s)&&nt(r,`set`,e,n,s):nt(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=Ct(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&nt(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&nt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=wt(r,e,t)}),n}function Dt(e,t){let n=Et(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Ot={get:Dt(!1,!1)},kt={get:Dt(!1,!0)},At={get:Dt(!0,!1)},jt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap;function Ft(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function It(e){return e.__v_skip||!Object.isExtensible(e)?0:Ft(S(e))}function Lt(e){return Ht(e)?e:Bt(e,!1,yt,Ot,jt)}function Rt(e){return Bt(e,!1,xt,kt,Mt)}function zt(e){return Bt(e,!0,bt,At,Nt)}function Bt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=It(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Vt(e){return Ht(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function M(e){return!!(e&&e.__v_isShallow)}function Ut(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function Wt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&O(e,`__v_skip`,!0),e}var Gt=e=>v(e)?Lt(e):e,Kt=e=>v(e)?zt(e):e;function P(e){return e?e.__v_isRef===!0:!1}function qt(e){return P(e)?e.value:e}var Jt={get:(e,t,n)=>t===`__v_raw`?e:qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return P(i)&&!P(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Yt(e){return Vt(e)?e:new Proxy(e,Jt)}var Xt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Je-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&A!==this)return Pe(this,!0),!0}get value(){let e=this.dep.track();return Be(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Zt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Xt(r,i,n)}var Qt={},$t=new WeakMap,en=void 0;function tn(e,t=!1,n=en){if(n){let t=$t.get(n);t||$t.set(n,t=[]),t.push(e)}}function nn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:M(e)||o===!1||o===0?rn(e,1):rn(e),m,g,_,v,y=!1,b=!1;if(P(e)?(g=()=>e.value,y=M(e)):Vt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Vt(e)||M(e)),g=()=>e.map(e=>{if(P(e))return e.value;if(Vt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ge();try{_()}finally{Ke()}}let t=en;en=m;try{return f?f(e,3,[v]):e(v)}finally{en=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>rn(e(),t)}let x=Oe(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Qt):Qt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>D(e,C[t])):D(e,C))){_&&_();let t=en;en=m;try{let t=[e,C===Qt?void 0:b&&C[0]===Qt?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{en=t}}}else m.run()};return u&&u(w),m=new Ae(g),m.scheduler=l?()=>l(w,!1):w,v=e=>tn(e,!1,m),_=m.onStop=()=>{let e=$t.get(m);if(e){if(f)f(e,4);else for(let t of e)t();$t.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function rn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,P(e))rn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)rn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{rn(e,t,n)});else if(C(e)){for(let r in e)rn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&rn(e[r],t,n)}return e}function an(e,t,n,r){try{return r?e(...r):e()}catch(e){sn(e,t,n)}}function on(e,t,n,r){if(h(e)){let i=an(e,t,n,r);return i&&y(i)&&i.catch(e=>{sn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(on(e[a],t,n,r));return i}}function sn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ge(),an(o,null,10,[e,i,a]),Ke();return}}cn(e,r,a,i,s)}function cn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var F=[],ln=-1,un=[],dn=null,fn=0,pn=Promise.resolve(),mn=null;function hn(e){let t=mn||pn;return e?t.then(this?e.bind(this):e):t}function gn(e){let t=ln+1,n=F.length;for(;t<n;){let r=t+n>>>1,i=F[r],a=Sn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function _n(e){if(!(e.flags&1)){let t=Sn(e),n=F[F.length-1];!n||!(e.flags&2)&&t>=Sn(n)?F.push(e):F.splice(gn(t),0,e),e.flags|=1,vn()}}function vn(){mn||=pn.then(Cn)}function yn(e){d(e)?un.push(...e):dn&&e.id===-1?dn.splice(fn+1,0,e):e.flags&1||(un.push(e),e.flags|=1),vn()}function bn(e,t,n=ln+1){for(;n<F.length;n++){let t=F[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;F.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function xn(e){if(un.length){let e=[...new Set(un)].sort((e,t)=>Sn(e)-Sn(t));if(un.length=0,dn){dn.push(...e);return}for(dn=e,fn=0;fn<dn.length;fn++){let e=dn[fn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}dn=null,fn=0}}var Sn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Cn(e){try{for(ln=0;ln<F.length;ln++){let e=F[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),an(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<F.length;ln++){let e=F[ln];e&&(e.flags&=-2)}ln=-1,F.length=0,xn(e),mn=null,(F.length||un.length)&&Cn(e)}}var I=null,wn=null;function Tn(e){let t=I;return I=e,wn=e&&e.type.__scopeId||null,t}function En(e,t=I,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Pi(-1);let i=Tn(t),a;try{a=e(...n)}finally{Tn(i),r._d&&Pi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Dn(e,n){if(I===null)return e;let r=ha(I),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&rn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function On(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ge(),on(c,n,8,[e.el,s,e,t]),Ke())}}function kn(e,t){if(G){let n=G.provides,r=G.parent&&G.parent.provides;r===n&&(n=G.provides=Object.create(r)),n[e]=t}}function An(e,t,n=!1){let r=ea();if(r||zr){let i=zr?zr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var jn=Symbol.for(`v-scx`),Mn=()=>An(jn);function Nn(e,t,n){return Pn(e,t,n)}function Pn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(oa){if(c===`sync`){let e=Mn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=G;u.call=(e,t,n)=>on(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{R(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():_n(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=nn(e,n,u);return oa&&(f?f.push(h):d&&h()),h}function Fn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?In(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=ra(this),s=Pn(i,a.bind(r),n);return o(),s}function In(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Ln=Symbol(`_vte`),Rn=e=>e.__isTeleport,zn=Symbol(`_leaveCb`);function Bn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Bn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Hn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Un(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Wn=new WeakMap;function Gn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Gn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(qn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Gn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?ha(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=N(v),b=v===t?i:e=>Un(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Un(_,t));if(m!=null&&m!==p){if(Kn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(P(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))an(p,f,12,[l,_]);else{let t=g(p),n=P(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Wn.delete(e)};t.id=-1,Wn.set(e,t),R(t,r)}else Kn(e),i()}}}function Kn(e){let t=Wn.get(e);t&&(t.flags|=8,Wn.delete(e))}ue().requestIdleCallback,ue().cancelIdleCallback;var qn=e=>!!e.type.__asyncLoader,Jn=e=>e.type.__isKeepAlive;function Yn(e,t){Zn(e,`a`,t)}function Xn(e,t){Zn(e,`da`,t)}function Zn(e,t,n=G){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if($n(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Jn(e.parent.vnode)&&Qn(r,t,n,e),e=e.parent}}function Qn(e,t,n,r){let i=$n(t,e,r,!0);or(()=>{c(r[t],i)},n)}function $n(e,t,n=G,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ge();let i=ra(n),a=on(t,n,e,r);return i(),Ke(),a};return r?i.unshift(a):i.push(a),a}}var er=e=>(t,n=G)=>{(!oa||e===`sp`)&&$n(e,(...e)=>t(...e),n)},tr=er(`bm`),nr=er(`m`),rr=er(`bu`),ir=er(`u`),ar=er(`bum`),or=er(`um`),sr=er(`sp`),cr=er(`rtg`),lr=er(`rtc`);function ur(e,t=G){$n(`ec`,e,t)}var dr=`components`;function fr(e,t){return mr(dr,e,!0,t)||e}var pr=Symbol.for(`v-ndc`);function mr(e,t,n=!0,r=!1){let i=I||G;if(i){let n=i.type;if(e===dr){let e=ga(n,!1);if(e&&(e===t||e===T(t)||e===ie(T(t))))return n}let a=hr(i[e]||n[e],t)||hr(i.appContext[e],t);return!a&&r?n:a}}function hr(e,t){return e&&(e[t]||e[T(t)]||e[ie(T(t))])}function gr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Vt(e),r=!1,s=!1;n&&(r=!M(e),s=Ht(e),e=it(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Kt(Gt(e[n])):Gt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var _r=e=>e?aa(e)?ha(e):_r(e.parent):null,vr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_r(e.parent),$root:e=>_r(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Dr(e),$forceUpdate:e=>e.f||=()=>{_n(e.update)},$nextTick:e=>e.n||=hn.bind(e.proxy),$watch:e=>Fn.bind(e)}),yr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),br={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(yr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Sr&&(s[n]=0)}let d=vr[n],f,p;if(d)return n===`$attrs`&&j(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return yr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||yr(n,c)||u(o,c)||u(i,c)||u(vr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function xr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Sr=!0;function Cr(e){let t=Dr(e),n=e.proxy,i=e.ctx;Sr=!1,t.beforeCreate&&Tr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:E,inheritAttrs:ie,components:ae,directives:D,filters:oe}=t;if(u&&wr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Lt(t))}if(Sr=!0,o)for(let e in o){let t=o[e],a=va({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Er(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{kn(t,e[t])})}f&&Tr(f,e,`c`);function O(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O(tr,p),O(nr,m),O(rr,g),O(ir,_),O(Yn,y),O(Xn,b),O(ur,T),O(lr,te),O(cr,ne),O(ar,S),O(or,w),O(sr,re),d(E))if(E.length){let t=e.exposed||={};E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ee&&e.render===r&&(e.render=ee),ie!=null&&(e.inheritAttrs=ie),ae&&(e.components=ae),D&&(e.directives=D),re&&Hn(e)}function wr(e,t,n=r){d(e)&&(e=Mr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?An(r.from||n,r.default,!0):An(r.from||n):An(r),P(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Tr(e,t,n){on(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Er(e,t,n,r){let i=r.includes(`.`)?In(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Nn(i,n)}else if(h(e))Nn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Er(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Nn(i,r,e)}}function Dr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Or(c,e,o,!0)),Or(c,t,o)),v(t)&&a.set(t,c),c}function Or(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Or(e,a,n,!0),i&&i.forEach(t=>Or(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=kr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var kr={data:Ar,props:Pr,emits:Pr,methods:Nr,computed:Nr,beforeCreate:L,created:L,beforeMount:L,mounted:L,beforeUpdate:L,updated:L,beforeDestroy:L,beforeUnmount:L,destroyed:L,unmounted:L,activated:L,deactivated:L,errorCaptured:L,serverPrefetch:L,components:Nr,directives:Nr,watch:Fr,provide:Ar,inject:jr};function Ar(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function jr(e,t){return Nr(Mr(e),Mr(t))}function Mr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function L(e,t){return e?[...new Set([].concat(e,t))]:t}function Nr(e,t){return e?s(Object.create(null),e,t):t}function Pr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),xr(e),xr(t??{})):t}function Fr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=L(e[r],t[r]);return n}function Ir(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Lr=0;function Rr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Ir(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Lr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ba,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||W(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,ha(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(on(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=zr;zr=l;try{return e()}finally{zr=t}}};return l}}var zr=null,Br=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${E(t)}Modifiers`];function Vr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Br(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(se)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(E(n))]),l&&on(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,on(u,e,6,a)}}var Hr=new WeakMap;function Ur(e,t,n=!1){let r=n?Hr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Ur(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Wr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,E(t))||u(e,t))}function Gr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Tn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Ki(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Ki(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Kr(c)}}catch(t){ji.length=0,sn(t,e,1),v=W(ki)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=qr(y,a)),b=Ui(b,y,!1,!0))}return n.dirs&&(b=Ui(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Bn(b,n.transition),v=b,Tn(_),v}var Kr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},qr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Jr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Xr(o,r,n)&&!Wr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Yr(r,o,l):!0:!!o;return!1}function Yr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Xr(t,e,a)&&!Wr(n,a))return!0}return!1}function Xr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!xe(r,i):r!==i}function Zr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Qr={},$r=()=>Object.create(Qr),ei=e=>Object.getPrototypeOf(e)===Qr;function ti(e,t,n,r=!1){let i={},a=$r();e.propsDefaults=Object.create(null),ri(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Rt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ni(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Wr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=ii(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ri(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=E(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ii(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&nt(e.attrs,`set`,``)}function ri(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Wr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=N(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ii(a,n,s,i[s],e,!u(i,s))}}return s}function ii(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ra(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===E(n))&&(r=!0))}return r}var ai=new WeakMap;function oi(e,r,i=!1){let a=i?ai:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=oi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);si(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(si(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function si(e){return e[0]!==`$`&&!ee(e)}var ci=e=>e===`_`||e===`_ctx`||e===`$stable`,li=e=>d(e)?e.map(Ki):[Ki(e)],ui=(e,t,n)=>{if(t._n)return t;let r=En((...e)=>li(t(...e)),n);return r._c=!1,r},di=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ci(n))continue;let i=e[n];if(h(i))t[n]=ui(n,i,r);else if(i!=null){let e=li(i);t[n]=()=>e}}},fi=(e,t)=>{let n=li(t);e.slots.default=()=>n},pi=(e,t,n)=>{for(let r in t)(n||!ci(r))&&(e[r]=t[r])},mi=(e,t,n)=>{let r=e.slots=$r();if(e.vnode.shapeFlag&32){let e=t._;e?(pi(r,t,n),n&&O(r,`_`,e,!0)):di(t,r)}else t&&fi(e,t)},hi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:pi(a,n,r):(o=!n.$stable,di(n,a)),s=n}else n&&(fi(e,n),s={default:1});if(o)for(let e in a)!ci(e)&&s[e]==null&&delete a[e]},R=Di;function gi(e){return _i(e)}function _i(e,i){let a=ue();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ri(e,t)&&(r=be(e),he(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Oi:y(e,t,n,r);break;case ki:b(e,t,n,r);break;case Ai:e??x(t,n,r,o);break;case z:ae(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?D(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Ce)}u!=null&&i?Gn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Gn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,vi(e,a),s,u),_&&On(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Xi(f,r,e)}_&&On(e,null,r,`beforeMount`);let v=bi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&R(()=>{try{f&&Xi(f,r,e),v&&g.enter(d),_&&On(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ei(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?qi(e[l]):Ki(e[l]),t,n,r,i,a,o,s)},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&yi(r,!1),(g=h.onVnodeBeforeUpdate)&&Xi(g,r,n,e),f&&On(n,e,r,`beforeUpdate`),r&&yi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?E(e.dynamicChildren,d,l,r,i,vi(n,a),o):s||de(e,n,l,null,r,i,vi(n,a),o,!1),u>0){if(u&16)ie(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ie(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&R(()=>{g&&Xi(g,r,n,e),f&&On(n,e,r,`updated`)},i)},E=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===z||!Ri(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ie=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(E(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&xi(e,t,!0)):de(e,t,n,f,i,a,s,c,l)},D=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):O(t,n,r,i,a,o,c):se(e,t,c)},O=(e,t,n,r,i,a,o)=>{let s=e.component=$i(e,r,i);if(Jn(e)&&(s.ctx.renderer=Ce),sa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ce,o),!e.el){let r=s.subTree=W(ki);b(null,r,t,n),e.placeholder=r.el}}else ce(s,e,t,n,i,a,o)},se=(e,t,n)=>{let r=t.component=e.component;if(Jr(e,t,n))if(r.asyncDep&&!r.asyncResolved){le(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ce=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ci(e);if(n){t&&(t.el=c.el,le(e,t,o)),n.asyncDep.then(()=>{R(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;yi(e,!1),t?(t.el=c.el,le(e,t,o)):t=c,n&&oe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Xi(d,s,t,c),yi(e,!0);let f=Gr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),be(p),e,i,a),t.el=f.el,u===null&&Zr(e,f.el),r&&R(r,i),(d=t.props&&t.props.onVnodeUpdated)&&R(()=>Xi(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=qn(t);if(yi(e,!1),l&&oe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Xi(o,d,t),yi(e,!0),s&&Te){let t=()=>{e.subTree=Gr(e),Te(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Gr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&R(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;R(()=>Xi(o,d,e),i)}(t.shapeFlag&256||d&&qn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&R(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ae(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>_n(u),yi(e,!0),l()},le=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ni(e,t.props,r,n),hi(e,t.children,n),Ge(),bn(e),Ke()},de=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){pe(l,d,n,r,i,a,o,s,c);return}else if(f&256){fe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ye(l,i,a),d!==l&&p(n,d)):u&16?m&16?pe(l,d,n,r,i,a,o,s,c):ye(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},fe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?qi(t[p]):Ki(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ye(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},pe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?qi(t[u]):Ki(t[u]);if(Ri(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?qi(t[p]):Ki(t[p]);if(Ri(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?qi(t[u]):Ki(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)he(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?qi(t[u]):Ki(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){he(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ri(n,t[_])){i=_;break}i===void 0?he(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Si(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Ti(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?me(n,r,p,2):_--)}}},me=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){me(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Ce);return}if(c===z){o(a,t,n);for(let e=0;e<u.length;e++)me(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Ai){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),R(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[zn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},he=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ge(),Gn(s,null,n,e,!0),Ke()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!qn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Xi(_,t,e),u&6)ve(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&On(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ce,r):l&&!l.hasOnce&&(a!==z||d>0&&d&64)?ye(l,t,n,!1,!0):(a===z&&d&384||!i&&u&16)&&ye(c,t,n),r&&ge(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&R(()=>{_&&Xi(_,t,e),h&&On(e,null,t,`unmounted`),v&&(e.el=null)},n)},ge=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===z){_e(n,r);return}if(t===Ai){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},_e=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ve=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;wi(c),wi(l),r&&oe(r),i.stop(),a&&(a.flags|=8,he(o,e,t,n)),s&&R(s,t),R(()=>{e.isUnmounted=!0},t)},ye=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)he(e[o],t,n,r,i)},be=e=>{if(e.shapeFlag&6)return be(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Ln];return n?h(n):t},xe=!1,Se=(e,t,n)=>{let r;e==null?t._vnode&&(he(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,xe||=(xe=!0,bn(r),xn(),!1)},Ce={p:v,um:he,m:me,r:ge,mt:O,mc:T,pc:de,pbc:E,n:be,o:e},we,Te;return i&&([we,Te]=i(Ce)),{render:Se,hydrate:we,createApp:Rr(Se,we)}}function vi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function yi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function bi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function xi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=qi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&xi(t,a)),a.type===Oi&&(a.patchFlag===-1&&(a=i[e]=qi(a)),a.el=t.el),a.type===ki&&!a.el&&(a.el=t.el)}}function Si(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Ci(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ci(t)}function wi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ti(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Ti(t.subTree):null}var Ei=e=>e.__isSuspense;function Di(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):yn(e)}var z=Symbol.for(`v-fgt`),Oi=Symbol.for(`v-txt`),ki=Symbol.for(`v-cmt`),Ai=Symbol.for(`v-stc`),ji=[],B=null;function V(e=!1){ji.push(B=e?null:[])}function Mi(){ji.pop(),B=ji[ji.length-1]||null}var Ni=1;function Pi(e,t=!1){Ni+=e,e<0&&B&&t&&(B.hasOnce=!0)}function Fi(e){return e.dynamicChildren=Ni>0?B||n:null,Mi(),Ni>0&&B&&B.push(e),e}function H(e,t,n,r,i,a){return Fi(U(e,t,n,r,i,a,!0))}function Ii(e,t,n,r,i){return Fi(W(e,t,n,r,i,!0))}function Li(e){return e?e.__v_isVNode===!0:!1}function Ri(e,t){return e.type===t.type&&e.key===t.key}var zi=({key:e})=>e??null,Bi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||P(e)||h(e)?{i:I,r:e,k:t,f:!!n}:e);function U(e,t=null,n=null,r=0,i=null,a=e===z?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zi(t),ref:t&&Bi(t),scopeId:wn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:I};return s?(Ji(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Ni>0&&!o&&B&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&B.push(c),c}var W=Vi;function Vi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===pr)&&(e=ki),Li(e)){let r=Ui(e,t,!0);return n&&Ji(r,n),Ni>0&&!a&&B&&(r.shapeFlag&6?B[B.indexOf(e)]=r:B.push(r)),r.patchFlag=-2,r}if(_a(e)&&(e=e.__vccOpts),t){t=Hi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=ge(e)),v(n)&&(Ut(n)&&!d(n)&&(n=s({},n)),t.style=de(n))}let o=g(e)?1:Ei(e)?128:Rn(e)?64:v(e)?4:h(e)?2:0;return U(e,t,n,r,i,o,a,!0)}function Hi(e){return e?Ut(e)||ei(e)?s({},e):e:null}function Ui(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Yi(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&zi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Bi(t)):[a,Bi(t)]:Bi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==z?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ui(e.ssContent),ssFallback:e.ssFallback&&Ui(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Bn(u,c.clone(u)),u}function Wi(e=` `,t=0){return W(Oi,null,e,t)}function Gi(e=``,t=!1){return t?(V(),Ii(ki,null,e)):W(ki,null,e)}function Ki(e){return e==null||typeof e==`boolean`?W(ki):d(e)?W(z,null,e.slice()):Li(e)?qi(e):W(Oi,null,String(e))}function qi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ui(e)}function Ji(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Ji(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!ei(t)?t._ctx=I:r===3&&I&&(I.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:I},n=32):(t=String(t),r&64?(n=16,t=[Wi(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yi(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=ge([t.class,r.class]));else if(e===`style`)t.style=de([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Xi(e,t,n,r=null){on(e,t,7,[n,r])}var Zi=Ir(),Qi=0;function $i(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Zi,o={uid:Qi++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new De(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oi(i,a),emitsOptions:Ur(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Vr.bind(null,o),e.ce&&e.ce(o),o}var G=null,ea=()=>G||I,ta,na;{let e=ue(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ta=t(`__VUE_INSTANCE_SETTERS__`,e=>G=e),na=t(`__VUE_SSR_SETTERS__`,e=>oa=e)}var ra=e=>{let t=G;return ta(e),e.scope.on(),()=>{e.scope.off(),ta(t)}},ia=()=>{G&&G.scope.off(),ta(null)};function aa(e){return e.vnode.shapeFlag&4}var oa=!1;function sa(e,t=!1,n=!1){t&&na(t);let{props:r,children:i}=e.vnode,a=aa(e);ti(e,r,a,t),mi(e,i,n||t);let o=a?ca(e,t):void 0;return t&&na(!1),o}function ca(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,br);let{setup:r}=n;if(r){Ge();let n=e.setupContext=r.length>1?ma(e):null,i=ra(e),a=an(r,e,0,[e.props,n]),o=y(a);if(Ke(),i(),(o||e.sp)&&!qn(e)&&Hn(e),o){if(a.then(ia,ia),t)return a.then(n=>{la(e,n,t)}).catch(t=>{sn(t,e,0)});e.asyncDep=a}else la(e,a,t)}else fa(e,t)}function la(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Yt(t)),fa(e,n)}var ua,da;function fa(e,t,n){let i=e.type;if(!e.render){if(!t&&ua&&!i.render){let t=i.template||Dr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ua(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,da&&da(e)}{let t=ra(e);Ge();try{Cr(e)}finally{Ke(),t()}}}var pa={get(e,t){return j(e,`get`,``),e[t]}};function ma(e){return{attrs:new Proxy(e.attrs,pa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ha(e){return e.exposed?e.exposeProxy||=new Proxy(Yt(Wt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vr)return vr[n](e)},has(e,t){return t in e||t in vr}}):e.proxy}function ga(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function _a(e){return h(e)&&`__vccOpts`in e}var va=(e,t)=>Zt(e,t,oa);function ya(e,t,n){try{Pi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Li(t)?W(e,null,[t]):W(e,t):W(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Li(n)&&(n=[n]),W(e,t,n))}finally{Pi(1)}}var ba=`3.5.34`,xa=void 0,Sa=typeof window<`u`&&window.trustedTypes;if(Sa)try{xa=Sa.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ca=xa?e=>xa.createHTML(e):e=>e,wa=`http://www.w3.org/2000/svg`,Ta=`http://www.w3.org/1998/Math/MathML`,Ea=typeof document<`u`?document:null,Da=Ea&&Ea.createElement(`template`),Oa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ea.createElementNS(wa,e):t===`mathml`?Ea.createElementNS(Ta,e):n?Ea.createElement(e,{is:n}):Ea.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ea.createTextNode(e),createComment:e=>Ea.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ea.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Da.innerHTML=Ca(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Da.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ka=Symbol(`_vtc`);function Aa(e,t,n){let r=e[ka];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ja=Symbol(`_vod`),Ma=Symbol(`_vsh`),Na=Symbol(``),Pa=/(?:^|;)\s*display\s*:/;function Fa(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??La(r,t,``)}else for(let e in t)n[e]??La(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?La(r,i,``):Va(e,i,!g(t)&&t?t[i]:void 0,o)||La(r,i,o)}}else if(i){if(t!==n){let e=r[Na];e&&(n+=`;`+e),r.cssText=n,a=Pa.test(n)}}else t&&e.removeAttribute(`style`);ja in e&&(e[ja]=a?r.display:``,e[Ma]&&(r.display=`none`))}var Ia=/\s*!important$/;function La(e,t,n){if(d(n))n.forEach(n=>La(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ba(e,t);Ia.test(n)?e.setProperty(E(r),n.replace(Ia,``),`important`):e[r]=n}}var Ra=[`Webkit`,`Moz`,`ms`],za={};function Ba(e,t){let n=za[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return za[t]=r;r=ie(r);for(let n=0;n<Ra.length;n++){let i=Ra[n]+r;if(i in e)return za[t]=i}return t}function Va(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Ha=`http://www.w3.org/1999/xlink`;function Ua(e,t,n,r,i,a=ve(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ha,t.slice(6,t.length)):e.setAttributeNS(Ha,t,n):n==null||a&&!ye(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Wa(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ca(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ye(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ga(e,t,n,r){e.addEventListener(t,n,r)}function Ka(e,t,n,r){e.removeEventListener(t,n,r)}var qa=Symbol(`_vei`);function Ja(e,t,n,r,i=null){let a=e[qa]||(e[qa]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Xa(t);r?Ga(e,n,a[t]=eo(r,i),s):o&&(Ka(e,n,o,s),a[t]=void 0)}}var Ya=/(?:Once|Passive|Capture)$/;function Xa(e){let t;if(Ya.test(e)){t={};let n;for(;n=e.match(Ya);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):E(e.slice(2)),t]}var Za=0,Qa=Promise.resolve(),$a=()=>Za||=(Qa.then(()=>Za=0),Date.now());function eo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;on(to(e,n.value),t,5,[e])};return n.value=e,n.attached=$a(),n}function to(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var no=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ro=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Aa(e,r,c):t===`style`?Fa(e,n,r):a(t)?o(t)||Ja(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):io(e,t,r,c))?(Wa(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ua(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ao(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Wa(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ua(e,t,r,c))};function io(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&no(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return no(t)&&g(n)?!1:t in e}function ao(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var oo={};function so(e,t,n){let r=Vn(e,t);C(r)&&(r=s({},r,t));class i extends lo{constructor(e){super(r,e,n)}}return i.def=r,i}var co=typeof HTMLElement<`u`?HTMLElement:class{},lo=class e extends co{constructor(e,t={},n=Do){super(),this._def=e,this._props=t,this._createApp=n,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._styleAnchors=new WeakMap,this._ob=null,this.shadowRoot&&n!==Do?this._root=this.shadowRoot:e.shadowRoot===!1?this._root=this:(this.attachShadow(s({},e.shadowRootOptions,{mode:`open`})),this._root=this.shadowRoot)}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let t=this;for(;t&&=t.assignedSlot||t.parentNode||t.host;)if(t instanceof e){this._parent=t;break}this._instance||(this._resolved?this._mount(this._def):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,hn(()=>{this._connected||(this._ob&&=(this._ob.disconnect(),null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&=(this._teleportTargets.clear(),void 0))})}_processMutations(e){for(let t of e)this._setAttr(t.attributeName)}_resolveDef(){if(this._pendingResolve)return;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});let e=(e,t=!1)=>{this._resolved=!0,this._pendingResolve=void 0;let{props:n,styles:r}=e,i;if(n&&!d(n))for(let e in n){let t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=ce(this._props[e])),(i||=Object.create(null))[T(e)]=!0)}this._numberProps=i,this._resolveProps(e),this.shadowRoot&&this._applyStyles(r),this._mount(e)},t=this._def.__asyncLoader;t?this._pendingResolve=t().then(t=>{t.configureApp=this._def.configureApp,e(this._def=t,!0)}):e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);let t=this._instance&&this._instance.exposed;if(t)for(let e in t)u(this,e)||Object.defineProperty(this,e,{get:()=>qt(t[e])})}_resolveProps(e){let{props:t}=e,n=d(t)?t:Object.keys(t||{});for(let e of Object.keys(this))e[0]!==`_`&&n.includes(e)&&this._setProp(e,this[e]);for(let e of n.map(T))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t,!0,!this._patching)}})}_setAttr(e){if(e.startsWith(`data-v-`))return;let t=this.hasAttribute(e),n=t?this.getAttribute(e):oo,r=T(e);t&&this._numberProps&&this._numberProps[r]&&(n=ce(n)),this._setProp(r,n,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,r=!1){if(t!==this._props[e]&&(this._dirty=!0,t===oo?delete this._props[e]:(this._props[e]=t,e===`key`&&this._app&&(this._app._ceVNode.key=t)),r&&this._instance&&this._update(),n)){let n=this._ob;n&&(this._processMutations(n.takeRecords()),n.disconnect()),t===!0?this.setAttribute(E(e),``):typeof t==`string`||typeof t==`number`?this.setAttribute(E(e),t+``):t||this.removeAttribute(E(e)),n&&n.observe(this,{attributes:!0})}}_update(){let e=this._createVNode();this._app&&(e.appContext=this._app._context),Eo(e,this._root)}_createVNode(){let e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));let t=W(this._def,s(e,this._props));return this._instance||(t.ce=e=>{this._instance=e,e.ce=this,e.isCE=!0;let t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,C(t[0])?s({detail:t},t[0]):{detail:t}))};e.emit=(e,...n)=>{t(e,n),E(e)!==e&&t(E(e),n)},this._setParent()}),t}_applyStyles(e,t,n){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t)}let r=this._nonce,i=this.shadowRoot,a=n?this._getStyleAnchor(n)||this._getStyleAnchor(this._def):this._getRootStyleInsertionAnchor(i),o=null;for(let s=e.length-1;s>=0;s--){let c=document.createElement(`style`);r&&c.setAttribute(`nonce`,r),c.textContent=e[s],i.insertBefore(c,o||a),o=c,s===0&&(n||this._styleAnchors.set(this._def,c),t&&this._styleAnchors.set(t,c))}}_getStyleAnchor(e){if(!e)return null;let t=this._styleAnchors.get(e);return t&&t.parentNode===this.shadowRoot?t:(t&&this._styleAnchors.delete(e),null)}_getRootStyleInsertionAnchor(e){for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];if(!(n instanceof HTMLStyleElement))return n}return null}_parseSlots(){let e=this._slots={},t;for(;t=this.firstChild;){let n=t.nodeType===1&&t.getAttribute(`slot`)||`default`;(e[n]||(e[n]=[])).push(t),this.removeChild(t)}}_renderSlots(){let e=this._getSlots(),t=this._instance.type.__scopeId;for(let n=0;n<e.length;n++){let r=e[n],i=r.getAttribute(`name`)||`default`,a=this._slots[i],o=r.parentNode;if(a)for(let e of a){if(t&&e.nodeType===1){let n=t+`-s`,r=document.createTreeWalker(e,1);e.setAttribute(n,``);let i;for(;i=r.nextNode();)i.setAttribute(n,``)}o.insertBefore(e,r)}else for(;r.firstChild;)o.insertBefore(r.firstChild,r);o.removeChild(r)}}_getSlots(){let e=[this];this._teleportTargets&&e.push(...this._teleportTargets);let t=new Set;for(let n of e){let e=n.querySelectorAll(`slot`);for(let n=0;n<e.length;n++)t.add(e[n])}return Array.from(t)}_injectChildStyle(e,t){this._applyStyles(e.styles,e,t)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_hasShadowRoot(){return this._def.shadowRoot!==!1}_removeChildStyle(e){}},uo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>oe(t,e):t};function fo(e){e.target.composing=!0}function po(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var mo=Symbol(`_assign`);function ho(e,t,n){return t&&(e=e.trim()),n&&(e=se(e)),e}var go={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[mo]=uo(i);let a=r||i.props&&i.props.type===`number`;Ga(e,t?`change`:`input`,t=>{t.target.composing||e[mo](ho(e.value,n,a))}),(n||a)&&Ga(e,`change`,()=>{e.value=ho(e.value,n,a)}),t||(Ga(e,`compositionstart`,fo),Ga(e,`compositionend`,po),Ga(e,`change`,po))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[mo]=uo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?se(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},_o={deep:!0,created(e,t,n){e[mo]=uo(n),Ga(e,`change`,()=>{let t=e._modelValue,n=xo(e),r=e.checked,i=e[mo];if(d(t)){let e=Se(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(p(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(So(e,r))})},mounted:vo,beforeUpdate(e,t,n){e[mo]=uo(n),vo(e,t,n)}};function vo(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(d(t))i=Se(t,r.props.value)>-1;else if(p(t))i=t.has(r.props.value);else{if(t===n)return;i=xe(t,So(e,!0))}e.checked!==i&&(e.checked=i)}var yo={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=p(t);Ga(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?se(xo(e)):xo(e));e[mo](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,hn(()=>{e._assigning=!1})}),e[mo]=uo(r)},mounted(e,{value:t}){bo(e,t)},beforeUpdate(e,t,n){e[mo]=uo(n)},updated(e,{value:t}){e._assigning||bo(e,t)}};function bo(e,t){let n=e.multiple,r=d(t);if(!(n&&!r&&!p(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=xo(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=Se(t,o)>-1}else a.selected=t.has(o);else if(xe(xo(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function xo(e){return`_value`in e?e._value:e.value}function So(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Co=s({patchProp:ro},Oa),wo;function To(){return wo||=gi(Co)}var Eo=((...e)=>{To().render(...e)}),Do=((...e)=>{let t=To().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=ko(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Oo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Oo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function ko(e){return g(e)?document.querySelector(e):e}function Ao(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function jo(e){if(Array.isArray(e))return e}function Mo(e){if(Array.isArray(e))return Ao(e)}function No(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Po(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Go(r.key),r)}}function Fo(e,t,n){return t&&Po(e.prototype,t),n&&Po(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function Io(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=qo(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function K(e,t,n){return(t=Go(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lo(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ro(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function zo(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bo(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Vo(Object(n),!0).forEach(function(t){K(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ho(e,t){return jo(e)||Ro(e,t)||qo(e,t)||zo()}function Uo(e){return Mo(e)||Lo(e)||qo(e)||Bo()}function Wo(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Go(e){var t=Wo(e,`string`);return typeof t==`symbol`?t:t+``}function Ko(e){"@babel/helpers - typeof";return Ko=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ko(e)}function qo(e,t){if(e){if(typeof e==`string`)return Ao(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ao(e,t):void 0}}var Jo=function(){},Yo={},Xo={},Zo=null,Qo={mark:Jo,measure:Jo};try{typeof window<`u`&&(Yo=window),typeof document<`u`&&(Xo=document),typeof MutationObserver<`u`&&(Zo=MutationObserver),typeof performance<`u`&&(Qo=performance)}catch{}var $o=(Yo.navigator||{}).userAgent,es=$o===void 0?``:$o,ts=Yo,J=Xo,ns=Zo,rs=Qo;ts.document;var is=!!J.documentElement&&!!J.head&&typeof J.addEventListener==`function`&&typeof J.createElement==`function`,as=~es.indexOf(`MSIE`)||~es.indexOf(`Trident/`),os,ss=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,cs=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,ls={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},us={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ds=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],Y=`classic`,fs=`duotone`,ps=`sharp`,ms=`sharp-duotone`,hs=`chisel`,gs=`etch`,_s=`graphite`,vs=`jelly`,ys=`jelly-duo`,bs=`jelly-fill`,xs=`mosaic`,Ss=`notdog`,Cs=`notdog-duo`,ws=`pixel`,Ts=`slab`,Es=`slab-duo`,Ds=`slab-press`,Os=`slab-press-duo`,ks=`thumbprint`,As=`utility`,js=`utility-duo`,Ms=`utility-fill`,Ns=`vellum`,Ps=`whiteboard`,Fs=`Classic`,Is=`Duotone`,Ls=`Sharp`,Rs=`Sharp Duotone`,zs=`Chisel`,Bs=`Etch`,Vs=`Graphite`,Hs=`Jelly`,Us=`Jelly Duo`,Ws=`Jelly Fill`,Gs=`Mosaic`,Ks=`Notdog`,qs=`Notdog Duo`,Js=`Pixel`,Ys=`Slab`,Xs=`Slab Duo`,Zs=`Slab Press`,Qs=`Slab Press Duo`,$s=`Thumbprint`,ec=`Utility`,tc=`Utility Duo`,nc=`Utility Fill`,rc=`Vellum`,ic=`Whiteboard`,ac=[Y,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps];os={},K(K(K(K(K(K(K(K(K(K(os,Y,Fs),fs,Is),ps,Ls),ms,Rs),hs,zs),gs,Bs),_s,Vs),vs,Hs),ys,Us),bs,Ws),K(K(K(K(K(K(K(K(K(K(os,xs,Gs),Ss,Ks),Cs,qs),ws,Js),Ts,Ys),Es,Xs),Ds,Zs),Os,Qs),ks,$s),As,ec),K(K(K(K(os,js,tc),Ms,nc),Ns,rc),Ps,ic);var oc={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},sc={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},cc=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),lc={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},uc=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],dc={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},fc=[`kit`];K(K({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var pc={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},mc={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},hc={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},gc={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},_c,vc={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},yc=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];_c={},K(K(K(K(K(K(K(K(K(K(_c,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),K(K(K(K(K(K(K(K(K(K(_c,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),K(K(K(K(_c,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),K(K({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var bc={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},xc={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Sc={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Cc=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(yc,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),wc=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Tc=[1,2,3,4,5,6,7,8,9,10],Ec=Tc.concat([11,12,13,14,15,16,17,18,19,20]),Dc=[].concat(Uo(Object.keys(xc)),wc,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,vc.GROUP,vc.SWAP_OPACITY,vc.PRIMARY,vc.SECONDARY],Tc.map(function(e){return`${e}x`}),Ec.map(function(e){return`w-${e}`})),Oc={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},kc=`___FONT_AWESOME___`,Ac=16,jc=`fa`,Mc=`svg-inline--fa`,Nc=`data-fa-i2svg`,Pc=`data-fa-pseudo-element`,Fc=`data-fa-pseudo-element-pending`,Ic=`data-prefix`,Lc=`data-icon`,Rc=`fontawesome-i2svg`,zc=`async`,Bc=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Vc=[`::before`,`::after`,`:before`,`:after`],Hc=function(){try{return!0}catch{return!1}}();function Uc(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[Y]}})}var Wc=q({},ls);Wc[Y]=q(q(q(q({},{"fa-duotone":`duotone`}),ls[Y]),dc.kit),dc[`kit-duotone`]);var Gc=Uc(Wc),Kc=q({},lc);Kc[Y]=q(q(q(q({},{duotone:`fad`}),Kc[Y]),gc.kit),gc[`kit-duotone`]);var qc=Uc(Kc),Jc=q({},Sc);Jc[Y]=q(q({},Jc[Y]),hc.kit);var Yc=Uc(Jc),Xc=q({},bc);Xc[Y]=q(q({},Xc[Y]),pc.kit),Uc(Xc);var Zc=ss,Qc=`fa-layers-text`,$c=cs;Uc(q({},oc));var el=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],tl=us,nl=[].concat(Uo(fc),Uo(Dc)),rl=ts.FontAwesomeConfig||{};function il(e){var t=J.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function al(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}J&&typeof J.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Ho(e,2),n=t[0],r=t[1],i=al(il(n));i!=null&&(rl[r]=i)});var ol={styleDefault:`solid`,familyDefault:Y,cssPrefix:jc,replacementClass:Mc,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rl.familyPrefix&&(rl.cssPrefix=rl.familyPrefix);var sl=q(q({},ol),rl);sl.autoReplaceSvg||(sl.observeMutations=!1);var X={};Object.keys(ol).forEach(function(e){Object.defineProperty(X,e,{enumerable:!0,set:function(t){sl[e]=t,cl.forEach(function(e){return e(X)})},get:function(){return sl[e]}})}),Object.defineProperty(X,`familyPrefix`,{enumerable:!0,set:function(e){sl.cssPrefix=e,cl.forEach(function(e){return e(X)})},get:function(){return sl.cssPrefix}}),ts.FontAwesomeConfig=X;var cl=[];function ll(e){return cl.push(e),function(){cl.splice(cl.indexOf(e),1)}}var ul=Ac,dl={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fl(e){if(!(!e||!is)){var t=J.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=J.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return J.head.insertBefore(t,r),e}}var pl=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function ml(){for(var e=12,t=``;e-- >0;)t+=pl[Math.random()*62|0];return t}function hl(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function gl(e){return e.classList?hl(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function _l(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function vl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${_l(e[n])}" `},``).trim()}function yl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function bl(e){return e.size!==dl.size||e.x!==dl.x||e.y!==dl.y||e.rotate!==dl.rotate||e.flipX||e.flipY}function xl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Sl(e){var t=e.transform,n=e.width,r=n===void 0?Ac:n,i=e.height,a=i===void 0?Ac:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&as?c+=`translate(${t.x/ul-r/2}em, ${t.y/ul-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/ul}em), calc(-50% + ${t.y/ul}em)) `:c+=`translate(${t.x/ul}em, ${t.y/ul}em) `,c+=`scale(${t.size/ul*(t.flipX?-1:1)}, ${t.size/ul*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Cl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function wl(){var e=jc,t=Mc,n=X.cssPrefix,r=X.replacementClass,i=Cl;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Tl=!1;function El(){X.autoAddCss&&!Tl&&(fl(wl()),Tl=!0)}var Dl={mixout:function(){return{dom:{css:wl,insertCss:El}}},hooks:function(){return{beforeDOMElementCreation:function(){El()},beforeI2svg:function(){El()}}}},Ol=ts||{};Ol[kc]||(Ol[kc]={}),Ol[kc].styles||(Ol[kc].styles={}),Ol[kc].hooks||(Ol[kc].hooks={}),Ol[kc].shims||(Ol[kc].shims=[]);var kl=Ol[kc],Al=[],jl=function(){J.removeEventListener(`DOMContentLoaded`,jl),Ml=1,Al.map(function(e){return e()})},Ml=!1;is&&(Ml=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Ml||J.addEventListener(`DOMContentLoaded`,jl));function Nl(e){is&&(Ml?setTimeout(e,0):Al.push(e))}function Pl(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?_l(e):`<${t} ${vl(r)}>${a.map(Pl).join(``)}</${t}>`}function Fl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Il=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Ll=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Il(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Rl(e){return Uo(e).length===1?e.codePointAt(0).toString(16):null}function zl(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Bl(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=zl(t);typeof kl.hooks.addPack==`function`&&!r?kl.hooks.addPack(e,zl(t)):kl.styles[e]=q(q({},kl.styles[e]||{}),i),e===`fas`&&Bl(`fa`,t)}var Vl=kl.styles,Hl=kl.shims,Ul=Object.keys(Yc),Wl=Ul.reduce(function(e,t){return e[t]=Object.keys(Yc[t]),e},{}),Gl=null,Kl={},ql={},Jl={},Yl={},Xl={};function Zl(e){return~nl.indexOf(e)}function Ql(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Zl(i)?i:null}var $l=function(){var e=function(e){return Ll(Vl,function(t,n,r){return t[r]=Ll(n,e,{}),t},{})};Kl=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),ql=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Xl=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Vl||X.autoFetchSvg,n=Ll(Hl,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Jl=n.names,Yl=n.unicodes,Gl=cu(X.styleDefault,{family:X.familyDefault})};ll(function(e){Gl=cu(e.styleDefault,{family:X.familyDefault})}),$l();function eu(e,t){return(Kl[e]||{})[t]}function tu(e,t){return(ql[e]||{})[t]}function nu(e,t){return(Xl[e]||{})[t]}function ru(e){return Jl[e]||{prefix:null,iconName:null}}function iu(e){var t=Yl[e],n=eu(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function au(){return Gl}var ou=function(){return{prefix:null,iconName:null,rest:[]}};function su(e){var t=Y,n=Ul.reduce(function(e,t){return e[t]=`${X.cssPrefix}-${t}`,e},{});return ac.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Wl[r].includes(e)}))&&(t=r)}),t}function cu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?Y:t,r=Gc[n][e];if(n===fs&&!e)return`fad`;var i=qc[n][e]||qc[n][r],a=e in kl.styles?e:null;return i||a||null}function lu(e){var t=[],n=null;return e.forEach(function(e){var r=Ql(X.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function uu(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var du=Cc.concat(uc);function fu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=uu(e.filter(function(e){return du.includes(e)})),a=uu(e.filter(function(e){return!du.includes(e)})),o=Ho(i.filter(function(e){return r=e,!ds.includes(e)}),1)[0],s=o===void 0?null:o,c=su(i),l=q(q({},lu(a)),{},{prefix:cu(s,{family:c})});return q(q(q({},l),gu({values:e,family:c,styles:Vl,config:X,canonical:l,givenPrefix:r})),pu(n,r,l))}function pu(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?ru(i):{},o=nu(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Vl.far&&Vl.fas&&!X.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var mu=ac.filter(function(e){return e!==Y||e!==fs}),hu=Object.keys(Sc).filter(function(e){return e!==Y}).map(function(e){return Object.keys(Sc[e])}).flat();function gu(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===fs,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&mu.includes(n)&&(Object.keys(s).find(function(e){return hu.includes(e)})||l.autoFetchSvg)&&(r.prefix=cc.get(n).defaultShortPrefixId,r.iconName=nu(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=au()||`fas`),r}var _u=function(){function e(){No(this,e),this.definitions={}}return Fo(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=q(q({},e.definitions[n]||{}),t[n]),Bl(n,t[n]);var r=Yc[Y][n];r&&Bl(r,t[n]),$l()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),vu=[],yu={},bu={},xu=Object.keys(bu);function Su(e,t){var n=t.mixoutsTo;return vu=e,yu={},Object.keys(bu).forEach(function(e){xu.indexOf(e)===-1&&delete bu[e]}),vu.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Ko(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){yu[e]||(yu[e]=[]),yu[e].push(r[e])})}e.provides&&e.provides(bu)}),n}function Cu(e,t){var n=[...arguments].slice(2);return(yu[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function wu(e){var t=[...arguments].slice(1);(yu[e]||[]).forEach(function(e){e.apply(null,t)})}function Tu(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return bu[e]?bu[e].apply(null,t):void 0}function Eu(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||au();if(t)return t=nu(n,t)||t,Fl(Du.definitions,n,t)||Fl(kl.styles,n,t)}var Du=new _u,Z={noAuto:function(){X.autoReplaceSvg=!1,X.observeMutations=!1,wu(`noAuto`)},config:X,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return is?(wu(`beforeI2svg`,e),Tu(`pseudoElements2svg`,e),Tu(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;X.autoReplaceSvg===!1&&(X.autoReplaceSvg=!0),X.observeMutations=!0,Nl(function(){Ou({autoReplaceSvgRoot:t}),wu(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Ko(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:nu(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=cu(e[0]);return{prefix:n,iconName:nu(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${X.cssPrefix}-`)>-1||e.match(Zc))){var r=fu(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||au(),iconName:nu(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=au();return{prefix:i,iconName:nu(i,e)||e}}}},library:Du,findIconDefinition:Eu,toHtml:Pl},Ou=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?J:e;(Object.keys(kl.styles).length>0||X.autoFetchSvg)&&is&&X.autoReplaceSvg&&Z.dom.i2svg({node:t})};function ku(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return Pl(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(is){var t=J.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Au(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(bl(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=yl(q(q({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function ju(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${X.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:q(q({},i),{},{id:o}),children:r}]}]}function Mu(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Nu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[X.replacementClass,a?`${X.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:q(q({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Mu(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Nc]=``);var _=q(q({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:q({},l.styles)}),v=r.found&&n.found?Tu(`generateAbstractMask`,_)||{children:[],attributes:{}}:Tu(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?ju(_):Au(_)}function Pu(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=q(q({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Nc]=``);var l=q({},a.styles);bl(i)&&(l.transform=Sl({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=yl(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Fu(e){var t=e.content,n=e.extra,r=q(q({},n.attributes),{},{class:n.classes.join(` `)}),i=yl(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Iu=kl.styles;function Lu(e){var t=e[0],n=e[1],r=Ho(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${X.cssPrefix}-${tl.GROUP}`},children:[{tag:`path`,attributes:{class:`${X.cssPrefix}-${tl.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${X.cssPrefix}-${tl.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Ru={found:!1,width:512,height:512};function zu(e,t){!Hc&&!X.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Bu(e,t){var n=t;return t===`fa`&&X.styleDefault!==null&&(t=au()),new Promise(function(r,i){if(n===`fa`){var a=ru(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Iu[t]&&Iu[t][e]){var o=Iu[t][e];return r(Lu(o))}zu(e,t),r(q(q({},Ru),{},{icon:X.showMissingIcons&&e&&Tu(`missingIconAbstract`)||{}}))})}var Vu=function(){},Hu=X.measurePerformance&&rs&&rs.mark&&rs.measure?rs:{mark:Vu,measure:Vu},Uu=`FA "7.3.1"`,Wu=function(e){return Hu.mark(`${Uu} ${e} begins`),function(){return Gu(e)}},Gu=function(e){Hu.mark(`${Uu} ${e} ends`),Hu.measure(`${Uu} ${e}`,`${Uu} ${e} begins`,`${Uu} ${e} ends`)},Ku={begin:Wu,end:Gu},qu=function(){};function Ju(e){return typeof(e.getAttribute?e.getAttribute(Nc):null)==`string`}function Yu(e){var t=e.getAttribute?e.getAttribute(Ic):null,n=e.getAttribute?e.getAttribute(Lc):null;return t&&n}function Xu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(X.replacementClass)}function Zu(){return X.autoReplaceSvg===!0?nd.replace:nd[X.autoReplaceSvg]||nd.replace}function Qu(e){return J.createElementNS(`http://www.w3.org/2000/svg`,e)}function $u(e){return J.createElement(e)}function ed(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Qu:$u:t;if(typeof e==`string`)return J.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(ed(e,{ceFn:n}))}),r}function td(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var nd={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(ed(e),t)}),t.getAttribute(Nc)===null&&X.keepOriginalSource){var n=J.createComment(td(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~gl(t).indexOf(X.replacementClass))return nd.replace(e);var r=RegExp(`${X.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===X.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Pl(e)}).join(`
`);t.setAttribute(Nc,``),t.innerHTML=a}};function rd(e){e()}function id(e,t){var n=typeof t==`function`?t:qu;if(e.length===0)n();else{var r=rd;X.mutateApproach===zc&&(r=ts.requestAnimationFrame||rd),r(function(){var t=Zu(),r=Ku.begin(`mutate`);e.map(t),r(),n()})}}var ad=!1;function od(){ad=!0}function sd(){ad=!1}var cd=null;function ld(e){if(ns&&X.observeMutations){var t=e.treeCallback,n=t===void 0?qu:t,r=e.nodeCallback,i=r===void 0?qu:r,a=e.pseudoElementsCallback,o=a===void 0?qu:a,s=e.observeMutationsRoot,c=s===void 0?J:s;cd=new ns(function(e){if(!ad){var t=au();hl(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Ju(e.addedNodes[0])&&(X.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&X.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Ju(e.target)&&~el.indexOf(e.attributeName))if(e.attributeName===`class`&&Yu(e.target)){var r=fu(gl(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Ic,a||t),s&&e.target.setAttribute(Lc,s)}else Xu(e.target)&&i(e.target)})}}),is&&cd.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ud(){cd&&cd.disconnect()}function dd(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function fd(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=fu(gl(e));return i.prefix||=au(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=tu(i.prefix,e.innerText)||eu(i.prefix,Rl(e.innerText))),!i.iconName&&X.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function pd(e){return hl(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function md(){return{iconName:null,prefix:null,transform:dl,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fd(e),r=n.iconName,i=n.prefix,a=n.rest,o=pd(e),s=Cu(`parseNodeAttributes`,{},e);return q({iconName:r,prefix:i,transform:dl,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?dd(e):[],attributes:o}},s)}var gd=kl.styles;function _d(e){var t=X.autoReplaceSvg===`nest`?hd(e,{styleParser:!1}):hd(e);return~t.extra.classes.indexOf(Qc)?Tu(`generateLayersText`,e,t):Tu(`generateSvgReplacementMutation`,e,t)}function vd(){return[].concat(Uo(uc),Uo(Cc))}function yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!is)return Promise.resolve();var n=J.documentElement.classList,r=function(e){return n.add(`${Rc}-${e}`)},i=function(e){return n.remove(`${Rc}-${e}`)},a=X.autoFetchSvg?vd():ds.concat(Object.keys(gd));a.includes(`fa`)||a.push(`fa`);var o=[`.${Qc}:not([${Nc}])`].concat(a.map(function(e){return`.${e}:not([${Nc}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=hl(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Ku.begin(`onTree`),l=s.reduce(function(e,t){try{var n=_d(t);n&&e.push(n)}catch(e){Hc||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){id(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function bd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_d(e).then(function(e){e&&id([e],t)})}function xd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Eu(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Eu(i||{}),e(r,q(q({},n),{},{mask:i}))}}var Sd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?dl:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return ku(q({type:`icon`},e),function(){return wu(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Nu({icons:{main:Lu(v),mask:s?Lu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:q(q({},dl),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Cd={mixout:function(){return{icon:xd(Sd)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=yd,e.nodeCallback=bd,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?J:t,r=e.callback;return yd(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Bu(n,r),o.iconName?Bu(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Ho(o,2),u=l[0],d=l[1];t([e,Nu({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=yl(a);o.length>0&&(n.style=o);var s;return bl(i)&&(s=Tu(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},wd={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return ku({type:`layer`},function(){wu(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${X.cssPrefix}-layers`].concat(Uo(r)).join(` `)},children:n}]})}}}},Td={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ku({type:`counter`,content:e},function(){return wu(`beforeDOMElementCreation`,{content:e,params:t}),Fu({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${X.cssPrefix}-layers-counter`].concat(Uo(a))}})})}}}},Ed={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?dl:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ku({type:`text`,content:e},function(){return wu(`beforeDOMElementCreation`,{content:e,params:t}),Pu({content:e,transform:q(q({},dl),r),extra:{attributes:s,styles:l,classes:[`${X.cssPrefix}-layers-text`].concat(Uo(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(as){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Pu({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Dd=RegExp(`"`,`ug`),Od=[1105920,1112319],kd=q(q(q(q({},{FontAwesome:{normal:`fas`,400:`fas`}}),sc),Oc),mc),Ad=Object.keys(kd).reduce(function(e,t){return e[t.toLowerCase()]=kd[t],e},{}),jd=Object.keys(Ad).reduce(function(e,t){var n=Ad[t];return e[t]=n[900]||Uo(Object.entries(n))[0][1],e},{});function Md(e){return Rl(Uo(e.replace(Dd,``))[0]||``)}function Nd(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Dd,``),r=n.codePointAt(0),i=r>=Od[0]&&r<=Od[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function Pd(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ad[n]||{})[i]||jd[n]}function Fd(e,t){var n=`${Fc}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=hl(e.children).filter(function(e){return e.getAttribute(Pc)===t})[0],o=ts.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match($c),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Pd(s,l),p=Md(d),m=c[0].startsWith(`FontAwesome`),h=Nd(o),g=eu(f,p),_=g;if(m){var v=iu(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Ic)!==f||a.getAttribute(Lc)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=md(),b=y.extra;b.attributes[Pc]=t,Bu(g,f).then(function(i){var a=Nu(q(q({},y),{},{icons:{main:i,mask:ou()},prefix:f,iconName:_,extra:b,watchable:!0})),o=J.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Pl(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Id(e){return Promise.all([Fd(e,`::before`),Fd(e,`::after`)])}function Ld(e){return e.parentNode!==document.head&&!~Bc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pc)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Rd=function(e){return!!e&&Vc.some(function(t){return e.includes(t)})},zd=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=Io(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Rd(a)){var o=Vc.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Bd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(is){var n;if(t)n=e;else if(X.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=Io(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=Io(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=Io(zd(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){X.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=hl(n).filter(Ld).map(Id),i=Ku.begin(`searchPseudoElements`);od(),Promise.all(r).then(function(){i(),sd(),e()}).catch(function(){i(),sd(),t()})})}}var Vd={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Bd,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?J:t;X.searchPseudoElements&&Bd(n)}}},Hd=!1,Ud={mixout:function(){return{dom:{unwatch:function(){od(),Hd=!0}}}},hooks:function(){return{bootstrap:function(){ld(Cu(`mutationObserverCallbacks`,{}))},noAuto:function(){ud()},watch:function(e){var t=e.observeMutationsRoot;Hd?sd():ld(Cu(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Wd=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Gd={mixout:function(){return{parse:{transform:function(e){return Wd(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Wd(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:q({},a.outer),children:[{tag:`g`,attributes:q({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:q(q({},t.icon.attributes),a.path)}]}]}}}},Kd={x:0,y:0,width:`100%`,height:`100%`};function qd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Jd(e){return e.tag===`g`?e.children:[e]}Su([Dl,Cd,wd,Td,Ed,Vd,Ud,Gd,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?fu(n.split(` `).map(function(e){return e.trim()})):ou();return r.prefix||=au(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=xl({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:q(q({},Kd),{},{fill:`white`})},p=c.children?{children:c.children.map(qd)}:{},m={tag:`g`,attributes:q({},d.inner),children:[qd(q({tag:c.tag,attributes:q(q({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:q({},d.outer),children:[m]},g=`mask-${a||ml()}`,_=`clip-${a||ml()}`,v={tag:`mask`,attributes:q(q({},Kd),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Jd(u)},v]};return t.push(y,{tag:`rect`,attributes:q({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Kd)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;ts.matchMedia&&(t=ts.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:q(q({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=q(q({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:q(q({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:q(q({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:q(q({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:q(q({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:q(q({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:q(q({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:q(q({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:Z}),Z.noAuto,Z.config;var Yd=Z.library;Z.dom;var Xd=Z.parse;Z.findIconDefinition,Z.toHtml;var Zd=Z.icon;Z.layer,Z.text,Z.counter;function Qd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function $d(e){if(Array.isArray(e))return Qd(e)}function Q(e,t,n){return(t=cf(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ef(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function tf(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?nf(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nf(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function rf(e,t){if(e==null)return{};var n,r,i=af(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function af(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function of(e){return $d(e)||ef(e)||uf(e)||tf()}function sf(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function cf(e){var t=sf(e,`string`);return typeof t==`symbol`?t:t+``}function lf(e){"@babel/helpers - typeof";return lf=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},lf(e)}function uf(e,t){if(e){if(typeof e==`string`)return Qd(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qd(e,t):void 0}}function df(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}function ff(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-canvas-square`,e.canvasSquare),`fa-canvas-roomy`,e.canvasRoomy),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),Q(Q(Q(Q(Q(t,`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var pf=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},mf={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(pf)})(mf);var hf=mf.exports,gf=[`gradientFill`],_f=[`class`,`style`],vf=[`type`,`stops`,`id`];function yf(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=hf.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function bf(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function xf(e,t){return ya(`stop`,$({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function Sf(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(Sf);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?$($({},e),{},{attributes:$($({},e.attributes),{},{fill:void 0}),children:t}):$($({},e),{},{children:t})}function Cf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=rf(t,gf),o=i||`fill`in n?Sf(e):e,s=(o.children||[]).map(function(e){return Cf(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=bf(n);break;case`style`:e.style=yf(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=rf(n,_f);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=rf(i,vf),_=ya(f===`linear`?`linearGradient`:`radialGradient`,$($({},g),{},{id:h}),m.map(xf));return ya(o.tag,$($($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[_].concat(of(s)))}return ya(e.tag,$($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),s)}var wf=!1;try{wf=!0}catch{}function Tf(){if(!wf&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function Ef(e){if(e&&lf(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Xd.icon)return Xd.icon(e);if(e===null)return null;if(lf(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var Df=Vn({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},canvasSquare:{type:Boolean,default:!1},canvasRoomy:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=va(function(){return Ef(e.icon)}),i=va(function(){return df(`classes`,ff(e))}),a=va(function(){return df(`transform`,typeof e.transform==`string`?Xd.transform(e.transform):e.transform)}),o=va(function(){return df(`mask`,Ef(e.mask))}),s=va(function(){var t=$($($($({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,Zd(r.value,t)});Nn(s,function(e){if(!e)return Tf(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&Tf(`gradientFill is not supported when symbol is true and will be ignored`);var c=va(function(){return s.value?Cf(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return c.value}}});Yd.add({prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]},{prefix:`fas`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},{prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},{prefix:`fas`,iconName:`arrows-rotate`,icon:[512,512,[128472,`refresh`,`sync`],`f021`,`M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z`]},{prefix:`fas`,iconName:`spinner`,icon:[512,512,[],`f110`,`M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z`]},{prefix:`far`,iconName:`square`,icon:[448,512,[9632,9723,9724,61590],`f0c8`,`M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`]},{prefix:`far`,iconName:`square-check`,icon:[448,512,[9745,9989,61510,`check-square`],`f14a`,`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z`]});var Of=`svg.svg-inline--fa{vertical-align:-.125em;height:1em;display:inline-block;overflow:visible}svg:not(:root).svg-inline--fa,svg:not(:host).svg-inline--fa{box-sizing:content-box;overflow:visible}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.fa-spin{font-size:50px;animation:2s linear infinite fa-spin}`,kf=`.access h1[data-v-9303d550],h2[data-v-9303d550],h3[data-v-9303d550],h4[data-v-9303d550]{color:#8b0000}.access input[type=text][data-v-9303d550]{min-width:250px}.access input[type=checkbox][data-v-9303d550]{cursor:pointer}.access textarea[data-v-9303d550]{width:600px;min-width:600px;height:100px}.input-role span[data-v-9303d550]{text-align:center;width:40px;display:inline-block}label[data-v-9303d550]{text-align:right;width:180px;margin-right:5px;font-weight:700;display:inline-block}.access button[data-v-9303d550]{text-align:center;color:#fff;vertical-align:top;cursor:pointer;pointer-events:auto;box-sizing:border-box;opacity:.9;background:#8b0000;border:none;border-radius:3px;margin:0 0 3px 7px;padding:3px 12px;font-size:16px;line-height:1.7;text-decoration:none;box-shadow:0 1px 5px #000000a6}.access button[data-v-9303d550]:disabled{opacity:.4;pointer-events:none}div.spinner[data-v-9303d550]{background:#0003;align-items:center;width:100%;height:100vh;padding-left:calc(50% - 25px);display:flex;position:fixed;top:0;left:0}div.spinner>div[data-v-9303d550]{text-align:center;height:60px}div.message[data-v-9303d550]{background:#fff;width:fit-content;max-width:500px;margin-left:200px;padding:30px;position:fixed;top:calc(50vh - 100px);box-shadow:0 0 3px #00000080}div.message.success[data-v-9303d550]{color:#006400}div.message.error[data-v-9303d550]{color:#8b0000}`,Af=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},jf={name:`FormaterreAccess`,components:{FontAwesomeIcon:Df},props:{lang:{type:String,default:`en`},user:{type:Object,default:null},app:{type:String,default:`vso-opt`},withInstitution:{type:Boolean,default:!0},api:{type:String,default:`https://catalog.formater/api`}},data(){return{types:{},organisation:{id:null,type:null,name:null},organisations:[],roles:{},clients:{},checkedRoles:[],message:``,asking:!1,success:null,error:null}},computed:{disabled(){return!!(this.checkedRoles.length===0||this.withInstitution&&(!this.organisation.name||!this.organisation.type))}},mounted(){this.getOrganisationTypes(),this.user&&this.getUserinfo(this.user.token)},watch:{user(e){e&&this.getUserinfo(this.user.token)}},methods:{accessRequest(){this.asking=!0;var e=URL.parse(window.location.href),t={email:this.user.email,app:this.app,domain:e.href,message:this.message,role:this.checkedRoles,lang:this.lang};this.organisation.id?t.organizationId=this.organisation.id:(t.organization=this.organisation.name,t.organizationType=this.organisation.type);var n=new URLSearchParams(t),r=this.api.replace(`/api`,`/requests/ask`);fetch(r,{method:`POST`,body:n.toString(),headers:{Accept:`application/json`,"Content-Type":`application/x-www-form-urlencoded`}}).then(e=>e.json()).then(e=>{if(this.asking=!1,e.success&&(this.success=`Your request has been successfully recorded.<br />An email has been sent to you. `),e.success&&e.roles){var t=this.roles;e.roles.forEach(function(e){var n=e.split(`.`),r=t[n[0]].roles.findIndex(e=>e.name===n[1]);t[n[0]].roles[r].status=`WAITING`}),e.organizationId&&(this.organisation.id=e.organizationId),this.roles=t,this.checkedRoles=[],this.message=null}e.error&&(this.error=`AN ERROR OCCURRED: <br />`+e.error)}).catch(e=>{console.log(e),this.asking=!1,this.error=`SERVER ERROR`})},getOrganisations(){var e=this.api+`/organizations?nb=500&orderBy=o_name%20ASC`;this.organisation.name&&(e+=`&q=`+this.organisation.name),fetch(e).then(e=>e.json()).then(e=>{e.organizations&&(this.organisations=e.organizations)})},organisationUpdated(e){if(this.organisation.id=null,this.organisation.type=null,this.organisation.name.length<=1&&(this.organisations=[]),!(e.inputType&&e.inputType.indexOf(`delete`)>=0)){if(this.organisation.name.length==2){this.getOrganisations();return}if(!(this.organisation.length<5)&&new RegExp(/^[A-z0-9À-ž\s\-'@()]{5,300}$/).test(this.organisation)){var t=this.organisation.name.trim().toLowerCase(),n=this.organisations.find(e=>t.indexOf(e.o_name.toLowerCase())>=0);n?(this.organisation.id=n.o_uid,this.organisation.type=n.o_fk_type_id):this.organisation.id=null}}},getOrganisationTypes(){fetch(this.api+`/types?lang=`+this.lang).then(e=>e.json()).then(e=>{e.types&&(this.types=e.types)})},getUserinfo(e){fetch(this.api+`/user?app=vso-opt`,{headers:{Accept:`application/json`,"Content-Type":`application/x-www-form-urlencoded`},method:`POST`,body:new URLSearchParams({bearer:e})}).then(e=>e.json()).then(e=>{e.organization&&e.organization.id&&(this.organisation=e.organization),this.clients=e.clients,this.roles=e.roles})},resetMessage(){this.error=null,this.success=null}}},Mf={key:0,class:`spinner`},Nf=[`innerHTML`],Pf=[`innerHTML`],Ff={style:{"margin-top":`10px`,display:`block`}},If={key:0},Lf={id:`organisations`},Rf=[`data-value`],zf={key:0},Bf=[`disabled`],Vf=[`value`],Hf={key:0},Uf={class:`input-role`},Wf=[`title`],Gf={key:0,style:{color:`green`}},Kf={key:1,title:`Request being processed`},qf={key:2,title:`Your request has been rejected.`},Jf={key:3},Yf=[`value`],Xf={style:{width:`600px`,"text-align":`right`,"margin-top":`20px`}},Zf=[`disabled`];function Qf(e,t,n,r,i,a){let o=fr(`font-awesome-icon`),s=fr(`font-awesome`);return V(),H(z,null,[i.asking?(V(),H(`div`,Mf,[U(`div`,null,[W(o,{icon:`fa-solid fa-refresh`,class:`fa-spin`})])])):Gi(``,!0),i.success?(V(),H(`div`,{key:1,class:`message success`,onClick:t[0]||=e=>i.success=null,innerHTML:i.success},null,8,Nf)):Gi(``,!0),i.error?(V(),H(`div`,{key:2,class:`message error`,onClick:t[1]||=e=>i.error=null,innerHTML:i.error},null,8,Pf)):Gi(``,!0),n.user?(V(),H(`div`,{key:3,class:`access`,onClick:t[9]||=e=>a.resetMessage()},[t[17]||=U(`h1`,null,`Access request`,-1),U(`div`,null,[t[10]||=Wi(`Hello `,-1),U(`b`,null,we(n.user.email),1),t[11]||=Wi(`!`,-1)]),U(`div`,Ff,[n.withInstitution?(V(),H(z,{key:0},[Wi(` Complete the information about your organization if necessary, then select the access rights you require. `)],64)):(V(),H(z,{key:1},[Wi(` Select the access rights you require. `)],64))]),n.withInstitution?(V(),H(`span`,If,[t[16]||=U(`h2`,null,`Your organisation`,-1),U(`div`,null,[t[12]||=U(`label`,null,`Name`,-1),Dn(U(`input`,{type:`hidden`,"onUpdate:modelValue":t[2]||=e=>i.organisation.id=e},null,512),[[go,i.organisation.id]]),Dn(U(`input`,{"onUpdate:modelValue":t[3]||=e=>i.organisation.name=e,type:`text`,list:`organisations`,onInput:t[4]||=e=>a.organisationUpdated(e),required:``},null,544),[[go,i.organisation.name]]),t[13]||=Wi(` * `,-1),U(`datalist`,Lf,[(V(!0),H(z,null,gr(i.organisations,e=>(V(),H(`option`,{"data-value":e.o_uid},[Wi(we(e.o_name),1),e.o_short?(V(),H(`span`,zf,` (`+we(e.o_short)+`)`,1)):Gi(``,!0)],8,Rf))),256))])]),U(`div`,null,[t[15]||=U(`label`,null,`Type`,-1),Dn(U(`select`,{"onUpdate:modelValue":t[5]||=e=>i.organisation.type=e,disabled:i.organisation.id},[t[14]||=U(`option`,{value:``},`---`,-1),(V(!0),H(z,null,gr(i.types,e=>(V(),H(`option`,{value:e.t_id},we(e.t_name),9,Vf))),256))],8,Bf),[[yo,i.organisation.type]])])])):Gi(``,!0),t[18]||=U(`h2`,null,`Your access right`,-1),(V(!0),H(z,null,gr(i.roles,(e,r)=>(V(),H(z,null,[r==`global`?Gi(``,!0):(V(),H(`div`,Hf,[U(`h4`,null,we(e.title[n.lang]||r),1),(V(!0),H(z,null,gr(e.roles,e=>(V(),H(`div`,Uf,[U(`label`,{title:e.description.en},we(e.title.en||e.name),9,Wf),n.user.roles&&n.user.roles[r]&&n.user.roles[r].indexOf(e.name)>=0?(V(),H(`span`,Gf,[W(o,{icon:`fa-solid fa-check`})])):e.status===`WAITING`?(V(),H(`span`,Kf,[W(o,{icon:`fa-solid fa-clock`})])):e.status===`REJECTED`?(V(),H(`span`,qf,[W(s,{icon:`fa-solid fa-close`})])):(V(),H(`span`,Jf,[Dn(U(`input`,{type:`checkbox`,"onUpdate:modelValue":t[6]||=e=>i.checkedRoles=e,value:r+`.`+e.name},null,8,Yf),[[_o,i.checkedRoles]])]))]))),256))]))],64))),256)),t[19]||=U(`h2`,null,`Motivation for the moderator`,-1),Dn(U(`textarea`,{"onUpdate:modelValue":t[7]||=e=>i.message=e},null,512),[[go,i.message]]),U(`div`,Xf,[U(`button`,{disabled:a.disabled,onClick:t[8]||=e=>a.accessRequest()},`Send`,8,Zf)])])):Gi(``,!0)],64)}var $f=Af(jf,[[`render`,Qf],[`styles`,[Of,kf]],[`__scopeId`,`data-v-9303d550`]]),ep={__name:`VsoAccess`,props:{api:{type:String,default:`https://catalog.formater/api`},url:{type:String,default:`https://spotgins.formater/sso-test/token.php`},withInstitution:{type:String,default:!1}},setup(e){let t=Lt({user:null});function n(){fetch(e.url,{credentials:`include`}).then(e=>e.json()).then(e=>{t.user=e})}return nr(()=>{n()}),(n,r)=>(V(),Ii($f,{api:e.api,user:t.user,"with-institution":e.withInstitution},null,8,[`api`,`user`,`with-institution`]))}},tp=so($f),np=so(ep);customElements.define(`formaterre-access`,tp),customElements.define(`vso-access`,np);