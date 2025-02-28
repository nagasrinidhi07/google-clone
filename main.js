const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        performSearch();
    }
});

function performSearch() {
    const input = searchBar.value.trim();
    if (input) {
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(input);
    }
}