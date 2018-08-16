package com.github.choonchernlim.choonchernlimArchetypeWebapp.web.api

import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@Api(description = 'Example API')
@CrossOrigin
@RestController
@RequestMapping(value = '/api')
class ExampleApiController {

    @ApiOperation(value = '', notes = "Example API annotated using Swagger.")
    @ApiResponses([
            @ApiResponse(code = 204, message = 'No content.')
    ])
    @GetMapping(value = '/example')
    ResponseEntity getExample() {
        return ResponseEntity.noContent().build()
    }
}
