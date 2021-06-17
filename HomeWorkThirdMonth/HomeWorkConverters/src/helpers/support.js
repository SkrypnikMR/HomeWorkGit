export const support = {
    lsGet: (name) => {
        const data = localStorage.getItem(name);
        return data?.charAt(0) === '[' ? JSON.parse(data) : data;
    },
    lsSet: (name, item) => (typeof item === 'string' ? localStorage.setItem(name, item) : localStorage.setItem(name, JSON.stringify(item))),
    convertLengths(num, primary, secondary) {
        const lengthSystem = {
            meters: {
                meters: 1,
                miles: 1609.344,
                yards: 1.09361,
                foots: 3.28084,
                versts: 1066.8,
            },
            miles: {
                meters: 1609.344,
                miles: 1,
                yards: 1760,
                foots: 0.00328,
                versts: 1.50857,
            },
            yards: {
                meters: 0.9144,
                miles: 0.00056,
                yards: 1,
                feet: 3,
                versts: 0.00085,
            },
            feet: {
                meters: 0.3048,
                miles: 0.000189394,
                yards: 0.333333,
                foots: 1,
                versts: 0.000285714,
            },
            versts: {
                meters: 1066.8,
                miles: 0.66287,
                yards: 1166.67,
                foots: 3500,
                versts: 1,
            },
        };
        let result = (+num * lengthSystem[primary][secondary]);
        result = Number.isInteger(result) ? result : result.toFixed(5);
        return result.toString();
    },
    convertCurrency(num, currency, to) {
        let result = (+num / +currency[to]);
        result = Number.isInteger(result) ? result : result.toFixed(5);
        return result.toString();
    },
    validateInput(value) {
        if (value.includes(',')) value = value.replace(',', '.');
        if (value.slice(-1) === '.') value = value.concat('0');
        if (!value.length) return { inValid: Number.isNaN(Number(value)), newQuantity: value };
        return { inValid: Number.isNaN(Number(value)), newQuantity: value };
    },
};
