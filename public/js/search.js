let fuse;
let pages = [];

fetch("/index.json")
  .then(res => {
    if (!res.ok) {
      throw new Error("index.json not found");
    }
    return res.json();
  })
  .then(data => {
    pages = data;

    fuse = new Fuse(pages, {
      keys: ["title", "summary", "tags"],
      threshold: 0.3
    });
  })
  .catch(err => console.error(err));

const input = document.getElementById("search-input");
const resultsBox = document.getElementById("search-results");

if (input) {
  input.addEventListener("input", () => {
    const query = input.value.trim();

    if (!query || !fuse) {
      resultsBox.style.display = "none";
      resultsBox.innerHTML = "";
      return;
    }

    const results = fuse.search(query).slice(0, 6);

    resultsBox.innerHTML = results
      .map(r => `
        <div class="search-result">
          <a href="${r.item.url}">
            ${r.item.title}
            <span>${r.item.type}</span>
          </a>
        </div>
      `)
      .join("");

    resultsBox.style.display = "block";
  });
}

document.addEventListener("click", e => {
  if (!e.target.closest(".nav-search")) {
    resultsBox.style.display = "none";
  }
});