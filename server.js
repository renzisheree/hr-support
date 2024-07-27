import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { nanoid } from 'nanoid'

dotenv.config()

const app = express()

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
	jobs.push(job)
	res.status(201)
	.json({
		success: true,
		data: job
	})
})

app.get('/api/v1/jobs/:id', (req, res) => {
	const { id } = req.params
	const job = jobs.find((job) => job.id === id)
	
	if (!job) {
		return res.status(404)
		.json({
			success: false,
			msg: `no job was found with ${id}`,
		})
	}
	
	res.status(200)
	.json(job)
})

app.patch('/api/v1/jobs/:id', (req, res) => {
	const { id } = req.params
	const {
		company,
		position
	} = req.body
	if (!company || !position) {
		return res.status(400)
		.json({
			success: false,
			msg: 'Please provide company and position'
		})
	}
	const job = jobs.find((job) => job.id === id)
	
	if (!job) {
		return res.status(404)
		.json({
			success: false,
			msg: `no job was found with ${id}`,
		})
	}
	job.company = company
	job.position = position
	res.status(200)
	.json({
		success: true,
		msg: 'Job modified',
		data: job
	})
})

app.delete('/api/v1/jobs/:id', (req, res) => {
	const { id } = req.params
	const job = jobs.find((job) => job.id === id)
	
	if (!job) {
		return res.status(404)
		.json({
			success: false,
			msg: `no job was found with ${id}`,
		})
	}
	jobs = jobs.filter((job) => job.id !== id)
	res.status(200)
	.json({
		success: true,
		msg: 'Job deleted',
		data: jobs
	})
})
const port = process.env.PORT || 5100
app.listen(port, () => {
	console.log('Server running on port ' + port)
})