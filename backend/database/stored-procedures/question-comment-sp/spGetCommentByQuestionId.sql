CREATE OR ALTER PROC spGetCommentByQuestionId
    @questionId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM QuestionComment
    WHERE questionId=@questionId
END
