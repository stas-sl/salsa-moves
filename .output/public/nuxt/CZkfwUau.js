import{_ as Z}from"./DKNDP6px.js";import{p as P,q as H,b as r,H as ee,L as j,J as te,z as ae,B as _,C as w,K as le,V as E,r as A,W as oe,g as B,a1 as ne,h as se,u as re,Q as ie,x as U,e as ue,ai as k,an as ce,R as de,a2 as K,af as ve,ao as fe,ap as me,ag as ge,o as M,ah as N,w as V,d as I,t as pe,al as O,ak as ye}from"./BghwnaRZ.js";import{m as z,b as q,d as R,j as he,l as be,o as Se,K as Ve,r as we,v as xe,w as ke,Z as Te,C as W,_ as _e,$ as Be,a0 as Ce,a1 as Ae,a2 as Pe,U as D,X as He,h as Re,O as Ee,P as Me,Q as Ne,S as Ie,T as Le,W as De}from"./dFQEc0kG.js";const G=P({text:String,...z(),...q()},"VToolbarTitle"),J=H()({name:"VToolbarTitle",props:G(),setup(e,u){let{slots:t}=u;return R(()=>{const m=!!(t.default||t.text||e.text);return r(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var c;return[m&&r("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(c=t.default)==null?void 0:c.call(t)])]}})}),{}}}),$e=[null,"prominent","default","comfortable","compact"],Q=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>$e.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...he(),...z(),...be(),...Se(),...q({tag:"header"}),...ee()},"VToolbar"),F=H()({name:"VToolbar",props:Q(),setup(e,u){var d;let{slots:t}=u;const{backgroundColorClasses:m,backgroundColorStyles:c}=Ve(j(e,"color")),{borderClasses:o}=we(e),{elevationClasses:v}=xe(e),{roundedClasses:y}=ke(e),{themeClasses:g}=te(e),{rtlClasses:p}=ae(),i=_(!!(e.extended||(d=t.extension)!=null&&d.call(t))),f=w(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=w(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return le({VBtn:{variant:"text"}}),R(()=>{var h;const a=!!(e.title||t.title),l=!!(t.image||e.image),s=(h=t.extension)==null?void 0:h.call(t);return i.value=!!(e.extended||s),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},m.value,o.value,v.value,y.value,g.value,p.value,e.class],style:[c.value,e.style]},{default:()=>[l&&r("div",{key:"image",class:"v-toolbar__image"},[t.image?r(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):r(Te,{key:"image-img",cover:!0,src:e.image},null)]),r(W,{defaults:{VTabs:{height:E(f.value)}}},{default:()=>{var n,S,x;return[r("div",{class:"v-toolbar__content",style:{height:E(f.value)}},[t.prepend&&r("div",{class:"v-toolbar__prepend"},[(n=t.prepend)==null?void 0:n.call(t)]),a&&r(J,{key:"title",text:e.title},{text:t.title}),(S=t.default)==null?void 0:S.call(t),t.append&&r("div",{class:"v-toolbar__append"},[(x=t.append)==null?void 0:x.call(t)])])]}}),r(W,{defaults:{VTabs:{height:E(b.value)}}},{default:()=>[r(_e,null,{default:()=>[i.value&&r("div",{class:"v-toolbar__extension",style:{height:E(b.value)}},[s])]})]})]})}),{contentHeight:f,extensionHeight:b}}}),Oe=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function We(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=u;let m=0,c=0;const o=A(null),v=_(0),y=_(0),g=_(0),p=_(!1),i=_(!1),f=w(()=>Number(e.scrollThreshold)),b=w(()=>oe((f.value-v.value)/f.value||0)),d=()=>{const a=o.value;if(!a||t&&!t.value)return;m=v.value,v.value="window"in a?a.pageYOffset:a.scrollTop;const l=a instanceof Window?document.documentElement.scrollHeight:a.scrollHeight;if(c!==l){c=l;return}i.value=v.value<m,g.value=Math.abs(v.value-f.value)};return B(i,()=>{y.value=y.value||v.value}),B(p,()=>{y.value=0}),ne(()=>{B(()=>e.scrollTarget,a=>{var s;const l=a?document.querySelector(a):window;l&&l!==o.value&&((s=o.value)==null||s.removeEventListener("scroll",d),o.value=l,o.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),se(()=>{var a;(a=o.value)==null||a.removeEventListener("scroll",d)}),t&&B(t,d,{immediate:!0}),{scrollThreshold:f,currentScroll:v,currentThreshold:g,isScrollActive:p,scrollRatio:b,isScrollingUp:i,savedScroll:y}}const je=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Q(),...Be(),...Oe(),height:{type:[Number,String],default:64}},"VAppBar"),Ue=H()({name:"VAppBar",props:je(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const m=A(),c=re(e,"modelValue"),o=w(()=>{var S;const n=new Set(((S=e.scrollBehavior)==null?void 0:S.split(" "))??[]);return{hide:n.has("hide"),fullyHide:n.has("fully-hide"),inverted:n.has("inverted"),collapse:n.has("collapse"),elevate:n.has("elevate"),fadeImage:n.has("fade-image")}}),v=w(()=>{const n=o.value;return n.hide||n.fullyHide||n.inverted||n.collapse||n.elevate||n.fadeImage||!c.value}),{currentScroll:y,scrollThreshold:g,isScrollingUp:p,scrollRatio:i}=We(e,{canScroll:v}),f=w(()=>o.value.hide||o.value.fullyHide),b=w(()=>e.collapse||o.value.collapse&&(o.value.inverted?i.value>0:i.value===0)),d=w(()=>e.flat||o.value.fullyHide&&!c.value||o.value.elevate&&(o.value.inverted?y.value>0:y.value===0)),a=w(()=>o.value.fadeImage?o.value.inverted?1-i.value:i.value:void 0),l=w(()=>{var x,C;if(o.value.hide&&o.value.inverted)return 0;const n=((x=m.value)==null?void 0:x.contentHeight)??0,S=((C=m.value)==null?void 0:C.extensionHeight)??0;return f.value?y.value<g.value||o.value.fullyHide?n+S:n:n+S});ie(w(()=>!!e.scrollBehavior),()=>{ue(()=>{f.value?o.value.inverted?c.value=y.value>g.value:c.value=p.value||y.value<g.value:c.value=!0})});const{ssrBootStyles:s}=Ce(),{layoutItemStyles:h}=Ae({id:e.name,order:w(()=>parseInt(e.order,10)),position:j(e,"location"),layoutSize:l,elementSize:_(void 0),active:c,absolute:j(e,"absolute")});return R(()=>{const n=F.filterProps(e);return r(F,U({ref:m,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...h.value,"--v-toolbar-image-opacity":a.value,height:void 0,...s.value},e.style]},n,{collapse:b.value,flat:d.value}),t)}),{}}}),Ke=P({...Pe({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Fe=H()({name:"VAppBarNavIcon",props:Ke(),setup(e,u){let{slots:t}=u;return R(()=>r(D,U(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),ze=H()({name:"VAppBarTitle",props:G(),setup(e,u){let{slots:t}=u;return R(()=>r(J,U(e,{class:"v-app-bar-title"}),t)),{}}});function qe(e){return ce()?(de(e),!0):!1}function $(e){return typeof e=="function"?e():k(e)}const Ge=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Je=Object.prototype.toString,Qe=e=>Je.call(e)==="[object Object]",X=()=>{};function Xe(e,u,t){return B(e,(c,o,v)=>{c&&u(c,o,v)},{...t,once:!1})}const Y=Ge?window:void 0;function Ye(e){var u;const t=$(e);return(u=t==null?void 0:t.$el)!=null?u:t}function L(...e){let u,t,m,c;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,m,c]=e,u=Y):[u,t,m,c]=e,!u)return X;Array.isArray(t)||(t=[t]),Array.isArray(m)||(m=[m]);const o=[],v=()=>{o.forEach(i=>i()),o.length=0},y=(i,f,b,d)=>(i.addEventListener(f,b,d),()=>i.removeEventListener(f,b,d)),g=B(()=>[Ye(u),$(c)],([i,f])=>{if(v(),!i)return;const b=Qe(f)?{...f}:f;o.push(...t.flatMap(d=>m.map(a=>y(i,d,a,b))))},{immediate:!0,flush:"post"}),p=()=>{g(),v()};return qe(p),p}const Ze={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function et(e={}){const{reactive:u=!1,target:t=Y,aliasMap:m=Ze,passive:c=!0,onEventFired:o=X}=e,v=K(new Set),y={toJSON(){return{}},current:v},g=u?K(y):y,p=new Set,i=new Set;function f(l,s){l in g&&(u?g[l]=s:g[l].value=s)}function b(){v.clear();for(const l of i)f(l,!1)}function d(l,s){var h,n;const S=(h=l.key)==null?void 0:h.toLowerCase(),C=[(n=l.code)==null?void 0:n.toLowerCase(),S].filter(Boolean);S&&(s?v.add(S):v.delete(S));for(const T of C)i.add(T),f(T,s);S==="meta"&&!s?(p.forEach(T=>{v.delete(T),f(T,!1)}),p.clear()):typeof l.getModifierState=="function"&&l.getModifierState("Meta")&&s&&[...v,...C].forEach(T=>p.add(T))}L(t,"keydown",l=>(d(l,!0),o(l)),{passive:c}),L(t,"keyup",l=>(d(l,!1),o(l)),{passive:c}),L("blur",b,{passive:!0}),L("focus",b,{passive:!0});const a=new Proxy(g,{get(l,s,h){if(typeof s!="string")return Reflect.get(l,s,h);if(s=s.toLowerCase(),s in m&&(s=m[s]),!(s in g))if(/[+_-]/.test(s)){const S=s.split(/[+_-]/g).map(x=>x.trim());g[s]=w(()=>S.every(x=>$(a[x])))}else g[s]=A(!1);const n=Reflect.get(l,s,h);return u?$(n):n}});return a}const ot={__name:"practice",setup(e){const{uid:u,moves:t,movesState:m,movesCounts:c,userSettings:o,updateMoveState:v}=ve(),y=ye(),g=A(null),p=A(!1),i=()=>{p.value=!1;const d=t.value.filter(a=>{var l;return o.value.practiceOptions.states.includes(((l=m.value[`move-${a.move}`])==null?void 0:l.state)||"new")});g.value=d[Math.floor(Math.random()*d.length)]},{space:f}=et({passive:!1,onEventFired(d){d.code==="Space"&&d.type==="keydown"&&d.preventDefault()}});Xe(f,()=>{p.value?i():p.value=!0}),fe(()=>{i()});const b=me("v");return(d,a)=>{const l=Z,s=ge("video-player");return M(),N(He,null,{default:V(()=>[r(Ue,{color:"primary",density:"compact"},{prepend:V(()=>[r(Fe)]),append:V(()=>[r(D,{icon:"mdi-dots-vertical"})]),default:V(()=>[r(l,{to:"/"},{default:V(()=>[r(Re,{color:"white",icon:"mdi-arrow-left"})]),_:1}),r(ze,null,{default:V(()=>a[3]||(a[3]=[I("Practice")])),_:1})]),_:1}),r(De,null,{default:V(()=>[r(Ee,{fluid:"",class:"pa-0 fill-height"},{default:V(()=>[r(Me,{class:"fill-height d-flex flex-column w-100"},{default:V(()=>[r(Ne,{class:"pa-0 text-h2 text-center"},{default:V(()=>{var h;return[I(pe((h=k(g))==null?void 0:h.move),1)]}),_:1}),r(Ie,{class:"pa-0 flex-grow-1 video-card-item"},{default:V(()=>{var h;return[k(p)?(M(),N(s,{key:0,src:`${k(y).public.mediaUrl}${(h=k(g))==null?void 0:h.name}`,loop:"",controls:"",autoplay:"muted",responsive:"",playbackRate:1,enableSmoothSeeking:!0,playsinline:"",fill:"",onLoadedmetadata1:a[0]||(a[0]=n=>{n.target.player.userActive(!1),k(b).style.aspectRatio=`${n.target.player.videoWidth()} / ${n.target.player.videoHeight()}`})},null,8,["src"])):O("",!0)]}),_:1}),r(Le,{class:"justify-center pa-0"},{default:V(()=>[k(p)?O("",!0):(M(),N(D,{key:0,onClick:a[1]||(a[1]=h=>p.value=!0),color:"primary",class:"my-2",variant:"flat"},{default:V(()=>a[4]||(a[4]=[I("Show answer")])),_:1})),k(p)?(M(),N(D,{key:1,onClick:a[2]||(a[2]=h=>i()),color:"primary",class:"my-2",variant:"flat"},{default:V(()=>a[5]||(a[5]=[I("Next")])),_:1})):O("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ot as default};
