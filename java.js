/* 🍽 TAOMLAR RO‘YXATI
   Rasmlar images/ papkada bo‘lishi shart */
const menuItems = [
    { id: 1, name: "Tushonka", price: 50000, image: "images/tushonka.jpg" },
    { id: 2, name: "Mampar", price: 45000, image: "images/mampar.jpg" },
    { id: 3, name: "Salat Bahor", price: 25000, image: "images/salat.jpg" },
    { id: 4, name: "Grill Go‘sht", price: 65000, image: "images/grill.jpg" }
];

let cart = [];

/* 🧱 MENYU CHIQARISH */
function renderMenu() {
    const grid = document.getElementById("menuGrid");

    menuItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-content">
                <h3>${item.name}</h3>
                <p>${item.price.toLocaleString()} so'm</p>
                <button class="add-to-cart" onclick="addToCart(${item.id})">
                    Savatchaga qo‘shish
                </button>
            </div>
        `;

        grid.appendChild(div);
    });
}

/* 🛒 SAVATCHA */
function addToCart(id) {
    cart.push(id);
    document.getElementById("cartCount").textContent = cart.length;
}

/* 🚀 START */
document.addEventListener("DOMContentLoaded", renderMenu);
