import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section

                title="Model-S"
                description="Order Online For Touches Delivery..."
                BackgroundImage="model-s.jpg"
                leftBtn="Custom Order"
                btnRight="Existing Inventory"
            />
            <Section
                title="Model-Y"
                description="Order Online For Touches Delivery..."
                BackgroundImage="model-y.jpg"
                leftBtn="Custom Order"
                btnRight="Existing Inventory"
            />
            <Section
                title="Model-3"
                description="Order Online For Touches Delivery..."
                BackgroundImage="model-3.jpg"
                leftBtn="Custom Order"
                btnRight="Existing Inventory"
            />
            <Section
                title="Model-X"
                description="Order Online For Touches Delivery..."
                BackgroundImage="model-x.jpg"
                leftBtn="Custom Order"
                btnRight="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panel in America"
                description="Money back gaurentee..."
                BackgroundImage="solar-panel.jpg"
                leftBtn="Custom Order"
                btnRight="Learn More "
            />
            <Section
                title="Solar For Roofs"
                description="Solar Roof's cost less than New Roofs..."
                BackgroundImage="solar-roof.jpg"
                leftBtn="Order Now"
                btnRight="Learn More "
            />
            <Section
                title="Accessories"
                description=""
                BackgroundImage="accessories.jpg"
                leftBtn="Shop Now"
            />
        </Container>
    )
}

export default Home;
const Container = styled.div`
height: 100vh;
`