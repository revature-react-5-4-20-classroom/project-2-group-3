(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{52:function(e,t,a){e.exports=a(89)},57:function(e,t,a){},58:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),o=(a(57),a(16)),c=a(6),i=a(7),u=a(9),m=a(8),p=(a(58),a(11)),h=a(15),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null))}}]),a}(r.a.Component),v=a(10),f=a.n(v),E=a(13),b=a(49),g=a(46),O=a.n(g),y=a(24),w=a(47),j=function e(t,a,n,r,l,s,o,i,u,m,p){Object(c.a)(this,e),this.patientId=void 0,this.firstName=void 0,this.lastName=void 0,this.gender=void 0,this.username=void 0,this.password=void 0,this.birthDate=void 0,this.address=void 0,this.phone=void 0,this.email=void 0,this.lastRecord=void 0,this.patientId=t,this.firstName=a,this.lastName=n,this.gender=r,this.username=l,this.password=s,this.birthDate=o,this.address=i,this.phone=u,this.email=m,this.lastRecord=p},N=function e(t,a,n,r,l,s,o,i){Object(c.a)(this,e),this.doctorId=void 0,this.firstName=void 0,this.lastName=void 0,this.speciality=void 0,this.username=void 0,this.password=void 0,this.department=void 0,this.appointments=void 0,this.doctorId=t,this.firstName=a,this.lastName=n,this.speciality=r,this.username=l,this.password=s,this.department=o,this.appointments=i},S=function e(t,a,n){Object(c.a)(this,e),this.id=void 0,this.departmentName=void 0,this.doctor=void 0,this.id=t,this.departmentName=a,this.doctor=n},D="REACT_LOGIN_PATIENT",k="REACT_LOGIN_DOCTOR",C=function(e){return{type:D,playload:{patient:e}}},x=function(e){return{type:k,playload:{doctor:e}}},U={patient:new j(0,"","","","","",0,"","",""),doctor:new N(0,"","","","","",new S(0,""))},T=Object(y.c)({loginUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:var a=t.playload.patient;return Object(o.a)(Object(o.a)({},e),{},{patient:a});case k:var n=t.playload.doctor;return Object(o.a)(Object(o.a)({},e),{},{doctor:n});default:return e}}}),A=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d)(Object(y.a)(w.a)),I=Object(y.e)(T,A),M=O.a.create({baseURL:"http://localhost:8080/"}),F=function(){var e=Object(E.a)(f.a.mark((function e(t,a){var n,r,l,s,o,c,i,u,m,p,h,d,v,E;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.post("/patients/login",{username:t,password:a});case 3:return n=e.sent,r=n.data,l=r.patientId,s=r.lastRecord,o=r.firstName,c=r.lastName,i=r.gender,u=r.username,m=r.password,p=r.birthDate,h=r.address,d=r.phone,v=r.email,E=new j(l,o,c,i,u,m,p,h,d,v,s),I.dispatch(C(E)),I.dispatch(x(new N(0,"","","","","",new S(0,"")))),e.abrupt("return",n);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),P=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("appointments/patient/".concat(t));case 3:if(!((a=e.sent).data<1)){e.next=8;break}throw new Error;case 8:return e.abrupt("return",a.data);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("departments/".concat(t,"/doctors"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(E.a)(f.a.mark((function e(t,a,n,r,l,s,o){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),0,e.next=5,M.post("/appointments",{id:0,details:t,dateSlot:a,timeSlot:n,doctor:r,patient:l,status:s,type:o});case 5:return c=e.sent,e.abrupt("return",c.data);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a,n,r,l,s,o){return e.apply(this,arguments)}}(),_=function(){var e=Object(E.a)(f.a.mark((function e(t,a,n,r,l,s,o,c,i){var u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.post("/patients",{patientId:0,physicalRecord:null,firstName:t,lastName:a,gender:n,username:r,password:l,birthDate:s,address:o,phone:c,email:i});case 3:u=e.sent,console.log(u.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,n,r,l,s,o,c,i){return e.apply(this,arguments)}}(),L=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("econtacts/patient/".concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(E.a)(f.a.mark((function e(t,a,n,r,l){var s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,0,e.next=4,M.post("/econtacts",{id:0,name:t,address:a,phone:n,relation:r,patientId:l});case 4:return s=e.sent,console.log(s),e.abrupt("return",s.data);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a,n,r,l){return e.apply(this,arguments)}}(),V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).verifyUser=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,F(n.state.username,n.state.password);case 4:a=e.sent,console.log(a),n.props.history.push("/patient/home"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),n.setUsername=function(e){var t=e.target.value;n.setState({username:t})},n.setPassword=function(e){var t=e.target.value;n.setState({password:t})},n.state={username:"",password:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row align-items-center justify-content-center ",style:{height:"80%"}},r.a.createElement("div",{className:"login-column"},r.a.createElement("form",{onSubmit:this.verifyUser,className:"form-signin "},r.a.createElement("h2",null," Please Sign In"),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",{className:"font-weight-bold"},"UserName:"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.username,onChange:this.setUsername,required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",{className:"font-weight-bold"},"Password:"),r.a.createElement("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.setPassword,required:!0}))),r.a.createElement(b.a,{color:"primary",className:"btn-block"},"Login"))))}}]),a}(r.a.Component),B=Object(h.f)(V),G=a(92),W=a(93),J=a(94),X=a(95),Y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G.a,{color:"light",light:!0,expand:"md"},r.a.createElement(W.a,{tabs:!0,className:"w-100"},r.a.createElement(J.a,null),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/patientlogin",className:"nav-link",activeClassName:"active"},"Patient")),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/doctorlogin",className:"nav-link",activeClassName:"active"},"Doctor")),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/home",className:"nav-link",activeClassName:"active"},"home")),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/createaccount",className:"nav-link",activeClassName:"active"},"Create Account")))))}}]),a}(r.a.Component),z=a(17),$=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).logoutUser=function(t){e.props.loginSavePatient(null),e.props.loginSaveDoctor(null),e.props.history.push("/home")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{color:"light",light:!0,expand:"md"},r.a.createElement(W.a,{tabs:!0,className:"w-100"},r.a.createElement(J.a,null),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/patient/home",className:"nav-link",activeClassName:"active"},"Home")),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/patient/appointments",className:"nav-link",activeClassName:"active"},"Appointments")),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/patient/newappointment",className:"nav-link",activeClassName:"active"},"New Appointment")),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/patient/record",className:"nav-link",activeClassName:"active"},"Record")),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/patient/emergency",className:"nav-link",activeClassName:"active"},"Emergency")),r.a.createElement(X.a,{className:"float-right",tag:function(){return r.a.createElement(b.a,{className:"float-right",onClick:e.logoutUser,color:"primary",outline:!0},"Logout")}}))))}}]),a}(r.a.Component),K={loginSavePatient:C,loginSaveDoctor:x},Q=Object(z.b)((function(e){return Object(o.a)({},e.loginUser)}),K)($),Z=Object(h.f)(Q),ee=a(100),te=a(101),ae=a(102),ne=a(96),re=a(97),le=a(98),se=a(99),oe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.changeView(n.props.timeSlot)},n.changeView=function(e){switch(e){case 1:n.setState({timeFromTo:"10-10:30 AM"});break;case 2:n.setState({timeFromTo:"10:30-11 AM"});break;case 3:n.setState({timeFromTo:"11-11:30 AM"});break;case 4:n.setState({timeFromTo:"11:30-12 PM"});break;case 5:n.setState({timeFromTo:"12-12:30 PM"});break;case 6:n.setState({timeFromTo:"12:30-1 PM"});break;case 7:n.setState({timeFromTo:"3-3:30 PM"});break;case 8:n.setState({timeFromTo:"3:30-4 PM"});break;case 9:n.setState({timeFromTo:"4-4:30 PM"});break;case 10:n.setState({timeFromTo:"4:30-5 PM"})}},n.state={timeFromTo:null},n}return Object(i.a)(a,[{key:"render",value:function(){return this.state.timeFromTo?r.a.createElement(r.a.Fragment,null,this.state.timeFromTo):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"none"))}}]),a}(r.a.Component),ce=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.setState({appoint:n.props.appointments})},n.state={appoint:null},n}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state.appoint),this.state.appoint?this.state.appoint.map((function(e){return r.a.createElement("div",{key:e.appointmentId},r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(se.a,null,"Appointment Id: ",e.appointmentId),r.a.createElement(se.a,null,"Details: ",e.details),r.a.createElement(se.a,null,"Date: ",e.dateSlot),r.a.createElement(se.a,null,"Time: ",r.a.createElement(oe,{timeSlot:e.timeSlot})),r.a.createElement(se.a,null,"Doctor: ",e.doctor.firstName," ",e.doctor.lastName),r.a.createElement(se.a,null,"Status: ",e.status.statusName),r.a.createElement(se.a,null,"Type: ",e.type.typeName)))))})):r.a.createElement("p",null)}}]),a}(r.a.Component),ie=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(n.props.patient.patientId),t=n.props.patient.patientId,e.next=5,P(t);case 5:(a=e.sent)&&(console.log(a),n.setState({appointment:a})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.state={appointment:null},n}return Object(i.a)(a,[{key:"render",value:function(){return this.state.appointment?r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,null,r.a.createElement(te.a,null,r.a.createElement(ae.a,null,r.a.createElement(ce,{appointments:this.state.appointment}))))):this.state.appointment?void 0:r.a.createElement("p",null)}}]),a}(r.a.Component),ue=Object(z.b)((function(e){return Object(o.a)({},e.loginUser)}),{})(ie),me=a(109),pe=a(110),he=a(108),de=a(50),ve=a(107),fe=a(112),Ee=a(103),be=a(104),ge=a(105),Oe=a(106),ye=function e(t,a){Object(c.a)(this,e),this.statusId=void 0,this.statusName=void 0,this.statusId=t,this.statusName=a},we=function e(t,a){Object(c.a)(this,e),this.typeId=void 0,this.typeName=void 0,this.typeId=t,this.typeName=a},je=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.props.timeslot&&n.setState({time:n.props.timeslot})},n.componentDidUpdate=function(e){e.timeslot!==n.props.timeslot&&n.setState({time:n.props.timeslot})},n.changeModal=function(){n.props.changeModal()},n.onChangesDetails=function(e){var t=e.target.value;n.setState({details:t})},n.onChangesType=function(e){var t=e.target.value;n.setState({type:t})},n.onSubmits=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,r,l,s,o,c,i,u,m;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state.details,r=n.props.dateslot,console.log(r),l=n.props.timeslot,s=n.props.doctor1,o=n.props.patient,c=new ye(1,"scheduled"),i=n.changeType(),u=new we(n.state.type,i),e.prev=10,e.next=13,q(a,r,l,s,o,c,u);case 13:m=e.sent,console.log(m),n.props.history.push("/patient/appointments"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(10),console.log(e.t0);case 21:n.changeModal();case 22:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(t){return e.apply(this,arguments)}}(),n.changeType=function(){var e="";switch(n.state.type){case 1:e="routine visit";break;case 2:e="office visit";break;case 3:e="return visit"}return e},n.state={details:"",type:1,time:null},n}return Object(i.a)(a,[{key:"render",value:function(){return this.state.time?r.a.createElement(fe.a,{isOpen:this.props.onDisplay},r.a.createElement(ee.a,null,r.a.createElement(Ee.a,{onSubmit:this.onSubmits},r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Details"),r.a.createElement(Oe.a,{type:"text",name:"details",value:this.state.details,onChange:this.onChangesDetails,required:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Date:"),r.a.createElement(Oe.a,{type:"text",value:this.props.dateslot||"",disabled:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"TimeSlot:"),this.props.timeslot),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Type:"),r.a.createElement(Oe.a,{type:"select",value:this.state.type,onChange:this.onChangesType,required:!0},r.a.createElement("option",{value:"1"},"Routine Visit"),r.a.createElement("option",{value:"2"},"Office Visit"),r.a.createElement("option",{value:"3"},"Return Visit"))),r.a.createElement(b.a,{type:"submit"},"Confirm"),r.a.createElement(b.a,{onClick:this.changeModal,className:"mt-1 mb-1 ml-1"},"Cancel")))):r.a.createElement("p",null,"dsfdfd")}}]),a}(r.a.Component),Ne={loginSavePatient:C,loginSaveDoctor:x},Se=Object(h.f)(je),De=Object(z.b)((function(e){return Object(o.a)({},e.loginUser)}),Ne)(Se),ke=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.makeApointments()},n.makeApointments=function(){var e=[1,2,3,4,5,6,7,8,9,10],t=[1,2,3,4,5,6,7,8,9,10],a=[1,2,3,4,5,6,7,8,9,10],r=new Date,l=Date.UTC(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate(),r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds()),s=function(){var e=new Date;console.log(e.getUTCDay());var t=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()),a=new Date(t),n=new Date(t),r=new Date(t);switch(e.getUTCDay()){case 3:a.setDate((new Date).getDate()+1),n.setDate((new Date).getDate()+2),r.setDate((new Date).getDate()+5);break;case 4:a.setDate((new Date).getDate()+1),n.setDate((new Date).getDate()+4),r.setDate((new Date).getDate()+5);break;case 5:a.setDate((new Date).getDate()+3),n.setDate((new Date).getDate()+4),r.setDate((new Date).getDate()+5);break;case 6:a.setDate((new Date).getDate()+2),n.setDate((new Date).getDate()+3),r.setDate((new Date).getDate()+4);break;default:a.setDate((new Date).getDate()+1),n.setDate((new Date).getDate()+2),r.setDate((new Date).getDate()+3)}return[a.toISOString().slice(0,10),n.toISOString().slice(0,10),r.toISOString().slice(0,10)]}(),o=Object(de.a)(s,3),c=o[0],i=o[1],u=o[2],m=(new Date,new Date(l).toISOString().slice(0,10)),p=n.props.doctor.appointments;p&&p.map((function(n){var r=n.dateSlot.toString().split("-"),l=new Date(Number(r[0]),Number(r[1])-1,Number(r[2])).toISOString().slice(0,10),s=n.timeSlot;return l>m&&(l===c&&(e=e.filter((function(e){return e!=s}))),l===i&&(t=t.filter((function(e){return e!=s}))),l===u&&(a=a.filter((function(e){return e!=s})))),0})),n.setState({tomorrow:e,dayAfterT:t,tomorrowDate:c,dayAfterDate:i,dayAfter3O:a,dayAfter3Date:u})},n.changeModal=function(e){n.setState({modal:!n.state.modal})},n.onClicks=function(e){var t=e.target.id,a=e.target.value;n.setState({timeslot:t,dateslot:a,modal:!n.state.modal})},n.state={tomorrow:null,dayAfterT:null,tomorrowDate:null,dayAfterDate:null,modal:!1,timeslot:null,dateslot:null,dayAfter3O:null,dayAfter3Date:null},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.state.tomorrow&&this.state.dayAfterT?r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,this.state.tomorrowDate),this.state.tomorrow.map((function(t){return r.a.createElement("td",{key:t},r.a.createElement(b.a,{id:t,onClick:e.onClicks,value:e.state.tomorrowDate},r.a.createElement(oe,{timeSlot:t})))}))),r.a.createElement("tr",null,r.a.createElement("th",null,this.state.dayAfterDate),this.state.dayAfterT.map((function(t){return r.a.createElement("td",{key:t},r.a.createElement(b.a,{id:t,onClick:e.onClicks,value:e.state.dayAfterDate},r.a.createElement(oe,{timeSlot:t})))}))),r.a.createElement("tr",null,r.a.createElement("th",null,this.state.dayAfter3Date),this.state.dayAfter3O.map((function(t){return r.a.createElement("td",{key:t},r.a.createElement(b.a,{id:t,onClick:e.onClicks,value:e.state.dayAfter3Date},r.a.createElement(oe,{timeSlot:t})))}))))),this.state.timeslot&&r.a.createElement(De,{onDisplay:this.state.modal,changeModal:this.changeModal,doctor1:this.props.doctor,timeslot:this.state.timeslot,dateslot:this.state.dateslot})):r.a.createElement("p",null,"Not")}}]),a}(r.a.Component),Ce=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggle=function(){var e=n.state.isOpen;n.setState({isOpen:!e})},n.state={isOpen:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{key:this.props.doctor.doctorId},r.a.createElement(ne.a,null,this.props.doctor.department.departmentName,r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(se.a,null,"Name: ",this.props.doctor.firstName," ",this.props.doctor.lastName),r.a.createElement(se.a,null,"Speciality: ",this.props.doctor.speciality)),r.a.createElement(b.a,{className:" mt-1 mb-1",onClick:this.toggle},"Make an Appointment"),r.a.createElement(he.a,{isOpen:this.state.isOpen},r.a.createElement("div",null,r.a.createElement(ke,{doctor:this.props.doctor}))))))}}]),a}(r.a.Component),xe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.changes();case 2:e.sent;case 3:case"end":return e.stop()}}),e)}))),n.changes=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(n.props.departmentid);case 3:t=e.sent,console.log(t),n.setState({doctors:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.componentDidUpdate=function(e){e.departmentid!==n.props.departmentid&&n.changes()},n.state={doctors:null},n}return Object(i.a)(a,[{key:"render",value:function(){return this.state.doctors&&this.props.departmentid?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,this.state.doctors[0].department.departmentName.toUpperCase()),this.state.doctors.map((function(e){return r.a.createElement(Ce,{key:e.doctorId,doctor:e})}))):r.a.createElement("p",null,"Hello")}}]),a}(r.a.Component),Ue=Object(h.f)(xe),Te=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).cardio=function(){n.props.history.push("/patient/newappointment/cardiology");var e=!n.state.change;n.setState({change:e,id:1})},n.neuro=function(){n.props.history.push("/patient/newappointment/neurology");var e=!n.state.change;n.setState({change:e,id:2})},n.uro=function(){n.props.history.push("/patient/newappointment/urology");var e=!n.state.change;n.setState({change:e,id:3})},n.state={change:!1,id:null},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(ee.a,{fluid:!0},r.a.createElement(te.a,null,r.a.createElement(ae.a,{sm:"4"},r.a.createElement("nav",{className:"navbar bg-light"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement(me.a,{vertical:!0},r.a.createElement(pe.a,{onClick:this.cardio,outline:!0,color:"info",className:"mb-2"},"Cardiology"),r.a.createElement(pe.a,{onClick:this.neuro,outline:!0,color:"info",className:"mb-2"},"Neurology"),r.a.createElement(pe.a,{onClick:this.uro,outline:!0,color:"info",className:"mb-2"},"Urology  "))))),r.a.createElement(ae.a,{sm:"8"},this.state.id&&r.a.createElement(Ue,{departmentid:this.state.id}))))}}]),a}(r.a.Component),Ae=Object(h.f)(Te),Ie=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.patient){var e=this.props.patient.lastRecord;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,null,r.a.createElement(te.a,null,r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(se.a,null,"Height: ",e.height),r.a.createElement(se.a,null,"Weight: ",e.weight),r.a.createElement(se.a,null,"Age: ",e.age),r.a.createElement(se.a,null,"diagnosis: ",e.diagnosis),r.a.createElement(se.a,null,"prescribed Action: ",e.prescribedAction),r.a.createElement(se.a,null,"prescribed Medication: ",e.prescribedMedication),r.a.createElement(se.a,null,"Notes: ",e.notes))))))))}return r.a.createElement("p",null,"No records")}}]),a}(r.a.Component),Me=Object(z.b)((function(e){return Object(o.a)({},e.loginUser)}),{})(Ie),Fe=a(111),Pe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.patient){var e=this.props.patient;return r.a.createElement(ee.a,{fluid:!0},r.a.createElement(te.a,null,r.a.createElement(ae.a,{sm:"6"},r.a.createElement(ne.a,{className:"card bg-info"},r.a.createElement(Fe.a,null,r.a.createElement("h2",null,e.firstName.toUpperCase()," ",e.lastName.toUpperCase())),r.a.createElement(re.a,null,r.a.createElement("p",null," Gender: ",e.gender),r.a.createElement("p",null,"BirthDate: ",e.birthDate),r.a.createElement("p",null,"Address: ",e.address),r.a.createElement("p",null,"Phone: ",e.phone),r.a.createElement("p",null,"Email: ",e.email))))))}return r.a.createElement("p",null)}}]),a}(r.a.Component),Re=Object(z.b)((function(e){return Object(o.a)({},e.loginUser)}),{})(Pe),qe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changepropmodal=function(){n.setState({name:"",address:"",relation:"",phone:""}),n.props.ontoggle()},n.onName=function(e){var t=e.target.value;n.setState({name:t})},n.onAddress=function(e){var t=e.target.value;n.setState({address:t})},n.onRelation=function(e){var t=e.target.value;n.setState({relation:t})},n.onPhone=function(e){var t=e.target.value;n.setState({phone:t})},n.onSubmits=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,H(n.state.name,n.state.address,n.state.phone,n.state.relation,n.props.patient);case 4:a=e.sent,console.log(a),n.changepropmodal(),n.setState({name:"",address:"",relation:"",phone:""}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),n.changepropmodal();case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),n.state={name:"",address:"",relation:"",phone:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(fe.a,{isOpen:this.props.modal},r.a.createElement(ee.a,null,r.a.createElement(Ee.a,{onSubmit:this.onSubmits},r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Name"),r.a.createElement(Oe.a,{type:"text",name:"details",value:this.state.name,onChange:this.onName,required:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Address:"),r.a.createElement(Oe.a,{type:"text",value:this.state.address,onChange:this.onAddress,required:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Phone:"),r.a.createElement(Oe.a,{value:this.state.phone,type:"text",onChange:this.onPhone,required:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Relation:"),r.a.createElement(Oe.a,{value:this.state.relation,type:"text",onChange:this.onRelation,required:!0})),r.a.createElement(b.a,{type:"submit"},"Confirm"),r.a.createElement(b.a,{onClick:this.changepropmodal,className:"mt-1 mb-1 ml-1"},"Cancel"))))}}]),a}(r.a.Component),_e=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.onChange();case 1:case"end":return e.stop()}}),e)}))),n.onChange=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.props.patient||0==n.props.patient.patientId){e.next=11;break}return e.prev=1,e.next=4,L(n.props.patient.patientId);case 4:t=e.sent,console.log(t),n.setState({econtacts:t}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])}))),n.ontoggle=function(){var e=n.state.toggle;n.setState({toggle:!e}),n.onChange()},n.state={econtacts:null,toggle:!1},n}return Object(i.a)(a,[{key:"render",value:function(){if(this.state.econtacts){var e=this.state.econtacts;return r.a.createElement(ee.a,{fluid:!0},r.a.createElement(te.a,null,r.a.createElement(ae.a,{sm:"6"},r.a.createElement(b.a,{onClick:this.ontoggle,className:"mb-1"},"Add New"),r.a.createElement(qe,{ontoggle:this.ontoggle,modal:this.state.toggle,patient:this.props.patient}),e.map((function(e,t){return r.a.createElement(ne.a,{key:t},r.a.createElement(re.a,null,r.a.createElement(le.a,null,r.a.createElement(se.a,null,"Name: ",e.name),r.a.createElement(se.a,null,"Address ",e.address),r.a.createElement(se.a,null,"Phone: ",e.phone),r.a.createElement(se.a,null,"relation: ",e.relation))))})))))}return r.a.createElement(r.a.Fragment,null)}}]),a}(r.a.Component),Le=Object(z.b)((function(e){return Object(o.a)({},e.loginUser)}),{})(_e),He=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(Z,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/patient/appointments"},r.a.createElement(ue,null)),r.a.createElement(h.a,{path:"/patient/newappointment"},r.a.createElement(Ae,null)),r.a.createElement(h.a,{path:"/patient/emergency"},r.a.createElement(Le,null)),r.a.createElement(h.a,{path:"/patient/record"},r.a.createElement(Me,null)),r.a.createElement(h.a,{path:["/patient/home","*"]},r.a.createElement(Re,null)))))}}]),a}(r.a.Component),Ve=function(){var e=Object(E.a)(f.a.mark((function e(t,a){var n,r,l,s,o,c,i,u,m,p;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.post("/doctors/login",{username:t,password:a});case 3:return n=e.sent,r=n.data,l=r.doctorId,s=r.firstName,o=r.lastName,c=r.speciality,i=r.username,u=r.password,m=r.department,p=new N(l,s,o,c,i,u,m),I.dispatch(x(p)),I.dispatch(C(new j(0,"","","","","",0,"","",""))),e.abrupt("return",n);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),Be=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).verifyUser=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Ve(n.state.username,n.state.password);case 4:a=e.sent,console.log(a),n.props.history.push("/doctor/home"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),n.setUsername=function(e){var t=e.target.value;n.setState({username:t})},n.setPassword=function(e){var t=e.target.value;n.setState({password:t})},n.state={username:"",password:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row align-items-center justify-content-center ",style:{height:"80%"}},r.a.createElement("div",{className:"login-column"},r.a.createElement("form",{onSubmit:this.verifyUser,className:"form-signin "},r.a.createElement("h2",null," Please Sign In"),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",{className:"font-weight-bold"},"UserName:"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.username,onChange:this.setUsername,required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",{className:"font-weight-bold"},"Password:"),r.a.createElement("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.setPassword,required:!0}))),r.a.createElement(b.a,{color:"primary",className:"btn-block"},"Login"))))}}]),a}(r.a.Component),Ge=Object(h.f)(Be),We=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("p",null,"Hellos here will be all the appointments related to him sorted by date")}}]),a}(r.a.Component),Je=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).logoutUser=function(t){e.props.loginSaveDoctor(null),e.props.loginSavePatient(null),e.props.history.push("/home")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{color:"light",light:!0,expand:"md"},r.a.createElement(W.a,{tabs:!0,className:"w-100"},r.a.createElement(J.a,null),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"/doctor/appointments",className:"nav-link",activeClassName:"active"},"View Appointments")),r.a.createElement(X.a,null,r.a.createElement(p.b,{to:"",className:"nav-link",activeClassName:"active"},"New Appointment Later")),r.a.createElement(X.a,{className:"float-right",tag:function(){return r.a.createElement(b.a,{className:"float-right",onClick:e.logoutUser,color:"primary",outline:!0},"Logout")}}))))}}]),a}(r.a.Component),Xe={loginSaveDoctor:x,loginSavePatient:C},Ye=Object(z.b)((function(e){return Object(o.a)({},e.loginUser)}),Xe)(Je),ze=Object(h.f)(Ye),$e=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"DoctorHome"),r.a.createElement(z.a,{store:I},r.a.createElement(p.a,null,r.a.createElement(ze,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/doctor/appointments"},r.a.createElement(We,null)),r.a.createElement(h.a,{path:"/patient/newappointment"}),r.a.createElement(h.a,{path:"*"},"patient card")))))}}]),a}(r.a.Component),Ke=a(51),Qe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onfirstSubmits=function(e){var t=e.target.value;n.setState({firstName:t})},n.onlastSumbits=function(e){var t=e.target.value;n.setState({lastName:t})},n.ongenderSubmits=function(e){var t=e.target.value;n.setState({gender:t})},n.onusernameSubmits=function(e){var t=e.target.value;n.setState({username:t})},n.onpasswordSubmits=function(e){var t=e.target.value;console.log(t),n.setState({password:t})},n.ondateSubmits=function(e){var t=e.target.value;console.log(t),n.setState({birthDate:t})},n.onaddSubmits=function(e){var t=e.target.value;n.setState({address:t})},n.onphoneSubmits=function(e){var t=e.target.value;n.setState({phone:t})},n.onemailSubmits=function(e){var t=e.target.value;n.setState({email:t})},n.FormOnSUbmit=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,_(n.state.firstName,n.state.lastName,n.state.gender,n.state.username,n.state.password,n.state.birthDate,n.state.address,n.state.phone,n.state.email);case 4:e.sent,n.props.history.push("/patientlogin"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),n.state={firstName:"",lastName:"",gender:"",username:"",password:"",birthDate:"",address:"",phone:"",email:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(ee.a,null,r.a.createElement(te.a,null,r.a.createElement(ae.a,{sm:"5"},r.a.createElement("div",{className:"h-10 w-70",style:{height:"60%"}},r.a.createElement(Ee.a,{onSubmit:this.FormOnSUbmit},r.a.createElement(be.a,null,r.a.createElement(ge.a,{for:"userId"},"First Name  "),r.a.createElement(Oe.a,{type:"text",value:this.state.firstName,onChange:this.onfirstSubmits,required:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"last Name  "),r.a.createElement(Oe.a,{type:"text",value:this.state.lastName,onChange:this.onlastSumbits,required:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Gender   "),r.a.createElement(Oe.a,{type:"text",onChange:this.ongenderSubmits,value:this.state.gender,required:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"username "),r.a.createElement(Oe.a,{type:"text",onChange:this.onusernameSubmits,value:this.state.username,required:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"password  "),r.a.createElement(Oe.a,{type:"text",onChange:this.onpasswordSubmits,value:this.state.password,required:!0})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Birth Date:  "),r.a.createElement(Oe.a,{type:"date",value:this.state.birthDate,onChange:this.ondateSubmits})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Email "),r.a.createElement(Oe.a,{type:"text",value:this.state.email,onChange:this.onemailSubmits})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Address "),r.a.createElement(Oe.a,{type:"text",value:this.state.address,onChange:this.onaddSubmits})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Phone: "),r.a.createElement(Oe.a,{type:"text",value:this.state.phone,onChange:this.onphoneSubmits})),r.a.createElement(be.a,null,r.a.createElement(b.a,{type:"submit",color:"info"},"Submit")))))))}}]),a}(r.a.Component),Ze=Object(h.f)(Qe),et=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={doctor:null,patient:null},n}return Object(i.a)(a,[{key:"render",value:function(){return null===this.props.doctor&&null===this.props.patient?r.a.createElement(p.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/createaccount"},r.a.createElement(Ze,null)),r.a.createElement(h.a,{path:"/patientlogin"},r.a.createElement(B,null)),r.a.createElement(h.a,{path:"/doctorlogin"},r.a.createElement(Ge,null)),r.a.createElement(h.a,{path:["/home","*"]},r.a.createElement(Y,null),r.a.createElement(d,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/createaccount"},r.a.createElement(Ze,null)),r.a.createElement(h.a,{path:"/patientlogin"},r.a.createElement(B,null)),r.a.createElement(h.a,{path:"/doctorlogin"},r.a.createElement(Ge,null)),r.a.createElement(h.a,{path:"/patient/home"},r.a.createElement(He,null)),r.a.createElement(h.a,{path:"/doctor/home"},r.a.createElement($e,null)),r.a.createElement(h.a,{path:["/home","*"]},r.a.createElement(Y,null),r.a.createElement(d,null)))),r.a.createElement(Ke.a,null))}}]),a}(r.a.Component),tt={loginSaveDoctor:x,loginSavePatient:C},at=Object(z.b)((function(e){return Object(o.a)({},e.loginUser)}),tt)(et);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z.a,{store:I},r.a.createElement(at,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.fc3033f7.chunk.js.map