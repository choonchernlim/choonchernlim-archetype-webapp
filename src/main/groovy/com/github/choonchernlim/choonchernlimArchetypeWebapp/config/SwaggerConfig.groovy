package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.ParameterBuilder
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.schema.ModelRef
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2

import java.time.LocalDateTime

import static com.google.common.collect.Lists.newArrayList

/**
 * Configures Swagger.
 */
@Configuration
@EnableSwagger2
class SwaggerConfig {
    @Bean
    Docket productApi() {
        return new Docket(DocumentationType.SWAGGER_2).
                globalOperationParameters(
                        newArrayList(new ParameterBuilder().
                                             name('X-XSRF-TOKEN').
                                             description('CSRF token from Spring Security for HTTP Method is non-GET').
                                             modelRef(new ModelRef('string')).
                                             parameterType('header').
                                             required(false).
                                             build())).
                useDefaultResponseMessages(false).
                directModelSubstitute(LocalDateTime, String).
                ignoredParameterTypes(MetaClass).
                select().
                apis(RequestHandlerSelectors.basePackage(
                        'com.github.choonchernlim.choonchernlimArchetypeWebapp.web.api')).
                paths(PathSelectors.regex('/api/.*')).
                build().
                apiInfo(new ApiInfoBuilder().title('RESTful Web Services').build())
    }
}