const Joi = require("joi")

async function todo(req, res, next) {
  try {
    const { body } = req

    const schema = Joi.object({
      title: Joi.string(),
      description: Joi.string(),
      status: Joi.string().valid("todo", "doing", "done"),
      isFavorite: Joi.boolean(),
      containerColor: Joi.string(),
    });

    const { error } = schema.validate(body)

    if (error) {
      return res.status(400).json({ status: "Error", msg: error.details[0].message })
    } else {
      next()
      return
    }
  } catch (error) {
    res.status(400).json({ status: "Error", msg: error})
  }
}

module.exports = todo
