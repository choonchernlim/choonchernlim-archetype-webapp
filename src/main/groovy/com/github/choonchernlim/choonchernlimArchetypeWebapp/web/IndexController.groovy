package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod

/**
 * This controller catches all request URIs and presents the single-page app's entry page so that
 * client side can figure out what to do with the request URI.
 */
@Controller
@RequestMapping(value = '/')
final class IndexController {
    @RequestMapping(method = RequestMethod.GET)
    String main() {
        return 'index'
    }
}
