function calcularEdad(fechaNacimiento) { 
    var diferenciaMs = Date.now() - fechaNacimiento.getTime();
    var edadFecha = new Date(diferenciaMs); 

    return Math.abs(edadFecha.getUTCFullYear() - 1970);
}
window.onload = function(){
    let equipo = sessionStorage.getItem('equipo');
    if( equipo ){
        equipo = JSON.parse(equipo);
        console.log(equipo);
        //document.body.style = equipo.gradiente;
        document.querySelector('#equipo').innerHTML = equipo.name;
        document.querySelector('#equipo-imagen').src = equipo.crest;
        document.querySelector('#entrenador').innerHTML = `Entrenador: ${equipo.coach.name}`;
        const tablaJugadoresEl = document.querySelector('#jugadores');
        for( let jugador of equipo.squad ){
            const trJugadorEl = document.createElement('tr');
            let posicion = "";
            switch(jugador.position){
                case "Goalkeeper":
                    posicion = "Portero";
                    break;
                case "Defence":
                    posicion = "Defensa";
                    break;
                case "Midfield":
                    posicion = "Centrocampista";
                    break;
                case "Midfielder":
                    posicion = "Centrocampista";
                    break;
                case "Offence":
                    posicion = "Delantero";
                    break;
            }
            trJugadorEl.innerHTML = `
            <td>${jugador.name}</td>
            <td>${posicion}</td>
            <td>${jugador.nationality}</td>
            <td>${ calcularEdad( new Date(jugador.dateOfBirth)) }</td>
            `;
            tablaJugadoresEl.appendChild(trJugadorEl);

        }
    }
};