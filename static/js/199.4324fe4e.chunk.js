"use strict";(self.webpackChunkaoc22=self.webpackChunkaoc22||[]).push([[199],{60199:function(n,t,r){r.r(t),r.d(t,{useDay2:function(){return E}});var u=r(29439),e=r(72791),i=["ROCK","SCISSORS","PAPER"],a={ROCK:1,PAPER:2,SCISSORS:3},c={WIN:6,DRAW:3,LOSE:0};function S(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=n.split(/\n/).flatMap(d);return t?r.map(v):r.map(R)}var f={A:"ROCK",B:"PAPER",C:"SCISSORS"},o={X:"ROCK",Y:"PAPER",Z:"SCISSORS"},s={X:"LOSE",Y:"DRAW",Z:"WIN"},R=function(n){var t=n.split(" "),r=(0,u.Z)(t,2),e=r[0],i=r[1];return[f[e],o[i]]},v=function(n){var t=n.split(" "),r=(0,u.Z)(t,2),e=r[0],i=r[1];return[f[e],s[i]]},d=function(n){return n.split("\n")},O=function(n){return a[n]},p=function(n){return c[n]},C=function(n,t){if(n===t)return"DRAW";var r=(i.findIndex((function(t){return t===n}))+1)%3;return i[r]===t?"LOSE":"WIN"},l=function(n,t){var r=(0,u.Z)(t,2),e=r[0],i=r[1],a=C(e,i);return p(a)+O(i)+n},A=function(n,t){var r=(0,u.Z)(t,2),e=r[0],a=function(n,t){if("DRAW"===t)return n;var r=i.findIndex((function(t){return t===n}));return i[(r+("LOSE"===t?1:2))%3]}(e,r[1]),c=C(e,a);return p(c)+O(a)+n},E=function(n){var t=(0,e.useState)(n),r=(0,u.Z)(t,2),i=r[0],a=r[1],c=(0,e.useState)(),f=(0,u.Z)(c,2),o=f[0],s=f[1],R=(0,e.useState)(),v=(0,u.Z)(R,2),d=v[0],O=v[1];return(0,e.useEffect)((function(){var n=S(i,!1).reduce(l,0),t=S(i,!0).reduce(A,0);s(isNaN(n)?void 0:n),O(isNaN(t)?void 0:t)}),[i]),{setStrategyGuide:a,totalScore:o,predictionScore:d}}}}]);
//# sourceMappingURL=199.4324fe4e.chunk.js.map