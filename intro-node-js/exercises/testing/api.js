const express = require('express')
const morgan = require('morgan')
const { urlencoded, json } = require('body-parser')
const users = require('./users')
const app = express()

app.use(morgan('dev'))
app.use(urlencoded({ extended: true }))
app.use(json())

app.get('/user/:id', async (req, res) => {
  const id = req.params.id
  // should get user by given id in route param
  try {
    const user = await users.findUser(Number(id))
    res.status(200).send(user)
  } catch (error) {
    console.log('what a 💩', { req, error })
  }
})

app.delete('/user/:id', async (req, res) => {
  const id = req.params.id
  await users.deleteUser(id)
  res.status(201).send({ id })
})

module.exports = app
