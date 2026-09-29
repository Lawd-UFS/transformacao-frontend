import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, Check, X } from 'lucide-react';
import { generatePixBrCode } from '../../utils/pixBrCode';
import './PixModal.css';

interface PixModalProps {
  amount: number;
  onClose: () => void;
}

export const PixModal: React.FC<PixModalProps> = ({ amount, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const brCode = generatePixBrCode({
    pixKey: '67011744000182',
    merchantName: 'PROJETO TRANSFORMACAO',
    merchantCity: 'Aracaju',
    amount,
    description: 'Doacao Projeto Transformacao',
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(brCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch((err) => {
        console.error('Erro ao copiar código Pix:', err);
      });
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="pix-modal-overlay" onClick={handleOverlayClick}>
      <div className="pix-modal">
        <button className="pix-modal-close" onClick={onClose} aria-label="Fechar">
          <X size={22} />
        </button>

        <div className="pix-modal-header">
          <h3 className="pix-modal-title">Pagamento via Pix</h3>
          <p className="pix-modal-amount">
            R$ {amount.toFixed(2).replace('.', ',')}
          </p>
        </div>

        <div className="pix-modal-body">
          <div className="pix-modal-qr-container">
            <div className="pix-modal-qr-wrapper">
              <QRCodeSVG
                value={brCode}
                size={220}
                level="M"
                bgColor="#FFFFFF"
                fgColor="#04328B"
                includeMargin
              />
            </div>
            <p className="pix-modal-qr-instruction">
              Escaneie o QR Code acima com o app do seu banco
            </p>
          </div>

          <div className="pix-modal-divider">
            <span>ou</span>
          </div>

          <div className="pix-modal-copypaste">
            <p className="pix-modal-copypaste-label">Copie o código Pix:</p>
            <div className="pix-modal-code-box">
              <code className="pix-modal-code">{brCode}</code>
            </div>
            <button
              className={`pix-modal-copy-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Código copiado!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copiar código Pix
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
