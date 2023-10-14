import Header from '.'
import { render, screen } from '@testing-library/react'

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

describe('<Heading />', () => {
  it('should render Meu Nutri text', () => {
    render(<Header />)
    expect(screen.getByText('Meu Nutri')).toBeTruthy()
  })
})
