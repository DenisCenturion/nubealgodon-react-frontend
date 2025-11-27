import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      {/*<h1 className="font-mono 
      text-5xl 
      text-purple-600">Tailwind funcionando</h1>*/}
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Nube Algodón"/>
    </>
  )
}

export default App
