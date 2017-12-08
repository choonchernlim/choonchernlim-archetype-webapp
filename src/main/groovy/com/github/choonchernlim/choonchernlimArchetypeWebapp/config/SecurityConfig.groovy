package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

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
        http.
                headers().
                frameOptions().deny(). // set X-FRAME-OPTIONS to DENY to prevent clickjacking attacks
                and().
                authorizeRequests().
                antMatchers(HttpMethod.OPTIONS, '/**').denyAll(). // disable OPTIONS method to prevent XST attacks
                antMatchers('/**').permitAll()
    }

    @Override
    void configure(final WebSecurity web) throws Exception {
        web.ignoring().antMatchers('/assets/**', '/WEB-INF/**')
    }
}
