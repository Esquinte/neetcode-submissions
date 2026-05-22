-- Write your query below
SELECT
    DISTINCT (l.page_id) AS recommended_page
FROM likes l
    JOIN (
        SELECT f.user2_id AS user_id FROM friendship f WHERE f.user1_id = 1
        UNION
        SELECT f.user1_id AS user_id FROM friendship f WHERE f.user2_id = 1
    ) f ON l.user_id = f.user_id
WHERE
    l.page_id NOT IN (
        SELECT page_id
        FROM likes
        WHERE user_id = 1
    );
