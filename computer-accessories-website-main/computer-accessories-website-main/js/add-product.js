document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const status = document.getElementById('productStatus').value;
  
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({ name, price, status });
    localStorage.setItem('products', JSON.stringify(products));
    alert('Product added successfully!');
    this.reset();
  });
  