import { render } from '@testing-library/react'
import NavLinks from "@/components/ui/Header/NavLinks";

it(`renders navlinks unchanged`, () => {
    const { container } = render(<NavLinks />)
    expect(container).toMatchSnapshot()
    expect()
})