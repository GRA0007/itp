import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Pages from 'pages'
import 'i18n'
import 'firebase'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)