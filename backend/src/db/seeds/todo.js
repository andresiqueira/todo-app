/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // Deletes ALL existing entries
  try {
    await knex('todo').del()
    await knex('todo').insert([
      {
        id: 1,
        title: 'Revisar Orçamentos',
        description: 'Revistar detalhes do orçamento antes do envio',
        is_favorite: true, 
        status: 'doing',
        container_color: 'red',
        created_at: new Date(),
      },
    ]);
  }
  catch (error) {
    console.log('seed error: ', error)
  }
}
