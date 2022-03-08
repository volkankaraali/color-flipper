const colorPicker = document.getElementById("colorPicker")
const colorPickerText = document.getElementById("textColorPicker")
const randomColorBtn = document.getElementById("randomColorBtn")
const randomColorText = document.getElementById("textRandomColor")

let colorFromColorPicker = "";
let colorFromRandomColor = "";

//create color with color picker input
colorPicker.addEventListener("input", () => {
    colorFromColorPicker = colorPicker.value;
    document.getElementById("body").style.backgroundColor = colorFromColorPicker;
    colorPickerText.innerText = colorFromColorPicker
    //console.log(colorFromColorPicker)
})


//toast div
const toastDiv = document.getElementById('liveToast')

//copy toast for colorPicker 
const toastForColorPicker = document.getElementById('liveToastBtnColorPicker')

toastForColorPicker.addEventListener('click', function () {
    toastDiv.innerHTML = `<div class="d-flex">
    <div id="toast-body" class="toast-body ">
    ${colorFromColorPicker} is copied!
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`
    let toast = new bootstrap.Toast(toastDiv)
    navigator.clipboard.writeText(colorFromColorPicker);
    toast.show()
})

//copy for random color
const toastForRandomColor = document.getElementById('liveToastBtnRandomColor')
toastForRandomColor.addEventListener("click", () => {
    toastDiv.innerHTML = `<div class="d-flex">
    <div id="toast-body" class="toast-body ">
    ${colorFromRandomColor} is copied!
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`
    let toast = new bootstrap.Toast(toastDiv)
    navigator.clipboard.writeText(colorFromColorPicker);
    toast.show()
})

//create random color 
randomColorBtn.addEventListener("click", () => {
    colorFromRandomColor = Math.floor(Math.random() * 16777215).toString(16)
    //console.log(colorFromRandomColor)
    document.getElementById("body").style.backgroundColor = "#" + colorFromRandomColor;
    randomColorText.innerText = "#" + colorFromRandomColor

})


//default colors handler

const handleColor = (color) => {
    document.getElementById("body").style.backgroundColor = color
}