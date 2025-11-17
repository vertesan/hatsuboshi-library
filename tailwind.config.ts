import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [{
    pattern: /(from|to|bg)-(amao|atbm|fktn|hmsz|hrnm|hski|hume|jkno|jsna|kcna|kllj|nasr|other|shro|ssmk|ttmr|user)-(main|acc2)/,
  }],
  theme: {
    extend: {
      colors: {
        vocal: '#ff0085',
        dance: '#0087f5',
        visual: '#ffaa00',
        'amao-main': '#C45DC8',
        'amao-acc2': '#FDAFA6',
        'atbm-main': '#8874FF',
        'atbm-acc2': '#C8BAFF',
        'fktn-main': '#FFD203',
        'fktn-acc2': '#FFB5DA',
        'hmsz-main': '#6EA3FC',
        'hmsz-acc2': '#D4AFFF',
        'hrnm-main': '#FD7EC2',
        'hrnm-acc2': '#F4B9FF',
        'hski-main': '#FF4F64',
        'hski-acc2': '#FFBBA7',
        'hume-main': '#F74C2C',
        'hume-acc2': '#F0CB4F',
        'jkno-main': '#988D83',
        'jkno-acc2': '#988D83',
        'jsna-main': '#FFAC28',
        'jsna-acc2': '#F5EB6E',
        'kcna-main': '#FE8A22',
        'kcna-acc2': '#FF5D57',
        'kllj-main': '#D2E3E4',
        'kllj-acc2': '#94CCD9',
        'nasr-main': '#988D83',
        'nasr-acc2': '#988D83',
        'other-main': '#988D83',
        'other-acc2': '#988D83',
        'shro-main': '#00BED8',
        'shro-acc2': '#577DFF',
        'ssmk-main': '#92DE5A',
        'ssmk-acc2': '#CEE21D',
        'ttmr-main': '#27B4EB',
        'ttmr-acc2': '#87E9E2',
        'user-main': '#988D83',
        'user-acc2': '#988D83',
      },
      spacing: {
        'nav-width': '12rem',
      },
      keyframes: {
        ripple: {
          '100%': {
            opacity: '0',
            transform: 'scale(2.5)',
          },
        },
        "ping-slow": {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      animation: {
        ripple: 'ripple 0.4s linear',
        "ping-slow": "ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
      screens: {
        '3xl': '1900px',
        '4xl': '2500px',
      },
    },
  },
  plugins: [],
  darkMode: "selector",

} satisfies Config;
