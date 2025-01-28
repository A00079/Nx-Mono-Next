'use client'

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import getQueryClient from './get-query-client';

const queryClient = getQueryClient();

const SharedQueryProvider = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default SharedQueryProvider;
