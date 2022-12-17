import React, {ChangeEventHandler, PropsWithChildren, useEffect, useState} from "react";
import Code from "../Code";
import {TextArea} from "../TextArea";

interface LayoutProps {
    title: string,
    markdown?: any;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    initialValue: string;
}

const Layout = ({
    children,
    onChange,
    initialValue,
    markdown,
    title
}: PropsWithChildren<LayoutProps>) => {
    const [htmlContent, setHtmlContent] = useState<string | null>(null);

    useEffect(() => {
        if (markdown) {
            fetch(markdown)
                .then(response => response.text())
                .then(text => {
                    setHtmlContent(text);
                })
        }
    }, [markdown])

    return (
        <div className="container">
            <h1>{title}</h1>
            <TextArea name="paragraph_text" onChange={onChange} initialValue={initialValue}/>
            {children}
            { htmlContent && <Code htmlContent={htmlContent} />}
        </div>
    );
}

export { Layout }
