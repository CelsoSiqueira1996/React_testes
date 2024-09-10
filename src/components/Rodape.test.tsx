import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { Rodape } from "./Rodape"
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"

jest.mock('../state/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

jest.mock('../state/hooks/useSortearAmigos', () => {
    return {
        useSortearAmigos: () => mockSorteio
    }
})

describe('Quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue({listaParticipantes: []});
    });

    test('A brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button');

        expect(botao).toBeDisabled();
    });
});

describe('Quando existem participantes suficientes', () => {
    const participantes: string[] = [
        'Ana', 'Catarina', 'Geovana'
    ];

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue({listaParticipantes: participantes});
    });
    
    test('A brincadeira pode ser iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button');

        expect(botao).not.toBeDisabled();
    });
    test('A brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button');

        fireEvent.click(botao);

        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    });
});