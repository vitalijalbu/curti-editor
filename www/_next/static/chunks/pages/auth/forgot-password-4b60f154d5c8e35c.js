(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4076],{6074:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(4184),i=r.n(n),o=r(7294),a=r(3124),l=r(7968),s=r(5503),c=r(4747);let d=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:r,colorSplit:n,lineWidth:i}=e;return{[t]:Object.assign(Object.assign({},(0,c.Wf)(e)),{borderBlockStart:`${i}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:r}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:r}}})}};var u=(0,l.Z)("Divider",e=>{let t=(0,s.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[d(t)]},{sizePaddingEdgeHorizontal:0}),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};let p=e=>{let{getPrefixCls:t,direction:r}=o.useContext(a.E_),{prefixCls:n,type:l="horizontal",orientation:s="center",orientationMargin:c,className:d,rootClassName:p,children:h,dashed:g,plain:m}=e,v=f(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),b=t("divider",n),[w,x]=u(b),y=s.length>0?`-${s}`:s,j=!!h,$="left"===s&&null!=c,Z="right"===s&&null!=c,C=i()(b,x,`${b}-${l}`,{[`${b}-with-text`]:j,[`${b}-with-text${y}`]:j,[`${b}-dashed`]:!!g,[`${b}-plain`]:!!m,[`${b}-rtl`]:"rtl"===r,[`${b}-no-default-orientation-margin-left`]:$,[`${b}-no-default-orientation-margin-right`]:Z},d,p),E=Object.assign(Object.assign({},$&&{marginLeft:c}),Z&&{marginRight:c});return w(o.createElement("div",Object.assign({className:C},v,{role:"separator"}),h&&"vertical"!==l&&o.createElement("span",{className:`${b}-inner-text`,style:E},h)))};var h=p},8948:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/forgot-password",function(){return r(2162)}])},2804:function(e,t,r){"use strict";var n=r(5893),i=r(1230),o=r(5746),a=r(4436);t.Z=function(e){let{children:t}=e;return(0,n.jsx)("div",{className:"auth-page show-fake-browser login-page",children:(0,n.jsx)(i.Z,{type:"flex",justify:"center",align:"middle",style:{height:"100%"},children:(0,n.jsx)(o.Z,{span:8,xl:6,lg:8,md:12,sm:16,xs:18,children:(0,n.jsx)(a.Z,{className:"auth-card",children:t})})})})}},3893:function(e,t,r){"use strict";r.d(t,{Bp:function(){return a},gv:function(){return o},y:function(){return i},yy:function(){return s}}),r(4750);var n=r(6726);let i=e=>n.ZP.post("/api/auth/local",e).then(async e=>{let{data:t}=e;(0,n.KY)({jwt:null==t?void 0:t.jwt}),console.log(t);let r=await l();return(0,n.KY)({jwt:null==t?void 0:t.jwt,user:r}),window.location.pathname="/",res}).catch(e=>Promise.reject(e)),o=e=>n.ZP.post("/api/auth/reset-password",e),a=e=>n.ZP.post("/api/auth/reset-password",e),l=e=>n.ZP.get("/api/users/me?populate=*").then(e=>e.data).catch(e=>Promise.reject(e)),s=e=>n.ZP.post("/api/auth/forgot-password",e)},2162:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(7294),o=r(1664),a=r.n(o),l=r(1433),s=r(1552),c=r(7790),d=r(6074),u=r(9531),f=r(1577),p=r(3893),h=r(2804);let g=()=>{let[e,t]=(0,i.useState)(!1),[r]=s.Z.useForm(),o=e=>{t(!0),(0,p.yy)(e).then(e=>{t(!1),null!==e.data?(c.ZP.success("Email inviata con successo"),r.resetFields()):null==e.data&&c.ZP.error("Errore generico server")}).catch(e=>{c.ZP.error("Errore generico server"),t(!1)})};return(0,n.jsx)(h.Z,{children:(0,n.jsxs)("div",{className:"page-content",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h3",{className:"m-0",children:"Password dimenticata"}),(0,n.jsx)("p",{children:"Inserisci l'indirizzo email associato al tuo account e ti invieremo il link per resettare la tua password."})]}),(0,n.jsx)(d.Z,{}),(0,n.jsxs)(s.Z,{layout:"vertical",form:r,onFinish:o,children:[(0,n.jsx)(s.Z.Item,{label:"E-mail",required:!0,name:"email",children:(0,n.jsx)(u.Z,{placeholder:"Inserisci indirizzo e-mail"})}),(0,n.jsx)(s.Z.Item,{children:(0,n.jsx)(f.ZP,{type:"primary",block:!0,htmlType:"submit",loading:e&&!0,children:"Invia link di ripristino"})}),(0,n.jsx)(s.Z.Item,{children:(0,n.jsx)(a(),{className:"login-form-forgot m-0",href:"/auth",children:(0,n.jsx)(f.ZP,{type:"link",icon:(0,n.jsx)(l.Z,{}),children:"Torna al Login"})})})]})]})})};t.default=g},8358:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(4942),i=r(1413),o=r(7685),a=r(91),l=r(7294),s=r(1263),c=r(4184),d=r.n(c),u={adjustX:1,adjustY:1},f=[0,0],p={topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:f},topCenter:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:f},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:f},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:f},bottomCenter:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:f},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:f}},h=r(5105),g=r(5164),m=r(8603),v=h.Z.ESC,b=h.Z.TAB,w=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],x=l.forwardRef(function(e,t){var r,c,u,f,h,x,y,j,$,Z,C,E,P,k,O,S,N=e.arrow,z=void 0!==N&&N,T=e.prefixCls,I=void 0===T?"rc-dropdown":T,_=e.transitionName,A=e.animation,M=e.align,R=e.placement,V=e.placements,W=e.getPopupContainer,B=e.showAction,L=e.hideAction,F=e.overlayClassName,G=e.overlayStyle,H=e.visible,X=e.trigger,Y=void 0===X?["hover"]:X,D=e.autoFocus,K=(0,a.Z)(e,w),q=l.useState(),J=(0,o.Z)(q,2),Q=J[0],U=J[1],ee="visible"in e?H:Q,et=l.useRef(null);l.useImperativeHandle(t,function(){return et.current}),u=(c={visible:ee,setTriggerVisible:U,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:D}).visible,f=c.setTriggerVisible,h=c.triggerRef,x=c.onVisibleChange,y=c.autoFocus,j=l.useRef(!1),$=function(){if(u&&h.current){var e,t,r,n;null===(e=h.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(r=t.current)||void 0===r||null===(n=r.focus)||void 0===n||n.call(r),f(!1),"function"==typeof x&&x(!1)}},Z=function(){var e,t,r,n,i=(0,m.tS)(null===(e=h.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(r=t.current)||void 0===r?void 0:null===(n=r.getElement)||void 0===n?void 0:n.call(r))[0];return null!=i&&!!i.focus&&(i.focus(),j.current=!0,!0)},C=function(e){switch(e.keyCode){case v:$();break;case b:var t=!1;j.current||(t=Z()),t?e.preventDefault():$()}},l.useEffect(function(){return u?(window.addEventListener("keydown",C),y&&(0,g.Z)(Z,3),function(){window.removeEventListener("keydown",C),j.current=!1}):function(){j.current=!1}},[u]);var er=function(){var t=e.overlay;return"function"==typeof t?t():t},en=function(){var e=er();return l.createElement(l.Fragment,null,z&&l.createElement("div",{className:"".concat(I,"-arrow")}),e)},ei=L;return ei||-1===Y.indexOf("contextMenu")||(ei=["click"]),l.createElement(s.Z,(0,i.Z)((0,i.Z)({builtinPlacements:void 0===V?p:V},K),{},{prefixCls:I,ref:et,popupClassName:d()(F,(0,n.Z)({},"".concat(I,"-show-arrow"),z)),popupStyle:G,action:Y,showAction:B,hideAction:ei||[],popupPlacement:void 0===R?"bottomLeft":R,popupAlign:M,popupTransitionName:_,popupAnimation:A,popupVisible:ee,stretch:(E=e.minOverlayWidthMatchTrigger,P=e.alignPoint,"minOverlayWidthMatchTrigger"in e?E:!P)?"minWidth":"",popup:"function"==typeof e.overlay?en:en(),onPopupVisibleChange:function(t){var r=e.onVisibleChange;U(t),"function"==typeof r&&r(t)},onPopupClick:function(t){var r=e.onOverlayClick;U(!1),r&&r(t)},getPopupContainer:W}),(O=(k=e.children).props?k.props:{},S=d()(O.className,void 0!==(r=e.openClassName)?r:"".concat(I,"-open")),ee&&k?l.cloneElement(k,{className:S}):k))})}},function(e){e.O(0,[4436,9774,2888,179],function(){return e(e.s=8948)}),_N_E=e.O()}]);