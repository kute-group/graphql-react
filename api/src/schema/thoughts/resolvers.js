// App Imports
const { v4 } = require('uuid');
import models from '../../models'


// Get thoughts by ID
export async function getById(parentValue, {id}) {
  return await models.Thought.findOne({where: {id}})
}

// Get all thoughts
export async function getAll() {
  return await models.Thought.findAll()
}

// Create thought
export async function create(parentValue, {id, name, thought}) {
  return await models.Thought.create({
    id: v4(),
    name,
    thought
  })
}

// Delete thought
export async function remove(parentValue, {id}) {
  return await models.Thought.destroy({where: {id}})
}