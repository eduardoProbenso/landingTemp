import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import OneSection from "../pages/Home/1Section";
import TwoSection from "../pages/Home/2Section";
import ThreeSection from "../pages/Home/3Section";
import FourSection from "../pages/Home/4Section";
import FiveSection from "../pages/Home/5Section";
import SixSection from "../pages/Home/6Section";
import SevenSection from "../pages/Home/7Section";
import EightSection from "../pages/Home/8Section";
import NineSection from "../pages/Home/9Section";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box
        component="main"
        sx={{
          mt: 7,     // Espacio por el AppBar fijo
        }}
      >
        <OneSection />
        <TwoSection />
        <ThreeSection />
        <FourSection />
        <FiveSection />
        <SixSection />
        <SevenSection />
        <EightSection />
        <NineSection />
      </Box>
    </Box>
  );
};

export default Home;
