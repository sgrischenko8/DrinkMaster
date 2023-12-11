import{k as t,p as s,N as p,u as d,j as e,s as h,a5 as x,a6 as m,v as l,w as g}from"./index-64c0d537.js";import{d as f,t as u,y as w}from"./dummyDrinkThumb-73564026.js";import{N as k}from"./Paginator-07658884.js";const y=t.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  ${({theme:i})=>i==="dark"?` color: ${s.light};`:`color: ${s.primaryDark};`}

  @media only screen and (min-width: 768px) {
    row-gap: 80px;
    column-gap: 20px;
  }
`,D=t.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media only screen and (min-width: 768px) {
    width: 342px;
    gap: 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 400px;
  }
`,j=t.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`,b=t.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`,v=t.p`
  height: 75px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: calc(22 / 16);
    -webkit-line-clamp: 5;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 4px;
    height: 96px;
    -webkit-line-clamp: 4;
  }
`,$=t.span`
  color: ${s.disabled};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,F=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,O=t.div`
  display: flex;
  gap: 8px;
`,z=t.button`
  padding: 0;
  display: flex;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  background: #161f37;
  @media only screen and (min-width: 768px) {
    width: 56px;
    height: 56px;
  }
`,T=t(p)`
  color: ${s.light};
  background: ${s.secondaryDark};
`,L=({drink:i})=>{const o=d(),a=()=>{location.pathname.includes("/my")?o(x(i._id)):location.pathname.includes("/favorites")&&o(m(i._id))};return e.jsxs(D,{children:[e.jsx(j,{src:i.drinkThumb,alt:` Photo of cocktail ${i.drink} `,loading:"lazy",onError:n=>{n.currentTarget.src=f}}),e.jsxs(F,{children:[e.jsx(b,{children:i.drink}),e.jsx($,{children:i.alcoholic})]}),e.jsx(v,{children:i.description}),e.jsxs(O,{children:[e.jsx(T,{to:`/drink/${i._id}`,children:"See more"}),e.jsx(z,{type:"button",onClick:a,children:e.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${h}#trash`})})})]})]})},I=({drinks:i})=>{const o=l(u),a=l(w);let n=[];location.pathname.includes("/my")?n.push(...o):location.pathname.includes("/favorites")&&n.push(...a);const c=l(g);return n.length>0?e.jsx(y,{theme:c,children:i.map(r=>e.jsx(L,{drink:r},r._id))}):e.jsx(k,{message:"Your drinks list is empty"})};export{I as D};
