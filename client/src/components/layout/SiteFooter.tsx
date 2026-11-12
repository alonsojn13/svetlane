import { Container } from './Container'

function SiteFooter() {
  return (
    <footer>
      <Container className='flex justify-center'>
        <p>© {new Date().getFullYear()} Verstane. All rights reserved. </p>
      </Container>
    </footer>
  )
}

export default SiteFooter