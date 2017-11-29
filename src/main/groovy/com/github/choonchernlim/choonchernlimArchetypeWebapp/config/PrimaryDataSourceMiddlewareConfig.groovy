package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import com.github.choonchernlim.choonchernlimArchetypeWebapp.common.constant.SpringProfile
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup

import javax.sql.DataSource

/**
 * Configures primary data source using JNDI when running with "local" Spring profile.
 */
@Configuration
@Profile(SpringProfile.MIDDLEWARE)
class PrimaryDataSourceMiddlewareConfig extends PrimaryDataSourceAbstractConfig {
    @Value('${spring.datasource.jndi-name}')
    String jndiName

    @Override
    DataSource dataSource() {
        return new JndiDataSourceLookup().getDataSource(jndiName)
    }
}
