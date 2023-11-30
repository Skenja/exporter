import { useState } from 'react'
import { jsonToExcel } from './jsonToExcel';

const App = () => {
  const [input, setInput] = useState<string | null>(null)

  const convertAndDownload = () => {
    if (!input)
      return alert('Please enter a valid JSON string')

    jsonToExcel(input)
  }

  return (
    <form onSubmit={convertAndDownload}>
      <input type="text" value={input || ''} onChange={e => setInput(e.target.value)} />
    </form>
  )
}

export default App