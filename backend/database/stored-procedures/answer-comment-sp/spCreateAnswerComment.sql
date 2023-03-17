CREATE OR ALTER PROC spCreateAnswerComment
    @commentId VARCHAR(255),
    @body TEXT,
    @userId VARCHAR(255),
    @answerId VARCHAR(255)
AS
BEGIN
    INSERT INTO AnswerComment
        (commentId, body, userId, answerId)
    VALUES(@commentId, @body, @userId, @answerId)
END
