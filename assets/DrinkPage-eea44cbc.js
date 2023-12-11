import{p as e,r as x,u as f,v as d,w as h,j as i,a7 as j,a6 as y,P as $,a8 as b,a9 as D,y as v}from"./index-64c0d537.js";import{n}from"./emotion-styled.browser.esm-e75e12ce.js";import{d as w,z as I,A as z,B as T}from"./dummyDrinkThumb-73564026.js";import"./emotion-element-c39617d8.browser.esm-d4b1530c.js";const F=n.p`
  ${({theme:t})=>t==="dark"?`color: ${e.halfLight};`:`color: ${e.halfSecondaryDark};`}
  margin-top: 8px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,P=n.p`
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
  margin-bottom: 80px;
`;const L=n.img`
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
`,C=n.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,m=n.button`
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
    margin-bottom: 80px;
  }
`,E=({drinkId:t,favoriteStatus:o})=>{const[s,r]=x.useState(!0),a=f(),c=d(h),l=()=>{a(j(t)),r(!0)},p=()=>{a(y(t)),r(!1)};return x.useEffect(()=>{r(o)},[o]),i.jsx(i.Fragment,{children:s?i.jsx(m,{theme:c,type:"button",onClick:()=>p(),children:"Remove from favorites"}):i.jsx(m,{theme:c,type:"button",onClick:()=>l(),children:"Add to favorite drinks"})})},S=({drinkDetails:t})=>{const o=d(h),{_id:s,drink:r,glass:a,alcoholic:c,description:l,drinkThumb:p,favorite:k}=t;return i.jsxs(C,{children:[i.jsxs("div",{children:[i.jsx($,{title:r}),i.jsxs(F,{theme:o,children:[a," / ",c]}),i.jsx(P,{theme:o,children:l}),i.jsx(E,{drinkId:s,favoriteStatus:k})]}),i.jsx(L,{src:p,alt:"picture Cocktail",onError:u=>{u.currentTarget.src=w}})]})},A=n.h2`
  ${({theme:t})=>t==="dark"?` color: ${e.halfLight};`:`color: ${e.halfPrimaryDark};`}

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
`,R=n.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 21px;
  align-items: center;
  row-gap: 20px;
  @media (min-width: 768px) {
    row-gap: 22px;
    @media (min-width: 1440px) {
      column-gap: 35px;
    }
  }
`,B=n.img`
  width: 157px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 220px;
  }
`,M=n.div`
  margin-top: 14px;
  width: 157px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  @media (min-width: 768px) {
    width: 220px;
  }
`,H=n.p`
  ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.primaryDark};`}

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,G=n.p`
  ${({theme:t})=>t==="dark"?` color: ${e.halfLight};`:`color: ${e.halfPrimaryDark};`}

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_=({drinkDetails:t})=>{const{ingredients:o}=t,s=d(h);return i.jsxs(i.Fragment,{children:[i.jsx(A,{theme:s,children:"Ingredient"}),i.jsx(R,{children:o==null?void 0:o.map(({ingredientId:r,title:a,measure:c,ingredientThumb:l})=>i.jsxs("li",{children:[i.jsx(B,{src:l,alt:a,loading:"lazy",onError:p=>{p.currentTarget.src=w}}),i.jsxs(M,{children:[i.jsx(H,{theme:s,children:a}),i.jsx(G,{theme:s,children:c})]})]},r))})]})},q=n.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.primaryDark};`}

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
`,J=n.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  padding-top: 40px;
  border-radius: 8px;

  background-color: black;
  @media (min-width: 768px) {
    padding: 0;
    width: 704px;
    height: 430px;
    margin-top: 20px;
  }
  @media (min-width: 1440px) {
    width: 631px;
    height: 480px;
    margin-top: 0px;
  }
`,K=n.img`
  width: 524px;
  object-fit: fill;

  @media (min-width: 768px) {
    width: 704px;
    height: 430px;
  }
  @media (min-width: 1440px) {
    width: 631px;
    height: 480px;
  }
`,N=n.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 60px;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
  }
`,O="/DrinkMaster/assets/any-cocktail-56ac0cf1.jpg",Q="/DrinkMaster/assets/any-cocktail@2x-c68d6b0a.jpg",U=({drinkDetails:t})=>{const{description:o,instructions:s}=t,r=d(h);return i.jsxs(i.Fragment,{children:[i.jsx(q,{theme:r,children:"Recipe Preparation"}),i.jsxs(N,{children:[i.jsxs("div",{children:[i.jsx(g,{theme:r,children:o}),i.jsx(g,{theme:r,children:s})]}),i.jsx(J,{children:i.jsx(K,{srcSet:`${O} 1x, ${Q} 2x`,alt:"Any Cocktail",loading:"lazy",width:335,height:430})})]})]})},Z=()=>{const t=d(I),o=d(z),{drinkId:s}=b(),r=f(),a=d(T);return x.useEffect(()=>{r(D(s))},[r]),i.jsxs(i.Fragment,{children:[t&&!o&&i.jsx(v,{}),a?i.jsxs(i.Fragment,{children:[i.jsx(S,{drinkDetails:a}),i.jsx(_,{drinkDetails:a}),i.jsx(U,{drinkDetails:a})]}):null]})};export{Z as default};
