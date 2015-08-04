package com.github.choonchernlim.choonchernlimArchetypeWebapp.controller

import org.springframework.test.context.ContextConfiguration
import org.springframework.test.web.servlet.ResultActions
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.servlet.view.InternalResourceViewResolver
import spock.lang.Specification

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*

@ContextConfiguration(["classpath*:spring-test.xml"])
class MockControllerSpec extends Specification {

    def mockController = new IndexController()

    def mockMvc = MockMvcBuilders.standaloneSetup(mockController).
            setViewResolvers(new InternalResourceViewResolver(prefix: '/WEB-INF/jsp/', suffix: '.jsp')).
            build()

    def "main"() {
        when:
        ResultActions response = mockMvc.perform(get('/'))

        then:
        response.andExpect(status().isOk()).
                andExpect(view().name("index"))
    }
}
