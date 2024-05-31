import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Animations() {
    
    //console.log(message);
   gsap.to('.author-name', {duration:.5, opacity: 1 });
   gsap.to('.author-spelling', {duration:.5, opacity:1});
   gsap.to('.author-description', {duration:1, opacity:1 });
   gsap.to('.cred-item', {duration:2, opacity:1, stagger: .1,  delay: 1});
   gsap.to('.recent-work', {duration:2, opacity:1,  delay: 3});

    let recentWork = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.project-item',
            start: '-200px center', // when the top of the trigger hits the top of the viewport
            end: '600px center', // end after scrolling 500px beyond the start
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: false,
            duration: 3,
            toggleActions: 'play reverse play'
        }
    });

    let funProjectsTitle = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.fun-projects',
            start: '-200px center', // when the top of the trigger hits the top of the viewport
            end: 'bottom center', // end after scrolling 500px beyond the start
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: false,
            duration: 3,
            toggleActions: 'play reverse play'
        }
    });

    let funProjects = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.fun-project-item',
            start: '-160px center', // when the top of the trigger hits the top of the viewport
            end: 'bottom center', // end after scrolling 500px beyond the start
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: false,
            duration: 3,
            toggleActions: 'play reverse'
        }
    });


    let skillsTitle = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.skills',
            start: '-350px center', // when the top of the trigger hits the top of the viewport
            end: 'bottom center', // end after scrolling 500px beyond the start
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: false,
            duration: 3,
            toggleActions: 'play reverse'
        }
    });

    let skill = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.skill-item',
            start: '-350px center', // when the top of the trigger hits the top of the viewport
            end: '-100px center', // end after scrolling 500px beyond the start
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: false,
            duration: 3,
            toggleActions: 'play reverse'
        }
    });


    recentWork.to('.project-item', { opacity: 1, duration: 5,  stagger: .1  });
    funProjectsTitle.to('.fun-projects', { opacity: 1 });
    funProjects.to('.fun-project-item', { opacity: 1, duration: 5, stagger: 1});
                    
    skillsTitle.to('.skills', { opacity: 1  });
    skill.fromTo('.skill-item', { opacity: 0 },{ opacity: 1,  stagger: .1});

    return;
  }
