package com.github.choonchernlim.choonchernlimArchetypeWebapp.config

import com.github.choonchernlim.springbootmail.config.SpringBootMailConfig
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Import
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.JavaMailSenderImpl

/**
 * Mail configuration.
 */
// TODO Email - Enable email module
//@Configuration
@Import(SpringBootMailConfig)
class MailConfig {
    @Bean
    JavaMailSender javaMailSender() {
        return new JavaMailSenderImpl(host: 'YOUR-SMTP-HOSTNAME')
    }
}
