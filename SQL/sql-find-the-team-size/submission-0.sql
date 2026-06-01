-- Write your query below
WITH team_count AS (
    SELECT e.team_id, COUNT(*) FROM employee e GROUP BY e.team_id
)
SELECT e.employee_id, t.count as team_size FROM employee e JOIN team_count t ON t.team_id = e.team_id;