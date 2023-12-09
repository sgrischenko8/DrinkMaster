import{o as n,j as e,v as j,I as ai,r as I,J as A,f as Y,d as D,K as li,u as ti,M as si,O as di,P as ci,Q as pi,S as R,T as hi,U as xi,V as gi,X as mi,n as v,N as fi,w as oi,Y as ui,Z as yi}from"./index-a8fd8fe1.js";import{n as r}from"./emotion-styled.browser.esm-99aa081c.js";import{j as bi,k as wi,l as q,d as ri,m as ki,n as $i,o as ji,P as vi}from"./dummyDrinkThumb-83586294.js";import{S as Di}from"./react-select.esm-75eccd21.js";import"./emotion-element-c39617d8.browser.esm-9b76b9a4.js";import"./assertThisInitialized-ba4b1538.js";const Ai=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  column-gap: 94px;
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Ti=r.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,zi=r.h3`
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  letter-spacing: 0;
  color: ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,C=i=>({primaryTextColor:i==="dark"?"#F3F3F3":"#161F37",btnTextColor:i==="dark"?"#161F37":"#F3F3F3",btnBackground:i==="dark"?"#F3F3F3":"#161F37",primaryBackground:i==="dark"?"#F3F3F3":"#161F37",inputBackground:i==="light"?"#f6f6f6":"rgba(189, 189, 189, 0.2)",subtleTextColorEmail:i==="light"?"rgba(33, 33, 33, 0.8)":"rgba(250, 250, 250, 0.5)",subtleTextColor:i==="light"?"rgb(189, 189, 189)":"rgb(232, 232, 232)",secondaryRegisterTextColor:i==="light"?"red":"green",avatarBorderColor:i==="light"?"transparent":"rgba(27, 67, 113, 0.5)",avatarBackground:i==="light"?"#f6f6f6":"rgba(33, 33, 33, 0.8)",iconFill:i==="light"?"rgba(33, 33, 33, 0.8)":"#1b4371",inputBorder:i==="light"?"#e8e8e8":"rgba(189, 189, 189, 0.2)",commentBackground:i==="light"?"rgba(0, 0, 0, 0.03)":"rgba(27, 67, 113, 0.5)",showPasswordTxt:i==="light"?"#1B4371":"rgb(28, 28, 44)"}),Si=r.div`
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`,Ci=r.button`
  width: 107px;

  color: ${({theme:i})=>`${C(i).btnTextColor}`};

  background-color: ${({theme:i})=>`${C(i).btnBackground}`};
  @media only screen and (min-width: 768px) {
    width: 118px;
  }

  &:hover {
    background-color: #161f37;
    background-color: ${({theme:i})=>`${C(i).btnTextColor}`};
    color: ${({theme:i})=>`${C(i).btnBackground}`};
  }
  &:active {
    color: ${({theme:i})=>`${C(i).btnTextColor}`};
    border: 2px solid #4070cd50;
    background-color: ${({theme:i})=>`${C(i).btnBackground}`};
  }
  &:disabled {
    color: #f3f3f320;
    background-color: #434d67;
  }
`,Fi=r.div`
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
`,Ii=r.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: ${({theme:i})=>i==="dark"?"#161F3750":`${n.secondaryDark}`};
  background-size: cover;
  background-image: ${({uri:i})=>i?`url(${i})`:"none"};
  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    @media only screen and (min-width: 1440px) {
      width: 400px;
      height: 400px;
    }
  }
`,Ni=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`,Oi=r.div`
  position: relative;
  top: 40%;
  display: flex;
  gap: 170px;
  align-items: center;
  font-weight: 700;
  color: rgba(243, 243, 243, 0.75);
`,G=r.label`
  width: 70px;
  text-align: center;
  font-weight: 700;
  color: rgba(243, 243, 243, 0.75);
  cursor: pointer;
  :hover {
    text-shadow:
      1px 1px 2px #161f37,
      0 0 1em #bce6d2,
      0 0 0.2em #4070cd;
  }
