(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(55)},43:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),o=n.n(l),c=n(21),s=n.n(c),i=n(27),u=n(7),f=n(57),d=n(31),m=n(9),b=n(60),h=n(11),v=n(58),p=n(61),E=n(59),w=(n(43),n(56));n(44);var y=window.Dos,j=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)(function(){if(null!==t){var n=y(t.current,{wdosboxUrl:"/wdosbox/wdosbox.js"}).then(function(t){return t.fs.extract(e.url).then(function(){return t.main(["-c","DIGGER.COM"])})});return function(){n.then(function(e){return e.exit()})}}},[t,e.url]),r.a.createElement(w.a,{onResize:function(e){e.length>0&&console.log(e[e.length-1].contentRect)}},r.a.createElement("canvas",{className:"js-dos-canvas",ref:t}))},x=n(22),g=n.n(x);n(52);function O(e){return new Promise(function(t,n){var a=[];zip.createReader(new zip.BlobReader(e),function(e){e.getEntries(function(n){var r=!0,l=!1,o=void 0;try{for(var c,s=n[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var i=c.value.filename;if(i.toLocaleLowerCase().endsWith(".com")||i.toLocaleLowerCase().endsWith(".exe")||i.toLocaleLowerCase().endsWith(".bat")){a.push(i);break}}}catch(u){l=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(l)throw o}}e.close(),t(a)})},function(e){n("Can't read ZIP file: "+e)})})}var k=n(20),N=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(null),c=Object(u.a)(o,2),w=c[0],y=c[1],x=Object(a.useState)(0),N=Object(u.a)(x,2),R=N[0],L=N[1],B=Object(a.useState)(null),D=Object(u.a)(B,2),C=D[0],S=D[1],A=Object(a.useState)([]),I=Object(u.a)(A,2),U=I[0],W=I[1],P=Object(a.useState)(null),z=Object(u.a)(P,2),T=z[0],G=z[1],Y=Object(a.useState)(null),J=Object(u.a)(Y,2),M=J[0],Z=J[1],F=Object(a.useState)(!1),V=Object(u.a)(F,2),$=V[0],_=V[1];Object(a.useEffect)(function(){var e=T;if(null!==e)if(0!==e.length&&"N/A"!==e){var t=e.split("/"),n=[];t.forEach(function(e,a){n.push('"-c"'),a<t.length-1?n.push('"cd '+e+'"'):n.push('"'+e+'"')}),Z(n.join(", "))}else Z("")},[T]);var q=function(e){null!==C&&URL.revokeObjectURL(C),S(e)};var H=r.a.createElement("li",null,"Upload \xa0",r.a.createElement("span",{style:{color:"#D9822B",fontWeight:"bold",borderBottom:"2px solid #DB3737"}},"ZIP"),"\xa0 archive of program",r.a.createElement(g.a,{className:"instructions-control",flexDirection:"row"},r.a.createElement(f.a,{disabled:null!==w,text:"Choose file...",onInputChange:function(e){var t=e.currentTarget.files;if(0!==t.length){l("");var n=t[0],a=new FileReader;a.addEventListener("load",function(){var e=Object(i.a)(s.a.mark(function e(t){var n,r,o,c,i,u,f,d,m,b;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Blob([new Uint8Array(a.result)]),e.prev=1,e.next=4,O(n);case 4:if(r=e.sent,o=URL.createObjectURL(n),q(o),1!==r.length){e.next=11;break}G(r[0]),e.next=36;break;case 11:if(0!==r.length){e.next=15;break}G("N/A"),e.next=36;break;case 15:for(c=[],i=!0,u=!1,f=void 0,e.prev=19,d=r[Symbol.iterator]();!(i=(m=d.next()).done);i=!0)b=m.value,c.push({id:b,label:b,icon:k.a.PLAY});e.next=27;break;case 23:e.prev=23,e.t0=e.catch(19),u=!0,f=e.t0;case 27:e.prev=27,e.prev=28,i||null==d.return||d.return();case 30:if(e.prev=30,!u){e.next=33;break}throw f;case 33:return e.finish(30);case 34:return e.finish(27);case 35:W(c);case 36:e.next=43;break;case 38:e.prev=38,e.t1=e.catch(1),l(e.t1),y(null),L(0);case 43:case"end":return e.stop()}},e,null,[[1,38],[19,23,27,35],[28,,30,34]])}));return function(t){return e.apply(this,arguments)}}()),a.addEventListener("progress",function(e){return L(e.loaded/e.total)}),a.readAsArrayBuffer(n),y(a)}else y(null)}}),"\xa0\xa0",r.a.createElement(d.a,{size:16,intent:m.a.PRIMARY,value:R})),r.a.createElement("span",{style:{color:"#DB3737",display:0===n.length?"none":"block"}},"*\xa0",n)),K=r.a.createElement("li",{style:0===U.length&&null===T?{display:"none"}:{}},"Select executable:",r.a.createElement("div",{style:null===T?{}:{display:"none"},className:"instructions-control"},r.a.createElement(b.a,{className:h.a.ELEVATION_1,contents:U,onNodeClick:function(e){return G(e.id+"")}})),r.a.createElement("div",{style:null===T?{display:"none"}:{},className:"instructions-control"},r.a.createElement("span",{style:{color:"#D9822B",fontWeight:"bold"}},T))),Q=r.a.createElement("li",{style:null===M?{display:"none"}:{}},"Check command line and \xa0",r.a.createElement("span",{style:{color:"#D9822B",fontWeight:"bold",borderBottom:"2px solid #DB3737"}},"RUN"),"\xa0",r.a.createElement(v.a,{className:"instructions-control"},r.a.createElement("input",{className:h.a.INPUT,value:M+"",onChange:function(e){return Z(e.currentTarget.value)}}),r.a.createElement(p.a,{intent:m.a.DANGER,text:"Run",onClick:function(){return _(!0)}}))),X=r.a.createElement("li",{style:$?{}:{display:"none"}},"Now PLAY!",r.a.createElement(j,{url:C+""}));return r.a.createElement(g.a,{flexDirection:"column",className:"dashboard"},r.a.createElement(E.a,null,"Dosify me!"),r.a.createElement(E.b,null,"Instructions"),r.a.createElement("ol",{className:"instructions-ol"},H,K,Q,X))};n(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(54);o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.27cbb34f.chunk.js.map