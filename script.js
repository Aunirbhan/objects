let mainContainer = document.getElementById("mainContainer")
let newDiv = document.createElement("div")
mainContainer.append(newDiv)

let luffy = {}
let zoro = {}
let sanji = {}

luffy.name = "Luffy"
luffy.role = "Captain"
luffy.img = "images/luffy.jpeg"
luffy.action = function(){
    document.body.style.backgroundColor = "#cd5c5c"
}

zoro.name = "Zoro"
zoro.role = "Swordsmen"
zoro.img = "images/zoro.jpeg"
zoro.action = function(){
    document.body.style.backgroundColor= "#2e8b57"
}

sanji.name = "Sanji"
sanji.role = "Cook"
sanji.img = "images/sanji.jpeg"
sanji.action = function(){
    document.body.style.backgroundColor = "#f0e68c"
}

let newArr = [luffy,zoro,sanji]

for(let i=0;i<newArr.length;i++){

    let newName = document.createElement("h1")
    newName.append(newArr[i].name)

    let newRole = document.createElement("p")
    newRole.append(newArr[i].role)

    let newImg = document.createElement("img")
    newImg.src = newArr[i].img

    let newAction = document.createElement("button")
    newAction.innerHTML = "Action!!"
    newAction.onclick = newArr[i].action

    newDiv.append(newName, newRole, newImg, newAction)
}