import React from "react";
import './TextArea.css';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    initialValue: string
}

const TextArea = ({onChange, initialValue, ...props}: Props) =>
    <textarea name="paragraph_text"
              cols={80}
              rows={30}
              onChange={onChange} {...props}>{initialValue}</textarea>

export {TextArea};