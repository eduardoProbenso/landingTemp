import {
  Box,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import ejemploPercapita from "../../assets/images/ejemploPercapita.png";
import Lupa from "../../assets/icons/Lupa.svg";
import Smartphone from "../../assets/icons/Smartphone.svg";
import Money from "../../assets/icons/Money.svg";
import Terminal from "../../assets/icons/Terminal.svg";
import HandShakeContract from "../../assets/icons/HandShakeContract.svg";

const benefits = [
  {
    icon: Lupa,
    text: "Transparencia ante todo: creemos que la confianza se construye con información clara, sin letras pequeñas ni promesas vacías.",
  },
  {
    icon: Smartphone,
    text: "Tecnología al servicio de las personas: usamos herramientas digitales para que el proceso sea rápido, simple y accesible desde cualquier lugar.",
  },
  {
    icon: Money,
    text: "Inclusión financiera real: ayudamos a quienes no siempre tienen acceso al crédito tradicional, ofreciendo soluciones justas y humanas.",
  },
  {
    icon: Terminal,
    text: "Acompañamiento cercano: nuestro equipo está comprometido a brindarte atención personalizada en cada paso, desde la solicitud hasta el último pago.",
  },
  {
    icon: HandShakeContract,
    text: "Compromiso social: nuestro propósito va más allá del crédito. Queremos impulsar sueños, aliviar preocupaciones y construir bienestar.",
  },
];

const AboutUsInfo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#fff",
        p: { xs: 2, md: 4 },
        borderRadius: 3,
        maxWidth: 1200,
        margin: "0 auto",
        gap: 4,
        mt: 4,
      }}
    >
      {/* Columna izquierda */}
      <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", flexDirection: "column" }}>
        <Box
          component="img"
          src={ejemploPercapita}
          alt="Happy Grandma"
          sx={{
            width: "100%",
            height: { xs: 200, md: 300 },
            borderRadius: 2,
            objectFit: "cover",
            mb: 2,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 300,
            mb: 2,
            textAlign: "left",
            fontSize: "clamp(2rem, 2.5vw + 1.5rem, 2.5rem)",
          }}
        >
          En Percapita creemos en tu <Box component="span" sx={{ fontWeight: 700 }}>libertad económica</Box>
        </Typography>

        {[
          "Queremos que tus necesidades dejen de ser preocupaciones. Trabajamos para ayudarte a convertir tus sueños en metas alcanzables.",
          "Somos la institución que otorga el crédito más rápido y con los menores requisitos posibles, ofreciendo siempre un servicio profesional, oportuno y personalizado.",
          "Nuestra misión es que alcances tu libertad económica en solo cuatro pasos: solicitud en línea, confirmación de celular, envío de documentos y acceso a tu préstamo en menos de 24 horas.",
          "Más de 1,500 personas ya han adquirido su libertad económica con nosotros. Únete a ellas y transforma tu futuro con Percapita.",
        ].map((text, idx) => (
          <Typography key={idx} variant="body1" sx={{ mb: 2, textAlign: "left" }}>
            {text}
          </Typography>
        ))}
      </Box>

      {/* Columna derecha */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 400,
            mb: 2,
            fontSize: "clamp(1.5rem, 1.2vw + 1rem, 2.3rem)",
            textAlign: "left",
          }}
        >
          ¿Por qué con nosotros?
        </Typography>

        {benefits.map((item, index) => (
          <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Box
              component="img"
              src={item.icon}
              alt={`Icon ${index + 1}`}
              sx={{ width: 40, height: 40, mt: 0.5 }}
            />
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.primary, textAlign: "left" }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}

        <Button
          href="/"
          variant="outlined"
          sx={{
            mt: 3,
            alignSelf: "center",
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
        >
          VOLVER AL INICIO
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUsInfo;
