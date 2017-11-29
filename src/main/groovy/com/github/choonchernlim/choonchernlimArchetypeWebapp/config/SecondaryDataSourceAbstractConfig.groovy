package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.orm.jpa.JpaTransactionManager
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean
import org.springframework.transaction.PlatformTransactionManager
import org.springframework.transaction.annotation.EnableTransactionManagement

import javax.persistence.EntityManagerFactory
import javax.sql.DataSource

/**
 * Configures secondary data source for both "local" and "middleware" Spring profile.
 */
@EnableTransactionManagement
@EnableJpaRepositories(
        entityManagerFactoryRef = 'secondaryEntityManagerFactory',
        transactionManagerRef = 'secondaryTransactionManager',
        basePackages = ['com.github.choonchernlim.choonchernlimArchetypeWebapp.secondary.repository']
)
abstract class SecondaryDataSourceAbstractConfig {
    @Bean(name = 'secondaryDataSource')
    abstract DataSource dataSource()

    @Bean(name = 'secondaryEntityManagerFactory')
    LocalContainerEntityManagerFactoryBean entityManagerFactory(
            EntityManagerFactoryBuilder builder,
            @Qualifier('secondaryDataSource') DataSource dataSource) {
        return builder
                .dataSource(dataSource)
                .packages('com.github.choonchernlim.choonchernlimArchetypeWebapp.secondary.entity')
                .persistenceUnit('secondary')
                .build()
    }

    @Bean(name = 'secondaryTransactionManager')
    PlatformTransactionManager transactionManager(
            @Qualifier('secondaryEntityManagerFactory') EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory)
    }
}
