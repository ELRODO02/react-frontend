import { useState } from "react";
import { useAuthStore } from "../../stores/authStore";
import BaseInput from "../../components/ui/BaseInput";
import BaseButton from "../../components/ui/BaseButton";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const login = useAuthStore((s) => state.login);
    const navigate = useNavigate();


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        await login ({ usuario, password });
        navigate('/dashboard');
     }

     return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card bg-base-100 shadow-xl p-6 w-[400px]">
                <h1 className="text-2xl mb-4 font-bold">Iniciar Sesión

                </h1>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <BaseInput
                        label="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)
                            required
                         />
                         <BaseInput
                        label="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)
                            required
                         />
                         <BaseButton type="submit">
                            Iniciar Sesión
                            </BaseButton>
                         </form>
                      </div>
                    </div>
        )

                        

