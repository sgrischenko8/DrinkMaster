import{r as x,u as w,h as j,j as s,N as g,l as B}from"./index-371cd3a7.js";import{s as S,t as f,v,F as n,O as l,w as i,x as t,y as d,z as u,A as C,C as I,m as o,p as P,n as y,E as T,G as b,H as k,B as E,J as F,L as z,K as R,M as W}from"./muiFormStyled-24e4634b.js";import{W as A,T as D}from"./WelcomeBox-e53e8953.js";import"./emotion-element-c39617d8.browser.esm-d578ff43.js";import"./assertThisInitialized-6d48262d.js";import"./ButtonBase-5913b94c.js";import"./emotion-styled.browser.esm-502ac5c3.js";import"./getThemeProps-b46db884.js";const O=()=>{const[a,m]=x.useState(!1),p=w(),h=()=>m(r=>!r),c=r=>{r.preventDefault()},e=j({initialValues:{email:"",password:""},validationSchema:W,onSubmit:r=>{p(B(r))}});return s.jsx("div",{style:{marginTop:"28px"},children:s.jsx(S,{onSubmit:e.handleSubmit,children:s.jsxs(f,{theme:v,children:[s.jsxs(n,{sx:{width:"100%"},children:[s.jsx(l,{fullWidth:!0,name:"email",placeholder:"Email",autoComplete:"off",sx:{zIndex:5,...i,...e.touched.email&&!!e.errors.email&&{...t},...e.values.email&&!e.errors.email&&{...d}},inputProps:{...u},value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.email&&!!e.errors.email,required:!0,endAdornment:[e.values.email&&!e.errors.email&&s.jsx(C,{sx:{color:"green"}},1),e.touched.email&&!!e.errors.email&&s.jsx(I,{sx:{color:"red"}},2)]}),e.touched.email&&!!e.errors.email&&s.jsx(o,{error:!0,id:"email",children:e.errors.email}),e.values.email&&!e.errors.email&&s.jsx(o,{sx:{color:"green"},id:"email",children:"This is a CORRECT email"})]}),s.jsxs(n,{sx:{width:"100%"},children:[s.jsx(l,{fullWidth:!0,id:"password",name:"password",type:a?"text":"password",placeholder:"Password",sx:{zIndex:5,...i,mt:"14px",...e.touched.password&&!!e.errors.password&&{...t},...e.values.password&&!e.errors.password&&{...d}},inputProps:{...u},value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.password&&!!e.errors.password,required:!0,endAdornment:s.jsx(P,{position:"end",children:s.jsx(y,{"aria-label":"toggle password visibility",onClick:h,onMouseDown:c,edge:"end",sx:{...T},children:a?s.jsx(b,{}):s.jsx(k,{})})})}),e.touched.password&&!!e.errors.password&&s.jsx(o,{error:!0,id:"password",children:e.errors.password}),e.values.password&&!e.errors.password&&s.jsx(o,{sx:{color:"green"},id:"password",children:"This is a CORRECT password"})]}),s.jsx(E,{sx:{zIndex:5,...F},variant:"contained",fullWidth:!0,type:"submit",children:"Sign In"}),s.jsx(z,{component:g,sx:{zIndex:5,...R},to:"/signup",children:"Sign Up"})]})})})};function J(){return s.jsxs(A,{children:[s.jsx(D,{children:"Sign In"}),s.jsx(O,{})]})}export{J as default};