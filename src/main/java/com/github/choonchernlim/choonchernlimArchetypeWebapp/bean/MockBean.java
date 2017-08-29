package com.github.choonchernlim.choonchernlimArchetypeWebapp.bean;

import java.io.Serializable;

public final class MockBean implements Serializable {
    private final String name;

    protected MockBean(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
