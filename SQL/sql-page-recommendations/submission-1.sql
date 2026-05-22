-- Write your query below
WITH friends_id AS (
    SELECT GREATEST(f.user1_id, f.user2_id) AS user_id
    FROM friendship f
    WHERE f.user1_id = 1 OR f.user2_id = 1
)
SELECT
    DISTINCT (l.page_id) AS recommended_page
FROM
    friends_id f,
    likes l
WHERE
    l.user_id IN (f.user_id)
    AND l.page_id NOT IN (
        SELECT page_id
        FROM likes
        WHERE user_id = 1
    );