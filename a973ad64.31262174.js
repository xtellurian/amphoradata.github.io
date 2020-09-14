(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{149:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var n,r,c=t(0),o=t(159),i=t(163),l=[{title:"Crop performance tracking from high-res NDVI",imageUrl:"/img/data-products/26_Kings_rd_NDVI_180220.png",description:" Tracking of performance through 0.5M resolution NDVI images.\n                Options include ranking of plants, tracking change in\n                performance between image captures and overall crop performance.\n                Available now for any global location upon request from $0.7 per\n                Ha per month.",link:"https://app.amphoradata.com/Discover?"+(n="NDVI","Q.OrgId=7b429e6c-2885-49cf-994d-4775ae170d64&Q.Labels="+n+"&Q.Take="+(r||100)+"&handler=MapView")},{title:"Forest vegetation tracking",imageUrl:"/img/data-products/Forest_image.PNG",description:"Tracking of forest coverage, extant, and health through remote\n                imaging. Available now for any global location upon request from\n                $0.05 per Ha per month."}];function m(){return c.createElement(o.a,{title:"Data Catalogue"},c.createElement(i.c,{tabs:i.b,heading:"Analytics Products",subheading:"Get the insights you need in 30 seconds"},c.createElement(i.a,{products:l})))}},160:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n),c=t(158),o=t.n(c),i=(t(49),function(e){var a=e.children,t=e.className;return r.a.createElement("div",{className:o()("buttons",t)},a)})},163:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return f})),t.d(a,"c",(function(){return u}));var n=t(0),r=t.n(n),c=t(156),o=t(158),i=t.n(o),l=(t(49),[{to:"/data/vegetation",name:"Vegetation"},{to:"/data/weather",name:"Weather"},{to:"/data/water",name:"Water"},{to:"/data/soil",name:"Soil"},{to:"/data/economic",name:"Economic"}]),m="undefined"!=typeof window,s=function(e){var a="";return m&&window&&window.location&&window.location.pathname&&(a=window.location.pathname.replace(/\/$/,"")),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i()("row row--no-gutters mt-4 text--center tabs_row")},e.tabs.map((function(e){return r.a.createElement("div",{key:e.to,className:"col"},r.a.createElement(c.a,{className:"font_medium_bold text--black",to:e.to},r.a.createElement("div",{className:i()("buttons_tab",e.to===a&&"tab_active")},e.name)))}))),e.children)},d=t(160),u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-12"},r.a.createElement("div",{className:"col col--8"},r.a.createElement("div",{className:"font_large_caps"},e.heading),r.a.createElement("div",{className:"font_large"},e.subheading)),r.a.createElement("div",{className:"col col--4"},e.button||r.a.createElement(c.a,{to:"https://identity.amphoradata.com/Register"},r.a.createElement(d.a,null,"Get Data")))),r.a.createElement(s,{tabs:e.tabs}),e.children))},g=t(1),p=t(161),f=(t(51),function(e){var a=e.products;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a&&a.length&&r.a.createElement("section",{className:"data-products"},r.a.createElement("div",{className:"container"},a.map((function(e,a){return r.a.createElement(h,Object(g.a)({key:a},e))}))))))});function h(e){var a=e.imageUrl,t=e.title,n=e.description,c=e.link,o=Object(p.a)(a);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},o&&r.a.createElement("div",{className:"text--center",style:{paddingLeft:"30px",paddingRight:"30px"}},r.a.createElement("img",{src:o,alt:t}))),r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"font_large"},t),r.a.createElement("p",{className:"font_medium"},n),c&&r.a.createElement("a",{target:"_blank",href:c},"View Data")))}}}]);