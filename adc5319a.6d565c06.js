(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{150:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n,r,l,c=t(0),i=t.n(c),o=t(159),s=t(163),m="https://app.amphoradata.com/Discover",d=[{title:"River flows",imageUrl:"/img/data-products/water_flow.PNG",description:" Real-time actuals of major rivers in Australia including Murray\n                and Darling. Parameters include water level, temperature,\n                salinity, flow rate and more. Available now for free",link:m+"?"+(n="Real Time",r="Water","Q.OrgId=7b429e6c-2885-49cf-994d-4775ae170d64&Q.Term="+n+"&Q.Labels="+r+"&Q.Take="+(l||100)+"&handler=MapView")},{title:"Yellowstone National Park",imageUrl:"/img/data-products/yellowstone.png",description:"Real water quality and quantity measurements from the Yellowstone Ecological Research Center.",link:m+"?OrgId=e933a64f-be47-429e-9be1-ab53a5575db8&handler=MapView"},{title:"Groundwater",imageUrl:"/img/data-products/groundwater-image-source-smh.jpg",description:"Ground water level and salinity for any location in Australia.\n                Incorporated from 1000s of bore readings in 2019/20. Coming in\n                Spring.\n            "}];function u(){return i.a.createElement(o.a,{title:"Data Catalogue"},i.a.createElement(s.c,{tabs:s.b,heading:"Analytics Products",subheading:"Get the insights you need in 30 seconds"},i.a.createElement(s.a,{products:d})))}},160:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n),l=t(158),c=t.n(l),i=(t(49),function(e){var a=e.children,t=e.className;return r.a.createElement("div",{className:c()("buttons",t)},a)})},163:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return w})),t.d(a,"c",(function(){return u}));var n=t(0),r=t.n(n),l=t(156),c=t(158),i=t.n(c),o=(t(49),[{to:"/data/vegetation",name:"Vegetation"},{to:"/data/weather",name:"Weather"},{to:"/data/water",name:"Water"},{to:"/data/soil",name:"Soil"},{to:"/data/economic",name:"Economic"}]),s="undefined"!=typeof window,m=function(e){var a="";return s&&window&&window.location&&window.location.pathname&&(a=window.location.pathname.replace(/\/$/,"")),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i()("row row--no-gutters mt-4 text--center tabs_row")},e.tabs.map((function(e){return r.a.createElement("div",{key:e.to,className:"col"},r.a.createElement(l.a,{className:"font_medium_bold text--black",to:e.to},r.a.createElement("div",{className:i()("buttons_tab",e.to===a&&"tab_active")},e.name)))}))),e.children)},d=t(160),u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-12"},r.a.createElement("div",{className:"col col--8"},r.a.createElement("div",{className:"font_large_caps"},e.heading),r.a.createElement("div",{className:"font_large"},e.subheading)),r.a.createElement("div",{className:"col col--4"},e.button||r.a.createElement(l.a,{to:"https://identity.amphoradata.com/Register"},r.a.createElement(d.a,null,"Get Data")))),r.a.createElement(m,{tabs:e.tabs}),e.children))},g=t(1),p=t(161),w=(t(51),function(e){var a=e.products;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a&&a.length&&r.a.createElement("section",{className:"data-products"},r.a.createElement("div",{className:"container"},a.map((function(e,a){return r.a.createElement(f,Object(g.a)({key:a},e))}))))))});function f(e){var a=e.imageUrl,t=e.title,n=e.description,l=e.link,c=Object(p.a)(a);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},c&&r.a.createElement("div",{className:"text--center",style:{paddingLeft:"30px",paddingRight:"30px"}},r.a.createElement("img",{src:c,alt:t}))),r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"font_large"},t),r.a.createElement("p",{className:"font_medium"},n),l&&r.a.createElement("a",{target:"_blank",href:l},"View Data")))}}}]);