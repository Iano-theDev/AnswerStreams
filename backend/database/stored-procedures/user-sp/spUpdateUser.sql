CREATE OR ALTER PROC spUpdateUser
    @name VARCHAR(200),
    @email VARCHAR(300),
    @imageURL VARCHAR(MAX)
AS
BEGIN
    IF EXISTS(SELECT *
    FROM Users
    WHERE email=@email)
BEGIN
        UPDATE Users SET name=@name, imageURL=@imageURL
WHERE email=@email
    END

ELSE
BEGIN
        SELECT 'User  does not exist' AS Result
    END
END
