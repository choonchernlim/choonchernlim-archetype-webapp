package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import groovy.util.logging.Slf4j
import org.springframework.boot.autoconfigure.web.ErrorViewResolver
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Component
import org.springframework.web.servlet.ModelAndView

import javax.servlet.http.HttpServletRequest

// TODO LIMC need to ensure the not found error gets flown to client side to handle
@Slf4j
@Component
class CustomErrorViewResolver implements ErrorViewResolver {

    @Override
    ModelAndView resolveErrorView(
            final HttpServletRequest request,
            final HttpStatus status,
            final Map<String, Object> model) {
        log.warn("Error has occurred: ${status}")

        if (status == HttpStatus.NOT_FOUND) {
            return new ModelAndView('index')
        }

        return new ModelAndView('error')
    }
}
