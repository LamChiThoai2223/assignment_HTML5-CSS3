function getData(){
    console.log(product);
    let htmlProduct = ``;
    for (let index = 0; index < product.length; index++) {
        htmlProduct += `
        <div class="col-md-3">
        <div class="product-card">
          <div class="product-header">
            <img class="product-image" src="img/${product[index].img}" alt="">
          </div>
          <div class="product-info">
            <div class="product-name">${product[index].name}</div>
            <div class="product-price">${product[index].price}</div>
            <div class="product-buy">
              <button class="btn btn-buy btn-block">Mua hàng</button>
            </div>
          </div>
        </div>
      </div>`
        console.log(product[index]);
    }
    document.getElementById("ProductHtml").innerHTML = htmlProduct;
}
getData();
function getDetails(){
    location.href = `De`
}