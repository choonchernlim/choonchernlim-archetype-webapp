package com.github.choonchernlim.choonchernlimArchetypeWebapp.bean;

import net.karneim.pojobuilder.GeneratePojoBuilder;

import java.io.Serializable;

public final class MockBean implements Serializable {
    private final String name;

    @GeneratePojoBuilder
    protected MockBean(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
