import{s as a,n as t,L as M,q as s,t as k,j as r,r as d,u as $,x as b,y,z as u,A as w,C as P,D as Q,E as T,w as F}from"./index-7e3d13f7.js";import{c as j,d as N,e as _,f as I,g as A,h as O,i as W,P as R}from"./dummyDrinkThumb-f0284cbf.js";import{N as q,P as B}from"./Paginator-3cd29c2c.js";import{S as Z}from"./react-select.esm-cb53ec95.js";import{u as C}from"./useMediaQuery-af17f7ac.js";import"./img-blue-iced-tea-desktop@2x-9d8e6586.js";import"./ButtonBase-b1880b11.js";import"./emotion-element-c39617d8.browser.esm-1c58a032.js";import"./assertThisInitialized-ae57054e.js";import"./emotion-styled.browser.esm-d85b813e.js";import"./getThemeProps-be6e1361.js";import"./useTheme-fcc7a3bd.js";const G=a.ul`
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
`,H=a.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,J=a.img`
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
`,K=a.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,U=a.p`
  margin: 0;
  /* color: ${t.light}; //#f3f3f3 */
  color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,V=a(M)`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({theme:e})=>e==="dark"?"rgba(243, 243, 243, 0.5)":"rgba(10, 10, 17, 0.5)"};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    /* color: ${t.light}; //#f3f3f3; */
    color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,X=()=>{const{drinks:e}=s(j),o=s(k);return(e==null?void 0:e.length)!==0?r.jsx(G,{children:e==null?void 0:e.map(c=>r.jsxs(H,{children:[r.jsx(J,{src:c.drinkThumb,alt:c.drink,loading:"lazy",onError:p=>{p.currentTarget.src=N}}),r.jsxs(K,{children:[r.jsx(U,{theme:o,children:c.drink}),r.jsx(V,{theme:o,to:`/drink/${c._id}`,children:"See more"})]})]},c._id))}):r.jsx(q,{message:"No cocktails found for your request"})},Y=e=>d.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),ee=a.div`
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
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  /* border: 1px solid rgba(243, 243, 243, 0.2); */
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
    border: none;
    padding: 0;
    background-color: transparent;

    top: 18px;
    right: 24px;
    cursor: pointer;
  }
`,ne=a(Y)`
  display: block;
  /* stroke: ${t.light}; //#f3f3f3 */
  stroke: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
`,S=a(Z)`
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
    /* color: ${t.light}; //#f3f3f3 */
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
`,D={dropdownIndicator:(e,o)=>({...e,transform:o.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(e,o)=>({...e,color:o.isSelected||o.isFocused?t.light:"rgba(243, 243, 243, 0.4)"})},ae={dropdownIndicator:(e,o)=>({...e,transform:o.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(e,o)=>({...e,color:o.isSelected||o.isFocused?t.primaryDark:"rgba(10, 10, 17, 0.4)"})},se=()=>{const[e,o]=d.useState(""),c=s(_),p=s(I),l=s(k),x=c.length!==0?["All categories",...c]:[],m=p.length!==0?[{title:"All ingredients"},...p]:[],i=$(),f=C("(max-width:767px)");d.useEffect(()=>{f&&i(b(e))},[i,f,e]);const g=(n,h="")=>{switch(n){case"searchQuery":o(h),i(u(1));break;case"category":if(h==="All categories"){i(w(""));return}i(w(h)),i(u(1));break;case"ingredient":if(h==="All ingredients"){i(y(""));return}i(y(h)),i(u(1));break}},v=n=>{g("searchQuery",n.target.value.trim())},L=n=>{g("category",n.value)},z=n=>{g("ingredient",n.value)},E=n=>{n.preventDefault(),i(b(e))};return r.jsx(ee,{children:r.jsxs(te,{onSubmit:E,children:[r.jsxs(re,{children:[r.jsx(oe,{type:"text",placeholder:"Enter the text",onChange:v,theme:l}),r.jsx(ie,{type:"submit",children:r.jsx(ne,{theme:l})})]}),r.jsx(S,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:l==="dark"?D:ae,theme:l,noOptionsMessage:()=>"No categories",options:x.map(n=>({label:n,value:n})),onChange:L}),r.jsx(S,{name:"ingredient",styles:D,theme:l,placeholder:"Ingredients",classNamePrefix:"react-select",noOptionsMessage:()=>"No ingredients",options:m.map(n=>({label:n.title,value:n.title})),onChange:z})]})})},ye=()=>{const e=s(_),o=s(I),c=s(j),p=s(A),l=s(O),x=s(W),m=s(k),i=$(),g=C("(min-width:769px)")?9:10;return d.useEffect(()=>{e.length||i(P())},[e,i]),d.useEffect(()=>{o.length||i(Q())},[i,o]),d.useEffect(()=>{i(T({searchQuery:l,page:p,limit:g}))},[i,g,p,l]),r.jsxs(r.Fragment,{children:[r.jsx(R,{title:"Drinks",theme:m}),r.jsx(se,{}),x?r.jsx(F,{}):r.jsxs(r.Fragment,{children:[r.jsx(X,{}),r.jsx(B,{totalItems:c.max_page,limit:g})]})]})};export{ye as default};
