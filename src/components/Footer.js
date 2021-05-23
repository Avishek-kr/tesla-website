import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Foot>
            Made With Love <span style={{color:'red'}}>❤</span>  Av$hek | Parashar
        </Foot>
    )
}

export default Footer


const Foot=styled.div`
    font-size:20px;
    word-spacing: 2px;
`
