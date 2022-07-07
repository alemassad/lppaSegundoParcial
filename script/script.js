 window.onload=function(){
    
    if (localStorage.getItem("error")=="false") {
       console.log("Bienvenido nuevamente");
       location.href="dashboard.html";
    } else {  

        var form=document.getElementById("formulario")
        document.getElementById("input-correo").focus();
        formulario.reset();
            form.addEventListener("submit", e =>{

            const inputPass =document.getElementById("input-nombre").value;
            const inputMail=document.getElementById("input-correo").value;
                        
            e.preventDefault();

            function verificarPass(){
                
                if(inputPass.length<3||inputPass.length==""){
                    document.getElementById("error-nombre").style.display ="block";
                    rojo("nombre");  
                    document.getElementById("error-nombre").style.display ="block";
                    rojo("nombre");
                    return false;        
                }else if(!isNaN(inputPass)){
                    document.getElementById("error-nombre").style.display ="block";
                    rojo("nombre");   
                    return false;     
                }else{
                    document.getElementById("valido-nombre").style.display="block";
                    verde("nombre");
                    nombreValido=inputPass.toString();   
                    return true;
                } 
            }  

            function verificarCorreo(){
                
                var regexEmail= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                if(!regexEmail.test(inputMail)){
                    alert("entrar un mail valido");
                    document.getElementById("error-correo").style.display ="block";
                    rojo("correo");
                }else{
                    document.getElementById("valido-correo").style.display ="block";
                    verde("correo");
                    console.log("Email es ==> "+inputMail);
                    correoValido=inputMail.toString();
                    return true;
                }
            }

            if ( verificarPass() && verificarCorreo()){
                const peticion = async()=>{
                    try{
                            const respuesta= await fetch("https://basic-server-one.vercel.app/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email:correoValido, //"valeria@gmail.com", 
                                password:nombreValido //"lppa2022"    
                                })
                            })
                        const datos= await respuesta.json();
                                          
                        if(datos.error==true){
                            alert("Los datos ingresados no son válidos")
                        }else {
                            var reqError= datos.error;
                            var reqMessage= datos.message
                            localStorage.setItem("error",reqError);
                            localStorage.setItem("mensaje",reqMessage);
                            location.href="dashboard.html";
                        }

                    }catch(error){
                        
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