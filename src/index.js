import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

/*
Model JSX auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 model.glb --transform --simplify --resolution=2048
Author: Omar Faruq Tawsif (https://sketchfab.com/omarfaruqtawsif32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
*/

function Root() {
  return (
    <>
      <App />
      <div className='press-start-2p-regular' style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        <a className='press-start-2p-regular' href="https://pump.fun/6y3uoLaD377QWHCFxN9fcYuYthXawEDyB3gsUGtkpump" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '1.1rem',color:"white" }}>
          PUMP.FUN
          <br />
        Crypto: From Beginning To The End
        </a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '30px', color:"white" }}><a className='press-start-2p-regular' href='#' style={{color:"white"}}>Telegram</a></div>
        <a className='tit press-start-2p-regular' style={{ width:"100%",position: 'absolute', top: 40, fontSize: '4rem',color:"white", textAlign:"center", margin:"0 auto" }} href="#">
        Crypto: From Beginning <br/> To The End
        </a>
      </div>{' '}
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
