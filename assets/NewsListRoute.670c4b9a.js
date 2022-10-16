import{j as e,c as n,a as o,L as m,P as p}from"./index.2dc549d4.js";import{A as _}from"./AsyncImage.ef1742a3.js";import{g as d,u}from"./useQuery.742d29c6.js";const w="_link_hpv1i_1",N="_image_hpv1i_11",g="_title_hpv1i_21",r={link:w,image:N,title:g},L=({imgSrc:s,title:t,url:a,className:i,titleClassName:c})=>e("article",{className:n(r.wrap,i),children:o(m,{to:a,className:r.link,children:[e(_,{src:s,alt:t,className:r.image}),e("h2",{className:n(r.title,c),children:t})]})}),h={},k=d`
    query NewsListRoute($skip: Int!, $limit: Int!) {
  newsList(skip: $skip, limit: $limit) {
    rows {
      id
      title
      img
    }
  }
}
    `;function y(s){const t={...h,...s};return u(k,t)}const f="_wrap_t8b9o_1",v="_card_t8b9o_15",T="_cardTitle_t8b9o_33",l={wrap:f,card:v,cardTitle:T},R=()=>{var a;const{data:s}=y({variables:{skip:0,limit:100}}),t=(a=s==null?void 0:s.newsList.rows)!=null?a:[];return e("div",{className:l.wrap,children:t.map(i=>{var c;return e(L,{className:l.card,titleClassName:l.cardTitle,title:i.title,url:p.NEWS_DETAIL.replace(":id",i.id),imgSrc:(c=i.img)!=null?c:""},i.id)})})};export{R as NewsListRoute};
