import React from 'react';
import { useState } from "react";
import OwnerComponent from '../Owner/OwnerComponent';
import './vehicle.styles.css';
import Entry from '../Entry/entry';
let vec = {
    vehicles: [
        {
            id: "v1", 
            brand: "kia", 
            type: "Carro",
            plaque:"krr123",
            owner: {
                    id: "1",
                    name: "Carlos Franco",
                    cellphone: 3214036681,
            },
            entry:[
                {
                    id: "e1",
                    schedule: "Day",
                    hour: 8,
                },
        
            ]
        },
        {
            id: "v2", 
            brand: "honda", 
            type: "Moto",
            plaque:"krr10",
            owner: {
                    id: "2",
                    name: "Pepito Sanchez",
                    cellphone: 3214036666,
            },
            entry:[
                {
                    id: "e1",
                    schedule: "night",
                    hour: 20,
                },
        
            ]
        },
        {
            id: "v3", 
            brand: "Suzuki", 
            type: "Carro",
            plaque:"hhw234",
            owner: {
                    id: "3",
                    name: "kata",
                    cellphone: 3214038899,
            },
            entry:[
                {
                    id: "e1",
                    schedule: "Day",
                    hour: 3,
                },
        
            ]
        },
        
    ]
}

const Vehicles = (props) => {
    const [vehicle, setVehicle] = useState('c1');
    const [entrySchedule, setEntrySchedule] = useState('');

    const addEntry = () => {
        console.log('vehicle: ' + vehicle);
        console.log('entry schedule: ' + entrySchedule);
    }
    return (
        <div>
            <label>Vehicle:</label>
                <select value={vehicle} onChange={(event)=> {setVehicle(event.target.value)}} >
                    <option value="1">Carlos Franco</option>
                    <option value="2">Pepito Sanchez</option>
                </select>
            <label>Schedule:</label>
                <input type='text' value={entrySchedule} onChange={(event)=> {setEntrySchedule(event.target.value)}} />
                <button type='button' onClick={addEntry}>Add entry</button>
             <table>
                 <tbody>
                     {

                        vec.vehicles.map((vehicle,index)=>{
                            return (
                                <React.Fragment key={vehicle.id}>
                                    <tr>
                                        <td>
                                            brand
                                        </td>
                                        <td>
                                            type
                                        </td>
                                        <td>
                                            plaque
                                        </td>
                                    </tr>
                                <tr>
                                    <td>
                                        {vehicle.brand}
                                    </td>
                                    <td>
                                        {vehicle.type}
                                    </td>
                                    <td>
                                        {vehicle.plaque}
                                    </td>
                                </tr>
                                <OwnerComponent  owner = {vehicle.owner}/>
                                <Entry entry = {vehicle.entry}/>
                                </React.Fragment>
                            );
                            

                        })

                     }
                 </tbody>
             </table>
        </div>
    );
}

export default Vehicles;