const article = document.querySelector("article");

if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  const heading = article.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;
  const targetElement = date ?? heading;

  if (targetElement) {
    targetElement.insertAdjacentElement("afterend", badge);
  } else {
    // Create a new container at the top of the article if no suitable element is found
    const container = document.createElement("div");
    container.classList.add("reading-time-container");
    container.appendChild(badge);
    article.insertAdjacentElement("afterbegin", container);
  }
} else {
  console.error("Article element not found.");
}
