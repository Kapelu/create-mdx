import fs from 'node:fs/promises'
import path from 'node:path'

import MdxRenderer from './MdxRenderer'

interface MdxDocumentProps {
  filePath: string
  className?: string
}

export default async function MdxDocument({
  filePath,
  className = '',
}: MdxDocumentProps) {
  const absolutePath = path.resolve(process.cwd(), filePath)

  const source = await fs.readFile(absolutePath, 'utf8')

  return <MdxRenderer source={source} className={className} />
}
