-- Write your query below
SELECT DISTINCT ON (er.student_id) er.student_id, er.exam_id, er.score FROM exam_results er ORDER BY er.student_id ASC, er.score DESC, er.exam_id ASC;