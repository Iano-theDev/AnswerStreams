CREATE OR ALTER PROC spGetQuestionByUserId
    @userId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM Question
    WHERE userId=@userId
END
