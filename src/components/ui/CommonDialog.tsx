import React from 'react';

interface Props {
    open: boolean;
    title: string;
    message: string;
    confirmText?: string
    onConfirm: () => void;
    onCancel: () => void;
}

export default function CommonDialog({ 
    open, 
    title, 
    message, 
    confirmText = 'Confirmar', 
    onConfirm, 
    onCancel 
    }: Props) {
        if (!open) return null;
        return (
          <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">
                    {title}
                    </h3>
                    <p className="py-4">
                        {message}
                        </p>
                <div className="modal-action">
                    <button className="btn" onClick={onCancel}>Cancelar</button>
                    <button className="btn btn-error" onClick={onConfirm}>{confirmText}</button>
                  </div>
                </div>
            </div>
        )
}