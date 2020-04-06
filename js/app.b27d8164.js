(function(t){function e(e){for(var a,r,n=e[0],l=e[1],c=e[2],d=0,h=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,n=1;n<i.length;n++){var l=i[n];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("85ec"),s=i.n(a);s.a},"0eb1":function(t,e,i){"use strict";var a=i("c1e9"),s=i.n(a);s.a},2647:function(t,e,i){"use strict";var a=i("7061"),s=i.n(a);s.a},"26b9":function(t,e,i){"use strict";var a=i("a704"),s=i.n(a);s.a},"2d78":function(t,e,i){},"30bd":function(t,e,i){},"310d":function(t,e,i){"use strict";var a=i("2d78"),s=i.n(a);s.a},"349b":function(t,e,i){},"430c":function(t,e,i){"use strict";var a=i("30bd"),s=i.n(a);s.a},"467d":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=i("2f62"),o=i("bfa9"),r={userAuth:void 0,userId:void 0},n={storeUserAuth:function(t,e){t.commit("setUserAuth",e)},storeUserId:function(t,e){t.commit("setUserId",e)}},l={setUserAuth:function(t,e){t.userAuth=e},setUserId:function(t,e){t.userId=e}},c={getUserAuth:function(t){return void 0!==t.userAuth},getUserToken:function(t){return t.userAuth},getUserId:function(t){return t.userId}};a["default"].use(s["a"]);var u=new o["a"]({key:"vuex",storage:window.localStorage}),d=new s["a"].Store({state:r,actions:n,mutations:l,getters:c,plugins:[u.plugin]}),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("NavigationBar",{attrs:{userLoggedIn:this.userLoggedIn,dangerMapDisplayed:this.showDangerMap},on:{displayCheckIn:function(e){return t.displayCheckinForm()},displayHistory:function(e){return t.displayHistory()},toggleDangerMap:function(e){return t.toggleDangerMap()},displaySettings:function(e){return t.displaySettings()}}}),i("Welcome",{directives:[{name:"show",rawName:"v-show",value:!this.userLoggedIn&&!this.showDangerMap,expression:"!this.userLoggedIn && !this.showDangerMap"}]}),i("b-card",{directives:[{name:"show",rawName:"v-show",value:!this.userLoggedIn&&!this.showDangerMap,expression:"!this.userLoggedIn && !this.showDangerMap"}],attrs:{"no-body":"",id:"user-auth-actons"}},[i("b-tabs",{attrs:{card:""}},[i("b-tab",{ref:"loginTab",attrs:{title:"Login",id:"login-form-card"}},[i("LoginForm")],1),i("b-tab",{attrs:{title:"Register",id:"register-form-card"}},[i("RegisterForm",{on:{registrationComplete:function(e){return t.registrationComplete()}}})],1)],1)],1),i("Confidentiality",{directives:[{name:"show",rawName:"v-show",value:!this.userLoggedIn&&!this.showDangerMap,expression:"!this.userLoggedIn && !this.showDangerMap"}]}),i("CheckIn",{directives:[{name:"show",rawName:"v-show",value:this.userLoggedIn&&this.showCheckin,expression:"this.userLoggedIn && this.showCheckin"}],staticClass:"authed-user"}),i("CheckInHistory",{directives:[{name:"show",rawName:"v-show",value:this.userLoggedIn&&this.showHistory,expression:"this.userLoggedIn && this.showHistory"}],staticClass:"authed-user"}),i("RiskyHistory",{directives:[{name:"show",rawName:"v-show",value:this.showDangerMap,expression:"this.showDangerMap"}],staticClass:"authed-user"}),i("Settings",{directives:[{name:"show",rawName:"v-show",value:this.userLoggedIn&&this.showSettings,expression:"this.userLoggedIn && this.showSettings"}],staticClass:"authed-user"})],1)},p=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mb-5",attrs:{id:"nav-bar-container"}},[i("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[i("b-navbar-brand",{attrs:{href:"#"},on:{click:function(e){return t.$emit("displayCheckIn")}}},[t._v("Where Have I Been?")]),i("b-navbar-toggle",{attrs:{target:"nav-app-menu"}},[i("font-awesome-icon",{attrs:{icon:"bars"}})],1),i("b-collapse",{attrs:{"is-nav":"",id:"nav-app-menu"}},[i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-button",{staticClass:"ml-2 mr-2",attrs:{id:"covid-history-btn"},on:{click:function(e){return t.$emit("toggleDangerMap")}}},[t._v(" "+t._s(t.dangerMapDisplayed?"Hide":"Show")+" Report Map ")]),i("b-button",{directives:[{name:"show",rawName:"v-show",value:t.userLoggedIn,expression:"userLoggedIn"}],staticClass:"ml-2 mr-2",attrs:{id:"covid-report-btn",variant:"danger"},on:{click:function(e){return t.$bvModal.show("covid-modal")}}},[t._v(" I Have Symptoms ")]),i("b-nav-item-dropdown",{directives:[{name:"show",rawName:"v-show",value:t.userLoggedIn,expression:"userLoggedIn"}],attrs:{text:"Account",right:""}},[i("b-dropdown-item",{on:{click:function(e){return t.$emit("displayHistory")}}},[t._v("History")]),i("b-dropdown-item",{on:{click:function(e){return t.$emit("displaySettings")}}},[t._v("Settings")]),i("b-dropdown-item",{on:{click:t.onUserLogout}},[t._v("Log Out")])],1)],1)],1)],1),i("b-modal",{ref:"covid-modal",attrs:{id:"covid-modal","hide-header":"","hide-footer":""}},[i("CovidModal",{on:{confirmReport:function(e){return t.confirmReport()},cancelReport:function(e){return t.cancelReport()}}})],1)],1)},f=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"covid-modal-container"}},[i("h2",[t._v("COVID-19 Reporting")]),i("h3",[t._v("The Symptoms")]),t._m(0),i("h3",[t._v("What you need to do now:")]),t._m(1),i("h3",[t._v("What we will do:")]),t._m(2),i("div",{attrs:{id:"modal-btn"}},[i("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.cancelReport()}}},[t._v("Cancel")]),i("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.confirmReport()}}},[t._v("Confirm")])],1)])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Fever / High Temperature")]),i("li",[t._v("New, continuous dry cough")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Confirm or cancel your report with the buttons at the bottom")]),i("li",[t._v("Self-Isolate immediately")]),i("li",[t._v("Check your check in history to make sure it is up-to-date")]),i("li",[t._v("Check local government advice and guidelines")]),i("li",[t._v("Get well soon")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Anonymously alert other users who may have crossed paths with you in the last 14 days")])])}],b={name:"CovidModal",methods:{confirmReport:function(){this.$emit("confirmReport")},cancelReport:function(){this.$emit("cancelReport")}}},w=b,y=(i("2647"),i("2877")),k=Object(y["a"])(w,v,g,!1,null,"4087d350",null),_=k.exports,C={name:"NavigationBar",components:{CovidModal:_},props:["userLoggedIn","dangerMapDisplayed"],data:function(){return{expanded:!1,api:{endpoint:"https://wherehaveibeen.azurewebsites.net",responses:[],errors:[]}}},methods:{onUserLogout:function(t){t.preventDefault(),this.$store.dispatch("storeUserAuth",void 0),this.$store.dispatch("storeUserId",void 0)},confirmReport:function(){var t=this;this.$refs["covid-modal"].hide();var e=this.$store.getters.getUserToken,i={userId:this.$store.getters.getUserId,IsAtRisk:!0};this.$http.post(this.api.endpoint+"/membership/corona",i,{headers:{Authorization:"Bearer "+e}}).then((function(e){t.api.responses.push(e)})).catch((function(e){t.api.errors.push(e)}))},cancelReport:function(){this.$refs["covid-modal"].hide()}}},I=C,A=(i("6cb8"),Object(y["a"])(I,m,f,!1,null,"46fd17de",null)),S=A.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"login-form-container"}},[i("b-alert",{attrs:{variant:"danger"},model:{value:t.alerts.invalidCredentials,callback:function(e){t.$set(t.alerts,"invalidCredentials",e)},expression:"alerts.invalidCredentials"}},[t._v(" The email / password are incorrect ")]),i("b-form",{on:{submit:t.onLoginSubmit}},[i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("b-form-group",{attrs:{id:"email-input-group",label:"Email Address:","label-for":"email-input"}},[i("b-form-input",{attrs:{id:"email-input",type:"email",required:"",autocomplete:"username",state:t.fieldState.login},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("b-form-group",{attrs:{id:"password-input-group",label:"Password:","label-for":"password-input"}},[i("b-form-input",{attrs:{id:"password-input",type:"password",required:"",autocomplete:"current-password",state:t.fieldState.login},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1)],1)],1),i("b-button",{staticClass:"login-form-btn",attrs:{id:"login-form-submit-btn",variant:"primary",type:"submit"}},[t._v("Login")])],1)],1)},x=[],$={name:"LoginForm",data:function(){return{api:{endpoint:"https://wherehaveibeen.azurewebsites.net",errors:[]},alerts:{invalidCredentials:!1},fieldState:{login:null},form:{email:"",password:""}}},methods:{clearFields:function(){this.form.email="",this.form.password=""},clearAlerts:function(){this.alerts.invalidCredentials=!1,this.fieldState.login=null},onLoginSubmit:function(t){var e=this;t.preventDefault(),this.clearAlerts();var i={Username:this.form.email,Password:this.form.password};this.$http.post(this.api.endpoint+"/membership/login",i).then((function(t){e.clearFields(),e.clearAlerts(),e.$store.dispatch("storeUserAuth",t.data.token),e.$store.dispatch("storeUserId",t.data.userId)})).catch((function(t){e.alerts.invalidCredentials=!0,e.fieldState.login=!1,e.api.errors.push(t)}))}}},D=$,M=(i("c0e3"),Object(y["a"])(D,P,x,!1,null,"0de3662c",null)),N=M.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"register-form-container"}},[i("b-alert",{attrs:{variant:"danger"},model:{value:t.validationAlerts.emailNotMatch,callback:function(e){t.$set(t.validationAlerts,"emailNotMatch",e)},expression:"validationAlerts.emailNotMatch"}},[t._v(" The emails do not match ")]),i("b-alert",{attrs:{variant:"danger"},model:{value:t.validationAlerts.emailNotUnique,callback:function(e){t.$set(t.validationAlerts,"emailNotUnique",e)},expression:"validationAlerts.emailNotUnique"}},[t._v(" This email is already registered ")]),i("b-alert",{attrs:{variant:"danger"},model:{value:t.validationAlerts.passwordNotMatch,callback:function(e){t.$set(t.validationAlerts,"passwordNotMatch",e)},expression:"validationAlerts.passwordNotMatch"}},[t._v(" The passwords do not match ")]),i("b-alert",{attrs:{variant:"danger"},model:{value:t.validationAlerts.policyNotChecked,callback:function(e){t.$set(t.validationAlerts,"policyNotChecked",e)},expression:"validationAlerts.policyNotChecked"}},[t._v(" You must agree to the Privacy Policy ")]),i("b-form",{on:{submit:t.onRegisterSubmit}},[i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{col:"",cols:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[i("b-form-group",{attrs:{id:"new-email-input-group",label:"Email Address:","label-for":"new-email-input"}},[i("b-form-input",{attrs:{id:"new-email-input",type:"email",required:"",autocomplete:"username",state:t.fieldStatus.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),i("b-col",{attrs:{col:"",cols:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[i("b-form-group",{attrs:{id:"email-validate-input-group",label:"Verify Email Address:","label-for":"email-validate-input"}},[i("b-form-input",{attrs:{id:"email-validate-input",type:"email",required:"",state:t.fieldStatus.email},model:{value:t.form.emailVerify,callback:function(e){t.$set(t.form,"emailVerify",e)},expression:"form.emailVerify"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{col:"",cols:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[i("b-form-group",{attrs:{id:"new-password-input-group",label:"Password:","label-for":"new-password-input"}},[i("b-form-input",{attrs:{id:"new-password-input",type:"password",required:"",autocomplete:"new-password",state:t.fieldStatus.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),i("b-col",{attrs:{col:"",cols:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[i("b-form-group",{attrs:{id:"password-validate-input-group",label:"Verify Password:","label-for":"password-validate-input"}},[i("b-form-input",{attrs:{id:"password-validate-input",type:"password",required:"",state:t.fieldStatus.password},model:{value:t.form.passwordVerify,callback:function(e){t.$set(t.form,"passwordVerify",e)},expression:"form.passwordVerify"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("b-form-checkbox",{attrs:{id:"priv-pol-check",name:"priv-pol-check",value:"true","unchecked-value":"false",state:t.fieldStatus.policy},model:{value:t.form.privacyPolicy,callback:function(e){t.$set(t.form,"privacyPolicy",e)},expression:"form.privacyPolicy"}},[t._v(" I accept the "),i("a",{attrs:{href:"/privacyPolicy.html",target:"_blank"}},[t._v("Privacy Policy")])])],1)],1)],1),i("b-button",{staticClass:"register-form-btn",attrs:{id:"register-form-submit-btn",variant:"primary",type:"submit"}},[t._v("Register")])],1)],1)},T=[],L={name:"RegisterForm",data:function(){return{api:{endpoint:"https://wherehaveibeen.azurewebsites.net",responses:[],errors:[]},validationAlerts:{emailNotMatch:!1,emailNotUnique:!1,passwordNotMatch:!1,policyNotChecked:!1},fieldStatus:{email:null,password:null,policy:null},form:{email:"",emailVerify:"",password:"",passwordVerify:"",privacyPolicy:!1}}},methods:{clearFields:function(){this.form.email="",this.form.emailVerify="",this.form.password="",this.form.passwordVerify="",this.form.privacyPolicy=!1},clearAlerts:function(){this.validationAlerts.emailNotMatch=!1,this.validationAlerts.emailNotUnique=!1,this.validationAlerts.passwordNotMatch=!1,this.validationAlerts.policyNotChecked=!1,this.fieldStatus.email=null,this.fieldStatus.password=null,this.fieldStatus.policy=null},onRegisterSubmit:function(t){var e=this;if(t.preventDefault(),this.clearAlerts(),this.form.email!==this.form.emailVerify)this.clearAlerts(),this.fieldStatus.email=!1,this.validationAlerts.emailNotMatch=!0;else if(this.form.password!==this.form.passwordVerify)this.fieldStatus.password=!1,this.validationAlerts.passwordNotMatch=!0;else if(this.form.privacyPolicy&&"false"!==this.form.privacyPolicy){var i={Username:this.form.email,Email:this.form.email,Password:this.form.password};this.$http.post(this.api.endpoint+"/membership",i).then((function(t){e.api.responses.push(t),e.clearFields(),e.clearAlerts(),e.$emit("registrationComplete")})).catch((function(t){e.fieldStatus.email=!1,e.validationAlerts.emailNotUnique=!0,e.api.errors.push(t)}))}else this.fieldStatus.policy=!1,this.validationAlerts.policyNotChecked=!0}}},R=L,O=(i("0eb1"),Object(y["a"])(R,U,T,!1,null,"0cdc8619",null)),H=O.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"check-in-container"}},[i("h2",[t._v("Where did you go today?")]),i("gmap-autocomplete",{ref:"autocomplete",staticStyle:{width:"75%"},attrs:{placeholder:"Search for a place","select-first-on-enter":!0},on:{place_changed:t.setPlace}}),i("span",{attrs:{id:"disabled-btn-wrapper"}},[i("b-button",{directives:[{name:"show",rawName:"v-show",value:!this.locatingUser,expression:"!this.locatingUser"}],staticClass:"ml-3",attrs:{disabled:!this.hideGeolocateToolTip,size:"sm",id:"user-location-btn"},on:{click:function(e){return t.geolocate()}}},[t._v("Find Me")])],1),i("b-tooltip",{attrs:{disabled:this.hideGeolocateToolTip,target:"disabled-btn-wrapper",placement:"top"}},[t._v(" Failed to find your location"),i("br"),t._v(" Please check your Browser's permissions ")]),i("b-button",{directives:[{name:"show",rawName:"v-show",value:this.locatingUser,expression:"this.locatingUser"}],staticClass:"ml-3",attrs:{disabled:"",size:"sm"}},[i("b-spinner",{attrs:{small:""}})],1),i("p"),this.currentPlace?i("div",{attrs:{id:"search-result"}},[i("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"6"}},[i("gmap-map",{ref:"map",staticStyle:{width:"100%",height:"500px"},attrs:{center:t.center,zoom:t.zoomLevel,options:t.mapOptions},on:{click:t.clickedOnMap}},[i("gmap-marker",{attrs:{position:t.center}})],1)],1),i("b-col",{attrs:{md:"6"}},[i("b-card-body",{staticClass:"d-flex align-items-start flex-column bd-highlight",staticStyle:{height:"100%"}},[i("div",{staticClass:"place-container"},[this.currentPlace.name?i("div",{staticClass:"title"},[t._v(" "+t._s(this.currentPlace.name)+" ")]):t._e(),this.currentPlace.name?t._e():i("div",[i("div",{staticClass:"title"},[t._v(" You chose an unknown place ")]),i("label",{attrs:{for:"newPlaceName"}},[t._v("Name this place:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.unknownPlaceName,expression:"unknownPlaceName"}],attrs:{id:"newPlaceName",type:"text"},domProps:{value:t.unknownPlaceName},on:{input:function(e){e.target.composing||(t.unknownPlaceName=e.target.value)}}})]),i("div",{staticClass:"bd-highlight"},[t._v(" "+t._s(this.currentPlace.formatted_address)+" ")])]),i("div",{staticClass:"mb-auto bd-highlight"},[i("b-row",{attrs:{id:"datetime-pickers"}},[i("b-col",{attrs:{md:"6"}},[i("b-form-datepicker",{staticClass:"mb-3",attrs:{id:"checkin-datepicker",placeholder:t.formattedDate(),"date-format-options":{year:"numeric",month:"numeric",day:"numeric"},"today-button":""},model:{value:t.checkInDate,callback:function(e){t.checkInDate=e},expression:"checkInDate"}})],1),i("b-col",{attrs:{md:"6"}},[i("b-form-timepicker",{staticClass:"mb-3",attrs:{id:"checkin-timepicker",placeholder:t.formattedTime(),"now-button":""},model:{value:t.checkInTime,callback:function(e){t.checkInTime=e},expression:"checkInTime"}})],1)],1)],1),i("div",{staticClass:"bd-highlight"},[i("b-row",{staticClass:"align-self-end",attrs:{id:"submit-alert"}},[i("b-alert",{attrs:{dismissible:"",variant:"success"},model:{value:t.showSuccessAlert,callback:function(e){t.showSuccessAlert=e},expression:"showSuccessAlert"}},[t._v(" This location has been stored ")]),i("b-alert",{attrs:{dismissible:"",variant:"danger"},model:{value:t.showFailureAlert,callback:function(e){t.showFailureAlert=e},expression:"showFailureAlert"}},[t._v(" Failed to store this Check In."),i("br"),t._v(" Please refresh or try again later ")])],1),i("b-row",{staticClass:"align-self-end",attrs:{id:"submit-btn"}},[i("b-button",{on:{click:function(e){return t.onCheckInSubmit()}}},[t._v("Check In Here")])],1)],1)])],1)],1)],1)],1):t._e()],1)},z=[],E=(i("a15b"),i("d81d"),i("b0c0"),i("d3b7"),i("25f0"),i("4d90"),i("755e")),V={name:"CheckIn",data:function(){return{api:{endpoint:"https://wherehaveibeen.azurewebsites.net",responses:[],errors:[]},mapOptions:{mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1,zoomControl:!1},center:{lat:0,lng:0},zoomLevel:12,autoCompleteQuery:"",currentPlace:null,unknownPlaceName:null,locatingUser:!1,checkInDate:this.formattedDate(),checkInTime:this.formattedTime(),showSuccessAlert:!1,showFailureAlert:!1,hideGeolocateToolTip:!0}},mounted:function(){this.geolocate(),this.timeoutGeoLocate()},computed:{google:E["gmapApi"],userAuth:function(){return this.$store.getters.getUserAuth}},watch:{userAuth:function(){this.clearMapQuery()}},methods:{clearMapQuery:function(){this.currentPlace=null,this.$refs["autocomplete"].$el.value=""},formattedDate:function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,"0")+"-"+t.getDate().toString().padStart(2,"0")},formattedTime:function(){var t=new Date;return t.getHours().toString().padStart(2,"0")+":"+t.getMinutes().toString().padStart(2,"0")+":"+t.getSeconds().toString().padStart(2,"0")},getPosition:function(t){return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},setPlace:function(t){this.currentPlace=t,this.zoomLevel=16,this.center.lat=this.currentPlace.geometry.location.lat(),this.center.lng=this.currentPlace.geometry.location.lng()},timeoutGeoLocate:function(){var t=this;this.geolocate(),setTimeout((function(){t.locatingUser&&(t.locatingUser=!1,t.hideGeolocateToolTip=!1)}),1e4)},geolocate:function(){var t=this;this.locatingUser=!0,navigator.geolocation.getCurrentPosition((function(e){t.zoomLevel=12,t.center={lat:e.coords.latitude,lng:e.coords.longitude},t.currentPlace={name:"Your location",lat:e.coords.latitude,lng:e.coords.longitude},t.locatingUser=!1}))},clickedOnMap:function(t){var e=this;this.unknownPlaceName=null,this.center.lat=t.latLng.lat(),this.center.lng=t.latLng.lng(),t.placeId?this.$refs.map.$mapPromise.then((function(i){var a={placeId:t.placeId,fields:["place_id","name","formatted_address"]},s=new e.google.maps.places.PlacesService(i);s.getDetails(a,(function(t){return e.currentPlace=t}))})):this.currentPlace={}},onCheckInSubmit:function(){var t=this,e=this.$store.getters.getUserToken,i=this.currentPlace&&this.currentPlace.place_id,a=this.currentPlace&&this.currentPlace.name,s=this.currentPlace&&this.currentPlace.formatted_address,o={userId:this.$store.getters.getUserId,latitude:this.center.lat,longitude:this.center.lng,placeId:i||"",placeName:a||this.unknownPlaceName||"",address:s||"",checkin:[this.checkInDate,this.checkInTime].join("T")};this.$http.post(this.api.endpoint+"/visit",o,{headers:{Authorization:"Bearer "+e}}).then((function(e){t.showFailureAlert=!1,t.showSuccessAlert=!0,setTimeout((function(){t.showSuccessAlert=!1}),3e3),t.api.responses.push(e)})).catch((function(e){t.showSuccessAlert=!1,t.showFailureAlert=!0,setTimeout((function(){t.showFailureAlert=!1}),3e3),t.api.errors.push(e)}))}}},j=V,B=(i("430c"),Object(y["a"])(j,F,z,!1,null,"a995091e",null)),G=B.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"checkin-history-container"}},[i("div",{staticClass:"d-flex mb-4",attrs:{id:"title-bar"}},[t._m(0),i("div",{staticClass:"ml-auto d-flex justify-content-end",attrs:{id:"title-text"}},[i("b-button",{attrs:{id:"refresh-button"},on:{click:function(e){return t.loadHistory()}}},[t._v("Refresh")])],1)]),t._l(this.locations,(function(e){return i("b-card",{key:e.VisitId,staticClass:"location-card overflow-hidden mb-2",attrs:{title:e.Address,"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"6"}},[i("gmap-map",{staticStyle:{width:"100%",height:"200px"},attrs:{center:t.findCenter(e),zoom:t.zoomLevel,options:t.mapOptions}},[i("gmap-marker",{attrs:{position:t.findCenter(e)}})],1)],1),i("b-col",{attrs:{md:"6"}},[i("b-card-body",[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{staticClass:"history-text"},[i("h4",[t._v(t._s(e.PlaceName))])]),i("b-col",{staticClass:"risk-label",attrs:{sm:"3"}},[e.AtRisk?i("span",{staticClass:"at-risk"},[i("font-awesome-icon",{attrs:{icon:"biohazard"}}),t._v(" At Risk ")],1):t._e(),t.potentialRisk(e)?i("span",{staticClass:"risky"},[i("font-awesome-icon",{attrs:{icon:"virus"}}),t._v(" Potential Risk ")],1):t._e(),e.AtRisk||0!==e.RiskyInteractions?t._e():i("span",[i("font-awesome-icon",{attrs:{icon:"hand-sparkles"}}),t._v(" Low Risk ")],1)])],1),i("div",{staticClass:"history-text"},[t._v(t._s(e.Address))]),i("div",{staticClass:"history-text"},[t._v(t._s(t.dateFormatter(e.CheckIn)))]),t.potentialRisk(e)?i("div",{staticClass:"d-flex flex-column align-content-end"},[i("div",{staticClass:"d-flex flex-row-reverse"},[i("b-button",{staticClass:"ml-1 mr-1",attrs:{variant:"link",id:"covid-interaction-btn"},on:{click:function(i){return t.toggleShowRiskyEncounters(e)}}},[t._v(" "+t._s(e.showRiskyEncounters?"Hide":"Show")+" "+t._s(e.RiskyInteractions)+" risky encounter"+t._s(e.RiskyInteractions>1?"s":"")+" ")])],1)]):t._e(),e.showRiskyEncounters?i("div",{staticClass:"risky-text"},t._l(e.details,(function(e){return i("span",{key:e.VisitId},[i("div",{staticClass:"label"},[t._v("Someone with symptoms was here at:")]),i("div",{staticClass:"text"},[i("div",{staticClass:"label"},[t._v("Checked in:")]),t._v(t._s(t.dateFormatter(e.checkIn)))]),i("div",{staticClass:"text"},[i("div",{staticClass:"label"},[t._v("Checked out:")]),t._v(t._s(t.dateFormatter(e.checkOut)))]),i("div",{staticClass:"text"},[t._v(t._s(t.formatDistance(e)))])])})),0):t._e()],1)],1)],1)],1)}))],2)},Y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex justify-content-center",attrs:{id:"title-text"}},[i("h2",[t._v("Check-In History")])])}],q={name:"CheckInHistory",data:function(){return{api:{endpoint:"https://wherehaveibeen.azurewebsites.net",errors:[]},mapOptions:{mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1,zoomControl:!1},locations:[],zoomLevel:14}},computed:{currentUserId:function(){return this.$store.getters.getUserId}},watch:{currentUserId:function(){this.loadHistory()}},mounted:function(){this.loadHistory()},methods:{loadHistory:function(){var t=this,e=this.currentUserId;void 0!==e&&this.$http.get(this.api.endpoint+"/visit?userId="+e).then((function(e){t.locations=e.data.reverse()})).catch((function(e){t.api.errors.push(e)}))},findCenter:function(t){return{lat:t.Latitude,lng:t.Longitude}},dateFormatter:function(t){return new Date(Date.parse(t))},getDetails:function(t){var e=this;t.data&&t.data.length>0||this.$http.get(this.api.endpoint+"/visit/risk?visitId="+t.VisitId).then((function(i){i.data&&i.data.length>0&&e.$set(t,"details",i.data)})).catch((function(t){e.api.errors.push(t)}))},toggleShowRiskyEncounters:function(t){var e=!t.showRiskyEncounters;this.$set(t,"showRiskyEncounters",e),e&&this.getDetails(t)},potentialRisk:function(t){return!t.AtRisk&&t.RiskyInteractions>0},formatDistance:function(t){return t.distanceInKm>0?"Approximately ".concat(t.distanceInKm," metres away"):""}}},Q=q,J=(i("b2b9"),Object(y["a"])(Q,W,Y,!1,null,"7d5292e9",null)),K=J.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",[i("h1",[t._v("Where Have I Been?")]),i("p",[t._v(" Help stop the spread of COVID-19 by checking-in to locations you've visited in the recent past. "),i("br"),t._v(" If you've contracted COVID-19 symptoms we will let others know that they are at risk if they visited the same locations as you. "),i("br"),t._v(" Let's work together to stop the spread! ")]),i("p",[t._v(" Login or register for an account to get started. ")])])},Z=[],tt={},et=Object(y["a"])(tt,X,Z,!1,null,null,null),it=et.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",[i("p",[t._v(" Your information will remain private and confidential. Read more in our "),i("a",{attrs:{href:"/privacyPolicy.html",target:"_blank"}},[t._v("Privacy Policy")]),t._v(". ")])])},st=[],ot={},rt=Object(y["a"])(ot,at,st,!1,null,null,null),nt=rt.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"settings-container"}},[i("h2",[t._v("Account Settings")]),i("b-card",{staticClass:"account-setting-card",attrs:{title:"Clear your history"}},[i("b-card-body",[t._v(" This section will remove all the check ins from your account."),i("br"),t._v(" We don't like to see this used as we rely on check in data to power Where Have I Been? "),i("p"),t._v(" But if you still want to, click away "),i("p"),i("b-button",{attrs:{variant:"outline-dark"},on:{click:function(e){return t.onHistoryDelete()}}},[t._v("Clear My History")])],1)],1),i("b-card",{staticClass:"account-setting-card",attrs:{title:"Delete your account"}},[i("b-card-body",[t._v(" This section will clear all the information about you and your check ins and remove your account."),i("br"),t._v(" We'd love to keep you on board and help keep you safe, which will require an account. "),i("p"),t._v(" But if you still want to, click away - there's nothing stopping you making a new one! "),i("p"),i("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.onAccountDelete()}}},[t._v("Delete My Account")])],1)],1)],1)},ct=[],ut={name:"Settings",data:function(){return{api:{endpoint:"https://wherehaveibeen.azurewebsites.net",responses:[],errors:[]}}},methods:{onHistoryDelete:function(){var t=this;this.$bvModal.msgBoxConfirm("Are you sure you want to delete your history?",{title:"Clear Your History",okVariant:"dark",okTitle:"Yes",cancelVariant:"outline-dark",cancelTitle:"No",hideHeaderClose:!1,centered:!0}).then((function(e){if(e){var i={},a=t.$store.getters.getUserId,s=t.$store.getters.getUserToken;t.$http.post(t.api.endpoint+"/visit/delete/"+a,i,{headers:{Authorization:"Bearer "+s}}).then((function(e){t.api.reponses.push(e)})).catch((function(e){t.api.errors.push(e)}))}})).catch((function(e){t.api.errors.push(e)}))},onAccountDelete:function(){var t=this;this.$bvModal.msgBoxConfirm("Are you sure you want to delete your account?",{title:"Delete Your Account",okVariant:"danger",okTitle:"Yes",cancelVariant:"outline-danger",cancelTitle:"No",hideHeaderClose:!1,centered:!0}).then((function(e){if(e){var i={},a=t.$store.getters.getUserId,s=t.$store.getters.getUserToken;t.$http.post(t.api.endpoint+"/membership/delete/"+a,i,{headers:{Authorization:"Bearer "+s}}).then((function(e){t.$store.dispatch("storeUserAuth",void 0),t.$store.dispatch("storeUserId",void 0),t.api.reponses.push(e)})).catch((function(e){t.api.errors.push(e)}))}})).catch((function(e){t.api.errors.push(e)}))}}},dt=ut,ht=(i("26b9"),Object(y["a"])(dt,lt,ct,!1,null,"70214a5e",null)),pt=ht.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"danger-map-container"}},[i("h2",[t._v("Locations at risk")]),i("gmap-autocomplete",{ref:"autocomplete",staticStyle:{width:"75%"},attrs:{placeholder:"Search for a place","select-first-on-enter":!0},on:{place_changed:t.setPlace}}),i("span",{attrs:{id:"disabled-btn-wrapper"}},[i("b-button",{directives:[{name:"show",rawName:"v-show",value:!this.locatingUser,expression:"!this.locatingUser"}],staticClass:"ml-3",attrs:{disabled:!this.hideGeolocateToolTip,size:"sm",id:"user-location-btn"},on:{click:function(e){return t.timeoutGeoLocate()}}},[t._v("Find Me")])],1),i("b-tooltip",{attrs:{disabled:this.hideGeolocateToolTip,target:"disabled-btn-wrapper",placement:"top"}},[t._v(" Failed to find your location"),i("br"),t._v(" Please check your Browser's permissions ")]),i("b-button",{directives:[{name:"show",rawName:"v-show",value:this.locatingUser,expression:"this.locatingUser"}],staticClass:"ml-3",attrs:{disabled:"",size:"sm"}},[i("b-spinner",{attrs:{small:""}})],1),i("p"),this.currentPlace?i("div",{attrs:{id:"search-result"}},[i("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{staticStyle:{width:"90%"}},[i("gmap-map",{staticStyle:{width:"100%",height:"500px"},attrs:{center:t.center,zoom:t.zoomLevel,options:t.mapOptions},on:{click:t.clickedOnMap}},t._l(t.coords,(function(e,a){return i("gmap-marker",{key:a,attrs:{clickable:!0,position:{lat:e.latitude,lng:e.longitude}},on:{click:function(t){e.infoDisplayed=!0}}},[i("gmap-info-window",{attrs:{opened:e.infoDisplayed},on:{closeclick:function(t){e.infoDisplayed=!1}}},[e.placeName?i("p",[i("b",[t._v(t._s(e.placeName))])]):t._e(),i("li",[t._v(t._s(e.address))]),i("li",[t._v("Checked In: "+t._s(e.checkIn))]),i("li",[t._v("Checked Out: "+t._s(e.checkOut))])])],1)})),1)],1)],1)],1)],1):t._e()],1)},ft=[],vt=(i("4160"),i("159b"),{name:"RiskyHistory",data:function(){return{api:{endpoint:"https://wherehaveibeen.azurewebsites.net",responses:[],errors:[]},mapOptions:{mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1,zoomControl:!1},center:{lat:0,lng:0},zoomLevel:12,currentPlace:null,locatingUser:!1,coords:[],hideGeolocateToolTip:!0}},computed:{userAuth:function(){return this.$store.getters.getUserAuth}},watch:{userAuth:function(){this.clearMapQuery()}},methods:{clearMapQuery:function(){this.currentPlace=null,this.$refs["autocomplete"].$el.value=""},getPosition:function(t){return{lat:parseFloat(t.lat),lng:parseFloat(t.lng)}},setPlace:function(t){this.currentPlace=t,this.zoomLevel=16,this.center.lat=this.currentPlace.geometry.location.lat(),this.center.lng=this.currentPlace.geometry.location.lng(),this.onGetCoords(this.center.lat,this.center.lng)},timeoutGeoLocate:function(){var t=this;this.geolocate(),setTimeout((function(){t.locatingUser&&(t.locatingUser=!1,t.hideGeolocateToolTip=!1)}),1e4)},geolocate:function(){var t=this;this.locatingUser=!0,navigator.geolocation.getCurrentPosition((function(e){t.zoomLevel=12,t.center={lat:e.coords.latitude,lng:e.coords.longitude},t.currentPlace={name:"Your location",lat:e.coords.latitude,lng:e.coords.longitude},t.locatingUser=!1}))},clickedOnMap:function(t){this.currentPlace={placeId:t.placeId,name:"",formatted_address:""},this.center.lat=t.latLng.lat(),this.center.lng=t.latLng.lng(),this.onGetCoords(this.center.lat,this.center.lng)},openInfoWindowTemplate:function(t){this.setInfoWindowTemplate(t),this.infoWindow.position=this.getCoordinates(t),this.infoWindow.open=!0},onGetCoords:function(t,e){var i=this;this.$http.get(this.api.endpoint+"/risk?lat="+t+"&lng="+e).then((function(t){t&&t.data&&(i.coords.length=0,t.data.forEach((function(t){t.infoDisplayed=!0,i.coords.push(t)})))})).catch((function(t){i.showSuccessAlert=!1,i.showFailureAlert=!0,i.api.errors.push(t)}))}}}),gt=vt,bt=(i("310d"),Object(y["a"])(gt,mt,ft,!1,null,"6881d308",null)),wt=bt.exports,yt={name:"App",components:{NavigationBar:S,LoginForm:N,RegisterForm:H,CheckIn:G,CheckInHistory:K,RiskyHistory:wt,Welcome:it,Confidentiality:nt,Settings:pt},data:function(){return{showCheckin:!0,showHistory:!1,showSettings:!1,showDangerMap:!1}},computed:{userLoggedIn:function(){return this.$store.getters.getUserAuth}},watch:{userLoggedIn:function(){this.hideDangerMapOnAuth()}},methods:{hideDangerMapOnAuth:function(){this.showDangerMap=!1,this.displayCheckinForm()},registrationComplete:function(){this.$refs.loginTab.activate()},clearComponents:function(){this.showCheckin=!1,this.showHistory=!1,this.showSettings=!1},displayCheckinForm:function(){this.clearComponents(),this.showCheckin=!0},displayHistory:function(){this.clearComponents(),this.showHistory=!0},toggleDangerMap:function(){this.clearComponents(),this.showDangerMap=!this.showDangerMap,this.showCheckin=!this.showDangerMap},displaySettings:function(){this.clearComponents(),this.showSettings=!0}}},kt=yt,_t=(i("034f"),Object(y["a"])(kt,h,p,!1,null,null,null)),Ct=_t.exports,It=i("bc3a"),At=i.n(It),St=i("5f5b"),Pt=i("ecee"),xt=i("c074"),$t=i("ad3d");i("f9e3"),i("2dd8");a["default"].config.productionTip=!1,a["default"].prototype.$http=At.a,Pt["c"].add(xt["a"]),Pt["c"].add(xt["b"]),Pt["c"].add(xt["c"]),a["default"].component("font-awesome-icon",$t["a"]),a["default"].use(St["a"]),a["default"].use(E,{load:{key:"AIzaSyA0H6075D1zC22LDpYvYY_DEPhEYSantPM",libraries:"places"}}),new a["default"]({store:d,render:function(t){return t(Ct)}}).$mount("#app")},6415:function(t,e,i){},"6cb8":function(t,e,i){"use strict";var a=i("349b"),s=i.n(a);s.a},7061:function(t,e,i){},"85ec":function(t,e,i){},a704:function(t,e,i){},b2b9:function(t,e,i){"use strict";var a=i("467d"),s=i.n(a);s.a},c0e3:function(t,e,i){"use strict";var a=i("6415"),s=i.n(a);s.a},c1e9:function(t,e,i){}});
//# sourceMappingURL=app.b27d8164.js.map