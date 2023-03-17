CREATE OR ALTER PROC spDeleteQuestionCommentById
    @commentId VARCHAR(255)
AS
BEGIN
    DELETE FROM QuestionComment
WHERE commentId=@commentId
END
