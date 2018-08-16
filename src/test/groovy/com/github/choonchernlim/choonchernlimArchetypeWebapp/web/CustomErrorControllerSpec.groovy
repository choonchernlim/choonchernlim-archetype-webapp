package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import com.github.choonchernlim.choonchernlimArchetypeWebapp.error.ErrorBean
import com.github.choonchernlim.choonchernlimArchetypeWebapp.error.ErrorService
import org.springframework.http.HttpStatus
import org.springframework.test.web.servlet.ResultActions
import spock.lang.Unroll

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view

class CustomErrorControllerSpec extends AbstractControllerSpec {

    def errorService = Mock ErrorService

    def mockMvc = getMockMvc(new CustomErrorController(errorService))

    @Unroll
    def "main - given #label, should redirect to #path"() {
        when:
        ResultActions response = mockMvc.perform(get('/error'))

        then:
        1 * errorService.handle(_ as HttpServletRequest, _ as HttpServletResponse) >> new ErrorBean(
                status: httpStatus.value(),
                path: '/path'
        )
        0 * _

        response.andExpect(status().is(responseStatus.value())).
                andExpect(view().name("${path}"))

        // @formatter:off
        where:
        label              | httpStatus                       | responseStatus   | path
        'missing resource' | HttpStatus.NOT_FOUND             | HttpStatus.OK    | 'index'
        'unexpected error' | HttpStatus.INTERNAL_SERVER_ERROR | HttpStatus.FOUND | 'redirect:/error/unexpected?path=/path'
        // @formatter:on
    }

    def "specificError - given /error/bla, should return index view"() {
        when:
        ResultActions response = mockMvc.perform(get('/error/bla'))

        then:
        0 * _

        response.andExpect(status().isOk()).
                andExpect(view().name('index'))
    }
}
