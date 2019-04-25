import React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";

import * as ROUTES from "../../constants/routes"

const SignIn = () => {
  return (
    <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='facebook' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
            New to us? <a href={ROUTES.SIGN_UP}>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
  );
}

export default SignIn;