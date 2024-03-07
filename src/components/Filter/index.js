import { Component } from 'pet-dex-utilities';
import './index.scss';

const MockedApiService = {
  getFilter: () => Promise.resolve([]),
};

const events = [];

/*
  object filterOptions = {
    boldText: string,
    regularText: string,
    inputPlaceholder: string,
    endpoint: string,
    options: [
      {
        label: string,
        type: radio || checkbox,
        values[]: string,
      },
    ],
  }
*/

const html = `
  <div class="filter">
    <label class="filter__label">
        <p><b class="filter__label__bold" data-select="boldText"></b></p>
        <p class="filter__label__regular" data-select="regularText"></p>
    </label>
    <input class="filter__input" type="text" data-select="input-text" placeholder="" />
    <button class="filter__button">Filtrar</button>
  </div>
`;

export default function Filter(filterOptions) {
  Component.call(this, { html, events });

  this.filterOptionsMock = filterOptions || {
    boldText: 'Qual é a raça do seu animal de estimação?',
    regularText: 'Deixe-nos saber que tipo e o seu animal de estimação',
    inputPlaceholder: 'Pesquise por uma espécie',
  };

  this.selected.get('boldText').innerText = this.filterOptionsMock.boldText;
  this.selected.get('regularText').innerText = this.filterOptionsMock.regularText;
  this.selected.get('input-text').placeholder = this.filterOptionsMock.inputPlaceholder;
}

Filter.prototype = Object.assign(
  Filter.prototype,
  Component.prototype,
  {
  },
);
