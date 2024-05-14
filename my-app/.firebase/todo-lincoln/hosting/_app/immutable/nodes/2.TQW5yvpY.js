import{s as rd,d as O,n as Bn,A as id,r as Kc}from"../chunks/scheduler.BFCLGYpV.js";import{S as sd,i as od,d as we,v as ad,e as B,s as Pt,c as j,f as X,A as zt,j as St,h as q,r as kt,q as A,k as qe,l as C,B as Bt,C as ua,D as Ge,E as We,b as Qe,g as Xe,m as ps,F as ha,G as cd,H as da}from"../chunks/index.3Yk8ZqK3.js";const fa={apiKey:"AIzaSyDVBBTFrSdbPkUvoSZKyGcJGRuLkUzQNE8",authDomain:"todo-lincoln.firebaseapp.com",projectId:"todo-lincoln",storageBucket:"todo-lincoln.appspot.com",messagingSenderId:"129836527279",appId:"1:129836527279:web:6eebe08ee1bc343bb46e5a"};var pa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},ld=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(e[u],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Qc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ld(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const l=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new ud;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ud extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hd=function(n){const t=Qc(n);return Xc.encodeByteArray(t,!0)},jr=function(n){return hd(n).replace(/\./g,"")},Yc=function(n){try{return Xc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function dd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fd=()=>dd().__FIREBASE_DEFAULTS__,pd=()=>{if(typeof process>"u"||typeof pa>"u")return;const n=pa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},md=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Yc(n[1]);return t&&JSON.parse(t)},li=()=>{try{return fd()||pd()||md()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jc=n=>{var t,e;return(e=(t=li())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},gd=n=>{const t=Jc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Zc=()=>{var n;return(n=li())===null||n===void 0?void 0:n.config},tl=n=>{var t;return(t=li())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function yd(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jr(JSON.stringify(e)),jr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Ed(){var n;const t=(n=li())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Td(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Id(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wd(){const n=gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ad(){return!Ed()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rd(){try{return typeof indexedDB=="object"}catch{return!1}}function Pd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="FirebaseError";class ue extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Sd,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Cd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ue(i,a,r)}}function Cd(n,t){return n.replace(bd,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const bd=/\{\$([^}]+)}/g;function kd(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function qr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(ma(s)&&ma(o)){if(!qr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ma(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Dd(n,t){const e=new Vd(n,t);return e.subscribe.bind(e)}class Vd{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Nd(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Ki),i.error===void 0&&(i.error=Ki),i.complete===void 0&&(i.complete=Ki);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nd(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Ki(){}/**
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
 */function at(n){return n&&n._delegate?n._delegate:n}class Me{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new _d;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ld(t))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Se){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Se){return this.instances.has(t)}getOptions(t=Se){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Md(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Se){return this.component?this.component.multipleInstances?t:Se:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Md(n){return n===Se?void 0:n}function Ld(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Od(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Fd={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Ud=F.INFO,Bd={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},jd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Bd[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Js{constructor(t){this.name=t,this._logLevel=Ud,this._logHandler=jd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const qd=(n,t)=>t.some(e=>n instanceof e);let ga,_a;function zd(){return ga||(ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $d(){return _a||(_a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const el=new WeakMap,ms=new WeakMap,nl=new WeakMap,Qi=new WeakMap,Zs=new WeakMap;function Hd(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(ge(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&el.set(e,n)}).catch(()=>{}),Zs.set(t,n),t}function Gd(n){if(ms.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ms.set(n,t)}let gs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ms.get(n);if(t==="objectStoreNames")return n.objectStoreNames||nl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ge(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Wd(n){gs=n(gs)}function Kd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Xi(this),t,...e);return nl.set(r,t.sort?t.sort():[t]),ge(r)}:$d().includes(n)?function(...t){return n.apply(Xi(this),t),ge(el.get(this))}:function(...t){return ge(n.apply(Xi(this),t))}}function Qd(n){return typeof n=="function"?Kd(n):(n instanceof IDBTransaction&&Gd(n),qd(n,zd())?new Proxy(n,gs):n)}function ge(n){if(n instanceof IDBRequest)return Hd(n);if(Qi.has(n))return Qi.get(n);const t=Qd(n);return t!==n&&(Qi.set(n,t),Zs.set(t,n)),t}const Xi=n=>Zs.get(n);function Xd(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=ge(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ge(o.result),c.oldVersion,c.newVersion,ge(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Yd=["get","getKey","getAll","getAllKeys","count"],Jd=["put","add","delete","clear"],Yi=new Map;function ya(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Yi.get(t))return Yi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Jd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yd.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),i&&c.done]))[0]};return Yi.set(t,s),s}Wd(n=>({...n,get:(t,e,r)=>ya(t,e)||n.get(t,e,r),has:(t,e)=>!!ya(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(tf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function tf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _s="@firebase/app",va="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new Js("@firebase/app"),ef="@firebase/app-compat",nf="@firebase/analytics-compat",rf="@firebase/analytics",sf="@firebase/app-check-compat",of="@firebase/app-check",af="@firebase/auth",cf="@firebase/auth-compat",lf="@firebase/database",uf="@firebase/database-compat",hf="@firebase/functions",df="@firebase/functions-compat",ff="@firebase/installations",pf="@firebase/installations-compat",mf="@firebase/messaging",gf="@firebase/messaging-compat",_f="@firebase/performance",yf="@firebase/performance-compat",vf="@firebase/remote-config",Ef="@firebase/remote-config-compat",Tf="@firebase/storage",If="@firebase/storage-compat",wf="@firebase/firestore",Af="@firebase/firestore-compat",Rf="firebase",Pf="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]",Sf={[_s]:"fire-core",[ef]:"fire-core-compat",[rf]:"fire-analytics",[nf]:"fire-analytics-compat",[of]:"fire-app-check",[sf]:"fire-app-check-compat",[af]:"fire-auth",[cf]:"fire-auth-compat",[lf]:"fire-rtdb",[uf]:"fire-rtdb-compat",[hf]:"fire-fn",[df]:"fire-fn-compat",[ff]:"fire-iid",[pf]:"fire-iid-compat",[mf]:"fire-fcm",[gf]:"fire-fcm-compat",[_f]:"fire-perf",[yf]:"fire-perf-compat",[vf]:"fire-rc",[Ef]:"fire-rc-compat",[Tf]:"fire-gcs",[If]:"fire-gcs-compat",[wf]:"fire-fst",[Af]:"fire-fst-compat","fire-js":"fire-js",[Rf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Map,Cf=new Map,vs=new Map;function Ea(n,t){try{n.container.addComponent(t)}catch(e){Le.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function cn(n){const t=n.name;if(vs.has(t))return Le.debug(`There were multiple attempts to register component ${t}.`),!1;vs.set(t,n);for(const e of zr.values())Ea(e,n);for(const e of Cf.values())Ea(e,n);return!0}function to(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function te(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_e=new rr("app","Firebase",bf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _e.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=Pf;function Es(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ys,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw _e.create("bad-app-name",{appName:String(i)});if(e||(e=Zc()),!e)throw _e.create("no-options");const s=zr.get(i);if(s){if(qr(e,s.options)&&qr(r,s.config))return s;throw _e.create("duplicate-app",{appName:i})}const o=new xd(i);for(const c of vs.values())o.addComponent(c);const a=new kf(e,r,o);return zr.set(i,a),a}function rl(n=ys){const t=zr.get(n);if(!t&&n===ys&&Zc())return Es();if(!t)throw _e.create("no-app",{appName:n});return t}function ye(n,t,e){var r;let i=(r=Sf[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Le.warn(a.join(" "));return}cn(new Me(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Df="firebase-heartbeat-database",Vf=1,jn="firebase-heartbeat-store";let Ji=null;function il(){return Ji||(Ji=Xd(Df,Vf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(jn)}catch(e){console.warn(e)}}}}).catch(n=>{throw _e.create("idb-open",{originalErrorMessage:n.message})})),Ji}async function Nf(n){try{const e=(await il()).transaction(jn),r=await e.objectStore(jn).get(sl(n));return await e.done,r}catch(t){if(t instanceof ue)Le.warn(t.message);else{const e=_e.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Le.warn(e.message)}}}async function Ta(n,t){try{const r=(await il()).transaction(jn,"readwrite");await r.objectStore(jn).put(t,sl(n)),await r.done}catch(e){if(e instanceof ue)Le.warn(e.message);else{const r=_e.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Le.warn(r.message)}}}function sl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Of=1024,Mf=30*24*60*60*1e3;class Lf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ff(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ia();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Mf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ia(),{heartbeatsToSend:r,unsentEntries:i}=xf(this._heartbeatsCache.heartbeats),s=jr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ia(){return new Date().toISOString().substring(0,10)}function xf(n,t=Of){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wa(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),wa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ff{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rd()?Pd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Nf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function wa(n){return jr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n){cn(new Me("platform-logger",t=>new Zd(t),"PRIVATE")),cn(new Me("heartbeat",t=>new Lf(t),"PRIVATE")),ye(_s,va,n),ye(_s,va,"esm2017"),ye("fire-js","")}Uf("");var Bf="firebase",jf="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye(Bf,jf,"app");var qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,eo=eo||{},D=qf||self;function ui(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function hi(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function zf(n){return Object.prototype.hasOwnProperty.call(n,Zi)&&n[Zi]||(n[Zi]=++$f)}var Zi="closure_uid_"+(1e9*Math.random()>>>0),$f=0;function Hf(n,t,e){return n.call.apply(n.bind,arguments)}function Gf(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function It(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=Hf:It=Gf,It.apply(null,arguments)}function wr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ut(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ae(){this.s=this.s,this.o=this.o}var Wf=0;Ae.prototype.s=!1;Ae.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Wf!=0)&&zf(this)};Ae.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ol=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function no(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Aa(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(ui(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function wt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var Kf=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};D.addEventListener("test",e,t),D.removeEventListener("test",e,t)}catch{}return n}();function qn(n){return/^[\s\xa0]*$/.test(n)}function di(){var n=D.navigator;return n&&(n=n.userAgent)?n:""}function jt(n){return di().indexOf(n)!=-1}function ro(n){return ro[" "](n),n}ro[" "]=function(){};function Qf(n,t){var e=qp;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var Xf=jt("Opera"),ln=jt("Trident")||jt("MSIE"),al=jt("Edge"),Ts=al||ln,cl=jt("Gecko")&&!(di().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),Yf=di().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function ll(){var n=D.document;return n?n.documentMode:void 0}var Is;t:{var ts="",es=function(){var n=di();if(cl)return/rv:([^\);]+)(\)|;)/.exec(n);if(al)return/Edge\/([\d\.]+)/.exec(n);if(ln)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Yf)return/WebKit\/(\S+)/.exec(n);if(Xf)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(es&&(ts=es?es[1]:""),ln){var ns=ll();if(ns!=null&&ns>parseFloat(ts)){Is=String(ns);break t}}Is=ts}var ws;if(D.document&&ln){var Ra=ll();ws=Ra||parseInt(Is,10)||void 0}else ws=void 0;var Jf=ws;function zn(n,t){if(wt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(cl){t:{try{ro(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Zf[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&zn.$.h.call(this)}}ut(zn,wt);var Zf={2:"touch",3:"pen",4:"mouse"};zn.prototype.h=function(){zn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var fi="closure_listenable_"+(1e6*Math.random()|0),tp=0;function ep(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++tp,this.fa=this.ia=!1}function pi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function io(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function np(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function ul(n){const t={};for(const e in n)t[e]=n[e];return t}const Pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hl(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Pa.length;s++)e=Pa[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function mi(n){this.src=n,this.g={},this.h=0}mi.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Rs(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new ep(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function As(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=ol(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(pi(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Rs(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var so="closure_lm_"+(1e6*Math.random()|0),rs={};function dl(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)dl(n,t[s],e,r,i);return null}return e=ml(e),n&&n[fi]?n.O(t,e,hi(r)?!!r.capture:!!r,i):rp(n,t,e,!1,r,i)}function rp(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=hi(i)?!!i.capture:!!i,a=ao(n);if(a||(n[so]=a=new mi(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=ip(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Kf||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(pl(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function ip(){function n(e){return t.call(n.src,n.listener,e)}const t=sp;return n}function fl(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)fl(n,t[s],e,r,i);else r=hi(r)?!!r.capture:!!r,e=ml(e),n&&n[fi]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Rs(s,e,r,i),-1<e&&(pi(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=ao(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Rs(t,e,r,i)),(e=-1<n?t[n]:null)&&oo(e))}function oo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[fi])As(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(pl(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=ao(t))?(As(e,n),e.h==0&&(e.src=null,t[so]=null)):pi(n)}}}function pl(n){return n in rs?rs[n]:rs[n]="on"+n}function sp(n,t){if(n.fa)n=!0;else{t=new zn(t,this);var e=n.listener,r=n.la||n.src;n.ia&&oo(n),n=e.call(r,t)}return n}function ao(n){return n=n[so],n instanceof mi?n:null}var is="__closure_events_fn_"+(1e9*Math.random()>>>0);function ml(n){return typeof n=="function"?n:(n[is]||(n[is]=function(t){return n.handleEvent(t)}),n[is])}function lt(){Ae.call(this),this.i=new mi(this),this.S=this,this.J=null}ut(lt,Ae);lt.prototype[fi]=!0;lt.prototype.removeEventListener=function(n,t,e,r){fl(this,n,t,e,r)};function pt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new wt(t,n);else if(t instanceof wt)t.target=t.target||n;else{var i=t;t=new wt(r,n),hl(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Ar(o,r,!0,t)&&i}if(o=t.g=n,i=Ar(o,r,!0,t)&&i,i=Ar(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Ar(o,r,!1,t)&&i}lt.prototype.N=function(){if(lt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)pi(e[r]);delete n.g[t],n.h--}}this.J=null};lt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};lt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Ar(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&As(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var co=D.JSON.stringify;class op{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ap(){var n=lo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class cp{constructor(){this.h=this.g=null}add(t,e){const r=gl.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var gl=new op(()=>new lp,n=>n.reset());class lp{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function up(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function hp(n){D.setTimeout(()=>{throw n},0)}let $n,Hn=!1,lo=new cp,_l=()=>{const n=D.Promise.resolve(void 0);$n=()=>{n.then(dp)}};var dp=()=>{for(var n;n=ap();){try{n.h.call(n.g)}catch(e){hp(e)}var t=gl;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Hn=!1};function gi(n,t){lt.call(this),this.h=n||1,this.g=t||D,this.j=It(this.qb,this),this.l=Date.now()}ut(gi,lt);y=gi.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(uo(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function uo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}y.N=function(){gi.$.N.call(this),uo(this),delete this.g};function ho(n,t,e){if(typeof n=="function")e&&(n=It(n,e));else if(n&&typeof n.handleEvent=="function")n=It(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(n,t||0)}function yl(n){n.g=ho(()=>{n.g=null,n.i&&(n.i=!1,yl(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class fp extends Ae{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:yl(this)}N(){super.N(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(n){Ae.call(this),this.h=n,this.g={}}ut(Gn,Ae);var Sa=[];function vl(n,t,e,r){Array.isArray(e)||(e&&(Sa[0]=e.toString()),e=Sa);for(var i=0;i<e.length;i++){var s=dl(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function El(n){io(n.g,function(t,e){this.g.hasOwnProperty(e)&&oo(t)},n),n.g={}}Gn.prototype.N=function(){Gn.$.N.call(this),El(this)};Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _i(){this.g=!0}_i.prototype.Ea=function(){this.g=!1};function pp(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function mp(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function tn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+_p(n,e)+(r?" "+r:"")})}function gp(n,t){n.info(function(){return"TIMEOUT: "+t})}_i.prototype.info=function(){};function _p(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return co(e)}catch{return t}}var ze={},Ca=null;function yi(){return Ca=Ca||new lt}ze.Ta="serverreachability";function Tl(n){wt.call(this,ze.Ta,n)}ut(Tl,wt);function Wn(n){const t=yi();pt(t,new Tl(t))}ze.STAT_EVENT="statevent";function Il(n,t){wt.call(this,ze.STAT_EVENT,n),this.stat=t}ut(Il,wt);function Rt(n){const t=yi();pt(t,new Il(t,n))}ze.Ua="timingevent";function wl(n,t){wt.call(this,ze.Ua,n),this.size=t}ut(wl,wt);function sr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){n()},t)}var vi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Al={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fo(){}fo.prototype.h=null;function ba(n){return n.h||(n.h=n.i())}function Rl(){}var or={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function po(){wt.call(this,"d")}ut(po,wt);function mo(){wt.call(this,"c")}ut(mo,wt);var Ps;function Ei(){}ut(Ei,fo);Ei.prototype.g=function(){return new XMLHttpRequest};Ei.prototype.i=function(){return{}};Ps=new Ei;function ar(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Gn(this),this.P=yp,n=Ts?125:void 0,this.V=new gi(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Pl}function Pl(){this.i=null,this.g="",this.h=!1}var yp=45e3,Sl={},Ss={};y=ar.prototype;y.setTimeout=function(n){this.P=n};function Cs(n,t,e){n.L=1,n.A=Ii(oe(t)),n.u=e,n.S=!0,Cl(n,null)}function Cl(n,t){n.G=Date.now(),cr(n),n.B=oe(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Ll(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Pl,n.g=ru(n.l,e?t:null,!n.u),0<n.O&&(n.M=new fp(It(n.Pa,n,n.g),n.O)),vl(n.U,n.g,"readystatechange",n.nb),t=n.I?ul(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Wn(),pp(n.j,n.v,n.B,n.m,n.W,n.u)}y.nb=function(n){n=n.target;const t=this.M;t&&$t(n)==3?t.l():this.Pa(n)};y.Pa=function(n){try{if(n==this.g)t:{const u=$t(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ts||this.g&&(this.h.h||this.g.ja()||Na(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Wn(3):Wn(2)),Ti(this);var e=this.g.da();this.ca=e;e:if(bl(this)){var r=Na(this.g);n="";var i=r.length,s=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),On(this);var o="";break e}this.h.i=new D.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,mp(this.j,this.v,this.B,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qn(a)){var l=a;break e}}l=null}if(e=l)tn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bs(this,e);else{this.i=!1,this.s=3,Rt(12),Ce(this),On(this);break t}}this.S?(kl(this,u,o),Ts&&this.i&&u==3&&(vl(this.U,this.V,"tick",this.mb),this.V.start())):(tn(this.j,this.m,o,null),bs(this,o)),u==4&&Ce(this),this.i&&!this.J&&(u==4?Zl(this.l,this):(this.i=!1,cr(this)))}else Up(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Ce(this),On(this)}}}catch{}finally{}};function bl(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function kl(n,t,e){let r=!0,i;for(;!n.J&&n.o<e.length;)if(i=vp(n,e),i==Ss){t==4&&(n.s=4,Rt(14),r=!1),tn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Sl){n.s=4,Rt(15),tn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else tn(n.j,n.m,i,null),bs(n,i);bl(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,Rt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),To(t),t.M=!0,Rt(11))):(tn(n.j,n.m,e,"[Invalid Chunked Response]"),Ce(n),On(n))}y.mb=function(){if(this.g){var n=$t(this.g),t=this.g.ja();this.o<t.length&&(Ti(this),kl(this,n,t),this.i&&n!=4&&cr(this))}};function vp(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?Ss:(e=Number(t.substring(e,r)),isNaN(e)?Sl:(r+=1,r+e>t.length?Ss:(t=t.slice(r,r+e),n.o=r+e,t)))}y.cancel=function(){this.J=!0,Ce(this)};function cr(n){n.Y=Date.now()+n.P,Dl(n,n.P)}function Dl(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=sr(It(n.lb,n),t)}function Ti(n){n.C&&(D.clearTimeout(n.C),n.C=null)}y.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(gp(this.j,this.B),this.L!=2&&(Wn(),Rt(17)),Ce(this),this.s=2,On(this)):Dl(this,this.Y-n)};function On(n){n.l.H==0||n.J||Zl(n.l,n)}function Ce(n){Ti(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,uo(n.V),El(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function bs(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||ks(e.i,n))){if(!n.K&&ks(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Gr(e),Ri(e);else break t;Eo(e),Rt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=sr(It(e.ib,e),6e3));if(1>=Ul(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else be(e,11)}else if((n.K||e.g==n)&&Gr(e),!qn(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(e.V=l[0],l=l[1],e.H==2)if(l[0]=="c"){e.K=l[1],e.pa=l[2];const u=l[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=l[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(go(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Q(r.I,r.F,_))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=nu(r,r.J?r.pa:null,r.Y),o.K){Bl(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ti(a),cr(a)),r.g=o}else Yl(r);0<e.j.length&&Pi(e)}else l[0]!="stop"&&l[0]!="close"||be(e,7);else e.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?be(e,7):vo(e):l[0]!="noop"&&e.h&&e.h.Aa(l),e.A=0)}}Wn(4)}catch{}}function Ep(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ui(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Tp(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ui(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Vl(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(ui(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Tp(n),r=Ep(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ip(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ve(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ve){this.h=n.h,$r(this,n.j),this.s=n.s,this.g=n.g,Hr(this,n.m),this.l=n.l;var t=n.i,e=new Kn;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ka(this,e),this.o=n.o}else n&&(t=String(n).match(Nl))?(this.h=!1,$r(this,t[1]||"",!0),this.s=bn(t[2]||""),this.g=bn(t[3]||"",!0),Hr(this,t[4]),this.l=bn(t[5]||"",!0),ka(this,t[6]||"",!0),this.o=bn(t[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}Ve.prototype.toString=function(){var n=[],t=this.j;t&&n.push(kn(t,Da,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(kn(t,Da,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(kn(e,e.charAt(0)=="/"?Rp:Ap,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",kn(e,Sp)),n.join("")};function oe(n){return new Ve(n)}function $r(n,t,e){n.j=e?bn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Hr(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ka(n,t,e){t instanceof Kn?(n.i=t,Cp(n.i,n.h)):(e||(t=kn(t,Pp)),n.i=new Kn(t,n.h))}function Q(n,t,e){n.i.set(t,e)}function Ii(n){return Q(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function bn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function kn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,wp),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function wp(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Da=/[#\/\?@]/g,Ap=/[#\?:]/g,Rp=/[#\?]/g,Pp=/[#\?@]/g,Sp=/#/g;function Kn(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Re(n){n.g||(n.g=new Map,n.h=0,n.i&&Ip(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}y=Kn.prototype;y.add=function(n,t){Re(this),this.i=null,n=vn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Ol(n,t){Re(n),t=vn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Ml(n,t){return Re(n),t=vn(n,t),n.g.has(t)}y.forEach=function(n,t){Re(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};y.ta=function(){Re(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};y.Z=function(n){Re(this);let t=[];if(typeof n=="string")Ml(this,n)&&(t=t.concat(this.g.get(vn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};y.set=function(n,t){return Re(this),this.i=null,n=vn(this,n),Ml(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};y.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Ll(n,t,e){Ol(n,t),0<e.length&&(n.i=null,n.g.set(vn(n,t),no(e)),n.h+=e.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function vn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Cp(n,t){t&&!n.j&&(Re(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Ol(this,r),Ll(this,i,e))},n)),n.j=t}var bp=class{constructor(n,t){this.g=n,this.map=t}};function xl(n){this.l=n||kp,D.PerformanceNavigationTiming?(n=D.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(D.g&&D.g.Ka&&D.g.Ka()&&D.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kp=10;function Fl(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Ul(n){return n.h?1:n.g?n.g.size:0}function ks(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function go(n,t){n.g?n.g.add(t):n.h=t}function Bl(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}xl.prototype.cancel=function(){if(this.i=jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function jl(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return no(n.i)}var Dp=class{stringify(n){return D.JSON.stringify(n,void 0)}parse(n){return D.JSON.parse(n,void 0)}};function Vp(){this.g=new Dp}function Np(n,t,e){const r=e||"";try{Vl(n,function(i,s){let o=i;hi(i)&&(o=co(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Op(n,t){const e=new _i;if(D.Image){const r=new Image;r.onload=wr(Rr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=wr(Rr,e,r,"TestLoadImage: error",!1,t),r.onabort=wr(Rr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=wr(Rr,e,r,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Rr(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function lr(n){this.l=n.ec||null,this.j=n.ob||!1}ut(lr,fo);lr.prototype.g=function(){return new wi(this.l,this.j)};lr.prototype.i=function(n){return function(){return n}}({});function wi(n,t){lt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=_o,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(wi,lt);var _o=0;y=wi.prototype;y.open=function(n,t){if(this.readyState!=_o)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,Qn(this)};y.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||D).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=_o};y.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ql(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function ql(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}y.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?ur(this):Qn(this),this.readyState==3&&ql(this)}};y.Za=function(n){this.g&&(this.response=this.responseText=n,ur(this))};y.Ya=function(n){this.g&&(this.response=n,ur(this))};y.ka=function(){this.g&&ur(this)};function ur(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Qn(n)}y.setRequestHeader=function(n,t){this.v.append(n,t)};y.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function Qn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Mp=D.JSON.parse;function Z(n){lt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=zl,this.L=this.M=!1}ut(Z,lt);var zl="",Lp=/^https?$/i,xp=["POST","PUT"];y=Z.prototype;y.Oa=function(n){this.M=n};y.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ps.g(),this.C=this.u?ba(this.u):ba(Ps),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Va(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=D.FormData&&n instanceof D.FormData,!(0<=ol(xp,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Gl(this),0<this.B&&((this.L=Fp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=ho(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Va(this,s)}};function Fp(n){return ln&&typeof n.timeout=="number"&&n.ontimeout!==void 0}y.ua=function(){typeof eo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function Va(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,$l(n),Ai(n)}function $l(n){n.F||(n.F=!0,pt(n,"complete"),pt(n,"error"))}y.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,pt(this,"complete"),pt(this,"abort"),Ai(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ai(this,!0)),Z.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Hl(this):this.kb())};y.kb=function(){Hl(this)};function Hl(n){if(n.h&&typeof eo<"u"&&(!n.C[1]||$t(n)!=4||n.da()!=2)){if(n.v&&$t(n)==4)ho(n.La,0,n);else if(pt(n,"readystatechange"),$t(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Nl)[1]||null;!i&&D.self&&D.self.location&&(i=D.self.location.protocol.slice(0,-1)),r=!Lp.test(i?i.toLowerCase():"")}e=r}if(e)pt(n,"complete"),pt(n,"success");else{n.m=6;try{var s=2<$t(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",$l(n)}}finally{Ai(n)}}}}function Ai(n,t){if(n.g){Gl(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||pt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Gl(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(D.clearTimeout(n.A),n.A=null)}y.isActive=function(){return!!this.g};function $t(n){return n.g?n.g.readyState:0}y.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Mp(t)}};function Na(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case zl:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Up(n){const t={};n=(n.g&&2<=$t(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(qn(n[r]))continue;var e=up(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}np(t,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wl(n){let t="";return io(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function yo(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Wl(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):Q(n,t,e))}function Pn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Kl(n){this.Ga=0,this.j=[],this.l=new _i,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Pn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Pn("baseRetryDelayMs",5e3,n),this.hb=Pn("retryDelaySeedMs",1e4,n),this.eb=Pn("forwardChannelMaxRetries",2,n),this.xa=Pn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new xl(n&&n.concurrentRequestLimit),this.Ja=new Vp,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Kl.prototype;y.ra=8;y.H=1;function vo(n){if(Ql(n),n.H==3){var t=n.W++,e=oe(n.I);if(Q(e,"SID",n.K),Q(e,"RID",t),Q(e,"TYPE","terminate"),hr(n,e),t=new ar(n,n.l,t),t.L=2,t.A=Ii(oe(e)),e=!1,D.navigator&&D.navigator.sendBeacon)try{e=D.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&D.Image&&(new Image().src=t.A,e=!0),e||(t.g=ru(t.l,null),t.g.ha(t.A)),t.G=Date.now(),cr(t)}eu(n)}function Ri(n){n.g&&(To(n),n.g.cancel(),n.g=null)}function Ql(n){Ri(n),n.u&&(D.clearTimeout(n.u),n.u=null),Gr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&D.clearTimeout(n.m),n.m=null)}function Pi(n){if(!Fl(n.i)&&!n.m){n.m=!0;var t=n.Na;$n||_l(),Hn||($n(),Hn=!0),lo.add(t,n),n.C=0}}function Bp(n,t){return Ul(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=sr(It(n.Na,n,t),tu(n,n.C)),n.C++,!0)}y.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new ar(this,this.l,n);let s=this.s;if(this.U&&(s?(s=ul(s),hl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Xl(this,i,t),e=oe(this.I),Q(e,"RID",n),Q(e,"CVER",22),this.F&&Q(e,"X-HTTP-Session-Id",this.F),hr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Wl(s)))+"&"+t:this.o&&yo(e,this.o,s)),go(this.i,i),this.bb&&Q(e,"TYPE","init"),this.P?(Q(e,"$req",t),Q(e,"SID","null"),i.aa=!0,Cs(i,e,null)):Cs(i,e,t),this.H=2}}else this.H==3&&(n?Oa(this,n):this.j.length==0||Fl(this.i)||Oa(this))};function Oa(n,t){var e;t?e=t.m:e=n.W++;const r=oe(n.I);Q(r,"SID",n.K),Q(r,"RID",e),Q(r,"AID",n.V),hr(n,r),n.o&&n.s&&yo(r,n.o,n.s),e=new ar(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Xl(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),go(n.i,e),Cs(e,r,t)}function hr(n,t){n.na&&io(n.na,function(e,r){Q(t,r,e)}),n.h&&Vl({},function(e,r){Q(t,r,e)})}function Xl(n,t,e){e=Math.min(n.j.length,e);var r=n.h?It(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<e;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{Np(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Yl(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;$n||_l(),Hn||($n(),Hn=!0),lo.add(t,n),n.A=0}}function Eo(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=sr(It(n.Ma,n),tu(n,n.A)),n.A++,!0)}y.Ma=function(){if(this.u=null,Jl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=sr(It(this.jb,this),n)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Rt(10),Ri(this),Jl(this))};function To(n){n.B!=null&&(D.clearTimeout(n.B),n.B=null)}function Jl(n){n.g=new ar(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=oe(n.wa);Q(t,"RID","rpc"),Q(t,"SID",n.K),Q(t,"AID",n.V),Q(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&Q(t,"TO",n.qa),Q(t,"TYPE","xmlhttp"),hr(n,t),n.o&&n.s&&yo(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=Ii(oe(t)),e.u=null,e.S=!0,Cl(e,n)}y.ib=function(){this.v!=null&&(this.v=null,Ri(this),Eo(this),Rt(19))};function Gr(n){n.v!=null&&(D.clearTimeout(n.v),n.v=null)}function Zl(n,t){var e=null;if(n.g==t){Gr(n),To(n),n.g=null;var r=2}else if(ks(n.i,t))e=t.F,Bl(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var i=n.C;r=yi(),pt(r,new wl(r,e)),Pi(n)}else Yl(n);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Bp(n,t)||r==2&&Eo(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:be(n,5);break;case 4:be(n,10);break;case 3:be(n,6);break;default:be(n,2)}}}function tu(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function be(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=It(n.pb,n);e||(e=new Ve("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||$r(e,"https"),Ii(e)),Op(e.toString(),r)}else Rt(2);n.H=0,n.h&&n.h.za(t),eu(n),Ql(n)}y.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Rt(2)):(this.l.info("Failed to ping google.com"),Rt(1))};function eu(n){if(n.H=0,n.ma=[],n.h){const t=jl(n.i);(t.length!=0||n.j.length!=0)&&(Aa(n.ma,t),Aa(n.ma,n.j),n.i.i.length=0,no(n.j),n.j.length=0),n.h.ya()}}function nu(n,t,e){var r=e instanceof Ve?oe(e):new Ve(e);if(r.g!="")t&&(r.g=t+"."+r.g),Hr(r,r.m);else{var i=D.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ve(null);r&&$r(s,r),t&&(s.g=t),i&&Hr(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&Q(r,e,t),Q(r,"VER",n.ra),hr(n,r),r}function ru(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new Z(new lr({ob:e})):new Z(n.va),t.Oa(n.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function iu(){}y=iu.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function Wr(){if(ln&&!(10<=Number(Jf)))throw Error("Environmental error: no available transport.")}Wr.prototype.g=function(n,t){return new Nt(n,t)};function Nt(n,t){lt.call(this),this.g=new Kl(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!qn(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!qn(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new En(this)}ut(Nt,lt);Nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Rt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=nu(n,null,n.Y),Pi(n)};Nt.prototype.close=function(){vo(this.g)};Nt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=co(n),n=e);t.j.push(new bp(t.fb++,n)),t.H==3&&Pi(t)};Nt.prototype.N=function(){this.g.h=null,delete this.j,vo(this.g),delete this.g,Nt.$.N.call(this)};function su(n){po.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}ut(su,po);function ou(){mo.call(this),this.status=1}ut(ou,mo);function En(n){this.g=n}ut(En,iu);En.prototype.Ba=function(){pt(this.g,"a")};En.prototype.Aa=function(n){pt(this.g,new su(n))};En.prototype.za=function(n){pt(this.g,new ou)};En.prototype.ya=function(){pt(this.g,"b")};function jp(){this.blockSize=-1}function Ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ut(Ft,jp);Ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ss(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Ft.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)ss(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){ss(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){ss(this,r),i=0;break}}this.h=i,this.i+=t};Ft.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function H(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var qp={};function Io(n){return-128<=n&&128>n?Qf(n,function(t){return new H([t|0],0>t?-1:0)}):new H([n|0],0>n?-1:0)}function Ht(n){if(isNaN(n)||!isFinite(n))return en;if(0>n)return dt(Ht(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Ds;return new H(t,0)}function au(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return dt(au(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Ht(Math.pow(t,8)),r=en,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Ht(Math.pow(t,s)),r=r.R(s).add(Ht(o))):(r=r.R(e),r=r.add(Ht(o)))}return r}var Ds=4294967296,en=Io(0),Vs=Io(1),Ma=Io(16777216);y=H.prototype;y.ea=function(){if(Lt(this))return-dt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Ds+r)*t,t*=Ds}return n};y.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ee(this))return"0";if(Lt(this))return"-"+dt(this).toString(n);for(var t=Ht(Math.pow(n,6)),e=this,r="";;){var i=Qr(e,t).g;e=Kr(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,ee(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};y.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ee(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Lt(n){return n.h==-1}y.X=function(n){return n=Kr(this,n),Lt(n)?-1:ee(n)?0:1};function dt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new H(e,~n.h).add(Vs)}y.abs=function(){return Lt(this)?dt(this):this};y.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new H(e,e[e.length-1]&-2147483648?-1:0)};function Kr(n,t){return n.add(dt(t))}y.R=function(n){if(ee(this)||ee(n))return en;if(Lt(this))return Lt(n)?dt(this).R(dt(n)):dt(dt(this).R(n));if(Lt(n))return dt(this.R(dt(n)));if(0>this.X(Ma)&&0>n.X(Ma))return Ht(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;e[2*r+2*i]+=o*c,Pr(e,2*r+2*i),e[2*r+2*i+1]+=s*c,Pr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Pr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Pr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new H(e,0)};function Pr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Sn(n,t){this.g=n,this.h=t}function Qr(n,t){if(ee(t))throw Error("division by zero");if(ee(n))return new Sn(en,en);if(Lt(n))return t=Qr(dt(n),t),new Sn(dt(t.g),dt(t.h));if(Lt(t))return t=Qr(n,dt(t)),new Sn(dt(t.g),t.h);if(30<n.g.length){if(Lt(n)||Lt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Vs,r=t;0>=r.X(n);)e=La(e),r=La(r);var i=Ke(e,1),s=Ke(r,1);for(r=Ke(r,2),e=Ke(e,2);!ee(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=Ke(r,1),e=Ke(e,1)}return t=Kr(n,i.R(t)),new Sn(i,t)}for(i=en;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ht(e),o=s.R(t);Lt(o)||0<o.X(n);)e-=r,s=Ht(e),o=s.R(t);ee(s)&&(s=Vs),i=i.add(s),n=Kr(n,o)}return new Sn(i,n)}y.gb=function(n){return Qr(this,n).h};y.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new H(e,this.h&n.h)};y.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new H(e,this.h|n.h)};y.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new H(e,this.h^n.h)};function La(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new H(e,n.h)}function Ke(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new H(i,n.h)}Wr.prototype.createWebChannel=Wr.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;vi.NO_ERROR=0;vi.TIMEOUT=8;vi.HTTP_ERROR=6;Al.COMPLETE="complete";Rl.EventType=or;or.OPEN="a";or.CLOSE="b";or.ERROR="c";or.MESSAGE="d";lt.prototype.listen=lt.prototype.O;Z.prototype.listenOnce=Z.prototype.P;Z.prototype.getLastError=Z.prototype.Sa;Z.prototype.getLastErrorCode=Z.prototype.Ia;Z.prototype.getStatus=Z.prototype.da;Z.prototype.getResponseJson=Z.prototype.Wa;Z.prototype.getResponseText=Z.prototype.ja;Z.prototype.send=Z.prototype.ha;Z.prototype.setWithCredentials=Z.prototype.Oa;Ft.prototype.digest=Ft.prototype.l;Ft.prototype.reset=Ft.prototype.reset;Ft.prototype.update=Ft.prototype.j;H.prototype.add=H.prototype.add;H.prototype.multiply=H.prototype.R;H.prototype.modulo=H.prototype.gb;H.prototype.compare=H.prototype.X;H.prototype.toNumber=H.prototype.ea;H.prototype.toString=H.prototype.toString;H.prototype.getBits=H.prototype.D;H.fromNumber=Ht;H.fromString=au;var zp=function(){return new Wr},$p=function(){return yi()},os=vi,Hp=Al,Gp=ze,xa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Wp=lr,Sr=Rl,Kp=Z,Qp=Ft,nn=H;const Fa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new Js("@firebase/firestore");function Cn(){return xe.logLevel}function I(n,...t){if(xe.logLevel<=F.DEBUG){const e=t.map(wo);xe.debug(`Firestore (${Tn}): ${n}`,...e)}}function ae(n,...t){if(xe.logLevel<=F.ERROR){const e=t.map(wo);xe.error(`Firestore (${Tn}): ${n}`,...e)}}function un(n,...t){if(xe.logLevel<=F.WARN){const e=t.map(wo);xe.warn(`Firestore (${Tn}): ${n}`,...e)}}function wo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(n="Unexpected state"){const t=`FIRESTORE (${Tn}) INTERNAL ASSERTION FAILED: `+n;throw ae(t),new Error(t)}function K(n,t){n||k()}function N(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends ue{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Et.UNAUTHENTICATED))}shutdown(){}}class Yp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Jp{constructor(t){this.t=t,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let s=new Ne;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ne,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ne)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new cu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string"),new Et(t)}}class Zp{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tm{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Zp(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class em{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,I("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string"),this.R=e.token,new em(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=rm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function hn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new R(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new R(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new R(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new R(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.timestamp=t}static fromTimestamp(t){return new V(t)}static min(){return new V(new ot(0,0))}static max(){return new V(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e,r){e===void 0?e=0:e>t.length&&k(),r===void 0?r=t.length-e:r>t.length-e&&k(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Xn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends Xn{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new R(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const im=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Xn{construct(t,e,r){return new ft(t,e,r)}static isValidIdentifier(t){return im.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new R(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ft(e)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.path=t}static fromPath(t){return new S(Y.fromString(t))}static fromName(t){return new S(Y.fromString(t).popFirst(5))}static empty(){return new S(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new S(new Y(t.slice()))}}function sm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Ee(i,S.empty(),t)}function om(n){return new Ee(n.readTime,n.key,-1)}class Ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ee(V.min(),S.empty(),-1)}static max(){return new Ee(V.max(),S.empty(),-1)}}function am(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=S.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==cm)throw n;I("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof g?e:g.resolve(e)}catch(e){return g.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):g.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):g.reject(e)}static resolve(t){return new g((e,r)=>{e(t)})}static reject(t){return new g((e,r)=>{r(t)})}static waitFor(t){return new g((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},c=>r(c))}),o=!0,s===i&&e()})}static or(t){let e=g.resolve(!1);for(const r of t)e=e.next(i=>i?g.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;e(t[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,e){return new g((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function um(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function fr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ao{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ao.oe=-1;function Si(n){return n==null}function Xr(n){return n===0&&1/n==-1/0}function hm(n){return typeof n=="number"&&Number.isInteger(n)&&!Xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function $e(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function uu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cr(this.root,t,this.comparator,!0)}}class Cr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new ht(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const t=this.left.check();if(t!==this.right.check())throw k();return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(t,e,r,i,s){return this}insert(t,e,r){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ba(this.data.getIterator())}getIteratorFrom(t){return new Ba(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class Ba{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.fields=t,t.sort(ft.comparator)}static empty(){return new Dt([])}unionWith(t){let e=new mt(ft.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class hu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hu("Invalid base64 string: "+s):s}}(t);return new At(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new At(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const dm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Te(n){if(K(!!n),typeof n=="string"){let t=0;const e=dm.exec(n);if(K(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fe(n){return typeof n=="string"?At.fromBase64String(n):At.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Po(n){const t=n.mapValue.fields.__previous_value__;return Ro(t)?Po(t):t}function Yn(n){const t=Te(n.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t,e,r,i,s,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Jn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Jn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Jn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ue(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ro(n)?4:pm(n)?9007199254740991:10:k()}function Qt(n,t){if(n===t)return!0;const e=Ue(n);if(e!==Ue(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Yn(n).isEqual(Yn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Te(i.timestampValue),a=Te(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Fe(i.bytesValue).isEqual(Fe(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return et(i.geoPointValue.latitude)===et(s.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return et(i.integerValue)===et(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=et(i.doubleValue),a=et(s.doubleValue);return o===a?Xr(o)===Xr(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return hn(n.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ua(o)!==Ua(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Qt(o[c],a[c])))return!1;return!0}(n,t);default:return k()}}function Zn(n,t){return(n.values||[]).find(e=>Qt(e,t))!==void 0}function dn(n,t){if(n===t)return 0;const e=Ue(n),r=Ue(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=et(s.integerValue||s.doubleValue),c=et(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return ja(n.timestampValue,t.timestampValue);case 4:return ja(Yn(n),Yn(t));case 5:return z(n.stringValue,t.stringValue);case 6:return function(s,o){const a=Fe(s),c=Fe(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=z(a[l],c[l]);if(u!==0)return u}return z(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=z(et(s.latitude),et(o.latitude));return a!==0?a:z(et(s.longitude),et(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=dn(a[l],c[l]);if(u)return u}return z(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===br.mapValue&&o===br.mapValue)return 0;if(s===br.mapValue)return 1;if(o===br.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=z(c[h],u[h]);if(d!==0)return d;const f=dn(a[c[h]],l[u[h]]);if(f!==0)return f}return z(c.length,u.length)}(n.mapValue,t.mapValue);default:throw k()}}function ja(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=Te(n),r=Te(t),i=z(e.seconds,r.seconds);return i!==0?i:z(e.nanos,r.nanos)}function fn(n){return Ns(n)}function Ns(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return S.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Ns(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ns(e.fields[o])}`;return i+"}"}(n.mapValue):k()}function Os(n){return!!n&&"integerValue"in n}function So(n){return!!n&&"arrayValue"in n}function qa(n){return!!n&&"nullValue"in n}function za(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nr(n){return!!n&&"mapValue"in n}function Mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return $e(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Mn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Mn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function pm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Nr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mn(e)}setAll(t){let e=ft.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Mn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());Nr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Nr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){$e(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ct(Mn(this.value))}}function du(n){const t=[];return $e(n.fields,(e,r)=>{const i=new ft([e]);if(Nr(r)){const s=du(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Tt(t,0,V.min(),V.min(),V.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,i){return new Tt(t,1,e,V.min(),r,i,0)}static newNoDocument(t,e){return new Tt(t,2,e,V.min(),V.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,V.min(),V.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yr{constructor(t,e){this.position=t,this.inclusive=e}}function $a(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=S.comparator(S.fromName(o.referenceValue),e.key):r=dn(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ha(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Qt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Jr{constructor(t,e="asc"){this.field=t,this.dir=e}}function mm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class fu{}class st extends fu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new _m(t,e,r):e==="array-contains"?new Em(t,r):e==="in"?new Tm(t,r):e==="not-in"?new Im(t,r):e==="array-contains-any"?new wm(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ym(t,r):new vm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(dn(e,this.value)):e!==null&&Ue(this.value)===Ue(e)&&this.matchesComparison(dn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends fu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Xt(t,e)}matches(t){return pu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pu(n){return n.op==="and"}function mu(n){return gm(n)&&pu(n)}function gm(n){for(const t of n.filters)if(t instanceof Xt)return!1;return!0}function Ms(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+fn(n.value);if(mu(n))return n.filters.map(t=>Ms(t)).join(",");{const t=n.filters.map(e=>Ms(e)).join(",");return`${n.op}(${t})`}}function gu(n,t){return n instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Qt(r.value,i.value)}(n,t):n instanceof Xt?function(r,i){return i instanceof Xt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&gu(o,i.filters[a]),!0):!1}(n,t):void k()}function _u(n){return n instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${fn(e.value)}`}(n):n instanceof Xt?function(e){return e.op.toString()+" {"+e.getFilters().map(_u).join(" ,")+"}"}(n):"Filter"}class _m extends st{constructor(t,e,r){super(t,e,r),this.key=S.fromName(r.referenceValue)}matches(t){const e=S.comparator(t.key,this.key);return this.matchesComparison(e)}}class ym extends st{constructor(t,e){super(t,"in",e),this.keys=yu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vm extends st{constructor(t,e){super(t,"not-in",e),this.keys=yu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function yu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>S.fromName(r.referenceValue))}class Em extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return So(e)&&Zn(e.arrayValue,this.value)}}class Tm extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Zn(this.value.arrayValue,e)}}class Im extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Zn(this.value.arrayValue,e)}}class wm extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!So(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Zn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Ga(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Am(n,t,e,r,i,s,o)}function Co(n){const t=N(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ms(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Si(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>fn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>fn(r)).join(",")),t.ue=e}return t.ue}function bo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!mm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!gu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ha(n.startAt,t.startAt)&&Ha(n.endAt,t.endAt)}function Ls(n){return S.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rm(n,t,e,r,i,s,o,a){return new Ci(n,t,e,r,i,s,o,a)}function ko(n){return new Ci(n)}function Wa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pm(n){return n.collectionGroup!==null}function Ln(n){const t=N(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new mt(ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Jr(s,r))}),e.has(ft.keyField().canonicalString())||t.ce.push(new Jr(ft.keyField(),r))}return t.ce}function Gt(n){const t=N(n);return t.le||(t.le=Sm(t,Ln(n))),t.le}function Sm(n,t){if(n.limitType==="F")return Ga(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Jr(i.field,s)});const e=n.endAt?new Yr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yr(n.startAt.position,n.startAt.inclusive):null;return Ga(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function xs(n,t,e){return new Ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function bi(n,t){return bo(Gt(n),Gt(t))&&n.limitType===t.limitType}function vu(n){return`${Co(Gt(n))}|lt:${n.limitType}`}function Ye(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>_u(i)).join(", ")}]`),Si(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>fn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>fn(i)).join(",")),`Target(${r})`}(Gt(n))}; limitType=${n.limitType})`}function ki(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):S.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Ln(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=$a(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ln(r),i)||r.endAt&&!function(o,a,c){const l=$a(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ln(r),i))}(n,t)}function Cm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Eu(n){return(t,e)=>{let r=!1;for(const i of Ln(n)){const s=bm(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bm(n,t,e){const r=n.field.isKeyField()?S.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?dn(c,l):k()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return k()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){$e(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return uu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new J(S.comparator);function ce(){return km}const Tu=new J(S.comparator);function Dn(...n){let t=Tu;for(const e of n)t=t.insert(e.key,e);return t}function Iu(n){let t=Tu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ke(){return xn()}function wu(){return xn()}function xn(){return new In(n=>n.toString(),(n,t)=>n.isEqual(t))}const Dm=new J(S.comparator),Vm=new mt(S.comparator);function x(...n){let t=Vm;for(const e of n)t=t.add(e);return t}const Nm=new mt(z);function Om(){return Nm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(t)?"-0":t}}function Ru(n){return{integerValue:""+n}}function Mm(n,t){return hm(t)?Ru(t):Au(n,t)}/**
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
 */class Di{constructor(){this._=void 0}}function Lm(n,t,e){return n instanceof Zr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ro(s)&&(s=Po(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof tr?Su(n,t):n instanceof er?Cu(n,t):function(i,s){const o=Pu(i,s),a=Ka(o)+Ka(i.Pe);return Os(o)&&Os(i.Pe)?Ru(a):Au(i.serializer,a)}(n,t)}function xm(n,t,e){return n instanceof tr?Su(n,t):n instanceof er?Cu(n,t):e}function Pu(n,t){return n instanceof ti?function(r){return Os(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Zr extends Di{}class tr extends Di{constructor(t){super(),this.elements=t}}function Su(n,t){const e=bu(t);for(const r of n.elements)e.some(i=>Qt(i,r))||e.push(r);return{arrayValue:{values:e}}}class er extends Di{constructor(t){super(),this.elements=t}}function Cu(n,t){let e=bu(t);for(const r of n.elements)e=e.filter(i=>!Qt(i,r));return{arrayValue:{values:e}}}class ti extends Di{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ka(n){return et(n.integerValue||n.doubleValue)}function bu(n){return So(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Fm(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof tr&&i instanceof tr||r instanceof er&&i instanceof er?hn(r.elements,i.elements,Qt):r instanceof ti&&i instanceof ti?Qt(r.Pe,i.Pe):r instanceof Zr&&i instanceof Zr}(n.transform,t.transform)}class Um{constructor(t,e){this.version=t,this.transformResults=e}}class bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Or(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Vi{}function ku(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ni(n.key,bt.none()):new pr(n.key,n.data,bt.none());{const e=n.data,r=Ct.empty();let i=new mt(ft.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pe(n.key,r,new Dt(i.toArray()),bt.none())}}function Bm(n,t,e){n instanceof pr?function(i,s,o){const a=i.value.clone(),c=Xa(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Pe?function(i,s,o){if(!Or(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Xa(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Du(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Fn(n,t,e,r){return n instanceof pr?function(s,o,a,c){if(!Or(s.precondition,o))return a;const l=s.value.clone(),u=Ya(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,r):n instanceof Pe?function(s,o,a,c){if(!Or(s.precondition,o))return a;const l=Ya(s.fieldTransforms,c,o),u=o.data;return u.setAll(Du(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return Or(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function jm(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Pu(r.transform,i||null);s!=null&&(e===null&&(e=Ct.empty()),e.set(r.field,s))}return e||null}function Qa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&hn(r,i,(s,o)=>Fm(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class pr extends Vi{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pe extends Vi{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Du(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Xa(n,t,e){const r=new Map;K(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,xm(o,a,e[i]))}return r}function Ya(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,Lm(s,o,t))}return r}class Ni extends Vi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qm extends Vi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Bm(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=wu();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const c=ku(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),x())}isEqual(t){return this.batchId===t.batchId&&hn(this.mutations,t.mutations,(e,r)=>Qa(e,r))&&hn(this.baseMutations,t.baseMutations,(e,r)=>Qa(e,r))}}class Do{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){K(t.mutations.length===r.length);let i=function(){return Dm}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Do(t,e,r,i)}}/**
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
 */class $m{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Hm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,U;function Gm(n){switch(n){default:return k();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Vu(n){if(n===void 0)return ae("GRPC error has no .code"),m.UNKNOWN;switch(n){case tt.OK:return m.OK;case tt.CANCELLED:return m.CANCELLED;case tt.UNKNOWN:return m.UNKNOWN;case tt.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case tt.INTERNAL:return m.INTERNAL;case tt.UNAVAILABLE:return m.UNAVAILABLE;case tt.UNAUTHENTICATED:return m.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case tt.NOT_FOUND:return m.NOT_FOUND;case tt.ALREADY_EXISTS:return m.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return m.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case tt.ABORTED:return m.ABORTED;case tt.OUT_OF_RANGE:return m.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return m.UNIMPLEMENTED;case tt.DATA_LOSS:return m.DATA_LOSS;default:return k()}}(U=tt||(tt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Wm(){return new TextEncoder}/**
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
 */const Km=new nn([4294967295,4294967295],0);function Ja(n){const t=Wm().encode(n),e=new Qp;return e.update(t),new Uint8Array(e.digest())}function Za(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new nn([e,r],0),new nn([i,s],0)]}class Vo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Vn(`Invalid padding: ${e}`);if(r<0)throw new Vn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Vn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Vn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=nn.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(nn.fromNumber(r)));return i.compare(Km)===1&&(i=new nn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ja(t),[r,i]=Za(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Vo(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Ja(t),[r,i]=Za(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,mr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Oi(V.min(),i,new J(z),ce(),x())}}class mr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new mr(r,e,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Nu{constructor(t,e){this.targetId=t,this.me=e}}class Ou{constructor(t,e,r=At.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class tc{constructor(){this.fe=0,this.ge=nc(),this.pe=At.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=x(),e=x(),r=x();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:k()}}),new mr(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=nc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,K(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Qm{constructor(t){this.Le=t,this.Be=new Map,this.ke=ce(),this.qe=ec(),this.Qe=new J(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:k()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const s=i.target;if(Ls(s))if(r===0){const o=new S(s.path);this.Ue(e,o,Tt.newNoDocument(o,V.min()))}else K(r===1);else{const o=this.Ye(e);if(o!==r){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,l)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=Fe(r).toUint8Array()}catch(c){if(c instanceof hu)return un("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Vo(o,i,s)}catch(c){return un(c instanceof Vn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,s,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Ls(a.target)){const c=new S(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Tt.newNoDocument(c,t))}s.be&&(e.set(o,s.Ce()),s.ve())}});let r=x();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const i=new Oi(t,e,this.Qe,this.ke,r);return this.ke=ce(),this.qe=ec(),this.Qe=new J(z),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new tc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new mt(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||I("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new tc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ec(){return new J(S.comparator)}function nc(){return new J(S.comparator)}const Xm={asc:"ASCENDING",desc:"DESCENDING"},Ym={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jm={and:"AND",or:"OR"};class Zm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Fs(n,t){return n.useProto3Json||Si(t)?t:{value:t}}function ei(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function tg(n,t){return ei(n,t.toTimestamp())}function Wt(n){return K(!!n),V.fromTimestamp(function(e){const r=Te(e);return new ot(r.seconds,r.nanos)}(n))}function No(n,t){return Us(n,t).canonicalString()}function Us(n,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Lu(n){const t=Y.fromString(n);return K(ju(t)),t}function Bs(n,t){return No(n.databaseId,t.path)}function as(n,t){const e=Lu(t);if(e.get(1)!==n.databaseId.projectId)throw new R(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new R(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new S(Fu(e))}function xu(n,t){return No(n.databaseId,t)}function eg(n){const t=Lu(n);return t.length===4?Y.emptyPath():Fu(t)}function js(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fu(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rc(n,t,e){return{name:Bs(n,t),fields:e.value.mapValue.fields}}function ng(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:k()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(K(u===void 0||typeof u=="string"),At.fromBase64String(u||"")):(K(u===void 0||u instanceof Buffer||u instanceof Uint8Array),At.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?m.UNKNOWN:Vu(l.code);return new R(u,l.message||"")}(o);e=new Ou(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=as(n,r.document.name),s=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):V.min(),a=new Ct({mapValue:{fields:r.document.fields}}),c=Tt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];e=new Mr(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=as(n,r.document),s=r.readTime?Wt(r.readTime):V.min(),o=Tt.newNoDocument(i,s),a=r.removedTargetIds||[];e=new Mr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=as(n,r.document),s=r.removedTargetIds||[];e=new Mr([],s,i,null)}else{if(!("filter"in t))return k();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Hm(i,s),a=r.targetId;e=new Nu(a,o)}}return e}function rg(n,t){let e;if(t instanceof pr)e={update:rc(n,t.key,t.value)};else if(t instanceof Ni)e={delete:Bs(n,t.key)};else if(t instanceof Pe)e={update:rc(n,t.key,t.data),updateMask:dg(t.fieldMask)};else{if(!(t instanceof qm))return k();e={verify:Bs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Zr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof tr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof er)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ti)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw k()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:tg(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:k()}(n,t.precondition)),e}function ig(n,t){return n&&n.length>0?(K(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?Wt(i.updateTime):Wt(s);return o.isEqual(V.min())&&(o=Wt(s)),new Um(o,i.transformResults||[])}(e,t))):[]}function sg(n,t){return{documents:[xu(n,t.path)]}}function og(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=xu(n,i);const s=function(l){if(l.length!==0)return Bu(Xt.create(l,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Je(d.field),direction:lg(d.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Fs(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{_t:e,parent:i}}function ag(n){let t=eg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){K(r===1);const u=e.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];e.where&&(s=function(h){const d=Uu(h);return d instanceof Xt&&mu(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(v){return new Jr(Ze(v.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Si(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Yr(f,d)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Yr(f,d)}(e.endAt)),Rm(t,i,o,s,a,"F",c,l)}function cg(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Uu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ze(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ze(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ze(e.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ze(e.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(n):n.fieldFilter!==void 0?function(e){return st.create(Ze(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Xt.create(e.compositeFilter.filters.map(r=>Uu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return k()}}(e.compositeFilter.op))}(n):k()}function lg(n){return Xm[n]}function ug(n){return Ym[n]}function hg(n){return Jm[n]}function Je(n){return{fieldPath:n.canonicalString()}}function Ze(n){return ft.fromServerFormat(n.fieldPath)}function Bu(n){return n instanceof st?function(e){if(e.op==="=="){if(za(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NAN"}};if(qa(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(za(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NOT_NAN"}};if(qa(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Je(e.field),op:ug(e.op),value:e.value}}}(n):n instanceof Xt?function(e){const r=e.getFilters().map(i=>Bu(i));return r.length===1?r[0]:{compositeFilter:{op:hg(e.op),filters:r}}}(n):k()}function dg(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ju(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e,r,i,s=V.min(),o=V.min(),a=At.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new me(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new me(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t){this.ut=t}}function pg(n){const t=ag({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.on=new gg}addToCollectionParentIndex(t,e){return this.on.add(e),g.resolve()}getCollectionParents(t,e){return g.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return g.resolve()}deleteFieldIndex(t,e){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,e){return g.resolve()}getDocumentsMatchingTarget(t,e){return g.resolve(null)}getIndexType(t,e){return g.resolve(0)}getFieldIndexes(t,e){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,e){return g.resolve(Ee.min())}getMinOffsetFromCollectionGroup(t,e){return g.resolve(Ee.min())}updateCollectionGroup(t,e,r){return g.resolve()}updateIndexEntries(t,e){return g.resolve()}}class gg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new mt(Y.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new mt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new pn(0)}static Nn(){return new pn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.changes=new In(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?g.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Fn(r.mutation,i,Dt.empty(),ot.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,x()).next(()=>r))}getLocalViewOfDocuments(t,e,r=x()){const i=ke();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Dn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=ke();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,x()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=ce();const o=xn(),a=function(){return xn()}();return e.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Pe)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Fn(u.mutation,l,u.mutation.getFieldMask(),ot.now())):o.set(l.key,Dt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),e.forEach((l,u)=>{var h;return a.set(l,new yg(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=xn();let i=new J((o,a)=>o-a),s=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let u=r.get(c)||Dt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||x()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=wu();u.forEach(d=>{if(!s.has(d)){const f=ku(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return S.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Pm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):g.resolve(ke());let a=-1,c=s;return o.next(l=>g.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?g.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,c,l,x())).next(u=>({batchId:a,changes:Iu(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new S(e)).next(r=>{let i=Dn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=Dn();return this.indexManager.getCollectionParents(t,s).next(a=>g.forEach(a,c=>{const l=function(h,d){return new Ci(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Tt.newInvalidDocument(u)))});let a=Dn();return o.forEach((c,l)=>{const u=s.get(c);u!==void 0&&Fn(u.mutation,l,Dt.empty(),ot.now()),ki(e,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return g.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Wt(i.createTime)}}(e)),g.resolve()}getNamedQuery(t,e){return g.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(i){return{name:i.name,query:pg(i.bundledQuery),readTime:Wt(i.readTime)}}(e)),g.resolve()}}/**
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
 */class Tg{constructor(){this.overlays=new J(S.comparator),this.lr=new Map}getOverlay(t,e){return g.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ke();return g.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.lt(t,e,s)}),g.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),g.resolve()}getOverlaysForCollection(t,e,r){const i=ke(),s=e.length+1,o=new S(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new J((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=ke(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ke(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return g.resolve(a)}lt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $m(e,r));let s=this.lr.get(e);s===void 0&&(s=x(),this.lr.set(e,s)),this.lr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.hr=new mt(ct.Pr),this.Ir=new mt(ct.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new ct(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new ct(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new S(new Y([])),r=new ct(e,t),i=new ct(e,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new S(new Y([])),r=new ct(e,t),i=new ct(e,t+1);let s=x();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new ct(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return S.comparator(t.key,e.key)||z(t.gr,e.gr)}static Tr(t,e){return z(t.gr,e.gr)||S.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new mt(ct.Pr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zm(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new ct(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,e){return g.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Sr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ct(e,0),i=new ct(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt(z);return e.forEach(i=>{const s=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),g.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;S.isDocumentKey(s)||(s=s.child(""));const o=new ct(new S(s),0);let a=new mt(z);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gr)),!0)},o),g.resolve(this.br(a))}br(t){const e=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){K(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return g.forEach(e.mutations,i=>{const s=new ct(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new ct(e,0),i=this.yr.firstAfterOrEqual(r);return g.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t){this.Cr=t,this.docs=function(){return new J(S.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return g.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=ce();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Tt.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=ce();const o=e.path,a=new S(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||am(om(u),r)<=0||(i.has(u.key)||ki(e,u))&&(s=s.insert(u.key,u.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,e,r,i){k()}vr(t,e){return g.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ag(this)}getSize(t){return g.resolve(this.size)}}class Ag extends _g{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),g.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t){this.persistence=t,this.Fr=new In(e=>Co(e),bo),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Oo,this.targetCount=0,this.Nr=pn.On()}forEachTarget(t,e){return this.Fr.forEach((r,i)=>e(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),g.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new pn(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,g.resolve()}updateTargetData(t,e){return this.kn(e),g.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return g.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),g.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),g.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return g.resolve(r)}containsKey(t,e){return g.resolve(this.Or.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,e){this.Lr={},this.overlays={},this.Br=new Ao(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Rg(this),this.indexManager=new mg,this.remoteDocumentCache=function(i){return new wg(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new fg(e),this.Kr=new Eg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Tg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new Ig(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){I("MemoryPersistence","Starting transaction:",t);const i=new Sg(this.Br.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,e){return g.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class Sg extends lm{constructor(t){super(),this.currentSequenceNumber=t}}class Mo{constructor(t){this.persistence=t,this.Gr=new Oo,this.zr=null}static jr(t){return new Mo(t)}get Hr(){if(this.zr)return this.zr;throw k()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),g.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),g.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Hr,r=>{const i=S.fromPath(r);return this.Jr(t,i).next(s=>{s||e.removeEntry(i,V.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return g.or([()=>g.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=i}static Qi(t,e){let r=x(),i=x();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lo(t,e.fromCache,r,i)}}/**
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
 */class Cg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return Ad()?8:um(gt())>0?6:4}()}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.zi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Cg;return this.Hi(t,e,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>s.result)}Ji(t,e,r,i){return r.documentReadCount<this.Ui?(Cn()<=F.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",Ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),g.resolve()):(Cn()<=F.DEBUG&&I("QueryEngine","Query:",Ye(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Cn()<=F.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",Ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Gt(e))):g.resolve())}zi(t,e){if(Wa(e))return g.resolve(null);let r=Gt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=xs(e,null,"F"),r=Gt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=x(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Yi(e,a);return this.Zi(e,l,o,c.readTime)?this.zi(t,xs(e,null,"F")):this.Xi(t,l,e,c)}))})))}ji(t,e,r,i){return Wa(e)||i.isEqual(V.min())?g.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(e,s);return this.Zi(e,o,r,i)?g.resolve(null):(Cn()<=F.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ye(e)),this.Xi(t,o,e,sm(i,-1)).next(a=>a))})}Yi(t,e){let r=new mt(Eu(t));return e.forEach((i,s)=>{ki(t,s)&&(r=r.add(s))}),r}Zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,e,r){return Cn()<=F.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Ye(e)),this.Gi.getDocumentsMatchingQuery(t,e,Ee.min(),r)}Xi(t,e,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t,e,r,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new J(z),this.ns=new In(s=>Co(s),bo),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vg(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function Dg(n,t,e,r){return new kg(n,t,e,r)}async function qu(n,t){const e=N(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=x();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return e.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function Vg(n,t){const e=N(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=g.resolve();return d.forEach(v=>{f=f.next(()=>u.getEntry(c,v)).next(_=>{const p=l.docVersions.get(v);K(p!==null),_.version.compareTo(p)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=x();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function zu(n){const t=N(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function Ng(n,t){const e=N(n),r=t.snapshotVersion;let i=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});i=e.ts;const a=[];t.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(e.qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>e.qr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(At.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(_,p,E){return _.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(e.qr.updateTargetData(s,f))});let c=ce(),l=x();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Og(s,o,t.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(V.min())){const u=e.qr.getLastRemoteSnapshotVersion(s).next(h=>e.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(e.ts=i,s))}function Og(n,t,e){let r=x(),i=x();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=ce();return e.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(V.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):I("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:i}})}function Mg(n,t){const e=N(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Lg(n,t){const e=N(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.qr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):e.qr.allocateTargetId(r).next(o=>(i=new me(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function qs(n,t,e){const r=N(n),i=r.ts.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!fr(o))throw o;I("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function ic(n,t,e){const r=N(n);let i=V.min(),s=x();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=N(c),d=h.ns.get(u);return d!==void 0?g.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,Gt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?i:V.min(),e?s:x())).next(a=>(xg(r,Cm(t),a),{documents:a,ls:s})))}function xg(n,t,e){let r=n.rs.get(t)||V.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(t,r)}class sc{constructor(){this.activeTargetIds=Om()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Fg{constructor(){this.eo=new sc,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new sc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kr=null;function cs(){return kr===null?kr=function(){return 268435456+Math.round(2147483648*Math.random())}():kr++,"0x"+kr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.lo()}send(t){this.co(t)}Vo(){this.Po()}mo(){this.To()}fo(t){this.Ao(t)}po(t){this.Ro(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class qg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+e.host,this.wo=`projects/${i}/databases/${s}`,this.So=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get bo(){return!1}Do(e,r,i,s,o){const a=cs(),c=this.Co(e,r.toUriEncodedString());I("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(l,s,o),this.Fo(e,c,l,i).then(u=>(I("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw un("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}Mo(e,r,i,s,o,a){return this.Do(e,r,i,s,o)}vo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}Co(e,r){const i=Bg[e];return`${this.yo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Fo(t,e,r,i){const s=cs();return new Promise((o,a)=>{const c=new Kp;c.setWithCredentials(!0),c.listenOnce(Hp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case os.NO_ERROR:const u=c.getResponseJson();I(vt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case os.TIMEOUT:I(vt,`RPC '${t}' ${s} timed out`),a(new R(m.DEADLINE_EXCEEDED,"Request time out"));break;case os.HTTP_ERROR:const h=c.getStatus();if(I(vt,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const v=function(p){const E=p.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(E)>=0?E:m.UNKNOWN}(f.status);a(new R(v,f.message))}else a(new R(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(m.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{I(vt,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);I(vt,`RPC '${t}' ${s} sending request:`,i),c.send(e,"POST",l,r,15)})}xo(t,e,r){const i=cs(),s=[this.yo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=zp(),a=$p(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Wp({})),this.vo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const u=s.join("");I(vt,`Creating RPC '${t}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const v=new jg({co:p=>{f?I(vt,`Not sending because RPC '${t}' stream ${i} is closed:`,p):(d||(I(vt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),I(vt,`RPC '${t}' stream ${i} sending:`,p),h.send(p))},lo:()=>h.close()}),_=(p,E,T)=>{p.listen(E,P=>{try{T(P)}catch($){setTimeout(()=>{throw $},0)}})};return _(h,Sr.EventType.OPEN,()=>{f||(I(vt,`RPC '${t}' stream ${i} transport opened.`),v.Vo())}),_(h,Sr.EventType.CLOSE,()=>{f||(f=!0,I(vt,`RPC '${t}' stream ${i} transport closed`),v.fo())}),_(h,Sr.EventType.ERROR,p=>{f||(f=!0,un(vt,`RPC '${t}' stream ${i} transport errored:`,p),v.fo(new R(m.UNAVAILABLE,"The operation could not be completed")))}),_(h,Sr.EventType.MESSAGE,p=>{var E;if(!f){const T=p.data[0];K(!!T);const P=T,$=P.error||((E=P[0])===null||E===void 0?void 0:E.error);if($){I(vt,`RPC '${t}' stream ${i} received error:`,$);const G=$.status;let L=function(rt){const it=tt[rt];if(it!==void 0)return Vu(it)}(G),W=$.message;L===void 0&&(L=m.INTERNAL,W="Unknown error status: "+G+" with message "+$.message),f=!0,v.fo(new R(L,W)),h.close()}else I(vt,`RPC '${t}' stream ${i} received:`,T),v.po(T)}}),_(a,Gp.STAT_EVENT,p=>{p.stat===xa.PROXY?I(vt,`RPC '${t}' stream ${i} detected buffering proxy`):p.stat===xa.NOPROXY&&I(vt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.mo()},0),v}}function ls(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n){return new Zm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(t,e,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=e,this.Oo=r,this.No=i,this.Lo=s,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(t){this.cancel();const e=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),i=Math.max(0,e-r);i>0&&I("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.qo=Date.now(),t())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,e,r,i,s,o,a,c){this.si=t,this.Wo=r,this.Go=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new $u(t,e)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(t){this.i_(),this.stream.send(t)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(t,e){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,t!==4?this.Jo.reset():e&&e.code===m.RESOURCE_EXHAUSTED?(ae(e.toString()),ae("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):e&&e.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(e)}o_(){}auth(){this.state=1;const t=this.__(this.zo),e=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.zo===e&&this.a_(r,i)},r=>{t(()=>{const i=new R(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(i)})})}a_(t,e){const r=this.__(this.zo);this.stream=this.c_(t,e),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.u_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(t){return I("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}__(t){return e=>{this.si.enqueueAndForget(()=>this.zo===t?e():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zg extends Hu{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}c_(t,e){return this.connection.xo("Listen",t,e)}onMessage(t){this.Jo.reset();const e=ng(this.serializer,t),r=function(s){if(!("targetChange"in s))return V.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?V.min():o.readTime?Wt(o.readTime):V.min()}(t);return this.listener.l_(e,r)}h_(t){const e={};e.database=js(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=Ls(c)?{documents:sg(s,c)}:{query:og(s,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Mu(s,o.resumeToken);const l=Fs(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(V.min())>0){a.readTime=ei(s,o.snapshotVersion.toTimestamp());const l=Fs(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=cg(this.serializer,t);r&&(e.labels=r),this.r_(e)}P_(t){const e={};e.database=js(this.serializer),e.removeTarget=t,this.r_(e)}}class $g extends Hu{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(t,e){return this.connection.xo("Write",t,e)}onMessage(t){if(K(!!t.streamToken),this.lastStreamToken=t.streamToken,this.I_){this.Jo.reset();const e=ig(t.writeResults,t.commitTime),r=Wt(t.commitTime);return this.listener.d_(r,e)}return K(!t.writeResults||t.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const t={};t.database=js(this.serializer),this.r_(t)}E_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>rg(this.serializer,r))};this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.V_=!1}m_(){if(this.V_)throw new R(m.FAILED_PRECONDITION,"The client has already been terminated.")}Do(t,e,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Do(t,Us(e,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(m.UNKNOWN,s.toString())})}Mo(t,e,r,i,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Us(e,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new R(m.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class Gg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ae(e),this.y_=!1):I("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.ro(o=>{r.enqueueAndForget(async()=>{He(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=N(c);l.M_.add(4),await gr(l),l.N_.set("Unknown"),l.M_.delete(4),await Li(l)}(this))})}),this.N_=new Gg(r,i)}}async function Li(n){if(He(n))for(const t of n.x_)await t(!0)}async function gr(n){for(const t of n.x_)await t(!1)}function Gu(n,t){const e=N(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Bo(e)?Uo(e):wn(e).Zo()&&Fo(e,t))}function xo(n,t){const e=N(n),r=wn(e);e.F_.delete(t),r.Zo()&&Wu(e,t),e.F_.size===0&&(r.Zo()?r.t_():He(e)&&e.N_.set("Unknown"))}function Fo(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(V.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}wn(n).h_(t)}function Wu(n,t){n.L_.xe(t),wn(n).P_(t)}function Uo(n){n.L_=new Qm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),wn(n).start(),n.N_.w_()}function Bo(n){return He(n)&&!wn(n).Yo()&&n.F_.size>0}function He(n){return N(n).M_.size===0}function Ku(n){n.L_=void 0}async function Kg(n){n.N_.set("Online")}async function Qg(n){n.F_.forEach((t,e)=>{Fo(n,t)})}async function Xg(n,t){Ku(n),Bo(n)?(n.N_.D_(t),Uo(n)):n.N_.set("Unknown")}async function Yg(n,t,e){if(n.N_.set("Online"),t instanceof Ou&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(n,t)}catch(r){I("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ni(n,r)}else if(t instanceof Mr?n.L_.Ke(t):t instanceof Nu?n.L_.He(t):n.L_.We(t),!e.isEqual(V.min()))try{const r=await zu(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.F_.get(l);u&&s.F_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.F_.get(c);if(!u)return;s.F_.set(c,u.withResumeToken(At.EMPTY_BYTE_STRING,u.snapshotVersion)),Wu(s,c);const h=new me(u.target,c,l,u.sequenceNumber);Fo(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){I("RemoteStore","Failed to raise snapshot:",r),await ni(n,r)}}async function ni(n,t,e){if(!fr(t))throw t;n.M_.add(1),await gr(n),n.N_.set("Offline"),e||(e=()=>zu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{I("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Li(n)})}function Qu(n,t){return t().catch(e=>ni(n,e,t))}async function xi(n){const t=N(n),e=Ie(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Jg(t);)try{const i=await Mg(t.localStore,r);if(i===null){t.v_.length===0&&e.t_();break}r=i.batchId,Zg(t,i)}catch(i){await ni(t,i)}Xu(t)&&Yu(t)}function Jg(n){return He(n)&&n.v_.length<10}function Zg(n,t){n.v_.push(t);const e=Ie(n);e.Zo()&&e.T_&&e.E_(t.mutations)}function Xu(n){return He(n)&&!Ie(n).Yo()&&n.v_.length>0}function Yu(n){Ie(n).start()}async function t_(n){Ie(n).R_()}async function e_(n){const t=Ie(n);for(const e of n.v_)t.E_(e.mutations)}async function n_(n,t,e){const r=n.v_.shift(),i=Do.from(r,t,e);await Qu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await xi(n)}async function r_(n,t){t&&Ie(n).T_&&await async function(r,i){if(function(o){return Gm(o)&&o!==m.ABORTED}(i.code)){const s=r.v_.shift();Ie(r).e_(),await Qu(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xi(r)}}(n,t),Xu(n)&&Yu(n)}async function ac(n,t){const e=N(n);e.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const r=He(e);e.M_.add(3),await gr(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Li(e)}async function i_(n,t){const e=N(n);t?(e.M_.delete(2),await Li(e)):t||(e.M_.add(2),await gr(e),e.N_.set("Unknown"))}function wn(n){return n.B_||(n.B_=function(e,r,i){const s=N(e);return s.m_(),new zg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:Kg.bind(null,n),Io:Qg.bind(null,n),Eo:Xg.bind(null,n),l_:Yg.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.e_(),Bo(n)?Uo(n):n.N_.set("Unknown")):(await n.B_.stop(),Ku(n))})),n.B_}function Ie(n){return n.k_||(n.k_=function(e,r,i){const s=N(e);return s.m_(),new $g(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:()=>Promise.resolve(),Io:t_.bind(null,n),Eo:r_.bind(null,n),A_:e_.bind(null,n),d_:n_.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.e_(),await xi(n)):(await n.k_.stop(),n.v_.length>0&&(I("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new jo(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qo(n,t){if(ae("AsyncQueue",`${t}: ${n}`),fr(n))return new R(m.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||S.comparator(e.key,r.key):(e,r)=>S.comparator(e.key,r.key),this.keyedMap=Dn(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new rn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof rn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new rn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.q_=new J(S.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):k():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class mn{constructor(t,e,r,i,s,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new mn(t,e,rn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class o_{constructor(){this.queries=new In(t=>vu(t),bi),this.onlineState="Unknown",this.z_=new Set}}async function a_(n,t){const e=N(n);let r=3;const i=t.query;let s=e.queries.get(i);s?!s.W_()&&t.G_()&&(r=2):(s=new s_,r=t.G_()?0:1);try{switch(r){case 0:s.K_=await e.onListen(i,!0);break;case 1:s.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=qo(o,`Initialization of query '${Ye(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,s),s.U_.push(t),t.j_(e.onlineState),s.K_&&t.H_(s.K_)&&zo(e)}async function c_(n,t){const e=N(n),r=t.query;let i=3;const s=e.queries.get(r);if(s){const o=s.U_.indexOf(t);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=t.G_()?0:1:!s.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function l_(n,t){const e=N(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&zo(e)}function u_(n,t,e){const r=N(n),i=r.queries.get(t);if(i)for(const s of i.U_)s.onError(e);r.queries.delete(t)}function zo(n){n.z_.forEach(t=>{t.next()})}var zs,lc;(lc=zs||(zs={})).J_="default",lc.Cache="cache";class h_{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new mn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=mn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==zs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t){this.key=t}}class Zu{constructor(t){this.key=t}}class d_{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=x(),this.mutatedKeys=x(),this.Ia=Eu(t),this.Ta=new rn(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new cc,i=e?e.Ta:this.Ta;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,h)=>{const d=i.get(u),f=ki(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let p=!1;d&&f?d.data.isEqual(f.data)?v!==_&&(r.track({type:3,doc:f}),p=!0):this.Ra(d,f)||(r.track({type:2,doc:f}),p=!0,(c&&this.Ia(f,c)>0||l&&this.Ia(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),p=!0):d&&!f&&(r.track({type:1,doc:d}),p=!0,(c||l)&&(a=!0)),p&&(f?(o=o.add(f),s=_?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:s}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const o=t.Aa.Q_();o.sort((u,h)=>function(f,v){const _=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return _(f)-_(v)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=e&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,l=c!==this.ha;return this.ha=c,o.length!==0||l?{snapshot:new mn(this.query,t.Ta,s,o,t.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new cc,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=x(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Zu(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Ju(r))}),e}pa(t){this.la=t.ls,this.Pa=x();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return mn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class f_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class p_{constructor(t){this.key=t,this.wa=!1}}class m_{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new In(a=>vu(a),bi),this.Da=new Map,this.Ca=new Set,this.va=new J(S.comparator),this.Fa=new Map,this.Ma=new Oo,this.xa={},this.Oa=new Map,this.Na=pn.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function g_(n,t,e=!0){const r=sh(n);let i;const s=r.ba.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await th(r,t,e,!0),i}async function __(n,t){const e=sh(n);await th(e,t,!0,!1)}async function th(n,t,e,r){const i=await Lg(n.localStore,Gt(t)),s=i.targetId,o=e?n.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await y_(n,t,s,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&Gu(n.remoteStore,i),a}async function y_(n,t,e,r,i){n.Ba=(h,d,f)=>async function(_,p,E,T){let P=p.view.da(E);P.Zi&&(P=await ic(_.localStore,p.query,!1).then(({documents:W})=>p.view.da(W,P)));const $=T&&T.targetChanges.get(p.targetId),G=T&&T.targetMismatches.get(p.targetId)!=null,L=p.view.applyChanges(P,_.isPrimaryClient,$,G);return hc(_,p.targetId,L.fa),L.snapshot}(n,h,d,f);const s=await ic(n.localStore,t,!0),o=new d_(t,s.ls),a=o.da(s.documents),c=mr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);hc(n,e,l.fa);const u=new f_(t,e,o);return n.ba.set(t,u),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),l.snapshot}async function v_(n,t,e){const r=N(n),i=r.ba.get(t),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!bi(o,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&xo(r.remoteStore,i.targetId),$s(r,i.targetId)}).catch(dr)):($s(r,i.targetId),await qs(r.localStore,i.targetId,!0))}async function E_(n,t){const e=N(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),xo(e.remoteStore,r.targetId))}async function T_(n,t,e){const r=C_(n);try{const i=await function(o,a){const c=N(o),l=ot.now(),u=a.reduce((f,v)=>f.add(v.key),x());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let v=ce(),_=x();return c.ss.getEntries(f,u).next(p=>{v=p,v.forEach((E,T)=>{T.isValidDocument()||(_=_.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,v)).next(p=>{h=p;const E=[];for(const T of a){const P=jm(T,h.get(T.key).overlayedDocument);P!=null&&E.push(new Pe(T.key,P,du(P.value.mapValue),bt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,E,a)}).next(p=>{d=p;const E=p.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(f,p.batchId,E)})}).then(()=>({batchId:d.batchId,changes:Iu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.xa[o.currentUser.toKey()];l||(l=new J(z)),l=l.insert(a,c),o.xa[o.currentUser.toKey()]=l}(r,i.batchId,e),await _r(r,i.changes),await xi(r.remoteStore)}catch(i){const s=qo(i,"Failed to persist write");e.reject(s)}}async function eh(n,t){const e=N(n);try{const r=await Ng(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Fa.get(s);o&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?K(o.wa):i.removedDocuments.size>0&&(K(o.wa),o.wa=!1))}),await _r(e,r,t)}catch(r){await dr(r)}}function uc(n,t,e){const r=N(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=N(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.U_)d.j_(a)&&(l=!0)}),l&&zo(c)}(r.eventManager,t),i.length&&r.Sa.l_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function I_(n,t,e){const r=N(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),s=i&&i.key;if(s){let o=new J(S.comparator);o=o.insert(s,Tt.newNoDocument(s,V.min()));const a=x().add(s),c=new Oi(V.min(),new Map,new J(z),o,a);await eh(r,c),r.va=r.va.remove(s),r.Fa.delete(t),$o(r)}else await qs(r.localStore,t,!1).then(()=>$s(r,t,e)).catch(dr)}async function w_(n,t){const e=N(n),r=t.batch.batchId;try{const i=await Vg(e.localStore,t);rh(e,r,null),nh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await _r(e,i)}catch(i){await dr(i)}}async function A_(n,t,e){const r=N(n);try{const i=await function(o,a){const c=N(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(K(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);rh(r,t,e),nh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await _r(r,i)}catch(i){await dr(i)}}function nh(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function rh(n,t,e){const r=N(n);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function $s(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Rr(t).forEach(r=>{n.Ma.containsKey(r)||ih(n,r)})}function ih(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(xo(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),$o(n))}function hc(n,t,e){for(const r of e)r instanceof Ju?(n.Ma.addReference(r.key,t),R_(n,r)):r instanceof Zu?(I("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||ih(n,r.key)):k()}function R_(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(I("SyncEngine","New document in limbo: "+e),n.Ca.add(r),$o(n))}function $o(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new S(Y.fromString(t)),r=n.Na.next();n.Fa.set(r,new p_(e)),n.va=n.va.insert(e,r),Gu(n.remoteStore,new me(Gt(ko(e.path)),r,"TargetPurposeLimboResolution",Ao.oe))}}async function _r(n,t,e){const r=N(n),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,c)=>{o.push(r.Ba(c,t,e).then(l=>{if((l||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Lo.Qi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Sa.l_(i),await async function(c,l){const u=N(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(l,d=>g.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!fr(h))throw h;I("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),v=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(v);u.ts=u.ts.insert(d,_)}}}(r.localStore,s))}async function P_(n,t){const e=N(n);if(!e.currentUser.isEqual(t)){I("SyncEngine","User change. New user:",t.toKey());const r=await qu(e.localStore,t);e.currentUser=t,function(s,o){s.Oa.forEach(a=>{a.forEach(c=>{c.reject(new R(m.CANCELLED,o))})}),s.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await _r(e,r._s)}}function S_(n,t){const e=N(n),r=e.Fa.get(t);if(r&&r.wa)return x().add(r.key);{let i=x();const s=e.Da.get(t);if(!s)return i;for(const o of s){const a=e.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function sh(n){const t=N(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=eh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=S_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=I_.bind(null,t),t.Sa.l_=l_.bind(null,t.eventManager),t.Sa.ka=u_.bind(null,t.eventManager),t}function C_(n){const t=N(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=w_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=A_.bind(null,t),t}class dc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Mi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Dg(this.persistence,new bg,t.initialUser,this.serializer)}createPersistence(t){return new Pg(Mo.jr,this.serializer)}createSharedClientState(t){return new Fg}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class b_{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=P_.bind(null,this.syncEngine),await i_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new o_}()}createDatastore(t){const e=Mi(t.databaseInfo.databaseId),r=function(s){return new qg(s)}(t.databaseInfo);return function(s,o,a,c){return new Hg(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new Wg(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>uc(this.syncEngine,e,0),function(){return oc.D()?new oc:new Ug}())}createSyncEngine(t,e){return function(i,s,o,a,c,l,u){const h=new m_(i,s,o,a,c,l);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=N(r);I("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await gr(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class k_{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):ae("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=lu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{I("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(I("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=qo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function us(n,t){n.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function fc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await N_(n);I("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ac(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ac(t.remoteStore,i)),n._onlineComponents=t}function V_(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function N_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await us(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!V_(e))throw e;un("Error using user provided cache. Falling back to memory cache: "+e),await us(n,new dc)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await us(n,new dc);return n._offlineComponents}async function oh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await fc(n,n._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await fc(n,new b_))),n._onlineComponents}function O_(n){return oh(n).then(t=>t.syncEngine)}async function pc(n){const t=await oh(n),e=t.eventManager;return e.onListen=g_.bind(null,t.syncEngine),e.onUnlisten=v_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=__.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=E_.bind(null,t.syncEngine),e}/**
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
 */function ah(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n,t,e){if(!e)throw new R(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function M_(n,t,e,r){if(t===!0&&r===!0)throw new R(m.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function gc(n){if(!S.isDocumentKey(n))throw new R(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _c(n){if(S.isDocumentKey(n))throw new R(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ho(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":k()}function se(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new R(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ho(n);throw new R(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new R(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new R(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}M_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ah((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fi{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new R(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xp;switch(r.type){case"firstParty":return new tm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new R(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=mc.get(e);r&&(I("ComponentProvider","Removing Datastore"),mc.delete(e),r.terminate())}(this),Promise.resolve()}}function L_(n,t,e,r={}){var i;const s=(n=se(n,Fi))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Et.MOCK_USER;else{a=yd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new R(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Et(l)}n._authCredentials=new Yp(new cu(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ui(this.firestore,t,this._query)}}class Vt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Vt(this.firestore,t,this._key)}}class ve extends Ui{constructor(t,e,r){super(t,e,ko(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Vt(this.firestore,null,new S(t))}withConverter(t){return new ve(this.firestore,t,this._path)}}function vc(n,t,...e){if(n=at(n),ch("collection","path",t),n instanceof Fi){const r=Y.fromString(t,...e);return _c(r),new ve(n,null,r)}{if(!(n instanceof Vt||n instanceof ve))throw new R(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return _c(r),new ve(n.firestore,null,r)}}function Zt(n,t,...e){if(n=at(n),arguments.length===1&&(t=lu.newId()),ch("doc","path",t),n instanceof Fi){const r=Y.fromString(t,...e);return gc(r),new Vt(n,null,new S(r))}{if(!(n instanceof Vt||n instanceof ve))throw new R(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return gc(r),new Vt(n.firestore,n instanceof ve?n.converter:null,new S(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new $u(this,"async_queue_retry"),this.hu=()=>{const e=ls();e&&I("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Jo.Uo()};const t=ls();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=ls();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Ne;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(t){if(!fr(t))throw t;I("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ae("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=jo.createAndSchedule(this,t,e,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&k()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function Ec(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Be extends Fi{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new x_}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lh(this),this._firestoreClient.terminate()}}function Tc(n,t){const e=typeof n=="object"?n:rl(),r=typeof n=="string"?n:t||"(default)",i=to(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gd("firestore");s&&L_(i,...s)}return i}function Go(n){return n._firestoreClient||lh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function lh(n){var t,e,r;const i=n._freezeSettings(),s=function(a,c,l,u){return new fm(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ah(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new D_(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gn(At.fromBase64String(t))}catch(e){throw new R(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new gn(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new R(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new R(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new R(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=/^__.*__$/;class U_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new pr(t,this.data,e,this.fieldTransforms)}}class uh{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Pe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class Qo{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Qo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return ri(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(hh(this.fu)&&F_.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class B_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Mi(t)}Fu(t,e,r,i=!1){return new Qo({fu:t,methodName:e,vu:r,path:ft.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xo(n){const t=n._freezeSettings(),e=Mi(n._databaseId);return new B_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function dh(n,t,e,r,i,s={}){const o=n.Fu(s.merge||s.mergeFields?2:0,t,e,i);Yo("Data must be an object, but it was:",o,r);const a=mh(r,o);let c,l;if(s.merge)c=new Dt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Hs(t,h,e);if(!o.contains(d))throw new R(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_h(u,d)||u.push(d)}c=new Dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new U_(new Ct(a),c,l)}class Bi extends Wo{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Bi}}function fh(n,t,e,r){const i=n.Fu(1,t,e);Yo("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();$e(r,(c,l)=>{const u=Jo(t,c,e);l=at(l);const h=i.Su(u);if(l instanceof Bi)s.push(u);else{const d=ji(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Dt(s);return new uh(o,a,i.fieldTransforms)}function ph(n,t,e,r,i,s){const o=n.Fu(1,t,e),a=[Hs(t,r,e)],c=[i];if(s.length%2!=0)throw new R(m.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Hs(t,s[d])),c.push(s[d+1]);const l=[],u=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!_h(l,a[d])){const f=a[d];let v=c[d];v=at(v);const _=o.Su(f);if(v instanceof Bi)l.push(f);else{const p=ji(v,_);p!=null&&(l.push(f),u.set(f,p))}}const h=new Dt(l);return new uh(u,h,o.fieldTransforms)}function ji(n,t){if(gh(n=at(n)))return Yo("Unsupported field value:",t,n),mh(n,t);if(n instanceof Wo)return function(r,i){if(!hh(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=ji(a,i.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ot.fromDate(r);return{timestampValue:ei(i.serializer,s)}}if(r instanceof ot){const s=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ei(i.serializer,s)}}if(r instanceof Ko)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gn)return{bytesValue:Mu(i.serializer,r._byteString)};if(r instanceof Vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:No(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ho(r)}`)}(n,t)}function mh(n,t){const e={};return uu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$e(n,(r,i)=>{const s=ji(i,t.pu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function gh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof Ko||n instanceof gn||n instanceof Vt||n instanceof Wo)}function Yo(n,t,e){if(!gh(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Ho(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Hs(n,t,e){if((t=at(t))instanceof yr)return t._internalPath;if(typeof t=="string")return Jo(n,t);throw ri("Field path arguments must be of type string or ",n,!1,void 0,e)}const j_=new RegExp("[~\\*/\\[\\]]");function Jo(n,t,e){if(t.search(j_)>=0)throw ri(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new yr(...t.split("."))._internalPath}catch{throw ri(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ri(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new R(m.INVALID_ARGUMENT,a+n+c)}function _h(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new q_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(vh("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class q_ extends yh{data(){return super.data()}}function vh(n,t){return typeof t=="string"?Jo(n,t):t instanceof yr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new R(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $_{convertValue(t,e="none"){switch(Ue(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw k()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return $e(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Ko(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Po(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Yn(t));default:return null}}convertTimestamp(t){const e=Te(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);K(ju(r));const i=new Jn(r.get(1),r.get(3)),s=new S(r.popFirst(5));return i.isEqual(e)||ae(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Th extends yh{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(vh("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Lr extends Th{data(t={}){return super.data(t)}}class H_{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Lr(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new R(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Lr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Nn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Lr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Nn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:G_(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function G_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}class Ih extends $_{constructor(t){super(),this.firestore=t}convertBytes(t){return new gn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Vt(this.firestore,null,e)}}function Ic(n,t,e,...r){n=se(n,Vt);const i=se(n.firestore,Be),s=Xo(i);let o;return o=typeof(t=at(t))=="string"||t instanceof yr?ph(s,"updateDoc",n._key,t,e,r):fh(s,"updateDoc",n._key,t),qi(i,[o.toMutation(n._key,bt.exists(!0))])}function wc(n){return qi(se(n.firestore,Be),[new Ni(n._key,bt.none())])}function Ac(n,t){const e=se(n.firestore,Be),r=Zt(n),i=Eh(n.converter,t);return qi(e,[dh(Xo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function Rc(n,...t){var e,r,i;n=at(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||Ec(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ec(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof Vt)l=se(n.firestore,Be),u=ko(n._key.path),c={next:h=>{t[o]&&t[o](W_(l,n,h))},error:t[o+1],complete:t[o+2]};else{const h=se(n,Ui);l=se(h.firestore,Be),u=h._query;const d=new Ih(l);c={next:f=>{t[o]&&t[o](new H_(l,d,h,f))},error:t[o+1],complete:t[o+2]},z_(n._query)}return function(d,f,v,_){const p=new k_(_),E=new h_(f,p,v);return d.asyncQueue.enqueueAndForget(async()=>a_(await pc(d),E)),()=>{p.$a(),d.asyncQueue.enqueueAndForget(async()=>c_(await pc(d),E))}}(Go(l),u,a,c)}function qi(n,t){return function(r,i){const s=new Ne;return r.asyncQueue.enqueueAndForget(async()=>T_(await O_(r),i,s)),s.promise}(Go(n),t)}function W_(n,t,e){const r=e.docs.get(t._key),i=new Ih(n);return new Th(n,i,t._key,r,new Nn(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Xo(t)}set(t,e,r){this._verifyNotCommitted();const i=hs(t,this._firestore),s=Eh(i.converter,e,r),o=dh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,bt.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=hs(t,this._firestore);let o;return o=typeof(e=at(e))=="string"||e instanceof yr?ph(this._dataReader,"WriteBatch.update",s._key,e,r,i):fh(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(o.toMutation(s._key,bt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=hs(t,this._firestore);return this._mutations=this._mutations.concat(new Ni(e._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hs(n,t){if((n=at(n)).firestore!==t)throw new R(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n){return Go(n=se(n,Be)),new K_(n,t=>qi(n,t))}(function(t,e=!0){(function(i){Tn=i})(yn),cn(new Me("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Be(new Jp(r.getProvider("auth-internal")),new nm(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new R(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jn(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ye(Fa,"4.6.1",t),ye(Fa,"4.6.1","esm2017")})();function Zo(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function wh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Q_=wh,Ah=new rr("auth","Firebase",wh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Js("@firebase/auth");function X_(n,...t){ii.logLevel<=F.WARN&&ii.warn(`Auth (${yn}): ${n}`,...t)}function xr(n,...t){ii.logLevel<=F.ERROR&&ii.error(`Auth (${yn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,...t){throw ea(n,...t)}function xt(n,...t){return ea(n,...t)}function ta(n,t,e){const r=Object.assign(Object.assign({},Q_()),{[t]:e});return new rr("auth","Firebase",r).create(t,{appName:n.name})}function Oe(n){return ta(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Y_(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Yt(n,"argument-error"),ta(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ea(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Ah.create(n,...t)}function b(n,t,...e){if(!n)throw ea(t,...e)}function ne(n){const t="INTERNAL ASSERTION FAILED: "+n;throw xr(t),new Error(t)}function le(n,t){n||ne(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function J_(){return Pc()==="http:"||Pc()==="https:"}function Pc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J_()||Td()||"connection"in navigator)?navigator.onLine:!0}function ty(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e){this.shortDelay=t,this.longDelay=e,le(e>t,"Short delay should be less than long delay!"),this.isMobile=vd()||Id()}get(){return Z_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n,t){le(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new vr(3e4,6e4);function ra(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function An(n,t,e,r,i={}){return Ph(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ir(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Rh.fetch()(Sh(n,n.config.apiHost,e,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ph(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ey),t);try{const i=new iy(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vr(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ta(n,u,l);Yt(n,u)}}catch(i){if(i instanceof ue)throw i;Yt(n,"network-request-failed",{message:String(i)})}}async function ry(n,t,e,r,i={}){const s=await An(n,t,e,r,i);return"mfaPendingCredential"in s&&Yt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Sh(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?na(n.config,i):`${n.config.apiScheme}://${i}`}class iy{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),ny.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=xt(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(n,t){return An(n,"POST","/v1/accounts:delete",t)}async function Ch(n,t){return An(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function oy(n,t=!1){const e=at(n),r=await e.getIdToken(t),i=ia(r);b(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Un(ds(i.auth_time)),issuedAtTime:Un(ds(i.iat)),expirationTime:Un(ds(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ds(n){return Number(n)*1e3}function ia(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return xr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yc(e);return i?JSON.parse(i):(xr("Failed to decode base64 JWT payload"),null)}catch(i){return xr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sc(n){const t=ia(n);return b(t,"internal-error"),b(typeof t.exp<"u","internal-error"),b(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof ue&&ay(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ay({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n){var t;const e=n.auth,r=await n.getIdToken(),i=await nr(n,Ch(e,{idToken:r}));b(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?bh(s.providerUserInfo):[],a=uy(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ws(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function ly(n){const t=at(n);await si(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function uy(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function bh(n){return n.map(t=>{var{providerId:e}=t,r=Zo(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(n,t){const e=await Ph(n,{},async()=>{const r=ir({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Sh(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function dy(n,t){return An(n,"POST","/v2/accounts:revokeToken",ra(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){b(t.idToken,"internal-error"),b(typeof t.idToken<"u","internal-error"),b(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Sc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){b(t.length!==0,"internal-error");const e=Sc(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await hy(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new sn;return r&&(b(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,t){b(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class re{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=Zo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ws(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await nr(this,this.stsTokenManager.getToken(this.auth,t));return b(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return oy(this,t)}reload(){return ly(this)}_assign(t){this!==t&&(b(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new re(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await si(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(te(this.auth.app))return Promise.reject(Oe(this.auth));const t=await this.getIdToken();return await nr(this,sy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,c,l,u;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,f=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,p=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=e.createdAt)!==null&&l!==void 0?l:void 0,T=(u=e.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:$,isAnonymous:G,providerData:L,stsTokenManager:W}=e;b(P&&W,t,"internal-error");const nt=sn.fromJSON(this.name,W);b(typeof P=="string",t,"internal-error"),he(h,t.name),he(d,t.name),b(typeof $=="boolean",t,"internal-error"),b(typeof G=="boolean",t,"internal-error"),he(f,t.name),he(v,t.name),he(_,t.name),he(p,t.name),he(E,t.name),he(T,t.name);const rt=new re({uid:P,auth:t,email:d,emailVerified:$,displayName:h,isAnonymous:G,photoURL:v,phoneNumber:f,tenantId:_,stsTokenManager:nt,createdAt:E,lastLoginAt:T});return L&&Array.isArray(L)&&(rt.providerData=L.map(it=>Object.assign({},it))),p&&(rt._redirectEventId=p),rt}static async _fromIdTokenResponse(t,e,r=!1){const i=new sn;i.updateFromServerResponse(e);const s=new re({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await si(s),s}static async _fromGetAccountInfoResponse(t,e,r){const i=e.users[0];b(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?bh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new sn;a.updateFromIdToken(r);const c=new re({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ws(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Map;function ie(n){le(n instanceof Function,"Expected a class definition");let t=Cc.get(n);return t?(le(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Cc.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}kh.type="NONE";const bc=kh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n,t,e){return`firebase:${n}:${t}:${e}`}class on{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fr("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?re._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new on(ie(bc),t,r);const i=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||ie(bc);const o=Fr(r,t.config.apiKey,t.name);let a=null;for(const l of e)try{const u=await l._get(o);if(u){const h=re._fromJSON(t,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new on(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new on(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Nh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Dh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mh(t))return"Blackberry";if(Lh(t))return"Webos";if(sa(t))return"Safari";if((t.includes("chrome/")||Vh(t))&&!t.includes("edge/"))return"Chrome";if(Oh(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dh(n=gt()){return/firefox\//i.test(n)}function sa(n=gt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Vh(n=gt()){return/crios\//i.test(n)}function Nh(n=gt()){return/iemobile/i.test(n)}function Oh(n=gt()){return/android/i.test(n)}function Mh(n=gt()){return/blackberry/i.test(n)}function Lh(n=gt()){return/webos/i.test(n)}function zi(n=gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fy(n=gt()){var t;return zi(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function py(){return wd()&&document.documentMode===10}function xh(n=gt()){return zi(n)||Oh(n)||Lh(n)||Mh(n)||/windows phone/i.test(n)||Nh(n)}function my(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n,t=[]){let e;switch(n){case"Browser":e=kc(gt());break;case"Worker":e=`${kc(gt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${yn}/${r}`}/**
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
 */class gy{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _y(n,t={}){return An(n,"GET","/v2/passwordPolicy",ra(n,t))}/**
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
 */const yy=6;class vy{constructor(t){var e,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:yy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dc(this),this.idTokenSubscription=new Dc(this),this.beforeStateQueue=new gy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ah,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ie(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await on.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ch(this,{idToken:t}),r=await re._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(te(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await si(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ty()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(te(this.app))return Promise.reject(Oe(this));const e=t?at(t):null;return e&&b(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&b(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return te(this.app)?Promise.reject(Oe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return te(this.app)?Promise.reject(Oe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ie(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await _y(this),e=new vy(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new rr("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await dy(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ie(t)||this._popupRedirectResolver;b(e,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[ie(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,r,i);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Fh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&X_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $i(n){return at(n)}class Dc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Dd(e=>this.observer=e)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ty(n){oa=n}function Iy(n){return oa.loadJS(n)}function wy(){return oa.gapiScript}function Ay(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n,t){const e=to(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(qr(s,t??{}))return i;Yt(i,"already-initialized")}return e.initialize({options:t})}function Py(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(ie);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Sy(n,t,e){const r=$i(n);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Uh(t),{host:o,port:a}=Cy(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),by()}function Uh(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Cy(n){const t=Uh(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vc(o)}}}function Vc(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function by(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ne("not implemented")}_getIdTokenResponse(t){return ne("not implemented")}_linkToIdToken(t,e){return ne("not implemented")}_getReauthenticationResolver(t){return ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(n,t){return ry(n,"POST","/v1/accounts:signInWithIdp",ra(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="http://localhost";class je extends Bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new je(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Yt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=Zo(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new je(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return an(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,an(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,an(t,e)}buildRequest(){const t={requestUri:ky,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=ir(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends aa{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Er{constructor(){super("facebook.com")}static credential(t){return je._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return de.credentialFromTaggedObject(t)}static credentialFromError(t){return de.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return de.credential(t.oauthAccessToken)}catch{return null}}}de.FACEBOOK_SIGN_IN_METHOD="facebook.com";de.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Er{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return je._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return qt.credential(e,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Er{constructor(){super("github.com")}static credential(t){return je._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fe.credential(t.oauthAccessToken)}catch{return null}}}fe.GITHUB_SIGN_IN_METHOD="github.com";fe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends Er{constructor(){super("twitter.com")}static credential(t,e){return je._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return pe.credential(e,r)}catch{return null}}}pe.TWITTER_SIGN_IN_METHOD="twitter.com";pe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await re._fromIdTokenResponse(t,r,i),o=Nc(r);return new _n({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Nc(r);return new _n({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Nc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends ue{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new oi(t,e,r,i)}}function jh(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oi._fromErrorAndOperation(n,s,t,r):s})}async function Dy(n,t,e=!1){const r=await nr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return _n._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(n,t,e=!1){const{auth:r}=n;if(te(r.app))return Promise.reject(Oe(r));const i="reauthenticate";try{const s=await nr(n,jh(r,i,t,n),e);b(s.idToken,r,"internal-error");const o=ia(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(n.uid===a,r,"user-mismatch"),_n._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(n,t,e=!1){if(te(n.app))return Promise.reject(Oe(n));const r="signIn",i=await jh(n,r,t),s=await _n._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}function Oy(n,t,e,r){return at(n).onIdTokenChanged(t,e,r)}function My(n,t,e){return at(n).beforeAuthStateChanged(t,e)}function Oc(n,t,e,r){return at(n).onAuthStateChanged(t,e,r)}function Mc(n){return at(n).signOut()}const ai="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ai,"1"),this.storage.removeItem(ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(){const n=gt();return sa(n)||zi(n)}const xy=1e3,Fy=10;class zh extends qh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ly()&&my(),this.fallbackToPolling=xh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);py()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Fy):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},xy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}zh.type="LOCAL";const Uy=zh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h extends qh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}$h.type="SESSION";const Hh=$h;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new Hi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(e.origin,s)),c=await By(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=ca("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function qy(n){Kt().location.href=n}/**
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
 */function Gh(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function zy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $y(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Hy(){return Gh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="firebaseLocalStorageDb",Gy=1,ci="firebaseLocalStorage",Kh="fbase_key";class Tr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Gi(n,t){return n.transaction([ci],t?"readwrite":"readonly").objectStore(ci)}function Wy(){const n=indexedDB.deleteDatabase(Wh);return new Tr(n).toPromise()}function Ks(){const n=indexedDB.open(Wh,Gy);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ci,{keyPath:Kh})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ci)?t(r):(r.close(),await Wy(),t(await Ks()))})})}async function Lc(n,t,e){const r=Gi(n,!0).put({[Kh]:t,value:e});return new Tr(r).toPromise()}async function Ky(n,t){const e=Gi(n,!1).get(t),r=await new Tr(e).toPromise();return r===void 0?null:r.value}function xc(n,t){const e=Gi(n,!0).delete(t);return new Tr(e).toPromise()}const Qy=800,Xy=3;class Qh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ks(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Xy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hi._getInstance(Hy()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await zy(),!this.activeServiceWorker)return;this.sender=new jy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||$y()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ks();return await Lc(t,ai,"1"),await xc(t,ai),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lc(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Ky(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>xc(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Gi(i,!1).getAll();return new Tr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qh.type="LOCAL";const Yy=Qh;new vr(3e4,6e4);/**
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
 */function Xh(n,t){return t?ie(t):(b(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Bh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return an(t,this._buildIdpRequest())}_linkToIdToken(t,e){return an(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return an(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Jy(n){return Ny(n.auth,new la(n),n.bypassAuthState)}function Zy(n){const{auth:t,user:e}=n;return b(e,t,"internal-error"),Vy(e,new la(n),n.bypassAuthState)}async function tv(n){const{auth:t,user:e}=n;return b(e,t,"internal-error"),Dy(e,new la(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Jy;case"linkViaPopup":case"linkViaRedirect":return tv;case"reauthViaPopup":case"reauthViaRedirect":return Zy;default:Yt(this.auth,"internal-error")}}resolve(t){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new vr(2e3,1e4);async function Fc(n,t,e){if(te(n.app))return Promise.reject(xt(n,"operation-not-supported-in-this-environment"));const r=$i(n);Y_(n,t,aa);const i=Xh(r,e);return new De(r,"signInViaPopup",t,i).executeNotNull()}class De extends Yh{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,De.currentPopupAction&&De.currentPopupAction.cancel(),De.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return b(t,this.auth,"internal-error"),t}async onExecution(){le(this.filter.length===1,"Popup operations only handle one event");const t=ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,De.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ev.get())};t()}}De.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="pendingRedirect",Ur=new Map;class rv extends Yh{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Ur.get(this.auth._key());if(!t){try{const r=await iv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Ur.set(this.auth._key(),t)}return this.bypassAuthState||Ur.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iv(n,t){const e=av(t),r=ov(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function sv(n,t){Ur.set(n._key(),t)}function ov(n){return ie(n._redirectPersistence)}function av(n){return Fr(nv,n.config.apiKey,n.name)}async function cv(n,t,e=!1){if(te(n.app))return Promise.reject(Oe(n));const r=$i(n),i=Xh(r,t),o=await new rv(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=10*60*1e3;class uv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hv(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Jh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(xt(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=lv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uc(t))}saveEventToCache(t){this.cachedEventUids.add(Uc(t)),this.lastProcessedEventTime=Date.now()}}function Uc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Jh({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function hv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(n,t={}){return An(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pv=/^https?/;async function mv(n){if(n.config.emulator)return;const{authorizedDomains:t}=await dv(n);for(const e of t)try{if(gv(e))return}catch{}Yt(n,"unauthorized-domain")}function gv(n){const t=Gs(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!pv.test(e))return!1;if(fv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _v=new vr(3e4,6e4);function Bc(){const n=Kt().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function yv(n){return new Promise((t,e)=>{var r,i,s;function o(){Bc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bc(),e(xt(n,"network-request-failed"))},timeout:_v.get()})}if(!((i=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Kt().gapi)===null||s===void 0)&&s.load)o();else{const a=Ay("iframefcb");return Kt()[a]=()=>{gapi.load?o():e(xt(n,"network-request-failed"))},Iy(`${wy()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw Br=null,t})}let Br=null;function vv(n){return Br=Br||yv(n),Br}/**
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
 */const Ev=new vr(5e3,15e3),Tv="__/auth/iframe",Iv="emulator/auth/iframe",wv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Av=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rv(n){const t=n.config;b(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?na(t,Iv):`https://${n.config.authDomain}/${Tv}`,r={apiKey:t.apiKey,appName:n.name,v:yn},i=Av.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${ir(r).slice(1)}`}async function Pv(n){const t=await vv(n),e=Kt().gapi;return b(e,n,"internal-error"),t.open({where:document.body,url:Rv(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xt(n,"network-request-failed"),a=Kt().setTimeout(()=>{s(o)},Ev.get());function c(){Kt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Sv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cv=500,bv=600,kv="_blank",Dv="http://localhost";class jc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vv(n,t,e,r=Cv,i=bv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Sv),{width:r.toString(),height:i.toString(),top:s,left:o}),l=gt().toLowerCase();e&&(a=Vh(l)?kv:e),Dh(l)&&(t=t||Dv,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,v])=>`${d}${f}=${v},`,"");if(fy(l)&&a!=="_self")return Nv(t||"",a),new jc(null);const h=window.open(t||"",a,u);b(h,n,"popup-blocked");try{h.focus()}catch{}return new jc(h)}function Nv(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Ov="__/auth/handler",Mv="emulator/auth/handler",Lv=encodeURIComponent("fac");async function qc(n,t,e,r,i,s){b(n.config.authDomain,n,"auth-domain-config-required"),b(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:yn,eventId:i};if(t instanceof aa){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",kd(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(t instanceof Er){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${Lv}=${encodeURIComponent(c)}`:"";return`${xv(n)}?${ir(a).slice(1)}${l}`}function xv({config:n}){return n.emulator?na(n,Mv):`https://${n.authDomain}/${Ov}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="webStorageSupport";class Fv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hh,this._completeRedirectFn=cv,this._overrideRedirectResult=sv}async _openPopup(t,e,r,i){var s;le((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qc(t,e,r,Gs(),i);return Vv(t,o,ca())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await qc(t,e,r,Gs(),i);return qy(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(le(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Pv(t),r=new uv(t);return e.register("authEvent",i=>(b(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(fs,{type:fs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fs];o!==void 0&&e(!!o),Yt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=mv(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return xh()||sa()||zi()}}const Uv=Fv;var zc="@firebase/auth",$c="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qv(n){cn(new Me("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fh(n)},l=new Ey(r,i,s,c);return Py(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),cn(new Me("auth-internal",t=>{const e=$i(t.getProvider("auth").getImmediate());return(r=>new Bv(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ye(zc,$c,jv(n)),ye(zc,$c,"esm2017")}/**
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
 */const zv=5*60,$v=tl("authIdTokenMaxAge")||zv;let Hc=null;const Hv=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>$v)return;const i=e==null?void 0:e.token;Hc!==i&&(Hc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gc(n=rl()){const t=to(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Ry(n,{popupRedirectResolver:Uv,persistence:[Yy,Uy,Hh]}),r=tl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Hv(s.toString());My(e,o,()=>o(e.currentUser)),Oy(e,a=>o(a))}}const i=Jc("auth");return i&&Sy(e,`http://${i}`),e}function Gv(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}Ty({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=xt("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Gv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qv("Browser");const M="C:/Users/nabet/Desktop/lincoln-app/my-app/src/routes/+page.svelte";function Wc(n,t,e){const r=n.slice();return r[25]=t[e],r}function Zh(n){let t,e,r,i,s,o,a,c,l,u,h,d,f,v,_="Sign in with Google",p,E,T="Sign in with Google",P,$;const G={c:function(){t=B("div"),e=B("button"),r=B("div"),i=Pt(),s=B("div"),o=B("div"),a=Ge("svg"),c=Ge("path"),l=Ge("path"),u=Ge("path"),h=Ge("path"),d=Ge("path"),f=Pt(),v=B("span"),v.textContent=_,p=Pt(),E=B("span"),E.textContent=T,this.h()},l:function(W){t=j(W,"DIV",{class:!0});var nt=X(t);e=j(nt,"BUTTON",{style:!0,class:!0});var rt=X(e);r=j(rt,"DIV",{class:!0}),X(r).forEach(q),i=St(rt),s=j(rt,"DIV",{class:!0});var it=X(s);o=j(it,"DIV",{class:!0});var Ut=X(o);a=We(Ut,"svg",{version:!0,xmlns:!0,viewBox:!0,"xmlns:xlink":!0,style:!0,class:!0});var _t=X(a);c=We(_t,"path",{fill:!0,d:!0,class:!0}),X(c).forEach(q),l=We(_t,"path",{fill:!0,d:!0,class:!0}),X(l).forEach(q),u=We(_t,"path",{fill:!0,d:!0,class:!0}),X(u).forEach(q),h=We(_t,"path",{fill:!0,d:!0,class:!0}),X(h).forEach(q),d=We(_t,"path",{fill:!0,d:!0,class:!0}),X(d).forEach(q),_t.forEach(q),Ut.forEach(q),f=St(it),v=j(it,"SPAN",{class:!0,"data-svelte-h":!0}),zt(v)!=="svelte-11ibdex"&&(v.textContent=_),p=St(it),E=j(it,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),zt(E)!=="svelte-4mi5ow"&&(E.textContent=T),it.forEach(q),rt.forEach(q),nt.forEach(q),this.h()},h:function(){A(r,"class","gsi-material-button-state s-y_bCXRrkrYfP"),O(r,M,130,20,4352),A(c,"fill","#EA4335"),A(c,"d","M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"),A(c,"class","s-y_bCXRrkrYfP"),O(c,M,134,32,4737),A(l,"fill","#4285F4"),A(l,"d","M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"),A(l,"class","s-y_bCXRrkrYfP"),O(l,M,135,32,4939),A(u,"fill","#FBBC05"),A(u,"d","M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"),A(u,"class","s-y_bCXRrkrYfP"),O(u,M,136,32,5127),A(h,"fill","#34A853"),A(h,"d","M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"),A(h,"class","s-y_bCXRrkrYfP"),O(h,M,137,32,5322),A(d,"fill","none"),A(d,"d","M0 0h48v48H0z"),A(d,"class","s-y_bCXRrkrYfP"),O(d,M,138,32,5528),A(a,"version","1.1"),A(a,"xmlns","http://www.w3.org/2000/svg"),A(a,"viewBox","0 0 48 48"),A(a,"xmlns:xlink","http://www.w3.org/1999/xlink"),kt(a,"display","block"),A(a,"class","s-y_bCXRrkrYfP"),O(a,M,133,28,4562),A(o,"class","gsi-material-button-icon s-y_bCXRrkrYfP"),O(o,M,132,24,4494),A(v,"class","gsi-material-button-contents s-y_bCXRrkrYfP"),O(v,M,141,22,5661),kt(E,"display","none"),A(E,"class","s-y_bCXRrkrYfP"),O(E,M,142,22,5754),A(s,"class","gsi-material-button-content-wrapper s-y_bCXRrkrYfP"),O(s,M,131,20,4419),kt(e,"margin-top","-6px"),A(e,"class","gsi-material-button s-y_bCXRrkrYfP"),O(e,M,129,16,4251),A(t,"class","s-y_bCXRrkrYfP"),O(t,M,128,12,4228)},m:function(W,nt){qe(W,t,nt),C(t,e),C(e,r),C(e,i),C(e,s),C(s,o),C(o,a),C(a,c),C(a,l),C(a,u),C(a,h),C(a,d),C(s,f),C(s,v),C(s,p),C(s,E),P||($=Bt(e,"click",n[5],!1,!1,!1,!1),P=!0)},p:Bn,d:function(W){W&&q(t),P=!1,$()}};return we("SvelteRegisterBlock",{block:G,id:Zh.name,type:"else",source:"(128:8) {:else}",ctx:n}),G}function td(n){let t,e,r,i,s,o,a,c,l,u,h,d,f;const v={c:function(){t=B("div"),e=Qe("Logged in as "),r=B("span"),i=Qe(n[3]),s=Qe(" ("),o=Qe(n[4]),a=Qe(")"),c=Pt(),l=B("button"),u=B("img"),this.h()},l:function(p){t=j(p,"DIV",{class:!0});var E=X(t);e=Xe(E,"Logged in as "),r=j(E,"SPAN",{style:!0,class:!0});var T=X(r);i=Xe(T,n[3]),s=Xe(T," ("),o=Xe(T,n[4]),a=Xe(T,")"),T.forEach(q),c=St(E),l=j(E,"BUTTON",{style:!0,class:!0});var P=X(l);u=j(P,"IMG",{src:!0,width:!0,class:!0}),P.forEach(q),E.forEach(q),this.h()},h:function(){kt(r,"font-weight","bold"),A(r,"class","s-y_bCXRrkrYfP"),O(r,M,124,29,3859),id(u.src,h="https://static-00.iconduck.com/assets.00/logout-icon-2048x2046-yqonjwjv.png")||A(u,"src",h),A(u,"width","15px"),A(u,"class","s-y_bCXRrkrYfP"),O(u,M,125,145,4068),kt(l,"padding-left","10px"),kt(l,"border","none"),kt(l,"cursor","pointer"),kt(l,"appearance","none"),kt(l,"background-color","inherit"),A(l,"class","s-y_bCXRrkrYfP"),O(l,M,125,16,3939),A(t,"class","s-y_bCXRrkrYfP"),O(t,M,123,12,3823)},m:function(p,E){qe(p,t,E),C(t,e),C(t,r),C(r,i),C(r,s),C(r,o),C(r,a),C(t,c),C(t,l),C(l,u),d||(f=Bt(l,"click",n[6],!1,!1,!1,!1),d=!0)},p:function(p,E){E&8&&ps(i,p[3]),E&16&&ps(o,p[4])},d:function(p){p&&q(t),d=!1,f()}};return we("SvelteRegisterBlock",{block:v,id:td.name,type:"if",source:"(123:8) {#if loggedIn}",ctx:n}),v}function ed(n){let t,e="Please log in to access your To-Do list.";const r={c:function(){t=B("div"),t.textContent=e,this.h()},l:function(s){t=j(s,"DIV",{class:!0,"data-svelte-h":!0}),zt(t)!=="svelte-1t7rq4w"&&(t.textContent=e),this.h()},h:function(){A(t,"class","center s-y_bCXRrkrYfP"),O(t,M,174,4,7013)},m:function(s,o){qe(s,t,o)},p:Bn,d:function(s){s&&q(t)}};return we("SvelteRegisterBlock",{block:r,id:ed.name,type:"else",source:"(174:0) {:else}",ctx:n}),r}function nd(n){let t,e,r,i,s,o="Add",a,c,l,u,h=ua(n[0]),d=[];for(let _=0;_<h.length;_+=1)d[_]=Xs(Wc(n,h,_));let f=null;h.length||(f=Qs(n));const v={c:function(){t=B("div"),e=B("div"),r=B("input"),i=Pt(),s=B("button"),s.textContent=o,a=Pt(),c=B("ol");for(let p=0;p<d.length;p+=1)d[p].c();f&&f.c(),this.h()},l:function(p){t=j(p,"DIV",{class:!0,style:!0});var E=X(t);e=j(E,"DIV",{style:!0,class:!0});var T=X(e);r=j(T,"INPUT",{class:!0,type:!0,placeholder:!0}),i=St(T),s=j(T,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(s)!=="svelte-o1wz7e"&&(s.textContent=o),T.forEach(q),a=St(E),c=j(E,"OL",{class:!0});var P=X(c);for(let $=0;$<d.length;$+=1)d[$].l(P);f&&f.l(P),P.forEach(q),E.forEach(q),this.h()},h:function(){A(r,"class","inputs s-y_bCXRrkrYfP"),A(r,"type","text"),A(r,"placeholder","Add Task"),O(r,M,154,12,6077),A(s,"class","buttons s-y_bCXRrkrYfP"),O(s,M,155,12,6166),kt(e,"width","fit-content"),kt(e,"margin","0 auto"),A(e,"class","s-y_bCXRrkrYfP"),O(e,M,153,8,6014),A(c,"class","s-y_bCXRrkrYfP"),O(c,M,157,8,6248),A(t,"class","center s-y_bCXRrkrYfP"),kt(t,"width","50%"),O(t,M,152,4,5965)},m:function(p,E){qe(p,t,E),C(t,e),C(e,r),ha(r,n[1]),C(e,i),C(e,s),C(t,a),C(t,c);for(let T=0;T<d.length;T+=1)d[T]&&d[T].m(c,null);f&&f.m(c,null),l||(u=[Bt(r,"input",n[13]),Bt(s,"click",n[7],!1,!1,!1,!1)],l=!0)},p:function(p,E){if(E&2&&r.value!==p[1]&&ha(r,p[1]),E&3841){h=ua(p[0]);let T;for(T=0;T<h.length;T+=1){const P=Wc(p,h,T);d[T]?d[T].p(P,E):(d[T]=Xs(P),d[T].c(),d[T].m(c,null))}for(;T<d.length;T+=1)d[T].d(1);d.length=h.length,!h.length&&f?f.p(p,E):h.length?f&&(f.d(1),f=null):(f=Qs(p),f.c(),f.m(c,null))}},d:function(p){p&&q(t),cd(d,p),f&&f.d(),l=!1,Kc(u)}};return we("SvelteRegisterBlock",{block:v,id:nd.name,type:"if",source:"(152:0) {#if loggedIn}",ctx:n}),v}function Qs(n){let t,e="No tasks found";const r={c:function(){t=B("p"),t.textContent=e,this.h()},l:function(s){t=j(s,"P",{class:!0,"data-svelte-h":!0}),zt(t)!=="svelte-iikpyn"&&(t.textContent=e),this.h()},h:function(){A(t,"class","s-y_bCXRrkrYfP"),O(t,M,169,16,6929)},m:function(s,o){qe(s,t,o)},p:Bn,d:function(s){s&&q(t)}};return we("SvelteRegisterBlock",{block:r,id:Qs.name,type:"else",source:"(169:12) {:else}",ctx:n}),r}function Xs(n){let t,e,r=n[25].task+"",i,s,o,a,c="✓",l,u,h="X",d,f,v="^",_,p,E="v",T,P,$;function G(){return n[14](n[25])}function L(){return n[15](n[25])}function W(){return n[16](n[25])}function nt(){return n[17](n[25])}function rt(){return n[18](n[25])}const it={c:function(){t=B("li"),e=B("a"),i=Qe(r),s=Pt(),o=B("span"),a=B("button"),a.textContent=c,l=Pt(),u=B("button"),u.textContent=h,d=Pt(),f=B("button"),f.textContent=v,_=Pt(),p=B("button"),p.textContent=E,T=Pt(),this.h()},l:function(_t){t=j(_t,"LI",{class:!0});var Ot=X(t);e=j(Ot,"A",{href:!0,class:!0});var Ir=X(e);i=Xe(Ir,r),Ir.forEach(q),s=St(Ot),o=j(Ot,"SPAN",{class:!0});var w=X(o);a=j(w,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(a)!=="svelte-1fh6r7w"&&(a.textContent=c),l=St(w),u=j(w,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(u)!=="svelte-1pap0kh"&&(u.textContent=h),d=St(w),f=j(w,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(f)!=="svelte-16mrsew"&&(f.textContent=v),_=St(w),p=j(w,"BUTTON",{class:!0,"data-svelte-h":!0}),zt(p)!=="svelte-bw731x"&&(p.textContent=E),w.forEach(q),T=St(Ot),Ot.forEach(q),this.h()},h:function(){A(e,"href","#"),A(e,"class","s-y_bCXRrkrYfP"),da(e,"done",n[25].isDone),O(e,M,160,20,6344),A(a,"class","buttons s-y_bCXRrkrYfP"),O(a,M,162,24,6496),A(u,"class","buttons s-y_bCXRrkrYfP"),O(u,M,163,24,6588),A(f,"class","buttons s-y_bCXRrkrYfP"),O(f,M,164,24,6682),A(p,"class","buttons s-y_bCXRrkrYfP"),O(p,M,165,24,6772),A(o,"class","right s-y_bCXRrkrYfP"),O(o,M,161,20,6450),A(t,"class","list s-y_bCXRrkrYfP"),O(t,M,159,16,6305)},m:function(_t,Ot){qe(_t,t,Ot),C(t,e),C(e,i),C(t,s),C(t,o),C(o,a),C(o,l),C(o,u),C(o,d),C(o,f),C(o,_),C(o,p),C(t,T),P||($=[Bt(e,"click",G,!1,!1,!1,!1),Bt(a,"click",L,!1,!1,!1,!1),Bt(u,"click",W,!1,!1,!1,!1),Bt(f,"click",nt,!1,!1,!1,!1),Bt(p,"click",rt,!1,!1,!1,!1)],P=!0)},p:function(_t,Ot){n=_t,Ot&1&&r!==(r=n[25].task+"")&&ps(i,r),Ot&1&&da(e,"done",n[25].isDone)},d:function(_t){_t&&q(t),P=!1,Kc($)}};return we("SvelteRegisterBlock",{block:it,id:Xs.name,type:"each",source:"(159:12) {#each todos as item}",ctx:n}),it}function Ys(n){let t,e,r,i,s="To-Do Tracker",o,a,c,l,u,h,d,f;function v(G,L){return G[2]?td:Zh}let _=v(n),p=_(n);function E(G,L){return G[2]?nd:ed}let T=E(n),P=T(n);const $={c:function(){t=B("div"),e=B("div"),r=B("div"),i=B("span"),i.textContent=s,o=Pt(),a=B("div"),p.c(),c=Pt(),l=B("br"),u=B("br"),h=Pt(),P.c(),this.h()},l:function(L){t=j(L,"DIV",{class:!0});var W=X(t);e=j(W,"DIV",{class:!0});var nt=X(e);r=j(nt,"DIV",{class:!0});var rt=X(r);i=j(rt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),zt(i)!=="svelte-13u2be1"&&(i.textContent=s),o=St(rt),a=j(rt,"DIV",{class:!0});var it=X(a);p.l(it),it.forEach(q),rt.forEach(q),c=St(nt),l=j(nt,"BR",{class:!0}),u=j(nt,"BR",{class:!0}),h=St(nt),P.l(nt),nt.forEach(q),W.forEach(q),this.h()},h:function(){kt(i,"font-size","20px"),A(i,"class","s-y_bCXRrkrYfP"),O(i,M,120,8,3705),A(a,"class","right s-y_bCXRrkrYfP"),O(a,M,121,8,3766),A(r,"class","topnav s-y_bCXRrkrYfP"),O(r,M,119,4,3675),A(l,"class","s-y_bCXRrkrYfP"),O(l,M,150,4,5935),A(u,"class","s-y_bCXRrkrYfP"),O(u,M,150,8,5939),A(e,"class","overlay s-y_bCXRrkrYfP"),O(e,M,117,0,3646),A(t,"class","bg s-y_bCXRrkrYfP"),O(t,M,116,0,3628)},m:function(L,W){qe(L,t,W),C(t,e),C(e,r),C(r,i),C(r,o),C(r,a),p.m(a,null),C(e,c),C(e,l),C(e,u),C(e,h),P.m(e,null),d||(f=Bt(window,"keydown",n[12],!1,!1,!1,!1),d=!0)},p:function(L,[W]){_===(_=v(L))&&p?p.p(L,W):(p.d(1),p=_(L),p&&(p.c(),p.m(a,null))),T===(T=E(L))&&P?P.p(L,W):(P.d(1),P=T(L),P&&(P.c(),P.m(e,null)))},i:Bn,o:Bn,d:function(L){L&&q(t),p.d(),P.d(),d=!1,f()}};return we("SvelteRegisterBlock",{block:$,id:Ys.name,type:"component",source:"",ctx:n}),$}function Wv(n,t,e){let{$$slots:r={},$$scope:i}=t;ad("Page",r,[]);const s=Es(fa),o=Tc(),a=vc(o,"todos"),c=Gc();c.useDeviceLanguage();let l=0,u=[],h="",d=!1,f,v,_;Oc(c,w=>{w&&(f=w.uid,e(4,_=w.email),e(3,v=w.displayName),e(2,d=!0),Rc(a,Jt=>{e(0,u=[]),Jt.forEach(yt=>{if(yt.data().author==f){let Mt={id:yt.id,...yt.data()};e(0,u=[Mt,...u])}}),l=u.length,u.sort(function(yt,Mt){return Mt.order-yt.order})}))});const p=()=>{Fc(c,new qt)},E=()=>{Mc(c),e(2,d=!1),f="",e(0,u=[]),l=0},T=async()=>{h!==""&&(await Ac(a,{order:l+1,task:h,isDone:!1,createdAt:new Date,author:f}),e(1,h=""))},P=async w=>{await Ic(Zt(o,"todos",w.id),{isDone:!w.isDone})},$=async w=>{let Jt=w.order;const yt=Dr(o);await wc(Zt(o,"todos",w.id));for(let Mt=l;Mt>=Jt;Mt--){const Rn=Zt(o,"todos",u[l-Mt].id);yt.update(Rn,{order:u[l-Mt].order-1})}await yt.commit()},G=async w=>{if(w.order==l)return;let Jt=u.find(({order:Wi})=>Wi==w.order+1);const yt=Dr(o),Mt=Zt(o,"todos",w.id);yt.update(Mt,{order:w.order+1});const Rn=Zt(o,"todos",Jt.id);yt.update(Rn,{order:Jt.order-1}),await yt.commit()},L=async w=>{if(w.order==1)return;let Jt=u.find(({order:Wi})=>Wi==w.order-1);const yt=Dr(o),Mt=Zt(o,"todos",w.id);yt.update(Mt,{order:w.order-1});const Rn=Zt(o,"todos",Jt.id);yt.update(Rn,{order:Jt.order+1}),await yt.commit()},W=w=>{w.key==="Enter"&&T()},nt=[];Object.keys(t).forEach(w=>{!~nt.indexOf(w)&&w.slice(0,2)!=="$$"&&w!=="slot"&&console.warn(`<Page> was created with unknown prop '${w}'`)});function rt(){h=this.value,e(1,h)}const it=w=>P(w),Ut=w=>P(w),_t=w=>$(w),Ot=w=>G(w),Ir=w=>L(w);return n.$capture_state=()=>({firebaseConfig:fa,initializeApp:Es,getFirestore:Tc,collection:vc,onSnapshot:Rc,doc:Zt,updateDoc:Ic,deleteDoc:wc,addDoc:Ac,writeBatch:Dr,GoogleAuthProvider:qt,signInWithPopup:Fc,getAuth:Gc,signOut:Mc,onAuthStateChanged:Oc,app:s,db:o,colRef:a,auth:c,count:l,todos:u,task:h,loggedIn:d,uid:f,userName:v,userEmail:_,login:p,logout:E,addTodo:T,markDone:P,deleteTodo:$,moveUp:G,moveDown:L,keyPressed:W}),n.$inject_state=w=>{"count"in w&&(l=w.count),"todos"in w&&e(0,u=w.todos),"task"in w&&e(1,h=w.task),"loggedIn"in w&&e(2,d=w.loggedIn),"uid"in w&&(f=w.uid),"userName"in w&&e(3,v=w.userName),"userEmail"in w&&e(4,_=w.userEmail)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[u,h,d,v,_,p,E,T,P,$,G,L,W,rt,it,Ut,_t,Ot,Ir]}class Zv extends sd{constructor(t){super(t),od(this,t,Wv,Ys,rd,{}),we("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:Ys.name})}}export{Zv as component};
