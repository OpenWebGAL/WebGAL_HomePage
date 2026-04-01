'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const AprilFools = () => {
  const pathname = usePathname()

  useEffect(() => {
    const now = new Date()
    if (now.getMonth() !== 3 || now.getDate() !== 1) return

    if (document.title.includes('WebGAL'))
      document.title = document.title.replace(/WebGAL/g, 'WebG@L')

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    const textNodes: Text[] = []
    let node: Node | null
    while ((node = walker.nextNode())) textNodes.push(node as Text)
    textNodes.forEach(node => {
      if (node.textContent?.includes('WebGAL'))
        node.textContent = node.textContent.replace(/WebGAL/g, 'WebG@L')
    })
  }, [pathname])

  return null
}

export default AprilFools

