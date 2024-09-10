import { RecoilRoot } from "recoil"
import { Sorteio } from "./Sorteio"
import { fireEvent, render, screen } from "@testing-library/react"
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"

jest.mock('../state/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

jest.mock('../state/hooks/useResultadoSorteio', () => {
    return {
        useResultadoSorteio: jest.fn()
    }
});

describe('Na página de sorteio', () => {
    const participantes: string[] = [
        'Ana', 'Catarina', 'Geovana'
    ];

    const resultado = new Map<string, string>([
        ['Ana', 'Jorel'],
        ['Jorel', 'Catarina'],
        ['Catarina', 'Ana']
    ]);

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue({listaParticipantes: participantes});
        (useResultadoSorteio as jest.Mock).mockReturnValue({resultadoSorteio: resultado})
    });

    test('Todos os participantes podem exibir seu amigo secreto', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>);

        const opcoes = screen.queryAllByRole('option');

        expect(opcoes).toHaveLength(participantes.length + 1);
    });

    test('O amigo secreto é exibido quando solicitado', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>);

        const select = screen.getByPlaceholderText('Selecione o seu nome');

        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        });

        const botao = screen.getByRole('button');

        fireEvent.click(botao);

        const amigoSecreto = screen.getByRole('alert');

        expect(amigoSecreto).toBeInTheDocument();
    })
})