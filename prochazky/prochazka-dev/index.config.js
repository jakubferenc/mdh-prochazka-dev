const typObjektu = {
  settings: {
    autoGenerateId: false,
    slug: 'typ-objektu',
  },

  items: [
    { id: 'kniha', title: 'kniha' },
    { id: 'umelecke-dilo', title: 'umělecké dílo' },
    { id: 'model-pro-ucely-vystavy', title: 'model pro účely výstavy' },
    { id: 'diplom-zdravice', title: 'diplom, zdravice' },
    { id: 'medaile', title: 'medaile' },
    { id: 'plakát', title: 'plakát' },
    { id: 'dobová fotografie', title: 'dobová fotografie' },
    { id: 'předmět denní potřeby', title: 'předmět denní potřeby' },
    { id: 'nástroj', title: 'nástroj' },
    { id: 'nábytek', title: 'nábytek' },
  ],
};

const mapovaniUkolu = {
  q01_01: {
    title: 'Jaký typ předmětu jste vybrali? vyberte z následujících možností',
    type: 'array',
    itemsObj: typObjektu,
    limit: 1,
    inline: false,
  },
  q01_02: {
    title: 'Popište předmět',
    type: 'text',
  },
  q01_03: {
    title: 'Vyfoťte předmět',
    type: 'image',
    pocetFotek: 3,
  },
  q01_04: {
    title: 'Nahrajte záznam místa',
    type: 'audio',
  },
};

export default {
  id: '2513b92a-0fbd-424b-ac79-70b96d11768f', // UUID 4
  nazev: 'Testovací procházka pro vývoj',
  slug: 'prochazka-dev',
  autori: ['Jakub Albert test'],
  metodika: 'metodika_slepá procházka.pdf',
  obrazky: {
    thumb: 'thumb.jpg',
    intro: 'intro.jpg',
  },
  typObjektu,
  mapovaniUkolu,
};
