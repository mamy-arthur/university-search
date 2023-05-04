import { render, screen } from '@testing-library/react';
import App from '../App';
import UniversityWebsites from '../components/UniversityWebsites';

const websites = ['website1', 'website2', 'website3'];

test('university website: rendering', () => {
    render(<UniversityWebsites websites={websites} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
});

test('university website: lists rendering', () => {
    render(<UniversityWebsites websites={websites} />);
    const listsElement = screen.getAllByRole("listitem");
    expect(listsElement.length).toBe(websites.length);
});


test('university website: lists rendering', () => {
    render(<UniversityWebsites websites={websites} />);
    const listsElement = screen.getAllByRole("listitem");
    listsElement.forEach(element => {
        expect(element).toHaveClass("list-group-item");
    });
});
