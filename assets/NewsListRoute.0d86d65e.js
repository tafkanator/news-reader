import{j as e,c as n,a as o,L as m,P as p}from"./index.6473262d.js";import{A as _,g as d,u}from"./AsyncImage.efa456a9.js";const w="_link_hpv1i_1",N="_image_hpv1i_11",g="_title_hpv1i_21",l={link:w,image:N,title:g},L=({imgSrc:s,title:t,url:a,className:i,titleClassName:c})=>e("article",{className:n(l.wrap,i),children:o(m,{to:a,className:l.link,children:[e(_,{src:s,alt:t,className:l.image}),e("h2",{className:n(l.title,c),children:t})]})}),h={},k=d`
    query NewsListRoute($skip: Int!, $limit: Int!) {
  newsList(skip: $skip, limit: $limit) {
    rows {
      id
      title
      img
    }
  }
}
    `;function y(s){const t={...h,...s};return u(k,t)}const v="_wrap_t8b9o_1",T="_card_t8b9o_15",$="_cardTitle_t8b9o_33",r={wrap:v,card:T,cardTitle:$},I=()=>{var a;const{data:s}=y({variables:{skip:0,limit:100}}),t=(a=s==null?void 0:s.newsList.rows)!=null?a:[];return e("div",{className:r.wrap,children:t.map(i=>{var c;return e(L,{className:r.card,titleClassName:r.cardTitle,title:i.title,url:p.NEWS_DETAIL.replace(":id",i.id),imgSrc:(c=i.img)!=null?c:""},i.id)})})};export{I as NewsListRoute};
