import '@testing-library/jest-dom';
import { beforeEach, describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react'




import Header from './Header';

beforeEach(() => {
    render(<Header title={"tester"}/>)
})

describe("Header component", () => {
    it("should display the correct title", () => {
        const testTitle = "Tester";
        render(<Header title={testTitle} />);
        const titleElement = screen.getByText(testTitle);
        expect(titleElement).toBeInTheDocument();
    });
    it("should have a h1", () => {
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
    })
})
