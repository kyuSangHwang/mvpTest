let mobileStatusHeader = false;
let nowPath = "";

$(document).ready(function () {
    const filter = "win16|win32|win64|mac|macintel";
    const webType = "";

    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            //mobile
            mobileStatusHeader = true;
        } else {
            //pc
            mobileStatusHeader = false;
            headerManager();
        }
    }
});

function headerManager() {
    const $headerWrap = $('#headerWrap');
    const $headerLogo = $('.companyLogo');
    let pathName = location.pathname;

    if (pathName != "/") {
        $headerWrap.css('position', 'absolute');
    } else {
        $headerWrap.css('position', 'fixed');
        $headerWrap.css('color', 'white');
        $headerWrap.css('background-color', 'rgba(0,0,0,0)');
        $headerLogo.css('background-image', 'url("/images/header/sampleLogo.png")');
    }
}

function mainHeaderManager(index) {
    if (mobileStatusHeader) {
        const menu = $('#menu');
        if (index > 0) {
            menu.css("color", "black");
        } else {
            menu.css("color", "white");
        }
    } else {
        const $headerWrap = $('#headerWrap');
        const $headerLogo = $('.companyLogo');
        console.log(index);

        if (index > 0) {
            $headerWrap.css('color', 'black');
            $headerLogo.css('background-image', 'url("/images/header/sampleLogo.png")');
        } else {
            $headerWrap.css('color', 'white');
            $headerWrap.css('background-color', 'rgba(0,0,0,0)');
            $headerLogo.css('background-image', 'url("/images/header/sampleLogo.png")');
        }
    }
}

function companyInfo() {
    locationSearch();
    location.href = "/companyInfo" + locationSearch();
}

function locationSearch() {
    return  location.search;
}