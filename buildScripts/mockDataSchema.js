export const schema = {
    "type": "object",
    "properties": {
      "users": {
        "type": "array",
        "minItems": 8,
        "maxItems": 10,
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
                "faker": "date.past"
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
          "required": ["id", "firstName", "lastName", "updated", "title", "city"]
        }
      }
    },
    "required": ["users"]
  };
  