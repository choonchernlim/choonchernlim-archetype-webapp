package com.github.choonchernlim.choonchernlimArchetypeWebapp.controller;

import com.github.choonchernlim.choonchernlimArchetypeWebapp.service.HomeService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

public class HomeControllerTest {

    @Mock
    private HomeService homeService;

    @InjectMocks
    private HomeController homeController;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);

        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/WEB-INF/jsp/view");
        viewResolver.setSuffix(".jsp");

        mockMvc = MockMvcBuilders.standaloneSetup(homeController).setViewResolvers(viewResolver).build();
    }

    @Test
    public void testMain() throws Exception {
        when(homeService.getHelloWorld()).thenReturn("HELLO WORLD!");

        mockMvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(model().attribute("message", "HELLO WORLD!"))
                .andExpect(view().name("home"));

        verify(homeService, times(1)).getHelloWorld();
    }
}
