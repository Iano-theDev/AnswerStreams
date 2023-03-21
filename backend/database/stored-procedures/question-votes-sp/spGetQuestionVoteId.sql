CREATE OR ALTER PROC spGetQuestionVoteId(
    @questionId VARCHAR(255),
    @userId VARCHAR(255)
)
AS
BEGIN
    SELECT voteId FROM QuestionVote
    WHERE questionId = @questionId
    AND userId = @userId
END
