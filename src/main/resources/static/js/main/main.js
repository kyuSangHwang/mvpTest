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
        sectionsColor : ['#3e55f2', '#fffffb', '#fffffb', '#fffffb', '#fffffb', '#fffffb', '#fffffb', '#fffffb'],
        controlArrows: false, //슬라이더 버튼
        paddingTop: '0px',
        paddingBottom: '0px',
        // Custom Selector
        slideSelector: '.horizontal-scrolling',

        // Event
        onLeave: function(origin, destination, direction){},
        afterLoad: function(anchorLink, index,origin, destination, direction){},
        afterRender: function(){
            afterRenderTreePet();
        },
        afterResize: function(width, height){},
        afterReBuild: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(section, origin, destination, direction){},
        onSlideLeave: function(section, origin, destination, direction){}

    });
    //fullPageEnd

    $('.section8-downloadButton-ios').click(function() {
        setSession();
    });

    $('.section8-downloadButton-android').click(function() {
        setSession();
    });

    $('.section2__faq__q').mouseover(function () {
        $('.section2__faq__q__answer').display = 'block';
        $(this).next().stop().slideDown();
    });

    $('.section2__faq__q').mouseleave(function () {
        $(this).next().stop().slideUp();
    });

    const openBtnIos = document.querySelector('.open-ios');
    const openBtnAndroid = document.querySelector('.open-android');
    const modal = document.querySelector('.modal');
    const overlay = modal.querySelector('.section8__modal-popup__overlay');

    const openModal = function () {
        modal.classList.remove("hidden");
    }

    const closeModal = function () {
        modal.classList.add("hidden");
    }

    openBtnIos.addEventListener("click", openModal);
    openBtnAndroid.addEventListener("click", openModal);
    overlay.addEventListener("click", closeModal);

    $('.checkCategories').on('click', function () {
        const clickCategory = this;
        const clickCategoryValue = clickCategory.innerText.substring(1,3);
        let categoryLists = $(".checkCategories");

        if(!clickCategory || !clickCategoryValue || !categoryLists) {
            return;
        }

        for (let i = 0; i < categoryLists.length; i++) {
            let categoryList = categoryLists[i];
            let categoryListValue = categoryList.innerText.substring(1,3);

            if (clickCategoryValue === categoryListValue) { //클릭한 값과 같을때
                $('input[value=\"' + clickCategoryValue + '\"]').next().next().removeClass('bi-check-square'); //흰색 버튼 클래스 지우고
                $('input[value=\"' + clickCategoryValue + '\"]').next().next().addClass('bi-check-square-fill'); //검정 버튼 클래스 생성
                $('input[value=\"' + clickCategoryValue + '\"]').prop("checked", true); // 밸류가 clickCategoryValue 인 인풋 라디오 체크하기

            } else { //클릭한 값과 다를때 중
                if(!!$('input[value=\"' + categoryListValue + '\"]').next().next().hasClass('bi-check-square-fill')){
                    $('input[value=\"' + categoryListValue + '\"]').next().next().removeClass('bi-check-square-fill'); //검정 버튼 클래스 지우고
                    $('input[value=\"' + categoryListValue + '\"]').next().next().addClass('bi-check-square'); //흰색 버튼 클래스 생성
                }
            }
        }

        addAutoHover();
    });

    const $section = $('.section');
    const $offset = 944;
    const $sectionOST = $section.offset().top - $offset;

    $(window).scroll(function () {
        if($(this).scrollTop() > $sectionOST) {
            $section.find('img').addClass('animate');
            alert("안녕");

        }
    })
});

/**
 * setSession: session 에 값 저장, 다운로드 클릭했을 때 클릭횟수 count 하는 함수
 *
 */
function setSession() {
    const sessionValue = sessionStorage.getItem('sessionKey');
    let downloadClickCnt = 0;
    let lsLength = localStorage.length;

    if (!!preventDuplicateBtn && !sessionValue) {
        preventDuplicateBtn = false;
        sessionStorage.setItem('sessionKey', 'fuck');

        if (lsLength === 0) {
            localStorage.setItem(downloadClickCnt, 'customers_' + downloadClickCnt);
        } else {
            downloadClickCnt = lsLength;
            localStorage.setItem(downloadClickCnt, 'customers_' + downloadClickCnt);
        }

    } else {
        return "";
    }
}

/**
 * afterRenderTest: fullPage 로드 된 다음에 실행 되는 함수
 *
 */
function afterRenderTreePet() {
    // fullPage navigationTooltips Attribute Change
    navigationTooltipsChange();
}

/**
 * sendEmail: 다운로드(사전예약) 클릭 시 팝업의 신청하기 버튼 클릭했을 떄 실행되는 함동
 *
 */
function sendEmail() {

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

function navigationTooltipsChange() {
    const navTooltipsList = $("#fp-nav ul li .fp-tooltip.fp-right");
    const navToolTipsDiv = $("#fp-nav.fp-right");
    const navToolTipsDots = $(".fp-right li a span:nth-child(2)");

    // navigation tool tip text color change
    if (!!navTooltipsList) {
        for (let navTooltipsListAttribute of navTooltipsList) {
            navTooltipsListAttribute.style.color = "black";
            navTooltipsListAttribute.style.marginRight = "10px";
        }
    }

    // navigation tool tip div css addition
    if (!!navToolTipsDiv && navToolTipsDiv.length === 1 && !!navToolTipsDiv[0]) {
        navToolTipsDiv[0].style.marginTop = "-200px";
        navToolTipsDiv[0].style.backgroundColor = "rgba(0,0,0,0.2)";
        navToolTipsDiv[0].style.borderRadius = "50px";
    }

    // navigation tool tip dots css addition
    if (!!navToolTipsDots && navToolTipsDots.length !== 0) {
        for (let i = 0; i < navToolTipsDots.length; i++) {
            let navToolTipsDot = navToolTipsDots[i];
            navToolTipsDot.style.backgroundColor = "white";
        }
    }
}

/**
 * deleteAutoHover: active 된 토글에 mouseOver 효과 지우기
 */
function deleteAutoHover() {
    const activatedToolTip = $("#fp-nav ul li a.active+.fp-tooltip")[0];

    if (!!activatedToolTip) {
        activatedToolTip.style.width = "";
        activatedToolTip.style.fontSize = "";
        activatedToolTip.style.opacity = "";
    }
}

/**
 * addDeleteAutoHover: scroll 에 따라 active 된 토글에 mouseOver 효과
 */
function addDeleteAutoHover() {
    const currentSectionNumber = document.activeElement.className.slice(-1);
    const activatedToolTip = $("#fp-nav ul li a.active+.fp-tooltip")[0];
    const navToolTipsTexts = $("#fp-nav ul li a");

    if (!!navToolTipsTexts && navToolTipsTexts.length !== 0) {
        for (let i = 0; i < navToolTipsTexts.length; i++) {
            let navToolTipsText = navToolTipsTexts[i];
            let hasAutoHoverCss = navToolTipsText.hasClass('auto-hover');

            if (!hasAutoHoverCss && i.toString() === currentSectionNumber) {
                navToolTipsText.removeClass('auto-hover');
            } else if (!!activatedToolTip) {
                navToolTipsText.addClass('auto-hover');
            }
        }
    }

    $(".fp-right").addClass("tooltipImage");

}

/**
 * addAutoHover: 처음 로드 시 active 된 토글에 mouseOver 효과
 */
function addAutoHover() {
    // const activatedToolTip = $("#fp-nav ul li a.active+.fp-tooltip")[0];
    const activatedToolTip = $("#fp-nav ul li a.active+.fp-tooltip")[0];
}