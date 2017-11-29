package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import com.github.choonchernlim.choonchernlimArchetypeWebapp.common.constant.SpringProfile
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType

import javax.sql.DataSource

/**
 * Configures H2 embedded database as primary data source when running with "local" Spring profile.
 */
@Configuration
@Profile(SpringProfile.LOCAL)
class PrimaryDataSourceLocalConfig extends PrimaryDataSourceAbstractConfig {
    @Override
    DataSource dataSource() {
        return new EmbeddedDatabaseBuilder().
                setType(EmbeddedDatabaseType.H2).
                addScripts('schema-h2.sql', 'schema.sql', 'data-h2.sql').
                build()
    }
}
