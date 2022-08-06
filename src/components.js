const itens = [
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

const liRender = document.getElementById('product-list')

function renderCard() {

  itens.forEach((itens)=> {
    liRender.insertAdjacentElement("beforeend",
    `<li class="products-list__item">
      <div class="products-list__item-thumbnail">
        <img class="product__thumbnail" src=${itens.img} />
      </div>
      <div class="products-list__item-main-content">
        <h4 class="product__name">${itens.modelo}</h4>
        <p class="product__description">${itens.description}</p>
      </div>
      <div class="products-list__item-action-buttons">
        <button class="button" data-toggle-modal="1">
          Detalhes
        </button>
      </div>
    </li>`
    )
    })
}

export function Component(){
  renderCard()
}
