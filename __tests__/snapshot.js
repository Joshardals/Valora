import { render } from '@testing-library/react'
import Page from "@/app/(root)/page";
import NavLinks from "@/components/ui/Header/NavLinks";


it('renders homepage unchanged', () => {
    const { container } = render(<Page />)
    expect(container).toMatchSnapshot()
})

it(`renders navlinks unchanged`, () => {
    const { container } = render(<NavLinks />)
    expect(container).toMatchSnapshot()
    expect()
})