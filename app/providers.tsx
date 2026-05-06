'use client';

import { ThemeProvider, Global } from '@emotion/react';
import globalStyle from './styles/globals';
import theme from './styles/theme';
import EmotionRegistry from './lib/EmotionRegistry';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmotionRegistry>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        {children}
      </ThemeProvider>
    </EmotionRegistry>
  );
}
