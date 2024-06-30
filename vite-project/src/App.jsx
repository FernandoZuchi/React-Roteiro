import { useState } from 'react'
import './App.css'
import MyComponent from './Componentes/MyComponent'
import ConditionalComponent from './Componentes/CondicionalComponent'
import Counter from './Componentes/Counter'
import GihtubUser from './Componentes/GitHubUser'

function App() {
  return (
    <div>
      <GihtubUser
      userName="FernandoZuchi"/>
    </div>
  )
}

export default App
