import{_ as fe}from"./C0FRJ1Lr.js";import{p as O,m as K,b as n,M as me,N as Q,O as pe,P as ye,Q as $,A as _,R as ge,S as G,r as L,T as he,g as M,U as be,h as Se,u as we,V as ke,v as F,e as Ve,F as x,W as xe,X as Te,Y as ee,C as _e,Z as Be,_ as Ce,D as Ae,o as E,E as z,w as b,d as A,t as te,n as Pe,$ as $e,c as ae,K as R,J as Ee}from"./C_pzXIdg.js";import{m as re,b as ie,d as U,x as Me,y as Ne,z as He,A as Re,B as Ie,C as De,D as Le,E as je,h as Y,F as Oe,G as Ke,H as Ue,J as We,K as Ge,r as q,t as ze,L as Je,j as qe,k as le,l as Fe,n as Ye,q as Qe,w as Xe,p as J,o as Ze,s as et}from"./BsBudSro.js";const ue=O({text:String,...re(),...ie()},"VToolbarTitle"),ce=K()({name:"VToolbarTitle",props:ue(),setup(e,l){let{slots:t}=l;return U(()=>{const f=!!(t.default||t.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var y;return[f&&n("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(y=t.default)==null?void 0:y.call(t)])]}})}),{}}}),tt=[null,"prominent","default","comfortable","compact"],de=O({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>tt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Me(),...re(),...Ne(),...He(),...ie({tag:"header"}),...me()},"VToolbar"),oe=K()({name:"VToolbar",props:de(),setup(e,l){var k;let{slots:t}=l;const{backgroundColorClasses:f,backgroundColorStyles:y}=Re(Q(e,"color")),{borderClasses:o}=Ie(e),{elevationClasses:c}=De(e),{roundedClasses:S}=Le(e),{themeClasses:d}=pe(e),{rtlClasses:m}=ye(),i=$(!!(e.extended||(k=t.extension)!=null&&k.call(t))),p=_(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),V=_(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),U(()=>{var C;const h=!!(e.title||t.title),r=!!(t.image||e.image),u=(C=t.extension)==null?void 0:C.call(t);return i.value=!!(e.extended||u),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},f.value,o.value,c.value,S.value,d.value,m.value,e.class],style:[y.value,e.style]},{default:()=>[r&&n("div",{key:"image",class:"v-toolbar__image"},[t.image?n(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(je,{key:"image-img",cover:!0,src:e.image},null)]),n(Y,{defaults:{VTabs:{height:G(p.value)}}},{default:()=>{var v,w,g;return[n("div",{class:"v-toolbar__content",style:{height:G(p.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),h&&n(ce,{key:"title",text:e.title},{text:t.title}),(w=t.default)==null?void 0:w.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(g=t.append)==null?void 0:g.call(t)])])]}}),n(Y,{defaults:{VTabs:{height:G(V.value)}}},{default:()=>[n(Oe,null,{default:()=>[i.value&&n("div",{class:"v-toolbar__extension",style:{height:G(V.value)}},[u])]})]})]})}),{contentHeight:p,extensionHeight:V}}}),at=O({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function lt(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=l;let f=0,y=0;const o=L(null),c=$(0),S=$(0),d=$(0),m=$(!1),i=$(!1),p=_(()=>Number(e.scrollThreshold)),V=_(()=>he((p.value-c.value)/p.value||0)),k=()=>{const h=o.value;if(!h||t&&!t.value)return;f=c.value,c.value="window"in h?h.pageYOffset:h.scrollTop;const r=h instanceof Window?document.documentElement.scrollHeight:h.scrollHeight;if(y!==r){y=r;return}i.value=c.value<f,d.value=Math.abs(c.value-p.value)};return M(i,()=>{S.value=S.value||c.value}),M(m,()=>{S.value=0}),be(()=>{M(()=>e.scrollTarget,h=>{var u;const r=h?document.querySelector(h):window;r&&r!==o.value&&((u=o.value)==null||u.removeEventListener("scroll",k),o.value=r,o.value.addEventListener("scroll",k,{passive:!0}))},{immediate:!0})}),Se(()=>{var h;(h=o.value)==null||h.removeEventListener("scroll",k)}),t&&M(t,k,{immediate:!0}),{scrollThreshold:p,currentScroll:c,currentThreshold:d,isScrollActive:m,scrollRatio:V,isScrollingUp:i,savedScroll:S}}const ot=O({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...de(),...Ke(),...at(),height:{type:[Number,String],default:64}},"VAppBar"),nt=K()({name:"VAppBar",props:ot(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const f=L(),y=we(e,"modelValue"),o=_(()=>{var w;const v=new Set(((w=e.scrollBehavior)==null?void 0:w.split(" "))??[]);return{hide:v.has("hide"),fullyHide:v.has("fully-hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),c=_(()=>{const v=o.value;return v.hide||v.fullyHide||v.inverted||v.collapse||v.elevate||v.fadeImage||!y.value}),{currentScroll:S,scrollThreshold:d,isScrollingUp:m,scrollRatio:i}=lt(e,{canScroll:c}),p=_(()=>o.value.hide||o.value.fullyHide),V=_(()=>e.collapse||o.value.collapse&&(o.value.inverted?i.value>0:i.value===0)),k=_(()=>e.flat||o.value.fullyHide&&!y.value||o.value.elevate&&(o.value.inverted?S.value>0:S.value===0)),h=_(()=>o.value.fadeImage?o.value.inverted?1-i.value:i.value:void 0),r=_(()=>{var g,a;if(o.value.hide&&o.value.inverted)return 0;const v=((g=f.value)==null?void 0:g.contentHeight)??0,w=((a=f.value)==null?void 0:a.extensionHeight)??0;return p.value?S.value<d.value||o.value.fullyHide?v+w:v:v+w});ke(_(()=>!!e.scrollBehavior),()=>{Ve(()=>{p.value?o.value.inverted?y.value=S.value>d.value:y.value=m.value||S.value<d.value:y.value=!0})});const{ssrBootStyles:u}=Ue(),{layoutItemStyles:C}=We({id:e.name,order:_(()=>parseInt(e.order,10)),position:Q(e,"location"),layoutSize:r,elementSize:$(void 0),active:y,absolute:Q(e,"absolute")});return U(()=>{const v=oe.filterProps(e);return n(oe,F({ref:f,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":h.value,height:void 0,...u.value},e.style]},v,{collapse:V.value,flat:k.value}),t)}),{}}}),st=O({...Ge({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),rt=K()({name:"VAppBarNavIcon",props:st(),setup(e,l){let{slots:t}=l;return U(()=>n(q,F(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),it=K()({name:"VAppBarTitle",props:ue(),setup(e,l){let{slots:t}=l;return U(()=>n(ce,F(e,{class:"v-app-bar-title"}),t)),{}}});function ut(e){return xe()?(Te(e),!0):!1}function j(e){return typeof e=="function"?e():x(e)}const ct=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const dt=Object.prototype.toString,vt=e=>dt.call(e)==="[object Object]",ve=()=>{};function I(e,l,t){return M(e,(y,o,c)=>{y&&l(y,o,c)},{...t,once:!1})}const X=ct?window:void 0;function ft(e){var l;const t=j(e);return(l=t==null?void 0:t.$el)!=null?l:t}function D(...e){let l,t,f,y;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,f,y]=e,l=X):[l,t,f,y]=e,!l)return ve;Array.isArray(t)||(t=[t]),Array.isArray(f)||(f=[f]);const o=[],c=()=>{o.forEach(i=>i()),o.length=0},S=(i,p,V,k)=>(i.addEventListener(p,V,k),()=>i.removeEventListener(p,V,k)),d=M(()=>[ft(l),j(y)],([i,p])=>{if(c(),!i)return;const V=vt(p)?{...p}:p;o.push(...t.flatMap(k=>f.map(h=>S(i,k,h,V))))},{immediate:!0,flush:"post"}),m=()=>{d(),c()};return ut(m),m}function mt(e){return typeof e=="function"?e:typeof e=="string"?l=>l.key===e:Array.isArray(e)?l=>e.includes(l.key):()=>!0}function ne(...e){let l,t,f={};e.length===3?(l=e[0],t=e[1],f=e[2]):e.length===2?typeof e[1]=="object"?(l=!0,t=e[0],f=e[1]):(l=e[0],t=e[1]):(l=!0,t=e[0]);const{target:y=X,eventName:o="keydown",passive:c=!1,dedupe:S=!1}=f,d=mt(l);return D(y,o,i=>{i.repeat&&j(S)||d(i)&&t(i)},c)}const pt={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function se(e={}){const{reactive:l=!1,target:t=X,aliasMap:f=pt,passive:y=!0,onEventFired:o=ve}=e,c=ee(new Set),S={toJSON(){return{}},current:c},d=l?ee(S):S,m=new Set,i=new Set;function p(r,u){r in d&&(l?d[r]=u:d[r].value=u)}function V(){c.clear();for(const r of i)p(r,!1)}function k(r,u){var C,v;const w=(C=r.key)==null?void 0:C.toLowerCase(),a=[(v=r.code)==null?void 0:v.toLowerCase(),w].filter(Boolean);w&&(u?c.add(w):c.delete(w));for(const s of a)i.add(s),p(s,u);w==="meta"&&!u?(m.forEach(s=>{c.delete(s),p(s,!1)}),m.clear()):typeof r.getModifierState=="function"&&r.getModifierState("Meta")&&u&&[...c,...a].forEach(s=>m.add(s))}D(t,"keydown",r=>(k(r,!0),o(r)),{passive:y}),D(t,"keyup",r=>(k(r,!1),o(r)),{passive:y}),D("blur",V,{passive:!0}),D("focus",V,{passive:!0});const h=new Proxy(d,{get(r,u,C){if(typeof u!="string")return Reflect.get(r,u,C);if(u=u.toLowerCase(),u in f&&(u=f[u]),!(u in d))if(/[+_-]/.test(u)){const w=u.split(/[+_-]/g).map(g=>g.trim());d[u]=_(()=>w.every(g=>j(h[g])))}else d[u]=L(!1);const v=Reflect.get(r,u,C);return l?j(v):v}});return h}const yt={key:0},gt={key:0},wt={__name:"practice",setup(e){const{uid:l,moves:t,movesState:f,movesCounts:y,userSettings:o,updateMoveState:c}=_e(),S=Ee(),d=L(null),m=L(!1),i=()=>{var s,P,W;m.value=!1,(W=(P=(s=g==null?void 0:g.value)==null?void 0:s.$el)==null?void 0:P.player)==null||W.pause();const a=t.value.filter(B=>{var T;return o.value.practiceOptions.states.includes(((T=f.value[`move-${B.move}`])==null?void 0:T.state)||"new")});d.value=a[Math.floor(Math.random()*a.length)]};let p=!1;const{space:V}=se({passive:!1,onEventFired(a){a.code==="Space"&&a.type==="keydown"&&a.preventDefault()}}),{comma:k,period:h,keyP:r,digit1:u,digit2:C,digit3:v}=se();function w(){return new Promise(a=>{g.value.$el.player.one("seeked",()=>{a()})})}I(V,()=>{var a,s,P;m.value?i():(m.value=!0,(P=(s=(a=g==null?void 0:g.value)==null?void 0:a.$el)==null?void 0:s.player)==null||P.play())}),I(r,()=>{if(m.value){const a=g.value.$el.player;a.paused()?a.play():a.pause()}}),I(u,()=>{var a;m.value&&c([{key:`move-${(a=d.value)==null?void 0:a.move}`,value:{state:"new"}}])}),I(C,()=>{var a;m.value&&c([{key:`move-${(a=d.value)==null?void 0:a.move}`,value:{state:"learning"}}])}),I(v,()=>{var a;m.value&&c([{key:`move-${(a=d.value)==null?void 0:a.move}`,value:{state:"review"}}])}),ne(",",async()=>{if(m.value&&!p){p=!0;const a=g.value.$el.player;a.pause(),a.currentTime(a.currentTime()-1/30),await w(),p=!1}}),ne(".",async()=>{if(m.value&&!p){p=!0;const a=g.value.$el.player;a.pause(),a.currentTime(a.currentTime()+1/30),await w(),p=!1}}),Be(()=>{i()});const g=Ce("player");return(a,s)=>{const P=fe,W=Ae("video-player");return E(),z(ze,null,{default:b(()=>[n(nt,{color:"primary",density:"compact"},{prepend:b(()=>[n(rt)]),append:b(()=>[n(q,{icon:"mdi-dots-vertical"})]),default:b(()=>[n(P,{to:"/"},{default:b(()=>[n(Je,{color:"white",icon:"mdi-arrow-left"})]),_:1}),n(it,null,{default:b(()=>s[4]||(s[4]=[A("Practice")])),_:1})]),_:1}),n(et,null,{default:b(()=>[n(qe,{fluid:"",class:"pa-0 fill-height"},{default:b(()=>[n(le,{class:"fill-height d-flex flex-column w-100"},{default:b(()=>[n(Fe,{class:"pa-0 text-h2 text-center"},{default:b(()=>{var B;return[A(te((B=x(d))==null?void 0:B.move),1)]}),_:1}),n(Ye,{class:"pa-0 flex-grow-1 video-card-item"},{default:b(()=>{var B;return[Pe(n(W,{src:`${x(S).public.mediaUrl}${(B=x(d))==null?void 0:B.name}`,playbackRate:1,enableSmoothSeeking:!0,playsinline:"",fill:"",loop:"",muted:"",preload:"auto",responsive:"",ref_key:"player",ref:g,onLoadedmetadata:s[0]||(s[0]=T=>{T.target.player.userActive(!1),T.target.player.controls(!0)})},null,8,["src"]),[[$e,x(m)]])]}),_:1}),n(Qe,{class:"justify-center pa-0"},{default:b(()=>[x(m)?R("",!0):(E(),z(q,{key:0,onClick:s[1]||(s[1]=B=>{var T,N,H;m.value=!0,(H=(N=(T=x(g))==null?void 0:T.$el)==null?void 0:N.player)==null||H.play()}),color:"primary",class:"my-2",variant:"flat"},{default:b(()=>[s[5]||(s[5]=A("Show answer")),a.$device.isDesktop?(E(),ae("span",yt," (space)")):R("",!0)]),_:1})),x(m)?(E(),z(Xe,{key:1,location:"top center",transition:"slide-y-transition",offset:2},{activator:b(({props:B})=>{var T,N;return[n(J,F(B,{color:{new:"primary",undefined:"primary",learning:"deep-purple-lighten-1",review:"success"}[(N=x(f)[`move-${(T=x(d))==null?void 0:T.move}`])==null?void 0:N.state],variant:"flat",density:"compact"}),{default:b(()=>{var H,Z;return[A(te(((Z=x(f)[`move-${(H=x(d))==null?void 0:H.move}`])==null?void 0:Z.state)||"new"),1)]}),_:2},1040,["color"])]}),default:b(()=>[n(le,{style:{"background-color":"rgba(var(--v-theme-surface), 0.8)"}},{default:b(()=>[n(Ze,{variant:"flat",direction:"vertical","onUpdate:modelValue":s[2]||(s[2]=B=>{var T;return x(c)([{key:`move-${(T=x(d))==null?void 0:T.move}`,value:{state:B}}])})},{default:b(()=>[n(J,{class:"bg-primary mx-2",value:"new",density:"compact"},{default:b(()=>s[6]||(s[6]=[A(" new (1) ")])),_:1}),n(J,{class:"bg-deep-purple-lighten-1 mx-2",value:"learning",density:"compact"},{default:b(()=>s[7]||(s[7]=[A(" learning (2) ")])),_:1}),n(J,{class:"bg-success mx-2",value:"review",density:"compact"},{default:b(()=>s[8]||(s[8]=[A(" review (3) ")])),_:1})]),_:1})]),_:1})]),_:1})):R("",!0),x(m)?(E(),z(q,{key:2,onClick:s[3]||(s[3]=B=>i()),color:"primary",class:"my-2",variant:"flat"},{default:b(()=>[s[9]||(s[9]=A("Next")),a.$device.isDesktop?(E(),ae("span",gt," (space)")):R("",!0)]),_:1})):R("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{wt as default};