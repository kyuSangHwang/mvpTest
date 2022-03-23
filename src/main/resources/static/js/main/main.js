let preventDuplicateBtn = true;


$(document).ready(function () {

    //fullPage
    new fullpage('#fullpage', {
        // LicenseKey
        licenseKey: 'D1AF2031-25C74F5F-8F279168-8FF34DAF',
        // Move
        navigation: true,
        navigationTooltips: ['메인페이지', '회사소개', '매칭서비스', '입양/검증', '등록/정보', '지식정보', '스토어', 'Contact us'],
        slidesNavigation: true,
        navigationPosition: 'right',
        // Scroll
        css3:false,
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollHorizontally: true,
        dragAndMove: true, //마우스나 손가락을 써서 슬라이더 이동
        fadingEffect: 'slides',
        scrollOverflow: true,
        // Accessibility
        keyboardScrolling: false, //키보드로 슬라이더 이동
        // Design
        sectionsColor : ['#fffffb', '#fffffb', '#fffffb', '#fffffb', '#fffffb', '#fffffb', '#fffffb', '#fffffb'],
        controlArrows: false, //슬라이더 버튼
        paddingTop: '0px',
        paddingBottom: '0px',
        // Custom Selector
        slideSelector: '.horizontal-scrolling',

        // Event
        onLeave: function(origin, destination, direction){},
        afterLoad: function(anchorLink, index,origin, destination, direction){

        },
        afterRender: function(){
            afterRenderTest();
        },
        afterResize: function(width, height){},
        afterReBuild: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(section, origin, destination, direction){},
        onSlideLeave: function(section, origin, destination, direction){}

    });
    //fullPageEnd

    $('.section8-downloadButton').click(function() {
        const sessionValue = sessionStorage.getItem('sessionKey');

        if (!!preventDuplicateBtn && !sessionValue) {
            preventDuplicateBtn = false;
            sessionStorage.setItem('sessionKey', 'fuck');

            section8DownloadBtnCnt();
        } else {
            return "";
        }
    });

});



/**
* section8DownloadBtnCnt: 다운로드 클릭했을 때 클릭횟수 count 하는 함수
*
*/
function section8DownloadBtnCnt() {
    let downloadClickCnt = 0;
    let lsLength = localStorage.length;

    if (lsLength === 0) {
        localStorage.setItem(downloadClickCnt, 'customers_' + downloadClickCnt);
    }
    else {
        downloadClickCnt = lsLength;
        localStorage.setItem(downloadClickCnt, 'customers_' + downloadClickCnt);
    }
}

/**
 * afterRenderTest: fullPage 로드 된 다음에 실행 되는 함수
 *
 */
function afterRenderTest() {

}

/**
 * sendEmail: 다운로드(사전예약) 클릭 시 팝업의 신청하기 버튼 클릭했을 떄 실행되는 함수
 *
 */
function sendEmail(){

    const fullEmail = $("#email");
    // const wantCartegory = $("#cartegory");

    const templateParams = {
        // cartegory: wantCartegory,
        email: fullEmail.val()
    };

    emailjs.init("oheTEu0jy6XxN5NCQ");

    emailjs.send('service_n432v57', 'template_4p7abob', templateParams).then(function (response) {
        Swal.fire({
            title: '사전 신청되었습니다.!',
            text: '사전 신청해주신 보호자님께 가장 먼저 알려드릴께요!',
            icon: 'success',
            confirmButtonText: '확인'
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        })
    },function () {
        location.reload();
    })

}