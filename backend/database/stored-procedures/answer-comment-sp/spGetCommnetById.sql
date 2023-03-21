CREATE OR ALTER PROC spGetAnswerCommentById
    @commentId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM AnswerComment
    WHERE commentId=@commentId
END