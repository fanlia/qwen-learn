
import ollama from 'ollama'

const response = await ollama.embed({
  model: 'all-minilm',
  input: ['The sky is blue because of Rayleigh scattering'],
})

console.log(response)
