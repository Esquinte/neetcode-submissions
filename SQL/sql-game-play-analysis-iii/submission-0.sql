-- Write your query below
SELECT
    a.player_id,
    a.event_date,
    SUM(a.games_played) OVER (
        PARTITION BY a.player_id
        ORDER BY a.event_date
    ) AS games_played_so_far
FROM activity a;