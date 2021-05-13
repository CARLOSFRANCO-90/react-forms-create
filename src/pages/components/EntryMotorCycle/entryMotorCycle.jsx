import React from 'react';
import './entryMotorCycle.styles.css';


const EntryMotorCycle = (props) => {
    return(
        <React.Fragment key="0">
            {props.entry.map((entry,index)=>{
                return(
                    <React.Fragment key={entry.id}>
                    <tr>
                        <td className = "entryMotorCycle" colSpan="2">
                            Working date: {entry.schedule}
                        </td>
                        <td className = "entryMotorCycle">
                            Hour: {entry.hour}
                        </td>
                    </tr>
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );

        
        
    
}

export default EntryMotorCycle;