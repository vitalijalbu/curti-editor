(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9873],{6410:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts/[id]/dashboard",function(){return a(5020)}])},7155:function(t,e,a){"use strict";a.d(e,{GK:function(){return l},Tk:function(){return i},cX:function(){return c},mk:function(){return r},rE:function(){return o}});var n=a(6726);let r=async t=>{try{let e={params:{populate:"*",filters:{title:{$containsi:null==t?void 0:t.query}}}};0===Object.keys(t).length&&delete e.params;let a=await n.ZP.get("/api/contacts",e);return a.data}catch(t){return"Failed to get data from API"}},c=async t=>{try{let e=await n.ZP.get("/api/contacts/".concat(t,"?populate=*"));return e.data}catch(t){throw Error("Failed to get data from API: ".concat(t.message))}},o=async t=>{try{let e=await n.ZP.post("/api/contacts",t);return e.data}catch(t){throw Error("Failed to get data from API: ".concat(t.message))}},i=async(t,e)=>{try{let a=await n.ZP.delete("/api/contacts/".concat(t),e);return a.data}catch(t){throw Error("Failed to get data from API: ".concat(t.message))}},l=async()=>{try{let t=await n.ZP.delete("/api/contacts?populate=*");return t.data}catch(t){throw Error("Failed to get data from API: ".concat(t.message))}}},6927:function(t,e,a){"use strict";a.d(e,{T:function(){return l}});var n=a(6726),r=a(1163),c=a(7294),o=a(4750);function i(t,e){var a,c,i,l,s,u,d,h,p;let v=null!==(h=null!=e?e:null===(a=(0,r.useRouter)())||void 0===a?void 0:null===(c=a.route)||void 0===c?void 0:c.split("/").last())&&void 0!==h?h:"",f=null===(i=(0,n.Gg)())||void 0===i?void 0:null===(l=i.user)||void 0===l?void 0:null===(s=l.role)||void 0===s?void 0:s.type;return null!==(p=null===(u=o.uq[v])||void 0===u?void 0:null===(d=u[t])||void 0===d?void 0:d.includes(f))&&void 0!==p&&p}function l(t){let[e,a]=(0,c.useState)({});return(0,c.useEffect)(()=>(a({view:i("view",t),create:i("create",t),update:i("update",t),delete:i("delete",t)}),()=>{}),[t]),e}Array.prototype.last=function(){return this[this.length-1]}},5020:function(t,e,a){"use strict";a.r(e);var n=a(5893),r=a(7294);a(1664);var c=a(1163),o=a(1230),i=a(5746),l=a(4436);a(7484);var s=a(7225),u=a(7155),d=a(6927);let h=()=>{let t=(0,c.useRouter)(),{id:e}=t.query,[a,h]=(0,r.useState)(!0),[p,v]=(0,r.useState)({}),f=(0,d.T)("contacts");return console.log({permissions:f}),(0,r.useEffect)(()=>{(0,u.cX)(e).then(t=>{let{data:e}=t;h(!0),v(e)}).finally(()=>{h(!1)})},[e]),(0,n.jsxs)("div",{className:"page",children:[(0,n.jsx)(s.m,{backLink:"/contacts/".concat(p.id),title:null==p?void 0:p.first_name,items:[{label:"Panoramica contatto",url:"/contacts/".concat(p.id)},{label:"Report",url:"/contacts/".concat(p.id,"/dashboard")}]}),(0,n.jsx)("div",{className:"page-content",children:(0,n.jsx)(o.Z,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(i.Z,{span:3,children:(0,n.jsx)(l.Z,{children:"Attivit\xe0 completate"})}),(0,n.jsx)(i.Z,{span:3,children:(0,n.jsx)(l.Z,{children:"Attivit\xe0 non completate"})}),(0,n.jsx)(i.Z,{span:3,children:(0,n.jsx)(l.Z,{shadow:"sm",children:"Attivit\xe0 scadute"})}),(0,n.jsx)(i.Z,{span:3,children:(0,n.jsx)(l.Z,{children:"Totale attivit\xe0"})})]})})})]})};e.default=h}},function(t){t.O(0,[7225,4436,9774,2888,179],function(){return t(t.s=6410)}),_N_E=t.O()}]);