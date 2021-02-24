var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function i(t){let n;return u(t,(t=>n=t))(),n}function a(t,n,e){t.$$.on_destroy.push(u(n,e))}function l(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function p(t,n,e,o,r,s,c){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(u){const r=f(n,e,o,c);t.p(r,u)}}function d(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function $(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function h(t,n){t.appendChild(n)}function m(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function x(){return b("")}function w(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:_(t,o,n[o])}function P(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function R(t,n){t.value=null==n?"":n}function k(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let A;function C(t){A=t}function O(){if(!A)throw new Error("Function called outside component initialization");return A}function S(){const t=O();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function j(t,n){O().$$.context.set(t,n)}function N(t){return O().$$.context.get(t)}const I=[],T=[],L=[],U=[],M=Promise.resolve();let F=!1;function q(){F||(F=!0,M.then(Y))}function B(t){L.push(t)}let H=!1;const K=new Set;function Y(){if(!H){H=!0;do{for(let t=0;t<I.length;t+=1){const n=I[t];C(n),D(n.$$)}for(C(null),I.length=0;T.length;)T.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];K.has(n)||(K.add(n),n())}L.length=0}while(I.length);for(;U.length;)U.pop()();F=!1,H=!1,K.clear()}}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}const z=new Set;let V;function G(){V={r:0,c:[],p:V}}function J(){V.r||r(V.c),V=V.p}function Q(t,n){t&&t.i&&(z.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(z.has(t))return;z.add(t),V.c.push((()=>{z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function X(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=n[s];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[s]=u}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function nt(t,n,o){const{fragment:c,on_mount:u,on_destroy:i,after_update:a}=t.$$;c&&c.m(n,o),B((()=>{const n=u.map(e).filter(s);i?i.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(B)}function et(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(n,e,s,c,u,i,a=[-1]){const l=A;C(n);const f=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let p=!1;if(f.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&u(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(I.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();e.intro&&Q(n.$$.fragment),nt(n,e.target,e.anchor),Y()}C(l)}class rt{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=t=>void 0===t,ct=t=>"function"==typeof t,ut=t=>"number"==typeof t;function it(){let t=0;return()=>t++}const at="undefined"==typeof window;function lt(t,n,e){return t.addEventListener(n,e),()=>t.removeEventListener(n,e)}const ft=[];function pt(n,e=t){let o;const r=[];function s(t){if(c(n,t)&&(n=t,o)){const t=!ft.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),ft.push(e,n)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,u=t){const i=[c,u];return r.push(i),1===r.length&&(o=e(s)||t),c(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function dt(n,e,o){const c=!Array.isArray(n),i=c?[n]:n,a=e.length<2;return{subscribe:pt(o,(n=>{let o=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=e(c?l[0]:l,n);a?n(o):p=s(o)?o:t},$=i.map(((t,n)=>u(t,(t=>{l[n]=t,f&=~(1<<n),o&&d()}),(()=>{f|=1<<n}))));return o=!0,d(),function(){r($),p()}})).subscribe}}const $t=t=>`@@svnav-ctx__${t}`,ht=$t("LOCATION"),mt=$t("ROUTER"),gt=$t("ROUTE"),yt=$t("ROUTE_PARAMS"),bt=$t("FOCUS_ELEM"),vt=/^:(.+)/,xt=(t,n)=>t.substr(0,n.length)===n,wt=t=>"*"===t[0],_t=t=>t.replace(/(^\/+|\/+$)/g,"");function Et(t,n=!1){const e=_t(t).split("/");return n?e.filter(Boolean):e}const Pt=(t,n)=>t+(n?`?${n}`:""),Rt=t=>`/${_t(t)}`;function kt(...t){const n=t.map((t=>Et(t,!0).join("/"))).join("/");return Rt(n)}const At={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},Ct=t=>At[t];function Ot(t,n,e,o){const r=e&&function(t,n){let e;return 2===t?e=n.path?`path="${n.path}"`:"default":1===t?e=`to="${n.to}"`:3===t&&(e=`basepath="${n.basepath||""}"`),`<${Ct(t)} ${e||""} />`}(o||t,e),s=r?`\n\nOccurred in: ${r}`:"",c=Ct(t);return`<${c}> ${ct(n)?n(c):n}${s}`}const St=t=>(...n)=>t(Ot(...n)),jt=St((t=>{throw new Error(t)})),Nt=St(console.warn);function It(t,n){return{route:t,score:t.default?0:Et(t.fullPath).reduce(((t,n)=>{let e=t;return e+=4,(t=>""===t)(n)?e+=1:(t=>vt.test(t))(n)?e+=2:wt(n)?e-=5:e+=3,e}),0),index:n}}function Tt(t,n){let e,o;const[r]=n.split("?"),s=Et(r),c=""===s[0],u=function(t){return t.map(It).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=u.length;t<r;t++){const{route:r}=u[t];let i=!1;const a={},l=t=>({...r,params:a,uri:t});if(r.default){o=l(n);continue}const f=Et(r.fullPath),p=Math.max(s.length,f.length);let d=0;for(;d<p;d++){const t=f[d],n=s[d];if(!st(t)&&wt(t)){const n="*"===t?"*":t.slice(1);a[n]=s.slice(d).map(decodeURIComponent).join("/");break}if(st(n)){i=!0;break}const e=vt.exec(t);if(e&&!c){const t=decodeURIComponent(n);a[e[1]]=t}else if(t!==n){i=!0;break}}if(!i){e=l(kt(...s.slice(0,d)));break}}return e||o||null}function Lt(t,n){return Tt([t],n)}function Ut(t,n){const{pathname:e,hash:o="",search:r="",state:s}=t,c=Et(n,!0),u=Et(e,!0);for(;c.length;)c[0]!==u[0]&&jt(3,`Invalid state: All locations must begin with the basepath "${n}", found "${e}"`),c.shift(),u.shift();return{pathname:kt(...u),hash:o,search:r,state:s}}const Mt=t=>1===t.length?"":t;function Ft(t){const n=t.indexOf("?"),e=t.indexOf("#"),o=-1!==n,r=-1!==e,s=r?Mt(t.substr(e)):"",c=r?t.substr(0,e):t,u=o?Mt(c.substr(n)):"";return{pathname:o?c.substr(0,n):c,search:u,hash:s}}function qt(t,n,e){return kt(e,function(t,n){if(xt(t,"/"))return t;const[e,o]=t.split("?"),[r]=n.split("?"),s=Et(e),c=Et(r);if(""===s[0])return Pt(r,o);if(!xt(s[0],".")){const t=c.concat(s).join("/");return Pt(("/"===r?"":"/")+t,o)}const u=c.concat(s),i=[];return u.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),Pt(`/${i.join("/")}`,o)}(t,n))}function Bt(t,n){const e=Rt(t.replace(/\*.*$/,""));const o=Et(e,!0),r=Lt({fullPath:e},kt(...Et(n,!0).slice(0,o.length)));return r&&r.uri}const Ht="POP";function Kt(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Yt(t,n){return{...Ft(n),state:t}}const Dt=!(at||!window.document||!window.document.createElement),zt=!at&&"null"===window.location.origin,Vt=function(t){let n=[],e=Kt(t),o=Ht;const r=(t=n)=>t.forEach((t=>t({location:e,action:o})));return{get location(){return e},listen(s){n.push(s);r([s]);const c=lt(t,"popstate",(()=>{e=Kt(t),o=Ht,r([s])}));return()=>{c(),n=n.filter((t=>t!==s))}},navigate(n,s){const{state:c={},replace:u=!1}=s||{};if(o=u?"REPLACE":"PUSH",ut(n))s&&Nt(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=Ht,t.history.go(n);else{const e={...c,_key:Math.random().toString(36).substring(2)};try{t.history[u?"replaceState":"pushState"](e,"",n)}catch(e){t.location[u?"replace":"assign"](n)}}e=Kt(t),r()}}}(Dt&&!zt?window:function(t="/"){let n=0,e=[Yt(null,t)];return{get entries(){return e},get location(){return e[n]},addEventListener(){},removeEventListener(){},history:{get state(){return e[n].state},pushState(t,o,r){n++,e=e.slice(0,n),e.push(Yt(t,r))},replaceState(t,o,r){e[n]=Yt(t,r)},go(t){const o=n+t;o<0||o>e.length-1||(n=o)}}}}()),{navigate:Gt}=Vt;let Jt=null,Qt=!0;function Wt(t){(!Jt||t.level>Jt.level||t.level===Jt.level&&function(t,n){const e=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<e.length;o++){const r=e[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===n)return!1}return!1}(t.routerId,Jt.routerId))&&(Jt=t)}function Xt(t){if(!t)return!1;const n="tabindex";try{if(!t.hasAttribute(n)){let e;t.setAttribute(n,"-1");const o=()=>{t.removeAttribute(n),e()};e=lt(t,"blur",o)}return t.focus(),document.activeElement===t}catch(t){return!1}}function Zt(t,n){return Number(t.dataset.svnavRouteEnd)===n}function tn(t,n=document){return n.querySelector(t)}function nn(t){Promise.resolve(i(t.focusElement)).then((n=>{const e=n||function(t){let n=tn(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Zt(n,t);){if(/^H[1-6]$/i.test(n.tagName))return n;const t=tn("h1,h2,h3,h4,h5,h6",n);if(t)return t;n=n.nextElementSibling}return null}(t.id);e||Nt(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);Xt(e)||Xt(document.documentElement)}))}const en=(t,n,e)=>(o,r)=>(q(),M).then((()=>{if(Jt&&!Qt){if(o&&nn(Jt.route),t.announcements&&r){const{path:o,fullPath:r,meta:s,params:c,uri:u}=Jt.route,a=t.createAnnouncement({path:o,fullPath:r,meta:s,params:c,uri:u},i(e));Promise.resolve(a).then((t=>{n.set(t)}))}Jt=null}else Qt=!1}));function on(t){let n,e,o,r,s;const c=t[20].default,u=l(c,t,t[19],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let n,e;return{c(){n=y("div"),e=b(t[0]),_(n,"role","status"),_(n,"aria-atomic","true"),_(n,"aria-live","polite"),_(n,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){m(t,n,o),h(n,e)},p(t,n){1&n[0]&&P(e,t[0])},d(t){t&&g(n)}}}(t);return{c(){n=y("div"),e=v(),u&&u.c(),o=v(),i&&i.c(),r=x(),k(n,"display","none"),_(n,"aria-hidden","true"),_(n,"data-svnav-router",t[3])},m(t,c){m(t,n,c),m(t,e,c),u&&u.m(t,c),m(t,o,c),i&&i.m(t,c),m(t,r,c),s=!0},p(t,n){u&&u.p&&524288&n[0]&&p(u,c,t,t[19],n,null,null),t[2]&&t[4]&&t[1].announcements&&i.p(t,n)},i(t){s||(Q(u,t),s=!0)},o(t){W(u,t),s=!1},d(t){t&&g(n),t&&g(e),u&&u.d(t),t&&g(o),i&&i.d(t),t&&g(r)}}}const rn=it(),sn="/";function cn(t,n,e){let o,r,s,c,u,{$$slots:i={},$$scope:l}=n,{basepath:f=sn}=n,{url:p=null}=n,{history:d=Vt}=n,{primary:$=!0}=n,{a11y:h={}}=n;const m={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...h},g=f,y=Rt(f),b=N(ht),v=N(mt),x=!b,w=rn(),_=$&&!(v&&!v.manageFocus),E=pt("");a(t,E,(t=>e(0,u=t)));const P=pt([]);a(t,P,(t=>e(16,r=t)));const R=pt(null);a(t,R,(t=>e(18,c=t)));let k=!1;const A=x?0:v.level+1,C=x?pt(Ut(at?Ft(p):d.location,y)):b;a(t,C,(t=>e(15,o=t)));const S=pt(o);a(t,S,(t=>e(17,s=t)));const I=en(m,E,C),T=t=>n=>n.filter((n=>n.id!==t));var L;return x||f===sn||Nt(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),x&&(L=()=>d.listen((t=>{const n=Ut(t.location,y);S.set(o),C.set(n)})),O().$$.on_mount.push(L),j(ht,C)),j(mt,{activeRoute:R,registerRoute:function(t){if(at){if(k)return;const n=Lt(t,o.pathname);if(n)return k=!0,n}else P.update((n=>{const e=T(t.id)(n);return e.push(t),e}))},unregisterRoute:function(t){P.update(T(t))},manageFocus:_,level:A,id:w,history:x?d:v.history,basepath:x?y:v.basepath}),t.$$set=t=>{"basepath"in t&&e(10,f=t.basepath),"url"in t&&e(11,p=t.url),"history"in t&&e(12,d=t.history),"primary"in t&&e(13,$=t.primary),"a11y"in t&&e(14,h=t.a11y),"$$scope"in t&&e(19,l=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&f!==g&&Nt(3,'You cannot change the "basepath" prop. It is ignored.'),98304&t.$$.dirty[0]){const t=Tt(r,o.pathname);R.set(t)}if(163840&t.$$.dirty[0]&&x){const t=!!o.hash,n=!t&&_,e=!t||o.pathname!==s.pathname;I(n,e)}262144&t.$$.dirty[0]&&_&&c&&c.primary&&Wt({level:A,routerId:w,route:c})},[u,m,x,w,_,E,P,R,C,S,f,p,d,$,h,o,r,s,c,l,i]}class un extends rt{constructor(t){super(),ot(this,t,cn,on,c,{basepath:10,url:11,history:12,primary:13,a11y:14},[-1,-1])}}function an(t,n,e=mt,o=3){N(e)||jt(t,(t=>`You cannot use ${t} outside of a ${Ct(o)}.`),n)}function ln(){return an(5),(t=>{const{subscribe:n}=N(t);return{subscribe:n}})(ht)}function fn(){const{history:t}=N(mt);return t}function pn(){const t=N(gt);return t?dt(t,(t=>t.base)):pt("/")}function dn(){an(10);const t=pn(),{basepath:n}=N(mt);return e=>qt(e,i(t),n)}function $n(){an(7);const t=dn(),{navigate:n}=fn();return(e,o)=>{const r=ut(e)?e:t(e);return n(r,o)}}const hn=t=>({params:16&t,location:4&t}),mn=t=>({params:at?i(t[9]):t[4],location:t[2],navigate:t[10]});function gn(t){let n,e;return n=new un({props:{primary:t[1],$$slots:{default:[vn]},$$scope:{ctx:t}}}),{c(){tt(n.$$.fragment)},m(t,o){nt(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.primary=t[1]),264213&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){W(n.$$.fragment,t),e=!1},d(t){et(n,t)}}}function yn(t){let n;const e=t[17].default,o=l(e,t,t[18],mn);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,n){o&&o.p&&262164&n&&p(o,e,t,t[18],n,hn,mn)},i(t){n||(Q(o,t),n=!0)},o(t){W(o,t),n=!1},d(t){o&&o.d(t)}}}function bn(t){let e,o,r;const s=[{location:t[2]},{navigate:t[10]},at?i(t[9]):t[4],t[11]];var c=t[0];function u(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(u())),{c(){e&&tt(e.$$.fragment),o=x()},m(t,n){e&&nt(e,t,n),m(t,o,n),r=!0},p(t,n){const r=3604&n?X(s,[4&n&&{location:t[2]},1024&n&&{navigate:t[10]},528&n&&Z(at?i(t[9]):t[4]),2048&n&&Z(t[11])]):{};if(c!==(c=t[0])){if(e){G();const t=e;W(t.$$.fragment,1,0,(()=>{et(t,1)})),J()}c?(e=new c(u()),tt(e.$$.fragment),Q(e.$$.fragment,1),nt(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&Q(e.$$.fragment,t),r=!0)},o(t){e&&W(e.$$.fragment,t),r=!1},d(t){t&&g(o),e&&et(e,t)}}}function vn(t){let n,e,o,r;const s=[bn,yn],c=[];function u(t,n){return null!==t[0]?0:1}return n=u(t),e=c[n]=s[n](t),{c(){e.c(),o=x()},m(t,e){c[n].m(t,e),m(t,o,e),r=!0},p(t,r){let i=n;n=u(t),n===i?c[n].p(t,r):(G(),W(c[i],1,1,(()=>{c[i]=null})),J(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),Q(e,1),e.m(o.parentNode,o))},i(t){r||(Q(e),r=!0)},o(t){W(e),r=!1},d(t){c[n].d(t),t&&g(o)}}}function xn(t){let n,e,o,r,s,c=t[3]&&gn(t);return{c(){n=y("div"),e=v(),c&&c.c(),o=v(),r=y("div"),k(n,"display","none"),_(n,"aria-hidden","true"),_(n,"data-svnav-route-start",t[5]),k(r,"display","none"),_(r,"aria-hidden","true"),_(r,"data-svnav-route-end",t[5])},m(t,u){m(t,n,u),m(t,e,u),c&&c.m(t,u),m(t,o,u),m(t,r,u),s=!0},p(t,[n]){t[3]?c?(c.p(t,n),8&n&&Q(c,1)):(c=gn(t),c.c(),Q(c,1),c.m(o.parentNode,o)):c&&(G(),W(c,1,1,(()=>{c=null})),J())},i(t){s||(Q(c),s=!0)},o(t){W(c),s=!1},d(t){t&&g(n),t&&g(e),c&&c.d(t),t&&g(o),t&&g(r)}}}const wn=it();function _n(t,e,o){let r;const s=["path","component","meta","primary"];let c,u,i,l,f=$(e,s),{$$slots:p={},$$scope:h}=e,{path:m=""}=e,{component:g=null}=e,{meta:y={}}=e,{primary:b=!0}=e;an(2,e);const v=wn(),{registerRoute:x,unregisterRoute:w,activeRoute:_}=N(mt);a(t,_,(t=>o(16,i=t)));const E=pn();a(t,E,(t=>o(15,c=t)));const P=ln();a(t,P,(t=>o(2,u=t)));const R=pt(null);let k;const A=pt(),C=pt({});a(t,C,(t=>o(4,l=t))),j(gt,A),j(yt,C),j(bt,R);const S=$n();var I;return at||(I=()=>w(v),O().$$.on_destroy.push(I)),t.$$set=t=>{o(23,e=n(n({},e),d(t))),o(11,f=$(e,s)),"path"in t&&o(12,m=t.path),"component"in t&&o(0,g=t.component),"meta"in t&&o(13,y=t.meta),"primary"in t&&o(1,b=t.primary),"$$scope"in t&&o(18,h=t.$$scope)},t.$$.update=()=>{if(45062&t.$$.dirty){const t=""===m,n=kt(c,m),e={id:v,path:m,meta:y,default:t,fullPath:t?"":n,base:t?c:Bt(n,u.pathname),primary:b,focusElement:R};A.set(e),o(14,k=x(e))}if(81920&t.$$.dirty&&o(3,r=!!(k||i&&i.id===v)),81928&t.$$.dirty&&r){const{params:t}=k||i;C.set(t)}},e=d(e),[g,b,u,r,l,v,_,E,P,C,S,f,m,y,k,c,i,p,h]}class En extends rt{constructor(t){super(),ot(this,t,_n,xn,c,{path:12,component:0,meta:13,primary:1})}}function Pn(t){let e,o,r,s;const c=t[13].default,u=l(c,t,t[12],null);let i=[{href:t[0]},t[1],t[2]],a={};for(let t=0;t<i.length;t+=1)a=n(a,i[t]);return{c(){e=y("a"),u&&u.c(),E(e,a)},m(n,c){m(n,e,c),u&&u.m(e,null),o=!0,r||(s=w(e,"click",t[4]),r=!0)},p(t,[n]){u&&u.p&&4096&n&&p(u,c,t,t[12],n,null,null),E(e,a=X(i,[(!o||1&n)&&{href:t[0]},2&n&&t[1],4&n&&t[2]]))},i(t){o||(Q(u,t),o=!0)},o(t){W(u,t),o=!1},d(t){t&&g(e),u&&u.d(t),r=!1,s()}}}function Rn(t,e,o){let r,s,c,u,i;const l=["to","replace","state","getProps"];let f,p=$(e,l),{$$slots:h={},$$scope:m}=e,{to:g}=e,{replace:y=!1}=e,{state:b={}}=e,{getProps:v=null}=e;an(1,e);const x=ln();a(t,x,(t=>o(9,f=t)));const w=S(),_=dn(),{navigate:E}=fn();return t.$$set=t=>{o(17,e=n(n({},e),d(t))),o(18,p=$(e,l)),"to"in t&&o(5,g=t.to),"replace"in t&&o(6,y=t.replace),"state"in t&&o(7,b=t.state),"getProps"in t&&o(8,v=t.getProps),"$$scope"in t&&o(12,m=t.$$scope)},t.$$.update=()=>{544&t.$$.dirty&&o(0,r=_(g,f)),513&t.$$.dirty&&o(10,s=xt(f.pathname,r)),513&t.$$.dirty&&o(11,c=r===f.pathname),2048&t.$$.dirty&&o(1,u=c?{"aria-current":"page"}:{}),o(2,i=(()=>{if(ct(v)){const t=v({location:f,href:r,isPartiallyCurrent:s,isCurrent:c});return{...p,...t}}return p})())},e=d(e),[r,u,i,x,function(t){if(w("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();E(r,{state:b,replace:c||y})}},g,y,b,v,f,s,c,m,h]}class kn extends rt{constructor(t){super(),ot(this,t,Rn,Pn,c,{to:5,replace:6,state:7,getProps:8})}}function An(n){let e,o,r,s,c,u,i,a;return{c(){e=y("main"),o=y("br"),r=v(),s=y("div"),s.textContent="Hola que tal",c=v(),u=y("button"),u.textContent="Volver a home",_(u,"class","svelte-1cwrcx0")},m(t,l){m(t,e,l),h(e,o),h(e,r),h(e,s),h(e,c),h(e,u),i||(a=w(u,"click",n[0]),i=!0)},p:t,i:t,o:t,d(t){t&&g(e),i=!1,a()}}}function Cn(t){return[function(){Gt("/")}]}class On extends rt{constructor(t){super(),ot(this,t,Cn,An,c,{})}}function Sn(t){let n,e,o,r,s,c,u,i=t[0].strPlayer+"",a=("_Retired Soccer"!=t[0].strTeam?t[0].strTeam:"-")+"";return{c(){n=y("h1"),e=b("Nombre: "),o=b(i),r=v(),s=y("h1"),c=b("Equipo actual: "),u=b(a),_(n,"class","svelte-1e9puaw"),_(s,"class","svelte-1e9puaw")},m(t,i){m(t,n,i),h(n,e),h(n,o),m(t,r,i),m(t,s,i),h(s,c),h(s,u)},p(t,n){1&n&&i!==(i=t[0].strPlayer+"")&&P(o,i),1&n&&a!==(a=("_Retired Soccer"!=t[0].strTeam?t[0].strTeam:"-")+"")&&P(u,a)},d(t){t&&g(n),t&&g(r),t&&g(s)}}}function jn(n){let e,o,s,c,u,i,a,l,f,p,d,$,x,E,P,k,A=n[0]&&Sn(n);return{c(){e=y("main"),o=y("h3"),o.textContent="Ambiente: Producción",s=v(),c=y("h4"),c.textContent="Buscar jugador",u=v(),i=y("input"),a=v(),l=y("button"),f=b("Buscar"),d=v(),A&&A.c(),$=v(),x=y("div"),E=y("button"),E.textContent="About",_(i,"type","text"),l.disabled=p=!n[1],_(e,"class","svelte-1e9puaw")},m(t,r){m(t,e,r),h(e,o),h(e,s),h(e,c),h(e,u),h(e,i),R(i,n[1]),h(e,a),h(e,l),h(l,f),h(e,d),A&&A.m(e,null),h(e,$),h(e,x),h(x,E),P||(k=[w(i,"input",n[4]),w(l,"click",n[2]),w(E,"click",n[3])],P=!0)},p(t,[n]){2&n&&i.value!==t[1]&&R(i,t[1]),2&n&&p!==(p=!t[1])&&(l.disabled=p),t[0]?A?A.p(t,n):(A=Sn(t),A.c(),A.m(e,$)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&g(e),A&&A.d(),P=!1,r(k)}}}function Nn(t,n,e){let o,r;const s=$n();return[o,r,async function(){const t=await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${r}`),{player:[n]}=await t.json();e(0,o=n)},function(){s("/about")},function(){r=this.value,e(1,r)}]}class In extends rt{constructor(t){super(),ot(this,t,Nn,jn,c,{})}}function Tn(t){let n;return{c(){n=b("Home")},m(t,e){m(t,n,e)},d(t){t&&g(n)}}}function Ln(t){let n;return{c(){n=b("About")},m(t,e){m(t,n,e)},d(t){t&&g(n)}}}function Un(t){let n,e;return n=new In({}),{c(){tt(n.$$.fragment)},m(t,o){nt(n,t,o),e=!0},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){W(n.$$.fragment,t),e=!1},d(t){et(n,t)}}}function Mn(t){let n,e,o,r,s,c,u,i,a,l;return e=new kn({props:{to:"/",$$slots:{default:[Tn]},$$scope:{ctx:t}}}),r=new kn({props:{to:"/about",$$slots:{default:[Ln]},$$scope:{ctx:t}}}),u=new En({props:{path:"/",$$slots:{default:[Un]},$$scope:{ctx:t}}}),a=new En({props:{path:"about",component:On}}),{c(){n=y("nav"),tt(e.$$.fragment),o=v(),tt(r.$$.fragment),s=v(),c=y("div"),tt(u.$$.fragment),i=v(),tt(a.$$.fragment)},m(t,f){m(t,n,f),nt(e,n,null),h(n,o),nt(r,n,null),m(t,s,f),m(t,c,f),nt(u,c,null),h(c,i),nt(a,c,null),l=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s);const c={};1&n&&(c.$$scope={dirty:n,ctx:t}),u.$set(c)},i(t){l||(Q(e.$$.fragment,t),Q(r.$$.fragment,t),Q(u.$$.fragment,t),Q(a.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),W(r.$$.fragment,t),W(u.$$.fragment,t),W(a.$$.fragment,t),l=!1},d(t){t&&g(n),et(e),et(r),t&&g(s),t&&g(c),et(u),et(a)}}}function Fn(t){let n,e;return n=new un({props:{$$slots:{default:[Mn]},$$scope:{ctx:t}}}),{c(){tt(n.$$.fragment)},m(t,o){nt(n,t,o),e=!0},p(t,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){W(n.$$.fragment,t),e=!1},d(t){et(n,t)}}}return new class extends rt{constructor(t){super(),ot(this,t,null,Fn,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
