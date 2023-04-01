import React from "react";

function Dashboard({currentusername,currentuserId}){


    return(
        <div>
           <div>WELCOME</div> 
         {currentusername}
         <p>“The body achieves what the mind believes.” – Napoleon Hill </p>
        </div>
    )
}

export default Dashboard