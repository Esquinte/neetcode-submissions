-- Write your query below
SELECT
    DISTINCT (c.title)
FROM content c
    JOIN tv_program tvp ON c.content_id = tvp.content_id
WHERE
    c.kids_content = 'Y'
    AND c.content_type = 'Movies'
    AND tvp.program_date >= '2020-06-01'
    AND tvp.program_date < '2020-07-01';