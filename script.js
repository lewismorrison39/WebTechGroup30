function goToRandomCat() {
  const catPages = [
    "cats/cat1.html",
    "cats/cat2.html",
    "cats/cat3.html",
    "cats/cat4.html",
    "cats/cat5.html"
  ];

  const randomIndex = Math.floor(Math.random() * catPages.length);
  const randomPage = catPages[randomIndex];

  window.location.href = randomPage;
}
