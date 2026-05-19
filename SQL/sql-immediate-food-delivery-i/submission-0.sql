-- Write your query below
WITH
    number_of_immediate_orders AS (
        SELECT COUNT(*) AS count FROM delivery d WHERE d.order_date = d.customer_pref_delivery_date
    ),
    number_of_schedule_orders AS (
        SELECT COUNT(*) AS count FROM delivery d WHERE d.order_date != d.customer_pref_delivery_date
    )
SELECT ROUND((100.0 * io.count / (io.count + so.count)), 2) AS immediate_percentage FROM number_of_immediate_orders io, number_of_schedule_orders so;