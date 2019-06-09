import { css } from '@emotion/core';

export default theme => css`
  .About {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font_primary};
    flex-direction: column;

    &__content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${theme.font_primary};
      flex-direction: column;
      position: absolute;
    }
  }
`;
