import { Box, Typography, Card, useTheme, Button } from "@mui/material";
import madreHija from "../assets/images/madreHija.png";
import LINKS from "../../config/links";
import Dolar from "../assets/icons/Dolar.svg";
import Telefono from "../assets/icons/Telefono.svg";
import Banco from "../assets/icons/Banco.svg";
import Terminal from "../assets/icons/Terminal.svg";

const Section8 = () => {
  const theme = useTheme();
  const redirectToHome = () => {
    window.location.href = LINKS.SOLICITAR_CREDITO;
  };

  const features = [
    {
      icon: Dolar,
      title: "Dinos cuánto necesitas",
      desc: "Calcula tu préstamo, elige el monto y plazo que mejor se adapten a ti. Desde $3,000 hasta $24,000, con plazos semanales, quincenales o mensuales.",
    },
    {
      icon: Telefono,
      title: "Inicia tu solicitud",
      desc: "Llena un formulario simple con tus datos personales, comprobaremos tu historial crediticio, validaremos tu identidad con ayuda de tu INE y solo necesitarás una referencia. Todo en menos de 5 minutos.",
    },
    {
      icon: Banco,
      title: "Depositaremos tu préstamo",
      desc: "Después de aprobar tu préstamo, te solicitaremos datos bancarios para depositarte tu préstamo o podrás disponer del efectivo asistiendo a una sucursal bancaria BBVA.",
    },
    {
      icon: Terminal,
      title: "Diferentes formas de pagar tu préstamo",
      desc: "Podrás pagar desde el portal, desde tu aplicación bancaria o pagar en tiendas de conveniencia como OXXO.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: "5%",
        px: "10%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Imagen + Texto */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {/* Imagen */}
        <Box
          component="img"
          src={madreHija}
          alt="Descripción de imagen"
          sx={{
            width: { xs: "100%", md: "35%" },
            height: "auto",
            borderRadius: 2,
            objectFit: "cover",
          }}
        />

        {/* Texto */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
            minWidth: 250,
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            <Box component="span" fontWeight="normal">
              Solicitar tu préstamo en línea es más
            </Box>{" "}
            <Box component="span" fontWeight="bold">
              fácil de lo que imaginas
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
            }}
          >
            Hemos simplificado cada paso para que puedas obtener el préstamo que necesitas de manera rápida, clara y sin complicaciones.
          </Typography>
        </Box>
      </Box>

      {/* Cards con icono, título y descripción */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 4,
          mt: 4,
          width: "100%",
        }}
      >
        {features.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 225,
              p: 3,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              component="img"
              src={item.icon}
              alt={item.title}
              sx={{
                width: { xs: "60%", md: "40%" },
                height: "auto",
                objectFit: "contain",
                mb: 2,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 750,
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              {item.desc}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Botón final */}
      <Box sx={{ mt: 6, px: 3, width: "100%", maxWidth: 400 }}>
        <Button
          variant="gradient"
          fullWidth
          onClick={redirectToHome}
          sx={{
            borderRadius: 2,
            padding: "10px 16px",
          }}
        >
          SOLICITAR PRÉSTAMO
        </Button>
      </Box>
    </Box>
  );
};

export default Section8;
