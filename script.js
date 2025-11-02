const notesContainers=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".inputbox");


function showNotes(){
 notesContainers.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updatestorage(){
localStorage.setItem("notes",notesContainers.innerHTML);

}

createBtn.addEventListener("click",()=>{
 let inputBox=document.createElement("p");
 let img=document.createElement("img");
 inputBox.className="inputbox";
 inputBox.setAttribute("contenteditable","true");
 img.src="images/delete.png";
 notesContainers.appendChild(inputBox).appendChild(img);
 updatestorage();
})

notesContainers.addEventListener("click",(e)=>{
 if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updatestorage();
 }
 else if(e.target.tagName==="P"){
    notes=document.querySelectorAll(".inputbox");
    notes.forEach(nt =>{
        nt.onkeyup =function(){
            updatestorage();
        }
        
    })
}
})
    document.addEventListener("keydown",event=>{
        if(event.key==="Enter"){
            document.execCommand('insertLineBreak');
            event.preventDefault();
           
            document.activeElement.blur();
        
        }
        
    
})