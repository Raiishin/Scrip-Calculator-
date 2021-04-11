(this["webpackJsonpscrip-calculator"]=this["webpackJsonpscrip-calculator"]||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t),n.d(t,"calculateAvgScripCost",(function(){return c})),n.d(t,"calculateYield",(function(){return r})),n.d(t,"calculateNewAvgCost",(function(){return i}));var c=function(e,t){return parseFloat((e/t).toFixed(2))},r=function(e,t){return parseFloat((e/t*100).toFixed(5))},i=function(e,t,n,c){return((e*t+n)/(parseInt(t)+c)).toFixed(3)}},148:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(4),a=n.n(i),s=(n(139),n(10)),l=(n(140),n(3)),d=n(147),j=d.TextField,o=d.Grid,b=d.Button,h=d.Table,u=d.TableHead,O=d.TableRow,x=d.TableCell,g=d.TableBody,p=n(146),S=p.calculateAvgScripCost,v=p.calculateYield,C=p.calculateNewAvgCost;var f=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=(t[0],t[1]),r=Object(c.useState)(0),i=Object(s.a)(r,2),a=i[0],d=i[1],p=Object(c.useState)(0),f=Object(s.a)(p,2),F=f[0],w=f[1],m=Object(c.useState)(0),y=Object(s.a)(m,2),P=y[0],A=y[1],T=Object(c.useState)(0),Y=Object(s.a)(T,2),N=Y[0],D=Y[1],B=Object(c.useState)(0),I=Object(s.a)(B,2),k=I[0],M=I[1],R=Object(c.useState)(0),U=Object(s.a)(R,2),E=U[0],H=U[1],J=Object(c.useState)([]),L=Object(s.a)(J,2),G=L[0];function q(e,t,n,c,r,i,a,s,l){return{scripShares:e,roundUp:t,sharesForScrip:n,scripCost:c,avgScripShareCost:r,netCash:i,scripCostYield:a,newAvgCostPerShare:s,newForwardYield:l}}return L[1],Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Scrip Calculator"}),Object(l.jsx)("div",{style:{padding:20},children:Object(l.jsxs)(o,{container:!0,spacing:1,children:[Object(l.jsx)(o,{container:!0,style:{padding:5},children:Object(l.jsx)(o,{container:!0,item:!0,xs:2,children:Object(l.jsx)(j,{label:"Expected Forward DPS",id:"expectedForwardDPS",variant:"outlined",onChange:function(e){d(e.target.value)}})})}),Object(l.jsxs)(o,{container:!0,style:{padding:5},children:[Object(l.jsx)(o,{container:!0,item:!0,xs:2,children:Object(l.jsx)(j,{label:"Shares Currently Held",id:"sharesOutstanding",variant:"outlined",onChange:function(e){w(e.target.value)}})}),Object(l.jsx)(o,{container:!0,item:!0,xs:2,children:Object(l.jsx)(j,{label:"Average Cost Per Share",id:"avgCostPerShare",variant:"outlined",onChange:function(e){A(e.target.value)}})}),Object(l.jsxs)(o,{container:!0,item:!0,xs:2,style:{},children:["Current Forward Yield = ",N]})]}),Object(l.jsx)(o,{container:!0,style:{padding:5},children:Object(l.jsx)(o,{container:!0,item:!0,xs:2,children:Object(l.jsx)(j,{label:"Scrip Issue Price",id:"scripPrice",variant:"outlined",onChange:function(e){M(e.target.value)}})})}),Object(l.jsx)(o,{container:!0,style:{padding:5},children:Object(l.jsx)(o,{container:!0,item:!0,xs:2,children:Object(l.jsx)(j,{label:"Dividend Per Share",id:"DPS",variant:"outlined",onChange:function(e){H(e.target.value)}})})}),Object(l.jsx)(o,{container:!0,style:{padding:5},children:Object(l.jsx)(b,{variant:"contained",color:"primary",onClick:function(){console.log(a,F,k,E),D(v(a,P)),function(){for(var e=.5;e<=30;e+=.5){var t=Math.round(e),n=Math.round(e*k/E),c=parseFloat((n*E).toFixed(2)),r=parseFloat(((F-n)*E).toFixed(2)),i=S(c,t),s=v(a,i),l=C(P,F,c,t),d=v(a,l);G.push(q(e,t,n,c,i,r,s,l,d))}}(),n(!0)},children:"Render Table"})}),Object(l.jsxs)(o,{container:!0,style:{padding:5},children:[Object(l.jsx)(o,{container:!0,item:!0,xs:2}),Object(l.jsx)(o,{container:!0,item:!0,xs:8,children:Object(l.jsxs)(h,{"aria-label":"simple table",children:[Object(l.jsx)(u,{children:Object(l.jsxs)(O,{children:[Object(l.jsx)(x,{children:"Number of Scrip Shares"}),Object(l.jsx)(x,{align:"center",children:"Rounded Up Scrip Shares"}),Object(l.jsx)(x,{align:"center",children:"Number of Shares for Scrip"}),Object(l.jsx)(x,{align:"center",children:"Cost"}),Object(l.jsx)(x,{align:"center",children:"Average Cost per Scrip"}),Object(l.jsx)(x,{align:"center",children:"Net Cash Dividends"}),Object(l.jsx)(x,{align:"center",children:"Yield on Scrip Cost"}),Object(l.jsx)(x,{align:"center",children:"New Average Cost per Share"}),Object(l.jsx)(x,{align:"center",children:"New Forward Yield"})]})}),Object(l.jsx)(g,{children:G.map((function(e){return Object(l.jsxs)(O,{children:[Object(l.jsx)(x,{align:"center",children:e.scripShares}),Object(l.jsx)(x,{align:"center",children:e.roundUp}),Object(l.jsx)(x,{align:"center",children:e.sharesForScrip}),Object(l.jsx)(x,{align:"center",children:e.scripCost}),Object(l.jsx)(x,{align:"center",children:e.avgScripShareCost}),Object(l.jsx)(x,{align:"center",children:e.netCash}),Object(l.jsx)(x,{align:"center",children:e.scripCostYield}),Object(l.jsx)(x,{align:"center",children:e.newAvgCostPerShare}),Object(l.jsx)(x,{align:"center",children:e.newForwardYield})]},e.scripShares)}))})]})})]})]})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),F()}},[[148,1,2]]]);
//# sourceMappingURL=main.f07772b6.chunk.js.map