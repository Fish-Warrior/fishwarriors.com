(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[6],{1083:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(34),c=a(2),s=function(){var e=Object(n.f)();Object(c.useEffect)((function(){return e.listen((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}))}),[e])}},1084:function(e,t,a){"use strict";var n=a(12),c=a(2),s=a(5);t.a=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),i=a[0],l=a[1];return Object(c.useEffect)((function(){var t=document.getElementsByTagName("head")[0],a=document.createElement("link");return a.rel="stylesheet",a.type="text/css",a.href="".concat(e,"?v=").concat(s.b.gitCommitHash),a.media="all",t.appendChild(a),l(!0),function(){document.head.removeChild(a)}}),[e]),i}},1085:function(e,t,a){},1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(2),c=a.n(n),s=a(5),i=a(98),l=a(35),r=a(0),o=a.n(r),d=a(4),j=a(8),b=a(34),u=a(251),m=a(1),h=function(){var e=Object(b.f)(),t=Object(b.g)(),a=Object(n.useContext)(u.a),s=a.account,i=a.disconnect,r=a.connect,h=t.pathname,f=function(){var t=Object(d.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"/account"===a?s?j.a.show({content:"Do you want to disconnect the wallet?",closeOnAction:!0,actions:[[{key:"cancel",text:"Cancel",danger:!0},{key:"delete",text:"Disconnect",bold:!0}]],onAction:function(e,t){1===t&&i()}}):r().then((function(){e.push("/dashboard")})):"/#tokenomics"===a&&"/"===h?window.$('a[href^="#/#tokenomics"]')[0].click():e.push("".concat(a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=c.a.useMemo((function(){var e=[{key:"/",title:"Home",icon:Object(m.jsx)("i",{className:"fas fa-h-square"})},{key:"/marketplace",title:"Marketplace",icon:Object(m.jsx)("i",{className:"fas fa-store"})}];return s?e=[].concat(Object(l.a)(e),[{key:"/dashboard",title:"Dashboard",icon:Object(m.jsx)("i",{className:"fas fa-columns"})},{key:"/armory",title:"Armory",icon:Object(m.jsx)("i",{className:"fas fa-burn"})},{key:"/invitation-list-rewards",title:"Rewards",icon:Object(m.jsx)("i",{className:"fas fa-link"})}]):e.push({key:"/#tokenomics",title:"Pre-sale",icon:Object(m.jsx)("i",{className:"fas fa-wallet"})}),e.push({key:"/account",title:s?"Disconnect":"Connect Wallet",icon:s?Object(m.jsx)("i",{className:"fas fa-sign-out-alt"}):Object(m.jsx)("i",{className:"fas fa-sign-in-alt"})}),e}),[s]);return Object(m.jsx)(j.c,{activeKey:h,onChange:function(e){return f(e)},children:x.map((function(e){return Object(m.jsx)(j.c.Item,{icon:e.icon,title:e.title},e.key)}))})},f=(a(1085),function(){var e=function(){new window.google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")};return c.a.useEffect((function(){var t=document.createElement("script");t.setAttribute("src","//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),document.body.appendChild(t),window.googleTranslateElementInit=e,setTimeout((function(){window.$("#google_translate_element .goog-te-gadget").contents().filter((function(){return"#text"===this.nodeName})).remove()}),3e3)}),[]),Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-3",children:[Object(m.jsx)("p",{children:Object(m.jsx)("b",{children:"Language"})}),Object(m.jsx)("div",{id:"google_translate_element"})]})});function x(){return Object(m.jsxs)("div",{"data-v-c18f8362":!0,"data-v-11bc6412":!0,className:"footer-page",style:{textAlign:"center",marginBottom:i.isMobile?"116px":0},children:[Object(m.jsx)("img",{"data-v-c18f8362":!0,style:{width:180},src:"img/logo.svg"}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"email",children:["Support Email: ",Object(m.jsxs)("a",{href:"mailto: support@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"),className:"contact",children:["support@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"]})," ",Object(m.jsx)("br",{}),"Partnership & Inquiry Email: ",Object(m.jsxs)("a",{href:"mailto: hello@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"),className:"contact",children:["hello@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"]})]}),Object(m.jsxs)("div",{className:"social",children:[Object(m.jsx)("a",{target:"_blank",href:s.b.socials.telegram,children:"Telegram"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.telegramChannel,children:"Announcements"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.twitter,children:"Twitter"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.reddit,children:"Reddit"}),Object(m.jsx)("a",{target:"_blank",href:s.b.socials.facebook,children:"Facebook"})]}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," ",s.g.name,". All rights reserved."]}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{})}),i.isMobile&&Object(m.jsx)("div",{style:{flex:"0 1 0%",position:"fixed",bottom:"0px",width:"100%",background:"#232125",zIndex:1e3},children:Object(m.jsx)(h,{})})]})}},1087:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var n=a(0),c=a.n(n),s=a(4),i=a(2),l=a.n(i),r=a(251),o=a(34),d=a(252),j=(a(99),function(){return(j=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var c in t=arguments[a])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)});var b="",u=null,m=null,h=null;function f(){b="",null!==u&&u.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function x(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function g(){var e=null;if("#"===b)e=document.body;else{var t=b.replace("#","");null===(e=document.getElementById(t))&&"#top"===b&&(e=document.body)}if(null!==e){h(e);var a=e.getAttribute("tabindex");return null!==a||x(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==a||x(e)||(e.blur(),e.removeAttribute("tabindex")),f(),!0}return!1}function O(e){return l.a.forwardRef((function(t,a){var n="";"string"===typeof t.to&&t.to.includes("#")?n="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(n=t.to.hash);var c={};e===d.c&&(c.isActive=function(e,t){return e&&e.isExact&&t.hash===n});var s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a}(t,["scroll","smooth","timeout","elementId"]);return l.a.createElement(e,j({},c,s,{onClick:function(e){var a;f(),b=t.elementId?"#"+t.elementId:n,t.onClick&&t.onClick(e),""===b||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(h=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},a=t.timeout,window.setTimeout((function(){!1===g()&&(null===u&&(u=new MutationObserver(g)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout((function(){f()}),a||1e4))}),0))},ref:a}),t.children)}))}var p=O(d.b),v=(O(d.c),a(5)),N=a(25),T=a(253),E=a.n(T),y=a(98),w=a(254),_=a(1);function C(e){var t=e.dropdownUrls,a=e.navUrls,n=Object(o.f)(),i=l.a.useContext(r.a),j=i.account,b=i.isReady,u=i.balance,m=i.statusSell,h=i.sellToken,f=i.disconnect,x=i.connect;return Object(w.a)((function(){"#/"===window.location.hash?document.getElementById("presale").scrollIntoView():document.querySelectorAll("nav .nav-title a").forEach((function(e){"/".concat(e.getAttribute("href"))==="".concat(window.location.pathname).concat(window.location.hash)&&e.click()}))}),500),Object(_.jsx)("nav",{className:"navbar-dark bg-dark navbar-expand-sm",children:Object(_.jsx)("div",{"data-v-7462027c":!0,"data-v-11bc6412":!0,className:"nav-page",children:Object(_.jsxs)("div",{"data-v-7462027c":!0,className:"nav-fixed content_box m-0",children:[Object(_.jsx)("a",{"data-v-7462027c":!0,className:"nav-logo",href:"/",children:Object(_.jsx)("img",{"data-v-7462027c":!0,src:"img/logo.svg"})}),Object(_.jsx)("div",{"data-v-7462027c":!0,className:"nav-title",children:a.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,a=e.href;return Object(_.jsx)("div",{"data-v-7462027c":!0,className:"nav-title-a",style:{padding:y.isMobile?"8px":"10px"},children:Object(_.jsx)(p,{"data-v-7462027c":!0,smooth:!0,to:a,style:{maxWidth:"calc((100vw - 10px)/(".concat(window.document.querySelectorAll(".nav-title-a").length-(y.isMobile?0:1),"))"),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t})},a)}))}),Object(_.jsx)("div",{"data-v-7462027c":!0,className:"nav-lan",children:Object(_.jsx)("div",{"data-v-7462027c":!0,className:"header-login",children:j&&j.address?Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(_.jsx)("span",{className:"navbar-toggler-icon"})}),Object(_.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-list-4",children:Object(_.jsx)("ul",{className:"navbar-nav",children:Object(_.jsxs)("li",{className:"nav-item dropdown",children:[Object(_.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(_.jsx)("img",{src:new E.a(50,j.address).getImage(),width:50,height:50,className:"rounded-circle"})}),Object(_.jsxs)("div",{className:"dropdown-menu dropdown-menu-right text-center content_box","aria-labelledby":"navbarDropdownMenuLink",children:[Object(_.jsxs)("a",{className:"dropdown-item",disabled:"disabled",children:[Object(N.c)(j.address)," (",Object(N.a)(u,!1)," ",v.g.symbol,")"]}),t.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,a=e.href;return Object(_.jsx)(d.b,{to:a,className:"dropdown-item",children:t},a)})),m&&Object(_.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault();var t=Object(N.m)(function(){var e=Object(s.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(a*Math.pow(10,v.g.decimal)).then((function(){t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Withdraw"}),Object(_.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),f()},children:"Disconnect"})]})]})})})]}):b&&Object(_.jsx)("a",{href:"#",className:y.isMobile?"invisible":"visible",onClick:function(e){e.preventDefault(),x().then((function(){n.push("/dashboard")}))},children:Object(_.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 1em 0.5em 1em"},children:Object(_.jsx)("p",{style:{fontSize:"1.3em"},children:y.isMobile?"":"Connect Wallet"})})})})})]})})})}},1088:function(e,t,a){"use strict";a(2),a(1091);var n=a(1);t.a=function(e){var t=e.message,a=e.width,c=void 0===a?500:a;return Object(n.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",width:c,minHeight:c},children:[Object(n.jsx)("img",{src:"img/empty.gif",style:{width:c},alt:""}),Object(n.jsx)("p",{style:{position:"absolute",bottom:c/15,fontSize:c/15},children:t})]})}},1089:function(e,t,a){"use strict";a(2),a(1092);var n=a(1);t.a=function(e){var t=e.message,a=void 0===t?"Loading...":t;e.width;return Object(n.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",minHeight:400},children:Object(n.jsx)("p",{style:{fontSize:22},children:a})})}},1090:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(0),c=a.n(n),s=a(4),i=a(2),l=a.n(i),r=a(5),o=a(1087),d=a(25),j=a(98),b=a(1086),u=a(251),m=a(253),h=a.n(m),f=a(1);function x(e){var t=e.children,a=e.isReady,n=e.navUrls,i=e.dropdownUrls,m=e.showToolBar,x=void 0===m||m,g=e.title,O=l.a.useContext(u.a),p=O.account,v=O.balance,N=O.balanceBNB,T=O.statusSale,E=O.convertNumberToPrice,y=O.buyToken,w=O.totalSale,_=O.getTotalSale,C=O.addCustomTokens,k=O.getBscUrl;return Object(f.jsx)("div",{"data-v-1398d974":!0,id:"app",className:"en application",children:Object(f.jsxs)("div",{"data-v-11bc6412":!0,"data-v-1398d974":!0,id:"homepage",className:"index-page",children:[a&&Object(f.jsx)(o.a,{navUrls:n,dropdownUrls:i}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{id:"fg3",className:"bg",src:"img/03.png"}),Object(f.jsx)("img",{id:"fg2",className:"bg",src:"img/02.png",style:{top:0}}),Object(f.jsx)("img",{id:"fg1",className:"bg",src:"img/01.png",style:{top:0}})]}),Object(f.jsx)("div",{style:{margin:"120px 0 40px 0"},children:g&&Object(f.jsx)("h2",{className:"gradient-heading",children:g})}),Object(f.jsx)("main",{style:{minHeight:"100vh",marginBottom:50},children:x?Object(f.jsx)(f.Fragment,{children:a&&p&&Object(f.jsx)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:Object(f.jsxs)("section",{className:"dashboard",children:[Object(f.jsxs)("header",{className:"booking-bar content_box m-0",children:[Object(f.jsxs)("div",{className:"booking-bar__info",children:[Object(f.jsx)("h2",{className:"booking-bar__heading",children:Object(f.jsxs)("p",{className:"styled-price",children:[r.g.name," (",r.g.symbol,")"]})}),Object(f.jsx)("p",{className:"booking-bar__sub-heading",children:Object(f.jsxs)("span",{className:"top-flight-card__heading",children:[Object(d.c)(r.g.address,j.isMobile?7:15),Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(r.g.address)},children:[" ",Object(f.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})})]}),Object(f.jsxs)("div",{className:"booking-bar__inputs",children:[Object(f.jsxs)("div",{className:"icon-input",children:[Object(f.jsxs)("p",{className:"top-flight-card__price styled-price",children:[E(v,!1),T&&"number"===typeof w&&Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault();var t=Object(d.j)(function(){var e=Object(s.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(a).then((function(){_(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w,C,k)},children:[" ",Object(f.jsx)("i",{className:"fas fa-plus-circle",style:{fontSize:"70%"}})]})]}),Object(f.jsx)("div",{className:"top-flight-card__info",children:Object(f.jsx)("p",{className:"top-flight-card__heading",children:Object(f.jsx)("img",{src:"img/logo-token-28x28.png",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]}),Object(f.jsxs)("div",{className:"icon-input",children:[Object(f.jsx)("p",{className:"top-flight-card__price styled-price",children:E(N,!0,4)}),Object(f.jsx)("div",{className:"top-flight-card__info",children:Object(f.jsx)("p",{className:"top-flight-card__heading",children:Object(f.jsx)("img",{src:"img/bnb.svg",style:{width:28,height:28,borderRadius:14,marginRight:5}})})})]})]})]}),t,Object(f.jsxs)("aside",{className:"user-card content_box m-0",children:[Object(f.jsx)("figure",{className:"user-card__avatar",children:Object(f.jsx)("img",{src:new h.a(40,p.address).getImage(),width:"40",height:"40",className:"rounded-circle"})}),Object(f.jsxs)("div",{className:"p user-card__heading",children:["Hello, ",Object(f.jsxs)("span",{className:"user-card__name",children:[Object(d.c)(p.address,4),Object(f.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(p.address)},children:[" ",Object(f.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})]})]})]})})}):t})]}),Object(f.jsx)(b.a,{})]})})}},1091:function(e,t,a){},1092:function(e,t,a){},1106:function(e,t,a){},1111:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var n,c=a(24),s=a(0),i=a.n(s),l=a(4),r=a(12),o=a(2),d=a.n(o),j=a(1084),b=a(251),u=(a(1106),a(1090)),m=a(253),h=a.n(m),f=a(25),x=a(125),g=a.n(x),O=a(5),p=a(145),v=a.n(p),N=a(1088),T=a(1089),E=a(256),y=a(8),w=a(1083),_=a(1),C=function(e){var t=e.typeNft,a=e.id,n=e.price,c=e.tokenId,s=e.payWithTokens,o=e.timestamp,j=e.seller,u=e.onBuyDone,m=void 0===u?function(){}:u,x=d.a.useContext(b.a),p=x.getCharacterById,N=x.getWeaponsById,T=x.getEggById,w=x.getChestById,C=x.buyNft,k=x.account,P=x.connect,A=x.speciesWeapons,F=x.speciesCharacter,Y=d.a.useState({}),R=Object(r.a)(Y,2),S=R[0],I=R[1];d.a.useEffect((function(){Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==O.l.TYPE_NFT.CHARACTER){e.next=11;break}return e.t0=I,e.next=4,p(c);case 4:if(e.t1=e.sent,e.t1){e.next=7;break}e.t1={};case 7:e.t2=e.t1,(0,e.t0)(e.t2),e.next=41;break;case 11:if(t!==O.l.TYPE_NFT.WEAPON){e.next=22;break}return e.t3=I,e.next=15,N(c);case 15:if(e.t4=e.sent,e.t4){e.next=18;break}e.t4={};case 18:e.t5=e.t4,(0,e.t3)(e.t5),e.next=41;break;case 22:if(t!==O.l.TYPE_NFT.EGG){e.next=33;break}return e.t6=I,e.next=26,T(c);case 26:if(e.t7=e.sent,e.t7){e.next=29;break}e.t7={};case 29:e.t8=e.t7,(0,e.t6)(e.t8),e.next=41;break;case 33:return e.t9=I,e.next=36,w(c);case 36:if(e.t10=e.sent,e.t10){e.next=39;break}e.t10={};case 39:e.t11=e.t10,(0,e.t9)(e.t11);case 41:case"end":return e.stop()}}),e)})))(),setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3),y.d.clear()}),[]);var H=function(e){return[O.l.TYPE_NFT.CHARACTER,O.l.TYPE_NFT.WEAPON].includes(e)},B=function(e){return e===O.l.TYPE_NFT.CHARACTER?"character":e===O.l.TYPE_NFT.WEAPON?"weapon":e===O.l.TYPE_NFT.EGG?"egg":"chest"},G=function(e,t){return(e===O.l.TYPE_NFT.CHARACTER?O.d.species[t]:e===O.l.TYPE_NFT.WEAPON?O.p.species[t]:{})||{}},W=function(){var e=Object(l.a)(i.a.mark((function e(l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.preventDefault(),!k){e.next=5;break}C({tokenId:c,payWithTokens:s,amount:n,typeNft:t,name:G(t,S.speciesId).name||t===O.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest",id:a}).then((function(){m(a)})),e.next=10;break;case 5:return e.next=7,P();case 7:return e.next=9,v()(2e3);case 9:window.$(".buyNft")[0].click();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"col-md-4 content_box",children:[S?Object(_.jsxs)("div",{className:"row mb-3 position-relative",children:[Object(_.jsxs)("div",{className:"row justify-content-end align-items-center position-absolute h-100",style:{left:25,fontSize:"18px",fontWeight:"bold",lineHeight:"20px",maxWidth:"50px"},children:["ID: ",a>9?a:"0"+a]}),Object(_.jsx)("div",{className:"row justify-content-center w-100 m-0",children:Object(_.jsx)("div",{className:"content_box_label_".concat([O.l.TYPE_NFT.WEAPON,O.l.TYPE_NFT.CHARACTER].includes(t)?O.d.rareType[G(t,S.speciesId).rarity||0].toLocaleLowerCase():"legendary"," font-weight-bold"),children:[O.l.TYPE_NFT.WEAPON,O.l.TYPE_NFT.CHARACTER].includes(t)?O.d.rareType[G(t,S.speciesId).rarity]||"...":"???"})}),Object(_.jsx)("div",{className:"row justify-content-end align-items-center position-absolute h-100",style:{right:15},children:Object(_.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(f.o)({shareUrl:"".concat(window.location.origin,"?marketplaceId=").concat(a,"#/marketplace"),imageUrl:g.a.isEmpty(S)?"img/loading_1.gif":"img/".concat(B(t),"s/").concat(B(t),"_").concat(H(t)?S.speciesId:t===O.l.TYPE_NFT.EGG?4:0,".").concat(t===O.l.TYPE_NFT.WEAPON?"png":"gif"),title:k?"".concat(k.address," sent an invitation to trade on the marketplace!! check now!!"):"".concat([O.l.TYPE_NFT.WEAPON,O.l.TYPE_NFT.CHARACTER].includes(t)?G(t,S.speciesId||0).name:t===O.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #").concat(c)})},children:Object(_.jsx)("i",{style:{fontWeight:"bold",fontSize:"16px"},className:"font_family icon-share-pat attr-icon"})})})]}):null,S?Object(_.jsx)("div",{className:"nft-image",children:Object(_.jsx)(E.LazyLoadImage,{className:"card-img-top",effect:"blur",src:g.a.isEmpty(S)?"img/loading_1.gif":"img/".concat(B(t),"s/").concat(B(t),"_").concat(H(t)?S.speciesId:t===O.l.TYPE_NFT.EGG?4:0,".").concat(t===O.l.TYPE_NFT.WEAPON?"png":"gif")})}):null,Object(_.jsxs)("div",{className:"card-body",children:[Object(_.jsxs)("div",{className:"price",children:["Level: ",Object(_.jsxs)("span",{className:"text-warning",children:[function(e){if(t===O.l.TYPE_NFT.CHARACTER){var a=F.find((function(t){return Number(t.id)===e}));if(a)return Math.floor((S.HP/a.HP+S.DEF/a.DEF+S.AVD/a.AVD)/3)}if(t===O.l.TYPE_NFT.WEAPON){var n=A.find((function(t){return Number(t.id)===e}));if(n)return Math.floor((S.ATK/n.ATK+S.CRT/n.CRT)/2)}}(S.speciesId)||"???"," "]})]}),Object(_.jsxs)("div",{className:"price",children:["Price: ",Object(_.jsxs)("span",{className:"text-success",children:[s?Object(f.a)(Object(f.b)(n),!1):n/Math.pow(10,18)," "]}),s?O.g.symbol:"BNB"]}),Object(_.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[Object(_.jsx)("div",{className:"owner-avatar",children:Object(_.jsx)("img",{src:new h.a(35,j).getImage(),className:"rounded-circle"})}),Object(_.jsxs)("div",{className:"detail",children:[S?Object(_.jsxs)("div",{className:"text-left text-warning",children:[[O.l.TYPE_NFT.WEAPON,O.l.TYPE_NFT.CHARACTER].includes(t)?G(t,S.speciesId||0).name:t===O.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #",c]}):null,Object(_.jsx)("div",{"data-bn-type":"text",className:"css-1jq4ozh",role:"button","data-toggle":"tooltip","data-placement":"bottom",title:j,onClick:function(){return Object(f.e)(j)},children:Object(f.c)(j,10)})]})]}),Object(_.jsxs)("div",{className:"card-text",style:{marginBottom:10},children:[Object(_.jsx)("div",{"data-v-11bc6412":!0,className:"attr-content",children:[O.l.TYPE_NFT.CHARACTER,O.l.TYPE_NFT.EGG].includes(t)?Object(_.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(_.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(_.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-life attr-icon align-middle"}),Object(_.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["HP ",Object(_.jsx)("span",{className:"text-success font-weight-bold",children:t===O.l.TYPE_NFT.EGG?"???":(S.HP/1e3).toFixed(2)})]})]}),Object(_.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(_.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-defense attr-icon align-middle"}),Object(_.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["DEF ",Object(_.jsx)("span",{className:"text-warning font-weight-bold",children:t===O.l.TYPE_NFT.EGG?"???":(S.DEF/1e3).toFixed(2)})]})]}),Object(_.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(_.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-hedge attr-icon align-middle"}),Object(_.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["AVD ",Object(_.jsx)("span",{className:"text-info font-weight-bold",children:t===O.l.TYPE_NFT.EGG?"???":(S.AVD/1e3).toFixed(2)})]})]})]}):Object(_.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(_.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(_.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-attack attr-icon align-middle"}),Object(_.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["ATK ",Object(_.jsx)("span",{className:"text-success font-weight-bold",children:t===O.l.TYPE_NFT.CHEST?"???":(S.ATK/1e3).toFixed(2)})]})]}),Object(_.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(_.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-crit attr-icon align-middle"}),Object(_.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["CRT ",Object(_.jsx)("span",{className:"text-warning font-weight-bold",children:t===O.l.TYPE_NFT.CHEST?"???":(S.CRT/1e3).toFixed(2)})]})]}),Object(_.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(_.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-speed attr-icon align-middle"}),Object(_.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["WSP ",Object(_.jsx)("span",{className:"text-info font-weight-bold",children:t===O.l.TYPE_NFT.CHEST?"???":(S.WSP/1e3).toFixed(2)})]})]}),"0"!==(t===O.l.TYPE_NFT.CHEST?"???":S.MGZ)?Object(_.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(_.jsx)("img",{src:"img/bullets.svg",style:{width:20,height:21,marginRight:7},alt:""}),Object(_.jsx)("span",{"data-v-11bc6412":!0,className:"attr-text",children:"MGZ "})," ",Object(_.jsx)("span",{className:"text-light font-weight-bold",style:{verticalAlign:"text-top"},children:t===O.l.TYPE_NFT.CHEST?"???":S.MGZ/1e3})]}):null]})}),Object(_.jsxs)("div",{children:["Created At: ",o.toDate().toLocaleString()]})]}),Object(_.jsx)("a",{href:"#",onClick:W,className:"buyNft",disabled:k&&k.address===j,children:Object(_.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 2em 0.5em 2em"},children:Object(_.jsx)("p",{style:{fontSize:"1em"},children:"Buy Now"})})})]})]},"".concat(t,"_").concat(a))},k=!1;function P(){var e=Object(j.a)("css/dashboard.css"),t=d.a.useContext(b.a),a=t.isAdmin,s=t.offers,o=t.balanceMarket,m=t.getBalanceMarket,h=t.account,x=t.withdrawFunds,g=t.balance,p=t.statusSale,v=t.buyToken,E=t.totalSale,P=t.getTotalSale,A=t.getOffersPaging,F=t.getOffer,Y=t.getCharacterById,R=t.getWeaponsById,S=t.getEggById,I=t.getChestById,H=t.buyNft,B=t.connect,G=t.addCustomTokens,W=t.balanceBNB,D=t.getBscUrl,M=t.speciesWeapons,L=t.speciesCharacter;Object(w.a)();var U=d.a.useState(O.l.TYPE_NFT.CHARACTER),z=Object(r.a)(U,2),K=z[0],V=z[1],q=d.a.useState(),$=Object(r.a)(q,2),Z=$[0],J=$[1],X=d.a.useState(0),Q=Object(r.a)(X,2),ee=Q[0],te=Q[1],ae=d.a.useState(0),ne=Object(r.a)(ae,2),ce=ne[0],se=ne[1],ie=d.a.useState(),le=Object(r.a)(ie,2),re=le[0],oe=le[1],de=d.a.useState(0),je=Object(r.a)(de,2),be=je[0],ue=je[1],me=d.a.useState(0),he=Object(r.a)(me,2),fe=he[0],xe=he[1],ge=d.a.useState(),Oe=Object(r.a)(ge,2),pe=Oe[0],ve=Oe[1],Ne=d.a.useState(0),Te=Object(r.a)(Ne,2),Ee=Te[0],ye=Te[1],we=d.a.useState(0),_e=Object(r.a)(we,2),Ce=_e[0],ke=_e[1],Pe=d.a.useState(),Ae=Object(r.a)(Pe,2),Fe=Ae[0],Ye=Ae[1],Re=d.a.useState(0),Se=Object(r.a)(Re,2),Ie=Se[0],He=Se[1],Be=d.a.useState(0),Ge=Object(r.a)(Be,2),We=Ge[0],De=Ge[1],Me=d.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"NFTs",href:"/#nfts",active:!h},{title:"Tokenomics",href:"/#tokenomics",active:!h},{title:"Dashboard",href:"/dashboard",active:!!h},{title:"Armory",href:"/armory",active:!!h},{title:"Invitation list & Rewards",href:"/invitation-list-rewards",active:!!h}]}),[h]),Le=d.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Dashboard",href:"/dashboard"},{title:"Armory",href:"/armory"},{title:"Administration",href:"/admin",active:a},{title:"Transactions",href:"/transactions"},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]);d.a.useEffect((function(){window.$('[data-toggle="tooltip"]').tooltip(),setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3),ze(O.l.TYPE_NFT.CHARACTER),ze(O.l.TYPE_NFT.WEAPON),ze(O.l.TYPE_NFT.EGG),ze(O.l.TYPE_NFT.CHEST)}),[]),d.a.useEffect((function(){h&&(m(),n&&n.setContext({getCharacterById:Y,getWeaponsById:R,getEggById:S,getChestById:I,buyNft:H,account:h,connect:B}))}),[h]),d.a.useEffect((function(){Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M.length||!L.length||k){e.next=7;break}if(!(t=Object(f.g)("marketplaceId"))){e.next=7;break}return e.next=5,F(t);case 5:(a=e.sent)&&(n=Object(f.l)(a,{getCharacterById:Y,getWeaponsById:R,getEggById:S,getChestById:I,buyNft:H,account:h,connect:B,speciesWeapons:M,speciesCharacter:L},Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.close(),setTimeout((function(){window.location.href="/#armory"}),3e3);case 2:case"end":return e.stop()}}),e)})))),k=!0);case 7:case"end":return e.stop()}}),e)})))()}),[M,L]);var Ue=function(e){return e===O.l.TYPE_NFT.CHARACTER?"Warriors":e===O.l.TYPE_NFT.WEAPON?"Weapons":e===O.l.TYPE_NFT.EGG?"Magic Eggs":"Weapon Chest"},ze=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,c,s,l,r,o,d,j,b,u,m,h,f,x,g,p,v,N=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=N.length>1&&void 0!==N[1]&&N[1],n=20,y.d.show({icon:"loading",content:"Loading...",maskClickable:!1,duration:0}),t!==O.l.TYPE_NFT.CHARACTER){e.next=16;break}return e.next=6,A(t,ce,n);case 6:c=e.sent,s=c.results,l=c.nextOffset,r=c.total,s=((a?[]:Z)||[]).concat(s),J(s),te(r),se(l),e.next=52;break;case 16:if(t!==O.l.TYPE_NFT.WEAPON){e.next=29;break}return e.next=19,A(t,fe,n);case 19:o=e.sent,d=o.results,j=o.nextOffset,b=o.total,d=((a?[]:re)||[]).concat(d),oe(d),ue(b),xe(j),e.next=52;break;case 29:if(t!==O.l.TYPE_NFT.EGG){e.next=42;break}return e.next=32,A(t,Ce,n);case 32:u=e.sent,m=u.results,h=u.nextOffset,f=u.total,m=((a?[]:pe)||[]).concat(m),ve(m),ye(f),ke(h),e.next=52;break;case 42:return e.next=44,A(t,We,n);case 44:x=e.sent,g=x.results,p=x.nextOffset,v=x.total,g=((a?[]:Fe)||[]).concat(g),Ye(g),He(v),De(p);case 52:y.d.clear();case 53:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ke=function(e){if(s){var t=s.filter((function(t){return t.typeNft===e}));if(t.length)return t[0].offers||[]}return[]};return Object(_.jsx)(u.a,{isReady:e,navUrls:Me,dropdownUrls:Le,showToolBar:!1,title:"Marketplace",children:Object(_.jsx)("div",{className:"",children:Object(_.jsx)("div",{className:"marketplace",children:Object(_.jsxs)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:[Object(_.jsxs)("section",{className:"content_box d-flex marketplace-toolbar",children:[Object(_.jsxs)("div",{className:"left-toolbar",children:[Object(_.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return V(O.l.TYPE_NFT.CHARACTER)},children:[Object(_.jsx)("div",{className:"nft-image-item ".concat(K===O.l.TYPE_NFT.CHARACTER?"active":""),children:Object(_.jsx)("img",{src:"img/character.png"})}),Object(_.jsx)("span",{className:"label",children:ee})]}),Object(_.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return V(O.l.TYPE_NFT.WEAPON)},children:[Object(_.jsx)("div",{className:"nft-image-item ".concat(K===O.l.TYPE_NFT.WEAPON?"active":""),children:Object(_.jsx)("img",{src:"img/weapon.png"})}),Object(_.jsx)("span",{className:"label",children:be})]}),Object(_.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return V(O.l.TYPE_NFT.EGG)},children:[Object(_.jsx)("div",{className:"nft-image-item ".concat(K===O.l.TYPE_NFT.EGG?"active":""),children:Object(_.jsx)("img",{src:"img/egg.png"})}),Object(_.jsx)("span",{className:"label",children:Ee})]}),Object(_.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return V(O.l.TYPE_NFT.CHEST)},children:[Object(_.jsx)("div",{className:"nft-image-item ".concat(K===O.l.TYPE_NFT.CHEST?"active":""),children:Object(_.jsx)("img",{src:"img/chest.png"})}),Object(_.jsx)("span",{className:"label",children:Ie})]})]}),h?Object(_.jsxs)("div",{className:"right-toolbar",children:[Object(_.jsx)("div",{className:"nft-item",children:Object(_.jsxs)("span",{className:"label",children:[Object(f.a)(W,!0,4)," BNB"]})}),p&&"number"===typeof E?Object(_.jsxs)("a",{href:"#",className:"nft-item",onClick:function(e){e.preventDefault();var t=Object(f.j)(function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(a).then((function(){P(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E,G,D)},children:[Object(_.jsxs)("span",{className:"label",children:[Object(f.a)(g,!1)," ",O.g.symbol]}),Object(_.jsx)("span",{className:"label",children:Object(_.jsx)("i",{className:"fas fa-plus-circle align-middle",style:{marginBottom:3}})})]}):null,Object(_.jsxs)("a",{href:"#",className:"nft-item",disabled:0===o,onClick:function(e){e.preventDefault(),x()},children:[Object(_.jsx)("img",{src:"img/withdrawal.png",style:{width:40,height:40}}),Object(_.jsxs)("span",{className:"label",children:[o," BNB"]})]})]}):null]}),Object(_.jsxs)("div",{className:"content content_box",children:[Object(_.jsxs)("div",{className:"nft-item ".concat(K!==O.l.TYPE_NFT.CHARACTER?"d-none":""),children:[Object(_.jsxs)("div",{id:Ue(O.l.TYPE_NFT.CHARACTER),children:[Object(_.jsx)("p",{className:"title w-100 text-center",children:Ue(O.l.TYPE_NFT.CHARACTER)}),Object(_.jsx)("div",{className:"row",children:Z&&Z.length?Z.map((function(e){return Object(_.jsx)(C,Object(c.a)(Object(c.a)({},e),{},{onBuyDone:function(e){J(Z.filter((function(t){return t.id!==e})))}}),"".concat(e.id))})):null})]},"".concat(O.l.TYPE_NFT.CHARACTER)),Z&&Z.length?null:Object(_.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(_.jsx)("div",{children:Z&&!Ke(K).length?Object(_.jsx)(N.a,{message:"Empty!",width:500}):Object(_.jsx)(T.a,{width:500})})}),ee>(Z||[]).length?Object(_.jsx)("div",{className:"load-more",children:Object(_.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),ze(O.l.TYPE_NFT.CHARACTER)},children:"Load more"})}):null]}),Object(_.jsxs)("div",{className:"nft-item ".concat(K!==O.l.TYPE_NFT.WEAPON?"d-none":""),children:[Object(_.jsxs)("div",{id:Ue(O.l.TYPE_NFT.WEAPON),children:[Object(_.jsx)("p",{className:"title w-100 text-center",children:Ue(O.l.TYPE_NFT.WEAPON)}),Object(_.jsx)("div",{className:"row",children:re&&re.length?re.map((function(e){return Object(_.jsx)(C,Object(c.a)(Object(c.a)({},e),{},{onBuyDone:function(e){oe(re.filter((function(t){return t.id!==e})))}}),"".concat(e.id))})):null})]},"".concat(O.l.TYPE_NFT.WEAPON)),re&&re.length?null:Object(_.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(_.jsx)("div",{children:re&&!Ke(K).length?Object(_.jsx)(N.a,{message:"Empty!",width:500}):Object(_.jsx)(T.a,{width:500})})}),be>(re||[]).length?Object(_.jsx)("div",{className:"load-more",children:Object(_.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),ze(O.l.TYPE_NFT.WEAPON)},children:"Load more"})}):null]}),Object(_.jsxs)("div",{className:"nft-item ".concat(K!==O.l.TYPE_NFT.EGG?"d-none":""),children:[Object(_.jsxs)("div",{id:Ue(O.l.TYPE_NFT.EGG),children:[Object(_.jsx)("p",{className:"title w-100 text-center",children:Ue(O.l.TYPE_NFT.EGG)}),Object(_.jsx)("div",{className:"row",children:pe&&pe.length?pe.map((function(e){return Object(_.jsx)(C,Object(c.a)(Object(c.a)({},e),{},{onBuyDone:function(e){ve(pe.filter((function(t){return t.id!==e})))}}),"".concat(e.id))})):null})]},"".concat(O.l.TYPE_NFT.EGG)),pe&&pe.length?null:Object(_.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(_.jsx)("div",{children:pe&&!Ke(K).length?Object(_.jsx)(N.a,{message:"Empty!",width:500}):Object(_.jsx)(T.a,{width:500})})}),Ee>(pe||[]).length?Object(_.jsx)("div",{className:"load-more",children:Object(_.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),ze(O.l.TYPE_NFT.EGG)},children:"Load more"})}):null]}),Object(_.jsxs)("div",{className:"nft-item ".concat(K!==O.l.TYPE_NFT.CHEST?"d-none":""),children:[Object(_.jsxs)("div",{id:Ue(O.l.TYPE_NFT.CHEST),children:[Object(_.jsx)("p",{className:"title w-100 text-center",children:Ue(O.l.TYPE_NFT.CHEST)}),Object(_.jsx)("div",{className:"row",children:Fe&&Fe.length?Fe.map((function(e){return Object(_.jsx)(C,Object(c.a)(Object(c.a)({},e),{},{onBuyDone:function(e){Ye(Fe.filter((function(t){return t.id!==e})))}}),"".concat(e.id))})):null})]},"".concat(O.l.TYPE_NFT.CHEST)),Fe&&Fe.length?null:Object(_.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(_.jsx)("div",{children:Fe&&!Ke(K).length?Object(_.jsx)(N.a,{message:"Empty!",width:500}):Object(_.jsx)(T.a,{width:500})})}),Ie>(Fe||[]).length?Object(_.jsx)("div",{className:"load-more",children:Object(_.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),ze(O.l.TYPE_NFT.CHEST)},children:"Load more"})}):null]})]})]})})})})}}}]);