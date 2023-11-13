import{r as x,u as j,j as a,N as f,l as g}from"./index-1339ac6e.js";import{q as B,s as S,t as v,F as t,O as n,v as l,w as i,x as d,y as c,z as b,A as P,m as r,p as E,n as C,D as y,E as I,G as k,B as q,H as T,L as $,J as z,K as F}from"./SingupPage.styled-14090fd5.js";import{c as A,a as m,u as D}from"./index.esm-03016110.js";import{W as R,S as W,b as _,c as G}from"./WelcomePage.styled-6f8e89c7.js";import"./assertThisInitialized-b513c38a.js";import"./ButtonBase-499f3cf7.js";import"./getThemeProps-70e2eba0.js";const O=A({email:m().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email format: test@mail.com").email("Email format: test@mail.com").required("Email is required"),password:m().min(8,"Password should be of minimum 8 characters length, contain at least one uppercase and lowercase character, at least one number, at least one special character").matches(/(?=.*[a-z])(?=.*[A-Z])\w+/,"Password should be of minimum 8 characters length, contain at least one uppercase and lowercase character, at least one number, at least one special character").matches(/\d/,"Password should be of minimum 8 characters length, contain at least one uppercase and lowercase character, at least one number, at least one special character").matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,"Password should be of minimum 8 characters length, contain at least one uppercase and lowercase character, at least one number, at least one special character").required("Password is required")}),L=()=>{const[o,u]=x.useState(!1),h=j(),p=()=>u(s=>!s),w=s=>{s.preventDefault()},e=D({initialValues:{email:"",password:""},validationSchema:O,onSubmit:s=>{h(g(s))}});return a.jsx("div",{children:a.jsx(B,{onSubmit:e.handleSubmit,children:a.jsxs(S,{theme:v,children:[a.jsxs(t,{sx:{width:"100%"},children:[a.jsx(n,{fullWidth:!0,name:"email",placeholder:"Email",autoComplete:"off",sx:{zIndex:5,...l,...e.touched.email&&!!e.errors.email&&{...i},...e.values.email&&!e.errors.email&&{...d}},inputProps:{...c},value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.email&&!!e.errors.email,required:!0,endAdornment:[e.values.email&&!e.errors.email&&a.jsx(b,{sx:{color:"green"}},1),e.touched.email&&!!e.errors.email&&a.jsx(P,{sx:{color:"red"}},2)]}),e.touched.email&&!!e.errors.email&&a.jsx(r,{error:!0,id:"email",children:e.errors.email}),e.values.email&&!e.errors.email&&a.jsx(r,{sx:{color:"green"},id:"email",children:"This is a CORRECT email"})]}),a.jsxs(t,{sx:{width:"100%"},children:[a.jsx(n,{fullWidth:!0,id:"password",name:"password",type:o?"text":"password",placeholder:"Password",sx:{zIndex:5,...l,mt:"14px",...e.touched.password&&!!e.errors.password&&{...i},...e.values.password&&!e.errors.password&&{...d}},inputProps:{...c},value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.password&&!!e.errors.password,required:!0,endAdornment:a.jsx(E,{position:"end",children:a.jsx(C,{"aria-label":"toggle password visibility",onClick:p,onMouseDown:w,edge:"end",sx:{...y},children:o?a.jsx(I,{}):a.jsx(k,{})})})}),e.touched.password&&!!e.errors.password&&a.jsx(r,{error:!0,id:"password",children:e.errors.password}),e.values.password&&!e.errors.password&&a.jsx(r,{sx:{color:"green"},id:"password",children:"This is a CORRECT password"})]}),a.jsx(q,{sx:{zIndex:5,...T},variant:"contained",fullWidth:!0,type:"submit",children:"Sign In"}),a.jsx($,{component:f,sx:{zIndex:5,...z},to:"/signup",children:"Sign Up"})]})})})};function Z(){return a.jsxs(R,{children:[a.jsx(F,{children:"Sign In"}),a.jsx(L,{}),a.jsx(W,{}),a.jsx(_,{}),a.jsx(G,{})]})}export{Z as default};