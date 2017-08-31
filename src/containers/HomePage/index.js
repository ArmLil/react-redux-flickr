import React from 'react'
import CenteredSection from '../../styling-components/CenteredSection'
import Container from '../../styling-components/Container'
import messages from './messages'
import FormComponent from '../../components/FormComponent';


const HomePage = () => (
    <Container >
        <CenteredSection >
          <h3> {messages.startProjectHeader}</h3>
          <p>  {messages.startProjectMessage} </p>
        </CenteredSection>
        <FormComponent></FormComponent>
    </Container>
)

export default HomePage;
