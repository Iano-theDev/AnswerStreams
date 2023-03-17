CREATE TABLE Users
(
    userId VARCHAR(255) PRIMARY KEY,
    name VARCHAR(200) ,
    Email VARCHAR(300) UNIQUE,
    password VARCHAR(150),
    Role VARCHAR(50) DEFAULT 'user',
    imageURL VARCHAR(MAX) NULL,
    online BIT NOT NULL DEFAULT 0,
    createdAt DATETIME NOT NULL DEFAULT GETDATE()
)
