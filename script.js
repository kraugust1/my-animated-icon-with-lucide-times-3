// console.log( gsap )
// window.addEventListener('DOMContentLoaded', () => {const path = document.querySelector('#head path'); console.log(path.getTotalLength()) });

// const tl = gsap.timeline({defaults: { ease: 'power3.out', duration: .7 }});
// gsap.set('batbar', {autoAplpha: 1})

gsap.to('.batbar', {opacity: 0, duration: 2, stagger: 1, repeat: -1, yoyo: true });

// gsap.from('#battery', {duration: 2, repeat: -1, yoyo: true, rotate: 30, ease:'Elastic' });

var tl = new TimelineMax({repeat:-1,repeatDelay:0})
.to('#battery',0.7,{rotation:30})
.to('#battery',7,{rotation:0,ease:Elastic.easeOut.config(0.9,0.1)});


gsap.to('.finger', {x: -2, y: 2, duration: .7, stagger: .2, repeat: -1, yoyo: true });

gsap.to('#paw-main', {scale: 7.5, duration: 1, transformOrigin: '50% 50%', repeat: -1, yoyo: true, fill: 'pink' });

