(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{145:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var n=t(0),r=t.n(n),c=t(159),o=(t(156),t(158),t(161),t(50),t(163)),l="https://app.amphoradata.com/Discover",i=function(e,a){return"Q.OrgId=7b429e6c-2885-49cf-994d-4775ae170d64&Q.Labels="+e+"&Q.Take="+(a||100)+"&handler=MapView"},s=[{title:"Weather forecasts",imageUrl:"/img/data-products/forecast_image.PNG",description:" 7 day weather forecasts for any location in Australia 100s of\n                locations available now for $2 per month. More available on\n                request.",link:l+"?"+i("Forecasts")},{title:"Weather Observations",imageUrl:"/img/data-products/weather_actuals.PNG",description:" Real-time actuals of weather parameters for any location in\n                Australia 100s of locations available now for $2 per month. More\n                available on request.",link:l+"?"+i("observations")},{title:"Solar Irradiance",imageUrl:"/img/data-products/solar_image.PNG",description:" Real-time actuals of solar irradiance for any location in\n                Australia Any location available on request for $2 per month.",link:l+"?"+i("solar")}];function m(){return r.a.createElement(c.a,{title:"Data Catalogue"},r.a.createElement(o.c,{tabs:o.b,heading:"Analytics Products",subheading:"Get the insights you need in 30 seconds"},r.a.createElement(o.a,{products:s})))}},160:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n),c=t(158),o=t.n(c),l=(t(49),function(e){var a=e.children,t=e.className;return r.a.createElement("div",{className:o()("buttons",t)},a)})},163:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return v})),t.d(a,"c",(function(){return u}));var n=t(0),r=t.n(n),c=t(156),o=t(158),l=t.n(o),i=(t(49),[{to:"/data/vegetation",name:"Vegetation"},{to:"/data/weather",name:"Weather"},{to:"/data/water",name:"Water"},{to:"/data/soil",name:"Soil"},{to:"/data/economic",name:"Economic"}]),s="undefined"!=typeof window,m=function(e){var a="";return s&&window&&window.location&&window.location.pathname&&(a=window.location.pathname.replace(/\/$/,"")),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l()("row row--no-gutters mt-4 text--center tabs_row")},e.tabs.map((function(e){return r.a.createElement("div",{key:e.to,className:"col"},r.a.createElement(c.a,{className:"font_medium_bold text--black",to:e.to},r.a.createElement("div",{className:l()("buttons_tab",e.to===a&&"tab_active")},e.name)))}))),e.children)},d=t(160),u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-12"},r.a.createElement("div",{className:"col col--8"},r.a.createElement("div",{className:"font_large_caps"},e.heading),r.a.createElement("div",{className:"font_large"},e.subheading)),r.a.createElement("div",{className:"col col--4"},e.button||r.a.createElement(c.a,{to:"https://identity.amphoradata.com/Register"},r.a.createElement(d.a,null,"Get Data")))),r.a.createElement(m,{tabs:e.tabs}),e.children))},f=t(1),p=t(161),v=(t(51),function(e){var a=e.products;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a&&a.length&&r.a.createElement("section",{className:"data-products"},r.a.createElement("div",{className:"container"},a.map((function(e,a){return r.a.createElement(E,Object(f.a)({key:a},e))}))))))});function E(e){var a=e.imageUrl,t=e.title,n=e.description,c=e.link,o=Object(p.a)(a);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},o&&r.a.createElement("div",{className:"text--center",style:{paddingLeft:"30px",paddingRight:"30px"}},r.a.createElement("img",{src:o,alt:t}))),r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"font_large"},t),r.a.createElement("p",{className:"font_medium"},n),c&&r.a.createElement("a",{target:"_blank",href:c},"View Data")))}}}]);