import{d,u as _,a as p,c as m,b as u,e as n,f as t,t as s,g as a,F as h,r as f,n as g,h as b,o as l,i as v,j as x,k as y,l as k,m as N,_ as P}from"./index-ffb12a83.js";import{N as V}from"./NoteDisplay-85182457.js";const w={class:"m-4"},S={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},L={class:"text-lg"},T={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(A){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>b.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(l(),n("div",{id:"page-root",style:g(a(N))},[t("div",w,[t("div",S,[t("h1",B,s(a(m).title),1),t("div",D,s(new Date().toLocaleString()),1)]),(l(!0),n(h,null,f(a(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",T,[t("div",C,s(e==null?void 0:e.no)+"/"+s(a(v)),1),x(" "+s(e==null?void 0:e.title)+" ",1),H])]),y(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(l(),n("hr",j)):k("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","D:/Visual Studio Code/Asprak/PBO/materi-pbo-pertemuan-1/node_modules/.pnpm/@slidev+client@0.43.0-beta._de0df324d9b6ce4bb9be187001ecf8b3/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
