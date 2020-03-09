import React from 'react'
import Roommate from './Roommate.js'

function RoommateList (props) {
     console.log(props.allRoommates)
return(

    <div className='roommate-container'>
        {props.allRoommates.map(e => {
            return <Roommate 
                editRating={props.editRating}
                key={e.id}
                roommate={e}
                deleteRoommate={props.deleteRoommate}
                />
        })}
       
      

    </div>


)
}
export default RoommateList


