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
            "description": "<p>title of subwork.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of subwork.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isPrivate",
            "description": "<p>is  subwork private.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "validationFormTemplate",
            "description": "<p>validationFormTemplate.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "priority",
            "description": "<p>priority of subwork 1 - Lowest 2 - Low 3 - Normal 4 - High 5 - Urgent .</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "userFilter",
            "description": "<p>userFilter of subwork to find assignTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "emailTemplates",
            "description": "<p>emailTemplates of subwork.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "attachments",
            "description": "<p>attachments  of subwork.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "smsTemplates",
            "description": "<p>smsTemplates of subwork.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "escalatingLayers",
            "description": "<p>escalatingLayers of subwork.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sequence",
            "description": "<p>sequence of subwork .</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dueDate",
            "description": "<p>dueDate of subwork .</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/subwork.controller.js",
    "groupTitle": "Subwork"
  }
] });
