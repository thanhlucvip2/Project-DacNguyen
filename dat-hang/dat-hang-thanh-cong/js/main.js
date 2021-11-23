const Invoice = JSON.parse(localStorage.getItem("Invoice"))
  ? JSON.parse(localStorage.getItem("Invoice"))
  : [];
const addressClient = JSON.parse(localStorage.getItem("addressClient"))
  ? JSON.parse(localStorage.getItem("addressClient"))
  : [];
const cartIDAdd = JSON.parse(localStorage.getItem("cartIDAdd"))
  ? JSON.parse(localStorage.getItem("cartIDAdd"))
  : [];
//render info client
document.getElementById("nameClient").innerHTML = addressClient.nameClient;
document.getElementById("phoneClient").innerHTML = addressClient.phoneNumber;
document.getElementById("addressClient").innerHTML = addressClient.address;
//numver to price
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
// box-order
var boxOrder = document.getElementById("box-order");

const renderCartOrder = cartIDAdd.map((a) => {
  return `
    <div class="box-order-content">
    <div class="row item-center">
      <div class="col text-left">${a.name}</div>
      <div class="col text-center">${a.quantity}</div>
      <div class="col text-center">${numberToPrice(
        String(a.newprice)
      )}.000 VNĐ</div>
      <div class="col text-right">${numberToPrice(
        String(a.quantity * a.newprice)
      )}.000 VNĐ</div>
    </div>
  </div>
    `;
});
boxOrder.innerHTML = renderCartOrder.join("");
// render total price

document.getElementById("provisional").innerHTML = `${numberToPrice(
  String(Invoice.provisional)
)}.000 VNĐ`;
document.getElementById("SalePrice").innerHTML = `${numberToPrice(
  String(Invoice.saleSuccess)
)}.000 VNĐ`;
document.getElementById("totalPrice").innerHTML = `${numberToPrice(
  String(Invoice.totalPrice)
)}.000 VNĐ`;
//clear data
function clearData() {
  localStorage.setItem("Invoice", JSON.stringify([]));
  localStorage.setItem("addressClient", JSON.stringify([]));
  localStorage.setItem("cartIDAdd", JSON.stringify([]));
}
