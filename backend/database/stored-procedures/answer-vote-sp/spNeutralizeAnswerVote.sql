CREATE PROCEDURE spNeutralizeAnswerVote
    @voteId VARCHAR(255)
AS
BEGIN
    UPDATE AnswerVote
    SET value = 0
    WHERE value IN (1, -1) AND voteId = @voteId;
END;