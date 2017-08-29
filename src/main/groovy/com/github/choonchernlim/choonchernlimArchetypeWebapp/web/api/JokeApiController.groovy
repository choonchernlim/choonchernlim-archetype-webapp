package com.github.choonchernlim.choonchernlimArchetypeWebapp.web.api

import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate

/**
 * API used by Chuck Norris React Component to get random jokes from proxied server side.
 */
@Api(description = 'Jokes API')
@CrossOrigin
@RestController
@RequestMapping(value = '/api')
class JokeApiController {

    final RestTemplate restTemplate = new RestTemplate()

    @ApiOperation(value = '', notes = "Returns a random joke.")
    @ApiResponses([
            @ApiResponse(code = 200, message = 'Joke.', response = String)
    ])
    @RequestMapping(value = '/jokes/random', method = RequestMethod.GET)
    ResponseEntity getRandomJoke() {
        return restTemplate.getForEntity('https://api.icndb.com/jokes/random', String)
    }
}
