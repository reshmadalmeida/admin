import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function SidePanelList({ list, handleNavigate }) {
  return (
    <List disablePadding>
      {list.map((item, _id) => (
        <ListItem
          key={_id}
          onClick={() => handleNavigate(item.title.toLowerCase())}
          disablePadding
        >
          <ListItemButton
            sx={{
              ...(item.isSelected && {
                background: "#E6E6E9",
                "&:hover": {
                  background: "#E6E6E9",
                },
              }),
            }}
          >
            <ListItemIcon>
              <img src={item.listIcon} alt="Icon" width="24px" height="34px" />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default SidePanelList;
