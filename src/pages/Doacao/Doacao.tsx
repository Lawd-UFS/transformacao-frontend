import React, { useState } from 'react';
import { Copy, Check, AlertTriangle } from 'lucide-react';
import { PixModal } from '../../components/PixModal/PixModal';
import './Doacao.css';

import materiaisImg from '../../assets/doacao/materiais.png';
import maoDeObraImg from '../../assets/doacao/mao-de-obra.png';
import mobiliarioImg from '../../assets/doacao/mobiliario.png';
import itensBasicosImg from '../../assets/doacao/itens-basicos.png';

// Link configurável para o formulário de doador mensal
export const FORMULARIO_DOADOR_RECORRENTE_URL = 'https://forms.gle/CcR9Pazuqb7WXuQWA'; // TODO: Atualizar com o link definitivo do formulário de doação recorrente

export const Doacao: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [pixCopied, setPixCopied] = useState<boolean>(false);
  const [showPixModal, setShowPixModal] = useState<boolean>(false);

  const pixKey = '67.011.744/0001-82';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey)
      .then(() => {
        setPixCopied(true);
        setTimeout(() => {
          setPixCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Erro ao copiar chave Pix: ', err);
      });
  };

  const handleSelectAmount = (amount: number) => {
    if (selectedAmount === amount) {
      setSelectedAmount(null);
      setCustomAmount('');
    } else {
      setSelectedAmount(amount);
      setCustomAmount(amount.toFixed(2).replace('.', ','));
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);

    const numVal = parseFloat(val.replace(',', '.'));
    if (!isNaN(numVal) && [20, 50, 100, 250].includes(numVal)) {
      setSelectedAmount(numVal);
    } else {
      setSelectedAmount(null);
    }
  };

  const numericAmount = parseFloat(customAmount.replace(',', '.'));
  const isAmountInvalid = customAmount !== '' && (isNaN(numericAmount) || numericAmount < 5);

  return (
    <div className="doacao-page">
      <section className="doacao-hero">
        <div className="hero-overlay" />
        <div className="container hero-body">
          <h1 className="hero-title">
            Sua doação<br />constrói<br />um <span className="highlight">lar</span>
          </h1>
        </div>
      </section>

      <section className="doacao-container container">
        <div className="destination-section">
          <h2 className="section-title center">
            Veja como sua contribuição<br />ajuda cada obra acontecer
          </h2>

          <div className="destination-icons-row">
            <div className="destination-circle-item">
              <img src={materiaisImg} alt="Materiais de construção" className="destination-circle-img" />
            </div>

            <div className="destination-circle-item">
              <img src={maoDeObraImg} alt="Mão de obra" className="destination-circle-img" />
            </div>

            <div className="destination-circle-item">
              <img src={mobiliarioImg} alt="Mobiliário" className="destination-circle-img" />
            </div>

            <div className="destination-circle-item">
              <img src={itensBasicosImg} alt="Itens básicos para as famílias" className="destination-circle-img" />
            </div>
          </div>
        </div>

        <div className="doacao-intro-section">
          <h2 className="section-title center">
            Você pode fazer parte dessa<br />transformação de diferentes formas
          </h2>
          <p className="doacao-intro-text">
            Você pode contribuir da forma que for melhor para você:{' '}
            <strong>fazendo uma doação pontual ou tornando-se um doador mensal</strong>. Seja qual
            for a sua escolha, toda contribuição é bem-vinda e nos ajuda a tornar nossas ações
            possíveis e a levar dignidade a mais famílias.
          </p>
        </div>

        <div className="doacao-pontual-section">
          <h2 className="section-title center pontual-title">Doação pontual</h2>
          <p className="doacao-pontual-text">
            <strong>Você pode fazer uma doação pontual sempre que desejar</strong>, contribuindo
            com o valor que estiver ao seu alcance. É uma forma simples de apoiar nossas ações de
            acordo com suas possibilidades.
          </p>
        </div>

        <div className="method-card">
          <div className="method-card-header">
            <span className="method-number">1</span>
            <h3 className="method-card-title">Dados bancários</h3>
          </div>
          <div className="method-card-body bank-body">
            <div className="bank-info-grid">
              <div className="bank-info-item">
                <span className="bank-label">Banco</span>
                <span className="bank-value">Asaas I.P S.A (461)</span>
              </div>
              <div className="bank-info-item">
                <span className="bank-label">Agência</span>
                <span className="bank-value">0001</span>
              </div>
              <div className="bank-info-item">
                <span className="bank-label">Conta</span>
                <span className="bank-value">7505147-4</span>
              </div>
              <div className="bank-info-item">
                <span className="bank-label">Tipo de conta</span>
                <span className="bank-value">Conta de Pagamento</span>
              </div>
              <div className="bank-info-item">
                <span className="bank-label">Titular</span>
                <span className="bank-value">PROJETO TRANSFORMACAO</span>
              </div>
              <div className="bank-info-item">
                <span className="bank-label">CNPJ</span>
                <span className="bank-value">67.011.744/0001-82</span>
              </div>
            </div>
          </div>
        </div>

        <div className="method-card">
          <div className="method-card-header">
            <span className="method-number">2</span>
            <h3 className="method-card-title">Via PIX</h3>
          </div>
          <div className="method-card-body">
            <div className="pix-sub-section">
              <div className="sub-number-row">
                <span className="sub-number">2.1</span>
                <p><strong>Chave Pix CNPJ:</strong> {pixKey}</p>

                <div className="mobile-break" />

                <button
                  onClick={handleCopyPix}
                  className={`copy-pix-btn ${pixCopied ? 'copied' : ''}`}
                >
                  {pixCopied ? (
                    <>
                      <Check size={18} className="btn-icon" />
                      Copiada!
                    </>
                  ) : (
                    <>
                      <Copy size={18} className="btn-icon" />
                      Copiar
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pix-divider" />

            <div className="pix-sub-section">
              <div className="sub-number-row">
                <span className="sub-number">2.2</span>
                <div>
                  <p><strong>Doação direta pelo site</strong></p>
                  <p className="sub-description">Escolha abaixo um valor pré-definido ou digite o valor que deseja doar</p>
                </div>
              </div>

              <div className="preset-amounts-grid">
                {[20, 50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    className={`preset-btn ${selectedAmount === amount ? 'selected' : ''}`}
                    onClick={() => handleSelectAmount(amount)}
                  >
                    R$ {amount.toFixed(2).replace('.', ',')}
                  </button>
                ))}
              </div>

              <div className="custom-amount-wrapper">
                <div className="input-group">
                  <span className="input-prefix">R$</span>
                  <input
                    type="text"
                    id="custom-amount"
                    placeholder="00,00"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className={`custom-amount-input ${isAmountInvalid ? 'invalid' : ''}`}
                  />
                </div>
                <p className="minimum-value-note">*Valor mínimo: R$ 5,00</p>
                {isAmountInvalid && (
                  <p className="validation-error">
                    <AlertTriangle size={14} className="error-icon" />
                    Valor mínimo de doação é R$ 5,00.
                  </p>
                )}
              </div>

              <div className="payment-btn-wrapper">
                <button
                  className="payment-btn"
                  disabled={isAmountInvalid || customAmount === ''}
                  onClick={() => setShowPixModal(true)}
                >
                  Fazer pagamento
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="transparency-footnote">
          *100% das doações são destinadas às ações e obras do projeto, incluindo compra de materiais e custos necessários para a realização das reformas.
        </p>

        <section className="recorrente-section" aria-label="Doação recorrente">
          <h2 className="section-title center recorrente-title">Doação recorrente</h2>
          <p className="recorrente-text">
            Você também pode{' '}
            <strong>caminhar conosco todos os meses, contribuindo de forma recorrente</strong> e
            ajudando a dar continuidade às nossas ações. As contribuições mensais nos ajudam a
            contar com recursos de forma mais previsível e a planejar nosso trabalho com mais
            segurança.
          </p>

          <div className="recorrente-chamada">
            <h3 className="recorrente-subheading">Quer se tornar um doador recorrente?</h3>
            <p className="recorrente-instrucoes">
              É simples!{' '}
              <strong>
                Preencha o formulário abaixo com seus dados e escolha uma das opções de contribuição
                mensal.
              </strong>{' '}
              Após recebermos suas informações, entraremos em contato para orientar você sobre os
              próximos passos e realizar o cadastro da sua contribuição recorrente.
            </p>

            <div className="recorrente-btn-wrapper">
              <a
                href={FORMULARIO_DOADOR_RECORRENTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="recorrente-btn"
              >
                Quero ser doador mensal
              </a>
            </div>
          </div>
        </section>
      </section>

      {showPixModal && (
        <PixModal
          amount={numericAmount}
          onClose={() => setShowPixModal(false)}
        />
      )}
    </div>
  );
};
