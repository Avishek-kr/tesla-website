import React from 'react'
import styled from 'styled-components'
import LightSpeed from 'react-reveal/LightSpeed'; 

function Footer() {
    return (
        <LightSpeed left>
        <Foot>
            Made With Love <span style={{color:'red'}}>❤</span>  Av$hek | Parashar
        </Foot>
        </LightSpeed>
    )
}

export default Footer


const Foot=styled.div`
    font-size:20px;
    word-spacing: 2px;
    height: 20px;
    margin-top:-3.5rem;
`
