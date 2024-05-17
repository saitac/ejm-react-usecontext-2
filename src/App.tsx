import { useState, Dispatch } from "react"
import CurrentUserContext from "./Contexts/CurrentUserContext";
import { ClsUser } from "./Cls/user";
import Form from "./Hooks/Form";

function App() {
  
  // Actualizar un objeto a través del contexto
  const usuarioActual: ClsUser = new ClsUser("");

  const [currentUser, setCurrentUser] = useState(usuarioActual);

  return (
    <CurrentUserContext.Provider value = { {currentUser, setCurrentUser} }>
      <Form/>
    </CurrentUserContext.Provider>
  )
}

export default App
