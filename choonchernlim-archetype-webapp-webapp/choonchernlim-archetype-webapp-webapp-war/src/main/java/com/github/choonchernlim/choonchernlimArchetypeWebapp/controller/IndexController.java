package com.github.choonchernlim.choonchernlimArchetypeWebapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

// TODO client side will serve the entry page
//@Controller
//@RequestMapping(value = "/")
public final class IndexController {
    @RequestMapping(method = RequestMethod.GET)
    public String main() {
        return "index";
    }
}
