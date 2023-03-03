import React from 'react'
import styled from 'styled-components'
import Alert from './Alert'

const ModalWrapper = styled.div`
    background-color: blue;
    opacity: ${status => status ? 0.8 : 0};
    transition: all 1s;
    width: 100%;
    animation: myanimation 1500ms ease-in-out;
    opacity: 0.9;

    @keyframes myanimation {
        0%   { opacity: 0; }
        100% { opacity: 0.9; }
    }

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 85%;
    height: 85%;
    padding: 10px;
    top: 50%;
    left: 50%;
    color: tomato;
    background-color: azure;
    transform: translate(-50%, -50%);
    border: 3px solid #999999;
    border-radius: 6px;
    z-index: 1;
}
`

const Modal = ({isOpen, onClose, status}) => {
    
    if (!isOpen) return null

    return <ModalWrapper status={status}>
                <div className='overlay'></div>
                <div className='modal'>
                    <Alert status={status}/>
                    <button onClick={onClose}>PLAY</button>
                </div>
            </ModalWrapper>

}

export default Modal