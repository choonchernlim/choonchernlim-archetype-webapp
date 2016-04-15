
* Copy https://github.com/choonchernlim/front-end-stack and paste under `src/main/frontend`

* `package.json`

```
  "name": "choonchernlim-archetype-webapp",
  "private": true,
  "config": {
    "context_root": "/choonchernlim-archetype-webapp",
    "src_dir_path": "src/",
    "test_dir_path": "test/",
    "dist_dir_path": "../webapp/",
    "report_dir_path": "../../../../target/reports/",
    ...
  },
```

* Under `frontend`...
    * `npm run reinstall`
    * `npm run build` to populate `src/main/webapp`
