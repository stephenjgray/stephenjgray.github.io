(this["webpackJsonpstephenjgray.github.io"]=this["webpackJsonpstephenjgray.github.io"]||[]).push([[0],{102:function(e,a,t){e.exports=t.p+"static/media/steve.894e5681.png"},103:function(e,a,t){e.exports=t.p+"static/media/max-nelson-Se9ufo2dO_g-unsplash2.097ddaba.jpg"},107:function(e,a,t){e.exports=t.p+"static/media/StephenJGray - November2021.db361735.pdf"},115:function(e,a,t){e.exports=t(152)},120:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),o=t.n(i),c=(t(120),t(202)),l=t(41),s=t(57),m=t(16),d=t(5),p=t(188),u=t(206),g=t(190),h=t(187),f=t(189),y=t(50),b=t(71),v=Object(d.a)({root:{minWidth:34}})(h.a),E=Object(d.a)({root:{paddingTop:0,paddingBottom:0}})(u.a),k=[{primaryText:"Home",icon:"home",linkTo:"home"},{primaryText:"About",icon:"person",linkTo:"about"},{primaryText:"Skills",icon:"star",linkTo:"skills"},{primaryText:"Experience",icon:"work",linkTo:"experience"},{primaryText:"Education",icon:"school",linkTo:"education"},{primaryText:"Contact",icon:"chat_bubble",linkTo:"contact"}],x=function(e){var a=Object(n.useState)("home"),t=Object(m.a)(a,2),i=t[0],o=t[1],c=function(e){o(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,k.map((function(a,t){var n=a.primaryText,o=a.icon,l=a.linkTo;return r.a.createElement(b.Link,{activeClass:"active",key:n,to:l,offset:0,duration:500,spy:!0,smooth:!0,delay:50,isDynamic:!0,onSetActive:c},r.a.createElement(E,{selected:l===i,button:!0},r.a.createElement(v,null,r.a.createElement(f.a,{fontSize:"small",style:{width:e.data.collapsed?48:34,fontSize:e.data.collapsed?"2rem":"1.25rem"}},o)),r.a.createElement(y.a,{variant:"overline"},r.a.createElement(g.a,{disableTypography:!0,primary:n,primaryTypographyProps:{noWrap:!0}}))))}))))};x.defaultProps={};var w=x,S=t(204),j=t(191),N=t(102),C=t.n(N),T=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:e.data.collapsed?8:16,transition:"0.3s",display:"flex",flexDirection:"column"}},r.a.createElement(S.a,{align:"center",src:C.a,style:{width:e.data.collapsed?48:174,height:e.data.collapsed?48:174,transition:"0.3s",alignSelf:"center"}}),r.a.createElement("div",{style:{paddingBottom:16}}),r.a.createElement(y.a,{variant:"h6",align:"center",style:{display:e.data.collapsed?"none":"block"},noWrap:!0},e.data.profile.name),r.a.createElement(y.a,{color:"textSecondary",align:"center",style:{display:e.data.collapsed?"none":"block"},noWrap:!0,gutterBottom:!0},e.data.profile.jobTitle)),r.a.createElement(j.a,null))};T.defaultProps={collapsed:!1};var O=T,A=t(84),B=t(6),M=t(103),D=t.n(M),I=function(e){return r.a.createElement("section",{className:"hero",name:"home",style:{paddingBottom:16,backgroundImage:"url(".concat(D.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{variant:"overline"},"INTRODUCING"),r.a.createElement(y.a,{component:"h1",variant:"h1",weight:"bold",className:"handwriting",gutterBottom:!0},e.name),r.a.createElement(y.a,{component:"h2",variant:"h5",gutterBottom:!0},"A ",e.jobTitle," based in ",e.address.town,","," ",e.address.county,".")))},P=t(100),J=t(192),W=t(156),R=t(203),L=Object(P.a)((function(e){return{cardContainer:{position:"relative",zIndex:1,perspective:"1000px","&:hover $cardBody":{transform:"rotateY(180deg)"},":hover > $cardBody > $cardFront":{opacity:0,visibility:"hidden",transition:"opacity 1s ease-in, visibility .75s linear"}},cardBody:{width:"100%",transformStyle:"preserve-3d",transition:"all .7s linear",height:"125px",justifyContent:"center"},cardSide:{position:"absolute",top:0,overflow:"hidden",height:"100%",color:"#212121",backgroundColor:"#fff",backfaceVisibility:"hidden",boxShadow:"0 10px 35px rgba(50,50,93,.1),0 2px 15px rgba(0,0,0,.07)"},cardBack:{padding:"24px 6px 0 6px",transform:"rotateY(180deg)"}}})),F=function(e){var a=["#BC86D9","#AD8DE3","\t#8D9BE3","#86AAD9"],t=L();return r.a.createElement("section",{name:"about",className:"about"},r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{weight:"bold",variant:"h2",style:{marginBottom:"8vh"},className:"handwriting"},"Who Am I?"),r.a.createElement(y.a,{style:{marginBottom:"8vh"}},e.objective,r.a.createElement("br",null)),r.a.createElement(J.a,{spacing:3,container:!0,style:{marginBottom:"8vh"}},e.keySellingPoints.map((function(n,i){return r.a.createElement(J.a,{item:!0,xs:12,sm:6,md:3,key:i,className:t.cardContainer},r.a.createElement(J.a,{className:t.cardBody,elevation:0,variant:"outlined",style:{borderTop:"4px solid ".concat(a[i])}},r.a.createElement(J.a,{container:!0,direction:"column",alignItems:"center",className:[t.cardBack,t.cardSide].join(" ")},r.a.createElement(J.a,{item:!0},r.a.createElement(y.a,{variant:"subtitle2",align:"center"},e.personalAttributes[i]))),r.a.createElement(J.a,{container:!0,direction:"column",className:[t.cardFront,t.cardSide].join(" "),alignItems:"center"},r.a.createElement(J.a,{item:!0},r.a.createElement(f.a,{fontSize:"large",style:{marginTop:"10px",color:a[i]}},n.icon)),r.a.createElement(J.a,{item:!0},r.a.createElement(y.a,{variant:"subtitle2",align:"center"},n.name)))))}))),r.a.createElement(W.a,{square:!0,elevation:3,style:{backgroundColor:"#59759b",width:"100%",padding:"20px"}},r.a.createElement(J.a,{container:!0,alignContent:"center",alignItems:"center",spacing:10},r.a.createElement(R.a,{only:"xs"},r.a.createElement(J.a,{item:!0,sm:2},r.a.createElement(f.a,{style:{color:"white",fontSize:"72px"}},"help_outline"))),r.a.createElement(J.a,{item:!0,sm:10},r.a.createElement(y.a,{variant:"h5",style:{color:"white"},gutterBottom:!0},"Want to make awesome things together?"),r.a.createElement(b.Link,{to:"contact",offset:0,duration:500,smooth:!0},r.a.createElement(y.a,{variant:"button",style:{color:"white"}},"Get in touch below...")))))))},q=function(e){return r.a.createElement("section",{className:"skills",name:"skills"},r.a.createElement("div",{className:e.root},r.a.createElement(J.a,{container:!0},r.a.createElement(J.a,null,r.a.createElement(J.a,null,r.a.createElement(y.a,{variant:"overline"},"My Specialties")),r.a.createElement(J.a,null,r.a.createElement(y.a,{weight:"bold",variant:"h1",component:"h2",className:"handwriting"},"What I do...")),r.a.createElement(J.a,null,r.a.createElement(y.a,{variant:"button",component:"h4",align:"right"},"Amongst other things, I specialise in:"))),r.a.createElement(J.a,null,r.a.createElement("ul",null,e.technicalSkills.map((function(e,a){return r.a.createElement("li",{className:"",key:a},r.a.createElement(y.a,{variant:"overline"},e))}))))),r.a.createElement(y.a,{component:"div"})))},H=t(205),z=t(193),G=t(194),V=t(105),$=t.n(V),K=Object(P.a)((function(e){return{heading:{fontSize:e.typography.pxToRem(16),fontWeight:"bold",marginRight:"1rem"},secondaryHeading:{fontSize:e.typography.pxToRem(14),color:e.palette.text.secondary,textTransform:"uppercase",lineHeight:"1.75"},date:{fontWeight:"bold"},grade:{fontSize:e.typography.pxToRem(14),color:e.palette.text.secondary,textTransform:"uppercase"}}})),Q=Object(d.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(H.a),U=Object(d.a)((function(e){return{root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,padding:e.spacing(0,2),"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}}}}))(z.a),Y=Object(d.a)((function(e){return{root:{padding:e.spacing(2),display:"block"}}}))(G.a),_=function(e){var a=K(),t=r.a.useState("panel0"),n=Object(m.a)(t,2),i=n[0],o=n[1];return r.a.createElement("section",{className:"education",name:"education"},r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{variant:"h3",component:"h2",gutterBottom:!0},"Education"),e.education.map((function(e,t){return r.a.createElement(Q,{square:!0,expanded:i==="panel".concat(t),key:t,onChange:(n="panel".concat(t),function(e,a){o(!!a&&n)})},r.a.createElement(U,{expandIcon:r.a.createElement($.a,null),"aria-controls":"panel".concat(t,"a-content"),id:"panel".concat(t,"a-header")},r.a.createElement(y.a,{className:a.heading},e.course),r.a.createElement(y.a,{className:a.secondaryHeading},e.establishment)),r.a.createElement(Y,null,r.a.createElement(y.a,{className:a.date},e.dates),r.a.createElement(y.a,{className:a.grade},e.grade),e.description.map((function(e,a){return r.a.createElement(y.a,{key:"desc-".concat(a)},e)}))));var n}))))},X=function(e){return r.a.createElement("section",{className:"experience",name:"experience"},r.a.createElement(y.a,{variant:"h2",component:"h2",align:"center",gutterBottom:!0},"Professional Experience"),r.a.createElement(J.a,{container:!0,direction:"column",className:"timeline-container"},e.experience.map((function(e,a){return r.a.createElement("div",{className:"timeline-item",key:a},r.a.createElement("div",{className:"timeline-item-content"},r.a.createElement(y.a,{variant:"h5",component:"h3"},e.jobTitle),r.a.createElement(y.a,{variant:"subtitle2"},e.dates),r.a.createElement(y.a,{variant:"overline",component:"h4",style:{padding:"6px 0"}},e.company),e.description.map((function(e,a){return r.a.createElement(y.a,{style:{textAlign:"justify",paddingBottom:"12px"},key:"descIndex-"+a,variant:"body2"},e)})),r.a.createElement("div",{className:"timeline-item-content-circle"})))}))))},Z=t(106),ee=t(107),ae=t.n(ee),te=t(195),ne=t(196),re=t(197),ie=t(199),oe=t(198),ce=t(200),le=t(201),se=Object(P.a)((function(e){return{skype:{"& a:hover":{textDecoration:"none"}},skypeContent:{"&:hover":{textDecoration:"underline"}},contactCard:{display:"flex",borderRadius:"0",width:"100%"},contactCardLink:{color:"white",lineHeight:"18.5px",display:"contents"},contactCardMedia:{width:"75px",height:"100%",backgroundColor:"#58759b"},contactCardContent:{backgroundColor:"#88a4cc",width:"100%",padding:"16px","&:last-child":{paddingBottom:"16px"}}}})),me=function(e){r.a.useEffect((function(){Object(Z.loadCSS)("https://use.fontawesome.com/releases/v5.1.0/css/all.css",document.querySelector("#font-awesome-css"))}),[]);var a=se();return r.a.createElement("section",{className:"contact",name:"contact"},r.a.createElement("div",{className:[a.root,e.root].join(" ")},r.a.createElement(J.a,{container:!0,spacing:5,direction:"row"},r.a.createElement(J.a,{container:!0,spacing:2,item:!0,sm:12,md:6,direction:"column",justify:"flex-start",alignItems:"flex-start"},r.a.createElement(y.a,{variant:"overline"},"Want to know more?"),r.a.createElement(y.a,{variant:"h2",component:"h2",className:"handwriting"},"Let's have a chat...")),r.a.createElement(J.a,{container:!0,spacing:2,item:!0,sm:12,md:6,direction:"column",justify:"flex-start",alignItems:"flex-start"},r.a.createElement(J.a,{item:!0,style:{width:"100%"}},r.a.createElement(te.a,{className:a.contactCard},r.a.createElement(ne.a,{className:a.contactCardLink,href:"mailto:".concat(e.email)},r.a.createElement(re.a,null,r.a.createElement(S.a,{variant:"square",className:a.contactCardMedia},r.a.createElement(oe.a,{fontSize:"large"}))),r.a.createElement(ie.a,{className:a.contactCardContent},e.email)))),r.a.createElement(J.a,{item:!0,style:{width:"100%"}},r.a.createElement(te.a,{className:a.contactCard},r.a.createElement(ne.a,{className:a.contactCardLink,href:"tel:".concat(e.mobile)},r.a.createElement(re.a,null,r.a.createElement(S.a,{variant:"square",className:a.contactCardMedia},r.a.createElement(ce.a,{fontSize:"large"}))),r.a.createElement(ie.a,{className:a.contactCardContent},e.mobile)))),r.a.createElement(J.a,{item:!0,style:{width:"100%"}},r.a.createElement(te.a,{className:a.contactCard},r.a.createElement(ne.a,{className:a.contactCardLink,href:ae.a,download:!0},r.a.createElement(re.a,null,r.a.createElement(S.a,{variant:"square",className:a.contactCardMedia},r.a.createElement(le.a,{fontSize:"large"}))),r.a.createElement(ie.a,{className:a.contactCardContent},"Download CV")))))),r.a.createElement("br",null),r.a.createElement("br",null)))},de=t(108),pe=t.n(de),ue=t(109),ge=t.n(ue),he=t(184),fe=Object(d.a)((function(e){var a,t,n=e.breakpoints;return{social:(a={},Object(B.a)(a,n.up("xs"),{justifyContent:"center"}),Object(B.a)(a,n.up("sm"),{justifyContent:"flex-end"}),a),copyright:(t={},Object(B.a)(t,n.up("xs"),{textAlign:"center",justifyContent:"center"}),Object(B.a)(t,n.up("sm"),{justifyContent:"flex-start",textAlign:"left"}),t)}}))((function(e){return r.a.createElement("div",{className:"footer",style:{backgroundColor:"#59759b"}},r.a.createElement(j.a,null),r.a.createElement("br",null),r.a.createElement(J.a,{container:!0,spacing:3},r.a.createElement(J.a,{className:e.classes.copyright,item:!0,xs:12,sm:6,style:{alignSelf:"center",paddingLeft:"24px"}},r.a.createElement((function(){return r.a.createElement(y.a,{variant:"body2",style:{color:"white"}},"Copyright \xa9 ",r.a.createElement(ne.a,{color:"inherit",href:"https://material-ui.com/",style:{color:"white"}},e.name)," ",(new Date).getFullYear(),". | ","All rights reserved.")}),null)),r.a.createElement(J.a,{className:e.classes.social,container:!0,item:!0,xs:12,sm:6},r.a.createElement(he.a,{href:e.urls.linkedIn,target:"_blank",rel:"noreferrer"},r.a.createElement(pe.a,{style:{color:"white"}})),r.a.createElement(he.a,{href:e.urls.gitHub,target:"_blank",rel:"noreferrer"},r.a.createElement(ge.a,{style:{color:"white"}})))))})),ye=function(e){var a=e.classes,t=e.data.cv.profile,n={experience:e.data.cv.experience},i={education:e.data.cv.education},o={technicalSkills:t.technicalSkills};t.personalAttributes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,Object.assign({},a,t)),r.a.createElement(F,Object.assign({},a,t)),r.a.createElement(q,Object.assign({},a,o)),r.a.createElement(X,Object.assign({},a,n)),r.a.createElement(_,Object.assign({},a,i)),r.a.createElement(me,Object.assign({},a,t)),r.a.createElement(fe,t))};ye.defaultProps={};var be=Object(d.a)((function(e){var a,t=e.breakpoints;return{root:(a={padding:16},Object(B.a)(a,t.up("sm"),{padding:24,maxWidth:500,margin:"auto"}),Object(B.a)(a,t.up("md"),{maxWidth:700}),Object(B.a)(a,t.up("lg"),{maxWidth:1060}),Object(B.a)(a,t.up("xl"),{maxWidth:1720}),a)}}))(ye);var ve=function(){return r.a.createElement(l.d,{config:s.a},(function(e){var a=e.sidebarStyles;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(l.c,null,r.a.createElement(be,{data:A})),r.a.createElement(l.e,{style:{backgroundColor:"#fafafa"}},(function(e){var t=e.collapsed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{style:{overflowX:"hidden"},data:{profile:A.cv.profile,collapsed:t}}),r.a.createElement("div",{className:a.container},r.a.createElement(w,{style:{overflowX:"hidden"},data:{collapsed:t}})),r.a.createElement(l.a,{className:a.collapseBtn},r.a.createElement(l.b,null)))})))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e){e.exports=JSON.parse('{"cv":{"profile":{"name":"Stephen J. Gray","firstName":"Stephen","jobTitle":"Senior Software Engineer","address":{"street":"9 Kate Melons Avenue","town":"Markinch","county":"Fife","postcode":"KY7 6QS"},"mobile":"07894 523 894","home":"01592 757 247","skype":"stephen.gray79","email":"stephenjgray79@gmail.com","excerpt":"Specialising in Frontend Development within a global leader in cyber security.","objective":"A confident senior software engineer working in a challenging and inspiring position within a global leader in cyber security organisation. A passionate agile practitioner, flexible, solution orientated, creative problem solver with a strong track record of success in large client-facing codebases.","keySellingPoints":[{"name":"Client Focussed","icon":"star"},{"name":"Solution Orientated","icon":"star"},{"name":"Purpose Driven","icon":"star"},{"name":"Collaborative","icon":"star"}],"technicalSkills":["JavaScript / HTML5 / CSS3","React","Angular","GraphQl","Backbone.js / jQuery","Agile Software Development","Secure coding practices (GWEB Certified)","Involvement beyond the full software development lifecycle including planning, design, implementation (front and backend), manual and automation tests, UAT and app deployment;","Cloud computing utilising AWS Cloudfront, S3, Amplify, Kubernetes, Terraform and Jenkins."],"personalAttributes":["Motivated, flexible and proactive.","Analytical, problem solver who embraces challenge.","Driven, hardworking and ambitious.","Effective communicator and team player."],"urls":{"gitHub":"https://github.com/stephenjgray","linkedIn":"https://www.linkedin.com/in/stephenjgray/"}},"experience":[{"jobTitle":"Frontend Developer","company":"Secureworks","dates":"February 2015 \u2013 Present","description":["A front-end specialist involved in building a client-facing platform which provides clients with a clear and informed view of their security posture.","Actively sought the squad app deployment specialist role, undertaking self study to become familiar with DevOps, reduced technical debt and automated manual deployment steps.","The role includes: working with geographically dispersed teams to develop secure MV* web-applications.  Presenting new features to stakeholders; working closely with product management, design and UX teams, participating in planning, design and requirements analysis meetings.","Taking part in code reviews, inputting into front-end architectural decisions and strategic analysis of new technologies.","Mentoring new squad members on front-end technologies, app deployment and application architectures.  Set up front-end guild with regular meet-ups to encourage consistent engineering approaches, sharing of ideas an increase engagement and motivation within frontend engineers.","Key team member of the Cloud Migration initiative, moving away from physical servers to an AWS environment.","Technologies utilized:","Frontend - JavaScript; React, BackboneJS; jQuery; LESS; HTML5, Webpack, Gulp;Backend - Java; Spring; JSP; Apache Tiles;","Everything else - AWS Cloudfront, S3, Jenkins, Kubernetes, Docker, Terraform, GIT."]},{"jobTitle":".NET Developer","company":"Example1","dates":"October 2014 \u2013 February 2015","description":["A contract role developing a web based order management application using the ext.Net MVC framework. The role included:","Regular user testing, input and feedback;","Requirements gathering and analysis.","Ensuring an accurate and concise change log;","During this role I worked independently and managed my own schedule.","Technologies utilized: C#; SQL; JavaScript; CSS; HTML; Ajax; JSON; ext.Net and Tortoise SVN."]},{"jobTitle":"Masters Project","company":"Prudential plc","dates":"May 2014 \u2013 September 2014","description":["Creation of a web-based application utilising HTML5, CSS3 and JavaScript to carry out value at risk calculations and display results using a variety of graphs.","Achieved through an agile software development approach, including significant client engagement and extensive testing."]},{"jobTitle":"Freelance Web Designer","company":"","dates":"October 2013 - June 2016","description":["Creating websites for small businesses, utilising wordpress, eCommerce platforms, php, HTML, CSS3 and Photoshop.","Conducting client liaison from pre-build to develop clear specification and contract to meet client needs, including marketing support and competitor analysis.","Delivery of sites to clients, including post-build maintenance aspects and training and support to enable client-led maintenance and updates."]}],"education":[{"course":"MSc Information Technology","establishment":"University of Stirling","dates":"September 2014","grade":"Pass with distinction.","description":["Studies included: Database Principles and Applications; Principles and Practice of Programming; Foundations of Information Technology; Interface Design and the World Wide Web; Decision Support Systems; Multimedia; Object Orientated Software Design; and, Networking.","Winter Programming Assignment \u2013 achieved top mark in year group.","Dissertation - Value at Risk: Visual Approaches to Scrutinising Investment Risk- achieved grade of 1A."]},{"course":"BA (hons) Marketing Management","establishment":"Edinburgh Napier University","dates":"June 2001","grade":"","description":["Emerging Markets, Marketing Ethics, Retail Marketing, Social Marketing, Operations Management, Consumer Behaviour, Introduction to Scots Law, Human Resources Principles and Practice, German 1, Accounting for Business, Organisational Behaviour."]}],"otherExperience":[{"jobTitle":"Nursery Manager","company":"Busy Bees (Scotland) Ltd.","dates":"December 2012 \u2013 August 2013","description":"Overseeing the operation of 89 place nursery, comprising a team of 22 staff members.\\nIncrease in business performance from loss making position to over \xa311,500 monthly profit in six month period. Increase in full time equivalent occupancy by 18%.\\nIncrease in service quality evidenced by positive parental feedback, positive feedback from local authority inspectors and grades achieved in setting during Care Inspection."},{"jobTitle":"Area Manager - North East Scotland,","company":"Busy Bees (Scotland) Ltd.","dates":"July 2012 \u2013 December 2012","description":"Overseeing the operation of 7 separate business units.\\nReview of marketing activities, leading to identification of opportunities to increase the visibility of the business.\\nReview of sites and subsequent coaching of management to implement improvements in performance related to parental involvement, self-evaluation and quality assurance systems, quality of environment, and staff deployment.\\nProviding leadership and support across multiple sites with varying business needs."},{"jobTitle":"Operations Manager","company":"The Ark Nursery","dates":"January 2010 \u2013 July 2012","description":"Responsible for the day to day running of 49 place private day care nursery comprising of 21 staff members and over 100 clients. Management of \xa3350,000 annual budget.\\nIncrease in operating capacity from 49 places to 59 childcare places; project manager in charge of securing permissions with regulator. Project manager in charge of scoping outline extensions and business diversification.\\nRegular input into Directors meetings, including performance measurement and reporting."},{"jobTitle":"Nursery Manager","company":"Wonder Years Nursery.","dates":"June 2009 \u2013 December 2009","description":"Responsible for the day to day running of 57 place private day care nursery comprising of 13 staff members."},{"jobTitle":"Nursery Manager","company":"Jack & Jill\u2019s Private Day Care Nurseries.","dates":"January 2008 \u2013 March 2009","description":"Day to day responsibility for private day care nursery accommodating 64 children comprising of 10-12 staff members."},{"jobTitle":"Nursery Manager","company":"Prime Time Nurseries Ltd.","dates":"June 2007 \u2013 December 2007","description":"Management of 62 place premium private day care nursery comprising of 20 staff members."},{"jobTitle":"Marketing / Operations Manager","company":"Jack & Jill\u2019s Private Day Care Nurseries.","dates":"October 2002 \u2013 June 2007","description":"Ensuring the smooth running of 4 separate business units and up to 90 employees.\\nRunning a management and leadership coaching programme for nursery management teams. Responsible for all internal and external marketing, business development and promotional activities. Involved in the set-up of 2 business units from initial premises selection, internal building works, approvals process to opening.\\nManaging localised advertising activities and press coverage gaining 119 new business enquiries over a 6 week period for a new business start-up.\\nOther Experience"}],"personalProjects":[{},{},{}]}}')}},[[115,1,2]]]);
//# sourceMappingURL=main.1140d785.chunk.js.map