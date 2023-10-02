const knex = require('../db/knexconfig')
const queryBuilder = require('../utils/queryBuilder')

class Todo {
  async getAllTodo(req, res) {
    const { query } = req
    const queryData = await queryBuilder(query)

    console.log(queryData)

    try {
      const data = await knex('todo')
      .where({...queryData})
      .orderBy([{ column: 'is_favorite', order: 'desc' }, { column: 'created_at', order: 'desc'}])

      res.status(200).json({ message: "Get all todo", data: data })

    } catch (error) {
      res.status(400).json({ status: "Error", error: error })
    }
  }

  async getOneTodo(req, res) {
    const { params } = req

    try {
      const data = await knex('todo').where({ id: params.id })

      if (data.length === 0) {
        throw "Data does not exist"
      }

      res.status(200).json({ message: "Get todo", data: data[0] })

    } catch (error) {
      res.status(400).json({ status: "Error", error: error })
    }
  }

  async createTodo(req, res) {
    const { body } = req

    const data = {
      title: body.title,
      description: body.description,
      status: body.status,
      is_favorite: body. isFavorite,
      container_color: body.containerColor,
      created_at: new Date()
    }

    try {
      await knex('todo').insert(data)
      res.status(200).json({ status: 'Created with success' })

    } catch (error) {
      res.status(400).json({ status: "Error", error: error })
    }
  }

  async updateTodo(req, res) {
    const { params, body } = req

    const data = {
      title: body.title,
      description: body.description,
      status: body.status,
      is_favorite: body. isFavorite,
      container_color: body.containerColor,
      updated_at: new Date()
    }

    try {
      const prevData = await knex('todo').where({ id: params.id }).update(data)

      if (prevData === 0) {
        throw "Data does not exist"
      }

      res.status(200).json({ message: "Updated with success" })

    } catch (error) {
      res.status(400).json({ status: "Error", error: error })
    }
  }

  async deleteTodo(req, res) {
    const { params } = req

    try {
      const data = await knex('todo').where({ id: params.id }).delete()
      
      if (data === 0) {
        throw "Data does not exist"
      }

      res.status(200).json({ message: "Deleted with success" })

    } catch (error) {
      res.status(400).json({ status: "Error", error: error })
    }
  }
}

module.exports = new Todo