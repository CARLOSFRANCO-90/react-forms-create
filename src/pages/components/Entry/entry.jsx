import React from 'react';
import './entry.styles.css';


const Entry = (props) => {
    return(
        <React.Fragment key="0">
            {props.entry.map((entry,index)=>{
                return(
                    <React.Fragment key={entry.id}>
                    <tr>
                        <td className = "entry" colSpan="3">
                            {entry.schedule}
                        </td>
                        <td className = "entry" colSpan="3">
                            {entry.hour}
                        </td>
                    </tr>
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );

        
        
    
}

export default Entry;