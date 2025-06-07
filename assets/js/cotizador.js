//   function calcular() {
//       const tipo = document.getElementById("tipo").value;
//       const cantidad = parseFloat(document.getElementById("cantidad").value);
//       const precios = {
//         "110": 170,
//         "175": 180,
//         "210": 280
//       };

//       if (isNaN(cantidad) || cantidad <= 0) {
//         document.getElementById("resultado").textContent = "Por favor, ingrese una cantidad válida.";
//         return;
//       }

//       const precioUnitario = precios[tipo];
//       const total = precioUnitario * cantidad;

//       document.getElementById("resultado").textContent = `Total a pagar: S/${total.toFixed(2)} soles`;
//     }

 function calcular() {
      const tipo = document.getElementById("tipo").value;
      const cantidad = parseFloat(document.getElementById("cantidad").value);
      const resultado = document.getElementById("resultado");

      const precios = {
        "110": 215,
        "175": 220,
        "210": 240
      };

      if (isNaN(cantidad) || cantidad <= 0) {
        resultado.textContent = "Por favor, ingrese una cantidad válida.";
        resultado.classList.add("visible");
        return;
      }

      const precioUnitario = precios[tipo];
      const total = precioUnitario * cantidad;

      resultado.textContent = `Total a pagar: S/${total.toFixed(2)} soles`;
      resultado.classList.add("visible");
    }