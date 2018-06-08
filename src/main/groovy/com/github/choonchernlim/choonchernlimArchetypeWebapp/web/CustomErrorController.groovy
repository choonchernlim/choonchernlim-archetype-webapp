package com.github.choonchernlim.choonchernlimArchetypeWebapp.web

import com.github.choonchernlim.choonchernlimArchetypeWebapp.error.ErrorBean
import com.github.choonchernlim.choonchernlimArchetypeWebapp.error.ErrorService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.web.servlet.error.ErrorController
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

/**
 * This class replaces Spring Boot's "WhiteLabel" error page with a custom error page.
 */
@Controller
@RequestMapping(value = CustomErrorController.@ERROR_PATH)
@SuppressWarnings('UnnecessaryQualifiedReference')
class CustomErrorController implements ErrorController {
    static final String ERROR_PATH = '/error'

    final ErrorService errorService

    @Autowired
    CustomErrorController(final ErrorService errorService) {
        this.errorService = errorService
    }

    @Override
    String getErrorPath() {
        return ERROR_PATH
    }

    /**
     * Handles error before changing the URI to allow client-side to handle the error view.
     *
     * @param request Request
     * @param response Response
     * @return Redirect URI
     */
    @RequestMapping(method = RequestMethod.GET)
    String main(final HttpServletRequest request, final HttpServletResponse response) {
        final ErrorBean errorBean = errorService.handle(request, response)

        if (HttpStatus.valueOf(errorBean.status) == HttpStatus.NOT_FOUND) {
            return 'index'
        }

        return "redirect:/error/unexpected?path=${errorBean.path}"
    }

    /**
     * Catches all /error/** and delegates to client side to handle the error based on the URI.
     *
     * @return View
     */
    @RequestMapping(value = '*', method = RequestMethod.GET)
    String specificError() {
        return 'index'
    }
}
