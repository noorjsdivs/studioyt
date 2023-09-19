export const schema = {
  types: [{
    name: 'Attrezzatura',
    type: 'document',
    title: 'Attrezzatura',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nome'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Descrizione'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Immagine'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Prezzo'
      }
    ]
  }],
}

