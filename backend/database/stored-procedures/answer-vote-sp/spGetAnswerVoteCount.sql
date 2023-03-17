CREATE OR ALTER PROC spGetAnswerVoteCount
    @answerId VARCHAR(255)
AS
BEGIN
    DECLARE @voteCount INT

    SELECT @voteCount = SUM(value) FROM AnswerVote
    WHERE answerId = @answerId

    SELECT @answerId AS answerId, @voteCount AS VoteCount
END
