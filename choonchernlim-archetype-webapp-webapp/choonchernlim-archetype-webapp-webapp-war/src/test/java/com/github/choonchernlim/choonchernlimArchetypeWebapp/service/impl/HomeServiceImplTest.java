package com.github.choonchernlim.choonchernlimArchetypeWebapp.service.impl;

import com.github.choonchernlim.choonchernlimArchetypeWebapp.service.HomeService;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath*:springtest-test.xml"})
public class HomeServiceImplTest {
    @Autowired
    private HomeService homeService;

    @Test
    public void testGetHelloWorld() {
        assertThat(homeService.getHelloWorld(), is("Hello World!"));
    }
}
