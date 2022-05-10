let preventDuplicateBtn = true;
let mobileStatusHeader = false;
let nowPath = "";

$(document).ready(function () {

    //fullPage
    new fullpage('#fullPage', {
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
        afterLoad: function(anchorLink, index, origin, destination, direction){},
        afterRender: function(){

            const filter = "win16|win32|win64|mac|macintel";
            const webType = "";

            if (navigator.platform) {
                if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
                    //mobile
                    mobileStatusHeader = true;
                    navigationTooltipsChangeM();
                } else {
                    //pc
                    mobileStatusHeader = false;
                    afterRenderTreePet();
                }
            }



        },
        afterResize: function(width, height){},
        afterReBuild: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(section, origin, destination, direction){},
        onSlideLeave: function(section, origin, destination, direction){}

    });
    //fullPageEnd

    $(".openPop1, .openPop2").click(function() {
        setSession();
    });

    $('.accordion1').click(function () {
        let answer = document.getElementsByClassName('section2__faq__q__answer')[0];
        let answerDisplay =  window.getComputedStyle(answer).display;

        if (!answer) { return; }

        if(answerDisplay  === "none") {
            $("#answer1").slideDown();
            $("#answer2").slideUp();
        } else {
            $("#answer1").slideUp();
        }
    });

    $('.accordion2').click(function () {
        let answer = document.getElementsByClassName('section2__faq__q__answer')[1];
        let answerDisplay =  window.getComputedStyle(answer).display;

        if (!answer) { return; }

        if(answerDisplay === "none") {
            $("#answer2").slideDown();
            $("#answer1").slideUp();
        } else {
            $("#answer2").slideUp();
        }
    });

    $('.checkCategories').on('click', function () {
        const clickCategory = this;
        const clickCategoryValue = clickCategory.innerText.replace(/ /g,"");
        let categoryLists = $(".checkCategories");

        if(!clickCategory || !clickCategoryValue || !categoryLists) {
            return;
        }

        for (let i = 0; i < categoryLists.length; i++) {
            let categoryList = categoryLists[i];
            let categoryListValue = categoryList.innerText.replace(/ /g,"");

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

        optionHide();
        addAutoHover();
    });

    String.prototype.toKorChars = function() {
        let charInitial = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ];
        let charNeuter = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ];
        let charFinal = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ];
        let initial, neuter, final;
        let str = this;
        let cnt = str.length;
        let chars = [];
        let charCode;

        for (let i = 0; i < cnt; i++) {
            charCode = str.charCodeAt(i);
            if (charCode === 32) {
                chars.push(" ");
                continue;
            }

            // 한글이 아닌 경우
            if (charCode < 0xAC00 || charCode > 0xD7A3) {
                chars.push(str.charAt(i)); continue;
            }
            charCode = str.charCodeAt(i) - 0xAC00;

            final = charCode % 28; // 종성
            neuter = ((charCode - final) / 28 ) % 21; // 중성
            initial = (((charCode - final) / 28 ) - neuter ) / 21; // 초성

            //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
            chars.push(charInitial[initial]);
            chars.push(String.fromCharCode( 44032 + (initial * 588) + (neuter  * 28)));
            if (charFinal[final] !== '') {
                chars.push(String.fromCharCode( 44032 + (initial * 588) + (neuter  * 28) + final ));
            }

        }

        return chars;
    }

    // 타이핑할 문장
    let mainText01 = "반려동물의 삶이 시작되는 곳";
    let mainText02 = "여러분의 가정입니다";
    let typing1 = mainText01.split(''); // 한글자씩자름
    let typing2 = mainText02.split(''); // 한글자씩자름

    // 각글자 초성,중성,종성으로 나눔
    for (let i = 0; i < mainText01.length; i++){
        typing1[i]=mainText01[i].toKorChars();
    }
    for (let i = 0; i < mainText02.length; i++){
        typing2[i]=mainText02[i].toKorChars();
    }

    let resultDiv1 = document.getElementsByClassName("main-text-01")[0]; // 출력할 엘리먼트요소 가져옴
    let resultDiv2 = document.getElementsByClassName("main-text-02")[0]; // 출력할 엘리먼트요소 가져옴
    let text = "";
    let i=0;
    let j=0;
    let iMax1 = typing1.length; // 총글자수
    let iMax2 = typing2.length; // 총글자수
    let inter = setInterval(typingText1,70); // setInterval 을 이용해 반복적으로 출력
    let inter2;

    function typingText1(){
        resultDiv1.classList.add("cursor");
        if (i <= iMax1-1){ // 글자수만큼 반복후 종료
            // 각 글자가 초성 중성 종성 순서대로 추가되도록
            let jMax1 = typing1[i].length;
            resultDiv1.innerHTML = text + typing1[i][j];
            j++;
            if (j === jMax1){
                text+=  typing1[i][j-1]; // 초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
                i++;
                j=0;
            }
        } else{
            clearInterval(inter);
            text ="";
            i=0;
            j=0;
            setTimeout(function(){
                resultDiv1.classList.remove("cursor");
                setTimeout(function(){
                    resultDiv2.classList.add("cursor");
                    setTimeout(function(){
                        inter2 = setInterval(typingText2,70);
                    },400);
                },300);
            },400);
        }
    }

    function typingText2(){
        if (i <= iMax2-1){ // 글자수만큼 반복후 종료
            // 각 글자가 초성 중성 종성 순서대로 추가되도록
            let jMax2 = typing2[i].length;
            resultDiv2.innerHTML = text + typing2[i][j];
            j++;
            if (j === jMax2){
                text+=  typing2[i][j-1]; // 초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
                i++;
                j=0;
            }
        } else{
            clearInterval(inter);
        }
    }

    $('.openPop1').click(function(e){
        e.preventDefault();
        $('.exampleModal1').modal("show");
    });

    $('.openPop2').click(function(e){
        e.preventDefault();
        $('.exampleModal2').modal("show");
    });
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
        sessionStorage.setItem('sessionKey', 'I_LOVE_TREEPET');

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
 * emailJs, carvekiss@gmail.com 의 계정이 지금 412 Error (Precondition Failed) 가 나서 규상이 개인 계정(kyusang.dev@gmail.com)으로 등록해 놓음
 */
