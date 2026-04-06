/**
 * Cálculos de ahorro energético
 */

export interface SavingsCalculation {
  monthlyBill: number;
  isBusiness: boolean;
  yearlySaving: number;
  monthlySaving: number;
  percentage: number;
}

const SAVINGS_RATES = {
  home: 0.22, // 22% ahorro hogar
  business: 0.18, // 18% ahorro negocio
} as const;

/**
 * Calcula el ahorro estimado basado en la factura mensual
 * @param monthlyBill - Factura mensual en euros
 * @param isBusiness - Si es negocio (true) o hogar (false)
 * @returns Resultado del cálculo con ahorro mensual y anual
 */
export function calculateSavings(
  monthlyBill: number,
  isBusiness: boolean = false
): SavingsCalculation {
  const rate = isBusiness ? SAVINGS_RATES.business : SAVINGS_RATES.home;
  const monthlySaving = Math.max(0, monthlyBill * rate);
  const yearlySaving = monthlySaving * 12;
  const percentage = Math.round(rate * 100);

  return {
    monthlyBill: Math.round(monthlyBill),
    isBusiness,
    yearlySaving: Math.round(yearlySaving),
    monthlySaving: Math.round(monthlySaving),
    percentage,
  };
}

/**
 * Formatea un número como euros
 */
export function formatEuros(value: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Formatea un número con separador de miles
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('es-ES').format(value);
}
