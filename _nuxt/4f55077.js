(window.webpackJsonp=window.webpackJsonp||[]).push([[33,10],{372:function(t,n,e){"use strict";e.r(n);var o=e(132),r=e.n(o),c={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:r.a[this.type].background,color:r.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},l=e(38),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"position:relative"},[n("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:t.computedStyle,on:{click:function(n){return n.preventDefault(),t.$emit("click")}}},[t._t("default")],2),t._v(" "),t.disabled?n("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):t._e()])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(372).default})},392:function(t,n,e){var content=e(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("3144ee7e",content,!0,{sourceMap:!1})},405:function(t,n,e){"use strict";e(392)},406:function(t,n,e){var o=e(53)(!1);o.push([t.i,".popup-background[data-v-1f8fa696]{height:100%;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;z-index:999}.popup-background[data-v-1f8fa696],.popup-overlay[data-v-1f8fa696]{position:fixed;top:0;left:0;width:100%}.popup-overlay[data-v-1f8fa696]{z-index:10000;overscroll-behavior:contain;right:0;bottom:0;overflow-y:scroll;background:rgba(24,24,24,.7);background:rgba(0,0,0,.4902);height:100vh;align-content:center;padding:10px 20px}.popup[data-v-1f8fa696]{background-color:#fff;padding:20px;border-radius:10px;animation:fadeIn-1f8fa696 .5s ease;overflow:auto}.popup-content[data-v-1f8fa696]{text-align:center}.popup button[data-v-1f8fa696]{margin-top:10px;padding:5px 10px;background-color:#292929;color:#fff;border:none;cursor:pointer}.popup button[data-v-1f8fa696]:hover{background-color:#0056b3}.popup-enter-active[data-v-1f8fa696],.popup-leave-active[data-v-1f8fa696]{transition:opacity .5s ease}.popup-enter[data-v-1f8fa696],.popup-leave-to[data-v-1f8fa696]{opacity:0}@keyframes fadeIn-1f8fa696{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}",""]),t.exports=o},431:function(t,n,e){"use strict";e.r(n);var o=e(3),r=(e(17),e(55),e(25),{mounted:function(){this.$store.commit("app/setTitle",this.$t("activity.board.title")),this.getAnnouncements()},data:function(){return{loading:!1,allAnnouncements:null,popupVisible:!1,currentAnnouncement:null}},methods:{getAnnouncements:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.$axios.get("/api/activity/announcements").then((function(n){t.allAnnouncements=n.data.announcements}));case 3:t.loading=!1;case 4:case"end":return n.stop()}}),n)})))()},formatDate:function(t){return new Date(1e3*t).toLocaleString()},formatDescription:function(t){return t.length>30?t.substring(0,30)+"...":t.replace(/\n/g,"<br>")},showPopup:function(t){this.currentAnnouncement=t,this.popupVisible=!0},closePopup:function(){this.popupVisible=!1}}}),c=(e(405),e(38)),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",[n("Loading",{attrs:{value:t.loading}}),t._v(" "),n("div",{staticClass:"display:grid grid-template-columns:1fr|1fr@>sm grid-template-columns:1fr@<=sm gap:16"},t._l(t.allAnnouncements,(function(e,o){return n("a",{key:o,staticClass:"border:#CECECE|1px|solid border-radius:16 py:48 flex justify-content:start flex-direction:column align-items:left bg:white cursor:pointer",on:{click:function(n){return t.showPopup(e)}}},[n("span",{staticClass:"font-size:1.7rem mt:0 font-weight:bold px:32"},[t._v(t._s(e.ftp_announcement_is_important?"⭐️ ":"")+t._s(e.ftp_announcement_title))]),t._v(" "),n("span",{staticClass:"font-size:1.1rem mt:4 font-weight:500 pt:8 px:32 lh:25px",domProps:{innerHTML:t._s(t.formatDescription(e.ftp_announcement_description))}}),t._v(" "),n("div",{staticClass:"background:#cecece h:1px mx:32px my:18px"}),t._v(" "),n("span",{staticClass:"font-size:1.7rem mt:0 font-weight:bold px:32"},[t._v(t._s(e.ftp_announcement_is_important?"⭐️ ":"")+t._s(e.ftp_announcement_english_title))]),t._v(" "),n("span",{staticClass:"font-size:1.1rem mt:4 font-weight:500 pt:8 px:32 lh:25px",domProps:{innerHTML:t._s(t.formatDescription(e.ftp_announcement_english_description))}}),t._v(" "),n("span",{staticClass:"font-size:0.9rem mt:24 font-weight:400 pt:8 px:32 lh:25px"},[t._v("開始時間 Start Time："+t._s(t.formatDate(e.ftp_announcement_start_time)))])])})),0),t._v(" "),t.popupVisible?n("div",{staticClass:"popup-overlay min-h:400px@>=sm",on:{click:t.closePopup}},[n("div",{staticClass:"popup"},[n("div",{staticClass:"popup-content"},[n("h2",[t._v(t._s(t.currentAnnouncement.ftp_announcement_title))]),t._v(" "),n("p",{staticClass:"lh:25px",domProps:{innerHTML:t._s(t.formatDescription(t.currentAnnouncement.ftp_announcement_description))}}),t._v(" "),n("div",{staticClass:"background:#cecece h:1px mx:32px my:18px"}),t._v(" "),n("h2",[t._v(t._s(t.currentAnnouncement.ftp_announcement_english_title))]),t._v(" "),n("p",{staticClass:"lh:25px",domProps:{innerHTML:t._s(t.formatDescription(t.currentAnnouncement.ftp_announcement_english_description))}}),t._v(" "),n("button",{on:{click:t.closePopup}},[t._v("Close")])])])]):t._e()],1)}),[],!1,null,"1f8fa696",null);n.default=component.exports;installComponents(component,{Loading:e(239).default,Button:e(372).default})}}]);