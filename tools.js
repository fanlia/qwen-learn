export const TOOLS = [
  {
    "type": "function",
    "function": {
      "name": "get_current_temperature",
      "description": "Get current temperature at a location.",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The location to get the temperature for, in the format \"City, State, Country\"."
          },
          "unit": {
            "type": "string",
            "enum": [
              "celsius",
              "fahrenheit"
            ],
            "description": "The unit to return the temperature in. Defaults to \"celsius\"."
          }
        },
        "required": [
          "location"
        ]
      }
    }
  },
  {
    "type": "function",
    "function": {
      "name": "get_temperature_date",
      "description": "Get temperature at a location and date.",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The location to get the temperature for, in the format \"City, State, Country\"."
          },
          "date": {
            "type": "string",
            "description": "The date to get the temperature for, in the format \"Year-Month-Day\"."
          },
          "unit": {
            "type": "string",
            "enum": [
              "celsius",
              "fahrenheit"
            ],
            "description": "The unit to return the temperature in. Defaults to \"celsius\"."
          }
        },
        "required": [
          "location",
          "date"
        ]
      }
    }
  }
]

export const MESSAGES = [
  {"role": "system", "content": "You are Qwen, created by Alibaba Cloud. You are a helpful assistant.\n\nCurrent Date: 2024-09-30"},
  {"role": "user",  "content": "What's the temperature in San Francisco now? How about tomorrow?"},
]

