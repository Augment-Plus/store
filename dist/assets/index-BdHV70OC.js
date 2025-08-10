const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Index-DH0veE9E.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Index-D-b6maMV.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const se={},_n=[],Ze=()=>{},Mf=()=>!1,ns=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ni=e=>e.startsWith("onUpdate:"),ye=Object.assign,Di=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Lf=Object.prototype.hasOwnProperty,Z=(e,t)=>Lf.call(e,t),V=Array.isArray,Bn=e=>rs(e)==="[object Map]",Uf=e=>rs(e)==="[object Set]",j=e=>typeof e=="function",de=e=>typeof e=="string",Cn=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Ec=e=>(ue(e)||j(e))&&j(e.then)&&j(e.catch),Ff=Object.prototype.toString,rs=e=>Ff.call(e),Bf=e=>rs(e).slice(8,-1),$f=e=>rs(e)==="[object Object]",Mi=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$n=xi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ss=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Hf=/-(\w)/g,Be=ss(e=>e.replace(Hf,(t,n)=>n?n.toUpperCase():"")),jf=/\B([A-Z])/g,cn=ss(e=>e.replace(jf,"-$1").toLowerCase()),is=ss(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rs=ss(e=>e?`on${is(e)}`:""),Ut=(e,t)=>!Object.is(e,t),Rr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Zs=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ei=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Co;const os=()=>Co||(Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Li(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?zf(r):Li(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(de(e)||ue(e))return e}const Vf=/;(?![^(]*\))/g,Wf=/:([^]+)/,qf=/\/\*[^]*?\*\//g;function zf(e){const t={};return e.replace(qf,"").split(Vf).forEach(n=>{if(n){const r=n.split(Wf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ui(e){let t="";if(de(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const r=Ui(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Kf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gf=xi(Kf);function vc(e){return!!e||e===""}/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class Ic{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=he,!t&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=he;try{return he=this,t()}finally{he=n}}}on(){++this._on===1&&(this.prevScope=he,he=this)}off(){this._on>0&&--this._on===0&&(he=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sc(e){return new Ic(e)}function Fi(){return he}function Tc(e,t=!1){he&&he.cleanups.push(e)}let oe;const As=new WeakSet;class Rc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,he&&he.active&&he.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,As.has(this)&&(As.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Po(this),Pc(this);const t=oe,n=He;oe=this,He=!0;try{return this.fn()}finally{Oc(this),oe=t,He=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Hi(t);this.deps=this.depsTail=void 0,Po(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?As.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ti(this)&&this.run()}get dirty(){return ti(this)}}let Ac=0,Hn,jn;function Cc(e,t=!1){if(e.flags|=8,t){e.next=jn,jn=e;return}e.next=Hn,Hn=e}function Bi(){Ac++}function $i(){if(--Ac>0)return;if(jn){let t=jn;for(jn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Hn;){let t=Hn;for(Hn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Pc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Oc(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Hi(r),Jf(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ti(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(kc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function kc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Zn)||(e.globalVersion=Zn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ti(e))))return;e.flags|=2;const t=e.dep,n=oe,r=He;oe=e,He=!0;try{Pc(e);const s=e.fn(e._value);(t.version===0||Ut(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{oe=n,He=r,Oc(e),e.flags&=-3}}function Hi(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Hi(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Jf(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let He=!0;const xc=[];function yt(){xc.push(He),He=!1}function _t(){const e=xc.pop();He=e===void 0?!0:e}function Po(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=oe;oe=void 0;try{t()}finally{oe=n}}}let Zn=0;class Yf{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class as{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!oe||!He||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink=new Yf(oe,this),oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,Nc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=r)}return n}trigger(t){this.version++,Zn++,this.notify(t)}notify(t){Bi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$i()}}}function Nc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Nc(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Fr=new WeakMap,Gt=Symbol(""),ni=Symbol(""),er=Symbol("");function pe(e,t,n){if(He&&oe){let r=Fr.get(e);r||Fr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new as),s.map=r,s.key=n),s.track()}}function dt(e,t,n,r,s,i){const o=Fr.get(e);if(!o){Zn++;return}const a=c=>{c&&c.trigger()};if(Bi(),t==="clear")o.forEach(a);else{const c=V(e),l=c&&Mi(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===er||!Cn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(er)),t){case"add":c?l&&a(o.get("length")):(a(o.get(Gt)),Bn(e)&&a(o.get(ni)));break;case"delete":c||(a(o.get(Gt)),Bn(e)&&a(o.get(ni)));break;case"set":Bn(e)&&a(o.get(Gt));break}}$i()}function Xf(e,t){const n=Fr.get(e);return n&&n.get(t)}function dn(e){const t=Y(e);return t===e?t:(pe(t,"iterate",er),je(e)?t:t.map(we))}function ji(e){return pe(e=Y(e),"iterate",er),e}const Qf={__proto__:null,[Symbol.iterator](){return Cs(this,Symbol.iterator,we)},concat(...e){return dn(this).concat(...e.map(t=>V(t)?dn(t):t))},entries(){return Cs(this,"entries",e=>(e[1]=we(e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(we),arguments)},find(e,t){return ct(this,"find",e,t,we,arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,we,arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ps(this,"includes",e)},indexOf(...e){return Ps(this,"indexOf",e)},join(e){return dn(this).join(e)},lastIndexOf(...e){return Ps(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return Dn(this,"pop")},push(...e){return Dn(this,"push",e)},reduce(e,...t){return Oo(this,"reduce",e,t)},reduceRight(e,...t){return Oo(this,"reduceRight",e,t)},shift(){return Dn(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return Dn(this,"splice",e)},toReversed(){return dn(this).toReversed()},toSorted(e){return dn(this).toSorted(e)},toSpliced(...e){return dn(this).toSpliced(...e)},unshift(...e){return Dn(this,"unshift",e)},values(){return Cs(this,"values",we)}};function Cs(e,t,n){const r=ji(e),s=r[t]();return r!==e&&!je(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Zf=Array.prototype;function ct(e,t,n,r,s,i){const o=ji(e),a=o!==e&&!je(e),c=o[t];if(c!==Zf[t]){const f=c.apply(e,i);return a?we(f):f}let l=n;o!==e&&(a?l=function(f,d){return n.call(this,we(f),d,e)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Oo(e,t,n,r){const s=ji(e);let i=n;return s!==e&&(je(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,we(a),c,e)}),s[t](i,...r)}function Ps(e,t,n){const r=Y(e);pe(r,"iterate",er);const s=r[t](...n);return(s===-1||s===!1)&&zi(n[0])?(n[0]=Y(n[0]),r[t](...n)):s}function Dn(e,t,n=[]){yt(),Bi();const r=Y(e)[t].apply(e,n);return $i(),_t(),r}const ed=xi("__proto__,__v_isRef,__isVue"),Dc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Cn));function td(e){Cn(e)||(e=String(e));const t=Y(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Mc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?fd:Bc:i?Fc:Uc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=V(t);if(!s){let c;if(o&&(c=Qf[n]))return c;if(n==="hasOwnProperty")return td}const a=Reflect.get(t,n,le(t)?t:r);return(Cn(n)?Dc.has(n):ed(n))||(s||pe(t,"get",n),i)?a:le(a)?o&&Mi(n)?a:a.value:ue(a)?s?Wi(a):Ft(a):a}}class Lc extends Mc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=tn(i);if(!je(r)&&!tn(r)&&(i=Y(i),r=Y(r)),!V(t)&&le(i)&&!le(r))return c?!1:(i.value=r,!0)}const o=V(t)&&Mi(n)?Number(n)<t.length:Z(t,n),a=Reflect.set(t,n,r,le(t)?t:s);return t===Y(s)&&(o?Ut(r,i)&&dt(t,"set",n,r):dt(t,"add",n,r)),a}deleteProperty(t,n){const r=Z(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&dt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Cn(n)||!Dc.has(n))&&pe(t,"has",n),r}ownKeys(t){return pe(t,"iterate",V(t)?"length":Gt),Reflect.ownKeys(t)}}class nd extends Mc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const rd=new Lc,sd=new nd,id=new Lc(!0);const ri=e=>e,vr=e=>Reflect.getPrototypeOf(e);function od(e,t,n){return function(...r){const s=this.__v_raw,i=Y(s),o=Bn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?ri:t?si:we;return!t&&pe(i,"iterate",c?ni:Gt),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ir(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ad(e,t){const n={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);e||(Ut(s,a)&&pe(o,"get",s),pe(o,"get",a));const{has:c}=vr(o),l=t?ri:e?si:we;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&pe(Y(s),"iterate",Gt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return e||(Ut(s,a)&&pe(o,"has",s),pe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),l=t?ri:e?si:we;return!e&&pe(c,"iterate",Gt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ye(n,e?{add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear")}:{add(s){!t&&!je(s)&&!tn(s)&&(s=Y(s));const i=Y(this);return vr(i).has.call(i,s)||(i.add(s),dt(i,"add",s,s)),this},set(s,i){!t&&!je(i)&&!tn(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=vr(o);let l=a.call(o,s);l||(s=Y(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Ut(i,u)&&dt(o,"set",s,i):dt(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=vr(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&dt(i,"delete",s,void 0),l},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&dt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=od(s,e,t)}),n}function Vi(e,t){const n=ad(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const cd={get:Vi(!1,!1)},ld={get:Vi(!1,!0)},ud={get:Vi(!0,!1)};const Uc=new WeakMap,Fc=new WeakMap,Bc=new WeakMap,fd=new WeakMap;function dd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hd(e){return e.__v_skip||!Object.isExtensible(e)?0:dd(Bf(e))}function Ft(e){return tn(e)?e:qi(e,!1,rd,cd,Uc)}function $c(e){return qi(e,!1,id,ld,Fc)}function Wi(e){return qi(e,!0,sd,ud,Bc)}function qi(e,t,n,r,s){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=hd(e);if(i===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Jt(e){return tn(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function zi(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Ki(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&Zs(e,"__v_skip",!0),e}const we=e=>ue(e)?Ft(e):e,si=e=>ue(e)?Wi(e):e;function le(e){return e?e.__v_isRef===!0:!1}function lr(e){return jc(e,!1)}function Hc(e){return jc(e,!0)}function jc(e,t){return le(e)?e:new pd(e,t)}class pd{constructor(t,n){this.dep=new as,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:we(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||je(t)||tn(t);t=r?t:Y(t),Ut(t,n)&&(this._rawValue=t,this._value=r?t:we(t),this.dep.trigger())}}function Yt(e){return le(e)?e.value:e}function Gi(e){return j(e)?e():Yt(e)}const md={get:(e,t,n)=>t==="__v_raw"?e:Yt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Vc(e){return Jt(e)?e:new Proxy(e,md)}class gd{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new as,{get:r,set:s}=t(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(t){this._set(t)}}function yd(e){return new gd(e)}function _d(e){const t=V(e)?new Array(e.length):{};for(const n in e)t[n]=Wc(e,n);return t}class bd{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Xf(Y(this._object),this._key)}}class wd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ed(e,t,n){return le(e)?e:j(e)?new wd(e):ue(e)&&arguments.length>1?Wc(e,t,n):lr(e)}function Wc(e,t,n){const r=e[t];return le(r)?r:new bd(e,t,n)}class vd{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new as(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return Cc(this,!0),!0}get value(){const t=this.dep.track();return kc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Id(e,t,n=!1){let r,s;return j(e)?r=e:(r=e.get,s=e.set),new vd(r,s,n)}const Sr={},Br=new WeakMap;let Wt;function Sd(e,t=!1,n=Wt){if(n){let r=Br.get(n);r||Br.set(n,r=[]),r.push(e)}}function Td(e,t,n=se){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=D=>s?D:je(D)||s===!1||s===0?ht(D,1):ht(D);let u,f,d,m,y=!1,b=!1;if(le(e)?(f=()=>e.value,y=je(e)):Jt(e)?(f=()=>l(e),y=!0):V(e)?(b=!0,y=e.some(D=>Jt(D)||je(D)),f=()=>e.map(D=>{if(le(D))return D.value;if(Jt(D))return l(D);if(j(D))return c?c(D,2):D()})):j(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){yt();try{d()}finally{_t()}}const D=Wt;Wt=u;try{return c?c(e,3,[m]):e(m)}finally{Wt=D}}:f=Ze,t&&s){const D=f,F=s===!0?1/0:s;f=()=>ht(D(),F)}const S=Fi(),A=()=>{u.stop(),S&&S.active&&Di(S.effects,u)};if(i&&t){const D=t;t=(...F)=>{D(...F),A()}}let R=b?new Array(e.length).fill(Sr):Sr;const O=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(t){const F=u.run();if(s||y||(b?F.some((te,G)=>Ut(te,R[G])):Ut(F,R))){d&&d();const te=Wt;Wt=u;try{const G=[F,R===Sr?void 0:b&&R[0]===Sr?[]:R,m];R=F,c?c(t,3,G):t(...G)}finally{Wt=te}}}else u.run()};return a&&a(O),u=new Rc(f),u.scheduler=o?()=>o(O,!1):O,m=D=>Sd(D,!1,u),d=u.onStop=()=>{const D=Br.get(u);if(D){if(c)c(D,4);else for(const F of D)F();Br.delete(u)}},t?r?O(!0):R=u.run():o?o(O.bind(null,!0),!0):u.run(),A.pause=u.pause.bind(u),A.resume=u.resume.bind(u),A.stop=A,A}function ht(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,le(e))ht(e.value,t,n);else if(V(e))for(let r=0;r<e.length;r++)ht(e[r],t,n);else if(Uf(e)||Bn(e))e.forEach(r=>{ht(r,t,n)});else if($f(e)){for(const r in e)ht(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ht(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ur(e,t,n,r){try{return r?e(...r):e()}catch(s){cs(s,t,n)}}function st(e,t,n,r){if(j(e)){const s=ur(e,t,n,r);return s&&Ec(s)&&s.catch(i=>{cs(i,t,n)}),s}if(V(e)){const s=[];for(let i=0;i<e.length;i++)s.push(st(e[i],t,n,r));return s}}function cs(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){yt(),ur(i,null,10,[e,c,l]),_t();return}}Rd(e,n,s,r,o)}function Rd(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ee=[];let Xe=-1;const bn=[];let Ot=null,pn=0;const qc=Promise.resolve();let $r=null;function Ji(e){const t=$r||qc;return e?t.then(this?e.bind(this):e):t}function Ad(e){let t=Xe+1,n=Ee.length;for(;t<n;){const r=t+n>>>1,s=Ee[r],i=tr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Yi(e){if(!(e.flags&1)){const t=tr(e),n=Ee[Ee.length-1];!n||!(e.flags&2)&&t>=tr(n)?Ee.push(e):Ee.splice(Ad(t),0,e),e.flags|=1,zc()}}function zc(){$r||($r=qc.then(Gc))}function Cd(e){V(e)?bn.push(...e):Ot&&e.id===-1?Ot.splice(pn+1,0,e):e.flags&1||(bn.push(e),e.flags|=1),zc()}function ko(e,t,n=Xe+1){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ee.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Kc(e){if(bn.length){const t=[...new Set(bn)].sort((n,r)=>tr(n)-tr(r));if(bn.length=0,Ot){Ot.push(...t);return}for(Ot=t,pn=0;pn<Ot.length;pn++){const n=Ot[pn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,pn=0}}const tr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Gc(e){try{for(Xe=0;Xe<Ee.length;Xe++){const t=Ee[Xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ur(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Xe<Ee.length;Xe++){const t=Ee[Xe];t&&(t.flags&=-2)}Xe=-1,Ee.length=0,Kc(),$r=null,(Ee.length||bn.length)&&Gc()}}let De=null,Jc=null;function Hr(e){const t=De;return De=e,Jc=e&&e.type.__scopeId||null,t}function Pd(e,t=De,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Ho(-1);const i=Hr(t);let o;try{o=e(...s)}finally{Hr(i),r._d&&Ho(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yv(e,t){if(De===null)return e;const n=ds(De),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=se]=t[s];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&ht(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function jt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(yt(),st(c,n,8,[e.el,a,e,t]),_t())}}const Od=Symbol("_vte"),kd=e=>e.__isTeleport;function Xi(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Xi(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Yc(e,t){return j(e)?ye({name:e.name},t,{setup:e}):e}function Xc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Vn(e,t,n,r,s=!1){if(V(e)){e.forEach((y,b)=>Vn(y,t&&(V(t)?t[b]:t),n,r,s));return}if(Wn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Vn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ds(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState,d=Y(f),m=f===se?()=>!1:y=>Z(d,y);if(l!=null&&l!==c&&(de(l)?(u[l]=null,m(l)&&(f[l]=null)):le(l)&&(l.value=null)),j(c))ur(c,a,12,[o,u]);else{const y=de(c),b=le(c);if(y||b){const S=()=>{if(e.f){const A=y?m(c)?f[c]:u[c]:c.value;s?V(A)&&Di(A,i):V(A)?A.includes(i)||A.push(i):y?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else y?(u[c]=o,m(c)&&(f[c]=o)):b&&(c.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,Ne(S,n)):S()}}}os().requestIdleCallback;os().cancelIdleCallback;const Wn=e=>!!e.type.__asyncLoader,Qc=e=>e.type.__isKeepAlive;function xd(e,t){Zc(e,"a",t)}function Nd(e,t){Zc(e,"da",t)}function Zc(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ls(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Qc(s.parent.vnode)&&Dd(r,t,n,s),s=s.parent}}function Dd(e,t,n,r){const s=ls(t,e,r,!0);tl(()=>{Di(r[t],s)},n)}function ls(e,t,n=me,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{yt();const a=fr(n),c=st(t,n,e,o);return a(),_t(),c});return r?s.unshift(i):s.push(i),i}}const It=e=>(t,n=me)=>{(!rr||e==="sp")&&ls(e,(...r)=>t(...r),n)},Md=It("bm"),el=It("m"),Ld=It("bu"),Ud=It("u"),Fd=It("bum"),tl=It("um"),Bd=It("sp"),$d=It("rtg"),Hd=It("rtc");function jd(e,t=me){ls("ec",e,t)}const Vd="components";function Wd(e,t){return zd(Vd,e,!0,t)||e}const qd=Symbol.for("v-ndc");function zd(e,t,n=!0,r=!1){const s=De||me;if(s){const i=s.type;{const a=Lh(i,!1);if(a&&(a===t||a===Be(t)||a===is(Be(t))))return i}const o=xo(s[e]||i[e],t)||xo(s.appContext[e],t);return!o&&r?i:o}}function xo(e,t){return e&&(e[t]||e[Be(t)]||e[is(Be(t))])}const ii=e=>e?vl(e)?ds(e):ii(e.parent):null,qn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ii(e.parent),$root:e=>ii(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>rl(e),$forceUpdate:e=>e.f||(e.f=()=>{Yi(e.update)}),$nextTick:e=>e.n||(e.n=Ji.bind(e.proxy)),$watch:e=>ph.bind(e)}),Os=(e,t)=>e!==se&&!e.__isScriptSetup&&Z(e,t),Kd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Os(r,t))return o[t]=1,r[t];if(s!==se&&Z(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Z(l,t))return o[t]=3,i[t];if(n!==se&&Z(n,t))return o[t]=4,n[t];oi&&(o[t]=0)}}const u=qn[t];let f,d;if(u)return t==="$attrs"&&pe(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==se&&Z(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,Z(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Os(s,t)?(s[t]=n,!0):r!==se&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==se&&Z(e,o)||Os(t,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(qn,o)||Z(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function No(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let oi=!0;function Gd(e){const t=rl(e),n=e.proxy,r=e.ctx;oi=!1,t.beforeCreate&&Do(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:y,activated:b,deactivated:S,beforeDestroy:A,beforeUnmount:R,destroyed:O,unmounted:D,render:F,renderTracked:te,renderTriggered:G,errorCaptured:q,serverPrefetch:K,expose:ce,inheritAttrs:_e,components:ke,directives:Ie,filters:Ht}=t;if(l&&Jd(l,r,null),o)for(const z in o){const X=o[z];j(X)&&(r[z]=X.bind(n))}if(s){const z=s.call(n,n);ue(z)&&(e.data=Ft(z))}if(oi=!0,i)for(const z in i){const X=i[z],at=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):Ze,Rt=!j(X)&&j(X.set)?X.set.bind(n):Ze,qe=Ae({get:at,set:Rt});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Se=>qe.value=Se})}if(a)for(const z in a)nl(a[z],r,n,z);if(c){const z=j(c)?c.call(n):c;Reflect.ownKeys(z).forEach(X=>{Ar(X,z[X])})}u&&Do(u,e,"c");function ae(z,X){V(X)?X.forEach(at=>z(at.bind(n))):X&&z(X.bind(n))}if(ae(Md,f),ae(el,d),ae(Ld,m),ae(Ud,y),ae(xd,b),ae(Nd,S),ae(jd,q),ae(Hd,te),ae($d,G),ae(Fd,R),ae(tl,D),ae(Bd,K),V(ce))if(ce.length){const z=e.exposed||(e.exposed={});ce.forEach(X=>{Object.defineProperty(z,X,{get:()=>n[X],set:at=>n[X]=at,enumerable:!0})})}else e.exposed||(e.exposed={});F&&e.render===Ze&&(e.render=F),_e!=null&&(e.inheritAttrs=_e),ke&&(e.components=ke),Ie&&(e.directives=Ie),K&&Xc(e)}function Jd(e,t,n=Ze){V(e)&&(e=ai(e));for(const r in e){const s=e[r];let i;ue(s)?"default"in s?i=et(s.from||r,s.default,!0):i=et(s.from||r):i=et(s),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Do(e,t,n){st(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function nl(e,t,n,r){let s=r.includes(".")?gl(n,r):()=>n[r];if(de(e)){const i=t[e];j(i)&&Qt(s,i)}else if(j(e))Qt(s,e.bind(n));else if(ue(e))if(V(e))e.forEach(i=>nl(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Qt(s,i,e)}}function rl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>jr(c,l,o,!0)),jr(c,t,o)),ue(t)&&i.set(t,c),c}function jr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&jr(e,i,n,!0),s&&s.forEach(o=>jr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Yd[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Yd={data:Mo,props:Lo,emits:Lo,methods:Fn,computed:Fn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Fn,directives:Fn,watch:Qd,provide:Mo,inject:Xd};function Mo(e,t){return t?e?function(){return ye(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Xd(e,t){return Fn(ai(e),ai(t))}function ai(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Fn(e,t){return e?ye(Object.create(null),e,t):t}function Lo(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:ye(Object.create(null),No(e),No(t??{})):t}function Qd(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function sl(){return{app:null,config:{isNativeTag:Mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zd=0;function eh(e,t){return function(r,s=null){j(r)||(r=ye({},r)),s!=null&&!ue(s)&&(s=null);const i=sl(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Zd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Fh,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...f)):j(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const m=l._ceVNode||Le(r,s);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),e(m,u,d),c=!0,l._container=u,u.__vue_app__=l,ds(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(st(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Xt;Xt=l;try{return u()}finally{Xt=f}}};return l}}let Xt=null;function Ar(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function et(e,t,n=!1){const r=to();if(r||Xt){let s=Xt?Xt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function th(){return!!(to()||Xt)}const il={},ol=()=>Object.create(il),al=e=>Object.getPrototypeOf(e)===il;function nh(e,t,n,r=!1){const s={},i=ol();e.propsDefaults=Object.create(null),cl(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:$c(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function rh(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=Y(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(us(e.emitsOptions,d))continue;const m=t[d];if(c)if(Z(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=Be(d);s[y]=ci(c,a,y,m,e,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{cl(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!Z(t,f)&&((u=cn(f))===f||!Z(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ci(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Z(t,f))&&(delete i[f],l=!0)}l&&dt(e.attrs,"set","")}function cl(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if($n(c))continue;const l=t[c];let u;s&&Z(s,u=Be(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:us(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ci(s,c,f,l[f],e,!Z(l,f))}}return o}function ci(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=fr(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===cn(n))&&(r=!0))}return r}const sh=new WeakMap;function ll(e,t,n=!1){const r=n?sh:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!j(e)){const u=f=>{c=!0;const[d,m]=ll(f,t,!0);ye(o,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return ue(e)&&r.set(e,_n),_n;if(V(i))for(let u=0;u<i.length;u++){const f=Be(i[u]);Uo(f)&&(o[f]=se)}else if(i)for(const u in i){const f=Be(u);if(Uo(f)){const d=i[u],m=o[f]=V(d)||j(d)?{type:d}:ye({},d),y=m.type;let b=!1,S=!0;if(V(y))for(let A=0;A<y.length;++A){const R=y[A],O=j(R)&&R.name;if(O==="Boolean"){b=!0;break}else O==="String"&&(S=!1)}else b=j(y)&&y.name==="Boolean";m[0]=b,m[1]=S,(b||Z(m,"default"))&&a.push(f)}}const l=[o,a];return ue(e)&&r.set(e,l),l}function Uo(e){return e[0]!=="$"&&!$n(e)}const Qi=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",Zi=e=>V(e)?e.map(Qe):[Qe(e)],ih=(e,t,n)=>{if(t._n)return t;const r=Pd((...s)=>Zi(t(...s)),n);return r._c=!1,r},ul=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Qi(s))continue;const i=e[s];if(j(i))t[s]=ih(s,i,r);else if(i!=null){const o=Zi(i);t[s]=()=>o}}},fl=(e,t)=>{const n=Zi(t);e.slots.default=()=>n},dl=(e,t,n)=>{for(const r in t)(n||!Qi(r))&&(e[r]=t[r])},oh=(e,t,n)=>{const r=e.slots=ol();if(e.vnode.shapeFlag&32){const s=t.__;s&&Zs(r,"__",s,!0);const i=t._;i?(dl(r,t,n),n&&Zs(r,"_",i,!0)):ul(t,r)}else t&&fl(e,t)},ah=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=se;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:dl(s,t,n):(i=!t.$stable,ul(t,s)),o=t}else t&&(fl(e,t),o={default:1});if(i)for(const a in s)!Qi(a)&&o[a]==null&&delete s[a]},Ne=Eh;function ch(e){return lh(e)}function lh(e,t){const n=os();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Ze,insertStaticContent:y}=e,b=(h,p,g,w=null,I=null,v=null,k=void 0,P=null,C=!!p.dynamicChildren)=>{if(h===p)return;h&&!Mn(h,p)&&(w=E(h),Se(h,I,v,!0),h=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:N}=p;switch(T){case fs:S(h,p,g,w);break;case In:A(h,p,g,w);break;case Cr:h==null&&R(p,g,w,k);break;case ft:ke(h,p,g,w,I,v,k,P,C);break;default:N&1?F(h,p,g,w,I,v,k,P,C):N&6?Ie(h,p,g,w,I,v,k,P,C):(N&64||N&128)&&T.process(h,p,g,w,I,v,k,P,C,L)}B!=null&&I?Vn(B,h&&h.ref,v,p||h,!p):B==null&&h&&h.ref!=null&&Vn(h.ref,null,v,h,!0)},S=(h,p,g,w)=>{if(h==null)r(p.el=a(p.children),g,w);else{const I=p.el=h.el;p.children!==h.children&&l(I,p.children)}},A=(h,p,g,w)=>{h==null?r(p.el=c(p.children||""),g,w):p.el=h.el},R=(h,p,g,w)=>{[h.el,h.anchor]=y(h.children,p,g,w,h.el,h.anchor)},O=({el:h,anchor:p},g,w)=>{let I;for(;h&&h!==p;)I=d(h),r(h,g,w),h=I;r(p,g,w)},D=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),s(h),h=g;s(p)},F=(h,p,g,w,I,v,k,P,C)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),h==null?te(p,g,w,I,v,k,P,C):K(h,p,I,v,k,P,C)},te=(h,p,g,w,I,v,k,P)=>{let C,T;const{props:B,shapeFlag:N,transition:U,dirs:H}=h;if(C=h.el=o(h.type,v,B&&B.is,B),N&8?u(C,h.children):N&16&&q(h.children,C,null,w,I,ks(h,v),k,P),H&&jt(h,null,w,"created"),G(C,h,h.scopeId,k,w),B){for(const ie in B)ie!=="value"&&!$n(ie)&&i(C,ie,null,B[ie],v,w);"value"in B&&i(C,"value",null,B.value,v),(T=B.onVnodeBeforeMount)&&Je(T,w,h)}H&&jt(h,null,w,"beforeMount");const J=uh(I,U);J&&U.beforeEnter(C),r(C,p,g),((T=B&&B.onVnodeMounted)||J||H)&&Ne(()=>{T&&Je(T,w,h),J&&U.enter(C),H&&jt(h,null,w,"mounted")},I)},G=(h,p,g,w,I)=>{if(g&&m(h,g),w)for(let v=0;v<w.length;v++)m(h,w[v]);if(I){let v=I.subTree;if(p===v||_l(v.type)&&(v.ssContent===p||v.ssFallback===p)){const k=I.vnode;G(h,k,k.scopeId,k.slotScopeIds,I.parent)}}},q=(h,p,g,w,I,v,k,P,C=0)=>{for(let T=C;T<h.length;T++){const B=h[T]=P?kt(h[T]):Qe(h[T]);b(null,B,p,g,w,I,v,k,P)}},K=(h,p,g,w,I,v,k)=>{const P=p.el=h.el;let{patchFlag:C,dynamicChildren:T,dirs:B}=p;C|=h.patchFlag&16;const N=h.props||se,U=p.props||se;let H;if(g&&Vt(g,!1),(H=U.onVnodeBeforeUpdate)&&Je(H,g,p,h),B&&jt(p,h,g,"beforeUpdate"),g&&Vt(g,!0),(N.innerHTML&&U.innerHTML==null||N.textContent&&U.textContent==null)&&u(P,""),T?ce(h.dynamicChildren,T,P,g,w,ks(p,I),v):k||X(h,p,P,null,g,w,ks(p,I),v,!1),C>0){if(C&16)_e(P,N,U,g,I);else if(C&2&&N.class!==U.class&&i(P,"class",null,U.class,I),C&4&&i(P,"style",N.style,U.style,I),C&8){const J=p.dynamicProps;for(let ie=0;ie<J.length;ie++){const ee=J[ie],Te=N[ee],Re=U[ee];(Re!==Te||ee==="value")&&i(P,ee,Te,Re,I,g)}}C&1&&h.children!==p.children&&u(P,p.children)}else!k&&T==null&&_e(P,N,U,g,I);((H=U.onVnodeUpdated)||B)&&Ne(()=>{H&&Je(H,g,p,h),B&&jt(p,h,g,"updated")},w)},ce=(h,p,g,w,I,v,k)=>{for(let P=0;P<p.length;P++){const C=h[P],T=p[P],B=C.el&&(C.type===ft||!Mn(C,T)||C.shapeFlag&198)?f(C.el):g;b(C,T,B,null,w,I,v,k,!0)}},_e=(h,p,g,w,I)=>{if(p!==g){if(p!==se)for(const v in p)!$n(v)&&!(v in g)&&i(h,v,p[v],null,I,w);for(const v in g){if($n(v))continue;const k=g[v],P=p[v];k!==P&&v!=="value"&&i(h,v,P,k,I,w)}"value"in g&&i(h,"value",p.value,g.value,I)}},ke=(h,p,g,w,I,v,k,P,C)=>{const T=p.el=h?h.el:a(""),B=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:H}=p;H&&(P=P?P.concat(H):H),h==null?(r(T,g,w),r(B,g,w),q(p.children||[],g,B,I,v,k,P,C)):N>0&&N&64&&U&&h.dynamicChildren?(ce(h.dynamicChildren,U,g,I,v,k,P),(p.key!=null||I&&p===I.subTree)&&hl(h,p,!0)):X(h,p,g,B,I,v,k,P,C)},Ie=(h,p,g,w,I,v,k,P,C)=>{p.slotScopeIds=P,h==null?p.shapeFlag&512?I.ctx.activate(p,g,w,k,C):Ht(p,g,w,I,v,k,C):Tt(h,p,C)},Ht=(h,p,g,w,I,v,k)=>{const P=h.component=kh(h,w,I);if(Qc(h)&&(P.ctx.renderer=L),xh(P,!1,k),P.asyncDep){if(I&&I.registerDep(P,ae,k),!h.el){const C=P.subTree=Le(In);A(null,C,p,g),h.placeholder=C.el}}else ae(P,h,p,g,I,v,k)},Tt=(h,p,g)=>{const w=p.component=h.component;if(bh(h,p,g))if(w.asyncDep&&!w.asyncResolved){z(w,p,g);return}else w.next=p,w.update();else p.el=h.el,w.vnode=p},ae=(h,p,g,w,I,v,k)=>{const P=()=>{if(h.isMounted){let{next:N,bu:U,u:H,parent:J,vnode:ie}=h;{const Ke=pl(h);if(Ke){N&&(N.el=ie.el,z(h,N,k)),Ke.asyncDep.then(()=>{h.isUnmounted||P()});return}}let ee=N,Te;Vt(h,!1),N?(N.el=ie.el,z(h,N,k)):N=ie,U&&Rr(U),(Te=N.props&&N.props.onVnodeBeforeUpdate)&&Je(Te,J,N,ie),Vt(h,!0);const Re=Bo(h),ze=h.subTree;h.subTree=Re,b(ze,Re,f(ze.el),E(ze),h,I,v),N.el=Re.el,ee===null&&wh(h,Re.el),H&&Ne(H,I),(Te=N.props&&N.props.onVnodeUpdated)&&Ne(()=>Je(Te,J,N,ie),I)}else{let N;const{el:U,props:H}=p,{bm:J,m:ie,parent:ee,root:Te,type:Re}=h,ze=Wn(p);Vt(h,!1),J&&Rr(J),!ze&&(N=H&&H.onVnodeBeforeMount)&&Je(N,ee,p),Vt(h,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Re);const Ke=h.subTree=Bo(h);b(null,Ke,g,w,h,I,v),p.el=Ke.el}if(ie&&Ne(ie,I),!ze&&(N=H&&H.onVnodeMounted)){const Ke=p;Ne(()=>Je(N,ee,Ke),I)}(p.shapeFlag&256||ee&&Wn(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&Ne(h.a,I),h.isMounted=!0,p=g=w=null}};h.scope.on();const C=h.effect=new Rc(P);h.scope.off();const T=h.update=C.run.bind(C),B=h.job=C.runIfDirty.bind(C);B.i=h,B.id=h.uid,C.scheduler=()=>Yi(B),Vt(h,!0),T()},z=(h,p,g)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,rh(h,p.props,w,g),ah(h,p.children,g),yt(),ko(h),_t()},X=(h,p,g,w,I,v,k,P,C=!1)=>{const T=h&&h.children,B=h?h.shapeFlag:0,N=p.children,{patchFlag:U,shapeFlag:H}=p;if(U>0){if(U&128){Rt(T,N,g,w,I,v,k,P,C);return}else if(U&256){at(T,N,g,w,I,v,k,P,C);return}}H&8?(B&16&&Fe(T,I,v),N!==T&&u(g,N)):B&16?H&16?Rt(T,N,g,w,I,v,k,P,C):Fe(T,I,v,!0):(B&8&&u(g,""),H&16&&q(N,g,w,I,v,k,P,C))},at=(h,p,g,w,I,v,k,P,C)=>{h=h||_n,p=p||_n;const T=h.length,B=p.length,N=Math.min(T,B);let U;for(U=0;U<N;U++){const H=p[U]=C?kt(p[U]):Qe(p[U]);b(h[U],H,g,null,I,v,k,P,C)}T>B?Fe(h,I,v,!0,!1,N):q(p,g,w,I,v,k,P,C,N)},Rt=(h,p,g,w,I,v,k,P,C)=>{let T=0;const B=p.length;let N=h.length-1,U=B-1;for(;T<=N&&T<=U;){const H=h[T],J=p[T]=C?kt(p[T]):Qe(p[T]);if(Mn(H,J))b(H,J,g,null,I,v,k,P,C);else break;T++}for(;T<=N&&T<=U;){const H=h[N],J=p[U]=C?kt(p[U]):Qe(p[U]);if(Mn(H,J))b(H,J,g,null,I,v,k,P,C);else break;N--,U--}if(T>N){if(T<=U){const H=U+1,J=H<B?p[H].el:w;for(;T<=U;)b(null,p[T]=C?kt(p[T]):Qe(p[T]),g,J,I,v,k,P,C),T++}}else if(T>U)for(;T<=N;)Se(h[T],I,v,!0),T++;else{const H=T,J=T,ie=new Map;for(T=J;T<=U;T++){const xe=p[T]=C?kt(p[T]):Qe(p[T]);xe.key!=null&&ie.set(xe.key,T)}let ee,Te=0;const Re=U-J+1;let ze=!1,Ke=0;const Nn=new Array(Re);for(T=0;T<Re;T++)Nn[T]=0;for(T=H;T<=N;T++){const xe=h[T];if(Te>=Re){Se(xe,I,v,!0);continue}let Ge;if(xe.key!=null)Ge=ie.get(xe.key);else for(ee=J;ee<=U;ee++)if(Nn[ee-J]===0&&Mn(xe,p[ee])){Ge=ee;break}Ge===void 0?Se(xe,I,v,!0):(Nn[Ge-J]=T+1,Ge>=Ke?Ke=Ge:ze=!0,b(xe,p[Ge],g,null,I,v,k,P,C),Te++)}const To=ze?fh(Nn):_n;for(ee=To.length-1,T=Re-1;T>=0;T--){const xe=J+T,Ge=p[xe],Ro=p[xe+1],Ao=xe+1<B?Ro.el||Ro.placeholder:w;Nn[T]===0?b(null,Ge,g,Ao,I,v,k,P,C):ze&&(ee<0||T!==To[ee]?qe(Ge,g,Ao,2):ee--)}}},qe=(h,p,g,w,I=null)=>{const{el:v,type:k,transition:P,children:C,shapeFlag:T}=h;if(T&6){qe(h.component.subTree,p,g,w);return}if(T&128){h.suspense.move(p,g,w);return}if(T&64){k.move(h,p,g,L);return}if(k===ft){r(v,p,g);for(let N=0;N<C.length;N++)qe(C[N],p,g,w);r(h.anchor,p,g);return}if(k===Cr){O(h,p,g);return}if(w!==2&&T&1&&P)if(w===0)P.beforeEnter(v),r(v,p,g),Ne(()=>P.enter(v),I);else{const{leave:N,delayLeave:U,afterLeave:H}=P,J=()=>{h.ctx.isUnmounted?s(v):r(v,p,g)},ie=()=>{N(v,()=>{J(),H&&H()})};U?U(v,J,ie):ie()}else r(v,p,g)},Se=(h,p,g,w=!1,I=!1)=>{const{type:v,props:k,ref:P,children:C,dynamicChildren:T,shapeFlag:B,patchFlag:N,dirs:U,cacheIndex:H}=h;if(N===-2&&(I=!1),P!=null&&(yt(),Vn(P,null,g,h,!0),_t()),H!=null&&(p.renderCache[H]=void 0),B&256){p.ctx.deactivate(h);return}const J=B&1&&U,ie=!Wn(h);let ee;if(ie&&(ee=k&&k.onVnodeBeforeUnmount)&&Je(ee,p,h),B&6)Er(h.component,g,w);else{if(B&128){h.suspense.unmount(g,w);return}J&&jt(h,null,p,"beforeUnmount"),B&64?h.type.remove(h,p,g,L,w):T&&!T.hasOnce&&(v!==ft||N>0&&N&64)?Fe(T,p,g,!1,!0):(v===ft&&N&384||!I&&B&16)&&Fe(C,p,g),w&&un(h)}(ie&&(ee=k&&k.onVnodeUnmounted)||J)&&Ne(()=>{ee&&Je(ee,p,h),J&&jt(h,null,p,"unmounted")},g)},un=h=>{const{type:p,el:g,anchor:w,transition:I}=h;if(p===ft){fn(g,w);return}if(p===Cr){D(h);return}const v=()=>{s(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:k,delayLeave:P}=I,C=()=>k(g,v);P?P(h.el,v,C):C()}else v()},fn=(h,p)=>{let g;for(;h!==p;)g=d(h),s(h),h=g;s(p)},Er=(h,p,g)=>{const{bum:w,scope:I,job:v,subTree:k,um:P,m:C,a:T,parent:B,slots:{__:N}}=h;Fo(C),Fo(T),w&&Rr(w),B&&V(N)&&N.forEach(U=>{B.renderCache[U]=void 0}),I.stop(),v&&(v.flags|=8,Se(k,h,p,g)),P&&Ne(P,p),Ne(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Fe=(h,p,g,w=!1,I=!1,v=0)=>{for(let k=v;k<h.length;k++)Se(h[k],p,g,w,I)},E=h=>{if(h.shapeFlag&6)return E(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),g=p&&p[Od];return g?d(g):p};let M=!1;const x=(h,p,g)=>{h==null?p._vnode&&Se(p._vnode,null,null,!0):b(p._vnode||null,h,p,null,null,null,g),p._vnode=h,M||(M=!0,ko(),Kc(),M=!1)},L={p:b,um:Se,m:qe,r:un,mt:Ht,mc:q,pc:X,pbc:ce,n:E,o:e};return{render:x,hydrate:void 0,createApp:eh(x)}}function ks({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function uh(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function hl(e,t,n=!1){const r=e.children,s=t.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=kt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&hl(o,a)),a.type===fs&&(a.el=o.el),a.type===In&&!a.el&&(a.el=o.el)}}function fh(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function pl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:pl(t)}function Fo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const dh=Symbol.for("v-scx"),hh=()=>et(dh);function Qt(e,t,n){return ml(e,t,n)}function ml(e,t,n=se){const{immediate:r,deep:s,flush:i,once:o}=n,a=ye({},n),c=t&&r||!t&&i!=="post";let l;if(rr){if(i==="sync"){const m=hh();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ze,m.resume=Ze,m.pause=Ze,m}}const u=me;a.call=(m,y,b)=>st(m,u,y,b);let f=!1;i==="post"?a.scheduler=m=>{Ne(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,y)=>{y?m():Yi(m)}),a.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Td(e,t,a);return rr&&(l?l.push(d):c&&d()),d}function ph(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?gl(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=fr(this),a=ml(s,i.bind(r),n);return o(),a}function gl(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const mh=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Be(t)}Modifiers`]||e[`${cn(t)}Modifiers`];function gh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||se;let s=n;const i=t.startsWith("update:"),o=i&&mh(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>de(u)?u.trim():u)),o.number&&(s=n.map(ei)));let a,c=r[a=Rs(t)]||r[a=Rs(Be(t))];!c&&i&&(c=r[a=Rs(cn(t))]),c&&st(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,st(l,e,6,s)}}function yl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!j(e)){const c=l=>{const u=yl(l,t,!0);u&&(a=!0,ye(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ue(e)&&r.set(e,null),null):(V(i)?i.forEach(c=>o[c]=null):ye(o,i),ue(e)&&r.set(e,o),o)}function us(e,t){return!e||!ns(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,cn(t))||Z(e,t))}function Bo(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:m,ctx:y,inheritAttrs:b}=e,S=Hr(e);let A,R;try{if(n.shapeFlag&4){const D=s||r,F=D;A=Qe(l.call(F,D,u,f,m,d,y)),R=a}else{const D=t;A=Qe(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),R=t.props?a:yh(a)}}catch(D){zn.length=0,cs(D,e,1),A=Le(In)}let O=A;if(R&&b!==!1){const D=Object.keys(R),{shapeFlag:F}=O;D.length&&F&7&&(i&&D.some(Ni)&&(R=_h(R,i)),O=Sn(O,R,!1,!0))}return n.dirs&&(O=Sn(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Xi(O,n.transition),A=O,Hr(S),A}const yh=e=>{let t;for(const n in e)(n==="class"||n==="style"||ns(n))&&((t||(t={}))[n]=e[n]);return t},_h=(e,t)=>{const n={};for(const r in e)(!Ni(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function bh(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$o(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!us(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$o(r,o,l):!0:!!o;return!1}function $o(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!us(n,i))return!0}return!1}function wh({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const _l=e=>e.__isSuspense;function Eh(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Cd(e)}const ft=Symbol.for("v-fgt"),fs=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),Cr=Symbol.for("v-stc"),zn=[];let Me=null;function vh(e=!1){zn.push(Me=e?null:[])}function Ih(){zn.pop(),Me=zn[zn.length-1]||null}let nr=1;function Ho(e,t=!1){nr+=e,e<0&&Me&&t&&(Me.hasOnce=!0)}function bl(e){return e.dynamicChildren=nr>0?Me||_n:null,Ih(),nr>0&&Me&&Me.push(e),e}function _v(e,t,n,r,s,i){return bl(El(e,t,n,r,s,i,!0))}function Sh(e,t,n,r,s){return bl(Le(e,t,n,r,s,!0))}function Vr(e){return e?e.__v_isVNode===!0:!1}function Mn(e,t){return e.type===t.type&&e.key===t.key}const wl=({key:e})=>e??null,Pr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||le(e)||j(e)?{i:De,r:e,k:t,f:!!n}:e:null);function El(e,t=null,n=null,r=0,s=null,i=e===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wl(t),ref:t&&Pr(t),scopeId:Jc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return a?(eo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),nr>0&&!o&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const Le=Th;function Th(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===qd)&&(e=In),Vr(e)){const a=Sn(e,t,!0);return n&&eo(a,n),nr>0&&!i&&Me&&(a.shapeFlag&6?Me[Me.indexOf(e)]=a:Me.push(a)),a.patchFlag=-2,a}if(Uh(e)&&(e=e.__vccOpts),t){t=Rh(t);let{class:a,style:c}=t;a&&!de(a)&&(t.class=Ui(a)),ue(c)&&(zi(c)&&!V(c)&&(c=ye({},c)),t.style=Li(c))}const o=de(e)?1:_l(e)?128:kd(e)?64:ue(e)?4:j(e)?2:0;return El(e,t,n,r,s,o,i,!0)}function Rh(e){return e?zi(e)||al(e)?ye({},e):e:null}function Sn(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?Ch(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&wl(l),ref:t&&t.ref?n&&i?V(i)?i.concat(Pr(t)):[i,Pr(t)]:Pr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ft?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Sn(e.ssContent),ssFallback:e.ssFallback&&Sn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Xi(u,c.clone(u)),u}function Ah(e=" ",t=0){return Le(fs,null,e,t)}function bv(e,t){const n=Le(Cr,null,e);return n.staticCount=t,n}function Qe(e){return e==null||typeof e=="boolean"?Le(In):V(e)?Le(ft,null,e.slice()):Vr(e)?kt(e):Le(fs,null,String(e))}function kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Sn(e)}function eo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),eo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!al(t)?t._ctx=De:s===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:De},n=32):(t=String(t),r&64?(n=16,t=[Ah(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ch(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ui([t.class,r.class]));else if(s==="style")t.style=Li([t.style,r.style]);else if(ns(s)){const i=t[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Je(e,t,n,r=null){st(e,t,7,[n,r])}const Ph=sl();let Oh=0;function kh(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Ph,i={uid:Oh++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ic(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ll(r,s),emitsOptions:yl(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=gh.bind(null,i),e.ce&&e.ce(i),i}let me=null;const to=()=>me||De;let Wr,li;{const e=os(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Wr=t("__VUE_INSTANCE_SETTERS__",n=>me=n),li=t("__VUE_SSR_SETTERS__",n=>rr=n)}const fr=e=>{const t=me;return Wr(e),e.scope.on(),()=>{e.scope.off(),Wr(t)}},jo=()=>{me&&me.scope.off(),Wr(null)};function vl(e){return e.vnode.shapeFlag&4}let rr=!1;function xh(e,t=!1,n=!1){t&&li(t);const{props:r,children:s}=e.vnode,i=vl(e);nh(e,r,i,t),oh(e,s,n||t);const o=i?Nh(e,t):void 0;return t&&li(!1),o}function Nh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Kd);const{setup:r}=n;if(r){yt();const s=e.setupContext=r.length>1?Mh(e):null,i=fr(e),o=ur(r,e,0,[e.props,s]),a=Ec(o);if(_t(),i(),(a||e.sp)&&!Wn(e)&&Xc(e),a){if(o.then(jo,jo),t)return o.then(c=>{Vo(e,c)}).catch(c=>{cs(c,e,0)});e.asyncDep=o}else Vo(e,o)}else Il(e)}function Vo(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Vc(t)),Il(e)}function Il(e,t,n){const r=e.type;e.render||(e.render=r.render||Ze);{const s=fr(e);yt();try{Gd(e)}finally{_t(),s()}}}const Dh={get(e,t){return pe(e,"get",""),e[t]}};function Mh(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Dh),slots:e.slots,emit:e.emit,expose:t}}function ds(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Vc(Ki(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qn)return qn[n](e)},has(t,n){return n in t||n in qn}})):e.proxy}function Lh(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Uh(e){return j(e)&&"__vccOpts"in e}const Ae=(e,t)=>Id(e,t,rr);function Sl(e,t,n){const r=arguments.length;return r===2?ue(t)&&!V(t)?Vr(t)?Le(e,null,[t]):Le(e,t):Le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vr(n)&&(n=[n]),Le(e,t,n))}const Fh="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ui;const Wo=typeof window<"u"&&window.trustedTypes;if(Wo)try{ui=Wo.createPolicy("vue",{createHTML:e=>e})}catch{}const Tl=ui?e=>ui.createHTML(e):e=>e,Bh="http://www.w3.org/2000/svg",$h="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,qo=ut&&ut.createElement("template"),Hh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?ut.createElementNS(Bh,e):t==="mathml"?ut.createElementNS($h,e):n?ut.createElement(e,{is:n}):ut.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qo.innerHTML=Tl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=qo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},jh=Symbol("_vtc");function Vh(e,t,n){const r=e[jh];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const zo=Symbol("_vod"),Wh=Symbol("_vsh"),qh=Symbol(""),zh=/(^|;)\s*display\s*:/;function Kh(e,t,n){const r=e.style,s=de(n);let i=!1;if(n&&!s){if(t)if(de(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Or(r,a,"")}else for(const o in t)n[o]==null&&Or(r,o,"");for(const o in n)o==="display"&&(i=!0),Or(r,o,n[o])}else if(s){if(t!==n){const o=r[qh];o&&(n+=";"+o),r.cssText=n,i=zh.test(n)}}else t&&e.removeAttribute("style");zo in e&&(e[zo]=i?r.display:"",e[Wh]&&(r.display="none"))}const Ko=/\s*!important$/;function Or(e,t,n){if(V(n))n.forEach(r=>Or(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Gh(e,t);Ko.test(n)?e.setProperty(cn(r),n.replace(Ko,""),"important"):e[r]=n}}const Go=["Webkit","Moz","ms"],xs={};function Gh(e,t){const n=xs[t];if(n)return n;let r=Be(t);if(r!=="filter"&&r in e)return xs[t]=r;r=is(r);for(let s=0;s<Go.length;s++){const i=Go[s]+r;if(i in e)return xs[t]=i}return t}const Jo="http://www.w3.org/1999/xlink";function Yo(e,t,n,r,s,i=Gf(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Jo,t.slice(6,t.length)):e.setAttributeNS(Jo,t,n):n==null||i&&!vc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Cn(n)?String(n):n)}function Xo(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Tl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=vc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function mn(e,t,n,r){e.addEventListener(t,n,r)}function Jh(e,t,n,r){e.removeEventListener(t,n,r)}const Qo=Symbol("_vei");function Yh(e,t,n,r,s=null){const i=e[Qo]||(e[Qo]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Xh(t);if(r){const l=i[t]=ep(r,s);mn(e,a,l,c)}else o&&(Jh(e,a,o,c),i[t]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function Xh(e){let t;if(Zo.test(e)){t={};let r;for(;r=e.match(Zo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):cn(e.slice(2)),t]}let Ns=0;const Qh=Promise.resolve(),Zh=()=>Ns||(Qh.then(()=>Ns=0),Ns=Date.now());function ep(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;st(tp(r,n.value),t,5,[r])};return n.value=e,n.attached=Zh(),n}function tp(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ea=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,np=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Vh(e,r,o):t==="style"?Kh(e,n,r):ns(t)?Ni(t)||Yh(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rp(e,t,r,o))?(Xo(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Yo(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(r))?Xo(e,Be(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Yo(e,t,r,o))};function rp(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ea(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ea(t)&&de(n)?!1:t in e}const ta=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?n=>Rr(t,n):t};function sp(e){e.target.composing=!0}function na(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ds=Symbol("_assign"),wv={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Ds]=ta(s);const i=r||s.props&&s.props.type==="number";mn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=ei(a)),e[Ds](a)}),n&&mn(e,"change",()=>{e.value=e.value.trim()}),t||(mn(e,"compositionstart",sp),mn(e,"compositionend",na),mn(e,"change",na))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[Ds]=ta(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?ei(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c))}},ip=ye({patchProp:np},Hh);let ra;function op(){return ra||(ra=ch(ip))}const ap=(...e)=>{const t=op().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=lp(r);if(!s)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,cp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function cp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function lp(e){return de(e)?document.querySelector(e):e}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Rl;const hs=e=>Rl=e,Al=Symbol();function fi(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Kn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Kn||(Kn={}));function up(){const e=Sc(!0),t=e.run(()=>lr({}));let n=[],r=[];const s=Ki({install(i){hs(s),s._a=i,i.provide(Al,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Cl=()=>{};function sa(e,t,n,r=Cl){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Fi()&&Tc(s),s}function hn(e,...t){e.slice().forEach(n=>{n(...t)})}const fp=e=>e(),ia=Symbol(),Ms=Symbol();function di(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];fi(s)&&fi(r)&&e.hasOwnProperty(n)&&!le(r)&&!Jt(r)?e[n]=di(s,r):e[n]=r}return e}const dp=Symbol();function hp(e){return!fi(e)||!Object.prototype.hasOwnProperty.call(e,dp)}const{assign:Pt}=Object;function pp(e){return!!(le(e)&&e.effect)}function mp(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=_d(n.state.value[e]);return Pt(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=Ki(Ae(()=>{hs(n);const m=n._s.get(e);return o[d].call(m,m)})),f),{}))}return c=Pl(e,l,t,n,r,!0),c}function Pl(e,t,n={},r,s,i){let o;const a=Pt({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],m;const y=r.state.value[e];!i&&!y&&(r.state.value[e]={}),lr({});let b;function S(q){let K;l=u=!1,typeof q=="function"?(q(r.state.value[e]),K={type:Kn.patchFunction,storeId:e,events:m}):(di(r.state.value[e],q),K={type:Kn.patchObject,payload:q,storeId:e,events:m});const ce=b=Symbol();Ji().then(()=>{b===ce&&(l=!0)}),u=!0,hn(f,K,r.state.value[e])}const A=i?function(){const{state:K}=n,ce=K?K():{};this.$patch(_e=>{Pt(_e,ce)})}:Cl;function R(){o.stop(),f=[],d=[],r._s.delete(e)}const O=(q,K="")=>{if(ia in q)return q[Ms]=K,q;const ce=function(){hs(r);const _e=Array.from(arguments),ke=[],Ie=[];function Ht(z){ke.push(z)}function Tt(z){Ie.push(z)}hn(d,{args:_e,name:ce[Ms],store:F,after:Ht,onError:Tt});let ae;try{ae=q.apply(this&&this.$id===e?this:F,_e)}catch(z){throw hn(Ie,z),z}return ae instanceof Promise?ae.then(z=>(hn(ke,z),z)).catch(z=>(hn(Ie,z),Promise.reject(z))):(hn(ke,ae),ae)};return ce[ia]=!0,ce[Ms]=K,ce},D={_p:r,$id:e,$onAction:sa.bind(null,d),$patch:S,$reset:A,$subscribe(q,K={}){const ce=sa(f,q,K.detached,()=>_e()),_e=o.run(()=>Qt(()=>r.state.value[e],ke=>{(K.flush==="sync"?u:l)&&q({storeId:e,type:Kn.direct,events:m},ke)},Pt({},c,K)));return ce},$dispose:R},F=Ft(D);r._s.set(e,F);const G=(r._a&&r._a.runWithContext||fp)(()=>r._e.run(()=>(o=Sc()).run(()=>t({action:O}))));for(const q in G){const K=G[q];if(le(K)&&!pp(K)||Jt(K))i||(y&&hp(K)&&(le(K)?K.value=y[q]:di(K,y[q])),r.state.value[e][q]=K);else if(typeof K=="function"){const ce=O(K,q);G[q]=ce,a.actions[q]=K}}return Pt(F,G),Pt(Y(F),G),Object.defineProperty(F,"$state",{get:()=>r.state.value[e],set:q=>{S(K=>{Pt(K,q)})}}),r._p.forEach(q=>{Pt(F,o.run(()=>q({store:F,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(F.$state,y),l=!0,u=!0,F}/*! #__NO_SIDE_EFFECTS__ */function gp(e,t,n){let r;const s=typeof t=="function";r=s?n:t;function i(o,a){const c=th();return o=o||(c?et(Al,null):null),o&&hs(o),o=Rl,o._s.has(e)||(s?Pl(e,t,r,o):mp(e,r,o)),o._s.get(e)}return i.$id=e,i}const yp=()=>{};var oa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},_p=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ol(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_p(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new bp;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class bp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wp=function(e){const t=Ol(e);return kl.encodeByteArray(t,!0)},xl=function(e){return wp(e).replace(/\./g,"")},Nl=function(e){try{return kl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ep(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vp=()=>Ep().__FIREBASE_DEFAULTS__,Ip=()=>{if(typeof process>"u"||typeof oa>"u")return;const e=oa.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Nl(e[1]);return t&&JSON.parse(t)},no=()=>{try{return yp()||vp()||Ip()||Sp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Tp=e=>no()?.emulatorHosts?.[e],Dl=()=>no()?.config,Ml=e=>no()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ps(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ap(e){return(await fetch(e,{credentials:"include"})).ok}const Gn={};function Cp(){const e={prod:[],emulator:[]};for(const t of Object.keys(Gn))Gn[t]?e.emulator.push(t):e.prod.push(t);return e}function Pp(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let aa=!1;function Op(e,t){if(typeof window>"u"||typeof document>"u"||!ps(window.location.host)||Gn[e]===t||Gn[e]||aa)return;Gn[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=Cp().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,m){d.setAttribute("width","24"),d.setAttribute("id",m),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{aa=!0,o()},d}function u(d,m){d.setAttribute("id",m),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=Pp(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),S=document.getElementById(b)||document.createElement("a"),A=n("preprendIcon"),R=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const O=d.element;a(O),u(S,b);const D=l();c(R,A),O.append(R,y,S,D),document.body.appendChild(O)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function xp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ll(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dp(){const e=ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ul(){try{return typeof indexedDB=="object"}catch{return!1}}function Fl(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}function Mp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="FirebaseError";class ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Lp,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ln.prototype.create)}}class ln{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Up(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ot(s,a,r)}}function Up(e,t){return e.replace(Fp,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Fp=/\{\$([^}]+)}/g;function Bp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function nn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ca(i)&&ca(o)){if(!nn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ca(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $p(e,t){const n=new Hp(e,t);return n.subscribe.bind(n)}class Hp{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jp(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Ls),s.error===void 0&&(s.error=Ls),s.complete===void 0&&(s.complete=Ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ls(){}/**
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
 */const Vp=1e3,Wp=2,qp=14400*1e3,zp=.5;function la(e,t=Vp,n=Wp){const r=t*Math.pow(n,e),s=Math.round(zp*r*(Math.random()-.5)*2);return Math.min(qp,r+s)}/**
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
 */function St(e){return e&&e._delegate?e._delegate:e}class it{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Kp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Rp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Jp(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gp(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gp(e){return e===qt?void 0:e}function Jp(e){return e.instantiationMode==="EAGER"}/**
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
 */class Yp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Kp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const Xp={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Qp=re.INFO,Zp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},em=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Zp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ro{constructor(t){this.name=t,this._logLevel=Qp,this._logHandler=em,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const tm=(e,t)=>t.some(n=>e instanceof n);let ua,fa;function nm(){return ua||(ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rm(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bl=new WeakMap,hi=new WeakMap,$l=new WeakMap,Us=new WeakMap,so=new WeakMap;function sm(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Bt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bl.set(n,e)}).catch(()=>{}),so.set(t,e),t}function im(e){if(hi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});hi.set(e,t)}let pi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return hi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$l.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function om(e){pi=e(pi)}function am(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fs(this),t,...n);return $l.set(r,t.sort?t.sort():[t]),Bt(r)}:rm().includes(e)?function(...t){return e.apply(Fs(this),t),Bt(Bl.get(this))}:function(...t){return Bt(e.apply(Fs(this),t))}}function cm(e){return typeof e=="function"?am(e):(e instanceof IDBTransaction&&im(e),tm(e,nm())?new Proxy(e,pi):e)}function Bt(e){if(e instanceof IDBRequest)return sm(e);if(Us.has(e))return Us.get(e);const t=cm(e);return t!==e&&(Us.set(e,t),so.set(t,e)),t}const Fs=e=>so.get(e);function Hl(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const lm=["get","getKey","getAll","getAllKeys","count"],um=["put","add","delete","clear"],Bs=new Map;function da(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Bs.get(t))return Bs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=um.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lm.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Bs.set(t,i),i}om(e=>({...e,get:(t,n,r)=>da(t,n)||e.get(t,n,r),has:(t,n)=>!!da(t,n)||e.has(t,n)}));/**
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
 */class fm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dm(e){return e.getComponent()?.type==="VERSION"}const mi="@firebase/app",ha="0.14.1";/**
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
 */const bt=new ro("@firebase/app"),hm="@firebase/app-compat",pm="@firebase/analytics-compat",mm="@firebase/analytics",gm="@firebase/app-check-compat",ym="@firebase/app-check",_m="@firebase/auth",bm="@firebase/auth-compat",wm="@firebase/database",Em="@firebase/data-connect",vm="@firebase/database-compat",Im="@firebase/functions",Sm="@firebase/functions-compat",Tm="@firebase/installations",Rm="@firebase/installations-compat",Am="@firebase/messaging",Cm="@firebase/messaging-compat",Pm="@firebase/performance",Om="@firebase/performance-compat",km="@firebase/remote-config",xm="@firebase/remote-config-compat",Nm="@firebase/storage",Dm="@firebase/storage-compat",Mm="@firebase/firestore",Lm="@firebase/ai",Um="@firebase/firestore-compat",Fm="firebase",Bm="12.1.0";/**
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
 */const gi="[DEFAULT]",$m={[mi]:"fire-core",[hm]:"fire-core-compat",[mm]:"fire-analytics",[pm]:"fire-analytics-compat",[ym]:"fire-app-check",[gm]:"fire-app-check-compat",[_m]:"fire-auth",[bm]:"fire-auth-compat",[wm]:"fire-rtdb",[Em]:"fire-data-connect",[vm]:"fire-rtdb-compat",[Im]:"fire-fn",[Sm]:"fire-fn-compat",[Tm]:"fire-iid",[Rm]:"fire-iid-compat",[Am]:"fire-fcm",[Cm]:"fire-fcm-compat",[Pm]:"fire-perf",[Om]:"fire-perf-compat",[km]:"fire-rc",[xm]:"fire-rc-compat",[Nm]:"fire-gcs",[Dm]:"fire-gcs-compat",[Mm]:"fire-fst",[Um]:"fire-fst-compat",[Lm]:"fire-vertex","fire-js":"fire-js",[Fm]:"fire-js-all"};/**
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
 */const qr=new Map,Hm=new Map,yi=new Map;function pa(e,t){try{e.container.addComponent(t)}catch(n){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wt(e){const t=e.name;if(yi.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;yi.set(t,e);for(const n of qr.values())pa(n,e);for(const n of Hm.values())pa(n,e);return!0}function Pn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const jm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new ln("app","Firebase",jm);/**
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
 */class Vm{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=Bm;function jl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:gi,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(n||(n=Dl()),!n)throw $t.create("no-options");const i=qr.get(s);if(i){if(nn(n,i.options)&&nn(r,i.config))return i;throw $t.create("duplicate-app",{appName:s})}const o=new Yp(s);for(const c of yi.values())o.addComponent(c);const a=new Vm(n,r,o);return qr.set(s,a),a}function Vl(e=gi){const t=qr.get(e);if(!t&&e===gi&&Dl())return jl();if(!t)throw $t.create("no-app",{appName:e});return t}function tt(e,t,n){let r=$m[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(o.join(" "));return}wt(new it(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Wm="firebase-heartbeat-database",qm=1,sr="firebase-heartbeat-store";let $s=null;function Wl(){return $s||($s=Hl(Wm,qm,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(sr)}catch(n){console.warn(n)}}}}).catch(e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})})),$s}async function zm(e){try{const n=(await Wl()).transaction(sr),r=await n.objectStore(sr).get(ql(e));return await n.done,r}catch(t){if(t instanceof ot)bt.warn(t.message);else{const n=$t.create("idb-get",{originalErrorMessage:t?.message});bt.warn(n.message)}}}async function ma(e,t){try{const r=(await Wl()).transaction(sr,"readwrite");await r.objectStore(sr).put(t,ql(e)),await r.done}catch(n){if(n instanceof ot)bt.warn(n.message);else{const r=$t.create("idb-set",{originalErrorMessage:n?.message});bt.warn(r.message)}}}function ql(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Km=1024,Gm=30;class Jm{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ga();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Gm){const s=Qm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){bt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ga(),{heartbeatsToSend:n,unsentEntries:r}=Ym(this._heartbeatsCache.heartbeats),s=xl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return bt.warn(t),""}}}function ga(){return new Date().toISOString().substring(0,10)}function Ym(e,t=Km){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ya(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ya(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ul()?Fl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zm(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ma(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ma(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ya(e){return xl(JSON.stringify({version:2,heartbeats:e})).length}function Qm(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function Zm(e){wt(new it("platform-logger",t=>new fm(t),"PRIVATE")),wt(new it("heartbeat",t=>new Jm(t),"PRIVATE")),tt(mi,ha,e),tt(mi,ha,"esm2020"),tt("fire-js","")}Zm("");var eg="firebase",tg="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(eg,tg,"app");function zl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ng=zl,Kl=new ln("auth","Firebase",zl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new ro("@firebase/auth");function rg(e,...t){zr.logLevel<=re.WARN&&zr.warn(`Auth (${hr}): ${e}`,...t)}function kr(e,...t){zr.logLevel<=re.ERROR&&zr.error(`Auth (${hr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,...t){throw io(e,...t)}function nt(e,...t){return io(e,...t)}function Gl(e,t,n){const r={...ng(),[t]:n};return new ln("auth","Firebase",r).create(t,{appName:e.name})}function Zt(e){return Gl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function io(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Kl.create(e,...t)}function $(e,t,...n){if(!e)throw io(t,...n)}function mt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw kr(t),new Error(t)}function vt(e,t){e||mt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return typeof self<"u"&&self.location?.href||""}function sg(){return _a()==="http:"||_a()==="https:"}function _a(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sg()||Ll()||"connection"in navigator)?navigator.onLine:!0}function og(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,n){this.shortDelay=t,this.longDelay=n,vt(n>t,"Short delay should be less than long delay!"),this.isMobile=kp()||Np()}get(){return ig()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e,t){vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lg=new pr(3e4,6e4);function ao(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function On(e,t,n,r,s={}){return Yl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=dr({key:e.config.apiKey,...o}).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:c,...i};return xp()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ps(e.emulatorConfig.host)&&(l.credentials="include"),Jl.fetch()(await Xl(e,e.config.apiHost,n,a),l)})}async function Yl(e,t,n){e._canInitEmulator=!1;const r={...ag,...t};try{const s=new fg(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Tr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Tr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gl(e,u,l);Et(e,u)}}catch(s){if(s instanceof ot)throw s;Et(e,"network-request-failed",{message:String(s)})}}async function ug(e,t,n,r,s={}){const i=await On(e,t,n,r,s);return"mfaPendingCredential"in i&&Et(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xl(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?oo(e.config,s):`${e.config.apiScheme}://${s}`;return cg.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class fg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),lg.get())})}}function Tr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dg(e,t){return On(e,"POST","/v1/accounts:delete",t)}async function Kr(e,t){return On(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function hg(e,t=!1){const n=St(e),r=await n.getIdToken(t),s=co(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Jn(Hs(s.auth_time)),issuedAtTime:Jn(Hs(s.iat)),expirationTime:Jn(Hs(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Hs(e){return Number(e)*1e3}function co(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return kr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nl(n);return s?JSON.parse(s):(kr("Failed to decode base64 JWT payload"),null)}catch(s){return kr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ba(e){const t=co(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ot&&pg(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function pg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gr(e){const t=e.auth,n=await e.getIdToken(),r=await ir(e,Kr(t,{idToken:n}));$(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?Ql(s.providerUserInfo):[],o=yg(e.providerData,i),a=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new bi(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,u)}async function gg(e){const t=St(e);await Gr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yg(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ql(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(e,t){const n=await Yl(e,{},async()=>{const r=dr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await Xl(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&ps(e.emulatorConfig.host)&&(c.credentials="include"),Jl.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bg(e,t){return On(e,"POST","/v2/accounts:revokeToken",ao(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ba(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=ba(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _g(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wn;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class $e{constructor({uid:t,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new mg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ir(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return hg(this,t)}reload(){return gg(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $e({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(Zt(this.auth));const t=await this.getIdToken();return await ir(this,dg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:m,providerData:y,stsTokenManager:b}=n;$(f&&b,t,"internal-error");const S=wn.fromJSON(this.name,b);$(typeof f=="string",t,"internal-error"),At(r,t.name),At(s,t.name),$(typeof d=="boolean",t,"internal-error"),$(typeof m=="boolean",t,"internal-error"),At(i,t.name),At(o,t.name),At(a,t.name),At(c,t.name),At(l,t.name),At(u,t.name);const A=new $e({uid:f,auth:t,email:s,emailVerified:d,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:S,createdAt:l,lastLoginAt:u});return y&&Array.isArray(y)&&(A.providerData=y.map(R=>({...R}))),c&&(A._redirectEventId=c),A}static async _fromIdTokenResponse(t,n,r=!1){const s=new wn;s.updateFromServerResponse(n);const i=new $e({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Gr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ql(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new wn;a.updateFromIdToken(r);const c=new $e({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map;function gt(e){vt(e instanceof Function,"Expected a class definition");let t=wa.get(e);return t?(vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,wa.set(e,t),t)}/**
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
 */class Zl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Zl.type="NONE";const Ea=Zl;/**
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
 */function xr(e,t,n){return`firebase:${e}:${t}:${n}`}class En{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xr(this.userKey,s.apiKey,i),this.fullPersistenceKey=xr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Kr(this.auth,{idToken:t}).catch(()=>{});return n?$e._fromGetAccountInfoResponse(this.auth,n,t):null}return $e._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new En(gt(Ea),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||gt(Ea);const o=xr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await Kr(t,{idToken:u}).catch(()=>{});if(!d)break;f=await $e._fromGetAccountInfoResponse(t,d,u)}else f=$e._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new En(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new En(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ru(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(eu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(iu(t))return"Blackberry";if(ou(t))return"Webos";if(tu(t))return"Safari";if((t.includes("chrome/")||nu(t))&&!t.includes("edge/"))return"Chrome";if(su(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function eu(e=ve()){return/firefox\//i.test(e)}function tu(e=ve()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nu(e=ve()){return/crios\//i.test(e)}function ru(e=ve()){return/iemobile/i.test(e)}function su(e=ve()){return/android/i.test(e)}function iu(e=ve()){return/blackberry/i.test(e)}function ou(e=ve()){return/webos/i.test(e)}function lo(e=ve()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function wg(e=ve()){return lo(e)&&!!window.navigator?.standalone}function Eg(){return Dp()&&document.documentMode===10}function au(e=ve()){return lo(e)||su(e)||ou(e)||iu(e)||/windows phone/i.test(e)||ru(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(e,t=[]){let n;switch(e){case"Browser":n=va(ve());break;case"Worker":n=`${va(ve())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${r}`}/**
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
 */class vg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Ig(e,t={}){return On(e,"GET","/v2/passwordPolicy",ao(e,t))}/**
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
 */const Sg=6;class Tg{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Sg,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ia(this),this.idTokenSubscription=new Ia(this),this.beforeStateQueue=new vg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=gt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await En.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Kr(this,{idToken:t}),r=await $e._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(pt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(t);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Gr(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=og()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(pt(this.app))return Promise.reject(Zt(this));const n=t?St(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return pt(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ig(this),n=new Tg(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ln("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&gt(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=cu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&rg(`Error while retrieving App Check token: ${t.error}`),t?.token}}function uo(e){return St(e)}class Ia{constructor(t){this.auth=t,this.observer=null,this.addObserver=$p(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ag(e){fo=e}function Cg(e){return fo.loadJS(e)}function Pg(){return fo.gapiScript}function Og(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(e,t){const n=Pn(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(nn(i,t??{}))return s;Et(s,"already-initialized")}return n.initialize({options:t})}function xg(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(gt);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Ng(e,t,n){const r=uo(e);$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=lu(t),{host:o,port:a}=Dg(t),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(nn(l,r.config.emulator)&&nn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ps(o)?(Ap(`${i}//${o}${c}`),Op("Auth",!0)):Mg()}function lu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Dg(e){const t=lu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sa(o)}}}function Sa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Mg(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return mt("not implemented")}_getIdTokenResponse(t){return mt("not implemented")}_linkToIdToken(t,n){return mt("not implemented")}_getReauthenticationResolver(t){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(e,t){return ug(e,"POST","/v1/accounts:signInWithIdp",ao(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="http://localhost";class rn extends uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return vn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,vn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,vn(t,n)}buildRequest(){const t={requestUri:Lg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=dr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mr extends fu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends mr{constructor(){super("facebook.com")}static credential(t){return rn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nt.credential(t.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends mr{constructor(){super("github.com")}static credential(t){return rn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends mr{constructor(){super("twitter.com")}static credential(t,n){return rn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await $e._fromIdTokenResponse(t,r,s),o=Ta(r);return new Tn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Ta(r);return new Tn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Ta(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends ot{constructor(t,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jr.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Jr(t,n,r,s)}}function du(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jr._fromErrorAndOperation(e,i,t,r):i})}async function Ug(e,t,n=!1){const r=await ir(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tn._forOperation(e,"link",r)}/**
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
 */async function Fg(e,t,n=!1){const{auth:r}=e;if(pt(r.app))return Promise.reject(Zt(r));const s="reauthenticate";try{const i=await ir(e,du(r,s,t,e),n);$(i.idToken,r,"internal-error");const o=co(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(e.uid===a,r,"user-mismatch"),Tn._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Et(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(e,t,n=!1){if(pt(e.app))return Promise.reject(Zt(e));const r="signIn",s=await du(e,r,t),i=await Tn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function $g(e,t,n,r){return St(e).onIdTokenChanged(t,n,r)}function Hg(e,t,n){return St(e).beforeAuthStateChanged(t,n)}function jg(e,t,n,r){return St(e).onAuthStateChanged(t,n,r)}const Yr="__sak";/**
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
 */class hu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yr,"1"),this.storage.removeItem(Yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=1e3,Wg=10;class pu extends hu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=au(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Eg()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Wg):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}pu.type="LOCAL";const qg=pu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends hu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}mu.type="SESSION";const gu=mu;/**
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
 */function zg(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ms{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ms(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await zg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Kg{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ho("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function Gg(e){rt().location.href=e}/**
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
 */function yu(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Jg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yg(){return navigator?.serviceWorker?.controller||null}function Xg(){return yu()?self:null}/**
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
 */const _u="firebaseLocalStorageDb",Qg=1,Xr="firebaseLocalStorage",bu="fbase_key";class gr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gs(e,t){return e.transaction([Xr],t?"readwrite":"readonly").objectStore(Xr)}function Zg(){const e=indexedDB.deleteDatabase(_u);return new gr(e).toPromise()}function wi(){const e=indexedDB.open(_u,Qg);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Xr,{keyPath:bu})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Xr)?t(r):(r.close(),await Zg(),t(await wi()))})})}async function Ra(e,t,n){const r=gs(e,!0).put({[bu]:t,value:n});return new gr(r).toPromise()}async function ey(e,t){const n=gs(e,!1).get(t),r=await new gr(n).toPromise();return r===void 0?null:r.value}function Aa(e,t){const n=gs(e,!0).delete(t);return new gr(n).toPromise()}const ty=800,ny=3;class wu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>ny)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(Xg()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Jg(),!this.activeServiceWorker)return;this.sender=new Kg(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Yg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await wi();return await Ra(t,Yr,"1"),await Aa(t,Yr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ra(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>ey(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Aa(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=gs(s,!1).getAll();return new gr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ty)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wu.type="LOCAL";const ry=wu;new pr(3e4,6e4);/**
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
 */function sy(e,t){return t?gt(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class po extends uu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return vn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return vn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return vn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function iy(e){return Bg(e.auth,new po(e),e.bypassAuthState)}function oy(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),Fg(n,new po(e),e.bypassAuthState)}async function ay(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),Ug(n,new po(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return iy;case"linkViaPopup":case"linkViaRedirect":return ay;case"reauthViaPopup":case"reauthViaRedirect":return oy;default:Et(this.auth,"internal-error")}}resolve(t){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new pr(2e3,1e4);class yn extends Eu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const t=ho();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cy.get())};t()}}yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="pendingRedirect",Nr=new Map;class uy extends Eu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Nr.get(this.auth._key());if(!t){try{const r=await fy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Nr.set(this.auth._key(),t)}return this.bypassAuthState||Nr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fy(e,t){const n=py(t),r=hy(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dy(e,t){Nr.set(e._key(),t)}function hy(e){return gt(e._redirectPersistence)}function py(e){return xr(ly,e.config.apiKey,e.name)}async function my(e,t,n=!1){if(pt(e.app))return Promise.reject(Zt(e));const r=uo(e),s=sy(r,t),o=await new uy(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=600*1e3;class yy{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_y(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!vu(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";n.onError(nt(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=gy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ca(t))}saveEventToCache(t){this.cachedEventUids.add(Ca(t)),this.lastProcessedEventTime=Date.now()}}function Ca(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vu({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function _y(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vu(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(e,t={}){return On(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ey=/^https?/;async function vy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await by(e);for(const n of t)try{if(Iy(n))return}catch{}Et(e,"unauthorized-domain")}function Iy(e){const t=_i(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ey.test(n))return!1;if(wy.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Sy=new pr(3e4,6e4);function Pa(){const e=rt().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Ty(e){return new Promise((t,n)=>{function r(){Pa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pa(),n(nt(e,"network-request-failed"))},timeout:Sy.get()})}if(rt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(rt().gapi?.load)r();else{const s=Og("iframefcb");return rt()[s]=()=>{gapi.load?r():n(nt(e,"network-request-failed"))},Cg(`${Pg()}?onload=${s}`).catch(i=>n(i))}}).catch(t=>{throw Dr=null,t})}let Dr=null;function Ry(e){return Dr=Dr||Ty(e),Dr}/**
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
 */const Ay=new pr(5e3,15e3),Cy="__/auth/iframe",Py="emulator/auth/iframe",Oy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ky=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xy(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?oo(t,Py):`https://${e.config.authDomain}/${Cy}`,r={apiKey:t.apiKey,appName:e.name,v:hr},s=ky.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${dr(r).slice(1)}`}async function Ny(e){const t=await Ry(e),n=rt().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:xy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Oy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(e,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},Ay.get());function c(){rt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Dy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},My=500,Ly=600,Uy="_blank",Fy="http://localhost";class Oa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function By(e,t,n,r=My,s=Ly){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...Dy,width:r.toString(),height:s.toString(),top:i,left:o},l=ve().toLowerCase();n&&(a=nu(l)?Uy:n),eu(l)&&(t=t||Fy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(wg(l)&&a!=="_self")return $y(t||"",a),new Oa(null);const f=window.open(t||"",a,u);$(f,e,"popup-blocked");try{f.focus()}catch{}return new Oa(f)}function $y(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Hy="__/auth/handler",jy="emulator/auth/handler",Vy=encodeURIComponent("fac");async function ka(e,t,n,r,s,i){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:hr,eventId:s};if(t instanceof fu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Bp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof mr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Vy}=${encodeURIComponent(c)}`:"";return`${Wy(e)}?${dr(a).slice(1)}${l}`}function Wy({config:e}){return e.emulator?oo(e,jy):`https://${e.authDomain}/${Hy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="webStorageSupport";class qy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gu,this._completeRedirectFn=my,this._overrideRedirectResult=dy}async _openPopup(t,n,r,s){vt(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await ka(t,n,r,_i(),s);return By(t,i,ho())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await ka(t,n,r,_i(),s);return Gg(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Ny(t),r=new yy(t);return n.register("authEvent",s=>($(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(js,{type:js},s=>{const i=s?.[0]?.[js];i!==void 0&&n(!!i),Et(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return au()||tu()||lo()}}const zy=qy;var xa="@firebase/auth",Na="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jy(e){wt(new it("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cu(e)},l=new Rg(r,s,i,c);return xg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),wt(new it("auth-internal",t=>{const n=uo(t.getProvider("auth").getImmediate());return(r=>new Ky(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(xa,Na,Gy(e)),tt(xa,Na,"esm2020")}/**
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
 */const Yy=300,Xy=Ml("authIdTokenMaxAge")||Yy;let Da=null;const Qy=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Xy)return;const s=n?.token;Da!==s&&(Da=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zy(e=Vl()){const t=Pn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=kg(e,{popupRedirectResolver:zy,persistence:[ry,qg,gu]}),r=Ml("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Qy(i.toString());Hg(n,o,()=>o(n.currentUser)),$g(n,a=>o(a))}}const s=Tp("auth");return s&&Ng(n,`http://${s}`),n}function e_(){return document.getElementsByTagName("head")?.[0]??document}Ag({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",e_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jy("Browser");const Iu="@firebase/installations",mo="0.6.19";/**
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
 */const Su=1e4,Tu=`w:${mo}`,Ru="FIS_v2",t_="https://firebaseinstallations.googleapis.com/v1",n_=3600*1e3,r_="installations",s_="Installations";/**
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
 */const i_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},sn=new ln(r_,s_,i_);function Au(e){return e instanceof ot&&e.code.includes("request-failed")}/**
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
 */function Cu({projectId:e}){return`${t_}/projects/${e}/installations`}function Pu(e){return{token:e.token,requestStatus:2,expiresIn:a_(e.expiresIn),creationTime:Date.now()}}async function Ou(e,t){const r=(await t.json()).error;return sn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ku({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function o_(e,{refreshToken:t}){const n=ku(e);return n.append("Authorization",c_(t)),n}async function xu(e){const t=await e();return t.status>=500&&t.status<600?e():t}function a_(e){return Number(e.replace("s","000"))}function c_(e){return`${Ru} ${e}`}/**
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
 */async function l_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Cu(e),s=ku(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Ru,appId:e.appId,sdkVersion:Tu},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await xu(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Pu(l.authToken)}}else throw await Ou("Create Installation",c)}/**
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
 */function Nu(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function u_(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const f_=/^[cdef][\w-]{21}$/,Ei="";function d_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=h_(e);return f_.test(n)?n:Ei}catch{return Ei}}function h_(e){return u_(e).substr(0,22)}/**
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
 */function ys(e){return`${e.appName}!${e.appId}`}/**
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
 */const Du=new Map;function Mu(e,t){const n=ys(e);Lu(n,t),p_(n,t)}function Lu(e,t){const n=Du.get(e);if(n)for(const r of n)r(t)}function p_(e,t){const n=m_();n&&n.postMessage({key:e,fid:t}),g_()}let zt=null;function m_(){return!zt&&"BroadcastChannel"in self&&(zt=new BroadcastChannel("[Firebase] FID Change"),zt.onmessage=e=>{Lu(e.data.key,e.data.fid)}),zt}function g_(){Du.size===0&&zt&&(zt.close(),zt=null)}/**
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
 */const y_="firebase-installations-database",__=1,on="firebase-installations-store";let Vs=null;function go(){return Vs||(Vs=Hl(y_,__,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(on)}}})),Vs}async function Qr(e,t){const n=ys(e),s=(await go()).transaction(on,"readwrite"),i=s.objectStore(on),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Mu(e,t.fid),t}async function Uu(e){const t=ys(e),r=(await go()).transaction(on,"readwrite");await r.objectStore(on).delete(t),await r.done}async function _s(e,t){const n=ys(e),s=(await go()).transaction(on,"readwrite"),i=s.objectStore(on),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Mu(e,a.fid),a}/**
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
 */async function yo(e){let t;const n=await _s(e.appConfig,r=>{const s=b_(r),i=w_(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ei?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function b_(e){const t=e||{fid:d_(),registrationStatus:0};return Fu(t)}function w_(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(sn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=E_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:v_(e)}:{installationEntry:t}}async function E_(e,t){try{const n=await l_(e,t);return Qr(e.appConfig,n)}catch(n){throw Au(n)&&n.customData.serverCode===409?await Uu(e.appConfig):await Qr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function v_(e){let t=await Ma(e.appConfig);for(;t.registrationStatus===1;)await Nu(100),t=await Ma(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await yo(e);return r||n}return t}function Ma(e){return _s(e,t=>{if(!t)throw sn.create("installation-not-found");return Fu(t)})}function Fu(e){return I_(e)?{fid:e.fid,registrationStatus:0}:e}function I_(e){return e.registrationStatus===1&&e.registrationTime+Su<Date.now()}/**
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
 */async function S_({appConfig:e,heartbeatServiceProvider:t},n){const r=T_(e,n),s=o_(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Tu,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await xu(()=>fetch(r,a));if(c.ok){const l=await c.json();return Pu(l)}else throw await Ou("Generate Auth Token",c)}function T_(e,{fid:t}){return`${Cu(e)}/${t}/authTokens:generate`}/**
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
 */async function _o(e,t=!1){let n;const r=await _s(e.appConfig,i=>{if(!Bu(i))throw sn.create("not-registered");const o=i.authToken;if(!t&&C_(o))return i;if(o.requestStatus===1)return n=R_(e,t),i;{if(!navigator.onLine)throw sn.create("app-offline");const a=O_(i);return n=A_(e,a),a}});return n?await n:r.authToken}async function R_(e,t){let n=await La(e.appConfig);for(;n.authToken.requestStatus===1;)await Nu(100),n=await La(e.appConfig);const r=n.authToken;return r.requestStatus===0?_o(e,t):r}function La(e){return _s(e,t=>{if(!Bu(t))throw sn.create("not-registered");const n=t.authToken;return k_(n)?{...t,authToken:{requestStatus:0}}:t})}async function A_(e,t){try{const n=await S_(e,t),r={...t,authToken:n};return await Qr(e.appConfig,r),n}catch(n){if(Au(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Uu(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await Qr(e.appConfig,r)}throw n}}function Bu(e){return e!==void 0&&e.registrationStatus===2}function C_(e){return e.requestStatus===2&&!P_(e)}function P_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+n_}function O_(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function k_(e){return e.requestStatus===1&&e.requestTime+Su<Date.now()}/**
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
 */async function x_(e){const t=e,{installationEntry:n,registrationPromise:r}=await yo(t);return r?r.catch(console.error):_o(t).catch(console.error),n.fid}/**
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
 */async function N_(e,t=!1){const n=e;return await D_(n),(await _o(n,t)).token}async function D_(e){const{registrationPromise:t}=await yo(e);t&&await t}/**
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
 */function M_(e){if(!e||!e.options)throw Ws("App Configuration");if(!e.name)throw Ws("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ws(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ws(e){return sn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="installations",L_="installations-internal",U_=e=>{const t=e.getProvider("app").getImmediate(),n=M_(t),r=Pn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},F_=e=>{const t=e.getProvider("app").getImmediate(),n=Pn(t,$u).getImmediate();return{getId:()=>x_(n),getToken:s=>N_(n,s)}};function B_(){wt(new it($u,U_,"PUBLIC")),wt(new it(L_,F_,"PRIVATE"))}B_();tt(Iu,mo);tt(Iu,mo,"esm2020");/**
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
 */const Zr="analytics",$_="firebase_id",H_="origin",j_=60*1e3,V_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ce=new ro("@firebase/analytics");/**
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
 */const W_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ue=new ln("analytics","Analytics",W_);/**
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
 */function q_(e){if(!e.startsWith(bo)){const t=Ue.create("invalid-gtag-resource",{gtagURL:e});return Ce.warn(t.message),""}return e}function Hu(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function z_(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function K_(e,t){const n=z_("firebase-js-sdk-policy",{createScriptURL:q_}),r=document.createElement("script"),s=`${bo}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function G_(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function J_(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Hu(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){Ce.error(a)}e("config",s,i)}async function Y_(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Hu(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Ce.error(i)}}function X_(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Y_(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await J_(e,t,n,r,a,c)}else if(i==="consent"){const[a,c]=o;e("consent",a,c)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){Ce.error(a)}}return s}function Q_(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=X_(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function Z_(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(bo)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=30,tb=1e3;class nb{constructor(t={},n=tb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ju=new nb;function rb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function sb(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:rb(n)},s=V_.replace("{app-id}",t),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw Ue.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function ib(e,t=ju,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Ue.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ue.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cb;return setTimeout(async()=>{a.abort()},j_),Vu({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Vu(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=ju){const{appId:i,measurementId:o}=e;try{await ob(r,t)}catch(a){if(o)return Ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await sb(e);return s.deleteThrottleMetadata(i),a}catch(a){const c=a;if(!ab(c)){if(s.deleteThrottleMetadata(i),o)return Ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw a}const l=Number(c?.customData?.httpStatus)===503?la(n,s.intervalMillis,eb):la(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),Ce.debug(`Calling attemptFetch again in ${l} millis`),Vu(e,u,r,s)}}function ob(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Ue.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ab(e){if(!(e instanceof ot)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class cb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function lb(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o={...r,send_to:i};e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(){if(Ul())try{await Fl()}catch(e){return Ce.warn(Ue.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return Ce.warn(Ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fb(e,t,n,r,s,i,o){const a=ib(e);a.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&Ce.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>Ce.error(d)),t.push(a);const c=ub().then(d=>{if(d)return r.getId()}),[l,u]=await Promise.all([a,c]);Z_(i)||K_(i,l.measurementId),s("js",new Date);const f=o?.config??{};return f[H_]="firebase",f.update=!0,u!=null&&(f[$_]=u),s("config",l.measurementId,f),l.measurementId}/**
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
 */class db{constructor(t){this.app=t}_delete(){return delete Yn[this.app.options.appId],Promise.resolve()}}let Yn={},Ua=[];const Fa={};let qs="dataLayer",hb="gtag",Ba,Wu,$a=!1;function pb(){const e=[];if(Ll()&&e.push("This is a browser extension environment."),Mp()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ue.create("invalid-analytics-context",{errorInfo:t});Ce.warn(n.message)}}function mb(e,t,n){pb();const r=e.options.appId;if(!r)throw Ue.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ue.create("no-api-key");if(Yn[r]!=null)throw Ue.create("already-exists",{id:r});if(!$a){G_(qs);const{wrappedGtag:i,gtagCore:o}=Q_(Yn,Ua,Fa,qs,hb);Wu=i,Ba=o,$a=!0}return Yn[r]=fb(e,Ua,Fa,t,Ba,qs,n),new db(e)}function gb(e=Vl()){e=St(e);const t=Pn(e,Zr);return t.isInitialized()?t.getImmediate():yb(e)}function yb(e,t={}){const n=Pn(e,Zr);if(n.isInitialized()){const s=n.getImmediate();if(nn(t,n.getOptions()))return s;throw Ue.create("already-initialized")}return n.initialize({options:t})}function _b(e,t,n,r){e=St(e),lb(Wu,Yn[e.app.options.appId],t,n,r).catch(s=>Ce.error(s))}const Ha="@firebase/analytics",ja="0.10.18";function bb(){wt(new it(Zr,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return mb(r,s,n)},"PUBLIC")),wt(new it("analytics-internal",e,"PRIVATE")),tt(Ha,ja),tt(Ha,ja,"esm2020");function e(t){try{const n=t.getProvider(Zr).getImmediate();return{logEvent:(r,s,i)=>_b(n,r,s,i)}}catch(n){throw Ue.create("interop-component-reg-failed",{reason:n})}}}bb();const wb={apiKey:"AIzaSyD3sshzrGL3o3Zmx9194ywb8iAlr2xoSSE",authDomain:"ap-dotpro.firebaseapp.com",projectId:"ap-dotpro",storageBucket:"ap-dotpro.firebasestorage.app",messagingSenderId:"268662837044",appId:"1:268662837044:web:6c97f479c999233c2c5f61",measurementId:"G-3JMJ3EEM9N"},qu=jl(wb);gb(qu);const Eb=Zy(qu);function zu(e,t){return function(){return e.apply(t,arguments)}}const{toString:vb}=Object.prototype,{getPrototypeOf:wo}=Object,{iterator:bs,toStringTag:Ku}=Symbol,ws=(e=>t=>{const n=vb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),We=e=>(e=e.toLowerCase(),t=>ws(t)===e),Es=e=>t=>typeof t===e,{isArray:kn}=Array,or=Es("undefined");function yr(e){return e!==null&&!or(e)&&e.constructor!==null&&!or(e.constructor)&&Pe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Gu=We("ArrayBuffer");function Ib(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Gu(e.buffer),t}const Sb=Es("string"),Pe=Es("function"),Ju=Es("number"),_r=e=>e!==null&&typeof e=="object",Tb=e=>e===!0||e===!1,Mr=e=>{if(ws(e)!=="object")return!1;const t=wo(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ku in e)&&!(bs in e)},Rb=e=>{if(!_r(e)||yr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Ab=We("Date"),Cb=We("File"),Pb=We("Blob"),Ob=We("FileList"),kb=e=>_r(e)&&Pe(e.pipe),xb=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Pe(e.append)&&((t=ws(e))==="formdata"||t==="object"&&Pe(e.toString)&&e.toString()==="[object FormData]"))},Nb=We("URLSearchParams"),[Db,Mb,Lb,Ub]=["ReadableStream","Request","Response","Headers"].map(We),Fb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function br(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),kn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(yr(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function Yu(e,t){if(yr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Kt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Xu=e=>!or(e)&&e!==Kt;function vi(){const{caseless:e}=Xu(this)&&this||{},t={},n=(r,s)=>{const i=e&&Yu(t,s)||s;Mr(t[i])&&Mr(r)?t[i]=vi(t[i],r):Mr(r)?t[i]=vi({},r):kn(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&br(arguments[r],n);return t}const Bb=(e,t,n,{allOwnKeys:r}={})=>(br(t,(s,i)=>{n&&Pe(s)?e[i]=zu(s,n):e[i]=s},{allOwnKeys:r}),e),$b=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Hb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},jb=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&wo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Vb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Wb=e=>{if(!e)return null;if(kn(e))return e;let t=e.length;if(!Ju(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&wo(Uint8Array)),zb=(e,t)=>{const r=(e&&e[bs]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Kb=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Gb=We("HTMLFormElement"),Jb=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Va=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Yb=We("RegExp"),Qu=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};br(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},Xb=e=>{Qu(e,(t,n)=>{if(Pe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Pe(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Qb=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return kn(e)?r(e):r(String(e).split(t)),n},Zb=()=>{},ew=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function tw(e){return!!(e&&Pe(e.append)&&e[Ku]==="FormData"&&e[bs])}const nw=e=>{const t=new Array(10),n=(r,s)=>{if(_r(r)){if(t.indexOf(r)>=0)return;if(yr(r))return r;if(!("toJSON"in r)){t[s]=r;const i=kn(r)?[]:{};return br(r,(o,a)=>{const c=n(o,s+1);!or(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},rw=We("AsyncFunction"),sw=e=>e&&(_r(e)||Pe(e))&&Pe(e.then)&&Pe(e.catch),Zu=((e,t)=>e?setImmediate:t?((n,r)=>(Kt.addEventListener("message",({source:s,data:i})=>{s===Kt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Kt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Pe(Kt.postMessage)),iw=typeof queueMicrotask<"u"?queueMicrotask.bind(Kt):typeof process<"u"&&process.nextTick||Zu,ow=e=>e!=null&&Pe(e[bs]),_={isArray:kn,isArrayBuffer:Gu,isBuffer:yr,isFormData:xb,isArrayBufferView:Ib,isString:Sb,isNumber:Ju,isBoolean:Tb,isObject:_r,isPlainObject:Mr,isEmptyObject:Rb,isReadableStream:Db,isRequest:Mb,isResponse:Lb,isHeaders:Ub,isUndefined:or,isDate:Ab,isFile:Cb,isBlob:Pb,isRegExp:Yb,isFunction:Pe,isStream:kb,isURLSearchParams:Nb,isTypedArray:qb,isFileList:Ob,forEach:br,merge:vi,extend:Bb,trim:Fb,stripBOM:$b,inherits:Hb,toFlatObject:jb,kindOf:ws,kindOfTest:We,endsWith:Vb,toArray:Wb,forEachEntry:zb,matchAll:Kb,isHTMLForm:Gb,hasOwnProperty:Va,hasOwnProp:Va,reduceDescriptors:Qu,freezeMethods:Xb,toObjectSet:Qb,toCamelCase:Jb,noop:Zb,toFiniteNumber:ew,findKey:Yu,global:Kt,isContextDefined:Xu,isSpecCompliantForm:tw,toJSONObject:nw,isAsyncFn:rw,isThenable:sw,setImmediate:Zu,asap:iw,isIterable:ow};function W(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const ef=W.prototype,tf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{tf[e]={value:e}});Object.defineProperties(W,tf);Object.defineProperty(ef,"isAxiosError",{value:!0});W.from=(e,t,n,r,s,i)=>{const o=Object.create(ef);return _.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),W.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const aw=null;function Ii(e){return _.isPlainObject(e)||_.isArray(e)}function nf(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Wa(e,t,n){return e?e.concat(t).map(function(s,i){return s=nf(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function cw(e){return _.isArray(e)&&!e.some(Ii)}const lw=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function vs(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,S){return!_.isUndefined(S[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(_.isBoolean(y))return y.toString();if(!c&&_.isBlob(y))throw new W("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,b,S){let A=y;if(y&&!S&&typeof y=="object"){if(_.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&cw(y)||(_.isFileList(y)||_.endsWith(b,"[]"))&&(A=_.toArray(y)))return b=nf(b),A.forEach(function(O,D){!(_.isUndefined(O)||O===null)&&t.append(o===!0?Wa([b],D,i):o===null?b:b+"[]",l(O))}),!1}return Ii(y)?!0:(t.append(Wa(S,b,i),l(y)),!1)}const f=[],d=Object.assign(lw,{defaultVisitor:u,convertValue:l,isVisitable:Ii});function m(y,b){if(!_.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(y),_.forEach(y,function(A,R){(!(_.isUndefined(A)||A===null)&&s.call(t,A,_.isString(R)?R.trim():R,b,d))===!0&&m(A,b?b.concat(R):[R])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return m(e),t}function qa(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Eo(e,t){this._pairs=[],e&&vs(e,this,t)}const rf=Eo.prototype;rf.append=function(t,n){this._pairs.push([t,n])};rf.toString=function(t){const n=t?function(r){return t.call(this,r,qa)}:qa;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function uw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function sf(e,t,n){if(!t)return e;const r=n&&n.encode||uw;_.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(t,n):i=_.isURLSearchParams(t)?t.toString():new Eo(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class za{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const of={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fw=typeof URLSearchParams<"u"?URLSearchParams:Eo,dw=typeof FormData<"u"?FormData:null,hw=typeof Blob<"u"?Blob:null,pw={isBrowser:!0,classes:{URLSearchParams:fw,FormData:dw,Blob:hw},protocols:["http","https","file","blob","url","data"]},vo=typeof window<"u"&&typeof document<"u",Si=typeof navigator=="object"&&navigator||void 0,mw=vo&&(!Si||["ReactNative","NativeScript","NS"].indexOf(Si.product)<0),gw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",yw=vo&&window.location.href||"http://localhost",_w=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:vo,hasStandardBrowserEnv:mw,hasStandardBrowserWebWorkerEnv:gw,navigator:Si,origin:yw},Symbol.toStringTag,{value:"Module"})),ge={..._w,...pw};function bw(e,t){return vs(e,new ge.classes.URLSearchParams,{visitor:function(n,r,s,i){return ge.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function ww(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ew(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function af(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=Ew(s[o])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,s)=>{t(ww(r),s,n,0)}),n}return null}function vw(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const wr={transitional:of,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return s?JSON.stringify(af(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t)||_.isReadableStream(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return bw(t,this.formSerializer).toString();if((a=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return vs(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),vw(t)):t}],transformResponse:[function(t){const n=this.transitional||wr.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(t)||_.isReadableStream(t))return t;if(t&&_.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{wr.headers[e]={}});const Iw=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Sw=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Iw[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ka=Symbol("internals");function Ln(e){return e&&String(e).trim().toLowerCase()}function Lr(e){return e===!1||e==null?e:_.isArray(e)?e.map(Lr):String(e)}function Tw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Rw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function zs(e,t,n,r,s){if(_.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function Aw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Cw(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}let Oe=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,l){const u=Ln(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Lr(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));if(_.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(_.isString(t)&&(t=t.trim())&&!Rw(t))o(Sw(t),n);else if(_.isObject(t)&&_.isIterable(t)){let a={},c,l;for(const u of t){if(!_.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?_.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Ln(t),t){const r=_.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Tw(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ln(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||zs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=Ln(o),o){const a=_.findKey(r,o);a&&(!n||zs(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||zs(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=Lr(s),delete n[i];return}const a=t?Aw(i):String(i).trim();a!==i&&delete n[i],n[a]=Lr(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ka]=this[Ka]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ln(o);r[a]||(Cw(s,o),r[a]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}};Oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Oe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});_.freezeMethods(Oe);function Ks(e,t){const n=this||wr,r=t||n,s=Oe.from(r.headers);let i=r.data;return _.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function cf(e){return!!(e&&e.__CANCEL__)}function xn(e,t,n){W.call(this,e??"canceled",W.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(xn,W,{__CANCEL__:!0});function lf(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Pw(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ow(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,d=0;for(;f!==s;)d+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function kw(e,t){let n=0,r=1e3/t,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),e(...l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const es=(e,t,n=3)=>{let r=0;const s=Ow(50,250);return kw(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},Ga=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ja=e=>(...t)=>_.asap(()=>e(...t)),xw=ge.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ge.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ge.origin),ge.navigator&&/(msie|trident)/i.test(ge.navigator.userAgent)):()=>!0,Nw=ge.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Dw(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Mw(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function uf(e,t,n){let r=!Dw(t);return e&&(r||n==!1)?Mw(e,t):t}const Ya=e=>e instanceof Oe?{...e}:e;function an(e,t){t=t||{};const n={};function r(l,u,f,d){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:d},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f,d){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f,d)}else return r(l,u,f,d)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(Ya(l),Ya(u),f,!0)};return _.forEach(Object.keys({...e,...t}),function(u){const f=c[u]||s,d=f(e[u],t[u],u);_.isUndefined(d)&&f!==a||(n[u]=d)}),n}const ff=e=>{const t=an({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=t;t.headers=o=Oe.from(o),t.url=sf(uf(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(ge.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(t)),r||r!==!1&&xw(t.url))){const l=s&&i&&Nw.read(i);l&&o.set(s,l)}return t},Lw=typeof XMLHttpRequest<"u",Uw=Lw&&function(e){return new Promise(function(n,r){const s=ff(e);let i=s.data;const o=Oe.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,d,m,y;function b(){m&&m(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function A(){if(!S)return;const O=Oe.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),F={data:!a||a==="text"||a==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:O,config:e,request:S};lf(function(G){n(G),b()},function(G){r(G),b()},F),S=null}"onloadend"in S?S.onloadend=A:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(A)},S.onabort=function(){S&&(r(new W("Request aborted",W.ECONNABORTED,e,S)),S=null)},S.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,e,S)),S=null},S.ontimeout=function(){let D=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||of;s.timeoutErrorMessage&&(D=s.timeoutErrorMessage),r(new W(D,F.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&_.forEach(o.toJSON(),function(D,F){S.setRequestHeader(F,D)}),_.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),a&&a!=="json"&&(S.responseType=s.responseType),l&&([d,y]=es(l,!0),S.addEventListener("progress",d)),c&&S.upload&&([f,m]=es(c),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=O=>{S&&(r(!O||O.type?new xn(null,e,S):O),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=Pw(s.url);if(R&&ge.protocols.indexOf(R)===-1){r(new W("Unsupported protocol "+R+":",W.ERR_BAD_REQUEST,e));return}S.send(i||null)})},Fw=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof W?u:new xn(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new W(`timeout ${t} of ms exceeded`,W.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),e=null)};e.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},Bw=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},$w=async function*(e,t){for await(const n of Hw(e))yield*Bw(n,t)},Hw=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Xa=(e,t,n,r)=>{const s=$w(e,t);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let d=i+=f;n(d)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Is=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",df=Is&&typeof ReadableStream=="function",jw=Is&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),hf=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Vw=df&&hf(()=>{let e=!1;const t=new Request(ge.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Qa=64*1024,Ti=df&&hf(()=>_.isReadableStream(new Response("").body)),ts={stream:Ti&&(e=>e.body)};Is&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!ts[t]&&(ts[t]=_.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new W(`Response type '${t}' is not supported`,W.ERR_NOT_SUPPORT,r)})})})(new Response);const Ww=async e=>{if(e==null)return 0;if(_.isBlob(e))return e.size;if(_.isSpecCompliantForm(e))return(await new Request(ge.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(_.isArrayBufferView(e)||_.isArrayBuffer(e))return e.byteLength;if(_.isURLSearchParams(e)&&(e=e+""),_.isString(e))return(await jw(e)).byteLength},qw=async(e,t)=>{const n=_.toFiniteNumber(e.getContentLength());return n??Ww(t)},zw=Is&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=ff(e);l=l?(l+"").toLowerCase():"text";let m=Fw([s,i&&i.toAbortSignal()],o),y;const b=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let S;try{if(c&&Vw&&n!=="get"&&n!=="head"&&(S=await qw(u,r))!==0){let F=new Request(t,{method:"POST",body:r,duplex:"half"}),te;if(_.isFormData(r)&&(te=F.headers.get("content-type"))&&u.setContentType(te),F.body){const[G,q]=Ga(S,es(Ja(c)));r=Xa(F.body,Qa,G,q)}}_.isString(f)||(f=f?"include":"omit");const A="credentials"in Request.prototype;y=new Request(t,{...d,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:A?f:void 0});let R=await fetch(y,d);const O=Ti&&(l==="stream"||l==="response");if(Ti&&(a||O&&b)){const F={};["status","statusText","headers"].forEach(K=>{F[K]=R[K]});const te=_.toFiniteNumber(R.headers.get("content-length")),[G,q]=a&&Ga(te,es(Ja(a),!0))||[];R=new Response(Xa(R.body,Qa,G,()=>{q&&q(),b&&b()}),F)}l=l||"text";let D=await ts[_.findKey(ts,l)||"text"](R,e);return!O&&b&&b(),await new Promise((F,te)=>{lf(F,te,{data:D,headers:Oe.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:y})})}catch(A){throw b&&b(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new W("Network Error",W.ERR_NETWORK,e,y),{cause:A.cause||A}):W.from(A,A&&A.code,e,y)}}),Ri={http:aw,xhr:Uw,fetch:zw};_.forEach(Ri,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Za=e=>`- ${e}`,Kw=e=>_.isFunction(e)||e===null||e===!1,pf={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!Kw(n)&&(r=Ri[(o=String(n)).toLowerCase()],r===void 0))throw new W(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Za).join(`
`):" "+Za(i[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ri};function Gs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xn(null,e)}function ec(e){return Gs(e),e.headers=Oe.from(e.headers),e.data=Ks.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),pf.getAdapter(e.adapter||wr.adapter)(e).then(function(r){return Gs(e),r.data=Ks.call(e,e.transformResponse,r),r.headers=Oe.from(r.headers),r},function(r){return cf(r)||(Gs(e),r&&r.response&&(r.response.data=Ks.call(e,e.transformResponse,r.response),r.response.headers=Oe.from(r.response.headers))),Promise.reject(r)})}const mf="1.11.0",Ss={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ss[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tc={};Ss.transitional=function(t,n,r){function s(i,o){return"[Axios v"+mf+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new W(s(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!tc[o]&&(tc[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};Ss.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Gw(e,t,n){if(typeof e!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new W("option "+i+" must be "+c,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}}const Ur={assertOptions:Gw,validators:Ss},Ye=Ur.validators;let en=class{constructor(t){this.defaults=t||{},this.interceptors={request:new za,response:new za}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=an(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ur.assertOptions(r,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Ur.assertOptions(s,{encode:Ye.function,serialize:Ye.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ur.assertOptions(n,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Oe.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,d;if(!c){const y=[ec.bind(this),void 0];for(y.unshift(...a),y.push(...l),d=y.length,u=Promise.resolve(n);f<d;)u=u.then(y[f++],y[f++]);return u}d=a.length;let m=n;for(f=0;f<d;){const y=a[f++],b=a[f++];try{m=y(m)}catch(S){b.call(this,S);break}}try{u=ec.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=an(this.defaults,t);const n=uf(t.baseURL,t.url,t.allowAbsoluteUrls);return sf(n,t.params,t.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(t){en.prototype[t]=function(n,r){return this.request(an(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(an(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}en.prototype[t]=n(),en.prototype[t+"Form"]=n(!0)});let Jw=class gf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new xn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new gf(function(s){t=s}),cancel:t}}};function Yw(e){return function(n){return e.apply(null,n)}}function Xw(e){return _.isObject(e)&&e.isAxiosError===!0}const Ai={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ai).forEach(([e,t])=>{Ai[t]=e});function yf(e){const t=new en(e),n=zu(en.prototype.request,t);return _.extend(n,en.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return yf(an(e,s))},n}const fe=yf(wr);fe.Axios=en;fe.CanceledError=xn;fe.CancelToken=Jw;fe.isCancel=cf;fe.VERSION=mf;fe.toFormData=vs;fe.AxiosError=W;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=Yw;fe.isAxiosError=Xw;fe.mergeConfig=an;fe.AxiosHeaders=Oe;fe.formToJSON=e=>af(_.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=pf.getAdapter;fe.HttpStatusCode=Ai;fe.default=fe;const{Axios:Iv,AxiosError:Sv,CanceledError:Tv,isCancel:Rv,CancelToken:Av,VERSION:Cv,all:Pv,Cancel:Ov,isAxiosError:kv,spread:xv,toFormData:Nv,AxiosHeaders:Dv,HttpStatusCode:Mv,formToJSON:Lv,getAdapter:Uv,mergeConfig:Fv}=fe,nc=fe.create({baseURL:`https://${window.location.hostname}/api`,timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json","X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache",Pragma:"no-cache"}}),_f=gp("main",()=>{const e=Ft({}),t=Ft({isInitialized:!1}),n=Ft({uid:null,role:"client"}),r={};async function s(){t.isInitialized=!0,console.info("Store initialized"),await i();let u=await l();o(u)}async function i(){try{let u=await nc.get(`/data/domain?user=${n.uid}`);Object.assign(e,u.data)}catch(u){console.error("Error Fetching Domain Configuration  Data:",u)}}function o(u){Object.assign(n,{...u}),console.log(n)}function a(u){n.uid=u}function c(){Object.assign(n,{uid:null})}async function l(){if(n.uid)try{let{data:u}=await nc.get(`/data/user?uid=${n.uid}`);return u}catch(u){console.error("Error Fetching User Data:",u)}}return{user:n,...r,init:s,setUserUID:a,clearUser:c}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const gn=typeof document<"u";function bf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Qw(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&bf(e.default)}const Q=Object.assign;function Js(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ve(s)?s.map(e):e(s)}return n}const Xn=()=>{},Ve=Array.isArray,wf=/#/g,Zw=/&/g,eE=/\//g,tE=/=/g,nE=/\?/g,Ef=/\+/g,rE=/%5B/g,sE=/%5D/g,vf=/%5E/g,iE=/%60/g,If=/%7B/g,oE=/%7C/g,Sf=/%7D/g,aE=/%20/g;function Io(e){return encodeURI(""+e).replace(oE,"|").replace(rE,"[").replace(sE,"]")}function cE(e){return Io(e).replace(If,"{").replace(Sf,"}").replace(vf,"^")}function Ci(e){return Io(e).replace(Ef,"%2B").replace(aE,"+").replace(wf,"%23").replace(Zw,"%26").replace(iE,"`").replace(If,"{").replace(Sf,"}").replace(vf,"^")}function lE(e){return Ci(e).replace(tE,"%3D")}function uE(e){return Io(e).replace(wf,"%23").replace(nE,"%3F")}function fE(e){return e==null?"":uE(e).replace(eE,"%2F")}function ar(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const dE=/\/$/,hE=e=>e.replace(dE,"");function Ys(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=yE(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ar(o)}}function pE(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function rc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mE(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Rn(t.matched[r],n.matched[s])&&Tf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Rn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Tf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gE(e[n],t[n]))return!1;return!0}function gE(e,t){return Ve(e)?sc(e,t):Ve(t)?sc(t,e):e===t}function sc(e,t){return Ve(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function yE(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var cr;(function(e){e.pop="pop",e.push="push"})(cr||(cr={}));var Qn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qn||(Qn={}));function _E(e){if(!e)if(gn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hE(e)}const bE=/^[^#]+#/;function wE(e,t){return e.replace(bE,"#")+t}function EE(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ts=()=>({left:window.scrollX,top:window.scrollY});function vE(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=EE(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ic(e,t){return(history.state?history.state.position-t:-1)+e}const Pi=new Map;function IE(e,t){Pi.set(e,t)}function SE(e){const t=Pi.get(e);return Pi.delete(e),t}let TE=()=>location.protocol+"//"+location.host;function Rf(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),rc(c,"")}return rc(n,e)+r+s}function RE(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=Rf(e,location),y=n.value,b=t.value;let S=0;if(d){if(n.value=m,t.value=d,o&&o===y){o=null;return}S=b?d.position-b.position:0}else r(m);s.forEach(A=>{A(n.value,y,{delta:S,type:cr.pop,direction:S?S>0?Qn.forward:Qn.back:Qn.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Q({},d.state,{scroll:Ts()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function oc(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ts():null}}function AE(e){const{history:t,location:n}=window,r={value:Rf(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:TE()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=Q({},t.state,oc(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Q({},s.value,t.state,{forward:c,scroll:Ts()});i(u.current,u,!0);const f=Q({},oc(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function CE(e){e=_E(e);const t=AE(e),n=RE(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:e,go:r,createHref:wE.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function PE(e){return typeof e=="string"||e&&typeof e=="object"}function Af(e){return typeof e=="string"||typeof e=="symbol"}const Cf=Symbol("");var ac;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ac||(ac={}));function An(e,t){return Q(new Error,{type:e,[Cf]:!0},t)}function lt(e,t){return e instanceof Error&&Cf in e&&(t==null||!!(e.type&t))}const cc="[^/]+?",OE={sensitive:!1,strict:!1,start:!0,end:!0},kE=/[.+*?^${}()[\]/\\]/g;function xE(e,t){const n=Q({},OE,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(kE,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:b,optional:S,regexp:A}=d;i.push({name:y,repeatable:b,optional:S});const R=A||cc;if(R!==cc){m+=10;try{new RegExp(`(${R})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+D.message)}}let O=b?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(O=S&&l.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),s+=O,m+=20,S&&(m+=-8),b&&(m+=-20),R===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:b,optional:S}=m,A=y in l?l[y]:"";if(Ve(A)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=Ve(A)?A.join("/"):A;if(!R)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function NE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Pf(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=NE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(lc(r))return 1;if(lc(s))return-1}return s.length-r.length}function lc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const DE={type:0,value:""},ME=/[a-zA-Z0-9_]/;function LE(e){if(!e)return[[]];if(e==="/")return[[DE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:ME.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function UE(e,t,n){const r=xE(LE(e.path),n),s=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function FE(e,t){const n=[],r=new Map;t=hc({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,m){const y=!m,b=fc(f);b.aliasOf=m&&m.record;const S=hc(t,f),A=[b];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of D)A.push(fc(Q({},b,{components:m?m.record.components:b.components,path:F,aliasOf:m?m.record:b})))}let R,O;for(const D of A){const{path:F}=D;if(d&&F[0]!=="/"){const te=d.record.path,G=te[te.length-1]==="/"?"":"/";D.path=d.record.path+(F&&G+F)}if(R=UE(D,d,S),m?m.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),y&&f.name&&!dc(R)&&o(f.name)),Of(R)&&c(R),b.children){const te=b.children;for(let G=0;G<te.length;G++)i(te[G],R,m&&m.children[G])}m=m||R}return O?()=>{o(O)}:Xn}function o(f){if(Af(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=HE(f,n);n.splice(d,0,f),f.record.name&&!dc(f)&&r.set(f.record.name,f)}function l(f,d){let m,y={},b,S;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw An(1,{location:f});S=m.record.name,y=Q(uc(d.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&uc(f.params,m.keys.map(O=>O.name))),b=m.stringify(y)}else if(f.path!=null)b=f.path,m=n.find(O=>O.re.test(b)),m&&(y=m.parse(b),S=m.record.name);else{if(m=d.name?r.get(d.name):n.find(O=>O.re.test(d.path)),!m)throw An(1,{location:f,currentLocation:d});S=m.record.name,y=Q({},d.params,f.params),b=m.stringify(y)}const A=[];let R=m;for(;R;)A.unshift(R.record),R=R.parent;return{name:S,path:b,params:y,matched:A,meta:$E(A)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function uc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fc(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:BE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function BE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function dc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $E(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function hc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function HE(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Pf(e,t[i])<0?r=i:n=i+1}const s=jE(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function jE(e){let t=e;for(;t=t.parent;)if(Of(t)&&Pf(e,t)===0)return t}function Of({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function VE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ef," "),o=i.indexOf("="),a=ar(o<0?i:i.slice(0,o)),c=o<0?null:ar(i.slice(o+1));if(a in t){let l=t[a];Ve(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function pc(e){let t="";for(let n in e){const r=e[n];if(n=lE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ve(r)?r.map(i=>i&&Ci(i)):[r&&Ci(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function WE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const qE=Symbol(""),mc=Symbol(""),So=Symbol(""),kf=Symbol(""),Oi=Symbol("");function Un(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function xt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(An(4,{from:n,to:t})):d instanceof Error?c(d):PE(d)?c(An(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function Xs(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(bf(c)){const u=(c.__vccOpts||c)[t];u&&i.push(xt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Qw(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[t];return m&&xt(m,n,r,o,a,s)()}))}}return i}function gc(e){const t=et(So),n=et(kf),r=Ae(()=>{const c=Yt(e.to);return t.resolve(c)}),s=Ae(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Rn.bind(null,u));if(d>-1)return d;const m=yc(c[l-2]);return l>1&&yc(u)===m&&f[f.length-1].path!==m?f.findIndex(Rn.bind(null,c[l-2])):d}),i=Ae(()=>s.value>-1&&YE(n.params,r.value.params)),o=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&Tf(n.params,r.value.params));function a(c={}){if(JE(c)){const l=t[Yt(e.replace)?"replace":"push"](Yt(e.to)).catch(Xn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function zE(e){return e.length===1?e[0]:e}const KE=Yc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:gc,setup(e,{slots:t}){const n=Ft(gc(e)),{options:r}=et(So),s=Ae(()=>({[_c(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_c(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&zE(t.default(n));return e.custom?i:Sl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),GE=KE;function JE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function YE(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function yc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _c=(e,t,n)=>e??t??n,XE=Yc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=et(Oi),s=Ae(()=>e.route||r.value),i=et(mc,0),o=Ae(()=>{let l=Yt(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ae(()=>s.value.matched[o.value]);Ar(mc,Ae(()=>o.value+1)),Ar(qE,a),Ar(Oi,s);const c=lr();return Qt(()=>[c.value,a.value,e.name],([l,u,f],[d,m,y])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Rn(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return bc(n.default,{Component:d,route:l});const m=f.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,S=Sl(d,Q({},y,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return bc(n.default,{Component:S,route:l})||S}}});function bc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const QE=XE;function ZE(e){const t=FE(e.routes,e),n=e.parseQuery||VE,r=e.stringifyQuery||pc,s=e.history,i=Un(),o=Un(),a=Un(),c=Hc(Ct);let l=Ct;gn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Js.bind(null,E=>""+E),f=Js.bind(null,fE),d=Js.bind(null,ar);function m(E,M){let x,L;return Af(E)?(x=t.getRecordMatcher(E),L=M):L=E,t.addRoute(L,x)}function y(E){const M=t.getRecordMatcher(E);M&&t.removeRoute(M)}function b(){return t.getRoutes().map(E=>E.record)}function S(E){return!!t.getRecordMatcher(E)}function A(E,M){if(M=Q({},M||c.value),typeof E=="string"){const g=Ys(n,E,M.path),w=t.resolve({path:g.path},M),I=s.createHref(g.fullPath);return Q(g,w,{params:d(w.params),hash:ar(g.hash),redirectedFrom:void 0,href:I})}let x;if(E.path!=null)x=Q({},E,{path:Ys(n,E.path,M.path).path});else{const g=Q({},E.params);for(const w in g)g[w]==null&&delete g[w];x=Q({},E,{params:f(g)}),M.params=f(M.params)}const L=t.resolve(x,M),ne=E.hash||"";L.params=u(d(L.params));const h=pE(r,Q({},E,{hash:cE(ne),path:L.path})),p=s.createHref(h);return Q({fullPath:h,hash:ne,query:r===pc?WE(E.query):E.query||{}},L,{redirectedFrom:void 0,href:p})}function R(E){return typeof E=="string"?Ys(n,E,c.value.path):Q({},E)}function O(E,M){if(l!==E)return An(8,{from:M,to:E})}function D(E){return G(E)}function F(E){return D(Q(R(E),{replace:!0}))}function te(E){const M=E.matched[E.matched.length-1];if(M&&M.redirect){const{redirect:x}=M;let L=typeof x=="function"?x(E):x;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=R(L):{path:L},L.params={}),Q({query:E.query,hash:E.hash,params:L.path!=null?{}:E.params},L)}}function G(E,M){const x=l=A(E),L=c.value,ne=E.state,h=E.force,p=E.replace===!0,g=te(x);if(g)return G(Q(R(g),{state:typeof g=="object"?Q({},ne,g.state):ne,force:h,replace:p}),M||x);const w=x;w.redirectedFrom=M;let I;return!h&&mE(r,L,x)&&(I=An(16,{to:w,from:L}),qe(L,L,!0,!1)),(I?Promise.resolve(I):ce(w,L)).catch(v=>lt(v)?lt(v,2)?v:Rt(v):X(v,w,L)).then(v=>{if(v){if(lt(v,2))return G(Q({replace:p},R(v.to),{state:typeof v.to=="object"?Q({},ne,v.to.state):ne,force:h}),M||w)}else v=ke(w,L,!0,p,ne);return _e(w,L,v),v})}function q(E,M){const x=O(E,M);return x?Promise.reject(x):Promise.resolve()}function K(E){const M=fn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(E):E()}function ce(E,M){let x;const[L,ne,h]=ev(E,M);x=Xs(L.reverse(),"beforeRouteLeave",E,M);for(const g of L)g.leaveGuards.forEach(w=>{x.push(xt(w,E,M))});const p=q.bind(null,E,M);return x.push(p),Fe(x).then(()=>{x=[];for(const g of i.list())x.push(xt(g,E,M));return x.push(p),Fe(x)}).then(()=>{x=Xs(ne,"beforeRouteUpdate",E,M);for(const g of ne)g.updateGuards.forEach(w=>{x.push(xt(w,E,M))});return x.push(p),Fe(x)}).then(()=>{x=[];for(const g of h)if(g.beforeEnter)if(Ve(g.beforeEnter))for(const w of g.beforeEnter)x.push(xt(w,E,M));else x.push(xt(g.beforeEnter,E,M));return x.push(p),Fe(x)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),x=Xs(h,"beforeRouteEnter",E,M,K),x.push(p),Fe(x))).then(()=>{x=[];for(const g of o.list())x.push(xt(g,E,M));return x.push(p),Fe(x)}).catch(g=>lt(g,8)?g:Promise.reject(g))}function _e(E,M,x){a.list().forEach(L=>K(()=>L(E,M,x)))}function ke(E,M,x,L,ne){const h=O(E,M);if(h)return h;const p=M===Ct,g=gn?history.state:{};x&&(L||p?s.replace(E.fullPath,Q({scroll:p&&g&&g.scroll},ne)):s.push(E.fullPath,ne)),c.value=E,qe(E,M,x,p),Rt()}let Ie;function Ht(){Ie||(Ie=s.listen((E,M,x)=>{if(!Er.listening)return;const L=A(E),ne=te(L);if(ne){G(Q(ne,{replace:!0,force:!0}),L).catch(Xn);return}l=L;const h=c.value;gn&&IE(ic(h.fullPath,x.delta),Ts()),ce(L,h).catch(p=>lt(p,12)?p:lt(p,2)?(G(Q(R(p.to),{force:!0}),L).then(g=>{lt(g,20)&&!x.delta&&x.type===cr.pop&&s.go(-1,!1)}).catch(Xn),Promise.reject()):(x.delta&&s.go(-x.delta,!1),X(p,L,h))).then(p=>{p=p||ke(L,h,!1),p&&(x.delta&&!lt(p,8)?s.go(-x.delta,!1):x.type===cr.pop&&lt(p,20)&&s.go(-1,!1)),_e(L,h,p)}).catch(Xn)}))}let Tt=Un(),ae=Un(),z;function X(E,M,x){Rt(E);const L=ae.list();return L.length?L.forEach(ne=>ne(E,M,x)):console.error(E),Promise.reject(E)}function at(){return z&&c.value!==Ct?Promise.resolve():new Promise((E,M)=>{Tt.add([E,M])})}function Rt(E){return z||(z=!E,Ht(),Tt.list().forEach(([M,x])=>E?x(E):M()),Tt.reset()),E}function qe(E,M,x,L){const{scrollBehavior:ne}=e;if(!gn||!ne)return Promise.resolve();const h=!x&&SE(ic(E.fullPath,0))||(L||!x)&&history.state&&history.state.scroll||null;return Ji().then(()=>ne(E,M,h)).then(p=>p&&vE(p)).catch(p=>X(p,E,M))}const Se=E=>s.go(E);let un;const fn=new Set,Er={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:b,resolve:A,options:e,push:D,replace:F,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:at,install(E){const M=this;E.component("RouterLink",GE),E.component("RouterView",QE),E.config.globalProperties.$router=M,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),gn&&!un&&c.value===Ct&&(un=!0,D(s.location).catch(ne=>{}));const x={};for(const ne in Ct)Object.defineProperty(x,ne,{get:()=>c.value[ne],enumerable:!0});E.provide(So,M),E.provide(kf,$c(x)),E.provide(Oi,c);const L=E.unmount;fn.add(E),E.unmount=function(){fn.delete(E),fn.size<1&&(l=Ct,Ie&&Ie(),Ie=null,c.value=Ct,un=!1,z=!1),L()}}};function Fe(E){return E.reduce((M,x)=>M.then(()=>K(x)),Promise.resolve())}return Er}function ev(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Rn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Rn(l,c))||s.push(c))}return[n,r,s]}const tv="modulepreload",nv=function(e){return"/"+e},wc={},Qs=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=c(n.map(l=>{if(l=nv(l),l in wc)return;wc[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":tv,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((m,y)=>{d.addEventListener("load",m),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},rv=[{path:"/",redirect:"home"},{name:"home",path:"/home",component:()=>Qs(()=>import("./Index-DH0veE9E.js"),__vite__mapDeps([0,1]))},{name:"admin",path:"/admin",meta:{requiresAuth:!0,role:"admin"},component:()=>Qs(()=>import("./Index-D-b6maMV.js"),__vite__mapDeps([2,1]))},{path:"/login",name:"login",component:()=>Qs(()=>import("./Index-D1-hNcw2.js"),[])}],xf=ZE({history:CE(),routes:rv});xf.beforeEach((e,t,n)=>{const s=_f().user.role;if(e.meta.requiresAuth&&e.meta.role&&e.meta.role!==s)return n({name:"login"});n()});function Nf(e){return Fi()?(Tc(e),!0):!1}const Df=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const sv=e=>e!=null,iv=()=>{};function ov(...e){if(e.length!==1)return Ed(...e);const t=e[0];return typeof t=="function"?Wi(yd(()=>({get:t,set:iv}))):lr(t)}function av(e){return Array.isArray(e)?e:[e]}const cv=Df?window:void 0,lv=Df?window.document:void 0;function uv(e){var t;const n=Gi(e);return(t=n?.$el)!=null?t:n}function fv(){const e=Hc(!1),t=to();return t&&el(()=>{e.value=!0},t),e}function dv(e){const t=fv();return Ae(()=>(t.value,!!e()))}function hv(e,t,n={}){const{window:r=cv,...s}=n;let i;const o=dv(()=>r&&"MutationObserver"in r),a=()=>{i&&(i.disconnect(),i=void 0)},c=Ae(()=>{const d=Gi(e),m=av(d).map(uv).filter(sv);return new Set(m)}),l=Qt(()=>c.value,d=>{a(),o.value&&d.size&&(i=new MutationObserver(t),d.forEach(m=>i.observe(m,s)))},{immediate:!0,flush:"post"}),u=()=>i?.takeRecords(),f=()=>{l(),a()};return Nf(f),{isSupported:o,stop:f,takeRecords:u}}function pv(e=null,t={}){var n,r,s;const{document:i=lv,restoreOnUnmount:o=f=>f}=t,a=(n=i?.title)!=null?n:"",c=ov((r=e??i?.title)!=null?r:null),l=!!(e&&typeof e=="function");function u(f){if(!("titleTemplate"in t))return f;const d=t.titleTemplate||"%s";return typeof d=="function"?d(f):Gi(d).replace(/%s/g,f)}return Qt(c,(f,d)=>{f!==d&&i&&(i.title=u(f??""))},{immediate:!0}),t.observe&&!t.titleTemplate&&i&&!l&&hv((s=i.head)==null?void 0:s.querySelector("title"),()=>{i&&i.title!==c.value&&(c.value=u(i.title))},{childList:!0}),Nf(()=>{if(o){const f=o(a,c.value||"");f!=null&&i&&(i.title=f)}}),c}const mv={},gv={__name:"App",setup(e){return pv(mv.appName),(t,n)=>{const r=Wd("router-view");return vh(),Sh(r)}}},ki=ap(gv);ki.use(up());jg(Eb,async e=>{console.info("User Auth State Changed:",e?e.uid:"No User");const t=_f();e?await t.setUserUID(e.uid):t.clearUser(),await t.init(),ki.use(xf),ki.mount("#app")});export{Ah as a,El as b,_v as c,Le as d,Ft as e,bv as f,yv as g,vh as o,Wd as r,wv as v,Pd as w};
