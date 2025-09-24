import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "../Css/navbar.css";
const pages = ["Gingibre", "Rubra", "Veneta", "Xeque-Mate"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// Estilo para o ícone do logo
const StyledAdbIcon = styled(AdbIcon)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  marginRight: theme.spacing(1),
  color: "#FFB800", // COR ALTERADA: Cor do ícone do logo
}));

// Estilo para a tipografia do logo (desktop)
const StyledLogoTypographyDesktop = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  fontFamily: "Jost !important", // FONTE ALTERADA: Tipo de fonte
  fontWeight: 600,
  fontStyle: "normal !important",
  fontOpticalSizing: "auto !important",
  color: "black", // COR ALTERADA: Cor do texto do logo
  textDecoration: "none",
}));

// Estilo para o Box que contém os botões do menu (mobile)
const StyledMobileBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  gap: "20px",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

// Estilo para o Box que contém os botões do menu (desktop)
const StyledDesktopBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  gap: "20px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

// Estilo para a tipografia do logo (mobile)
const StyledLogoTypographyMobile = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: "flex",
  flexGrow: 1,
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "#FFB800", // COR ALTERADA: Cor do texto do logo
  textDecoration: "none",
}));

// Estilo para os botões da página
const StyledPageButton = styled(Button)(({ theme }) => ({
  my: theme.spacing(2),
  color: "black", // COR ALTERADA: Cor do texto dos botões
  backgroundColor: "transparent", // COR NOVA: Cor de fundo dos botões
  display: "block",
  fontFamily: "Arial, sans-serif", // FONTE NOVA: Tipo de fonte
  fontWeight: 600, // PESO DA FONTE: Peso da fonte
  borderRadius: "50px", // NOVO: Borda arredondada
  "&:hover": {
    color: "black", // Efeito hover nos botões
    backgroundColor: "#eee", // COR NOVA: Cor de fundo ao passar o mouse
    background: "#e0e0e0",
    boxShadow: `rgba(50, 50, 93, 0.02) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset`, // Sombra ao passar o mouse
  },
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#F2F2F2",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo e nome da empresa para desktop */}
          <StyledAdbIcon />
          <StyledLogoTypographyDesktop
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className="jost-style"
          >
            Melhores Drinks
          </StyledLogoTypographyDesktop>

          {/* Menu e logo para mobile */}
          <StyledMobileBox>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </StyledMobileBox>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <StyledLogoTypographyMobile
            className="jost-style"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
          >
            Melhores Drinks
          </StyledLogoTypographyMobile>

          {/* Botões de navegação para desktop */}
          <StyledDesktopBox>
            {pages.map((page) => (
              <StyledPageButton
                key={page}
                className="jost-link"
                onClick={handleCloseNavMenu}
              >
                {page}
              </StyledPageButton>
            ))}
          </StyledDesktopBox>

          {/* Menu do usuário com avatar */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
