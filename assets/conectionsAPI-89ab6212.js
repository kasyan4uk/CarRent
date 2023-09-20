import{a as q,b as Je,d as Ve,s as x,j as u,r as Se,u as We,p as Ke,e as Ge}from"./index-525707b4.js";function Re(e=q){const t=e===q?Je:Ve(e);return function(){const{store:r}=t();return r}}const Xe=Re();function Qe(e=q){const t=e===q?Xe:Re(e);return function(){return t().dispatch}}const Ye=Qe(),Ze=x.div`
  position: relative;
  background-color: #FFFFFF;
  border-radius: 24px;
`,et=x.img`
  display: block;
  max-width: 100%;
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`,tt=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  margin-bottom: 8px;
  line-height: 24px;
`,nt=x.ul`
  display: flex;
  width: 100%;
  gap: 5px;
`,ue=x.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
`,rt=x.div`
  color: #3470ff;
  font-size: 16px;
`,st=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 300px;
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 6px;
  margin-bottom: 14px;
`,T=x.div`
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;

  &:last-child {
    border-right: none;
  }
`,ot=x.p`
  color: #121417;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,it=x.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`,at=x.p`
  color: #121417;
  font-size: 14px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`,ct=x.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 6px;
`,fe=x.li`
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 4px;

  &:last-child {
    border-right: none;
  }
`,lt=x.div`
  padding: 0;
  margin: 0;
`,ut=x.p`
  margin-bottom: 8px;
  font-family: 'Manrope', sans-serif;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`,ft=x.ul`
  width: 380px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,k=x.li`
  padding: 7px 10px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  & span {
    color: #3470ff;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`,dt=x.a`
    display: block;
    padding: 12px 50px;
    height: 44px;
    width: 168px;
    border: none;
    border-radius: 12px;
    background: #3470FF;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
    &:hover {
        background: #0B44CD;
    }
`;function pt({car:e,city:t,country:n}){const r=e.rentalConditions.split(`
`,3),s=r[0],o=parseInt(s.match(/\d+/)[0],10);return u.jsxs(Ze,{children:[u.jsx(et,{src:e.img,alt:e.make}),u.jsxs(u.Fragment,{children:[u.jsx(tt,{children:u.jsxs(nt,{children:[u.jsx(ue,{children:e.make}),u.jsxs(rt,{children:[e.model,u.jsx("span",{style:{color:"black"},children:","})]}),u.jsx(ue,{children:e.year})]})}),u.jsxs(st,{children:[u.jsx(T,{children:t}),u.jsx(T,{children:n}),u.jsxs(T,{children:["id: ",e.id]}),u.jsxs(T,{children:["Year: ",e.year]}),u.jsxs(T,{children:["Type: ",e.type]}),u.jsxs(T,{children:["Fuel Consumption: ",e.fuelConsumption]}),u.jsxs(T,{children:["Engine Size: ",e.engineSize]})]}),u.jsx(ot,{children:e.description}),u.jsxs(it,{children:[u.jsx(at,{children:"Accessories and functionalities:"}),u.jsxs(ct,{children:[e.accessories.map((i,c)=>u.jsx(fe,{children:i},c)),e.functionalities.map((i,c)=>u.jsx(fe,{children:i},c))]})]}),u.jsxs(lt,{children:[u.jsx(ut,{children:"Rental Conditions:"}),u.jsxs(ft,{children:[u.jsxs(k,{children:["Minimum age: ",u.jsx("span",{children:o})]}),u.jsx(k,{children:r[1]}),u.jsx(k,{children:r[2]}),u.jsxs(k,{children:["Mileage: ",u.jsx("span",{children:e.mileage.toLocaleString("en-EN")})]}),u.jsxs(k,{children:["Price: ",u.jsx("span",{children:e.rentalPrice})]})]}),u.jsx(dt,{href:"tel:+380730000000",children:"Rental car"})]})]})]})}const ht="/CarRent/assets/CloseModal-0af5ba82.svg",mt=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 999;
`,xt=x.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 45px 37px 40px 32px;
  max-width: 472px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,yt=x.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0;
  background-color: transparent;
  border: none;
`,gt=x.div`
  background-image: url(${ht});
  width: 24px;
  height: 24px;
  cursor: pointer;
`;function bt({children:e,onClose:t}){const n=r=>{r.currentTarget===r.target&&t()};return Se.useEffect(()=>{const r=s=>{s.code==="Escape"&&t()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[t]),u.jsx(mt,{onClick:n,children:u.jsxs(xt,{children:[u.jsx(yt,{type:"button","aria-label":"close button",onClick:t,children:u.jsx(gt,{})}),e]})})}const wt="/CarRent/assets/normal-3bc5255a.svg",Et="/CarRent/assets/active-c912ba3c.svg",St=x.div`
    position: relative;
    width: 274px;
    height: 426px;
`,Rt=x.img`
    object-fit: cover;
    height: 268px;
    border-radius: 14px;
`,Ot=x.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
`,At=x.div`
    display: flex;
`,Ct=x.p`
    padding-right: 5px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    color: #121417;
`,jt=x.p`
    padding-right: 5px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    color: #3470FF;
`,Tt=x.p`
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
`,Ft=x.p`
    padding-right: 9px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
`,Nt=x.ul`
    padding-top: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 274px;
    gap: 6px;
`,F=x.li`
    padding-right: 4px;
    color: rgba(18, 20, 23, 0.5);
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    border-right: 1px solid rgba(18, 20, 23, 0.3);
    &:last-child {
    border-right: none;
  }
`,Pt=x.button`
    margin-top: 28px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    width: 100%;
    height: 44px;
    border-radius: 12px;
    background-color: #3470FF;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    &:hover {
        background: #0B44CD;
    }
`,Bt=x.button`
    position: absolute;
    top: 14px;
    right: 14px;
    height: 18px;
    width: 18px;
    border: none;
    background-color: inherit;
`,kt=x.div`
  background-image: url(${wt});
  width: 18px;
  height: 18px;
`,Dt=x.div`
  background-image: url(${Et});
  width: 18px;
  height: 18px;
`;function Zn({car:e}){const t=Ye(),r=We(p=>p.favorite).includes(e.id),s=()=>{t(Ke(e.id))},o=()=>{t(Ge(e.id))},[i,c]=Se.useState(!1),h=()=>{c(!i)},l=e.address.split(","),f=l[1],m=l[2],b=()=>{const p=e.functionalities[0],E=8;return p.length>E?p.slice(0,8)+"...":p},g=()=>{const p=e.rentalCompany,E=8;return p.length>E?p.slice(0,8)+"...":p},d=()=>{const p=e.model,E=5;return p.length>E?" ":p};return u.jsxs(St,{children:[u.jsx(Bt,{onClick:r?o:s,type:"button",children:r?u.jsx(Dt,{}):u.jsx(kt,{})}),u.jsx(Rt,{src:e.img}),u.jsxs(Ot,{children:[u.jsxs(At,{children:[u.jsx(Ct,{children:e.make}),u.jsxs(jt,{children:[d(),u.jsx("span",{style:{color:"#121417"},children:","})]}),u.jsx(Tt,{children:e.year})]}),u.jsx(Ft,{children:e.rentalPrice})]}),u.jsxs(Nt,{children:[u.jsx(F,{children:f}),u.jsx(F,{children:m}),u.jsx(F,{children:g()}),u.jsx(F,{children:e.type}),u.jsx(F,{children:e.make}),u.jsx(F,{children:e.mileage}),u.jsx(F,{children:b()})]}),u.jsx(Pt,{onClick:h,children:"Learn more"}),i&&u.jsx(bt,{onClose:h,children:u.jsx(pt,{car:e,city:f,country:m})})]})}function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Lt}=Object.prototype,{getPrototypeOf:se}=Object,J=(e=>t=>{const n=Lt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>J(t)===e),V=e=>t=>typeof t===e,{isArray:B}=Array,L=V("undefined");function _t(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=A("ArrayBuffer");function Ut(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Mt=V("string"),S=V("function"),Ce=V("number"),W=e=>e!==null&&typeof e=="object",It=e=>e===!0||e===!1,I=e=>{if(J(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},vt=A("Date"),zt=A("File"),Ht=A("Blob"),qt=A("FileList"),$t=e=>W(e)&&S(e.pipe),Jt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=J(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},Vt=A("URLSearchParams"),Wt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function je(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Te=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fe=e=>!L(e)&&e!==Te;function ee(){const{caseless:e}=Fe(this)&&this||{},t={},n=(r,s)=>{const o=e&&je(t,s)||s;I(t[o])&&I(r)?t[o]=ee(t[o],r):I(r)?t[o]=ee({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&_(arguments[r],n);return t}const Kt=(e,t,n,{allOwnKeys:r}={})=>(_(t,(s,o)=>{n&&S(s)?e[o]=Oe(s,n):e[o]=s},{allOwnKeys:r}),e),Gt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Xt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Qt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Yt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zt=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Ce(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},en=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),tn=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},nn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},rn=A("HTMLFormElement"),sn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),on=A("RegExp"),Ne=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},an=e=>{Ne(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},cn=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},ln=()=>{},un=(e,t)=>(e=+e,Number.isFinite(e)?e:t),X="abcdefghijklmnopqrstuvwxyz",pe="0123456789",Pe={DIGIT:pe,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+pe},fn=(e=16,t=Pe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function dn(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const pn=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return _(r,(i,c)=>{const h=n(i,s+1);!L(h)&&(o[c]=h)}),t[s]=void 0,o}}return r};return n(e,0)},hn=A("AsyncFunction"),mn=e=>e&&(W(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:B,isArrayBuffer:Ae,isBuffer:_t,isFormData:Jt,isArrayBufferView:Ut,isString:Mt,isNumber:Ce,isBoolean:It,isObject:W,isPlainObject:I,isUndefined:L,isDate:vt,isFile:zt,isBlob:Ht,isRegExp:on,isFunction:S,isStream:$t,isURLSearchParams:Vt,isTypedArray:en,isFileList:qt,forEach:_,merge:ee,extend:Kt,trim:Wt,stripBOM:Gt,inherits:Xt,toFlatObject:Qt,kindOf:J,kindOfTest:A,endsWith:Yt,toArray:Zt,forEachEntry:tn,matchAll:nn,isHTMLForm:rn,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Ne,freezeMethods:an,toObjectSet:cn,toCamelCase:sn,noop:ln,toFiniteNumber:un,findKey:je,global:Te,isContextDefined:Fe,ALPHABET:Pe,generateString:fn,isSpecCompliantForm:dn,toJSONObject:pn,isAsyncFn:hn,isThenable:mn};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Be=y.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ke[e]={value:e}});Object.defineProperties(y,ke);Object.defineProperty(Be,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Be);return a.toFlatObject(e,i,function(h){return h!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const xn=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function De(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(s,o){return s=De(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function yn(e){return a.isArray(e)&&!e.some(te)}const gn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function K(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,E){return!a.isUndefined(E[p])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!h&&a.isBlob(d))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?h&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function f(d,p,E){let R=d;if(d&&!E&&typeof d=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&yn(d)||(a.isFileList(d)||a.endsWith(p,"[]"))&&(R=a.toArray(d)))return p=De(p),R.forEach(function(M,$e){!(a.isUndefined(M)||M===null)&&t.append(i===!0?he([p],$e,o):i===null?p:p+"[]",l(M))}),!1}return te(d)?!0:(t.append(he(E,p,o),l(d)),!1)}const m=[],b=Object.assign(gn,{defaultVisitor:f,convertValue:l,isVisitable:te});function g(d,p){if(!a.isUndefined(d)){if(m.indexOf(d)!==-1)throw Error("Circular reference detected in "+p.join("."));m.push(d),a.forEach(d,function(R,N){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(N)?N.trim():N,p,b))===!0&&g(R,p?p.concat(N):[N])}),m.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function oe(e,t){this._pairs=[],e&&K(e,this,t)}const Le=oe.prototype;Le.append=function(t,n){this._pairs.push([t,n])};Le.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function bn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _e(e,t,n){if(!t)return e;const r=n&&n.encode||bn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new oe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class wn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const xe=wn,Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},En=typeof URLSearchParams<"u"?URLSearchParams:oe,Sn=typeof FormData<"u"?FormData:null,Rn=typeof Blob<"u"?Blob:null,On=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),An=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:En,FormData:Sn,Blob:Rn},isStandardBrowserEnv:On,isStandardBrowserWebWorkerEnv:An,protocols:["http","https","file","blob","url","data"]};function Cn(e,t){return K(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function jn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Tn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Me(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),h=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,h?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Tn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(jn(r),s,n,0)}),n}return null}function Fn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ie={transitional:Ue,adapter:O.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Me(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Cn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return K(c?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Fn(t)):t}],transformResponse:[function(t){const n=this.transitional||ie.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ie.headers[e]={}});const ae=ie,Nn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Pn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Nn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function Bn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const kn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Q(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Dn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ln(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class G{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,h,l){const f=D(h);if(!f)throw new Error("header name must be a non-empty string");const m=a.findKey(s,f);(!m||s[m]===void 0||l===!0||l===void 0&&s[m]!==!1)&&(s[m||h]=v(c))}const i=(c,h)=>a.forEach(c,(l,f)=>o(l,f,h));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!kn(t)?i(Pn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Bn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Q(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const c=a.findKey(r,i);c&&(!n||Q(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Q(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=v(s),delete n[o];return}const c=t?Dn(o):String(o).trim();c!==o&&delete n[o],n[c]=v(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=D(i);r[c]||(Ln(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}G.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(G.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(G);const C=G;function Y(e,t){const n=this||ae,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ie(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,y,{__CANCEL__:!0});function _n(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Un=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const h=[];h.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&h.push("expires="+new Date(s).toGMTString()),a.isString(o)&&h.push("path="+o),a.isString(i)&&h.push("domain="+i),c===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Mn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function In(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ve(e,t){return e&&!Mn(t)?In(e,t):t}const vn=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function zn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Hn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(h){const l=Date.now(),f=r[o];i||(i=l),n[s]=h,r[s]=l;let m=o,b=0;for(;m!==s;)b+=n[m++],m=m%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const g=f&&l-f;return g?Math.round(b*1e3/g):void 0}}function ge(e,t){let n=0;const r=Hn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,h=r(c),l=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:h||void 0,estimated:h&&i&&l?(i-o)/h:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const qn=typeof XMLHttpRequest<"u",$n=qn&&function(e){return new Promise(function(n,r){let s=e.data;const o=C.from(e.headers).normalize(),i=e.responseType;let c;function h(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+d))}const f=ve(e.baseURL,e.url);l.open(e.method.toUpperCase(),_e(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function m(){if(!l)return;const g=C.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),p={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};_n(function(R){n(R),h()},function(R){r(R),h()},p),l=null}if("onloadend"in l?l.onloadend=m:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(m)},l.onabort=function(){l&&(r(new y("Request aborted",y.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Ue;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new y(d,p.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,l)),l=null},O.isStandardBrowserEnv){const g=(e.withCredentials||vn(f))&&e.xsrfCookieName&&Un.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(d,p){l.setRequestHeader(p,d)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",ge(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=g=>{l&&(r(!g||g.type?new U(null,e,l):g),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const b=zn(f);if(b&&O.protocols.indexOf(b)===-1){r(new y("Unsupported protocol "+b+":",y.ERR_BAD_REQUEST,e));return}l.send(s||null)})},z={http:xn,xhr:$n};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ze={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function be(e){return Z(e),e.headers=C.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ze.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return Z(e),r.data=Y.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Ie(r)||(Z(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof C?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(l,f,m){return a.isPlainObject(l)&&a.isPlainObject(f)?a.merge.call({caseless:m},l,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(l,f,m){if(a.isUndefined(f)){if(!a.isUndefined(l))return r(void 0,l,m)}else return r(l,f,m)}function o(l,f){if(!a.isUndefined(f))return r(void 0,f)}function i(l,f){if(a.isUndefined(f)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function c(l,f,m){if(m in t)return r(l,f);if(m in e)return r(void 0,l)}const h={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,f)=>s(we(l),we(f),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(f){const m=h[f]||s,b=m(e[f],t[f],f);a.isUndefined(b)&&m!==c||(n[f]=b)}),n}const He="1.5.0",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ee={};ce.transitional=function(t,n,r){function s(o,i){return"[Axios v"+He+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Ee[i]&&(Ee[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Jn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],h=c===void 0||i(c,o,e);if(h!==!0)throw new y("option "+o+" must be "+h,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const ne={assertOptions:Jn,validators:ce},j=ne.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new xe,response:new xe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:j.transitional(j.boolean),forcedJSONParsing:j.transitional(j.boolean),clarifyTimeoutError:j.transitional(j.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:j.function,serialize:j.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=C.concat(i,o);const c=[];let h=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(h=h&&p.synchronous,c.unshift(p.fulfilled,p.rejected))});const l=[];this.interceptors.response.forEach(function(p){l.push(p.fulfilled,p.rejected)});let f,m=0,b;if(!h){const d=[be.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,l),b=d.length,f=Promise.resolve(n);m<b;)f=f.then(d[m++],d[m++]);return f}b=c.length;let g=n;for(m=0;m<b;){const d=c[m++],p=c[m++];try{g=d(g)}catch(E){p.call(this,E);break}}try{f=be.call(this,g)}catch(d){return Promise.reject(d)}for(m=0,b=l.length;m<b;)f=f.then(l[m++],l[m++]);return f}getUri(t){t=P(this.defaults,t);const n=ve(t.baseURL,t.url);return _e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(P(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}$.prototype[t]=n(),$.prototype[t+"Form"]=n(!0)});const H=$;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new U(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(s){t=s}),cancel:t}}}const Vn=le;function Wn(e){return function(n){return e.apply(null,n)}}function Kn(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const Gn=re;function qe(e){const t=new H(e),n=Oe(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return qe(P(e,s))},n}const w=qe(ae);w.Axios=H;w.CanceledError=U;w.CancelToken=Vn;w.isCancel=Ie;w.VERSION=He;w.toFormData=K;w.AxiosError=y;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Wn;w.isAxiosError=Kn;w.mergeConfig=P;w.AxiosHeaders=C;w.formToJSON=e=>Me(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=ze.getAdapter;w.HttpStatusCode=Gn;w.default=w;const Xn=w,Qn="https://65095ce3f6553137159b46b9.mockapi.io/CarRental/";async function er(){try{const e=`${Qn}`;return(await Xn.get(e)).data}catch{alert("Oops, we have a problem")}}export{Zn as C,er as g};
