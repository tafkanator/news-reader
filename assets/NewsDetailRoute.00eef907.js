import{r as h,t as E,s as z,A as Q,p as L,a as v,j as a,c as I,v as B,w as G,P as O}from"./index.2dc549d4.js";import{A as U}from"./AsyncImage.ef1742a3.js";import{a as H,v as J,D as K,g as j,u as V}from"./useQuery.742d29c6.js";function X(t,e){var n=H(e==null?void 0:e.client);J(t,K.Mutation);var o=h.exports.useState({called:!1,loading:!1,client:n}),l=o[0],s=o[1],r=h.exports.useRef({result:l,mutationId:0,isMounted:!0,client:n,mutation:t,options:e});Object.assign(r.current,{client:n,options:e,mutation:t});var C=h.exports.useCallback(function(m){m===void 0&&(m={});var p=r.current,g=p.client,S=p.options,M=p.mutation,y=E(E({},S),{mutation:M});!r.current.result.loading&&!y.ignoreResults&&r.current.isMounted&&s(r.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:g});var D=++r.current.mutationId,f=z(y,m);return g.mutate(f).then(function(c){var u,d,i,w=c.data,N=c.errors,q=N&&N.length>0?new Q({graphQLErrors:N}):void 0;if(D===r.current.mutationId&&!f.ignoreResults){var T={called:!0,loading:!1,data:w,error:q,client:g};r.current.isMounted&&!L(r.current.result,T)&&s(r.current.result=T)}return(d=(u=r.current.options)===null||u===void 0?void 0:u.onCompleted)===null||d===void 0||d.call(u,c.data,f),(i=m.onCompleted)===null||i===void 0||i.call(m,c.data,f),c}).catch(function(c){var u,d,i,w;if(D===r.current.mutationId&&r.current.isMounted){var N={loading:!1,error:c,data:void 0,called:!0,client:g};L(r.current.result,N)||s(r.current.result=N)}if(((u=r.current.options)===null||u===void 0?void 0:u.onError)||f.onError)return(i=(d=r.current.options)===null||d===void 0?void 0:d.onError)===null||i===void 0||i.call(d,c,f),(w=m.onError)===null||w===void 0||w.call(m,c,f),{data:void 0,errors:c};throw c})},[]),b=h.exports.useCallback(function(){r.current.isMounted&&s({called:!1,loading:!1,client:n})},[]);return h.exports.useEffect(function(){return r.current.isMounted=!0,function(){r.current.isMounted=!1}},[]),[C,E({reset:b},l)]}const Y="_wrap_1py4z_1",Z="_input_1py4z_5",k={wrap:Y,input:Z},x=({label:t,type:e,value:n,onChange:o})=>{const l={className:k.input,value:n,onChange:s=>o(s.target.value)};return v("label",{className:k.wrap,children:[t,e==="textarea"?a("textarea",{rows:4,...l}):a("input",{type:e,...l})]})};function A(t){const[e,n]=h.exports.useState(t);return{value:e,onChange:o=>n(o),reset:()=>n(t)}}const ee="_wrap_19klr_1",te="_footer_19klr_8",ne="_error_19klr_17",R={wrap:ee,footer:te,error:ne},re=({onSubmit:t,title:e,className:n})=>{const o=A(""),l=A(""),[s,r]=h.exports.useState(""),[C,b]=h.exports.useState(!1);async function m(p){p.preventDefault(),r(""),b(!0);try{await t({email:o.value,content:l.value}),o.reset(),l.reset()}catch(g){r(g instanceof Error?g.message:"Saving comment failed")}finally{b(!1)}}return v("form",{onSubmit:m,className:I(R.wrap,n),children:[e,a(x,{type:"email",label:"Email",...o}),a(x,{type:"textarea",label:"Comment",...l}),v("div",{className:R.footer,children:[a("p",{className:R.error,children:s}),a("button",{type:"submit",className:"btn",disabled:C,children:C?"Saving data ...":"Add comment"})]})]})},ae="_wrap_b2b7m_1",oe="_email_b2b7m_13",se="_date_b2b7m_17",ie="_content_b2b7m_22",$={wrap:ae,email:oe,date:se,content:ie},ce=({email:t,date:e,className:n,children:o})=>v("article",{className:I($.wrap,n),children:[a("h4",{className:$.email,children:t}),a("p",{className:$.date,children:e}),a("div",{className:$.content,children:o})]}),le="_wrap_1ewfl_1",me="_line_1ewfl_6",ue="_gradient_1ewfl_1",P={wrap:le,line:me,gradient:ue},de=({lines:t=3,className:e})=>a("div",{className:I(P.wrap,e),children:Array.from({length:t}).map((n,o)=>a("div",{className:P.line},o))}),W={},ge=j`
    query NewsDetailRoute($id: ID!) {
  newsItem(id: $id) {
    id
    img
    title
    content
    url
    comments {
      id
      email
      createdDate
      content
    }
  }
}
    `;function fe(t){const e={...W,...t};return V(ge,e)}const _e=j`
    mutation NewsDetailRouteCreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
  }
}
    `;function he(t){const e={...W,...t};return X(_e,e)}function pe(t,e){return new Date(t.getTime()+Math.random()*(e.getTime()-t.getTime())).getTime()}function F(t,e={}){return Date.now()-t<6048e5?we(t):new Date(t).toLocaleDateString(void 0,{year:"numeric",month:e.month||"short",day:"numeric",hour:e.showTime?"2-digit":void 0,minute:e.showTime?"2-digit":void 0,second:e.showSeconds?"2-digit":void 0})}function we(t){const e=Math.floor((Date.now()-t)/1e3/60),n=Math.floor(e/60),o=Math.floor(n/24);return o>1?`${o} days ago`:o===1?"a day ago":n>1?`${n} hours ago`:n===1?"an hour ago":e>1?`${e} minutes ago`:"a moment ago"}function ve(t){return t instanceof Q?t.graphQLErrors.map(e=>e.message).join(", "):t instanceof Error?t.message:typeof t=="string"?t:"Something went wrong. Please reload the page"}const Ce="_wrap_g7m87_1",be="_imgWrap_g7m87_16",Ne="_img_g7m87_16",ye="_date_g7m87_34",De="_title_g7m87_40",Ie="_content_g7m87_45",Se="_readMore_g7m87_59",Me="_comments_g7m87_63",$e="_newComment_g7m87_80",Ee="_blink_g7m87_1",Re="_commentForm_g7m87_84",_={wrap:Ce,imgWrap:be,img:Ne,date:ye,title:De,content:Ie,readMore:Se,comments:Me,newComment:$e,blink:Ee,commentForm:Re},Ae=()=>{var S,M,y,D,f,c,u,d;const{params:{id:t}}=B(),{data:e,loading:n,error:o}=fe({variables:{id:t}}),{handleCreateComment:l,createdCommentIds:s}=Te(),r=(M=(S=e==null?void 0:e.newsItem)==null?void 0:S.title)!=null?M:"",C=F(pe(new Date(1800,1,1),new Date)),b=(y=e==null?void 0:e.newsItem)==null?void 0:y.content,m=(f=(D=e==null?void 0:e.newsItem)==null?void 0:D.img)!=null?f:"",p=(c=e==null?void 0:e.newsItem)==null?void 0:c.url,g=(d=(u=e==null?void 0:e.newsItem)==null?void 0:u.comments)!=null?d:[];return!(e!=null&&e.newsItem)&&!n?a(G,{replace:!0,to:O.NOT_FOUND}):v("article",{className:_.wrap,children:[a("div",{className:_.imgWrap,children:a(U,{src:m,alt:r,className:_.img})}),v("div",{className:_.content,children:[n&&a(de,{lines:6}),a("p",{className:_.date,children:C}),a("h2",{className:_.title,children:r}),o&&a("p",{children:"Somethin went wrong. Please reload the page"}),a("p",{children:b}),p&&a("a",{href:p,target:"_blank",rel:"noreferrer",className:I("btn","btn--inverted",_.readMore),children:"Read full article"})]}),v("div",{className:_.comments,children:[a("h3",{children:"Comments"}),g.length===0&&!n&&a("p",{children:"No comments yet. Be the first one to leave a comment!"}),g.map(i=>a(ce,{email:i.email,date:F(i.createdDate),className:I({[_.newComment]:s.includes(i.id)}),children:a("p",{children:i.content})},i.id)),a(re,{title:a("h3",{children:"Leave a commnet"}),className:_.commentForm,onSubmit:i=>{var w;return(w=e==null?void 0:e.newsItem)!=null&&w.id?l({...i,newsId:e.newsItem.id}):Promise.reject(new Error("Something went wrong! Please relead the page"))}})]})]})};function Te(){const[t]=he({refetchQueries:["NewsDetailRoute"],awaitRefetchQueries:!0}),[e,n]=h.exports.useState([]);async function o(l){try{const s=await t({variables:{input:l}});if(!s.data)throw new Error("Something went wrong! Please relead the page");n([...e,s.data.createComment.id]),window.scrollTo({top:0,behavior:"smooth"})}catch(s){throw new Error(ve(s))}}return{handleCreateComment:o,createdCommentIds:e}}export{Ae as NewsDetailRoute};
