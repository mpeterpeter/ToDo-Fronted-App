var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function h(){return f("")}function m(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function v(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}function b(t,e){for(let n=0;n<t.options.length;n+=1){const l=t.options[n];if(l.__value===e)return void(l.selected=!0)}}let k;function _(t){k=t}const x=[],L=[],w=[],C=[],O=Promise.resolve();let E=!1;function S(t){w.push(t)}let j=!1;const N=new Set;function T(){if(!j){j=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];_(e),A(e.$$)}for(_(null),x.length=0;L.length;)L.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];N.has(e)||(N.add(e),e())}w.length=0}while(x.length);for(;C.length;)C.pop()();E=!1,j=!1,N.clear()}}function A(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const P=new Set;let z;function F(){z={r:0,c:[],p:z}}function I(){z.r||l(z.c),z=z.p}function U(t,e){t&&t.i&&(P.delete(t),t.i(e))}function q(t,e,n,l){if(t&&t.o){if(P.has(t))return;P.add(t),z.c.push((()=>{P.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function B(t){t&&t.c()}function D(t,n,r){const{fragment:i,on_mount:s,on_destroy:u,after_update:c}=t.$$;i&&i.m(n,r),S((()=>{const n=s.map(e).filter(o);u?u.push(...n):l(n),t.$$.on_mount=[]})),c.forEach(S)}function J(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(x.push(t),E||(E=!0,O.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,o,r,i,s,u,a=[-1]){const d=k;_(e);const f=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let p=!1;if(f.ctx=r?r(e,o.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return f.ctx&&s(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&M(e,t)),n})):[],f.update(),p=!0,l(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();o.intro&&U(e.$$.fragment),D(e,o.target,o.anchor),T()}_(d)}class G{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const K=[];function Q(e,n=t){let l;const o=[];function i(t){if(r(e,t)&&(e=t,l)){const t=!K.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),K.push(n,e)}if(t){for(let t=0;t<K.length;t+=2)K[t][0](K[t+1]);K.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(r,s=t){const u=[r,s];return o.push(u),1===o.length&&(l=n(i)||t),r(e),()=>{const t=o.indexOf(u);-1!==t&&o.splice(t,1),0===o.length&&(l(),l=null)}}}}let R={id_count:0,lists:{},currentList:"default"};const V=function(){let t=Q(R),e=JSON.parse(localStorage.getItem("data"));e&&(t=Q(e));const n=t=>{localStorage.setItem("data",JSON.stringify(t))};return t.updateToLocal=e=>{t.update((t=>t)),n(e)},t.idPlus=()=>t.update((t=>(t.id_count++,n(t),t))),t.addList=e=>t.update((t=>(t.lists[e]=[],t.currentList=e,n(t),t))),t.deleteList=e=>t.update((t=>"default"!==e?(delete t.lists[e],t.currentList="default",n(t),t):(alert("No List left!"),t))),t.setCurrentList=e=>t.update((t=>(t.currentList=e,n(t),t))),t.addToCurrentList=e=>t.update((t=>{let l=t.currentList;return t.lists[l]=[...t.lists[l],e],n(t),t})),t.cleanUpCurrentList=()=>t.update((t=>{let e=t.currentList;return t.lists[e]=t.lists[e].filter((t=>!0!==t.done)),n(t),t})),t}();function W(t,e,n){const l=t.slice();return l[8]=e[n],l}function X(t){let e,n=Object.keys(t[1].lists),l=[];for(let e=0;e<n.length;e+=1)l[e]=Y(W(t,n,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=h()},m(t,n){for(let e=0;e<l.length;e+=1)l[e].m(t,n);u(t,e,n)},p(t,o){if(2&o){let r;for(n=Object.keys(t[1].lists),r=0;r<n.length;r+=1){const i=W(t,n,r);l[r]?l[r].p(i,o):(l[r]=Y(i),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(t){a(l,t),t&&c(e)}}}function Y(t){let e,n,l,o=t[8]+"";return{c(){e=d("option"),n=f(o),e.__value=l=t[8],e.value=e.__value},m(t,l){u(t,e,l),s(e,n)},p(t,r){2&r&&o!==(o=t[8]+"")&&$(n,o),2&r&&l!==(l=t[8])&&(e.__value=l,e.value=e.__value)},d(t){t&&c(e)}}}function Z(e){let n,o,r,i,a,f,h,$,v,k,_,x,L,w=Object.keys(e[1].lists),C=w&&X(e);return{c(){n=d("main"),o=d("div"),r=d("input"),i=p(),a=d("button"),a.textContent="New List",f=p(),h=d("div"),$=d("select"),v=d("option"),v.textContent="ListenAnzeige",C&&C.c(),k=p(),_=d("button"),_.textContent="delete List",g(r,"id","listSelect"),g(r,"type","text"),g(o,"class","svelte-zbi8xj"),v.__value="default",v.value=v.__value,v.disabled=!0,g($,"name","currentList"),g($,"id","Svelte-Select"),void 0===e[1].currentList&&S((()=>e[6].call($))),g(h,"class","svelte-zbi8xj"),g(n,"class","svelte-zbi8xj")},m(t,l){u(t,n,l),s(n,o),s(o,r),y(r,e[0]),s(o,i),s(o,a),s(n,f),s(n,h),s(h,$),s($,v),C&&C.m($,null),b($,e[1].currentList),s(h,k),s(h,_),x||(L=[m(r,"keyup",e[3]),m(r,"input",e[4]),m(a,"click",e[5]),m($,"change",e[6]),m(_,"click",e[7])],x=!0)},p(t,[e]){1&e&&r.value!==t[0]&&y(r,t[0]),2&e&&(w=Object.keys(t[1].lists)),w?C?C.p(t,e):(C=X(t),C.c(),C.m($,null)):C&&(C.d(1),C=null),2&e&&b($,t[1].currentList)},i:t,o:t,d(t){t&&c(n),C&&C.d(),x=!1,l(L)}}}function tt(t,e,n){let l;i(t,V,(t=>n(1,l=t)));let o="";const r=t=>{"Enter"===t&&o&&(V.addList(o),n(0,o=""))};return[o,l,r,t=>r(t.key),function(){o=this.value,n(0,o)},()=>r("Enter"),function(){l.currentList=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),V.set(l)},()=>{V.deleteList(l.currentList)}]}class et extends G{constructor(t){super(),H(this,t,tt,Z,r,{})}}function nt(e){let n,o,r,i,a,f;return{c(){n=d("div"),o=d("input"),r=p(),i=d("button"),i.textContent="Add",g(o,"type","text"),g(o,"class","svelte-1lbkt1"),g(i,"class","svelte-1lbkt1"),g(n,"class","svelte-1lbkt1")},m(t,l){u(t,n,l),s(n,o),y(o,e[0]),s(n,r),s(n,i),a||(f=[m(o,"keyup",e[2]),m(o,"input",e[3]),m(i,"click",e[4])],a=!0)},p(t,[e]){1&e&&o.value!==t[0]&&y(o,t[0])},i:t,o:t,d(t){t&&c(n),a=!1,l(f)}}}function lt(t,e,n){let l;i(t,V,(t=>n(5,l=t)));let o="";const r=t=>{if("Enter"==t&&o){V.idPlus();let t={id:l.id_count.toString()+o,name:o,done:!1};V.addToCurrentList(t),n(0,o="")}};return[o,r,t=>r(t.key),function(){o=this.value,n(0,o)},()=>r("Enter")]}class ot extends G{constructor(t){super(),H(this,t,lt,nt,r,{})}}function rt(t){let e,n,o,r;return{c(){e=d("input"),v(e,"text-decoration","none"),g(e,"id",n=t[0].id),g(e,"type","text"),e.readOnly=!0,g(e,"class","svelte-faty5d")},m(n,l){u(n,e,l),t[7](e),y(e,t[0].name),o||(r=[m(e,"input",t[8]),m(e,"dblclick",t[9]),m(e,"keyup",t[3])],o=!0)},p(t,l){1&l&&n!==(n=t[0].id)&&g(e,"id",n),1&l&&e.value!==t[0].name&&y(e,t[0].name)},d(n){n&&c(e),t[7](null),o=!1,l(r)}}}function it(t){let e,n,o,r;return{c(){e=d("input"),v(e,"text-decoration","line-through"),g(e,"id",n=t[0].id),g(e,"type","text"),e.readOnly=!0,g(e,"class","svelte-faty5d")},m(n,l){u(n,e,l),t[4](e),y(e,t[0].name),o||(r=[m(e,"input",t[5]),m(e,"dblclick",t[6]),m(e,"keyup",t[3])],o=!0)},p(t,l){1&l&&n!==(n=t[0].id)&&g(e,"id",n),1&l&&e.value!==t[0].name&&y(e,t[0].name)},d(n){n&&c(e),t[4](null),o=!1,l(r)}}}function st(e){let n,l,o,r,i;function a(t,e){return t[0].done?it:rt}let f=a(e),h=f(e);return{c(){n=d("div"),h.c(),l=p(),o=d("button"),o.textContent="Done",g(n,"class","svelte-faty5d")},m(t,c){u(t,n,c),h.m(n,null),s(n,l),s(n,o),r||(i=m(o,"click",e[10]),r=!0)},p(t,[e]){f===(f=a(t))&&h?h.p(t,e):(h.d(1),h=f(t),h&&(h.c(),h.m(n,l)))},i:t,o:t,d(t){t&&c(n),h.d(),r=!1,i()}}}function ut(t,e,n){let l;i(t,V,(t=>n(11,l=t)));let{task:o={}}=e,r="";const s=()=>{!1===o.done?n(0,o.done=!0,o):n(0,o.done=!1,o),V.updateToLocal(l)};return t.$$set=t=>{"task"in t&&n(0,o=t.task)},[o,r,s,t=>{"Enter"==t.key&&(n(1,r.readOnly=!0,r),V.updateToLocal(l))},function(t){L[t?"unshift":"push"]((()=>{r=t,n(1,r)}))},function(){o.name=this.value,n(0,o)},()=>n(1,r.readOnly=!1,r),function(t){L[t?"unshift":"push"]((()=>{r=t,n(1,r)}))},function(){o.name=this.value,n(0,o)},()=>n(1,r.readOnly=!1,r),()=>s()]}class ct extends G{constructor(t){super(),H(this,t,ut,st,r,{task:0})}}function at(t,e,n){const l=t.slice();return l[3]=e[n],l}function dt(e){let n;return{c(){n=d("div"),n.textContent="No List selected.",g(n,"class","svelte-d7o63y")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}function ft(t){let e,n,l,o,r,i,a,h,y,b,k,_,x,L=t[1].lists[t[0]].length+"";a=new ot({});let w=t[1].lists[t[0]]&&pt(t);return{c(){e=d("div"),n=d("h2"),l=f(t[2]),o=f(" | "),r=f(L),i=p(),B(a.$$.fragment),h=p(),w&&w.c(),y=p(),b=d("button"),b.textContent="CleanUp",g(n,"id","Progress"),v(b,"margin","15px 0 15px auto"),v(b,"width","40%"),g(e,"class","task-list-container svelte-d7o63y")},m(t,c){u(t,e,c),s(e,n),s(n,l),s(n,o),s(n,r),s(e,i),D(a,e,null),s(e,h),w&&w.m(e,null),s(e,y),s(e,b),k=!0,_||(x=m(b,"click",V.cleanUpCurrentList),_=!0)},p(t,n){(!k||4&n)&&$(l,t[2]),(!k||3&n)&&L!==(L=t[1].lists[t[0]].length+"")&&$(r,L),t[1].lists[t[0]]?w?(w.p(t,n),3&n&&U(w,1)):(w=pt(t),w.c(),U(w,1),w.m(e,y)):w&&(F(),q(w,1,1,(()=>{w=null})),I())},i(t){k||(U(a.$$.fragment,t),U(w),k=!0)},o(t){q(a.$$.fragment,t),q(w),k=!1},d(t){t&&c(e),J(a),w&&w.d(),_=!1,x()}}}function pt(t){let e,n,l=t[1].lists[t[0]],o=[];for(let e=0;e<l.length;e+=1)o[e]=ht(at(t,l,e));const r=t=>q(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,l){for(let e=0;e<o.length;e+=1)o[e].m(t,l);u(t,e,l),n=!0},p(t,n){if(3&n){let i;for(l=t[1].lists[t[0]],i=0;i<l.length;i+=1){const r=at(t,l,i);o[i]?(o[i].p(r,n),U(o[i],1)):(o[i]=ht(r),o[i].c(),U(o[i],1),o[i].m(e.parentNode,e))}for(F(),i=l.length;i<o.length;i+=1)r(i);I()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)U(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)q(o[t]);n=!1},d(t){a(o,t),t&&c(e)}}}function ht(t){let e,n;return e=new ct({props:{task:t[3]}}),{c(){B(e.$$.fragment)},m(t,l){D(e,t,l),n=!0},p(t,n){const l={};3&n&&(l.task=t[3]),e.$set(l)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function mt(t){let e,n,l,o,r,i,a,f,h,m;o=new et({});const $=[ft,dt],y=[];function v(t,e){return"default"!==t[1].currentList?0:1}return i=v(t),a=y[i]=$[i](t),{c(){e=d("main"),n=d("h1"),n.textContent="ToDo",l=p(),B(o.$$.fragment),r=p(),a.c(),f=p(),h=d("footer"),h.innerHTML='Icons erstellt von <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com</a>',g(n,"class","svelte-d7o63y"),g(h,"id","icon"),g(h,"class","svelte-d7o63y"),g(e,"class","svelte-d7o63y")},m(t,c){u(t,e,c),s(e,n),s(e,l),D(o,e,null),s(e,r),y[i].m(e,null),s(e,f),s(e,h),m=!0},p(t,[n]){let l=i;i=v(t),i===l?y[i].p(t,n):(F(),q(y[l],1,1,(()=>{y[l]=null})),I(),a=y[i],a?a.p(t,n):(a=y[i]=$[i](t),a.c()),U(a,1),a.m(e,f))},i(t){m||(U(o.$$.fragment,t),U(a),m=!0)},o(t){q(o.$$.fragment,t),q(a),m=!1},d(t){t&&c(e),J(o),y[i].d()}}}function gt(t,e,n){let l,o;i(t,V,(t=>n(1,o=t)));let r=0;return t.$$.update=()=>{2&t.$$.dirty&&n(0,l=o.currentList),3&t.$$.dirty&&"default"!==l&&n(2,r=o.lists[l].filter((t=>t.done)).length),2&t.$$.dirty&&V.updateToLocal(o)},[l,o,r]}return new class extends G{constructor(t){super(),H(this,t,gt,mt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
