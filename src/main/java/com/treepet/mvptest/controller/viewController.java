package com.treepet.mvptest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class viewController {
    // main
    @GetMapping(value = "")
    public String Home(Model model){
        return "main";
    }

    @GetMapping(value = "/companyInfo")
    public String companyInfo(){
        return "/company/companyInfo";
    }

}
