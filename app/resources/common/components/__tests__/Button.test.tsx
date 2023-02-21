import { render, screen } from '@testing-library/react';
import Button from '../Button';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('should render with default props', () => {
    render(
      <Button>
        Rótulo
      </Button>
    );
    const button = screen.getByRole('button', { name: /Rótulo/i });
    expect(
      button
    ).toBeInTheDocument();
    expect(
      button
    ).toHaveClass('py-2 px-4 text-xl h-12 rounded-md bg-primary text-white');
  });
  it('should render with lighter variant', () => {
    render(
      <Button variant='lighter'>
        Rótulo
      </Button>
    );
    const button = screen.getByRole('button', { name: /Rótulo/i });
    expect(
      button
    ).toBeInTheDocument();
    expect(
      button
    ).toHaveClass('py-2 px-4 text-xl h-12 rounded-md bg-primary-lighter text-primary');
  });
  it('should render with secondary variant', () => {
    render(
      <Button variant='secondary'>
        Rótulo
      </Button>
    );
    const button = screen.getByRole('button', { name: /Rótulo/i });
    expect(
      button
    ).toBeInTheDocument();
    expect(
      button
    ).toHaveClass('py-2 px-4 text-xl h-12 rounded-md bg-secondary text-primary');
  });
  it('should render with small size', () => {
    render(
      <Button size='small'>
        Rótulo
      </Button>
    );
    const button = screen.getByRole('button', { name: /Rótulo/i });
    expect(
      button
    ).toBeInTheDocument();
    expect(
      button
    ).toHaveClass('py-1.5 px-3 text-base h-9 rounded bg-primary text-white');
  });
  it('should render with large size', () => {
    render(
      <Button size='large'>
        Rótulo
      </Button>
    );
    const button = screen.getByRole('button', { name: /Rótulo/i });
    expect(
      button
    ).toBeInTheDocument();
    expect(
      button
    ).toHaveClass('py-2.5 px-5 text-2xl h-14 rounded-lg bg-primary text-white');
  });
});