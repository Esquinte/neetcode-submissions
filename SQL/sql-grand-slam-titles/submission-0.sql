-- Write your query below
SELECT
    p.player_id,
    p.player_name,
    (
        COUNT(c.wimbledon) FILTER (WHERE p.player_id = c.wimbledon) +
        COUNT(c.fr_open) FILTER (WHERE p.player_id = c.fr_open) +
        COUNT(c.us_open) FILTER (WHERE p.player_id = c.us_open) +
        COUNT(c.au_open) FILTER (WHERE p.player_id = c.au_open)
    ) AS grand_slams_count
FROM players p
    JOIN championships c ON
        p.player_id = c.wimbledon
        OR p.player_id = c.fr_open
        OR p.player_id = c.us_open
        OR p.player_id = c.au_open
GROUP BY p.player_id, p.player_name;