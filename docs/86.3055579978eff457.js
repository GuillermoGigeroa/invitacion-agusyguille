"use strict";(self.webpackChunkwedding_invitation=self.webpackChunkwedding_invitation||[]).push([[86],{6086:(v,s,a)=>{a.r(s),a.d(s,{HowtoModule:()=>y});var f=a(6895),u=a(4736),l=a(3671),t=a(8256),p=a(1218),d=a(6566),h=a(4008);const m=[{path:l.i.DEFAULT,component:(()=>{class e{constructor(n){this.navigationService=n,this.touchStartX=0,this.touchStartY=0,this.touchEndX=0,this.touchEndY=0}back(){this.navigationService.navigateTo(l.i.COUNTDOWN)}next(){}onTouchStart(n){this.touchStartX=n.changedTouches[0].screenX,this.touchStartY=n.changedTouches[0].screenY}onTouchMove(n){this.touchEndX=n.changedTouches[0].screenX,this.touchEndY=n.changedTouches[0].screenY}onTouchEnd(n){const o=this.touchEndX-this.touchStartX,r=this.touchEndY+15-this.touchStartY;Math.abs(o)>Math.abs(r)?o>0?this.onSwipeRight():this.onSwipeLeft():r>0?this.onSwipeDown():this.onSwipeUp()}onSwipeRight(){}onSwipeLeft(){}onSwipeUp(){}onSwipeDown(){this.back()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p.f))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-howto"]],hostBindings:function(o,r){1&o&&t.NdJ("touchstart",function(i){return r.onTouchStart(i)})("touchmove",function(i){return r.onTouchMove(i)})("touchend",function(i){return r.onTouchEnd(i)})},decls:37,vars:2,consts:[[1,"container"],[1,"content"],["src","assets/img/church.svg","alt",""],[1,"title"],["src","assets/img/party.svg","alt",""],[3,"paddingTop","event"],[3,"paddingBottom","event"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"p",3),t._uU(4,"C E R E M O N I A"),t.qZA(),t.TgZ(5,"p"),t._uU(6," 21 de Febrero a las 18:00 hs. "),t.qZA(),t.TgZ(7,"p"),t._uU(8," en la "),t.TgZ(9,"b"),t._uU(10,"Parroquia San Manuel M\xe1rtir"),t.qZA(),t._uU(11,", "),t.qZA(),t.TgZ(12,"p"),t._uU(13," Saravi 2494, La Lonja, Pilar. "),t.qZA(),t.TgZ(14,"button")(15,"span",3),t._uU(16," C\xd3MO LLEGAR "),t.qZA()()(),t.TgZ(17,"div",1),t._UZ(18,"img",4),t.TgZ(19,"p",3),t._uU(20,"F I E S T A"),t.qZA(),t.TgZ(21,"p"),t._uU(22," Despu\xe9s de la ceremonia, "),t.qZA(),t.TgZ(23,"p"),t._uU(24," los esperamos para festejar "),t.qZA(),t.TgZ(25,"p"),t._uU(26," en "),t.TgZ(27,"b"),t._uU(28,"Quinta La Loba Eventos"),t.qZA(),t._uU(29,", "),t.qZA(),t.TgZ(30,"p"),t._uU(31," El Benteveo 3357, La Lonja, Pilar. "),t.qZA(),t.TgZ(32,"button")(33,"span",3),t._uU(34," C\xd3MO LLEGAR "),t.qZA()()()(),t.TgZ(35,"app-back-button",5),t.NdJ("event",function(){return r.back()}),t.qZA(),t.TgZ(36,"app-next-button",6),t.NdJ("event",function(){return r.next()}),t.qZA()),2&o&&(t.xp6(35),t.Q6J("paddingTop","10px"),t.xp6(1),t.Q6J("paddingBottom","10px"))},dependencies:[d.h,h.W],styles:['@charset "UTF-8";@font-face{font-family:Kaisei Decol;src:url(KaiseiDecol-Bold.d4707958ab3d75fe.ttf) format("truetype"),url(KaiseiDecol-Medium.f6f6e59654783c61.ttf) format("truetype"),url(KaiseiDecol-Regular.598d578dc07ecc48.ttf) format("truetype")}@font-face{font-family:Montserrat;src:url(Montserrat-Italic-VariableFont_wght.7603bae74a0800ca.ttf) format("truetype"),url(Montserrat-VariableFont_wght.f595c38f5aaaeca5.ttf) format("truetype"),url(Montserrat-Black.aed5ce8c7c26eaae.ttf) format("truetype"),url(Montserrat-BlackItalic.ac6e7a9e5bd9e77f.ttf) format("truetype"),url(Montserrat-Bold.0066078b55585ece.ttf) format("truetype"),url(Montserrat-BoldItalic.5866550a33c16716.ttf) format("truetype"),url(Montserrat-ExtraBold.dbee8e687228adbc.ttf) format("truetype"),url(Montserrat-ExtraBoldItalic.58e6e8a82800163e.ttf) format("truetype"),url(Montserrat-ExtraLight.c82a42c9ebbe3735.ttf) format("truetype"),url(Montserrat-ExtraLightItalic.755519dac592ed76.ttf) format("truetype"),url(Montserrat-Italic.dbc6e9c57ee36e80.ttf) format("truetype"),url(Montserrat-Light.ac0230b4090118df.ttf) format("truetype"),url(Montserrat-LightItalic.b26f82b147656744.ttf) format("truetype"),url(Montserrat-Medium.62e48611196b08b2.ttf) format("truetype"),url(Montserrat-MediumItalic.227cbeedaff97c0e.ttf) format("truetype"),url(Montserrat-Regular.54c76208542a99cd.ttf) format("truetype"),url(Montserrat-SemiBold.941396b781615e84.ttf) format("truetype"),url(Montserrat-SemiBoldItalic.9d664ca44b962d18.ttf) format("truetype"),url(Montserrat-Thin.434cb22ffad1bd00.ttf) format("truetype"),url(Montserrat-ThinItalic.9819e3fdea227299.ttf) format("truetype")}.icon-test[_ngcontent-%COMP%]:before{content:"\\fffd"}*[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif}p[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%]{margin:0;color:#4b4b4b;background-color:transparent}.title[_ngcontent-%COMP%]{font-family:Kaisei Decol,serif}.container[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;width:100%;height:100%}.content[_ngcontent-%COMP%]{margin-top:30px;display:flex;flex-direction:column;align-items:center}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:19.5px;font-weight:300;text-align:center}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:5px}.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:140px}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#f8f4f5;background-color:#d0aa6e;border:none;margin-top:1em;cursor:pointer;padding:5px 10px;border-radius:25px}.content[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{font-weight:600;font-size:10px;line-height:16.5px}']})}return e})()}];let M=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(m),u.Bz]})}return e})();var b=a(433),T=a(1469);let y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[M,f.ez,b.u5,T.m]})}return e})()}}]);