(this["webpackJsonpscrip-calculator"]=this["webpackJsonpscrip-calculator"]||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t),n.d(t,"calculateAvgScripCost",(function(){return c})),n.d(t,"calculateYield",(function(){return r})),n.d(t,"calculateNewAvgCost",(function(){return a}));var c=function(e,t){return parseFloat((e/t).toFixed(2))},r=function(e,t){return parseFloat((e/t*100).toFixed(5))},a=function(e,t,n,c){return((e*t+n)/(parseInt(t)+c)).toFixed(3)}},148:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(4),i=n.n(a),l=(n(139),n(6)),s=(n(140),n(2)),o=n(147),j=o.TextField,d=o.Grid,b=o.Button,u=o.Table,O=o.TableHead,h=o.TableRow,x=o.TableCell,g=o.TableBody,p=o.TableFooter,S=o.TablePagination,f=o.CircularProgress,C=n(146),v=C.calculateAvgScripCost,m=C.calculateYield,P=C.calculateNewAvgCost;var F=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(l.a)(a,2),o=i[0],C=i[1],F=Object(c.useState)(0),w=Object(l.a)(F,2),y=w[0],A=w[1],T=Object(c.useState)(0),Y=Object(l.a)(T,2),N=Y[0],D=Y[1],k=Object(c.useState)(0),I=Object(l.a)(k,2),M=I[0],V=I[1],B=Object(c.useState)(0),R=Object(l.a)(B,2),U=R[0],z=R[1],E=Object(c.useState)(.5),H=Object(l.a)(E,2),J=H[0],L=H[1],G=Object(c.useState)(!0),q=Object(l.a)(G,2),K=q[0],Q=q[1],W=Object(c.useState)([]),X=Object(l.a)(W,2),Z=X[0],$=X[1],_=Object(c.useState)(!0),ee=Object(l.a)(_,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(0),re=Object(l.a)(ce,2),ae=re[0],ie=re[1],le=Object(c.useState)(50),se=Object(l.a)(le,2),oe=se[0],je=se[1],de=Object(c.useState)(!1),be=Object(l.a)(de,2),ue=be[0],Oe=be[1],he=Object(c.useState)(!1),xe=Object(l.a)(he,2),ge=xe[0],pe=xe[1],Se=Object(c.useState)(!1),fe=Object(l.a)(Se,2),Ce=fe[0],ve=fe[1],me=function(e){"flag1"===e?(pe(!0),ve(!1)):(pe(!1),ve(!0))},Pe=function(e,t,n,c,r,a,i,l,s){return{scripShares:e,roundUp:t,sharesForScrip:n,scripCost:c,avgScripShareCost:r,netCash:a,scripCostYield:i,newAvgCostPerShare:l,newForwardYield:s}},Fe=function(e,t){ne(!1);for(var c=[],r=(e+1)*t/2,a=e*t/2+J;a<=r;a+=J){console.log("Start");var i=Math.round(a),l=Math.round(a*M/U),s=parseFloat((l*U).toFixed(2)),j=parseFloat(((o-l)*U).toFixed(2)),d=v(s,i),b=m(n,d),u=P(y,o,s,i),O=m(n,u);c.push(Pe(a,i,l,s,d,j,b,u,O))}$(c),ne(!0),Q(.5===J)};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Scrip Calculator"}),Object(s.jsx)("div",{style:{padding:20},children:Object(s.jsxs)(d,{container:!0,spacing:1,children:[Object(s.jsx)(d,{container:!0,style:{padding:5},children:Object(s.jsx)(d,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(j,{label:"Expected Annual Dividend",defaultValue:" ",id:"expectedForwardDPS",variant:"outlined",onChange:function(e){r(e.target.value)}})})}),Object(s.jsxs)(d,{container:!0,style:{padding:5},children:[Object(s.jsx)(d,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(j,{label:"Current Amount of Shares",defaultValue:" ",id:"sharesOutstanding",variant:"outlined",onChange:function(e){C(e.target.value)}})}),Object(s.jsx)(d,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(j,{label:"Current Average Cost Per Share",defaultValue:" ",id:"avgCostPerShare",variant:"outlined",onChange:function(e){A(e.target.value)}})}),Object(s.jsxs)(d,{container:!0,item:!0,xl:2,xs:4,children:["Current Cost Yield = ",N]})]}),Object(s.jsx)(d,{container:!0,style:{padding:5},children:Object(s.jsx)(d,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(j,{label:"Scrip Issue Price",defaultValue:" ",id:"scripPrice",variant:"outlined",onChange:function(e){V(e.target.value)}})})}),Object(s.jsx)(d,{container:!0,style:{padding:5},children:Object(s.jsx)(d,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(j,{label:"Declared Dividend Per Share",defaultValue:" ",id:"DPS",variant:"outlined",onChange:function(e){z(e.target.value)}})})}),Object(s.jsxs)(d,{container:!0,style:{padding:5},children:[Object(s.jsx)(d,{item:!0,style:{padding:5},children:"Round off to:"}),Object(s.jsx)(d,{item:!0,style:{padding:5},children:Object(s.jsx)(b,{variant:ge?"contained":"outlined",color:"primary",size:"small",onClick:function(){me("flag1"),L(.5)},children:"0.5"})}),Object(s.jsx)(d,{item:!0,style:{padding:5},children:Object(s.jsx)(b,{variant:Ce?"contained":"outlined",color:"primary",size:"small",onClick:function(){me("flag2"),L(1)},children:"1"})})]}),Object(s.jsx)(d,{container:!0,style:{padding:5},children:Object(s.jsx)(b,{variant:"contained",color:"primary",onClick:function(){console.log(n,o,M,U),D(m(n,y)),Fe(ae,oe),Oe(!0),console.log(Z)},children:"Show Me My Scrips"})}),Object(s.jsxs)(d,{container:!0,style:{padding:5},children:[Object(s.jsx)(d,{container:!0,item:!0,xs:2}),Object(s.jsx)(d,{container:!0,item:!0,xs:8,children:te?Object(s.jsxs)(u,{stickyHeader:!0,"aria-label":"simple table",children:[Object(s.jsx)(O,{children:Object(s.jsxs)(h,{children:[Object(s.jsx)(x,{children:"Number of Scrip Shares"}),K?Object(s.jsx)(x,{align:"center",children:"Rounded Up Scrip Shares"}):"",Object(s.jsx)(x,{align:"center",children:"Number of Shares for Scrip"}),Object(s.jsx)(x,{align:"center",children:"Cost"}),Object(s.jsx)(x,{align:"center",children:"Average Cost per Scrip"}),Object(s.jsx)(x,{align:"center",children:"Net Cash Dividends"}),Object(s.jsx)(x,{align:"center",children:"Yield on Scrip Cost"}),Object(s.jsx)(x,{align:"center",children:"New Average Cost per Share"}),Object(s.jsx)(x,{align:"center",children:"New Forward Yield"})]})}),Object(s.jsx)(g,{children:Z.map((function(e){return Object(s.jsxs)(h,{children:[Object(s.jsx)(x,{align:"center",children:e.scripShares}),K?Object(s.jsx)(x,{align:"center",children:e.roundUp}):"",Object(s.jsx)(x,{align:"center",children:e.sharesForScrip}),Object(s.jsx)(x,{align:"center",children:e.scripCost}),Object(s.jsx)(x,{align:"center",children:e.avgScripShareCost}),Object(s.jsx)(x,{align:"center",children:e.netCash}),Object(s.jsx)(x,{align:"center",children:e.scripCostYield}),Object(s.jsx)(x,{align:"center",children:e.newAvgCostPerShare}),Object(s.jsx)(x,{align:"center",children:e.newForwardYield})]},e.scripShares)}))}),Object(s.jsx)(p,{children:Object(s.jsx)(h,{children:ue?Object(s.jsx)(S,{rowsPerPageOptions:[50,250,500,1e3],count:1e5,rowsPerPage:oe,page:ae,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){ie(t),Fe(t,oe)},onChangeRowsPerPage:function(e){je(parseInt(e.target.value)),ie(0),Fe(0,parseInt(e.target.value))}}):Object(s.jsx)(h,{})})})]}):Object(s.jsx)(f,{})})]})]})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root")),w()}},[[148,1,2]]]);
//# sourceMappingURL=main.3c5e31eb.chunk.js.map