'use client';

import { useReducer } from 'react';

import { AppShell, Burger, Group } from '@mantine/core';

import { Brand } from '@/components/Brand/Brand';
import { ColorSchemeToggleIcon } from '@/components/ColorSchemeToggleIcon/ColorSchemeToggleIcon';
import { NavbarMinimal } from '@/components/Navbar/Navbar';

export default function HomePage() {
  const [opened, toggle] = useReducer((o) => !o, false);

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group justify="space-between">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Brand />
            <ColorSchemeToggleIcon mr={10} />
          </Group>
        </AppShell.Header>

        {/* <AppShell.Navbar> */}
        <NavbarMinimal />
        {/* </AppShell.Navbar> */}

        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </>
  );
}
