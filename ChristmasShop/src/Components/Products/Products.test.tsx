import '@testing-library/jest-dom';
import { beforeEach, describe, expect, it} from 'vitest';
import {render, screen, within} from '@testing-library/react'

import Products from './Products';
import { IProduct } from '../../Models/IProduct';

const testData: IProduct[] = [
      {
        "id": "1",
        "name": "Classic Christmas Tree",
        "type": "Tree",
        "height": "7 ft",
        "imageUrl": "tree1.jpg",
        "price": 150,
        "description": "A lush, green artificial Christmas tree with pre-attached warm LED lights, perfect for creating a cozy holiday atmosphere. Easy to assemble with a sturdy base for stability."
      },
      {
        "id": "2",
        "name": "Santa Claus Figurine",
        "type": "Figurine",
        "height": "2 ft",
        "imageUrl": "santa1.jpg",
        "price": 50,
        "description": "A charming Santa Claus figurine, complete with a red suit, a gift bag, and jolly expression. Ideal for mantle displays or as a centerpiece for holiday decorations."
      },
      {
        "id": "3",
        "name": "Snowflake String Lights",
        "type": "Lighting",
        "length": "20 ft",
        "imageUrl": "lights1.jpg",
        "price": 25,
        "description": "Twinkling snowflake-shaped string lights to brighten up any space. Battery-operated with multiple light settings, including steady glow and twinkle mode."
      },
      {
        "id": "4",
        "name": "Christmas Wreath",
        "type": "Wreath",
        "diameter": "24 inches",
        "imageUrl": "wreath1.jpg",
        "price": 35,
        "description": "A festive wreath adorned with red berries, pinecones, and a golden bow. Perfect for hanging on doors or walls to welcome guests during the holidays."
      },
    ]

beforeEach(() => {
    render(<Products products={testData}/>)
})

describe("Products comp", () => {
    it("should contain more than two products", () => {
        const testIdItem = screen.getAllByTestId("product-item");
        expect(testIdItem).toHaveLength(testData.length);
    })
    it("should have a price for each product", () => {
        const allProducts = screen.getAllByTestId("product-item");
        allProducts.forEach((item) => {
            const price = within(item).getByRole("strong");
            expect(price).toBeInTheDocument();
        })
    })
    it("should have a heading for each card", () => {
        const allProducts = screen.getAllByTestId("product-item");
        allProducts.forEach((item) => {
            const heading = within(item).getByRole('heading', { level: 3 });
            expect(heading).toBeInTheDocument();
        })
    })
})