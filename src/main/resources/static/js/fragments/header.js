
$(document).ready(function () {

});

// TREEPET
function treePetInfo() {
    locationSearch();
    location.href = "/treePetInfo" + locationSearch();
}

// 회사소개
function companyInfo() {
    locationSearch();
    location.href = "/companyInfo" + locationSearch();
}

// 이용방법
function howToUseInfo() {
    locationSearch();
    location.href = "/howToUseInfo" + locationSearch();
}

// Contact Us
function contactUsInfo() {
    locationSearch();
    location.href = "/contactUsInfo" + locationSearch();
}


function locationSearch() {
    return  location.search;
}

/**
 * mainHeaderManager: fullPage 에서 제공하는 함수 (페이지 스크롤 할 떄 타는 함수)
 * @Param index : fullPage section index
 */
function mainHeaderManager(index) {
    const $containerLi = $('#header-wrap');
    const $headerLogoImg = $('.container-logo-img')[0];

    if (index > 0 && index < 7) {
        $containerLi.css('color', 'black');
        $headerLogoImg.src="images/logo/treePet/mainLogo-mix-origin-black.png";

    } else {
        $containerLi.css('color', 'white');
        $headerLogoImg.src="images/logo/treePet/mainLogo-mix-origin-white.png";

    }
}