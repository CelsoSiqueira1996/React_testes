import { useRecoilValue, useSetRecoilState } from "recoil";
import { listaParticipantesState, resultadoAmigoSecreto } from "../atom";
import { realizaSorteio } from "../helpers/realizarSorteio";

export function useSortearAmigos() {
    const listaParticipantes = useRecoilValue(listaParticipantesState);
    const setResultado = useSetRecoilState(resultadoAmigoSecreto);

    function sortearAmigos() {
        setResultado(realizaSorteio(listaParticipantes));
    }

    return sortearAmigos;
}