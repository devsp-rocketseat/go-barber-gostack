import express from 'express'

const routes = express()

routes.post('/users', (request, response) => {
    const { name, email } = request.body

    const user = {
        name,
        email
    }

    return response.json(user)
})

export default routes