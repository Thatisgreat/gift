"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[717],{14652:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(15009),c=t.n(r),a=t(99289),s=t.n(a),i=t(77985),o=t(5520),l=t(36481),u=t(13455),d=t(67294),f=t(52677),p=t.n(f),h=t(86406),v=t(20661),x=t(85645),m=t(54647);function b(e){switch(e){case h.a_.MAINNET:case h.a_.GOERLI:case h.a_.SEPOLIA:return x.v[e][0];default:return x.y[e][0]}}function j(){var e,n,t,r=(0,i.useWeb3React)().connector,a=(e=(0,m.useModel)("walletsModel"),n=e.startSwitchingChain,t=e.endSwitchingChain,(0,d.useCallback)(function(){var e=s()(c()().mark((function e(r,a){var s,i;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,u.EC)(a)){e.next=4;break}throw new Error("Chain ".concat(a," not supported for connector (").concat(p()(r),")"));case 4:if(n(a),e.prev=5,![o.ZK.connector,o.ro.connector].includes(r)){e.next=11;break}return e.next=9,r.activate(a);case 9:e.next=15;break;case 11:return s=(0,v.bt)(a),i={chainId:a,chainName:s.label,rpcUrls:[b(a)],nativeCurrency:s.nativeCurrency,blockExplorerUrls:[s.explorer]},e.next=15,r.activate(i);case 15:e.next=28;break;case 17:return e.prev=17,e.t0=e.catch(5),e.prev=19,e.next=22,r.activate();case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(19),console.error("Failed to re-activate connector",e.t1);case 27:throw e.t0;case 28:return e.prev=28,t(),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[5,17,28,31],[19,24]])})));return function(n,t){return e.apply(this,arguments)}}(),[n,t]));return(0,d.useCallback)(function(){var e=s()(c()().mark((function e(n){var t;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return t=(0,o.B5)(r),e.prev=3,e.next=6,a(r,n);case 6:(0,u.EC)(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),(0,l.JE)(t,e.t0)||-32002===e.t0.code||console.error("Failed to switch networks",e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(n){return e.apply(this,arguments)}}(),[r,a])}},7566:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var r=t(5574),c=t.n(r),a=t(67294),s=t(54647),i=t(15009),o=t.n(i),l=t(99289),u=t.n(l),d=t(19632),f=t.n(d),p=t(11475),h=t(80882),v=t(74581),x=t(26713),m=t(84908),b=t(77985),j=t(20661),w=t(14652),g=t(5520),N=t(17638),y=t(13455);function C(e){if(null==e||!e.namespaces)return[];var n=Object.keys(e.namespaces),t=Object.values(e.namespaces),r=[].concat(n,f()(t.flatMap((function(e){return e.chains}))),f()(t.flatMap((function(e){return e.accounts})))).map((function(e){return"string"==typeof e?function(e){var n=e.startsWith("eip155:")?e.split(":"):[];return n.length>1&&!isNaN(Number(n[1]))?Number(n[1]):null}(e):isNaN(Number(e))?null:Number(e)})).filter((function(e){return null!==e}));return Array.from(new Set(r))}var k=t(87505),E=t(63606),M=t(50888),Z=t(85893);function A(e){var n=e.disabled,t=e.targetChain,r=e.onSelectChain,c=e.isPending,a=e.isApplicationSupport,s=(0,b.useWeb3React)().chainId===t,i=(0,j.bt)(t),o=(null==i?void 0:i.label)||"Unknown",l=null==i?void 0:i.logoUrl;return(0,Z.jsxs)("div",{className:"py-0.25 ".concat(n||!a?"opacity-25":""),onClick:function(){!n&&a&&r(t)},children:[(0,Z.jsxs)("div",{className:"flex items-center",children:[l?(0,Z.jsx)(k.C,{size:20,src:l,className:"mr-0.75 "}):(0,Z.jsx)(k.C,{size:20,className:"mr-0.75",children:"C"}),(0,Z.jsx)("div",{className:"mr-1",children:o}),s&&(0,Z.jsx)(E.Z,{className:"text-[#f759ab] w-1 h-1"}),!s&&c&&(0,Z.jsx)(M.Z,{className:" w-1 h-1"})]}),(0,Z.jsxs)("div",{children:[n&&a&&(0,Z.jsx)("div",{className:"text-0.5 ",children:"Unsupported by your wallet"}),c&&(0,Z.jsx)("div",{className:"text-0.5 text-gray-200",children:"Approve in wallet"}),!a&&(0,Z.jsx)("div",{className:"text-0.5 ",children:"Unsupported by application"})]})]})}var S=[].concat(f()(y.EH),f()(y.Ny));var I=function(e){var n,t,r=(0,b.useWeb3React)(),s=r.chainId,i=r.account,l=(t=(0,b.useWeb3React)().connector,(0,g.B5)(t).type===N.R.WALLET_CONNECT_V2?C(null===(n=t.provider)||void 0===n?void 0:n.session):S),d=(0,j.bt)(s),k=(0,w.Z)(),E=(0,a.useMemo)((function(){var e=S.filter((function(e){return!y.oR.includes(e)})).sort((function(e,n){return(0,y.B0)(e)-(0,y.B0)(n)})).reduce((function(e,n){return l.includes(n)&&(0,y.IM)(n)?e.supported.push(n):e.unsupported.push(n),e}),{supported:[],unsupported:[]});return[e.supported,e.unsupported]}),[l]),M=c()(E,2),I=M[0],R=M[1],D=(0,a.useState)(void 0),W=c()(D,2),L=W[0],O=W[1];if(!s||!i)return null;var P=!!d&&(0,y.IM)(s),U=function(){var e=u()(o()().mark((function e(n){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n!==s){e.next=2;break}return e.abrupt("return");case 2:return O(n),e.next=5,k(n);case 5:O(void 0);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),z=f()(I).map((function(e,n){return{key:e,label:(0,Z.jsx)(A,{disabled:!l.includes(e)||R.includes(e),onSelectChain:U,isPending:e===L&&!R.includes(e),targetChain:e,isApplicationSupport:(0,y.IM)(e)})}}));return(0,Z.jsx)(v.Z,{menu:{items:z},trigger:["click"],placement:"bottom",children:(0,Z.jsx)("div",{className:"cursor-pointer ".concat(e.className||""),onClick:function(e){return e.preventDefault()},children:(0,Z.jsxs)(x.Z,{children:[P?(0,Z.jsx)("img",{src:d.logoUrl,alt:d.label,className:"w-1.5 h-1.5"}):(0,Z.jsx)(m.Z,{placement:"left",title:"Your wallet's current network is unsupported.",children:(0,Z.jsx)(p.Z,{className:"w-1.5 h-1.5"})}),(0,Z.jsx)(h.Z,{})]})})})},R=t(71577),D=t(29141);var W=t(63463),L=t(53685);function O(e){var n,t=e.connection,r=(0,L.YV)(),c=r.actionStatus,a=r.tryActivation,i=(0,s.useModel)("accountDrawerModel").toggleAccountDrawer,o=(0,b.useWeb3React)().chainId,l=c.status===L.oN.PENDING,u=l&&c.connection.type===t.type;return(0,Z.jsx)("div",{className:"p-1.125 cursor-pointer bg-[#f9f9f9] hover:bg-[#d9d9d9]",onClick:function(){u||l||a(t,i,o)},children:(0,Z.jsxs)("div",{className:"flex items-center",children:[(0,Z.jsx)("img",{className:"w-2.5 h-2.5 rounded-0.75 border-1 border-solid border-gray-200",src:null===(n=t.getIcon)||void 0===n?void 0:n.call(t,!1),alt:t.getName()}),(0,Z.jsx)("div",{className:"text-1 font-bold text-[#222] px-0.5 mr-0.5",children:t.getName()}),u&&(0,Z.jsx)("div",{className:"flex items-center justify-center w-1 h-1",children:(0,Z.jsx)(M.Z,{})})]})})}function P(){var e=(0,b.useWeb3React)(),n=e.connector,t=e.chainId,r=(0,L.YV)().actionStatus;return(0,a.useEffect)((function(){t&&(0,y.EC)(t)&&n!==g.ro.connector&&g.ro.connector.activate(t)}),[t,n]),(0,Z.jsx)("div",{children:r.status===L.oN.ERROR?(0,Z.jsx)("div",{className:"text-center text-[red] text-1.25 font-bold",children:"Error in connect wallet"}):(0,Z.jsxs)("div",{className:"grid auto-rows-auto gap-y-1",children:[(0,Z.jsx)("div",{className:"grid gap-[2px] rounded-0.75 overflow-hidden",children:g.I_.filter((function(e){return e.shouldDisplay()})).map((function(e){return(0,Z.jsx)(O,{connection:e},e.getName())}))}),(0,Z.jsx)("div",{className:"text-0.875 text-[#7d7d7d]",children:"By connecting a wallet, you agree to Our Labs' Terms of Service and consent to its Privacy Policy."})]})})}var U=function(){var e=(0,s.useModel)("accountDrawerModel"),n=e.accountDrawerOpen,t=e.closeAccountDrawer,r=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e;n||(null===(e=r.current)||void 0===e||e.scrollTo({top:0,behavior:"smooth"}))}),[n]),(0,Z.jsx)(W.Z,{title:"Connect a wallet",placement:"right",width:400,maskClosable:!1,onClose:t,open:n,children:(0,Z.jsx)(P,{})})},z=t(68754);function B(){var e,n,t,r,i,o,l=(0,s.useModel)("walletsModel").switchingChain,u=(0,s.useModel)("userModel").updateSelectedWallet,d=(0,s.useModel)("accountDrawerModel").toggleAccountDrawer,f=(0,a.useCallback)((function(){return!l}),[l]),p=(e=(0,b.useWeb3React)(),n=f,t=(0,a.useState)(e),r=c()(t,2),i=r[0],o=r[1],(0,a.useEffect)((function(){o((function(t){return!n||n(e)?e:t}))}),[n,e]),i),h=p.account,x=p.connector,m=((0,g.B5)(x),{hasPendingActivity:!1,pendingActivityCount:0}),j=m.hasPendingActivity,w=m.pendingActivityCount,N=(0,a.useCallback)((function(){x&&x.deactivate&&x.deactivate(),x.resetState(),u(void 0)}),[x,u]),y=[{label:"Disconnect",key:"disconnect",icon:(0,Z.jsx)(D.Z,{}),onClick:N}];return h?(0,Z.jsx)(Z.Fragment,{children:j?(0,Z.jsxs)(R.Z,{ghost:!0,type:"primary",size:"small",loading:!0,children:[w," Pending"]}):(0,Z.jsx)(v.Z,{menu:{items:y},placement:"bottom",children:(0,Z.jsx)(R.Z,{size:"small",children:(0,z.X)(h)})})}):(0,Z.jsx)(R.Z,{ghost:!0,type:"primary",size:"small",onClick:d,children:"Connect"})}function T(){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(B,{}),(0,Z.jsx)(U,{})]})}var _=function(e){return(0,Z.jsx)(s.Link,{className:"text-2 font-bold ".concat(e.className||""),to:"/home",children:"Gifts"})},Y=function(e){return(0,Z.jsxs)("header",{className:"flex justify-between items-center px-1 ".concat((null==e?void 0:e.className)||""),children:[(0,Z.jsx)(_,{}),(0,Z.jsxs)("div",{className:"flex items-center",children:[(0,Z.jsx)(I,{className:"mr-1"}),(0,Z.jsx)(T,{})]})]})},F=function(e){return(0,Z.jsx)("footer",{})},G=function(){var e=(0,s.useLocation)().pathname,n=(0,a.useState)(!1),t=c()(n,2),r=t[0],i=t[1];return(0,a.useEffect)((function(){window.scrollTo(0,0),i(!1)}),[e]),(0,a.useEffect)((function(){var e=function(){window.scrollY>0&&!r?i(!0):window.scrollY<=0&&i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Y,{className:"w-full h-4 fixed top-0 z-10 ".concat(r?"bg-white outline-[1px] outline-offset-[1px] outline outline-[#22222212]":"")}),(0,Z.jsx)("div",{className:"w-full min-h-screen pt-4 pb-4 z-[1]",children:(0,Z.jsx)("div",{className:" container mx-auto h-full ",children:(0,Z.jsx)(s.Outlet,{})})}),(0,Z.jsx)(F,{})]})}},68754:function(e,n,t){t.d(n,{U:function(){return c},X:function(){return a}});var r=t(19485);function c(e){try{return(0,r.getAddress)(e.toLowerCase())}catch(e){return!1}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,r=c(e);return r?s(r,n,t):""}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,r=e.startsWith("0x"),c=r?"":"0x";return i(c+e,n+2,t)}function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.slice(0,n),"...").concat(e.slice(e.length-t))}}}]);