`,Ei=r.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 32px;
  font-weight: 400;
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
`,_=r.input`
  display: none;
`,Pi=r.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: ${n.light};
`,qi=r.div`
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
`,J=r.div``,K=r.input`
  width: 100%;
  background-color: inherit;
  font-size: 14px;
  color: ${({theme:i})=>i==="dark"?`${n.light}`:"#0A0A1150"};
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  :hover {
    ::-webkit-input-placeholder {
      color: ${({theme:i})=>i==="dark"?"#f3f3f380":`${n.primaryDark}`};
    }
  }
`,P=r.div`
  display: flex;
  height: 14px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  border-bottom: 1px solid #f3f3f350;
  border-bottom: ${({errors:i,value:o})=>o&&i?"1px solid #3cbc8150":i?"1px solid #da141450":"1px solid #f3f3f350"};
  @media only screen and (min-width: 768px) {
    height: 18px;
    font-size: 14px;
  }
`,Q=r.span`
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
`,X=r.div`
  background-color: inherit;
  color: ${({theme:i})=>i==="dark"?`${n.light}`:"#0A0A1150"};
`,Z=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,V=r.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: ${({theme:i})=>i==="dark"?"#f3f3f350":"#0A0A1150"};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Bi=r.div`
  display: flex;
  gap: 14px;
  color: ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
  font-size: 14px;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Ri=r.label`
  opacity: ${({isAlcoholic:i})=>i==="Alcoholic"?"1":"0.5"};
  cursor: pointer;
`,Li=r.label`
  opacity: ${({isAlcoholic:i})=>i==="Non alcoholic"?"1":"0.5"};
  cursor: pointer;
`,ii=r.input`
  :checked {
    box-sizing: content-box;
    width: 10px;
    height: 10px;
    background-color: ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
    border: 3px solid ${({theme:i})=>i==="dark"?"black":"white"};
    outline: 1.3px ridge
      ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
    @media only screen and (min-width: 768px) {
      width: 12px;
      height: 12px;
      border: 3px solid ${({theme:i})=>i==="dark"?"black":"white"};
      outline: 2px ridge
        ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
    }
  }
  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1.3px solid
    ${({theme:i})=>i==="dark"?"#f3f3f350":"#636366"};
  margin-right: 4px;
  margin-left: 0;
  position: relative;
  top: 3px;
  @media only screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`,Ui=r.div`
  margin-bottom: 20px;
  position: relative;
`,Wi=r.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
`,Hi=r.div`
  position: relative;
`,Mi=r.textarea`
  font-family: 'Manrope', sans-serif;
  position: relative;
  padding: 16px 18px;
  width: 100%;
  height: 184px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  background-color: inherit;
  color: ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
  border: ${({errors:i,value:o,theme:a})=>o&&i?"1px solid #3cbc8150":i?"1px solid #da141450":`1px solid ${({theme:l})=>l==="dark"?`${n.light}`:`${n.primaryDark}`}`};
  border-radius: 14px;
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
      ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
  }
