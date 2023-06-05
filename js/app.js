function getData(){
    console.log(product);
    let htmlProduct = ``;
    for (let index = 0; index < product.length; index++) {
        htmlProduct += `
       <figure class="col-sm-4 figure">
                                            <img src="img/${product[index].img}" class="figure-img img-fluid rounded" alt="...">
                                            <figcaption class="figure-caption">
                                                <div name="name1">${product[index].name}</div>
                                                <br>
                                                <div>${product[index].price}</div>
                                                <br>
                                                <button>Buy</button>
                                            </figcaption>
                                        </figure>`
        console.log(product[index]);
    }
    document.getElementById("ProductHtml").innerHTML = htmlProduct;
}
getData();
function getDetails(){
    location.href = `De`
}
