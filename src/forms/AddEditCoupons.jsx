import React, { useEffect, useState } from "react";
import MuiDropdownComponent from "../components/common/MuiDropdownComponent";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import BasicDatePicker from "../components/common/BasicDatePicker";
import { ENROLLMENTS_LABEL } from "../constants/routeConstants";
import PopoverTimePicker from "../components/PopoverTimePicker";

function AddEditCoupons(props) {
  // const [offerPrice, setOfferPrice] = useState("₹ 100");
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    setValue,
    setError,
    watch,
  } = useForm();

  const productList = [
    { id: 0, title: "Select Product" },
    { id: 1, title: "Basic Science" },
    { id: 2, title: "Test Prep" },
    { id: 1, title: "Test Prep + Basic Sciences combo" },
    { id: 2, title: "All" },
  ];

  const discount = watch("discount");
  const offerPrice = watch("offerPrice");
  // const enrollmentField = setValue("enrollments", ENROLLMENTS_LABEL);
  // console.log(enrollmentField, "OP");
  // const offerPrice = watch("offerPrice");
  console.log(props?.editData);
  const defaultCoupon = props?.editData?.code;
  const defaultDiscount = props?.editData?.discount;
  const defaultEnrollments = props?.editData?.enrollments;
  const defaultProduct = props?.editData?.product;
  const defaultValidTo = props?.editData?.validTo;
  const defaultValidFrom = props?.editData?.validFrom;
  const defaultSuggest = props?.editData?.suggest;
  const defaultOfferPrice = props?.editData?.offerPrice;

  const originalPrice = 24345; // Original price value
  useEffect(() => {
    if (discount === "") {
      const calculatedOfferPrice =
        originalPrice - (originalPrice * discount) / 100;
      console.log(calculatedOfferPrice.toFixed(2));
      setValue("offerPrice", calculatedOfferPrice.toFixed(2));
    }
  }, [discount]);

  // useEffect(() => {
  //   if (offerPrice === "") {
  //     const calculatedDiscount =
  //       ((originalPrice - offerPrice) / originalPrice) * 100;
  //     setValue("discount", calculatedDiscount.toFixed(2));
  //   }
  // }, [offerPrice]);

  const onSubmit = ({
    product,
    couponCode,
    discount,
    offerPrice,
    validFrom,
    validTo,
    enrollments,
    suggest,
  }) => {
    const formData = new FormData();
    formData.append("product", product);
    formData.append("couponCode", couponCode);
    formData.append("discount", discount);
    formData.append("offerPrice", offerPrice);
    formData.append("validFrom", validFrom);
    formData.append("validTo", validTo);
    formData.append("enrollments", enrollments);
    formData.append("suggest", suggest);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]},${pair[1]}`);
    }
  };
  return (
    <form
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        paddingTop: "12px",
      }}
    >
      <Controller
        name="product"
        control={control}
        rules={{ required: true }}
        defaultValue={defaultProduct || "Select Product"}
        render={({ field }) => (
          <FormControl>
            <MuiDropdownComponent
              list={productList}
              selectedField={field.value}
              error={Boolean(errors.product)}
              helperText={errors.product ? "Product is required" : ""}
              handleDDChange={(event) => field.onChange(event.target.value)}
              placeholder="Select Product"
              {...field}
            />
          </FormControl>
        )}
      />
      <Controller
        name="couponCode"
        control={control}
        rules={{ required: true }}
        defaultValue={defaultCoupon || ""}
        render={({ field }) => (
          <TextField
            placeholder="Coupon code"
            type="alphanumeric"
            inputProps={{ maxLength: 6 }}
            error={Boolean(errors.couponCode)}
            helperText={
              errors.couponCode
                ? "Coupon Code is required"
                : "No special characters.Only use text and numbers.Maximum 6 characters"
            }
            {...field}
          />
        )}
      />

      <Grid container rowSpacing={2} columnSpacing={3}>
        <Grid item sm={6} p>
          <Controller
            name="discount"
            control={control}
            rules={{ required: true }}
            defaultValue={defaultDiscount || ""}
            render={({ field }) => (
              <TextField
                placeholder="% Discount"
                type="number"
                // inputProps={{ min: 0, max: 100, step: 1 }}
                error={Boolean(errors.discount)}
                helperText={errors.discount ? "Discount is required" : ""}
                className="no-icon"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item sm={6}>
          <Controller
            name="offerPrice"
            control={control}
            rules={{ required: true }}
            defaultValue={defaultOfferPrice || ""}
            render={({ field }) => (
              <TextField
                placeholder=" Offer price"
                defaultValue={"₹"}
                type="number"
                inputProps={{ min: 0, max: { originalPrice }, step: 10 }}
                // inputProps={{ maxLength: 8 }}
                error={Boolean(errors.offerPrice)}
                helperText={
                  errors.offerPrice
                    ? "Offer Price is required"
                    : `Original Price: ₹ ${originalPrice}`
                }
                className="no-icon"
                {...field}
              />
            )}
          />
        </Grid>

        {/* <Grid item sm={6}>
          <Controller
            name="validTo"
            control={control}
            rules={{ required: true }}
            defaultValue={defaultValidTo || ""}
            render={({ field }) => (
              <BasicDatePicker
                selectedDate={field.value}
                error={Boolean(errors.validTo)}
                // helperText={errors.validTo ? "Valid To is required" : " "}
                handleDateChange={(date) => field.onChange(date.$d)}
                label="Valid To"
                {...field}
              />
            )}
          />
          <FormHelperText sx={{ color: "#F05330" }}>
            Don't change this if you want unlimited validity.
          </FormHelperText>
        </Grid> */}
        <Grid item sm={6}>
          <Controller
            name="enrollments"
            control={control}
            rules={{ required: true }}
            defaultValue={defaultEnrollments || ""}
            render={({ field }) => (
              <TextField
                label="Valid for"
                placeholder="Enter a value  Enrollments"
                type="numeric"
                inputProps={{ maxLength: 2 }}
                error={Boolean(errors.enrollments)}
                // helperText={errors.enrollments ? "" : ""}
                {...field}
              />
            )}
          />
          <FormHelperText sx={{ color: "#F05330" }}>
            Don't change this if you want unlimited enrollments.
          </FormHelperText>
        </Grid>
        <Grid item sm={6}>
          <Box
            sx={{
              border: "1px solid #E6E6E9",
              borderRadius: "5px",
              padding: "7.5px",
            }}
          >
            <Controller
              name="suggest"
              control={control}
              rules={{ required: false }}
              defaultValue={defaultSuggest || ""}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label="Suggest at checkout"
                  error={!!errors.suggest}
                  // helperText={errors.fieldName ? "" : ""}
                />
              )}
            />
          </Box>
          <FormHelperText>
            If selected, coupon code will be visible to everyone at payment page
          </FormHelperText>
        </Grid>
      </Grid>
      <Box justifyContent="flex-end" display="flex" columnGap="15px">
        <Button
          variant="contained"
          size="small"
          type="submit"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "#404349",
            color: "#FFF",

            "&:hover": {
              backgroundColor: "#404349",
              color: "#FFF",
            },
          }}
          // disabled={isEditDataMode ? !isDirty : false}
          onClick={handleSubmit(onSubmit, (error) => console.log(error))}
        >
          {/* {isEditDataMode ? "Update" : "Create"} */}
          {"Create coupon"}
        </Button>
      </Box>
    </form>
  );
}

export default AddEditCoupons;
