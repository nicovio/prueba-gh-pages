var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function l(){return i(" ")}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let d;function p(t){d=t}const h=[],$=[],m=[],g=[],b=Promise.resolve();let y=!1;function _(t){m.push(t)}let x=!1;const v=new Set;function k(){if(!x){x=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];p(n),w(n.$$)}for(p(null),h.length=0;$.length;)$.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;g.length;)g.pop()();y=!1,x=!1,v.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const j=new Set;function E(t,n){-1===t.$$.dirty[0]&&(h.push(t),y||(y=!0,b.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(u,c,s,i,l,f,h=[-1]){const $=d;p(u);const m=u.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:e(),dirty:h,skip_bound:!1};let g=!1;if(m.ctx=s?s(u,c.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&E(u,t)),n})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();c.intro&&((b=u.$$.fragment)&&b.i&&(j.delete(b),b.i(y))),function(t,e,u){const{fragment:c,on_mount:a,on_destroy:s,after_update:i}=t.$$;c&&c.m(e,u),_((()=>{const e=a.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(_)}(u,c.target,c.anchor),k()}var b,y;p($)}function S(n){let e,o,r,u,d,p,h,$,m;return{c(){e=s("main"),o=s("h1"),r=i("Hello "),u=i(n[0]),d=i("!"),p=l(),h=s("h2"),h.textContent="sos malo",$=l(),m=s("p"),m.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',f(o,"class","svelte-1tky8bj"),f(e,"class","svelte-1tky8bj")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),c(e,o),c(o,r),c(o,u),c(o,d),c(e,p),c(e,h),c(e,$),c(e,m)},p(t,[n]){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(u,t[0])},i:t,o:t,d(t){t&&a(e)}}}function C(t,n,e){let{name:o}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,C,S,u,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
