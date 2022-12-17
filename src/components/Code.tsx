import React from "react";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Code = ({htmlContent}: { htmlContent: string }) => {
    return <article style={{color: 'white'}}>
        <ReactMarkdown
            children={htmlContent}
            components={{
                code({node, inline, className, children, style, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={dark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
        />
    </article>
}

export default Code;