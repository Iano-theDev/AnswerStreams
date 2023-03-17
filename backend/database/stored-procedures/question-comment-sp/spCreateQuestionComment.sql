CREATE OR ALTER PROC spCreateQuestionComment
    @commentId VARCHAR(255),
    @body TEXT,
    @userId VARCHAR(255),
    @questionId VARCHAR(255)
AS
BEGIN
    INSERT INTO QuestionComment
        (commentId, body, userId, questionId)
    VALUES(@commentId, @body, @userId, @questionId)
END
