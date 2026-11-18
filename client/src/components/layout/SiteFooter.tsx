import { Container } from './Container'

function SiteFooter() {
  return (
    <footer>
      <Container className='flex flex-col justify-center items-center p-6'>
        <p className='text-md'>Svetlane. </p>
        <span className='text-sm'>© {new Date().getFullYear()} Verstane Labs. </span>
      </Container>
    </footer>
  )
}

export default SiteFooter