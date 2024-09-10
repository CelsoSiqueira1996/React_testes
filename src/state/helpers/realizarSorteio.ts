import shuffle from "just-shuffle";

export function realizaSorteio(listaParticipantes: string[]) {
    const totalParticipantes = listaParticipantes.length;
    const listaEmbaralhada = shuffle(listaParticipantes);
    const resultado = new Map<string,string>();

    for(let i = 0; i < totalParticipantes; i++) {

        const indiceAmigo = (i === (totalParticipantes - 1))? 0 : i + 1;
        resultado.set(listaEmbaralhada[i], listaEmbaralhada[indiceAmigo])
    }

    return resultado;
}