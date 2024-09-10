import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"
import './Rodape.css';
import { useSortearAmigos } from "../state/hooks/useSortearAmigos";

export function Rodape() {
    const { listaParticipantes } = useListaParticipantes();
    const navigate = useNavigate();
    const sortearAmigos = useSortearAmigos();

    function iniciarBrincadeira() {
        sortearAmigos();
        navigate('/sorteio');
    }

    return (
        <footer className="rodape-configuracoes">
            <button
                className="botao"
                disabled={listaParticipantes.length < 3}
                onClick={iniciarBrincadeira}
            >Iniciar brincadeira</button>
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </footer>)
}
