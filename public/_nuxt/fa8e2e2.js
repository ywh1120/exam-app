(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{695:function(e,t,r){"use strict";r.r(t);var n=r(694),c=r(155),o=r(231),l=r(104),d=r(701),_=r(645),m=r(652),v=r(647),f=r(642),k=r(689),h=r(693),x=r(644),O=r(629),j=r(687),w=r(39),C=(r(5),r(10),r(136),r(111),r(153)),R=r(688),y=r.n(R),J={data:function(){return{user_id:"",user_pass:"",user_auth:"",user_dialog:!1,time_dialog:!1,desc_dialog:!1,notice_dialog:!1,dialog:!1,add_desc:"",selected_desc:null,desc_items:[],time_items:["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],selected_time:[],notice_content:"",authList:[{name:"관리자",value:"M"},{name:"방사선사",value:"R"},{name:"외래 사용자",value:"N"}],user_auth_rule:[function(e){return!!e||"권한은 필수 선택 사항입니다."}],user_id_rule:[function(e){return!!e||"아이디는 필수 입력 사항입니다."}],user_pass_rule:[function(e){return!!e||"패스워드는 필수 입력 사항입니다."}],snackbar:!1,snack_text:"",snack_timeout:3e3}},mounted:function(){"M"!==this.$cookies.get("login").auth&&(location.href="/"),this.read_Desc(),this.read_time()},methods:{user_Submit:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.user_id,e.user_pass,e.user_auth),t.prev=1,t.next=4,Object(C.j)(Object(C.d)(e.$db,"users",e.user_id),{id:e.user_id,pass:e.user_pass,auth:e.user_auth});case 4:e.user_dialog=!1,e.snack_text="사용자 등록이 완료되었습니다.",e.user_snackbar=!0,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("Error adding document: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},desc_submit:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.user_id,e.user_pass,e.user_auth),t.prev=1,t.next=4,Object(C.j)(Object(C.d)(e.$db,"description",e.add_desc),{desc:e.add_desc});case 4:e.add_desc="",e.desc_dialog=!1,e.snack_text="검사명 등록이 완료되었습니다.",e.snackbar=!0,e.read_Desc(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.error("Error adding document: ",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},desc_remove:function(){var e=this;try{this.selected_desc.forEach(function(){var t=Object(w.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.c)(Object(C.d)(e.$db,"description",r));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.desc_dialog=!1,this.snack_text="검사명 삭제가 완료되었습니다.",this.snackbar=!0,this.read_Desc()}catch(e){}},read_Desc:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var q;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.desc_items=[],q=Object(C.i)(Object(C.b)(e.$db,"description"),Object(C.h)("desc","asc")),t.next=4,Object(C.f)(q);case 4:t.sent.forEach((function(t){var r=JSON.stringify(t.data());e.desc_items.push(JSON.parse(r).desc),console.log(JSON.stringify(t.data()))}));case 6:case"end":return t.stop()}}),t)})))()},read_time:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var q;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.selected_time=[],q=Object(C.i)(Object(C.b)(e.$db,"time")),t.next=4,Object(C.f)(q);case 4:t.sent.forEach((function(t){var r=JSON.stringify(t.data());"Y"===JSON.parse(r).use&&e.selected_time.push(JSON.parse(r).time)}));case 6:case"end":return t.stop()}}),t)})))()},notice_submit:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=y()().format("YYYY.MM.DD"),t.prev=1,t.next=4,Object(C.j)(Object(C.d)(e.$db,"notice",r),{notice:e.notice_content});case 4:e.notice_content="",e.notice_dialog=!1,e.snack_text="공지사항 등록이 완료되었습니다.",e.snackbar=!0,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(1);case 12:case"end":return t.stop()}}),t,null,[[1,10]])})))()},time_submit:function(){var e=this;try{this.time_items.forEach(function(){var t=Object(w.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="",n=void 0===e.selected_time.find(r)?"N":"Y",t.next=4,Object(C.j)(Object(C.d)(e.$db,"time",r),{time:r,use:n});case 4:e.snack_text=e.selected_time.find(r),e.snackbar=!0;case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.time_dialog=!1,this.snack_text="시간표 변경이 완료되었습니다.",this.snackbar=!0,this.read_time()}catch(e){}}}},N=J,S=r(110),component=Object(S.a)(N,(function(){var e=this,t=e._self._c;return t(m.a,[t(f.a,{staticClass:"mb-6"},[t(_.a,[t(o.a,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[e._v(" 사용자등록하기 ")])],1),e._v(" "),t(_.a,[t(o.a,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t(c.a,{on:{click:function(t){e.user_dialog=!0}}},[e._v("등록")])],1)],1)],1),e._v(" "),t(f.a,{staticClass:"mb-6"},[t(_.a,[t(o.a,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[e._v(" 시간표등록 ")])],1),e._v(" "),t(_.a,[t(o.a,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t(c.a,{on:{click:function(t){e.time_dialog=!0}}},[e._v("등록")])],1)],1)],1),e._v(" "),t(f.a,{staticClass:"mb-6"},[t(_.a,[t(o.a,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[e._v(" 검사명등록 ")])],1),e._v(" "),t(_.a,[t(o.a,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t(c.a,{on:{click:function(t){e.desc_dialog=!0}}},[e._v("등록")])],1)],1)],1),e._v(" "),t(f.a,{staticClass:"mb-6"},[t(_.a,[t(o.a,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[e._v(" 공자사항입력 ")])],1),e._v(" "),t(_.a,[t(o.a,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t(c.a,{on:{click:function(t){e.notice_dialog=!0}}},[e._v("등록")])],1)],1)],1),e._v(" "),t(h.a,{attrs:{timeout:e.snack_timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snack_text)+" \n")]),e._v(" "),t(f.a,{attrs:{justify:"center"}},[t(v.a,{attrs:{persistent:"","max-width":"600px"},model:{value:e.user_dialog,callback:function(t){e.user_dialog=t},expression:"user_dialog"}},[t(o.a,[t(l.c,[t("span",{staticClass:"text-h5"},[e._v("사용자 등록")])]),e._v(" "),t(l.b,[t(m.a,[t(f.a,[t(_.a,{attrs:{cols:"12"}},[t(O.a,{attrs:{label:"아이디*",rules:e.user_id_rule,required:""},model:{value:e.user_id,callback:function(t){e.user_id=t},expression:"user_id"}})],1),e._v(" "),t(_.a,{attrs:{cols:"12"}},[t(O.a,{attrs:{label:"패스워드*",rules:e.user_pass_rule,type:"password",required:""},model:{value:e.user_pass,callback:function(t){e.user_pass=t},expression:"user_pass"}})],1),e._v(" "),t(_.a,{attrs:{cols:"12",sm:"6"}},[t(k.a,{attrs:{label:"권한*",items:e.authList,"item-text":"name","item-value":"value",rules:e.user_auth_rule},model:{value:e.user_auth,callback:function(t){e.user_auth=t},expression:"user_auth"}})],1)],1),e._v(" "),t("small",[e._v("*별표시는 필수값입니다.")])],1)],1),e._v(" "),t(l.a,[t(x.a),e._v(" "),t(c.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.user_dialog=!1}}},[e._v(" 닫기 ")]),e._v(" "),t(c.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.user_Submit()}}},[e._v(" 저장 ")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{persistent:"","max-width":"600px"},model:{value:e.time_dialog,callback:function(t){e.time_dialog=t},expression:"time_dialog"}},[t(o.a,[t(l.c,[t("span",{staticClass:"text-h5"},[e._v("시간표 추가/삭제")])]),e._v(" "),t(l.b,[t(m.a,[t(f.a,{staticClass:"mb-6",attrs:{"no-gutters":""}},e._l(e.time_items,(function(r){return t(_.a,{key:r},[t(d.a,{attrs:{label:r,value:r},model:{value:e.selected_time,callback:function(t){e.selected_time=t},expression:"selected_time"}})],1)})),1)],1)],1),e._v(" "),t(l.a,[t(x.a),e._v(" "),t(c.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.time_dialog=!1}}},[e._v(" 닫기 ")]),e._v(" "),t(c.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.time_submit()}}},[e._v(" 저장 ")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{persistent:"","max-width":"600px"},model:{value:e.desc_dialog,callback:function(t){e.desc_dialog=t},expression:"desc_dialog"}},[t(o.a,[t(l.c,[t("span",{staticClass:"text-h5"},[e._v("검사명 추가/삭제")])]),e._v(" "),t(l.b,[t(m.a,[t(f.a,[t(_.a,{attrs:{cols:"12",sm:"6"}},[t(O.a,{attrs:{label:"검사명추가",required:""},model:{value:e.add_desc,callback:function(t){e.add_desc=t},expression:"add_desc"}})],1),e._v(" "),t(_.a,{attrs:{cols:"12"}},[t(n.a,{attrs:{items:e.desc_items,label:"검사명",multiple:""},model:{value:e.selected_desc,callback:function(t){e.selected_desc=t},expression:"selected_desc"}})],1)],1)],1)],1),e._v(" "),t(l.a,[t(x.a),e._v(" "),t(c.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.desc_dialog=!1}}},[e._v(" 닫기 ")]),e._v(" "),t(c.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.desc_submit()}}},[e._v(" 저장 ")]),e._v(" "),t(c.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.desc_remove()}}},[e._v(" 삭제 ")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{persistent:"","max-width":"600px"},model:{value:e.notice_dialog,callback:function(t){e.notice_dialog=t},expression:"notice_dialog"}},[t(o.a,[t(l.c,[t("span",{staticClass:"text-h5"},[e._v("공지사항 입력")])]),e._v(" "),t(l.b,[t(m.a,[t(f.a,{staticClass:"mb-6",attrs:{"no-gutters":""}},[t(_.a,[t(j.a,{attrs:{outlined:"",label:"공지사항 입력"},model:{value:e.notice_content,callback:function(t){e.notice_content=t},expression:"notice_content"}})],1)],1)],1)],1),e._v(" "),t(l.a,[t(x.a),e._v(" "),t(c.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.notice_dialog=!1}}},[e._v(" 닫기 ")]),e._v(" "),t(c.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.notice_submit()}}},[e._v(" 저장 ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);