import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import Agenda from "@assets/icons/AgendaDolar.svg";

const Section7 = () => {
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
        backgroundColor: "#FAFAFA",
      }}
    >
      {/* Icono de calendario */}
      <Box
        component="img"
        src={Agenda}
        alt="Icono Usuario"
        sx={{
          width: { xs: 150, md: 200 },
          height: { xs: 150, md: 200 },
          objectFit: "contain",
        }}
      />

      {/* Título */}
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: 2,
        }}
      >
        <Box component="span" fontWeight="bold">
          Percapita
        </Box>{" "}
        <Box component="span" fontWeight="normal">en</Box>{" "}
        <Box component="span" fontWeight="bold">números</Box>
      </Typography>

      {/* Texto descriptivo */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          mb: 6,
          color: theme.palette.text.primary,
          fontWeight: 600,
        }}
      >
        Cada número cuenta una historia de confianza y apoyo, nuestros clientes han encontrado
        en Percapita una solución real para sus necesidades financieras.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: 4,
          width: "100%",
          alignItems: "stretch",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {/* Card 1 */}
        <Card
          sx={{
            flex: 1,
            maxWidth: "300px",
            backgroundColor: "#DDF2FF",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          <CardContent
            sx={{
              flex: 1, // Ocupa todo el espacio disponible
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Centra verticalmente
              py: 4,
              px: 3,
              textAlign: "left",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.dark,
                fontWeight: 600,
              }}
            >
              Más de ??? préstamos entregados con éxito.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          sx={{
            flex: 1,
            maxWidth: "300px",
            backgroundColor: "#EFF9FF",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              py: 4,
              px: 3,
              textAlign: "left",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.dark,
                fontWeight: 600,
              }}
            >
              El _% de nuestros clientes reciben su préstamo en menos de 24 horas.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          sx={{
            flex: 1,
            maxWidth: "300px",
            backgroundColor: "#DDF2FF",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              py: 4,
              px: 3,
              textAlign: "left",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.dark,
                fontWeight: 600,
              }}
            >
              _% de nuestros clientes renuevan su préstamo con Percapita gracias a la confianza y beneficios que ofrecemos.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Section7;