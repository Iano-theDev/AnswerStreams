CREATE OR ALTER PROC spGetQuestionByQuestionId
    @questionId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM Question
    WHERE questionId=@questionId
END
