import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

import {
  createCoupons,
  deleteCoupons,
  editCoupons,
  getCoupons,
} from "../services/api.js";
import { pageConstants } from "../constants/routeConstants.js";
import { modalDeactivateCoupon } from "../constants/modelConstants.js";
import CouponCardList from "../components/CouponCardList.jsx";
import CouponCard from "../components/CouponCard.jsx";
import MuiModel from "../components/common/MuiModel.jsx";
import MuiDialogComponent from "../components/common/MuiDialogComponent.jsx";

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

  const submitHandler = async () => {
    const couponsList = await getCoupons();
    setCoupons(couponsList);
    handleCloseModal();
  };

  const handleEdit = (coupon) => {
    setEditData(coupon);
    setIsOpenModal(true);
  };

  const handleDelete = (coupon) => {
    setIsOpenDeactivateModal(true);
    setDeleteCoupon(coupon);
  };
  const confirmDeleteHandler = () => {
    deleteCoupons(deleteCoupon?.id).then(async (res) => {
      if (res.status === 200) {
        const couponsList = await getCoupons();
        setCoupons(couponsList);
      } else console.log("error");
    });

    handleCloseDeactivateModal();
  };

  return (
    <Box pt={4} sx={{ width: "50%" }} m="auto">
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
          handleSubmit={confirmDeleteHandler}
        />
      )}
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
