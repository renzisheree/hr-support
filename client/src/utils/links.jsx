import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { MdAdminPanelSettings, MdQueryStats } from 'react-icons/md'

const links = [
	{
		text: 'add job',
		path: '/',
		icon: <FaWpforms/>
		
	},
	{
		text: 'stats',
		path: 'stats',
		icon: <MdQueryStats/>
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