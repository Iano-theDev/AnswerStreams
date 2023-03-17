CREATE TABLE QuestionComment
(
    commentId VARCHAR(255) PRIMARY KEY,
    body TEXT NOT NULL,
    userId VARCHAR(255) NOT NULL,
    questionId VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (questionId) REFERENCES Question(questionId) ON DELETE CASCADE
);
