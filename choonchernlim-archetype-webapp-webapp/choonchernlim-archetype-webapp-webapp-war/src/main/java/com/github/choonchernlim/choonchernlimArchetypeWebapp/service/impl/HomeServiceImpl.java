package com.github.choonchernlim.choonchernlimArchetypeWebapp.service.impl;

import com.github.choonchernlim.choonchernlimArchetypeWebapp.service.HomeService;
import org.springframework.stereotype.Service;

/*!
# Service Implementation Package
* This package stores all service implementations.
* The class suffix is `*ServiceImpl` and it should be a concrete class.
* Please remember to delete this mock class.
*/
@Service
public class HomeServiceImpl implements HomeService {

    @Override
    public String getHelloWorld() {
        return "Hello World!";
    }
}
