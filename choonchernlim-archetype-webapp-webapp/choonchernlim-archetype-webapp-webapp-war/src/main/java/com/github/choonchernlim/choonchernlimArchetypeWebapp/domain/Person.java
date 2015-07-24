package com.github.choonchernlim.choonchernlimArchetypeWebapp.domain;

import com.google.common.base.Objects;
import org.hibernate.annotations.Type;
import org.joda.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/*!
# Domain Package
* This package stores all Hibernate domain objects.
* Remember to always override the `equals()` and `hashcode()` using the business keys (keys that make the row unique), not identity keys.
* Unlike classes in other packages, there is no class suffix. For example, instead of calling it `PersonDomain`, it should be just `Person`.
* Please remember to delete this mock class.
*/
@Entity
@Table(name = "person")
public class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column
    protected String name;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "personId")
    private Long id;
    @Column
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentLocalDateTime")
    private LocalDateTime addedOn;
    @OneToMany(mappedBy = "person", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Car> cars = new HashSet<Car>();

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        final Person other = (Person) o;

        return Objects.equal(getName(), other.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getName());
    }

    public void addCar(Car car) {
        car.setPerson(this);
        cars.add(car);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getAddedOn() {
        return addedOn;
    }

    public void setAddedOn(LocalDateTime addedOn) {
        this.addedOn = addedOn;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Car> getCars() {
        return cars;
    }

    public void setCars(Set<Car> cars) {
        this.cars = cars;
    }
}
