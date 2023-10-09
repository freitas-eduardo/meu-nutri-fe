import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Page from '../src/app/page'


test(`Home`, async () => {
  render(await Page())
  expect(screen.getByText('Home')).toBeTruthy()
})

