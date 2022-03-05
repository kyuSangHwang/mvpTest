let downloadClickCnt = 0;

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
        fadingEffect: 'slides',
        navigationTooltips: ['메인페이지', '회사소개', '매칭서비스', '입양/검증', '등록/정보', '지식정보', '스토어', 'Contact us']
    });
    //fullPageEnd
});


//
function openPop() {
    window.open("/popup", "test", "top=350, left=2200, width=400, height=380, menubar=no, toolbar=no, directories=no, status=no, scrollbars=no, copyhistory=no, resizable=no");

//    2.. 팝업창이 켜질때

//    2-1. 카운트 세는 다운로드 버튼이 사라지고
//    2-2. 일반 다운로드 팝업창 버튼이 생긴다

}

// 다운로드 버튼 클릭 수   localStorage.length 로 개수(길이) 알수있음
function section8DownloadBtnCnt() {
    // 2. 변수(downloadClickCnt) 0으로 초기화
    let downloadClickCnt = 0;
    let lsLength = localStorage.length;

    if (lsLength === 0) {
        localStorage.setItem(downloadClickCnt, downloadClickCnt);
    }
    else {
        downloadClickCnt = lsLength;
        localStorage.setItem(downloadClickCnt, downloadClickCnt);
    }
    // localStorage.setItem(downloadClickCnt,downloadClickCnt);
    // downloadClickCnt++;









}
