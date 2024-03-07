namespace BeauFindlay.Features.Typewriter;

public interface ITypewriterNotificationService
{
    event EventHandler<TypingCompletedEventArgs>? TypingCompleted;
    void NotifyTypingCompleted(TypingCompletedEventArgs args);
}