'use client';

import { useState } from 'react';

import { AppShell, Burger, Group } from '@mantine/core';

import { Brand } from '@/components/Brand/Brand';
import { ColorSchemeToggleIcon } from '@/components/ColorSchemeToggleIcon/ColorSchemeToggleIcon';

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened((o) => !o);

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
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Brand />
            <ColorSchemeToggleIcon mr={10} />
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </>
  );
}
