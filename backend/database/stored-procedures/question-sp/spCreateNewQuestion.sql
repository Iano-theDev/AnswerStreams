CREATE OR ALTER PROCEDURE spCreateNewQuestion
    @questionId VARCHAR(255),
    @title VARCHAR(MAX),
    @body TEXT,
    @userId VARCHAR(150)
AS
BEGIN
    INSERT INTO Question
        (questionId, title, body, userId)
    VALUES(@questionId, @title, @body, @userId)
END