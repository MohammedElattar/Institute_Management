let xhr = new XMLHttpRequest(),
root = document.querySelector("[path-ref=root]").getAttribute("url")
console.log(root)
xhr.open("POST",`${root}user/add`)
xhr.onload = function(){
    console.log(xhr.responseText)
}
xhr.send()