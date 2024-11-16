const productBtn = document.getElementById("productBtn");
let index = 1;
let text = document.getElementById("texts");

async function getData() {
  try {
    let data = await fetch(`https://fakestoreapi.com/products/${index}`);
    let products = await data.json();

    let idTitle = document.createElement("p");
    idTitle.classList.add("title-p")
    idTitle.textContent = "Name : " + products.title;
    text.appendChild(idTitle);
    let price = document.createElement("p");
    price.classList.add("price")
    price.textContent = "Price : " + products.price;
    text.appendChild(price);
    if(text.length === 20){

    }
  } catch {
    alert("ინფორმაცია არ მოიძებნება")
  }
}

productBtn.addEventListener("click", () => {
  getData();
  index++;
});
