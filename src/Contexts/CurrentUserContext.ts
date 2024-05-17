import { createContext, Dispatch } from "react";
import { ClsUser } from "../Cls/user";

type CurrentUserContextProps = {
    currentUser: ClsUser
    setCurrentUser: Dispatch<React.SetStateAction<ClsUser>>
}

const CurrentUserContext = createContext<CurrentUserContextProps>(null!);

export default CurrentUserContext;



