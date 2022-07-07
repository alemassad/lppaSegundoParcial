window.onload=function(){
    console.log(localStorage.getItem("error"));
    document.getElementById("btnLimpiar").onclick=limpiar;
    if (!localStorage.getItem('error')) {
       console.log("Resultados...");
      
    } else {  
       
        const peticion = async()=>{
            try{
                const respuesta= await fetch("https://basic-server-one.vercel.app/users");            
                    
                    const datos= await respuesta.json();
                    console.log(datos);   
                    let elementos="";  
                    let subElementos="";
                
                    datos.data.forEach(elem=>{
                        console.log(elem);
                        elementos+=`<tr class='table'>
                            <td class='td'>${elem.id}</td>
                            <td class='td'>${elem.name}</td>
                            <td class='td'>${elem.username}</td>
                            <td class='td'>${elem.email}</td>
                            <td class='td'>${elem.address.street}</td>
                            <td class='td'>${elem.address.suite}</td>
                            <td class='td'>${elem.address.city}</td>
                            <td class='td'>${elem.phone}</td>
                            <td class='td'>${elem.company.name}</td>
                            </tr>`;
                                                            
                    }); 
                    document.getElementById("table").innerHTML= elementos;
                  
                } catch(error){
                    alert(error);
                }
        }
        peticion();        
    }
    function limpiar(){
        localStorage.removeItem("error");
        localStorage.removeItem("mensaje");
        console.log("dentro del submit");
        location.href="index.html";
    }
}
