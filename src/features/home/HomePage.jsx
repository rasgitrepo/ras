import React  from 'react'
import { Container, Segment, Header, Image, Button, Icon } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate(); 
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image size='massive' src='/assets/logo.png' style={{marginBottom: 12}} />
          RAS Intranet
        </Header>
        <Button onClick={() => navigate('/events')} size='huge' inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}
