import { Box, Typography, Card, useTheme, Button } from "@mui/material";
import Slider from "react-slick";
import LINKS from "../../config/links";
import { useRef } from "react";
import Operadora from "../assets/icons/Operadora.svg";
import User from "../assets/icons/User.svg";

const Section3 = () => {
    const theme = useTheme();
    const sliderRef = useRef<Slider>(null);

    const redirectToHome = () => {
        window.location.href = LINKS.SOLICITAR_CREDITO;
    };

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 900, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1, autoplaySpeed: 4000 } },
        ],
    };

    return (
        <Box
            sx={{
                width: "100%",
                py: "5%",
                px: "10%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#EFF9FF",
            }}
        >
            {/* Grid de 3 cards */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    gap: 4,
                    flexWrap: "wrap",
                    mb: 6,
                }}
            >
                {[
                    { color: "#DDF2FF", text: "Nuestro equipo está listo para apoyarte en cada paso del proceso." },
                    { color: "#EFF9FF", text: "Tus datos están protegidos con los estándares más altos de seguridad." },
                    { color: "#DDF2FF", text: "Sin cargos ocultos. Lo que ves en pantalla es lo que pagarás. Tasas competitivas." },
                ].map((item, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: 310,
                            height: 120,
                            backgroundColor: item.color,
                            borderRadius: 3,
                            p: 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "left",
                            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
                            transition: "box-shadow 0.3s ease",
                            "&:hover": {
                                boxShadow: "none",
                            },
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.primary.dark,
                                fontWeight: 550,
                            }}
                        >
                            {item.text}
                        </Typography>
                    </Card>
                ))}
            </Box>

            {/* Icono + Título Responsive */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: { xs: 2, md: 1 },
                    mb: 4,
                    width: "100%",
                    px: "5%",
                }}
            >
                <Box
                    component="img"
                    src={Operadora}
                    alt="Icono Operadora"
                    sx={{
                        width: { xs: "70%", md: "40%" }, // Más grande en desktop
                        height: { xs: "auto", md: 200 }, // Más alto en desktop
                        objectFit: "contain",
                        mx: { xs: "auto", md: 0 },
                    }}
                />
                <Typography
                    variant="h2"
                    sx={{
                        width: { xs: "100%", md: "60%" },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Box component="span" fontWeight="bold">
                        Cada préstamo no es solo un número, es una historia
                    </Box>{" "}
                    <Box component="span" fontWeight="normal">
                        de confianza, rapidez y soluciones reales
                    </Box>
                </Typography>
            </Box>

            {/* Carrusel de historias con autoplay */}
            <Box sx={{ width: "100%", position: "relative", mb: 6 }}>
                <Slider ref={sliderRef} {...carouselSettings}>
                    {[
                        { name: "Roberto Contreras", comment: '“El proceso fue rápido y claro, desde el proceso de solicitud en el sitio hasta que recibí el dinero en mi cuenta”' },
                        { name: "José Vázquez", comment: '“Desde que inicie mi solicitud, el proceso fue súper claro y sencillo. En menos de 3 hrs ya tenía el dinero disponible”' },
                        { name: "Alfredo Hernández", comment: '“Lo que más me gustó fue la rapidez y lo fácil que fue todo. No tuve que dar anticipos ni pagar cosas raras.”' },
                        { name: "Tannya Espinosa", comment: '“Me sentí muy tranquila porque me explicaron todo paso a paso y no hubo sorpresas.”' },
                        { name: "David Ramírez", comment: '“El dinero llegó sin ningún problema. Es un proceso que recomendaría por lo confiable que es.”' },
                    ].map((story, index) => (
                        <Box key={index} sx={{ px: 1.5 }}>
                            <Card
                                sx={{
                                    p: { xs: 2, md: 3 },
                                    borderRadius: 3,
                                    backgroundColor: "#FFFFFF",
                                    boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                                    height: { xs: 180, md: 200 },
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: 1,
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: theme.palette.text.primary,
                                            fontWeight: 600,
                                            textAlign: "left",
                                            fontSize: { xs: "1rem", md: "1rem" },
                                        }}
                                    >
                                        {story.name}
                                    </Typography>

                                    <Box
                                        component="img"
                                        src={User}
                                        alt="Icono Usuario"
                                        sx={{
                                            width: { xs: 30, md: 40 },
                                            height: { xs: 30, md: 40 },
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontStyle: "italic",
                                        textAlign: "left",
                                        fontSize: { xs: "0.9rem", md: "0.9rem" },
                                    }}
                                >
                                    {story.comment}
                                </Typography>
                            </Card>
                        </Box>
                    ))}
                </Slider>
            </Box>

            {/* Botón separado abajo */}
            <Box sx={{ px: 2, mt: 2, width: "100%", maxWidth: 400 }}>
                <Button
                    variant="gradient"
                    fullWidth
                    onClick={redirectToHome}
                    sx={{
                        borderRadius: 2,
                        padding: "6px 16px",
                    }}
                >
                    SOLICITAR PRÉSTAMO
                </Button>
            </Box>
        </Box>
    );
};

export default Section3;
