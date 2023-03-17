CREATE OR ALTER PROC spDeleteAnswerById
    @answerId VARCHAR(255)
AS
BEGIN
    DELETE FROM Answer
WHERE answerId=@answerId
END
