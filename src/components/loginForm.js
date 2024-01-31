import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = ({ handleLoginSubmit, loading }) => {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    admissionNumber: Yup.string().required("Admission number is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      admissionNumber: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (data) => {
      handleLoginSubmit(data.admissionNumber, data.password);
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="text"
              label="Admission number"
              {...getFieldProps("admissionNumber")}
              error={Boolean(touched.admissionNumber && errors.admissionNumber)}
              helperText={touched.admissionNumber && errors.admissionNumber}
            />
            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              style={{
                marginTop: "40px",
                marginBottom: "30px",
              }}
              loading={loading}
            >
              {loading ? "loading..." : "Login"}
            </LoadingButton>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
