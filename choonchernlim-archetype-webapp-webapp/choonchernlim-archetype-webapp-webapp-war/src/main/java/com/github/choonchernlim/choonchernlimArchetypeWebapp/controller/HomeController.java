package com.github.choonchernlim.choonchernlimArchetypeWebapp.controller;

import com.github.choonchernlim.choonchernlimArchetypeWebapp.service.HomeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/*!
# Controller Package
* This package stores all Spring MVC controllers.
* The class suffix is `*Controller`.
* Please remember to delete this mock class.
*/
@Controller
@RequestMapping(value = "/")
public class HomeController {
    private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);

    private HomeService homeService;

    @Autowired
    public HomeController(HomeService homeService) {
        this.homeService = homeService;
    }

    /*! `GET  /` - displays the home page with a "hello world" message. */
    @RequestMapping(method = RequestMethod.GET)
    public String main(Model model) {
        System.out.println("######");
        LOGGER.debug("Testing SLF4J-Log4J bridge...");

        model.addAttribute("message", homeService.getHelloWorld());
        return "home";
    }
}
