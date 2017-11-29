package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import com.github.choonchernlim.choonchernlimArchetypeWebapp.common.exception.AppException
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod

/**
 * Controller that purposefully throws a runtime exception for demo purpose.
 */
@Controller
@RequestMapping(value = '/test')
class TestController {
    @RequestMapping(value = '/throw-exception', method = RequestMethod.GET)
    String main() {
        throw new AppException('Forcing an exception for demo purpose.')
    }
}
