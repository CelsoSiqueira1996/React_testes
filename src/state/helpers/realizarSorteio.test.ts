import { realizaSorteio } from "./realizarSorteio";

describe('Dado um sorteio de amigo secreto', () => {
    test('Cada participante não sorteie o próprio nome', () => {
        const participantes = [
            'Ana', 'Catarina', 'Maria', 'João', 'Celso'
        ];

        const sorteio = realizaSorteio(participantes);
        participantes.forEach((participante) => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante);
        })
    })
})