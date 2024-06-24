import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './styles.global.css'
import Header from './assets/components/Header'
import  styles from './app.module.css'
import Sidebar from './assets/components/Sidebar'
import Post from './assets/components/Post'
import Comments from './assets/components/Comments'


function App() {
  

  return (
    <>
     <div>
     <Header/>
     <div className={styles.wrapper}>
     <Sidebar/> 
     <main>
      <Post/>
      <Comments/>
     </main>
     </div>
     </div>
    </>
  )
}

export default App