`,Yi=r.span`
  margin-left: 18px;
  position: absolute;
  top: 38px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  color: ${({theme:i})=>i==="dark"?"#f3f3f350":"#0A0A1150"};
  @media only screen and (min-width: 768px) {
    top: 46px;
    margin-left: 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`,Gi=r.p`
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
`,W=r.span`
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
`,L=i=>Date.now()-new Date(i).getTime()>1e3*31556926*18,H=({theme:i,name:o,options:a,value:l,onChangeIngredientHandler:s,setFieldValue:w,errors:g,wrongIngredient:h})=>{const c={dropdownIndicator:(t,f)=>({...t,transform:f.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,{isFocused:f})=>({...t,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),menu:t=>({...t,width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],width:"154px",right:"-23px"}},backgroundColor:i==="dark"?n.secondaryDark:"white",borderRadius:"12px"}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:0}),singleValue:t=>({...t,color:i==="dark"?n.light:n.primaryDark}),option:(t,{isFocused:f,isSelected:b})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:f?i==="dark"?"#f3f3f375":"#0A0A1175":b?i==="dark"?"#f3f3f3":"#0A0A11":i==="dark"?"#f3f3f340":"#0A0A1140",cursor:"pointer"})},k={dropdownIndicator:(t,f)=>({...t,paddingRight:"18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:f.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,f)=>({...t,width:"200px",height:"50px",background:"inherit",border:l&&g?"1px solid #3cbc8150":g||h?"1px solid #da141450":i==="dark"?"1px solid #f3f3f350":"1px solid #0A0A1150",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...f["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:t=>({...t,marginTop:"2px",padding:"0px 12px",backgroundColor:i==="dark"?n.secondaryDark:"white",borderRadius:"12px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:"0px 18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:t=>({...t,color:i==="dark"?n.light:n.primaryDark}),placeholder:t=>({...t,"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(t,{isFocused:f,isSelected:b})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:f?i==="dark"?"#f3f3f375":"#0A0A1175":b?i==="dark"?"#f3f3f3":"#0A0A11":i==="dark"?"#f3f3f340":"#0A0A1140",cursor:"pointer"})};return e.jsx(Di,{styles:o==="title"?k:c,name:o,options:a,value:l,onChange:t=>{s(t.value,o,w)}})},_i=({setFile:i,onChangeHandler:o,setFieldValue:a,errors:l,theme:s})=>{const w=j(bi),g=j(wi),c=j(q).form,k=j(ai);L(k.birthday)===!1&&c.alcoholic==="Alcoholic"&&o("Non alcoholic","alcoholic",a);const[t,f]=I.useState(),b=d=>d.map(T=>({value:T,label:T})),x=d=>{if(!d.target.files[0].type.startsWith("image/"))return A.Notify.failure("Please, upload image-type file, e.g. '.jpeg', '.png'");i(d.target.files[0]),f(URL.createObjectURL(d.target.files[0]))};return e.jsxs(Fi,{children:[e.jsx(Ii,{uri:t,theme:s,children:t?e.jsxs(Oi,{children:[e.jsx(G,{onClick:()=>{i(),f(ri)},children:"Without image"}),e.jsxs(G,{children:["Change",e.jsx(_,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:d=>x(d)})]})]}):e.jsxs(Ni,{children:[e.jsxs(Ei,{theme:s,children:["+",e.jsx(_,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:d=>x(d)})]}),e.jsx(Pi,{children:"Add image"})]})}),e.jsxs("div",{children:[e.jsxs(qi,{children:[e.jsxs(J,{children:[e.jsx(K,{type:"text",name:"drink",placeholder:"Enter item title",title:"Enter item title",value:c.drink,onChange:d=>{o(d.target.value,d.target.name,a)},theme:s}),e.jsxs(P,{errors:l.drink,value:c.drink,children:[!c.drink&&l.drink,!c.drink&&l.drink&&e.jsx(W,{children:"!"})]})]}),e.jsxs(J,{children:[e.jsx(K,{type:"text",name:"description",placeholder:"Enter about recipe",title:"Enter about recipe",value:c.description,onChange:d=>{o(d.target.value,d.target.name,a)},theme:s}),e.jsxs(P,{errors:l.description,value:c.description,children:[!c.description&&l.description,!c.description&&l.description&&e.jsx(W,{children:"!"})]})]}),e.jsxs(X,{theme:s,children:[e.jsxs(Z,{children:[e.jsx(V,{theme:s,children:"Category"}),e.jsx(H,{theme:s,name:"category",options:b(w),value:c.category===""?null:{value:c.category,label:c.category},onChangeIngredientHandler:o,setFieldValue:a})]}),e.jsxs(P,{errors:l.category,value:c.category,children:[!c.category&&l.category,!c.category&&l.category&&e.jsx(Q,{children:l.category&&"!"})]})]}),e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx(V,{theme:s,children:"Glass"}),e.jsx(H,{theme:s,name:"glass",options:b(g),value:c.glass===""?null:{value:c.glass,label:c.glass},onChangeIngredientHandler:o,setFieldValue:a})]}),e.jsxs(P,{errors:l.glass,value:c.glass,children:[!c.glass&&l.glass,!c.glass&&l.glass&&e.jsx(Q,{children:"!"})]})]})]}),e.jsxs(Bi,{theme:s,children:[e.jsxs(Ri,{isAlcoholic:c.alcoholic,children:[e.jsx(ii,{theme:s,type:"radio",value:"Alcoholic",name:"alcoholic",checked:c.alcoholic==="Alcoholic",onChange:d=>{o(d.target.value,"alcoholic",a)},disabled:!L(k.birthday)}),"Alcoholic"]}),e.jsxs(Li,{isAlcoholic:c.alcoholic,children:[e.jsx(ii,{theme:s,type:"radio",value:"Non alcoholic",name:"alcoholic",checked:L(k.birthday)===!1||c.alcoholic==="Non alcoholic",onChange:d=>{o(d.target.value,"alcoholic",a)}}),"Non-alcoholic"]})]})]})]})},Ji=r.div`
  margin-bottom: 80px;
`,Ki=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,Qi=r.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
`,Xi=r.div`
  padding: 0px 12px;
  width: 104px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  line-height: calc(18 / 14);
  align-items: center;
  border: ${({theme:i})=>i==="dark"?"1px solid #f3f3f350":"1px solid #0A0A1150"};
  border-radius: 200px;
  @media only screen and (min-width: 768px) {
    width: 114px;
    height: 44px;
    padding: 0px 10px;
  }
`,Zi=r.button`
  padding: 0;
  letter-spacing: -0.05em;
  color: ${({theme:i})=>i==="dark"?"#f3f3f330":"#0A0A1130"};
  :hover {
    color: ${({theme:i})=>i==="dark"?"#f3f3f380":`${n.primaryDark}`};
    scale: 1.25;
  }
`,Vi=r.button`
  padding: 0;
  font-size: 20px;
  letter-spacing: -0.05em;
  color: ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
  :hover {
    color: ${({theme:i})=>i==="dark"?"#f3f3f380":`${n.primaryDark}`};
    scale: 1.45;
  }
`,ie=r.span`
  color: ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
  font-size: 14px;
  line-height: calc(18 / 14);
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,ee=r.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
  @media only screen and (min-width: 768px) {
    gap: 24px;
  }
`,ne=r.div`
  position: relative;
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`,te=r.input`
  padding: 0 18px;
  height: 50px;
  width: 100px;
  background-color: inherit;
  font-size: 14px;
  color: ${({theme:i})=>i==="dark"?`${n.light}`:`${n.primaryDark}`};
  letter-spacing: -0.02em;
  outline: none;
  border: ${({errors:i,value:o,theme:a})=>o&&i?"1px solid #3cbc8150":i?"1px solid #da141450":a==="dark"?"1px solid #f3f3f350":"1px solid #0A0A1150"};
  border-radius: 200px;
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
    border: ${({theme:i})=>i==="dark"?"1px solid #f3f3f3":"1px solid #0A0A11"};
  }
`,oe=r.button`
  padding: 0;
  margin-left: auto;
  font-size: 32px;
  font-weight: 400;
  border-radius: 50%;
  color: ${n.light};
  transform: rotate(45deg);
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
  :hover {
    color: ${({theme:i})=>i==="dark"?"#f3f3f380":`${n.primaryDark}`};
    scale: 1.25;
  }
  &:active {
    scale: 0.85;
  }
`,ei=r.p`
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
`,ni=r.span`
  position: absolute;
  top: -35px;
  right: ${({measure:i,value:o})=>i==="measure"?"-12px":o?"-134px":"-24px"};
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
  color: ${({measure:i,value:o})=>!i&&o?"#3cbc81":"#da1414"};
  border: ${({measure:i,value:o})=>!i&&o?"2px solid #3cbc81":"2px solid #da1414"};
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    top: -42px;
    right: ${({measure:i,value:o})=>i==="measure"?"-46px":o?"-256px":"-124px"};
    width: 20px;
    height: 20px;
  }
`,re=({chosenIngredients:i,ingredients:o,index:a,onChangeHandler:l,setFieldValue:s,deleteIngredient:w,chosenIngredientSelect:g,errors:h,wrongIngredients:c,theme:k})=>{var f,b,x,d,T,N,m,u,$,p,y,S,z,F;const t=(O,B)=>{let E=[...i];const M=B==="title"?{[B]:O,alcohol:o[a].alcohol}:{[B]:O};E[a]=E[a]?Object.assign({},E[a],M):M,l(E,"ingredients",s)};return e.jsxs(ne,{children:[e.jsx(H,{theme:k,name:"title",options:o,value:i[a].title===""?null:g,onChangeIngredientHandler:t,setFieldValue:s,errors:h==null?void 0:h.ingredients,wrongIngredient:c?(f=c[a])==null?void 0:f.title:null}),e.jsxs(ei,{children:[!((b=i[a])!=null&&b.title)&&((x=h==null?void 0:h.ingredients)==null?void 0:x.length)>0&&((d=h.ingredients[a])==null?void 0:d.title),c&&((T=i[a])==null?void 0:T.alcohol)==="Yes"&&"That ingredient is not fit the chosen type Alcoholic/Non alcoholic drink",((N=h==null?void 0:h.ingredients)==null?void 0:N.length)>0&&((m=h.ingredients[a])==null?void 0:m.title)&&e.jsx(ni,{value:i[a].title,children:(u=i[a])!=null&&u.title?"✔":"!"})]}),e.jsxs("div",{children:[e.jsx(te,{theme:k,errors:h.ingredients,type:"text",name:"measure",placeholder:"1 cl",title:"measure",value:i[a].measure===""?"":i[a].measure,onChange:O=>{t(O.target.value,"measure")}}),e.jsxs(ei,{children:[!(($=i[a])!=null&&$.measure)&&((p=h==null?void 0:h.ingredients)==null?void 0:p.length)>0&&((y=h.ingredients[a])==null?void 0:y.measure),!((S=i[a])!=null&&S.measure)&&((z=h==null?void 0:h.ingredients)==null?void 0:z.length)>0&&((F=h.ingredients[a])==null?void 0:F.measure)&&e.jsx(ni,{measure:"measure",children:h.ingredients?"!":"✔"})]})]}),e.jsx(oe,{theme:k,type:"button",title:"Remove ingredient",onClick:()=>w(a),children:"+"})]})},ae=({onChangeHandler:i,setFieldValue:o,errors:a,wrongIngredients:l,theme:s})=>{const g=j(q).form,t=j(ki).filter(x=>g.alcoholic==="Alcoholic"?x.alcohol:x.alcohol==="No").filter(x=>x.title).map(x=>({value:x.title,label:x.title,alcohol:x.alcohol})),f=()=>{const x=[...g.ingredients];x.push({title:"",measure:"",alcohol:""}),i(x,"ingredients",o)},b=x=>{if(g.ingredients.length!==1)if(x||x===0){const d=[...g.ingredients];d.splice(x,1),i(d,"ingredients",o)}else{const d=[...g.ingredients];d.pop(),i(d,"ingredients",o)}};return e.jsxs(Ji,{children:[e.jsxs(Ki,{children:[e.jsx(Qi,{theme:s,children:"Ingredients"}),e.jsxs(Xi,{theme:s,children:[e.jsx(Zi,{type:"button",onClick:()=>b(),theme:s,children:"---"}),e.jsx(ie,{theme:s,children:g.ingredients.length}),e.jsx(Vi,{type:"button",onClick:()=>f(),theme:s,children:"+"})]})]}),e.jsx(ee,{children:g.ingredients.map((x,d)=>e.jsx("li",{children:e.jsx(re,{theme:s,chosenIngredients:g.ingredients,onChangeHandler:i,setFieldValue:o,ingredients:t,deleteIngredient:b,index:d,chosenIngredientSelect:{value:g.ingredients[d].title,label:g.ingredients[d].title},errors:a,wrongIngredients:l})},d))})]})},le=({onChangeHandler:i,setFieldValue:o,errors:a,theme:l})=>{const w=j(q).form;return e.jsxs(Ui,{children:[e.jsx(Wi,{theme:l,children:"Recipe Preparation"}),e.jsx(Hi,{}),w.instructions?e.jsx(Yi,{theme:l,children:"Enter the recipe"}):e.jsxs(Gi,{children:[!w.instructions&&a.instructions,!w.instructions&&a.instructions&&e.jsx(W,{children:"!"})]}),e.jsx(Mi,{theme:l,errors:a.instructions,name:"instructions",placeholder:"Enter the recipe",rows:6,value:w.instructions,onChange:g=>{i(g.target.value,g.target.name,o)}})]})},U={drinkThumb:"",drink:"",description:"",category:"",glass:"",alcoholic:"Alcoholic",ingredients:[{title:"",measure:""}],instructions:""},se=Y({drink:D().trim().required("This field is required"),description:D().required("This field is required"),category:D().required("This field is required"),glass:D().required("This field is required"),alcoholic:D().matches(/(Alcoholic|Non alcoholic)/).required("This field is required"),ingredients:li().of(Y({title:D().required("This field is required"),measure:D().required("Required")})),instructions:D().required("This field is required")}),de=({theme:i})=>{const o=ti();let a=si();I.useEffect(()=>{o(di("categories")),o(ci("glasses")),o(pi("ingredients"))},[o]);const l=j(q);l!=null&&l.form||o(R(U));const s=l.form,w=j($i),[g,h]=I.useState(),[c,k]=I.useState(),t=m=>{if(s.alcoholic==="Alcoholic")return!0;if(s.alcoholic==="Non alcoholic")return s.ingredients.filter($=>$.alcohol==="Yes").length===0?(k(null),!0):(m&&A.Notify.failure("The drink is labeled non-alcoholic but contains alcohol"),k(!0),!1)},f=m=>s.alcoholic==="Non alcoholic"||s.ingredients.some(u=>u.alcohol==="Yes")?!0:(m&&A.Notify.failure("The drink is labeled as alcoholic, but it doesn't contain alcohol"),!1),b=(m,u)=>{if(!N())return A.Notify.failure("Duplicate ingredients are not allowed");if(!t(!0)||!f(!0))return;if(!g){const p={...s};p!=null&&p.form&&delete p.form;let y=[];p.ingredients.filter(z=>y.push({title:z.title,measure:z.measure})),delete p.ingredients,p.ingredients=y,Object.assign(p,{drinkThumb:"src/images/dummyDrinkThumb.png"}),d(p,m,u);return}const $=new FormData;$.append("cocktail",g),o(gi($)).then(p=>{if(typeof p.payload=="string"&&p.payload.startsWith("https://res.cloudinary.com")){const y={...s};y!=null&&y.form&&delete y.form;let S=[];y.ingredients.filter(F=>S.push({title:F.title,measure:F.measure})),delete y.ingredients,y.ingredients=S;const z={drinkThumb:p.payload};Object.assign(y,z),d(y,m,u)}else A.Notify.failure('Format "webp" not allowed. Try upload .jpeg or .png')}).catch(p=>{console.log(p)})};function x(m,u,$){const p={...s},y={[u]:m};Object.assign(p,y),$(u,m),o(R(p)),c&&t()}const d=(m,u,$)=>{o(mi(m,u)).then(p=>{if(p.type==="drinks/addOwnDrink/fulfilled"){A.Notify.success("You added new cocktail!"),a("/my"),o(R(U)),$.resetForm({values:U});return}T(p.payload.message)})},T=m=>{m&&(m.includes("length must be at least")&&A.Notify.failure("All field must be at least 2 symbols long"),m.includes("duplicate")&&A.Notify.failure("Drink with that title already exist"))},N=()=>{const u=s.ingredients.flatMap(p=>p.title);return!(u.filter((p,y)=>u.indexOf(p)!==y).length>0)};return e.jsx(Si,{children:e.jsx(hi,{initialValues:s,validationSchema:se,validateOnChange:!1,validateOnBlur:!1,onSubmit:b,children:({setFieldValue:m,errors:u})=>e.jsxs(xi,{children:[e.jsx(_i,{setFile:h,onChangeHandler:x,setFieldValue:m,errors:u,theme:i}),e.jsx(ae,{onChangeHandler:x,setFieldValue:m,errors:u,wrongIngredients:c,theme:i}),e.jsx(le,{onChangeHandler:x,setFieldValue:m,errors:u,theme:i}),e.jsx(Ci,{theme:i,type:"submit",disabled:w===!0,title:"Add",children:"Add"})]})})})},ce=v.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${({theme:i})=>i==="dark"?` color: ${n.light};`:`color: ${n.primaryDark};`}
  @media only screen and (min-width: 768px) {
    gap: 80px;
  }
  @media only screen and (min-width: 1440px) {
    width: 313px;
  }
`,pe=v.h2`
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
`,he=v.ul`
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
`,xe=v.li`
  width: 100%;
  height: 90px;
  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
  }
