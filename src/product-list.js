export function ProductsList() {
  function _li(products) {
    return `<li class="products-list__item">
      <div class="products-list__item-thumbnail">
        <a href="produto.html">
        <img class="product__thumbnail" src=${products.img} />
      </div>
      </a>
      <div class="products-list__item-main-content">
        <h4 class="product__name">${products.modelo}</h4>
        <p class="product__description">${products.description}</p>
      </div>
      <div class="products-list__item-action-buttons">
        <button class="button" data-toggle-modal="1">
          Detalhes
        </button>
      </div>
    </li>`
  }

  function render(products = []) {
    const ul = document.querySelector('.products-list')
    if (ul) {
      products.forEach((products) => {
        ul.insertAdjacentHTML('beforeend', _li(products))
      })
    }
  }

  return {
    render
  }
}
