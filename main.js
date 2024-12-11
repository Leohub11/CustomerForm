class Customer {
  constructor(name, birthYear, height, weight) {
    this.name = name;
    this.birthYear = birthYear;
    this.height = height;
    this.weight = weight;
  }
  getDetails() {
    return `${this.name}, Born: ${this.birthYear}, Height: ${this.height}cm, Weight: ${this.weight}kg`;
  }
}

const customers = []; // Đổi tên mảng cho rõ ràng hơn

// Handle form submission
document
  .getElementById("customerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Gọi đúng hàm

    const name = document.getElementById("name").value;
    const birthYear = document.getElementById("birthYear").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    const customer = new Customer(name, birthYear, height, weight);
    customers.push(customer);

    document.getElementById("customerForm").reset(); // Reset form

    displayCustomer(); // Gọi đúng hàm hiển thị
  });

function displayCustomer() {
  const customerListDiv = document.getElementById("customerList");
  customerListDiv.innerHTML = ""; // Xóa nội dung cũ trước khi hiển thị

  customers.forEach((customer, index) => {
    const div = document.createElement("div");
    div.className = "customer_info";
    div.textContent = `${index + 1}: ${customer.getDetails()}`;
    customerListDiv.appendChild(div); // Gắn đúng phần tử
  });
}
