CREATE OR ALTER PROC spDeleteQuestionById
    @questionId VARCHAR(255)
AS
BEGIN

    delete from QuestionVote where questionId = @questionId

    delete from Answer where questionId = @questionId

    DELETE FROM Question
WHERE questionId=@questionId
END