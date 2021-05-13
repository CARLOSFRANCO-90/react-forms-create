import React from 'react';
import { useState } from "react";
import './motorcycle.styles.css';
import Entry from '../Entry/entry';
import OwnerMotorCycleComponent from '../OwnerMotorCycle/OwnerMotorCycleComponent';
import EntryMotorCycle from '../EntryMotorCycle/entryMotorCycle';
let motcycle = {
    motorcycles: [
        {
            id: "v1", 
            brand: "Yaha", 
            type: "Moto",
            plaque:"DFG45D",
            owner: {
                    id: "1",
                    name: "JOSE",
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
                    name: "Usuario 2",
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

const MotorCycle = (props) => {
    const [motorcycle, setMotorCycle] = useState('c1');
    const [entrySchedule, setEntrySchedule] = useState('');

    const addEntry = () => {
        console.log('motorcycle: ' + motorcycle);
        console.log('entry schedule: ' + entrySchedule);
    }
    return (
        <div>
            <div className='motorCycleForm'>
                <label>motorcycle:</label>
                <select value={motorcycle} onChange={(event)=> {setMotorCycle(event.target.value)}} >
                    <option value="1">Usuario 1</option>
                    <option value="2">Usuario 2</option>
                </select>
                <label>Schedule:</label>
                <input type='text' value={entrySchedule} onChange={(event)=> {setEntrySchedule(event.target.value)}} />
                <button type='button' onClick={addEntry}>Add entry</button>
            </div>
            
             <table>
                 <tbody>
                     {

                        motcycle.motorcycles.map((motorcycle,index)=>{
                            return (
                                <React.Fragment key={motorcycle.id}>
                                    <tr>
                                        <td className="data">
                                            brand
                                        </td>
                                        <td className="data">
                                            type
                                        </td>
                                        <td className="data">
                                            plaque
                                        </td>
                                    </tr>
                                <tr>
                                    <td className="data">
                                        {motorcycle.brand}
                                    </td>
                                    <td className="data">
                                        {motorcycle.type}
                                    </td>
                                    <td className="data">
                                        {motorcycle.plaque}
                                    </td>
                                </tr>
                                <OwnerMotorCycleComponent owner = {motorcycle.owner}/>
                                <EntryMotorCycle entry = {motorcycle.entry}/>
                                </React.Fragment>
                            );
                            

                        })

                     }
                 </tbody>
             </table>
        </div>
    );
}

export default MotorCycle;