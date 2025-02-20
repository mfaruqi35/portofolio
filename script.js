document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    
    // Hitung posisi yang lebih pas
    const sectionHeight = targetSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const navHeight = document.querySelector(".navbar").offsetHeight;

    let targetPosition = targetSection.offsetTop - navHeight;

    // Jika section lebih kecil dari viewport, atur agar pas di tengah
    if (sectionHeight < windowHeight) {
      targetPosition = targetSection.offsetTop - navHeight - (windowHeight - sectionHeight) / 2;
    }

    smoothScrollTo(targetPosition);
  });
});

function smoothScrollTo(targetPosition) {
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

document.querySelector(".logo").addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah link default
  const homeSection = document.getElementById("home");

  // Scroll ke posisi yang sesuai
  window.scrollTo({
    top: homeSection.offsetTop,
    behavior: "smooth",
  });
});
