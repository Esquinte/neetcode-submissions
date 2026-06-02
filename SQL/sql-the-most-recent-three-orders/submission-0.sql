-- Write your query below
SELECT
    r.name AS customer_name,
    r.customer_id,
    r.order_id,
    r.order_date
FROM (
    SELECT
        c.customer_id,
        c.name,
        o.order_id,
        o.order_date,
        ROW_NUMBER() OVER (
            PARTITION BY c.customer_id
            ORDER BY o.order_date DESC
        ) as rn
    FROM customers c 
        JOIN orders o ON c.customer_id = o.customer_id
) AS r
WHERE r.rn <= 3
ORDER BY r.name ASC, r.customer_id ASC, r.order_date DESC;
