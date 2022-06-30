import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { markdownTemplate } from './markdownTemplate';

function App() {
  const [markdown, setMarkdown] = useState(markdownTemplate);
  return (
    <main>
      <section className='markdown'>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className='input'
        ></textarea>
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          className='result'
        ></ReactMarkdown>
      </section>
    </main>
  );
}

export default App;
