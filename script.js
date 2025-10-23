function showBeach() {
  document.getElementById("recommendation").innerHTML = `
    <h2>Beach Destinations</h2>
    <img src="https://source.unsplash.com/400x300/?beach" alt="Beach 1">
    <img src="https://source.unsplash.com/400x300/?sea" alt="Beach 2">
  `;
}

function showTemple() {
  document.getElementById("recommendation").innerHTML = `
    <h2>Temple Destinations</h2>
    <img src="https://source.unsplash.com/400x300/?temple" alt="Temple 1">
    <img src="https://source.unsplash.com/400x300/?ancient-temple" alt="Temple 2">
  `;
}

function showCountry() {
  document.getElementById("recommendation").innerHTML = `
    <h2>Explore by Country</h2>
    <img src="https://source.unsplash.com/400x300/?india" alt="India">
    <img src="https://source.unsplash.com/400x300/?japan" alt="Japan">
  `;
}
