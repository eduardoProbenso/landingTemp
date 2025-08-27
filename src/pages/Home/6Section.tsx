import { Box, Typography, Card, useTheme } from "@mui/material";
import LogoCondusef from "../../assets/images/Logo-de-Consusef.jpg";
import LogoSAT from "../../assets/images/LogoSAT.jpg";
import LogoAsofom from "../../assets/images/Logo-Asofom-002.jpg";
import LogoBuro from "../../assets/images/logoBuro.png";

const Section6 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        py: "5%",
        px: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Título principal */}
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: 2,
        }}
      >
        <Box component="span" fontWeight="bold">
          Un préstamo seguro y confiable
        </Box>
      </Typography>

      {/* Texto descriptivo */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          maxWidth: "100%",
          mb: 6,
          color: theme.palette.text.primary,
          fontWeight: 600,
        }}
      >
        Percapita opera bajo los estándares de instituciones financieras reguladas y cuenta con el respaldo de entidades como:
      </Typography>

      {/* Grid de logos */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
          width: "100%",
          mb: 6,
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            gap: 3,
          },
        }}
      >
        {/* Card 1 - Condusef */}
        <Card
          sx={{
            width: 150,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <Box
            component="img"
            src={LogoCondusef}
            alt="Logo Condusef"
            sx={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Card>

        {/* Card 2 - SAT */}
        <Card
          sx={{
            width: 150,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <Box
            component="img"
            src={LogoSAT}
            alt="Logo SAT"
            sx={{ maxWidth: "80%", maxHeight: "80%" }}
          />
        </Card>

        {/* Card 3 - Asofom */}
        <Card
          sx={{
            width: 150,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <Box
            component="img"
            src={LogoAsofom}
            alt="Logo Asofom"
            sx={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Card>

        {/* Card 4 - Buró de Crédito */}
        <Card
          sx={{
            width: 150,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <Box
            component="img"
            src={LogoBuro}
            alt="Logo Buró de Crédito"
            sx={{ maxWidth: "80%", maxHeight: "80%" }}
          />
        </Card>
      </Box>

      {/* Texto final */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: theme.palette.text.primary,
          fontWeight: 600,
        }}
      >
        Tu seguridad y tranquilidad son nuestra prioridad.
      </Typography>
    </Box>
  );
};

export default Section6;
