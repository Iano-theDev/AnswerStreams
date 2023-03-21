CREATE OR ALTER PROC spGetQuestionCommentById
    @commentId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM QuestionComment
    WHERE commentId=@commentId
END