<%@ taglib prefix="decorator" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:set var="ROOT" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html class="no-js">
<head>
    <title>Hello World App</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
    <link rel="shortcut icon" href="/goodies/img/favicon/1.0.0/favicon.ico">
    <%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
    <link rel="icon" href="/goodies/img/favicon/1.0.0/favicon.ico" type="image/x-icon">

    <%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
    <link rel="stylesheet" href="/goodies/lib/bootstrap/3.2.0/css/bootstrap.min.css"/>
    <%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
    <link rel="stylesheet" href="/goodies/lib/font-awesome/4.2.0/css/font-awesome.min.css"/>

    <link rel="stylesheet" type="text/css" href="${ROOT}/resources/css/main.css"/>

    <!--[if lt IE 9]>
    <script type="text/javascript" src="/goodies/lib/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
    <script type="text/javascript" src="/goodies/lib/modernizr/2.8.3/modernizr.min.js"></script>

    <decorator:head/>
</head>
<body>

<nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="${ROOT}">Hello World App</a>
        </div>

        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="${ROOT}"><i class="fa fa-home"></i> Home</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bars"></i> <b
                            class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Menu Item 1</a></li>
                        <li><a href="#">Menu Item 2</a></li>
                        <li><a href="#">Menu Item 3</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Sign Off</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>


<div class="container">
    <decorator:body/>
</div>

<nav class="navbar navbar-fixed-bottom navbar-inverse" role="navigation">
    <div class="container">
        <p class="navbar-text">
            Contact <a href="http://javaprod/pandora/persona/employees/lan-id/limc">MY HERO</a> with questions
            regarding this page.
        </p>
    </div>
</nav>

<%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
<script type="text/javascript" src="/goodies/lib/json2/2014-02-04/json2.js"></script>
<%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
<script type="text/javascript" src="/goodies/lib/jquery/1.11.0/jquery.min.js"></script>
<%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
<script type="text/javascript" src="/goodies/lib/lodash/2.4.1/lodash.min.js"></script>
<%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
<script type="text/javascript" src="/goodies/lib/underscore.string/2.3.0/underscore.string.min.js"></script>
<%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
<script type="text/javascript" src="/goodies/lib/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
<script type="text/javascript" src="/goodies/lib/moment/2.8.3/moment.min.js"></script>
<%--suppress JspAbsolutePathInspection, HtmlUnknownTarget --%>
<script type="text/javascript" src="/goodies/lib/jquery-placeholder/2.0.8/jquery.placeholder.js"></script>

<script type="text/javascript" src="${ROOT}/resources/js/main.js"></script>

<%--
-- Application Code
--%>
<decorator:getProperty property="page.page-scripts"/>


</body>
</html>
