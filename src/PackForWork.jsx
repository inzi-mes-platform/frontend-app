import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import { createRestTemplate } from "inzids-mes-platform-frontend-framework";

const restTemplate = createRestTemplate();

const PackForwork = (props)=>{
    const location = useLocation();
    const task = location.state!==undefined && location.state!==null ? location.state.task:{};

    const navigate = useNavigate();

    const handleOnButtonClick = () => {
        if(task===null || task===undefined) {
            console.log("No task ID identified!")
            return;
        }
        // restTemplate.post("http://localhost:8000/do-work/pack-for-work/" + task.taskId, {}, (reply, error)=>{
        //     navigate('/todo-list');
        // });
    }

    return(
        <div>
            <h4>Pack for work</h4>
            <button onClick={ handleOnButtonClick }>확인</button>
        </div>
    )
}

export default PackForwork;