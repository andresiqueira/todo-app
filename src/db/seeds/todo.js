/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // Deletes ALL existing entries
  try {
    await knex('todo').del()
    await knex('todo').insert([
      { id: 1, title: 'Revisar Orçamentos', description: 'detalhes do orçamento' },
      { id: 2, title: 'Atender cliente 1', description: 'executar rotina' },
      { id: 3, title: 'Atender cliente 2', description: 'executar reparo' },
    ]);
  }
  catch (err) {
    console.log('seed error: ', err)
  }
};
