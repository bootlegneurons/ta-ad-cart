const audFormatter = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD'});

export const formatAud = (amount: number): string => audFormatter.format(amount);