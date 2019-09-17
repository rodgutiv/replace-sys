window.onload = function() {
    //$('#tool').load('modulos/toolbar.html');
    $('#cookies').load('modulos/cookies.html');
    $('#priv').load('modulos/privacidad.html');
    $('#garantia').load('modulos/garantia.html');
    $('#foot').load('modulos/footer.html');
    if(sessionStorage.getItem("id")!=null){
        var nombre = sessionStorage.getItem("name")
        ///alert('si')
        document.getElementById('user').innerHTML = nombre;
        document.getElementById("cerrar").style.display = "block";
        document.getElementById("crear").style.display = "none";
        document.getElementById("inicio").style.display = "none";

        document.getElementById("cerrar2").style.display = "block";
        document.getElementById("crear2").style.display = "none";
        document.getElementById("inicio2").style.display = "none";
    }else{
        //alert('no')
        document.getElementById('user').innerHTML = "Tu cuenta";
        document.getElementById("cerrar").style.display = "none";
        document.getElementById("crear").style.display = "block";
        document.getElementById("inicio").style.display = "block";

        document.getElementById("cerrar2").style.display = "none";
        document.getElementById("crear2").style.display = "block";
        document.getElementById("inicio2").style.display = "block";
    }
    mostrar();
    
    fetch('http://localhost:3000/products/specific/categoria')
    //fetch('http://192.168.0.190:3000/products/specific/brand')
    .then(function(response) {
        //alert(response.json())
        return response.json();
    })
    .then(function(myJson) {
        var divOut = document.getElementById('categoria');        
        var allCategoria = myJson;
        var txtOut = "";
        //alert(allProducts[0].nombre)
        txtOut += `<select id="catego" onchange="tipo()" class="email s-email s-wid">`;
        txtOut += `<option> </option>`;
        for (var k in allCategoria) {
            txtOut += `<option>${allCategoria[k]}</option>`;   
        }
        txtOut += `</select>`;
        divOut.innerHTML = txtOut;
    });
};
function tipo(){
    document.getElementById("tipo1").style.display = "none";
    document.getElementById("marca1").style.display = "none";
    var categoria = document.getElementById("catego").value;
    fetch('http://localhost:3000/products/specific/tipo/'+categoria)
    //fetch('http://192.168.0.190:3000/products/specific/brand')
    .then(function(response) {
        //alert(response.json())
        return response.json();
    })
    .then(function(myJson) {
        var divOut = document.getElementById('tipo');      
        var divOut2 = document.getElementById('marca');   
        var allTipo = myJson;
        var txtOut = "";
        var txtOut2 = "";
        //alert(allProducts[0].nombre)
        txtOut += `<select id="tipos" onchange="marca()" class="email s-email s-wid">`;
        txtOut += `<option> </option>`;
        for (var k in allTipo) {
            txtOut += `<option>${allTipo[k]}</option>`;   
        }
        txtOut2 += `</select>`;
        txtOut2 += `<select id="marcas" onchange="marca()" class="email s-email s-wid">`;
        txtOut2 += `<option> </option>`;
        txtOut2 += `</select>`;
        divOut.innerHTML = txtOut;
        divOut2.innerHTML = txtOut2;
        if(allTipo.length == 1){
            this.categoria(allTipo);
        }
    });
}
function marca(tip){
    document.getElementById("marca1").style.display = "none";
    if(tip != null){
        var tipo = tip;
    }else{
        var tipo = document.getElementById("tipos").value;
    } 
    
    fetch('http://localhost:3000/products/specific/marca/'+tipo)
    //fetch('http://192.168.0.190:3000/products/specific/brand')
    .then(function(response) {
        //alert(response.json())
        return response.json();
    })
    .then(function(myJson) {
        var divOut = document.getElementById('marca');      
        var allMarca = myJson;
        var txtOut = "";
        //alert(allProducts[0].nombre)
        txtOut += `<select id="marcas" class="email s-email s-wid">`;
        txtOut += `<option> </option>`;
        for (var k in allMarca) {
            txtOut += `<option>${allMarca[k]}</option>`;   
        }
        txtOut += `</select>`;
        divOut.innerHTML = txtOut;
    });
}
function busqueda(){
    var dataProducts = [];
    
    if(document.getElementById("catego").value != null){
        //alert(categoria)
        if(document.getElementById("tipos").value != 0){
            //alert(tipo)
            if(document.getElementById("marcas").value != 0){
                //alert(marca)
                var marca = document.getElementById("marcas").value;
                var tipo = document.getElementById("tipos").value;
                var categoria = document.getElementById("catego").value;
                dataProducts = {categoria, tipo, marca};
            }else{
                var tipo = document.getElementById("tipos").value;
                var categoria = document.getElementById("catego").value;
                dataProducts = {categoria, tipo};
            }
            
        }else{
            var categoria = document.getElementById("catego").value;
            dataProducts = {categoria};
        }
        
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/products/specific",
        //data: [JSON.parse(dataProducts)],
        data: dataProducts,
        success: function(data) {                       
            if(data.success==true){
                //alert(data.data[0].codigo)
                localStorage.setItem('busqueda',JSON.stringify(data.data));
                window.location.assign("tienda.html");
            }else{
                alert('Problemas con la conexión al servidor');
                
                //window.location.assign("..index.html");     
            }
        },
        error: function(err) {
            var msg = 'Status: ' + err;
            alert(msg);
        },
        failure: function(){
            alert("Error");
        }
    });    
}
function mostrar(){
    var divOut = document.getElementById("carrito");
    if(localStorage.getItem("dataCars")!=null){
        //alert('si')
        var dataCars = localStorage.getItem("dataCars");
        var datos = "";
        var elementos = document.getElementById("items");
        var elementos2 = document.getElementById("items2");
        var total = document.getElementById("total");
        var dataCars = JSON.parse(dataCars);
        var cont = 0
        var suma = 0
        //alert(dataCars)
        for(var i in dataCars){
            //alert('entro')
            var sum = 0
            var cli = JSON.parse(dataCars[i]);
            datos += `<li class="single-product-cart">`;
            datos += `<div class="cart-img">`;
            datos += `<a href="#"><img src="http://tiendavirtual.dyndns.org:62/replace-sys/imagenes_productos/${cli.Clave}/${cli.Clave}-001.jpg" alt=""></a>`;
            datos += `</div>`;
            datos += `<div class="cart-title">`;
            datos += `<h4><a href="#">${cli.Nombre.split('=')[0]}</a></h4>`;
            datos += `<span>${cli.Stock} × ${cli.Precio}</span>`;
            datos += `</div>`;
            datos += `<div class="cart-delete">`;
            datos += `<a onclick="deleteCar('${cli.ID}')" href="#">×</a>`;
            datos += `</div>`;
            datos += `</li>`;
            cont++;
            sum = cli.Stock * cli.Precio;
            suma = parseFloat(suma) + parseFloat(sum);
        }
        divOut.innerHTML = datos;
        var num = `<span class="count-style">${cont}</span>`;
        var tot = `<h4>Subtotal: <span>$ ${suma.toFixed(2)}</span></h4>`;
        elementos.innerHTML = num;
        elementos2.innerHTML = num;
        total.innerHTML = tot;
        
    }
}





