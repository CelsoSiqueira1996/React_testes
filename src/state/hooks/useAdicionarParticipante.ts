import { useRecoilState, useSetRecoilState } from "recoil";
import { erroState, listaParticipantesState } from "../atom";

export function useAdicionarParticipante() {
    const [participantes, setParticipantes] = useRecoilState(listaParticipantesState);
    const setMensagemErro = useSetRecoilState(erroState);

    function adicionarParticipante(participante: string) {
        const participanteJaExiste = participantes.find((elemento) => 
            (elemento === participante));

        if(!participanteJaExiste) {
            setParticipantes(listaAntiga => [...listaAntiga, participante])
        } else {
            setMensagemErro('Nomes duplicados não são permitidos!');
            setTimeout(() => setMensagemErro(''), 5000);
        }
    }
    
    return {
        adicionarParticipante
    }
}