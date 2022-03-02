
$(document).ready(function () {

    //fullPage
    new fullpage('#fullpage', {
        licenseKey: 'D1AF2031-25C74F5F-8F279168-8FF34DAF',
        paddingTop: '0px',
        paddingBottom: '0px',
        slideSelector: '.horizontal-scrolling',
        navigation: true,
        autoScrolling: true,
        scrollingSpeed: 700,
        slidesNavigation: false,
        scrollHorizontally: true,
        controlArrows: false, //슬라이더 버튼
        keyboardScrolling: false, //키보드로 슬라이더 이동
        dragAndMove: true, //마우스나 손가락을 써서 슬라이더 이동
        fadingEffect: 'slides'
    });
    //fullPageEnd

});