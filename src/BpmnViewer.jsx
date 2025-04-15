import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Typography
} from '@mui/material'

import ReactBpmn from 'react-bpmn';

const BpmnViewer = (props) => {

    const onShown = () => {
        console.log('diagram shown');
    }

    const onLoading = () => {
        console.log('diagram loading');
    }

    const onError = (err) => {
        console.log('failed to show diagram');
    }

    const handleOnDiagramClick = () => {
        console.log("#### handleOnDiagramClick")
    }

    return (
        <div 
            style={{ margin: 15 }}
        >
            <ReactBpmn
                url="/invokeRestService.bpmn"
                // url="/pizzaDiagram.bpmn"
                onShown={ onShown }
                onLoading={ onLoading }
                onError={ onError }
                height={ 500 }
            />
        </div>
    )
}

export default BpmnViewer;