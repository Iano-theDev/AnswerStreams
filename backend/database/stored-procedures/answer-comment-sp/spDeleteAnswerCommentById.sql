CREATE OR ALTER PROC spAnswerQuestionCommentById
    @commentId VARCHAR(255)
AS
BEGIN
    DELETE FROM AnswerComment
WHERE commentId=@commentId
END
