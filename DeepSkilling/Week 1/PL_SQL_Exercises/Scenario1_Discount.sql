BEGIN
   FOR rec IN (
      SELECT l.LoanID
      FROM Loans l
      JOIN Customers c
      ON l.CustomerID = c.CustomerID
      WHERE c.Age > 60
   )
   LOOP

      UPDATE Loans
      SET InterestRate = InterestRate - 1
      WHERE LoanID = rec.LoanID;

      DBMS_OUTPUT.PUT_LINE(
      'Discount applied to Loan ID: '
      || rec.LoanID);

   END LOOP;

   COMMIT;
END;
/


