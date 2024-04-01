import '/styles.scss'

const searchInput = document.querySelector("input")
searchInput.addEventListener("input", updateValue);

const suggestResponse = document.getElementById("suggestResponse")

async function updateValue(e) {
    suggestResponse.innerHTML = ""

    const searchTest = e.target.value
    if (searchTest.length <= 1) return


    const res = await fetch(import.meta.env.VITE_SUGGEST_API_URL + `/suggest?q=${searchTest}`)
    const response_json = await res.json()

    const list = response_json.suggest.map((item) => {
        return `<li class="list-group-item">${item}</li>`
    })
    suggestResponse.innerHTML = list.join("")
}