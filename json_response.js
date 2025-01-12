import ollama from 'ollama'

const response = await ollama.chat({
    model: 'qwen2.5:0.5b',
    messages: [{ role: 'user', content: 'What color is the sky at different times of the day? Respond using JSON' }],
    format: 'json',
})

const country = JSON.parse(response.message.content)
console.log(country)
