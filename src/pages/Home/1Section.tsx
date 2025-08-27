import { Box } from "@mui/material";
import Principal from "@assets/images/principal.png";
import PrestamoCard from "../../components/Prestamo";

const OneSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: "5%",
        px: "10%",
        background: "linear-gradient(to bottom, rgb(239,249,255), #fff)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Columna Izquierda - PrestamoCard */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PrestamoCard />
        </Box>

        {/* Columna Derecha - Imagen */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={Principal}
            alt="Principal"
            sx={{
              width: { xs: "80%", sm: "70%", md: "100%" },
              maxHeight: { xs: 250, md: 400, lg: 500 },
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* Línea divisoria inferior */}
      <Box
        sx={{
          width: "100%",
          height: "4px",
          backgroundColor: "rgb(182,234,255)",
          mt: 6,
          borderRadius: 2,
        }}
      />
    </Box>
  );
};

export default OneSection;
