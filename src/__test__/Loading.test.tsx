import { render, screen } from "@testing-library/react"
import Loading from "../components/Loading";

test("loading component rendering.", () => {
    render(<Loading/>);
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
});