import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../components/Search';

describe("search rendering", () => {
    test('search: rendering', () => {
        render(<Search/>);
        const testId = screen.getByTestId("search");
        expect(testId).toBeInTheDocument();
    });

    test('search: have input element', () => {
        render(<Search/>);
        const inputElement = screen.getByPlaceholderText(/Rechercher.../i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass("form-control");
        expect(inputElement).toHaveAttribute("aria-describedby");
    });

    test('search: have h2 element', () => {
        render(<Search/>);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toBeInTheDocument();
    });
});

describe("input search event", () => {
    test('able to type in input', () => {
        render(<Search/>);
        const inputElement: HTMLInputElement = screen.getByPlaceholderText(/Rechercher.../i);
        fireEvent.change(inputElement, { target: { value: "input test" } });
        expect(inputElement.value).toBe("input test");
    });

    test('input change, loading appear', () => {
        render(<Search/>);
        const inputElement: HTMLInputElement = screen.getByPlaceholderText(/Rechercher.../i);
        fireEvent.change(inputElement, { target: { value: "input test" } });
        const loadingComponent = screen.getByText(/Loading.../i);
        expect(loadingComponent).toBeVisible();
    });
})



