(window.webpackJsonp=window.webpackJsonp||[]).push([[40,17],{387:function(e,t,n){"use strict";n.r(t);n(67);var r={data:function(){return{response:null}},methods:{receiveResponse:function(data){var e=this;data&&(this.$set(this,"response",data),"redirect_to_newebpay"==data.payment_type?setTimeout((function(t){e.$refs.newebpay_form.submit()}),2e3):"refresh"==data.payment_type&&setTimeout((function(e){window.location.reload()}),1e3))}}},o=n(38),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[e.response&&"redirect_to_newebpay"==e.response.payment_type?t("form",{ref:"newebpay_form",staticClass:"display:none",attrs:{method:"POST",action:e.response.payment_info.submit_url}},[t("input",{attrs:{name:"MerchantID"},domProps:{value:e.response.payment_info.merchant_id}}),e._v(" "),t("input",{attrs:{name:"Version"},domProps:{value:e.response.payment_info.version}}),e._v(" "),t("input",{attrs:{name:"TradeInfo"},domProps:{value:e.response.payment_info.trade_info}}),e._v(" "),t("input",{attrs:{name:"TradeSha"},domProps:{value:e.response.payment_info.hash}})]):e._e()])}),[],!1,null,null,null);t.default=component.exports},400:function(e,t,n){var content=n(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("2d6b83e2",content,!0,{sourceMap:!1})},419:function(e,t,n){"use strict";n(400)},420:function(e,t,n){var r=n(53)(!1);r.push([e.i,".confirm{margin:16px 0}.confirm>.title{font-size:1.2rem;font-weight:700;margin-bottom:8px}",""]),e.exports=r},448:function(e,t,n){"use strict";n.r(t);n(17),n(55),n(19),n(86),n(11),n(39),n(50),n(30),n(36),n(42),n(20),n(41),n(43),n(48),n(34),n(49);var r=n(13),o=n(3),d=(n(25),n(248),n(45),n(51),n(71),n(22),n(23),n(395),n(170),n(384)),l=n.n(d),m=n(132),c=n.n(m),_=n(396),f=n.n(_),v=n(397),h=n.n(v),y=n(398),C=n.n(y),w=n(134),x=n.n(w),k=n(133),$=n(399);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function R(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,d=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return d=e.done,e},e:function(e){l=!0,o=e},f:function(){try{d||null==n.return||n.return()}finally{if(l)throw o}}}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var I={watch:{"form.attendee_level":function(e){e&&(1==e.payment_methods.length&&(this.form.attendee_payment_method=e.payment_methods[0]),1==e.receive_methods.length&&(this.form.attendee_receive_method=e.receive_methods[0]))},"form.attendee_card_name_1":function(e){this.form.attendee_card_name_1=e.replaceAll(Object($.a)(),"")},"form.attendee_card_name_2":function(e){this.form.attendee_card_name_2=e.replaceAll(Object($.a)(),"")}},data:function(){return{config:x.a.getConfig(),isMaintenancing:x.a.isMaintenancing(),isOpened:x.a.isRegistrationOpened(),openDatetimeRange:x.a.getRegistrationOpenDatetimeRange(),levelLimitStatus:{},isConfirming:!1,COLORS:c.a,PAYMENT_METHODS:f.a,COUNTRIES:l.a,SHIRT_SIZES:C.a,registrationToken:this.$route.query.registrationToken,registrationTokenInfo:null,loading:!1,form:{attendee_level:null,attendee_type:null,attendee_donate_amount:0,attendee_shirt_size:null,attendee_realname:null,attendee_country:"TW",attendee_nickname:this.$store.state.auth.account.account_name,attendee_telephone:null,attendee_identification_number:null,attendee_card_name_1:null,attendee_card_name_2:"",attendee_receive_method:null,attendee_address:null,attendee_has_fursuit:null,attendee_fursuit_name:null,attendee_payment_method:null,attendee_buy_bottle:null},attendee_fursona_images:{},temp:{selectedFile:null}}},computed:{showPaymentMethods:function(){return this.form.attendee_level&&0!=this.form.attendee_level.price},receiveMethods:function(){var e,t=[],n=R(h.a);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.form.attendee_level&&this.form.attendee_level.receive_methods.includes(r.key.toString())&&t.push(r)}}catch(e){n.e(e)}finally{n.f()}return t},paymentMethods:function(){var e,t=this,n=[],r=R(f.a);try{for(r.s();!(e=r.n()).done;){var o=e.value;this.form.attendee_level&&this.form.attendee_level.payment_methods.includes(o.key.toString())&&n.push(o)}}catch(e){r.e(e)}finally{r.f()}return n=n.filter((function(e){return-1==e.excludeCountries.indexOf(t.form.attendee_country)})),n},levels:function(){return this.config.levels.filter((function(e){return!e.special}))}},mounted:function(){this.$store.commit("app/setTitle",this.$t("attendee.register.title")),this.getRegistrationToken(),this.getLevelLimitStatus()},methods:{getRegistrationToken:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.registrationToken){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,t.next=5,e.$axios.get("/api/registration/registrationToken/"+e.registrationToken).then((function(t){e.registrationTokenInfo=t.data.token,e.form.registration_token=e.registrationToken})).catch((function(e){k.a.showRequestError(e)}));case 5:e.form.attendee_type=e.registrationTokenInfo.registration_token_level,e.form.attendee_level=e.config.levels.find((function(t){return t.level==e.form.attendee_type})),e.form.attendee_buy_bottle=!1,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},getLevelLimitStatus:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("/api/registration/levels").then((function(t){e.levelLimitStatus=t.data})).catch((function(e){k.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=S({},e.form)).attendee_fursona_images=Object.keys(e.attendee_fursona_images),e.loading=!0,t.next=5,e.$axios.post("/api/registration",n).then((function(t){"attendee.messages.registered"==t.data.code?(k.a.showSnackbar({message:e.$t(t.data.code),colorType:"positive"}),e.$refs.paymentGateway.receiveResponse(t.data)):(k.a.showSnackbar({message:e.$t(t.data.code).replace("{START_AT}",e.openDatetimeRange.start_at.toLocaleString()).replace("{END_AT}",e.openDatetimeRange.end_at.toLocaleString()),colorType:"positive"}),e.$router.push(e.localePath("/registration")),e.loading=!1)})).catch((function(t){console.log(t),k.a.showRequestError(t,!0,{START_AT:e.openDatetimeRange.start_at.toLocaleString(),END_AT:e.openDatetimeRange.end_at.toLocaleString()}),e.loading=!1}));case 5:case"end":return t.stop()}}),t)})))()},uploadImage:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var form;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.value){n.next=2;break}return n.abrupt("return");case 2:return(form=new FormData).append("image",e.files[0]),t.loading=!0,n.next=7,t.$axios.post("/api/registration/fursona/image",form).then((function(n){var image=n.data.image;t.attendee_fursona_images[image.image_id]={image_id:image.image_id,name:image.name,previewURL:URL.createObjectURL(e.files[0])}})).catch((function(e){k.a.showRequestError(e)}));case 7:t.loading=!1;case 8:case"end":return n.stop()}}),n)})))()},deleteImage:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:delete(r=S({},t.attendee_fursona_images))[e],t.attendee_fursona_images=r;case 5:case"end":return n.stop()}}),n)})))()}}},L=(n(419),n(38)),component=Object(L.a)(I,(function(){var e=this,t=e._self._c;return t("form",{ref:"form",staticClass:"flex flex-direction:column flex-center"},[t("Loading",{model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}}),e._v(" "),e.isOpened||null!=e.registrationToken?e.isMaintenancing?t("div",{staticClass:"p:96|32 round drop-shadow border flex flex-center w:100% bg:white"},[e._v("\n    "+e._s(e.$t("common.errors.maintenancing"))+"\n  ")]):e.isConfirming?t("div",{staticClass:"w:100%"},[t("div",{staticClass:"p:32|32 round drop-shadow border flex flex-center w:100% bg:white"},[t("div",{staticClass:"flex flex-direction:column"},[t("span",{staticClass:"margin-bottom:32"},[e._v("\n          "+e._s(e.$t("attendee.messages.pleaseConfirmInfoBelow"))+"\n        ")]),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeType"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.$t("attendee.enums.levels."+e.form.attendee_type))+"\n          ")])]),e._v(" "),e.form.attendee_donate_amount?t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeDonateAmount"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.$t("common.currency"))+" "+e._s(e.form.attendee_donate_amount)+"\n          ")])]):e._e(),e._v(" "),e.form.attendee_shirt_size?t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeShirtSize"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_shirt_size)+"\n          ")])]):e._e(),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeNickname"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_nickname)+"\n          ")])]),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeRealname"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_realname)+"\n          ")])]),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeCountry"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.COUNTRIES.find((function(t){return t.code==e.form.attendee_country})).name)+"\n          ")])]),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeIdentificationNumber"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_identification_number)+"\n          ")])]),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeBirthday"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_birthday)+"\n          ")])]),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeTelephone"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_telephone)+"\n          ")])]),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeCardName1"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_card_name_1)+"\n          ")])]),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeCardName2"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_card_name_2)+"\n          ")])]),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeReceiveMethod"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.$t("attendee.enums.receiveMethods."+e.form.attendee_receive_method))+"\n          ")])]),e._v(" "),e.form.attendee_address&&"MAIL"==e.form.attendee_receive_method?t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeAddress"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_address)+"\n          ")])]):e._e(),e._v(" "),t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeHasFursuit"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.$t("common."+(e.form.attendee_has_fursuit?"yes":"no")))+"\n          ")])]),e._v(" "),e.form.attendee_fursuit_name&&"yes"==e.form.attendee_has_fursuit?t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeFursuitName"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.form.attendee_fursuit_name)+"\n          ")])]):e._e(),e._v(" "),e.form.attendee_buy_bottle?t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeeBuyBottle"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.$t("common."+(e.form.attendee_buy_bottle?"yes":"no")))+"\n          ")])]):e._e(),e._v(" "),e.form.attendee_payment_method?t("div",{staticClass:"confirm"},[t("div",{staticClass:"title"},[e._v("\n            "+e._s(e.$t("attendee.fields.attendeePaymentMethod"))+"\n          ")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n            "+e._s(e.$t("payment.enums.paymentMethods."+e.form.attendee_payment_method))+"\n          ")])]):e._e()])]),e._v(" "),t("div",{staticClass:"mt:32 flex flex-center"},[t("RoundButton",{staticClass:"mx:8",on:{click:function(t){return e.isConfirming=!1}}},[e._v(e._s(e.$t("common.actions.back")))]),e._v(" "),t("RoundButton",{staticClass:"mx:8",on:{click:function(t){return e.submit()}}},[e._v(e._s(e.$t("common.actions.submit")))])],1)]):t("div",{staticClass:"w:100%"},[t("div",{staticClass:"font-weight:bold my:32"},[e._v("\n      "+e._s(e.$t("attendee.fields.attendeeType"))+"\n      "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_level,expression:"form.attendee_level"}],staticClass:"input validation",attrs:{required:""},domProps:{value:e.form.attendee_level},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_level",t.target.value)}}})]),e._v(" "),e.registrationTokenInfo?t("div",{staticClass:"round border drop-shadow flex flex-center p:64|16 mb:16",style:{background:e.COLORS.primary.background,color:e.COLORS.primary.color}},[e._v("\n      "+e._s(e.$t("attendee.messages.usingRegistrationToken").replace("{LEVEL}",e.$t("attendee.enums.levels."+e.registrationTokenInfo.registration_token_level)))+"\n    ")]):e._e(),e._v(" "),e.registrationTokenInfo?e._e():t("div",{staticClass:"display:grid grid-template-columns:1fr!@<=sm align-items:center gap:16 w:100%",class:{"grid-template-columns:1fr|1fr!@<=md":e.levels.length>=2},style:{gridTemplateColumns:"repeat(".concat(e.levels.length,", 1fr)")}},e._l(e.levels.filter((function(e){return!e.special})),(function(n){return t("div",{key:n.level,staticClass:"bg:white round border drop-shadow flex flex-direction:column flex-center p:16 w:100% h:100%",style:{background:e.form.attendee_type==n.level?e.COLORS.primary.background:"white",color:e.form.attendee_type==n.level?e.COLORS.primary.color:"black",filter:e.levelLimitStatus[n.level]?["grayscale(100%)"]:"none",opacity:e.levelLimitStatus[n.level]?.8:1,cursor:e.levelLimitStatus[n.level]?"not-allowed":"pointer"},on:{click:function(t){e.levelLimitStatus[n.level]||(e.form.attendee_type=n.level,e.form.attendee_level=n)}}},[t("img",{staticClass:"width:16rem mb:16",attrs:{src:"/assets/levels/"+n.level+".webp"}}),e._v(" "),t("div",{staticClass:"font-size:1.2rem mb:8"},[e._v("\n          "+e._s(e.$t("attendee.enums.levels."+n.level))+"\n        ")]),e._v(" "),t("div",[e._v(e._s(e.$t("common.currency"))+" "+e._s(n.price))]),e._v(" "),e.levelLimitStatus[n.level]?t("div",{staticClass:"mt:8"},[e._v("\n          ("+e._s(e.$t("attendee.errors.levelIsFull"))+")\n        ")]):e._e()])})),0),e._v(" "),e.form.attendee_level&&e.form.attendee_level.can_donate?t("RoundInput",{attrs:{title:e.$t("attendee.fields.attendeeDonateAmount")}},[e._v("\n      "+e._s(e.$t("common.currency"))+"\n      "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_donate_amount,expression:"form.attendee_donate_amount"}],staticClass:"w:12rem border:0 border-bottom:1px|solid|gray! border-radius:0",attrs:{type:"number",max:"200000000",min:"0",required:""},domProps:{value:e.form.attendee_donate_amount},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_donate_amount",t.target.value)}}})]):e._e(),e._v(" "),e.form.attendee_level&&e.form.attendee_level.has_shirt?t("RoundInput",{attrs:{title:e.$t("attendee.fields.attendeeShirtSize")}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_shirt_size,expression:"form.attendee_shirt_size"}],staticClass:"w:14rem background:#E1E1E1 border:0 p:4",attrs:{required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"attendee_shirt_size",t.target.multiple?n:n[0])}}},[t("option",{attrs:{value:"",selected:""}},[e._v("\n          "+e._s(e.$t("common.messages.pleaseSelect"))+"\n        ")]),e._v(" "),e._l(e.SHIRT_SIZES,(function(n){return t("option",{key:n,domProps:{value:n}},[e._v("\n          "+e._s(n)+"\n        ")])}))],2)]):e._e(),e._v(" "),t("div",{staticClass:"font-weight:bold my:32"},[e._v("\n      "+e._s(e.$t("attendee.messages.personalInfo"))+"\n    ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow bg:white w:100% p:32"},[t("div",{staticClass:"display:grid grid-template-columns:1fr|1fr|1fr@>sm grid-template-columns:1fr@<=sm gap:32 w:100% p:16"},[t("Field",{attrs:{field:e.$t("attendee.fields.attendeeNickname")}},[t("InputText",{attrs:{required:"",maxlength:64},model:{value:e.form.attendee_nickname,callback:function(t){e.$set(e.form,"attendee_nickname",t)},expression:"form.attendee_nickname"}})],1),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.fields.attendeeRealname")}},[t("InputText",{attrs:{required:"",maxlength:64},model:{value:e.form.attendee_realname,callback:function(t){e.$set(e.form,"attendee_realname",t)},expression:"form.attendee_realname"}})],1),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.fields.attendeeCountry")}},[t("Select",{attrs:{required:"",maxlength:2},model:{value:e.form.attendee_country,callback:function(t){e.$set(e.form,"attendee_country",t)},expression:"form.attendee_country"}},e._l(e.COUNTRIES,(function(n){return t("option",{key:n.code,domProps:{value:n.code}},[e._v("\n              "+e._s(n.name)+"\n            ")])})),0)],1),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.fields.attendeeIdentificationNumber")}},[t("InputText",{attrs:{maxlength:4,required:""},model:{value:e.form.attendee_identification_number,callback:function(t){e.$set(e.form,"attendee_identification_number",t)},expression:"form.attendee_identification_number"}})],1),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.fields.attendeeBirthday")}},[t("InputText",{attrs:{type:"date",required:""},model:{value:e.form.attendee_birthday,callback:function(t){e.$set(e.form,"attendee_birthday",t)},expression:"form.attendee_birthday"}})],1),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.fields.attendeeTelephone")}},[t("InputText",{attrs:{required:"",maxlength:32},model:{value:e.form.attendee_telephone,callback:function(t){e.$set(e.form,"attendee_telephone",t)},expression:"form.attendee_telephone"}})],1)],1)]),e._v(" "),t("div",{staticClass:"font-weight:bold my:32"},[e._v("\n      "+e._s(e.$t("attendee.messages.cardInfo"))+"\n    ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow bg:white w:100% p:64|16 flex flex-direction:column flex-center"},[t("div",{staticClass:"w:18rem h:10rem bg:#F5F5F5 p:16 flex flex-direction:column align-items:center justify-content:space-between border-radius:8"},[t("div",{staticClass:"mt:1rem"},[e._v("\n          "+e._s(e.$t("attendee.messages.cardExample"))+"\n        ")]),e._v(" "),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_card_name_1,expression:"form.attendee_card_name_1"}],staticClass:"p:0 h:2rem mb:4 text-align:center",attrs:{placeholder:e.$t("attendee.fields.attendeeCardName1"),required:"",maxlength:64},domProps:{value:e.form.attendee_card_name_1},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_card_name_1",t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_card_name_2,expression:"form.attendee_card_name_2"}],staticClass:"p:0 h:1.6rem font-size:0.8rem text-align:center",attrs:{placeholder:e.$t("attendee.fields.attendeeCardName2"),maxlength:64},domProps:{value:e.form.attendee_card_name_2},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_card_name_2",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"mt:32",style:{color:e.COLORS.negative.background}},[e._v("\n        "+e._s(e.$t("attendee.messages.attendeeCardNameNotice"))+"\n      ")])]),e._v(" "),e.receiveMethods.length>0?t("div",{staticClass:"font-weight:bold my:32"},[e._v("\n      "+e._s(e.$t("attendee.fields.attendeeReceiveMethod"))+"\n      "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_receive_method,expression:"form.attendee_receive_method"}],staticClass:"input validation",attrs:{required:""},domProps:{value:e.form.attendee_receive_method},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_receive_method",t.target.value)}}})]):e._e(),e._v(" "),e.receiveMethods.length>0?t("div",{staticClass:"display:grid grid-template-columns:1fr!@<=sm gap:16 w:100%",class:{"grid-template-columns:1fr|1fr!@<=md":e.receiveMethods.length>=2},style:{gridTemplateColumns:"repeat(".concat(e.receiveMethods.length,", 1fr)")}},e._l(e.receiveMethods,(function(n){return t("div",{key:n.key,staticClass:"bg:white round border drop-shadow flex flex-direction:column flex-center p:16 cursor:pointer w:100% h:100%",style:{background:e.form.attendee_receive_method==n.key?e.COLORS.primary.background:n.disabled?"lightgray":"white",color:e.form.attendee_receive_method==n.key?e.COLORS.primary.color:"black"},on:{click:function(t){n.disabled||(e.form.attendee_receive_method=n.key)}}},[t("i",{class:"font-size:4rem my:16 mdi mdi-"+n.icon}),e._v(" "),t("div",{staticClass:"font-size:1.2rem mb:8"},[e._v("\n          "+e._s(e.$t("attendee.enums.receiveMethods."+n.key))+"\n        ")])])})),0):e._e(),e._v(" "),"MAIL"==e.form.attendee_receive_method?t("RoundInput",{attrs:{title:e.$t("attendee.fields.attendeeAddress"),subtitle:e.$t("attendee.messages.attendeeAddressNotice"),subtitleColor:"red"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_address,expression:"form.attendee_address"}],staticClass:"w:16rem w:28rem@>sm font-size:0.8rem border:0 border-bottom:1px|solid|gray! border-radius:0",attrs:{type:"text",maxlength:"255",required:""},domProps:{value:e.form.attendee_address},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_address",t.target.value)}}})]):e._e(),e._v(" "),t("div",{staticClass:"font-weight:bold my:32"},[e._v("\n      "+e._s(e.$t("attendee.fields.attendeeHasFursuit"))+"\n      "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_has_fursuit,expression:"form.attendee_has_fursuit"}],staticClass:"input validation",attrs:{required:""},domProps:{value:e.form.attendee_has_fursuit},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_has_fursuit",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"display:grid grid-template-columns:1fr|1fr@>sm grid-template-columns:1fr@<=sm gap:16 w:100%"},e._l([!0,!1],(function(n){return t("div",{key:n,staticClass:"bg:white round border drop-shadow flex flex-direction:column flex-center p:16 cursor:pointer",style:{background:e.form.attendee_has_fursuit==n?e.COLORS.primary.background:"white",color:e.form.attendee_has_fursuit==n?e.COLORS.primary.color:"black"},on:{click:function(t){e.form.attendee_has_fursuit=n}}},[t("i",{class:"font-size:4rem my:16 mdi mdi-"+(n?"tshirt-crew":"close")}),e._v(" "),t("div",{staticClass:"font-size:1.2rem mb:8"},[e._v("\n          "+e._s(e.$t("common."+(n?"yes":"no")))+"\n        ")])])})),0),e._v(" "),e.form.attendee_has_fursuit?t("RoundInput",{attrs:{title:e.$t("attendee.fields.attendeeFursuitName"),subtitle:e.$t("attendee.messages.attendeeFursuitNameNotice")}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_fursuit_name,expression:"form.attendee_fursuit_name"}],staticClass:"w:16rem font-size:0.8rem border:0 border-bottom:1px|solid|gray! border-radius:0",attrs:{type:"text",maxlength:"64",required:""},domProps:{value:e.form.attendee_fursuit_name},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_fursuit_name",t.target.value)}}})]):e._e(),e._v(" "),e.form.attendee_level&&e.form.attendee_level.can_upload_image?t("div",[t("div",{staticClass:"font-weight:bold my:32"},[e._v("\n        "+e._s(e.$t("attendee.fields.fursonaImages"))+"\n      ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow bg:white w:100% p:32"},[t("div",{staticClass:"display:grid grid-template-columns:1fr|1fr|1fr@>sm grid-template-columns:1fr@<=sm gap:32 w:100% p:16"},[e._l(Object.keys(e.attendee_fursona_images),(function(n){return t("div",{key:n,staticClass:"bg:white round border drop-shadow flex flex-direction:column flex-center p:16 cursor:pointer w:100% h:100%",staticStyle:{position:"relative"}},[t("img",{staticStyle:{"max-height":"7rem"},attrs:{src:e.attendee_fursona_images[n].previewURL,alt:e.attendee_fursona_images[n].name,title:e.attendee_fursona_images[n].name}}),e._v(" "),t("i",{class:"font-size:2rem mx:8 my:8 mdi mdi-close",staticStyle:{position:"absolute",right:"0",top:"0",opacity:"0.75"},on:{click:function(t){return e.deleteImage(n)}}})])})),e._v(" "),Object.keys(e.attendee_fursona_images).length<1?t("div",{staticClass:"bg:white round flex flex-direction:column flex-center p:16 cursor:pointer w:100% h:100%",on:{click:function(t){return e.$refs.selectFile.click()}}},[t("i",{class:"font-size:4rem my:16 mdi mdi-plus",staticStyle:{opacity:"0.75"}}),e._v(" "),t("div",{staticClass:"font-size:1.2rem mb:8"},[t("input",{ref:"selectFile",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(t){return e.uploadImage(t.target)}}})])]):e._e()],2),e._v(" "),""!=e.$t("attendee.messages.fursonaImageNotes")?t("div",{staticClass:"display:grid grid-template-columns:1fr@>sm grid-template-columns:1fr@<=sm gap:32 w:100% p:16",staticStyle:{opacity:"0.8"}},[e._v("\n          "+e._s(e.$t("attendee.messages.fursonaImageNotes"))+"\n        ")]):e._e()])]):e._e(),e._v(" "),e.registrationTokenInfo?e._e():t("div",[t("div",{staticClass:"font-weight:bold my:32"},[e._v("\n        "+e._s(e.$t("attendee.fields.attendeeBuyBottle"))+"\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_buy_bottle,expression:"form.attendee_buy_bottle"}],staticClass:"input validation",attrs:{required:""},domProps:{value:e.form.attendee_buy_bottle},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_buy_bottle",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"display:grid grid-template-columns:1fr|1fr@>sm grid-template-columns:1fr@<=sm gap:16 w:100%"},e._l([!0,!1],(function(n){return t("div",{key:n,staticClass:"bg:white round border drop-shadow flex flex-direction:column flex-center p:16 cursor:pointer",style:{background:e.form.attendee_buy_bottle==n?e.COLORS.primary.background:"white",color:e.form.attendee_buy_bottle==n?e.COLORS.primary.color:"black"},on:{click:function(t){e.form.attendee_buy_bottle=n}}},[t("i",{class:"font-size:4rem my:16 mdi mdi-"+(n?"bottle-soda":"close")}),e._v(" "),t("div",{staticClass:"font-size:1.2rem mb:8"},[e._v("\n            "+e._s(e.$t("common."+(n?"yes":"no")))+"\n          ")])])})),0)]),e._v(" "),e.showPaymentMethods?t("div",{staticClass:"font-weight:bold my:32"},[e._v("\n      "+e._s(e.$t("attendee.fields.attendeePaymentMethod"))+"\n      "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.attendee_payment_method,expression:"form.attendee_payment_method"}],staticClass:"input validation",attrs:{required:""},domProps:{value:e.form.attendee_payment_method},on:{input:function(t){t.target.composing||e.$set(e.form,"attendee_payment_method",t.target.value)}}})]):e._e(),e._v(" "),e.showPaymentMethods?t("div",{staticClass:"display:grid grid-template-columns:1fr!@<=sm gap:16 w:100%",class:{"grid-template-columns:1fr|1fr!@<=md":e.paymentMethods.length>=2},style:{gridTemplateColumns:"repeat(".concat(e.paymentMethods.length,", 1fr)")}},e._l(e.paymentMethods,(function(n){return t("div",{key:n.key,staticClass:"bg:white round border drop-shadow flex flex-direction:column flex-center p:16 cursor:pointer w:100% h:100%",style:{background:e.form.attendee_payment_method==n.key?e.COLORS.primary.background:"white",color:e.form.attendee_payment_method==n.key?e.COLORS.primary.color:"black"},on:{click:function(t){e.form.attendee_payment_method=n.key}}},[t("i",{class:"font-size:4rem my:16 mdi mdi-"+n.icon}),e._v(" "),t("div",{staticClass:"font-size:1.2rem mb:8"},[e._v("\n          "+e._s(e.$t("payment.enums.paymentMethods."+n.key))+"\n        ")])])})),0):e._e(),e._v(" "),t("div",{staticClass:"mt:32 flex flex-center"},[t("RoundButton",{on:{click:function(t){e.$refs.form.reportValidity()&&(e.isConfirming=!0)}}},[e._v(e._s(e.$t("common.actions.submit")))])],1)],1):t("div",{staticClass:"p:96|32 round drop-shadow border flex flex-center w:100% bg:white"},[e._v("\n    "+e._s(e.$t("attendee.errors.registrationNotOpen").replace("{START_AT}",e.openDatetimeRange.start_at.toLocaleString()).replace("{END_AT}",e.openDatetimeRange.end_at.toLocaleString()))+"\n  ")]),e._v(" "),t("PaymentGateway",{ref:"paymentGateway"})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(239).default,RoundButton:n(378).default,RoundInput:n(390).default,Select:n(379).default,InputText:n(374).default,Field:n(380).default,Select:n(379).default,PaymentGateway:n(387).default})}}]);