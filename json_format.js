import ollama from 'ollama'
import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

const Country = z.object({
    name: z.string(),
    capital: z.string(), 
    languages: z.array(z.string()),
})

const response = await ollama.chat({
    model: 'qwen2.5:0.5b',
    messages: [{ role: 'user', content: 'Tell me about Canada.' }],
    format: zodToJsonSchema(Country),
})

const country = Country.parse(JSON.parse(response.message.content))
console.log(country)
