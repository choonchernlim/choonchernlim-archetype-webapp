package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import groovy.util.logging.Slf4j
import org.springframework.beans.propertyeditors.StringTrimmerEditor
import org.springframework.http.HttpStatus
import org.springframework.web.bind.WebDataBinder
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.InitBinder
import org.springframework.web.bind.annotation.ResponseStatus

/**
 * Global advice for all controllers.
 */
@Slf4j
@ControllerAdvice
@SuppressWarnings('GrMethodMayBeStatic')
class GlobalControllerAdvice {

    /**
     * Trim string and set empty string as `null` value.
     *
     * @param binder Web data binder
     */
    @InitBinder
    void initBinder(final WebDataBinder binder) {
        binder.registerCustomEditor(String.class, new StringTrimmerEditor(true))
    }

    /**
     * Catch and handle any uncaught exception.
     *
     * @param request Request
     * @param exception Exception
     */
    @ExceptionHandler(Exception)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = 'Unexpected error has occurred')
    void handleError(final Exception exception) {
        log.error("Unexpected error has occurred", exception)
    }
}
