CREATE OR ALTER PROC spDeleteUser
    @userId VARCHAR(255)
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION

        --delete dependant Answer vote record
        -- DELETE FROM AnswerVote WHERE answerId IN (SELECT answerId FROM Answer WHERE userId = @userId)
          DELETE FROM AnswerVote WHERE userId IN (SELECT userId FROM Answer WHERE userId = @userId)

        -- delete dependent QuestionVote records first
        -- DELETE FROM QuestionVote WHERE questionId IN (SELECT questionId FROM Question WHERE userId = @userId)
          DELETE FROM QuestionVote WHERE userId IN (SELECT userId FROM Question WHERE userId = @userId)

        -- delete dependent Answer records first
        DELETE FROM Answer WHERE userId = @userId

        -- delete dependent question records first
        DELETE FROM Question WHERE userId = @userId

        -- delete the user record
        DELETE FROM Users WHERE userId = @userId

        COMMIT TRANSACTION

        SELECT 'user records removed successfully' AS Message
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            SELECT 'Error deleting some records.' AS Message;
        -- re-throw the error
        THROW;
    END CATCH
END