function sendEmail() {
    let optionVal = $('input[name="option"]:checked').val();
    const emailCheck = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
    const optionName = $('input[name="option"]');
    const templateParams = { category: optionVal, email: $("#email").val() };

    if (optionVal == null) { // 원하는 서비스를 선택하지 않았을 떄
        emailSuccessHide();
        optionSelectShow();
        setTimeout(bubbleHide, 7000);
    } else {
        emailjs.init("Tjcml_agXaoWOkkUh");

        if (emailCheck.test(templateParams.email)) {
            emailjs.send('service_c1hgsck', 'template_f05mzvu', templateParams).then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            },function (error) {
                console.log('FAILED...', error);
            })

            reset();
            emailFailHide(); // 이메일 보내기 실패 숨기기
            emailSuccessShow(); // 사전예약이 완료되었습니다 아래에 띄우는 것

            optionName.prop("checked", true).next().next().removeClass('bi-check-square-fill'); //검정 버튼 클래스 지우고
            optionName.prop("checked", true).next().next().addClass('bi-check-square'); //흰 버튼 클래스 생성


            optionVal = $('input[name="option"]:checked').prop('checked', false); //사전예약 성공 시 옵션값 체크 풀기


        } else {
            reset();
            emailSuccessHide(); // 이메일 보내기 성공 숨기기
            emailFailShow(); // 이메일형식이 다릅니다 아래에 띄우는 것

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


// 실패한 말풍선 시간 지나면 사라지게
function bubbleHide() {
    let optionSelectH = $("div.speechBubble1")[0];
    let optionSelectH1 = $("div.speechBubble2")[0];

    optionSelectH.style.display = 'none';
    optionSelectH1.style.display = 'none';
}

// 옵션 말풍선 보여주기
function optionSelectShow() {
    let optionSelectBubble = $("div.speechBubble1")[0];
    let optionSelectText = $("p.speechBubble1-1")[0];

    optionSelectBubble.style.display = "inline-block";
    optionSelectText.style.display = "inline-block";
}

// 옵션 말풍선 사라지기
function optionSelectHide() {
    let optionSelectBubble = $("div.speechBubble1")[0];
    let optionSelectText = $("p.speechBubble1-1")[0];

    optionSelectBubble.style.display = "none";
    optionSelectText.style.display = "none";
}

//이메일 성공 텍스트 보여주기
function emailSuccessShow() {
    let emailSuccessBubble = $("div.speechBubble2")[0];
    let emailSuccessText = $("p.speechBubble2-1")[0];

    emailSuccessBubble.style.display = "inline-block";
    emailSuccessText.style.display = "inline-block";

    setTimeout(bubbleHide, 7000);
}

//이메일 실패 텍스트 보여주기
function emailFailShow() {
    let emailFailBubble = $("div.speechBubble1")[0];
    let emailFailText1 = $("p.speechBubble1-2")[0];
    let emailFailText2 = $("p.speechBubble1-3")[0];

    emailFailBubble.style.display = "inline-block";
    emailFailText1.style.display = "inline-block";
    emailFailText2.style.display = "inline-block";

    setTimeout(bubbleHide, 7000);
}

//이메일 성공 텍스트 숨기기
function emailSuccessHide() {
    let emailSuccessBubble = $("div.speechBubble2")[0];
    let emailSuccessText = $("p.speechBubble2-1")[0];

    emailSuccessBubble.style.display = "none";
    emailSuccessText.style.display = "none";
}

//이메일 실패 텍스트 숨기기
function emailFailHide() {
    let emailFailBubble = $("div.speechBubble1")[0];
    let emailFailText1 = $("p.speechBubble1-2")[0];
    let emailFailText2 = $("p.speechBubble1-3")[0];

    emailFailBubble.style.display = "none";
    emailFailText1.style.display = "none";
    emailFailText2.style.display = "none";
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

function navigationTooltipsChangeM() {
    const navTooltipsList = $("#fp-nav ul li .fp-tooltip.fp-right");
    const navToolTipsDiv = $("#fp-nav.fp-right");
    const navToolTipsDots = $(".fp-right li a span:nth-child(2)");

    // navigation tool tip text color change
    if (!!navTooltipsList) {
        for (let navTooltipsListAttribute of navTooltipsList) {
            navTooltipsListAttribute.style.color = "black";
            navTooltipsListAttribute.style.marginRight = "10px";
            navTooltipsListAttribute.style.left = "25px";
        }
    }

    // navigation tool tip div css addition
    if (!!navToolTipsDiv && navToolTipsDiv.length === 1 && !!navToolTipsDiv[0]) {
        navToolTipsDiv[0].style.marginTop = "140px";
        navToolTipsDiv[0].style.backgroundColor = "rgba(0,0,0,0.2)";
        navToolTipsDiv[0].style.borderRadius = "50px";
        navToolTipsDiv[0].style.right = "330px";
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
    // const currentSectionNumber = document.activeElement.className.slice(-1);
    // const activatedToolTip = $("#fp-nav ul li a.active+.fp-tooltip")[0];
    // const navToolTipsTexts = $("#fp-nav ul li a");
    //
    // if (!!navToolTipsTexts && navToolTipsTexts.length !== 0) {
    //     for (let i = 0; i < navToolTipsTexts.length; i++) {
    //         let navToolTipsText = navToolTipsTexts[i];
    //         let hasAutoHoverCss = navToolTipsText.hasClass('auto-hover');
    //
    //         if (!hasAutoHoverCss && i.toString() === currentSectionNumber) {
    //             navToolTipsText.removeClass('auto-hover');
    //         } else if (!!activatedToolTip) {
    //             navToolTipsText.addClass('auto-hover');
    //         }
    //     }
    // }
    //
    // $(".fp-right").addClass("tooltipImage");
}

/**
 * addAutoHover: 처음 로드 시 active 된 토글에 mouseOver 효과
 */
function addAutoHover() {
    // const activatedToolTip = $("#fp-nav ul li a.active+.fp-tooltip")[0];
    const activatedToolTip = $("#fp-nav ul li a.active+.fp-tooltip")[0];
}

/**
 * mainAnimation: fullPage index 마다 Animation 효과 주기
 * @Param index : fullPage section index
 */
function mainAnimation(index) {

    if (!index || index === 1 || index === 2 || index === 8) {
        return "";
    } else if (index === 3) {
        animateCSS('.index-03-icon','fadeInLeft');
        animateCSS('.index-03-h','fadeInLeft');
        animateCSS('.index-03-span','fadeInLeft');
        animateCSS('.index-03-image','fadeInRight');
    } else if (index === 4) {
        animateCSS('.index-04-image','fadeInLeft');
        animateCSS('.index-04-icon','fadeInRight');
        animateCSS('.index-04-h','fadeInRight');
        animateCSS('.index-04-span','fadeInRight');
    } else if (index === 5) {
        animateCSS('.index-05-icon','fadeInLeft');
        animateCSS('.index-05-h','fadeInLeft');
        animateCSS('.index-05-span','fadeInLeft');
        animateCSS('.index-05-image','fadeInRight');
    } else if (index === 6) {
        animateCSS('.index-06-image','fadeInLeft');
        animateCSS('.index-06-icon','fadeInRight');
        animateCSS('.index-06-h','fadeInRight');
        animateCSS('.index-06-span','fadeInRight');
    } else if (index === 7) {
        animateCSS('.index-07-icon','fadeInLeft');
        animateCSS('.index-07-h','fadeInLeft');
        animateCSS('.index-07-span','fadeInLeft');
        animateCSS('.index-07-image','fadeInRight');
    }

}

/**
 * animateCSS: fullPage index 마다 Animation 효과 주기
 * @Param element : 선택자
 * @Param animation : 애니매이션 효과 명
 * @Param prefix : CSS 효과 앞에 붙는 접두사
 */
const animateCSS = (element, animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

function optionHide() {
    if( $('input[name="option"]').prop("checked", true) ) {
        optionSelectHide();
    }
}

