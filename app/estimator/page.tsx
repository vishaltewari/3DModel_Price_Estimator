'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Estimator() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [previewURL, setPreviewURL] = useState<string | null>(null)

  useEffect(() => {
    if (!file) return

    const analyze = async () => {
      setLoading(true)
      setResult(null)

      // Prepare the form data for API request
      const formData = new FormData()
      formData.append('file', file)

      // Make sure to fetch the file through the backend
      const res = await fetch('/api/analyze-stl', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      setResult(data)

      // If analysis is successful, create a preview URL
      setPreviewURL(URL.createObjectURL(file))
      setLoading(false)
    }

    analyze()
  }, [file])

  const handleEstimatePrice = () => {
    // Placeholder for price estimation logic
    alert('Price Estimation Logic Here')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800"> 3D Model Price Estimator</h1>

      <Card className="max-w-7xl mx-auto rounded-2xl shadow-xl border border-gray-200">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2">
            <Label>Upload STL File</Label>
            <Input type="file" accept=".stl" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          </div>

          {loading && (
            <div className="text-center text-gray-600">Analyzing model...</div>
          )}

          
          <div className="flex mt-6 gap-8">
            {previewURL && (
              <div className="flex-1">
                
                </div>
            )}
                {/* <iframe id="fileviewer" src="https://www.viewstl.com/?embedded" className="w-full h-[400px] rounded-lg border"
                  title="3D Model Viewer"></iframe>
              </div>
            )} */}

         
            {result && (
              <div className="flex-1 space-y-4 text-gray-800">
                <h2 className="text-xl font-semibold text-center">📊 STL Analysis Results</h2>
                <ul className="space-y-4">
                  <li><strong>Volume:</strong> {result.volume} cm³</li>
                  <li><strong>Weight:</strong> {result.weight} gm</li>
                  <li><strong>Area:</strong> {result.area} m²</li>
                  <li><strong>Watertight:</strong> {result.isWatertight ? 'Yes' : 'No'}</li>
                  <li><strong>Bounding Box:</strong> {result.boundingBox.join(' × ')} mm</li>
                  <li><strong>Center of Mass:</strong> {result.centerOfMass.join(', ')} mm</li>
                </ul>

                
                <div className="text-center mt-4">
                  <Button onClick={handleEstimatePrice} className="w-full text-lg py-6">
                    Estimate Price
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
