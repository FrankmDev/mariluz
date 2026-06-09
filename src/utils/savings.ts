import { siteConfig } from '../config/site';

export interface SavingsResult {
  monthlyBill: number;
  yearlyBill: number;
  estimatedMonthlySaving: number;
  estimatedYearlySaving: number;
  estimatedYearlySavingMax: number;
  rate: number;
  hasSaving: boolean;
}

export function calculateSavings(
  monthlyBill: number,
  isBusiness: boolean = false
): SavingsResult {
  const rate = isBusiness ? siteConfig.savings.businessRate : siteConfig.savings.homeRate;
  const yearlyBill = monthlyBill * 12;
  const estimatedMonthlySaving = monthlyBill * rate;
  const estimatedYearlySaving = estimatedMonthlySaving * 12;
  const estimatedYearlySavingMax = Math.min(estimatedYearlySaving * 1.5, siteConfig.savings.maxYearly);
  const hasSaving = estimatedYearlySaving > siteConfig.savings.minSaving;

  return {
    monthlyBill,
    yearlyBill,
    estimatedMonthlySaving,
    estimatedYearlySaving,
    estimatedYearlySavingMax,
    rate,
    hasSaving,
  };
}

export function formatEuros(value: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('es-ES').format(Math.round(value));
}
