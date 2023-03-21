CREATE OR ALTER PROCEDURE spCreateNewUser
    @userId VARCHAR(255),
    @name VARCHAR(200),
    @email VARCHAR(300),
    @password VARCHAR(150)
AS
BEGIN
    INSERT INTO Users
        (userId, name, email, password)
    VALUES(@userId, @name, @email, @password)
    SELECT * FROM Users 
    WHERE userId =@userId
END
