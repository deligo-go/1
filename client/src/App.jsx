import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";


// Pages
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import About from "./pages/About";
import Mission from "./pages/Mission";
import Teams from "./pages/Teams";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

function Router() {
  // Use scroll to top hook for all route changes
  ScrollToTop();

  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/products" component={Products} />
        <Route path="/products/:slug" component={ProductDetail} />
        <Route path="/about" component={About} />
        <Route path="/mission" component={Mission} />
        <Route path="/teams" component={Teams} />
        <Route path="/teams/:teamId" component={Teams} />
        <Route path="/journey" component={Journey} />
        <Route path="/contact" component={Contact} />
        <Route path="/careers" component={Careers} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
