
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