function agregar(id){
    var dataCars = localStorage.getItem("dataCars");//Retrieve the stored data

    dataCars = JSON.parse(dataCars); //Converts string to object

    if(dataCars == null) //If there is no data, initialize an empty array
        dataCars = [];
    var car = JSON.stringify({
        ID    : id,
        Nombre  : document.getElementById("nombre").value,
        Stock  : document.getElementById("qtybutton").value,
        Precio : document.getElementById("precio").value,
        Clave : document.getElementById("clave_interna").value
    });
    dataCars.push(car);
    localStorage.setItem("dataCars", JSON.stringify(dataCars));

    //alert("The data was saved.");
    //document.getElementById('modal').style.display = "none";
    
    /*for(var i in dataCars){
        var cli = JSON.parse(dataCars[i]);
        alert(cli.ID)
        alert(cli.nombre)
        alert(cli.Stock)
        alert(cli.Precio)
    }*/
    mostrar();

};


function limpiar(){
    //alert(selected_index)
    localStorage.removeItem("dataCars");
    //alert("Carrito Vacio");
    mostrar();
    //window.location.assign("index.html");  
}

function deleteCar(selected_index){
    //alert(selected_index)
    var dataCars = localStorage.getItem("dataCars");
    dataCars = JSON.parse(dataCars);
    dataCars.splice(selected_index, 1);
    localStorage.setItem("dataCars", JSON.stringify(dataCars));
    //ListCar();
    //alert("Client deleted."+selected_index);
    //location.reload();
    mostrar();
}
function cerrar(){
    sessionStorage.removeItem('id'); 
   
    sessionStorage.removeItem('name');
    
    window.location.assign("index.html"); 
}

