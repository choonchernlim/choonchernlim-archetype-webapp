package com.github.choonchernlim.choonchernlimArchetypeWebapp.core

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.context.ActiveProfiles
import spock.lang.Specification
import spock.mock.DetachedMockFactory

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles('test')
abstract class AbstractSpringBootSpock extends Specification {
    static final DetachedMockFactory FACTORY = new DetachedMockFactory()

    static <T> T detachedMock(final Class<T> clazz) {
        return FACTORY.Mock(clazz)
    }
}
