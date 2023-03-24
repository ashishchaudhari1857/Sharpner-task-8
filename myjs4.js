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
function check(e){
    var tex=e.target.value.toLowerCase();
    // isme check krne ke hai
    var  items=itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
       var itemname=item.firstChild.textContent;
       if(itemname.toLowerCase().indexOf(tex)!=-1){
          item.style.display='block';
       }
       else{
        item.style.display='none';
       }
    });

}
