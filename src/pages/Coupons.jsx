import { useState, useEffect } from "react";

import { deleteCoupons, getCoupons } from "../services/api.js";
import { pageConstants } from "../constants/routeConstants.js";
import { modalDeactivateCoupon } from "../constants/modelConstants.js";
import CouponCardList from "../components/CouponCardList.jsx";
import CouponCard from "../components/CouponCard.jsx";
import MuiModel from "../components/common/MuiModel.jsx";
import MuiDialogComponent from "../components/common/MuiDialogComponent.jsx";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
// import { deleteCoupons } from './../services/api';

function Coupons() {
  const [coupons, setCoupons] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeactivateModal, setIsOpenDeactivateModal] = useState(false);
  const [deleteCoupon, setDeleteCoupon] = useState([]);
  const handleCloseModal = () => setIsOpenModal(false);
  const handleCloseDeactivateModal = () => setIsOpenDeactivateModal(false);
  const [editData, setEditData] = useState(null);
  useEffect(() => {
    (async () => {
      const couponsList = await getCoupons();
      setCoupons(couponsList);
    })();
  }, []);

  const handleCreateClick = () => {
    setIsOpenModal(true);
    setEditData(null);
  };

  const submitHandler = (formData, isEditDataMode, editData) => {
    //api call here
    console.log("submit");
    handleCloseModal();
  };
  const handleEdit = (coupon) => {
    console.log("editdfsds", coupon);
    // Open form for editing data
    setEditData(coupon);
    setIsOpenModal(true);
  };

  const handleDelete = (coupon) => {
    console.log("delete", coupon);

    setIsOpenDeactivateModal(true);
    setDeleteCoupon(coupon);
    // Delete data
  };
  const confirmDeleteHandler = () => {
    console.log("deleted api");
  };

  return (
    <Box pt={4} m={"auto"} sx={{ width: "50%" }}>
      <Box
        pt={12}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontWeight={800} fontSize={24} color="#404349">
          Promotions
        </Typography>
        {coupons?.length > 0 && (
          <Button onClick={handleCreateClick}>
            <Typography
              variant="button"
              color={"#4400CC"}
              justifyContent={"flex-end"}
              textTransform={"capitalize"}
            >
              + Create coupon
            </Typography>
          </Button>
        )}
      </Box>
      {isOpenModal && (
        <MuiModel
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
          title={"Coupon"}
          modalContentType={pageConstants.ADD_EDIT_COUPONS}
          submitHandler={submitHandler}
          editData={editData}
        />
      )}
      {isOpenDeactivateModal && (
        <MuiDialogComponent
          isOpenModal={isOpenDeactivateModal}
          handleCloseModal={handleCloseDeactivateModal}
          message={modalDeactivateCoupon}
          handleSubmit={() => confirmDeleteHandler(deleteCoupon)}
        />
      )}
      {/* {<EditDeleteCoupon handleEdit={handleEdit} />} */}
      {coupons?.length === 0 ? (
        <CouponCard handleCreateClick={handleCreateClick} />
      ) : (
        <CouponCardList
          coupons={coupons}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </Box>
  );
}

export default Coupons;
