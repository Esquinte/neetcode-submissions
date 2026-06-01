-- Write your query below
WITH max_salary_by_department AS (
    SELECT
        e.department_id,
        MAX(e.salary) AS salary
    FROM employee e
    GROUP BY e.department_id
)
SELECT
    d.name AS department,
    e.name AS employee,
    e.salary
FROM employee e
    JOIN department d ON e.department_id = d.id
    JOIN max_salary_by_department m ON e.department_id = m.department_id AND e.salary = m.salary;