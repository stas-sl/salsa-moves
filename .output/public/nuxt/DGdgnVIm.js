import{_ as ve}from"./E6rUM9Hg.js";import{p as D,m as j,b as n,J as fe,K as Q,L as me,M as pe,N as E,x as B,O as ye,P as K,r as H,Q as ge,g as M,R as he,h as be,u as Se,S as we,I as J,e as Ve,C as x,T as ke,U as xe,V as ee,z as Te,W as Be,X as _e,A as Ce,o as W,B as z,w as b,d as A,t as te,n as Ae,Y as Pe,G as Y,E as Ee}from"./DIJIciBX.js";import{m as se,b as re,d as O,q as Me,r as Ne,s as $e,t as Ie,v as Re,w as He,x as Le,y as De,z as F,A as je,B as Oe,C as Ue,D as Ke,E as We,k as q,o as ze,F as Ge,V as qe,e as ae,f as Je,g as Ye,j as Fe,l as Qe,i as G,h as Xe,n as Ze}from"./CGlPYPE_.js";const ie=D({text:String,...se(),...re()},"VToolbarTitle"),ue=j()({name:"VToolbarTitle",props:ie(),setup(e,l){let{slots:t}=l;return O(()=>{const f=!!(t.default||t.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var y;return[f&&n("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(y=t.default)==null?void 0:y.call(t)])]}})}),{}}}),et=[null,"prominent","default","comfortable","compact"],ce=D({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>et.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Me(),...se(),...Ne(),...$e(),...re({tag:"header"}),...fe()},"VToolbar"),le=j()({name:"VToolbar",props:ce(),setup(e,l){var V;let{slots:t}=l;const{backgroundColorClasses:f,backgroundColorStyles:y}=Ie(Q(e,"color")),{borderClasses:o}=Re(e),{elevationClasses:c}=He(e),{roundedClasses:S}=Le(e),{themeClasses:d}=me(e),{rtlClasses:m}=pe(),i=E(!!(e.extended||(V=t.extension)!=null&&V.call(t))),p=B(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),k=B(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ye({VBtn:{variant:"text"}}),O(()=>{var C;const h=!!(e.title||t.title),r=!!(t.image||e.image),u=(C=t.extension)==null?void 0:C.call(t);return i.value=!!(e.extended||u),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},f.value,o.value,c.value,S.value,d.value,m.value,e.class],style:[y.value,e.style]},{default:()=>[r&&n("div",{key:"image",class:"v-toolbar__image"},[t.image?n(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(De,{key:"image-img",cover:!0,src:e.image},null)]),n(F,{defaults:{VTabs:{height:K(p.value)}}},{default:()=>{var v,w,g;return[n("div",{class:"v-toolbar__content",style:{height:K(p.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),h&&n(ue,{key:"title",text:e.title},{text:t.title}),(w=t.default)==null?void 0:w.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(g=t.append)==null?void 0:g.call(t)])])]}}),n(F,{defaults:{VTabs:{height:K(k.value)}}},{default:()=>[n(je,null,{default:()=>[i.value&&n("div",{class:"v-toolbar__extension",style:{height:K(k.value)}},[u])]})]})]})}),{contentHeight:p,extensionHeight:k}}}),tt=D({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function at(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=l;let f=0,y=0;const o=H(null),c=E(0),S=E(0),d=E(0),m=E(!1),i=E(!1),p=B(()=>Number(e.scrollThreshold)),k=B(()=>ge((p.value-c.value)/p.value||0)),V=()=>{const h=o.value;if(!h||t&&!t.value)return;f=c.value,c.value="window"in h?h.pageYOffset:h.scrollTop;const r=h instanceof Window?document.documentElement.scrollHeight:h.scrollHeight;if(y!==r){y=r;return}i.value=c.value<f,d.value=Math.abs(c.value-p.value)};return M(i,()=>{S.value=S.value||c.value}),M(m,()=>{S.value=0}),he(()=>{M(()=>e.scrollTarget,h=>{var u;const r=h?document.querySelector(h):window;r&&r!==o.value&&((u=o.value)==null||u.removeEventListener("scroll",V),o.value=r,o.value.addEventListener("scroll",V,{passive:!0}))},{immediate:!0})}),be(()=>{var h;(h=o.value)==null||h.removeEventListener("scroll",V)}),t&&M(t,V,{immediate:!0}),{scrollThreshold:p,currentScroll:c,currentThreshold:d,isScrollActive:m,scrollRatio:k,isScrollingUp:i,savedScroll:S}}const lt=D({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ce(),...Oe(),...tt(),height:{type:[Number,String],default:64}},"VAppBar"),ot=j()({name:"VAppBar",props:lt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const f=H(),y=Se(e,"modelValue"),o=B(()=>{var w;const v=new Set(((w=e.scrollBehavior)==null?void 0:w.split(" "))??[]);return{hide:v.has("hide"),fullyHide:v.has("fully-hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),c=B(()=>{const v=o.value;return v.hide||v.fullyHide||v.inverted||v.collapse||v.elevate||v.fadeImage||!y.value}),{currentScroll:S,scrollThreshold:d,isScrollingUp:m,scrollRatio:i}=at(e,{canScroll:c}),p=B(()=>o.value.hide||o.value.fullyHide),k=B(()=>e.collapse||o.value.collapse&&(o.value.inverted?i.value>0:i.value===0)),V=B(()=>e.flat||o.value.fullyHide&&!y.value||o.value.elevate&&(o.value.inverted?S.value>0:S.value===0)),h=B(()=>o.value.fadeImage?o.value.inverted?1-i.value:i.value:void 0),r=B(()=>{var g,a;if(o.value.hide&&o.value.inverted)return 0;const v=((g=f.value)==null?void 0:g.contentHeight)??0,w=((a=f.value)==null?void 0:a.extensionHeight)??0;return p.value?S.value<d.value||o.value.fullyHide?v+w:v:v+w});we(B(()=>!!e.scrollBehavior),()=>{Ve(()=>{p.value?o.value.inverted?y.value=S.value>d.value:y.value=m.value||S.value<d.value:y.value=!0})});const{ssrBootStyles:u}=Ue(),{layoutItemStyles:C}=Ke({id:e.name,order:B(()=>parseInt(e.order,10)),position:Q(e,"location"),layoutSize:r,elementSize:E(void 0),active:y,absolute:Q(e,"absolute")});return O(()=>{const v=le.filterProps(e);return n(le,J({ref:f,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":h.value,height:void 0,...u.value},e.style]},v,{collapse:k.value,flat:V.value}),t)}),{}}}),nt=D({...We({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),st=j()({name:"VAppBarNavIcon",props:nt(),setup(e,l){let{slots:t}=l;return O(()=>n(q,J(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),rt=j()({name:"VAppBarTitle",props:ie(),setup(e,l){let{slots:t}=l;return O(()=>n(ue,J(e,{class:"v-app-bar-title"}),t)),{}}});function it(e){return ke()?(xe(e),!0):!1}function L(e){return typeof e=="function"?e():x(e)}const ut=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ct=Object.prototype.toString,dt=e=>ct.call(e)==="[object Object]",de=()=>{};function I(e,l,t){return M(e,(y,o,c)=>{y&&l(y,o,c)},{...t,once:!1})}const X=ut?window:void 0;function vt(e){var l;const t=L(e);return(l=t==null?void 0:t.$el)!=null?l:t}function R(...e){let l,t,f,y;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,f,y]=e,l=X):[l,t,f,y]=e,!l)return de;Array.isArray(t)||(t=[t]),Array.isArray(f)||(f=[f]);const o=[],c=()=>{o.forEach(i=>i()),o.length=0},S=(i,p,k,V)=>(i.addEventListener(p,k,V),()=>i.removeEventListener(p,k,V)),d=M(()=>[vt(l),L(y)],([i,p])=>{if(c(),!i)return;const k=dt(p)?{...p}:p;o.push(...t.flatMap(V=>f.map(h=>S(i,V,h,k))))},{immediate:!0,flush:"post"}),m=()=>{d(),c()};return it(m),m}function ft(e){return typeof e=="function"?e:typeof e=="string"?l=>l.key===e:Array.isArray(e)?l=>e.includes(l.key):()=>!0}function oe(...e){let l,t,f={};e.length===3?(l=e[0],t=e[1],f=e[2]):e.length===2?typeof e[1]=="object"?(l=!0,t=e[0],f=e[1]):(l=e[0],t=e[1]):(l=!0,t=e[0]);const{target:y=X,eventName:o="keydown",passive:c=!1,dedupe:S=!1}=f,d=ft(l);return R(y,o,i=>{i.repeat&&L(S)||d(i)&&t(i)},c)}const mt={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function ne(e={}){const{reactive:l=!1,target:t=X,aliasMap:f=mt,passive:y=!0,onEventFired:o=de}=e,c=ee(new Set),S={toJSON(){return{}},current:c},d=l?ee(S):S,m=new Set,i=new Set;function p(r,u){r in d&&(l?d[r]=u:d[r].value=u)}function k(){c.clear();for(const r of i)p(r,!1)}function V(r,u){var C,v;const w=(C=r.key)==null?void 0:C.toLowerCase(),a=[(v=r.code)==null?void 0:v.toLowerCase(),w].filter(Boolean);w&&(u?c.add(w):c.delete(w));for(const s of a)i.add(s),p(s,u);w==="meta"&&!u?(m.forEach(s=>{c.delete(s),p(s,!1)}),m.clear()):typeof r.getModifierState=="function"&&r.getModifierState("Meta")&&u&&[...c,...a].forEach(s=>m.add(s))}R(t,"keydown",r=>(V(r,!0),o(r)),{passive:y}),R(t,"keyup",r=>(V(r,!1),o(r)),{passive:y}),R("blur",k,{passive:!0}),R("focus",k,{passive:!0});const h=new Proxy(d,{get(r,u,C){if(typeof u!="string")return Reflect.get(r,u,C);if(u=u.toLowerCase(),u in f&&(u=f[u]),!(u in d))if(/[+_-]/.test(u)){const w=u.split(/[+_-]/g).map(g=>g.trim());d[u]=B(()=>w.every(g=>L(h[g])))}else d[u]=H(!1);const v=Reflect.get(r,u,C);return l?L(v):v}});return h}const ht={__name:"practice",setup(e){const{uid:l,moves:t,movesState:f,movesCounts:y,userSettings:o,updateMoveState:c}=Te(),S=Ee(),d=H(null),m=H(!1),i=()=>{var s,P,U;m.value=!1,(U=(P=(s=g==null?void 0:g.value)==null?void 0:s.$el)==null?void 0:P.player)==null||U.pause();const a=t.value.filter(_=>{var T;return o.value.practiceOptions.states.includes(((T=f.value[`move-${_.move}`])==null?void 0:T.state)||"new")});d.value=a[Math.floor(Math.random()*a.length)]};let p=!1;const{space:k}=ne({passive:!1,onEventFired(a){a.code==="Space"&&a.type==="keydown"&&a.preventDefault()}}),{comma:V,period:h,keyP:r,digit1:u,digit2:C,digit3:v}=ne();function w(){return new Promise(a=>{g.value.$el.player.one("seeked",()=>{a()})})}I(k,()=>{var a,s,P;m.value?i():(m.value=!0,(P=(s=(a=g==null?void 0:g.value)==null?void 0:a.$el)==null?void 0:s.player)==null||P.play())}),I(r,()=>{if(m.value){const a=g.value.$el.player;a.paused()?a.play():a.pause()}}),I(u,()=>{var a;m.value&&c([{key:`move-${(a=d.value)==null?void 0:a.move}`,value:{state:"new"}}])}),I(C,()=>{var a;m.value&&c([{key:`move-${(a=d.value)==null?void 0:a.move}`,value:{state:"learning"}}])}),I(v,()=>{var a;m.value&&c([{key:`move-${(a=d.value)==null?void 0:a.move}`,value:{state:"review"}}])}),oe(",",async()=>{if(m.value&&!p){p=!0;const a=g.value.$el.player;a.pause(),a.currentTime(a.currentTime()-1/30),await w(),p=!1}}),oe(".",async()=>{if(m.value&&!p){p=!0;const a=g.value.$el.player;a.pause(),a.currentTime(a.currentTime()+1/30),await w(),p=!1}}),Be(()=>{i()});const g=_e("player");return(a,s)=>{const P=ve,U=Ce("video-player");return W(),z(ze,null,{default:b(()=>[n(ot,{color:"primary",density:"compact"},{prepend:b(()=>[n(st)]),append:b(()=>[n(q,{icon:"mdi-dots-vertical"})]),default:b(()=>[n(P,{to:"/"},{default:b(()=>[n(Ge,{color:"white",icon:"mdi-arrow-left"})]),_:1}),n(rt,null,{default:b(()=>s[4]||(s[4]=[A("Practice")])),_:1})]),_:1}),n(Ze,null,{default:b(()=>[n(qe,{fluid:"",class:"pa-0 fill-height"},{default:b(()=>[n(ae,{class:"fill-height d-flex flex-column w-100"},{default:b(()=>[n(Je,{class:"pa-0 text-h2 text-center"},{default:b(()=>{var _;return[A(te((_=x(d))==null?void 0:_.move),1)]}),_:1}),n(Ye,{class:"pa-0 flex-grow-1 video-card-item"},{default:b(()=>{var _;return[Ae(n(U,{src:`${x(S).public.mediaUrl}${(_=x(d))==null?void 0:_.name}`,playbackRate:1,enableSmoothSeeking:!0,playsinline:"",fill:"",loop:"",muted:"",preload:"",responsive:"",ref_key:"player",ref:g,onLoadedmetadata:s[0]||(s[0]=T=>{T.target.player.userActive(!1),T.target.player.controls(!0)})},null,8,["src"]),[[Pe,x(m)]])]}),_:1}),n(Fe,{class:"justify-center pa-0"},{default:b(()=>[x(m)?Y("",!0):(W(),z(q,{key:0,onClick:s[1]||(s[1]=_=>{var T,N,$;m.value=!0,($=(N=(T=x(g))==null?void 0:T.$el)==null?void 0:N.player)==null||$.play()}),color:"primary",class:"my-2",variant:"flat"},{default:b(()=>s[5]||(s[5]=[A("Show answer (Space)")])),_:1})),x(m)?(W(),z(Qe,{key:1,location:"top center",transition:"slide-y-transition",offset:2},{activator:b(({props:_})=>{var T,N;return[n(G,J(_,{color:{new:"primary",undefined:"primary",learning:"deep-purple-lighten-1",review:"success"}[(N=x(f)[`move-${(T=x(d))==null?void 0:T.move}`])==null?void 0:N.state],variant:"flat",density:"compact"}),{default:b(()=>{var $,Z;return[A(te(((Z=x(f)[`move-${($=x(d))==null?void 0:$.move}`])==null?void 0:Z.state)||"new"),1)]}),_:2},1040,["color"])]}),default:b(()=>[n(ae,{style:{"background-color":"rgba(var(--v-theme-surface), 0.8)"}},{default:b(()=>[n(Xe,{variant:"flat",direction:"vertical","onUpdate:modelValue":s[2]||(s[2]=_=>{var T;return x(c)([{key:`move-${(T=x(d))==null?void 0:T.move}`,value:{state:_}}])})},{default:b(()=>[n(G,{class:"bg-primary mx-2",value:"new",density:"compact"},{default:b(()=>s[6]||(s[6]=[A(" new (1) ")])),_:1}),n(G,{class:"bg-deep-purple-lighten-1 mx-2",value:"learning",density:"compact"},{default:b(()=>s[7]||(s[7]=[A(" learning (2) ")])),_:1}),n(G,{class:"bg-success mx-2",value:"review",density:"compact"},{default:b(()=>s[8]||(s[8]=[A(" review (3) ")])),_:1})]),_:1})]),_:1})]),_:1})):Y("",!0),x(m)?(W(),z(q,{key:2,onClick:s[3]||(s[3]=_=>i()),color:"primary",class:"my-2",variant:"flat"},{default:b(()=>s[9]||(s[9]=[A("Next (space)")])),_:1})):Y("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ht as default};