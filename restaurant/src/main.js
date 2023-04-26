import './style.css'
import majom from '/harom-majom.jpeg'
import {setupCounter} from './counter.js'

document.querySelector('#app').innerHTML = `
    <h1>Hello Majmok!</h1>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${majom}" class="logo" alt="Vite logo" />
    </a>
  </div>
`

setupCounter(document.querySelector('#counter'))
