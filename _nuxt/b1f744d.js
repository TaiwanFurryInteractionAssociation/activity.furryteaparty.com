(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{452:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(25),n(133)),c={layout:"auth",data:function(){return{loading:!0}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.query,r=t.$route.params.provider,e.next=4,t.$axios("/api/auth/oauth/"+r+"/callback",{params:n}).then((function(e){o.a.showSnackbar({message:t.$t("auth.messages.loggedin"),colorType:"positive"}),t.$store.commit("auth/setAccount",e.data.account),t.$router.push(t.localePath("/"))})).catch((function(e){o.a.showRequestError(e),t.$router.push(t.localePath("/auth/login"))}));case 4:case"end":return e.stop()}}),e)})))()}},l=n(38),component=Object(l.a)(c,(function(){var t=this._self._c;return t("div",[t("Loading",{attrs:{value:this.loading}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:n(239).default})}}]);