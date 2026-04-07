const color_name = document.getElementById("color_form")
const btn = document.getElementById("bth_change")
const color_value = document.getElementById("color_place")


btn.addEventListener("click", ()=>{
    const color_data = color_name.value
    
    color_value.style.backgroundColor = color_data
})
