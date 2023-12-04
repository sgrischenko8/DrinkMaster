import{p as b,a as k,s as n,c as t,L as h,q as o,t as m,j as i,r as p,u as $,v as j,w as D}from"./index-a2179e53.js";import{e as x,a as g}from"./img-blue-iced-tea-desktop@2x-9d8e6586.js";import{P as v,s as z,d as L,a as S,b as T}from"./dummyDrinkThumb-39293631.js";import{u as f}from"./useMediaQuery-bc6af8b7.js";import"./getThemeProps-c5ce5fea.js";const P=b.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    /* background-color: rgba(188, 230, 210, 0.3); */
    background-color: ${({theme:e})=>e==="dark"?"rgba(188, 230, 210, 0.3)":"rgba(188, 230, 210, 0.4)"};
    filter: blur(105px);
    z-index: -10;
    width: 387px;
    height: 381px;
    top: 343px;
    right: 193px;
  }
`,E=k`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,C=k`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,I=n.div`
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 123px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 130px;
    margin-bottom: 160px;
  }
`,M=n.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 335px;

  margin-bottom: 47px;
  @media only screen and (min-width: 768px) {
    max-width: 619px;
    margin-bottom: 54px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 500px;
    margin-bottom: 0px;
  }
`,N=n.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
  }
  animation: ${E} 1s forwards;
`,A=n.p`
height: 60px;
font-size: 14px;
font-weight: 400px;
line-height: 20px;
margin-bottom: 32px;
${({theme:e})=>e==="dark"?`color: ${t.light};`:`color: ${t.secondaryDark};`}
@media only screen and (min-width: 768px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1440px) {
width: 500px;
margin-bottom: 40px;
`,W=n(h)`
  display: flex;
  width: 151px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  font-size: 14px;
  font-weight: 600;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${t.secondaryDark};`:`color: ${t.light};`};
  ${({theme:e})=>e==="dark"?`background-color: ${t.light};`:`background-color: ${t.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 169px;
    height: 54px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1440px) {
    width: 160px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${t.light};`:`color: ${t.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${t.secondaryDark};`:`background-color: ${t.light};`}
  }
`,Y=n.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  animation: ${C} 1s forwards;
  @media only screen and (min-width: 1440px) {
    margin-top: -57px;
  }
`,F=()=>{const e=o(m);return i.jsxs(I,{children:[i.jsxs(N,{children:[i.jsx(v,{title:"Craft Your Perfect Drink with Drink Master",theme:e,marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),i.jsxs(M,{children:[i.jsx(A,{theme:e,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),i.jsx(W,{to:"/add",theme:e,children:"Add drinks"})]})]}),i.jsx(Y,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 768px)",srcSet:`${x} 1x, ${g} 2x`,width:"359",height:"445"}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${x} 1x, ${g} 2x`,width:"252",height:"313"}),i.jsx("img",{src:x,alt:"Coctail image",loading:"lazy",width:"252",height:"313"})]})})]})},X=n.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,q=n.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${t.light};`:`color: ${t.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,B=n.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`,G=n.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,H=n.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;

  @media only screen and (min-width: 768px) {
    max-width: 342px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 400px;
  }
`,O=n.img`
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
`,Q=n.div`
  display: flex;
  justify-content: space-between;
`,R=n.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${t.light};`:`color: ${t.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,U=n(h)`
  
  text-align: right;
  font-weight: 500;
  line-height: 18px;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?"color: rgba(243, 243, 243, 0.5);":"color: rgba(10, 10, 17, 0.50);"}
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${t.light};`:`color: ${t.secondaryDark};`}
  }
`,_=n(h)`
  display: flex;
  width: 163px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  font-weight: 600;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${t.secondaryDark};`:`color: ${t.light};`};
  ${({theme:e})=>e==="dark"?`background-color: ${t.light};`:`background-color: ${t.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 183px;
    height: 54px;
    font-size: 16px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${t.light};`:`color: ${t.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${t.secondaryDark};`:`background-color: ${t.light};`}
  }
`,J=()=>{const e=o(z),c=f("(max-width: 767px)"),a=f("(min-width: 768px) and (max-width: 1439px)"),s=o(m),[w,y]=p.useState(e);return p.useEffect(()=>{const d=c?1:a?2:3,r=e.map(l=>({...l,drinks:l.drinks.slice(0,d)}));y(r)},[c,a,e]),i.jsxs(i.Fragment,{children:[i.jsx(X,{children:w.map(d=>i.jsxs(B,{children:[i.jsx(q,{theme:s,children:d.category}),i.jsx(G,{children:d.drinks.map((r,l)=>i.jsxs(H,{children:[i.jsx(O,{src:r.drinkThumb,alt:`Photo of ${r.drink}`,loading:"lazy",onError:u=>{u.currentTarget.src=L}}),i.jsxs(Q,{children:[i.jsx(R,{theme:s,children:r.drink}),i.jsx(U,{to:`/drink/${r._id}`,theme:s,children:"See more"})]})]},l))})]},d.category))}),i.jsx(_,{to:"/drinks",children:"Other drinks"})]})},te=()=>{const e=$(),c=o(S),a=o(T),s=o(m);return p.useEffect(()=>{e(j())},[e]),c?i.jsx(D,{}):a?i.jsxs("p",{children:["Error: ",a.message]}):i.jsxs(i.Fragment,{children:[i.jsx(F,{}),i.jsx(J,{}),i.jsx(P,{theme:s})]})};export{te as default};
