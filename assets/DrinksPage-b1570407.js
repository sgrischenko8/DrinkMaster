import{n as a,o as t,L as E,v as s,w as k,j as r,r as h,u as $,z as y,s as Q,A as b,C as f,D as w,E as F,F as T,G as M,y as N}from"./index-9a8ab8da.js";import{c as j,d as A,e as _,f as I,g as O,h as R,i as W,P as q}from"./dummyDrinkThumb-69250d19.js";import{N as B,P as G}from"./Paginator-023308a5.js";import{S as H}from"./react-select.esm-03422472.js";import{u as v}from"./useMediaQuery-18338eaf.js";import"./img-blue-iced-tea-desktop@2x-9d8e6586.js";import"./ButtonBase-bfdc40a5.js";import"./emotion-element-c39617d8.browser.esm-1ba35024.js";import"./assertThisInitialized-88534571.js";import"./emotion-styled.browser.esm-95f23894.js";import"./getThemeProps-a69ef6bc.js";import"./useTheme-3c125e77.js";const J=a.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
`,K=a.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,U=a.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,V=a.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,X=a.p`
  margin: 0;
  /* color: ${t.light}; //#f3f3f3 */
  color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,Y=a(E)`
  color: ${({theme:e})=>e==="dark"?"rgba(243, 243, 243, 0.5)":"rgba(10, 10, 17, 0.5)"};

  font-weight: 500;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    /* color: ${t.light}; //#f3f3f3; */
    color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  }
`,Z=()=>{const{drinks:e}=s(j),o=s(k);return(e==null?void 0:e.length)!==0?r.jsx(J,{children:e==null?void 0:e.map(c=>r.jsxs(K,{children:[r.jsx(U,{src:c.drinkThumb,alt:c.drink,loading:"lazy",onError:d=>{d.currentTarget.src=A}}),r.jsxs(V,{children:[r.jsx(X,{theme:o,children:c.drink}),r.jsx(Y,{theme:o,to:`/drink/${c._id}`,children:"See more"})]})]},c._id))}):r.jsx(B,{message:"No cocktails found for your request"})},ee=a.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,te=a.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    justify-content: start;
  }
`,re=a.label`
  position: relative;
  display: inline-block;
