import React, { Component } from 'react';
import { Container, Menu, Input, Grid, Segment } from 'semantic-ui-react';

class Dashboard extends Component {
  state = { activeSection: 'planets', activeItem: 'list' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  logout = () => {
    window.localStorage.removeItem('email_address');
    window.location.reload();
  };

  render() {
    const { list: DashboardList, form: DashboardForm, activeSection } = this.props;
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu pointing>
          <Menu.Item name='planets' active={activeSection === 'planets'} onClick={() => console.log('planets')} />
          <Menu.Item
            name='spacecraft'
            active={activeSection === 'spacecraft'}
            onClick={() => console.log('spacecraft')}
          />
          <Menu.Item name='people' active={activeSection === 'people'} onClick={() => console.log('people')} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...'/>
            </Menu.Item>
            <Menu.Item
              name='Logout'
              onClick={this.logout}
              title={window.localStorage.getItem('email_address')}
            />
          </Menu.Menu>
        </Menu>

        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item name='list' active={activeItem === 'list'} onClick={this.handleItemClick} />
              <Menu.Item name='form' active={activeItem === 'form'} onClick={this.handleItemClick} />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              {activeItem === 'list' ? <DashboardList /> : null}
              {activeItem === 'form' ? <DashboardForm /> : null}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;
