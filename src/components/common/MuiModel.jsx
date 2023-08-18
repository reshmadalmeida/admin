import PropTypes from "prop-types";
import { Dialog, DialogContent } from "@mui/material";

import AddEditCoupons from "../../forms/AddEditCoupons";

MuiModel.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  modalContentType: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default function MuiModel(props) {
  const {
    isOpenModal,
    handleCloseModal,
    modalContentType,
    submitHandler,
    editData,
  } = props;
  
  const isEditDataMode = Boolean(editData?.id);
  const component = {
    ADD_EDIT_COUPONS: AddEditCoupons,
  };

  const ModalContent = component[modalContentType];

  return (
    <div>
      <Dialog
        open={isOpenModal}
        onClose={handleCloseModal}
        scroll={"paper"}
        fullWidth
        maxWidth={"sm"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent sx={{ p: 6 }} dividers>
          <ModalContent
            submitHandler={submitHandler}
            handleCloseModal={handleCloseModal}
            editData={editData}
            isEditDataMode={isEditDataMode}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
