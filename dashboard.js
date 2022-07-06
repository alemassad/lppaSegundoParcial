const rellena = document.querySelector(".contenedor");
const peticion = async()=>{
    try{
        const respuesta= await fetch("https://basic-server-one.vercel.app/users"); 
          
            
            const datos= await respuesta.json();
            console.log(datos);   
            let elementos="";  
            let subElementos="";
          
             datos.data.forEach(elem=>{
                console.log(elem);
                elementos+=`<tr class='table-tr'>
                    <td class='table-td'>${elem.id}</td>
                    <td class='table-td2'>${elem.name}</td>
                    <td class='table-td3'>${elem.username}</td>
                    <td class='table-td4'>${elem.email}</td>
                    <td class='table-td5'>${elem.address.street}</td>
                    <td class='table-td6'>${elem.address.suite}</td>
                    <td class='table-td7'>${elem.address.city}</td>
                    <td class='table-td8'>${elem.phone}</td>
                    <td class='table-td9'>${elem.company.name}</td>
                    </tr>`;
                                                    
            }); 
            document.getElementById("table-tr").innerHTML= elementos;
            
        } catch(error){
            alert(error);
        }
}
peticion();


