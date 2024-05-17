import { useContext } from "react"
import CurrentUserContext from "../Contexts/CurrentUserContext"
import { ClsUser } from "../Cls/user";
import Button from "./Button";

const LoginButton = () => {

    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);

    if ( currentUser.name.length > 0 ) { return <p>Iniciaste sesión como {currentUser.name}</p>; }
    
    return(
        <Button 
            onClick={ () => setCurrentUser(new ClsUser("Advika")) }
        >Iniciar sesión como Advika</Button>
    )
}

export default LoginButton