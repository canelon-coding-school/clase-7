import React, { Component } from 'react';
import { Container, Button, Form, Grid } from 'semantic-ui-react';

class Login extends Component {
  authenticate = () => {
    try {
      const target = document.getElementById('email_address');
      window.localStorage.setItem('email_address', target.value);
      this.props.history.push(`/planets/list`);
    } catch (e) {
      console.log(e)
    }
  };

  render() {
    return (
      <Container>
        <Grid centered aligned="center" columns={4}>
          <Grid.Column>
            <Form onSubmit={this.authenticate} style={{ marginTop: 90 }}>
              <Form.Field>
                <label>E-mail</label>
                <input placeholder='E-mail' name="email_address" id="email_address" autoFocus />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Login;
