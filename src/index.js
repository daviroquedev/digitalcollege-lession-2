import './main.css'
import { Modal } from './modal'
import { Sidebar } from './sidebar'

const sidebarHandler = Sidebar()
const modalHandler = Modal()

modalHandler.init()
// modalHandler.openModal()

sidebarHandler.init()