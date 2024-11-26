import '@testing-library/jest-dom';
import { beforeEach, describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react'




import Header from './Header';

beforeEach(() => {
    render(<Header title={"tester"}/>)
})

describe("Header component", () => {
    it("should have the correct title", () => {
        const title = screen.getByText(/tester/i);
        expect(title).toBeInTheDocument();
    })
    it("Should contain a header", () => {
        
    })
})
