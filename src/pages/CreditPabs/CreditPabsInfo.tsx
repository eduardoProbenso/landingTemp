import {
  Box,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import happyGrandma from "../assets/images/happyGrandma.png";
import Lupa from "../assets/icons/Lupa.svg";
import Smartphone from "../assets/icons/Smartphone.svg";
import Money from "../assets/icons/Money.svg";
import Terminal from "../assets/icons/Terminal.svg";
import HandShakeContract from "../assets/icons/HandShakeContract.svg";

const benefits = [
  {
    icon: Lupa,
    text: "Aprobación Rápida: al contar con un título PABS, el proceso de aprobación de tu crédito puede ser más ágil, ya que el título representa una garantía sólida para la institución financiera.",
  },
  {
    icon: Smartphone,
    text: "Tasa de Interés Preferencial: muchas veces, las instituciones financieras ofrecen tasas de interés más competitivas a los clientes que utilizan sus títulos PABS como garantía, debido al bajo riesgo que representa esta modalidad de crédito.",
  },
  {
    icon: Money,
    text: "Montos Mayores: al utilizar tu título PABS como aval, es posible acceder a montos de crédito más elevados en comparación con otros tipos de préstamos personales.",
  },
  {
    icon: Terminal,
    text: "Flexibilidad en los Pagos: los préstamos respaldados por títulos PABS suelen ofrecer planes de pago flexibles, adaptándose a tus necesidades y capacidad de pago.",
  },
  {
    icon: HandShakeContract,
    text: "Tranquilidad Financiera: al contar con un plan funerario prepagado y la posibilidad de acceder a un crédito en cualquier momento, tendrás la tranquilidad de saber que estás preparado para enfrentar cualquier situación financiera.",
  },
];

const CreditoPabsInfo = () => {
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
          src={happyGrandma}
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
          variant="h4" // más pequeño que h1
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 300, // más ligero
            mb: 2,
            textAlign: "left",
            fontSize: "clamp(2rem, 2.5vw + 1.5rem, 2.5rem)", 
          }}
        >
          ¿Qué es un título{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            PABS?
          </Box>
        </Typography>


        {[
          "Un título PABS te ofrece una solución económica y práctica para planificar tus gastos funerarios con la facilidad de pagar cómodamente a meses sin intereses y disfrutar de la seguridad de saber que todo está cubierto.",
          "Organizar tu despedida con anticipación y evitar gastos inesperados con un paquete funerario te ofrece tranquilidad financiera y permite que tus seres queridos se enfoquen en lo que realmente importa.",
          "Tu título PABS, tu mejor aliado financiero. Obtén un crédito rápido y seguro utilizando tu título como aval. Disfruta de las ventajas de un plan funerario y de la flexibilidad de pagar a meses. ¡Planifica tu futuro y alcanza tus metas!",
          "Adquiere tu título PABS y accede a servicios funerarios de calidad. Además, ¡convierte tu título en una oportunidad de crecimiento! Percapita te ofrece préstamos de hasta $27,000 pesos para impulsar tus proyectos. ¡Tu buen historial de pagos te abre las puertas a nuevas posibilidades!",
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
          Beneficios de contar con un título PABS en Percapita
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

export default CreditoPabsInfo;
