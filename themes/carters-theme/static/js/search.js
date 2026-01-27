const input = document.getElementById("search-input");
const resultsBox = document.getElementById("search-results");

// Apply placeholder from config
input.placeholder = window.siteConfig.search.placeholder;

input.addEventListener("input", () => {
  const query = input.value.trim();

  if (!query || !fuse) {
    resultsBox.style.display = "none";
    resultsBox.innerHTML = "";
    return;
  }

  const results = fuse.search(query).slice(0, 6);

  if (results.length === 0) {
    resultsBox.innerHTML = `
      <div class="search-empty">
        ${window.siteConfig.search.noResults}
      </div>
    `;
    resultsBox.style.display = "block";
    return;
  }

  resultsBox.innerHTML = results
    .map(r => {
      const label =
        r.item.type === "posts"
          ? window.siteConfig.search.labelPosts
          : window.siteConfig.search.labelProjects;

      return `
        <div class="search-result">
          <a href="${r.item.url}">
            <span class="search-title">${r.item.title}</span>
            <span class="search-type">${label}</span>
          </a>
        </div>
      `;
    })
    .join("");

  resultsBox.style.display = "block";
});
