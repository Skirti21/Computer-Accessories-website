window.onload = function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';
  
    products.forEach((product, index) => {
      const row = `<tr>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.status}</td>
        <td>
          <button onclick="editProduct(${index})">Edit</button>
          <button onclick="deleteProduct(${index})">Delete</button>
        </td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  };
  
  function editProduct(index) {
    // Implement edit functionality
  }
  
  function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
  }
  