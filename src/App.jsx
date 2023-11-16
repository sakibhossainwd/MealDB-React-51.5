import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Restaurant from './components/Restaurant/Restaurant'

function App() {
  const [meals, setMeals] = useState([])
  const [letter, setLetter] = useState('s')
  console.log("meals========> ", meals)
  return (
    <div className='App'>
      <Header meals={meals} letter={letter} setLetter={setLetter} setMeals={setMeals}></Header>
      <Restaurant meals={meals} letter={letter} setLetter={setLetter} setMeals={setMeals}></Restaurant>
    </div>
  )
}

export default App
