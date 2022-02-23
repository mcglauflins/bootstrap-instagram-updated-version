function handleRadioMenuClick(event) {
  document.querySelectorAll(".radio-menu-container").forEach(elm => elm.classList.add("d-none"))
  document.querySelector(event.target.getAttribute("data-target")).classList.remove("d-none")
  console.log("radioMenuInputwasclicked")
}
  
  // this should be on a window.onload
 window.onload = function(){ 
  document.querySelectorAll(".radio-menu label").forEach(elm => elm.addEventListener("click", handleRadioMenuClick));
}
