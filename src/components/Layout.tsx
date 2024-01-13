import { Navigation } from '.'

interface childrenProps {
  children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: childrenProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
