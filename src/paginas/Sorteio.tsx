import { FormEvent, useState } from "react";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";
import './Sorteio.css'

export function Sorteio() {
    const { listaParticipantes } = useListaParticipantes();
    const [nomeParticipante, setNomeParticipante] = useState<string>('');
    const [amigoSecreto, setAmigoSecreto] = useState('');
    const { resultadoSorteio } = useResultadoSorteio();

    function sortear(event: FormEvent) {
        event.preventDefault();
        if (resultadoSorteio.has(nomeParticipante)) {
            setAmigoSecreto(resultadoSorteio.get(nomeParticipante)!)
            setTimeout(() => setAmigoSecreto(''), 5000);
        }
    }

    return (
        <section className="sorteio">
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={sortear}>
                <select
                    required
                    value={nomeParticipante}
                    onChange={(event) => setNomeParticipante(event.target.value)}
                    placeholder="Selecione o seu nome"
                >
                    <option>Selecione seu nome</option>
                    {listaParticipantes.map((participante) => (
                        <option key={participante} value={participante}>
                            {participante}
                        </option>
                    ))}
                </select>
                <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                <button className="botao-sortear">Sortear</button>
            </form>
            {amigoSecreto && <p className="resultado" role="alert">{amigoSecreto}</p>}
            <footer className="sorteio">
                <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    )
}