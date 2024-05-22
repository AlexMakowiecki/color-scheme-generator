const schemeDisplayEl = document.getElementById("scheme-display")

document.addEventListener("DOMContentLoaded", renderNewScheme)

document.addEventListener("submit", (e) => {
  e.preventDefault()
  if (e.target.id === "scheme-gen-form") {
    renderNewScheme()
  }
})

schemeDisplayEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("scheme-color-button")) {
    const colorInfoEl = e.target.querySelector('.scheme-color-info')
    const color = colorInfoEl.textContent
    navigator.clipboard.writeText(color)
    colorInfoEl.textContent = "Copied!"
  }
})

schemeDisplayEl.addEventListener("mouseover", (e) => {
  e.target.focus()
})

schemeDisplayEl.addEventListener("focusout", (e) => {
  const colorInfoEl = e.target.querySelector('.scheme-color-info')
  colorInfoEl.textContent = colorInfoEl.dataset.hex
})

schemeDisplayEl.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("scheme-color-button")) {
    const colorInfoEl = e.target.querySelector('.scheme-color-info')
    colorInfoEl.textContent = colorInfoEl.dataset.hex
  }
})

function renderNewScheme() {
  const schemeSelectedType = document.getElementById("scheme-type-input").value.toLowerCase();
  const schemeSelectedColor = document.getElementById("scheme-color-input").value.slice(1);
  /* Using global variable. schemeDisplayEl === element.getElementById('scheme-display)*/
  schemeDisplayEl.classList.add("obscure")
  fetch(`https://www.thecolorapi.com/scheme?hex=${schemeSelectedColor}&mode=${schemeSelectedType}`)
    .then(res => res.json())
    .then(data => {
      const schemeColors = data.colors.map(colorData => colorData.hex.value)
      schemeColors.forEach((color, i) => {
        const schemeColorContainerEl = document.getElementById(`scheme-color-${i + 1}`)
        const schemeColorInfoEl = schemeColorContainerEl.querySelector('.scheme-color-info')
        schemeColorContainerEl.parentElement.ariaLabel = `Copy color with HEX value: ${color}`
        schemeColorInfoEl.dataset.hex = color
        schemeColorContainerEl.style.backgroundColor = color;
        schemeColorInfoEl.textContent = color;
        schemeDisplayEl.classList.remove("obscure")
      })
    })
}