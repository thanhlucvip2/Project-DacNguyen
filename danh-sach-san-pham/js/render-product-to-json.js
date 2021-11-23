var jsonData = "/data/json/data.json";
//fetch data
function fetchData(callback) {
  fetch(jsonData)
    .then((a) => {
      return a.json();
    })
    .then(callback);
}
function renderData() {
  fetchData((data) => {
    renderlistPropduct(data.ListProduct);
    console.log(data.ListProduct);
  });
}
renderData();
function renderlistPropduct(data) {
  const productUI = data.map((a, b) => {
    return `
        <div
            key = ${b}
            class="listproduct-box"
            data-aos="zoom-in-down"
            id="listproduct-box-1"
        >
            <img
            src="img/product/concept-mat-phuc-bon-tu-2.jpeg"
            class="listproduct-img"
            alt="${a.name}"
            />
            <div class="listproduct-box-content">
            <h1 class="listproduct-content-title">
                ${a.name}
            </h1>
            <div class="listproduct-content-sale">
                ${a.sale} <i class="far fa-tags"></i>
            </div>
            <div class="listproduct-content-price">
                <del>${a.price}.000 VNĐ</del>
                <br />
                    ${a.newprice}.000 VNĐ
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
                <div class="listproduct-content-sold">
                Đã bán : ${a.sold}
                </div>
                <div class="listproduct-content-button">
                <button class="product-button-shop">
                    <i class="fad fa-cart-arrow-down"></i>
                </button>
                </div>
            </div>
            </div>
            <button class="btn-see-list-product">
            <span
                ><i class="fad fa-eye"></i>Chi Tiết Sản Phẩm</span
            >
            </button>
        </div>
    `;
  });
  document.getElementById("list-product").innerHTML = productUI;
}
