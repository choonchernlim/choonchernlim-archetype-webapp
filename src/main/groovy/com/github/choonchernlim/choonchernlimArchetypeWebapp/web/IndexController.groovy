package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

/**
 * Main controller that serves the index page.
 */
@Controller
@RequestMapping(value = '/')
class IndexController {
    @GetMapping
    String main() {
        return 'index'
    }
}
