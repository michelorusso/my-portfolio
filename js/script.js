var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

function addRecommendation() {
  const container = document.getElementById("all_recommendations");
  const textarea = document.getElementById("new_recommendation");
  const text = textarea.value.trim();

  if (text !== "") {
    const newRec = document.createElement("div");
    newRec.className = "recommendation";
    newRec.innerHTML = `<span>&#8220;</span>${text}<span>&#8221;</span>`;
    container.appendChild(newRec);
    textarea.value = "";
    alert("Thanks for your recommendation!");
  } else {
    alert("Please write a message before submitting.");
  }
}
