import { Box, Drawer, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import SidePanelList from "./SidePanelList";
import laptopIcon from "../../assets/laptop-metrics.svg";
import loyaltyIcon from "../../assets/loyalty-card.svg";

function SidePanel() {
  const list = [
    { id: 1, title: "Coupons", listIcon: laptopIcon },
    { id: 2, title: "Dashboard", listIcon: loyaltyIcon },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const route = location.pathname.split("/");
  const currentRoute = route.length && route[1];

  const updatedList = list.map((item) => {
    const isCoupons = item?.title.toLowerCase() === currentRoute;
    item.isSelected = isCoupons;
    return item;
  });

  const drawerWidth = 200;

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          height: "648",
          boxSizing: "border-box",
          backgroundColor: "#F7F9FD",
          zIndex: 0,
        },
      }}
    >
      <Toolbar />
      <Box>
        <SidePanelList list={updatedList} handleNavigate={handleNavigate} />
      </Box>
    </Drawer>
  );
}

export default SidePanel;
