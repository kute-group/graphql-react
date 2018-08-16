// App Imports
const { v4 } = require('uuid');
import models from '../../models';

// Get app by ID
export async function getById(parentValue, {id}) {
  return await models.App.findOne({where: {id}})
}

// Get all apps
export async function getAll() {
  return await models.App.findAll()
}

// Create app
export async function create(parentValue, {id, name, app, code}) {
  return await models.App.create({
    id: v4(),
    name,
    app,
    code
  })
}

// Delete app
export async function remove(parentValue, {id}) {
  return await models.App.destroy({where: {id}})
}