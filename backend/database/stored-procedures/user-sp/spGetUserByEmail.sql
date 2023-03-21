CREATE OR ALTER PROC spGetUserByEmail
    @email VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM Users
    WHERE Email=@email
END
