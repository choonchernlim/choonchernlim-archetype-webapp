package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import com.github.choonchernlim.choonchernlimArchetypeWebapp.common.constant.ProfileName
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.*
import org.springframework.jndi.JndiObjectFactoryBean

import javax.sql.DataSource
import java.nio.file.Files
import java.nio.file.Paths

@Configuration
class DataSourceConfig {

    interface DataSources {
        DataSource choonchernlimArchetypeWebappDataSource()

        // TODO Additional datasource
        // DataSource secondDbDataSource()
    }

    /**
     * "local" profile uses externalized JDBC configuration.
     */
    @Profile(ProfileName.LOCAL)
    @PropertySource('file:${SPRING_BOOT_PROPERTIES_DIR}/choonchernlim-archetype-webapp.properties')
    class LocalDataSourceConfig implements DataSources {

        // ensure file path defined under @PropertySource is valid
        LocalDataSourceConfig() {
            final String dir = System.getenv('SPRING_BOOT_PROPERTIES_DIR')
            assert dir?.trim(),
                    'SPRING_BOOT_PROPERTIES_DIR environment variable containing directory path (without trailing slash) must exist'

            assert Files.exists(Paths.get("${dir}/choonchernlim-archetype-webapp.properties")),
                    "${dir}/choonchernlim-archetype-webapp.properties containing externalized datasource properties must exist"
        }

        @Bean
        @Primary
        @ConfigurationProperties(prefix = 'spring.dataSource.choonchernlim-archetype-webapp')
        @Override
        DataSource choonchernlimArchetypeWebappDataSource() {
            return DataSourceBuilder.create().build()
        }

        // TODO Additional datasource
        // @Bean
        // @Qualifier('second-db')
        // @ConfigurationProperties(prefix = 'spring.dataSource.second-db')
        // DataSource secondDbDataSource() {
        //     return DataSourceBuilder.create().build()
        // }
    }

    /**
     * "middleware" profile uses JNDI.
     */
    @Profile(ProfileName.MIDDLEWARE)
    @Configuration
    class MiddlewareDataSourceConfig implements DataSources {
        @Value('${spring.datasource.choonchernlim-archetype-webapp.jndi-name}')
        String choonchernlimJndiName

        // TODO Additional datasource
        // @Value('${spring.datasource.second-db.jndi-name}')
        // String secondDbJndiName

        @Bean
        @Primary
        @Override
        DataSource choonchernlimArchetypeWebappDataSource() {
            return getDataSource(choonchernlimJndiName)
        }

        // TODO Additional datasource
        // @Bean
        // @Qualifier('second-db')
        // DataSource secondDbDataSource() {
        //     return getDataSource(secondDbJndiName)
        // }

        DataSource getDataSource(final String jndiName) {
            JndiObjectFactoryBean bean = new JndiObjectFactoryBean(jndiName: jndiName)
            bean.afterPropertiesSet()

            return (DataSource) bean.getObject()
        }
    }
}
