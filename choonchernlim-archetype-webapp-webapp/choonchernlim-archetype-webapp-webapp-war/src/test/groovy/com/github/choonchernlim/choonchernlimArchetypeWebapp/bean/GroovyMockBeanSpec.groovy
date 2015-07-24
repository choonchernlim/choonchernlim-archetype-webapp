package com.github.choonchernlim.choonchernlimArchetypeWebapp.bean

import spock.lang.Specification

class GroovyMockBeanSpec extends Specification {
    def "Mike is 10 years old"() {
        given:
        def bean = new GroovyMockBean(name: 'Mike', age: 10);

        expect:
        'Mike' == bean.name
        10 == bean.age
    }
}
