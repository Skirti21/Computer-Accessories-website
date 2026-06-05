const products = JSON.parse(localStorage.getItem("products") || "[]");
const productList = document.getElementById("product-list");

if (productList) {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "col-md-4";
    div.innerHTML = `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Price: $${product.price}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    `;
    productList.appendChild(div);
  });
}
