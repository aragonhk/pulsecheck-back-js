var jsf = require('json-schema-faker');

module.exports = {
    "type": "object",
    "properties": {
      "users": {
        "type": "array",
        "minItems": 20,
        "maxItems": 20,
        "items": {
          "type": "object",
          "properties": {
            "status": {
              "type": "boolean",
              "faker": "random.boolean"
            },
            "firstName": {
              "type": "string",
              "faker": "name.firstName"
            },
            "lastName": {
              "type": "string",
              "faker": "name.lastName"
            },
            "updated": {
                "type": "string",
                "faker": "date.recent"
              },
            "title": {
              "type": "string",
              "faker": "name.jobTitle"
            },
            "city": {
                "type": "string",
                "faker": "address.city"
            }
          },
          "required": ["status", "firstName", "lastName", "updated", "title", "city"]
        }
      }
    },
    "required": ["users"]
  };