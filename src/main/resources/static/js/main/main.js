let secondOpening = true;
let mainFirstPageTextIndex = 1;
let accountAnimation = false;
let accountEvent;
let mobileStatus = false;
let nowSearchData = "";

$(document).ready(function () {
    nowSearchData = location.search;
    //fullPage
    new fullpage('#fullpage', {
        licenseKey: 'D1AF2031-25C74F5F-8F279168-8FF34DAF',
        paddingTop: '0px',
        paddingBottom: '0px',
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


    //swiper
    const mainPage = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal', // 수직, 수평 수평 : vertical
        loop: true,
        speed: 700,
        autoplay: {
            delay: 7000,
        },
    });

    const filter = "win16|win32|win64|mac|macintel";
    const webType = "";
    const headerWrap = $("#headerWrap");
    const pcVer = $(".pcVer");
    const mobile = $(".mobileVer");
    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            //mobile
            $('.textBoxBody').text(_InovativeTechnologiesMobile_);
            mobileStatus = true;
            headerWrap.remove();
            pcVer.remove();
            $('.mainContentRight').css("display", "none");
            $('body').prepend("<div class='sidebarWrap'></div>");
            $(".sidebarWrap").load("/mobile/sideBar");

            $(function () {
                $.getScript("/js/fragments/mobileSideBar.js", function (data, textStatus, jqxhr) {
                    console.log(data); // Data returned
                    console.log(textStatus); // Success
                    console.log(jqxhr.status); // 200
                    console.log("Load was performed.");
                });
            });
        } else {
            //pc

            mobile.remove();
        }
    }

    mainSecondSizeController();

    $('.topContent').on("click", function (event) {
        if (secondOpening) {
            const $thisId = $(this).children().attr("id");
            const $onId = $('.topContentOn').children().attr("id");
            const $slideImage02 = $('.slideImage02');
            const $slideImage03 = $('.slideImage03');
            if ($thisId != $onId) {
                event.stopPropagation();
                const $mainSecondImage02 = $('.mainSecondImg02');
                const $mainSecondImage03 = $('.mainSecondImg03');

                const $mainContentP01 = $('.mainContentP01');
                const $mainContentP02 = $('.mainContentP02');
                const $mainContentP03 = $('.mainContentP03');

                const $mainContentSpanP = $('.mainContent > span > p');

                const $mainContentRightP01 = $('.mainContentRight01');
                const $mainContentRightP02 = $('.mainContentRight02');
                const $mainContentRightP03 = $('.mainContentRight03');

                $('.topContent').removeClass("topContentOn");
                $(this).addClass("topContentOn");

                $slideImage02.css("opacity", "0");
                $slideImage03.css("opacity", "0");
                $mainContentSpanP.css("height", "0");
                $mainContentRightP01.css("opacity", "0");
                $mainContentRightP02.css("opacity", "0");
                $mainContentRightP03.css("opacity", "0");

                switch ($thisId) {
                    case 'forHuman':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/forHuman_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/forHuman_03.jpg");
                        $mainContentP01.text(_MoreSafeAndConvenientWorld_);
                        $mainContentP02.text(_MakeBetterProduct_);
                        $mainContentP03.text("");
                        $mainContentRightP01.text(_humanSlogan11_);
                        $mainContentRightP02.text(_humanSlogan12_);
                        $mainContentRightP03.text(_humanSlogan13_);

                        break;

                    case 'forNature':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/forNature_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/forNature_03.jpg");
                        $mainContentP01.text(_descendants_);
                        $mainContentP02.text(_protectEnvironment_);
                        $mainContentP03.text("");
                        $mainContentRightP01.text(_natureSlogan11_);
                        $mainContentRightP02.text(_natureSlogan12_);
                        break;

                    case 'bestQuality':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/bestQuality_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/bestQuality_03.jpg");
                        $mainContentP01.text(_bestProduct_);
                        $mainContentP02.text(_highestQuality_);
                        $mainContentP03.text(_researchable_);
                        $mainContentRightP01.text(_qualitySlogan11_);
                        $mainContentRightP02.text(_qualitySlogan12_);
                        $mainContentRightP03.text(_qualitySlogan13_);
                        break;

                    case 'globalLeader':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/globalLeader_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/globalLeader_03.jpg");
                        $mainContentP01.text(_koreaToWorld_);
                        $mainContentP02.text(_leadWay_);
                        $mainContentP03.text("");
                        $mainContentRightP01.text(_globalLeaderSlogan11_);
                        $mainContentRightP02.text(_globalLeaderSlogan12_);
                        $mainContentRightP03.text(_globalLeaderSlogan13_);
                        break;
                }
                $mainContentRightP01.html($mainContentRightP01.html().replace(/\n/g, '<br/>'));
                $mainContentRightP02.html($mainContentRightP02.html().replace(/\n/g, '<br/>'));
                $mainContentRightP03.html($mainContentRightP03.html().replace(/\n/g, '<br/>'));

                $slideImage02.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');

                $slideImage03.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');

                if(mobileStatus){
                    $mainContentSpanP.stop().animate({
                        'height': '35',
                    }, 1500, 'swing');
                }else{
                    $mainContentSpanP.stop().animate({
                        'height': '65',
                    }, 1500, 'swing');
                }

                $mainContentRightP01.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');
                $mainContentRightP02.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');
                $mainContentRightP03.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');
            }
        }
    })

    $('.productBoxMore').on("click", function (event) {
        location.href = "/product/pvc"+nowSearchData;
    })

    $('.productBoxImageMore').on("click", function (event) {
        let nowImageName = $(this).attr("name");
        location.href = "/product/"+nowImageName+nowSearchData;
    })

    let inquiryBodyContentP = $('.inquiryBodyContent P');
    let categoryBodyContent = $('.categoryBodyContent P');
    if(nowSearchData == "?lang=en"){
        inquiryBodyContentP.css("font-size", "13px");
        inquiryBodyContentP.css("line-height", "19px");

        categoryBodyContent.css("font-size", "13px");
        categoryBodyContent.css("line-height", "19px");
    }else{
        inquiryBodyContentP.css("font-size", "14px");
        inquiryBodyContentP.css("line-height", "21px");

        categoryBodyContent.css("font-size", "13px");
        categoryBodyContent.css("line-height", "19px");
    }
});

