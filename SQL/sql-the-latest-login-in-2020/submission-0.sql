-- Write your query below
SELECT
    DISTINCT ON (l.user_id)
    l.user_id,
    l.time_stamp AS last_stamp
FROM logins l
WHERE
    l.time_stamp >= '2020-01-01'
    AND l.time_stamp < '2021-01-01'
ORDER BY
    l.user_id ASC,
    l.time_stamp DESC;