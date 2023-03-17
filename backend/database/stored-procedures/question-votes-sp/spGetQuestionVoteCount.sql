CREATE OR ALTER PROC spGetQuestionVoteCount
    @questionId VARCHAR(255)
AS
BEGIN
    DECLARE @voteCount INT

    SELECT @voteCount = SUM(value) FROM QuestionVote
    WHERE questionId = @questionId

    SELECT @questionId AS QuestionId, @voteCount AS VoteCount
END