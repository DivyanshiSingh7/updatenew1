(this["webpackJsonpov-tracker"]=this["webpackJsonpov-tracker"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){e.exports=a(62)},34:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},36:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),o=a.n(r),s=(a(34),a(35),a(36),a(8)),c=a(9),i=a(6),m=a(11),d=a(10),h=(a(37),a(38),a(42),a(45),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=new Date(n.state.selectDate),a=Number(n.state.selectValue),l=new Date(n.state.selectDate),r=new Date(n.state.selectDate),o=new Date(n.state.selectDate),s=new Date(n.state.selectDate);t.setDate(t.getDate()+a-15),l.setDate(l.getDate()+a-18),r.setDate(r.getDate()+a-13),o.setDate(o.getDate()+a-14),s.setDate(s.getDate()+a-1),n.setState({newdate:t.getDate(),newmonth:t.getMonth(),newyear:t.getFullYear(),newday:t.getDay()}),n.setState({f_day:l.getDay(),f_date:l.getDate(),f_month:l.getMonth(),f_year:l.getFullYear()}),n.setState({m_day:r.getDay(),m_date:r.getDate(),m_month:r.getMonth(),m_year:r.getFullYear()}),n.setState({n_day:o.getDay(),n_date:o.getDate(),n_month:o.getMonth(),n_year:o.getFullYear()}),n.setState({p_day:s.getDate(),p_date:s.getDate(),p_month:s.getMonth(),p_year:s.getFullYear()});var c=t.getMonth()+1,i=t.getDate();c<10&&(c="0"+c),i<10&&(i="0"+i);var m=t.getFullYear()+"-"+c+"-"+i;console.log(m),n.setState({newdatestring:m,submitted:!0})},n.state={selectValue:28,selectDate:null,newday:"",newdate:"",newmonth:"",newyear:"",arrmonth:["January","February","March","April","May","June","July","August","September","October","November","December"],arrdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],newdatestring:"",submitted:!1,f_day:"",f_date:"",f_month:"",f_year:"",m_day:"",m_date:"",m_month:"",m_year:"",n_day:"",n_date:"",n_month:"",n_year:"",p_day:"",p_date:"",p_month:"",p_year:"",hoveryes:!1,selectedOption1:"",selectedOption2:"",selectedOption3:"",click1:!1,click2:!1,click3:!1,clcik4:!1,clcik5:!1,clcik6:!1},n.handleDropdownChange=n.handleDropdownChange.bind(Object(i.a)(n)),n.handleClick=n.handleClick.bind(Object(i.a)(n)),n.handlec0=n.handlec0.bind(Object(i.a)(n)),n.handlec1=n.handlec1.bind(Object(i.a)(n)),n.handleOptionChange1=n.handleOptionChange1.bind(Object(i.a)(n)),n.handleOptionChange2=n.handleOptionChange2.bind(Object(i.a)(n)),n.handleClick1=n.handleClick1.bind(Object(i.a)(n)),n.handleClick2=n.handleClick2.bind(Object(i.a)(n)),n.handleClick3=n.handleClick3.bind(Object(i.a)(n)),n.handleClick4=n.handleClick4.bind(Object(i.a)(n)),n.handleClick5=n.handleClick5.bind(Object(i.a)(n)),n.handleClick6=n.handleClick6.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"handleDropdownChange",value:function(e){this.setState({selectValue:e.target.value})}},{key:"handlec1",value:function(){this.setState({hoveryes:!0})}},{key:"handlec0",value:function(){this.setState({hoveryes:!1})}},{key:"handleOptionChange1",value:function(e){this.setState({selectedOption1:e.target.value})}},{key:"handleOptionChange2",value:function(e){this.setState({selectedOption2:e.target.value})}},{key:"handleClick1",value:function(e){0==this.state.click1?this.setState({click1:!0}):this.setState({click1:!1})}},{key:"handleClick2",value:function(e){0==this.state.click2?this.setState({click2:!0}):this.setState({click2:!1})}},{key:"handleClick3",value:function(e){0==this.state.click3?this.setState({click3:!0}):this.setState({click3:!1})}},{key:"handleClick4",value:function(e){0==this.state.clcik4?this.setState({click4:!0}):this.setState({click4:!1})}},{key:"handleClick5",value:function(e){0==this.state.clcik5?this.setState({click5:!0}):this.setState({click5:!1})}},{key:"handleClick6",value:function(e){0==this.state.click6?this.setState({click6:!0}):this.setState({click6:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"mainbox"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row",style:{paddingTop:"1%"}},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",{id:"para3"},l.a.createElement("strong",null,"When did you get your most recent period ? ",l.a.createElement("span",{style:{color:"red"}},"*"))," ")),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("input",{className:"inputDate",type:"date",onChange:function(t){return e.setState({selectDate:t.target.value})}}))),l.a.createElement("hr",{style:{width:"100%",color:"black",paddingTop:"0%"}}),l.a.createElement("div",{className:"row",style:{paddingTop:"2%"}},l.a.createElement("div",{className:"col-md-6",style:{paddingBottom:"3%"}},l.a.createElement("div",null,l.a.createElement("p",{id:"para4"},l.a.createElement("strong",null,"What is your average menstrual cycle length ",l.a.createElement("span",null,l.a.createElement("a",{style:{color:"blue"},onMouseOver:this.handlec1,onMouseLeave:this.handlec0},l.a.createElement("strong",null,"?"))))," ")),this.state.hoveryes?l.a.createElement("span",{className:"tooltiptext"},l.a.createElement("p",{style:{padding:"5%"}},"Your menstrual cycle length is the number of days from the day your period starts to the day before your next period starts")):null),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("select",{style:{width:"200px",height:"50px",color:"#163948",borderRadius:"25px",borderWidth:"3px",borderColor:"#163948"},id:"dropdown",onChange:this.handleDropdownChange},l.a.createElement("option",{value:"28"},"Select days"),l.a.createElement("option",{value:"20"},"20 days"),l.a.createElement("option",{value:"21"},"21 days"),l.a.createElement("option",{value:"22"},"22 days"),l.a.createElement("option",{value:"23"},"23 days"),l.a.createElement("option",{value:"24"},"24 days"),l.a.createElement("option",{value:"25"},"25 days"),l.a.createElement("option",{value:"26"},"26 days"),l.a.createElement("option",{value:"27"},"27 days"),l.a.createElement("option",{value:"28"},"28 days"),l.a.createElement("option",{value:"29"},"29 days"),l.a.createElement("option",{value:"30"},"30 days"),l.a.createElement("option",{value:"31"},"31 days"),l.a.createElement("option",{value:"32"},"32 days"),l.a.createElement("option",{value:"33"},"33 days"),l.a.createElement("option",{value:"34"},"34 days"),l.a.createElement("option",{value:"35"},"35 days"),l.a.createElement("option",{value:"36"},"36 days"),l.a.createElement("option",{value:"37"},"37 days"),l.a.createElement("option",{value:"38"},"38 days"),l.a.createElement("option",{value:"39"},"39 days"),l.a.createElement("option",{value:"40"},"40 days"),l.a.createElement("option",{value:"41"},"41 days"),l.a.createElement("option",{value:"42"},"42 days"),l.a.createElement("option",{value:"43"},"43 days"),l.a.createElement("option",{value:"44"},"44 days"),l.a.createElement("option",{value:"45"},"45 days")))),l.a.createElement("hr",{style:{width:"100%",color:"black",paddingTop:"0%"}}),l.a.createElement("div",{className:"row",style:{alignItems:"center"}},l.a.createElement("button",{className:"myButton",id:"sub",onClick:function(){return e.handleClick()}},"Submit")),l.a.createElement("div",null,!isNaN(this.state.newdate)&&null!=this.state.selectDate||1!=this.state.submitted?l.a.createElement("div",{id:"outerbox",style:{backgroundColor:"#FCFCFC"}},this.state.submitted?l.a.createElement("div",{className:"container",id:"resultbox",style:{backgroundColor:"#FCFCFC",marginTop:"5%",paddingBottom:"3%",borderRadius:"10px",boxShadow:" 0 15px 30px 0 rgba(0, 0, 0, 0.2)"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{id:"line1"},"Predicted ovulation date (Cycle length ",this.state.selectValue,"): ")),l.a.createElement("div",{className:"row"},l.a.createElement("h5",{id:"line2"},isNaN(this.state.newdate)?null:l.a.createElement("div",null,this.state.arrdays[this.state.newday],", ",this.state.newdate," ",this.state.arrmonth[this.state.newmonth]," ",this.state.newyear))),l.a.createElement("div",{className:"row"},l.a.createElement("h5",{id:"line3"},"Most fertile days : "),l.a.createElement("h5",{id:"line4"},isNaN(this.state.f_date)?null:l.a.createElement("div",null,this.state.arrdays[this.state.f_day],", ",this.state.f_date," ",this.state.arrmonth[this.state.f_month]," ",this.state.f_year," to ",this.state.arrdays[this.state.newday],", ",this.state.newdate," ",this.state.arrmonth[this.state.newmonth]," ",this.state.newyear))),l.a.createElement("div",{className:"row"},l.a.createElement("h5",{id:"line5"},"Potentially fertile days : "),l.a.createElement("h5",{id:"line6"},isNaN(this.state.n_date)?null:l.a.createElement("div",null,this.state.arrdays[this.state.n_day],", ",this.state.n_date," ",this.state.arrmonth[this.state.n_month]," ",this.state.n_year," and ",this.state.arrdays[this.state.m_day],", ",this.state.m_date," ",this.state.arrmonth[this.state.m_month]," ",this.state.m_year))),l.a.createElement("div",{className:"row"},l.a.createElement("h5",{id:"line7"},"Take Pregnancy Test : ")),l.a.createElement("div",{className:"row"},l.a.createElement("h5",{id:"line8"},isNaN(this.state.p_date)?null:l.a.createElement("div",null,this.state.arrdays[this.state.p_day]," ",this.state.p_date," ",this.state.arrmonth[this.state.p_month]," ",this.state.p_year)))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",{className:"calendarp"},l.a.createElement("strong",null,"View Ovulation Date in Calendar")),l.a.createElement("input",{className:"inputDate2",type:"date",value:this.state.newdatestring}))),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("a",{id:"redom",className:"myButton",href:"http://www.proactiveforher.com/tools/ovulation-tracker/"},"Redo")))):null):l.a.createElement("h5",{className:"errorm"},"  * Please Enter Date"))))}}]),a}(n.Component)),u=(a(22),a(46),a(7)),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={a:2},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:"7%",paddingTop:"3%",paddingBottom:"3%",marginLeft:"8%"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("h2",{className:"phyheading"},"Speak to our physician"),l.a.createElement("br",null),l.a.createElement("h3",{className:"phyheading2"},"Your comfort, your convenience"),l.a.createElement("h5",{className:"phypara"},"Schedule a 1:1 consultation with an expert to openly talk about any reasons that might be affecting your emotional well-being."),l.a.createElement("a",{className:"myButtond",href:"http://www.proactiveforher.com/doctors/"},"Book an appointment")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.proactiveforher.com/doctors/"},l.a.createElement("i",{class:"fa fa-user-md",style:{fontSize:"250px",color:"rgb(188, 216, 223)",marginLeft:"8%"}}))))))}}]),a}(n.Component),y=a(64),v=a(65),f=a(73),E=a(66),b=a(16),w=(a(23),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={open:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{style:{position:"fixed",width:"100%",top:0,zIndex:1}},l.a.createElement(y.a,{expand:"lg",className:"header"},l.a.createElement("h2",null,l.a.createElement("a",{href:"http://www.proactiveforher.com/",className:"logo",style:{fontFamily:"Abril Fatface, Sans-serif",letterSpacing:"5px"}},"Proactive")),l.a.createElement(v.a,{className:"navbar-dark",style:{borderColor:"white"},onClick:function(){e.setState({open:!e.state.open})}},l.a.createElement(u.a,{icon:b.a,color:"white"})),l.a.createElement(f.a,{className:"header-right",isOpen:this.state.open,navbar:!0},l.a.createElement(E.a,{navbar:!0},l.a.createElement("a",{href:"http://www.proactiveforher.com/"},"Home"),l.a.createElement("a",{href:"http://www.proactiveforher.com/webinar/"},"Webinars"),l.a.createElement("a",{href:"http://www.proactiveforher.com/videos/"},"Videos"),l.a.createElement("a",{href:"http://www.proactiveforher.com/blog/"},"Blog"),l.a.createElement("a",{href:"http://www.proactiveforher.com/sti-2/patient-education-tools/"},"Tools"),l.a.createElement("a",{href:"http://www.proactiveforher.com/forum/"},"Forum"),l.a.createElement("a",{href:"http://www.proactiveforher.com/doctors/"},"Physicians"))))),l.a.createElement("div",{style:{backgroundColor:"#FFFCFC",marginTop:"5%",paddingTop:"10px"}},l.a.createElement("h1",{className:"hh",style:{paddingTop:"2%",paddingBottom:"0%",color:"#163948"}},l.a.createElement("strong",null,"Ovulation Tracker")),l.a.createElement("p",{className:"para1",style:{paddingLeft:"15%",paddingRight:"15%",paddingTop:"1%",paddingBottom:"0%"}},"A brief assessment to give you a picture of your emotional well-being"),l.a.createElement("p",{className:"para2",style:{paddingLeft:"11%",paddingRight:"11%",paddingBottom:"3%"}},"Below is a simple, hassle-free tool to help you easily track your ovulation.")))}}]),a}(n.Component)),g=a(13),k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={a:2},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:"3%",backgroundColor:"#FFFCFC",paddingTop:"3%",paddingBottom:"5%"}},l.a.createElement("h1",{className:"sharetext",style:{color:"#163948",textAlign:"center"}},"Share now"),l.a.createElement("p",{className:"textbelowshare",style:{color:"#163948",paddingBottom:"1.5%",textAlign:"center"}},"Help your friends keep a check on their fertility factors."),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("a",{className:"fb-share-button",href:" https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.proactiveforher.com%2Ftools%2mental-health-check%2F&quote=Proactive's%20Mental%20Health%20screening%20tool%20assesses%20the%20impact%20of%20your%20sexual%20and%20reproductive%20health%20on%20your%20emotional%20well-being.%20Take%20the%20first%20step%20towards%20better%20mental%20health%20by%20answering%20few%20questions%20about%20how%20you%20feel!",target:"_blank",rel:"noopener","aria-label":""},l.a.createElement(u.a,{icon:g.b,className:"b1",style:{width:"50px"}})),l.a.createElement("a",{className:"pl-4",href:"https://twitter.com/intent/tweet/?text=Proactive's%20Mental%20Health%20screening%20tool%20assesses%20the%20impact%20of%20your%20sexual%20and%20reproductive%20health%20on%20your%20emotional%20well-being.%20Take%20the%20first%20step%20towards%20better%20mental%20health%20by%20answering%20few%20questions%20about%20how%20you%20feel!&url=http%3A%2F%2Fproactiveforher.com%2Ftools%2Fmental-health-check%2F",target:"_blank",rel:"noopener","aria-label":""},l.a.createElement(u.a,{icon:g.f,className:"b2"})),l.a.createElement("a",{className:"pl-4",href:"mailto:?subject=How%20does%20your%20sexual%20and%20reproductive%20health%20effect%20your%20emotions?%20Find%20out.%20|%20Proactive&body=Proactive's%20Mental%20Health%20screening%20tool%20assesses%20the%20impact%20of%20your%20sexual%20and%20reproductive%20health%20on%20your%20emotional%20well-being.%20Take%20the%20first%20step%20towards%20better%20mental%20health%20by%20answering%20few%20questions%20about%20how%20you%20feel!%20http%3A%2F%2Fproactiveforher.com%2Ftools%2Fmental-health-check%2F",target:"_self",rel:"noopener","aria-label":""},l.a.createElement(u.a,{icon:b.b,className:"b3"})),l.a.createElement("a",{className:"pl-4",href:"https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fproactiveforher.com%2Ftools%2Fmental-health-check%2F&title=How%20does%20your%20sexual%20and%20reproductive%20health%20effect%20your%20emotions?%20Find%20out.%20|%20Proactive&summary=Proactive's%20Mental%20Health%20screening%20tool%20assesses%20the%20impact%20of%20your%20sexual%20and%20reproductive%20health%20on%20your%20emotional%20well-being.%20Take%20the%20first%20step%20towards%20better%20mental%20health%20by%20answering%20few%20questions%20about%20how%20you%20feel!&source=http%3A%2F%2Fproactiveforher.com%2Ftools%2Fbirth-control%2F",target:"_blank",rel:"noopener","aria-label":""},l.a.createElement(u.a,{icon:g.e,className:"b4",style:{width:"50px"}})),l.a.createElement("a",{className:"pl-4",href:"whatsapp://send?text=Proactive's%20Mental%20Health%20screening%20tool%20assesses%20the%20impact%20of%20your%20sexual%20and%20reproductive%20health%20on%20your%20emotional%20well-being.%20Take%20the%20first%20step%20towards%20better%20mental%20health%20by%20answering%20few%20questions%20about%20how%20you%20feel!%20http%3A%2F%2Fproactiveforher.com%2Ftools%2Fbirth-control%2F",target:"_blank",rel:"noopener","aria-label":""},l.a.createElement(u.a,{icon:g.g,className:"b5",style:{width:"50px"}}))),l.a.createElement("div",null,l.a.createElement("h1",{className:"sharetext",style:{color:"#163948",marginTop:"5%",textAlign:"center"}},"Comment"),l.a.createElement("p",{style:{color:"#163948",paddingBottom:"1.5%",textAlign:"center"}},"Share anything you would like to say."),l.a.createElement("div",{className:"commentt",class:"fb-comments","data-href":"https://www.proactiveforher.com/tools/conception-checklist-tool/","data-numposts":"100","data-width":""})))}}]),a}(n.Component),N=a(67),_=a(68),C=a(69),F=a(70),O=a(71),x=a(72),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={value:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(N.a,{fluid:!0,style:{background:"#163948",padding:"30px"}},l.a.createElement(_.a,{className:"mx-md-5"},l.a.createElement(C.a,{className:"p-4 text-white order-2 order-md-1",md:"6"},l.a.createElement("div",{className:"mb-3 ",style:{textAlign:"left"}},l.a.createElement("a",{href:"http://www.proactiveforher.com/",style:{color:"white"}},"Home")),l.a.createElement("div",{className:"mb-3 ",style:{display:"flex"}},l.a.createElement("a",{href:"https://www.facebook.com/proactiveforher/?__tn__=%2Cd%2CP-R&eid=ARBOEZQG5jk8MqVy1_dkE5SWe1aZh6iVRJ4CNfc2AlW_d4oKslHdFP1TOpa1LqHGK7eKHdarQEhFmfjz",target:"_blank",style:{color:"white"}},l.a.createElement(u.a,{cursor:"pointer",icon:g.a,className:"mr-3"})),l.a.createElement("a",{href:"https://www.instagram.com/proactiveforher/?hl=en",target:"_blank",style:{color:"white"}},l.a.createElement(u.a,{cursor:"pointer",icon:g.c,className:"mr-3"})),l.a.createElement("a",{href:"https://www.linkedin.com/company/43208504/admin/",target:"_blank",style:{color:"white"}},l.a.createElement(u.a,{cursor:"pointer",icon:g.d,className:"mr-3 "}))),l.a.createElement("div",{className:"mb-3 ",style:{textAlign:"left"}},"\xa9 Proactive For Her 2020")),l.a.createElement(C.a,{className:"p-4 order-md-2"},l.a.createElement("div",{id:"mc_embed_signup"},l.a.createElement(F.a,{action:"https://proactiveforher.us18.list-manage.com/subscribe/post?u=14fbc27b9ee1cfe7f204242de&id=792a773110",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",class:"validate",target:"_blank",novalidate:!0},l.a.createElement("div",{id:"mc_embed_signup_scroll"},l.a.createElement(O.a,{type:"email",style:{width:"100%",fontSize:"0.8rem"},value:this.state.value,onChange:function(t){e.setState({value:t.target.value})},name:"EMAIL",className:"email mb-2",id:"mce-EMAIL",placeholder:"Your Email Address",required:!0}),l.a.createElement("div",{class:"clear"},l.a.createElement(x.a,{style:{width:"100%",fontSize:"0.8rem"},type:"submit",name:"subscribe",id:"mc-embedded-subscribe",className:"button"},"Signup for Newsletter"))))))))}}]),a}(n.Component);var D=function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(h,null),l.a.createElement(p,null),l.a.createElement(k,null),l.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(58),a(59);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.e971defd.chunk.js.map