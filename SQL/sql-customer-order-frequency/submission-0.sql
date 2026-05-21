-- Write your query below
WITH
june_orders AS (
SELECT
    c.customer_id,
    c.name,
    SUM(o.quantity * p.price) AS total
FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    JOIN product p ON o.product_id = p.product_id
WHERE
    o.order_date >= '2020-06-01'
    AND o.order_date < '2020-07-01'
GROUP BY c.customer_id, c.name
HAVING SUM(o.quantity * p.price) >= 100),

july_orders AS (
SELECT
    c.customer_id,
    c.name,
    SUM(o.quantity * p.price) AS total
FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    JOIN product p ON o.product_id = p.product_id
WHERE
    o.order_date >= '2020-07-01'
    AND o.order_date < '2020-08-01'
GROUP BY c.customer_id, c.name
HAVING SUM(o.quantity * p.price) >= 100)

SELECT
    juno.customer_id,
    juno.name
FROM june_orders juno
    JOIN july_orders julo ON juno.customer_id = julo.customer_id;