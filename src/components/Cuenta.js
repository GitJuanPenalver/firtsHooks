import React, {useState, useEffect} from 'react';

export default function useCuenta() {

    const [cuenta, setCuenta] = useState(0);

    useEffect(() => {

    })
        return( <div>
                <h1>Cuenta: {cuenta}</h1>
                <button onClick={() => setCuenta(cuenta + 1)}>+</button>
            </div>);
        
    


}
