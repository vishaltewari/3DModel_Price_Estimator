// app/page.tsx

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const handleRedirect = () => {
    router.push("/estimator")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold">3D Price Estimator</a>
          <div className="space-x-6">
            <a href="#about" className="text-white">About</a>
            <a href="#contact" className="text-white">Contact</a>
            <Button
              onClick={handleRedirect} // Use onClick to navigate
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Get Instant Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-blue-500 py-24 text-center text-white">
        <div>
          <h1 className="text-4xl font-semibold mb-4">Instant 3D Model Price Estimation</h1>
          <p className="mb-6 text-xl">
            Upload your 3D model and get an instant price quote based on material, size, and more!
          </p>
          <Button
            onClick={handleRedirect} // Use onClick for redirect
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            Get Instant Quote
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-600">
                Our 3D Price Estimator helps you quickly determine the cost of 3D printing based on various factors such as material, size, and infill density. Get accurate pricing instantly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">Have any questions? Reach out to us anytime.</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  )
}
