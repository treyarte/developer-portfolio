import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import Script from 'next/script';
import { Toaster } from "react-hot-toast";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Treyvion Johnson Portfolio',
  description: 'Treyvion Johnson is a full stack software engineer in the Houston Texas area',
}

const toastConfiguration={
  style:{
    height:"50px",
    color:'white',
  },
  success:{
    style:{
      background:'#00880F',
      color: 'white'
    }
  },
  error:{
    style:{
      background: '#E60000',
      color: 'white'
    }
  },
  loading:{
    style:{
      color: 'black'
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">   
        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-HSF7PEYD0F'></Script>
        <Script>
          {
            `        
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-HSF7PEYD0F');
            `
          }
        </Script>
      <body className={`${roboto.className}  dark:bg-zinc-900`}>
      <Toaster position="top-center"
                        reverseOrder={false}
                        toastOptions={toastConfiguration}
                    />
        {children}      
      </body>
    </html>
  )
}
