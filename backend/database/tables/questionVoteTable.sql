CREATE TABLE QuestionVote
(
    voteId VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) NOT NULL,
    questionId VARCHAR(255) NOT NULL,
    value INT NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (userId) REFERENCES Users(userId) ,
    FOREIGN KEY (questionId) REFERENCES Question(questionId) ON DELETE CASCADE,
    UNIQUE (voteId)
);
