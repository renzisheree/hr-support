import express from 'express'

const app = express()

app.get('/', (req, res) => {
	res.send('hello ')
})

app.listen(5100, () => {
	console.log('Server running on port 5100')
})