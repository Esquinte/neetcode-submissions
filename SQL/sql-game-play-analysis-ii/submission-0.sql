-- Write your query below
SELECT
    DISTINCT ON (a.player_id)
    a.player_id,
    a.device_id
FROM activity a
ORDER BY
    a.player_id ASC,
    a.event_date ASC;