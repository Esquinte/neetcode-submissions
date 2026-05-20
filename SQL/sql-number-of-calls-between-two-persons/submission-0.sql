-- Write your query below
SELECT
    LEAST(c.from_id, c.to_id) AS person1,
    GREATEST(c.from_id, c.to_id) AS person2,
    COUNT(*) AS call_count,
    SUM(duration) AS total_duration
FROM calls c
GROUP BY
    LEAST(c.from_id, c.to_id),
    GREATEST(c.from_id, c.to_id);