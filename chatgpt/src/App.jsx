import OpenAI from 'openai';
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [ output, setOutput ] = useState('');

  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
  });

  async function main(msg) {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'system', content: 'You are a phone reviewer if user gives minimam two point about the phone you should responde with a review related to the points or whatever he wants to say(keep it short unless its length is specified).' },
                   { role: 'user', content: msg },
        ],
        model: 'gpt-3.5-turbo',
      });
      setOutput(completion.choices[0].message.content)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <h1>{output}</h1>
      <button onClick={() => main(input)} >click</button>
    </>
  );
}

export default App;
