var pNameInput = document.getElementById("productName");
var pPriceInput = document.getElementById("productPrice");
var pCategoryInput = document.getElementById("productCategory");
var pDescInput = document.getElementById("productDescription");
var row = document.getElementById("rowData");
pList = [];
if (localStorage.getItem("pdt", JSON.stringify(pList)) !== null) {
  pList = JSON.parse(localStorage.getItem("pdt"));
  displayProduct();
} else {
  pList = [];
}

//!! button onclick="addProduct()"

function addProduct() {
  if (pNameInput.value == "" || pPriceInput.value == "") return;

  var Product = {
    name: pNameInput.value,
    price: pPriceInput.value,
    category: pCategoryInput.value,
    Desc: pDescInput.value,
  };

  pList.push(Product);
  // clearInputs();
  localStorage.setItem("pdt", JSON.stringify(pList));
  displayProduct();
  console.log(pList);
}

// !! Clear Inputs fn

function clearInputs() {
  pNameInput.value = "";
  pPriceInput.value = "";
  pCategoryInput.value = "";
  pDescInput.value = "";
}

// !!!! Dsiplay Pdt

function displayProduct() {
  var string = "";

  for (let i = 0; i < pList.length; i++) {
    string += ` <div class="col-md-4 my-4">
        <div class="inner rounded-3 overflow-hidden">
          <img src="4.jpg" class="w-100 mb-3" alt="">
          <span class="badge  text-danger-emphasis text-bg-dark fs-4 p-2 mb-3">${pList[i].price}$</span>
          <h2 class="mb-3 ">${pList[i].name}</h2>
          <span class="mb-3 badge bg-info ">${pList[i].category}</span>
          <p class="mb-3">${pList[i].Desc}</p>
          <button class="btn btn-outline-warning w-100 mb-2">Update</button>
          <button onclick='deleteProduct(${i})'  class="btn  btn-outline-danger w-100 mb-2">Delete</button>
        </div>
      </div>`;
  }
  rowData.innerHTML = string;
}

// ??? Delete product
function deleteProduct(index) {
  pList.splice(index, 1);
  displayProduct();
  localStorage.setItem("pdt", JSON.stringify(pList));
}
