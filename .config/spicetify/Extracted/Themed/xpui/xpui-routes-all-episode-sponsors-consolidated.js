"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5145],{15407:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(59496),r=s(10797),n=s(43780),u=s(22126),c=s(851),i=s(77001),d=s(4637);function o(){const e=(0,r.TH)().state,t=u.Tg.PODCAST_SEE_ALL,{data:s,error:o,getLeavebehinds:f}=(0,c.Z)({surface:t,uri:e.uri});if((0,a.useEffect)((()=>{f()}),[]),!s?.leavebehindAds||o)return null;const l=(0,i.D7)(s,e.uri);return(0,d.jsx)("div",{className:"contentSpacing",children:(0,d.jsx)(n.w,{entityType:"podcast",leavebehinds:l,surface:t,uri:e.uri})})}},851:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(59496),r=s(89474),n=s(42370),u=s(52271),c=s(89642),i=s(22126),d=s(77001);const o=function(e){const[t,s]=(0,a.useState)(),[o,f]=(0,a.useState)(!1),l=(0,n.s4)();return{data:t,error:o,getLeavebehinds:(0,a.useCallback)((async()=>{try{const t=await c.fi.getLeavebehindsData(u.b.getInstance(),(0,i.OO)(e.surface),e.uri);s(t.body)}catch(t){const s=t;l.send((0,r.v)({error_type:"fetchAdsFailure",error_message:s.name,http_error_code:s.status,surface:(0,i.OO)(e.surface),request_url:(0,d.eh)(),request_type:"leavebehindAds",ad_content_origin:"podcast"})),f(!0)}}),[l,e.surface,e.uri])}}}}]);
//# sourceMappingURL=xpui-routes-all-episode-sponsors-consolidated.js.map