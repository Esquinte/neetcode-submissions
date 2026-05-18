-- Write your query below
SELECT
    e.*,
    CASE
        WHEN e.operator = '=' THEN vl.value = vr.value
        WHEN e.operator = '>' THEN vl.value > vr.value
        WHEN e.operator = '<' THEN vl.value < vr.value
    END AS value
FROM expressions e
    JOIN variables vl ON e.left_operand = vl.name
    JOIN variables vr ON e.right_operand = vr.name;