import helpers from './helpers';

export const init = () => {
    const svg = document.querySelector('#root');
    svg.addEventListener('click', (e) => {
        helpers.render.drawCircle(e);
        helpers.render.smashWatch(helpers.bumps)
    });
}