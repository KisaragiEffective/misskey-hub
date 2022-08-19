import{r,o as s,c as n,b as o,F as i,a as e,d as t}from"./app.445a9ef5.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const p={},c=e("h1",{id:"notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),t(),e("code",null,"notes")],-1),d=e("p",null,"\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",-1),u=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1);function f(_,y){const a=r("MkSchemaViewer");return s(),n(i,null,[c,d,u,m,o(a,{schema:{type:"object",properties:{local:{type:"boolean",default:!1,optional:!0,description:"\u30ED\u30FC\u30AB\u30EB\u3067\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},reply:{type:"boolean",optional:!0,description:"`true` \u306B\u3059\u308B\u3068\u8FD4\u4FE1\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u8FD4\u4FE1\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u8FD4\u4FE1\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},renote:{type:"boolean",optional:!0,description:"`true` \u306B\u3059\u308B\u3068\u30EA\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u30EA\u30CE\u30FC\u30C8\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u30EA\u30CE\u30FC\u30C8\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},withFiles:{type:"boolean",optional:!0,description:"`true` \u306B\u3059\u308B\u3068\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u3042\u308B\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u304C\u306A\u3044\u30CE\u30FC\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},poll:{type:"boolean",optional:!0,description:"`true` \u306B\u3059\u308B\u3068\u6295\u7968\u3092\u542B\u3080\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u542B\u307E\u306A\u3044\u30CE\u30FC\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u6295\u7968\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},limit:{type:"integer",minimum:1,maximum:100,default:10,optional:!0,description:"\u53D6\u5F97\u3059\u308B\u30CE\u30FC\u30C8\u306E\u6700\u5927\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"},sinceId:{type:"string",format:"misskey:id",optional:!0},untilId:{type:"string",format:"misskey:id",optional:!0}}}}),h,o(a,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,$ref:"misskey://Note"}}})],64)}var k=l(p,[["render",f]]);export{k as default};