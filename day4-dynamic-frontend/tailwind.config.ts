import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fr" : "#F9F9F9 ", 
        "br" : "#2A254B" , 
        "gr" :"#F6F6F6",  
        "lr":"#FFFFFF",  
        "mr":'#2A254B' ,
        "or" : "#FFFFFF" ,
        "qr" : "#505977 ",
       "kr" : "#726E8D" ,
       "jr" :"#000000" ,
        "ur":'#22202E ',
        "cr" : "#12131A"
      },
      fontFamily: {
        custom: ['Clash Display'],
      },
    },
  },
  plugins: [],
};
export default config;
