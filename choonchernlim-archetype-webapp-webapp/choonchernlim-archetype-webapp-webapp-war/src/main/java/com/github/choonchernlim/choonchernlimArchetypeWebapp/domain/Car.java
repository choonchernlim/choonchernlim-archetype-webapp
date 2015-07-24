package com.github.choonchernlim.choonchernlimArchetypeWebapp.domain;

import com.google.common.base.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "car")
public class Car implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column
    protected String brand;
    @Column
    protected String model;
    @Column
    protected int totalOwned;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "carId")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "personId")
    private Person person;

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        final Car other = (Car) o;

        return Objects.equal(getPerson(), other.getPerson()) &&
               Objects.equal(getBrand(), other.getBrand()) &&
               Objects.equal(getModel(), other.getModel());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getPerson(), getBrand(), getModel());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getTotalOwned() {
        return totalOwned;
    }

    public void setTotalOwned(int totalOwned) {
        this.totalOwned = totalOwned;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}
