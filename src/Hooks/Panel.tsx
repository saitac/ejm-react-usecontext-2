import { ReactNode } from "react"

type PanelProps = {
    children: ReactNode
    title: string
}

const Panel = ( {children, title}: PanelProps ) => {
    return(
        <section className="panel">
            <h1>{title}</h1>
            {children}
        </section>
    )
}

export default Panel