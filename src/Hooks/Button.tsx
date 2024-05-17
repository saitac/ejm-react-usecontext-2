import { ReactNode, MouseEventHandler } from "react";


type buttonProps = {
    children: ReactNode
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({children, onClick}: buttonProps) => {
    return(
        <button className="button" onClick={onClick}>{children}</button>
    );
}

export default Button