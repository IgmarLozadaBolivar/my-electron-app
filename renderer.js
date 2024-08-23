const information = document.getElementById('info')
information.innerHTML = `Esta aplicación está usando Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    const res = await window.versions.ping()
    console.log(res)
}

func()

const saludar = document.getElementById('event')
saludar.addEventListener('click', (e) => {
    e.preventDefault()

    alert("Hola, querido usuario.")
})