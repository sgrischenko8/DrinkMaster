import{n as r,c as n,j as i,k as j,A as re,r as N,B as A,u as ne,C as ae,D as le,E as se,F as de,G as R,H as ce,I as pe,s as v,N as he,m as te,J as xe}from"./index-1339ac6e.js";import{j as ge,k as me,l as P,d as oe,m as fe,n as ue,o as ye,P as be}from"./dummyDrinkThumb-0db934e1.js";import{S as we}from"./react-select.esm-84f625c4.js";import{c as W,a as D,d as ke,F as $e,e as je}from"./index.esm-03016110.js";import{H as ve,a as De,F as Ae}from"./Header-93ecd25c.js";import{M as ze}from"./MainAppContainer-60d7283e.js";import"./assertThisInitialized-b513c38a.js";const Te=r.div`
  width: 100%;
  padding: 80px 0;
  @media only screen and (min-width: 768px) {
    padding: 140px 0;
    @media only screen and (min-width: 1440px) {
      padding: 160px 0;
    }
  }
`,Se=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  column-gap: 94px;
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Ie=r.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Ne=r.h3`
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  letter-spacing: 0;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Ce=r.div`
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`,Ee=r.button`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 107px;
  height: 46px;
  color: ${({theme:e})=>e==="dark"?`${n.secondaryDark}`:`${n.light}`};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  border: 0 solid transparent;
  border-radius: 42px;
  background-color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(18 / 16);
    width: 118px;
    height: 54px;
  }

  &:hover {
    background-color: #161f37;
    background-color: ${({theme:e})=>e==="dark"?`${n.secondaryDark}`:`${n.light}`};
    color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`};
  }
  &:active {
    color: ${({theme:e})=>e==="dark"?`${n.secondaryDark}`:`${n.light}`};
    border: 2px solid #4070cd50;
    background-color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`};
  }
  &:disabled {
    color: #f3f3f320;
    background-color: #434d67;
  }
`,Oe=r.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 40px;

  @media only screen and (min-width: 768px) {
    column-gap: 32px;
    @media only screen and (min-width: 1440px) {
      column-gap: 40px;
      width: 833px;
    }
  }
`,qe=r.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e==="dark"?"#161F3750":`${n.secondaryDark}`};
  background-size: cover;
  background-image: ${({uri:e})=>e?`url(${e})`:"none"};
  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    @media only screen and (min-width: 1440px) {
      width: 400px;
      height: 400px;
    }
  }
`,Pe=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`,Fe=r.div`
  position: relative;
  top: 40%;
  display: flex;
  gap: 170px;
  align-items: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
`,G=r.label`
  width: 70px;
  text-align: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
  cursor: pointer;
  :hover {
    text-shadow:
      1px 1px 2px #161f37,
      0 0 1em #bce6d2,
      0 0 0.2em #4070cd;
  }
`,Re=r.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  background-color: ${n.light};
  color: #161f37;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${n.secondaryDark};
    color: ${n.light};
    border: 1px solid #f3f3f350;
  }
  &:active {
    color: ${n.secondaryDark};
    border: 2px solid #4070cd50;
    background-color: ${n.light};
  }
`,Y=r.input`
  display: none;
`,Le=r.span`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.25;
  color: ${n.light};
