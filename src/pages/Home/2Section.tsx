import {
  Box,
  Typography,
  Card,
  useTheme,
  Button,
  Link,
} from "@mui/material";
import family from "../../assets/images/family.png";
import Handshake from "../../assets/icons/Handshake2.svg";
import Clock from "../../assets/icons/Clock.svg";
import MoneyUp from "../../assets/icons/MoneyUp.svg";
import Calendar from "../../assets/icons/Calendar.svg";
import { Link as RouterLink } from "react-router-dom";
import LINKS from "../../config/links";

const Section2 = () => {
  const theme = useTheme();

  const redirectToHome = () => {
    window.location.href = LINKS.SOLICITAR_CREDITO;
  };

  const features = [
    {
      icon: Handshake,
      title: "Transparencia total",
      desc: "Desde el primer paso, sabrás exactamente cuánto pagarás y cuándo, sin cargos ocultos ni sorpresas.",
    },
    {
      icon: Clock,
      title: "Rapidez garantizada",
      desc: "Recibe tu dinero en menos de 1 hora después de la aprobación (esto dependerá de la respuesta que nos de tu banco).",
    },
    {
      icon: MoneyUp,
      title: "¡Mientras mejor tu historial, mayor será tu préstamo!",
      desc: "Al liquidar tu préstamo antes de tiempo, podrás incrementar el monto de tu próximo.",
    },
    {
      icon: Calendar,
      title: "Sin penalizaciones por pagar antes",
      desc: "¿Quieres liquidar tu crédito antes? ¡Hazlo sin preocupaciones! No cobramos penalizaciones por pagos anticipados.",
    },
  ];

  return (
    <Box
      id="financiamiento"
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
          alignItems: "stretch",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {/* Imagen */}
        <Box
          component="img"
          src={family}
          alt="Familia feliz"
          sx={{
            flex: 1,
            width: { xs: "100%", md: "50%" },
            height: "100%",
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
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: 700,
              mb: 1,
            }}
          >
            ¿Préstamo personal?
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            <Box component="span" fontWeight="bold">
              Rápido, claro y seguro.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
              mb: 3,
            }}
          >
            La solución perfecta para cubrir gastos inesperados, realizar compras importantes o mejorar tu historial crediticio. Solicita montos accesibles, desde $3,000 hasta $24,000, con plazos que se ajustan a tus posibilidades. ¡En menos de 5 horas tendrás tu préstamo!{" "}
            <Link
              component={RouterLink}
              to="/sobreNosotros"
              underline="hover"
              sx={{
                color: theme.palette.primary.main,
                fontSize: "0.85rem",
                fontWeight: 600,
                ml: 1,
                cursor: "pointer",
              }}
            >
              Saber más
            </Link>
          </Typography>

          <Button
            variant="gradient"
            onClick={redirectToHome}
            sx={{
              width: { xs: "100%", sm: "70%", md: "50%" },
              mb: 2,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 700,
              textAlign: "left",
            }}
          >
            SOLICITAR PRÉSTAMO
          </Button>
        </Box>
      </Box>

      {/* Cards con icono, título y descripción */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 4,
          mt: 6,
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
    </Box>
  );
};

export default Section2;
