var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function d(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let p;function h(t){p=t}function m(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],g=[],y=[],b=[],_=Promise.resolve();let w=!1;function x(t){y.push(t)}let v=!1;const k=new Set;function E(){if(!v){v=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];h(n),j(n.$$)}for(h(null),$.length=0;g.length;)g.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];k.has(n)||(k.add(n),n())}y.length=0}while($.length);for(;b.length;)b.pop()();w=!1,v=!1,k.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const A=new Set;function N(t,n){-1===t.$$.dirty[0]&&($.push(t),w||(w=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(c,u,s,i,l,f,d=[-1]){const m=p;h(c);const $=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let g=!1;if($.ctx=s?s(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),g&&N(c,t)),n})):[],$.update(),g=!0,o($.before_update),$.fragment=!!i&&i($.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();u.intro&&((y=c.$$.fragment)&&y.i&&(A.delete(y),y.i(b))),function(t,e,c){const{fragment:u,on_mount:s,on_destroy:a,after_update:i}=t.$$;u&&u.m(e,c),x((()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(x)}(c,u.target,u.anchor),E()}var y,b;h(m)}function O(t){let n,e,o,r,c,p,h,m=t[0].strPlayer+"",$=t[0].strTeam+"";return{c(){n=i("h1"),e=l("Nombre: "),o=l(m),r=l(" "),c=i("h1"),p=l("Equipo actual: "),h=l($),f(n,"class","svelte-1e9puaw"),f(c,"class","svelte-1e9puaw")},m(t,a){s(t,n,a),u(n,e),u(n,o),s(t,r,a),s(t,c,a),u(c,p),u(c,h)},p(t,n){1&n&&m!==(m=t[0].strPlayer+"")&&d(o,m),1&n&&$!==($=t[0].strTeam+"")&&d(h,$)},d(t){t&&a(n),t&&a(r),t&&a(c)}}}function P(n){let e,o=n[0]&&O(n);return{c(){e=i("main"),o&&o.c(),f(e,"class","svelte-1e9puaw")},m(t,n){s(t,e,n),o&&o.m(e,null)},p(t,[n]){t[0]?o?o.p(t,n):(o=O(t),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:t,o:t,d(t){t&&a(e),o&&o.d()}}}function q(t,n,e){let o;return m(async function(t,n){e(0,o=await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${t}%20${n}`))}("lionel","messi")),[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,q,P,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