$(window).resize(mainSecondSizeController);

function mainAnimation(index) {
    if (index == 1 || index == 2) {
        $("#categoryBookMarkWrap").css('display', 'block');
    } else {
        $("#categoryBookMarkWrap").css('display', 'none');
    }
    if (index == 2) {
        setTimeout(mainSecondAnimation, 200);
    }
}

function mainSecondAnimation() {
    secondOpening = false;
    const $mainContentSpanP = $('.mainContent > span > p');
    const $mainContentRightP01 = $('.mainContentRightP01');
    const $mainContentRightP02 = $('.mainContentRightP02');
    const $mainContentRightP03 = $('.mainContentRightP03');
    const $slideImage02 = $('.slideImage02');
    const $slideImage03 = $('.slideImage03');

    setTimeout(function () {
        secondOpening = true;
    }, 1300);

    if(mobileStatus){
        $slideImage02.animate({
            'left': '5',
        }, 1000, 'swing');
    }else{
        $slideImage02.animate({
            'left': '50',
        }, 1000, 'swing');
    }

    $slideImage03.animate({
        'right': '0',
    }, 1000, 'swing');

    setTimeout(function () {
        $mainContentSpanP.animate({
            'height': '65',
        }, 1500, 'swing');

        $mainContentRightP01.animate({
            'opacity': '1',
        }, 1500, 'swing');
        $mainContentRightP02.animate({
            'opacity': '1',
        }, 1500, 'swing');
        $mainContentRightP03.animate({
            'opacity': '1',
        }, 1500, 'swing');

    }, 500);
}

function mainFirstPageStartAnimation() {
    const slideImage = $(".slideImageContent");
    const textBoxHead = $(".textBoxHead");
    const textBoxBody = $('.textBoxBody');
    textBoxHead.css("opacity", "1");
    textBoxBody.css("opacity", "1");

    slideImage.css("transition", "all 3500ms ease-in-out");
    slideImage.css("transform", "scale(1)");
    slideImage.css("left", 0);

    textBoxHead.css("transition", "all 2s ease-in-out");
    textBoxHead.css("width", "100%");

    textBoxBody.css("transition", "all 2s ease-in-out");
    textBoxBody.css("width", "100%");
    setTimeout(mainFirstPageEndAnimation, 7100);

}

function mainFirstPageEndAnimation() {
    const slideImage = $(".slideImageContent");
    const textBoxHead = $(".textBoxHead");
    const textBoxBody = $('.textBoxBody');

    slideImage.css("transition", "none");
    slideImage.css("transform", "scale(1.1, 1.1)");
    slideImage.css("left", "5%");

    textBoxHead.css("transition", "none");
    textBoxHead.css("width", "0");

    textBoxBody.css("transition", "none");
    textBoxBody.css("width", "0");
}

