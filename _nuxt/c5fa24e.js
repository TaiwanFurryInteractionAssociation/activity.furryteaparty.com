(window.webpackJsonp=window.webpackJsonp||[]).push([[49,18,20],{374:function(e,t,n){"use strict";n.r(t);n(373);var o=n(132),r=n.n(o),m={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:r.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},c=n(38),component=Object(c.a)(m,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},378:function(e,t,n){"use strict";n.r(t);var o={},r=n(38),component=Object(r.a)(o,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"round drop-shadow p:16|48 bg:white cursor:pointer",on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},379:function(e,t,n){"use strict";n.r(t);var o=n(132),r=n.n(o),m={props:{field:{type:String,default:""},value:{default:""},error:{default:null},required:{type:Boolean,default:!1}},data:function(){return{COLORS:r.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},c=n(38),component=Object(c.a)(m,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("select",{style:e.computedStyle,attrs:{required:e.required},domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Select:n(379).default})},394:function(e,t,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("3ab88367",content,!0,{sourceMap:!1})},413:function(e,t,n){"use strict";n(394)},414:function(e,t,n){var o=n(53)(!1);o.push([e.i,"@media (max-width:600px){[data-v-1cc6ec1b] canvas{width:100%!important;height:100%!important}}@media (min-width:600px){[data-v-1cc6ec1b] canvas{width:25vw!important;height:25vw!important}}",""]),e.exports=o},441:function(e,t,n){"use strict";n.r(t);var o=n(3),r=(n(25),n(35),n(86),n(11),n(241),n(389)),m=n(385),c=n(133),l={components:{QrcodeVue:r.a,AttendeeStatus:m.default},data:function(){return{loading:!0,team:null,createTeamForm:{teamName:""},updateTeamForm:{show:!1,teamName:""},memberForm:{show:!1,attendeeID:null,memberType:"MEMBER"},invitationForm:{show:!1,code:null},leaveConfirmation:!1,deleteConfirmation:{show:!1,attendeeID:null},MAX_TEAM_MEMBERS:4,mode:"default"}},computed:{invitationURL:function(){return"".concat(window.location.origin,"/team/").concat(this.invitationForm.code)},isTeamLeader:function(){return this.team.members.find((function(e){return"LEADER"==e.ftp_team_member_type})).account_id==this.$store.state.auth.account.account_id}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.commit("app/setTitle",e.$t("activity.team.title")),e.getTeam();case 2:case"end":return t.stop()}}),t)})))()},methods:{getTeam:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("/api/activity/team").then((function(t){t.data.team&&(e.team=t.data.team,e.team.members.sort((function(a,b){return"LEADER"==a.ftp_team_member_type?-1:1})))}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},createTeam:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.reportValidity()){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,t.next=5,e.$axios.post("/api/activity/team",{ftp_team_name:e.createTeamForm.teamName}).then((function(t){e.mode="default",e.getTeam()})).catch((function(e){c.a.showRequestError(e)}));case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},updateTeam:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.put("/api/activity/team",{ftp_team_name:e.updateTeamForm.teamName}).then((function(t){e.updateTeamForm.show=!1,e.getTeam()})).catch((function(e){c.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},leaveTeam:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.post("/api/activity/team/leave").then((function(t){e.leaveConfirmation=!1,e.getTeam()})).catch((function(e){c.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},createInvitation:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.post("/api/activity/team/invite").then((function(t){e.invitationForm.code=t.data.teamInvitation.ftp_team_invitation_code,e.invitationForm.show=!0})).catch((function(e){c.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},updateMember:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.put("/api/activity/team/member/"+e.memberForm.attendeeID,{ftp_team_member_type:e.memberForm.memberType}).then((function(t){e.memberForm.show=!1,e.getTeam()})).catch((function(e){c.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},deleteMember:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.delete("/api/activity/team/member/"+e.deleteConfirmation.attendeeID).then((function(t){e.deleteConfirmation.show=!1,e.getTeam()})).catch((function(e){c.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()}}},d=(n(413),n(38)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("Loading",{model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}}),e._v(" "),"default"==e.mode?t("div",[e.team?t("div",[t("div",{staticClass:"flex flex-direction:column flex-center gap:16"},[t("div",{staticClass:"font-size:1.2rem"},[e._v("\n          "+e._s(e.$t("activity.team.fields.team"))+"\n        ")]),e._v(" "),t("div",{staticClass:"font-size:2rem"},[e._v("\n          "+e._s(e.team.ftp_team_name)+"\n        ")]),e._v(" "),e.isTeamLeader?t("Button",{on:{click:function(t){e.updateTeamForm.show=!0,e.updateTeamForm.teamName=e.team.ftp_team_name}}},[e._v("\n          "+e._s(e.$t("activity.team.actions.editTeam"))+"\n        ")]):e._e(),e._v(" "),t("hr",{staticClass:"w:100% border:1px|solid|#aaa"}),e._v(" "),t("div",{staticClass:"font-size:1.2rem"},[e._v("\n          "+e._s(e.$t("activity.team.fields.teamMembers"))+"\n        ")]),e._v(" "),e._l(e.team.members,(function(n){return t("AttendeeStatus",{key:n.attendee_id,staticClass:"w:100%",attrs:{mode:"team",status:n,isTeamLeader:e.isTeamLeader},on:{edit:function(t){e.memberForm.show=!0,e.memberForm.attendeeID=n.attendee_id,e.memberForm.memberType=n.ftp_team_member_type},remove:function(t){e.deleteConfirmation.attendeeID=n.attendee_id,e.deleteConfirmation.show=!0}}})})),e._v(" "),e.team.members.length<e.MAX_TEAM_MEMBERS&&e.isTeamLeader?t("Button",{on:{click:e.createInvitation}},[e._v("\n          "+e._s(e.$t("activity.team.actions.createInvitation"))+"\n        ")]):e._e(),e._v(" "),t("hr",{staticClass:"w:100% border:1px|solid|#aaa"}),e._v(" "),t("Button",{attrs:{type:"negative"},on:{click:function(t){e.leaveConfirmation=!0}}},[e._v("\n          "+e._s(e.$t("activity.team.actions.leaveTeam"))+"\n        ")]),e._v(" "),t("Modal",{model:{value:e.updateTeamForm.show,callback:function(t){e.$set(e.updateTeamForm,"show",t)},expression:"updateTeamForm.show"}},[t("div",{staticClass:"round border drop-shadow bg:white p:32|32 flex flex-direction:column gap:16"},[t("div",{staticClass:"font-size:1.2rem"},[e._v("\n              "+e._s(e.$t("activity.team.fields.teamName"))+"\n            ")]),e._v(" "),t("InputText",{attrs:{required:"",maxlength:"32",minlength:"1"},model:{value:e.updateTeamForm.teamName,callback:function(t){e.$set(e.updateTeamForm,"teamName",t)},expression:"updateTeamForm.teamName"}}),e._v(" "),t("div",{staticClass:"flex"},[t("Button",{attrs:{type:"secondary"},on:{click:function(t){e.updateTeamForm.show=!1,e.updateTeamForm.teamName=""}}},[e._v("\n                "+e._s(e.$t("common.actions.cancel"))+" ")]),e._v(" \n              "),t("Button",{on:{click:e.updateTeam}},[e._v("\n                "+e._s(e.$t("common.actions.submit"))+"\n              ")])],1)],1)]),e._v(" "),t("Modal",{model:{value:e.memberForm.show,callback:function(t){e.$set(e.memberForm,"show",t)},expression:"memberForm.show"}},[t("div",{staticClass:"round border drop-shadow bg:white p:32|32 flex flex-direction:column gap:16"},[t("div",{staticClass:"font-size:1.2rem"},[e._v("\n              "+e._s(e.$t("activity.team.fields.teamMemberType"))+"\n            ")]),e._v(" "),t("Select",{model:{value:e.memberForm.memberType,callback:function(t){e.$set(e.memberForm,"memberType",t)},expression:"memberForm.memberType"}},[t("option",{attrs:{value:"LEADER"}},[e._v("\n                "+e._s(e.$t("activity.team.enums.memberType.LEADER"))+"\n              ")]),e._v(" "),t("option",{attrs:{value:"MEMBER"}},[e._v("\n                "+e._s(e.$t("activity.team.enums.memberType.MEMBER"))+"\n              ")])]),e._v(" "),t("div",{staticClass:"flex"},[t("Button",{attrs:{type:"secondary"},on:{click:function(t){e.memberForm.show=!1}}},[e._v("\n                "+e._s(e.$t("common.actions.cancel"))+" ")]),e._v(" \n              "),t("Button",{on:{click:e.updateMember}},[e._v("\n                "+e._s(e.$t("common.actions.submit"))+"\n              ")])],1)],1)]),e._v(" "),t("Modal",{model:{value:e.invitationForm.show,callback:function(t){e.$set(e.invitationForm,"show",t)},expression:"invitationForm.show"}},[t("div",{staticClass:"round border drop-shadow bg:white p:32|32 flex flex-direction:column gap:16"},[t("div",{staticClass:"font-size:1.2rem"},[e._v("\n              "+e._s(e.$t("activity.team.fields.invitationURL"))+"\n            ")]),e._v(" "),t("InputText",{attrs:{readonly:""},model:{value:e.invitationURL,callback:function(t){e.invitationURL=t},expression:"invitationURL"}}),e._v(" "),t("div",{staticClass:"font-size:1.2rem"},[e._v("\n              "+e._s(e.$t("activity.team.fields.invitationQRCode"))+"\n            ")]),e._v(" "),t("QrcodeVue",{attrs:{value:e.invitationURL,size:1024}}),e._v(" "),t("Button",{on:{click:function(t){e.invitationForm.show=!1}}},[e._v("\n              "+e._s(e.$t("common.actions.close"))+"\n            ")])],1)]),e._v(" "),t("Dialog",{attrs:{title:e.$t("activity.team.messages.confirmLeaveTeam"),description:e.$t("activity.team.messages.confirmLeaveTeamDescription"),yesText:e.$t("common.actions.submit"),yesType:"negative",noText:e.$t("common.actions.cancel"),noType:"secondary"},on:{yes:e.leaveTeam,no:function(t){e.leaveConfirmation=!1}},model:{value:e.leaveConfirmation,callback:function(t){e.leaveConfirmation=t},expression:"leaveConfirmation"}}),e._v(" "),t("Dialog",{attrs:{title:e.$t("activity.team.messages.confirmRemoveMember"),description:e.$t("activity.team.messages.confirmRemoveMemberDescription"),yesText:e.$t("common.actions.submit"),yesType:"negative",noText:e.$t("common.actions.cancel"),noType:"secondary"},on:{yes:e.deleteMember,no:function(t){e.deleteConfirmation.show=!1}},model:{value:e.deleteConfirmation.show,callback:function(t){e.$set(e.deleteConfirmation,"show",t)},expression:"deleteConfirmation.show"}})],2)]):e.loading?e._e():t("div",[t("div",{staticClass:"p:96|32 bg:white flex flex-center font-size:1.4rem round drop-shadow border"},[e._v("\n        "+e._s(e.$t("activity.team.errors.noTeam"))+"\n      ")]),e._v(" "),t("div",{staticClass:"mt:32 flex flex-center"},[t("RoundButton",{on:{click:function(t){e.mode="create",e.createTeamForm.teamName=""}}},[e._v(e._s(e.$t("activity.team.actions.createTeam")))])],1)])]):e._e(),e._v(" "),"create"==e.mode?t("div",[t("div",{staticClass:"p:96|32 bg:white flex flex-center flex-direction:column gap:32 font-size:1.4rem round drop-shadow border w:100%"},[e._v("\n      "+e._s(e.$t("activity.team.messages.pleaseInputTeamName"))+"\n      "),t("form",{ref:"form"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.createTeamForm.teamName,expression:"createTeamForm.teamName"}],staticClass:"p:8|16 border round",attrs:{required:"",maxlength:"32",minlength:"1"},domProps:{value:e.createTeamForm.teamName},on:{input:function(t){t.target.composing||e.$set(e.createTeamForm,"teamName",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"mt:32 flex flex-center"},[t("RoundButton",{on:{click:e.createTeam}},[e._v(e._s(e.$t("activity.team.actions.createTeam")))])],1)]):e._e()],1)}),[],!1,null,"1cc6ec1b",null);t.default=component.exports;installComponents(component,{Loading:n(239).default,Button:n(372).default,InputText:n(374).default,Modal:n(383).default,Select:n(379).default,Dialog:n(386).default,RoundButton:n(378).default})}}]);