package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Primary
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.orm.jpa.JpaTransactionManager
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean
import org.springframework.transaction.PlatformTransactionManager
import org.springframework.transaction.annotation.EnableTransactionManagement

import javax.persistence.EntityManagerFactory
import javax.sql.DataSource

/**
 * Configures primary data source for both "local" and "middleware" Spring profile.
 */
@EnableTransactionManagement
@EnableJpaRepositories(
        entityManagerFactoryRef = 'entityManagerFactory',
        basePackages = ['com.github.choonchernlim.choonchernlimArchetypeWebapp.common.repository']
)
abstract class PrimaryDataSourceAbstractConfig {
    @Primary
    @Bean(name = 'dataSource')
    abstract DataSource dataSource()

    @Primary
    @Bean(name = 'entityManagerFactory')
    LocalContainerEntityManagerFactoryBean entityManagerFactory(
            EntityManagerFactoryBuilder builder,
            @Qualifier('dataSource') DataSource dataSource) {
        return builder
                .dataSource(dataSource)
                .packages('com.github.choonchernlim.choonchernlimArchetypeWebapp.common.entity')
                .persistenceUnit('primary')
                .build()
    }

    @Primary
    @Bean(name = 'transactionManager')
    PlatformTransactionManager transactionManager(
            @Qualifier('entityManagerFactory') EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory)
    }
}
