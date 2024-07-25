import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { MdAdminPanelSettings, MdQueryStats } from 'react-icons/md'
import { IoMdStats } from 'react-icons/io'

const links = [
	{
		text: 'add job',
		path: '.',
		icon: <FaWpforms/>
		
	},
	{
		text: 'all job',
		path: 'all-jobs',
		icon: <MdQueryStats/>
		
	},
	{
		text: 'stats',
		path: 'stats',
		icon: <IoMdStats/>
	},
	{
		text: 'profile',
		path: 'profile',
		icon: <ImProfile/>
	},
	{
		text: 'admin',
		path: 'admin',
		icon: <MdAdminPanelSettings/>
		
	}
]
export default links