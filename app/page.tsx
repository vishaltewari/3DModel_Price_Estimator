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
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-white font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-rose-600 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-white text-3xl font-bold tracking-tight">
            3D Estimator
          </a>   
          <div className="space-x-6">
            <a href="#about" className="text-white hover:underline text-lg">About</a>
            <a href="#contact" className="text-white hover:underline text-lg">Contact</a>
            <Button
              onClick={handleRedirect}
              className="bg-amber-400 cursor-pointer hover:bg-amber-500 text-black font-semibold transition px-4 py-2"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 text-white py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-sm">
            Instantly Estimate 3D Printing Costs
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Just upload your 3D model and see pricing based on volume, material, and more—within seconds.
          </p>
          <Button
            onClick={handleRedirect}
            className="bg-white cursor-pointer hover:bg-gray-100 text-purple-700 font-bold px-6 py-3 rounded-full shadow-lg transition"
          >
            Get Instant Quote
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Card className="rounded-xl shadow-lg border-none">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold text-rose-600">
                Why Choose Us?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg text-gray-700 leading-relaxed">
              Our AI-powered estimator delivers fast, accurate quotes based on your STL file’s properties.
              We support a wide range of materials and printers. No more manual calculations.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-violet-100 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-violet-700 mb-4">Let’s Talk</h2>
          <p className="text-xl text-gray-700 mb-8">
            Got questions or feedback? Reach out to our team and we’ll get back to you shortly.
          </p>
          <Button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 text-lg font-medium rounded-lg shadow-md">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  )
}


