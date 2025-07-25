// Navigation Menu Toggle (for mobile)
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Restaurant Modal Logic
const modal = document.getElementById("restaurant-modal");
const closeBtn = document.querySelector(".close-btn");
const restaurantName = document.getElementById("restaurant-name");
const menuList = document.getElementById("menu-list");

document.querySelectorAll(".restaurant").forEach((el) => {
  el.addEventListener("click", () => {
    const name = el.querySelector("p").innerText;
    restaurantName.innerText = name;

    // Example menu data
    let menu = [];
    if (name === "Jollibee") {
      menu = ["Chickenjoy - ₱150", "Yumburger - ₱60", "Spaghetti - ₱80"];
    } else if (name === "McDonald's") {
      menu = ["Big Mac - ₱200", "Fries - ₱60", "McFloat - ₱50"];
    } else if (name === "Mang Inasal") {
      menu = ["Pecho Meal - ₱150", "Liempo - ₱140", "Halo-Halo - ₱70"];
    }

    menuList.innerHTML = menu.map((item) => `<li>${item}</li>`).join("");
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Filter by Cuisine
function filterCuisine(type) {
  const cuisines = document.querySelectorAll(".cuisine");
  cuisines.forEach((c) => {
    if (!type || c.innerText.includes(type)) {
      c.style.display = "block";
    } else {
      c.style.display = "none";
    }
  });
}

// Make filterCuisine available globally
window.filterCuisine = filterCuisine;
