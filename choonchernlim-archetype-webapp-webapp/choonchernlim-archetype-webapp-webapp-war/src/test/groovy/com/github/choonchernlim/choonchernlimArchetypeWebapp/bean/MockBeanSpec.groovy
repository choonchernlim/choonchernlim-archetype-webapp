package com.github.choonchernlim.choonchernlimArchetypeWebapp.bean

import spock.lang.Specification

class MockBeanSpec extends Specification {
    def "Using POJO builder"() {
        given:
        def bean = new MockBeanBuilder().withName('Mike').build()

        expect:
        'Mike' == bean.name
    }
}
