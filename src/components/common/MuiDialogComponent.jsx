import { Button } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const MuiDialogComponent = (props) => {
  const { isOpenModal, handleCloseModal, handleSubmit, message } = props;
  return (
    <Dialog
      open={isOpenModal}
      onClose={handleCloseModal}
      PaperProps={{
        sx: {
          p: "10px 18px",
          width: "520px",
        },
      }}
    >
      <DialogTitle
        sx={{ fontFamily: "Inter", fontSize: "20px", fontWeight: 800, px: "0" }}
      >
        {message?.title}
      </DialogTitle>
      <DialogContent
        sx={{ fontFamily: "Inter", fontSize: "14px", fontWeight: 500, px: "0" }}
      >
        {message?.description}
      </DialogContent>
      <DialogActions sx={{ padding: "16px 0px" }}>
        <Button
          variant="outlined"
          onClick={handleSubmit}
          sx={{
            textTransform: "capitalize",
            color: "#4A4A4A",
            border: "1px solid #A8A8A8",
          }}
        >
          {message?.leftBtnContent}
        </Button>
        <Button
          variant="contained"
          onClick={handleCloseModal}
          sx={{
            marginRight: "15px",
            background: "#E85555",
            textTransform: "capitalize",
            "& :hover": {
              background: "#E85555",
            },
          }}
        >
          {message?.rightBtnContent}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MuiDialogComponent;
