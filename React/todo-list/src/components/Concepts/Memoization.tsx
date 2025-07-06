import { useState, useMemo, useCallback } from "react";

interface MemoizationProps{
    financialData: {
        incomes: number[],
        outcomes: number[],
    };
}

export const Memoization:React.FC<MemoizationProps> = ({ financialData }) => {

    const [showValue, setShowValue] = useState(false);
    
    const totalIncomes = useMemo(() => {
        return financialData.incomes.reduce((total, income) => {
            console.log('Calculando o total de receita');
            return total + income;
        }, 0);
    }, [financialData.incomes]);

    const totalOutcomes = useMemo(() => {
        return financialData.outcomes.reduce((total, outcome) => {
            console.log('Calculando o total de Despesas');
            return total + outcome;
        }, 0);
    }, [financialData.outcomes]);

    const aplicationDiscount = useCallback((discount: number) => {
        return totalOutcomes * (1 - discount);
    }, [totalOutcomes]);

    return(
        <div style={{ padding: '2rem' }}>
            <h1>Memoização</h1>
            <h2>useMemo</h2>

            <p>{`Total da receitas: R$ ${showValue ? totalIncomes : 'xxxxx'}`}</p>
            <p>{`Total de despesas: R$ ${showValue ? totalOutcomes : 'xxxxx'}`}</p>
            <br /><br />
            <button onClick={() => {
                setShowValue(!showValue);
            }}>
                { showValue ? 'Ocultar valores' : 'Mostrar valores' }
            </button>
        </div>
    );
}