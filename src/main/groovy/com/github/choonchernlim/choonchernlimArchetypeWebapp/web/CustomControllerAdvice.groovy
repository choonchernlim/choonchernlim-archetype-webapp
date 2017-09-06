package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import org.springframework.beans.propertyeditors.StringTrimmerEditor
import org.springframework.web.bind.WebDataBinder
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.InitBinder

/**
 * Advice for all controllers.
 */
@ControllerAdvice
@SuppressWarnings('GrMethodMayBeStatic')
class CustomControllerAdvice {
    /**
     * Trim string and set empty string as `null` value.
     *
     * @param binder Web data binder
     */
    @InitBinder
    void initBinder(final WebDataBinder binder) {
        binder.registerCustomEditor(String, new StringTrimmerEditor(true))
    }
}
