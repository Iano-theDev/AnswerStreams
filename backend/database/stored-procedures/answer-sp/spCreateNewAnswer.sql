CREATE OR ALTER PROCEDURE spCreateNewAnswer
    @answerId VARCHAR(255),
    @body TEXT,
    @userId VARCHAR(150),
    @questionId VARCHAR(255)
AS
BEGIN
    INSERT INTO Question
        (answerId, body, userId, questionId)
    VALUES(@answerId, @body, @userId, @questionId)
END