CREATE OR ALTER PROC spUpdateQuestion
    @questionId VARCHAR(255),
    @title VARCHAR(MAX),
    @body TEXT
AS
BEGIN
    IF EXISTS(SELECT *
    FROM Question
    WHERE questionId=@questionId)
BEGIN
        UPDATE Question SET title=@title, body=@body
WHERE questionId=@questionId
    END

ELSE
BEGIN
        SELECT 'question does not exist' AS Result
    END
END
