import"./MDCSlot.4c609427.js";import _ from"./ButtonLink.8d99fa88.js";import m from"./Terminal.d30e774d.js";import f from"./VideoPlayer.4bb552b9.js";import{r as n}from"./slot.19fdf424.js";import{d as y,b as o,c as r,e as s,f as a,F as h,X as c,w as k,D as i,t as d,a5 as v,k as $}from"./entry.7185bbe1.js";import"./index.f03eb090.js";const B={class:"block-hero"},w={class:"layout"},b={class:"content"},g={key:0,class:"announce"},H={class:"title"},S={class:"description"},q={key:1,class:"extra"},V={class:"actions"},x=["href"],A={class:"support"},C=y({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,N)=>{const l=_,u=m,p=f;return o(),r("section",B,[s("div",w,[s("div",b,[t.$slots.announce?(o(),r("p",g,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):a("",!0),s("h1",H,[n(t.$slots,"title",{unwrap:"p"},()=>[i(" Hero Title ")],!0)]),s("p",S,[n(t.$slots,"description",{unwrap:"p"},()=>[i(" Hero default description. ")],!0)]),t.$slots.extra?(o(),r("div",q,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):a("",!0),s("div",V,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),r(h,{key:1},[e.cta?(o(),c(l,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:k(()=>[i(d(e.cta[0]),1)]),_:1},8,["href"])):a("",!0),e.secondary?(o(),r("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,x)):a("",!0)],64))])]),s("div",A,[v(t.$slots,"support",{},()=>[e.snippet?(o(),c(u,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),c(p,{key:1,src:e.video},null,8,["src"])):a("",!0)],!0)])])])}}});const P=$(C,[["__scopeId","data-v-cee69ebf"]]);export{P as default};
