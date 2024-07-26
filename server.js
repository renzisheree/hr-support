import * as dotenv from 'dotenv'

dotenv.config()
import express from 'express'

const app = express()
import morgan from 'morgan'
import { nanoid } from 'nanoid'

let jobs = [
	{
		id: nanoid(),
		company: 'apple ',
		position: 'Frontend'
	},
	{
		id: nanoid(),
		company: 'Google',
		position: 'Backend'
	}
]

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(morgan('dev'))
app.use(express.json())
app.get('/', (req, res) => {
	res.send('hello ')
})
app.post('/', (req, res, next) => {
	console.log(req)
	res.json({
		message: 'data received',
		data: req.body
	})
})

app.get('/api/v1/jobs', (req, res) => {
	res.status(200)
	.json({
		success: true,
		data: jobs
	})
})

app.post('/api/v1/jobs', (req, res) => {
	const {
		company,
		position
	} = req.body
	console.log(company, position)
	if (!company || !position) {
		res.status(400)
		.json({ msg: 'please provide company and position' })
		return
	}
	const id = nanoid(10)
	const job = {
		id,
		company,
		position
	}
	jobs.push()
	res.status(200)
	.json({
		success: true,
		data: job
	})
})

const port = process.env.PORT || 5100
app.listen(port, () => {
	console.log('Server running on port ' + port)
})