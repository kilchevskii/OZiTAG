(this["webpackJsonpozi-auth-test"]=this["webpackJsonpozi-auth-test"]||[]).push([[0],{202:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t(69),r=t.n(n),i=(t(81),t(82),t(6)),c=t(26),o=t(76),l=t(1),d=function(e){var a=e.authUser,t=c.a().shape({email:c.b().required("Required files"),password:c.b().required("Required files")});return Object(l.jsx)("div",{children:Object(l.jsx)(o.a,{initialValues:{email:"",password:""},validateOnBlur:!0,onSubmit:function(e){a(e)},validationSchema:t,children:function(e){var a=e.values,t=e.errors,s=e.touched,n=e.handleChange,r=e.handleBlur,i=e.isValid,c=e.handleSubmit,o=e.dirty;return Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("div",{className:"form__input-block",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)("input",{className:"input",type:"text",name:"email",onChange:n,onBlur:r,values:a.email})]}),s.email&&t.email&&Object(l.jsx)("p",{className:"error",children:t.email}),Object(l.jsxs)("div",{className:"form__input-block",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{className:"input",type:"password",name:"password",onChange:n,onBlur:r,values:a.password})]}),s.password&&t.password&&Object(l.jsx)("p",{className:"error",children:t.password}),Object(l.jsx)("button",{disabled:!i&&!o,onClick:c,type:"submit",children:"Login"})]})}})})},u=t(75),j=t.n(u).a.create({baseURL:"https://tager.dev.ozitag.com"}),m=function(e){var a=e.userInfo,t=e.logObj,s=e.setLogin,n=t.data.accessToken;return Object(l.jsx)("div",{className:"userform",children:Object(l.jsxs)("div",{className:"a-box",children:[Object(l.jsx)("div",{className:"img-container",children:Object(l.jsx)("div",{className:"img-inner",children:Object(l.jsxs)("div",{className:"inner-skew",children:[Object(l.jsx)("img",{src:"https://audioportal.su/diy/wp-content/uploads/2020/10/man.png",alt:"user-avatar"}),"."]})})}),Object(l.jsxs)("div",{className:"text-container",children:[Object(l.jsxs)("h3",{children:["Name: ",a.data.name]}),Object(l.jsxs)("p",{children:["E-mail: ",a.data.email]}),Object(l.jsxs)("p",{children:["User ID:",a.data.id]})]}),Object(l.jsx)("button",{onClick:function(){j.post("/api/tager/user/profile/logout",{},{headers:{Authorization:"Bearer "+n}}).then((function(e){var a=e.data;console.log(a)})).catch(s(!1))},children:"Logout"})]})})},h=function(){var e=Object(s.useState)(!1),a=Object(i.a)(e,2),t=a[0],n=a[1],r=Object(s.useState)(null),c=Object(i.a)(r,2),o=c[0],u=c[1],h=Object(s.useState)(null),b=Object(i.a)(h,2),p=b[0],O=b[1];return Object(l.jsx)("div",{className:"wrapper",children:t?Object(l.jsx)(m,{userInfo:o,logObj:p,setLogin:n}):Object(l.jsx)(d,{authUser:function(e){j.post("/api/auth/user",{clientId:1,email:e.email,password:e.password}).then((function(e){var a=e.data,t=a.data.accessToken;return j.get("/api/tager/user/profile",{headers:{Authorization:"Bearer "+t}}).then((function(e){var a=e.data;u(a),n(!0)})),a})).then((function(e){O(e)})).catch((function(e){var a=document.createElement("div");a.className="alert-rus",a.innerText="Email or password is incorrect",document.body.append(a),setTimeout((function(){document.body.removeChild(a)}),2e3)}))}})})};r.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))},82:function(e,a,t){}},[[202,1,2]]]);
//# sourceMappingURL=main.bc7d5b74.chunk.js.map