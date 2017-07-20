// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import HamburgerIcon from '../../assets/icons/Hamburger.svg';
import DashboardIcon from '../../assets/icons/Dashboard.svg';
import MaintenanceIcon from '../../assets/icons/Maintenance.svg';
import DevicesIcon from '../../assets/icons/Devices.svg';
import RulesActionsIcon from '../../assets/icons/RulesActionsIcon.svg';

import './leftNav.css';

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    console.log('onclick');
    this.setState({ showAll: !this.state.showAll });
  }

  render() {
    const iconStyle = {
      height: 16,
      width: 16
    };
    const navItems = [
      {
        path: '#/dashboard',
        icon: DashboardIcon,
        name: 'Dashboard'
      },
      {
        path: '#/devices',
        icon: DevicesIcon,
        name: 'Devices'
      },
      {
        path: '#/',
        icon: RulesActionsIcon,
        name: 'Rules & Actions'
      },
      {
        path: '#/',
        icon: MaintenanceIcon,
        name: 'Maintenance'
      }
    ];

    const navigation = this.state.showAll
      ? navItems.map((item, index) =>
          <NavItem key={index} href={item.path}>
            <img src={item.icon} {...iconStyle} alt={item.name} />
            {` ${item.name}`}
          </NavItem>
        )
      : navItems.map((item, index) =>
          <NavItem key={index} href={item.path}>
            <img src={item.icon} {...iconStyle} alt={item.name} />
          </NavItem>
        );

    return (
      <div className="leftNav">
        <div className="hamburger">
          <img
            src={HamburgerIcon}
            {...iconStyle}
            alt="HamburgerIcon"
            onClick={this.toggleNav}
          />
        </div>
        <Nav
          bsStyle="pills"
          stacked
          className={this.state.showAll ? 'sidebar' : 'iconbar'}
        >
          {navigation}
        </Nav>
      </div>
    );
  }
}

export default LeftNav;
