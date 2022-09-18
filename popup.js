let btn = document.getElementById("changefont")
chrome.storage.sync.get("color",({color}) => {
btn.style.backgroundColor = color
})

btn.addEventListener("click", async() => {
 let [tab] = await chrome.tabs.query({active:true, currentWindow:true})
 chrome.scripting.executeScript ({
 target :{tabId : tab.id},
 function: () => {
 let elems = document.querySelectorAll("*");
for(var i=0;i<elems.length;i++){
 elems[i].style.fontFamily = "Comic Sans MS";
}
}
})
})