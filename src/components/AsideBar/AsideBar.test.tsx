
import { render, screen } from '@testing-library/react'
import { AsideBar } from '.'

describe('AsideBar component', () => {
  test('Name', () => {
    render(<AsideBar />)


    const name = screen.getByText('Matheus Mangueira')
    expect(name).toBeInTheDocument()

  })

})