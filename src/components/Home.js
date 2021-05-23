import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title= "Model S"
                description= "Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title= "Model Y"
                description= "Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title= "Model  X"
                description= "Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title= "Model 3"
                description= "Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title= "Lowest Cost Solar Panels In America"
                description= "Money-back Guatantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title= "Solar For New Roofs"
                description= "Solar Roof Costs Less Than A New Roofs Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title= "Accessories"
                description= ""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />
            <Footer />
        </Container>
    )
    
}

export default Home

const Container= styled.div `
    height: 100vh;
    
`
