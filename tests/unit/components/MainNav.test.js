import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';
import { expect } from 'vitest';

describe('MainNav.vue', () => {
  it('renders the company name', () => {
    render(MainNav);
    const companyName = screen.getByText(/SLR Careers/i);
    expect(companyName).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(MainNav);
    const menuItems = screen.getAllByRole('listitem');
    const menuTexts = menuItems.map((item) => item.textContent);

    expect(menuItems.length).toBe(6);
    expect(menuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at SLR',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });
});
