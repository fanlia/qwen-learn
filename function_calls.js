

import ollama from 'ollama'

import { TOOLS, MESSAGES } from './tools.js'

function get_current_temperature({
  location, unit = "celsius"
}) {
    //"""Get current temperature at a location.
    //
    //Args:
    //    location: The location to get the temperature for, in the format "City, State, Country".
    //    unit: The unit to return the temperature in. Defaults to "celsius". (choices: ["celsius", "fahrenheit"])
    //
    //Returns:
    //    the temperature, the location, and the unit in a dict
    //"""
  return {
    "temperature": 26.1,
    "location": location,
    "unit": unit,
  }
}

function get_temperature_date({
  location, date, unit = "celsius"
}) {
    //"""Get temperature at a location and date.
    //
    //Args:
    //    location: The location to get the temperature for, in the format "City, State, Country".
    //    date: The date to get the temperature for, in the format "Year-Month-Day".
    //    unit: The unit to return the temperature in. Defaults to "celsius". (choices: ["celsius", "fahrenheit"])
    //
    //Returns:
    //    the temperature, the location, the date and the unit in a dict
    //"""
  return {
    "temperature": 25.9,
    "location": location,
    "date": date,
    "unit": unit,
  }
}

function get_function_by_name(name) {
  if (name == "get_current_temperature")
    return get_current_temperature
  if (name == "get_temperature_date")
    return get_temperature_date
}

const tools = TOOLS
const messages = [...MESSAGES]

const model_name = "qwen2.5:0.5b"

let response = await ollama.chat({
  model: model_name,
  messages: messages,
  tools: tools,
})

messages.push(response["message"])

const tool_calls = messages[messages.length - 1]?.tool_calls ?? []

if (tool_calls.length === 0) {
  console.log(JSON.stringify(response, null, 2))
  throw new Error("tool_calls failed")
}

for (const tool_call of tool_calls) {
  const fn_call = tool_call["function"]
  if (fn_call) {
    const fn_name = fn_call["name"]
    const fn_args = fn_call["arguments"]
    const fn_res = JSON.stringify(get_function_by_name(fn_name)(fn_args))
    messages.push({
        "role": "tool",
        "name": fn_name,
        "content": fn_res,
    })
  }
}

console.log(JSON.stringify(messages, null, 2))

response = await ollama.chat({
  model: model_name,
  messages: messages,
  tools: tools,
})

console.log(JSON.stringify(response, null, 2))
