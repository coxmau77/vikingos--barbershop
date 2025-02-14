// Testimonials Data
const testimonials = [
  {
    name: "Juan Pérez",
    text: "Excelente servicio y atención personalizada. ¡Los barberos son unos verdaderos artistas!",
  },
  {
    name: "Carlos Gómez",
    text: "El mejor lugar para cuidar mi barba. Siempre salgo satisfecho con el resultado.",
  },
  {
    name: "Pedro Fernández",
    text: "Un ambiente único y un servicio impecable. ¡Recomendado al 100%!",
  },
];

// Initialize Testimonials Slider
function initTestimonials() {
  const slider = document.getElementById("testimonialSlider");

  testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement("div");
    testimonialCard.className = "testimonial-card";
    testimonialCard.innerHTML = `
            <p>${testimonial.text}</p>
            <strong>${testimonial.name}</strong>
        `;
    slider.appendChild(testimonialCard);
  });
}

// Smooth Scroll to Booking Section
function scrollToBooking() {
  document.getElementById("reserva").scrollIntoView({
    behavior: "smooth",
  });
}

// Booking Modal
function openBookingModal() {
  // Implementation for booking modal
  // This could be expanded based on specific booking system requirements
  window.location.href = "https://calendly.com/vikingos-barbershop"; // Example external booking system
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initTestimonials();

  // Intersection Observer for animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  // Observe all service cards and testimonials
  document
    .querySelectorAll(".service-card, .testimonial-card")
    .forEach((el) => {
      observer.observe(el);
    });
});
