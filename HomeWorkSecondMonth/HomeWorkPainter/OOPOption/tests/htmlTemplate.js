export const htmlTemplate = `<main>
<div class="main__body">
    <div class="body__pallete">
        <div class="pallete__header">
          <h1 class="header__text">Simple Paint</h1>
        </div>
        <div class="pallete__body">
          <div class="pallete__colors">
              <p class="colors__title">Change your color</p>
              <input class="colors__body" type="color" value="#00B1FF"/>
          </div>
          <div class="pallete__slider">
            <div class="slider__title"><p class="tittle__text">Brash size: 1 px</p></div>
            <div class="slider__body"><input type="range" class="slider__input" value='1'/></div>
          </div>
          <div class="pallete__buttons">
            <button class="buttons__restore">&#8634;</button>
            <button class="buttons__clear">Clear</button>
            <button class="buttons__download-image">
            </button>
            <button class="buttons__download-json">
             </button>
          </div>
        </div>
    </div>
        <canvas width="1580" height="500"></canvas>
</div>
</div>
</main>`;
