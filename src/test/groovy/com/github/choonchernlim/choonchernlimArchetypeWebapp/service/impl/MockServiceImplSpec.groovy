package com.github.choonchernlim.choonchernlimArchetypeWebapp.service.impl

import com.github.choonchernlim.choonchernlimArchetypeWebapp.service.MockService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.context.ContextConfiguration
import spock.lang.Specification

@ContextConfiguration(["classpath*:spring-test.xml"])
class MockServiceImplSpec extends Specification {

    @Autowired
    MockService homeService

    def "getHelloWorld"() {
        expect:
        'Hello World!' == homeService.getHelloWorld()
    }
}
