package com.cognizant;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorAAATest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setup: Creating Calculator object");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Teardown: Test Completed");
        calculator = null;
    }

    @Test
    public void testAdd() {

        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);
    }
}