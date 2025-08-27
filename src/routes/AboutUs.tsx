import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import AboutUs from "../pages/AboutUs/AboutUsInfo";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box
        component="main"
        sx={{
          mt: 10,     // Espacio por el AppBar fijo
        }}
      >
        <AboutUs />
      </Box>
    </Box>
  );
};

export default Home;
