CREATE OR ALTER PROC spGetAnswerByQuestionId
    @questionId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM Answer
    WHERE questionId=@questionId
END