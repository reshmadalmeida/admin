import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import { routeConstants } from "./constants/routeConstants";
import Coupons from "./pages/Coupons";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SidePanel from "./components/common/SidePanel";
import Header from "./components/common/Header";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Loader from "./components/common/Loader";

function App() {
  return (
    <Box>
      <Header />
      <Stack direction="row" >
        <SidePanel />
        <Box flex="1">
          <Suspense fallback={<Loader visible />}>
            <ErrorBoundary>
              <Routes>
                <Route path={routeConstants.COUPONS} element={<Coupons />} />
                <Route path={routeConstants.DASHBOARD} element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
