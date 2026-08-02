/**
 * Gerador de payload BR Code Pix (estático) conforme especificação EMV do Banco Central.
 * Referência: https://www.bcb.gov.br/content/estabilidadefinanceira/pix/Regulamento_Pix/II_ManualdePadroesparaIniciacaodoPix.pdf
 */

function tlv(id: string, value: string): string {
  const length = value.length.toString().padStart(2, '0');
  return `${id}${length}${value}`;
}

function crc16(payload: string): string {
  const polynomial = 0x1021;
  let crc = 0xFFFF;

  const bytes = new TextEncoder().encode(payload);
  for (const byte of bytes) {
    crc ^= byte << 8;
    for (let i = 0; i < 8; i++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ polynomial;
      } else {
        crc <<= 1;
      }
      crc &= 0xFFFF;
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, '0');
}

interface PixPayloadParams {
  pixKey: string;
  merchantName: string;
  merchantCity: string;
  amount: number;
  description?: string;
  txid?: string;
}

export function generatePixBrCode({
  pixKey,
  merchantName,
  merchantCity,
  amount,
  description,
  txid = '***',
}: PixPayloadParams): string {
  const payloadFormatIndicator = tlv('00', '01');

  const gui = tlv('00', 'br.gov.bcb.pix');
  const key = tlv('01', pixKey);
  const desc = description ? tlv('02', description) : '';
  const merchantAccountInfo = tlv('26', `${gui}${key}${desc}`);

  const merchantCategoryCode = tlv('52', '0000');

  const transactionCurrency = tlv('53', '986');

  const transactionAmount = tlv('54', amount.toFixed(2));

  const countryCode = tlv('58', 'BR');

  const normalizedName = merchantName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .substring(0, 25);
  const merchantNameField = tlv('59', normalizedName);

  const normalizedCity = merchantCity
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .substring(0, 15);
  const merchantCityField = tlv('60', normalizedCity);

  const referenceLabel = tlv('05', txid);
  const additionalDataField = tlv('62', referenceLabel);

  const payloadWithoutCRC =
    payloadFormatIndicator +
    merchantAccountInfo +
    merchantCategoryCode +
    transactionCurrency +
    transactionAmount +
    countryCode +
    merchantNameField +
    merchantCityField +
    additionalDataField +
    '6304';

  const crcValue = crc16(payloadWithoutCRC);

  return payloadWithoutCRC + crcValue;
}
