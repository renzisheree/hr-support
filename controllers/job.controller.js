import { nanoid } from 'nanoid'
import JobModel from '../models/job.model.js'
import jobModel from '../models/job.model.js'

export const getJob = async (req, res) => {
	const { id } = req.params
	const job = await JobModel.findById(id)
	
	if (!job) {
		return res.status(404)
		.json({
			success: false,
			msg: `no job was found with ${id}`,
		})
	}
	
	res.status(200)
	.json(
		{
			success: true,
			data: job
		}
	)
}

export const getJobs = async (req, res) => {
	const jobs = await JobModel.find({})
	res.status(200)
	.json({
		success: true,
		data: jobs
	})
}
export const createJob = async (req, res) => {
	
	const job = await jobModel.create(req.body)
	res.status(201)
	.json({
		success: true,
		data: job
	})
}

export const updateJob = async (req, res) => {
	const { id } = req.params
	const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, { new: true })
	if (!updatedJob) {
		return res.status(400)
		.json({
			success: false,
			msg: `no job was found with ${id}`,
		})
	}
	res.status(200)
	.json({
		success: true,
		msg: 'Job modified',
		data: updatedJob
	})
}

export const deleteJob = async (req, res) => {
	const { id } = req.params
	const job = await JobModel.findByIdAndDelete(id)
	
	if (!job) {
		return res.status(404)
		.json({
			success: false,
			msg: `no job was found with ${id}`,
		})
	}
	
	res.status(200)
	.json({
		success: true,
		msg: 'Job deleted',
		data: {}
	})
}