import { FormEvent, useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";
import './Formulario.css';

export function Formulario() {

    const [nome, setNome] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const { adicionarParticipante } = useAdicionarParticipante();
    const { mensagemDeErro } = useMensagemDeErro();

    function aoSubmeterFormulario(event: FormEvent) {
        event.preventDefault();

        adicionarParticipante(nome);

        setNome('');
        inputRef.current?.focus();

    }

    return (
        <form onSubmit={aoSubmeterFormulario}>
            <div className="grupo-input-btn">
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button disabled={!nome}>Adicionar</button>
            </div>
            {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
        </form>
    )
}