package com.github.choonchernlim.choonchernlimArchetypeWebapp.error

import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.web.ErrorAttributes
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.context.request.ServletRequestAttributes

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import java.time.ZoneId

@Slf4j
@Service
class ErrorService {
    final ErrorAttributes errorAttributes

    @Autowired
    ErrorService(final ErrorAttributes errorAttributes) {
        this.errorAttributes = errorAttributes
    }

    /**
     * Handles the error and returns the error info.
     *
     * @param request HttpServletRequest
     * @param response HttpServletResponse
     * @return Error info
     */
    ErrorBean handle(final HttpServletRequest request, final HttpServletResponse response) {
        assert request
        assert response

        final Map<String, Object> attr = errorAttributes.getErrorAttributes(
                new ServletRequestAttributes(request), true)

        final ErrorBean errorBean = new ErrorBean(
                status: response.status,
                error: attr['error'],
                message: attr['message'],
                timeStamp: (attr['timestamp'] as Date).toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime(),
                path: attr['path'],
                trace: attr['trace']
        )

        if (HttpStatus.valueOf(response.status) == HttpStatus.NOT_FOUND) {
            log.warn("Resource not found... ${errorBean}")
        }
        else {
            log.error("An error has occurred... ${errorBean}")
        }

        // TODO Refine error handling other than displaying the error in console

        return errorBean
    }
}
