package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import com.github.choonchernlim.choonchernlimArchetypeWebapp.common.exception.AppException
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

/**
 * Controller that purposefully throws a runtime exception for demo purpose.
 */
@Controller
@RequestMapping(value = '/test')
class TestController {
    @GetMapping(value = '/throw-exception')
    String main() {
        throw new AppException('Forcing an exception for demo purpose.')
    }
}
