package com.github.choonchernlim.choonchernlimArchetypeWebapp

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.web.support.SpringBootServletInitializer
import org.springframework.web.WebApplicationInitializer

@SpringBootApplication
class Application extends SpringBootServletInitializer implements WebApplicationInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(Application)
    }

    static void main(String[] args) {
        SpringApplication.run(Application, args)
    }

    // TODO LIMC 8/30 Handle 404 bookmarkable client side link
    // TODO LIMC 8/30 Disable OPTIONS method either through web.xml or something else
}