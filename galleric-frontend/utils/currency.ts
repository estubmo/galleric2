enum CURRENCIES {
    EUR = 'EUR',
    USD = 'USD',
    NOK = 'NOK'
}

const getFormattedPriceString = (price: number, currency: CURRENCIES): string =>
    new Intl.NumberFormat('en-EN', { style: 'currency', currency: currency }).format(price);

const countDecimals = (num: number) => {
    if (Math.floor(num.valueOf()) === num.valueOf()) return 0;
    return num.toString().split('.')[1].length || 0;
};

const round = (num: number, decimals: number): number => {
    const d = Math.pow(10, decimals);
    return Math.round((num + Number.EPSILON) * d) / d;
};

const formatPriceForStripe = (price: number): number => {
    return +price.toFixed(2).split('.').join('');
};
export { countDecimals, CURRENCIES, formatPriceForStripe, getFormattedPriceString, round };
