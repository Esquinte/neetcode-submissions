-- Write your query below
SELECT MIN(ABS(p.next - p.x)) AS shortest FROM (
    SELECT
        p.x,
        LEAD(p.x) OVER (
            ORDER BY p.x
        ) AS next
    FROM point p
) p