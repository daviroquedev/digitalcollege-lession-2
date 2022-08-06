import './main.css'
import { Modal } from './modal'
import { Sidebar } from './sidebar'
import { ProductsList } from './product-list'
import {Component} from './components'


const sidebarHandler = Sidebar()
const modalHandler = Modal()
const productList = ProductsList()



  
modalHandler.init()
// modalHandler.openModal()

sidebarHandler.init()


const products = [
    {
      modelo: 'Samsung Galaxy A23',
      description:
        'O novo Galaxy A23 combina cores elegantes e suavidade ao toque.',
      img: 'https://m.media-amazon.com/images/I/51e3KdrHuCL._AC_SX679_.jpg'
    },
    {
      modelo: 'Apple iPhone 11 ',
      description:
        'Tudo na medida certa. Novo sistema de câmera e bateria que dura o dia todo.',
      img: 'https://m.media-amazon.com/images/I/716+SQdPpQL._AC_SX679_.jpg'
    },
    {
      modelo: 'Xiaomi Redmi Note 11',
      description:
        ' Smartphone Xiaomi Redmi Note 11 Dual 128gb 6gb Ram - Graphite Gray/cinza - Global',
      img: 'https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SX679_.jpg'
    },
  ]


productList.render(products)

