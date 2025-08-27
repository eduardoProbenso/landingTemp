import { Box, Typography, Card, useTheme, Button, Link, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import happyGrandma from "../assets/images/happyGrandma.png";
import LogoHorizontal from "../assets/icons/LogoHorizontal.svg";
import Handshake from "../assets/icons/Handshake2.svg";
import Clock from "../assets/icons/Clock.svg";
import MoneyUp from "../assets/icons/MoneyUp.svg";
import Calendar from "../assets/icons/Calendar.svg";
import { Link as RouterLink } from "react-router-dom";
import LINKS from "../../config/links";

const Section4 = () => {
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
      id="creditoPABS"
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
      {/* Card tipo acordeón arriba */}
      <Card
        sx={{
          width: "100%",
          mb: 6,
          p: 3,
          borderRadius: 3,
          backgroundColor: "#fff",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Accordion defaultExpanded sx={{ backgroundColor: "#fff", boxShadow: "none" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                component="img"
                src={LogoHorizontal}
                alt="Logo Percapita"
                sx={{ width: 150, height: "auto", objectFit: "contain" }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 500,
                mb: 1,
                textAlign: "left",
              }}
            >
              El Título PABS es un plan de previsión que protege a tu familia y también puede ser utilizado en Percapita como garantía para acceder a montos mayores, desde $7,500 hasta $27,000 MXN de forma rápida y sin trámites complicados. ¡Tu tranquilidad financiera está garantizada!
            </Typography>
            <Link
              component={RouterLink}
              to="/creditoPABS"
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
          </AccordionDetails>
        </Accordion>
      </Card>

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
        {/* Texto */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
            minWidth: 250,
            width: { xs: "100%", md: "50%" }, // ← hace que en md+ sea la mitad
          }}
        >
          {/* Texto pequeño azul turquesa */}
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: 700,
              mb: 1,
            }}
          >
            ¿Con aval tu título PABS?
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            <Box component="span" fontWeight="normal">
              Tomamos como aval tu título PABS y te otorgamos
            </Box>{" "}
            <Box component="span" fontWeight="bold">
              un préstamo flexible y seguro.
            </Box>
          </Typography>

          {/* Texto con Saber más inline */}
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
              mb: 3,
            }}
          >
            Te permite acceder a montos mayores, desde $7,500 hasta $27,000, utilizando tu título PABS completamente pagado como garantía. Es la solución ideal para proyectos importantes, como la remodelación de tu hogar, emergencias médicas, o para apoyar a tu negocio, con la tranquilidad de un proceso claro, rápido y sin complicaciones.{" "}
            <Link
              component={RouterLink}
              to="/creditoPABS"
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

          {/* Botón degradado alineado a la izquierda */}
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

        {/* Imagen */}
        <Box
          component="img"
          src={happyGrandma}
          alt="Familia feliz"
          sx={{
            flex: 1,
            width: { xs: "100%", md: "50%" }, // ← asegura que en md+ sea la mitad
            height: "100%",
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
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

      {/* Texto final centrado */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 8,
        }}
      >
        <Link
          href={LINKS.SOLICITAR_CREDITO}
          underline="hover"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "1rem",
            fontWeight: 600,
            "&:hover": {
              color: theme.palette.primary.main,
            },
          }}
        >
          ¿Te interesa contratar un Título PABS?
        </Link>
      </Box>
    </Box>
  );
};

export default Section4;
