export const shake = {
  '@global': {
    '@keyframes shake': {
      '0%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(4px) rotate(1deg)' },
      '75%': { transform: 'translateX(-4px) rotate(-1deg)' },
      '100%': { transform: 'translateX(0) rotate(0)' },
    },
  },
  animation: 'shake .2s ease-in-out',
};
