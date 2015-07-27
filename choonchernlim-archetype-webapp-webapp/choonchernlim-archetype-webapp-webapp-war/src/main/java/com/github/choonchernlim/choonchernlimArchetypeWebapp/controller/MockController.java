package com.github.choonchernlim.choonchernlimArchetypeWebapp.controller;

import com.github.choonchernlim.choonchernlimArchetypeWebapp.service.MockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/")
public final class MockController {
    private final MockService homeService;

    @Autowired
    public MockController(final MockService homeService) {
        this.homeService = homeService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public String main(final Model model) {
        model.addAttribute("message", homeService.getHelloWorld());
        return "home";
    }
}