`,oe=a.input`
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?"1px solid rgba(243, 243, 243, 0.2)":"1px solid rgba(10, 10, 17, 0.20)"};
  /* color: ${t.light}; //#f3f3f3 */
  color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    /* color: ${t.light}; //#f3f3f3 */
    color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
    opacity: 1;
  }

  &:hover,
  &:focus {
    /* border-color: rgba(243, 243, 243, 0.5); */
    border-color: ${({theme:e})=>e==="dark"?"rgba(243, 243, 243, 0.5)":"rgba(10, 10, 17, 0.50)"};
  }

  @media (min-width: 768px) {
    /* width: 264px; по макету*/
    width: 230px;
    height: 56px;
    padding: 14px 25px 15px 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`,ie=a.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    padding: 0;
    top: 18px;
    right: 24px;
  }
`,ne=a.svg`
  display: block;
  stroke: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
`,S=a(H)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background-color: ${t.secondaryDark}; //#161f37
    /* background-color: ${({theme:e})=>e==="dark"?t.secondaryDark:t.secondaryDark}; */
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
    font-size: 14px;
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.29;
    @media (min-width: 768px) {
      /* width: 199px; по макету*/
      width: 229px;
      height: 56px;
      padding: 14px 24px 15px 24px;
      font-size: 17px;
      line-height: 1.56;
    }
  }

  .react-select__placeholder {
    color: ${t.light}; //#f3f3f3
    font-size: 14px;
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.29;
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
  .react-select__input-container {
    margin: 0;
    padding: 0;
    color: ${t.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${t.light}; //#f3f3f3
    padding: 0;
    position: absolute;

    right: 17px;
    cursor: pointer;

    @media (min-width: 768px) {
      right: 24px;
    }
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__menu {
    /* background-color:${t.secondaryDark}; //#161f37; */
    background-color: ${({theme:e})=>e==="dark"?t.secondaryDark:t.white};
    padding: 14px 8px 14px 8px;
    margin-top: 4px;
    width: 335px;
    max-height: 360px;
    border-radius: 20px;
    @media (min-width: 768px) {
      /* width: 199px; //по макету*/
      width: 225px;
    }
  }

  .react-select__single-value {
    color: ${t.light}; //#f3f3f3
    width: 160px;
  }
  .react-select__menuList {
    max-height: 60px;
    /* background-color: ${t.light}; //#f3f3f3 */
    background-color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  }

  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      /* background-color: ${t.gray}; //#434d67; */
      background-color: ${({theme:e})=>e==="dark"?t.gray:t.light};
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      /* background-color: ${t.gray}; //#434d67; */
      background-color: ${({theme:e})=>e==="dark"?t.gray:t.light};
      border-radius: 20px;
    }
  }

  .react-select__option {
    background-color: transparent;
    text-overflow: ellipsis;
    transition:
      color 250ms ease,
      background-color 250ms ease;

    &:focus,
    &:active,
    &:hover {
      /* color: ${t.light}; //#f3f3f3 */
      color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
      cursor: pointer;
    }
  }
`,D={dropdownIndicator:(e,o)=>({...e,transform:o.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(e,o)=>({...e,color:o.isSelected||o.isFocused?t.light:"rgba(243, 243, 243, 0.4)"})},ae={dropdownIndicator:(e,o)=>({...e,transform:o.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(e,o)=>({...e,color:o.isSelected||o.isFocused?t.primaryDark:"rgba(10, 10, 17, 0.4)"})},se=()=>{const[e,o]=h.useState(""),c=s(_),d=s(I),l=s(k),x=c.length!==0?["All categories",...c]:[],m=d.length!==0?[{title:"All ingredients"},...d]:[],i=$(),u=v("(max-width:767px)");h.useEffect(()=>{u&&i(y(e))},[i,u,e]);const p=(n,g="")=>{switch(n){case"searchQuery":o(g),i(f(1));break;case"category":if(g==="All categories"){i(w(""));return}i(w(g)),i(f(1));break;case"ingredient":if(g==="All ingredients"){i(b(""));return}i(b(g)),i(f(1));break}},C=n=>{p("searchQuery",n.target.value.trim())},z=n=>{p("category",n.value)},L=n=>{p("ingredient",n.value)},P=n=>{n.preventDefault(),i(y(e))};return r.jsx(ee,{children:r.jsxs(te,{onSubmit:P,children:[r.jsxs(re,{children:[r.jsx(oe,{type:"text",placeholder:"Enter the text",onChange:C,theme:l}),r.jsx(ie,{type:"submit",children:r.jsx(ne,{theme:l,children:r.jsx("use",{href:`${Q}#search`})})})]}),r.jsx(S,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:l==="dark"?D:ae,theme:l,noOptionsMessage:()=>"No categories",options:x.map(n=>({label:n,value:n})),onChange:z}),r.jsx(S,{name:"ingredient",styles:D,theme:l,placeholder:"Ingredients",classNamePrefix:"react-select",noOptionsMessage:()=>"No ingredients",options:m.map(n=>({label:n.title,value:n.title})),onChange:L})]})})},be=()=>{const e=s(_),o=s(I),c=s(j),d=s(O),l=s(R),x=s(W),m=s(k),i=$(),p=v("(min-width:769px)")?9:10;return h.useEffect(()=>{e.length||i(F())},[e,i]),h.useEffect(()=>{o.length||i(T())},[i,o]),h.useEffect(()=>{i(M({searchQuery:l,page:d,limit:p}))},[i,p,d,l]),r.jsxs(r.Fragment,{children:[r.jsx(q,{title:"Drinks",theme:m}),r.jsx(se,{}),x?r.jsx(N,{}):r.jsxs(r.Fragment,{children:[r.jsx(Z,{}),r.jsx(G,{totalItems:c.max_page,limit:p})]})]})};export{be as default};
