import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema({
	company: String,
	position: String,
	jobStatus: {
		type: String,
		enum: [
			'Phỏng vấn',
			'Từ chối',
			'Chờ'
		],
		default: 'Chờ'
	},
	jobType: {
		type: String,
		enum: [
			'Toàn thời gian',
			'Bán thời gian',
			'Thực tập'
		],
		default: 'Toàn thời gian'
	},
	JobLocation: {
		type: String,
		default: 'Thành phố...'
	}
}, { timestamps: true })

export default mongoose.model('Job', JobSchema)