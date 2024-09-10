import { useRecoilValue } from "recoil";
import { listaParticipantesState } from "../atom";

export function useListaParticipantes() {
    const listaParticipantes = useRecoilValue(listaParticipantesState);

    return {
        listaParticipantes
    }
}