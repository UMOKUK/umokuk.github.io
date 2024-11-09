// import { useState } from 'react'
import './App.scss'
import Socials from '../socials/socials';
import Platforms from '../platforms/platforms';

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <img  className='umok' src='UMOKTYPE2.png'/>
      <Socials></Socials>
      <Platforms></Platforms>
    </>
  )
}

export default App
