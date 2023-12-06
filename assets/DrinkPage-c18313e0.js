import{n as e,r as x,u as f,q as c,t as h,j as i,a2 as j,a1 as y,a3 as b,a4 as $,w as D}from"./index-d3792b76.js";import{n}from"./emotion-styled.browser.esm-1287115e.js";import{P as v,d as k,z,A as I,B as T}from"./dummyDrinkThumb-76d9cb42.js";import"./emotion-element-c39617d8.browser.esm-245fffb2.js";const F=n.p`
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
`,E=({drinkId:t,favoriteStatus:r})=>{const[s,o]=x.useState(!0),a=f(),d=c(h),l=()=>{a(j(t)),o(!0)},p=()=>{a(y(t)),o(!1)};return x.useEffect(()=>{o(r)},[r]),i.jsx(i.Fragment,{children:s?i.jsx(m,{theme:d,type:"button",onClick:()=>p(),children:"Remove from favorites"}):i.jsx(m,{theme:d,type:"button",onClick:()=>l(),children:"Add to favorite drinks"})})},M=({drinkDetails:t})=>{const r=c(h),{_id:s,drink:o,glass:a,alcoholic:d,description:l,drinkThumb:p,favorite:w}=t;return i.jsxs(C,{children:[i.jsxs("div",{children:[i.jsx(v,{title:o}),i.jsxs(F,{theme:r,children:[a," / ",d]}),i.jsx(P,{theme:r,children:l}),i.jsx(E,{drinkId:s,favoriteStatus:w})]}),i.jsx(L,{src:p,alt:"picture Cocktail",loading:"lazy",onError:u=>{u.currentTarget.src=k}})]})},S=n.h2`
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
`,A=n.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 21px;
  align-items: center;

  @media (min-width: 1440px) {
    column-gap: 35px;
  }
`,R=n.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,B=n.img`
  width: 157px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 220px;
  }
`,H=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,q=n.p`
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
`,G=n.p`
  ${({theme:t})=>t==="dark"?` color: ${e.halfLight};`:`color: ${e.halfPrimaryDark};`}
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,_=({drinkDetails:t})=>{const{ingredients:r}=t,s=c(h);return i.jsxs(i.Fragment,{children:[i.jsx(S,{theme:s,children:"Ingredient"}),i.jsx(A,{children:r==null?void 0:r.map(({ingredientId:o,title:a,measure:d,ingredientThumb:l})=>i.jsxs(R,{children:[i.jsx(B,{src:l,alt:a,loading:"lazy",onError:p=>{p.currentTarget.src=k}}),i.jsxs(H,{children:[i.jsx(q,{theme:s,children:a}),i.jsx(G,{theme:s,children:d})]})]},o))})]})},J=n.h2`
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
`,K=n.div`
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
`,N=n.img`
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
`,O=n.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 60px;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
  }
`,Q="/DrinkMaster/assets/any-cocktail-56ac0cf1.jpg",U="/DrinkMaster/assets/any-cocktail@2x-c68d6b0a.jpg",V=({drinkDetails:t})=>{const{description:r,instructions:s}=t,o=c(h);return i.jsxs(i.Fragment,{children:[i.jsx(J,{theme:o,children:"Recipe Preparation"}),i.jsxs(O,{children:[i.jsxs("div",{children:[i.jsx(g,{theme:o,children:r}),i.jsx(g,{theme:o,children:s})]}),i.jsx(K,{children:i.jsx(N,{srcSet:`${Q} 1x, ${U} 2x`,alt:"Any Cocktail",loading:"lazy",width:335,height:430})})]})]})},ii=()=>{const t=c(z),r=c(I),{drinkId:s}=b(),o=f(),a=c(T);return x.useEffect(()=>{o($(s))},[o]),i.jsxs(i.Fragment,{children:[t&&!r&&i.jsx(D,{}),a?i.jsxs(i.Fragment,{children:[i.jsx(M,{drinkDetails:a}),i.jsx(_,{drinkDetails:a}),i.jsx(V,{drinkDetails:a})]}):null]})};export{ii as default};
