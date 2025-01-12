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

## embeddings

```sh
node embeddings.js
```

```json
{
  model: 'all-minilm',
  embeddings: [
    [
       0.041617308,  -0.036937922,   0.06701109,   0.018612444,    0.05364971,
      -0.043033846,    0.02361824, -0.040341355, -0.0123544615,    0.01411252,
       0.009732104,  -0.011240216,  0.012437931,   0.005426235,   -0.01371436,
        0.12871787, -0.0031768747,  -0.12800997,   -0.11380606,     0.0158673,
       -0.06580039,     0.0954275, -0.082019694,    0.03585591,   -0.01846021,
       0.008908988,   0.076811224, -0.023231275,    0.03267272,    0.03990757,
       -0.00564377,   0.079959095,  0.001448024,  0.0064403256,  -0.038263053,
      -0.045528144,   0.022496102, -0.019821763,   0.018293383,  -0.013981314,
       -0.04252274,   -0.01455767, -0.033537798,  -0.014578265,  -0.028892696,
      -0.016208427,    0.06629797,   0.03297905,   0.052804284,  -0.012458296,
      -0.007192075,   0.001900253, -0.061029755,  -0.013559763,   0.022885246,
        0.08711457,  -0.023911623,  -0.04161928,   0.050553534,  -0.026402742,
      -0.059800386,    0.07057514, -0.042017337,   0.014016402,    0.12070426,
      -0.025585342,  -0.029213931,  0.041415695,   -0.06474577, -0.0025214176,
       -0.03604772,   0.028481992,  0.025037311,   0.010320822,   0.090909116,
       0.007132156,   0.062324863, -0.032832127,  -0.013404779,   0.014712938,
         0.0323429,   -0.10699222,  -0.08372277,    0.09497849,  -0.018355224,
        0.02774712,  -0.030997878,   0.11715304,  -0.058459904,  -0.004754982,
      -0.021718895,  -0.022089886,  -0.10687329,    -0.0510019,  -0.087656766,
      -0.023504086,   0.045470264, -0.054337077,     0.0404814,  0.0024872886,
      ... 284 more items
    ]
  ],
  total_duration: 30280204,
  load_duration: 886588,
  prompt_eval_count: 9
}
```
