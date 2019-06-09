import { css } from '@emotion/core';

import { animate_once } from '@styles/mixins';

export default theme => css`
  html, body {
    background: ${theme.color_background};
  }

  .App {
    ${animate_once('page-enter', '3s')}

    &__fade-in {
      transition: opacity 5s, height 1s;
      opacity: 0;
      height: 0;

      &--entered {
        opacity: 1;
        height: 50px;
      }
    }

    &__page-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 100%;
      padding: 2rem 2rem 4rem 2rem;
      position: relative;
    }

    &__page-content {
      width: 100%;
    }

    &__page {
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      position: absolute; 
      top: 0;
      right: 0;
      bottom: 0; 
      left: 0;
    }

    &__page-transition {

      @media print {
        overflow: visible;
      }
      
      &--entering {
        ${animate_once('page-enter', '5s')}
        overflow: hidden;
      }
      
      &--exiting {
        ${animate_once('page-exit', '5s')}
        overflow: hidden;
      }

      @keyframes page-enter {
        0% {
          top: -2rem;
          opacity: 0;
        }
        
        100% {
          top: 0rem;
          opacity: 1;
        }
      }
      
      @keyframes page-exit {
        0% {
          top: 0rem;
          opacity: 1;
        }
        
        50% {
          top: 5rem;
          opacity: 0;
        }

        100% {
          top: 5rem;
          opacity: 0;
        }
      }
    }
  }
`;
