import Route from "./router/Router";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter } from "react-router";

import defaultOtions from "./configs/reactQuery";
import Layout from "./layouts/Layout";

function App() {
  const queryClient = new QueryClient({ defaultOtions });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Route />
          <Toaster/>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
