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
export const getJob = (req, res) => {
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
}

export const getJobs = (req, res) => {
	res.status(200)
	.json({
		success: true,
		data: jobs
	})
}
export const createJob = (req, res) => {
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
}

export const updateJob = (req, res) => {
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
}

export const deleteJob = (req, res) => {
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
}