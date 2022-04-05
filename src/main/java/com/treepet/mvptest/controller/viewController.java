package com.treepet.mvptest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class viewController {

    // 메인(Home)
    @GetMapping(value = "")
    public String Home(Model model){
        return "main";
    }

    // TREEPET 소개
    @GetMapping(value = "/treePetInfo")
    public String treePetInfo(){
        return "/company/treepetInfo";
    }

    // 회사소개
    @GetMapping(value = "/companyInfo")
    public String companyInfo(){
        return "/company/companyInfo";
    }

    // 이용방법
    @GetMapping(value = "/howToUseInfo")
    public String howToUseInfo(){
        return "/howToUse/howToUseInfo";
    }

    // Contact us
    @GetMapping(value = "/contactUsInfo")
    public String contactUsInfo(){
        return "/contactUs/contactUsInfo";
    }

    // Popup
    @GetMapping(value = "/popup")
    public String openPop(){
        return "popup1";
    }

}
