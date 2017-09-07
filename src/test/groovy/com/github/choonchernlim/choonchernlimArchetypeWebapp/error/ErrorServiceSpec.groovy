package com.github.choonchernlim.choonchernlimArchetypeWebapp.error

import org.springframework.boot.autoconfigure.web.ErrorAttributes
import org.springframework.mock.web.MockHttpServletRequest
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.web.context.request.ServletRequestAttributes
import spock.lang.Specification
import spock.lang.Unroll

import java.time.LocalDateTime
import java.time.ZoneId

class ErrorServiceSpec extends Specification {

    def errorAttributes = Mock ErrorAttributes
    def errorService = new ErrorService(errorAttributes)

    @Unroll
    def "handle - given #label, should throw exception"() {
        when:
        errorService.handle(request, response)

        then:
        thrown AssertionError

        where:
        label           | request                      | response
        'null request'  | null                         | new MockHttpServletResponse()
        'null response' | new MockHttpServletRequest() | null
    }

    def "handle - given valid params, should return error bean"() {
        given:
        def request = new MockHttpServletRequest()
        def response = new MockHttpServletResponse(status: 400)
        def timeStamp = LocalDateTime.now()

        when:
        def errorBean = errorService.handle(request, response)

        then:
        1 * errorAttributes.getErrorAttributes(_ as ServletRequestAttributes, true) >> [
                error    : 'error',
                message  : 'message',
                timestamp: Date.from(timeStamp.atZone(ZoneId.systemDefault()).toInstant()),
                path     : 'path',
                trace    : 'trace'
        ]
        0 * _

        errorBean.error == 'error'
        errorBean.message == 'message'
        errorBean.timeStamp == timeStamp
        errorBean.path == 'path'
        errorBean.trace == 'trace'

    }
}
