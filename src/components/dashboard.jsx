import React, { useEffect, useState } from "react";
import { Typography, Button, styled } from "@mui/material";
import Header from "./header";
import { Container } from "@mui/system";
import Password from "@mui/icons-material/Password";
import RenderInfoCard from "./infoCard";
import FeeCard from "./feeCards";
import { getFeeDetails, getUserDetails } from "../api/api";
import PageLoader from "./pageLoader";
import { useNavigate } from "react-router-dom";
import NoDataCard from "./noDataFound";
import ResetPasswordModal from "./resetPasswordModal";
import { useSnackbar } from "notistack";

const RootStyle = styled("div")({
  display: "grid",
  placeItems: "center",
});

const ContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [buttonLoading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [feesDetails, setFeesDetails] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setPageLoading(true);
      try {
        let userRes = await getUserDetails();
        if (userRes?.data?.data) {
          setUserDetails(userRes?.data?.data);
        }
        let feesRes = await getFeeDetails();
        if (feesRes?.data?.data) {
          setFeesDetails(feesRes?.data?.data);
        }
        setPageLoading(false);
      } catch (err) {
        setPageLoading(false);
        enqueueSnackbar(err?.response?.data?.message || err.message, {
          variant: "error",
        });
        if (err.status === 401) {
          navigate("/login");
        }
      }
    };
    fetchUserDetails();
  }, []);
  return (
    <>
      <Header />
      <RootStyle>
        {pageLoading ? (
          <PageLoader />
        ) : (
          <>
            <Container
              maxWidth="sm"
              style={{ marginTop: "30px", ...ContainerStyle }}
            >
              <Typography
                variant="h3"
                style={{ opacity: "0.7", fontWeight: "bolder" }}
              >
                Hi{" "}
                {userDetails?.father_name || userDetails?.mother_name || "N/A"}
              </Typography>
              <Button
                color="inherit"
                endIcon={<Password />}
                style={{ margin: "20px", border: "1px solid grey" }}
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Change Password
              </Button>
              <RenderInfoCard
                studentName={userDetails?.name || "N/A"}
                admissionNumber={userDetails?.admission_number || "N/A"}
                classAndSection={`${
                  userDetails?.standard?.standard || "N/A"
                } - ${userDetails?.standard?.section || "N/A"}`.toUpperCase()}
              />
            </Container>
            <Container
              maxWidth="sm"
              style={{
                width: "100%",
                padding: "20px",
                ...ContainerStyle,
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  opacity: "0.7",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Fees Payments
              </Typography>

              <div
                style={{ height: "auto", borderRadius: "10px", width: "100%" }}
              >
                {feesDetails.length > 0 ? (
                  feesDetails.map((fee) => (
                    <FeeCard
                      term={fee.term}
                      dueDate={fee.due_date}
                      amount={fee.total_amount}
                      status={fee.is_paid}
                      handleClick={() => {
                        alert("button click");
                      }}
                      loading={buttonLoading}
                    />
                  ))
                ) : (
                  <NoDataCard />
                )}
              </div>
              <ResetPasswordModal
                open={modalOpen}
                handleClose={() => {
                  setModalOpen(false);
                }}
              />
            </Container>
          </>
        )}
      </RootStyle>
    </>
  );
};

export default Dashboard;
