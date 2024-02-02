import { AppContainer } from '@/containers';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SuspenseLoading } from '@/containers/components';
import '@/common/styles/index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense fallback={<SuspenseLoading />}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
