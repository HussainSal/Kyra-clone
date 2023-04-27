import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/templates/Footer/Footer'
import Signup from '@/templates/Signup/Signup'
import Project from '@/components/app/Project/Project'
import Creator from '@/templates/CreatorPlatform/Creator'
import CompanyCustomers from '@/templates/CompanyCustomers/CompanyCustomers'
import HomePage from '@/templates/HomePage/HomePage'
import Navbar from '@/templates/Navbar/Navbar'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const getSection = (id:string) =>{
    console.log('IDCHECK', id);
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"})
  }




  return (
  <div  >
    {/* hello */}
    <Navbar getSection = {getSection}/>
    <HomePage />

    <div id='creator'>
    <CompanyCustomers />
    </div>

    <div id='carrers' >
    <Project />
    </div>

    <div id='brands' >
    <Creator />
    </div>

    <Signup />
    <div id='footer' >
    <Footer />
    </div>
  </div>
  )
}
