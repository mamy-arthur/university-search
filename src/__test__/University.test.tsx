import { render, screen } from '@testing-library/react';
import University from '../components/University';
import { UniversityInterface } from "../interfaces/university.interface";

const fakeUniversity: UniversityInterface = {
    alpha_two_code: "unversity code",
    country: "unversity country",
    domains: [
      "unversity domain"
    ],
    name: "unversity name",
    "state-province": "unversity state-province",
    web_pages: ["unversity website"]
}

test('university: rendering', () => {
    render(<University university={fakeUniversity} />);
    const testId = screen.getByTestId("university");
    expect(testId).toBeInTheDocument();
});

test('university: name rendering', () => {
  render(<University university={fakeUniversity} />);
  const name = screen.getByText("unversity name");
  expect(name).toBeInTheDocument();
  expect(name).toHaveClass("card-header");
});

test('university: country rendering', () => {
  render(<University university={fakeUniversity} />);
  const name = screen.getByText("unversity country");
  expect(name).toBeInTheDocument();
  expect(name).toHaveClass("card-title");
});

