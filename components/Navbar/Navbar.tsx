/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';

import { Avatar, Button, Center, Stack, Tooltip, UnstyledButton, rem } from '@mantine/core';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

// Assuming your NavbarLink component is adjusted to handle children or labels properly
const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export function NavbarMinimal() {
  const [active, setActive] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false); // State to track if navbar is expanded

  // Toggle function
  const toggleNavbar = () => setIsExpanded(!isExpanded);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    >
      {isExpanded && <span className={classes.linkLabel}>{link.label}</span>}{' '}
      {/* Conditionally render label */}
    </NavbarLink>
  ));

  return (
    <nav
      className={`${classes.navbar} ${isExpanded ? classes.navbarExpanded : classes.navbarCollapsed}`}
    >
      <Center>
        <Avatar src="avatar.png" alt="it's me" />
        {/* Add a button or a mechanism to toggle the navbar state */}
        <Button onClick={toggleNavbar}>Toggle</Button>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      {/* Render other navbar links */}
    </nav>
  );
}
