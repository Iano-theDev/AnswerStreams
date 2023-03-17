CREATE OR ALTER PROC spGetCommentByAnswerId
    @answerId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM AnswerComment
    WHERE answerId=@answerId
END