`,He=r.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 31px;
  letter-spacing: -0.02em;
  width: 335px;
  @media only screen and (min-width: 768px) {
    width: 352px;
    @media only screen and (min-width: 1440px) {
      width: 393px;
      gap: 40px;
    }
  }
`,_=r.div``,J=r.input`
  width: 100%;
  background-color: inherit;
  font-size: 14px;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:"#0A0A1150"};
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  :hover {
    ::-webkit-input-placeholder {
      color: ${({theme:e})=>e==="dark"?"#f3f3f380":`${n.primaryDark}`};
    }
  }
`,q=r.div`
  display: flex;
  height: 14px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  border-bottom: 1px solid #f3f3f350;
  border-bottom: ${({errors:e,value:o})=>o&&e?"1px solid #3cbc8150":e?"1px solid #da141450":"1px solid #f3f3f350"};
  @media only screen and (min-width: 768px) {
    height: 18px;
    font-size: 14px;
  }
`,K=r.span`
  position: relative;
  bottom: 22px;
  left: 105px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
  border: 2px solid #da1414;
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    left: 100px;
    width: 20px;
    height: 20px;
    @media only screen and (min-width: 1440px) {
      left: 140px;
    }
  }
`,Q=r.div`
  background-color: inherit;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:"#0A0A1150"};
`,X=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Z=r.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e==="dark"?"#f3f3f350":"#0A0A1150"};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Ue=r.div`
  display: flex;
  gap: 14px;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  font-size: 14px;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Be=r.label`
  opacity: ${({isAlcoholic:e})=>e==="Alcoholic"?"1":"0.5"};
  cursor: pointer;
`,Me=r.label`
  opacity: ${({isAlcoholic:e})=>e==="Non alcoholic"?"1":"0.5"};
  cursor: pointer;
`,V=r.input`
  :checked {
    box-sizing: content-box;
    width: 10px;
    height: 10px;
    background-color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
    border: 3px solid ${({theme:e})=>e==="dark"?"black":"white"};
    outline: 1.3px ridge
      ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
    @media only screen and (min-width: 768px) {
      width: 12px;
      height: 12px;
      border: 3px solid ${({theme:e})=>e==="dark"?"black":"white"};
      outline: 2px ridge
        ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
    }
  }
  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1.3px solid
    ${({theme:e})=>e==="dark"?"#f3f3f350":"#636366"};
  margin-right: 4px;
  margin-left: 0;
  position: relative;
  top: 3px;
  @media only screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`,We=r.div`
  margin-bottom: 20px;
  position: relative;
