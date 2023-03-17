CREATE PROCEDURE spNeutralizeQuestionVote
    @voteId VARCHAR(255)
AS
BEGIN
    UPDATE QuestionVote
    SET value = 0
    WHERE value IN (1, -1) AND voteId = @voteId;
END;

