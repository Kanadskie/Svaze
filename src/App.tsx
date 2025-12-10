import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RootPage from '@/app/page'
import PrivacyPage from '@/app/privacy/page'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/instruments/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <main className="flex-grow">
              <RootPage />
            </main>
          </>
        } />
        <Route path="/privacy" element={
          <>
            <main className="flex-grow">
              <PrivacyPage />
            </main>
          </>
        } />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
