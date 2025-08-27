import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Button,
  Card,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Question from "../../assets/icons/Question.svg";

const Section9 = () => {
  const theme = useTheme();

  const faqs = [
    {
      question: "¿Qué documentos necesito para un préstamo personal?",
      title: "Todo lo que necesitas saber para obtener tu préstamo con confianza.",
      description:
        "Sabemos que pueden surgir preguntas al momento de solicitar tu préstamo. Aquí encontrarás respuestas claras y rápidas sobre nuestros préstamos personales y préstamos con aval Título PABS. Si tienes más dudas, nuestro equipo está listo para ayudarte.",
    },
    {
      question: "¿Puedo renovar mi préstamo personal?",
      description: "Si, puedes renovar tu préstamo cuando hayas pagado el monto total. Además, al cumplir puntualmente, el monto de tu próximo préstamo puede aumentar.",
    },
    {
      question: "¿Puedo solicitar otro préstamo si ya tengo uno activo?",
      description: "Actualmente, debes liquidar tu préstamo actual antes de solicitar uno nuevo. Sin embargo, siempre puedes renovarlo para obtener mejores condiciones.",
    },
    {
      question: "¿Qué es un título PABS y cómo funciona?",
      description: "Un título PABS es un plan funerario que puedes utilizar como garantía para obtener un préstamo mayor, siempre que esté completamente pagado.",
    },
    {
      question: "¿Qué sucede con mi título PABS mientras uso el préstamo?",
      description: "Tu título queda como garantía con Percapita mientras realizas los pagos del préstmo. Una vez que completes el pago, puedes solicitar tu título nuevamente.",
    },
    {
      question: "¿Qué pasa si no termino de pagar mi préstamo con título PABS?",
      description: "En caso de no poder pagar el préstamo, el título se utilizará como respaldo y Percapita mantendrá el control del mismo.",
    },
    {
      question: "¿Qué documentos necesito para este préstamo?",
      description: "Necesitas tu INE, y tener en cuenta que validaremos tu identidad con ayuda de la cámara de tu teléfono, te recomendamos tener cerca tu teléfono móvil, además del número de tu título PABS completamente pagado",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: "5%",
        px: "10%",
        backgroundColor: "#F9FAFB",
      }}
    >
      {/* Primera pregunta con respuesta genérica */}
      <Accordion
        sx={{
          mb: 2,
          borderRadius: 2,
          backgroundColor: "#F9FAFB",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}>
          <Typography variant="body1" sx={{ color: theme.palette.primary.main, fontWeight: 750 }}>
            {faqs[0].question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ textAlign: "left", fontWeight: 500 }}>
            Solo necesitas tu INE, y tener en cuenta que validaremos tu identidad con ayuda de la cámara de tu teléfono, te recomendamos tener cerca tu teléfono móvil.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Bloque informativo con ícono, título y descripción */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: 2,
          mb: 4,
        }}
      >
        <Box
          component="img"
          src={Question}
          alt="Icono Pregunta"
          sx={{ width: { xs: "60%", md: 180 }, height: "auto", objectFit: "contain" }}
        />
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, mt: { xs: 2, md: 0 } }}>
          <Typography
            variant="h1"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              mb: 1,
            }}
          >
            <Box component="span" fontWeight={700}>
              Todo lo que necesitas saber para obtener tu préstamo&nbsp;
            </Box>
            <Box component="span" fontWeight={400}>
              con confianza.
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            {faqs[0].description}
          </Typography>
        </Box>
      </Box>


      {/* Resto de las preguntas */}
      {faqs.slice(1).map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 2,
            borderRadius: 2,
            backgroundColor: "#F9FAFB",
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}>
            <Typography variant="body1" sx={{ color: theme.palette.primary.main, fontWeight: 750 }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ textAlign: "left", fontWeight: 500 }}>{faq.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Card final con WhatsApp */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card
          sx={{
            mt: 6,
            p: 4,
            backgroundColor: "#fff",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            width: { xs: "90%", md: "60%" },
          }}
        >
          <Typography
            variant="h1"
            sx={{ color: theme.palette.primary.main, fontWeight: 700, mb: 1, fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            ¿Más dudas?
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.primary, mb: 3, fontWeight: 600 }}>
            Contáctanos vía WhatsApp, estamos para ayudarte.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mt: 2 }}>
            <WhatsAppIcon sx={{ color: "#25D366", fontSize: 40 }} />
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                borderRadius: 3,
                px: 4,
                py: 1,
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: "#fff",
                },
              }}
              href="https://wa.me/523346618009"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACTAR
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Section9;
