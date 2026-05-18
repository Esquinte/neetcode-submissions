-- Write your query below
SELECT t.team_id, t.team_name, COALESCE(SUM(
    CASE
        WHEN t.team_id = m.host_team THEN
            CASE
                WHEN host_goals > guest_goals THEN 3
                WHEN host_goals = guest_goals THEN 1
                ELSE 0
            END
        WHEN t.team_id = m.guest_team THEN
            CASE
                WHEN host_goals < guest_goals THEN 3
                WHEN host_goals = guest_goals THEN 1
                ELSE 0
            END
    END
), 0) AS num_points
FROM teams t
    LEFT JOIN matches m
        ON t.team_id = m.host_team
        OR t.team_id = m.guest_team
GROUP BY t.team_id, t.team_name
ORDER BY num_points DESC, t.team_id ASC;