import React from 'react'

import { useMyHook } from 'my-react-hook'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
