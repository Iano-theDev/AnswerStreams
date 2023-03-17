CREATE OR ALTER PROC spGetUserByUserId
    @userId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM Users
    WHERE userId=@userId
END
