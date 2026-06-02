-- Write your query below
SELECT rank.transaction_id FROM (
    SELECT
        transaction_id,
        day,
        amount,
        RANK() OVER (
            PARTITION BY day::date
            ORDER BY amount DESC
        ) AS rn
    FROM transactions
) rank
WHERE rank.rn = 1
ORDER BY transaction_id;