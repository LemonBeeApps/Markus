import React from 'react'

interface LinkProps {
  active: boolean
  children: React.ReactChild
  onClick(): void
}

const Link: React.FC<LinkProps> = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active}>
    {children}
  </button>
)

export default Link
