package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.servlet.view.InternalResourceViewResolver
import spock.lang.Specification

abstract class AbstractControllerSpec extends Specification {
    def getMockMvc(Object mockController) {
        return MockMvcBuilders.standaloneSetup(mockController).
                setViewResolvers(new InternalResourceViewResolver(prefix: '/WEB-INF/jsp/', suffix: '.jsp')).
                build()
    }
}
