import React from 'react';
import {
  Grid, Row, Col,
  Navbar, Nav, NavItem,
  ButtonToolbar, Button
} from 'react-bootstrap';
import { presentation } from './../../helper/texts'
import './Presentation.css';

export class Presentation extends React.Component {
  render() {
    const {
      links,
      titles,
      buttons
    } = presentation;
    return (
          <div className='presentation'>
            <Grid>
              <Row className='show-grid'>
                <Col xs={12} sm={12} md={12}>
                  <Navbar className='groupLinks'>
                    <Nav className='links'>
                      {links.reverse().map((link, id) => {
                        const { href, name } = link;
                        return (
                          <NavItem
                            key={id}
                            className={name}
                            eventKey={id}
                            href={href}
                          >
                            {name}
                          </NavItem>
                        );
                      })}
                    </Nav>
                  </Navbar>
                </Col>
                <Col xs={12} sm={12} md={12}>
                  {titles.map((title, id) => (
                    <h2
                      key={id}
                      className='titles'
                    >
                      {title}
                    </h2>
                  ))}
                </Col>
                <Col xs={12} sm={12} md={12}>
                  <ButtonToolbar
                    className='groupButtons'
                  >
                    {buttons.map((button, id) => (
                      <Button
                        key={id}
                        className='buttons'
                      >
                        {button}
                      </Button>
                    ))}
                  </ButtonToolbar>
                </Col>
              </Row>
            </Grid>
          </div>
    )
  }
}