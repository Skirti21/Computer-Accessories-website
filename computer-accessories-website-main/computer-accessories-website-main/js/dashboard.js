window.onload = () => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
  
    const total = products.length;
    const completed = products.filter(p => p.status === "completed").length;
    const rejected = products.filter(p => p.status === "rejected").length;
    const pending = products.filter(p => p.status === "pending").length;
  
    document.getElementById("totalProducts").textContent = total;
    document.getElementById("ordersCompleted").textContent = completed;
    document.getElementById("rejectedOrders").textContent = rejected;
    document.getElementById("allRequests").textContent = total;
    document.getElementById("newRequests").textContent = pending;
  };
  