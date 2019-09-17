window.onload = function() {
    $('#cookies').load('modulos/cookies.html');
    $('#priv').load('modulos/privacidad.html');
    $('#garantia').load('modulos/garantia.html');
    $('#foot').load('modulos/footer.html');
    if(sessionStorage.getItem("id")!=null){
        var nombre = sessionStorage.getItem("name")
        document.getElementById('user').innerHTML = nombre;
        document.getElementById("cerrar").style.display = "block";
        document.getElementById("crear").style.display = "none";
        document.getElementById("inicio").style.display = "none";

        document.getElementById("cerrar2").style.display = "block";
        document.getElementById("crear2").style.display = "none";
        document.getElementById("inicio2").style.display = "none";
    }else{
        document.getElementById('user').innerHTML = "Tu cuenta";
        document.getElementById("cerrar").style.display = "none";
        document.getElementById("crear").style.display = "block";
        document.getElementById("inicio").style.display = "block";

        document.getElementById("cerrar2").style.display = "none";
        document.getElementById("crear2").style.display = "block";
        document.getElementById("inicio2").style.display = "block";
    }
     
    mostrar();
};



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
    var dataCars = localStorage.getItem("dataCars");
    dataCars = JSON.parse(dataCars); 
    if(dataCars == null)
        dataCars = [];
    var car = JSON.stringify({
        ID    : id,
        Nombre  : document.getElementById("nombre").value ,
        Stock  : document.getElementById("qtybutton").value ,
        Precio : document.getElementById("precio").value,
        Clave : document.getElementById("clave_interna").value
    });
    dataCars.push(car);
    localStorage.setItem("dataCars", JSON.stringify(dataCars));
    mostrar();

};

function limpiar(){
    localStorage.removeItem("dataCars");
    mostrar();
}

function deleteCar(selected_index){
    var dataCars = localStorage.getItem("dataCars");
    dataCars = JSON.parse(dataCars);
    dataCars.splice(selected_index, 1);
    localStorage.setItem("dataCars", JSON.stringify(dataCars));
    mostrar();
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
                sessionStorage.setItem('id', data.data.id); //nombreAccion
                sessionStorage.setItem('name', data.data.name); //nombreAccion;
                window.location.assign("index.html");  
            }else{
                alert(data.message)  
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
};


function registrar(){
    var nombre = $("#name").val(); 
    var usuario = $("#user1").val(); 
    var email = $("#email").val(); 
    var pass = $("#password1").val(); 
    var datos = {nombre, usuario, email, pass}
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/ad-usuarios/new-user",
        data: datos,
        success: function(data) {                       
            if(data.success==true){
                alert(data.message)
                location.reload();
            }else{
                alert(data.message) 
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
};

function cerrar(){
    sessionStorage.removeItem('id'); 
   
    sessionStorage.removeItem('name');
    
    window.location.assign("index.html");  
}

function search(){
    if( $("#buscar").val() != ''){
        var nombre = $("#buscar").val();
    }
    if( $("#busca1").val() != ''){
        var nombre = $("#busca1").val();
    }
    fetch('http://localhost:3000/products/general_search/'+nombre)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        if(myJson.success==true){
            localStorage.setItem('busqueda',JSON.stringify(myJson.data));
            document.getElementById("busqueda").style.display = "none";
            window.location.assign("tienda.html");
        }else{
            alert('Problemas con la conexión al servidor 1');
        }
    });
    
}

function search2(){
    if( $("#busca2").val() != ''){
        var nombre = $("#busca2").val();
    }
    if( $("#busca").val() != ''){
        var nombre = $("#buscar").val();
    }    
    fetch('http://localhost:3000/products/general_search/'+nombre)    
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        if(myJson.success==true){
            localStorage.setItem('busqueda',JSON.stringify(myJson.data));
            document.getElementById("busqueda2").style.display = "none";
            window.location.assign("tienda.html");
        }else{
            alert('Problemas con la conexión al servidor 2');    
        }
    });
    
}

