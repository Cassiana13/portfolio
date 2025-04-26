import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;

    
@media (min-width: 768px) {
  .mobile-menu-button .theme-toggle {
    display: none;
  }
  
  .desktop-only {
    display: block !important;
  }
}

@media (max-width: 767px) {
  .desktop-only {
    display: none !important;
  }
}
  }
`;
