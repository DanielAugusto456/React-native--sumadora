const UNIDADES = [
  '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
];

const ESPECIALES_10_15 = [
  'diez', 'once', 'doce', 'trece', 'catorce', 'quince',
];

const DECENAS = [
  '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta',
  'sesenta', 'setenta', 'ochenta', 'noventa',
];

const CENTENAS = [
  '', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos',
  'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos',
];

function decenasALetras(n) {
  if (n === 0) return '';
  if (n >= 1 && n <= 9) return UNIDADES[n];
  if (n >= 10 && n <= 15) return ESPECIALES_10_15[n - 10];
  if (n === 16) return 'dieciséis';
  if (n === 17) return 'diecisiete';
  if (n === 18) return 'dieciocho';
  if (n === 19) return 'diecinueve';
  if (n === 20) return 'veinte';
  if (n >= 21 && n <= 29) {
    const veinti = {
      1: 'veintiuno',
      2: 'veintidós',
      3: 'veintitrés',
      4: 'veinticuatro',
      5: 'veinticinco',
      6: 'veintiséis',
      7: 'veintisiete',
      8: 'veintiocho',
      9: 'veintinueve',
    };
    return veinti[n % 10];
  }
  const decena = Math.floor(n / 10);
  const unidad = n % 10;
  if (unidad === 0) return DECENAS[decena];
  return `${DECENAS[decena]} y ${UNIDADES[unidad]}`;
}

export function numeroALetras(num) {
  if (!Number.isInteger(num)) return 'Ingresa un número entero.';
  if (num < 1 || num > 1000) return 'El número debe estar entre 1 y 1000.';
  if (num === 100) return 'cien';
  if (num === 1000) return 'mil';

  const centena = Math.floor(num / 100);
  const resto = num % 100;

  let texto = '';
  if (centena > 0) {
    texto = CENTENAS[centena];
    if (resto > 0) texto += ` ${decenasALetras(resto)}`;
    return texto;
  }
  if (num < 10) return UNIDADES[num];
  return decenasALetras(num);
}
