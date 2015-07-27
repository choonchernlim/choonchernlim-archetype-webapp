package com.github.choonchernlim.choonchernlimArchetypeWebapp.service.impl;

import com.github.choonchernlim.choonchernlimArchetypeWebapp.service.MockService;
import org.springframework.stereotype.Service;

@Service
public final class MockServiceImpl implements MockService {
    @Override
    public String getHelloWorld() {
        return "Hello World!";
    }
}
