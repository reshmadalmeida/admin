import React, { useEffect } from "react";
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
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PercentIcon from "@mui/icons-material/Percent";

import MuiDropdownComponent from "../components/common/MuiDropdownComponent";
import PopoverTimePicker from "../components/PopoverTimePicker";
import { createCoupons, editCoupons } from "../services/api";
import { dateFormat } from "../utils/Utils";

function AddEditCoupons(props) {
  const { submitHandler, isEditDataMode, editData } = props;

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
    // if (discount === "") {
    const calculatedOfferPrice =
      originalPrice - (originalPrice * discount) / 100;
    console.log(calculatedOfferPrice.toFixed(2));
    setValue("offerPrice", calculatedOfferPrice.toFixed(2));
    // }
  }, [discount]);

  // useEffect(() => {
  //   if (offerPrice === "") {
  //     const calculatedDiscount =
  //       ((originalPrice - offerPrice) / originalPrice) * 100;
  //     setValue("discount", calculatedDiscount.toFixed(2));
  //   }
  // }, [offerPrice]);

  const onSubmit = (formData) => {
    const validTo = dateFormat(formData.validTo);
    const validFrom = dateFormat(formData.validFrom);
    const payload = { ...formData, type: "Active", validTo, validFrom };
    const id = editData?.id;
    if (isEditDataMode) {
      editCoupons(id, payload).then((res) => {
        if (res.status === 200) submitHandler();
        else console.log("error");
      });
    } else {
      createCoupons(payload).then((res) => {
        if (res.status === 201) submitHandler();
        else console.log("error");
      });
    }
  };

  const currentDateTime = new Date();
  const validFrom = watch("validFrom");
  const validTo = watch("validTo");

  const validateDate = () => {
    if (validFrom && validTo && new Date(validTo) < new Date(validFrom)) {
      return "Valid Till should not be less than valid from";
    }
    return true;
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
        name="code"
        control={control}
        rules={{ required: true }}
        defaultValue={defaultCoupon || ""}
        render={({ field }) => (
          <TextField
            placeholder="Coupon code"
            type="alphanumeric"
            inputProps={{ minLength: 6, maxLength: 6 }}
            error={Boolean(errors.code)}
            helperText={
              errors.code
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
                placeholder="Discount"
                type="number"
                // inputProps={{ min: 0, max: 100, step: 1 }}
                error={Boolean(errors.discount)}
                helperText={errors.discount ? "Discount is required" : ""}
                className="no-icon"
                InputProps={{
                  startAdornment: <PercentIcon fontSize="small" />,
                }}
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
            render={({ field }) => (
              <TextField
                placeholder=" Offer price"
                // defaultValue={`"₹"${defaultOfferPrice} || "₹"${offerPrice}`}
                defaultValue={originalPrice}
                type="number"
                inputProps={{
                  min: 0,
                  max: { originalPrice },
                  step: 10,
                }}
                InputProps={{
                  startAdornment: <CurrencyRupeeIcon fontSize="small" />,
                }}
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
        <Grid item sm={6}>
          <Controller
            name="validFrom"
            control={control}
            rules={{ required: false }}
            defaultValue={defaultValidFrom || currentDateTime}
            render={({ field }) => (
              <PopoverTimePicker
                selectedDate={field.value}
                // error={Boolean(errors.validFrom)}
                // helperText={errors.validFrom ? "Valid From is required" : " "}
                handleTimeChange={(date) => field.onChange(date.$d)}
                label="Valid From"
                defaultValue={currentDateTime}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item sm={6}>
          <Controller
            name="validTo"
            control={control}
            rules={{ required: false, validate: validateDate }}
            defaultValue={defaultValidTo || ""}
            render={({ field }) => (
              <PopoverTimePicker
                selectedDate={field.value}
                error={Boolean(errors.validTo?.message)}
                helperText={errors.validTo ? errors.validTo?.message : " "}
                handleTimeChange={(date) => field.onChange(date.$d)}
                label="Valid Till"
                defaultValue={""}
                {...field}
              />
            )}
          />
          <FormHelperText sx={{ color: "#F05330" }}>
            Don't change this if you want unlimited validity.
          </FormHelperText>
        </Grid>
        <Grid item sm={6}>
          <Controller
            name="enrollments"
            control={control}
            rules={{ required: false }}
            defaultValue={defaultEnrollments || ""}
            render={({ field }) => (
              <TextField
                label="Valid for"
                placeholder="Enter a value"
                type="numeric"
                inputProps={{ maxLength: 2 }}
                error={Boolean(errors.enrollments)}
                InputProps={{
                  endAdornment: <>Enrollments</>,
                }}
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
          disabled={isEditDataMode ? !isDirty : false}
          onClick={handleSubmit(onSubmit, (error) => console.log(error))}
        >
          {isEditDataMode ? "Update coupon" : "Create coupon"}
        </Button>
      </Box>
    </form>
  );
}

export default AddEditCoupons;
