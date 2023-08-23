import { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex('residues').insert([
    { name: 'Lâmpadas', image: 'light-bulb.svg' },
    { name: 'Pilhas e Baterias', image: 'battery.svg' },
    { name: 'Papéis e Papelão', image: 'paper.svg' },
    { name: 'Resíduos Eletrônicos', image: 'electronic.svg' },
    { name: 'Resíduos Orgânicos', image: 'organic.svg' },
    { name: 'Óleo de Cozinha', image: 'oil.svg' },
  ])
}