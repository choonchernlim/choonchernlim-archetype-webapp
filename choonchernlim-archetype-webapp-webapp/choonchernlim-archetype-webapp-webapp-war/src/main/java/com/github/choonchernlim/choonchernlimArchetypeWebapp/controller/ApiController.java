package com.github.choonchernlim.choonchernlimArchetypeWebapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * API used by Chuck Norris React Component to get random jokes from proxied server side.
 */
@RestController
@RequestMapping(value = "/api")
public final class ApiController {

    private final RestTemplate restTemplate = new RestTemplate();

    @RequestMapping(value = "/jokes/random", method = RequestMethod.GET)
    public ResponseEntity getRandomJoke() {
        return restTemplate.getForEntity("http://api.icndb.com/jokes/random", String.class);
    }
}
