import { render, screen } from '@testing-library/react';
import App from '../App';
import Universities from '../components/Universities';
import { UniversityInterface } from '../interfaces/university.interface';

const fakeUniversities: UniversityInterface[] = [
    {
        "domains": ["urbancollege.edu"],
        "country": "United States",
        "alpha_two_code": "US",
        "state-province": null,
        "web_pages": ["http://www.urbancollege.edu"],
        "name": "Urban College of Boston"
    },
    {
        "domains": ["umb.edu"], 
        "country": "United States", 
        "alpha_two_code": "US", 
        "state-province": null,
        "web_pages": ["https://www.umb.edu/"], 
        "name": "University of Massachusetts Boston"
    },
    {
        "domains": ["bc.edu"], 
        "country": "United States", 
        "alpha_two_code": "US", 
        "state-province": null, 
        "web_pages": ["http://www.bc.edu/"], 
        "name": "Boston College"
    },
    {
        "domains": ["bgsp.edu"], 
        "country": "United States", 
        "alpha_two_code": "US", 
        "state-province": null, 
        "web_pages": ["http://www.bgsp.edu/"], 
        "name": "Boston Graduate School of Psychoanalysis"
    },
    {
        "domains": ["bu.edu"], 
        "country": "United States", 
        "alpha_two_code": "US", 
        "state-province": null, 
        "web_pages": ["http://www.bu.edu/"], 
        "name": "Boston University"
    }
];

test('universities: rendering', () => {
  render(<Universities universities={fakeUniversities} />);
  const testId = screen.getByTestId("universities");
  expect(testId).toBeInTheDocument();
  expect(testId).toHaveClass("row");
});

test('rendering university in universities component', () => {
    render(<Universities universities={fakeUniversities} />);
    const testId = screen.getByTestId("university-0");
    expect(testId).toBeInTheDocument();
});
