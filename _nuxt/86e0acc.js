(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{379:function(e,t,r){"use strict";r.r(t);var n=r(132),l=r.n(n),o={props:{field:{type:String,default:""},value:{default:""},error:{default:null},required:{type:Boolean,default:!1}},data:function(){return{COLORS:l.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=r(38),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("select",{style:e.computedStyle,attrs:{required:e.required},domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Select:r(379).default})}}]);