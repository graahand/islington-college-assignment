module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#41448b',
        customColor1:'#767676',
        customColor2:'#007aff',
        typewriterColor:'#f4d32a',
        customColor3:'#fff',
        footerBG:'#2d2f53',
        customColor4:'#fcfcfc'

  

      
        


      },
      fontSize:{
        'customSize': 'clamp(24px, 2.5vw, 52px)',
        'customSize1':'clamp(10px,1.5vw,16px)',
        'customSize2':'clamp(16px,3.5vw,2.7084vw)',
        'customSize3':'clamp(12px,1.5vw,2vw)',
        customSize4:'clamp(16px,1.5vw,34px)'
      },
      spacing:{
        'customMt':'97px',
        'customMt1':'82px',
        'custoMt2':'95px',
        'typewriterSize':'calc(54.14286px + 1.45089vw)'
  



      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
