import {
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@assets/icons/perCapitaLogoNuevo.png";
import LINKS from "../config/links";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleMenuClick = (label: string) => {
    if (label === "Sobre nosotros") {
      navigate("/sobreNosotros");
    } else if (label === "Crédito PABS") {
      navigate("/creditoPABS");
    } else if (label === "Financiamiento") {
      if (window.location.pathname === "/") {
        const section = document.getElementById("financiamiento");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");

        const observer = new MutationObserver(() => {
          const section = document.getElementById("financiamiento");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            observer.disconnect(); // Deja de observar cuando lo encuentra
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }

      setOpenDrawer(false);
    }

    setOpenDrawer(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSolicitarCredito = () => {
    window.location.href = LINKS.SOLICITAR_CREDITO;
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              flexGrow: isMobile ? 1 : 0,
              cursor: "pointer",
            }}
            onClick={handleLogoClick}
          >
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDrawer(true);
                }}
                sx={{ position: "absolute", left: 8 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <img src={Logo} alt="Percapita Logo" style={{ height: 40 }} />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {["Sobre nosotros", "Financiamiento", "Crédito PABS"].map((label) => (
                <Typography
                  key={label}
                  component="span"
                  onClick={() => handleMenuClick(label)}
                  sx={{
                    cursor: "pointer",
                    color: theme.palette.primary.main,
                    fontWeight: 400,
                    fontSize: "1rem",
                    letterSpacing: "0.15px",
                    transition: "border-bottom 0.2s ease",
                    borderBottom: "2px solid transparent",
                    "&:hover": {
                      borderBottom: `2px solid ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  {label}
                </Typography>
              ))}
              <Avatar sx={{ width: 30, height: 30, bgcolor: "#00B0F0", fontSize: 14 }} />
              <Button
                variant="gradient"
                size="small"
                onClick={handleSolicitarCredito}
                sx={{
                  borderRadius: 2,
                  padding: "6px 16px",
                }}
              >
                SOLICITAR CRÉDITO
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{
            width: 250,
            mt: 2,
            bgcolor: theme.palette.background.default,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pb: 2,
          }}
        >
          <List>
            {["Sobre nosotros", "Financiamiento", "Crédito PABS"].map((label) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  onClick={() => handleMenuClick(label)}
                  sx={{
                    "&:hover": {
                      bgcolor: "transparent",
                    },
                  }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      color: theme.palette.primary.main,
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ px: 2 }}>
            <Button
              variant="gradient"
              fullWidth
              onClick={handleSolicitarCredito}
              sx={{
                borderRadius: 2,
                padding: "6px 16px",
              }}
            >
              SOLICITAR CRÉDITO
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
