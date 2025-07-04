// Get all elements with the class "fade-in"
const fadeInElements = document.querySelectorAll('.fade-in');

// Add event listener to window for scroll event
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Loop through each fade-in element
    fadeInElements.forEach((element) => {
        // Get the top position of the element
        const elementTop = element.offsetTop;

        // Check if the element is in view
        if (scrollPosition >= elementTop - window.innerHeight + 100) {
            // Add the "show" class to the element
            element.classList.add('show');
        }
    });
});

// Add event listener to window for load event
window.addEventListener('load', () => {
    // Get all elements with the class "hero-image"
    const heroImages = document.querySelectorAll('.hero-image');

    // Loop through each hero image
    heroImages.forEach((image) => {
        // Add the "fade-in" class to the image
        image.classList.add('fade-in');
    });
});

// Function to handle image loading
function handleImageLoading(image) {
    // Get the image src
    const imageSrc = image.src;

    // Create a new image element
    const newImage = new Image();

    // Set the src of the new image
    newImage.src = imageSrc;

    // Add event listener to the new image for load event
    newImage.addEventListener('load', () => {
        // Replace the old image with the new image
        image.src = newImage.src;
    });

    // Add event listener to the new image for error event
    newImage.addEventListener('error', () => {
        // Handle image loading error
        console.error('Error loading image:', imageSrc);
    });
}

// Get all images on the page
const images = document.querySelectorAll('img');

// Loop through each image
images.forEach((image