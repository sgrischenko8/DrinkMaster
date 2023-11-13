import{s as f,n,c as e,r as h,u as k,k as d,m as x,j as i,a2 as b,V as y,a3 as $,a4 as D,p as z}from"./index-6586d40f.js";import{P as v,d as u,z as I,A as F,B as T}from"./dummyDrinkThumb-8c23b3c2.js";import{H as M,F as P}from"./Header-b8d97d9d.js";import{M as C}from"./MainAppContainer-ec1b0da1.js";import"./index.esm-18c56132.js";const L=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media (min-width: 1440px) {
    padding-top: 158px;
    padding-bottom: 140px;
    max-width: 1440px;
  }
`;f.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const A=n.p`
  ${({theme:t})=>t==="dark"?`color: ${e.halfLight};`:`color: ${e.halfSecondaryDark};`}
  margin-top: 8px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,E=n.p`
  ${({theme:t})=>t==="dark"?`color: ${e.light};`:`color: ${e.primaryDark};`}
  margin-bottom: 40px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }

  @media (min-width: 1440px) {
    width: 593px;
  }
`;n.button`
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
`;const R=n.img`
  width: 335px;
  height: 400px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-fit: none;
    object-position: 50% 20%;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
    object-fit: contain;
    object-position: 50% 50%;
    margin-right: 0px;
  }
`,S=n.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,m=n.button`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
  ${({theme:t})=>t==="dark"?` color: ${e.secondaryDark};`:`color: ${e.light};`}
  ${({theme:t})=>t==="dark"?` background-color: ${e.light};`:`background-color: ${e.secondaryDark};`}
  transition:
    color 250ms ease,
    background-color 250ms ease;

  &:hover {
    ${({theme:t})=>t==="dark"?` background-color: ${e.secondaryDark};`:`background-color: ${e.light};`}
    ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.secondaryDark};`}
  }

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
    border-radius: 42px;
    padding: 18px 44px;
    margin-bottom: 80px;
  }
`,B=({drinkId:t,favoriteStatus:r})=>{const[a,o]=h.useState(!0),s=k(),p=d(x),c=()=>{s(b(t)),o(!0)},l=()=>{s(y(t)),o(!1)};return h.useEffect(()=>{o(r)},[r]),i.jsx(i.Fragment,{children:a?i.jsx(m,{theme:p,type:"button",onClick:()=>l(),children:"Remove from favorites"}):i.jsx(m,{theme:p,type:"button",onClick:()=>c(),children:"Add to favorite drinks"})})},H=({drinkDetails:t})=>{const r=d(x),{_id:a,drink:o,glass:s,alcoholic:p,description:c,drinkThumb:l,favorite:w}=t;return i.jsxs(S,{children:[i.jsxs("div",{children:[i.jsx(v,{title:o}),i.jsxs(A,{theme:r,children:[s," / ",p]}),i.jsx(E,{theme:r,children:c}),i.jsx(B,{drinkId:a,favoriteStatus:w})]}),i.jsx(R,{src:l,alt:"picture Cocktail",loading:"lazy",onError:j=>{j.currentTarget.src=u}})]})},G=n.h2`
  ${({theme:t})=>t==="dark"?` color: ${e.halfLight};`:`color: ${e.halfPrimaryDark};`}
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  transition: color 250ms ease;
  margin-top: 18px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`,V=n.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 21px;
  align-items: center;

  @media (min-width: 1440px) {
    column-gap: 35px;
  }
`,_=n.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,q=n.img`
  width: 157px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 220px;
  }
`,J=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,K=n.p`
  margin: 0;
  ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.primaryDark};`}
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.13;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,N=n.p`
  ${({theme:t})=>t==="dark"?` color: ${e.halfLight};`:`color: ${e.halfPrimaryDark};`}
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,O=({drinkDetails:t})=>{const{ingredients:r}=t,a=d(x);return i.jsxs(i.Fragment,{children:[i.jsx(G,{theme:a,children:"Ingredient"}),i.jsx(V,{children:r==null?void 0:r.map(({ingredientId:o,title:s,measure:p,ingredientThumb:c})=>i.jsxs(_,{children:[i.jsx(q,{src:c,alt:s,loading:"lazy",onError:l=>{l.currentTarget.src=u}}),i.jsxs(J,{children:[i.jsx(K,{theme:a,children:s}),i.jsx(N,{theme:a,children:p})]})]},o))})]})},Q=n.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.primaryDark};`}

  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }

  @media (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 60px;
  }
`,g=n.p`
  ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.primaryDark};`}
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.28;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }

  @media (min-width: 1440px) {
    width: 549px;
  }
`,U=n.img`
  width: 335px;
  height: 430px;
  border-radius: 8px;
  object-fit: none;

  @media (min-width: 768px) {
    width: 704px;
    height: 430px;
    margin-top: 20px;
  }
  @media (min-width: 1440px) {
    width: 631px;
    height: 480px;
    margin-top: 0px;
  }
`,W=n.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 60px;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
  }
`,X="/drinkMaster/assets/any-cocktail-56ac0cf1.jpg",Y=({drinkDetails:t})=>{const{description:r,instructions:a}=t,o=d(x);return i.jsxs(i.Fragment,{children:[i.jsx(Q,{theme:o,children:"Recipe Preparation"}),i.jsxs(W,{children:[i.jsxs("div",{children:[i.jsx(g,{theme:o,children:r}),i.jsx(g,{theme:o,children:a})]}),i.jsx(U,{src:X,alt:"Any Cocktail",loading:"lazy"})]})]})},oi=()=>{const t=d(I),r=d(F),{drinkId:a}=$(),o=k(),s=d(T);return h.useEffect(()=>{o(D(a))},[o]),i.jsxs(i.Fragment,{children:[i.jsx(M,{}),i.jsx(C,{children:i.jsx(L,{children:t&&!r?i.jsx(z,{}):i.jsxs(i.Fragment,{children:[i.jsx(H,{drinkDetails:s}),i.jsx(O,{drinkDetails:s}),i.jsx(Y,{drinkDetails:s})]})})}),i.jsx(P,{})]})};export{oi as default};