function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function() {
        if (this.readyState==4 && this.status==200) {
            var response= JSON.parse(this.responseText);

            var output = "<table> <tr><th>ItemNo</th><th>Item</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
            var p= response.shoppinglist;

            for(let i=0;i<p.length;i++) {
                output+="<tr><th>"+p[i].ItemNo + "</th>" + "<th>" + p[i].Item + "</th>" + "<th>" +p[i].Quantity + "</th>" + "<th>" + p[i].Unit + "</th>" + "<th>" + p[i].Department + "</th>" + "<th>" + p[i].Notes + "</th>" + "</tr>";
            }

            output+= "</table>";

            document.getElementById("demo").innerHTML=output;
            document.getElementById("head").innerHTML ="<h1> Grocery Shopping List </h1>";

        }

    };

xhttp.open("GET","list.json",true);
xhttp.send();
}