(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[8],{1105:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(42),c=n(2),s=function(){var e=Object(a.f)();Object(c.useEffect)((function(){return e.listen((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}))}),[e])}},1106:function(e,t,n){"use strict";var a=n(15),c=n(2),s=n(8);t.a=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){var t=document.getElementsByTagName("head")[0],n=document.createElement("link");return n.rel="stylesheet",n.type="text/css",n.href="".concat(e,"?v=").concat(s.b.gitCommitHash),n.media="all",t.appendChild(n),r(!0),function(){document.head.removeChild(n)}}),[e]),i}},1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(0),c=n.n(a),s=n(7),i=n(2),r=n.n(i),o=n(264),l=n(263),d=n(1108),u=n(8),b=n(31),j=n(265),h=n.n(j),f=n(155),m=n(266),p=n(3);function v(e){var t=e.dropdownUrls,n=e.navUrls,a=r.a.useContext(o.a),i=a.account,j=a.isReady,v=a.balance,x=a.statusSell,O=a.sellToken,g=a.disconnect,y=a.connect;return Object(m.a)((function(){document.querySelectorAll("nav .nav-title a").forEach((function(e){"/".concat(e.getAttribute("href"))==="".concat(window.location.pathname).concat(window.location.hash)&&e.click()}))}),500),Object(p.jsx)("nav",{className:"navbar-dark bg-dark navbar-expand-sm",children:Object(p.jsx)("div",{"data-v-7462027c":!0,"data-v-11bc6412":!0,className:"nav-page",children:Object(p.jsxs)("div",{"data-v-7462027c":!0,className:"nav-fixed content_box m-0",children:[Object(p.jsx)("a",{"data-v-7462027c":!0,className:"nav-logo",href:"/",children:Object(p.jsx)("img",{"data-v-7462027c":!0,src:"img/logo.png"})}),Object(p.jsx)("div",{"data-v-7462027c":!0,className:"nav-title",children:n.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(p.jsx)("div",{"data-v-7462027c":!0,className:"nav-title-a",style:{padding:"10px"},children:Object(p.jsx)(d.a,{"data-v-7462027c":!0,smooth:!0,to:n,style:{maxWidth:"calc((100vw - 10px)/(".concat(window.document.querySelectorAll(".nav-title-a").length-(f.isMobile?0:1),"))"),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t})},n)}))}),Object(p.jsx)("div",{"data-v-7462027c":!0,className:"nav-lan",children:Object(p.jsx)("div",{"data-v-7462027c":!0,className:"header-login",children:i&&i.address?Object(p.jsxs)("div",{className:f.isMobile?"d-none":"",children:[Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-list-4",children:Object(p.jsx)("ul",{className:"navbar-nav",children:Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(p.jsx)("img",{src:new h.a(50,i.address).getImage(),width:50,height:50,className:"rounded-circle"})}),Object(p.jsxs)("div",{className:"dropdown-menu dropdown-menu-right text-center content_box","aria-labelledby":"navbarDropdownMenuLink",children:[Object(p.jsxs)("a",{className:"dropdown-item",disabled:"disabled",children:[Object(b.c)(i.address)," (",Object(b.a)(v,!1)," ",u.g.symbol,")"]}),t.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(p.jsx)(l.b,{to:n,className:"dropdown-item",children:t},n)})),x&&Object(p.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault();var t=Object(b.m)(function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(n).then((function(){t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Withdraw"}),Object(p.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),g()},children:"Disconnect"})]})]})})})]}):j&&Object(p.jsx)("a",{href:"#",className:f.isMobile?"invisible":"visible",onClick:function(e){e.preventDefault(),y()},children:Object(p.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 1em 0.5em 1em"},children:Object(p.jsx)("p",{style:{fontSize:"1.3em"},children:f.isMobile?"":"Connect Wallet"})})})})})]})})})}},1108:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(2),c=n.n(a),s=(n(104),n(263)),i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};var r="",o=null,l=null,d=null;function u(){r="",null!==o&&o.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function b(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function j(){var e=null;if("#"===r)e=document.body;else{var t=r.replace("#","");null===(e=document.getElementById(t))&&"#top"===r&&(e=document.body)}if(null!==e){d(e);var n=e.getAttribute("tabindex");return null!==n||b(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||b(e)||(e.blur(),e.removeAttribute("tabindex")),u(),!0}return!1}function h(e){return c.a.forwardRef((function(t,n){var a="";"string"===typeof t.to&&t.to.includes("#")?a="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(a=t.to.hash);var b={};e===s.c&&(b.isActive=function(e,t){return e&&e.isExact&&t.hash===a});var h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n}(t,["scroll","smooth","timeout","elementId"]);return c.a.createElement(e,i({},b,h,{onClick:function(e){var n;u(),r=t.elementId?"#"+t.elementId:a,t.onClick&&t.onClick(e),""===r||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(d=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===j()&&(null===o&&(o=new MutationObserver(j)),o.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){u()}),n||1e4))}),0))},ref:n}),t.children)}))}var f=h(s.b);h(s.c)},1109:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(2),c=n.n(a),s=n(8),i=n(155),r=n(36),o=n(0),l=n.n(o),d=n(7),u=n(13),b=n(42),j=n(264),h=n(3),f=function(){var e=Object(b.f)(),t=Object(b.g)(),n=Object(a.useContext)(j.a),s=n.account,i=n.disconnect,o=n.connect,f=t.pathname,m=function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/account"!==n){t.next=9;break}if(!s){t.next=5;break}u.a.show({content:"Do you want to disconnect the wallet?",closeOnAction:!0,actions:[[{key:"cancel",text:"Cancel",danger:!0},{key:"delete",text:"Disconnect",bold:!0}]],onAction:function(e,t){1===t&&i()}}),t.next=7;break;case 5:return t.next=7,o();case 7:t.next=10;break;case 9:"/#tokenomics"===n&&"/"===f?window.$('a[href^="#/#tokenomics"]')[0].click():e.push("".concat(n));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=c.a.useMemo((function(){var e=[{key:"/",title:"Home",icon:Object(h.jsx)("i",{className:"fas fa-h-square"})},{key:"/marketplace",title:"Marketplace",icon:Object(h.jsx)("i",{className:"fas fa-store"})}];return s?e=[].concat(Object(r.a)(e),[{key:"/dashboard",title:"Dashboard",icon:Object(h.jsx)("i",{className:"fas fa-columns"})},{key:"/armory",title:"Armory",icon:Object(h.jsx)("i",{className:"fas fa-burn"})},{key:"/invitation-list-rewards",title:"Rewards",icon:Object(h.jsx)("i",{className:"fas fa-link"})}]):e.push({key:"/#tokenomics",title:"Pre-sale",icon:Object(h.jsx)("i",{className:"fas fa-wallet"})}),e.push({key:"/account",title:s?"Disconnect":"Connect Wallet",icon:s?Object(h.jsx)("i",{className:"fas fa-sign-out-alt"}):Object(h.jsx)("i",{className:"fas fa-sign-in-alt"})}),e}),[s]);return Object(h.jsx)(u.c,{activeKey:f,onChange:function(e){return m(e)},children:p.map((function(e){return Object(h.jsx)(u.c.Item,{icon:e.icon,title:e.title},e.key)}))})};function m(){return Object(h.jsxs)("div",{"data-v-c18f8362":!0,"data-v-11bc6412":!0,className:"footer-page",style:{textAlign:"center",marginBottom:i.isMobile?"116px":0},children:[Object(h.jsx)("div",{"data-v-c18f8362":!0,className:"imglogo",children:Object(h.jsx)("img",{"data-v-c18f8362":!0,src:"img/logo.png"})}),Object(h.jsxs)("div",{"data-v-c18f8362":!0,className:"email",children:["Contact us: ",Object(h.jsxs)("a",{href:"mailto: service@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"),className:"contact",children:["service@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"]})]}),Object(h.jsxs)("div",{className:"social",children:[Object(h.jsx)("a",{href:s.b.socials.telegram,children:"Telegram"}),Object(h.jsx)("a",{href:s.b.socials.twitter,children:"Twitter"}),Object(h.jsx)("a",{href:s.b.socials.reddit,children:"Reddit"}),Object(h.jsx)("a",{href:s.b.socials.facebook,children:"Facebook"})]}),Object(h.jsxs)("div",{"data-v-c18f8362":!0,className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," ",s.g.name,". All rights reserved."]}),i.isMobile&&Object(h.jsx)("div",{style:{flex:"0 1 0%",position:"fixed",bottom:"0px",width:"100%",background:"#232125",zIndex:1e3},children:Object(h.jsx)(f,{})})]})}},1110:function(e,t,n){"use strict";n(2),n(1113);var a=n(3);t.a=function(e){var t=e.message,n=e.width,c=void 0===n?500:n;return Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative"},children:[Object(a.jsx)("img",{src:"img/empty.gif",style:{width:c},alt:""}),Object(a.jsx)("p",{style:{position:"absolute",bottom:c/15,fontSize:c/15},children:t})]})}},1111:function(e,t,n){"use strict";n(2),n(1114);var a=n(3);t.a=function(e){var t=e.message,n=void 0===t?"Loading...":t;e.width;return Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",minHeight:400},children:Object(a.jsx)("p",{style:{fontSize:22},children:n})})}},1112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),c=n.n(a),s=n(7),i=n(2),r=n.n(i),o=n(8),l=n(1107),d=n(31),u=n(155),b=(n(13),n(1109)),j=n(264),h=n(265),f=n.n(h),m=n(3);function p(e){var t=e.children,n=e.isReady,a=e.navUrls,i=e.dropdownUrls,h=e.showToolBar,p=void 0===h||h,v=e.title,x=r.a.useContext(j.a),O=x.account,g=x.balance,y=x.balanceBNB,w=x.statusSale,N=x.convertNumberToPrice,k=x.buyToken,_=x.totalSale,C=x.getTotalSale;return Object(m.jsx)("div",{"data-v-1398d974":!0,id:"app",className:"en application",children:Object(m.jsxs)("div",{"data-v-11bc6412":!0,"data-v-1398d974":!0,id:"homepage",className:"index-page",children:[n&&Object(m.jsx)(l.a,{navUrls:a,dropdownUrls:i}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{id:"fg3",className:"bg",src:"img/03.png"}),Object(m.jsx)("img",{id:"fg2",className:"bg",src:"img/02.png",style:{top:0}}),Object(m.jsx)("img",{id:"fg1",className:"bg",src:"img/01.png",style:{top:0}})]}),Object(m.jsx)("div",{style:{margin:"120px 0 40px 0"},children:v&&Object(m.jsx)("h2",{className:"gradient-heading",children:v})}),Object(m.jsx)("main",{style:{minHeight:"100vh",marginBottom:50},children:p?Object(m.jsx)(m.Fragment,{children:n&&O&&Object(m.jsx)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:Object(m.jsxs)("section",{className:"dashboard",children:[Object(m.jsxs)("header",{className:"booking-bar content_box m-0",children:[Object(m.jsxs)("div",{className:"booking-bar__info",children:[Object(m.jsx)("h2",{className:"booking-bar__heading",children:Object(m.jsxs)("p",{className:"styled-price",children:[o.g.name," (",o.g.symbol,")"]})}),Object(m.jsx)("p",{className:"booking-bar__sub-heading",children:Object(m.jsxs)("span",{className:"top-flight-card__heading",children:[Object(d.c)(o.g.address,u.isMobile?7:15),Object(m.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(o.g.address)},children:[" ",Object(m.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})})]}),Object(m.jsxs)("div",{className:"booking-bar__inputs",children:[Object(m.jsxs)("div",{className:"icon-input",children:[Object(m.jsxs)("p",{className:"top-flight-card__price styled-price",children:[N(g,!1),w&&"number"===typeof _&&Object(m.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault();var t=Object(d.j)(function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(n).then((function(){C(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_)},children:[" ",Object(m.jsx)("i",{className:"fas fa-plus-circle",style:{fontSize:"70%"}})]})]}),Object(m.jsx)("div",{className:"top-flight-card__info",children:Object(m.jsx)("p",{className:"top-flight-card__heading",children:o.g.symbol})})]}),Object(m.jsxs)("div",{className:"icon-input",children:[Object(m.jsx)("p",{className:"top-flight-card__price styled-price",children:N(y)}),Object(m.jsx)("div",{className:"top-flight-card__info",children:Object(m.jsx)("p",{className:"top-flight-card__heading",children:"BNB"})})]})]})]}),t,Object(m.jsxs)("aside",{className:"user-card content_box m-0",children:[Object(m.jsx)("figure",{className:"user-card__avatar",children:Object(m.jsx)("img",{src:new f.a(40,O.address).getImage(),width:"40",height:"40",className:"rounded-circle"})}),Object(m.jsxs)("div",{className:"p user-card__heading",children:["Hello, ",Object(m.jsxs)("span",{className:"user-card__name",children:[Object(d.c)(O.address,4),Object(m.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(O.address)},children:[" ",Object(m.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})]})]})]})})}):t})]}),Object(m.jsx)(b.a,{})]})})}},1113:function(e,t,n){},1114:function(e,t,n){},1223:function(e,t,n){},1229:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(0),c=n.n(a),s=n(7),i=n(15),r=n(2),o=n.n(r),l=n(1106),d=n(264),u=n(31),b=n(13),j=n(8),h=(n(1223),n(42)),f=n(1112),m=n(1110),p=n(1111),v=n(155),x=n(1105),O=n(3);function g(){var e=Object(l.a)("css/dashboard.css"),t=Object(h.f)();Object(x.a)();var n=o.a.useContext(d.a),a=n.account,r=n.convertNumberToPrice,g=n.isAdmin,y=n.getInvitationList,w=o.a.useState(),N=Object(i.a)(w,2),k=N[0],_=N[1],C=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Marketplace",href:"/marketplace"},{title:"Dashboard",href:"/dashboard"},{title:"Transactions",href:"/transactions"}]}),[]),A=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Marketplace",href:"/marketplace"},{title:"Dashboard",href:"/dashboard"},{title:"Armory",href:"/armory"},{title:"Transactions",href:"/transactions"},{title:"Administration",href:"/admin",active:g}]}),[]);o.a.useEffect((function(){a&&a.address?(T(),setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3)):t.push("/")}),[]);var T=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.d.show({icon:"loading",content:"Loading...",maskClickable:!1,duration:0}),e.next=3,y();case 3:(t=e.sent)&&(_(t),b.d.clear());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){setTimeout((function(){window.$('[data-toggle="tooltip"]').tooltip()}),500)}),[k]),Object(O.jsx)(f.a,{isReady:e,navUrls:C,dropdownUrls:A,title:"Invitation list & Rewards",children:Object(O.jsxs)("section",{className:"flights content_box",style:{minHeight:785},children:[Object(O.jsxs)("table",{className:"table table-borderless table-hover",style:{fontSize:v.isMobile?"2.2rem":"1.7rem"},children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",children:"#"}),Object(O.jsx)("th",{scope:"col",children:"From"}),Object(O.jsx)("th",{scope:"col",children:"To"}),Object(O.jsx)("th",{scope:"col",children:"Reward"})]})}),Object(O.jsx)("tbody",{children:k&&k.length?k.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:t+1}),Object(O.jsx)("td",{className:"text-info",role:"button",onClick:function(){return Object(u.e)(e.player)},"data-toggle":"tooltip","data-placement":"bottom",title:e,children:Object(u.c)(e,7)}),Object(O.jsx)("td",{role:"button",onClick:function(){return Object(u.e)(a.address)},"data-toggle":"tooltip","data-placement":"bottom",title:a.address,children:Object(u.c)(a.address,7)}),Object(O.jsxs)("td",{className:"text-success font-weight-bold",children:["+",r(j.m.inviter,!1)," ",j.g.symbol]})]},t)})):null})]}),!(k&&k.length)&&Object(O.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(O.jsx)("p",{children:k?Object(O.jsx)(m.a,{message:"Empty!",width:300}):Object(O.jsx)(p.a,{width:300})})})]})})}}}]);