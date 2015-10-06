package com.github.choonchernlim.choonchernlimArchetypeWebapp.dao;

import com.github.choonchernlim.choonchernlimArchetypeWebapp.entity.MockEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MockDao extends JpaRepository<MockEntity, Long> {
}
