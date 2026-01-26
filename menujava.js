/* 🍽 TAOMLAR RO‘YXATI
   Rasmlar images/ papkada bo‘lishi shart */
const menuItems = [
    { id: 1, name: "Tushonka", price: 50000, image: "images/tushonka.jpg" },
    { id: 2, name: "Mampar", price: 45000, image: "images/Mampar.jpg" },
    { id: 3, name: "Chibureki", price: 15000, image: "images/Chibureki.jpg" },
    { id: 4, name: "Osh", price: 300000, image: "images/osh.jpg" },
   { id: 5, name: "Moxora", price: 30000, image: "images/Moxora.jpg" },
   { id: 6, name: "Jigar Dimlama", price: 150000, image: "images/Jigar.jpg" },
   { id: 7, name: "Norin", price: 50000, image: "images/Norin.jpg" },
   { id: 8, name: "No'xatsho'rak", price: 45000, image: "images/no'xatsho'rak.jpg" },
   { id: 9, name: "Asorti", price: 90000, image: "images/Asorti.jpg" },
   { id: 10, name: "Moshkichra", price: 100000, image: "images/Moshkichra.jpg" },
   { id: 11, name: "Oganyok", price: 15000, image: "images/Oganyok.jpg" },
   { id: 12, name: "Podomashni", price: 250000, image: "images/Podomashni.jpg" },
   { id: 13, name: "Beshbarmoq", price: 100000, image: "images/Beshbarmoq.jpg" },
   { id: 14, name: "Kartoshka Fri ", price: 15000, image: "images/Kartoshka Fri .jpg" },
   { id: 15, name: "Mesnoy", price: 150000, image: "images/Mesnoy.jpg" },
   { id: 16, name: "Sho'rva", price: 50000, image: "images/Sho'rva.jpg" },
   { id: 17, name: "Lag'mon", price: 40000, image: "images/Lag'mon.jpg" },
   { id: 18, name: "Hash", price: 40000, image: "images/Hash.jpg" },
   { id: 19, name: "Mastava", price: 35000, image: "images/Mastava.jpg" },
   { id: 20, name: "Asorti VIP Apple Garden", price: 120000, image: "images/vip.jpg" },
   { id: 21, name: "Dimlama", price: 270000, image: "images/Dimlama.jpg" },
    { id: 22, name: "Qozon kabob", price: 270000, image: "images/Qozon kabob.jpg" },
    { id: 23, name: "Tuzlama", price: 25000, image: "images/Tuzlama.jpg" },
     { id: 24, name: "Xoladets", price: 20000, image: "images/Xoladets.jpg" },
     { id: 25, name: "Meva 4 xil", price: 70000, image: "images/Meva.jpg" },
     { id: 26, name: "Suzma", price: 10000, image: "images/Suzma.jpg" },
     { id: 27, name: "Salyonni", price: 10000, image: "images/Salonni.jpg" },
     { id: 28, name: "Sezar", price: 35000, image: "images/Sezar.jpg" },
        { id: 29, name: "Mujskoy kapriz", price: 35000, image: "images/Mursloy.jpg" },
     { id: 30, name: "Yaponski salat", price: 35000, image: "images/yapon.jpg" },
     { id: 31, name: "Chiroqchi", price: 30000, image: "images/Chiroqchi.jpg" },
     { id: 32, name: "Achiqchuchu", price: 20000, image: "images/achuchuchu.jpg" }
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
