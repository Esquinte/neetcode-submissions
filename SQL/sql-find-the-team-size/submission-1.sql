-- Write your query below
SELECT
    e.employee_id,
    COUNT(*) OVER (
        PARTITION BY e.team_id
    ) as team_size
FROM employee e
ORDER BY e.employee_id ASC;