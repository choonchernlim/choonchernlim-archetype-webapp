package com.github.choonchernlim.choonchernlimArchetypeWebapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * This controller catches all request URIs and presents the single-page app's entry page so that
 * client side can figure out what to do with the request URI.
 */
// TODO LIMC push `index.html` to `/webapp/WEB-INF/html` instead of `/webapp`
// TODO LIMC need to figure out where to put `favicon.png` to `assets/` dir

// TODO LIMC drop `assets/` from front-end-stack... archetype specifies dist as `webapp/assets`
// TODO LIMC front-end-stack's package.json has new config: "entry_file_dir"
// TODO LIMC archetype specifies index.html as the following:-
//new HtmlWebpackPlugin({
//        title: packageJson.name,
//        template: path.join(srcPath, '/index.html'),
//        favicon: path.join(srcPath, '/img/favicon.png'),
//        filename: '../WEB-INF/html/index.html' <-------------
//        })

@Controller
@RequestMapping(value = "*")
public final class IndexController {
    @RequestMapping(method = RequestMethod.GET)
    public String main() {
        return "index";
    }
}
