import { ActionIcon, Group, Tooltip, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';

import classes from './ColorSchemeToggleIcon.module.css';

type ColorSchemeToggleIconProps = {
  m?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  mt?: number;
  style?: React.CSSProperties;
};

export function ColorSchemeToggleIcon({ m, mr, style, mb, mt, ml }: ColorSchemeToggleIconProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const getTooltipLabel = () => computedColorScheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';

  return (
    <Group justify="center" m={m} mr={mr} style={style} ml={ml} mb={mb} mt={mt}>
      <Tooltip label={getTooltipLabel()} position="left" withArrow>
        <ActionIcon
          onClick={toggleColorScheme}
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