function mainFirstPageTextAnimation(index) {
    const textBoxHead = $(".textBoxHead");
    const textBoxBody = $('.textBoxBody');
    let innoSpan = "<span class=\"innoSpan\">INNOVATION</span>";
    let solutionSpan = "<span class=\"solutionSpan\">SOLUTION</span>";
    let collaboSpan = "<span class=\"collaboSpan\">COLLABORATION</span>";
    let changeSpan = "<span class=\"changeSpan\">CHANGE</span>";

    const textBoxHeadSpan = $(".textBoxHead > span");

    textBoxHead.css("transition", "none");
    textBoxHead.css("opacity", "0");

    textBoxBody.css("transition", "none");
    textBoxBody.css("opacity", "0");
    textBoxHeadSpan.removeClass();
    switch (index) {
        case 1:

            textBoxHeadSpan.addClass("changeSpan");
            textBoxHeadSpan.text("CHANGE");
            if(mobileStatus){
                textBoxBody.text(_neverStopDevelopingMobile_);
            }else{
                textBoxBody.text(_neverStopDeveloping_);
            }

            break;

        case 2:
            textBoxHeadSpan.addClass("collaboSpan");
            textBoxHeadSpan.text("COLLABORATION");
            if(mobileStatus){
                textBoxBody.text(_makeYouWantProductMobile_);
            }else{
                textBoxBody.text(_makeYouWantProduct_);
            }

            break;

        case 3:
            textBoxHeadSpan.addClass("solutionSpan");
            textBoxHeadSpan.text("SOLUTION");
            if(mobileStatus){
                textBoxBody.text(_bestSolutionQualityMobile_);
            }else{
                textBoxBody.text(_bestSolutionQuality_);
            }
            break;

        case 4:

            textBoxHeadSpan.addClass("innoSpan");
            textBoxHeadSpan.text("INNOVATION");
            if(mobileStatus){
                textBoxBody.text(_InovativeTechnologiesMobile_);
            }else{
                textBoxBody.text(_InovativeTechnologies_);
            }

            break;

        case 5:
            textBoxHeadSpan.addClass("changeSpan");
            textBoxHeadSpan.text("CHANGE");
            if(mobileStatus){
                textBoxBody.text(_neverStopDevelopingMobile_);
            }else{
                textBoxBody.text(_neverStopDeveloping_);
            }
            break;
    }
}

function mainSecondSizeController() {
    const productBox = $(".productBox");
    const middleBox = $(".middleBox");
    const bottomBox = $('.bottomBox');
    const productBoxHead = $('.productBoxHead');
    const productBoxImageHead = $('.productBoxImageHead');

    let productBoxWidth = productBox.width();

    productBox.css('height', productBoxWidth + "px");
    middleBox.css('left', 45 + productBoxWidth + "px");
    bottomBox.css('top', productBoxWidth + 5 + "px");
    productBoxHead.css('line-height', productBoxWidth + "px");
    productBoxImageHead.css('line-height', productBoxWidth + "px");
}

function customerEvent() {
    const leftContentBox = $('.leftContentBox');
    const rightContentBox = $('.rightContentBox');
    leftContentBox.css("transition", "all ease-in-out 700ms");
    rightContentBox.css("transition", "all ease-in-out 700ms");
    let leftContentBoxLeft = 0;

    if(mobileStatus){
        let rightContentBoxRightMobile = -20;
        accountEvent = setInterval(function () {
            leftContentBoxLeft -= 134.25;
            rightContentBoxRightMobile -= 134.25;
            leftContentBox.css("left", leftContentBoxLeft);
            rightContentBox.css("right", rightContentBoxRightMobile);

            if (leftContentBoxLeft == -1074) {
                setTimeout(function () {
                    leftContentBox.css("transition", "none");
                    leftContentBox.css("left", 0);
                    rightContentBox.css("transition", "none");
                    rightContentBox.css("right", "-20px");
                }, 800);

                setTimeout(function () {
                    leftContentBox.css("transition", "all ease-in-out 700ms");
                    leftContentBoxLeft = 0;
                    rightContentBox.css("transition", "all ease-in-out 700ms");
                    rightContentBoxRightMobile = -20;
                }, 1000);
            }

        }, 1500);

    }else{
        let rightContentBoxRightPc = -162;
        accountEvent = setInterval(function () {
            leftContentBoxLeft -= 224;
            rightContentBoxRightPc -= 224;
            leftContentBox.css("left", leftContentBoxLeft);
            rightContentBox.css("right", rightContentBoxRightPc);

            if (leftContentBoxLeft == -1792) {
                setTimeout(function () {
                    leftContentBox.css("transition", "none");
                    leftContentBox.css("left", 0);
                    rightContentBox.css("transition", "none");
                    rightContentBox.css("right", "-162px");
                }, 800);

                setTimeout(function () {
                    leftContentBox.css("transition", "all ease-in-out 700ms");
                    leftContentBoxLeft = 0;
                    rightContentBox.css("transition", "all ease-in-out 700ms");
                    rightContentBoxRightPc = -162;
                }, 1000);
            }

        }, 1500);
    }

}
