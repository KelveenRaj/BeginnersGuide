var groceries = ['Milk', 'Cheese', 'Eggs'];

function listGroceries(){
    for(var i=0; i<groceries.length; i++){
        console.log(groceries[i]);
    }
}

listGroceries();

document.getElementById('box');addEventListener('click', function(){this.alert('Hello World');});