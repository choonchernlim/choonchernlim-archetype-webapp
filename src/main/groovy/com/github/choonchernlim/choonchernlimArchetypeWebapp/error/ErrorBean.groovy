package com.github.choonchernlim.choonchernlimArchetypeWebapp.error

import groovy.transform.Immutable
import groovy.transform.ToString

import java.time.LocalDateTime

@Immutable(knownImmutableClasses = [LocalDateTime])
@ToString(includeNames = true)
class ErrorBean {
    Integer status
    String error
    String message
    LocalDateTime timeStamp
    String path
    String trace
}
