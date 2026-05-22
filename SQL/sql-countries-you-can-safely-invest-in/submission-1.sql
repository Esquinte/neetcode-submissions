-- Write your query below
SELECT
    co.name AS country
FROM country co
    JOIN person p ON p.phone_number like CONCAT(co.country_code, '%')
    JOIN calls ca ON p.id = ca.caller_id OR p.id = ca.callee_id
GROUP BY co.name
HAVING AVG(ca.duration) > (
    SELECT AVG(duration) FROM calls
);