`,Ge=r.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
`,Ye=r.div`
  position: relative;
`,_e=r.textarea`
  font-family: 'Manrope', sans-serif;
  position: relative;
  padding: 16px 18px;
  width: 100%;
  height: 184px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  background-color: inherit;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  border: ${({errors:e,value:o,theme:a})=>o&&e?"1px solid #3cbc8150":e?"1px solid #da141450":`1px solid ${({theme:l})=>l==="dark"?`${n.light}`:`${n.primaryDark}`}`};
  border-radius: 14px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    padding: 14px 24px;
    width: 480px;
    font-size: 17px;
    line-height: 1.56;
  }
  :focus {
    outline: none;
  }
  :hover {
    border: 1px solid
      ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  }
`,Je=r.span`
  margin-left: 18px;
  position: absolute;
  top: 38px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  color: ${({theme:e})=>e==="dark"?"#f3f3f350":"#0A0A1150"};
  @media only screen and (min-width: 768px) {
    top: 46px;
    margin-left: 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`,Ke=r.p`
  margin-left: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 48px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  @media only screen and (min-width: 768px) {
    top: 58px;
    margin-left: 24px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,U=r.span`
  margin-left: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 10px;
  height: 10px;
  border: 1px solid #da1414;
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,L=e=>Date.now()-new Date(e).getTime()>1e3*31556926*18,B=({theme:e,name:o,options:a,value:l,onChangeIngredientHandler:s,setFieldValue:w,errors:g,wrongIngredient:h})=>{const c={dropdownIndicator:(t,f)=>({...t,transform:f.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,{isFocused:f})=>({...t,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),menu:t=>({...t,width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],width:"154px",right:"-23px"}},backgroundColor:e==="dark"?n.secondaryDark:"white",borderRadius:"12px"}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:0}),singleValue:t=>({...t,color:e==="dark"?n.light:n.primaryDark}),option:(t,{isFocused:f,isSelected:b})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:f?e==="dark"?"#f3f3f375":"#0A0A1175":b?e==="dark"?"#f3f3f3":"#0A0A11":e==="dark"?"#f3f3f340":"#0A0A1140",cursor:"pointer"})},k={dropdownIndicator:(t,f)=>({...t,paddingRight:"18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:f.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,f)=>({...t,width:"200px",height:"50px",background:"inherit",border:l&&g?"1px solid #3cbc8150":g||h?"1px solid #da141450":e==="dark"?"1px solid #f3f3f350":"1px solid #0A0A1150",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...f["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:t=>({...t,marginTop:"2px",padding:"0px 12px",backgroundColor:e==="dark"?n.secondaryDark:"white",borderRadius:"12px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:"0px 18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:t=>({...t,color:e==="dark"?n.light:n.primaryDark}),placeholder:t=>({...t,"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(t,{isFocused:f,isSelected:b})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:f?e==="dark"?"#f3f3f375":"#0A0A1175":b?e==="dark"?"#f3f3f3":"#0A0A11":e==="dark"?"#f3f3f340":"#0A0A1140",cursor:"pointer"})};return i.jsx(we,{styles:o==="title"?k:c,name:o,options:a,value:l,onChange:t=>{s(t.value,o,w)}})},Qe=({setFile:e,onChangeHandler:o,setFieldValue:a,errors:l,theme:s})=>{const w=j(ge),g=j(me),c=j(P).form,k=j(re);L(k.birthday)===!1&&c.alcoholic==="Alcoholic"&&o("Non alcoholic","alcoholic",a);const[t,f]=N.useState(),b=d=>d.map(z=>({value:z,label:z})),x=d=>{if(!d.target.files[0].type.startsWith("image/"))return A.Notify.failure("Please, upload image-type file, e.g. '.jpeg', '.png'");e(d.target.files[0]),f(URL.createObjectURL(d.target.files[0]))};return i.jsxs(Oe,{children:[i.jsx(qe,{uri:t,theme:s,children:t?i.jsxs(Fe,{children:[i.jsx(G,{onClick:()=>{e(),f(oe)},children:"Without image"}),i.jsxs(G,{children:["Change",i.jsx(Y,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:d=>x(d)})]})]}):i.jsxs(Pe,{children:[i.jsxs(Re,{theme:s,children:["+",i.jsx(Y,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:d=>x(d)})]}),i.jsx(Le,{children:"Add image"})]})}),i.jsxs("div",{children:[i.jsxs(He,{children:[i.jsxs(_,{children:[i.jsx(J,{type:"text",name:"drink",placeholder:"Enter item title",title:"Enter item title",value:c.drink,onChange:d=>{o(d.target.value,d.target.name,a)},theme:s}),i.jsxs(q,{errors:l.drink,value:c.drink,children:[!c.drink&&l.drink,!c.drink&&l.drink&&i.jsx(U,{children:"!"})]})]}),i.jsxs(_,{children:[i.jsx(J,{type:"text",name:"description",placeholder:"Enter about recipe",title:"Enter about recipe",value:c.description,onChange:d=>{o(d.target.value,d.target.name,a)},theme:s}),i.jsxs(q,{errors:l.description,value:c.description,children:[!c.description&&l.description,!c.description&&l.description&&i.jsx(U,{children:"!"})]})]}),i.jsxs(Q,{theme:s,children:[i.jsxs(X,{children:[i.jsx(Z,{theme:s,children:"Category"}),i.jsx(B,{theme:s,name:"category",options:b(w),value:c.category===""?null:{value:c.category,label:c.category},onChangeIngredientHandler:o,setFieldValue:a})]}),i.jsxs(q,{errors:l.category,value:c.category,children:[!c.category&&l.category,!c.category&&l.category&&i.jsx(K,{children:l.category&&"!"})]})]}),i.jsxs(Q,{children:[i.jsxs(X,{children:[i.jsx(Z,{theme:s,children:"Glass"}),i.jsx(B,{theme:s,name:"glass",options:b(g),value:c.glass===""?null:{value:c.glass,label:c.glass},onChangeIngredientHandler:o,setFieldValue:a})]}),i.jsxs(q,{errors:l.glass,value:c.glass,children:[!c.glass&&l.glass,!c.glass&&l.glass&&i.jsx(K,{children:"!"})]})]})]}),i.jsxs(Ue,{theme:s,children:[i.jsxs(Be,{isAlcoholic:c.alcoholic,children:[i.jsx(V,{theme:s,type:"radio",value:"Alcoholic",name:"alcoholic",checked:c.alcoholic==="Alcoholic",onChange:d=>{o(d.target.value,"alcoholic",a)},disabled:!L(k.birthday)}),"Alcoholic"]}),i.jsxs(Me,{isAlcoholic:c.alcoholic,children:[i.jsx(V,{theme:s,type:"radio",value:"Non alcoholic",name:"alcoholic",checked:L(k.birthday)===!1||c.alcoholic==="Non alcoholic",onChange:d=>{o(d.target.value,"alcoholic",a)}}),"Non-alcoholic"]})]})]})]})},Xe=r.div`
  margin-bottom: 80px;
`,Ze=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,Ve=r.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
`,ei=r.div`
  box-sizing: border-box;
  padding: 0px 12px;
  width: 104px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  line-height: calc(18 / 14);
  align-items: center;
  border: ${({theme:e})=>e==="dark"?"1px solid #f3f3f350":"1px solid #0A0A1150"};
  border-radius: 200px;
  @media only screen and (min-width: 768px) {
    width: 114px;
    height: 44px;
    padding: 0px 10px;
  }
`,ii=r.button`
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: #f3f3f330;
  color: ${({theme:e})=>e==="dark"?"#f3f3f330":"#0A0A1130"};
  :hover {
    color: ${({theme:e})=>e==="dark"?"#f3f3f380":`${n.primaryDark}`};
    scale: 1.25;
  }
`,ni=r.button`
  font-size: 20px;
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  :hover {
    color: ${({theme:e})=>e==="dark"?"#f3f3f380":`${n.primaryDark}`};
    scale: 1.45;
  }
`,ti=r.span`
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  font-size: 14px;
  line-height: calc(18 / 14);
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,oi=r.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
  @media only screen and (min-width: 768px) {
    gap: 24px;
  }
`,ri=r.div`
  position: relative;
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`,ai=r.input`
  padding: 0 18px;
  height: 50px;
  width: 100px;
  background-color: inherit;
  font-size: 14px;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  letter-spacing: -0.02em;
  outline: none;
  border: ${({errors:e,value:o,theme:a})=>o&&e?"1px solid #3cbc8150":e?"1px solid #da141450":a==="dark"?"1px solid #f3f3f350":"1px solid #0A0A1150"};
  border-radius: 200px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    width: 150px;
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
  }
  :focus {
    outline: none;
  }
  :hover {
    border: 1px solid rgba(243, 243, 243, 1);
    border: ${({theme:e})=>e==="dark"?"1px solid #f3f3f3":"1px solid #0A0A11"};
  }
`,li=r.button`
  margin-left: auto;
  font-size: 32px;
  font-weight: 400;
  border-radius: 50%;
  border: none;
  background-color: inherit;
  color: ${n.light};
  transform: rotate(45deg);
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
  :hover {
    color: ${({theme:e})=>e==="dark"?"#f3f3f380":`${n.primaryDark}`};
    scale: 1.25;
  }
  &:active {
    scale: 0.85;
  }
`,ee=r.p`
  margin-left: 18px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 50px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  @media only screen and (min-width: 768px) {
    top: 58px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,ie=r.span`
  position: absolute;
  top: -35px;
  right: ${({measure:e,value:o})=>e==="measure"?"-12px":o?"-134px":"-24px"};
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
  color: ${({measure:e,value:o})=>!e&&o?"#3cbc81":"#da1414"};
  border: ${({measure:e,value:o})=>!e&&o?"2px solid #3cbc81":"2px solid #da1414"};
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    top: -42px;
    right: ${({measure:e,value:o})=>e==="measure"?"-46px":o?"-256px":"-124px"};
    width: 20px;
    height: 20px;
  }
`,si=({chosenIngredients:e,ingredients:o,index:a,onChangeHandler:l,setFieldValue:s,deleteIngredient:w,chosenIngredientSelect:g,errors:h,wrongIngredients:c,theme:k})=>{var f,b,x,d,z,C,m,u,$,p,y,S,T,I;const t=(E,F)=>{let O=[...e];const M=F==="title"?{[F]:E,alcohol:o[a].alcohol}:{[F]:E};O[a]=O[a]?Object.assign({},O[a],M):M,l(O,"ingredients",s)};return i.jsxs(ri,{children:[i.jsx(B,{theme:k,name:"title",options:o,value:e[a].title===""?null:g,onChangeIngredientHandler:t,setFieldValue:s,errors:h==null?void 0:h.ingredients,wrongIngredient:c?(f=c[a])==null?void 0:f.title:null}),i.jsxs(ee,{children:[!((b=e[a])!=null&&b.title)&&((x=h==null?void 0:h.ingredients)==null?void 0:x.length)>0&&((d=h.ingredients[a])==null?void 0:d.title),c&&((z=e[a])==null?void 0:z.alcohol)==="Yes"&&"That ingredient is not fit the chosen type Alcoholic/Non alcoholic drink",((C=h==null?void 0:h.ingredients)==null?void 0:C.length)>0&&((m=h.ingredients[a])==null?void 0:m.title)&&i.jsx(ie,{value:e[a].title,children:(u=e[a])!=null&&u.title?"✔":"!"})]}),i.jsxs("div",{children:[i.jsx(ai,{theme:k,errors:h.ingredients,type:"text",name:"measure",placeholder:"1 cl",title:"measure",value:e[a].measure===""?"":e[a].measure,onChange:E=>{t(E.target.value,"measure")}}),i.jsxs(ee,{children:[!(($=e[a])!=null&&$.measure)&&((p=h==null?void 0:h.ingredients)==null?void 0:p.length)>0&&((y=h.ingredients[a])==null?void 0:y.measure),!((S=e[a])!=null&&S.measure)&&((T=h==null?void 0:h.ingredients)==null?void 0:T.length)>0&&((I=h.ingredients[a])==null?void 0:I.measure)&&i.jsx(ie,{measure:"measure",children:h.ingredients?"!":"✔"})]})]}),i.jsx(li,{theme:k,type:"button",title:"Remove ingredient",onClick:()=>w(a),children:"+"})]})},di=({onChangeHandler:e,setFieldValue:o,errors:a,wrongIngredients:l,theme:s})=>{const g=j(P).form,t=j(fe).filter(x=>g.alcoholic==="Alcoholic"?x.alcohol:x.alcohol==="No").filter(x=>x.title).map(x=>({value:x.title,label:x.title,alcohol:x.alcohol})),f=()=>{const x=[...g.ingredients];x.push({title:"",measure:"",alcohol:""}),e(x,"ingredients",o)},b=x=>{if(g.ingredients.length!==1)if(x||x===0){const d=[...g.ingredients];d.splice(x,1),e(d,"ingredients",o)}else{const d=[...g.ingredients];d.pop(),e(d,"ingredients",o)}};return i.jsxs(Xe,{children:[i.jsxs(Ze,{children:[i.jsx(Ve,{theme:s,children:"Ingredients"}),i.jsxs(ei,{theme:s,children:[i.jsx(ii,{type:"button",onClick:()=>b(),theme:s,children:"---"}),i.jsx(ti,{theme:s,children:g.ingredients.length}),i.jsx(ni,{type:"button",onClick:()=>f(),theme:s,children:"+"})]})]}),i.jsx(oi,{children:g.ingredients.map((x,d)=>i.jsx("li",{children:i.jsx(si,{theme:s,chosenIngredients:g.ingredients,onChangeHandler:e,setFieldValue:o,ingredients:t,deleteIngredient:b,index:d,chosenIngredientSelect:{value:g.ingredients[d].title,label:g.ingredients[d].title},errors:a,wrongIngredients:l})},d))})]})},ci=({onChangeHandler:e,setFieldValue:o,errors:a,theme:l})=>{const w=j(P).form;return i.jsxs(We,{children:[i.jsx(Ge,{theme:l,children:"Recipe Preparation"}),i.jsx(Ye,{}),w.instructions?i.jsx(Je,{theme:l,children:"Enter the recipe"}):i.jsxs(Ke,{children:[!w.instructions&&a.instructions,!w.instructions&&a.instructions&&i.jsx(U,{children:"!"})]}),i.jsx(_e,{theme:l,errors:a.instructions,name:"instructions",placeholder:"Enter the recipe",rows:6,value:w.instructions,onChange:g=>{e(g.target.value,g.target.name,o)}})]})},H={drinkThumb:"",drink:"",description:"",category:"",glass:"",alcoholic:"Alcoholic",ingredients:[{title:"",measure:""}],instructions:""},pi=W({drink:D().trim().required("This field is required"),description:D().required("This field is required"),category:D().required("This field is required"),glass:D().required("This field is required"),alcoholic:D().matches(/(Alcoholic|Non alcoholic)/).required("This field is required"),ingredients:ke().of(W({title:D().required("This field is required"),measure:D().required("Required")})),instructions:D().required("This field is required")}),hi=({theme:e})=>{const o=ne();let a=ae();N.useEffect(()=>{o(le("categories")),o(se("glasses")),o(de("ingredients"))},[o]);const l=j(P);l!=null&&l.form||o(R(H));const s=l.form,w=j(ue),[g,h]=N.useState(),[c,k]=N.useState(),t=m=>{if(s.alcoholic==="Alcoholic")return!0;if(s.alcoholic==="Non alcoholic")return s.ingredients.filter($=>$.alcohol==="Yes").length===0?(k(null),!0):(m&&A.Notify.failure("The drink is labeled non-alcoholic but contains alcohol"),k(!0),!1)},f=m=>s.alcoholic==="Non alcoholic"||s.ingredients.some(u=>u.alcohol==="Yes")?!0:(m&&A.Notify.failure("The drink is labeled as alcoholic, but it doesn't contain alcohol"),!1),b=(m,u)=>{if(!C())return A.Notify.failure("Duplicate ingredients are not allowed");if(!t(!0)||!f(!0))return;if(!g){const p={...s};p!=null&&p.form&&delete p.form;let y=[];p.ingredients.filter(T=>y.push({title:T.title,measure:T.measure})),delete p.ingredients,p.ingredients=y,Object.assign(p,{drinkThumb:"src/images/dummyDrinkThumb.png"}),d(p,m,u);return}const $=new FormData;$.append("cocktail",g),o(ce($)).then(p=>{if(typeof p.payload=="string"&&p.payload.startsWith("https://res.cloudinary.com")){const y={...s};y!=null&&y.form&&delete y.form;let S=[];y.ingredients.filter(I=>S.push({title:I.title,measure:I.measure})),delete y.ingredients,y.ingredients=S;const T={drinkThumb:p.payload};Object.assign(y,T),d(y,m,u)}else A.Notify.failure('Format "webp" not allowed. Try upload .jpeg or .png')}).catch(p=>{console.log(p)})};function x(m,u,$){const p={...s},y={[u]:m};Object.assign(p,y),$(u,m),o(R(p)),c&&t()}const d=(m,u,$)=>{o(pe(m,u)).then(p=>{if(p.type==="drinks/addOwnDrink/fulfilled"){A.Notify.success("You added new cocktail!"),a("/my"),o(R(H)),$.resetForm({values:H});return}z(p.payload.message)})},z=m=>{m&&(m.includes("length must be at least")&&A.Notify.failure("All field must be at least 2 symbols long"),m.includes("duplicate")&&A.Notify.failure("Drink with that title already exist"))},C=()=>{const u=s.ingredients.flatMap(p=>p.title);return!(u.filter((p,y)=>u.indexOf(p)!==y).length>0)};return i.jsx(Ce,{children:i.jsx($e,{initialValues:s,validationSchema:pi,validateOnChange:!1,validateOnBlur:!1,onSubmit:b,children:({setFieldValue:m,errors:u})=>i.jsxs(je,{children:[i.jsx(Qe,{setFile:h,onChangeHandler:x,setFieldValue:m,errors:u,theme:e}),i.jsx(di,{onChangeHandler:x,setFieldValue:m,errors:u,wrongIngredients:c,theme:e}),i.jsx(ci,{onChangeHandler:x,setFieldValue:m,errors:u,theme:e}),i.jsx(Ee,{theme:e,type:"submit",disabled:w===!0,title:"Add",children:"Add"})]})})})},xi=v.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${({theme:e})=>e==="dark"?` color: ${n.light};`:`color: ${n.primaryDark};`}
  @media only screen and (min-width: 768px) {
    gap: 80px;
  }
  @media only screen and (min-width: 1440px) {
    width: 313px;
  }
`,gi=v.h2`
  @media only screen and (max-width: 767.9px) {
    font-size: 18px;
  }
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 28px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,mi=v.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: ${n.light};
  @media only screen and (min-width: 768px) {
    gap: 32px;
  }
  @media only screen and (min-width: 1440px) {
    gap: 28px;
  }
`,fi=v.li`
  width: 100%;
  height: 90px;
  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
  }
`,ui=v.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;
`,yi=v.p`
  margin: 0;
  display: block;
  overflow: hidden;
  ${({theme:e})=>e==="dark"?" color: rgba(243, 243, 243, 0.5);":"color: rgba(10, 10, 17, 0.50);"}
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: calc(20 / 14);
`,bi=v.h3`
  margin: 0;
  ${({theme:e})=>e==="dark"?` color: ${n.light};`:`color: ${n.primaryDark};`}
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`,wi=v.div`
  margin-bottom: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 1440px) {
    width: 209px;
  }
`,ki=v(he)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
`,$i=()=>{const e=j(te),o=ne();N.useEffect(()=>{o(xe())},[o]);let a=j(ye);return i.jsx(xi,{theme:e,children:i.jsxs("div",{children:[i.jsx(gi,{children:"Popular drinks"}),i.jsx(mi,{children:a.map(l=>i.jsx(fi,{children:i.jsxs(ki,{to:`/drink/${l._id}`,children:[i.jsx(ui,{src:l.drinkThumb,alt:l.drink,loading:"lazy",onError:s=>{s.currentTarget.src=oe}}),i.jsxs(wi,{children:[i.jsx(bi,{theme:e,children:l.drink}),i.jsx(yi,{theme:e,children:l.description})]})]})},l._id))})]})})},Ii=()=>{const e=j(te);return i.jsxs(i.Fragment,{children:[i.jsx(ve,{}),i.jsx(ze,{children:i.jsxs(Te,{children:[i.jsx(be,{theme:e,title:"Add drink",marginMobile:"40px",marginTablet:"60px",marginDesktop:"60px"}),i.jsxs(Se,{children:[i.jsx(hi,{theme:e}),i.jsxs("div",{children:[i.jsxs(Ie,{children:[i.jsx(Ne,{theme:e,children:"Follow Us"}),i.jsx(De,{theme:e})]}),i.jsx($i,{})]})]})]})}),i.jsx(Ae,{})]})};export{Ii as default};
