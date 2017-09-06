package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.ResultActions
import spock.lang.Specification

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view

@WebMvcTest(IndexController)
@WithMockUser
class IndexControllerSpec extends Specification {

    @Autowired
    private MockMvc mockMvc

//    def mockController = new IndexController()
//
//    def mockMvc = MockMvcBuilders.standaloneSetup(mockController).
//            setViewResolvers(new InternalResourceViewResolver(prefix: '/WEB-INF/', suffix: '.jsp')).
//            build()

    def "main - given GET /, should return index view"() {
        when:
        ResultActions response = mockMvc.perform(get('/'))

        then:
        response.andExpect(status().isOk()).
                andExpect(view().name("index"))
    }

    def "main - given GET /invalid, should return index view"() {
        when:
        ResultActions response = mockMvc.perform(get('/invalid'))

        then:
        response.andExpect(status().isOk()).
                andExpect(view().name("index"))
    }
}
