import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function BaseInput({ label, ...props }: Props) {
    return (
        <label className="form-control w-full mb-3">
            { label && <span className="label-text font-medium">{label}</span> }
            <input {...props} className="inout input-bordered w-full" />
        </label>
    );
}
    