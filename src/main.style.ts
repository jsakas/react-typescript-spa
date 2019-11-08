export default (theme: Theme) => `
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400,500,700|Raleway:300,400,500,600,700,800,900');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');

  html, body {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.text};
    padding: 0;
    margin: 0;
    transition: background 1s;
    min-width: 100vw;
    min-height: 100vh;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.colors.primary};
  }

  #main {
    overflow: hidden;
    position: absolute; 
    top: 0;
    right: 0;
    bottom: 0; 
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
  }
`;
