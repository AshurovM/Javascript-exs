let basket = document.querySelector('.basket')
let headerContent = document.querySelector('.header-content')
let addBasket = document.querySelectorAll('.basket-add')
let addCarts = document.querySelector('.basket-add-carts')
let addCart = document.querySelectorAll(".basket-add-cart");
let removeCart = document.querySelector(".cart-remove");
basket.addEventListener('click', () => {
    headerContent.classList.toggle('active')
})
addBasket.forEach((add) => {
    add.addEventListener("click", () => {
      addCarts.innerHTML += `
      <div class="cart basket-add-cart">
            <div class="image"><img src="image/iphone-15.webp" alt=""></div>
            <div class="right">
                <div class="title-1">15 904 s</div>
                <div class="desc">iPhone 15 Pro Max 256 GB (nano-SIM+nano-SIM), qora</div>
                <div class="btn-1">bo'lib to'lash 908s x oy<i class="fi fi-rr-angle-small-down"></i></div>
                <div class="btn-2">Yetkazib berish bepul</div>
                <div class="bot">
                    <div class="number">
                        <div class="math">-</div>
                        <div class="num">1</div>
                        <div class="math">+</div>
                    </div>
                    <div class="delete"><i class="fi fi-rr-trash"></i></div>
                </div>
            </div>
            </div>`;
    });
});
removeCart.addEventListener('click', (e) => {
    addCart.forEach((remove) => {
        remove.classList.add("hidden");
    })
})