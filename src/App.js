import React, { useState } from 'react';

function App(){
    const [showTool,onhover]=useState(false);

    return(
        <div className="App">
            <button className="btn"
                onMouseEnter={()=>onhover(true)}
                onMouseLeave={()=>onhover(false)}>
                Click Me
            </button>
            {showTool && (
                <div>
                    I will Appear
                </div>
            )}
        </div>
    )
}
export default App;