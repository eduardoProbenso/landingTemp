import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import CreditPabsInfo from "../pages/CreditPabs/CreditPabsInfo";

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
        <CreditPabsInfo />
      </Box>
    </Box>
  );
};

export default Home;
