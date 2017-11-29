package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod

/**
 * Main controller that serves the index page.
 */
@Controller
@RequestMapping(value = '/')
class IndexController {
    @RequestMapping(method = RequestMethod.GET)
    String main() {
        return 'index'
    }
}
