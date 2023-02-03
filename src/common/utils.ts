/**
 * Returns string like `23/09`
 * @param timeSrc: Date | String
 */

export const getDate = (timeSrc: Date | string): string => {
  const time = typeof timeSrc === 'object' ? timeSrc : new Date(timeSrc);
  return `${time.getDate()}/${('0' + (time.getMonth() + 1)).slice(-2)}`;
};

/**
 * Returns string like `8:00 PM`
 * @param timeSrc: Date | String
 */

export const formatTime = (timeSrc: Date | string): string => {
  const time =
    typeof timeSrc === 'object' ? timeSrc : new Date(`1970/01/01 ${timeSrc}`);
  return time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};

/**
 * Returns 6200 => 62 EUR, 6210 => 62.10 EUR
 * @param quantity: Number
 * @param currency: String
 */

export const humanizeWithOptionalCents = (
  quantity: number,
  currency?: string
): string => {
  const base = 100; // cents
  const humanized =
    quantity % base === 0 ? quantity / base : (quantity / base).toFixed(2);
  return currency ? `${humanized} ${currency}` : humanized.toString();
};

/**
 * Returns 6200 => 62.00, 6210 => 62.10
 * @param price: Number
 */

export const humanizePrice = (price: number) => (price / 100).toFixed(2);

export const areDatesTheSame = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const openInNewTab = (url: string) => window.open(url, '_blank')?.focus();

// TODO: divide variables and functions

export const timetable = {
  '2309': '6 p.m. – 6.00 a.m.',
  '2409': '6 p.m. – 6.00 a.m.',
  '2509': '6 p.m – 12 a.m.',
  '3009': '6 p.m. – 5.00 a.m.',
  '0110': '6 p.m. – 5.00 a.m.',
  '0210': '6 p.m – 12 a.m.',
};

export const EUR = 'EUR';

export const FEST_NAME = 'BEON1X';

export const FEST_LOCATION_SHORT = 'CTO beach, Pyla';

export const FEST_LOCATION = `Cyprus, Larnaca district, ${FEST_LOCATION_SHORT}`;

export const FULL_FEST_NAME = `${FEST_NAME} Open Mind Music Festival`;

export const ALTERNATIVE_FULL_FEST_NAME = `${FEST_NAME} Electronic music festival in Europe`;

export const SHORTED_FEST_NAME = `${FEST_NAME} Music Festival`;

export const SEO_FRIENDLY_FEST_NAME = 'BEONIX';

export const SEO_FRIENDLY_FULL_FEST_NAME = `${SEO_FRIENDLY_FEST_NAME} Electronic music festival`;

export const SEO_FRIENDLY_SHORTED_FEST_NAME = `${SEO_FRIENDLY_FEST_NAME} Music Festival`;

export const MAP_COORDINATES = { lat: 34.978778, lng: 33.700361 };

export const MAP_ID_DARK = 'aadff0c4220f6698';

export enum PaymentServices {
  Stripe = 'stripe',
  Ecommpay = 'ecommpay',
}
