CREATE OR ALTER PROCEDURE spDecrementQuestionVote
    @voteId VARCHAR(255),
    @userId VARCHAR(255),
    @questionId VARCHAR(255)
AS
BEGIN
    IF EXISTS (
        SELECT 1 FROM QuestionVote WHERE userId = @userId AND questionId = @questionId
    )
    BEGIN
        UPDATE QuestionVote
        SET value = -1
        WHERE voteId = @voteId AND userId = @userId AND questionId = @questionId;
    END
    ELSE
    BEGIN
        INSERT INTO QuestionVote(voteId, userId, questionId, value)
        VALUES(@voteId, @userId, @questionId, -1);
    END
END


