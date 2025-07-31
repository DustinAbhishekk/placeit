// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

// Accordion functionality
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const content = button.nextElementSibling;
    content.classList.toggle("hidden");
  });
});

// FAQ accordion
document.querySelectorAll(".faq-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector("i");

    // Toggle current item
    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");

    // Close other items
    document.querySelectorAll(".faq-btn").forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.nextElementSibling.classList.add("hidden");
        otherButton.querySelector("i").classList.remove("rotate-180");
      }
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Toggle switch functionality
document.addEventListener("DOMContentLoaded", function () {
  const monthlyToggle = document.getElementById("monthly-toggle");
  const annualToggle = document.getElementById("annual-toggle");
  const monthlyPrices = document.querySelectorAll(".monthly-price");
  const annualPrices = document.querySelectorAll(".annual-price");

  // Initialize with monthly selected
  monthlyToggle.classList.add("active");

  monthlyToggle.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active");
      annualToggle.classList.remove("active");

      // Show monthly prices, hide annual
      monthlyPrices.forEach((el) => el.classList.remove("hidden"));
      annualPrices.forEach((el) => el.classList.add("hidden"));
    }
  });

  annualToggle.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active");
      monthlyToggle.classList.remove("active");

      // Show annual prices, hide monthly
      monthlyPrices.forEach((el) => el.classList.add("hidden"));
      annualPrices.forEach((el) => el.classList.remove("hidden"));
    }
  });
});
 document.querySelectorAll(".testimonial-nav").forEach((dot, index) => {
   dot.addEventListener("click", () => {
     document
       .querySelectorAll(".testimonial-nav")
       .forEach((d) => d.classList.remove("active"));
     dot.classList.add("active");

     // In a real implementation, this would switch testimonials
     console.log(`Showing testimonial ${index + 1}`);
   });
 });

  // Enhanced Mockup Generator Script
  document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const uploadZone = document.getElementById('upload-zone');
    const previewZone = document.getElementById('preview-zone');
    const uploadedImage = document.getElementById('uploaded-image');
    const uploadBtn = document.getElementById('upload-btn');
    const changeImageBtn = document.getElementById('change-image');
    const mockupOptions = document.querySelectorAll('.mockup-option');
    const mockupPreviews = document.querySelectorAll('.mockup-preview');
    
    // Mockup screens
    const mockupScreens = {
      iphone: document.getElementById('iphone-screen'),
      macbook: document.getElementById('macbook-screen'),
      tshirt: document.getElementById('tshirt-design'),
      mug: document.getElementById('mug-design')
    };

    // Set up mockup selector
    mockupOptions.forEach(btn => {
      btn.addEventListener('click', function() {
        // Update active button
        mockupOptions.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Update visible mockup
        const mockupType = this.dataset.mockup;
        mockupPreviews.forEach(preview => {
          preview.classList.toggle('hidden', preview.dataset.mockup !== mockupType);
        });
      });
    });

    // Handle drag and drop
    ['dragenter', 'dragover'].forEach(event => {
      uploadZone.addEventListener(event, (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
      });
    });

    ['dragleave', 'dragend'].forEach(event => {
      uploadZone.addEventListener(event, () => {
        uploadZone.classList.remove('dragover');
      });
    });

    uploadZone.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadZone.classList.remove('dragover');
      if (e.dataTransfer.files.length) {
        handleImageUpload(e.dataTransfer.files[0]);
      }
    });

    // Handle file selection
    uploadBtn.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => {
        if (e.target.files.length) {
          handleImageUpload(e.target.files[0]);
        }
      };
      input.click();
    });

    // Change image button
    changeImageBtn.addEventListener('click', () => {
      previewZone.classList.add('hidden');
      uploadZone.classList.remove('hidden');
    });

    // Process uploaded image
    function handleImageUpload(file) {
      if (!file.type.match('image.*')) {
        alert('Please upload an image file (PNG, JPG, SVG)');
        return;
      }
      
      if (file.size > 20 * 1024 * 1024) {
        alert('File size must be less than 20MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        // Set uploaded image preview
        uploadedImage.src = e.target.result;
        
        // Apply to all mockup screens with perfect fitting
        Object.entries(mockupScreens).forEach(([type, element]) => {
          element.innerHTML = '';
          const img = document.createElement('img');
          img.src = e.target.result;
          img.alt = 'Uploaded design';
          
          // Special handling for different mockup types
          if (type === 'iphone' || type === 'macbook') {
            img.classList.add('w-full', 'h-full', 'object-contain');
          } else {
            // For apparel and mugs
            img.classList.add('w-3/4', 'h-3/4', 'object-contain');
            img.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))';
            
            // Extra styling for mug
            if (type === 'mug') {
              img.style.borderRadius = '50%';
              img.style.transform = 'perspective(500px) rotateX(10deg)';
            }
          }
          
          element.appendChild(img);
        });
        
        // Show preview
        uploadZone.classList.add('hidden');
        previewZone.classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    }
  });