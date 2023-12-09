import{p as k,n,o as r,L as p,v as s,w as f,j as i,r as m,u as $,x as b,y as j}from"./index-a8fd8fe1.js";import{e as x,a as h}from"./img-blue-iced-tea-desktop@2x-9d8e6586.js";import{P as D,s as v,d as L,a as T,b as z}from"./dummyDrinkThumb-83586294.js";import{u as g}from"./useMediaQuery-ebeac819.js";import"./getThemeProps-ce38f633.js";import"./emotion-element-c39617d8.browser.esm-9b76b9a4.js";const P=k`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,S=k`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,E=n.div`
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 123px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 130px;
    margin-bottom: 160px;
  }
`,C=n.div`
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
`,I=n.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
  }
  animation: ${P} 1s forwards;
`,M=n.p`
height: 60px;
font-size: 14px;
font-weight: 400px;
line-height: 20px;
margin-bottom: 32px;
${({theme:e})=>e==="dark"?`color: ${r.light};`:`color: ${r.secondaryDark};`}
@media only screen and (min-width: 768px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1440px) {
width: 500px;
margin-bottom: 40px;
`,N=n(p)`
  display: flex;
  width: 151px;
  justify-content: center;
  align-items: center;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${r.secondaryDark};`:`color: ${r.light};`};
  ${({theme:e})=>e==="dark"?`background-color: ${r.light};`:`background-color: ${r.secondaryDark};`}

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
    ${({theme:e})=>e==="dark"?`color: ${r.light};`:`color: ${r.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${r.secondaryDark};`:`background-color: ${r.light};`}
  }
`,A=n.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  animation: ${S} 1s forwards;
  @media only screen and (min-width: 1440px) {
    margin-top: -57px;
  }
`,W=()=>{const e=s(f);return i.jsxs(E,{children:[i.jsxs(I,{children:[i.jsx(D,{title:"Craft Your Perfect Drink with Drink Master",theme:e,marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),i.jsxs(C,{children:[i.jsx(M,{theme:e,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),i.jsx(N,{to:"/add",theme:e,children:"Add drinks"})]})]}),i.jsx(A,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 768px)",srcSet:`${x} 1x, ${h} 2x`,width:"359",height:"445"}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${x} 1x, ${h} 2x`,width:"252",height:"313"}),i.jsx("img",{src:x,alt:"Coctail image",loading:"lazy",width:"252",height:"313"})]})})]})},Y=n.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,F=n.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${r.light};`:`color: ${r.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,X=n.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`,H=n.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,O=n.div`
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
`,Q=n.img`
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
`,R=n.div`
  display: flex;
  justify-content: space-between;
`,U=n.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${r.light};`:`color: ${r.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,_=n(p)`
  padding: 0;
  font-weight: 500;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?"color: rgba(243, 243, 243, 0.5);":"color: rgba(10, 10, 17, 0.50);"}

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${r.light};`:`color: ${r.secondaryDark};`}
  }
`,q=n(p)`
  width: 163px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${r.secondaryDark};`:`color: ${r.light};`};
  ${({theme:e})=>e==="dark"?`background-color: ${r.light};`:`background-color: ${r.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 183px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${r.light};`:`color: ${r.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${r.secondaryDark};`:`background-color: ${r.light};`}
  }
`,B=()=>{const e=s(v),d=g("(max-width: 767px)"),o=g("(min-width: 768px) and (max-width: 1439px)"),l=s(f),[w,y]=m.useState(e);return m.useEffect(()=>{const a=d?1:o?2:3,t=e.map(c=>({...c,drinks:c.drinks.slice(0,a)}));y(t)},[d,o,e]),i.jsxs(i.Fragment,{children:[i.jsx(Y,{children:w.map(a=>i.jsxs(X,{children:[i.jsx(F,{theme:l,children:a.category}),i.jsx(H,{children:a.drinks.map((t,c)=>i.jsxs(O,{children:[i.jsx(Q,{src:t.drinkThumb,alt:`Photo of ${t.drink}`,loading:"lazy",onError:u=>{u.currentTarget.src=L}}),i.jsxs(R,{children:[i.jsx(U,{theme:l,children:t.drink}),i.jsx(_,{to:`/drink/${t._id}`,theme:l,children:"See more"})]})]},c))})]},a.category))}),i.jsx(q,{to:"/drinks",children:"Other drinks"})]})},ie=()=>{const e=$(),d=s(T),o=s(z);return m.useEffect(()=>{e(b())},[e]),d?i.jsx(j,{}):o?i.jsxs("p",{children:["Error: ",o.message]}):i.jsxs(i.Fragment,{children:[i.jsx(W,{}),i.jsx(B,{})]})};export{ie as default};
