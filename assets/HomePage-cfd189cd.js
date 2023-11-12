import{n as f,a as k,s as t,c as n,L as m,k as a,m as h,j as i,r as x,u as b,o as $,p as j}from"./index-80ab3d5d.js";import{H as D,F as v}from"./Header-b26e5389.js";import{e as p}from"./img-blue-iced-tea-desktop-08d93e29.js";import{P as z,s as L,d as S,a as T,b as P}from"./dummyDrinkThumb-ce7a5367.js";import{u as g}from"./useMediaQuery-d28a3705.js";import{M as E}from"./MainAppContainer-62ed0925.js";import"./index.esm-738dd27b.js";import"./getThemeProps-63be9a55.js";const C=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;

  @media only screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 0px;
  }
`,M=f.div`
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
`,A=k`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,N=k`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,F=t.div`
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 123px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 130px;
    margin-bottom: 160px;
  }
`,H=t.div`
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
`,I=t.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
    margin-top: 185px;
  }
  animation: ${A} 1s forwards;
`,W=t.p`
height: 60px;
font-size: 14px;
font-weight: 400px;
line-height: 20px;
margin-bottom: 32px;
${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
@media only screen and (min-width: 768px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1440px) {
width: 500px;
margin-bottom: 40px;
`,Y=t(m)`
  display: flex;
  width: 151px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  font-size: 14px;
  font-weight: 600;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${n.secondaryDark};`:`color: ${n.light};`};
  ${({theme:e})=>e==="dark"?`background-color: ${n.light};`:`background-color: ${n.secondaryDark};`}

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
    ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${n.secondaryDark};`:`background-color: ${n.light};`}
  }
`,X=t.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  animation: ${N} 1s forwards;
  @media only screen and (min-width: 1440px) {
    margin-top: 128px;
  }
`,B=()=>{const e=a(h);return i.jsxs(F,{children:[i.jsxs(I,{children:[i.jsx(z,{title:"Craft Your Perfect Drink with Drink Master",theme:e,marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),i.jsxs(H,{children:[i.jsx(W,{theme:e,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),i.jsx(Y,{to:"/add",theme:e,children:"Add drinks"})]})]}),i.jsx(X,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 768px)",srcSet:`${p}`,width:"359",height:"445"}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${p}`,width:"252",height:"313"}),i.jsx("img",{src:p,alt:"Coctail image",width:"252",height:"313"})]})})]})},G=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,O=t.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,Q=t.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`,R=t.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,U=t.div`
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
`,_=t.img`
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
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
`,q=t.div`
  display: flex;
  justify-content: space-between;
`,J=t.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,K=t(m)`
  
  text-align: right;
  font-weight: 500;
  line-height: 18px;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?"color: rgba(243, 243, 243, 0.5);":"color: rgba(10, 10, 17, 0.50);"}
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
  }
`,V=t(m)`
  display: flex;
  width: 163px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  font-weight: 600;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${n.secondaryDark};`:`color: ${n.light};`};
  ${({theme:e})=>e==="dark"?`background-color: ${n.light};`:`background-color: ${n.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 183px;
    height: 54px;
    font-size: 16px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${n.secondaryDark};`:`background-color: ${n.light};`}
  }
`,Z=()=>{const e=a(L),c=g("(max-width: 767px)"),s=g("(min-width: 768px) and (max-width: 1439px)"),r=a(h),[w,y]=x.useState(e);return x.useEffect(()=>{const d=c?1:s?2:3,o=e.map(l=>({...l,drinks:l.drinks.slice(0,d)}));y(o)},[c,s,e]),i.jsxs(i.Fragment,{children:[i.jsx(G,{children:w.map(d=>i.jsxs(Q,{children:[i.jsx(O,{theme:r,children:d.category}),i.jsx(R,{children:d.drinks.map((o,l)=>i.jsxs(U,{children:[i.jsx(_,{src:o.drinkThumb,alt:`Photo of ${o.drink}`,onError:u=>{u.currentTarget.src=S}}),i.jsxs(q,{children:[i.jsx(J,{theme:r,children:o.drink}),i.jsx(K,{to:`/drink/${o._id}`,theme:r,children:"See more"})]})]},l))})]},d.category))}),i.jsx(V,{to:"/drinks",children:"Other drinks"})]})},de=()=>{const e=b(),c=a(T),s=a(P),r=a(h);return x.useEffect(()=>{e($())},[e]),c?i.jsx(j,{}):s?i.jsxs("p",{children:["Error: ",s.message]}):i.jsxs(i.Fragment,{children:[i.jsx(D,{}),i.jsxs(E,{children:[i.jsxs(C,{theme:r,children:[i.jsx(B,{}),i.jsx(Z,{})]}),i.jsx(M,{theme:r})]}),i.jsx(v,{})]})};export{de as default};
