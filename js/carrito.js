
  const pintarCarrito = () => {
  
    modalContainer.innerHTML = ""
    modalContainer.style.display ="flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
      <h1 class= "modal-header-title"> Carrito </h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("boton")
      modalbutton.innerText = "X";
      modalbutton.className = "modalheaderbutton";
      
      modalbutton.addEventListener("click", () =>{
         modalContainer.style.display = "none";
      });

    modalHeader.append(modalbutton);


    carrito.forEach((producto) =>{
       let carritoContent = document.createElement("div")
       carritoContent.className = "modalcontent"
       carritoContent.innerHTML = `
          <h4> ${producto.nombre}</h4>
          <p> ${producto.precio} $ </p>
    `; 

    modalContainer.append(carritoContent);
    

    let eliminar = document.createElement("botoneliminar")
    eliminar.innerText = "✖️"
    eliminar.className = "eliminarproducto"
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarproducto)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0 );
    
    const totalcompra = document.createElement("div")
    totalcompra.className = "total-content"
    totalcompra.innerHTML = `total a pagar: ${total} $ `;
    modalContainer.append(totalcompra);
  };

  verCarrito.addEventListener("click", pintarCarrito)

  const eliminarproducto = () =>{
    const foundId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId)=>{
      return carritoId !== foundId;
    });

    pintarCarrito();
  };

 
  