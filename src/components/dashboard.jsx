import React, { useEffect, useState, useRef } from "react";
import { Typography, Button, styled, Grid } from "@mui/material";
import Header from "./header";
import {
  //  Box,
  Container,
  // flexbox
} from "@mui/system";
import Password from "@mui/icons-material/Password";
import RenderInfoCard from "./infoCard";
import { getSections, getUserDetails } from "../api/api";
import PageLoader from "./pageLoader";
import { useNavigate } from "react-router-dom";
import NoDataCard from "./noDataFound";
import ResetPasswordModal from "./resetPasswordModal";
import { useSnackbar } from "notistack";

const RootStyle = styled("div")({
  // display: "grid",
  // placeItems: "center",
});

const ContainerStyle = {
  // display: "flex",
  // justifyContent: "center",
  // flexDirection: "column",
  // alignItems: "center",
  // width: "100%",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [buttonLoading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [sectionDetails, setSectionDetails] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const dataFetchInitRef = useRef(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setPageLoading(true);
      try {
        let userRes = await getUserDetails();
        if (userRes?.data?.data) {
          setUserDetails(userRes?.data?.data);
        }
        let sectionResult = await getSections();
        if (sectionResult?.data?.data) {
          setSectionDetails(sectionResult?.data?.data);
        }
        setPageLoading(false);
      } catch (err) {
        setPageLoading(false);
        enqueueSnackbar(err?.response?.data?.message || err.message, {
          variant: "error",
        });
        console.log("login", err.response.status);
        if (err.response.status === 401) {
          navigate("/login");
          localStorage.removeItem("teacherAccessToken");
        }
      }
    };
    if (!dataFetchInitRef.current) {
      dataFetchInitRef.current = true;
      fetchUserDetails();
    }
  }, []);

  const handleOnSectionClick = (sectionId) => {
    navigate(`/student/list/${sectionId}`);
  };
  return (
    <>
      <Header />
      <RootStyle>
        {pageLoading ? (
          <PageLoader />
        ) : (
          <>
            <Container style={{ marginTop: "30px", ...ContainerStyle }}>
              <Typography
                variant="h4"
                style={{ opacity: "0.7", fontWeight: "bolder" }}
              >
                Hi {userDetails?.name || "N/A"}
              </Typography>
              <Button
                color="inherit"
                endIcon={<Password />}
                style={{
                  margin: "20px 0px 20px 0px",
                  border: "1px solid grey",
                }}
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Change Password
              </Button>
              <div
                style={{
                  marginTop: "10px",
                }}
              >
                {sectionDetails.length > 0 ? (
                  <Grid container spacing={2}>
                    {sectionDetails.map((section, index) => {
                      return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <RenderInfoCard
                            section={`${
                              section?.standard?.standard || "NA"
                            } - ${section?.standard?.section}`.toUpperCase()}
                            key={section.standard.id}
                            sectionId={section.standard.id}
                            studentsCount={
                              section?.standard?._count?.students || 0
                            }
                            handleClick={handleOnSectionClick}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : (
                  <NoDataCard />
                )}
              </div>
            </Container>
            <ResetPasswordModal
              open={modalOpen}
              handleClose={() => {
                setModalOpen(false);
              }}
            />
          </>
        )}
      </RootStyle>
    </>
  );
};

export default Dashboard;
