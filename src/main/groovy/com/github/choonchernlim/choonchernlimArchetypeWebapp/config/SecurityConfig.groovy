package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter

@Configuration
@EnableWebSecurity
class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        http.headers().
                frameOptions().
                sameOrigin(). // handling clickjacking prevention by setting X-FRAME-OPTIONS to SAMEORIGIN.
                and().
                authorizeRequests().
                antMatchers('/**').
                permitAll()
    }

    @Override
    void configure(final WebSecurity web) throws Exception {
        web.ignoring().
                antMatchers('/css/**').
                antMatchers('/font/**').
                antMatchers('/img/**').
                antMatchers('/js/**')
    }
}
