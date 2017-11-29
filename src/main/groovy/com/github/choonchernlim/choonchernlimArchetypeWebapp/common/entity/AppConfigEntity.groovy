package com.github.choonchernlim.choonchernlimArchetypeWebapp.common.entity

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

import javax.persistence.*

@Entity
@Table(name = 'appConfig')
@EqualsAndHashCode(includes = 'name')
@ToString(includeNames = true)
class AppConfigEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = 'appConfigId')
    Long id

    @Column(name = 'configName')
    String name

    @Column(name = 'configValue')
    String value
}
