package com.github.choonchernlim.choonchernlimArchetypeWebapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * This controller catches all request URIs and presents the single-page app's entry page so that
 * client side can figure out what to do with the request URI.
 */
// TODO LIMC push `index.html` to `/webapp/WEB-INF/html` instead of `/webapp`
// TODO LIMC need to figure out where to put `favicon.png` to `assets/` dir
@Controller
@RequestMapping(value = "*")
public final class IndexController {
    @RequestMapping(method = RequestMethod.GET)
    public String main() {
        return "index";
    }
}
