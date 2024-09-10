import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export function useMensagemDeErro() {
    const mensagemDeErro = useRecoilValue(erroState);
    return {
        mensagemDeErro
    }
}