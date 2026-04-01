'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function replaceInNode(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node: Node | null
  while ((node = walker.nextNode())) {
    if (node.textContent?.includes('WebGAL'))
      node.textContent = node.textContent.replace(/WebGAL/g, 'WebG@L')
  }
}

const AprilFools = () => {
  const pathname = usePathname()

  useEffect(() => {
    const now = new Date()
    if (now.getMonth() !== 3 || now.getDate() !== 1) return

    if (document.title.includes('WebGAL'))
      document.title = document.title.replace(/WebGAL/g, 'WebG@L')

    replaceInNode(document.body)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(({ addedNodes }) =>
        addedNodes.forEach(node => replaceInNode(node))
      )
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [pathname])

  return null
}

export default AprilFools

