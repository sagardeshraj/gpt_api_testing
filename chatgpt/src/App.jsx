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
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: 'You are a phone reviewer if user gives minimam two point about the phone you should responde with a review related to the points or whatever he wants to say(keep it short unless its length is specified).' },
                 { role: 'user', content: msg },
      ],
      model: 'gpt-3.5-turbo',
    });
    setOutput(completion.choices[0].message.content)
    console.log();
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
