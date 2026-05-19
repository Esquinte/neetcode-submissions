-- Write your query below
SELECT
    s.sale_date,
    SUM(CASE WHEN s.fruit = 'apples' THEN s.sold_num ELSE -s.sold_num END) AS diff
FROM sales s
GROUP BY s.sale_date
ORDER BY s.sale_date ASC;