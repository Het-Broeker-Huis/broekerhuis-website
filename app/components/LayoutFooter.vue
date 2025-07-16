<script>
import BroekerHuisWordMark from '~/assets/icons/het-broeker-huis-wordmark.svg'
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <BroekerHuisWordMark :font-controlled="false" class="logo__wordmark footer__logo" />
      <div class="footer__contact">
        <a href="mailto:contact@broekerhuis.nl" class="footer__link footer__link--large" target="_blank"
          rel="noopener noreferrer">contact@broekerhuis.nl</a>
        <a href="tel:+31204031314" class="footer__link footer__link--large" target="_blank"
          rel="noopener noreferrer">020-4031314</a>


      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__column footer__column--wide">
        <ProseP>Het Broeker Huis is sinds 1775 het hart van Broek in Waterland. Vandaag zijn we restaurant,
          trouwlocatie, feestlocatie vergaderlocatie en B&B in één. Een monumentaal pand in het mooiste dorp van
          Nederland - vlakbij Amsterdam. Kom eten, vieren, werken, vergaderen en slapen. Ongedwongen, zonder poeha, op
          jouw manier.
        </ProseP>
      </div>

      <div class="footer__column">
        <h4 class="footer__title">Locatie & contact</h4>
        <ProseP>Het Broeker Huis <br />
          Leeteinde 16 <br />
          1151 AL Broek in Waterland <br />
          <a href="tel:+31204031314" target="_blank" rel="noopener noreferrer">020 403 1314</a><br />
          <br />
          <a href="mailto:contact@broekerhuis.nl">contact@broekerhuis.nl</a>
        </ProseP>
        <h4 class="footer__title">Ook handig</h4>
        <ul>
          <li class="footer__item"><nuxt-link class="footer__link" to="/contact-parkeren">Parkeren in broek in
              Waterland</nuxt-link></li>
          <li class="footer__item"><nuxt-link class="footer__link" to="/contact-parkeren">Toegankelijkheid</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="footer__column">
        <h4 class="footer__title">Snel naar</h4>
        <ul>
          <li class="footer__item"><nuxt-link class="footer__link" to="/restaurant">Restaurant</nuxt-link></li>
          <li class="footer__item"><nuxt-link class="footer__link" to="/trouwen-feesten/trouwen">Trouwen &
              Feesten</nuxt-link></li>
          <li class="footer__item"><nuxt-link class="footer__link" to="/zakelijk">Zakelijk</nuxt-link></li>
          <li class="footer__item"><nuxt-link class="footer__link" to="/het-broeker-huis">Over ons</nuxt-link></li>
          <li class="footer__item"><nuxt-link class="footer__link" to="/broek-in-waterland">Broek in
              Waterland</nuxt-link></li>
          <li class="footer__item"><nuxt-link class="footer__link" to="/voor-broekers">Voor Broekers</nuxt-link></li>
        </ul>
      </div>

      <div class="footer__column">
        <h4 class="footer__title">Openingstijden Het Broeker Huis & De Broeker Huiskamer</h4>
        <ul>
          <li class="footer__item"><em>Maandag - gesloten</em></li>
          <li class="footer__item"><em>Dinsdag - gesloten</em></li>
          <li class="footer__item">Woensdag - 10:00 - 18:00</li>
          <li class="footer__item">Donderdag - 10:00 - 00:00</li>
          <li class="footer__item">Vrijdag - 10:00 - 01:00</li>
          <li class="footer__item">Zaterdag 10:00 - 01:00</li>
          <li class="footer__item">Zondag 10:00 - 18:00</li>
        </ul>

        <ProseP><em>Het Broeker Huis bezichtigen? Dat kan altijd, ook op maandag & dinsdag. <a href="tel:+31204031314"
              class="footer__link" target="_blank" rel="noopener noreferrer">Bel</a> of <a target="_blank"
              class="footer__link" rel="noopener noreferrer" href="mailto:contact@broekerhuis.nl">mail</a> ons daarvoor
            even</em></ProseP>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  display: grid;
  grid-column: 2 / -2;
  grid-template-columns: subgrid;
  margin: 96px 0 48px;

  @media (width > 768px) {
    margin: 168px 0 90px;
    grid-column: 5 / -5;
  }

  &__top {
    grid-column: 1 / -1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--color-primary, #2E322D);
  }

  &__logo {
    display: none;
    flex: 0 0 calc(100vw / 26 * 4);
    grid-column: 1 / span 4;
    color: var(--color-primary, #2E322D);

    @media (width > 768px) {
      display: block;
    }
  }

  &__contact {
    grid-column: span 6 / -1;
    display: flex;
    gap: 0.25rem;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;

    @media (width > 768px) {
      align-items: flex-end;
    }
  }

  &__link {
    font-family: var(--base-font-family);
    color: var(--color-primary, #2E322D);

    &:hover {
      text-decoration: underline;
    }

    &--large {
      text-decoration: none;
      font-family: var(--title-font-family);
      font-size: 2rem;
    }
  }

  &__icon {
    width: 1.25rem;
    aspect-ratio: 1;

    &--instagram {
      width: 20px;
      height: 20px;
      fill: var(--color-primary, #2E322D);
    }
  }

  &__opening-hours {
    text-align: right;
    max-width: 440px;
    margin-top: 1rem;

    p {
      margin-bottom: 1rem;
    }
  }

  &__bottom {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    row-gap: 2rem;

    @media (width > 768px) {
      gap: 1rem;
    }
  }

  &__column {
    grid-column: 2 / -2;

    @media (width > 768px) {
      grid-column: span 4;
    }

  }

  &__title {
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
}
</style>