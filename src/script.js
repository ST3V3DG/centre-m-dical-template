// Toggle mobile menu
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("hidden");
});

// Theme switcher functionality
const html = document.documentElement;
const themeToggles = document.querySelectorAll('.theme-toggle');

// Initial theme check function
const initTheme = () => {
    // Check if user previously selected a theme
    const userTheme = sessionStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // If the user has explicitly chosen a theme, let's apply it
    if (userTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (userTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else if (systemTheme) { // If user hasn't chosen but system prefers dark
        document.documentElement.classList.add('dark');
    }

    // Update all toggle button states
    updateToggleIcons();
};

// Function to update icon visibility on all toggle buttons
const updateToggleIcons = () => {
    const isDark = document.documentElement.classList.contains('dark');
    themeToggles.forEach(toggle => {
        const sunIcon = toggle.querySelector('.fa-sun');
        const moonIcon = toggle.querySelector('.fa-moon');
        
        if (isDark) {
            sunIcon.parentElement.classList.remove('hidden');
            moonIcon.parentElement.classList.add('hidden');
        } else {
            sunIcon.parentElement.classList.add('hidden');
            moonIcon.parentElement.classList.remove('hidden');
        }
    });
};

// Toggle theme function
const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    
    if (isDark) {
        document.documentElement.classList.remove('dark');
        sessionStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        sessionStorage.setItem('theme', 'dark');
    }
    
    // Update icons after theme change
    updateToggleIcons();
};

// Initialize theme on page load
initTheme();

// Add click event listeners to all theme toggle buttons
themeToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!sessionStorage.getItem('theme')) {
        if (e.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        updateToggleIcons();
    }
});