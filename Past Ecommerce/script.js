// JavaScript for E-Commerce Homepage

document.addEventListener("DOMContentLoaded", () => {
    // Countdown Timer
    const countdownElements = document.querySelectorAll(".countdown div span");
    let countdownTime = 3 * 24 * 60 * 60; // 3 days in seconds

    const updateCountdown = () => {
        const days = Math.floor(countdownTime / (24 * 60 * 60));
        const hours = Math.floor((countdownTime % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((countdownTime % (60 * 60)) / 60);
        const seconds = countdownTime % 60;

        countdownElements[0].textContent = days.toString().padStart(2, '0');
        countdownElements[1].textContent = hours.toString().padStart(2, '0');
        countdownElements[2].textContent = minutes.toString().padStart(2, '0');
        countdownElements[3].textContent = seconds.toString().padStart(2, '0');

        if (countdownTime > 0) {
            countdownTime--;
        }
    };

    setInterval(updateCountdown, 1000);

    // Add to cart functionality
    const products = document.querySelectorAll(".product");
    products.forEach((product) => {
        const button = product.querySelector("button");
        if (button) {
            button.addEventListener("click", () => {
                alert(`${product.querySelector("p").textContent} added to cart!`);
            });
        }
    });

    // Banner carousel functionality
    const banners = document.querySelectorAll(".main-banner .banner-content");
    let currentBannerIndex = 0;

    const showBanner = (index) => {
        banners.forEach((banner, i) => {
            banner.style.display = i === index ? "block" : "none";
        });
    };

    const nextBanner = () => {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        showBanner(currentBannerIndex);
    };

    setInterval(nextBanner, 5000); // Change banner every 5 seconds

    showBanner(currentBannerIndex);
});

// Example cart array
let cart = [];

// Add an item to the cart
function addToCart(item) {
  cart.push(item);
  updateCartCount();
}

// Update the cart count display
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

// Handle cart click
function handleCartClick() {
  console.log("Cart clicked. Current cart:", cart);
}
