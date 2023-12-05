import{o as f,s as t,n,L as m,q as s,t as k,j as i,r as p,u as $,v as b,w as j}from"./index-7e3d13f7.js";import{e as x,a as h}from"./img-blue-iced-tea-desktop@2x-9d8e6586.js";import{P as D,s as v,d as z,a as L,b as T}from"./dummyDrinkThumb-f0284cbf.js";import{u as g}from"./useMediaQuery-af17f7ac.js";import"./getThemeProps-be6e1361.js";import"./emotion-element-c39617d8.browser.esm-1c58a032.js";const P=f`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,S=f`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,E=t.div`
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 123px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 130px;
    margin-bottom: 160px;
  }
`,C=t.div`
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
  }
  animation: ${P} 1s forwards;
`,M=t.p`
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
`,N=t(m)`
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
`,A=t.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  animation: ${S} 1s forwards;
  @media only screen and (min-width: 1440px) {
    margin-top: -57px;
  }
`,W=()=>{const e=s(k);return i.jsxs(E,{children:[i.jsxs(I,{children:[i.jsx(D,{title:"Craft Your Perfect Drink with Drink Master",theme:e,marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),i.jsxs(C,{children:[i.jsx(M,{theme:e,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),i.jsx(N,{to:"/add",theme:e,children:"Add drinks"})]})]}),i.jsx(A,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 768px)",srcSet:`${x} 1x, ${h} 2x`,width:"359",height:"445"}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${x} 1x, ${h} 2x`,width:"252",height:"313"}),i.jsx("img",{src:x,alt:"Coctail image",loading:"lazy",width:"252",height:"313"})]})})]})},Y=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,F=t.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,X=t.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`,q=t.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,H=t.div`
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
`,O=t.img`
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
`,Q=t.div`
  display: flex;
  justify-content: space-between;
`,R=t.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,U=t(m)`
  
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
`,_=t(m)`
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
`,B=()=>{const e=s(v),d=g("(max-width: 767px)"),o=g("(min-width: 768px) and (max-width: 1439px)"),l=s(k),[w,y]=p.useState(e);return p.useEffect(()=>{const a=d?1:o?2:3,r=e.map(c=>({...c,drinks:c.drinks.slice(0,a)}));y(r)},[d,o,e]),i.jsxs(i.Fragment,{children:[i.jsx(Y,{children:w.map(a=>i.jsxs(X,{children:[i.jsx(F,{theme:l,children:a.category}),i.jsx(q,{children:a.drinks.map((r,c)=>i.jsxs(H,{children:[i.jsx(O,{src:r.drinkThumb,alt:`Photo of ${r.drink}`,loading:"lazy",onError:u=>{u.currentTarget.src=z}}),i.jsxs(Q,{children:[i.jsx(R,{theme:l,children:r.drink}),i.jsx(U,{to:`/drink/${r._id}`,theme:l,children:"See more"})]})]},c))})]},a.category))}),i.jsx(_,{to:"/drinks",children:"Other drinks"})]})},ie=()=>{const e=$(),d=s(L),o=s(T);return p.useEffect(()=>{e(b())},[e]),d?i.jsx(j,{}):o?i.jsxs("p",{children:["Error: ",o.message]}):i.jsxs(i.Fragment,{children:[i.jsx(W,{}),i.jsx(B,{})]})};export{ie as default};