function logear(){
            
    var nombre = $("#id").val(); 
    var pass = $("#password").val(); 
    var datos = {nombre, pass}
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/ad-usuarios/login",
        data: datos,
        success: function(data) {                       
            if(data.success==true){
                alert(data.message)
                sessionStorage.setItem('id', data.data.id); //nombreAccion;
                //alert(sessionStorage.getItem('id'))
                sessionStorage.setItem('name', data.data.name); //nombreAccion;
                //alert(sessionStorage.getItem("name"))
                window.location.assign("index.html");  
            }else{
                alert(data.message)
                
                //window.location.assign("..index.html");     
            }
        },
        error: function(err) {
            var msg = 'Status: ' + err;
            alert(msg);
        },
        failure: function(){
            alert("Error");
        }
    });    
    //window.location.assign("http://localhost:8081/Reface/index.html");        
};

function busca(word){
    //alert('hola')
    
    //alert('DATOS: '+nombre) 
    //alert(nombre)
    fetch('http://localhost:3000/products/general_search2/'+word)
    //fetch('http://192.168.0.190:3000/products/specific/brand')
    .then(function(response) {
        //alert(response.json())
        return response.json();
    })
    .then(function(myJson) {
        //alert(myJson)
        if(myJson.success==true){
            //alert('entro')
            //alert(data.data[0].codigo)
            localStorage.setItem('busqueda',JSON.stringify(myJson.data));
            document.getElementById("busqueda1").style.display = "none";
            //document.getElementById("buscar").val() = '';
            window.location.assign("tienda.html");
        }else{
            alert('Problemas con la conexión al servidor');
            
            //window.location.assign("..index.html");     
        }
    });

};

function busca2(word){
    //alert('hola')
    
    //alert('DATOS: '+nombre) 
    //alert(nombre)
    fetch('http://localhost:3000/products/general_search/'+word)
    //fetch('http://192.168.0.190:3000/products/specific/brand')
    .then(function(response) {
        //alert(response.json())
        return response.json();
    })
    .then(function(myJson) {
        //alert(myJson)
        if(myJson.success==true){
            //alert('entro')
            //alert(data.data[0].codigo)
            localStorage.setItem('busqueda',JSON.stringify(myJson.data));
            document.getElementById("busqueda1").style.display = "none";
            //document.getElementById("buscar").val() = '';
            window.location.assign("tienda.html");
        }else{
            alert('Problemas con la conexión al servidor');
            
            //window.location.assign("..index.html");     
        }
    });

};

function to_reg(){
    //alert('registrar')
    window.location.assign("login-registro.html");
    document.getElementById("#iniciar").removeClass("active");
    document.getElementById("#registrar").addClass("active");
};


function nuevos(){
    fetch('http://localhost:3000/products/nuevos')
    //fetch('http://192.168.0.190:3000/products/search/'+valor)
    .then(function(response) {
        //alert(response.json())
        return response.json();
    })
    .then(function(myJson) {
        localStorage.setItem('busqueda',JSON.stringify(myJson.data));
        window.location.assign("tienda.html");
    });
}
