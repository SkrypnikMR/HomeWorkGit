import * as actions from './actions';

export const getCurrency = () => async (dispatch) => {
    const responce = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const data = await responce.json();
    const [USD, UER, RUB] = data;
    const newCurrency = {
        usd: USD.buy.substring(0, 6),
        uer: UER.buy.substring(0, 6),
        rub: RUB.buy.substring(0, 6),
    };
    dispatch(actions.loadCurrency(newCurrency));
};
