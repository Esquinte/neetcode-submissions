-- Write your query below
SELECT project_id, employee_id FROM (
    SELECT
        p.project_id,
        p.employee_id,
        RANK() OVER (
            PARTITION BY p.project_id
            ORDER BY e.experience_years DESC
        ) AS rn
    FROM project p JOIN employee e ON p.employee_id = e.employee_id
) rank
WHERE rank.rn = 1;