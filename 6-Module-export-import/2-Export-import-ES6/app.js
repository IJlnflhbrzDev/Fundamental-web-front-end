import coffeeStock from "./state.js";

const displayStock = stock => {
  const coffeeStockListElement = document.querySelector("#coffee-stock-list");
  for(const type in stock) {
    const coffeeStockItemElement = document.createElement("li");
    coffeeStockItemElement.innerText = `${type}: ${stock[type]}`;
    coffeeStockListElement.appendChild(coffeeStockItemElement);
  }
}

displayStock(coffeeStock);



// Perhatikan Script link pada html yg menuju script2 js
// jika ingin mengExport banyak nilai gunakan type module dalam script