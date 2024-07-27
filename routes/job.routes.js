import { Router } from 'express'

const router = Router()
import { getJobs, getJob, deleteJob, updateJob, createJob } from '../controllers/job.controller.js'

router.route('/')
.get(getJobs)
.post(createJob)

router.route('/:id')
.get(getJob)
.delete(deleteJob)
.patch(updateJob)

export default router