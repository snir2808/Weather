(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),s=c.n(n),r=c(18),i=c.n(r),o=(c(40),c(31)),j=c(11),l=c(19),u=c(4),b=c(63);function d(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(l.b,{style:{textDecoration:"none"},to:"/",children:Object(a.jsx)(b.a,{children:"home"})}),Object(a.jsx)(l.b,{style:{textDecoration:"none"},to:"/Favorites",children:Object(a.jsx)(b.a,{onClick:e.telAvivCallFunc,children:"favorites"})})]})}c(46);function m(e){var t=Object(n.useState)({fontSize:"35px",color:"black"}),c=Object(j.a)(t,2),s=c[0];c[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{}),Object(a.jsx)("div",{className:"div_flex",children:e.arr.map((function(e){return"tel aviv"==e.disName?Object(a.jsxs)("p",{style:s,className:"p_day",children:[e.disName,Object(a.jsx)("br",{}),e.temp,"C"]}):Object(a.jsxs)("p",{className:"p_day",children:[e.disName,Object(a.jsx)("br",{}),e.temp,"C"]})}))})]})}var h=c(64);function O(e){var t=[],c=[],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(""),u=Object(j.a)(l,2),m=u[0],O=u[1],p=Object(n.useState)([]),x=Object(j.a)(p,2),f=x[0],v=x[1],y=Object(n.useState)(0),g=Object(j.a)(y,2),T=g[0],C=g[1],F=Object(n.useState)([]),D=Object(j.a)(F,2),w=D[0],k=D[1],N=Object(n.useState)(""),S=Object(j.a)(N,2),G=S[0],M=S[1],A=Object(n.useState)("Add To"),U=Object(j.a)(A,2),_=U[0],V=U[1];Object(n.useEffect)((function(){fetch("https://dataservice.accuweather.com/currentconditions/v1/215854?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG",{}).then((function(e){if(e.ok)return e.json();throw new Error(alert("Something went wrong"))})).then((function(e){return C(e[0].Temperature.Metric.Value),e[0].Temperature.Metric.Value,M(e[0].WeatherText),e})),fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG&metric=true",{}).then((function(e){return e.json()})).then((function(e){c=[e.DailyForecasts[0].Temperature.Maximum.Value,e.DailyForecasts[1].Temperature.Maximum.Value,e.DailyForecasts[2].Temperature.Maximum.Value,e.DailyForecasts[3].Temperature.Maximum.Value,e.DailyForecasts[4].Temperature.Maximum.Value],t=[e.DailyForecasts[0].Date.slice(0,10),e.DailyForecasts[1].Date.slice(0,10),e.DailyForecasts[2].Date.slice(0,10),e.DailyForecasts[3].Date.slice(0,10),e.DailyForecasts[4].Date.slice(0,10)];for(var a=0;a<t.length;a++)switch(t[a].toString(),t[a]=new Date(t[a]),t[a]=t[a].getDay(),t[a]){case 0:t[a]="Sun";break;case 1:t[a]="Mon";break;case 2:t[a]="Tue";break;case 3:t[a]="Wed";break;case 4:t[a]="Thu";break;case 5:t[a]="Fri";break;case 6:t[a]="Sat"}return v(t),k(c),e}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{telAvivCallFunc:function(){e.telAviv(T)}}),Object(a.jsx)(h.a,{onChange:function(t){var c=t.target.value;O(c),c=(c=c.toLowerCase()).replace(/\s/g,""),o(c),e.arr.map((function(e){console.log(e.name),c===e.name?V("Remov From"):V("Add To")}))},type:"text"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["TelAviv",Object(a.jsx)("br",{}),T,"C"]}),Object(a.jsxs)(b.a,{onClick:function(){"Add To"==_?e.add(i,m):e.delete(i)},children:[_," Favorites"]}),Object(a.jsx)("h3",{children:G}),Object(a.jsxs)("div",{className:"div_flex",children:[Object(a.jsxs)("p",{className:"p_day",children:[f[0],Object(a.jsx)("br",{}),w[0],"C"]}),Object(a.jsxs)("p",{className:"p_day",children:[f[1],Object(a.jsx)("br",{}),w[1],"C"]}),Object(a.jsxs)("p",{className:"p_day",children:[f[2],Object(a.jsx)("br",{}),w[2],"C"]}),Object(a.jsxs)("p",{className:"p_day",children:[f[3],Object(a.jsx)("br",{}),w[3],"C"]}),Object(a.jsxs)("p",{className:"p_day",children:[f[4],Object(a.jsx)("br",{}),w[4],"C"]})]})]})}var p=function(){Object(u.f)();var e=Object(n.useState)([{disName:"tel aviv",name:"telaviv",temp:"25"}]),t=Object(j.a)(e,2),c=t[0],s=t[1],r=function(e){s([{disName:"tel aviv",name:"telaviv",temp:e}])},i=function(e,t){var c;if(t.indexOf(" ")>=0){var a=t.split(" ");console.log("".concat(t),a,e),fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG&q=".concat(a[0],"%20").concat(a[1]),{}).then((function(e){return e.json()})).then((function(e){return console.log(e),c=e[0].Key,e}))}else fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG&q=".concat(e),{}).then((function(e){return e.json()})).then((function(e){return c=e[0].Key,e}));setTimeout((function(){b(c,e,t)}),1e3)},b=function(e,t,a){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG"),{}).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e),s([].concat(Object(o.a)(c),[{disName:a,name:t,temp:e[0].Temperature.Metric.Value}])),e}))},d=function(e){s(c.filter((function(t){return t.name!=e})))};return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:function(){return Object(a.jsx)(O,{telAviv:r,arr:c,delete:d,add:i})}}),Object(a.jsx)(u.a,{path:"/Favorites",component:function(){return Object(a.jsx)(m,{arr:c})}})]})})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),x()}},[[47,1,2]]]);
//# sourceMappingURL=main.b275767f.chunk.js.map