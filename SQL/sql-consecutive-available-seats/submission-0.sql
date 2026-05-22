-- Write your query below
SELECT s.seat_id FROM (
    SELECT
        c.seat_id,
        c.free,
        LAG(c.free) OVER () AS previous_free,
        LEAD(c.free) OVER () AS next_free
    FROM cinema c
    ORDER BY c.seat_id
) s
WHERE s.free = 1 AND (s.previous_free = 1 OR s.next_free = 1);