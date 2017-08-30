package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import com.github.choonchernlim.choonchernlimArchetypeWebapp.common.constant.SpringProfile
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Profile
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup

import javax.sql.DataSource

/**
 * Configures secondary data source using JNDI when running with "middleware" Spring profile.
 */
// TODO Additional data source - Enable "middleware" profile
// @Configuration
@Profile(SpringProfile.MIDDLEWARE)
class SecondaryDataSourceMiddlewareConfig extends PrimaryDataSourceAbstractConfig {
    @Value('${secondary.datasource.jndi-name}')
    String jndiName

    @Override
    DataSource dataSource() {
        return new JndiDataSourceLookup().getDataSource(jndiName)
    }
}
