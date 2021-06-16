export const support = {
    lsGet: name => localStorage.getItem(name),
    lsSet: (name, item) => {
        if (typeof item === 'string') return localStorage.setItem(name, item);
        localStorage.setItem(name, JSON.stringify(item));
    },
    convert: (num, primary, secondary) => {
        const lengthSystem = {
            meters: {
                meters: 1,
                miles: 1609.344,
                yards: 1.093613,
                feet: 3.28084,
                versts: 1066.8,
            },
            miles: {
                meters: 1609.344,
                miles: 1,
                yards: 1760,
                feet: 0.003281,
                versts: 1.50857,
            },
            yards: {
                meters: 0.9144,
                miles: 0.000568182,
                yards: 1,
                feet: 3,
                versts: 0.000857143,
            },
            feet: {
                meters: 0.3048,
                miles: 0.000189394,
                yards: 0.333333,
                feet: 1,
                versts: 0.000285714,
            },
            versts: {
                meters: 1066.8,
                miles: 0.662879,
                yards: 1166.67,
                feet: 3500,
                versts: 1,
            },
        };
        return (+num * lengthSystem[primary][secondary]).toString();
    },
};
