CREATE OR ALTER PROC spGetAnswerVoteId(
    @answerId VARCHAR(255),
    @userId VARCHAR(255)
)
AS
BEGIN
    SELECT voteId FROM AnswerVote
    WHERE answerId = @answerId
    AND userId = @userId
END
