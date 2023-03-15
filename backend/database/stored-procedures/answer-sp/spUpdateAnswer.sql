CREATE OR ALTER PROCEDURE spUpdateAnswer
    @answerId VARCHAR(255),
    @body TEXT
AS
BEGIN
    IF EXISTS(SELECT *
    FROM Answer
    WHERE answerId=@answerId)
BEGIN
        UPDATE Answer SET body=@body
WHERE answerId=@answerId
    END

ELSE
BEGIN
        SELECT 'question does not exist' AS Result
    END
END