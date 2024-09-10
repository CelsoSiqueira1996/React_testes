import { useRecoilValue } from "recoil";
import { resultadoAmigoSecreto } from "../atom";

export function useResultadoSorteio() {
    const resultadoSorteio = useRecoilValue(resultadoAmigoSecreto);

    return {
        resultadoSorteio
    }
}