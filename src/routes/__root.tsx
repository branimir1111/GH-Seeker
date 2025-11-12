import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components';
import { ApolloProvider } from '@apollo/client/react';
import client from '../apolloClient.ts';
import { ThemeProvider } from '@/components/ThemeProvider/theme-provider.tsx';

export const Route = createRootRoute({
  component: () => (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Outlet />
        <Toaster />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />{' '}
      </ThemeProvider>
    </ApolloProvider>
  ),
});
