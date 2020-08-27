$(function(){
    let controller = new ScrollMagic.Controller();
    let wrap = $('.work-section'),
        elt1 = wrap.find('.work-con1'),
        elt2 = wrap.find('.work-con2'),
        elt3 = wrap.find('.work-con3');
    let t1 = gsap.timeline()
        .fromTo(elt1, 2, {y:"0%", opacity:'1'}, {y:"-100%", opacity:'0'})
        .fromTo(elt2, 2, {y:"+=100%", opacity:'1'}, {y:"-100%", opacity:'1'},+1)
        .fromTo(elt3, 2, {y:"+=100%", opacity:'1'}, {y:"-100%", opacity:'1'},+1);
        // .staggerFromTo(elt1, 1, {y:"0%", opacity:'1'}, {y:"-=100%", opacity:'1'})
        // .fromTo(elt1, 1, {y:"0%", opacity:'1'}, {y:"-100%", opacity:'0'})
        // .fromTo(elt2, 1, {y:"100%", opacity:'0'}, {y:"0%", opacity:'1',onComplete:function(){
        //     console.log('qqq');
        // }},'+=1')
        // .fromTo(elt3, 1, {y:"200%", opacity:'0'}, {y:"0%", opacity:'1'},'+=2');

    let scene = new ScrollMagic.Scene({
        triggerElement: '.work-section',
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
    .setTween(t1)
    .addTo(controller)
    .setPin('.work-section');



//     let t2 = gsap.timeline();
//         t2.staggerTo(elt, 0.5, {
//             y: '-100%',
//             opacity:0
//         },'+=10');
//     let scene2 = new ScrollMagic.Scene({
//         triggerElement: '.work-section',
//         duration: '100%',
//         triggerHook: 0,
//         offset: '300'
//     })
//         .setTween(t2)
//         .setPin('.work-section')
//         .addTo(controller);
})