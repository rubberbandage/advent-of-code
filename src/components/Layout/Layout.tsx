import {PropsWithChildren} from "react";

interface LayoutProps {
    title: string
}

const Layout = ({
    children,
    title
}: PropsWithChildren<LayoutProps>) => {
    return (
        <div className="container">
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export { Layout }
