import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from '@/components/utils/Navbar'
const links = [
  { text: 'About', location: '/about' },
  { text: 'Contact', location: '/contact' },
]
test.each(links)('Check if Nav Bar have %s link.', (link) => {
  render(<NavBar />)
  const linkDom = screen.getByText(link.text)
  expect(linkDom).toBeInTheDocument(linkDom)
})
test('Check if have logo', () => {
  render(<NavBar />)
  // get by TestId define in the navBar
  const logoDom = screen.getByTestId(/company-logo/)
  // check the link location
  expect(logoDom).toBeInTheDocument()
})
