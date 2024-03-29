CREATE TABLE AnswerVote
(
    voteId VARCHAR(255) PRIMARY KEY ,
    userId VARCHAR(255) NOT NULL,
    answerId VARCHAR(255) NOT NULL,
    value INT NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (answerId) REFERENCES Answer(answerId) ON DELETE CASCADE,
    UNIQUE (voteId)
);
