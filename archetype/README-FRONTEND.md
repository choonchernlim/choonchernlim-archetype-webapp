
* Copy https://github.com/choonchernlim/front-end-stack and paste under `src/main/frontend`

* `package.json`

```
{
  "name": "choonchernlim-archetype-webapp",
  ...
  "config": {
    "context_root": "/choonchernlim-archetype-webapp",
    "src_dir": "src/",
    "test_dir": "test/",
    "dist_dir": "../webapp/resources/",
    "report_dir": "../../../../target/reports/",
    ...
  },
  ...
}
```

* `webpack.config.js`

```
const packageJson = require('./package.json');

module.exports = Object.assign({}, baseConfig, {
  devServer: {
    ...
    contentBase: packageJson.config.dist_dir
  },
  ...
});
```

* Delete everything under `src/main/webapp/resources`

* `npm run build` to populate `src/main/webapp/resources`

