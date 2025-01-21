// Function to toggle dropdown menu
const toggleDropdown = (dropdownSelector) => {
    const dropdown = document.querySelector(dropdownSelector);
    if (dropdown) {
        dropdown.classList.toggle("visible");
    }
};

// Add event listeners for the dropdown menu
document.addEventListener("DOMContentLoaded", () => {
    // Handle 'All' dropdown in the search bar
    const allDropdown = document.querySelector(".search-select");
    if (allDropdown) {
        allDropdown.addEventListener("click", () => {
            toggleDropdown(".search-select");
        });
    }

    // Handle Sign-In click
    const signInButton = document.querySelector(".nav-signin");
    if (signInButton) {
        signInButton.addEventListener("click", () => {
            alert("Sign-in functionality coming soon!");
        });
    }

    // Handle Cart click
    const cartButton = document.querySelector(".nav-cart");
    if (cartButton) {
        cartButton.addEventListener("click", () => {
            alert("Your cart is empty!");
        });
    }

    // Handle "Shop deals" click
    const shopDeals = document.querySelector(".panel-deals");
    if (shopDeals) {
        shopDeals.addEventListener("click", () => {
            alert("Redirecting to Electronics deals...");
        });
    }
});
