import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        ));
    });

    test('should return my andrew id', () => {
        const query = "what's your andrewid?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("andrewID: maidarus");
    });

    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("maidarus");
    });

    test('should return the largest number from a list', () => {
        const query = "Which of the following numbers is the largest: 4, 7, 12, 25?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("25");
    });

    test('should return the sum of two numbers', () => {
        const query = "What is 4 plus 6?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("10");
    });

    test('should return the product of two numbers', () => {
        const query = "What is 5 multiplied by 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("15");
    });

    test('should return the number that is both a square and a cube', () => {
        const query = "Which of the following numbers is both a square and a cube: 1, 8, 27, 64, 100?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1");  // Since 1 is also both a square and a cube
    });

    test('should return an empty string for an unsupported query', () => {
        const query = "unsupported query";
        const response: string = QueryProcessor(query);
        expect(response).toBe("");
    });
});
