BEGIN
   FOR rec IN (
      SELECT c.Name, l.DueDate
      FROM Customers c
      JOIN Loans l
      ON c.CustomerID=l.CustomerID
      WHERE l.DueDate
      BETWEEN SYSDATE
      AND SYSDATE+30
   )
   LOOP

      DBMS_OUTPUT.PUT_LINE(
      'Reminder: '
      || rec.Name
      || ', your loan is due soon');

   END LOOP;
END;
/
