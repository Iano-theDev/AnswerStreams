CREATE OR ALTER PROC spUpdateUser
    @name VARCHAR(200),
    @email VARCHAR(300),
    @occupation VARCHAR(255),
    @imageURL VARCHAR(MAX)
AS
BEGIN
    IF EXISTS(SELECT *
    FROM Users
    WHERE email=@email)
BEGIN
        UPDATE Users SET name=@name, imageURL=@imageURL, occupation = @ocupation
        WHERE email=@email

        SELECT * FROM Users WHERE UserId = @userId

    END
ELSE
BEGIN
        SELECT 'User  does not exist' AS Result
    END
END
