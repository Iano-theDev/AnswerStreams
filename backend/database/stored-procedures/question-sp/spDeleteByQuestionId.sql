CREATE OR ALTER PROC spDeleteQuestionById
    @questionId VARCHAR(255)
AS
BEGIN
    DELETE FROM Question
WHERE questionId=@questionId
END
