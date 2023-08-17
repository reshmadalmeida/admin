import { Box, Card, CardContent } from "@mui/material";

import CardListHeader from "./common/CardListHeader";
import CardListIcons from "./common/CardListIcons";

function CouponCardList({ coupons, handleDelete, handleEdit }) {
  return (
    <Box>
      {coupons?.map((coupon, _id) => (
        <Card
          key={_id}
          sx={{
            border: "dashed",
            borderColor: "#A8A8A8",
            borderWidth: "0.5px",
            margin: "14px auto",
            boxShadow: "none",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <CardListHeader
              coupon={coupon}
              code={coupon?.code}
              handleEdit={() => handleEdit(coupon)}
              handleDelete={() => handleDelete(coupon)}
            />
            <CardListIcons
              discount={coupon?.discount}
              validity={coupon?.validity}
              enrollment={coupon?.enrollments}
            />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default CouponCardList;
