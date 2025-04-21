'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Estimator() {
  const [file, setFile] = useState<File | null>(null)
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [material, setMaterial] = useState('')
  const [infill, setInfill] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('length', length)
      formData.append('width', width)
      formData.append('height', height)
      formData.append('material', material)
      formData.append('infill', infill)

      // send `formData` to backend
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">🧮 3D Model Price Estimator</h1>

      <Card className="max-w-3xl mx-auto rounded-2xl shadow-xl border border-gray-200">
        <CardContent className="p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload */}
            <div className="space-y-2">
              <Label>Upload 3D Model (.stl, .obj)</Label>
              <Input
                type="file"
                accept=".stl,.obj"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>

            {/* Dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Length (cm)</Label>
                <Input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="e.g. 10"
                />
              </div>
              <div>
                <Label>Width (cm)</Label>
                <Input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="e.g. 10"
                />
              </div>
              <div>
                <Label>Height (cm)</Label>
                <Input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g. 10"
                />
              </div>
            </div>

            {/* Material */}
            <div>
              <Label>Material</Label>
              <Select onValueChange={setMaterial}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PLA">PLA</SelectItem>
                  <SelectItem value="ABS">ABS</SelectItem>
                  <SelectItem value="PETG">PETG</SelectItem>
                  <SelectItem value="Resin">Resin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Infill */}
            <div>
              <Label>Infill (%)</Label>
              <Select onValueChange={setInfill}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select infill %" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10%</SelectItem>
                  <SelectItem value="20">20%</SelectItem>
                  <SelectItem value="50">50%</SelectItem>
                  <SelectItem value="100">100%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit */}
            <div className="text-center">
              <Button type="submit" className="w-full text-lg py-6">Estimate Price</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
