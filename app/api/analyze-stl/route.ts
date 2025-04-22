import { NextRequest, NextResponse } from 'next/server'
import { writeFile, unlink } from 'fs/promises'
import { createRequire } from 'module'
import { join } from 'path'
import os from 'os'

const require = createRequire(import.meta.url)
const NodeStl = require('node-stl')

export async function POST(req: NextRequest) {
  const data = await req.formData()
  const file = data.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const tempFilePath = join(os.tmpdir(), file.name)

  try {
    await writeFile(tempFilePath, buffer)

    const stl = new NodeStl(tempFilePath, { density: 1.04 })

    const result = {
      volume: stl.volume.toFixed(3),
      weight: stl.weight.toFixed(3),
      boundingBox: stl.boundingBox,
      area: stl.area.toFixed(3),
      centerOfMass: stl.centerOfMass,
      isWatertight: stl.isWatertight
    }

    await unlink(tempFilePath) 

    return NextResponse.json(result)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to parse STL', details: err }, { status: 500 })
  }
}
