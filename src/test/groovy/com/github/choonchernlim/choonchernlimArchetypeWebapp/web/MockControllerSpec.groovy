package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.ResultActions
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.servlet.view.InternalResourceViewResolver
import spock.lang.Specification

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view

@SpringBootTest
class MockControllerSpec extends Specification {

    def controller = new IndexController()

    def mockMvc = MockMvcBuilders.standaloneSetup(controller).
            setViewResolvers(new InternalResourceViewResolver(prefix: '/WEB-INF/jsp/', suffix: '.jsp')).
            build()

    def "main"() {
        when:
        ResultActions response = mockMvc.perform(get('/'))

        then:
        response.andExpect(status().isOk()).
                andExpect(view().name('index'))
    }
}
