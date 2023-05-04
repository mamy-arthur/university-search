import { render, screen } from '@testing-library/react';
import UniversityCounts from '../components/UniversityCounts';

test('university count input=0', () => {
  render(<UniversityCounts counts={0} input=""/>);
  const emptyInput = screen.getByText("Entrer du texte pour faire des recherches.");
  expect(emptyInput).toBeInTheDocument();
});

test('university count input>0 and count=0', () => {
    render(<UniversityCounts counts={0} input="test"/>);
    const emptyResult = screen.getByText("Pas d'université trouvé.");
    expect(emptyResult).toBeInTheDocument();
});

test('university count input!="" and count=1', () => {
    render(<UniversityCounts counts={1} input="test"/>);
    const inputAndOneResult = screen.getByText("une université trouvée.");
    expect(inputAndOneResult).toBeInTheDocument();
});

test('university count input!="" and count>1', () => {
    const counts = 54;
    render(<UniversityCounts counts={counts} input="test"/>);
    const inputAndResult = screen.getByText(`${counts} universités trouvées.`);
    expect(inputAndResult).toBeInTheDocument();
});
