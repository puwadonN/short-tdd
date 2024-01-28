const sum = require('./sum')
describe("Sum_Two_Value", () => {
    it("WhenSum_Return_3", () => {
        // Arrange
        const target = 3;
        // Act
        const source = sum(2, 1);
        // Assert
        expect(source).toBe(target);    
    })
})