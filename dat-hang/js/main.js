var Invoice = {};
const cartDataStorage = JSON.parse(localStorage.getItem("cartIDAdd"));
const cartData = cartDataStorage ? cartDataStorage : [];
const productCart = document.getElementById("render-productCart");
//price to number
function numberToPrice(numBer) {
  if (numBer.length > 3 && numBer.length <= 6) {
    return (
      numBer.slice(0, numBer.length - 3) +
      "." +
      numBer.slice(numBer.length - 3, numBer.length)
    );
  } else if (numBer.length > 6 && numBer.length <= 9) {
    return (
      numBer.slice(0, numBer.length - 6) +
      "." +
      numBer.slice(numBer.length - 6, numBer.length - 3) +
      "." +
      numBer.slice(numBer.length - 3, numBer.length)
    );
  } else if (numBer.length > 9) {
    return (
      numBer.slice(0, numBer.length - 9) +
      "." +
      numBer.slice(numBer.length - 9, numBer.length - 6) +
      "." +
      numBer.slice(numBer.length - 6, numBer.length - 3) +
      "." +
      numBer.slice(numBer.length - 3, numBer.length)
    );
  } else {
    return numBer;
  }
}
//render product cart
function renderProductCart() {
  const renderProductCart = cartData.map((a) => {
    return `
          <div class="row border-top border-bottom">
            <div class="row main align-items-center">
              <div class="col-2">
                <img
                  class="img-list-product"
                  src="../${a.img}"
                />
              </div>
              <div class="col">                
                <div class="row">
                  <span class="form-left-title-product"
                    >${a.name}</span
                  >
                </div>
              </div>
              <div class="col">
                <div class="product-number">                    
                  <span class="number-box-input" id="listProduct">${
                    a.quantity
                  }</span>
                  <span class="button-number btn-number-1" onClick = "addProduct(${
                    a.id
                  }, 'minus')">-</span>
                  <span class="button-number btn-number-2" onClick = "addProduct(${
                    a.id
                  },'add')">+</span>
                </div>
              </div>
              <div class="col" style="text-align: right;">
                <span class="form-left-price" >${numberToPrice(
                  String(a.newprice * a.quantity)
                )}.000 VNĐ</span>
                <span class="close" onClick = "closeProduct(${
                  a.id
                })">&#10005;</span>
              </div>
            </div>
          </div> 
    `;
  });
  productCart.innerHTML = renderProductCart.join("");
}
console.log();
//saleSuccess
var saleSuccess = 0;
//render product cart
renderProductCart();
//add quantity product
function addProduct(id, event) {
  //index product
  const indexProduct = cartData.findIndex((a) => {
    return a.id === id;
  });
  // update product
  if (event === "add") {
    cartData[indexProduct].quantity = cartData[indexProduct].quantity + 1;
  } else if (event === "minus") {
    if (cartData[indexProduct].quantity > 0) {
      cartData[indexProduct].quantity = cartData[indexProduct].quantity - 1;
    }
  }
  localStorage.setItem("cartIDAdd", JSON.stringify(cartData));
  renderProductCart();
  totalProduct(0);
}
//clean product quantity
function closeProduct(id) {
  const indexProduct = cartData.findIndex((a) => {
    return a.id === id;
  });
  cartData.splice(indexProduct, 1);
  localStorage.setItem("cartIDAdd", JSON.stringify(cartData));
  renderProductCart();
  totalProduct(0);
}
// total Pricer Product

function totalProduct(total) {
  if (cartDataStorage) {
    for (let i = 0; i < cartDataStorage.length; i++) {
      total = total + cartDataStorage[i].newprice * cartDataStorage[i].quantity;
    }
  }
  //provisional price
  document.getElementById("total-price-product").innerHTML = `${numberToPrice(
    String(total)
  )}.000 VNĐ`;
  //sale
  document.getElementById("saleSuccess").innerHTML = `${saleSuccess}.000 VNĐ`;
  //total price
  document.getElementById("totalPrice").innerHTML = `${numberToPrice(
    String(total - saleSuccess)
  )}.000 VNĐ`;
  Invoice = {
    provisional: total,
    saleSuccess: saleSuccess,
    totalPrice: total - saleSuccess,
  };
}
totalProduct(0);

//change quantity
function changeQuantityValue(id) {
  const ChangeValueQuantity = document.getElementById("listProduct").value;
  const indexProduct = cartData.findIndex((a) => {
    return a.id === id;
  });
  cartData[indexProduct].quantity = +ChangeValueQuantity;
  localStorage.setItem("cartIDAdd", JSON.stringify(cartData));
  renderProductCart();
  totalProduct(0);
}
// SALE
const documentCodeSale = document.getElementById("CodeSale");
const codeSale = [
  {
    code: "SALE100",
    sale: 100,
  },
  {
    code: "SALE200",
    sale: 200,
  },
  {
    code: "SALE300",
    sale: 300,
  },
];

function AddCodeSale() {
  const codeAd = codeSale.findIndex((a) => {
    return a.code === documentCodeSale.value;
  });
  if (codeAd === -1) {
    document.getElementById("notification-Sale").innerHTML =
      "<span style = 'color : red'>Nhập Code Thất Bại</span>";
  } else {
    document.getElementById(
      "notification-Sale"
    ).innerHTML = `<span>Bạn Được Giảm ${codeSale[codeAd].sale}.000 VNĐ</span>`;
    // sale
    saleSuccess = codeSale[codeAd].sale;
  }
  renderProductCart();
  totalProduct(0);
}
// order
var address = document.getElementById("address");
var phoneNumber = document.getElementById("phoneNumber");
var nameClient = document.getElementById("nameClient");
var addressClient = {};

function order() {
  if (
    address.value === "" ||
    phoneNumber.value === "" ||
    nameClient.value === "" ||
    Invoice.provisional <= 0 ||
    phoneNumber.value.length <= 8
  ) {
    if (address.value === "") {
      alert("Quý Khách vui Lòng Điền Địa Chỉ Giao Hàng");
    } else if (phoneNumber.value === "") {
      alert("Quý Khách vui Lòng Điền Số Điện Thoại");
    } else if (nameClient.value === "") {
      alert("Quý Khách vui Lòng Điền Tên");
    } else if (Invoice.provisional === 0) {
      alert("Quý Khách Vui Lòng Chọn Sản Phẩm Để Đặt Hàng");
    } else if (phoneNumber.value.length <= 8) {
      alert("Số Điện Thoại Phải Trên 8 Số");
    }
  } else {
    addressClient = {
      address: address.value,
      phoneNumber: phoneNumber.value,
      nameClient: nameClient.value,
    };
    localStorage.setItem("addressClient", JSON.stringify(addressClient));
    localStorage.setItem("Invoice", JSON.stringify(Invoice));
    setTimeout(() => {
      window.open("/dat-hang/dat-hang-thanh-cong/", "_self");
    }, 1000);
  }
}
