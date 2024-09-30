import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import LanguageDetector from './components/LanguageDetector'

function App() {
  const {t} = useTranslation()
  return (
    <>
      <LanguageDetector/>
     <h1>{t("greeting")}</h1>
    </>
  )
}

export default App
