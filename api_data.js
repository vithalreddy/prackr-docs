define({ "api": [
  {
    "type": "post",
    "url": "/:workId/subwork/create",
    "title": "add new subwork to work",
    "version": "1.0.0",
    "name": "addSubwork",
    "group": "Subwork",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>subwork title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>subwork description.</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/subwork.controller.js",
    "groupTitle": "Subwork"
  }
] });
