package com.github.choonchernlim.choonchernlimArchetypeWebapp

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer

@SpringBootApplication
class Application extends SpringBootServletInitializer {
    static void main(String[] args) {
        SpringApplication.run(Application, args)
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(Application)
    }
}
