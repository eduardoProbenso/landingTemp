import { useState } from "react";
import {
    Box,
    Typography,
    Card,
    RadioGroup,
    FormControlLabel,
    Radio,
    Slider,
    useTheme,
    Link,
    IconButton,
    Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CirculoDolarIcon from "@assets/icons/CirculoDolar.svg";
import { Link as RouterLink } from "react-router-dom";
import LINKS from "../config/links"; 

const formatCurrency = (value: number) =>
    `$ ${value.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;

const mesesOpciones = [1, 3, 6, 9, 12];

const PrestamoCard = () => {
    const theme = useTheme();
    const [tipoPrestamo, setTipoPrestamo] = useState("pabs");
    const [monto, setMonto] = useState(3000);
    const [frecuenciaPago, setFrecuenciaPago] = useState("semanal");
    const [mesSeleccionado, setMesSeleccionado] = useState<number | null>(null);

    const handleMontoChange = (value: number) => {
        if (value >= 3000 && value <= 20000) {
            setMonto(value);
        }
    };

    const redirectToHome = () => {
        window.location.href = LINKS.SOLICITAR_CREDITO;
    };

    return (
        <Card
            sx={{
                width: "100%",
                p: 4,
                borderRadius: 3,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#fff",
            }}
        >
            {/* Icono */}
            <Box
                component="img"
                src={CirculoDolarIcon}
                alt="Círculo Dólar"
                sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                }}
            />

            {/* Título */}
            <Typography
                variant="h2"
                sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 400, // sin negritas
                    textAlign: "center",
                    mb: 2,
                    fontSize: "clamp(1.5rem, 1vw + 1rem, 2.2rem)",
                }}
            >
                Tu préstamo, a un clic de distancia. <br /> ¡Solicítalo online!
            </Typography>

            {/* Subtítulo */}
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    mb: 3,
                }}
            >
                Selecciona el tipo de préstamo que necesitas y calcula tus pagos al instante.
            </Typography>

            {/* Opciones de préstamo */}
            <RadioGroup
                row
                value={tipoPrestamo}
                onChange={(e) => setTipoPrestamo(e.target.value)}
                sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}
            >
                <Box display="flex" flexDirection="column" alignItems="center">
                    <FormControlLabel
                        value="personal"
                        control={<Radio sx={{ color: theme.palette.primary.main }} />}
                        label="Personal"
                        sx={{ ".MuiFormControlLabel-label": { fontWeight: 600 } }}
                    />
                    <Link
                        component={RouterLink}
                        to="/creditoPABS"
                        underline="hover"
                        sx={{
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            color: theme.palette.primary.main,
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Saber más
                    </Link>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center">
                    <FormControlLabel
                        value="pabs"
                        control={<Radio sx={{ color: theme.palette.primary.main }} />}
                        label="Con aval título PABS"
                        sx={{ ".MuiFormControlLabel-label": { fontWeight: 600 } }}
                    />
                    <Link
                        component={RouterLink}
                        to="/creditoPABS"
                        underline="hover"
                        sx={{
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            color: theme.palette.primary.main,
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Saber más
                    </Link>
                </Box>
            </RadioGroup>

            {/* Control de monto */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    my: 2,
                }}
            >
                <IconButton
                    onClick={() => handleMontoChange(monto - 500)}
                    size="small"
                    sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        color: theme.palette.primary.main,
                    }}
                >
                    <RemoveIcon fontSize="small" />
                </IconButton>

                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 500,
                        color: theme.palette.primary.dark,
                        minWidth: 120,
                        textAlign: "center",
                        fontSize: {
                            xs: "1.75rem", // ligeramente menor que h3 (2rem)
                            md: theme.typography.h2.fontSize, // 2.5rem en desktop
                        },
                        lineHeight: 1.2,
                    }}
                >
                    {formatCurrency(monto)}
                </Typography>



                <IconButton
                    onClick={() => handleMontoChange(monto + 500)}
                    size="small"
                    sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        color: theme.palette.primary.main,
                    }}
                >
                    <AddIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* Tasa */}
            <Typography
                variant="caption"
                sx={{ color: theme.palette.text.secondary, mb: 1, fontSize: "0.75rem" }}
            >
                Tasa anual: 16.9% | CAT: 30.55%
            </Typography>

            {/* Slider */}
            <Slider
                value={monto}
                onChange={(_, value) => handleMontoChange(value as number)}
                min={3000}
                max={20000}
                step={500}
                sx={{
                    width: "100%",
                    color: theme.palette.primary.main,
                    mt: 2,
                    "& .MuiSlider-thumb": {
                        width: 16,
                        height: 16,
                    },
                }}
            />

            {/* ¿Cómo deseas pagarlo? */}
            <Typography
                variant="body1"
                sx={{
                    textAlign: "left",
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    width: "100%",
                    mt: 4,
                    mb: 1,
                }}
            >
                ¿Cómo deseas pagarlo?
            </Typography>

            <RadioGroup
                row
                value={frecuenciaPago}
                onChange={(e) => setFrecuenciaPago(e.target.value)}
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
            >
                <FormControlLabel
                    value="semanal"
                    control={<Radio sx={{ color: theme.palette.primary.main }} />}
                    label="Semanal"
                    sx={{ ".MuiFormControlLabel-label": { fontWeight: 600 } }}
                />
                <FormControlLabel
                    value="quincenal"
                    control={<Radio sx={{ color: theme.palette.primary.main }} />}
                    label="Quincenal"
                    sx={{ ".MuiFormControlLabel-label": { fontWeight: 600 } }}
                />
            </RadioGroup>

            {/* ¿En cuánto tiempo deseas pagarlo? */}
            <Typography
                variant="body1"
                sx={{
                    textAlign: "left",
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    width: "100%",
                    mt: 4,
                    mb: 1,
                }}
            >
                ¿En cuánto tiempo deseas pagarlo?
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: 1,
                    mb: 1,
                    flexWrap: "wrap",
                }}
            >
                {mesesOpciones.map((mes) => (
                    <Button
                        key={mes}
                        onClick={() => setMesSeleccionado(mes)}
                        variant="outlined"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            borderColor:
                                mesSeleccionado === mes
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[400],
                            color:
                                mesSeleccionado === mes
                                    ? theme.palette.primary.main
                                    : theme.palette.text.primary,
                            fontWeight: 600,
                            px: 2,
                            py: 0.5,
                            "&:hover": {
                                borderColor: theme.palette.primary.main,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                bgcolor:
                                    mesSeleccionado === mes
                                        ? theme.palette.primary.main
                                        : theme.palette.grey[300],
                                color: mesSeleccionado === mes ? "#fff" : theme.palette.text.primary,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                            }}
                        >
                            {mes}
                        </Box>
                        {mes === 1 ? "Mes" : "Mes"}
                    </Button>
                ))}
            </Box>

            <Typography
                variant="caption"
                sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "0.75rem",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                Si lo pagas antes, pagas menos ;)
            </Typography>

            {/* Botón solicitar */}
            <Box sx={{ mt: 4, width: "100%" }}>
                <Button
                    variant="gradient"
                    fullWidth
                    onClick={redirectToHome}
                    sx={{
                        borderRadius: 2,
                        padding: "10px 16px",
                    }}
                >
                    SOLICITAR PRÉSTAMO AHORA
                </Button>
            </Box>
        </Card>
    );
};

export default PrestamoCard;
