(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{152:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(6),o=(n(0),n(152)),i={id:"understand-applications",title:"Understand Applications",sidebar_label:"Understand"},c={unversionedId:"applications/understand-applications",id:"applications/understand-applications",isDocsHomePage:!1,title:"Understand Applications",description:"Applications are 3rd party apps, created by Amphora Data users, that enable the users of that 3rd party applications to login to Amphora Data and connect to their data sources.",source:"@site/docs/applications/understand-applications.md",permalink:"/docs/applications/understand-applications",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/applications/understand-applications.md",sidebar_label:"Understand",sidebar:"someSidebar",previous:{title:"Personalise your url",permalink:"/docs/users_orgs/set-personalised-url"},next:{title:"Register an Application",permalink:"/docs/applications/register-application"}},p=[{value:"Why use applications?",id:"why-use-applications",children:[]},{value:"How do users authenticate?",id:"how-do-users-authenticate",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Applications")," are 3rd party apps, created by Amphora Data users, that enable the users of that 3rd party applications to login to Amphora Data and connect to their data sources."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Custom applications are only available to Organisations on the Institution Plan.")),Object(o.b)("h1",{id:"faq"},"FAQ"),Object(o.b)("h2",{id:"why-use-applications"},"Why use applications?"),Object(o.b)("p",null,"Different data need different presentation. At Amphora Data, we're agnostic about the best way to present your users with information. Applications give you all the power of the Amphora Data API and Identity system in your own application."),Object(o.b)("h2",{id:"how-do-users-authenticate"},"How do users authenticate?"),Object(o.b)("p",null,"Users must sign in to to an Application to use any Amphora features. Amphora Data uses OAuth and Open ID Connect to securely authenticate users. By creating an Application in Amphora Data, you are enabling 2 required features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CORS requests. When you create an Application, you can specify a number of ",Object(o.b)("inlineCode",{parentName:"li"},"Origins"),". When a browser attempts to connect to the Amphora Data API or Identity services from that origin, ours CORS policies will tell the client browser it is able to connect.")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}),"Learn more about CORS")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OAuth redirect url(s). When you create an Application, you are telling the Amphora Data Identity service to let Amphora users login to that application. ")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You won't be able to log into any 3rd party application if you have not registered first.")))}l.isMDXComponent=!0}}]);