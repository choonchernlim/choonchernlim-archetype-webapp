| Dependency                            | Version Used  | Why                                                                                                                                                           |
| --------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| org.mortbay.jetty:jetty-maven-plugin  | 8.x           | 9.x requires Java 7 and Servlet 3.0                                                                                                                           |
| javax.servlet:servlet-api             | 2.5           | Match WAS 7 specs                                                                                                                                             |
| javax.servlet.jsp:jsp-api             | 2.1           | Match WAS 7 specs                                                                                                                                             |
| javax.mail:mail                       | 1.4.x         | Match WAS 7 specs                                                                                                                                             |
| javax.servlet:jstl                    | 2.1           | Match WAS 7 specs                                                                                                                                             |
| commons-dbcp:commons-dbcp             | 1.4           | 2.x requires Java 7                                                                                                                                           |
| org.hibernate:hibernate-core          | 4.2.x         | 4.3.x requires JPA 2.1                                                                                                                                        |
| org.springframework:spring-test       | 3.x           | 4.x requires Servlet 3.0                                                                                                                                      |
| com.google.code.findbugs:findbugs     | 2.x           | 3.x requires Java 7                                                                                                                                           |
| com.jayway.jsonpath:json-path-assert  | 0.9.1         | 2.x causes `java.lang.NoSuchMethodError: com.jayway.jsonpath.JsonPath.compile(Ljava/lang/String;[Lcom/jayway/jsonpath/Filter;)Lcom/jayway/jsonpath/JsonPath;` |

# ROOT pom.xml > properties > jdk

	<jdk.version>1.6</jdk.version>

...to...

	<jdk.version>1.7</jdk.version>
        
# ROOT pom.xml > dependencyManagement > dependencies

	<dependency>
	    <groupId>javax.servlet</groupId>
	    <artifactId>servlet-api</artifactId>
	    <version>2.5</version>
	    <scope>provided</scope>
	</dependency>
    <dependency>
        <groupId>javax.servlet.jsp</groupId>
        <artifactId>jsp-api</artifactId>
        <version>2.1</version>
        <scope>provided</scope>
    </dependency>
    <dependency>
        <groupId>commons-dbcp</groupId>
        <artifactId>commons-dbcp</artifactId>
        <version>1.4</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-test</artifactId>
        <version>${org.springframework.test.version}</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>com.google.code.findbugs</groupId>
        <artifactId>findbugs</artifactId>
        <version>2.0.3</version>
        <exclusions>
            <exclusion>
                <groupId>xml-apis</groupId>
                <artifactId>xml-apis</artifactId>
            </exclusion>
        </exclusions>
    </dependency>

...to...

	<dependency>
	    <groupId>javax.servlet</groupId>
	    <artifactId>javax.servlet-api</artifactId>
	    <version>3.0.1</version>
	    <scope>provided</scope>
	</dependency>
    <dependency>
        <groupId>javax.servlet.jsp</groupId>
        <artifactId>jsp-api</artifactId>
        <version>2.2</version>
        <scope>provided</scope>
    </dependency>
    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-dbcp2</artifactId>
        <version>2.1.1</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-test</artifactId>
        <version>${org.springframework.version}</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>com.google.code.findbugs</groupId>
        <artifactId>findbugs</artifactId>
        <version>3.0.1</version>
        <exclusions>
            <exclusion>
                <groupId>xml-apis</groupId>
                <artifactId>xml-apis</artifactId>
            </exclusion>
        </exclusions>
    </dependency>            

# WAR pom.xml > dependencies

    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>servlet-api</artifactId>
    </dependency>
    <dependency>
        <groupId>commons-dbcp</groupId>
        <artifactId>commons-dbcp</artifactId>
    </dependency>

...to...

    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
    </dependency>
    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-dbcp2</artifactId>
    </dependency>
    
# WAR > web.xml

    <web-app id="WebApp_ID"
             xmlns="http://java.sun.com/xml/ns/javaee"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
             version="2.5">

...to...
    
    <web-app
            xmlns="http://java.sun.com/xml/ns/javaee"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
            version="3.0">
