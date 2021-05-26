function App(){gsap.to("body",{opacity:1,duration:0}),gsap.timeline({scrollTrigger:{trigger:".SectionA",start:"0% 100%",end:"75% 0%",toggleActions:"play none none none"}}).set("#NavFixed #scrolldown svg",{y:"-100"},0).from("#NavFixed #logo",{opacity:0,duration:.7,ease:"sine.inOut"},0).from("#NavFixed nav ul a",{opacity:0,y:"-10",duration:.7,ease:"sine.inOut",stagger:.2},.3).from("#NavFixed #contact a",{opacity:0,y:"-10",duration:.7,ease:"sine.inOut"},1).from(".SectionA #intro h1 .word",{opacity:0,y:"13",duration:.7,ease:"sine.inOut",stagger:.3},1.3),gsap.timeline({scrollTrigger:{trigger:".SectionA",start:"22% 13%",end:"22% 13%",toggleActions:"none play reverse none"}}).to("#NavFixed nav ul a",{y:"-100",duration:.7,ease:"sine.inOut",stagger:.1},.1).to("#NavFixed #contact a",{y:"-100",duration:.7,ease:"sine.inOut"},.5).to("#NavFixed #scrolldown svg",{y:"0",duration:.7,ease:"sine.inOut"},.5),gsap.timeline({scrollTrigger:{trigger:".SectionB",scrub:0}}).to(".SectionA",{y:"400"},0).to(".SectionA #intro h1",{y:"-130"},0),gsap.timeline({scrollTrigger:{trigger:".SectionB",start:"0% 7%",end:"0% 7%",toggleActions:"none play reverse none"}}).to("#NavFixed #scrolldown svg",{fill:"#0D0D0D",duration:.7,ease:"sine.inOut"},0).to("#NavFixed #logo h1",{color:"#0D0D0D",duration:.7,ease:"sine.inOut"},0),gsap.timeline({scrollTrigger:{trigger:".SectionB",start:"0% 13%",end:"100% 62%",toggleActions:"play reverse play reverse"}}).from(".SectionB #sectionX",{rotate:"0",duration:.7,ease:"sine.inOut"},0).from(".SectionB #RecentWork h2",{y:22,opacity:0,duration:.7,ease:"sine.inOut"},.2).from(".SectionB .imgA",{x:-31,opacity:0,duration:.7,ease:"sine.inOut"},.4).from(".SectionB .imgB",{x:31,opacity:0,duration:.7,ease:"sine.inOut"},.4).from(".SectionB #ViewAllWorkWrap",{y:13,opacity:0,duration:.7,ease:"sine.inOut"},.5),gsap.timeline({scrollTrigger:{trigger:".ShowcasePage",scrub:0,pin:".RightWrapXA, #LeftWrap",pinSpacing:!1}}).to(".ShowcasePage .RightWrapXA .MainXA",{top:0,ease:"none"},0).to(".ShowcasePage .RightWrapXB .MainXB",{top:0,ease:"none"},.5).to(".ShowcasePage .RightWrapXC .MainXC",{top:0,ease:"none"},1),gsap.timeline({scrollTrigger:{trigger:".RightWrapXA",start:"0% 0%",end:"50% 0%",toggleActions:"play reverse play reverse"}}).from(".ShowcasePage #LeftWrap #ShowcasePageWrap #title .titleXA .char",{x:130,y:100,scale:0,rotate:"22deg",duration:1.3,ease:"expo.inOut",stagger:.02},0).from(".ShowcasePage #LeftWrap #ShowcasePageWrap #ImgWrap .ImageXA",{y:70,opacity:0,duration:1.3,ease:"expo.inOut"},.3),gsap.timeline({scrollTrigger:{trigger:".RightWrapXB",start:"0% 50%",end:"50% 0%",toggleActions:"play reverse play reverse"}}).from(".ShowcasePage #LeftWrap #ShowcasePageWrap #title .titleXB .char",{x:130,y:100,scale:0,rotate:"22deg",duration:1.3,ease:"expo.inOut",stagger:.02},0).from(".ShowcasePage #LeftWrap #ShowcasePageWrap #ImgWrap .ImageXB",{y:70,opacity:0,duration:1.3,ease:"expo.inOut"},.3),gsap.timeline({scrollTrigger:{trigger:".RightWrapXC",start:"0% 50%",end:"50% 0%",toggleActions:"play reverse play reverse"}}).from(".ShowcasePage #LeftWrap #ShowcasePageWrap #title .titleXC .char",{x:130,y:100,scale:0,rotate:"22deg",duration:1.3,ease:"expo.inOut",stagger:.02},0).from(".ShowcasePage #LeftWrap #ShowcasePageWrap #ImgWrap .ImageXC",{y:70,opacity:0,duration:1.3,ease:"expo.inOut"},.3),gsap.timeline({scrollTrigger:{trigger:".ShowcasePage",scrub:2.2}}).to(".ShowcasePage #LeftWrap #Scroll .ScrollA h1",{x:"-220%",ease:"none"},0).to(".ShowcasePage #LeftWrap #Scroll .ScrollB h1",{x:"220%",ease:"none"},0),gsap.timeline({scrollTrigger:{trigger:".SectionC",scrub:0}}).to(".ShowcasePage #LeftWrap",{y:"-150%"},0).to(".ShowcasePage #LeftWrap #Scroll .ScrollB",{y:"-70%"},0).to(".ShowcasePage #RightWrap",{y:"-20%"},0),gsap.timeline({scrollTrigger:{trigger:".SectionC",toggleActions:"play reverse play reverse",start:"90% 100%",end:"100% 0%"}}).from(".SectionC .BehanceShotACrop",{y:"395",duration:1.5,ease:"expo.inOut"},1).from(".SectionC #iCodeAyush h1",{x:22,y:22,transformOrigin:"left",rotate:"45deg",duration:1.3,ease:"expo.inOut"},0).from(".SectionC #iCodeAyush h1 .char",{x:122,y:220,scale:0,rotate:"45deg",duration:1.5,ease:"expo.inOut",stagger:.02},0).from(".SectionC nav h1",{x:-13,opacity:0,duration:.7,ease:"sine.inOut",stagger:.2},2).from(".SectionC nav #social span",{y:13,opacity:0,duration:.7,ease:"sine.inOut",stagger:.2},2)}gsap.registerPlugin(ScrollTrigger),window.onload=(()=>{App()});