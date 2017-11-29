package com.github.choonchernlim.choonchernlimArchetypeWebapp.common.repository

import com.github.choonchernlim.choonchernlimArchetypeWebapp.common.entity.AppConfigEntity
import org.springframework.data.jpa.repository.JpaRepository

interface AppConfigRepository extends JpaRepository<AppConfigEntity, Long> {
}
