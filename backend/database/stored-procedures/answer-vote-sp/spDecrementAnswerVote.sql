CREATE OR ALTER PROCEDURE spDecrementAnswerVote
    @voteId VARCHAR(255),
    @userId VARCHAR(255),
    @answerId VARCHAR(255)
AS
BEGIN
    IF EXISTS (
        SELECT 1 FROM AnswerVote WHERE userId = @userId AND answerId = @answerId
    )
    BEGIN
        UPDATE AnswerVote
        SET value = -1
        WHERE voteId = @voteId AND userId = @userId AND answerId = @answerId;
    END
    ELSE
    BEGIN
        INSERT INTO AnswerVote(voteId, userId, answerId, value)
        VALUES(@voteId, @userId, @answerId, -1);
    END
END
