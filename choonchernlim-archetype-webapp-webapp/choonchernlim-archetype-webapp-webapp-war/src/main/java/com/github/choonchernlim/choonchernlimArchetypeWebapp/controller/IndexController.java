package com.github.choonchernlim.choonchernlimArchetypeWebapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

// TODO configure a catch all (minus /api/*) to redirect user to index.html if user bookmark the single-page app links.
//@Controller
//@RequestMapping(value = "/")
public final class IndexController {
    @RequestMapping(method = RequestMethod.GET)
    public String main() {
        return "index";
    }
}