function search3(){
    if( $("#busca3").val() != ''){
        var nombre = $("#busca3").val();
    }
    if( $("#busca5").val() != ''){
        var nombre = $("#busca5").val();
    }
    fetch('http://localhost:3000/products/general_search/'+nombre)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        if(myJson.success==true){
            localStorage.setItem('busqueda',JSON.stringify(myJson.data));
            document.getElementById("busqueda3").style.display = "none";
            window.location.assign("tienda.html");
        }else{
            alert('Problemas con la conexión al servidor 3');
        }
    });
    
}

function enter2(num){
    //alert(num)
    if(event.keyCode == 13){
        if(num == 1){
            search3()
        }
        if(num == 2){
            search()
        }
    } 
}

function to_reg(){
    alert('registrar')
    window.location.assign("login-registro.html");
    document.getElementById("#iniciar").removeClass("active");
    $("#registrar").addClass("active");
};


//Modal de productos
function showmodal(valor) {
    fetch('http://localhost:3000/products/search/'+valor)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        var divOut = document.getElementById('modal');
        var Product = myJson;
        var txtOut = "";
        txtOut += `<div class="modal-header">`;
        txtOut += `<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>`;
        txtOut += `</div>`;
        //txtOut += `<div id="not" class="alert alert-success" role="alert"> ¡Producto agregado!`;
        //txtOut += `</div>`;
        txtOut += `<div class="modal-body">`;
        txtOut += `<div class="row">`;
        txtOut += `<div class="col-md-5 col-sm-12 col-xs-12">`;
        txtOut += `<div class="tab-content quickview-big-img">`;
        txtOut += `<div id="pro-1" class="tab-pane fade show active">`;
        txtOut += `<img src="http://tiendavirtual.dyndns.org:62/replace-sys/imagenes_productos/${Product.clave_interna}/${Product.clave_interna}-001.jpg" alt="${Product.nombre}">`;
        txtOut += `</div>`;
        txtOut += `<div id="pro-2" class="tab-pane fade">`;
        txtOut += `<img src="assets/images/product/quickview-l2.jpg" alt="">`;
        txtOut += `</div>`;
        txtOut += `<div id="pro-3" class="tab-pane fade">`;
        txtOut += `<img src="assets/images/product/quickview-l3.jpg" alt="">`;
        txtOut += `</div>`;
        txtOut += `<div id="pro-4" class="tab-pane fade">`;
        txtOut += `<img src="assets/images/product/quickview-l2.jpg" alt="">`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `<div class="quickview-wrap mt-15">`;
        txtOut += `<div class="quickview-slide-active owl-carousel nav nav-style-2" role="tablist">`;
        txtOut += `<a class="active" data-toggle="tab" href="#pro-1"><img src="assets/images/product/quickview-s1.jpg" alt=""></a>`;
        txtOut += `<a data-toggle="tab" href="#pro-2"><img src="assets/images/product/quickview-s2.jpg" alt=""></a>`;
        txtOut += `<a data-toggle="tab" href="#pro-3"><img src="assets/images/product/quickview-s3.jpg" alt=""></a>`;
        txtOut += `<a data-toggle="tab" href="#pro-4"><img src="assets/images/product/quickview-s2.jpg" alt=""></a>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `<div class="col-md-7 col-sm-12 col-xs-12">`;
        txtOut += `<div class="product-details-content quickview-content">`;
        txtOut += `<h2>${Product.nombre}</h2>`;
        txtOut += `<div class="product-details-price">`;
        txtOut += `<span>$${Product.precio}</span>`;
        txtOut += `<input class="cart-plus-minus-box" type="number" style="display:none" id="precio" name="precio" value="${Product.precio}">`;
        txtOut += `<input class="cart-plus-minus-box" type="text" style="display:none" id="nombre" name="nombre" value="${Product.descripcion}">`;
        txtOut += `<input class="cart-plus-minus-box" type="text" style="display:none" id="clave_interna" name="clave_interna" value="${Product.clave_interna}">`;
        if(Product.descuento){
            txtOut += `<span  class="old">$${Product.precio}</span>`;
        }
        txtOut += `</div>`;
        txtOut += `<p>${Product.descripcion.split('=')[0]}</p>`;
        txtOut += `<div class="pro-details-list">`;
            txtOut += `<ul>`;
                txtOut += `<li>- Marca:</li>`;
                txtOut += `<li>  ${Product.marca}</li>`;
            txtOut += `</ul>`;
        txtOut += `</div>`;
        txtOut += `<div class="pro-details-size-color">`;
            txtOut += `<div class="pro-details-size">`;
                txtOut += `<span>Compatibilidad</span>`;
                txtOut += `<div class="pro-details-size-content">`;
                    txtOut += `<ul>`;
                        txtOut += `<li>${Product.autos}</li>`;
                    txtOut += `</ul>`;
                txtOut += `</div>`;
            txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `<div class="pro-details-size-color">`;
            txtOut += `<div class="pro-details-size">`;
                txtOut += `<span>Stock</span>`;
                txtOut += `<div class="pro-details-size-content">`;
                    txtOut += `<ul>`;
                        txtOut += `<li>${Product.stock}</li>`;
                    txtOut += `</ul>`;
                txtOut += `</div>`;
            txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `<div class="pro-details-quality">`;
        txtOut += `<div class="cart-plus-minus">`;
        txtOut += `<input class="cart-plus-minus-box" type="text" id="qtybutton" name="qtybutton" value="1">`;
        txtOut += `</div>`;
        txtOut += `<div class="pro-details-cart btn-hover">`;
        txtOut += `<a id="agregarcarrito" onclick="agregar('${Product.codigo}')" href="#">Agregar al carrito</a>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `<div class="pro-details-meta">`;
        txtOut += `<span>Categorías :</span>`;
        txtOut +=  `<ul>`;
        txtOut += `<li><a href="#"> ${Product.categoria}</a></li>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `</div>`;

        divOut.innerHTML = txtOut;
    });
};

//listado de productos
function listar(allProducts){
    var divOut = document.getElementById('productos');
    var divOut2 = document.getElementById('shop-2');
    var txtOut = "";
    var txtOut2 = "";
    for (var k in allProducts) {
        txtOut += `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">`;
        txtOut += `<div style="width:150px"; class="product-wrap product-border-1 mb-30">`;
        txtOut += `<div class="product-img">`;
        txtOut += `<a data-toggle="modal" data-target="#exampleModal" onclick="showmodal('${allProducts[k].codigo}')"><img  src="http://tiendavirtual.dyndns.org:62/replace-sys/imagenes_productos/${allProducts[k].clave_interna}/${allProducts[k].clave_interna}-001.jpg" alt="${allProducts[k].nombre}"></a>`;
        if(allProducts[k].descuento){
            txtOut += `<span class="product-badge">${allProducts[k].descuento}</span>`;
        }
        txtOut += `<div class="product-action">`;
        txtOut += `<a data-toggle="modal" data-target="#exampleModal" onclick="showmodal('${allProducts[k].codigo}')" title="Quick View" ><i class="la la-plus"></i></a>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `<div class="product-content product-content-padding text-center">`;
        txtOut += `<h4><a data-toggle="modal" data-target="#exampleModal" onclick="showmodal('${allProducts[k].codigo}')"   href="#">${allProducts[k].nombre}</a></h4>`;
        txtOut += `<p>${allProducts[k].descripcion.split('=')[0].substr(0,20)}</p>`;
        //txtOut += `<h4>Marca: ${allProducts[k].marca}</h4>`;
        txtOut += `<div class="product-price">`;
        txtOut += `<span>$${allProducts[k].precio} pesos</span>`;
        if(allProducts[k].descuento){
            txtOut += `<span class="old">$${allProducts[k].precio}</span>`;
        }
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut += `</div>`;
        txtOut2 += `<div class="shop-list-wrap mb-30">`;
        txtOut2 += `<div class="row">`;
        txtOut2 += `<div class="col-xl-4 col-lg-5 col-md-5 col-sm-6">`;
        txtOut2 += `<div class="product-wrap product-border-1">`;
        txtOut2 += `<div class="product-img">`;
        txtOut2 += `<a data-toggle="modal" data-target="#exampleModal" onclick="showmodal('${allProducts[k].codigo}')">`;
        txtOut2 += `<img src="http://tiendavirtual.dyndns.org:62/replace-sys/imagenes_productos/${allProducts[k].clave_interna}/${allProducts[k].clave_interna}-001.jpg" alt="product">`;
        txtOut2 += `</a>`;
        if(allProducts[k].descuento){
            txtOut2 += `<span class="product-badge">${allProducts[k].descuento}</span>`;
        }
        txtOut2 += `<div class="product-action">`;
        txtOut2 += `<a data-toggle="modal" data-target="#exampleModal" onclick="showmodal('${allProducts[k].codigo}')" title="Quick View" href="#"><i class="la la-plus"></i></a>`;
        txtOut2 += `</div>`;
        txtOut2 += `</div>`;
        txtOut2 += `</div>`;
        txtOut2 += `</div>`;
        txtOut2 += `<div class="col-xl-8 col-lg-7 col-md-7 col-sm-6">`;
        txtOut2 += `<div class="shop-list-content">`;
        txtOut2 += `<h3><a data-toggle="modal" data-target="#exampleModal" onclick="showmodal('${allProducts[k].codigo}')">${allProducts[k].nombre}</a></h3>`;                                             
        txtOut2 += `<div class="product-list-price">`;
        txtOut2 += `<span>$ ${allProducts[k].precio}</span>`;
        if(allProducts[k].descuento){
            txtOut2 += `<span class="old">$${allProducts[k].precio}</span>`;
        }
        txtOut2 += `</div>`;
        txtOut2 += `<p>${allProducts[k].descripcion.split('=')[0]}</p>`;
        txtOut2 += `<div class="shop-list-btn-wrap">`;
        txtOut2 += `<div class="shop-list-cart default-btn btn-hover">`;
        txtOut2 += `<a id="agregarcarrito" onclick="agregar('${allProducts[k].codigo}') class="white--text" href="#">AGREGAR AL CARRITO</a>`;
        txtOut2 += `</div>`;
        txtOut2 += `</div>`;
        txtOut2 += `</div>`;
        txtOut2 += `</div>`;
        txtOut2 += `</div>`;
        txtOut2 += `</div>`;
    }
    divOut.innerHTML = txtOut;
    divOut2.innerHTML = txtOut2;
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

function datosusuario(){
    var nombre = $("#nombre").val(); 
    var pais = $("#pais").val(); 
    var direccion = $("#direccion").val(); 
    var colonia = $("#colonia").val(); 
    var estado = $("#estado").val(); 
    var municipio = $("#municipio").val();
    var codigo_postal = $("#codigo_postal").val(); 
    var telefono = $("#telefono").val();
    var email = $("#email").val();
    var calle = $("#calle").val();
    var num_interior = $("#num_interior").val();
    var id_user = sessionStorage.getItem('id');
    var datos = {id_user, nombre, pais, direccion, colonia, estado, municipio, codigo_postal, telefono, email,calle,num_interior}
    //alert(datos);
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/ad-usuarios/update-user",
        data: datos,
        success: function(data) {                       
            if(data.success==true){
                alert(data.message)
                //sessionStorage.setItem('id', data.data.id); //nombreAccion;
                //alert(sessionStorage.getItem('id'))
                //sessionStorage.setItem('name', data.data.name); //nombreAccion;
                //alert(sessionStorage.getItem("name"))
                //alert('datos registrados')
                //window.location.assign("index.html");  
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