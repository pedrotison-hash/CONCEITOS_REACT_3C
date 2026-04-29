import { useState } from 'react'
import './App.css'
import Login from './paginas/login'
import Cadastro from './paginas/Cadastro'
import Usuarios from './paginas/Usuarios'

function App() {
  const [tela, setTela] = useState('login')

 const trocarDeTela = (pagina) => {
 setTela(pagina)
 }

const renderizar = () => {
  if(tela === 'Usuarios')
    return <Usuarios/>
  if(tela === 'login') {
    return <Login/>
  }else if(tela === 'cadastro') {
      return <Cadastro/>
  }else{
        return <Login/>
      } 
    
}

 return (
  <>
  <button onClick={() => trocarDeTela('cadastro')}>Cadastro</button>
  <button onClick={() => trocarDeTela('login')}>Login</button>
   <button onClick={() => trocarDeTela('Usuarios')}>Usuarios</button>

<hr />

{renderizar()}

  </>

 )
}
export default App
