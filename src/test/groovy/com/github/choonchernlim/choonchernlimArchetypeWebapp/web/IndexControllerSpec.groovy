package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import com.github.choonchernlim.choonchernlimArchetypeWebapp.core.AbstractSpringBootSpock
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.ResultActions

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view

@WithMockUser
class IndexControllerSpec extends AbstractSpringBootSpock {

    @Autowired
    MockMvc mockMvc

    def "main - given GET /, should return index view"() {
        when:
        ResultActions response = mockMvc.perform(get('/'))

        then:
        response.andExpect(status().isOk()).
                andExpect(view().name("index"))
    }
}
