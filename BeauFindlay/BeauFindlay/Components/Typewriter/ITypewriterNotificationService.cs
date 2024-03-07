namespace BeauFindlay.Components.Typewriter;

public interface ITypewriterNotificationService
{
    event EventHandler<TypingCompletedEventArgs>? TypingCompleted;
    void NotifyTypingCompleted(TypingCompletedEventArgs args);
}