CREATE OR ALTER PROC spGetAnswerByUserId
    @userId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM Answer
    WHERE userId=@userId
END
