//外部資源 node_modules
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap'

//內部資源 src 裡面的
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
const { VITE_APP_Path } = import.meta.env;

const App = () => {


  return (
    <>
      <div>
        <h2>ReactSample:{VITE_APP_Path} </h2>
      </div>
    </>
  )
}

export default App
