package com.github.choonchernlim.choonchernlimArchetypeWebapp.error

import spock.lang.Specification

import java.time.LocalDateTime

class ErrorBeanSpec extends Specification {

    def "given no params, should return default values"() {
        when:
        def bean = new ErrorBean()

        then:
        bean.status == null
        bean.error == null
        bean.message == null
        bean.timeStamp == null
        bean.path == null
        bean.trace == null
    }

    def "given params, should return correct values"() {
        given:
        def timeStamp = LocalDateTime.now()

        when:
        def bean = new ErrorBean(
                status: 200,
                error: 'error',
                message: 'message',
                timeStamp: timeStamp,
                path: 'path',
                trace: 'trace'
        )

        then:
        bean.status == 200
        bean.error == 'error'
        bean.message == 'message'
        bean.timeStamp == timeStamp
        bean.path == 'path'
        bean.trace == 'trace'
    }
}
