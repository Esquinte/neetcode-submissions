-- Write your query below
--SELECT t.transaction_id FROM transactions t WHERE amount = (
--    SELECT MAX(amount) FROM transactions WHERE day::timestamp::date = t.day::timestamp::date
--)
--ORDER BY t.transaction_id ASC;

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
    ORDER BY transaction_id
) rank WHERE rank.rn = 1;