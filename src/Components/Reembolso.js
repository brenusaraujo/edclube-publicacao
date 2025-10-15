import React from 'react';
import './Reembolso.css';

const Reembolso = () => {
    return (
        <div className="reembolso-container">
            <div className="reembolso-content">
                <h1 className="reembolso-title">Política de Reembolso</h1>
                <p className="reembolso-update">Última atualização: 15 de outubro de 2025</p>

                <h2 className="reembolso-subtitle">1. Visão Geral</h2>
                <p>Esta é uma página de exemplo para a Política de Reembolso da Edclube. O conteúdo a seguir é fictício e serve apenas para fins de demonstração e teste de layout. O texto deverá ser substituído pela política oficial da associação.</p>

                <h2 className="reembolso-subtitle">2. Condições para Solicitação de Reembolso</h2>
                <p>O associado poderá solicitar o reembolso de valores pagos indevidamente ou em duplicidade. A solicitação deve ser feita através dos nossos canais de atendimento oficiais no prazo de até 7 (sete) dias úteis a contar da data do pagamento.</p>
                <ul>
                    <li>Apresentação do comprovativo de pagamento.</li>
                    <li>Inexistência de débitos pendentes.</li>
                    <li>A solicitação será analisada pela nossa equipe financeira.</li>
                </ul>

                <h2 className="reembolso-subtitle">3. Processamento do Reembolso</h2>
                <p>Após a aprovação da solicitação, o valor será reembolsado na conta bancária indicada pelo associado no prazo de até 15 (quinze) dias úteis. Não realizamos reembolsos em dinheiro ou para contas de terceiros.</p>

                <h2 className="reembolso-subtitle">4. Cancelamento da Associação</h2>
                <p>Em caso de cancelamento da associação, os valores referentes às mensalidades e taxas de adesão não são reembolsáveis, uma vez que correspondem à cobertura e aos benefícios disponibilizados durante o período de vigência.</p>

                <h2 className="reembolso-subtitle">5. Contato</h2>
                <p>Para mais informações ou para iniciar uma solicitação de reembolso, entre em contato com o nosso suporte através do e-mail: <a href="mailto:contato@edclube.com.br">contato@edclube.com.br</a>.</p>
            </div>
        </div>
    );
};

export default Reembolso;
