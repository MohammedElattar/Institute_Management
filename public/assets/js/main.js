let xhr = new XMLHttpRequest(),
root = document.querySelector("[path-ref=root]")
xhr.open("POST",`${root}user\add`)
xhr.onload = function(){
    console.log(xhr.responseText)
}
xhr.send()