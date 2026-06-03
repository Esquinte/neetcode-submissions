-- Write your query below

WITH marked AS (
    SELECT
        l.log_id,
        CASE
            WHEN LAG(log_id) OVER () = l.log_id - 1 THEN 0
            ELSE 1
        END AS is_new_group
    FROM logs l
    ORDER BY l.log_id ASC
),
grouped AS (
    SELECT
        m.log_id,
        SUM(is_new_group) OVER (
            ORDER BY m.log_id
        ) AS group
    FROM marked m
)
SELECT
    MIN(g.log_id) AS start_id,
    MAX(g.log_id) AS end_id
FROM grouped g
GROUP BY g.group
ORDER BY start_id ASC;