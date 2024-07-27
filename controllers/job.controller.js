import JobModel from '../models/job.model.js'
import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/customErrors.js'

export const getJob = async (req, res) => {
	const { id } = req.params
	const job = await JobModel.findById(id)
	
	if (!job) {
		throw new NotFoundError(`no job was found with ${id}`)
	}
	
	res.status(StatusCodes.OK)
	.json(
		{
			success: true,
			data: job
		}
	)
}

export const getJobs = async (req, res) => {
	const jobs = await JobModel.find({})
	res.status(StatusCodes.OK)
	.json({
		success: true,
		data: jobs
	})
}
export const createJob = async (req, res) => {
	
	const job = await JobModel.create(req.body)
	res.status(StatusCodes.CREATED)
	.json({
		success: true,
		data: job
	})
}

export const updateJob = async (req, res) => {
	const { id } = req.params
	const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, { new: true })
	if (!updatedJob) {
		throw new NotFoundError(`no job was found with ${id}`)
	}
	res.status(StatusCodes.OK)
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
		throw new NotFoundError(`no job was found with ${id}`)
	}
	
	res.status(StatusCodes.OK)
	.json({
		success: true,
		msg: 'Job deleted',
		data: {}
	})
}