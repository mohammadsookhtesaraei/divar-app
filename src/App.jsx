import Route from "./router/Router"

import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

import { BrowserRouter } from "react-router";

import defaultOtions from "./configs/reactQuery";


function App() {
  const queryClient=new QueryClient({defaultOtions})

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <Route/>
    </BrowserRouter>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App;
