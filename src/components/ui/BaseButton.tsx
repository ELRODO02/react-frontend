import React from 'react';

export default function BaseButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} className="btn btn-primary ${props.className} || ''`}"/>
    
}