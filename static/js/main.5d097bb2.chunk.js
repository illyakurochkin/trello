(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{200:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n(2),c=n(36),o=n.n(c),u=(n(95),n(6)),s=n.n(u),i=n(12),b=n(32),d=(n(97),n(11)),p=n(45),j=n(21),f=n(80);j.a.initializeApp({apiKey:"AIzaSyAF0D2aSgIguxzVzzxbHfvFJBTsVoCIhFA",authDomain:"auth-f570a.firebaseapp.com",databaseURL:"https://auth-f570a.firebaseio.com",projectId:"auth-f570a",storageBucket:"auth-f570a.appspot.com",messagingSenderId:"310591516617",appId:"1:310591516617:web:8f9a557197cb61db"});var l={signInSuccessUrl:"/",signInOptions:[j.a.auth.GoogleAuthProvider.PROVIDER_ID],tosUrl:"/terms-of-service"},h=new f.a.AuthUI(j.a.auth()),O=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var e,n=null===(e=j.a.auth().currentUser)||void 0===e?void 0:e.email;n&&t(n),j.a.auth().onAuthStateChanged(Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(null===(n=j.a.auth().currentUser)||void 0===n?void 0:n.email);case 1:case"end":return e.stop()}}),e)}))))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(i.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",null===(e=j.a.auth().currentUser)||void 0===e?void 0:e.getIdToken(!0));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(i.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:(n=t.sent)&&e(n),j.a.auth().onAuthStateChanged(Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,v();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j.a.auth().signOut().finally((function(){return window.location.reload()})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=n(52),g=n(53);function k(){var t=Object(w.a)(["\n  width: 900px;\n  height: 600px;\n  margin: auto;\n  padding: 30px;\n  background-color: white;\n"]);return k=function(){return t},t}function y(){var t=Object(w.a)(["\n  background-color: #61dafb;\n  padding-top: calc((100vh - 600px) / 2 - 60px);\n  width: 100%;\n  height: 100vh;\n"]);return y=function(){return t},t}var C=g.a.div(y()),I=g.a.div(k()),A=function(t){var e=t.children;return Object(r.jsx)(C,{children:Object(r.jsx)(I,{children:e})})},D=function(){return Object(a.useEffect)((function(){var t;t="#fui",h.start(t,l)}),[]),Object(r.jsx)(A,{children:Object(r.jsx)("div",{id:"fui"})})},R=(n(61),n(20)),S=n(86),B=n.n(S).a.create({baseURL:"http://localhost:3001"});B.interceptors.request.use(function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e.headers.Authorization=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var E,L={fetchBoards:function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",B.get("/boards").then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),updateBoard:function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.post("/boards/".concat(e._id),e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=n(29),z=n(26),P="set user action",F=Object(z.a)(P),G=function(t){return t.user},J=Object(z.b)(null,Object(U.a)({},P,(function(t,e){return e.payload}))),T=n(38),V="set cards action",H="set cards loading action",N=Object(z.a)(V),_=(Object(z.a)(H),function(t){return t.board.data}),q=Object(z.b)({data:null,loading:!1},(E={},Object(U.a)(E,V,(function(t,e){var n=e.payload;return Object(T.a)(Object(T.a)({},t),{},{data:n})})),Object(U.a)(E,H,(function(t,e){var n=e.payload;return Object(T.a)(Object(T.a)({},t),{},{loading:n})})),E)),K=function(){var t=Object(R.b)(),e=Object(d.g)(),n=Object(R.c)(G),c=Object(a.useState)([]),o=Object(b.a)(c,2),u=o[0],p=o[1],j=Object(a.useState)(!0),f=Object(b.a)(j,2),l=f[0],h=f[1];if(Object(a.useEffect)((function(){Object(i.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.fetchBoards();case 2:e=t.sent,p(e),h(!1);case 5:case"end":return t.stop()}}),t)})))()}),[e]),l)return Object(r.jsx)(A,{children:Object(r.jsx)("div",{children:"LOADING..."})});return Object(r.jsxs)(A,{children:[Object(r.jsx)("h1",{children:"TRELLO"}),Object(r.jsx)("h3",{children:n}),u.map((function(n){return Object(r.jsx)("h3",{style:{color:"blue",textDecoration:"underline",cursor:"pointer"},onClick:function(){t(N(n)),e.push("/board")},children:n.name})})),Object(r.jsx)("button",{onClick:m,style:{color:"red"},children:"Log out"})]})},M=n(87),Q=n.n(M),W=function(){var t=Object(R.b)(),e=Object(d.g)(),n=(Object(R.c)(G),Object(R.c)(_));console.log("board 1",n);var a=function(){var e=Object(i.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.updateBoard(n);case 2:t(N(n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(r.jsxs)(A,{children:[Object(r.jsxs)("h1",{children:["BOARD: ",n.name]}),Object(r.jsx)(Q.a,{initialBoard:n,onCardDragEnd:a,onColumnDragEnd:a,allowRenameColumn:!0,onColumnRename:a,allowAddColumn:!0,allowRemoveCard:!0,onCardRemove:a,allowAddCard:{on:"top"}}),Object(r.jsx)("button",{onClick:function(){return e.push("/home")},style:{color:"blue"},children:"Home"}),Object(r.jsx)("button",{onClick:m,style:{color:"red"},children:"Log out"})]}):Object(r.jsx)(d.a,{to:"/home"})};var X=function(){var t=Object(R.b)(),e=Object(a.useState)(null),n=Object(b.a)(e,2),c=n[0],o=n[1],u=Object(a.useState)(!0),j=Object(b.a)(u,2),f=j[0],l=j[1];return Object(a.useEffect)((function(){Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:n=e.sent,o(n),l(!1),t(F(n));case 6:case"end":return e.stop()}}),e)})))()}),[]),f?Object(r.jsx)(A,{children:Object(r.jsx)("div",{children:"LOADING..."})}):Object(r.jsx)(p.a,{children:c?Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/home",component:K}),Object(r.jsx)(d.b,{path:"/board",component:W}),Object(r.jsx)(d.b,{path:"*",render:function(){return Object(r.jsx)(d.a,{to:"/home"})}})]}):Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/login",component:D}),Object(r.jsx)(d.b,{path:"*",render:function(){return Object(r.jsx)(d.a,{to:"/login"})}})]})})},Y=n(19),Z=n(202),$=Y.c({board:q,user:J,form:Z.a}),tt=Y.e($);o.a.render(Object(r.jsx)(R.a,{store:tt,children:Object(r.jsx)(X,{})}),document.getElementById("root"))},95:function(t,e,n){},97:function(t,e,n){}},[[200,1,2]]]);
//# sourceMappingURL=main.5d097bb2.chunk.js.map