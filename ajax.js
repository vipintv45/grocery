
function call()
{
// creating an xhr object
var xhttp = new XMLHttpRequest();
//event listner
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        // document.getElementById("demo").innerHTML=JSON.parse(this.responseText);
        var x=JSON.parse(this.responseText);
        console.log(x)
        var y = x.grocery;
        console.log(y);
        var output="";
        var col=[];
        for(i=0;i<y.length;i++){
            
            for (var key in y[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }

            output+=y[i].item;

        }
        var table = document.createElement("table");

        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i = 0; i < y.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = y[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
        
        console.log(output);
        console.log(col)
    }
}
xhttp.open("GET","grocery.json",true);
xhttp.send();







}