import{o as k,k as r,p as n,L as p,v as s,w as f,j as i,P as $,r as x,u as b,x as j,y as D}from"./index-5b4ff53f.js";import{e as m,a as h}from"./img-blue-iced-tea-desktop@2x-9d8e6586.js";import{s as v,d as L,a as T,b as P}from"./dummyDrinkThumb-73564026.js";import{b as g}from"./useMediaQuery-764c53e5.js";import"./emotion-element-c39617d8.browser.esm-83f980ee.js";const S=k`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,z=k`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,E=r.section`
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 123px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 130px;
    margin-bottom: 160px;
  }
`,C=r.div`
margin-bottom: 47px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  
  @media only screen and (min-width: 768px) {
    max-width: 619px;
    margin-bottom: 54px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 500px;
    margin-bottom: 0px;
  }
`,I=r.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
  }
  animation: ${S} 1s forwards;
`,M=r.p`
height: 60px;
line-height: calc(20 /14);
margin-bottom: 32px;
color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`};
@media only screen and (min-width: 768px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1440px) {
width: 500px;
margin-bottom: 40px;
`,N=r(p)`
  display: flex;
  width: 151px;
  justify-content: center;
  align-items: center;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${n.secondaryDark};background-color: ${n.light};`:`color: ${n.light};background-color: ${n.secondaryDark};`};

  @media only screen and (min-width: 768px) {
    width: 169px;
  }

  @media only screen and (min-width: 1440px) {
    width: 160px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${n.light};background-color: ${n.secondaryDark};`:`color: ${n.secondaryDark};background-color: ${n.light};`}
  }
`,A=r.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  animation: ${z} 1s forwards;
  @media only screen and (min-width: 1440px) {
    margin-top: -57px;
  }
`,W=()=>{const e=s(f);return i.jsxs(E,{children:[i.jsxs(I,{children:[i.jsx($,{title:"Craft Your Perfect Drink with Drink Master",theme:e,marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),i.jsxs(C,{children:[i.jsx(M,{theme:e,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),i.jsx(N,{to:"/add",theme:e,children:"Add drinks"})]})]}),i.jsx(A,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 768px)",srcSet:`${m} 1x, ${h} 2x`,width:"359",height:"445"}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${m} 1x, ${h} 2x`,width:"252",height:"313"}),i.jsx("img",{src:m,alt:"Coctail image",loading:"lazy",width:"252",height:"313"})]})})]})},Y=r.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,X=r.h2`
 color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`}
`,F=r.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`,H=r.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,O=r.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media only screen and (min-width: 768px) {
    max-width: 342px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 400px;
  }
`,Q=r.img`
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    lightgray 50% / cover no-repeat;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 1440px) {
    height: 400px;
  }
`,R=r.div`
  display: flex;
  justify-content: space-between;
`,U=r.h3`
  font-size: 16px;
  line-height: calc(18 /16);
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`};
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc (24 /18);
  }
`,_=r(p)`
  padding: 0;
  font-weight: 500;
  transition: 250ms ease;
  color: ${({theme:e})=>e==="dark"?"#f3f3f350":"rgba(10, 10, 17, 0.50)"};

  &:hover {
    color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`}
  }
`,q=r(p)`
  width: 163px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${n.secondaryDark};background-color: ${n.light};`:`color: ${n.light};background-color: ${n.secondaryDark};`};
  
  @media only screen and (min-width: 768px) {
    width: 183px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${n.light};background-color: ${n.secondaryDark};`:`color: ${n.secondaryDark};background-color: ${n.light};`}  
  }
`,B=()=>{const e=s(v),d=g("(max-width: 767px)"),o=g("(min-width: 768px) and (max-width: 1439px)"),l=s(f),[y,w]=x.useState(e);return x.useEffect(()=>{const a=d?1:o?2:3,t=e.map(c=>({...c,drinks:c.drinks.slice(0,a)}));w(t)},[d,o,e]),i.jsxs("section",{children:[i.jsx(Y,{children:y.map(a=>i.jsxs(F,{children:[i.jsx(X,{theme:l,children:a.category}),i.jsx(H,{children:a.drinks.map((t,c)=>i.jsxs(O,{children:[i.jsx(Q,{src:t.drinkThumb,alt:`Photo of ${t.drink}`,loading:"lazy",onError:u=>{u.currentTarget.src=L}}),i.jsxs(R,{children:[i.jsx(U,{theme:l,children:t.drink}),i.jsx(_,{to:`/drink/${t._id}`,theme:l,children:"See more"})]})]},c))})]},a.category))}),i.jsx(q,{to:"/drinks",children:"Other drinks"})]})},ee=()=>{const e=b(),d=s(T),o=s(P);return x.useEffect(()=>{e(j())},[e]),d?i.jsx(D,{}):o?i.jsxs("p",{children:["Error: ",o.message]}):i.jsxs(i.Fragment,{children:[i.jsx(W,{}),i.jsx(B,{})]})};export{ee as default};
