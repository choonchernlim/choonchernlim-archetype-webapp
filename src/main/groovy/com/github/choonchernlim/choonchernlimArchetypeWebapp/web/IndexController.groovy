package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import com.github.choonchernlim.choonchernlimArchetypeWebapp.common.repository.AppConfigRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod

@Controller
@RequestMapping(value = '/')
final class IndexController {
    @Autowired
    AppConfigRepository appConfigRepository

    @RequestMapping(method = RequestMethod.GET)
    String main() {
        // TODO LIMC remove this
        appConfigRepository.findAll().each { println it }
        return 'index'
    }
}
