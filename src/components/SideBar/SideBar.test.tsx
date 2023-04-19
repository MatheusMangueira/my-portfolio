
import { render, screen } from '@testing-library/react'
import { SideBar } from '.'

describe('SideBar component', () => {
  test('Name', () => {
    render(<SideBar />)


    const name = screen.getByText('Matheus Mangueira')
    expect(name).toBeInTheDocument()

  })

})