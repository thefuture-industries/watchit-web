import './index.css'
import Router from '@/router';
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});

const App = () => {
  return (
    <Router />
  );
};

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          closeButton={true}
          theme="dark"
          limit={3}
        />
        <App />

        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </HelmetProvider>
  </BrowserRouter>
)
