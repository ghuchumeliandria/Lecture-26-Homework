const productBtn = document.getElementById("productBtn");
let index = 1;

async function getData() {
  try {
    let data = await fetch(`https://fakestoreapi.com/products/${index}`);
    let products = await data.json();

    products.map((product) =>{
      let p = document.createElement("p")
      p.textContent = product.title;
      document.body.appendChild(p)
    })            
     
  } catch {
    let errorP = document.createElement("p")
    errorP.textContent = "ERROR"
    errorP.style.color = "red"
    document.body.appendChild(errorP)
  }
}
getData();
