import{s as t,c as n,N as l,u as p,j as i,U as d,V as c,k as o,m as x}from"./index-9247e53d.js";import{d as h,x as m,y as g}from"./dummyDrinkThumb-2707d37d.js";import{N as f}from"./Paginator-db645cf9.js";const u=t.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
  ${({theme:e})=>e==="dark"?` color: ${n.light};`:`color: ${n.primaryDark};`}
margin: 40px 0 51px;
@media only screen and (min-width: 768px) {
row-gap: 80px;
column-gap: 20px;   
margin: 60px 0 80px;
}
`,k=t.li`
width: 335px;
height: 676px;
display: flex;
flex-direction: column;
gap: 18px;
@media only screen and (min-width: 768px) {
width: 342px;
gap: 24px;   
};
@media only screen and (min-width: 1140px) {
width: 400px; 
}
`,y=t.img`
width: 100%;
height: auto;
border-radius: 8px;
background: linear-gradient(180deg, rgba(10, 10, 17, 0.02) 51.18%, rgba(10, 10, 17, 0.77) 97.66%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,D=t.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 768px) {
font-size: 24px;
}
`,w=t.p`
font-size: 14px;
height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,j=t.span`
font-size: 14px;
color: ${n.disabled};
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,b=t.div`
display: flex;
flex-direction: column;
gap: 4px;
`,v=t.div`
display: flex;
gap: 8px;
`,$=t.button`
display: flex;
width: 46px;
height:46px;
justify-content: center;
align-items: center;
border:none;
border-radius: 40px;
background: #161F37;
@media only screen and (min-width: 768px) {
width: 56px;
height:56px;
}
`,z=t(l)`
color: ${n.light};
padding: 18px 44px;
border-radius: 42px;
background: ${n.secondaryDark};
font-weight: 600;
border:none;
`,F="/drinkMaster/assets/sprite-6b675af9.svg",M=({drink:e})=>{const s=p(),r=()=>{location.pathname==="/DrinkMaster/my"?s(d(e._id)):location.pathname==="/DrinkMaster/favorites"&&s(c(e._id))};return i.jsxs(k,{children:[i.jsx(y,{src:e.drinkThumb,alt:` Photo of cocktail ${e.drink} `,loading:"lazy",onError:a=>{a.currentTarget.src=h}}),i.jsxs(b,{children:[i.jsx(D,{children:e.drink}),i.jsx(j,{children:e.alcoholic})]}),i.jsx(w,{children:e.description}),i.jsxs(v,{children:[i.jsx(z,{to:`/drink/${e._id}`,children:"See more"}),i.jsx($,{type:"button",onClick:r,children:i.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:i.jsx("use",{href:`${F}#icon-trash`})})})]})]})},_=()=>{let e;location.pathname==="/DrinkMaster/my"?e=o(m):location.pathname==="/DrinkMaster/favorites"&&(e=o(g));const s=o(x);return e.length>0?i.jsx(u,{theme:s,children:e.map(r=>i.jsx(M,{drink:r},r._id))}):i.jsx(f,{message:"Your drinks list is empty"})};export{_ as D};
