(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[7],{1107:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(42),n=a(2),s=function(){var e=Object(c.f)();Object(n.useEffect)((function(){return e.listen((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}))}),[e])}},1108:function(e,t,a){"use strict";var c=a(15),n=a(2),s=a(8);t.a=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],l=a[1];return Object(n.useEffect)((function(){var t=document.getElementsByTagName("head")[0],a=document.createElement("link");return a.rel="stylesheet",a.type="text/css",a.href="".concat(e,"?v=").concat(s.b.gitCommitHash),a.media="all",t.appendChild(a),l(!0),function(){document.head.removeChild(a)}}),[e]),i}},1109:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var c=a(0),n=a.n(c),s=a(7),i=a(2),l=a.n(i),r=a(263),o=a(264),d=(a(105),function(){return(d=Object.assign||function(e){for(var t,a=1,c=arguments.length;a<c;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)});var j="",b=null,u=null,m=null;function f(){j="",null!==b&&b.disconnect(),null!==u&&(window.clearTimeout(u),u=null)}function h(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function x(){var e=null;if("#"===j)e=document.body;else{var t=j.replace("#","");null===(e=document.getElementById(t))&&"#top"===j&&(e=document.body)}if(null!==e){m(e);var a=e.getAttribute("tabindex");return null!==a||h(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==a||h(e)||(e.blur(),e.removeAttribute("tabindex")),f(),!0}return!1}function O(e){return l.a.forwardRef((function(t,a){var c="";"string"===typeof t.to&&t.to.includes("#")?c="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(c=t.to.hash);var n={};e===o.c&&(n.isActive=function(e,t){return e&&e.isExact&&t.hash===c});var s=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a}(t,["scroll","smooth","timeout","elementId"]);return l.a.createElement(e,d({},n,s,{onClick:function(e){var a;f(),j=t.elementId?"#"+t.elementId:c,t.onClick&&t.onClick(e),""===j||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},a=t.timeout,window.setTimeout((function(){!1===x()&&(null===b&&(b=new MutationObserver(x)),b.observe(document,{attributes:!0,childList:!0,subtree:!0}),u=window.setTimeout((function(){f()}),a||1e4))}),0))},ref:a}),t.children)}))}var p=O(o.b),g=(O(o.c),a(8)),v=a(31),N=a(265),T=a.n(N),E=a(155),y=a(266),w=a(3);function _(e){var t=e.dropdownUrls,a=e.navUrls,c=l.a.useContext(r.a),i=c.account,d=c.isReady,j=c.balance,b=c.statusSell,u=c.sellToken,m=c.disconnect,f=c.connect;return Object(y.a)((function(){document.querySelectorAll("nav .nav-title a").forEach((function(e){"/".concat(e.getAttribute("href"))==="".concat(window.location.pathname).concat(window.location.hash)&&e.click()}))}),500),Object(w.jsx)("nav",{className:"navbar-dark bg-dark navbar-expand-sm",children:Object(w.jsx)("div",{"data-v-7462027c":!0,"data-v-11bc6412":!0,className:"nav-page",children:Object(w.jsxs)("div",{"data-v-7462027c":!0,className:"nav-fixed content_box m-0",children:[Object(w.jsx)("a",{"data-v-7462027c":!0,className:"nav-logo",href:"/",children:Object(w.jsx)("img",{"data-v-7462027c":!0,src:"img/logo.png"})}),Object(w.jsx)("div",{"data-v-7462027c":!0,className:"nav-title",children:a.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,a=e.href;return Object(w.jsx)("div",{"data-v-7462027c":!0,className:"nav-title-a",style:{padding:"10px"},children:Object(w.jsx)(p,{"data-v-7462027c":!0,smooth:!0,to:a,style:{maxWidth:"calc((100vw - 10px)/(".concat(window.document.querySelectorAll(".nav-title-a").length-(E.isMobile?0:1),"))"),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t})},a)}))}),Object(w.jsx)("div",{"data-v-7462027c":!0,className:"nav-lan",children:Object(w.jsx)("div",{"data-v-7462027c":!0,className:"header-login",children:i&&i.address?Object(w.jsxs)("div",{className:E.isMobile?"d-none":"",children:[Object(w.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(w.jsx)("span",{className:"navbar-toggler-icon"})}),Object(w.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-list-4",children:Object(w.jsx)("ul",{className:"navbar-nav",children:Object(w.jsxs)("li",{className:"nav-item dropdown",children:[Object(w.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(w.jsx)("img",{src:new T.a(50,i.address).getImage(),width:50,height:50,className:"rounded-circle"})}),Object(w.jsxs)("div",{className:"dropdown-menu dropdown-menu-right text-center content_box","aria-labelledby":"navbarDropdownMenuLink",children:[Object(w.jsxs)("a",{className:"dropdown-item",disabled:"disabled",children:[Object(v.c)(i.address)," (",Object(v.a)(j,!1)," ",g.g.symbol,")"]}),t.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,a=e.href;return Object(w.jsx)(o.b,{to:a,className:"dropdown-item",children:t},a)})),b&&Object(w.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault();var t=Object(v.m)(function(){var e=Object(s.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(a).then((function(){t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Withdraw"}),Object(w.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),m()},children:"Disconnect"})]})]})})})]}):d&&Object(w.jsx)("a",{href:"#",className:E.isMobile?"invisible":"visible",onClick:function(e){e.preventDefault(),f()},children:Object(w.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 1em 0.5em 1em"},children:Object(w.jsx)("p",{style:{fontSize:"1.3em"},children:E.isMobile?"":"Connect Wallet"})})})})})]})})})}},1110:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var c=a(2),n=a.n(c),s=a(8),i=a(155),l=a(36),r=a(0),o=a.n(r),d=a(7),j=a(13),b=a(42),u=a(263),m=a(3),f=function(){var e=Object(b.f)(),t=Object(b.g)(),a=Object(c.useContext)(u.a),s=a.account,i=a.disconnect,r=a.connect,f=t.pathname,h=function(){var t=Object(d.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/account"!==a){t.next=9;break}if(!s){t.next=5;break}j.a.show({content:"Do you want to disconnect the wallet?",closeOnAction:!0,actions:[[{key:"cancel",text:"Cancel",danger:!0},{key:"delete",text:"Disconnect",bold:!0}]],onAction:function(e,t){1===t&&i()}}),t.next=7;break;case 5:return t.next=7,r();case 7:t.next=10;break;case 9:"/#tokenomics"===a&&"/"===f?window.$('a[href^="#/#tokenomics"]')[0].click():e.push("".concat(a));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=n.a.useMemo((function(){var e=[{key:"/",title:"Home",icon:Object(m.jsx)("i",{className:"fas fa-h-square"})},{key:"/marketplace",title:"Marketplace",icon:Object(m.jsx)("i",{className:"fas fa-store"})}];return s?e=[].concat(Object(l.a)(e),[{key:"/dashboard",title:"Dashboard",icon:Object(m.jsx)("i",{className:"fas fa-columns"})},{key:"/armory",title:"Armory",icon:Object(m.jsx)("i",{className:"fas fa-burn"})},{key:"/invitation-list-rewards",title:"Rewards",icon:Object(m.jsx)("i",{className:"fas fa-link"})}]):e.push({key:"/#tokenomics",title:"Pre-sale",icon:Object(m.jsx)("i",{className:"fas fa-wallet"})}),e.push({key:"/account",title:s?"Disconnect":"Connect Wallet",icon:s?Object(m.jsx)("i",{className:"fas fa-sign-out-alt"}):Object(m.jsx)("i",{className:"fas fa-sign-in-alt"})}),e}),[s]);return Object(m.jsx)(j.c,{activeKey:f,onChange:function(e){return h(e)},children:x.map((function(e){return Object(m.jsx)(j.c.Item,{icon:e.icon,title:e.title},e.key)}))})};function h(){return Object(m.jsxs)("div",{"data-v-c18f8362":!0,"data-v-11bc6412":!0,className:"footer-page",style:{textAlign:"center",marginBottom:i.isMobile?"116px":0},children:[Object(m.jsx)("img",{"data-v-c18f8362":!0,style:{width:180},src:"img/logo.png"}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"email",children:["Contact us: ",Object(m.jsxs)("a",{href:"mailto: service@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),"s.com"),className:"contact",children:["service@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),"s.com"]})]}),Object(m.jsxs)("div",{className:"social",children:[Object(m.jsx)("a",{href:s.b.socials.telegram,children:"Telegram"}),Object(m.jsx)("a",{href:s.b.socials.twitter,children:"Twitter"}),Object(m.jsx)("a",{href:s.b.socials.reddit,children:"Reddit"}),Object(m.jsx)("a",{href:s.b.socials.facebook,children:"Facebook"})]}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," ",s.g.name,". All rights reserved."]}),i.isMobile&&Object(m.jsx)("div",{style:{flex:"0 1 0%",position:"fixed",bottom:"0px",width:"100%",background:"#232125",zIndex:1e3},children:Object(m.jsx)(f,{})})]})}},1111:function(e,t,a){"use strict";a(2),a(1114);var c=a(3);t.a=function(e){var t=e.message,a=e.width,n=void 0===a?500:a;return Object(c.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative"},children:[Object(c.jsx)("img",{src:"img/empty.gif",style:{width:n},alt:""}),Object(c.jsx)("p",{style:{position:"absolute",bottom:n/15,fontSize:n/15},children:t})]})}},1112:function(e,t,a){"use strict";a(2),a(1115);var c=a(3);t.a=function(e){var t=e.message,a=void 0===t?"Loading...":t;e.width;return Object(c.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",minHeight:400},children:Object(c.jsx)("p",{style:{fontSize:22},children:a})})}},1113:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var c=a(0),n=a.n(c),s=a(7),i=a(2),l=a.n(i),r=a(8),o=a(1109),d=a(31),j=a(155),b=a(1110),u=a(263),m=a(265),f=a.n(m),h=a(3);function x(e){var t=e.children,a=e.isReady,c=e.navUrls,i=e.dropdownUrls,m=e.showToolBar,x=void 0===m||m,O=e.title,p=l.a.useContext(u.a),g=p.account,v=p.balance,N=p.balanceBNB,T=p.statusSale,E=p.convertNumberToPrice,y=p.buyToken,w=p.totalSale,_=p.getTotalSale;return Object(h.jsx)("div",{"data-v-1398d974":!0,id:"app",className:"en application",children:Object(h.jsxs)("div",{"data-v-11bc6412":!0,"data-v-1398d974":!0,id:"homepage",className:"index-page",children:[a&&Object(h.jsx)(o.a,{navUrls:c,dropdownUrls:i}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{id:"fg3",className:"bg",src:"img/03.png"}),Object(h.jsx)("img",{id:"fg2",className:"bg",src:"img/02.png",style:{top:0}}),Object(h.jsx)("img",{id:"fg1",className:"bg",src:"img/01.png",style:{top:0}})]}),Object(h.jsx)("div",{style:{margin:"120px 0 40px 0"},children:O&&Object(h.jsx)("h2",{className:"gradient-heading",children:O})}),Object(h.jsx)("main",{style:{minHeight:"100vh",marginBottom:50},children:x?Object(h.jsx)(h.Fragment,{children:a&&g&&Object(h.jsx)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:Object(h.jsxs)("section",{className:"dashboard",children:[Object(h.jsxs)("header",{className:"booking-bar content_box m-0",children:[Object(h.jsxs)("div",{className:"booking-bar__info",children:[Object(h.jsx)("h2",{className:"booking-bar__heading",children:Object(h.jsxs)("p",{className:"styled-price",children:[r.g.name," (",r.g.symbol,")"]})}),Object(h.jsx)("p",{className:"booking-bar__sub-heading",children:Object(h.jsxs)("span",{className:"top-flight-card__heading",children:[Object(d.c)(r.g.address,j.isMobile?7:15),Object(h.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(r.g.address)},children:[" ",Object(h.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})})]}),Object(h.jsxs)("div",{className:"booking-bar__inputs",children:[Object(h.jsxs)("div",{className:"icon-input",children:[Object(h.jsxs)("p",{className:"top-flight-card__price styled-price",children:[E(v,!1),T&&"number"===typeof w&&Object(h.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault();var t=Object(d.j)(function(){var e=Object(s.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(a).then((function(){_(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w)},children:[" ",Object(h.jsx)("i",{className:"fas fa-plus-circle",style:{fontSize:"70%"}})]})]}),Object(h.jsx)("div",{className:"top-flight-card__info",children:Object(h.jsx)("p",{className:"top-flight-card__heading",children:Object(h.jsx)("img",{src:"img/logo-token-28.png",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]}),Object(h.jsxs)("div",{className:"icon-input",children:[Object(h.jsx)("p",{className:"top-flight-card__price styled-price",children:E(N)}),Object(h.jsx)("div",{className:"top-flight-card__info",children:Object(h.jsx)("p",{className:"top-flight-card__heading",children:Object(h.jsx)("img",{src:"img/bnb.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]})]})]}),t,Object(h.jsxs)("aside",{className:"user-card content_box m-0",children:[Object(h.jsx)("figure",{className:"user-card__avatar",children:Object(h.jsx)("img",{src:new f.a(40,g.address).getImage(),width:"40",height:"40",className:"rounded-circle"})}),Object(h.jsxs)("div",{className:"p user-card__heading",children:["Hello, ",Object(h.jsxs)("span",{className:"user-card__name",children:[Object(d.c)(g.address,4),Object(h.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(g.address)},children:[" ",Object(h.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})]})]})]})})}):t})]}),Object(h.jsx)(b.a,{})]})})}},1114:function(e,t,a){},1115:function(e,t,a){},1130:function(e,t,a){},1136:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var c,n=a(28),s=a(0),i=a.n(s),l=a(7),r=a(15),o=a(2),d=a.n(o),j=a(1108),b=a(263),u=(a(1130),a(1113)),m=a(265),f=a.n(m),h=a(31),x=a(134),O=a.n(x),p=a(8),g=a(156),v=a.n(g),N=a(1111),T=a(1112),E=a(268),y=a(13),w=a(155),_=a(1107),k=a(3),C=function(e){var t=e.typeNft,a=e.id,c=e.price,n=e.tokenId,s=e.payWithTokens,o=e.timestamp,j=e.seller,u=e.onBuyDone,m=void 0===u?function(){}:u,x=d.a.useContext(b.a),g=x.getCharacterById,N=x.getWeaponsById,T=x.getEggById,_=x.getChestById,C=x.buyNft,P=x.account,A=x.connect,F=d.a.useState({}),Y=Object(r.a)(F,2),R=Y[0],S=Y[1];d.a.useEffect((function(){Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==p.l.TYPE_NFT.CHARACTER){e.next=11;break}return e.t0=S,e.next=4,g(n);case 4:if(e.t1=e.sent,e.t1){e.next=7;break}e.t1={};case 7:e.t2=e.t1,(0,e.t0)(e.t2),e.next=41;break;case 11:if(t!==p.l.TYPE_NFT.WEAPON){e.next=22;break}return e.t3=S,e.next=15,N(n);case 15:if(e.t4=e.sent,e.t4){e.next=18;break}e.t4={};case 18:e.t5=e.t4,(0,e.t3)(e.t5),e.next=41;break;case 22:if(t!==p.l.TYPE_NFT.EGG){e.next=33;break}return e.t6=S,e.next=26,T(n);case 26:if(e.t7=e.sent,e.t7){e.next=29;break}e.t7={};case 29:e.t8=e.t7,(0,e.t6)(e.t8),e.next=41;break;case 33:return e.t9=S,e.next=36,_(n);case 36:if(e.t10=e.sent,e.t10){e.next=39;break}e.t10={};case 39:e.t11=e.t10,(0,e.t9)(e.t11);case 41:case"end":return e.stop()}}),e)})))(),setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3),y.d.clear()}),[]);var I=function(e){return[p.l.TYPE_NFT.CHARACTER,p.l.TYPE_NFT.WEAPON].includes(e)},G=function(e){return e===p.l.TYPE_NFT.CHARACTER?"character":e===p.l.TYPE_NFT.WEAPON?"weapon":e===p.l.TYPE_NFT.EGG?"egg":"chest"},H=function(e,t){return(e===p.l.TYPE_NFT.CHARACTER?p.d.species[t]:e===p.l.TYPE_NFT.WEAPON?p.p.species[t]:{})||{}},W=function(){var e=Object(l.a)(i.a.mark((function e(l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.preventDefault(),!P){e.next=5;break}C({tokenId:n,payWithTokens:s,amount:c,typeNft:t,name:H(t,R.speciesId).name||t===p.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest",id:a}).then((function(){m(a)})),e.next=10;break;case 5:return e.next=7,A();case 7:return e.next=9,v()(2e3);case 9:window.$(".buyNft")[0].click();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"col-md-".concat(w.isMobile?4:3," content_box"),children:[R&&Object(k.jsxs)("div",{className:"row mb-3 position-relative",children:[Object(k.jsxs)("div",{className:"row justify-content-end align-items-center position-absolute h-100",style:{left:25,fontSize:"18px",fontWeight:"bold",lineHeight:"20px",maxWidth:"50px"},children:["ID: ",a>9?a:"0"+a]}),Object(k.jsx)("div",{className:"row justify-content-center w-100 m-0",children:Object(k.jsx)("div",{className:"content_box_label_".concat([p.l.TYPE_NFT.WEAPON,p.l.TYPE_NFT.CHARACTER].includes(t)?p.d.rareType[H(t,R.speciesId).rarity||0].toLocaleLowerCase():"legendary"," font-weight-bold"),children:[p.l.TYPE_NFT.WEAPON,p.l.TYPE_NFT.CHARACTER].includes(t)?p.d.rareType[H(t,R.speciesId).rarity||0]||"...":"???"})}),Object(k.jsx)("div",{className:"row justify-content-end align-items-center position-absolute h-100",style:{right:15},children:Object(k.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(h.o)({shareUrl:"".concat(window.location.origin,"?marketplaceId=").concat(a,"#/marketplace"),imageUrl:O.a.isEmpty(R)?"img/loading_1.gif":"img/".concat(G(t),"s/").concat(G(t),"_").concat(I(t)?R.speciesId:t===p.l.TYPE_NFT.EGG?4:0,".").concat(t===p.l.TYPE_NFT.WEAPON?"png":"gif"),title:P?"".concat(P.address," sent an invitation to trade on the marketplace!! check now!!"):"".concat([p.l.TYPE_NFT.WEAPON,p.l.TYPE_NFT.CHARACTER].includes(t)?H(t,R.speciesId||0).name:t===p.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #").concat(n)})},children:Object(k.jsx)("i",{style:{fontWeight:"bold",fontSize:"16px"},className:"font_family icon-share-pat attr-icon"})})})]}),R&&Object(k.jsx)("div",{className:"nft-image",children:Object(k.jsx)(E.LazyLoadImage,{className:"card-img-top",effect:"blur",src:O.a.isEmpty(R)?"img/loading_1.gif":"img/".concat(G(t),"s/").concat(G(t),"_").concat(I(t)?R.speciesId:t===p.l.TYPE_NFT.EGG?4:0,".").concat(t===p.l.TYPE_NFT.WEAPON?"png":"gif")})}),Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsxs)("div",{className:"price",children:["Price: ",Object(k.jsxs)("span",{className:"text-success",children:[s?Object(h.a)(Object(h.b)(c),!1):c/Math.pow(10,18)," "]}),s?p.g.symbol:"BNB"]}),Object(k.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[Object(k.jsx)("div",{className:"owner-avatar",children:Object(k.jsx)("img",{src:new f.a(35,j).getImage(),className:"rounded-circle"})}),Object(k.jsxs)("div",{className:"detail",children:[R&&Object(k.jsxs)("div",{className:"text-left text-warning",children:[[p.l.TYPE_NFT.WEAPON,p.l.TYPE_NFT.CHARACTER].includes(t)?H(t,R.speciesId||0).name:t===p.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #",n]}),Object(k.jsx)("div",{"data-bn-type":"text",className:"css-1jq4ozh",role:"button","data-toggle":"tooltip","data-placement":"bottom",title:j,onClick:function(){return Object(h.e)(j)},children:Object(h.c)(j,10)})]})]}),Object(k.jsxs)("p",{className:"card-text",style:{marginBottom:10},children:[Object(k.jsx)("div",{"data-v-11bc6412":!0,className:"attr-content",children:[p.l.TYPE_NFT.CHARACTER,p.l.TYPE_NFT.EGG].includes(t)?Object(k.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(k.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(k.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-life attr-icon align-middle"}),Object(k.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["HP ",Object(k.jsx)("span",{className:"text-success font-weight-bold",children:t===p.l.TYPE_NFT.EGG?"???":R.HP})]})]}),Object(k.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(k.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-defense attr-icon align-middle"}),Object(k.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["DEF ",Object(k.jsx)("span",{className:"text-warning font-weight-bold",children:t===p.l.TYPE_NFT.EGG?"???":R.DEF})]})]}),Object(k.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(k.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-hedge attr-icon align-middle"}),Object(k.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["AVD ",Object(k.jsx)("span",{className:"text-info font-weight-bold",children:t===p.l.TYPE_NFT.EGG?"???":R.AVD})]})]})]}):Object(k.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(k.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(k.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-attack attr-icon align-middle"}),Object(k.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["ATK ",Object(k.jsx)("span",{className:"text-success font-weight-bold",children:t===p.l.TYPE_NFT.CHEST?"???":R.ATK})]})]}),Object(k.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(k.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-crit attr-icon align-middle"}),Object(k.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["CRT ",Object(k.jsx)("span",{className:"text-warning font-weight-bold",children:t===p.l.TYPE_NFT.CHEST?"???":R.CRT})]})]}),Object(k.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(k.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-speed attr-icon align-middle"}),Object(k.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["WSP ",Object(k.jsx)("span",{className:"text-info font-weight-bold",children:t===p.l.TYPE_NFT.CHEST?"???":R.WSP})]})]})]})}),Object(k.jsxs)("div",{children:["Created At: ",o.toDate().toLocaleString()]})]}),Object(k.jsx)("a",{href:"#",onClick:W,className:"buyNft",disabled:P&&P.address===j,children:Object(k.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 2em 0.5em 2em"},children:Object(k.jsx)("p",{style:{fontSize:"1em"},children:"Buy Now"})})})]})]},"".concat(t,"_").concat(a))};function P(){var e=Object(j.a)("css/dashboard.css"),t=d.a.useContext(b.a),a=t.isAdmin,s=t.offers,o=t.balanceMarket,m=t.getBalanceMarket,f=t.account,x=t.withdrawFunds,O=t.balance,g=t.statusSale,v=t.buyToken,E=t.totalSale,w=t.getTotalSale,P=t.getOffersPaging,A=t.getOffer,F=t.getCharacterById,Y=t.getWeaponsById,R=t.getEggById,S=t.getChestById,I=t.buyNft,G=t.connect;Object(_.a)();var H=d.a.useState(p.l.TYPE_NFT.CHARACTER),W=Object(r.a)(H,2),B=W[0],D=W[1],M=d.a.useState(),L=Object(r.a)(M,2),z=L[0],U=L[1],K=d.a.useState(0),q=Object(r.a)(K,2),V=q[0],$=q[1],J=d.a.useState(0),X=Object(r.a)(J,2),Q=X[0],Z=X[1],ee=d.a.useState(),te=Object(r.a)(ee,2),ae=te[0],ce=te[1],ne=d.a.useState(0),se=Object(r.a)(ne,2),ie=se[0],le=se[1],re=d.a.useState(0),oe=Object(r.a)(re,2),de=oe[0],je=oe[1],be=d.a.useState(),ue=Object(r.a)(be,2),me=ue[0],fe=ue[1],he=d.a.useState(0),xe=Object(r.a)(he,2),Oe=xe[0],pe=xe[1],ge=d.a.useState(0),ve=Object(r.a)(ge,2),Ne=ve[0],Te=ve[1],Ee=d.a.useState(),ye=Object(r.a)(Ee,2),we=ye[0],_e=ye[1],ke=d.a.useState(0),Ce=Object(r.a)(ke,2),Pe=Ce[0],Ae=Ce[1],Fe=d.a.useState(0),Ye=Object(r.a)(Fe,2),Re=Ye[0],Se=Ye[1],Ie=d.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"NFTs",href:"/".concat(window.location.search,"#nfts"),active:!f},{title:"Tokenomics",href:"/".concat(window.location.search,"#tokenomics"),active:!f},{title:"Dashboard",href:"/dashboard",active:!!f},{title:"Armory",href:"/armory",active:!!f},{title:"Invitation list & Rewards",href:"/invitation-list-rewards",active:!!f}]}),[f]),Ge=d.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Dashboard",href:"/dashboard"},{title:"Armory",href:"/armory"},{title:"Administration",href:"/admin",active:a},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]);d.a.useEffect((function(){window.$('[data-toggle="tooltip"]').tooltip(),setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3),Be(p.l.TYPE_NFT.CHARACTER),Be(p.l.TYPE_NFT.WEAPON),Be(p.l.TYPE_NFT.EGG),Be(p.l.TYPE_NFT.CHEST)}),[]),d.a.useEffect((function(){f&&(m(),c&&c.setContext({getCharacterById:F,getWeaponsById:Y,getEggById:R,getChestById:S,buyNft:I,account:f,connect:G}))}),[f]),d.a.useEffect((function(){Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Object(h.g)("marketplaceId"))){e.next=6;break}return e.next=4,A(t);case 4:(a=e.sent)&&(c=Object(h.l)(a,{getCharacterById:F,getWeaponsById:Y,getEggById:R,getChestById:S,buyNft:I,account:f,connect:G},Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:He(),c.close();case 2:case"end":return e.stop()}}),e)})))));case 6:case"end":return e.stop()}}),e)})))()}),[]);var He=function(){Be(p.l.TYPE_NFT.CHARACTER,!0),Be(p.l.TYPE_NFT.WEAPON,!0),Be(p.l.TYPE_NFT.EGG,!0),Be(p.l.TYPE_NFT.CHEST,!0)},We=function(e){return e===p.l.TYPE_NFT.CHARACTER?"Warriors":e===p.l.TYPE_NFT.WEAPON?"Weapons":e===p.l.TYPE_NFT.EGG?"Magic Eggs":"Weapon Chest"},Be=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,c,n,s,l,r,o,d,j,b,u,m,f,h,x,O,g,v,N=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=N.length>1&&void 0!==N[1]&&N[1],c=20,y.d.show({icon:"loading",content:"Loading...",maskClickable:!1,duration:0}),t!==p.l.TYPE_NFT.CHARACTER){e.next=15;break}return e.next=6,P(t,Q,c);case 6:n=e.sent,s=n.results,l=n.nextOffset,r=n.total,U(((a?[]:z)||[]).concat(s)),$(r),Z(l),e.next=48;break;case 15:if(t!==p.l.TYPE_NFT.WEAPON){e.next=27;break}return e.next=18,P(t,de,c);case 18:o=e.sent,d=o.results,j=o.nextOffset,b=o.total,ce(((a?[]:ae)||[]).concat(d)),le(b),je(j),e.next=48;break;case 27:if(t!==p.l.TYPE_NFT.EGG){e.next=39;break}return e.next=30,P(t,Ne,c);case 30:u=e.sent,m=u.results,f=u.nextOffset,h=u.total,fe(((a?[]:me)||[]).concat(m)),pe(h),Te(f),e.next=48;break;case 39:return e.next=41,P(t,Re,c);case 41:x=e.sent,O=x.results,g=x.nextOffset,v=x.total,_e(((a?[]:we)||[]).concat(O)),Ae(v),Se(g);case 48:y.d.clear();case 49:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(e){if(s){var t=s.filter((function(t){return t.typeNft===e}));if(t.length)return t[0].offers||[]}return[]};return Object(k.jsx)(u.a,{isReady:e,navUrls:Ie,dropdownUrls:Ge,showToolBar:!1,title:"Marketplace",children:Object(k.jsx)("div",{className:"",children:Object(k.jsx)("div",{className:"marketplace",children:Object(k.jsxs)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:[Object(k.jsxs)("section",{className:"content_box d-flex marketplace-toolbar",children:[Object(k.jsxs)("div",{className:"left-toolbar",children:[Object(k.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return D(p.l.TYPE_NFT.CHARACTER)},children:[Object(k.jsx)("div",{className:"nft-image-item ".concat(B===p.l.TYPE_NFT.CHARACTER?"active":""),children:Object(k.jsx)("img",{src:"img/character.png"})}),Object(k.jsx)("span",{className:"label",children:V})]}),Object(k.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return D(p.l.TYPE_NFT.WEAPON)},children:[Object(k.jsx)("div",{className:"nft-image-item ".concat(B===p.l.TYPE_NFT.WEAPON?"active":""),children:Object(k.jsx)("img",{src:"img/weapon.png"})}),Object(k.jsx)("span",{className:"label",children:ie})]}),Object(k.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return D(p.l.TYPE_NFT.EGG)},children:[Object(k.jsx)("div",{className:"nft-image-item ".concat(B===p.l.TYPE_NFT.EGG?"active":""),children:Object(k.jsx)("img",{src:"img/egg.png"})}),Object(k.jsx)("span",{className:"label",children:Oe})]}),Object(k.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return D(p.l.TYPE_NFT.CHEST)},children:[Object(k.jsx)("div",{className:"nft-image-item ".concat(B===p.l.TYPE_NFT.CHEST?"active":""),children:Object(k.jsx)("img",{src:"img/chest.png"})}),Object(k.jsx)("span",{className:"label",children:Pe})]})]}),f&&Object(k.jsxs)("div",{className:"right-toolbar",children:[g&&"number"===typeof E&&Object(k.jsxs)("a",{href:"#",className:"nft-item",onClick:function(e){e.preventDefault();var t=Object(h.j)(function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(a).then((function(){w(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E)},children:[Object(k.jsxs)("span",{className:"label",children:[Object(h.a)(O,!1)," ",p.g.symbol]}),Object(k.jsx)("span",{className:"label",children:Object(k.jsx)("i",{className:"fas fa-plus-circle align-middle"})})]}),Object(k.jsxs)("a",{href:"#",className:"nft-item",disabled:0===o,onClick:function(e){e.preventDefault(),x()},children:[Object(k.jsx)("img",{src:"img/withdrawal.png",style:{width:40,height:40}}),Object(k.jsxs)("span",{className:"label",children:[o," BNB"]})]})]})]}),Object(k.jsxs)("div",{className:"content content_box",children:[Object(k.jsxs)("div",{className:"".concat(B!==p.l.TYPE_NFT.CHARACTER?"d-none":""),children:[Object(k.jsxs)("div",{id:We(p.l.TYPE_NFT.CHARACTER),children:[Object(k.jsx)("p",{className:"title w-100 text-center",children:We(p.l.TYPE_NFT.CHARACTER)}),Object(k.jsx)("div",{className:"row",children:z&&z.length?z.map((function(e){return Object(k.jsx)(C,Object(n.a)(Object(n.a)({},e),{},{onBuyDone:function(e){U(z.filter((function(t){return t.id!==e})))}}),"".concat(e.id))})):null})]},"".concat(p.l.TYPE_NFT.CHARACTER)),!(z&&z.length)&&Object(k.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(k.jsx)("p",{children:z&&!De(B).length?Object(k.jsx)(N.a,{message:"Empty!",width:500}):Object(k.jsx)(T.a,{width:500})})}),V>(z||[]).length&&Object(k.jsx)("div",{className:"load-more",children:Object(k.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),Be(p.l.TYPE_NFT.CHARACTER)},children:"Load more"})})]}),Object(k.jsxs)("div",{className:"".concat(B!==p.l.TYPE_NFT.WEAPON?"d-none":""),children:[Object(k.jsxs)("div",{id:We(p.l.TYPE_NFT.WEAPON),children:[Object(k.jsx)("p",{className:"title w-100 text-center",children:We(p.l.TYPE_NFT.WEAPON)}),Object(k.jsx)("div",{className:"row",children:ae&&ae.length?ae.map((function(e){return Object(k.jsx)(C,Object(n.a)(Object(n.a)({},e),{},{onBuyDone:function(e){ce(ae.filter((function(t){return t.id!==e})))}}),"".concat(e.id))})):null})]},"".concat(p.l.TYPE_NFT.WEAPON)),!(ae&&ae.length)&&Object(k.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(k.jsx)("p",{children:ae&&!De(B).length?Object(k.jsx)(N.a,{message:"Empty!",width:500}):Object(k.jsx)(T.a,{width:500})})}),ie>(ae||[]).length&&Object(k.jsx)("div",{className:"load-more",children:Object(k.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),Be(p.l.TYPE_NFT.WEAPON)},children:"Load more"})})]}),Object(k.jsxs)("div",{className:"".concat(B!==p.l.TYPE_NFT.EGG?"d-none":""),children:[Object(k.jsxs)("div",{id:We(p.l.TYPE_NFT.EGG),children:[Object(k.jsx)("p",{className:"title w-100 text-center",children:We(p.l.TYPE_NFT.EGG)}),Object(k.jsx)("div",{className:"row",children:me&&me.length?me.map((function(e){return Object(k.jsx)(C,Object(n.a)(Object(n.a)({},e),{},{onBuyDone:function(e){fe(me.filter((function(t){return t.id!==e})))}}),"".concat(e.id))})):null})]},"".concat(p.l.TYPE_NFT.EGG)),!(me&&me.length)&&Object(k.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(k.jsx)("p",{children:me&&!De(B).length?Object(k.jsx)(N.a,{message:"Empty!",width:500}):Object(k.jsx)(T.a,{width:500})})}),Oe>(me||[]).length&&Object(k.jsx)("div",{className:"load-more",children:Object(k.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),Be(p.l.TYPE_NFT.EGG)},children:"Load more"})})]}),Object(k.jsxs)("div",{className:"".concat(B!==p.l.TYPE_NFT.CHEST?"d-none":""),children:[Object(k.jsxs)("div",{id:We(p.l.TYPE_NFT.CHEST),children:[Object(k.jsx)("p",{className:"title w-100 text-center",children:We(p.l.TYPE_NFT.CHEST)}),Object(k.jsx)("div",{className:"row",children:we&&we.length?we.map((function(e){return Object(k.jsx)(C,Object(n.a)(Object(n.a)({},e),{},{onBuyDone:function(e){_e(we.filter((function(t){return t.id!==e})))}}),"".concat(e.id))})):null})]},"".concat(p.l.TYPE_NFT.CHEST)),!(we&&we.length)&&Object(k.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(k.jsx)("p",{children:we&&!De(B).length?Object(k.jsx)(N.a,{message:"Empty!",width:500}):Object(k.jsx)(T.a,{width:500})})}),Pe>(we||[]).length&&Object(k.jsx)("div",{className:"load-more",children:Object(k.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),Be(p.l.TYPE_NFT.CHEST)},children:"Load more"})})]})]})]})})})})}}}]);