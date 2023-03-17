CREATE OR ALTER PROCEDURE spCreateNewAnswer
    @answerId VARCHAR(255),
    @body TEXT,
    @userId VARCHAR(150),
    @questionId VARCHAR(255)
AS
BEGIN
    IF EXISTS(SELECT * FROM Answer WHERE userId = @userId AND questionId = @questionId)
    BEGIN
        SELECT 'You have already answered this question.' AS Message;
    END
    ELSE
    BEGIN
        INSERT INTO Answer
            (answerId, body, userId, questionId)
        VALUES(@answerId, @body, @userId, @questionId);
        SELECT 'Answer added successfully.' AS Message;
    END
END
