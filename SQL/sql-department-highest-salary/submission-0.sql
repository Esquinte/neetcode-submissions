-- Write your query below
WITH max_salary_by_department AS (
    SELECT
        d.name AS department,
        MAX(e.salary) AS salary
    FROM employee e
        JOIN department d ON e.department_id = d.id
    GROUP BY d.name
)
SELECT
    m.department,
    e.name AS employee,
    e.salary
FROM employee e
    JOIN department d ON e.department_id = d.id
    JOIN max_salary_by_department m ON d.name = m.department AND e.salary = m.salary;