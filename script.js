console.log("page loaded...");

var name= document.querySelector("#name");
// var intName = "Jane Doe"

function changeName(){
    var name= document.querySelector("#name");
    name.innerText="Emile Thigpen";

}

var names = [
    document.querySelector("#todd"),
    document.querySelector("#phil"),
];

function remove(id) {
    names[id].remove();
}

var reqCount=document.querySelector("#badge");
var reqs = 2;
reqCount.innerHTML = reqs;

function removeReq(){
    reqs--;
    reqCount.innerHTML = reqs;
}

var friendCount=document.querySelector("#friends");
var friends = 500;
friendCount.innerHTML = friends;

function addFriend(){
    friends++;
    friendCount.innerHTML = friends;
}