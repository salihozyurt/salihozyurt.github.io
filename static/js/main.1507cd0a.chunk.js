(this.webpackJsonptechwebsidev2=this.webpackJsonptechwebsidev2||[]).push([[0],{29:function(e,a,t){e.exports=t(51)},37:function(e,a,t){},40:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(18),c=t.n(r),s=(t(34),t(35),t(36),t(37),t(10)),o=t(11),i=t(13),m=t(14),d=t(15),u=t(25),E=t(26),h=t.n(E),p=t(27),g=t.n(p),b=t(52),v=t(53),y=t(54),f=(t(40),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={isVerified:!1},l.verifyCallback=l.verifyCallback.bind(Object(d.a)(l)),l}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,a="Name must be at least 3 chars long!",t="Email is invalid!",l="Subject must be at least 10 chars long!",n="Message must be at least 10 chars long!";this.isNameValid=!1,this.isEmailValid=!1,this.isSubjectValid=!1,this.isMessageValid=!1,document.getElementById("name").addEventListener("blur",(function(){var t=document.getElementById("name").value;e.isNameValid=t.length>=3,e.isNameValid?document.getElementsByClassName("name")[0].innerHTML="":document.getElementsByClassName("name")[0].innerHTML=a})),document.getElementById("email").addEventListener("blur",(function(){var a=document.getElementById("email").value;e.isEmailValid=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a),e.isEmailValid?document.getElementsByClassName("email")[0].innerHTML="":document.getElementsByClassName("email")[0].innerHTML=t})),document.getElementById("subject").addEventListener("blur",(function(){var a=document.getElementById("subject").value;e.isSubjectValid=a.length>=10,e.isSubjectValid?document.getElementsByClassName("subject")[0].innerHTML="":document.getElementsByClassName("subject")[0].innerHTML=l})),document.getElementById("message").addEventListener("blur",(function(){var a=document.getElementById("message").value;e.isMessageValid=a.length>=10,e.isMessageValid?document.getElementsByClassName("message")[0].innerHTML="":document.getElementsByClassName("message")[0].innerHTML=n}))}},{key:"onFormSubmitHandler",value:function(e){var a=document.getElementById("form-messages");if(this.isNameValid&&this.isEmailValid&&this.isSubjectValid&&this.isMessageValid)if(this.state.isVerified){var t={name:document.getElementById("name").value,email:document.getElementById("email").value,subject:document.getElementById("subject").value,message:document.getElementById("message").value};e.preventDefault();var l={from_name:t.name,from_email:t.email,to_name:"Salih \xd6zyurt",subject:t.subject,message:t.message};h.a.send("service_5pbxmzg","template_m61cwdb",l,"user_yG2R994s36vANeqoo11tm"),this.props.isModalOpen()}else alert("Please verify you are a human!");else a.setAttribute("class","alert alert-error"),a.innerHTML="Please enter valid values.";e.preventDefault()}},{key:"verifyCallback",value:function(e){var a=this;return new Promise((function(t,l){e&&a.setState({isVerified:!0}),t()}))}},{key:"loadRechaptcha",value:function(){console.log("Rechaptcha is loaded.")}},{key:"render",value:function(){return n.a.createElement("div",{className:"container",id:"main-content"},n.a.createElement(b.a,{id:"contactForm",onSubmit:this.onFormSubmitHandler.bind(this)},n.a.createElement("div",{id:"form-messages",style:{color:"#de7119"}}),n.a.createElement(v.a,{type:"text",id:"name",placeholder:"Enter Your Name"}),n.a.createElement("div",{className:"error name"}),n.a.createElement("br",{className:"hidden-xs"}),n.a.createElement(v.a,{type:"email",id:"email",className:"text-primary",placeholder:"Enter Your Email"}),n.a.createElement("div",{className:"error email"}),n.a.createElement("br",{className:"hidden-xs"}),n.a.createElement(v.a,{type:"text",id:"subject",placeholder:"Enter Subject"}),n.a.createElement("div",{className:"error subject"}),n.a.createElement("br",{className:"hidden-xs"}),n.a.createElement(v.a,{type:"textarea",id:"message",placeholder:"Enter Message"}),n.a.createElement("div",{className:"error message"}),n.a.createElement("br",{className:"hidden-xs"}),n.a.createElement(y.a,{type:"submit",id:"submitButton"},"Send"),n.a.createElement("div",null),n.a.createElement("br",{className:"hidden-xs"}),n.a.createElement(g.a,{sitekey:"6LcF0tsZAAAAAA5ge9CNNZVd3k8BZk5fIIu4DNV6",render:"explicit",size:"compact",verifyCallback:this.verifyCallback,onloadCallback:this.loadRechaptcha})))}}]),t}(l.Component)),N=t(55),w=t(56),k=t(57),x=t(58),S=t(59),C=t(60),j=t(61),I=t(64),B=t(62),O=t(63),T=t(16),M=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},l.toggleNav=l.toggleNav.bind(Object(d.a)(l)),l.toggleModal=l.toggleModal.bind(Object(d.a)(l)),l}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"componentDidMount",value:function(){Object(T.a)({targets:"#NavbarCon",opacity:1,duration:1e3})}},{key:"render",value:function(){return n.a.createElement("div",{id:"NavbarCon",style:{opacity:0}},n.a.createElement(N.a,{dark:!0,expand:"md",fixed:"top"},n.a.createElement("div",{className:"container"},n.a.createElement(w.a,{className:"mr-auto",href:"/"},n.a.createElement("img",{src:"assets/images/HeaderLogo.png",width:"100",height:"60",alt:"logo"})),n.a.createElement(k.a,{onClick:this.toggleNav}),n.a.createElement(x.a,{isOpen:this.state.isNavOpen,navbar:!0},n.a.createElement(S.a,{className:"ml-auto",navbar:!0},n.a.createElement(C.a,null,n.a.createElement(j.a,{href:"https://www.linkedin.com/in/salih-%C3%B6zyurt-ba6a2395/",target:"_blank"},n.a.createElement("span",{className:"fa fa-linkedin fa-lg"})," Linkedln")),n.a.createElement(C.a,null,n.a.createElement(j.a,{href:"https://github.com/salihozyurt",target:"_blank"},n.a.createElement("span",{className:"fa fa-github fa-lg"})," Github")),n.a.createElement(C.a,null,n.a.createElement(j.a,{href:"mailto:salihozyurt@salihozyurt.tech",target:"_blank"},n.a.createElement("span",{className:"fa fa-google fa-lg"})," GMail")),n.a.createElement(C.a,null,n.a.createElement(j.a,{href:"mailto:salihozyurt@yahoo.com",target:"_blank"},n.a.createElement("span",{className:"fa fa-yahoo fa-lg"})," Yahoo")),n.a.createElement(C.a,null,n.a.createElement(y.a,{outline:!0,onClick:this.toggleModal,style:{backgroundColor:"#f0e8e3",color:"#de7119"}},n.a.createElement("span",{className:"fa fa-link fa-lg"})," Contact Me")))))),n.a.createElement(I.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},n.a.createElement(B.a,{toggle:this.toggleModal,style:{color:"#de7119"}},"Contact Me"),n.a.createElement(O.a,null,n.a.createElement(f,{isModalOpen:this.toggleModal}))))}}]),t}(l.Component),R=t(9),L=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(R.onShow)(document.getElementById("Turkish"),{enter:function(){document.getElementById("Turkish").style.width="100%"}}),Object(R.onShow)(document.getElementById("English"),{enter:function(){document.getElementById("English").style.width="80%"}}),Object(R.onShow)(document.getElementById("TypeScript"),{enter:function(){document.getElementById("TypeScript").style.width="70%"}}),Object(R.onShow)(document.getElementById("Mongo"),{enter:function(){document.getElementById("Mongo").style.width="60%"}}),Object(R.onShow)(document.getElementById("NodeJS"),{enter:function(){document.getElementById("NodeJS").style.width="80%"}}),Object(R.onShow)(document.getElementById("AWS"),{enter:function(){document.getElementById("AWS").style.width="40%"}}),Object(R.onShow)(document.getElementById("Net"),{enter:function(){document.getElementById("Net").style.width="40%"}}),Object(R.onShow)(document.getElementById("SQL"),{enter:function(){document.getElementById("SQL").style.width="80%"}}),Object(R.onShow)(document.getElementById("JavaScript"),{enter:function(){document.getElementById("JavaScript").style.width="75%"}}),Object(R.onShow)(document.getElementById("HTML"),{enter:function(){document.getElementById("HTML").style.width="60%"}}),Object(R.onShow)(document.getElementById("CSS"),{enter:function(){document.getElementById("CSS").style.width="60%"}}),Object(R.onShow)(document.getElementById("React"),{enter:function(){document.getElementById("React").style.width="40%"}}),Object(R.onShow)(document.getElementById("Flusk"),{enter:function(){document.getElementById("Flusk").style.width="70%"}}),Object(R.onShow)(document.getElementById("CProgram"),{enter:function(){document.getElementById("CProgram").style.width="60%"}}),Object(R.onShow)(document.getElementById("CSharp"),{enter:function(){document.getElementById("CSharp").style.width="35%"}}),Object(T.a)({targets:"#CVComp",opacity:1,duration:5e3})}},{key:"render",value:function(){return n.a.createElement("div",{className:"container",id:"CVComp",style:{paddingTop:100,paddingBottom:75,opacity:0}},n.a.createElement("div",{className:"row justify-content-center",style:{border:"2px solid #116979",borderRadius:"5px 50px",backgroundColor:"#18b0b0"}},n.a.createElement("div",{className:"col-12 col-lg-2",style:{alignItems:"center",display:"flex",justifyContent:"center"}},n.a.createElement("img",{id:"imgTest",src:"assets/images/Vesikalik.jpg",width:"152",height:"152",alt:"vesikalik",style:{border:"solid 2px #116979",borderRadius:"5px 50px"}})),n.a.createElement("div",{className:"col-12 col-lg-10"},n.a.createElement("h2",{style:{color:"white"}},"Salih \xd6ZYURT"),n.a.createElement("hr",{className:"solid",style:{borderTop:"2px solid #fff",borderRadius:"5px"}}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("p",{style:{color:"white"}},"I'm currently working at Armut as Backend Developer. Lately, I interest in Cloud Systems and try to learn anything about that. One of reasons why I chose the working area is that. I improve myself day by day to be beneficial of my team that I work together. I like teach what I learn. Not just about technologies. It can be about anything such as movies, documentaries, finance. I can say that I like research in summary."))))),n.a.createElement("div",{className:"row justify-content-center",style:{paddingTop:"20"}},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h3",null,"Personal"),n.a.createElement("hr",{className:"solid",style:{borderTop:"2px solid #000",borderRadius:"5px"}}),n.a.createElement("h5",null,"Address"),n.a.createElement("p",null,"Denizk\xf6\u015fkler Mah. Avc\u0131lar/\u0130STANBUL"),n.a.createElement("h5",null,"Birthdate"),n.a.createElement("p",null,"10-07-1995"),n.a.createElement("h5",null,"Birthplace"),n.a.createElement("p",null,"Niksar/TOKAT"),n.a.createElement("h5",null,"Nationality"),n.a.createElement("p",null,"Turkey"),n.a.createElement("h5",null,"Marital Status"),n.a.createElement("p",null,"Single"),n.a.createElement("h3",null,"Languages"),n.a.createElement("hr",{className:"solid",style:{borderTop:"2px solid #000",borderRadius:"5px"}}),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h6",null,"Turkish")),n.a.createElement("div",{className:"col-12 col-sm-8"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"Turkish",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}}))),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h6",null,"English")),n.a.createElement("div",{className:"col-12 col-sm-8"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"English",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}}))))),n.a.createElement("div",{className:"col-12 col-sm-8"},n.a.createElement("h3",null,"Work Experience"),n.a.createElement("hr",{className:"solid",style:{borderTop:"2px solid #000",borderRadius:"5px"}}),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"IT Intern")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Sep 2012 - Jun2013"))),n.a.createElement("p",null,n.a.createElement("i",null,n.a.createElement("b",null,"CaniasERP ISTANBUL/Yenibosna"))),n.a.createElement("p",null,"At CaniasERP, I worked as a IT Trainee for trainee program of my high school."),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"Intern")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"May 2021 - Jun 2021"))),n.a.createElement("p",null,n.a.createElement("i",null,n.a.createElement("b",null,"IBTECH KOCAEL\u0130/Gebze"))),n.a.createElement("p",null,"I worked at IBTECH as Software Engineer Intern for a while to complete my college internship. I was member of team that develop Desktop Program using SQL, .Net."),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"JS Developer")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Jun 2021 - Nov 2021"))),n.a.createElement("p",null,n.a.createElement("i",null,n.a.createElement("b",null,"Insider \u0130STANBUL/Levent"))),n.a.createElement("p",null,"At Insider, I was on the Partner Support Department. In my department, we were making the Insider products appropriate to partners' website using HTML, Javascript and CSS. Sometimes, we take Web Service tasks to take correct request payload from partners' websites. It looks like Backend for Frontend Pattern."),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"Backend Developer")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Nov 2021 - Working"))),n.a.createElement("p",null,n.a.createElement("i",null,n.a.createElement("b",null,"Armut \u0130STANBUL/Ac\u0131badem"))),n.a.createElement("p",null,"I working Payment & Finance Team as Backend Developer. I make existing APIs better and develop  new APIs using different programing languages like TypeScript, .Net, etc. We use AWS Services by requirements of our architecture."),n.a.createElement("h3",null,"Skills"),n.a.createElement("hr",{className:"solid",style:{borderTop:"2px solid #000",borderRadius:"5px"}}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"TypeScript")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"TypeScript",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"MongoDB")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"Mongo",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"NodeJS Frameworks (Express, Winston, etc.)")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"NodeJS",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"AWS Services (S3, Lambda, etc.)")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"AWS",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,".Net")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"Net",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"SQL")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"SQL",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"JavaScript")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"JavaScript",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"HTML")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"HTML",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"CSS")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"CSS",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"React")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"React",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"Flusk")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"Flusk",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"C Programing Language")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"CProgram",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("h6",null,"C# Programing Language")),n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement("div",{style:{border:"2px solid #de7119",borderRadius:"5px"}},n.a.createElement("div",{id:"CSharp",style:{border:"2px solid #116979",borderRadius:"2px",height:"2vh",width:"0%",backgroundColor:"#116979",transition:"all 1.5s ease-in-out"}})))),n.a.createElement("h3",null,"Education & Qualifications"),n.a.createElement("hr",{className:"solid",style:{borderTop:"2px solid #000",borderRadius:"5px"}}),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"High School")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Sep 2009-Jun 2013"))),n.a.createElement("p",null,n.a.createElement("i",null,n.a.createElement("b",null,"\u015ei\u015fli Industrial Vocational High School (Informatics Department Database) ISTANBUL/\u015ei\u015fli"))),n.a.createElement("p",null,"The high school created my basic level about Computer Science. It teached me Java Programing Language, C# and PL-SQL."),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"Associate Degree")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Sep 2013-Jun 2015"))),n.a.createElement("p",null,n.a.createElement("i",null,n.a.createElement("b",null,"Trakya University (Computer Programing) EDIRNE/Sara\xe7hane"))),n.a.createElement("p",null,"Object orianted programing as well as web programing such as HTML, CSS, Javascript was teached. I mett web programing first time in associate degree. It expanded my horizon."),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"Bachelor Degree")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Sep 2017-Jun 2021"))),n.a.createElement("p",null,n.a.createElement("i",null,n.a.createElement("b",null,"Marmara University (Computer Science Engineering) ISTANBUL/Kad\u0131k\xf6y"))),n.a.createElement("p",null,"A lot of courses that are very usefull such as Data Structure, Algorithm Analysis, Operating System was given. These courses was appended me new vision and mission and help me upgrade myself."),n.a.createElement("h3",null,"Certificates"),n.a.createElement("hr",{className:"solid",style:{borderTop:"2px solid #000",borderRadius:"5px"}}),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"Oracle")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Mar 2012"))),n.a.createElement("p",null,"Oracle Database 11g_Introduction to SQL"),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"Oracle")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Mar 2012"))),n.a.createElement("p",null,"Fundamentals of the Java Programing Language"),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"Coursera")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Oct 2020"))),n.a.createElement("a",{href:"https://www.coursera.org/account/accomplishments/certificate/WUCFH42TQZQT",target:"_blank",rel:"noopener noreferrer"},"Front-End Web Development with React (with Honors)"),n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("h4",null,"Coursera")),n.a.createElement("div",{className:"col-12 col-sm-4"},n.a.createElement("p",null,"Oct 2020"))),n.a.createElement("a",{href:"https://www.coursera.org/account/accomplishments/certificate/EWLK2MH39FZP",target:"_blank",rel:"noopener noreferrer"}," Front-End Web UI Frameworks and Tools: Bootstrap 4 (with Honors)"))))}}]),t}(l.Component),A=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).fadein=function(){setTimeout((function(){return e.props.handleCV()}),400),Object(T.a)({targets:"#welcomeComp",scale:.5,translateXY:-500,opacity:0,duration:5e3})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(T.a)({targets:"#welcomeComp",scale:1,translateXY:500,opacity:1,duration:5e3})}},{key:"render",value:function(){return n.a.createElement("div",{className:"container hexagon",id:"welcomeComp",style:{opacity:0}},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-8 col-sm-6 welcome"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-12 col-sm-8",style:{textAlign:"center"}},n.a.createElement("img",{src:"assets/images/HeaderLogo.png",width:"300",height:"190",alt:"logo"})),n.a.createElement("div",{className:"col-12 col-sm-8"},n.a.createElement("a",{onClick:this.fadein},n.a.createElement("span",{className:"fa fa-address-card fa-lg"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/salih-%C3%B6zyurt-ba6a2395/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"fa fa-linkedin fa-lg"})),n.a.createElement("a",{href:"https://github.com/salihozyurt",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"fa fa-github fa-lg"})),n.a.createElement("a",{href:"mailto:salihozyurt@salihozyurt.tech",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"fa fa-google fa-lg"})),n.a.createElement("a",{href:"mailto:salihozyurt@yahoo.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"fa fa-yahoo fa-lg"}))),n.a.createElement("div",{className:"col-12 col-sm-8"},n.a.createElement("p",null,"Backend Developer"))))))}}]),t}(l.Component),V=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(T.a)({targets:"#FootComp",opacity:1,duration:5e3})}},{key:"render",value:function(){return n.a.createElement("div",{id:"FootComp",style:{opacity:0}},n.a.createElement("a",{href:"https://www.linkedin.com/in/salih-%C3%B6zyurt-ba6a2395/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"fa fa-linkedin fa-lg"})),n.a.createElement("a",{href:"https://github.com/salihozyurt",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"fa fa-github fa-lg"})),n.a.createElement("a",{href:"mailto:salih.zyurt@gmail.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"fa fa-google fa-lg"})),n.a.createElement("a",{href:"mailto:salihozyurt@yahoo.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"fa fa-yahoo fa-lg"})),n.a.createElement("p",null,"\xa9 Copyright 2020 Salih \xd6ZYURT"))}}]),t}(l.Component),H=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={isCV:!1},l.handleCV=l.handleCV.bind(Object(d.a)(l)),l}return Object(o.a)(t,[{key:"handleCV",value:function(){this.setState({isCV:!this.state.isCV})}},{key:"render",value:function(){var e=this,a=function(){return!1===e.state.isCV?n.a.createElement("div",{className:"d-flex h-100 align-items-center justify-content-center"},n.a.createElement(A,{handleCV:e.handleCV}),n.a.createElement(u.a,{color:"#116979",num:200,type:"cobweb",bg:!0})):n.a.createElement("div",{className:"d-inline"},n.a.createElement(M,null),n.a.createElement(L,null),n.a.createElement(V,null))};return n.a.createElement("div",{className:"h-100"},n.a.createElement(a,null))}}]),t}(l.Component),D=(t(50),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(H,null))}}]),t}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.Fragment,null,n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1507cd0a.chunk.js.map