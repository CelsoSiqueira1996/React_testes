import { useListaParticipantes } from "../state/hooks/useListaParticipantes"

export function ListaParticipantes() {
    const { listaParticipantes } = useListaParticipantes();

    return (
        <ul>
            {listaParticipantes.map((participante) => (
                <li key={participante}>{participante}</li>
            ))}
        </ul>
    )
}