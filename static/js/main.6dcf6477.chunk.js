(this.webpackJsonpsolapp=this.webpackJsonpsolapp||[]).push([[0],{106:function(e,t,n){},107:function(e,t){},110:function(e,t){},135:function(e,t){},136:function(e,t){},161:function(e,t,n){"use strict";n.r(t);var c=n(16),a=n.n(c),r=n(96),s=n.n(r),i=(n(106),n(0)),o=n(2),l=n(9),u=n(8),d=n(24),j=n(100),b=n(10),h=n(5);function p(e){var t=e.activities;t||(t=[0]);for(var n,c,a,r,s=new Date(2022,0).getDay(),i=[],o=0;o<7;o++)for(var l=0;l<53;l++){var u,d,j=7*l+o%7;if(j<s)u="#ffffff",d=Object(h.jsx)("div",{className:"block",style:{background:u}},j);else if(t[j-s]>0){u="hsl(42, 100%, "+(0|(n=t[j-s],c=0,a=Math.max.apply(Math,Object(b.a)(t)),(n-c)*(50-(r=90))/(a-c)+r)).toString()+"%)";var p=new Date(new Date(2022,0).setDate(j-s+1)).toISOString().substring(0,10)+": "+(t[j-s]/1609.34).toFixed(1)+"mi";console.log(p),d=Object(h.jsx)("div",{className:"block",style:{background:u,borderBottom:"none"},"data-tooltip":p},j)}else u="#EDF0F3",d=Object(h.jsx)("div",{className:"block",style:{background:u}},j);i.push(d)}return Object(h.jsx)("figure",{children:Object(h.jsxs)("div",{className:"contributions",children:[Object(h.jsx)("div",{className:"spacer"}),Object(h.jsx)("div",{className:"month five-weeks",children:"jan"}),Object(h.jsx)("div",{className:"month",children:"feb"}),Object(h.jsx)("div",{className:"month",children:"mar"}),Object(h.jsx)("div",{className:"month five-weeks",children:"apr"}),Object(h.jsx)("div",{className:"month",children:"may"}),Object(h.jsx)("div",{className:"month",children:"jun"}),Object(h.jsx)("div",{className:"month five-weeks",children:"jul"}),Object(h.jsx)("div",{className:"month",children:"aug"}),Object(h.jsx)("div",{className:"month",children:"sep"}),Object(h.jsx)("div",{className:"month five-weeks",children:"oct"}),Object(h.jsx)("div",{className:"month",children:"nov"}),Object(h.jsx)("div",{className:"month five-weeks",children:"dec"}),Object(h.jsx)("div",{className:"day",children:"mon"}),Object(h.jsx)("div",{className:"day",children:"wed"}),Object(h.jsx)("div",{className:"day",children:"fri"}),i]})})}var O=n(45),m=d.d.SystemProgram,f=d.d.Keypair,v=d.d.Transaction,x=new u.PublicKey(O.metadata.address),y="processed",w=new u.PublicKey("DYuixff6fkkkhrP8twEwWBkZuALyUeZAd4Cg8Vx5puGV"),g=u.LAMPORTS_PER_SOL/10-6305760,k=new Date,S=k.getFullYear()+"-"+(k.getMonth()+1).toString().padStart(2,"0")+"-"+k.getDate(),N=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),b=(s[0],s[1],Object(c.useState)([])),N=Object(l.a)(b,2),K=(N[0],N[1],Object(c.useState)(S)),A=Object(l.a)(K,2),P=A[0],C=A[1],D=Object(c.useState)(1),M=Object(l.a)(D,2),F=M[0],E=M[1],L=Object(c.useState)("mi"),T=Object(l.a)(L,2),V=T[0],Y=T[1],B=Object(c.useState)(!1),I=Object(l.a)(B,2),J=I[0],G=I[1],W=Object(c.useState)(0),Z=Object(l.a)(W,2),H=(Z[0],Z[1],Object(c.useState)()),R=Object(l.a)(H,2),U=R[0],_=R[1],q=Object(c.useState)(),z=Object(l.a)(q,2),Q=z[0],X=z[1],$=function(){var e=new u.Connection("https://api.devnet.solana.com",y);return new d.b(e,window.solana,y)},ee=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom wallet found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),a(c.publicKey.toString());case 10:e.next=13;break;case 12:console.log("Solana object not found! Get a Phantom Wallet \ud83d\udc7b");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),a(c.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.solana.disconnect(),a(null),_(null),X(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n,c,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),e.prev=1,e.next=4,$();case 4:return n=e.sent,c=new d.a(O,x,n),e.next=8,c.account.activity.all([{memcmp:{offset:8,bytes:t.toBase58()}}]);case 8:a=e.sent,console.log(a.length,a),a.length>0&&(_(a[0].publicKey),X(a[0].account.distance)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("error getting activity",e.t0);case 16:G(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),t=(new Date(P).getTime()-Date.UTC(k.getFullYear(),0,1))/864e5|0,n="mi"==V?1609.34*F|0:1e3*F|0,console.log("adding",t,n),c=$(),a=new d.a(O,x,c),e.next=8,a.rpc.addActivity(t,n,{accounts:{activity:U,author:c.wallet.publicKey}});case 8:G(!1),ce(c.wallet.publicKey);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),t=$(),n=new d.a(O,x,t),c=f.generate(),(a=new v).add(m.transfer({fromPubkey:t.wallet.publicKey,toPubkey:w,lamports:g}),n.instruction.makeActivity(2020,{accounts:{activity:c.publicKey,author:t.wallet.publicKey,systemProgram:m.programId}})),e.next=8,n.provider.send(a,[c]);case 8:console.log("success",c.publicKey),G(!1),ce(t.wallet.publicKey);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),t=$(),n=new d.a(O,x,t),e.next=5,n.rpc.deleteActivity({accounts:{activity:U,author:t.wallet.publicKey}});case 5:_(null),X(null),G(!1),ce(t.wallet.publicKey);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]),Object(c.useEffect)((function(){if(n){console.log("Getting data...");var e=new u.PublicKey(n);ce(e)}}),[n]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("nav",{className:"container",children:[Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)("h1",{children:"\ud83d\udc4b"})})}),n?Object(h.jsx)("ul",{children:Object(h.jsxs)("li",{children:[Object(h.jsx)("a",{href:"#","data-tooltip":"Click to copy",children:Object(h.jsx)("code",{onClick:function(){return navigator.clipboard.writeText(n)},children:n.substring(0,6)+"\u2026"+n.substring(38)})}),"\xa0",Object(h.jsx)("a",{href:"#",onClick:ne,children:Object(h.jsx)("code",{children:"Disconnect"})})]})}):Object(h.jsx)("br",{})]}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:n?"authed-container":"container",children:[Object(h.jsx)("div",{className:"header-container",children:n?Object(h.jsx)("div",{children:U?Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{activities:Q}),Object(h.jsxs)("article",{id:"activityForm",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:"Add Activity"})}),Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("input",{type:"date",id:"date",name:"date",defaultValue:S,onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("input",{type:"number",id:"distance",name:"distance",defaultValue:"1.0",onChange:function(e){return E(e.target.value)}}),Object(h.jsxs)("select",{id:"metric",value:V,onChange:function(e){return Y(e.target.value)},children:[Object(h.jsx)("option",{defaultValue:"mi",children:"mi"}),Object(h.jsx)("option",{defaultValue:"km",children:"km"})]}),Object(h.jsx)("button",{onClick:ae,"aria-busy":J,disabled:J,children:"Add"})]})]}),Object(h.jsx)("button",{onClick:se,"aria-busy":J,children:"Delete Account"})]}):Object(h.jsxs)("article",{id:"accountData",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:"Account"})}),Object(h.jsxs)("p",{children:["Address: ",Object(h.jsx)("code",{children:n})]}),Object(h.jsx)("button",{onClick:re,"aria-busy":J,disabled:J,children:"Buy 2022 Pack (0.1 SOL)"})]})}):Object(h.jsxs)("article",{children:[Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:["Connect with ",Object(h.jsx)("img",{src:"phantom-icon-purple.svg",width:"30"})," Phantom"]})}),j.isMobile?Object(h.jsx)("a",{href:"https://phantom.app/ul/browse/https%3A%2F%2F137.184.49.77?ref=https%3A%2F%2F137.184.49.77",role:"button",children:" Connect "}):Object(h.jsx)("button",{onClick:te,children:" Connect "})]})}),Object(h.jsx)("div",{className:"footer-container"})]})})]})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},45:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"myepicproject","instructions":[{"name":"makeActivity","accounts":[{"name":"activity","isMut":true,"isSigner":true},{"name":"author","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"year","type":"u16"}]},{"name":"addActivity","accounts":[{"name":"activity","isMut":true,"isSigner":false},{"name":"author","isMut":false,"isSigner":true}],"args":[{"name":"day","type":"u16"},{"name":"dist","type":"u16"}]},{"name":"deleteActivity","accounts":[{"name":"activity","isMut":true,"isSigner":false},{"name":"author","isMut":false,"isSigner":true}],"args":[]}],"accounts":[{"name":"Activity","type":{"kind":"struct","fields":[{"name":"author","type":"publicKey"},{"name":"year","type":"u16"},{"name":"distance","type":{"vec":"u16"}}]}}],"metadata":{"address":"42aMs5bAc9HYAxm4mwZwNYu6n9YWHTexJPagSSNujLcc"}}')}},[[161,1,2]]]);
//# sourceMappingURL=main.6dcf6477.chunk.js.map