import React, {useEffect, useState} from "react";

function useCoordenadas() {
    const [coordenadas, setCoordenadas] = useState({
        longitud:null,
        latitud:null
    });
    let geoId;
    useEffect(() => {
        geoId = window.navigator.geolocation.watchPosition(position => {
            setCoordenadas({
                longitud: position.coords.longitude,
                latitud: position.coords.latitude
            });
        });

        return () => {
            navigator.geolocation.clearWatch(geoId);
        };
    });
    return coordenadas;
}

export default function Coordenadas(){
    const coordenadas = useCoordenadas()

    return coordenadas.latitud == null ? (
        <div>Cargando ...</div>
    ) : (
        <div>
            <h2>latitud: {coordenadas.latitud}</h2>
            <h2>longitud: {coordenadas.longitud}</h2>
        </div>
    );
}