`,ge=v.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;
`,me=v.p`
  margin: 0;
  display: block;
  overflow: hidden;
  ${({theme:i})=>i==="dark"?" color: rgba(243, 243, 243, 0.5);":"color: rgba(10, 10, 17, 0.50);"}
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: calc(20 / 14);
`,fe=v.h3`
  margin: 0;
  ${({theme:i})=>i==="dark"?` color: ${n.light};`:`color: ${n.primaryDark};`}
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`,ue=v.div`
  margin-bottom: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 1440px) {
    width: 209px;
  }
`,ye=v(fi)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
`,be=()=>{const i=j(oi),o=ti();I.useEffect(()=>{o(ui())},[o]);let a=j(ji);return e.jsx(ce,{theme:i,children:e.jsxs("div",{children:[e.jsx(pe,{children:"Popular drinks"}),e.jsx(he,{children:a.map(l=>e.jsx(xe,{children:e.jsxs(ye,{to:`/drink/${l._id}`,children:[e.jsx(ge,{src:l.drinkThumb,alt:l.drink,loading:"lazy",onError:s=>{s.currentTarget.src=ri}}),e.jsxs(ue,{children:[e.jsx(fe,{theme:i,children:l.drink}),e.jsx(me,{theme:i,children:l.description})]})]})},l._id))})]})})},Ae=()=>{const i=j(oi);return e.jsxs(e.Fragment,{children:[e.jsx(vi,{theme:i,title:"Add drink",marginMobile:"40px",marginTablet:"60px",marginDesktop:"60px"}),e.jsxs(Ai,{children:[e.jsx(de,{theme:i}),e.jsxs("div",{children:[e.jsxs(Ti,{children:[e.jsx(zi,{theme:i,children:"Follow Us"}),e.jsx(yi,{theme:i})]}),e.jsx(be,{})]})]})]})};export{Ae as default};
