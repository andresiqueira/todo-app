const knex = require('../db/knexconfig')

class Todo {
  async getAllTodo(_req, res) {

    try {
      const data = await knex('todo')

      if (data.length === 0) {
        throw "Database is empty"
      }

      res.status(200).json({ message: "Get All todo", data: data })

    } catch (error) {
      res.status(403).json({ status: "Error", error: error })
    }
  }

  async getOneTodo(req, res) {
    const { params } = req

    try {
      const data = await knex('todo').where({ id: params.id })

      if (data.length === 0) {
        throw "Data no exist"
      }

      res.status(200).json({ message: "Get todo", data: data[0] })

    } catch (error) {
      res.status(404).json({ status: "Error", error: error })
    }
  }

  async createTodo(req, res) {
    const { body } = req

    const data = {
      title: body.title,
      description: body.description
    }

    try {
      await knex('todo').insert(data)
      res.status(200).json({ status: 'Created with success' })

    } catch (error) {
      res.status(403).json({ status: "Error", error: error })
    }
  }

  async updateTodo(req, res) {
    const { params, body } = req

    const reqData = {
      title: body.title,
      description: body.description
    }

    try {
      const resData = await knex('todo').where({ id: params.id }).update(reqData)

      if (resData === 0) {
        throw "Data no exist"
      }

      res.status(200).json({ message: "Todo was updated" })

    } catch (error) {
      res.status(404).json({ status: "Error", error: error })
    }
  }

  async deleteTodo(req, res) {
    const { params } = req

    try {
      const data = await knex('todo').where({ id: params.id }).delete()
      
      if (data === 0) {
        throw "Data no exist"
      }

      res.status(200).json({ message: "Todo was deleted" })

    } catch (error) {
      res.status(404).json({ status: "Error", error: error })
    }
  }
}

module.exports = new Todo;