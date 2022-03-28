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

    $('.checkCategories').on('click', function () {
        const clickCategory = this;
        const clickCategoryValue = clickCategory.innerHTML;
        let categoryLists = $(".checkCategories");

        if(!!clickCategory || !!clickCategoryValue || !!categoryLists) {
            return;
        }

        for (let i = 0; i < categoryLists.length; i++) {
            let categoryList = categoryLists[i];
            let categoryListValue = categoryList.innerHTML;

            if (clickCategoryValue === categoryListValue) {

            } else {

            }
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
 * sendEmail: 다운로드(사전예약) 클릭 시 팝업의 신청하기 버튼 클릭했을 떄 실행되는 함동
 *
 */
function sendEmail() {
    // const wantCartegory = $("#cartegory");

// 라디오 버튼을 클릭했을때 값을 받아온다
    const optionVal = $('input[name="option"]:checked').val();

    // 받아온 값이 ‘ ’ (공란) 이라면
    if(optionVal==null){
        alert("교배/입양/분양 중 원하시는 서비스를 선택해주세요");
    } else {
        const fullEmail = $("#email");

        const templateParams = {
            category: optionVal,
            email: fullEmail.val()
        };

        const emailCheck = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;

        if(emailCheck.test(templateParams.email)) {

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

            //이메일 성공시
            reset();
            //이메일 보내기 실패 숨기기
            emailFailHide();
                //사전예약이 완료되었습니다 아래에 띄우는 것
            emailSuccessShow();

            return;

        } else {
            reset();
            //이메일 보내기 성공 숨기기
            emailSuccessHide();
            //이메일형식이 다릅니다 아래에 띄우는 것
            emailFailShow();

            return;
        }
    }

}

//input 텍스트 초기화 ('')
function reset() {
    const email = document.getElementsByClassName('section8-popup-modal-btn-text-email');
    for(let i=0; i<email.length; i++){
        email[i].value='';
    }
}

//이메일 성공 텍스트 보여주기
function emailSuccessShow() {
    const emailSuccess = document.getElementById('emailSuccess');
    emailSuccess.style.display = "block";
}

//이메일 실패 텍스트 보여주기
function emailFailShow() {
    const emailFail = document.getElementById('emailFail');
    emailFail.style.display = "block";
}

//이메일 성공 텍스트 숨기기
function emailSuccessHide() {
    const emailSuccess = document.getElementById('emailSuccess');
    emailSuccess.style.display = "none";
}

//이메일 실패 텍스트 숨기기
function emailFailHide() {
    const emailFail = document.getElementById('emailFail');
    emailFail.style.display = "none";
}







