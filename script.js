 window.onload=function(){
    console.log(localStorage.getItem('error'))
    if (localStorage.getItem('error')=="false") {
       console.log("Bienvenido nuevamente");
       location.href="dashboard.html";
    } else {  

    var form=document.getElementById("formulario")
    formulario.reset();
        form.addEventListener('submit', e =>{

            const inputNombre =document.getElementById("input-nombre").value;
            const inputMail=document.getElementById("input-correo").value;
                        
            e.preventDefault();

            function verificarNombre(){
                
                if(inputNombre.length<3||inputNombre.length==""){
                    document.getElementById("error-nombre").style.display ="block";
                    rojo("nombre");              
                    console.log("ingrese un Nombre verdadero "+!isNaN(inputNombre));
                    document.getElementById("error-nombre").style.display ="block";
                    rojo("nombre");
                    return false;        
                }else if(!isNaN(inputNombre)){
                    document.getElementById("error-nombre").style.display ="block";
                    rojo("nombre");   
                    return false;     
                }else{
                    document.getElementById("valido-nombre").style.display="block";
                    verde("nombre");
                    console.log("Nombre es ==> "+inputNombre);     
                    nombreValido=inputNombre;   
                    return true;
                } 
            }  

            function verificarCorreo(){
                
                var regexEmail= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                if(!regexEmail.test(inputMail)){
                    console.log("entrar un mail valido");
                    document.getElementById("error-correo").style.display ="block";
                    rojo("correo");
                }else{
                    document.getElementById("valido-correo").style.display ="block";
                    verde("correo");
                    console.log("Email es ==> "+inputMail);
                    correoValido=" "+inputMail;
                    return true;
                }
            }

            if ( verificarNombre() && verificarCorreo()){
                const peticion = async()=>{
                    try{
                            const respuesta= await fetch("https://basic-server-one.vercel.app/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email: "valeria@gmail.com",
                                password: "lppa2022"
                                })
                            })
                        const datos= await respuesta.json();
                        console.log(datos);                   
                        if(datos.error==true){
                            alert("Los datos ingresados no son válidos")
                        }else {
                            var reqError= datos.error;
                            var reqMessage= datos.message
                            localStorage.setItem('error',reqError);
                            localStorage.setItem('mensaje',reqMessage);
                            
                            console.log("Error: "+reqError+"- Mensaje: "+reqMessage)
                            location.href="dashboard.html";
                        }

                    }catch(error){
                        console.log("HORROR ==>"+error);
                        alert(error);               
                    }
                }
                peticion();        
        
            }else{
                e.preventDefault();
            }        
        })

        function rojo(e){
            document.getElementById("input-"+e).style.background = "rgb(255, 4, 2, 0.5)";
            document.getElementById("valido-"+e).style.display ="none";
        }
        function verde(e){
            document.getElementById("input-"+e).style.background = "rgb(157, 230, 188, 0.7)";
            document.getElementById("error-"+e).style.display="none";
        }
    }
}