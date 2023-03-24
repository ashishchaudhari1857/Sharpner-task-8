var myform=document.getElementById('addForm');
var  itemlist=document.getElementById('items');
myform.addEventListener('submit' , addvalue);
 itemlist.addEventListener('click' ,remove);
function addvalue(e){
    e.preventDefault();
    var text=document.getElementById('item').value;
    console.log(text);
    var li = document.createElement('li');
     li.className='list-group-item';
     li.appendChild(document.createTextNode(text));
     var deletbutton= document.createElement('buttton');
     deletbutton.className = 'btn btn-danger btn-sm float-right delete';
     deletbutton.appendChild(document.createTextNode('X'));

       li.appendChild(deletbutton);
       itemlist.appendChild(li);
    

}

function remove(e){
    // e.preventDefault();
    if(e.target.classList.contains('delete'))
{
    if(confirm('are you sure!')){
        var lit=e.target.parentElement;
        itemlist.removeChild(lit);
    }
}
}