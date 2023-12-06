import{s as t,n as s,N as c,u as p,j as e,a0 as d,a1 as x,q as a,t as h}from"./index-d3792b76.js";import{d as m,x as f,y as g}from"./dummyDrinkThumb-76d9cb42.js";import{N as u}from"./Paginator-78d50468.js";const w=t.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  ${({theme:i})=>i==="dark"?` color: ${s.light};`:`color: ${s.primaryDark};`}
  margin: 40px 0 51px;
  @media only screen and (min-width: 768px) {
    row-gap: 80px;
    column-gap: 20px;
    margin: 60px 0 80px;
  }
`,y=t.li`
  width: 335px;
  height: 676px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media only screen and (min-width: 768px) {
    width: 342px;
    gap: 24px;
  }
  @media only screen and (min-width: 1140px) {
    width: 400px;
  }
`,D=t.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`,k=t.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`,j=t.p`
  font-size: 14px;
  height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,v=t.span`
  font-size: 14px;
  color: ${s.disabled};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,b=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,$=t.div`
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
`,F=t(c)`
  color: ${s.light};
  background: ${s.secondaryDark};
`,O="/DrinkMaster/assets/sprite-6b675af9.svg",T=({drink:i})=>{const o=p(),n=()=>{location.pathname.includes("/my")?o(d(i._id)):location.pathname.includes("/favorites")&&o(x(i._id))};return e.jsxs(y,{children:[e.jsx(D,{src:i.drinkThumb,alt:` Photo of cocktail ${i.drink} `,loading:"lazy",onError:r=>{r.currentTarget.src=m}}),e.jsxs(b,{children:[e.jsx(k,{children:i.drink}),e.jsx(v,{children:i.alcoholic})]}),e.jsx(j,{children:i.description}),e.jsxs($,{children:[e.jsx(F,{to:`/drink/${i._id}`,children:"See more"}),e.jsx(z,{type:"button",onClick:n,children:e.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${O}#icon-trash`})})})]})]})},B=()=>{const i=a(f),o=a(g);let n=[];location.pathname.includes("/my")?n.push(...i):location.pathname.includes("/favorites")&&n.push(...o);const r=a(h);return n.length>0?e.jsx(w,{theme:r,children:n.map(l=>e.jsx(T,{drink:l},l._id))}):e.jsx(u,{message:"Your drinks list is empty"})};export{B as D};
