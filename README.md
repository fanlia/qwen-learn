# qwen-learn
qwen learn

## ollama api

https://github.com/ollama/ollama/blob/main/docs/api.md

## function_calls

```sh
node function_calls.js
```

```json
{
  "model": "qwen2.5:0.5b",
  "created_at": "2025-01-12T09:07:49.084881807Z",
  "message": {
    "role": "assistant",
    "content": "The current temperature in San Francisco is 25.9 degrees Celsius. It's expected to be around 26°C today and tomorrow."
  },
  "done_reason": "stop",
  "done": true,
  "total_duration": 595005195,
  "load_duration": 13385336,
  "prompt_eval_count": 448,
  "prompt_eval_duration": 267000000,
  "eval_count": 30,
  "eval_duration": 301000000
}
```

## json_format

```sh
node json_format.js
```

```json
{
  name: 'Canada',
  capital: 'Ottawa',
  languages: [ 'English', 'French (official)' ]
}
```

## json_response

```sh
node json_response.js
```

```json
{
  sky_colors: [
    { daytime: 'colorful', afternoon: 'blue', evening: 'dark blue' },
    {
      daytime: 'colorless',
      afternoon: 'grayish',
      evening: 'yellowish'
    }
  ]
}
```
