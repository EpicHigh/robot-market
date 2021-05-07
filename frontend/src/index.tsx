import ReactDOM from 'react-dom'
import App from './App'
import CoreProvider from './provider'

ReactDOM.render(
  <CoreProvider>
    <App />
  </CoreProvider>,
  document.getElementById('root')
)
