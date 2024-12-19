import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return( 
    <>
      <Link to="/" className="[&.active]:font-bold">
          Home
      </Link>
      <div className="p-2">
        Hello from About!
      </div>
    </>
  )
}
