import { css } from '@emotion/core';

import { animate_once, animate_loop } from '@styles/mixins';

export default () => css`
  .Loader {
    position: relative;
    width: 100%;
    height: 100%;

    &__children {
      height: 100%;
      width: 100%;
      flex: 1;
      transition: opacity .2s;
      opacity: 0;

      &--loading {
        opacity: 0;
      }
      
      &--loaded {
        opacity: 1;
      }
    }

    &__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);


      &.complete {
        ${animate_once('spin-out', '1s')}
      }

    }
  }


  .LoaderIcon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-top: 5px solid red;
    border-right: 5px solid red;
    border-bottom: 5px solid red;
    border-left: 5px solid rgba(0, 0, 0, 0);
    ${animate_loop('spin', '1s')};
  }

  @keyframes spin {
    0% {

      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }

  @keyframes spin-out {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
