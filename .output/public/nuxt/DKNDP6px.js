import{aq as R,ar as B,r as q,as as S,a1 as N,at as E,au as T,h as U,av as I,ae as w,ag as A,aw as D,ax as F,C as x,ay as O,az as k,aA as V,aB as z,ak as H,aC as M,aD as $}from"./BghwnaRZ.js";async function j(t,r=R()){const{path:f,matched:y}=r.resolve(t);if(!y.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(f)))return;const e=r._preloadPromises=r._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>j(t,r));r._routePreloaded.add(f);const a=y.map(s=>{var n;return(n=s.components)==null?void 0:n.default}).filter(s=>typeof s=="function");for(const s of a){const n=Promise.resolve(s()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}const G=(...t)=>t.find(r=>r!==void 0);function Q(t){const r=t.componentName||"NuxtLink";function f(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return L(e,t.trailingSlash);const s="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:L(s,t.trailingSlash)}}function y(e){const a=R(),s=H(),n=x(()=>!!e.target&&e.target!=="_self"),v=x(()=>{const d=e.to||e.href||"";return typeof d=="string"&&O(d,{acceptRelative:!0})}),b=A("RouterLink"),g=b&&typeof b!="string"?b.useLink:void 0,m=x(()=>{if(e.external)return!0;const d=e.to||e.href||"";return typeof d=="object"?!1:d===""||v.value}),u=x(()=>{const d=e.to||e.href||"";return m.value?d:f(d,a.resolve)}),c=m.value||g==null?void 0:g({...e,to:u}),p=x(()=>{var d;if(!u.value||v.value)return u.value;if(m.value){const C=typeof u.value=="object"&&"path"in u.value?k(u.value):u.value,P=typeof C=="object"?a.resolve(C).href:C;return f(P,a.resolve)}return typeof u.value=="object"?((d=a.resolve(u.value))==null?void 0:d.href)??null:f(V(s.app.baseURL,u.value),a.resolve)});return{to:u,hasTarget:n,isAbsoluteUrl:v,isExternal:m,href:p,isActive:(c==null?void 0:c.isActive)??x(()=>u.value===a.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>u.value===a.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>a.resolve(u.value)),async navigate(){await z(p.value,{replace:e.replace,external:m.value||n.value})}}}return B({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:y,setup(e,{slots:a}){const s=R(),{to:n,href:v,navigate:b,isExternal:g,hasTarget:m,isAbsoluteUrl:u}=y(e),c=q(!1),p=q(null),d=l=>{var o;p.value=e.custom?(o=l==null?void 0:l.$el)==null?void 0:o.nextElementSibling:l==null?void 0:l.$el};function C(l){var o,i;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((o=e.prefetchOn)==null?void 0:o[l])??((i=t.prefetchOn)==null?void 0:i[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!K()}async function P(l=S()){if(c.value)return;c.value=!0;const o=typeof n.value=="string"?n.value:g.value?k(n.value):s.resolve(n.value).fullPath,i=g.value?new URL(o,window.location.href).href:o;await Promise.all([l.hooks.callHook("link:prefetch",i).catch(()=>{}),!g.value&&!m.value&&j(n.value,s).catch(()=>{})])}if(C("visibility")){const l=S();let o,i=null;N(()=>{const h=W();E(()=>{o=T(()=>{var _;(_=p==null?void 0:p.value)!=null&&_.tagName&&(i=h.observe(p.value,async()=>{i==null||i(),i=null,await P(l)}))})})}),U(()=>{o&&I(o),i==null||i(),i=null})}return()=>{var i;if(!g.value&&!m.value){const h={ref:d,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(C("interaction")&&(h.onPointerenter=P.bind(null,void 0),h.onFocus=P.bind(null,void 0)),c.value&&(h.class=e.prefetchedClass||t.prefetchedClass),h.rel=e.rel||void 0),w(A("RouterLink"),h,a.default)}const l=e.target||null,o=G(e.noRel?"":e.rel,t.externalRelAttribute,u.value||m.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:v.value,navigate:b,prefetch:P,get route(){if(!v.value)return;const h=new URL(v.value,window.location.href);return{path:h.pathname,fullPath:h.pathname,get query(){return D(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:v.value}},rel:o,target:l,isExternal:g.value||m.value,isActive:!1,isExactActive:!1}):null:w("a",{ref:p,href:v.value||null,rel:o,target:l},(i=a.default)==null?void 0:i.call(a))}}})}const Y=Q(F);function L(t,r){const f=r==="append"?M:$;return O(t)&&!t.startsWith("http")?t:f(t,!0)}function W(){const t=S();if(t._observer)return t._observer;let r=null;const f=new Map,y=(a,s)=>(r||(r=new IntersectionObserver(n=>{for(const v of n){const b=f.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&b&&b()}})),f.set(a,s),r.observe(a),()=>{f.delete(a),r.unobserve(a),f.size===0&&(r.disconnect(),r=null)});return t._observer={observe:y}}const J=/2g/;function K(){const t=navigator.connection;return!!(t&&(t.saveData||J.test(t.effectiveType)))}export{Y as _};
