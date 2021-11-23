const datajson = "json/data.json";
var documentListProduct = document.getElementById("render-list-product");
var documentContent = document.getElementById("renderContentJson");
// renderNumberProduct

//filter json data
function renderjson() {
  getDataJson((dataJson) => {
    renderDataProduct(dataJson.listProduct);
    renderDataContent(dataJson.listcontent);
  });
}
renderjson();
//fetch json
function getDataJson(callback) {
  fetch(datajson)
    .then((dataJS) => {
      return dataJS.json();
    })
    .then(callback);
}
//data product
var dataOnStore = [];

//render product

function renderDataProduct(product) {
  // set data product = arr
  dataOnStore = product;
  //save data to localStorage
  localStorage.setItem("data", JSON.stringify(product));

  const mapProduct = product.map((data, index) => {
    return `<div class="listproduct-box" data-aos="zoom-in-down" >
              <img
                src="${data.img}"
                class="listproduct-img"
                alt="mật phúc bồn tử"
                
              />
              <div class="listproduct-box-content">
                <div class="listproduct-content-title">
                  ${data.name}
                </div>
                <div class="listproduct-content-sale">
                  ${data.sale} <i class="far fa-tags"></i>
                </div>
                <div class="listproduct-content-price">
                  <del>${data.price}.000 VNĐ</del>
                  <br />
                  ${data.newprice}.000 VNĐ
                </div>
                <div class="listproduct-content-evaluate">
                  Đánh Giá Của Khách Hàng
                  <div class="listproduct-icon-evaluate">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div class="listproduct-content-Purchase">
                  <div class="listproduct-content-sold">Đã bán : ${data.sold}</div>
                  <div class="listproduct-content-button">
                    <button
                      onclick="cartProduct(${data.id}, 1)"
                      class="product-button-shop"
                    >
                      <i class="fad fa-cart-arrow-down"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>`;
  });
  documentListProduct.innerHTML = mapProduct.join(" ");
}
//render content
function renderDataContent(content) {
  const mapContent = content.map((content) => {
    return `<a
              href="https://dacnguyen.vn/thuc-pham-tang-cuong-suc-de-khang/"
              target="_blank"
              class="col-lg-4 col-md-4 col-sm-6 col-12 slider-content"
              data-aos="zoom-in-up"
            >
            <div class="content-box" id="slider-content-1">
              <div class="box-content-img">
                <img
                  src="${content.img}"
                  alt="thực phẩm tăng cường sức đề kháng"
                  class="content-img"
                />
              </div>
              <div class="box-content-title">
                <div class="content-box-day">
                  <i class="fad fa-clock"></i> ${content.date}
                  <i class="fas fa-comment-dots"></i> ${content.comment}
                </div>
                <h2 class="content-title-1">
                  ${content.title}
                </h2>
                <div class="content-title-2">
                  ${content.content}
                </div>
              </div>
            </div>
          </a>`;
  });
  documentContent.innerHTML = mapContent.join("");
}

//click add to cart

const CartLocal = JSON.parse(localStorage.getItem("cartIDAdd"));
const productCart = CartLocal ? CartLocal : [];
// click product
function cartProduct(id, quantity) {
  const newProduct = {
    id: id,
    quantity: quantity,
  };
  const findIndexID = productCart.findIndex((a) => {
    return a.id === id;
  });
  const findIndexDataStore = dataOnStore.findIndex((a) => {
    return a.id === id;
  });
  if (findIndexID === -1) {
    //push product to cart
    productCart.push({
      name: dataOnStore[findIndexDataStore].name,
      img: dataOnStore[findIndexDataStore].img,
      newprice: dataOnStore[findIndexDataStore].newprice,
      sale: dataOnStore[findIndexDataStore].sale,
      price: dataOnStore[findIndexDataStore].price,
      sold: dataOnStore[findIndexDataStore].sold,
      id: newProduct.id,
      quantity: newProduct.quantity,
    });
  } else {
    // update quantity
    productCart[findIndexID].quantity =
      productCart[findIndexID].quantity + newProduct.quantity;
  }
  //save cart To store
  localStorage.setItem("cartIDAdd", JSON.stringify(productCart));
  //update cart UI
  renderCartUi(findIndexID);
}
// render cart ui
function renderCartUi() {
  var sumTotalCart = 0;
  const totalCart = productCart.map((a) => {
    return a.quantity;
  });
  //render total Product
  for (let i = 0; i < totalCart.length; i++) {
    sumTotalCart += totalCart[i];
    document.getElementById("total-price").innerHTML = `: ${sumTotalCart}`;
  }
  const documentCart = document.getElementById("box-cart");
  const renderCart = productCart.map((a) => {
    return `  <div class="list-cart">
                <img
                  src="${a.img}"
                  alt=""
                  class="img-list-cart"
                />
                <div class="info-list-cart">
                  <div class="quantity-list-cart">Số Lượng : ${a.quantity}</div>
                  <div class="title-list-cart">${a.name}</div>
                  <div class="price-list-cart">${a.newprice}.000 VNĐ</div>
                </div>
              </div>`;
  });
  documentCart.innerHTML = renderCart.join("");
}
renderCartUi();

//see more product
function seeMoreProduct() {
  renderNumberProduct = renderNumberProduct + 4;
  // renderDataProduct();
  renderjson();
}
