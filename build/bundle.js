var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function l(){return s(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function p(t){d=t}const h=[],$=[],m=[],g=[],b=Promise.resolve();let y=!1;function _(t){m.push(t)}let x=!1;const v=new Set;function k(){if(!x){x=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];p(e),w(e.$$)}for(p(null),h.length=0;$.length;)$.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;g.length;)g.pop()();y=!1,x=!1,v.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const j=new Set;function E(t,e){-1===t.$$.dirty[0]&&(h.push(t),y||(y=!0,b.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(u,c,i,s,l,f,h=[-1]){const $=d;p(u);const m=u.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:n(),dirty:h,skip_bound:!1};let g=!1;if(m.ctx=i?i(u,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&E(u,t)),e})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();c.intro&&((b=u.$$.fragment)&&b.i&&(j.delete(b),b.i(y))),function(t,n,u){const{fragment:c,on_mount:a,on_destroy:i,after_update:s}=t.$$;c&&c.m(n,u),_((()=>{const n=a.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(_)}(u,c.target,c.anchor),k()}var b,y;p($)}function S(e){let n,o,r,u,d,p,h,$,m;return{c(){n=i("main"),o=i("h1"),r=s("Hola "),u=s(e[0]),d=s("!"),p=l(),h=i("h2"),h.textContent="a ver que pasa",$=l(),m=i("p"),m.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',f(o,"class","svelte-1tky8bj"),f(n,"class","svelte-1tky8bj")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),c(n,o),c(o,r),c(o,u),c(o,d),c(n,p),c(n,h),c(n,$),c(n,m)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(u,t[0])},i:t,o:t,d(t){t&&a(n)}}}function C(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,C,S,u,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
