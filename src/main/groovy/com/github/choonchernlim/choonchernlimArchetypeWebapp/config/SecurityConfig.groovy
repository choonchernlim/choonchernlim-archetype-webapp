package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter

/**
 * Configures security.
 */
@Configuration
@EnableWebSecurity
class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        // Set X-FRAME-OPTIONS to `SAMEORIGIN` to prevent clickjacking attacks
        // While `DENY` is stricter, it prevents H2 console from working because it uses iframes.
        http.
                headers().
                frameOptions().sameOrigin()

        http.
                authorizeRequests().
                requestMatchers(EndpointRequest.toAnyEndpoint()).permitAll().
                antMatchers(HttpMethod.OPTIONS, '/**').denyAll(). // disable OPTIONS method to prevent XST attacks
                antMatchers('/**').permitAll()

        // Allow H2 console to work properly because it uses POST without CSRF token
        http.
                csrf().ignoringAntMatchers('/h2-console/**')
    }

    @Override
    void configure(final WebSecurity web) throws Exception {
        web.ignoring().antMatchers('/assets/**', '/WEB-INF/**')
    }
}
